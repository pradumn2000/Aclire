// // import Header from "./Header";
// // import Sidebar from "./Sidebar";

// // const allCasesData = [
// //   { id: "BGV-2401", candidate: "Ravi Kumar",    client: "Infosys", checks: "Emp·Edu·Addr",  status: "in-progress", label: "In Progress", tat: "3d" },
// //   { id: "BGV-2402", candidate: "Anjali Mehta",  client: "TCS",     checks: "Emp·Criminal",  status: "qc-review",   label: "QC Review",   tat: "5d" },
// //   { id: "BGV-2403", candidate: "Suresh Pillai", client: "Wipro",   checks: "All 7",          status: "completed",   label: "Completed",   tat: "4d" },
// //   { id: "BGV-2404", candidate: "Neha Sharma",   client: "HCL",     checks: "Edu·DB",         status: "pending",     label: "Pending",     tat: "1d" },
// //   { id: "BGV-2405", candidate: "Amit Verma",    client: "Deloitte",checks: "Emp·Edu·Crim",   status: "in-progress", label: "In Progress", tat: "2d" },
// //   { id: "BGV-2406", candidate: "Deepa Nair",    client: "Infosys", checks: "All 7",          status: "in-progress", label: "In Progress", tat: "6d" },
// // ];

// // export default function AllCases() {
// //   return (
// //     <>
// //       <Sidebar />
// //       <section id="content">
// //         <Header />
// //         <main>
// //           <div className="dash-wrper">

// //             <div className="dash-upper-head">
// //               <div className="left">
// //                 <button className="tab-cta active">All</button>
// //                 <button className="tab-cta">In Progress</button>
// //                 <button className="tab-cta">QC Review</button>
// //                 <button className="tab-cta">Pending</button>
// //               </div>
// //               <div className="right">
// //                 <button className="date-wrapper">
// //                   <img src="/images/dashboard/calendar-icon.svg" alt="" />
// //                   <input type="text" name="daterange" className="selectedDate" placeholder="Select Date" readOnly />
// //                 </button>
// //                 <button className="primary-cta export">
// //                   <img src="/images/dashboard/export-icon.svg" alt="" /> Export CSV
// //                 </button>
// //                 <button className="secondary-cta import">
// //                   <img src="/images/dashboard/export-excel.svg" alt="" /> Export Excel
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Search bar */}
// //             <div style={{ margin: "16px 0" }}>
// //               <input
// //                 type="text"
// //                 placeholder="Search candidate or case ID..."
// //                 style={{
// //                   width: "100%", padding: "10px 16px", borderRadius: "8px",
// //                   border: "1px solid #ddd", fontSize: "14px", outline: "none"
// //                 }}
// //               />
// //             </div>

// //             {/* Cases Table */}
// //             <div className="down-table">
// //               <table>
// //                 <thead>
// //                   <tr>
// //                     <th>Case ID</th>
// //                     <th>Candidate</th>
// //                     <th>Client</th>
// //                     <th>Checks</th>
// //                     <th>Status</th>
// //                     <th>TAT</th>
// //                     <th>Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {allCasesData.map((row) => (
// //                     <tr key={row.id}>
// //                       <td>{row.id}</td>
// //                       <td>{row.candidate}</td>
// //                       <td>{row.client}</td>
// //                       <td>{row.checks}</td>
// //                       <td><span className={`status ${row.status}`}>{row.label}</span></td>
// //                       <td>{row.tat}</td>
// //                       <td><button className="view-cta">View</button></td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>

// //           </div>
// //         </main>
// //       </section>
// //     </>
// //   );
// // }
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Header from "./Header";
// // import Sidebar from "./Sidebar";
// // import { useCases } from "../src/hooks/useCases";

// // const STATUS_FILTERS = ["All", "In Progress", "QC Review", "Pending", "Completed"];

// // const STATUS_MAP = {
// //   "In Progress": "in-progress",
// //   "QC Review":   "qc-review",
// //   "Pending":     "pending",
// //   "Completed":   "completed",
// // };

// // export default function AllCases() {
// //   const navigate = useNavigate();
// //   const { cases } = useCases();
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [search, setSearch] = useState("");

