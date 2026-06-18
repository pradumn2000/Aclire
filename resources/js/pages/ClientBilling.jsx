// import Sidebar from "./Sidebar";
// import Header from "./Header";

// // TODO: replace with GET /api/clients/:id/invoices
// const MOCK_INVOICES = [
//   { id: "INV-1042", period: "May 2026", checks: 38, amount: 13860, status: "Paid", dueDate: "2026-06-05" },
//   { id: "INV-1051", period: "Jun 2026", checks: 21, amount: 7980,  status: "Due",  dueDate: "2026-07-05" },
// ];

// export default function ClientBilling() {
//   const totalDue = MOCK_INVOICES
//     .filter((i) => i.status === "Due")
//     .reduce((sum, i) => sum + i.amount, 0);

//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total"><h4>{MOCK_INVOICES.length}</h4><p>Invoices</p></div>
//               <div className="card-inner-dash bdr-progress"><h4>₹{totalDue.toLocaleString()}</h4><p>Amount Due</p></div>
//               <div className="card-inner-dash bdr-com"><h4>{MOCK_INVOICES.filter(i => i.status === "Paid").length}</h4><p>Paid</p></div>
//             </div>

//             <div className="down-table" style={{ marginTop: "20px" }}>
//               <div style={{ background: "var(--primary-color)", padding: "12px 16px", borderRadius: "10px 10px 0 0" }}>
//                 <h3 style={{ color: "#fff", fontSize: "15px", fontWeight: 700, margin: 0 }}>BILLING & INVOICES</h3>
//               </div>
//               <table>
//                 <thead>
//                   <tr><th>Invoice</th><th>Period</th><th>Checks</th><th>Amount</th><th>Due Date</th><th>Status</th></tr>
//                 </thead>
//                 <tbody>
//                   {MOCK_INVOICES.map((inv) => (
//                     <tr key={inv.id}>
//                       <td style={{ fontWeight: 600 }}>{inv.id}</td>
//                       <td>{inv.period}</td>
//                       <td>{inv.checks}</td>
//                       <td>₹{inv.amount.toLocaleString()}</td>
//                       <td>{inv.dueDate}</td>
//                       <td>
//                         <span className={`status ${inv.status === "Paid" ? "completed" : "in-progress"}`}
//                           style={{ width: "auto", padding: "4px 10px", fontSize: "11px" }}>
//                           {inv.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );'
// }
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

// TODO: replace with GET /api/clients/:id/invoices
const MOCK_INVOICES = [
  { id: "INV-1042", period: "May 2026", checks: 38, amount: 13860, status: "Paid", dueDate: "2026-06-05", breakdown: { employment: 5, education: 8, address: 10, criminal: 7, drug: 5, court: 3 } },
  { id: "INV-1051", period: "Jun 2026", checks: 21, amount: 7980,  status: "Due",  dueDate: "2026-07-05", breakdown: { employment: 4, education: 6, address: 5, criminal: 4, drug: 2 } },
];

const CHECK_RATES = {
  employment: 350, education: 280, address: 180,
  database: 120,  criminal: 220,  drug: 400, court: 160,
};

const CHECK_LABELS = {
  employment: "Employment", education: "Education", address: "Address",
  database: "Database", criminal: "Criminal", drug: "Drug Test", court: "Courtroom",
};

function getUser() {
  try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; }
}

