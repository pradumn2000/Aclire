
// // import { useState, useEffect } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import Sidebar from "./Sidebar";
// // import Header from "./Header";
// // import { API_URL } from "../src/config";

// // const STATUS_TABS = [
// //   { key: "all",          label: "All Cases"   },
// //   { key: "pending",      label: "Pending"     },
// //   { key: "in-progress",  label: "In Progress" },
// //   { key: "completed",    label: "Completed"   },
// // ];

// // const DATE_FILTERS = [
// //   { key: "today",  label: "Today"      },
// //   { key: "week",   label: "This Week"  },
// //   { key: "month",  label: "This Month" },
// //   { key: "custom", label: "Custom"     },
// // ];

// // const CHECK_STATUS_STYLE = {
// //   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
// //   in_progress: { label: "In Progress", bg: "#2b3b8c", color: "#fff" },
// //   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
// //   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
// //   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// // };

// // function statusLabel(s) {
// //   return { "pending": "Pending", "in-progress": "In Progress", "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold" }[s] || s;
// // }

// // // ── Read ?tab= from URL ───────────────────────────────────────────────────────
// // function getTabFromURL(search) {
// //   const tab = new URLSearchParams(search).get("tab") || "all";
// //   return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// // }

// // export default function Client() {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [cases, setCases]               = useState([]);
// //   const [selectedCase, setSelectedCase] = useState(null);
// //   const [loading, setLoading]           = useState(true);
// //   const [search, setSearch]             = useState("");
// //   const [statusTab, setStatusTab]       = useState(() => getTabFromURL(location.search));
// //   const [dateFilter, setDateFilter]     = useState("month");
// //   const [customFrom, setCustomFrom]     = useState("");
// //   const [customTo, setCustomTo]         = useState("");
// //   const [activeDetailTab, setActiveDetailTab] = useState("overview");

// //   const token = localStorage.getItem("token");
// //   const user  = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

// //   // ── Fetch cases ───────────────────────────────────────────────────────────
// //   const fetchCases = () => {
// //     setLoading(true);
// //     fetch(`${API_URL}/api/cases`, {
// //       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
// //     })
// //       .then(r => r.json())
// //       .then(data => {
// //         const list = data.cases || [];
// //         setCases(list);

// //         // Auto-select first case matching the current URL tab
// //         const currentTab = getTabFromURL(location.search);
// //         const first = list.find(c => currentTab === "all" || c.status === currentTab);
// //         setSelectedCase(first || list[0] || null);
// //       })
// //       .catch(console.error)
// //       .finally(() => setLoading(false));
// //   };

// //   useEffect(() => { fetchCases(); }, []);

// //   // ── KEY FIX: sync tab when URL ?tab= changes (sidebar clicks) ────────────
// //   useEffect(() => {
// //     const tab = getTabFromURL(location.search);
// //     setStatusTab(tab);
// //     setSearch("");
// //     setActiveDetailTab("overview");
// //     // Auto-select first case for this tab (cases may already be loaded)
// //     if (cases.length > 0) {
// //       const first = cases.find(c => tab === "all" || c.status === tab);
// //       setSelectedCase(first || null);
// //     }
// //   }, [location.search]); // ← fires on every sidebar click

// //   // ── Date filter helper ────────────────────────────────────────────────────
// //   const isInRange = (createdAt) => {
// //     if (!createdAt) return true;
// //     const d   = new Date(createdAt);
// //     const now = new Date();
// //     if (dateFilter === "today") return d.toDateString() === now.toDateString();
// //     if (dateFilter === "week")  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
// //     if (dateFilter === "month") { return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); }
// //     if (dateFilter === "custom") {
// //       if (!customFrom && !customTo) return true; // no range picked yet → show all
// //       const from = customFrom ? new Date(customFrom) : null;
// //       const to   = customTo ? new Date(customTo + "T23:59:59") : null;
// //       if (from && d < from) return false;
// //       if (to && d > to) return false;
// //       return true;
// //     }
// //     return true;
// //   };

// //   // ── Whether the Dashboard view is active ─────────────────────────────────
// //   // /Client (no ?tab= at all)   → Sidebar "Dashboard"  → isDashboard = true
// //   // /Client?tab=all             → Sidebar "Total Cases" → isDashboard = false
// //   // Both have statusTab === "all", so this MUST be derived from the URL,
// //   // not from statusTab.
// //   const isDashboard = !new URLSearchParams(location.search).get("tab");

// //   // ── Filtered list ─────────────────────────────────────────────────────────
// //   // Date filtering only applies on the Dashboard view (isDashboard === true).
// //   // Total Cases / Pending / In Progress / Completed always show their full
// //   // set of matching cases regardless of the date range.
// //   const filtered = cases.filter(c => {
// //     const matchTab    = statusTab === "all" || c.status === statusTab;
// //     const matchSearch = !search ||
// //       (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
// //       (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
// //     const matchDate   = !isDashboard || isInRange(c.created_at);
// //     return matchTab && matchSearch && matchDate;
// //   });

// //   // ── Counts ────────────────────────────────────────────────────────────────
// //   const counts = {
// //     all:           cases.length,
// //     pending:       cases.filter(c => c.status === "pending").length,
// //     "in-progress": cases.filter(c => c.status === "in-progress").length,
// //     completed:     cases.filter(c => c.status === "completed").length,
// //   };

// //   const total     = cases.length;
// //   const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;

// //   // ── Progress helpers ──────────────────────────────────────────────────────
// //   const progressPct = (c) => {
// //     if (c.status === "completed")   return 100;
// //     if (c.status === "qc-review")   return 85;
// //     if (c.status === "in-progress") return 60;
// //     return 20;
// //   };
// //   const progressColor = (pct) => {
// //     if (pct >= 100) return "#10b981";
// //     if (pct >= 60)  return "#028090";
// //     return "#f59e0b";
// //   };
// //   const checksArr = (s) => s ? s.split(/[·,]/).map(x => x.trim()).filter(Boolean) : [];

