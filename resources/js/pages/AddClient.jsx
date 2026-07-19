// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { API_URL } from "../src/config";

// // ── Same check catalogue as AddCase.jsx, so rates/TAT stay consistent
// //    across the whole app ────────────────────────────────────────────────
// const DEFAULT_CHECK_RATES = {
//   employment: 0, education: 0, address: 0,
//   database: 0,  criminal: 0,  drug: 0, court: 0,
// };

// const DEFAULT_CHECK_TAT = {
//   employment: 0, education: 0, address: 0,
//   database: 0,  criminal: 0,  drug: 0, court: 0,
// };

// const CHECK_TYPES = [
//   { key: "employment", label: "Employment" },
//   { key: "education",  label: "Education"  },
//   { key: "address",    label: "Address"    },
//   { key: "database",   label: "Database"   },
//   { key: "criminal",   label: "Criminal"   },
//   { key: "drug",       label: "Drug Test"  },
//   { key: "court",      label: "Courtroom"  },
// ];

// const BILLING_MODES = [
//   { key: "prepaid_client",    label: "Prepaid — Client",    desc: "Client pays upfront. Case created immediately.",          color: "#2b3b8c" },
//   { key: "prepaid_candidate", label: "Prepaid — Candidate", desc: "Candidate pays via payment link before or after docs.",   color: "#0d9488" },
//   { key: "postpaid_client",   label: "Postpaid — Client",   desc: "Case created now. Client invoiced at month end.",         color: "#7c3aed" },
// ];

// function getEmptyForm() {
//   return {
//     clientName: "",
//     address: "",
//     gstin: "",
//     contactName: "",
//     contactPhone: "",
//     email: "",
//     password: "",
//     priority: "normal",
//     billingMode: "",
//     checks: [],
//     notes: "",
//   };
// }

// export default function AddClient() {
//   const navigate = useNavigate();

//   const [form, setForm]           = useState(getEmptyForm());
//   const [rates, setRates]         = useState({ ...DEFAULT_CHECK_RATES });
//   const [tats, setTats]           = useState({ ...DEFAULT_CHECK_TAT });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading]     = useState(false);
//   const [error, setError]         = useState("");
//   const [clientId, setClientId]   = useState(null);

//   const set = (field, value) => setForm(p => ({ ...p, [field]: value }));

//   const setRate = (key, value) => {
//     const num = Number(value);
//     setRates(p => ({ ...p, [key]: Number.isFinite(num) && num >= 0 ? num : 0 }));
//   };

//   const setTat = (key, value) => {
//     const num = Number(value);
//     setTats(p => ({ ...p, [key]: Number.isFinite(num) && num >= 0 ? num : 0 }));
//   };

//   const toggleCheck = (key) =>
//     setForm(p => ({
//       ...p,
//       checks: p.checks.includes(key)
//         ? p.checks.filter(c => c !== key)
//         : [...p.checks, key],
//     }));

//   const selectAll = () => setForm(p => ({ ...p, checks: CHECK_TYPES.map(c => c.key) }));
//   const clearAll  = () => setForm(p => ({ ...p, checks: [] }));

//   const totalAmount = form.checks.reduce((s, k) => s + (rates[k] || 0), 0);
//   const overallTat = form.checks.length > 0
//     ? Math.max(...form.checks.map(k => tats[k] || 0))
//     : 0;

//   const activeBilling = BILLING_MODES.find(b => b.key === form.billingMode);

//   const validate = () => {
//     if (!form.clientName.trim())   return "Client name is required.";
//     if (!form.address.trim())      return "Address is required.";
//     if (!form.gstin.trim())        return "GST number is required.";
//     if (!form.contactName.trim())  return "Contact person name is required.";
//     if (!form.contactPhone.trim()) return "Contact person number is required.";
//     if (!form.email.trim())        return "Email address is required.";
//     if (!/^\d{6}$/.test(form.password)) return "Password must be exactly 6 digits.";
//     if (!form.billingMode)         return "Please select a billing mode.";
//     if (form.checks.length === 0)  return "Select at least one check type.";
//     return null;
//   };

//   const handleSubmit = async () => {
//     const err = validate();
//     if (err) { setError(err); return; }

//     setError("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`${API_URL}/api/clients/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           companyName:    form.clientName,
//           address:        form.address,
//           gstin:          form.gstin,
//           primaryContact: form.contactName,
//           contactPhone:   form.contactPhone,
//           contactEmail:   form.email,
//           password:       form.password,
//           priority:       form.priority,
//           billingMode:    form.billingMode,
//           agreedChecks:   form.checks,
//           checkRates:     rates,
//           checkTat:       tats,
//           notes:          form.notes,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Failed to register client.");
//         return;
//       }

//       setClientId(data.user?.id ?? null);
//       setSubmitted(true);
//     } catch {
//       setError("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     setForm(getEmptyForm());
//     setRates({ ...DEFAULT_CHECK_RATES });
//     setTats({ ...DEFAULT_CHECK_TAT });
//     setSubmitted(false);
//     setClientId(null);
//     setError("");
//   };

//   // ── Success Screen ────────────────────────────────────────
//   if (submitted) {
//     return (
//       <>
//         <Sidebar />
//         <section id="content">
//           <Header />
//           <main>
//             <div className="dash-wrper">
//               <div className="ac-success-wrap">
//                 <div className="ac-success-card">
//                   <div className="ac-success-icon">✓</div>
//                   <h2 className="ac-success-title">Client Registered</h2>
//                   {clientId && <p className="ac-success-id">Client #{clientId}</p>}