export default function ClientBilling() {
  const user = getUser();
  const [expandedInv, setExpandedInv] = useState(null);
  const [payingInv, setPayingInv] = useState(null);
  const [paid, setPaid] = useState([]);

  const invoices = MOCK_INVOICES.map(inv => ({
    ...inv,
    status: paid.includes(inv.id) ? "Paid" : inv.status,
  }));

  const totalDue   = invoices.filter(i => i.status === "Due").reduce((s, i) => s + i.amount, 0);
  const totalPaid  = invoices.filter(i => i.status === "Paid").reduce((s, i) => s + i.amount, 0);
  const dueCount   = invoices.filter(i => i.status === "Due").length;

  // Client's agreed checks from registration
  const agreedChecks = user.agreedChecks || [];
  const checkRates   = user.checkRates   || CHECK_RATES;

  const handlePay = (invId) => {
    setPaid(p => [...p, invId]);
    setPayingInv(null);
  };

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* ── Stats ── */}
            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total">
                <h4>{invoices.length}</h4>
                <p>Total Invoices</p>
              </div>
              <div className="card-inner-dash bdr-progress">
                <h4>₹{totalDue.toLocaleString()}</h4>
                <p>Amount Due</p>
              </div>
              <div className="card-inner-dash bdr-com">
                <h4>₹{totalPaid.toLocaleString()}</h4>
                <p>Total Paid</p>
              </div>
              <div className="card-inner-dash bdr-rate">
                <h4>{dueCount}</h4>
                <p>Pending Bills</p>
              </div>
            </div>

            <div className="cb-layout">

              {/* ══ LEFT — Invoice Table ══ */}
              <div className="cb-main">
                <div className="cb-card">
                  <div className="cb-card-header">
                    <div className="cb-card-header-left">
                      <span className="ac-num">01</span>
                      <h3>BILLING & INVOICES</h3>
                    </div>
                    {dueCount > 0 && (
                      <span className="cb-due-badge">{dueCount} due</span>
                    )}
                  </div>

                  <div className="cb-invoice-list">
                    {invoices.map((inv) => {
                      const isExpanded = expandedInv === inv.id;
                      const isDue = inv.status === "Due";
                      return (
                        <div key={inv.id}
                          className={`cb-invoice-row ${isDue ? "cb-inv-due" : "cb-inv-paid"}`}>
                          <div className="cb-inv-main"
                            onClick={() => setExpandedInv(isExpanded ? null : inv.id)}>
                            <div className="cb-inv-left">
                              <div className="cb-inv-id">{inv.id}</div>
                              <div className="cb-inv-meta">{inv.period} · {inv.checks} checks</div>
                            </div>
                            <div className="cb-inv-right">
                              <div className="cb-inv-amount">₹{inv.amount.toLocaleString()}</div>
                              <div className="cb-inv-due-date">
                                {isDue ? `Due ${inv.dueDate}` : `Paid`}
                              </div>
                            </div>
                            <div className="cb-inv-status-col">
                              <span className={`cb-status-pill ${isDue ? "cb-pill-due" : "cb-pill-paid"}`}>
                                {inv.status}
                              </span>
                              <span className="cb-chevron">{isExpanded ? "▲" : "▼"}</span>
                            </div>
                          </div>

                          {isExpanded && inv.breakdown && (
                            <div className="cb-inv-breakdown">
                              <div className="cb-breakdown-title">Check Breakdown</div>
                              <div className="cb-breakdown-grid">
                                {Object.entries(inv.breakdown).map(([key, count]) => (
                                  <div key={key} className="cb-breakdown-row">
                                    <span className="cb-breakdown-label">
                                      {CHECK_LABELS[key] || key}
                                    </span>
                                    <span className="cb-breakdown-count">{count}×</span>
                                    <span className="cb-breakdown-rate">
                                      ₹{(checkRates[key] || CHECK_RATES[key] || 0) * count}
                                    </span>
                                  </div>
                                ))}
                              </div>
                              {isDue && (
                                <button
                                  className="primary-cta cb-pay-btn"
                                  onClick={() => setPayingInv(inv)}>
                                  Pay ₹{inv.amount.toLocaleString()} →
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ══ RIGHT — Rate Card ══ */}
              <div className="cb-side">

                {/* Rate Card */}
                <div className="cb-card">
                  <div className="cb-card-header">
                    <div className="cb-card-header-left">
                      <span className="ac-num">02</span>
                      <h3>YOUR RATE CARD</h3>
                    </div>
                  </div>

                  {agreedChecks.length > 0 ? (
                    <>
                      <p className="cb-rate-note">
                        Rates agreed during registration. Contact your account manager to update.
                      </p>
                      <div className="cb-rate-list">
                        {agreedChecks.map((key) => {
                          const rate = checkRates[key] ?? CHECK_RATES[key] ?? 0;
                          const label = CHECK_LABELS[key] || key;
                          return (
                            <div key={key} className="cb-rate-row">
                              <div className="cb-rate-dot-label">
                                <span className="cb-rate-dot" />
                                <span className="cb-rate-label">{label}</span>
                              </div>
                              <span className="cb-rate-amount">₹{rate}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="cb-rate-footer">
                        <span>Billing Mode</span>
                        <strong style={{ color: "#2b3b8c" }}>
                          {user.billingMode === "prepaid_client"    ? "Prepaid — Client"
                          : user.billingMode === "prepaid_candidate" ? "Prepaid — Candidate"
                          : user.billingMode === "postpaid_client"   ? "Postpaid — Client"
                          : "—"}
                        </strong>
                      </div>
                    </>
                  ) : (
                    <div className="cb-empty-rate">
                      No rate card configured. Contact support.
                    </div>
                  )}
                </div>

                {/* Quick Pay — show only if any due */}
                {dueCount > 0 && (
                  <div className="cb-card cb-quick-pay">
                    <div className="cb-card-header">
                      <div className="cb-card-header-left">
                        <span className="ac-num" style={{ background: "#eb4d4b" }}>!</span>
                        <h3>PAYMENT DUE</h3>
                      </div>
                    </div>
                    <div className="cb-due-amount">₹{totalDue.toLocaleString()}</div>
                    <p className="cb-due-label">outstanding balance</p>
                    {invoices.filter(i => i.status === "Due").map(inv => (
                      <button key={inv.id}
                        className="primary-cta cb-pay-full-btn"
                        onClick={() => setPayingInv(inv)}>
                        Pay {inv.id} — ₹{inv.amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                )}

              </div>
            </div>

          </div>
        </main>
      </section>

      {/* ── Payment Modal ── */}
      {payingInv && (
        <div className="cb-modal-overlay" onClick={() => setPayingInv(null)}>
          <div className="cb-modal" onClick={e => e.stopPropagation()}>
            <div className="cb-modal-header">
              <h3>Pay Invoice</h3>
              <button className="cb-modal-close" onClick={() => setPayingInv(null)}>✕</button>
            </div>

            <div className="cb-modal-body">
              <div className="cb-modal-inv-id">{payingInv.id}</div>
              <div className="cb-modal-amount">₹{payingInv.amount.toLocaleString()}</div>
              <div className="cb-modal-period">{payingInv.period} · {payingInv.checks} checks</div>

              <div className="cb-payment-methods">
                {[
                  { key: "upi",    label: "UPI / QR",      icon: "📱" },
                  { key: "card",   label: "Credit / Debit", icon: "💳" },
                  { key: "neft",   label: "NEFT / IMPS",    icon: "🏦" },
                ].map(m => (
                  <button key={m.key} className="cb-pay-method-btn"
                    onClick={() => handlePay(payingInv.id)}>
                    <span className="cb-pay-method-icon">{m.icon}</span>
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>

              <p className="cb-modal-note">
                This is a demo. In production this opens your payment gateway.
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{styles}</style>
    </>
  );
}

const styles = `
  .cb-layout { display: grid; grid-template-columns: 1fr 320px; gap: 20px; margin-top: 20px; }
  @media (max-width: 960px) { .cb-layout { grid-template-columns: 1fr; } }

  .cb-card { background: #fff; border: 1px solid #e8ecf4; border-radius: 12px; padding: 22px; margin-bottom: 16px; }
  .cb-card:last-child { margin-bottom: 0; }

  .cb-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 2px solid #f0f2f8; }
  .cb-card-header-left { display: flex; align-items: center; gap: 10px; }
  .cb-card-header h3 { font-size: 0.82rem; font-weight: 700; color: #2b3b8c; letter-spacing: 0.06em; text-transform: uppercase; margin: 0; }

  .cb-due-badge { background: #fff5f5; color: #eb4d4b; border: 1px solid #fca5a5; border-radius: 20px; font-size: 0.7rem; font-weight: 700; padding: 3px 10px; }

  /* Invoice rows */
  .cb-invoice-list { display: flex; flex-direction: column; gap: 10px; }
  .cb-invoice-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; transition: border-color 0.15s; }
  .cb-inv-due { border-color: #fca5a5; }
  .cb-inv-paid { border-color: #bbf7d0; }

  .cb-inv-main { display: flex; align-items: center; gap: 12px; padding: 14px 16px; cursor: pointer; background: #f8fafc; transition: background 0.15s; }
  .cb-inv-main:hover { background: #f1f5f9; }
  .cb-inv-due .cb-inv-main { background: #fff5f5; }
  .cb-inv-paid .cb-inv-main { background: #f0fdf4; }

  .cb-inv-left { flex: 1; }
  .cb-inv-id { font-size: 0.9rem; font-weight: 700; color: #1e293b; }
  .cb-inv-meta { font-size: 0.75rem; color: #94a3b8; margin-top: 2px; }

  .cb-inv-right { text-align: right; margin-right: 12px; }
  .cb-inv-amount { font-size: 1rem; font-weight: 800; color: #1e293b; }
  .cb-inv-due-date { font-size: 0.72rem; color: #94a3b8; margin-top: 2px; }

  .cb-inv-status-col { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .cb-status-pill { font-size: 0.68rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; white-space: nowrap; }
  .cb-pill-due  { background: #fff5f5; color: #eb4d4b; border: 1px solid #fca5a5; }
  .cb-pill-paid { background: #f0fdf4; color: #16a34a; border: 1px solid #86efac; }
  .cb-chevron { font-size: 0.6rem; color: #94a3b8; }

  /* Breakdown */
  .cb-inv-breakdown { padding: 14px 16px; border-top: 1px dashed #e2e8f0; background: #fff; }
  .cb-breakdown-title { font-size: 0.72rem; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; }
  .cb-breakdown-grid { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
  .cb-breakdown-row { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; }
  .cb-breakdown-label { flex: 1; color: #475569; }
  .cb-breakdown-count { color: #94a3b8; font-weight: 600; width: 28px; text-align: right; }
  .cb-breakdown-rate { font-weight: 700; color: #2b3b8c; width: 60px; text-align: right; }
  .cb-pay-btn { width: 100%; padding: 10px; font-size: 0.85rem; margin-top: 4px; }

  /* Rate card */
  .cb-rate-note { font-size: 0.75rem; color: #94a3b8; margin: 0 0 14px; }
  .cb-rate-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
  .cb-rate-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }
  .cb-rate-dot-label { display: flex; align-items: center; gap: 8px; }
  .cb-rate-dot { width: 8px; height: 8px; border-radius: 50%; background: #2b3b8c; flex-shrink: 0; }
  .cb-rate-label { font-size: 0.8rem; font-weight: 600; color: #334155; }
  .cb-rate-amount { font-size: 0.8rem; font-weight: 700; color: #2b3b8c; }
  .cb-rate-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid #f0f2f8; font-size: 0.78rem; color: #64748b; }
  .cb-empty-rate { font-size: 0.8rem; color: #94a3b8; text-align: center; padding: 16px 0; }

  /* Quick pay card */
  .cb-quick-pay { text-align: center; }
  .cb-due-amount { font-size: 2rem; font-weight: 800; color: #eb4d4b; }
  .cb-due-label { font-size: 0.75rem; color: #94a3b8; margin: 2px 0 16px; }
  .cb-pay-full-btn { width: 100%; padding: 11px; font-size: 0.85rem; margin-bottom: 8px; }

  /* Payment modal */
  .cb-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 1000; display: flex; align-items: center; justify-content: center; }
  .cb-modal { background: #fff; border-radius: 16px; padding: 32px; width: 100%; max-width: 420px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
  .cb-modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  .cb-modal-header h3 { font-size: 1.1rem; font-weight: 700; color: #1e293b; margin: 0; }
  .cb-modal-close { background: none; border: none; font-size: 1.1rem; color: #94a3b8; cursor: pointer; }
  .cb-modal-body { text-align: center; }
  .cb-modal-inv-id { font-size: 0.8rem; font-weight: 700; color: #2b3b8c; background: #eef1fb; display: inline-block; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
  .cb-modal-amount { font-size: 2.2rem; font-weight: 800; color: #1e293b; }
  .cb-modal-period { font-size: 0.78rem; color: #94a3b8; margin: 4px 0 24px; }
  .cb-payment-methods { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
  .cb-pay-method-btn { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border: 1.5px solid #e2e8f0; border-radius: 10px; background: #f8fafc; cursor: pointer; font-size: 0.875rem; font-weight: 600; color: #334155; transition: all 0.15s; }
  .cb-pay-method-btn:hover { border-color: #2b3b8c; background: #eef1fb; color: #2b3b8c; }
  .cb-pay-method-icon { font-size: 1.2rem; }
  .cb-modal-note { font-size: 0.7rem; color: #94a3b8; }
`;