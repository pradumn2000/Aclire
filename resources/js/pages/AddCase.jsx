import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useCases } from "../src/hooks/useCases";

// Inside AddCase(), add this line near the other hooks:
const { addCase } = useCases();
// ── Mock data (swap with API calls when ready) ──────────────
const MOCK_CLIENTS = [
  { id: 1, name: "Gaurav Technologies Pvt Ltd",  billingDefault: "postpaid_client" },
  { id: 2, name: "Deloitte India Pvt Ltd",        billingDefault: "prepaid_client" },
  { id: 3, name: "Wipro Limited",                 billingDefault: "prepaid_candidate" },
  { id: 4, name: "Infosys BPM",                   billingDefault: "postpaid_client" },
];

const CHECK_RATES = {
  employment: 350, education: 280, address: 180,
  database: 120,  criminal: 220,  drug: 400, court: 160,
};

const CHECK_TYPES = [
  { key: "employment", label: "Employment" },
  { key: "education",  label: "Education"  },
  { key: "address",    label: "Address"    },
  { key: "database",   label: "Database"   },
  { key: "criminal",   label: "Criminal"   },
  { key: "drug",       label: "Drug Test"  },
  { key: "court",      label: "Courtroom"  },
];

// Billing modes
const BILLING_MODES = [
  {
    key:   "prepaid_client",
    label: "Prepaid — Client",
    desc:  "Client pays upfront. Case created immediately.",
    color: "#2b3b8c",
  },
  {
    key:   "prepaid_candidate",
    label: "Prepaid — Candidate",
    desc:  "Candidate pays via payment link before or after docs.",
    color: "#0d9488",
  },
  {
    key:   "postpaid_client",
    label: "Postpaid — Client",
    desc:  "Case created now. Client invoiced at month end.",
    color: "#7c3aed",
  },
];

const EMPTY_FORM = {
  candidateName:   "",
  candidateEmail:  "",
  candidateMobile: "",
  position:        "",
  clientId:        "",
  priority:        "normal",
  billingMode:     "",
  checks:          [],
  notes:           "",
  // prepaid-candidate extras
  paymentTiming:   "before",   // "before" | "after"
  paymentLinkSent: false,
  // postpaid extras
  invoiceCycle:    "monthly",  // "monthly" | "per_case"
  poNumber:        "",
};