//                   <div className="ac-success-meta">
//                     <div className="ac-success-meta-row">
//                       <span>Client Name</span><strong>{form.clientName}</strong>
//                     </div>
//                     <div className="ac-success-meta-row">
//                       <span>GSTIN</span><strong>{form.gstin}</strong>
//                     </div>
//                     <div className="ac-success-meta-row">
//                       <span>Contact</span><strong>{form.contactName}</strong>
//                     </div>
//                     <div className="ac-success-meta-row">
//                       <span>Billing</span>
//                       <strong style={{ color: activeBilling?.color }}>{activeBilling?.label}</strong>
//                     </div>
//                     <div className="ac-success-meta-row">
//                       <span>Estimated TAT</span>
//                       <strong>{overallTat > 0 ? `${overallTat} day${overallTat > 1 ? "s" : ""}` : "—"}</strong>
//                     </div>
//                   </div>

//                   <div className="ac-success-checks">
//                     {form.checks.map(c => (
//                       <span key={c} className="ac-check-badge">
//                         {CHECK_TYPES.find(t => t.key === c)?.label}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="ac-success-actions">
//                     <button className="primary-cta" onClick={() => navigate("/UserManagement")}>
//                       View All Clients
//                     </button>
//                     <button className="secondary-cta import" onClick={handleReset}>
//                       Add Another
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </section>
//         <style>{sharedStyles}</style>
//       </>
//     );
//   }

//   // ── Main Form ─────────────────────────────────────────────
//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">

//             <div className="dash-upper-head">
//               <div className="left">
//                 <h2 className="ac-page-title">Add Client</h2>
//               </div>
//               <div className="right">
//                 <button className="secondary-cta import" onClick={() => navigate("/UserManagement")}>
//                   ← All Clients
//                 </button>
//               </div>
//             </div>

//             {error && (
//               <div style={{
//                 background: "#fff5f5", border: "1px solid #fca5a5", borderRadius: "8px",
//                 padding: "12px 16px", color: "#dc2626", fontSize: "14px", margin: "12px 0"
//               }}>
//                 {error}
//               </div>
//             )}

//             <div className="ac-layout">

//               {/* ══ LEFT COLUMN ══ */}
//               <div className="ac-left">

//                 {/* 01 — Client Information */}
//                 <div className="ac-card">
//                   <div className="ac-card-header">
//                     <span className="ac-num">01</span>
//                     <h3>Client Information</h3>
//                   </div>
//                   <div className="ac-fields">
//                     <div className="ac-field">
//                       <label className="ac-label">Client Name <span className="ac-req">*</span></label>
//                       <input className="ac-input" type="text" placeholder="Company / Client name"
//                         value={form.clientName} onChange={e => set("clientName", e.target.value)} />
//                     </div>

//                     <div className="ac-field">
//                       <label className="ac-label">Address <span className="ac-req">*</span></label>
//                       <textarea className="ac-textarea" rows={2} placeholder="Registered office address"
//                         value={form.address} onChange={e => set("address", e.target.value)} />
//                     </div>

//                     <div className="ac-field">
//                       <label className="ac-label">GST Number <span className="ac-req">*</span></label>
//                       <input className="ac-input" type="text" placeholder="e.g. 07ABCDE1234F1Z5" maxLength={15}
//                         value={form.gstin} onChange={e => set("gstin", e.target.value.toUpperCase())} />
//                     </div>

//                     <div className="ac-field">
//                       <label className="ac-label">Contact Person Name <span className="ac-req">*</span></label>
//                       <input className="ac-input" type="text" placeholder="Full name"
//                         value={form.contactName} onChange={e => set("contactName", e.target.value)} />
//                     </div>

//                     <div className="ac-field">
//                       <label className="ac-label">Contact Person Number <span className="ac-req">*</span></label>
//                       <input className="ac-input" type="tel" placeholder="+91 XXXXX XXXXX"
//                         value={form.contactPhone}
//                         onChange={e => set("contactPhone", e.target.value.replace(/\D/g, "").slice(0, 12))} />
//                     </div>

//                     <div className="ac-field">
//                       <label className="ac-label">Email Address <span className="ac-req">*</span></label>
//                       <input className="ac-input" type="email" placeholder="client@company.com"
//                         value={form.email} onChange={e => set("email", e.target.value)} />
//                     </div>

//                     <div className="ac-field">
//                       <label className="ac-label">Password (6 digits) <span className="ac-req">*</span></label>
//                       <input className="ac-input" type="password" placeholder="••••••" maxLength={6}
//                         inputMode="numeric" pattern="[0-9]{6}"
//                         value={form.password}
//                         onChange={e => set("password", e.target.value.replace(/\D/g, "").slice(0, 6))} />
//                     </div>

//                     <div className="ac-field">
//                       <label className="ac-label">Priority</label>
//                       <div className="ac-priority-row">
//                         {["normal", "high", "urgent"].map(p => (
//                           <button key={p} type="button"
//                             className={`ac-priority-btn ${form.priority === p ? `ac-pri-active-${p}` : ""}`}
//                             onClick={() => set("priority", p)}>
//                             {p === "urgent" ? "🔴 " : p === "high" ? "🟡 " : "🟢 "}
//                             {p.charAt(0).toUpperCase() + p.slice(1)}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* 02 — Billing Mode */}
//                 <div className="ac-card">
//                   <div className="ac-card-header">
//                     <span className="ac-num">02</span>
//                     <h3>Billing Mode <span className="ac-req">*</span></h3>
//                   </div>