// //   // ── Tab change from buttons (not sidebar) ─────────────────────────────────
// //   const handleTabChange = (key) => {
// //     navigate(`/Client?tab=${key}`, { replace: true });
// //   };

// //   // ── Export CSV ────────────────────────────────────────────────────────────
// //   const exportCSV = () => {
// //     const headers = ["Case ID", "Candidate", "Checks", "Status", "Created", "Amount"];
// //     const rows    = filtered.map(c => [
// //       c.case_id,
// //       c.candidate || c.candidate_name,
// //       Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
// //       c.status, c.created_at,
// //       `₹${c.total_amount || 0}`,
// //     ]);
// //     const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
// //     const blob = new Blob([csv], { type: "text/csv" });
// //     const url  = URL.createObjectURL(blob);
// //     const a    = document.createElement("a");
// //     a.href = url; a.download = `my-cases-${Date.now()}.csv`; a.click();
// //     URL.revokeObjectURL(url);
// //   };

// //   return (
// //     <>
// //       <Sidebar />
// //       <section id="content">
// //         <Header />
// //         <main>
// //           <div className="dash-wrper">

// //             {/* ── Page header — NO Add Case button here ── */}
// //             <div className="dash-upper-head">
// //               <div className="left">
// //                 <div className="dash-title-flex">
// //                   <h3 className="dash-title-text">Client Portal</h3>
// //                   <span style={{ fontSize: "12px", color: "#64748b", background: "#eef3ff", padding: "3px 10px", borderRadius: "20px" }}>
// //                     {user.name || "My Account"}
// //                   </span>
// //                 </div>
// //               </div>
// //               <div className="right">
// //                 <input
// //                   type="text"
// //                   className="dash-search-input"
// //                   placeholder="Search case ID or candidate…"
// //                   value={search}
// //                   onChange={e => setSearch(e.target.value)}
// //                 />
// //                 {search && (
// //                   <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
// //                 )}
// //                 <button className="primary-cta export" onClick={exportCSV}>
// //                   <img src="images/dashboard/export-icon.svg" alt="" /> Export
// //                 </button>
// //               </div>
// //             </div>
            

// //             {/* ── Date filter tabs — Dashboard only ── */}
// //             {isDashboard && (
// //               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
// //                 {DATE_FILTERS.map(df => (
// //                   <button
// //                     key={df.key}
// //                     className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
// //                     onClick={() => setDateFilter(df.key)}
// //                   >
// //                     {df.label}
// //                   </button>
// //                 ))}
// //                 {dateFilter === "custom" && (
// //                   <>
// //                     <input
// //                       type="date" value={customFrom}
// //                       onChange={e => setCustomFrom(e.target.value)}
// //                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px", outline: "none" }}
// //                     />
// //                     <span style={{ color: "#94a3b8" }}>→</span>
// //                     <input
// //                       type="date" value={customTo}
// //                       onChange={e => setCustomTo(e.target.value)}
// //                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px", outline: "none" }}
// //                     />
// //                   </>
// //                 )}
// //               </div>
// //             )}

// //             {/* ── Stat cards — same as admin dashboard ── */}
// //             <div className="cards-head-dash">
// //               <div className="card-inner-dash bdr-total">
// //                 <h4>{loading ? "—" : total}</h4>
// //                 <p>Total Cases</p>
// //               </div>
// //               <div className="card-inner-dash bdr-progress">
// //                 <h4>{loading ? "—" : counts["in-progress"]}</h4>
// //                 <p>In Progress</p>
// //               </div>
// //               <div className="card-inner-dash bdr-com">
// //                 <h4>{loading ? "—" : counts.completed}</h4>
// //                 <p>Completed</p>
// //               </div>
// //               <div className="card-inner-dash bdr-rate">
// //                 <h4>{loading ? "—" : clearRate}%</h4>
// //                 <p>Clear Rate</p>
// //               </div>
// //             </div>

// //             {/* ── Quick Stats + Graph row — Dashboard only ── */}
// //             {isDashboard && (
// //               <div className="dash-inner-wrp-both" style={{ marginBottom: "0" }}>
// //                 <div className="dash-inner-left">
// //                   <div className="up-table">
// //                     <div style={{ background: "#27348B", color: "#fff", padding: "14px 18px", fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
// //                       <span>CASE TRENDS — {DATE_FILTERS.find(d => d.key === dateFilter)?.label}</span>
// //                       <span style={{ color: "#14d8a7" }}>
// //                         {counts.completed > 0 ? `▲ ${clearRate}% clear rate` : "No completions yet"}
// //                       </span>
// //                     </div>
// //                     <img src="/images/dashboard/graph-dash.png" alt="Graph" style={{ width: "100%", display: "block" }} />
// //                   </div>
// //                 </div>

// //                 <div className="dash-inner-right">
// //                   <div className="quick-stats">
// //                     <div className="stats-header"><h3>QUICK STATS</h3></div>
// //                     <div className="stats-body">
// //                       <div className="stats-row">
// //                         <span>Total Cases</span>
// //                         <strong>{loading ? "—" : total}</strong>
// //                       </div>
// //                       <div className="stats-row">
// //                         <span>Pending</span>
// //                         <strong>{loading ? "—" : counts.pending}</strong>
// //                       </div>
// //                       <div className="stats-row">
// //                         <span>In Progress</span>
// //                         <strong>{loading ? "—" : counts["in-progress"]}</strong>
// //                       </div>
// //                       <div className="stats-row">
// //                         <span>Completed</span>
// //                         <strong>{loading ? "—" : counts.completed}</strong>
// //                       </div>
// //                       <div className="stats-row">
// //                         <span>Clear Rate</span>
// //                         <strong>{loading ? "—" : `${clearRate}%`}</strong>
// //                       </div>
// //                       <div className="stats-row">
// //                         <span>Avg TAT</span>
// //                         <strong>—</strong>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// // {/* ── Status filter tabs ── */}
// // {/* ── Status filter tabs — Dashboard only ── */}
// // {isDashboard && (
// //   <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
// //     {STATUS_TABS.map(tab => (
// //       <button
// //         key={tab.key}
// //         className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
// //         onClick={() => handleTabChange(tab.key)}
// //       >
// //         {tab.label}
// //         <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
// //           {counts[tab.key] ?? 0}
// //         </span>
// //       </button>
// //     ))}
// //   </div>
// // )}