// //   const filtered = cases.filter(row => {
// //     const matchStatus =
// //       activeFilter === "All" || row.label === activeFilter;
// //     const q = search.toLowerCase();
// //     const matchSearch =
// //       !q ||
// //       row.id.toLowerCase().includes(q) ||
// //       row.candidate.toLowerCase().includes(q) ||
// //       (row.client || "").toLowerCase().includes(q);
// //     return matchStatus && matchSearch;
// //   });

// //   return (
// //     <>
// //       <Sidebar />
// //       <section id="content">
// //         <Header />
// //         <main>
// //           <div className="dash-wrper">

// //             <div className="dash-upper-head">
// //               <div className="left">
// //                 {STATUS_FILTERS.map(f => (
// //                   <button
// //                     key={f}
// //                     className={`tab-cta ${activeFilter === f ? "active" : ""}`}
// //                     onClick={() => setActiveFilter(f)}
// //                   >
// //                     {f}
// //                   </button>
// //                 ))}
// //               </div>
// //               <div className="right">
// //                 <button className="date-wrapper">
// //                   <img src="/images/dashboard/calendar-icon.svg" alt="" />
// //                   <input type="text" className="selectedDate" placeholder="Select Date" readOnly />
// //                 </button>
// //                 <button className="primary-cta export">
// //                   <img src="/images/dashboard/export-icon.svg" alt="" /> Export CSV
// //                 </button>
// //                 <button className="secondary-cta import">
// //                   <img src="/images/dashboard/export-excel.svg" alt="" /> Export Excel
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Search */}
// //             <div style={{ margin: "16px 0" }}>
// //               <input
// //                 type="text"
// //                 value={search}
// //                 onChange={e => setSearch(e.target.value)}
// //                 placeholder="Search candidate, case ID or client…"
// //                 style={{
// //                   width: "100%", padding: "10px 16px", borderRadius: "8px",
// //                   border: "1px solid #ddd", fontSize: "14px", outline: "none",
// //                   boxSizing: "border-box",
// //                 }}
// //               />
// //             </div>

// //             {/* Table */}
// //             <div className="down-table">
// //               {filtered.length === 0 ? (
// //                 <div style={{
// //                   textAlign: "center", padding: "60px 20px",
// //                   color: "#94a3b8", fontSize: "0.9rem",
// //                 }}>
// //                   {cases.length === 0
// //                     ? <>No cases yet. <button
// //                         onClick={() => navigate("/AddCase")}
// //                         style={{ color: "#2b3b8c", fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}
// //                       >Add your first case →</button></>
// //                     : "No cases match your filter."}
// //                 </div>
// //               ) : (
// //                 <table>
// //                   <thead>
// //                     <tr>
// //                       <th>Case ID</th>
// //                       <th>Candidate</th>
// //                       <th>Client</th>
// //                       <th>Checks</th>
// //                       <th>Status</th>
// //                       <th>TAT</th>
// //                       <th>Action</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {filtered.map(row => (
// //                       <tr key={row.id}>
// //                         <td>{row.id}</td>
// //                         <td>{row.candidate}</td>
// //                         <td>{row.client}</td>
// //                         <td>{row.checks}</td>
// //                         <td>
// //                           <span className={`status ${STATUS_MAP[row.label] || row.status}`}>
// //                             {row.label}
// //                           </span>
// //                         </td>
// //                         <td>{row.tat}</td>
// //                         <td><button className="view-cta">View</button></td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               )}
// //             </div>

// //           </div>
// //         </main>
// //       </section>
// //     </>
// //   );
// // }
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { useCases } from "../src/hooks/useCases";
// import { useCaseFilters } from "../src/hooks/useCaseFilters";
// import DateRangePicker from "../src/components/DateRangePicker";

// const STATUS_TABS   = ["All", "In Progress", "QC Review", "Pending", "Completed"];
// const STATUS_MAP    = {
//   "In Progress": "in-progress",
//   "QC Review":   "qc-review",
//   "Pending":     "pending",
//   "Completed":   "completed",
// };

// export default function AllCases() {
//   const navigate = useNavigate();
//   const { cases } = useCases();

//   const {
//     filtered,
//     datePreset, setDatePreset,
//     customRange, applyCustomRange, clearDate,
//     showPicker, setShowPicker,
//     dateLabel,
//     statusFilter, setStatusFilter,
//     search, setSearch,
//     exportCSV,
//     exportExcel,
//   } = useCaseFilters(cases, { showStatusFilter: true });