//                   <div className="ac-billing-grid">
//                     {BILLING_MODES.map(mode => {
//                       const active = form.billingMode === mode.key;
//                       return (
//                         <button key={mode.key} type="button"
//                           className={`ac-billing-tile ${active ? "ac-billing-active" : ""}`}
//                           style={active ? { borderColor: mode.color, background: `${mode.color}10` } : {}}
//                           onClick={() => set("billingMode", mode.key)}>
//                           <div className="ac-billing-tile-top">
//                             <span className="ac-billing-dot"
//                               style={{ background: active ? mode.color : "#cbd5e1" }} />
//                             <span className="ac-billing-label"
//                               style={active ? { color: mode.color } : {}}>
//                               {mode.label}
//                             </span>
//                           </div>
//                           <p className="ac-billing-desc">{mode.desc}</p>
//                         </button>
//                       );
//                     })}
//                   </div>

//                   {form.billingMode === "prepaid_client" && (
//                     <div className="ac-billing-section">
//                       <div className="ac-billing-info-row">
//                         <span className="ac-billing-info-icon">ℹ</span>
//                         <span>Client will prepay a balance which future cases are deducted from.</span>
//                       </div>
//                     </div>
//                   )}

//                   {form.billingMode === "prepaid_candidate" && (
//                     <div className="ac-billing-section">
//                       <div className="ac-billing-info-row">
//                         <span className="ac-billing-info-icon">ℹ</span>
//                         <span>Candidates will pay directly via payment link for cases raised by this client.</span>
//                       </div>
//                     </div>
//                   )}

//                   {form.billingMode === "postpaid_client" && (
//                     <div className="ac-billing-section">
//                       <div className="ac-billing-info-row">
//                         <span className="ac-billing-info-icon">ℹ</span>
//                         <span>Client will be invoiced periodically for cases raised.</span>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//               </div>

//               {/* ══ RIGHT COLUMN ══ */}
//               <div className="ac-right">

//                 {/* 03 — Check Types */}
//                 <div className="ac-card">
//                   <div className="ac-card-header">
//                     <span className="ac-num">03</span>
//                     <h3>Check Types <span className="ac-req">*</span></h3>
//                     <div className="ac-check-ctrl">
//                       <button type="button" className="ac-link-btn" onClick={selectAll}>All</button>
//                       <span>·</span>
//                       <button type="button" className="ac-link-btn" onClick={clearAll}>Clear</button>
//                     </div>
//                   </div>

//                   <div className="ac-checks-grid">
//                     {CHECK_TYPES.map(ct => {
//                       const active = form.checks.includes(ct.key);
//                       return (
//                         <div
//                           key={ct.key}
//                           role="button"
//                           tabIndex={0}
//                           className={`ac-check-tile ${active ? "ac-check-active" : ""}`}
//                           onClick={() => toggleCheck(ct.key)}
//                           onKeyDown={(e) => {
//                             if (e.key === "Enter" || e.key === " ") {
//                               e.preventDefault();
//                               toggleCheck(ct.key);
//                             }
//                           }}
//                         >
//                           <div className="ac-check-tile-top">
//                             <span className="ac-check-dot" />
//                             <span>{ct.label}</span>
//                           </div>

//                           <div className="ac-check-side" onClick={(e) => e.stopPropagation()}>
//                             <div className="ac-check-rate-edit" title="Rate">
//                               <span className="ac-rate-prefix">₹</span>
//                               <input
//                                 type="number"
//                                 min="0"
//                                 className="ac-rate-input"
//                                 value={rates[ct.key]}
//                                 onClick={(e) => e.stopPropagation()}
//                                 onChange={(e) => setRate(ct.key, e.target.value)}
//                               />
//                             </div>
//                             <div className="ac-check-rate-edit" title="Turnaround time (days)">
//                               <input
//                                 type="number"
//                                 min="0"
//                                 className="ac-rate-input ac-tat-input"
//                                 value={tats[ct.key]}
//                                 onClick={(e) => e.stopPropagation()}
//                                 onChange={(e) => setTat(ct.key, e.target.value)}
//                               />
//                               <span className="ac-rate-suffix">d</span>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   <div className="ac-amount-bar">
//                     <span>{form.checks.length} of {CHECK_TYPES.length} selected</span>
//                     <span className="ac-tat-bar-item">
//                       Est. TAT: <strong>{overallTat > 0 ? `${overallTat} day${overallTat > 1 ? "s" : ""}` : "—"}</strong>
//                     </span>
//                     <span className="ac-total-amt">Total: ₹{totalAmount.toLocaleString()}</span>
//                   </div>
//                 </div>

//                 {/* 04 — Internal Notes */}
//                 <div className="ac-card">
//                   <div className="ac-card-header">
//                     <span className="ac-num">04</span>
//                     <h3>Internal Notes</h3>
//                   </div>
//                   <textarea className="ac-textarea" rows={4}
//                     placeholder="Special instructions / notes about this client..."
//                     value={form.notes} onChange={e => set("notes", e.target.value)} />
//                 </div>

//                 {/* Summary strip */}
//                 {form.billingMode && form.checks.length > 0 && (
//                   <div className="ac-summary-strip"
//                     style={{ borderColor: activeBilling?.color, background: `${activeBilling?.color}0d` }}>
//                     <div className="ac-summary-row">
//                       <span>Billing</span>
//                       <strong style={{ color: activeBilling?.color }}>{activeBilling?.label}</strong>
//                     </div>
//                     <div className="ac-summary-row">
//                       <span>Checks</span>
//                       <strong>{form.checks.length} selected</strong>
//                     </div>
//                     <div className="ac-summary-row">
//                       <span>Estimated TAT</span>
//                       <strong>{overallTat > 0 ? `${overallTat} day${overallTat > 1 ? "s" : ""}` : "—"}</strong>
//                     </div>
//                     <div className="ac-summary-row">
//                       <span>Total Rate</span>
//                       <strong>₹{totalAmount.toLocaleString()}</strong>
//                     </div>
//                   </div>
//                 )}