// //             {/* ── Split panel: case list + detail ── */}
// //             <div className="dash-inner-wrp-both client-portal">

// //               {/* LEFT: Case list */}
// //               <div className="dash-inner-left">
// //                 <div className="down-table">
// //                   <div className="client-portal-cases">
// //                     <h3>
// //                       {STATUS_TABS.find(t => t.key === statusTab)?.label.toUpperCase()} ({filtered.length})
// //                     </h3>
// //                   </div>

// //                   {loading ? (
// //                     <p style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>Loading cases…</p>
// //                   ) : filtered.length === 0 ? (
// //                     <div style={{ padding: "40px", textAlign: "center" }}>
// //                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>
// //                         No {statusTab === "all" ? "" : statusTab + " "}cases found.
// //                       </p>
// //                       {cases.length === 0 && (
// //                         <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>
// //                           + Add Your First Case
// //                         </button>
// //                       )}
// //                     </div>
// //                   ) : (
// //                     <table>
// //                       <tbody>
// //                         {filtered.map(c => {
// //                           const pct        = progressPct(c);
// //                           const color      = progressColor(pct);
// //                           const isSelected = selectedCase?.case_id === c.case_id;
// //                           const name       = c.candidate || c.candidate_name || "—";
// //                           return (
// //                             <tr className="boder-tbl active"
// //                               key={c.case_id}
// //                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
// //                               // style={{
// //                               //   cursor:     "pointer",
// //                               //   background: isSelected ? "#eef1fb" : undefined,
// //                               //   borderLeft: isSelected ? "4px solid #2b3b8c" : "4px solid transparent",
// //                               // }}
// //                             >
// //                               <td>
// //                                 <div className="criminal-case">
// //                                   <p>
// //                                     <span>{c.case_id}</span><br />
// //                                     {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
// //                                   </p>
// //                                 </div>
// //                               </td>
// //                               <td><div className="client-names">{name}</div></td>
// //                               <td>
// //                                 <div className="custom-progress">
// //                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
// //                                 </div>
// //                                 <p className="progress-client-text" style={{ color }}>
// //                                   {c.status === "completed" ? "Done" : `${pct}%`}
// //                                 </p>
// //                               </td>
// //                               <td>
// //                                 <div className="parent-client-boxes">
// //                                   <span className="client-cases-box" style={{ background: color }} />
// //                                 </div>
// //                               </td>
// //                             </tr>
// //                           );
// //                         })}
// //                       </tbody>
// //                     </table>
// //                   )}
// //                 </div>
// //               </div>

// //               {/* RIGHT: Case detail */}
// //               <div className="dash-inner-right status-cases">
// //                 {!selectedCase ? (
// //                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
// //                     <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to view details</p>
// //                   </div>
// //                 ) : (
// //                   <>
// //                     <div className="quick-stats cases">
// //                       <div className="stats-header">
// //                         <h3>CASE — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}</h3>
// //                       </div>
// //                     </div>

// //                     <div className="header-navbar inner-case">
// //                       {["overview", "checks", "documents"].map(t => (
// //                         <button
// //                           key={t}
// //                           className={`tab-cta ${activeDetailTab === t ? "active" : ""}`}
// //                           onClick={() => setActiveDetailTab(t)}
// //                         >
// //                           {t.charAt(0).toUpperCase() + t.slice(1)}
// //                         </button>
// //                       ))}
// //                     </div>

// //                     {/* Overview tab */}
// //                     {activeDetailTab === "overview" && (
// //                       <div className="clients-status">
// //                         {[
// //                           { label: "Case ID",   value: selectedCase.case_id },
// //                           { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
// //                           { label: "Status",    value: statusLabel(selectedCase.status) },
// //                           { label: "Priority",  value: selectedCase.priority || "Normal" },
// //                           { label: "TAT",       value: selectedCase.tat || "—" },
// //                           { label: "Created",   value: selectedCase.created_at ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
// //                           { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
// //                         ].map(r => (
// //                           <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
// //                             <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
// //                             <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     )}

// //                     {/* Checks tab */}
// //                     {activeDetailTab === "timeline" && (
// //                       <div className="clients-status">
// //                         <h4>Check-wise Status</h4>
// //                         <div className="empolyment-body-wrp">
// //                           {checksArr(Array.isArray(selectedCase.checks) ? selectedCase.checks.join("·") : selectedCase.checks).map(ch => {
// //                             const s     = selectedCase.status === "completed" ? "clear" : "in_progress";
// //                             const style = CHECK_STATUS_STYLE[s] || CHECK_STATUS_STYLE.pending;
// //                             return (
// //                               <div className="empolyment-card-wrp" key={ch}>
// //                                 <div className="empolyment-cards">
// //                                   <p>{ch}</p>
// //                                   <span className="primary-cta" style={{ background: style.bg, border: `1px solid ${style.bg}`, color: style.color, width: "45%" }}>
// //                                     {style.label}
// //                                   </span>
// //                                 </div>
// //                               </div>
// //                             );
// //                           })}
// //                         </div>
// //                       </div>
// //                     )}

// //                     {/* Documents tab */}
// //                     {activeDetailTab === "documents" && (
// //                       <div style={{ padding: "16px" }}>
// //                         <p style={{ color: "#94a3b8", fontSize: "14px" }}>Document upload/download coming soon.</p>
// //                       </div>
// //                     )}

// //                     <div className="status-wise" style={{ marginTop: "16px" }}>
// //                       <button className="secondary-cta import" onClick={exportCSV}>
// //                         <img src="images/dashboard/export-excel.svg" alt="" /> Download Report
// //                       </button>
// //                       <button className="primary-cta export">
// //                         <img src="images/dashboard/export-icon.svg" alt="" /> Submit Query
// //                       </button>
// //                     </div>
// //                   </>
// //                 )}
// //               </div>
// //             </div>

