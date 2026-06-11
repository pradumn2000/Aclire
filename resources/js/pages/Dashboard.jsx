// // import { useNavigate } from "react-router-dom";
// // import Header from "./Header";
// // import Sidebar from "./Sidebar";

// // export default function Dashboard() {
// //   const navigate = useNavigate();

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   return (
// //     <>
// //   {/* SIDEBAR */}
// //  <Sidebar/>

// //   {/* CONTENT */}
// //   <section id="content">
// //     {/* NAVBAR */}
// //     <Header/>


// //     {/* MAIN */}
// //     <main>

// //      <div className="dash-wrper">

// //           <div className="dash-upper-head">
// //           <div className="left"> 
// //           <button className="tab-cta">Today</button>
// //           <button className="tab-cta">This Week</button>
// //           <button className="tab-cta">This Month</button>
// //           <button className="tab-cta active">Custom</button>
// //           </div>
// //           <div className="right">
// //           <button className="date-wrapper"><img src="/images/dashboard/calendar-icon.svg"></img><input
// //         type="text"
// //         name="daterange"
// //         className="selectedDate"
// //         placeholder="Select Date"
// //         readOnly
// //       /></button>
// //           <button className="primary-cta export"><img src="images/dashboard/export-icon.svg" alt="" /> Export CSV</button>
// //           <button className="secondary-cta import"><img src="images/dashboard/export-excel.svg" alt="" />Export Excel</button>
// //           </div>
// //           </div>

// //        {/* TOP SECTION */}
// //       <div className="cards-head-dash">

// //        <div className="card-inner-dash bdr-total">
// //         <h4>1,284</h4>
// //         <p>Total Cases</p>
// //        </div>

// //        <div className="card-inner-dash bdr-progress">
// //         <h4>342</h4>
// //         <p>In Progress</p>
// //        </div>

// //        <div className="card-inner-dash bdr-com">
// //         <h4>856</h4>
// //         <p>Completed</p>
// //        </div>

// //        <div className="card-inner-dash bdr-client">
// //         <h4>50</h4>
// //         <p>Clients</p>
// //        </div>

// //        <div className="card-inner-dash bdr-rate">
// //         <h4>92%</h4>
// //         <p>Clear Rate</p>
// //        </div>

// //       </div>

// //       {/* DASHBOARD Inner body */}

// //       <div className="dash-inner-wrp-both">
// //           <div className="dash-inner-left">
// //           <div className="up-table">
// //           <img src="/images/dashboard/graph-dash.png" alt="logo" />
// //           </div>

// //           <div className="down-table">
// //             <table>
// //       <thead>
// //         <tr>
// //           <th>Case ID</th>
// //           <th>Candidate</th>
// //           <th>Client</th>
// //           <th>Checks</th>
// //           <th>Status</th>
// //           <th>TAT</th>
// //           <th>Action</th>
// //         </tr>
// //       </thead>

// //       <tbody>
// //         <tr>
// //           <td>BGV-2401</td>
// //           <td>Ravi Kumar</td>
// //           <td>Infosys</td>
// //           <td>Emp-Edu-Addr</td>
// //           <td><span className="status in-progress">In Progress</span></td>
// //           <td>3d</td>
// //           <td>
// //             <button className="view-cta">View</button>
// //           </td>
// //         </tr>

// //         <tr>
// //           <td>BGV-2402</td>
// //           <td>Anjali Mehta</td>
// //           <td>TCS</td>
// //           <td>Emp-Criminal</td>
// //           <td><span className="status qc-review">QC Review</span></td>
// //           <td>5d</td>
// //           <td>
// //             <button className="view-cta">View</button>
// //           </td>
// //         </tr>

// //         <tr>
// //           <td>BGV-2403</td>
// //           <td>Suresh Pillai</td>
// //           <td>Wipro</td>
// //           <td>All 7</td>
// //           <td><span className="status completed">Completed</span></td>
// //           <td>4d</td>
// //           <td>
// //             <button className="view-cta">Report</button>
// //           </td>
// //         </tr>

// //         <tr>
// //           <td>BGV-2404</td>
// //           <td>Neha Sharma</td>
// //           <td>HCL</td>
// //           <td>Edu-DB</td>
// //           <td><span className="status pending">Pending</span></td>
// //           <td>1d</td>
// //           <td>
// //             <button className="view-cta">View</button>
// //           </td>
// //         </tr>
// //       </tbody>
// //     </table>
// //           </div>
// //       </div>

// //       <div className="dash-inner-right">
// //            <div className="quick-stats">

// //       <div className="stats-header">
// //         <h3>QUICK STATS</h3>
// //       </div>

// //       <div className="stats-body">

// //         <div className="stats-row">
// //           <span>Avg TAT</span>
// //           <span>4.2 days</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Clear Rate</span>
// //           <span>92%</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Discrepancy</span>
// //           <span>8%</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Discrepancy</span>
// //           <span>8%</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Discrepancy</span>
// //           <span>8%</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Discrepancy</span>
// //           <span>8%</span>
// //         </div>

// //       </div>
// //     </div>
// //       </div>
// //       </div>
// //      </div>
      
// //     </main>
// //   </section>
// // </>
// //   );
// // }
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { useCases } from "../src/hooks/useCases";

// const STATUS_MAP = {
//   "In Progress": "in-progress",
//   "QC Review":   "qc-review",
//   "Pending":     "pending",
//   "Completed":   "completed",
// };

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { cases } = useCases();

//   // ── Derived stats ─────────────────────────────────────
//   const total      = cases.length;
//   const inProgress = cases.filter(c => c.label === "In Progress").length;
//   const completed  = cases.filter(c => c.label === "Completed").length;
//   const clients    = new Set(cases.map(c => c.clientId).filter(Boolean)).size;
//   const clearRate  = total > 0
//     ? Math.round((completed / total) * 100)
//     : 0;

//   // 5 most recent for the table
//   const recent = cases.slice(0, 5);

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">

//             <div className="dash-upper-head">
//               <div className="left">
//                 <button className="tab-cta">Today</button>
//                 <button className="tab-cta">This Week</button>
//                 <button className="tab-cta">This Month</button>
//                 <button className="tab-cta active">Custom</button>
//               </div>
//               <div className="right">
//                 <button className="date-wrapper">
//                   <img src="/images/dashboard/calendar-icon.svg" alt="" />
//                   <input type="text" className="selectedDate" placeholder="Select Date" readOnly />
//                 </button>
//                 <button className="primary-cta export">
//                   <img src="/images/dashboard/export-icon.svg" alt="" /> Export CSV
//                 </button>
//                 <button className="secondary-cta import">
//                   <img src="/images/dashboard/export-excel.svg" alt="" /> Export Excel
//                 </button>
//               </div>
//             </div>

//             {/* ── Stats cards ── */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total">
//                 <h4>{total.toLocaleString()}</h4>
//                 <p>Total Cases</p>
//               </div>
//               <div className="card-inner-dash bdr-progress">
//                 <h4>{inProgress}</h4>
//                 <p>In Progress</p>
//               </div>
//               <div className="card-inner-dash bdr-com">
//                 <h4>{completed}</h4>
//                 <p>Completed</p>
//               </div>
//               <div className="card-inner-dash bdr-client">
//                 <h4>{clients}</h4>
//                 <p>Clients</p>
//               </div>
//               <div className="card-inner-dash bdr-rate">
//                 <h4>{clearRate}%</h4>
//                 <p>Clear Rate</p>
//               </div>
//             </div>

//             {/* ── Inner body ── */}
//             <div className="dash-inner-wrp-both">
//               <div className="dash-inner-left">
//                 <div className="up-table">
//                   <img src="/images/dashboard/graph-dash.png" alt="graph" />
//                 </div>

//                 <div className="down-table">
//                   {recent.length === 0 ? (
//                     <div style={{
//                       textAlign: "center", padding: "40px",
//                       color: "#94a3b8", fontSize: "0.875rem",
//                     }}>
//                       No cases yet.{" "}
//                       <button
//                         onClick={() => navigate("/AddCase")}
//                         style={{ color: "#2b3b8c", fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}
//                       >
//                         Add your first case →
//                       </button>
//                     </div>
//                   ) : (
//                     <table>
//                       <thead>
//                         <tr>
//                           <th>Case ID</th>
//                           <th>Candidate</th>
//                           <th>Client</th>
//                           <th>Checks</th>
//                           <th>Status</th>
//                           <th>TAT</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {recent.map(row => (
//                           <tr key={row.id}>
//                             <td>{row.id}</td>
//                             <td>{row.candidate}</td>
//                             <td>{row.client}</td>
//                             <td>{row.checks}</td>
//                             <td>
//                               <span className={`status ${STATUS_MAP[row.label] || row.status}`}>
//                                 {row.label}
//                               </span>
//                             </td>
//                             <td>{row.tat}</td>
//                             <td>
//                               <button className="view-cta">View</button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   )}
//                 </div>
//               </div>

//               <div className="dash-inner-right">
//                 <div className="quick-stats">
//                   <div className="stats-header">
//                     <h3>QUICK STATS</h3>
//                   </div>
//                   <div className="stats-body">
//                     <div className="stats-row">
//                       <span>Total Cases</span>
//                       <span>{total}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>In Progress</span>
//                       <span>{inProgress}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Completed</span>
//                       <span>{completed}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Pending</span>
//                       <span>{cases.filter(c => c.label === "Pending").length}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Clear Rate</span>
//                       <span>{clearRate}%</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Unique Clients</span>
//                       <span>{clients}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </main>
//       </section>
//     </>
//   );
// }
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { useCases } from "../src/hooks/useCases";
// import { useCaseFilters } from "../src/hooks/useCaseFilters";
// import DateRangePicker from "../src/components/DateRangePicker";

// const STATUS_MAP = {
//   "In Progress": "in-progress",
//   "QC Review":   "qc-review",
//   "Pending":     "pending",
//   "Completed":   "completed",
// };

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { cases } = useCases();

//   const {
//     filtered,
//     datePreset, setDatePreset,
//     customRange, applyCustomRange, clearDate,
//     showPicker, setShowPicker,
//     dateLabel,
//     exportCSV,
//     exportExcel,
//   } = useCaseFilters(cases, { showStatusFilter: false });

//   // ── Derived stats (from filtered set) ─────────────────────
//   const total      = filtered.length;
//   const inProgress = filtered.filter(c => c.label === "In Progress").length;
//   const completed  = filtered.filter(c => c.label === "Completed").length;
//   const clients    = new Set(filtered.map(c => c.clientId).filter(Boolean)).size;
//   const clearRate  = total > 0 ? Math.round((completed / total) * 100) : 0;
//   const recent     = filtered.slice(0, 5);

//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">

//             {/* ── Top bar ── */}
//             <div className="dash-upper-head">
//               <div className="left">
//                 {[
//                   { key: "all",   label: "All Time"  },
//                   { key: "week",  label: "This Week"  },
//                   { key: "month", label: "This Month" },
//                   { key: "custom", label: "Custom"   },
//                 ].map(p => (
//                   <button
//                     key={p.key}
//                     className={`tab-cta ${datePreset === p.key ? "active" : ""}`}
//                     onClick={() => {
//                       if (p.key === "custom") {
//                         setShowPicker(v => !v);
//                         setDatePreset("custom");
//                       } else {
//                         setDatePreset(p.key);
//                       }
//                     }}
//                   >
//                     {p.label}
//                   </button>
//                 ))}
//               </div>

//               <div className="right">
//                 <DateRangePicker
//                   datePreset={datePreset}
//                   setDatePreset={setDatePreset}
//                   customRange={customRange}
//                   applyCustomRange={applyCustomRange}
//                   clearDate={clearDate}
//                   showPicker={showPicker}
//                   setShowPicker={setShowPicker}
//                   dateLabel={dateLabel}
//                 />
//                 <button className="primary-cta export" onClick={exportCSV}>
//                   <img src="/images/dashboard/export-icon.svg" alt="" /> Export CSV
//                 </button>
//                 <button className="secondary-cta import" onClick={exportExcel}>
//                   <img src="/images/dashboard/export-excel.svg" alt="" /> Export Excel
//                 </button>
//               </div>
//             </div>

//             {/* ── Active filter badge ── */}
//             {datePreset !== "all" && (
//               <div style={{
//                 margin: "8px 0 0", display: "flex", alignItems: "center", gap: 8,
//                 fontSize: "0.78rem", color: "#2b3b8c",
//               }}>
//                 <span style={{
//                   background: "#eef1fb", border: "1px solid #c7d2fe",
//                   borderRadius: 20, padding: "3px 12px", fontWeight: 600,
//                 }}>
//                   📅 {dateLabel} — {total} case{total !== 1 ? "s" : ""}
//                 </span>
//                 <button onClick={clearDate} style={{
//                   background: "none", border: "none", color: "#94a3b8",
//                   fontSize: "0.75rem", cursor: "pointer", textDecoration: "underline",
//                 }}>
//                   Clear
//                 </button>
//               </div>
//             )}

//             {/* ── Stats cards ── */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total">
//                 <h4>{total.toLocaleString()}</h4>
//                 <p>Total Cases</p>
//               </div>
//               <div className="card-inner-dash bdr-progress">
//                 <h4>{inProgress}</h4>
//                 <p>In Progress</p>
//               </div>
//               <div className="card-inner-dash bdr-com">
//                 <h4>{completed}</h4>
//                 <p>Completed</p>
//               </div>
//               <div className="card-inner-dash bdr-client">
//                 <h4>{clients}</h4>
//                 <p>Clients</p>
//               </div>
//               <div className="card-inner-dash bdr-rate">
//                 <h4>{clearRate}%</h4>
//                 <p>Clear Rate</p>
//               </div>
//             </div>

//             {/* ── Inner body ── */}
//             <div className="dash-inner-wrp-both">
//               <div className="dash-inner-left">
//                 <div className="up-table">
//                   <img src="/images/dashboard/graph-dash.png" alt="graph" />
//                 </div>

//                 <div className="down-table">
//                   {recent.length === 0 ? (
//                     <div style={{
//                       textAlign: "center", padding: "40px",
//                       color: "#94a3b8", fontSize: "0.875rem",
//                     }}>
//                       No cases for this period.{" "}
//                       {cases.length === 0 && (
//                         <button
//                           onClick={() => navigate("/AddCase")}
//                           style={{
//                             color: "#2b3b8c", fontWeight: 700,
//                             background: "none", border: "none", cursor: "pointer",
//                           }}
//                         >
//                           Add your first case →
//                         </button>
//                       )}
//                     </div>
//                   ) : (
//                     <table>
//                       <thead>
//                         <tr>
//                           <th>Case ID</th>
//                           <th>Candidate</th>
//                           <th>Client</th>
//                           <th>Checks</th>
//                           <th>Status</th>
//                           <th>TAT</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {recent.map(row => (
//                           <tr key={row.id}>
//                             <td>{row.id}</td>
//                             <td>{row.candidate}</td>
//                             <td>{row.client}</td>
//                             <td>{row.checks}</td>
//                             <td>
//                               <span className={`status ${STATUS_MAP[row.label] || row.status}`}>
//                                 {row.label}
//                               </span>
//                             </td>
//                             <td>{row.tat}</td>
//                             <td><button className="view-cta">View</button></td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   )}
//                 </div>
//               </div>

//               <div className="dash-inner-right">
//                 <div className="quick-stats">
//                   <div className="stats-header">
//                     <h3>QUICK STATS</h3>
//                   </div>
//                   <div className="stats-body">
//                     <div className="stats-row">
//                       <span>Total Cases</span>
//                       <span>{total}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>In Progress</span>
//                       <span>{inProgress}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Completed</span>
//                       <span>{completed}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Pending</span>
//                       <span>{filtered.filter(c => c.label === "Pending").length}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>QC Review</span>
//                       <span>{filtered.filter(c => c.label === "QC Review").length}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Clear Rate</span>
//                       <span>{clearRate}%</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Unique Clients</span>
//                       <span>{clients}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </main>
//       </section>
//     </>
//   );
// }
// Dashboard.jsx — Admin dashboard with Verifier section integration
// Imports getAllCases / getCaseStats from caseStore so verifier results
// are reflected in real time across all widgets.

import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getAllCases, getCaseStats } from "../src/store/caseStore";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatCurrency(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

function today() { return new Date().toISOString().slice(0, 10); }

function isInRange(dateStr, preset, customFrom, customTo) {
  if (!dateStr) return true;
  const d = new Date(dateStr);
  const now = new Date();
  if (preset === "today") return d.toDateString() === now.toDateString();
  if (preset === "week")  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
  if (preset === "month") { const m = new Date(now); m.setMonth(now.getMonth() - 1); return d >= m; }
  if (preset === "custom" && customFrom && customTo) {
    return d >= new Date(customFrom) && d <= new Date(customTo + "T23:59:59");
  }
  return true;
}

function exportCSV(rows) {
  const headers = ["Case ID","Candidate","Email","Mobile","Client","Checks","Status","TAT","Billing","Amount","Priority","Created Date"];
  const lines = rows.map((c) => [
    c.id, c.candidate, c.email, c.mobile, c.client, c.checks, c.status,
    c.tat, c.billing, c.amount, c.priority, c.createdDate,
  ].map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(","));
  const blob = new Blob([headers.join(",") + "\n" + lines.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = `bgv_cases_${Date.now()}.csv`; a.click();
  URL.revokeObjectURL(url);
}

function exportExcel(rows) {
  const headers = ["Case ID","Candidate","Email","Mobile","Client","Checks","Status","TAT","Billing","Amount","Priority","Created Date"];
  const trs = rows.map((c) =>
    "<tr>" + [c.id,c.candidate,c.email,c.mobile,c.client,c.checks,c.status,c.tat,c.billing,c.amount,c.priority,c.createdDate]
      .map((v) => `<td>${v ?? ""}</td>`).join("") + "</tr>"
  ).join("");
  const html = `<table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${trs}</tbody></table>`;
  const blob = new Blob([html], { type: "application/vnd.ms-excel" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = `bgv_cases_${Date.now()}.xls`; a.click();
  URL.revokeObjectURL(url);
}

// ─── Verifier Summary Panel (inline component) ───────────────────────────────
function VerifierSummaryPanel({ cases }) {
  const verifierCases = cases.filter((c) => c.verifierResult);
  const cleared      = verifierCases.filter((c) => c.verifierResult?.outcome === "clear").length;
  const discrepancy  = verifierCases.filter((c) => c.verifierResult?.outcome === "discrepancy").length;
  const unable       = verifierCases.filter((c) => c.verifierResult?.outcome === "unable").length;
  const drafts       = cases.filter((c) => c.verifierResult?.isDraft).length;

  const stats = [
    { label: "Verified",     value: verifierCases.length, color: "#0ea5e9", bg: "#f0f9ff" },
    { label: "Clear",        value: cleared,              color: "#16a34a", bg: "#f0fdf4" },
    { label: "Discrepancy",  value: discrepancy,          color: "#dc2626", bg: "#fef2f2" },
    { label: "Unable",       value: unable,               color: "#d97706", bg: "#fffbeb" },
    { label: "Drafts",       value: drafts,               color: "#7c3aed", bg: "#faf5ff" },
  ];

  // Check-type breakdown
  const byType = ["employment","education","address","database","criminal","drug_test","courtroom"].map((type) => {
    const typeCases   = cases.filter((c) => c.checkType === type);
    const typeVerified = typeCases.filter((c) => c.verifierResult && !c.verifierResult.isDraft).length;
    return { type, total: typeCases.length, verified: typeVerified };
  }).filter((r) => r.total > 0);

  return (
    <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "20px", marginBottom: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "#1e293b", letterSpacing: "0.04em" }}>
          🔍 VERIFIER ACTIVITY OVERVIEW
        </h3>
        <span style={{ fontSize: "12px", color: "#94a3b8" }}>Live — updates on every verifier save</span>
      </div>

      {/* Stat chips */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
        {stats.map((s) => (
          <div key={s.label} style={{ flex: "1 1 100px", minWidth: "100px", background: s.bg, borderRadius: "10px", padding: "12px 14px", border: `1px solid ${s.color}22` }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px", fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Check-type progress bars */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px" }}>
        {byType.map((r) => {
          const pct = r.total > 0 ? Math.round((r.verified / r.total) * 100) : 0;
          const typeLabel = r.type.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());
          return (
            <div key={r.type} style={{ background: "#f8fafc", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>{typeLabel}</span>
                <span style={{ fontSize: "11px", color: "#0ea5e9", fontWeight: 700 }}>{r.verified}/{r.total}</span>
              </div>
              <div style={{ height: "6px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: pct === 100 ? "#16a34a" : "#0ea5e9", borderRadius: "3px", transition: "width .4s ease" }} />
              </div>
              <div style={{ fontSize: "10px", color: "#94a3b8", marginTop: "3px", textAlign: "right" }}>{pct}% verified</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Dashboard Component ─────────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();

  const [allCases, setAllCases]       = useState([]);
  const [datePreset, setDatePreset]   = useState("month");
  const [customFrom, setCustomFrom]   = useState("");
  const [customTo, setCustomTo]       = useState("");
  const [showPicker, setShowPicker]   = useState(false);
  const [statusTab, setStatusTab]     = useState("all");
  const [search, setSearch]           = useState("");
  const datePickerRef                 = useRef(null);

  // Reload cases from store (picks up verifier saves)
  const loadCases = useCallback(() => {
    setAllCases(getAllCases());
  }, []);

  useEffect(() => {
    loadCases();
    // Poll every 5 seconds so verifier saves appear in admin view
    const id = setInterval(loadCases, 5000);
    return () => clearInterval(id);
  }, [loadCases]);

  // Outside-click for date picker
  useEffect(() => {
    const h = (e) => { if (datePickerRef.current && !datePickerRef.current.contains(e.target)) setShowPicker(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  // ── Filtered cases
  const dateFiltered = allCases.filter((c) => isInRange(c.createdDate, datePreset, customFrom, customTo));

  const filtered = dateFiltered.filter((c) => {
    const matchStatus = statusTab === "all" || c.status === statusTab;
    const matchSearch = !search ||
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.candidate.toLowerCase().includes(search.toLowerCase()) ||
      (c.client || "").toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const stats = getCaseStats(dateFiltered);

  const statusCounts = {
    all:           dateFiltered.length,
    pending:       dateFiltered.filter((c) => c.status === "pending").length,
    "in-progress": dateFiltered.filter((c) => c.status === "in-progress").length,
    "qc-review":   dateFiltered.filter((c) => c.status === "qc-review").length,
    completed:     dateFiltered.filter((c) => c.status === "completed").length,
  };

  // ── Stat cards config
  const statCards = [
    { label: "Total Cases",    value: stats.total,       sub: `${datePreset === "all" ? "All time" : "Filtered period"}`, color: "#0ea5e9", bg: "#f0f9ff", icon: "📁" },
    { label: "Pending",        value: stats.pending,     sub: "Awaiting verifier",   color: "#f59e0b", bg: "#fffbeb", icon: "⏳" },
    { label: "In Progress",    value: stats.inProgress,  sub: "Verifier working",    color: "#3b82f6", bg: "#eff6ff", icon: "🔄" },
    { label: "QC Review",      value: stats.qcReview,    sub: "Under quality check", color: "#8b5cf6", bg: "#faf5ff", icon: "🔎" },
    { label: "Completed",      value: stats.completed,   sub: "Fully verified",      color: "#16a34a", bg: "#f0fdf4", icon: "✅" },
    { label: "Total Revenue",  value: formatCurrency(stats.totalRevenue), sub: "Billed amount", color: "#0891b2", bg: "#ecfeff", icon: "💰" },
  ];

  const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

  return (
    <>
      <Sidebar />

      <section id="noSidebar">

        {/* ── Navbar ─────────────────────────────────────────────── */}
        <nav className="verifyer" style={{ borderBottom: "1px solid #e2e8f0" }}>
          <div className="nav-toggle">
            <img src="images/inner-pages/emp-check-icon.svg" alt="" />
          </div>
          <div className="head-src">
            <h3>ADMIN DASHBOARD — BGV Management Console</h3>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button className="primary-cta" onClick={() => navigate("/verifier")} style={{ fontSize: "13px" }}>
              🔍 Verifier View
            </button>
            <button className="secondary-cta" style={{ fontSize: "13px" }}>
              {user.name || "Admin"}
            </button>
          </div>
        </nav>

        <main>
          <div className="dash-wrper">

            {/* ── Date filter bar ─────────────────────────────────── */}
            <div className="dash-upper-head">
              <div className="left" style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
                {["today","week","month","all"].map((p) => (
                  <button
                    key={p}
                    className={`tab-cta ${datePreset === p && !showPicker ? "active" : ""}`}
                    onClick={() => { setDatePreset(p); setShowPicker(false); }}
                  >
                    {p === "today" ? "Today" : p === "week" ? "This Week" : p === "month" ? "This Month" : "All Time"}
                  </button>
                ))}
                <div ref={datePickerRef} style={{ position: "relative" }}>
                  <button
                    className={`tab-cta ${datePreset === "custom" ? "active" : ""}`}
                    onClick={() => setShowPicker((v) => !v)}
                  >
                    📅 Custom
                    {datePreset === "custom" && customFrom ? ` (${customFrom} → ${customTo})` : ""}
                    {datePreset === "custom" && customFrom && (
                      <span
                        style={{ marginLeft: "4px", cursor: "pointer" }}
                        onClick={(e) => { e.stopPropagation(); setDatePreset("all"); setCustomFrom(""); setCustomTo(""); }}
                      >
                        ×
                      </span>
                    )}
                  </button>
                  {showPicker && (
                    <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #ddd", borderRadius: "10px", padding: "14px", zIndex: 200, boxShadow: "0 4px 20px rgba(0,0,0,.12)", minWidth: "240px" }}>
                      <label style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>From</label>
                      <input type="date" value={customFrom} onChange={(e) => setCustomFrom(e.target.value)} style={{ display: "block", width: "100%", margin: "4px 0 8px", border: "1px solid #ccc", borderRadius: "6px", padding: "6px 8px", fontSize: "13px" }} />
                      <label style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>To</label>
                      <input type="date" value={customTo} onChange={(e) => setCustomTo(e.target.value)} style={{ display: "block", width: "100%", margin: "4px 0 10px", border: "1px solid #ccc", borderRadius: "6px", padding: "6px 8px", fontSize: "13px" }} />
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button className="primary-cta" style={{ flex: 1, fontSize: "12px" }} onClick={() => { setDatePreset("custom"); setShowPicker(false); }}>Apply</button>
                        <button className="secondary-cta" style={{ flex: 1, fontSize: "12px" }} onClick={() => { setDatePreset("all"); setCustomFrom(""); setCustomTo(""); setShowPicker(false); }}>Clear</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="right" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <div className="input-grp" style={{ margin: 0, position: "relative" }}>
                  <input
                    type="text"
                    placeholder="Search cases..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: "200px", paddingRight: search ? "30px" : "10px" }}
                  />
                  {search && (
                    <button onClick={() => setSearch("")} style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: "16px", lineHeight: 1 }}>×</button>
                  )}
                </div>
                <button className="primary-cta export" onClick={() => exportCSV(filtered)}>
                  <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
                </button>
                <button className="secondary-cta import" onClick={() => exportExcel(filtered)}>
                  <img src="images/dashboard/export-excel.svg" alt="" /> Export Excel
                </button>
              </div>
            </div>

            {/* ── Stat cards ──────────────────────────────────────── */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "14px", marginBottom: "20px" }}>
              {statCards.map((s) => (
                <div key={s.label} style={{ background: s.bg, borderRadius: "12px", padding: "16px 18px", border: `1px solid ${s.color}22`, position: "relative", overflow: "hidden" }}>
                  <div style={{ fontSize: "22px", marginBottom: "4px" }}>{s.icon}</div>
                  <div style={{ fontSize: "26px", fontWeight: 800, color: s.color, lineHeight: 1.1 }}>{s.value}</div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#374151", marginTop: "4px" }}>{s.label}</div>
                  <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* ── Verifier Summary Panel ───────────────────────────── */}
            <VerifierSummaryPanel cases={dateFiltered} />

            {/* ── Status tabs ─────────────────────────────────────── */}
            <div className="header-navbar" style={{ marginBottom: "12px" }}>
              {Object.entries({ all: "All Cases", pending: "Pending", "in-progress": "In Progress", "qc-review": "QC Review", completed: "Completed" }).map(([k, label]) => (
                <button
                  key={k}
                  className={`tab-cta ${statusTab === k ? "active" : ""}`}
                  onClick={() => setStatusTab(k)}
                >
                  {label}
                  <span style={{ marginLeft: "5px", background: "rgba(0,0,0,.1)", borderRadius: "10px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
                    {statusCounts[k] ?? 0}
                  </span>
                </button>
              ))}
            </div>

            {/* ── Cases table ─────────────────────────────────────── */}
            <div className="down-table">
              <table>
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Candidate</th>
                    <th>Client</th>
                    <th>Check Type</th>
                    <th>Status</th>
                    <th>TAT</th>
                    <th>Priority</th>
                    <th>Amount</th>
                    <th>Verifier Outcome</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan="11" style={{ textAlign: "center", padding: "28px", color: "#9ca3af", fontSize: "14px" }}>
                        No cases match current filters.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((c) => {
                      const outcome = c.verifierResult?.outcome;
                      const outcomeColors = { clear: { bg: "#f0fdf4", color: "#15803d" }, discrepancy: { bg: "#fef2f2", color: "#b91c1c" }, unable: { bg: "#fffbeb", color: "#b45309" } };
                      const oc = outcomeColors[outcome] || { bg: "#f8fafc", color: "#94a3b8" };
                      const priorityColors = { High: "#dc2626", Medium: "#d97706", Low: "#16a34a" };
                      return (
                        <tr key={c.id}>
                          <td style={{ fontWeight: 700, color: "#0369a1" }}>{c.id}</td>
                          <td>
                            <div style={{ fontWeight: 600, fontSize: "13px" }}>{c.candidate}</div>
                            <div style={{ fontSize: "11px", color: "#9ca3af" }}>{c.email}</div>
                          </td>
                          <td>{c.client}</td>
                          <td style={{ fontSize: "12px", color: "#475569", textTransform: "capitalize" }}>
                            {(c.checkType || "—").replace("_", " ")}
                          </td>
                          <td>
                            <span style={{ ...statusBadgeStyle(c.status) }}>{statusLabel(c.status)}</span>
                          </td>
                          <td>
                            <span style={{ background: c.tat === "1d" ? "#fee2e2" : "#f0fdf4", color: c.tat === "1d" ? "#b91c1c" : "#15803d", padding: "2px 8px", borderRadius: "10px", fontSize: "12px", fontWeight: 700 }}>
                              {c.tat}
                            </span>
                          </td>
                          <td>
                            <span style={{ color: priorityColors[c.priority] || "#666", fontWeight: 700, fontSize: "12px" }}>
                              {c.priority || "—"}
                            </span>
                          </td>
                          <td style={{ fontWeight: 700, color: "#0891b2" }}>{formatCurrency(c.amount)}</td>
                          <td>
                            {outcome ? (
                              <span style={{ background: oc.bg, color: oc.color, padding: "3px 10px", borderRadius: "10px", fontSize: "12px", fontWeight: 700, whiteSpace: "nowrap" }}>
                                {outcome === "clear" ? "✔ Clear" : outcome === "discrepancy" ? "✗ Discrepancy" : "? Unable"}
                                {c.verifierResult?.isDraft && " (Draft)"}
                              </span>
                            ) : (
                              <span style={{ color: "#cbd5e1", fontSize: "12px" }}>Pending</span>
                            )}
                          </td>
                          <td style={{ fontSize: "12px", color: "#6b7280" }}>{c.createdDate}</td>
                          <td>
                            <div style={{ display: "flex", gap: "4px" }}>
                              <button className="view-cta" onClick={() => navigate(`/cases/${c.id}`)}>View</button>
                              <button
                                className="view-cta"
                                style={{ background: "#f0f9ff", color: "#0369a1", border: "1px solid #bae6fd" }}
                                onClick={() => navigate("/verifier")}
                                title="Open in Verifier"
                              >
                                🔍
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>

              <div style={{ padding: "10px 14px", fontSize: "12px", color: "#9ca3af", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between" }}>
                <span>Showing {filtered.length} of {allCases.length} total cases</span>
                <span>Last synced: {new Date().toLocaleTimeString("en-IN")}</span>
              </div>
            </div>

          </div>
        </main>
      </section>
    </>
  );
}

// ─── Style helpers ────────────────────────────────────────────────────────────
function statusLabel(s) {
  return { pending: "Pending", "in-progress": "In Progress", completed: "Completed", "qc-review": "QC Review" }[s] || s;
}

function statusBadgeStyle(s) {
  const map = {
    pending:       { background: "#fff3cd", color: "#856404" },
    "in-progress": { background: "#cce5ff", color: "#004085" },
    completed:     { background: "#d4edda", color: "#155724" },
    "qc-review":   { background: "#e2d9f3", color: "#4b1f8d" },
  };
  const base = map[s] || { background: "#e9ecef", color: "#495057" };
  return { ...base, padding: "3px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" };
}