//                 <button className="primary-cta ac-submit-btn"
//                   onClick={handleSubmit} disabled={loading}>
//                   {loading ? "Registering Client..." : "Add Client →"}
//                 </button>

//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//       <style>{sharedStyles}</style>
//     </>
//   );
// }

// // ── Styles — identical to AddCase.jsx so the two pages match ──────────────
// const sharedStyles = `
//   .ac-page-title { font-size: 1.25rem; font-weight: 700; color: #2b3b8c; margin: 0; }
//   .ac-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 0px; }
//   @media (max-width: 960px) { .ac-layout { grid-template-columns: 1fr; } }
//   .ac-left, .ac-right { display: flex; flex-direction: column; gap: 20px; }
//   .ac-card { background: #fff; border: 1px solid #e8ecf4; border-radius: 12px; padding: 22px; }
//   .ac-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 2px solid #f0f2f8; flex-wrap: wrap; }
//   .ac-card-header h3 { font-size: 0.82rem; font-weight: 700; color: #2b3b8c; letter-spacing: 0.06em; text-transform: uppercase; margin: 0; flex: 1; }
//   .ac-num { background: #2b3b8c; color: #fff; font-size: 0.68rem; font-weight: 800; width: 22px; height: 22px; border-radius: 5px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
//   .ac-fields { display: flex; flex-direction: column; gap: 14px; }
//   .ac-field { display: flex; flex-direction: column; gap: 5px; }
//   .ac-label { font-size: 0.78rem; font-weight: 600; color: #475569; }
//   .ac-req { color: #eb4d4b; margin-left: 2px; }
//   .ac-input { width: 100%; padding: 10px 13px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; color: #1e293b; background: #f8fafc; outline: none; transition: border-color 0.18s; box-sizing: border-box; }
//   .ac-input:focus { border-color: #2b3b8c; background: #fff; }
//   .ac-priority-row { display: flex; gap: 8px; }
//   .ac-priority-btn { flex: 1; padding: 8px 4px; border: 1.5px solid #e2e8f0; border-radius: 8px; background: #f8fafc; font-size: 0.75rem; font-weight: 600; color: #64748b; cursor: pointer; transition: all 0.15s; }
//   .ac-pri-active-normal { border-color: #2b3b8c; background: #eef1fb; color: #2b3b8c; }
//   .ac-pri-active-high { border-color: #f59e0b; background: #fffbeb; color: #b45309; }
//   .ac-pri-active-urgent { border-color: #eb4d4b; background: #fff5f5; color: #eb4d4b; }
//   .ac-billing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px; }
//   @media (max-width: 700px) { .ac-billing-grid { grid-template-columns: 1fr; } }
//   .ac-billing-tile { padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 10px; background: #f8fafc; cursor: pointer; text-align: left; transition: all 0.18s; }
//   .ac-billing-active { box-shadow: 0 0 0 2px currentColor; }
//   .ac-billing-tile-top { display: flex; align-items: center; gap: 7px; margin-bottom: 5px; }
//   .ac-billing-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
//   .ac-billing-label { font-size: 0.78rem; font-weight: 700; color: #334155; }
//   .ac-billing-desc { font-size: 0.7rem; color: #94a3b8; margin: 0; line-height: 1.4; }
//   .ac-billing-section { border-top: 1px dashed #e2e8f0; padding-top: 16px; display: flex; flex-direction: column; gap: 14px; }
//   .ac-billing-info-row { display: flex; align-items: flex-start; gap: 8px; background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 10px 12px; font-size: 0.8rem; color: #0369a1; }
//   .ac-billing-info-icon { font-style: normal; font-weight: 700; flex-shrink: 0; }
//   .ac-check-ctrl { display: flex; gap: 6px; align-items: center; font-size: 0.75rem; color: #94a3b8; }
//   .ac-link-btn { background: none; border: none; color: #2b3b8c; font-size: 0.75rem; font-weight: 600; cursor: pointer; padding: 0; text-decoration: underline; }
//   .ac-checks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
//   .ac-check-tile { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px; background: #f8fafc; cursor: pointer; transition: all 0.15s; gap: 8px; }
//   .ac-check-tile:hover { border-color: #2b3b8c; }
//   .ac-check-active { border-color: #2b3b8c; background: #eef1fb; }
//   .ac-check-tile-top { display: flex; align-items: center; gap: 7px; font-size: 0.8rem; font-weight: 600; color: #334155; }
//   .ac-check-active .ac-check-tile-top { color: #2b3b8c; }
//   .ac-check-dot { width: 8px; height: 8px; border-radius: 50%; border: 2px solid #cbd5e1; flex-shrink: 0; }
//   .ac-check-active .ac-check-dot { border-color: #2b3b8c; background: #2b3b8c; }
//   .ac-check-side { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
//   .ac-check-rate-edit { display: flex; align-items: center; gap: 2px; background: #fff; border: 1.5px solid #e2e8f0; border-radius: 6px; padding: 2px 6px; flex-shrink: 0; }
//   .ac-check-rate-edit:focus-within { border-color: #2b3b8c; }
//   .ac-rate-prefix { font-size: 0.7rem; color: #94a3b8; font-weight: 700; }
//   .ac-rate-suffix { font-size: 0.7rem; color: #94a3b8; font-weight: 700; }
//   .ac-rate-input { width: 52px; border: none; outline: none; background: transparent; font-size: 0.72rem; font-weight: 700; color: #1e293b; padding: 2px 0; }
//   .ac-tat-input { width: 34px; }
//   .ac-rate-input::-webkit-inner-spin-button, .ac-rate-input::-webkit-outer-spin-button { margin: 0; }
//   .ac-amount-bar { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 0.75rem; color: #94a3b8; flex-wrap: wrap; gap: 8px; }
//   .ac-tat-bar-item strong { color: #0d9488; font-weight: 700; }
//   .ac-total-amt { font-weight: 700; color: #2b3b8c; font-size: 0.85rem; }
//   .ac-textarea { width: 100%; padding: 10px 13px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; color: #1e293b; background: #f8fafc; outline: none; resize: vertical; font-family: inherit; box-sizing: border-box; }
//   .ac-textarea:focus { border-color: #2b3b8c; background: #fff; }
//   .ac-summary-strip { border: 1.5px solid; border-radius: 10px; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; }
//   .ac-summary-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: #64748b; }
//   .ac-summary-row strong { font-weight: 700; color: #1e293b; }
//   .ac-submit-btn { width: 100%; padding: 14px; font-size: 0.95rem; font-weight: 700; }
//   .ac-success-wrap { display: flex; align-items: center; justify-content: center; min-height: 70vh; }
//   .ac-success-card { background: #fff; border: 1px solid #e8ecf4; border-radius: 16px; padding: 48px 40px; text-align: center; max-width: 500px; width: 100%; }
//   .ac-success-icon { width: 64px; height: 64px; background: #10b981; color: #fff; border-radius: 50%; font-size: 2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
//   .ac-success-title { font-size: 1.5rem; font-weight: 800; color: #1e293b; margin: 0 0 8px; }
//   .ac-success-id { font-size: 1.1rem; font-weight: 700; color: #2b3b8c; background: #eef1fb; display: inline-block; padding: 6px 16px; border-radius: 20px; margin-bottom: 20px!important; }
//   .ac-success-meta { background: #f8fafc; border-radius: 10px; padding: 14px 18px; margin-bottom: 18px; display: flex; flex-direction: column; gap: 8px; text-align: left; }
//   .ac-success-meta-row { display: flex; justify-content: space-between; font-size: 0.82rem; color: #64748b; }
//   .ac-success-checks { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 24px; }
//   .ac-check-badge { background: #eef1fb; color: #2b3b8c; font-size: 0.72rem; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
//   .ac-success-actions { display: flex; gap: 12px; justify-content: center; }
// `;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { API_URL } from "../src/config";