// //           </div>
// //         </main>
// //       </section>
// //     </>
// //   );
// // }
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import CaseTrendsChart from "./CaseTrendsChart";
// import { API_URL } from "../src/config";

// const STATUS_TABS = [
//   { key: "all",         label: "All Cases"   },
//   { key: "pending",     label: "Pending"     },
//   { key: "in-progress", label: "In Progress" },
//   { key: "completed",   label: "Completed"   },
// ];

// const DATE_FILTERS = [
//   { key: "today",  label: "Today"      },
//   { key: "week",   label: "This Week"  },
//   { key: "month",  label: "This Month" },
//   { key: "custom", label: "Custom"     },
// ];

// const CHECK_STATUS_STYLE = {
//   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
//   in_progress: { label: "In Progress", bg: "#2b3b8c", color: "#fff" },
//   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
//   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
//   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// };

// function statusLabel(s) {
//   return {
//     "pending": "Pending", "in-progress": "In Progress",
//     "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold",
//   }[s] || s;
// }

// function getTabFromURL(search) {
//   const tab = new URLSearchParams(search).get("tab") || "all";
//   return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// }

// export default function Client() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [cases, setCases]               = useState([]);
//   const [selectedCase, setSelectedCase] = useState(null);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusTab, setStatusTab]       = useState(() => getTabFromURL(location.search));
//   const [dateFilter, setDateFilter]     = useState("month");
//   const [customFrom, setCustomFrom]     = useState("");
//   const [customTo, setCustomTo]         = useState("");
//   const [activeDetailTab, setActiveDetailTab] = useState("overview");

//   const token = localStorage.getItem("token");
//   const user  = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

//   const fetchCases = () => {
//     setLoading(true);
//     fetch(`${API_URL}/api/cases`, {
//       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
//     })
//       .then(r => r.json())
//       .then(data => {
//         const list = data.cases || [];
//         setCases(list);
//         const currentTab = getTabFromURL(location.search);
//         const first = list.find(c => currentTab === "all" || c.status === currentTab);
//         setSelectedCase(first || list[0] || null);
//       })
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => { fetchCases(); }, []);

//   useEffect(() => {
//     const tab = getTabFromURL(location.search);
//     setStatusTab(tab);
//     setSearch("");
//     setActiveDetailTab("overview");
//     if (cases.length > 0) {
//       const first = cases.find(c => tab === "all" || c.status === tab);
//       setSelectedCase(first || null);
//     }
//   }, [location.search]);

//   const isInRange = (createdAt) => {
//     if (!createdAt) return true;
//     const d   = new Date(createdAt);
//     const now = new Date();
//     if (dateFilter === "today") return d.toDateString() === now.toDateString();
//     if (dateFilter === "week")  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
//     if (dateFilter === "month") { return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); }
//     if (dateFilter === "custom") {
//       if (!customFrom && !customTo) return true;
//       const from = customFrom ? new Date(customFrom) : null;
//       const to   = customTo   ? new Date(customTo + "T23:59:59") : null;
//       if (from && d < from) return false;
//       if (to   && d > to)   return false;
//       return true;
//     }
//     return true;
//   };

//   const isDashboard = !new URLSearchParams(location.search).get("tab");

//   const filtered = cases.filter(c => {
//     const matchTab    = statusTab === "all" || c.status === statusTab;
//     const matchSearch = !search ||
//       (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
//       (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
//     const matchDate = !isDashboard || isInRange(c.created_at);
//     return matchTab && matchSearch && matchDate;
//   });

//   const counts = {
//     all:           cases.length,
//     pending:       cases.filter(c => c.status === "pending").length,
//     "in-progress": cases.filter(c => c.status === "in-progress").length,
//     completed:     cases.filter(c => c.status === "completed").length,
//   };

//   const total     = cases.length;
//   const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;

//   const progressPct = (c) => {
//     if (c.status === "completed")   return 100;
//     if (c.status === "qc-review")   return 85;
//     if (c.status === "in-progress") return 60;
//     return 20;
//   };
//   const progressColor = (pct) => {
//     if (pct >= 100) return "#10b981";
//     if (pct >= 60)  return "#028090";
//     return "#f59e0b";
//   };
//   const checksArr = (s) => s ? s.split(/[·,]/).map(x => x.trim()).filter(Boolean) : [];

//   const handleTabChange = (key) => {
//     navigate(`/Client?tab=${key}`, { replace: true });
//   };

//   const exportCSV = () => {
//     const headers = ["Case ID", "Candidate", "Checks", "Status", "Created", "Amount"];
//     const rows    = filtered.map(c => [
//       c.case_id,
//       c.candidate || c.candidate_name,
//       Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
//       c.status, c.created_at,
//       `₹${c.total_amount || 0}`,
//     ]);
//     const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
//     const blob = new Blob([csv], { type: "text/csv" });
//     const url  = URL.createObjectURL(blob);
//     const a    = document.createElement("a");
//     a.href = url; a.download = `my-cases-${Date.now()}.csv`; a.click();
//     URL.revokeObjectURL(url);
//   };

//   // Filtered cases for chart (date-filtered on dashboard)
//   const chartCases = isDashboard
//     ? cases.filter(c => isInRange(c.created_at))
//     : cases;

//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">

//             {/* Page header */}
//             <div className="dash-upper-head">
//               <div className="left">
//                 <div className="dash-title-flex">
//                   <h3 className="dash-title-text">Client Portal</h3>
//                   <span style={{ fontSize: "12px", color: "#64748b", background: "#eef3ff", padding: "3px 10px", borderRadius: "20px" }}>
//                     {user.name || "My Account"}
//                   </span>
//                 </div>
//               </div>
//               <div className="right">
//                 <input
//                   type="text"
//                   className="dash-search-input"
//                   placeholder="Search case ID or candidate…"
//                   value={search}
//                   onChange={e => setSearch(e.target.value)}
//                 />
//                 {search && (
//                   <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
//                 )}
//                 <button className="primary-cta export" onClick={exportCSV}>
//                   <img src="images/dashboard/export-icon.svg" alt="" /> Export
//                 </button>
//               </div>
//             </div>