//   // Count per status tab (respect date filter but not status filter)
//   const countFor = (label) =>
//     cases.filter(c => {
//       const inDate = (() => {
//         // replicate date logic inline for badge counts
//         if (!c.createdAt) return true;
//         const d = new Date(c.createdAt); d.setHours(0,0,0,0);
//         const t = new Date(); t.setHours(0,0,0,0);
//         if (datePreset === "today") return d.getTime() === t.getTime();
//         if (datePreset === "week")  { const w = new Date(t); w.setDate(t.getDate()-6); return d>=w && d<=t; }
//         if (datePreset === "month") { const m = new Date(t); m.setMonth(t.getMonth()-1); return d>=m && d<=t; }
//         if (datePreset === "custom") {
//           const from = customRange.from ? new Date(customRange.from) : null;
//           const to   = customRange.to   ? new Date(customRange.to)   : null;
//           if (from && d < from) return false;
//           if (to   && d > to)   return false;
//         }
//         return true;
//       })();
//       return inDate && (label === "All" || c.label === label);
//     }).length;

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
//                 {STATUS_TABS.map(tab => (
//                   <button
//                     key={tab}
//                     className={`tab-cta ${statusFilter === tab ? "active" : ""}`}
//                     onClick={() => setStatusFilter(tab)}
//                   >
//                     {tab}
//                     {countFor(tab) > 0 && (
//                       <span style={{
//                         marginLeft: 5,
//                         background: statusFilter === tab ? "#fff" : "#e2e8f0",
//                         color: statusFilter === tab ? "#2b3b8c" : "#64748b",
//                         borderRadius: 10, fontSize: "0.65rem", fontWeight: 700,
//                         padding: "1px 6px",
//                       }}>
//                         {countFor(tab)}
//                       </span>
//                     )}
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

//             {/* ── Search + result count ── */}
//             <div style={{ margin: "16px 0 0", display: "flex", gap: 12, alignItems: "center" }}>
//               <div style={{ flex: 1, position: "relative" }}>
//                 <span style={{
//                   position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
//                   fontSize: "0.9rem", color: "#94a3b8", pointerEvents: "none",
//                 }}>🔍</span>
//                 <input
//                   type="text"
//                   value={search}
//                   onChange={e => setSearch(e.target.value)}
//                   placeholder="Search by candidate name, case ID or client…"
//                   style={{
//                     width: "100%", padding: "10px 16px 10px 34px",
//                     borderRadius: 8, border: "1.5px solid #e2e8f0",
//                     fontSize: "0.875rem", outline: "none", boxSizing: "border-box",
//                     background: "#f8fafc", color: "#1e293b",
//                     transition: "border-color 0.15s",
//                   }}
//                   onFocus={e  => e.target.style.borderColor = "#2b3b8c"}
//                   onBlur={e   => e.target.style.borderColor = "#e2e8f0"}
//                 />
//                 {search && (
//                   <button
//                     onClick={() => setSearch("")}
//                     style={{
//                       position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
//                       background: "none", border: "none", cursor: "pointer",
//                       color: "#94a3b8", fontSize: "1rem", lineHeight: 1,
//                     }}
//                   >×</button>
//                 )}
//               </div>

//               <span style={{ fontSize: "0.78rem", color: "#94a3b8", whiteSpace: "nowrap", flexShrink: 0 }}>
//                 {filtered.length} result{filtered.length !== 1 ? "s" : ""}
//                 {datePreset !== "all" && ` · ${dateLabel}`}
//               </span>
//             </div>

//             {/* ── Export count note ── */}
//             {filtered.length > 0 && (
//               <div style={{ margin: "6px 0 12px", fontSize: "0.72rem", color: "#94a3b8" }}>
//                 Exports will include {filtered.length} filtered case{filtered.length !== 1 ? "s" : ""}.
//               </div>
//             )}