export default function AddCase() {
  const navigate = useNavigate();
  const [form, setForm]         = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [caseId, setCaseId]     = useState(null);
  const [generatedLink, setGeneratedLink] = useState("");
  const [linkCopied, setLinkCopied]       = useState(false);

  // ── Helpers ──────────────────────────────────────────────
  const set = (field, value) => setForm(p => ({ ...p, [field]: value }));

  const toggleCheck = (key) =>
    setForm(p => ({
      ...p,
      checks: p.checks.includes(key)
        ? p.checks.filter(c => c !== key)
        : [...p.checks, key],
    }));

  const selectAll  = () => setForm(p => ({ ...p, checks: CHECK_TYPES.map(c => c.key) }));
  const clearAll   = () => setForm(p => ({ ...p, checks: [] }));

  const totalAmount = form.checks.reduce((s, k) => s + (CHECK_RATES[k] || 0), 0);

  const handleClientChange = (clientId) => {
    const client = MOCK_CLIENTS.find(c => String(c.id) === clientId);
    set("clientId", clientId);
    if (client) set("billingMode", client.billingDefault);
  };

  const generatePaymentLink = () => {
    const fake = `https://pay.bgvportal.in/c/${Math.random().toString(36).slice(2, 10)}`;
    setGeneratedLink(fake);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  // ── Validation ───────────────────────────────────────────
  const validate = () => {
    if (!form.candidateName.trim())  return "Candidate name is required.";
    if (!form.candidateEmail.trim()) return "Candidate email is required.";
    if (!form.clientId)              return "Please select a client.";
    if (!form.billingMode)           return "Please select a billing mode.";
    if (form.checks.length === 0)    return "Select at least one check type.";
    return null;
  };

  // ── Submit ───────────────────────────────────────────────
//   const handleSubmit = async () => {
//     const err = validate();
//     if (err) { alert(err); return; }
//     setLoading(true);
//     await new Promise(r => setTimeout(r, 900));
//     const fakeCaseId = `BGV-${Math.floor(2500 + Math.random() * 500)}`;
//     setCaseId(fakeCaseId);
//     setLoading(false);
//     setSubmitted(true);
//   };
// At the top of AddCase.jsx, add this import:


// Replace the existing handleSubmit with this:
const handleSubmit = async () => {
  const err = validate();
  if (err) { alert(err); return; }
  setLoading(true);
  await new Promise(r => setTimeout(r, 900));

  const fakeCaseId = `BGV-${Math.floor(2500 + Math.random() * 500)}`;

  const selectedClient = MOCK_CLIENTS.find(c => String(c.id) === String(form.clientId));
  const checksLabel = form.checks
    .map(k => CHECK_TYPES.find(t => t.key === k)?.label?.slice(0, 3))
    .join("·");

  // Build the case object that AllCases + Dashboard expect
  addCase({
    id:        fakeCaseId,
    candidate: form.candidateName,
    email:     form.candidateEmail,
    mobile:    form.candidateMobile,
    position:  form.position,
    client:    selectedClient?.name || "—",
    clientId:  form.clientId,
    checks:    checksLabel,
    checkKeys: form.checks,
    status:    "pending",
    label:     "Pending",
    billingMode: form.billingMode,
    invoiceCycle: form.invoiceCycle,
    poNumber:  form.poNumber,
    amount:    totalAmount,
    notes:     form.notes,
    priority:  form.priority,
    tat:       "0d",
    createdAt: new Date().toISOString(),
  });

  setCaseId(fakeCaseId);
  setLoading(false);
  setSubmitted(true);
};

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setSubmitted(false);
    setCaseId(null);
    setGeneratedLink("");
  };

  const activeBilling = BILLING_MODES.find(b => b.key === form.billingMode);

  // ── Success Screen ───────────────────────────────────────
  if (submitted) {
    return (
      <>
        <Sidebar />
        <section id="content">
          <Header />
          <main>
            <div className="dash-wrper">
              <div className="ac-success-wrap">
                <div className="ac-success-card">
                  <div className="ac-success-icon">✓</div>
                  <h2 className="ac-success-title">Case Created</h2>
                  <p className="ac-success-id">{caseId}</p>

                  <div className="ac-success-meta">
                    <div className="ac-success-meta-row">
                      <span>Candidate</span><strong>{form.candidateName}</strong>
                    </div>
                    <div className="ac-success-meta-row">
                      <span>Billing</span>
                      <strong style={{ color: activeBilling?.color }}>
                        {activeBilling?.label}
                      </strong>
                    </div>
                    {form.billingMode === "postpaid_client" && (
                      <div className="ac-success-meta-row">
                        <span>Invoice Cycle</span>
                        <strong>{form.invoiceCycle === "monthly" ? "Monthly" : "Per Case"}</strong>
                      </div>
                    )}
                    <div className="ac-success-meta-row">
                      <span>Amount</span><strong>₹{totalAmount.toLocaleString()}</strong>
                    </div>
                  </div>

                  <div className="ac-success-checks">
                    {form.checks.map(c => (
                      <span key={c} className="ac-check-badge">
                        {CHECK_TYPES.find(t => t.key === c)?.label}
                      </span>
                    ))}
                  </div>

                  {form.billingMode === "prepaid_candidate" && (
                    <div className="ac-success-link-box">
                      <p className="ac-success-link-label">Payment Link</p>
                      <p className="ac-success-link-url">
                        {generatedLink || "— not generated —"}
                      </p>
                    </div>
                  )}

                  <div className="ac-success-actions">
                    <button className="primary-cta" onClick={() => navigate("/AllCases")}>
                      View All Cases
                    </button>
                    <button className="secondary-cta import" onClick={handleReset}>
                      Add Another
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
        <style>{sharedStyles}</style>
      </>
    );
  }

  // ── Main Form ────────────────────────────────────────────
  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* Title row */}
            <div className="dash-upper-head">
              <div className="left">
                <h2 className="ac-page-title">Add New Case</h2>
              </div>
              <div className="right">
                <button className="secondary-cta import" onClick={() => navigate("/AllCases")}>
                  ← All Cases
                </button>
              </div>
            </div>

            <div className="ac-layout">

              {/* ══ LEFT COLUMN ══════════════════════════════ */}
              <div className="ac-left">

                {/* 01 — Candidate Info */}
                <div className="ac-card">
                  <div className="ac-card-header">
                    <span className="ac-num">01</span>
                    <h3>Candidate Information</h3>
                  </div>
                  <div className="ac-fields">
                    <div className="ac-field">
                      <label className="ac-label">Candidate Name <span className="ac-req">*</span></label>
                      <input className="ac-input" type="text" placeholder="Full name as per documents"
                        value={form.candidateName} onChange={e => set("candidateName", e.target.value)} />
                    </div>
                    <div className="ac-field">
                      <label className="ac-label">Email Address <span className="ac-req">*</span></label>
                      <input className="ac-input" type="email" placeholder="candidate@email.com"
                        value={form.candidateEmail} onChange={e => set("candidateEmail", e.target.value)} />
                    </div>
                    <div className="ac-field">
                      <label className="ac-label">Mobile Number</label>
                      <input className="ac-input" type="tel" placeholder="+91 XXXXX XXXXX"
                        value={form.candidateMobile} onChange={e => set("candidateMobile", e.target.value)} />
                    </div>
                    <div className="ac-field">
                      <label className="ac-label">Position Applied For</label>
                      <input className="ac-input" type="text" placeholder="e.g. Senior Engineer"
                        value={form.position} onChange={e => set("position", e.target.value)} />
                    </div>
                    <div className="ac-field">
                      <label className="ac-label">Client <span className="ac-req">*</span></label>
                      <select className="ac-input ac-select" value={form.clientId}
                        onChange={e => handleClientChange(e.target.value)}>
                        <option value="">— Select Client —</option>
                        {MOCK_CLIENTS.map(c => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="ac-field">
                      <label className="ac-label">Priority</label>
                      <div className="ac-priority-row">
                        {["normal", "high", "urgent"].map(p => (
                          <button key={p} type="button"
                            className={`ac-priority-btn ${form.priority === p ? `ac-pri-active-${p}` : ""}`}
                            onClick={() => set("priority", p)}>
                            {p === "urgent" ? "🔴 " : p === "high" ? "🟡 " : "🟢 "}
                            {p.charAt(0).toUpperCase() + p.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 02 — Billing Mode */}
                <div className="ac-card">
                  <div className="ac-card-header">
                    <span className="ac-num">02</span>
                    <h3>Billing Mode <span className="ac-req">*</span></h3>
                    {form.clientId && (
                      <span className="ac-billing-hint">Auto-set from client · override below</span>
                    )}
                  </div>

                  <div className="ac-billing-grid">
                    {BILLING_MODES.map(mode => {
                      const active = form.billingMode === mode.key;
                      return (
                        <button key={mode.key} type="button"
                          className={`ac-billing-tile ${active ? "ac-billing-active" : ""}`}
                          style={active ? {
                            borderColor: mode.color,
                            background: `${mode.color}10`,
                          } : {}}
                          onClick={() => set("billingMode", mode.key)}>
                          <div className="ac-billing-tile-top">
                            <span className="ac-billing-dot"
                              style={{ background: active ? mode.color : "#cbd5e1" }} />
                            <span className="ac-billing-label"
                              style={active ? { color: mode.color } : {}}>
                              {mode.label}
                            </span>
                          </div>
                          <p className="ac-billing-desc">{mode.desc}</p>
                        </button>
                      );
                    })}
                  </div>

                  {/* ── Prepaid Client: nothing extra needed ── */}
                  {form.billingMode === "prepaid_client" && (
                    <div className="ac-billing-section prepaid-client-section">
                      <div className="ac-billing-info-row">
                        <span className="ac-billing-info-icon">ℹ</span>
                        <span>Client has prepaid. Case will be created and deducted from their balance immediately.</span>
                      </div>
                    </div>
                  )}

                  {/* ── Prepaid Candidate: payment link ── */}
                  {form.billingMode === "prepaid_candidate" && (
                    <div className="ac-billing-section prepaid-candidate-section">
                      <div className="ac-field">
                        <label className="ac-label">When does candidate pay?</label>
                        <div className="ac-timing-row">
                          {[
                            { key: "before", label: "Before submitting docs" },
                            { key: "after",  label: "After submitting docs"  },
                          ].map(t => (
                            <button key={t.key} type="button"
                              className={`ac-timing-btn ${form.paymentTiming === t.key ? "ac-timing-active" : ""}`}
                              onClick={() => set("paymentTiming", t.key)}>
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="ac-field">
                        <label className="ac-label">Payment Amount</label>
                        <div className="ac-amount-display">
                          ₹{totalAmount > 0 ? totalAmount.toLocaleString() : "—"}
                          <span className="ac-amount-note">
                            {form.checks.length > 0
                              ? `(${form.checks.length} checks selected)`
                              : "Select checks to calculate"}
                          </span>
                        </div>
                      </div>

                      <div className="ac-field">
                        <label className="ac-label">Payment Link</label>
                        {!generatedLink ? (
                          <button type="button" className="ac-gen-link-btn"
                            onClick={generatePaymentLink}>
                            Generate Payment Link
                          </button>
                        ) : (
                          <div className="ac-link-row">
                            <span className="ac-link-url">{generatedLink}</span>
                            <button type="button" className="ac-copy-btn" onClick={copyLink}>
                              {linkCopied ? "Copied ✓" : "Copy"}
                            </button>
                          </div>
                        )}
                        {generatedLink && (
                          <div className="ac-link-send-row">
                            <button type="button" className="ac-send-btn ac-send-sms">📱 SMS</button>
                            <button type="button" className="ac-send-btn ac-send-email">✉ Email</button>
                            <button type="button" className="ac-send-btn ac-send-wa">💬 WhatsApp</button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ── Postpaid Client: invoice settings ── */}
                  {form.billingMode === "postpaid_client" && (
                    <div className="ac-billing-section postpaid-section">
                      <div className="ac-field">
                        <label className="ac-label">Invoice Cycle</label>
                        <div className="ac-timing-row">
                          {[
                            { key: "monthly",  label: "Monthly Invoice" },
                            { key: "per_case", label: "Per Case Invoice" },
                          ].map(t => (
                            <button key={t.key} type="button"
                              className={`ac-timing-btn ${form.invoiceCycle === t.key ? "ac-timing-active" : ""}`}
                              onClick={() => set("invoiceCycle", t.key)}>
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="ac-field">
                        <label className="ac-label">PO Number <span className="ac-optional">(optional)</span></label>
                        <input className="ac-input" type="text" placeholder="e.g. PO-2024-0391"
                          value={form.poNumber} onChange={e => set("poNumber", e.target.value)} />
                      </div>
                      <div className="ac-billing-info-row">
                        <span className="ac-billing-info-icon">ℹ</span>
                        <span>
                          Invoice of <strong>₹{totalAmount > 0 ? totalAmount.toLocaleString() : "—"}</strong> will be
                          raised {form.invoiceCycle === "monthly" ? "at month end" : "immediately after case closure"}.
                        </span>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* ══ RIGHT COLUMN ═════════════════════════════ */}
              <div className="ac-right">

                {/* 03 — Check Types */}
                <div className="ac-card">
                  <div className="ac-card-header">
                    <span className="ac-num">03</span>
                    <h3>Check Types <span className="ac-req">*</span></h3>
                    <div className="ac-check-ctrl">
                      <button type="button" className="ac-link-btn" onClick={selectAll}>All</button>
                      <span>·</span>
                      <button type="button" className="ac-link-btn" onClick={clearAll}>Clear</button>
                    </div>
                  </div>

                  <div className="ac-checks-grid">
                    {CHECK_TYPES.map(ct => {
                      const active = form.checks.includes(ct.key);
                      return (
                        <button key={ct.key} type="button"
                          className={`ac-check-tile ${active ? "ac-check-active" : ""}`}
                          onClick={() => toggleCheck(ct.key)}>
                          <div className="ac-check-tile-top">
                            <span className="ac-check-dot" />
                            <span>{ct.label}</span>
                          </div>
                          <span className="ac-check-rate">₹{CHECK_RATES[ct.key]}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="ac-amount-bar">
                    <span>{form.checks.length} of {CHECK_TYPES.length} selected</span>
                    <span className="ac-total-amt">Total: ₹{totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* 04 — Notes */}
                <div className="ac-card">
                  <div className="ac-card-header">
                    <span className="ac-num">04</span>
                    <h3>Internal Notes</h3>
                  </div>
                  <textarea className="ac-textarea" rows={4}
                    placeholder="Special instructions for the verifier team..."
                    value={form.notes} onChange={e => set("notes", e.target.value)} />
                </div>

                {/* Summary strip */}
                {form.billingMode && form.checks.length > 0 && (
                  <div className="ac-summary-strip"
                    style={{ borderColor: activeBilling?.color, background: `${activeBilling?.color}0d` }}>
                    <div className="ac-summary-row">
                      <span>Billing</span>
                      <strong style={{ color: activeBilling?.color }}>{activeBilling?.label}</strong>
                    </div>
                    <div className="ac-summary-row">
                      <span>Checks</span>
                      <strong>{form.checks.length} selected</strong>
                    </div>
                    <div className="ac-summary-row">
                      <span>Amount</span>
                      <strong>₹{totalAmount.toLocaleString()}</strong>
                    </div>
                    {form.billingMode === "prepaid_candidate" && (
                      <div className="ac-summary-row">
                        <span>Payment</span>
                        <strong>{form.paymentTiming === "before" ? "Before docs" : "After docs"}</strong>
                      </div>
                    )}
                    {form.billingMode === "postpaid_client" && form.invoiceCycle && (
                      <div className="ac-summary-row">
                        <span>Invoice</span>
                        <strong>{form.invoiceCycle === "monthly" ? "Monthly" : "Per Case"}</strong>
                      </div>
                    )}
                  </div>
                )}

                {/* Submit */}
                <button className="primary-cta ac-submit-btn"
                  onClick={handleSubmit} disabled={loading}>
                  {loading ? "Creating Case..." : "Create Case →"}
                </button>

              </div>
            </div>
          </div>
        </main>
      </section>
      <style>{sharedStyles}</style>
    </>
  );
}

// ── Styles ───────────────────────────────────────────────────
const sharedStyles = `
  .ac-page-title {
    font-size: 1.25rem; font-weight: 700; color: #2b3b8c; margin: 0;
  }
  .ac-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
  }
  @media (max-width: 960px) { .ac-layout { grid-template-columns: 1fr; } }

  .ac-left, .ac-right { display: flex; flex-direction: column; gap: 20px; }

  /* Card */
  .ac-card {
    background: #fff;
    border: 1px solid #e8ecf4;
    border-radius: 12px;
    padding: 22px;
  }
  .ac-card-header {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 18px; padding-bottom: 14px;
    border-bottom: 2px solid #f0f2f8;
    flex-wrap: wrap;
  }
  .ac-card-header h3 {
    font-size: 0.82rem; font-weight: 700; color: #2b3b8c;
    letter-spacing: 0.06em; text-transform: uppercase; margin: 0; flex: 1;
  }
  .ac-num {
    background: #2b3b8c; color: #fff; font-size: 0.68rem; font-weight: 800;
    width: 22px; height: 22px; border-radius: 5px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .ac-billing-hint {
    font-size: 0.7rem; color: #94a3b8; font-style: italic;
  }

  /* Fields */
  .ac-fields { display: flex; flex-direction: column; gap: 14px; }
  .ac-field  { display: flex; flex-direction: column; gap: 5px; }
  .ac-label  { font-size: 0.78rem; font-weight: 600; color: #475569; }
  .ac-req    { color: #eb4d4b; margin-left: 2px; }
  .ac-optional { color: #94a3b8; font-weight: 400; }
  .ac-input {
    width: 100%; padding: 10px 13px;
    border: 1.5px solid #e2e8f0; border-radius: 8px;
    font-size: 0.875rem; color: #1e293b; background: #f8fafc;
    outline: none; transition: border-color 0.18s; box-sizing: border-box;
  }
  .ac-input:focus { border-color: #2b3b8c; background: #fff; }
  .ac-select {
    appearance: none; cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%232b3b8c' stroke-width='2' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 12px center; padding-right: 36px;
  }

  /* Priority */
  .ac-priority-row { display: flex; gap: 8px; }
  .ac-priority-btn {
    flex: 1; padding: 8px 4px; border: 1.5px solid #e2e8f0; border-radius: 8px;
    background: #f8fafc; font-size: 0.75rem; font-weight: 600; color: #64748b;
    cursor: pointer; transition: all 0.15s;
  }
  .ac-pri-active-normal { border-color: #2b3b8c; background: #eef1fb; color: #2b3b8c; }
  .ac-pri-active-high   { border-color: #f59e0b; background: #fffbeb; color: #b45309; }
  .ac-pri-active-urgent { border-color: #eb4d4b; background: #fff5f5; color: #eb4d4b; }

  /* Billing tiles */
  .ac-billing-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
    margin-bottom: 16px;
  }
  @media (max-width: 700px) { .ac-billing-grid { grid-template-columns: 1fr; } }

  .ac-billing-tile {
    padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 10px;
    background: #f8fafc; cursor: pointer; text-align: left;
    transition: all 0.18s;
  }
  .ac-billing-active { box-shadow: 0 0 0 2px currentColor; }
  .ac-billing-tile-top { display: flex; align-items: center; gap: 7px; margin-bottom: 5px; }
  .ac-billing-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .ac-billing-label { font-size: 0.78rem; font-weight: 700; color: #334155; }
  .ac-billing-desc  { font-size: 0.7rem; color: #94a3b8; margin: 0; line-height: 1.4; }

  /* Billing sections */
  .ac-billing-section {
    border-top: 1px dashed #e2e8f0; padding-top: 16px;
    display: flex; flex-direction: column; gap: 14px;
  }
  .ac-billing-info-row {
    display: flex; align-items: flex-start; gap: 8px;
    background: #f0f9ff; border: 1px solid #bae6fd;
    border-radius: 8px; padding: 10px 12px;
    font-size: 0.8rem; color: #0369a1;
  }
  .ac-billing-info-icon { font-style: normal; font-weight: 700; flex-shrink: 0; }

  /* Timing buttons */
  .ac-timing-row { display: flex; gap: 8px; }
  .ac-timing-btn {
    flex: 1; padding: 9px; border: 1.5px solid #e2e8f0; border-radius: 8px;
    background: #f8fafc; font-size: 0.78rem; font-weight: 600; color: #64748b;
    cursor: pointer; transition: all 0.15s;
  }
  .ac-timing-active { border-color: #0d9488; background: #f0fdfa; color: #0d9488; }

  /* Amount display */
  .ac-amount-display {
    background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 8px;
    padding: 10px 13px; font-size: 1rem; font-weight: 700; color: #1e293b;
    display: flex; align-items: center; gap: 8px;
  }
  .ac-amount-note { font-size: 0.72rem; font-weight: 400; color: #94a3b8; }

  /* Payment link */
  .ac-gen-link-btn {
    width: 100%; padding: 10px; border: 1.5px dashed #0d9488; border-radius: 8px;
    background: #f0fdfa; color: #0d9488; font-size: 0.82rem; font-weight: 700;
    cursor: pointer; transition: all 0.15s;
  }
  .ac-gen-link-btn:hover { background: #ccfbf1; }
  .ac-link-row {
    display: flex; align-items: center; gap: 8px;
    background: #f8fafc; border: 1.5px solid #e2e8f0;
    border-radius: 8px; padding: 8px 12px;
  }
  .ac-link-url { font-size: 0.72rem; color: #0d9488; flex: 1; word-break: break-all; }
  .ac-copy-btn {
    background: #0d9488; color: #fff; border: none; border-radius: 6px;
    padding: 5px 10px; font-size: 0.72rem; font-weight: 700; cursor: pointer;
    white-space: nowrap;
  }
  .ac-link-send-row { display: flex; gap: 8px; margin-top: 8px; }
  .ac-send-btn {
    flex: 1; padding: 7px; border-radius: 7px; border: 1.5px solid #e2e8f0;
    background: #f8fafc; font-size: 0.72rem; font-weight: 600;
    color: #475569; cursor: pointer; transition: all 0.15s;
  }
  .ac-send-sms:hover   { border-color: #0d9488; color: #0d9488; background: #f0fdfa; }
  .ac-send-email:hover { border-color: #2b3b8c; color: #2b3b8c; background: #eef1fb; }
  .ac-send-wa:hover    { border-color: #16a34a; color: #16a34a; background: #f0fdf4; }

  /* Check tiles */
  .ac-check-ctrl { display: flex; gap: 6px; align-items: center; font-size: 0.75rem; color: #94a3b8; }
  .ac-link-btn {
    background: none; border: none; color: #2b3b8c; font-size: 0.75rem;
    font-weight: 600; cursor: pointer; padding: 0; text-decoration: underline;
  }
  .ac-checks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .ac-check-tile {
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px;
    background: #f8fafc; cursor: pointer; transition: all 0.15s;
  }
  .ac-check-tile:hover { border-color: #2b3b8c; }
  .ac-check-active { border-color: #2b3b8c; background: #eef1fb; }
  .ac-check-tile-top { display: flex; align-items: center; gap: 7px; font-size: 0.8rem; font-weight: 600; color: #334155; }
  .ac-check-active .ac-check-tile-top { color: #2b3b8c; }
  .ac-check-dot {
    width: 8px; height: 8px; border-radius: 50%;
    border: 2px solid #cbd5e1; flex-shrink: 0;
  }
  .ac-check-active .ac-check-dot { border-color: #2b3b8c; background: #2b3b8c; }
  .ac-check-rate { font-size: 0.7rem; color: #94a3b8; font-weight: 600; }
  .ac-check-active .ac-check-rate { color: #2b3b8c; }

  .ac-amount-bar {
    display: flex; justify-content: space-between; align-items: center;
    margin-top: 12px; font-size: 0.75rem; color: #94a3b8;
  }
  .ac-total-amt { font-weight: 700; color: #2b3b8c; font-size: 0.85rem; }

  /* Textarea */
  .ac-textarea {
    width: 100%; padding: 10px 13px; border: 1.5px solid #e2e8f0; border-radius: 8px;
    font-size: 0.875rem; color: #1e293b; background: #f8fafc;
    outline: none; resize: vertical; font-family: inherit; box-sizing: border-box;
  }
  .ac-textarea:focus { border-color: #2b3b8c; background: #fff; }

  /* Summary strip */
  .ac-summary-strip {
    border: 1.5px solid; border-radius: 10px; padding: 14px 16px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .ac-summary-row {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 0.8rem; color: #64748b;
  }
  .ac-summary-row strong { font-weight: 700; color: #1e293b; }

  /* Submit */
  .ac-submit-btn { width: 100%; padding: 14px; font-size: 0.95rem; font-weight: 700; }

  /* Success */
  .ac-success-wrap {
    display: flex; align-items: center; justify-content: center; min-height: 70vh;
  }
  .ac-success-card {
    background: #fff; border: 1px solid #e8ecf4; border-radius: 16px;
    padding: 48px 40px; text-align: center; max-width: 500px; width: 100%;
  }
  .ac-success-icon {
    width: 64px; height: 64px; background: #10b981; color: #fff; border-radius: 50%;
    font-size: 2rem; display: flex; align-items: center; justify-content: center;
    margin: 0 auto 20px;
  }
  .ac-success-title { font-size: 1.5rem; font-weight: 800; color: #1e293b; margin: 0 0 8px; }
  .ac-success-id {
    font-size: 1.1rem; font-weight: 700; color: #2b3b8c;
    background: #eef1fb; display: inline-block; padding: 6px 16px;
    border-radius: 20px; margin-bottom: 20px;
  }
  .ac-success-meta {
    background: #f8fafc; border-radius: 10px; padding: 14px 18px;
    margin-bottom: 18px; display: flex; flex-direction: column; gap: 8px;
    text-align: left;
  }
  .ac-success-meta-row {
    display: flex; justify-content: space-between; font-size: 0.82rem; color: #64748b;
  }
  .ac-success-checks { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 24px; }
  .ac-check-badge {
    background: #eef1fb; color: #2b3b8c; font-size: 0.72rem; font-weight: 600;
    padding: 4px 10px; border-radius: 20px;
  }
  .ac-success-link-box {
    background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 8px;
    padding: 12px; margin-bottom: 20px;
  }
  .ac-success-link-label { font-size: 0.72rem; color: #64748b; margin: 0 0 4px; font-weight: 600; }
  .ac-success-link-url { font-size: 0.78rem; color: #0d9488; margin: 0; word-break: break-all; }
  .ac-success-actions { display: flex; gap: 12px; justify-content: center; }
`;