//             {/* Date filter tabs — Dashboard only */}
//             {isDashboard && (
//               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
//                 {DATE_FILTERS.map(df => (
//                   <button
//                     key={df.key}
//                     className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
//                     onClick={() => setDateFilter(df.key)}
//                   >
//                     {df.label}
//                   </button>
//                 ))}
//                 {dateFilter === "custom" && (
//                   <>
//                     <input
//                       type="date" value={customFrom}
//                       onChange={e => setCustomFrom(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }}
//                     />
//                     <span style={{ color: "#94a3b8" }}>→</span>
//                     <input
//                       type="date" value={customTo}
//                       onChange={e => setCustomTo(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }}
//                     />
//                   </>
//                 )}
//               </div>
//             )}

//             {/* Stat cards */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total">
//                 <h4>{loading ? "—" : total}</h4>
//                 <p>Total Cases</p>
//               </div>
//               <div className="card-inner-dash bdr-progress">
//                 <h4>{loading ? "—" : counts["in-progress"]}</h4>
//                 <p>In Progress</p>
//               </div>
//               <div className="card-inner-dash bdr-com">
//                 <h4>{loading ? "—" : counts.completed}</h4>
//                 <p>Completed</p>
//               </div>
//               <div className="card-inner-dash bdr-rate">
//                 <h4>{loading ? "—" : clearRate}%</h4>
//                 <p>Clear Rate</p>
//               </div>
//             </div>

//             {/* Chart + Quick Stats — Dashboard only */}
//             {isDashboard && (
//               <div className="dash-inner-wrp-both" style={{ marginBottom: "0" }}>
//                 <div className="dash-inner-left">
//                   <CaseTrendsChart
//                     casesData={chartCases}
//                     label={DATE_FILTERS.find(d => d.key === dateFilter)?.label}
//                     vsText={counts.completed > 0 ? `▲ ${clearRate}% clear rate` : "No completions yet"}
//                     vsColor={counts.completed > 0 ? "#14d8a7" : "#94a3b8"}
//                     dateFilter={dateFilter}
//                     customFrom={customFrom}
//                     customTo={customTo}
//                   />
//                 </div>

//                 <div className="dash-inner-right">
//                   <div className="quick-stats">
//                     <div className="stats-header"><h3>QUICK STATS</h3></div>
//                     <div className="stats-body">
//                       <div className="stats-row"><span>Total Cases</span><strong>{loading ? "—" : total}</strong></div>
//                       <div className="stats-row"><span>Pending</span><strong>{loading ? "—" : counts.pending}</strong></div>
//                       <div className="stats-row"><span>In Progress</span><strong>{loading ? "—" : counts["in-progress"]}</strong></div>
//                       <div className="stats-row"><span>Completed</span><strong>{loading ? "—" : counts.completed}</strong></div>
//                       <div className="stats-row"><span>Clear Rate</span><strong>{loading ? "—" : `${clearRate}%`}</strong></div>
//                       <div className="stats-row"><span>Avg TAT</span><strong>—</strong></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Status filter tabs — Dashboard only */}
//             {isDashboard && (
//               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
//                 {STATUS_TABS.map(tab => (
//                   <button
//                     key={tab.key}
//                     className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
//                     onClick={() => handleTabChange(tab.key)}
//                   >
//                     {tab.label}
//                     <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
//                       {counts[tab.key] ?? 0}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Split panel: case list + detail */}
//             <div className="dash-inner-wrp-both client-portal">

//               {/* LEFT: Case list */}
//               <div className="dash-inner-left">
//                 <div className="down-table">
//                   <div className="client-portal-cases">
//                     <h3>{STATUS_TABS.find(t => t.key === statusTab)?.label.toUpperCase()} ({filtered.length})</h3>
//                   </div>

//                   {loading ? (
//                     <p style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>Loading cases…</p>
//                   ) : filtered.length === 0 ? (
//                     <div style={{ padding: "40px", textAlign: "center" }}>
//                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>
//                         No {statusTab === "all" ? "" : statusTab + " "}cases found.
//                       </p>
//                       {cases.length === 0 && (
//                         <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>
//                           + Add Your First Case
//                         </button>
//                       )}
//                     </div>
//                   ) : (
//                     <table>
//                       <tbody>
//                         {filtered.map(c => {
//                           const pct   = progressPct(c);
//                           const color = progressColor(pct);
//                           const name  = c.candidate || c.candidate_name || "—";
//                           return (
//                             <tr className="boder-tbl active" key={c.case_id}
//                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
//                             >
//                               <td>
//                                 <div className="criminal-case">
//                                   <p>
//                                     <span>{c.case_id}</span><br />
//                                     {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
//                                   </p>
//                                 </div>
//                               </td>
//                               <td><div className="client-names">{name}</div></td>
//                               <td>
//                                 <div className="custom-progress">
//                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
//                                 </div>
//                                 <p className="progress-client-text" style={{ color }}>
//                                   {c.status === "completed" ? "Done" : `${pct}%`}
//                                 </p>
//                               </td>
//                               <td>
//                                 <div className="parent-client-boxes">
//                                   <span className="client-cases-box" style={{ background: color }} />
//                                 </div>
//                               </td>
//                             </tr>
//                           );
//                         })}
//                       </tbody>
//                     </table>
//                   )}
//                 </div>
//               </div>

//               {/* RIGHT: Case detail */}
//               <div className="dash-inner-right status-cases">
//                 {!selectedCase ? (
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
//                     <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to view details</p>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="quick-stats cases">
//                       <div className="stats-header">
//                         <h3>CASE — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}</h3>
//                       </div>
//                     </div>

//                     <div className="header-navbar inner-case">
//                       {["overview", "checks", "documents"].map(t => (
//                         <button
//                           key={t}
//                           className={`tab-cta ${activeDetailTab === t ? "active" : ""}`}
//                           onClick={() => setActiveDetailTab(t)}
//                         >
//                           {t.charAt(0).toUpperCase() + t.slice(1)}
//                         </button>
//                       ))}
//                     </div>