//             {/* ── Table ── */}
//             <div className="down-table">
//               {filtered.length === 0 ? (
//                 <div style={{
//                   textAlign: "center", padding: "60px 20px",
//                   color: "#94a3b8", fontSize: "0.9rem",
//                 }}>
//                   {cases.length === 0 ? (
//                     <>
//                       No cases yet.{" "}
//                       <button
//                         onClick={() => navigate("/AddCase")}
//                         style={{
//                           color: "#2b3b8c", fontWeight: 700,
//                           background: "none", border: "none", cursor: "pointer",
//                         }}
//                       >
//                         Add your first case →
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       No cases match your filters.{" "}
//                       <button
//                         onClick={() => { setStatusFilter("All"); setSearch(""); clearDate(); }}
//                         style={{
//                           color: "#2b3b8c", fontWeight: 700,
//                           background: "none", border: "none", cursor: "pointer",
//                         }}
//                       >
//                         Clear all filters
//                       </button>
//                     </>
//                   )}
//                 </div>
//               ) : (
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Case ID</th>
//                       <th>Candidate</th>
//                       <th>Client</th>
//                       <th>Checks</th>
//                       <th>Status</th>
//                       <th>TAT</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filtered.map(row => (
//                       <tr key={row.id}>
//                         <td>{row.id}</td>
//                         <td>{row.candidate}</td>
//                         <td>{row.client}</td>
//                         <td>{row.checks}</td>
//                         <td>
//                           <span className={`status ${STATUS_MAP[row.label] || row.status}`}>
//                             {row.label}
//                           </span>
//                         </td>
//                         <td>{row.tat}</td>
//                         <td><button className="view-cta">View</button></td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>

//           </div>
//         </main>
//       </section>
//     </>
//   );
// }
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { API_URL } from "../src/config";

// const STATUS_TABS = [
//   { key: "all",         label: "All"         },
//   { key: "pending",     label: "Pending"     },
//   { key: "in-progress", label: "In Progress" },
//   { key: "qc-review",   label: "QC Review"   },
//   { key: "completed",   label: "Completed"   },
// ];

// export default function AllCases() {
//   const navigate = useNavigate();
//   const [cases, setCases]       = useState([]);
//   const [loading, setLoading]   = useState(true);
//   const [error, setError]       = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   const [search, setSearch]     = useState("");

//   const token = localStorage.getItem("token");
//   const user  = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();
//   const isAdmin = ["admin", "check_manager", "allocator", "pvt_qc"].includes(user.role);

//   useEffect(() => {
//     setLoading(true);
//     setError("");
//     fetch(`${API_URL}/api/cases`, {
//       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }
//     })
//       .then(r => r.json())
//       .then(data => setCases(data.cases || []))
//       .catch(() => setError("Failed to load cases."))
//       .finally(() => setLoading(false));
//   }, []);

//   // ── Filter ─────────────────────────────────────────────────
//   const filtered = cases.filter(c => {
//     const matchTab = activeTab === "all" || c.status === activeTab;
//     const matchSearch = !search ||
//       c.case_id?.toLowerCase().includes(search.toLowerCase()) ||
//       c.candidate?.toLowerCase().includes(search.toLowerCase()) ||
//       c.client?.toLowerCase().includes(search.toLowerCase());
//     return matchTab && matchSearch;
//   });

//   const countFor = (status) =>
//     status === "all" ? cases.length : cases.filter(c => c.status === status).length;

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
//                 {STATUS_TABS.map(tab => (
//                   <button
//                     key={tab.key}
//                     className={`tab-cta ${activeTab === tab.key ? "active" : ""}`}
//                     onClick={() => setActiveTab(tab.key)}
//                   >
//                     {tab.label}
//                     <span style={{ marginLeft: "5px", background: "rgba(0,0,0,.08)", borderRadius: "10px", padding: "1px 6px", fontSize: "12px" }}>
//                       {countFor(tab.key)}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//               <div className="right">
//                 <button className="date-wrapper">
//                   <img src="/images/dashboard/calendar-icon.svg" alt="" />
//                   <input type="text" className="selectedDate" placeholder="Select Date" readOnly />
//                 </button>
//                 <button className="primary-cta export">
//                   <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
//                 </button>
//                 <button className="secondary-cta import">
//                   <img src="images/dashboard/export-excel.svg" alt="" /> Export Excel
//                 </button>
//               </div>
//             </div>

//             {/* ── Search + Add Case ── */}
//             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//               <input
//                 type="text"
//                 placeholder="Search candidate, case ID or client..."
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//                 style={{
//                   flex: 1, padding: "10px 16px", borderRadius: "10px",
//                   border: "1px solid #ddd", fontSize: "14px", outline: "none"
//                 }}
//               />
//               {(isAdmin || user.role === "client") && (
//                 <button className="primary-cta" onClick={() => navigate("/AddCase")}>
//                   + Add Case
//                 </button>
//               )}
//             </div>