// ── Same check catalogue as AddCase.jsx, so rates/TAT stay consistent
//    across the whole app ────────────────────────────────────────────────
const DEFAULT_CHECK_RATES = {
  employment: 0, education: 0, address: 0,
  database: 0,  criminal: 0,  drug: 0, court: 0,
};

const DEFAULT_CHECK_TAT = {
  employment: 0, education: 0, address: 0,
  database: 0,  criminal: 0,  drug: 0, court: 0,
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

const BILLING_MODES = [
  { key: "prepaid_client",    label: "Prepaid — Client",    desc: "Client pays upfront. Case created immediately.",          color: "#2b3b8c" },
  { key: "prepaid_candidate", label: "Prepaid — Candidate", desc: "Candidate pays via payment link before or after docs.",   color: "#0d9488" },
  { key: "postpaid_client",   label: "Postpaid — Client",   desc: "Case created now. Client invoiced at month end.",         color: "#7c3aed" },
];

function getEmptyForm() {
  return {
    clientName: "",
    address: "",
    gstin: "",
    contactName: "",
    contactPhone: "",
    email: "",
    password: "",
    priority: "normal",
    billingMode: "",
    checks: [],
    notes: "",
  };
}

export default function AddClient() {
  const navigate = useNavigate();

  const [form, setForm]           = useState(getEmptyForm());
  const [rates, setRates]         = useState({ ...DEFAULT_CHECK_RATES });
  const [tats, setTats]           = useState({ ...DEFAULT_CHECK_TAT });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [clientId, setClientId]   = useState(null);

  const set = (field, value) => setForm(p => ({ ...p, [field]: value }));

  const setRate = (key, value) => {
    const num = Number(value);
    setRates(p => ({ ...p, [key]: Number.isFinite(num) && num >= 0 ? num : 0 }));
  };

  const setTat = (key, value) => {
    const num = Number(value);
    setTats(p => ({ ...p, [key]: Number.isFinite(num) && num >= 0 ? num : 0 }));
  };

  const toggleCheck = (key) =>
    setForm(p => ({
      ...p,
      checks: p.checks.includes(key)
        ? p.checks.filter(c => c !== key)
        : [...p.checks, key],
    }));

  const selectAll = () => setForm(p => ({ ...p, checks: CHECK_TYPES.map(c => c.key) }));
  const clearAll  = () => setForm(p => ({ ...p, checks: [] }));

  const totalAmount = form.checks.reduce((s, k) => s + (rates[k] || 0), 0);
  const overallTat = form.checks.length > 0
    ? Math.max(...form.checks.map(k => tats[k] || 0))
    : 0;

  const activeBilling = BILLING_MODES.find(b => b.key === form.billingMode);

  const validate = () => {
    if (!form.clientName.trim())   return "Client name is required.";
    if (!form.address.trim())      return "Address is required.";
    if (!form.gstin.trim())        return "GST number is required.";
    if (!form.contactName.trim())  return "Contact person name is required.";
    if (!form.contactPhone.trim()) return "Contact person number is required.";
    if (!form.email.trim())        return "Email address is required.";
    if (!/^\d{8}$/.test(form.password)) return "Password must be exactly 8 digits.";
    if (!form.billingMode)         return "Please select a billing mode.";
    if (form.checks.length === 0)  return "Select at least one check type.";
    return null;
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) { setError(err); return; }

    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/api/clients/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          companyName:    form.clientName,
          address:        form.address,
          gstin:          form.gstin,
          primaryContact: form.contactName,
          contactPhone:   form.contactPhone,
          contactEmail:   form.email,
          password:       form.password,
          priority:       form.priority,
          billingMode:    form.billingMode,
          agreedChecks:   form.checks,
          checkRates:     rates,
          checkTat:       tats,
          notes:          form.notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to register client.");
        return;
      }

      setClientId(data.user?.id ?? null);
      setSubmitted(true);
    } catch {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm(getEmptyForm());
    setRates({ ...DEFAULT_CHECK_RATES });
    setTats({ ...DEFAULT_CHECK_TAT });
    setSubmitted(false);
    setClientId(null);
    setError("");
  };

  // ── Success Screen ────────────────────────────────────────
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
                  <h2 className="ac-success-title">Client Registered</h2>
                  {clientId && <p className="ac-success-id">Client #{clientId}</p>}

                  <div className="ac-success-meta">
                    <div className="ac-success-meta-row">
                      <span>Client Name</span><strong>{form.clientName}</strong>
                    </div>
                    <div className="ac-success-meta-row">
                      <span>GSTIN</span><strong>{form.gstin}</strong>
                    </div>
                    <div className="ac-success-meta-row">
                      <span>Contact</span><strong>{form.contactName}</strong>
                    </div>
                    <div className="ac-success-meta-row">
                      <span>Billing</span>
                      <strong style={{ color: activeBilling?.color }}>{activeBilling?.label}</strong>
                    </div>
                    <div className="ac-success-meta-row">
                      <span>Estimated TAT</span>
                      <strong>{overallTat > 0 ? `${overallTat} day${overallTat > 1 ? "s" : ""}` : "—"}</strong>
                    </div>
                  </div>

                  <div className="ac-success-checks">
                    {form.checks.map(c => (
                      <span key={c} className="ac-check-badge">
                        {CHECK_TYPES.find(t => t.key === c)?.label}
                      </span>
                    ))}
                  </div>

                  <div className="ac-success-actions">
                    <button className="primary-cta" onClick={() => navigate("/UserManagement")}>
                      View All Clients
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

  // ── Main Form ─────────────────────────────────────────────
  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            <div className="dash-upper-head">
              <div className="left">
                <h2 className="ac-page-title">Add Client</h2>
              </div>
              <div className="right">
                <button className="secondary-cta import" onClick={() => navigate("/UserManagement")}>
                  ← All Clients
                </button>
              </div>
            </div>

            {error && (
              <div style={{
                background: "#fff5f5", border: "1px solid #fca5a5", borderRadius: "8px",
                padding: "12px 16px", color: "#dc2626", fontSize: "14px", margin: "12px 0"
              }}>
                {error}
              </div>
            )}

            <div className="ac-layout">

              {/* ══ LEFT COLUMN ══ */}
              <div className="ac-left">

                {/* 01 — Client Information */}
                <div className="ac-card">
                  <div className="ac-card-header">
                    <span className="ac-num">01</span>
                    <h3>Client Information</h3>
                  </div>
                  <div className="ac-fields">
                    <div className="ac-field">
                      <label className="ac-label">Client Name <span className="ac-req">*</span></label>
                      <input className="ac-input" type="text" placeholder="Company / Client name"
                        value={form.clientName} onChange={e => set("clientName", e.target.value)} />
                    </div>

                    <div className="ac-field">
                      <label className="ac-label">Address <span className="ac-req">*</span></label>
                      <textarea className="ac-textarea" rows={2} placeholder="Registered office address"
                        value={form.address} onChange={e => set("address", e.target.value)} />
                    </div>

                    <div className="ac-field">
                      <label className="ac-label">GST Number <span className="ac-req">*</span></label>
                      <input className="ac-input" type="text" placeholder="e.g. 07ABCDE1234F1Z5" maxLength={15}
                        value={form.gstin} onChange={e => set("gstin", e.target.value.toUpperCase())} />
                    </div>

                    <div className="ac-field">
                      <label className="ac-label">Contact Person Name <span className="ac-req">*</span></label>
                      <input className="ac-input" type="text" placeholder="Full name"
                        value={form.contactName} onChange={e => set("contactName", e.target.value)} />
                    </div>

                    <div className="ac-field">
                      <label className="ac-label">Contact Person Number <span className="ac-req">*</span></label>
                      <input className="ac-input" type="tel" placeholder="+91 XXXXX XXXXX"
                        value={form.contactPhone}
                        onChange={e => set("contactPhone", e.target.value.replace(/\D/g, "").slice(0, 12))} />
                    </div>

                    <div className="ac-field">
                      <label className="ac-label">Email Address <span className="ac-req">*</span></label>
                      <input className="ac-input" type="email" placeholder="client@company.com"
                        value={form.email} onChange={e => set("email", e.target.value)} />
                    </div>

                    <div className="ac-field">
                      <label className="ac-label">Password (8 digits) <span className="ac-req">*</span></label>
                      <input className="ac-input" type="password" placeholder="••••••••" maxLength={8}
                        inputMode="numeric" pattern="[0-9]{8}"
                        value={form.password}
                        onChange={e => set("password", e.target.value.replace(/\D/g, "").slice(0, 8))} />
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
                  </div>

                  <div className="ac-billing-grid">
                    {BILLING_MODES.map(mode => {
                      const active = form.billingMode === mode.key;
                      return (
                        <button key={mode.key} type="button"
                          className={`ac-billing-tile ${active ? "ac-billing-active" : ""}`}
                          style={active ? { borderColor: mode.color, background: `${mode.color}10` } : {}}
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

                  {form.billingMode === "prepaid_client" && (
                    <div className="ac-billing-section">
                      <div className="ac-billing-info-row">
                        <span className="ac-billing-info-icon">ℹ</span>
                        <span>Client will prepay a balance which future cases are deducted from.</span>
                      </div>
                    </div>
                  )}

                  {form.billingMode === "prepaid_candidate" && (
                    <div className="ac-billing-section">
                      <div className="ac-billing-info-row">
                        <span className="ac-billing-info-icon">ℹ</span>
                        <span>Candidates will pay directly via payment link for cases raised by this client.</span>
                      </div>
                    </div>
                  )}

                  {form.billingMode === "postpaid_client" && (
                    <div className="ac-billing-section">
                      <div className="ac-billing-info-row">
                        <span className="ac-billing-info-icon">ℹ</span>
                        <span>Client will be invoiced periodically for cases raised.</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* ══ RIGHT COLUMN ══ */}
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
                        <div
                          key={ct.key}
                          role="button"
                          tabIndex={0}
                          className={`ac-check-tile ${active ? "ac-check-active" : ""}`}
                          onClick={() => toggleCheck(ct.key)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleCheck(ct.key);
                            }
                          }}
                        >
                          <div className="ac-check-tile-top">
                            <span className="ac-check-dot" />
                            <span>{ct.label}</span>
                          </div>

                          <div className="ac-check-side" onClick={(e) => e.stopPropagation()}>
                            <div className="ac-check-rate-edit" title="Rate">
                              <span className="ac-rate-prefix">₹</span>
                              <input
                                type="number"
                                min="0"
                                className="ac-rate-input"
                                value={rates[ct.key]}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => setRate(ct.key, e.target.value)}
                              />
                            </div>
                            <div className="ac-check-rate-edit" title="Turnaround time (days)">
                              <input
                                type="number"
                                min="0"
                                className="ac-rate-input ac-tat-input"
                                value={tats[ct.key]}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => setTat(ct.key, e.target.value)}
                              />
                              <span className="ac-rate-suffix">d</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="ac-amount-bar">
                    <span>{form.checks.length} of {CHECK_TYPES.length} selected</span>
                    <span className="ac-tat-bar-item">
                      Est. TAT: <strong>{overallTat > 0 ? `${overallTat} day${overallTat > 1 ? "s" : ""}` : "—"}</strong>
                    </span>
                    <span className="ac-total-amt">Total: ₹{totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* 04 — Internal Notes */}
                <div className="ac-card">
                  <div className="ac-card-header">
                    <span className="ac-num">04</span>
                    <h3>Internal Notes</h3>
                  </div>
                  <textarea className="ac-textarea" rows={4}
                    placeholder="Special instructions / notes about this client..."
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
                      <span>Estimated TAT</span>
                      <strong>{overallTat > 0 ? `${overallTat} day${overallTat > 1 ? "s" : ""}` : "—"}</strong>
                    </div>
                    <div className="ac-summary-row">
                      <span>Total Rate</span>
                      <strong>₹{totalAmount.toLocaleString()}</strong>
                    </div>
                  </div>
                )}

                <button className="primary-cta ac-submit-btn"
                  onClick={handleSubmit} disabled={loading}>
                  {loading ? "Registering Client..." : "Add Client →"}
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