//                     {activeDetailTab === "overview" && (
//                       <div className="clients-status">
//                         {[
//                           { label: "Case ID",   value: selectedCase.case_id },
//                           { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
//                           { label: "Status",    value: statusLabel(selectedCase.status) },
//                           { label: "Priority",  value: selectedCase.priority || "Normal" },
//                           { label: "TAT",       value: selectedCase.tat || "—" },
//                           { label: "Created",   value: selectedCase.created_at ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
//                           { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
//                         ].map(r => (
//                           <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
//                             <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
//                             <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {activeDetailTab === "checks" && (
//                       <div className="clients-status">
//                         <div className="empolyment-body-wrp">
//                           {checksArr(Array.isArray(selectedCase.checks) ? selectedCase.checks.join("·") : selectedCase.checks).map(ch => {
//                             const s     = selectedCase.status === "completed" ? "clear" : "in_progress";
//                             const style = CHECK_STATUS_STYLE[s] || CHECK_STATUS_STYLE.pending;
//                             return (
//                               <div className="empolyment-card-wrp" key={ch}>
//                                 <div className="empolyment-cards">
//                                   <p>{ch}</p>
//                                   <span className="primary-cta" style={{ background: style.bg, border: `1px solid ${style.bg}`, color: style.color, width: "45%" }}>
//                                     {style.label}
//                                   </span>
//                                 </div>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     )}

//                     {activeDetailTab === "documents" && (
//                       <div style={{ padding: "16px" }}>
//                         <p style={{ color: "#94a3b8", fontSize: "14px" }}>Document upload/download coming soon.</p>
//                       </div>
//                     )}

//                     <div className="status-wise" style={{ marginTop: "16px" }}>
//                       <button className="secondary-cta import" onClick={exportCSV}>
//                         <img src="images/dashboard/export-excel.svg" alt="" /> Download Report
//                       </button>
//                       <button className="primary-cta export">
//                         <img src="images/dashboard/export-icon.svg" alt="" /> Submit Query
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>

//           </div>
//         </main>
//       </section>
//     </>
//   );
// }
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CaseTrendsChart from "./CaseTrendsChart";
import { API_URL } from "../src/config";

const STATUS_TABS = [
  { key: "all",         label: "All Cases"   },
  { key: "pending",     label: "Pending"     },
  { key: "in-progress", label: "In Progress" },
  { key: "completed",   label: "Completed"   },
];

const DATE_FILTERS = [
  { key: "today",  label: "Today"      },
  { key: "week",   label: "This Week"  },
  { key: "month",  label: "This Month" },
  { key: "custom", label: "Custom"     },
];

const CHECK_BADGE = {
  clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
  in_progress: { label: "In Progress", bg: "#028090", color: "#fff" },
  pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
  discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
  na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
};

// ── Status → color + progress mapping ─────────────────────────────────────
const STATUS_META = {
  "pending":     { color: "#f59e0b", pct: 20, dayLabel: (c) => `Day 1/7`   },
  "in-progress": { color: "#028090", pct: 60, dayLabel: (c) => `Day 4/7`   },
  "qc-review":   { color: "#7c3aed", pct: 85, dayLabel: (c) => `Day 6/7`   },
  "completed":   { color: "#10b981", pct: 100, dayLabel: (c) => `Done`     },
  "on-hold":     { color: "#94a3b8", pct: 30, dayLabel: (c) => `On Hold`   },
};

function getStatusMeta(status) {
  return STATUS_META[status] || STATUS_META["pending"];
}

function statusLabel(s) {
  return {
    "pending": "Pending", "in-progress": "In Progress",
    "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold",
  }[s] || s;
}

// ── Fix scientific notation TAT ────────────────────────────────────────────
function formatTAT(tat) {
  if (!tat) return "—";
  const str = String(tat);
  // Catch scientific notation like 7.84465625E-5d or 1.2e+3
  if (/\d+\.?\d*[eE][+\-]?\d+/.test(str)) return "—";
  // If it's a plain number (days stored as float), round it
  const num = parseFloat(str);
  if (!isNaN(num) && !str.includes("d") && !str.includes("D")) {
    return `${Math.round(num)} days`;
  }
  return str;
}

function getTabFromURL(search) {
  const tab = new URLSearchParams(search).get("tab") || "all";
  return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
}

function inferCheckStatus(caseStat) {
  if (caseStat === "completed")   return "clear";
  if (caseStat === "in-progress") return "in_progress";
  if (caseStat === "pending")     return "pending";
  return "na";
}