//             {/* ── Error ── */}
//             {error && (
//               <div style={{ padding: "12px 16px", background: "#fff5f5", border: "1px solid #fca5a5", borderRadius: "8px", color: "#dc2626", fontSize: "14px" }}>
//                 {error}
//               </div>
//             )}

//             {/* ── Table ── */}
//             <div className="down-table">
//               {loading ? (
//                 <p style={{ padding: "24px", color: "#888", fontSize: "14px" }}>Loading cases...</p>
//               ) : (
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Case ID</th>
//                       <th>Candidate</th>
//                       {isAdmin && <th>Client</th>}
//                       <th>Checks</th>
//                       <th>Status</th>
//                       <th>Priority</th>
//                       <th>TAT</th>
//                       <th>Created</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filtered.length === 0 ? (
//                       <tr>
//                         <td colSpan={isAdmin ? 9 : 8} style={{ textAlign: "center", padding: "32px", color: "#94a3b8", fontSize: "14px" }}>
//                           {cases.length === 0 ? (
//                             <>No cases yet. <button onClick={() => navigate("/AddCase")} style={{ color: "#2b3b8c", fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}>Add your first case →</button></>
//                           ) : (
//                             "No cases match your filter."
//                           )}
//                         </td>
//                       </tr>
//                     ) : (
//                       filtered.map(row => (
//                         <tr key={row.case_id}>
//                           <td style={{ fontWeight: 700, color: "#2b3b8c" }}>{row.case_id}</td>
//                           <td>{row.candidate}</td>
//                           {isAdmin && <td>{row.client}</td>}
//                           <td style={{ fontSize: "12px", color: "#475569" }}>{row.checks}</td>
//                           <td>
//                             <span className={`status ${row.status}`}>{statusLabel(row.status)}</span>
//                           </td>
//                           <td>
//                             <span style={{ color: priorityColor(row.priority), fontWeight: 700, fontSize: "13px" }}>
//                               {row.priority ? row.priority.charAt(0).toUpperCase() + row.priority.slice(1) : "—"}
//                             </span>
//                           </td>
//                           <td style={{ fontSize: "13px" }}>{row.tat}</td>
//                           <td style={{ fontSize: "12px", color: "#94a3b8" }}>{row.created_at}</td>
//                           <td>
//                             <button className="view-cta">View</button>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               )}

//               {!loading && (
//                 <div style={{ padding: "10px 16px", fontSize: "12px", color: "#9ca3af", borderTop: "1px solid #f1f5f9" }}>
//                   Showing {filtered.length} of {cases.length} cases
//                 </div>
//               )}
//             </div>

//           </div>
//         </main>
//       </section>
//     </>
//   );
// }

// function statusLabel(s) {
//   return { pending: "Pending", "in-progress": "In Progress", completed: "Completed", "qc-review": "QC Review", "on-hold": "On Hold" }[s] || s;
// }
// function priorityColor(p) {
//   return { urgent: "#eb4d4b", high: "#f59e0b", normal: "#64748b" }[p] || "#64748b";
// }
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { API_URL } from "../src/config";

const STATUS_TABS = [
  { key: "all",         label: "All"         },
  { key: "pending",     label: "Pending"     },
  { key: "in-progress", label: "In Progress" },
  { key: "qc-review",   label: "QC Review"   },
  { key: "completed",   label: "Completed"   },
];