// ── Styles — identical to AddCase.jsx so the two pages match ──────────────
const sharedStyles = `
  .ac-page-title { font-size: 1.25rem; font-weight: 700; color: #2b3b8c; margin: 0; }
  .ac-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 0px; }
  @media (max-width: 960px) { .ac-layout { grid-template-columns: 1fr; } }
  .ac-left, .ac-right { display: flex; flex-direction: column; gap: 20px; }
  .ac-card { background: #fff; border: 1px solid #e8ecf4; border-radius: 12px; padding: 22px; }
  .ac-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 2px solid #f0f2f8; flex-wrap: wrap; }
  .ac-card-header h3 { font-size: 0.82rem; font-weight: 700; color: #2b3b8c; letter-spacing: 0.06em; text-transform: uppercase; margin: 0; flex: 1; }
  .ac-num { background: #2b3b8c; color: #fff; font-size: 0.68rem; font-weight: 800; width: 22px; height: 22px; border-radius: 5px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .ac-fields { display: flex; flex-direction: column; gap: 14px; }
  .ac-field { display: flex; flex-direction: column; gap: 5px; }
  .ac-label { font-size: 0.78rem; font-weight: 600; color: #475569; }
  .ac-req { color: #eb4d4b; margin-left: 2px; }
  .ac-input { width: 100%; padding: 10px 13px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; color: #1e293b; background: #f8fafc; outline: none; transition: border-color 0.18s; box-sizing: border-box; }
  .ac-input:focus { border-color: #2b3b8c; background: #fff; }
  .ac-priority-row { display: flex; gap: 8px; }
  .ac-priority-btn { flex: 1; padding: 8px 4px; border: 1.5px solid #e2e8f0; border-radius: 8px; background: #f8fafc; font-size: 0.75rem; font-weight: 600; color: #64748b; cursor: pointer; transition: all 0.15s; }
  .ac-pri-active-normal { border-color: #2b3b8c; background: #eef1fb; color: #2b3b8c; }
  .ac-pri-active-high { border-color: #f59e0b; background: #fffbeb; color: #b45309; }
  .ac-pri-active-urgent { border-color: #eb4d4b; background: #fff5f5; color: #eb4d4b; }
  .ac-billing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px; }
  @media (max-width: 700px) { .ac-billing-grid { grid-template-columns: 1fr; } }
  .ac-billing-tile { padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 10px; background: #f8fafc; cursor: pointer; text-align: left; transition: all 0.18s; }
  .ac-billing-active { box-shadow: 0 0 0 2px currentColor; }
  .ac-billing-tile-top { display: flex; align-items: center; gap: 7px; margin-bottom: 5px; }
  .ac-billing-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .ac-billing-label { font-size: 0.78rem; font-weight: 700; color: #334155; }
  .ac-billing-desc { font-size: 0.7rem; color: #94a3b8; margin: 0; line-height: 1.4; }
  .ac-billing-section { border-top: 1px dashed #e2e8f0; padding-top: 16px; display: flex; flex-direction: column; gap: 14px; }
  .ac-billing-info-row { display: flex; align-items: flex-start; gap: 8px; background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 10px 12px; font-size: 0.8rem; color: #0369a1; }
  .ac-billing-info-icon { font-style: normal; font-weight: 700; flex-shrink: 0; }
  .ac-check-ctrl { display: flex; gap: 6px; align-items: center; font-size: 0.75rem; color: #94a3b8; }
  .ac-link-btn { background: none; border: none; color: #2b3b8c; font-size: 0.75rem; font-weight: 600; cursor: pointer; padding: 0; text-decoration: underline; }
  .ac-checks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .ac-check-tile { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px; background: #f8fafc; cursor: pointer; transition: all 0.15s; gap: 8px; }
  .ac-check-tile:hover { border-color: #2b3b8c; }
  .ac-check-active { border-color: #2b3b8c; background: #eef1fb; }
  .ac-check-tile-top { display: flex; align-items: center; gap: 7px; font-size: 0.8rem; font-weight: 600; color: #334155; }
  .ac-check-active .ac-check-tile-top { color: #2b3b8c; }
  .ac-check-dot { width: 8px; height: 8px; border-radius: 50%; border: 2px solid #cbd5e1; flex-shrink: 0; }
  .ac-check-active .ac-check-dot { border-color: #2b3b8c; background: #2b3b8c; }
  .ac-check-side { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
  .ac-check-rate-edit { display: flex; align-items: center; gap: 2px; background: #fff; border: 1.5px solid #e2e8f0; border-radius: 6px; padding: 2px 6px; flex-shrink: 0; }
  .ac-check-rate-edit:focus-within { border-color: #2b3b8c; }
  .ac-rate-prefix { font-size: 0.7rem; color: #94a3b8; font-weight: 700; }
  .ac-rate-suffix { font-size: 0.7rem; color: #94a3b8; font-weight: 700; }
  .ac-rate-input { width: 52px; border: none; outline: none; background: transparent; font-size: 0.72rem; font-weight: 700; color: #1e293b; padding: 2px 0; }
  .ac-tat-input { width: 34px; }
  .ac-rate-input::-webkit-inner-spin-button, .ac-rate-input::-webkit-outer-spin-button { margin: 0; }
  .ac-amount-bar { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 0.75rem; color: #94a3b8; flex-wrap: wrap; gap: 8px; }
  .ac-tat-bar-item strong { color: #0d9488; font-weight: 700; }
  .ac-total-amt { font-weight: 700; color: #2b3b8c; font-size: 0.85rem; }
  .ac-textarea { width: 100%; padding: 10px 13px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; color: #1e293b; background: #f8fafc; outline: none; resize: vertical; font-family: inherit; box-sizing: border-box; }
  .ac-textarea:focus { border-color: #2b3b8c; background: #fff; }
  .ac-summary-strip { border: 1.5px solid; border-radius: 10px; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; }
  .ac-summary-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: #64748b; }
  .ac-summary-row strong { font-weight: 700; color: #1e293b; }
  .ac-submit-btn { width: 100%; padding: 14px; font-size: 0.95rem; font-weight: 700; }
  .ac-success-wrap { display: flex; align-items: center; justify-content: center; min-height: 70vh; }
  .ac-success-card { background: #fff; border: 1px solid #e8ecf4; border-radius: 16px; padding: 48px 40px; text-align: center; max-width: 500px; width: 100%; }
  .ac-success-icon { width: 64px; height: 64px; background: #10b981; color: #fff; border-radius: 50%; font-size: 2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
  .ac-success-title { font-size: 1.5rem; font-weight: 800; color: #1e293b; margin: 0 0 8px; }
  .ac-success-id { font-size: 1.1rem; font-weight: 700; color: #2b3b8c; background: #eef1fb; display: inline-block; padding: 6px 16px; border-radius: 20px; margin-bottom: 20px!important; }
  .ac-success-meta { background: #f8fafc; border-radius: 10px; padding: 14px 18px; margin-bottom: 18px; display: flex; flex-direction: column; gap: 8px; text-align: left; }
  .ac-success-meta-row { display: flex; justify-content: space-between; font-size: 0.82rem; color: #64748b; }
  .ac-success-checks { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 24px; }
  .ac-check-badge { background: #eef1fb; color: #2b3b8c; font-size: 0.72rem; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
  .ac-success-actions { display: flex; gap: 12px; justify-content: center; }
`;