export default function Client() {
  const navigate = useNavigate();
  const location = useLocation();

  const [cases, setCases]               = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [loading, setLoading]           = useState(true);
  const [search, setSearch]             = useState("");
  const [statusTab, setStatusTab]       = useState(() => getTabFromURL(location.search));
  const [dateFilter, setDateFilter]     = useState("month");
  const [customFrom, setCustomFrom]     = useState("");
  const [customTo, setCustomTo]         = useState("");
  const [activeDetailTab, setActiveDetailTab] = useState("overview");

  const token = localStorage.getItem("token");
  const user  = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

  const fetchCases = () => {
    setLoading(true);
    fetch(`${API_URL}/api/cases`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then(r => r.json())
      .then(data => {
        const list = data.cases || [];
        setCases(list);
        const currentTab = getTabFromURL(location.search);
        const first = list.find(c => currentTab === "all" || c.status === currentTab);
        setSelectedCase(first || list[0] || null);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchCases(); }, []);

  useEffect(() => {
    const tab = getTabFromURL(location.search);
    setStatusTab(tab);
    setSearch("");
    setActiveDetailTab("overview");
    if (cases.length > 0) {
      const first = cases.find(c => tab === "all" || c.status === tab);
      setSelectedCase(first || null);
    }
  }, [location.search]);

  const isInRange = (createdAt) => {
    if (!createdAt) return true;
    const d   = new Date(createdAt);
    const now = new Date();
    if (dateFilter === "today") return d.toDateString() === now.toDateString();
    if (dateFilter === "week")  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
    if (dateFilter === "month") { return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); }
    if (dateFilter === "custom") {
      if (!customFrom && !customTo) return true;
      const from = customFrom ? new Date(customFrom) : null;
      const to   = customTo   ? new Date(customTo + "T23:59:59") : null;
      if (from && d < from) return false;
      if (to   && d > to)   return false;
      return true;
    }
    return true;
  };

  const isDashboard = !new URLSearchParams(location.search).get("tab");

  const filtered = cases.filter(c => {
    const matchTab    = statusTab === "all" || c.status === statusTab;
    const matchSearch = !search ||
      (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
      (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
    const matchDate = !isDashboard || isInRange(c.created_at);
    return matchTab && matchSearch && matchDate;
  });

  const counts = {
    all:           cases.length,
    pending:       cases.filter(c => c.status === "pending").length,
    "in-progress": cases.filter(c => c.status === "in-progress").length,
    completed:     cases.filter(c => c.status === "completed").length,
  };

  const total     = cases.length;
  const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;
  const chartCases = isDashboard ? cases.filter(c => isInRange(c.created_at)) : cases;

  const getChecksArray = (c) => {
    if (Array.isArray(c.checks)) return c.checks;
    if (typeof c.checks === "string") return c.checks.split(/[·,]/).map(x => x.trim()).filter(Boolean);
    return [];
  };

  const getCheckStatus = (c, checkName) => {
    if (c.check_statuses && c.check_statuses[checkName]) return c.check_statuses[checkName];
    return inferCheckStatus(c.status);
  };

  const handleTabChange = (key) => {
    navigate(`/Client?tab=${key}`, { replace: true });
  };

  const exportCSV = () => {
    const headers = ["Case ID", "Candidate", "Checks", "Status", "Created", "Amount"];
    const rows    = filtered.map(c => [
      c.case_id,
      c.candidate || c.candidate_name,
      Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
      c.status, c.created_at, `₹${c.total_amount || 0}`,
    ]);
    const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = `my-cases-${Date.now()}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  // ── Check-wise Status grid ─────────────────────────────────────────────────
  const CheckwiseGrid = ({ c }) => {
    const checks = getChecksArray(c);
    if (checks.length === 0) return (
      <p style={{ color: "#94a3b8", fontSize: "13px", padding: "12px 0" }}>No checks assigned.</p>
    );
    const left  = checks.filter((_, i) => i % 2 === 0);
    const right = checks.filter((_, i) => i % 2 !== 0);
    return (
      <div>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Check-wise Status
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 12px" }}>
          <div>
            {left.map((chk, i) => {
              const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
              return (
                <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: i < left.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                  <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
                  <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", minWidth: "86px", textAlign: "center" }}>{badge.label}</span>
                </div>
              );
            })}
          </div>
          <div style={{ background: "#e2e8f0" }} />
          <div>
            {right.map((chk, i) => {
              const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
              return (
                <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: i < right.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                  <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
                  <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", minWidth: "86px", textAlign: "center" }}>{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            <div className="dash-upper-head">
              <div className="left">
                <div className="dash-title-flex">
                  <h3 className="dash-title-text">Client Portal</h3>
                  <span style={{ fontSize: "12px", color: "#64748b", background: "#eef3ff", padding: "3px 10px", borderRadius: "20px" }}>
                    {user.name || "My Account"}
                  </span>
                </div>
              </div>
              <div className="right">
                <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
                  value={search} onChange={e => setSearch(e.target.value)} />
                {search && (
                  <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
                )}
                <button className="primary-cta export" onClick={exportCSV}>
                  <img src="images/dashboard/export-icon.svg" alt="" /> Export
                </button>
              </div>
            </div>

            {isDashboard && (
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                {DATE_FILTERS.map(df => (
                  <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`} onClick={() => setDateFilter(df.key)}>
                    {df.label}
                  </button>
                ))}
                {dateFilter === "custom" && (
                  <>
                    <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
                      style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
                    <span style={{ color: "#94a3b8" }}>→</span>
                    <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
                      style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
                  </>
                )}
              </div>
            )}

            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total"><h4>{loading ? "—" : total}</h4><p>Total Cases</p></div>
              <div className="card-inner-dash bdr-progress"><h4>{loading ? "—" : counts["in-progress"]}</h4><p>In Progress</p></div>
              <div className="card-inner-dash bdr-com"><h4>{loading ? "—" : counts.completed}</h4><p>Completed</p></div>
              <div className="card-inner-dash bdr-rate"><h4>{loading ? "—" : clearRate}%</h4><p>Clear Rate</p></div>
            </div>

            {isDashboard && (
              <div className="dash-inner-wrp-both" style={{ marginBottom: "0" }}>
                <div className="dash-inner-left">
                  <CaseTrendsChart
                    casesData={chartCases}
                    label={DATE_FILTERS.find(d => d.key === dateFilter)?.label}
                    vsText={counts.completed > 0 ? `▲ ${clearRate}% clear rate` : "No completions yet"}
                    vsColor={counts.completed > 0 ? "#14d8a7" : "#94a3b8"}
                    dateFilter={dateFilter} customFrom={customFrom} customTo={customTo}
                  />
                </div>
                <div className="dash-inner-right">
                  <div className="quick-stats">
                    <div className="stats-header"><h3>QUICK STATS</h3></div>
                    <div className="stats-body">
                      <div className="stats-row"><span>Total Cases</span><strong>{loading ? "—" : total}</strong></div>
                      <div className="stats-row"><span>Pending</span><strong>{loading ? "—" : counts.pending}</strong></div>
                      <div className="stats-row"><span>In Progress</span><strong>{loading ? "—" : counts["in-progress"]}</strong></div>
                      <div className="stats-row"><span>Completed</span><strong>{loading ? "—" : counts.completed}</strong></div>
                      <div className="stats-row"><span>Clear Rate</span><strong>{loading ? "—" : `${clearRate}%`}</strong></div>
                      <div className="stats-row"><span>Avg TAT</span><strong>—</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isDashboard && (
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {STATUS_TABS.map(tab => (
                  <button key={tab.key} className={`tab-cta ${statusTab === tab.key ? "active" : ""}`} onClick={() => handleTabChange(tab.key)}>
                    {tab.label}
                    <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
                      {counts[tab.key] ?? 0}
                    </span>
                  </button>
                ))}
              </div>
            )}

            <div className="dash-inner-wrp-both client-portal">

              {/* LEFT: Case list */}
              <div className="dash-inner-left">
                <div className="down-table">
                  <div className="client-portal-cases">
                    <h3>{STATUS_TABS.find(t => t.key === statusTab)?.label.toUpperCase()} ({filtered.length})</h3>
                  </div>

                  {loading ? (
                    <p style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>Loading cases…</p>
                  ) : filtered.length === 0 ? (
                    <div style={{ padding: "40px", textAlign: "center" }}>
                      <p style={{ color: "#94a3b8", fontSize: "14px" }}>No {statusTab === "all" ? "" : statusTab + " "}cases found.</p>
                      {cases.length === 0 && (
                        <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>+ Add Your First Case</button>
                      )}
                    </div>
                  ) : (
                    <table>
                      <tbody>
                        {filtered.map(c => {
                          // ── FIX: color comes from STATUS, not progress percentage ──
                          const meta       = getStatusMeta(c.status);
                          const color      = meta.color;
                          const pct        = meta.pct;
                          const dayLabel   = meta.dayLabel(c);
                          const name       = c.candidate || c.candidate_name || "—";
                          const isSelected = selectedCase?.case_id === c.case_id;
                          return (
                            <tr
                              className="boder-tbl active"
                              key={c.case_id}
                              onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
                              style={{
                                cursor: "pointer",
                                background: isSelected ? "#eef3ff" : undefined,
                                borderLeft: isSelected ? "3px solid #2b3b8c" : "3px solid transparent",
                              }}
                            >
                              <td>
                                <div className="criminal-case">
                                  <p>
                                    <span>{c.case_id}</span><br />
                                    <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                                      {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
                                    </span>
                                  </p>
                                </div>
                              </td>
                              <td><div className="client-names">{name}</div></td>
                              <td>
                                <div className="custom-progress">
                                  <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
                                </div>
                                {/* ── FIX: label uses status-based text ── */}
                                <p className="progress-client-text" style={{ color }}>{dayLabel}</p>
                              </td>
                              <td>
                                <div className="parent-client-boxes">
                                  {/* ── FIX: box color from status ── */}
                                  <span className="client-cases-box" style={{ background: color }} />
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              {/* RIGHT: Case detail */}
              <div className="dash-inner-right status-cases">
                {!selectedCase ? (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
                    <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to view details</p>
                  </div>
                ) : (
                  <>
                    {/* Header */}
                    <div style={{ background: "#27348B", color: "#fff", padding: "14px 18px", fontWeight: 700, fontSize: "14px", borderRadius: "6px 6px 0 0" }}>
                      CASE — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}
                    </div>

                    {/* 4 tabs */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "1px solid #e2e8f0" }}>
                      {["overview", "checks", "documents", "comments"].map((t, i) => (
                        <button key={t} onClick={() => setActiveDetailTab(t)} style={{
                          padding: "11px 0", border: "none",
                          borderRight: i < 3 ? "1px solid #e2e8f0" : "none",
                          borderBottom: activeDetailTab === t ? "2px solid #27348B" : "2px solid transparent",
                          background: activeDetailTab === t ? "#f0f4ff" : "#fff",
                          color: activeDetailTab === t ? "#27348B" : "#64748b",
                          fontWeight: activeDetailTab === t ? 700 : 400,
                          fontSize: "13px", cursor: "pointer", textTransform: "capitalize",
                        }}>
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </button>
                      ))}
                    </div>

                    <div style={{ border: "1px solid #e2e8f0", borderTop: "none", padding: "16px", borderRadius: "0 0 6px 6px" }}>

                      {/* OVERVIEW */}
                      {activeDetailTab === "overview" && (
                        <div>
                          {[
                            { label: "Case ID",   value: selectedCase.case_id },
                            { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
                            { label: "Status",    value: (
                              <span style={{
                                background: getStatusMeta(selectedCase.status).color,
                                color: "#fff", fontSize: "11px", fontWeight: 700,
                                padding: "3px 10px", borderRadius: "4px",
                              }}>
                                {statusLabel(selectedCase.status)}
                              </span>
                            )},
                            { label: "Priority",  value: selectedCase.priority || "Normal" },
                            // ── FIX: TAT formatted to remove scientific notation ──
                            { label: "TAT",       value: formatTAT(selectedCase.tat) },
                            { label: "Created",   value: selectedCase.created_at ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
                            { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
                          ].map(r => (
                            <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
                              <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
                              <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CHECKS — Check-wise status grid */}
                      {activeDetailTab === "checks" && <CheckwiseGrid c={selectedCase} />}

                      {/* DOCUMENTS */}
                      {activeDetailTab === "documents" && (
                        <div>
                          <CheckwiseGrid c={selectedCase} />
                          <div style={{ marginTop: "16px", padding: "20px", background: "#f8fafc", borderRadius: "6px", textAlign: "center" }}>
                            <p style={{ color: "#94a3b8", fontSize: "13px" }}>Document upload/download coming soon.</p>
                          </div>
                        </div>
                      )}

                      {/* COMMENTS */}
                      {activeDetailTab === "comments" && (
                        <div>
                          <textarea placeholder="Write a comment or query about this case…" style={{
                            width: "100%", minHeight: "100px", padding: "10px 12px",
                            border: "1px solid #e2e8f0", borderRadius: "6px",
                            fontSize: "13px", resize: "vertical", outline: "none", boxSizing: "border-box",
                          }} />
                          <button className="primary-cta" style={{ marginTop: "10px" }}>Submit Comment</button>
                        </div>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "14px" }}>
                      <button className="secondary-cta import" onClick={exportCSV}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px" }}>
                        <img src="images/dashboard/export-excel.svg" alt="" /> Download Report
                      </button>
                      <button className="primary-cta export"
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px" }}>
                        <img src="images/dashboard/export-icon.svg" alt="" /> Submit Query
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}