export default function AllCases() {
  const navigate = useNavigate();
  const [cases, setCases]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch]     = useState("");

  const token = localStorage.getItem("token");
  const user  = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();
  const isAdmin = ["admin", "check_manager", "allocator", "pvt_qc"].includes(user.role);

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`${API_URL}/api/cases`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }
    })
      .then(r => r.json())
      .then(data => setCases(data.cases || []))
      .catch(() => setError("Failed to load cases."))
      .finally(() => setLoading(false));
  }, []);

  // ── Filter ─────────────────────────────────────────────────
  const filtered = cases.filter(c => {
    const matchTab = activeTab === "all" || c.status === activeTab;
    const matchSearch = !search ||
      c.case_id?.toLowerCase().includes(search.toLowerCase()) ||
      c.candidate?.toLowerCase().includes(search.toLowerCase()) ||
      c.client?.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  const countFor = (status) =>
    status === "all" ? cases.length : cases.filter(c => c.status === status).length;

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* ── Top bar ── */}
            <div className="dash-upper-head">
              <div className="left">
                {STATUS_TABS.map(tab => (
                  <button
                    key={tab.key}
                    className={`tab-cta ${activeTab === tab.key ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                    <span style={{ marginLeft: "5px", background: "rgba(0,0,0,.08)", borderRadius: "10px", padding: "1px 6px", fontSize: "12px" }}>
                      {countFor(tab.key)}
                    </span>
                  </button>
                ))}
              </div>
              <div className="right">
                <button className="date-wrapper">
                  <img src="/images/dashboard/calendar-icon.svg" alt="" />
                  <input type="text" className="selectedDate" placeholder="Select Date" readOnly />
                </button>
                <button className="primary-cta export">
                  <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
                </button>
                <button className="secondary-cta import">
                  <img src="images/dashboard/export-excel.svg" alt="" /> Export Excel
                </button>
              </div>
            </div>

            {/* ── Search + Add Case ── */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Search candidate, case ID or client..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  flex: 1, padding: "10px 16px", borderRadius: "10px",
                  border: "1px solid #ddd", fontSize: "14px", outline: "none"
                }}
              />
              {(isAdmin || user.role === "client") && (
                <button className="primary-cta" onClick={() => navigate("/AddCase")}>
                  + Add Case
                </button>
              )}
            </div>

            {/* ── Error ── */}
            {error && (
              <div style={{ padding: "12px 16px", background: "#fff5f5", border: "1px solid #fca5a5", borderRadius: "8px", color: "#dc2626", fontSize: "14px" }}>
                {error}
              </div>
            )}

            {/* ── Table ── */}
            <div className="down-table">
              {loading ? (
                <p style={{ padding: "24px", color: "#888", fontSize: "14px" }}>Loading cases...</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Case ID</th>
                      <th>Candidate</th>
                      {isAdmin && <th>Client</th>}
                      <th>Checks</th>
                      <th>Status</th>
                      <th>Priority</th>
                      <th>TAT</th>
                      <th>Created</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={isAdmin ? 9 : 8} style={{ textAlign: "center", padding: "32px", color: "#94a3b8", fontSize: "14px" }}>
                          {cases.length === 0 ? (
                            <>No cases yet. <button onClick={() => navigate("/AddCase")} style={{ color: "#2b3b8c", fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}>Add your first case →</button></>
                          ) : (
                            "No cases match your filter."
                          )}
                        </td>
                      </tr>
                    ) : (
                      filtered.map(row => (
                        <tr key={row.case_id}>
                          <td style={{ fontWeight: 700, color: "#2b3b8c" }}>{row.case_id}</td>
                          <td>{row.candidate}</td>
                          {isAdmin && <td>{row.client}</td>}
                          <td style={{ fontSize: "12px", color: "#475569" }}>{row.checks}</td>
                          <td>
                            <span className={`status ${row.status}`}>{statusLabel(row.status)}</span>
                          </td>
                          <td>
                            <span style={{ color: priorityColor(row.priority), fontWeight: 700, fontSize: "13px" }}>
                              {row.priority ? row.priority.charAt(0).toUpperCase() + row.priority.slice(1) : "—"}
                            </span>
                          </td>
                          <td style={{ fontSize: "13px" }}>{row.tat}</td>
                          <td style={{ fontSize: "12px", color: "#94a3b8" }}>{row.created_at}</td>
                          <td>
                            <button className="view-cta">View</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              )}

              {!loading && (
                <div style={{ padding: "10px 16px", fontSize: "12px", color: "#9ca3af", borderTop: "1px solid #f1f5f9" }}>
                  Showing {filtered.length} of {cases.length} cases
                </div>
              )}
            </div>

          </div>
        </main>
      </section>
    </>
  );
}

function statusLabel(s) {
  return { pending: "Pending", "in-progress": "In Progress", completed: "Completed", "qc-review": "QC Review", "on-hold": "On Hold" }[s] || s;
}
function priorityColor(p) {
  return { urgent: "#eb4d4b", high: "#f59e0b", normal: "#64748b" }[p] || "#64748b";
}
