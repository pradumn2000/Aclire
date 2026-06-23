
// // // import { useState, useEffect } from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import Sidebar from "./Sidebar";
// // // import Header from "./Header";
// // // import CaseTrendsChart from "./CaseTrendsChart";
// // // import { API_URL } from "../src/config";

// // // const STATUS_TABS = [
// // //   { key: "all",         label: "All Cases"   },
// // //   { key: "pending",     label: "Pending"     },
// // //   { key: "in-progress", label: "In Progress" },
// // //   { key: "completed",   label: "Completed"   },
// // // ];

// // // const DATE_FILTERS = [
// // //   { key: "today",  label: "Today"      },
// // //   { key: "week",   label: "This Week"  },
// // //   { key: "month",  label: "This Month" },
// // //   { key: "custom", label: "Custom"     },
// // // ];

// // // const CHECK_BADGE = {
// // //   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
// // //   in_progress: { label: "In Progress", bg: "#028090", color: "#fff" },
// // //   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
// // //   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
// // //   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// // // };

// // // // ── Status → color + progress mapping ─────────────────────────────────────
// // // const STATUS_META = {
// // //   "pending":     { color: "#f59e0b", pct: 20, dayLabel: (c) => `Day 1/7`   },
// // //   "in-progress": { color: "#028090", pct: 60, dayLabel: (c) => `Day 4/7`   },
// // //   "qc-review":   { color: "#7c3aed", pct: 85, dayLabel: (c) => `Day 6/7`   },
// // //   "completed":   { color: "#10b981", pct: 100, dayLabel: (c) => `Done`     },
// // //   "on-hold":     { color: "#94a3b8", pct: 30, dayLabel: (c) => `On Hold`   },
// // // };

// // // function getStatusMeta(status) {
// // //   return STATUS_META[status] || STATUS_META["pending"];
// // // }

// // // function statusLabel(s) {
// // //   return {
// // //     "pending": "Pending", "in-progress": "In Progress",
// // //     "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold",
// // //   }[s] || s;
// // // }

// // // // ── Fix scientific notation TAT ────────────────────────────────────────────
// // // function formatTAT(tat) {
// // //   if (!tat) return "—";
// // //   const str = String(tat);
// // //   // Catch scientific notation like 7.84465625E-5d or 1.2e+3
// // //   if (/\d+\.?\d*[eE][+\-]?\d+/.test(str)) return "—";
// // //   // If it's a plain number (days stored as float), round it
// // //   const num = parseFloat(str);
// // //   if (!isNaN(num) && !str.includes("d") && !str.includes("D")) {
// // //     return `${Math.round(num)} days`;
// // //   }
// // //   return str;
// // // }

// // // function getTabFromURL(search) {
// // //   const tab = new URLSearchParams(search).get("tab") || "all";
// // //   return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// // // }

// // // function inferCheckStatus(caseStat) {
// // //   if (caseStat === "completed")   return "clear";
// // //   if (caseStat === "in-progress") return "in_progress";
// // //   if (caseStat === "pending")     return "pending";
// // //   return "na";
// // // }

// // // export default function Client() {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const [cases, setCases]               = useState([]);
// // //   const [selectedCase, setSelectedCase] = useState(null);
// // //   const [loading, setLoading]           = useState(true);
// // //   const [search, setSearch]             = useState("");
// // //   const [statusTab, setStatusTab]       = useState(() => getTabFromURL(location.search));
// // //   const [dateFilter, setDateFilter]     = useState("month");
// // //   const [customFrom, setCustomFrom]     = useState("");
// // //   const [customTo, setCustomTo]         = useState("");
// // //   const [activeDetailTab, setActiveDetailTab] = useState("overview");

// // //   const token = localStorage.getItem("token");
// // //   const user  = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

// // //   const fetchCases = () => {
// // //     setLoading(true);
// // //     fetch(`${API_URL}/api/cases`, {
// // //       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
// // //     })
// // //       .then(r => r.json())
// // //       .then(data => {
// // //         const list = data.cases || [];
// // //         setCases(list);
// // //         const currentTab = getTabFromURL(location.search);
// // //         const first = list.find(c => currentTab === "all" || c.status === currentTab);
// // //         setSelectedCase(first || list[0] || null);
// // //       })
// // //       .catch(console.error)
// // //       .finally(() => setLoading(false));
// // //   };

// // //   useEffect(() => { fetchCases(); }, []);

// // //   useEffect(() => {
// // //     const tab = getTabFromURL(location.search);
// // //     setStatusTab(tab);
// // //     setSearch("");
// // //     setActiveDetailTab("overview");
// // //     if (cases.length > 0) {
// // //       const first = cases.find(c => tab === "all" || c.status === tab);
// // //       setSelectedCase(first || null);
// // //     }
// // //   }, [location.search]);

// // //   const isInRange = (createdAt) => {
// // //     if (!createdAt) return true;
// // //     const d   = new Date(createdAt);
// // //     const now = new Date();
// // //     if (dateFilter === "today") return d.toDateString() === now.toDateString();
// // //     if (dateFilter === "week")  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
// // //     if (dateFilter === "month") { return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); }
// // //     if (dateFilter === "custom") {
// // //       if (!customFrom && !customTo) return true;
// // //       const from = customFrom ? new Date(customFrom) : null;
// // //       const to   = customTo   ? new Date(customTo + "T23:59:59") : null;
// // //       if (from && d < from) return false;
// // //       if (to   && d > to)   return false;
// // //       return true;
// // //     }
// // //     return true;
// // //   };

// // //   const isDashboard = !new URLSearchParams(location.search).get("tab");

// // //   const filtered = cases.filter(c => {
// // //     const matchTab    = statusTab === "all" || c.status === statusTab;
// // //     const matchSearch = !search ||
// // //       (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
// // //       (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
// // //     const matchDate = !isDashboard || isInRange(c.created_at);
// // //     return matchTab && matchSearch && matchDate;
// // //   });

// // //   const counts = {
// // //     all:           cases.length,
// // //     pending:       cases.filter(c => c.status === "pending").length,
// // //     "in-progress": cases.filter(c => c.status === "in-progress").length,
// // //     completed:     cases.filter(c => c.status === "completed").length,
// // //   };

// // //   const total     = cases.length;
// // //   const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;
// // //   const chartCases = isDashboard ? cases.filter(c => isInRange(c.created_at)) : cases;

// // //   const getChecksArray = (c) => {
// // //     if (Array.isArray(c.checks)) return c.checks;
// // //     if (typeof c.checks === "string") return c.checks.split(/[·,]/).map(x => x.trim()).filter(Boolean);
// // //     return [];
// // //   };

// // //   const getCheckStatus = (c, checkName) => {
// // //     if (c.check_statuses && c.check_statuses[checkName]) return c.check_statuses[checkName];
// // //     return inferCheckStatus(c.status);
// // //   };

// // //   const handleTabChange = (key) => {
// // //     navigate(`/Client?tab=${key}`, { replace: true });
// // //   };

// // //   const exportCSV = () => {
// // //     const headers = ["Case ID", "Candidate", "Checks", "Status", "Created", "Amount"];
// // //     const rows    = filtered.map(c => [
// // //       c.case_id,
// // //       c.candidate || c.candidate_name,
// // //       Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
// // //       c.status, c.created_at, `₹${c.total_amount || 0}`,
// // //     ]);
// // //     const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
// // //     const blob = new Blob([csv], { type: "text/csv" });
// // //     const url  = URL.createObjectURL(blob);
// // //     const a    = document.createElement("a");
// // //     a.href = url; a.download = `my-cases-${Date.now()}.csv`; a.click();
// // //     URL.revokeObjectURL(url);
// // //   };

// // //   // ── Check-wise Status grid ─────────────────────────────────────────────────
// // //   const CheckwiseGrid = ({ c }) => {
// // //     const checks = getChecksArray(c);
// // //     if (checks.length === 0) return (
// // //       <p style={{ color: "#94a3b8", fontSize: "13px", padding: "12px 0" }}>No checks assigned.</p>
// // //     );
// // //     const left  = checks.filter((_, i) => i % 2 === 0);
// // //     const right = checks.filter((_, i) => i % 2 !== 0);
// // //     return (
// // //       <div>
// // //         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
// // //           Check-wise Status
// // //         </p>
// // //         <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 12px" }}>
// // //           <div>
// // //             {left.map((chk, i) => {
// // //               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
// // //               return (
// // //                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: i < left.length - 1 ? "1px solid #f1f5f9" : "none" }}>
// // //                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
// // //                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", minWidth: "86px", textAlign: "center" }}>{badge.label}</span>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //           <div style={{ background: "#e2e8f0" }} />
// // //           <div>
// // //             {right.map((chk, i) => {
// // //               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
// // //               return (
// // //                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: i < right.length - 1 ? "1px solid #f1f5f9" : "none" }}>
// // //                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
// // //                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", minWidth: "86px", textAlign: "center" }}>{badge.label}</span>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //       <Sidebar />
// // //       <section id="content">
// // //         <Header />
// // //         <main>
// // //           <div className="dash-wrper">

// // //             <div className="dash-upper-head">
// // //               <div className="left">
// // //                 <div className="dash-title-flex">
// // //                   <h3 className="dash-title-text">Client Portal</h3>
// // //                   <span style={{ fontSize: "12px", color: "#64748b", background: "#eef3ff", padding: "3px 10px", borderRadius: "20px" }}>
// // //                     {user.name || "My Account"}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //               <div className="right">
// // //                 <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
// // //                   value={search} onChange={e => setSearch(e.target.value)} />
// // //                 {search && (
// // //                   <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
// // //                 )}
// // //                 <button className="primary-cta export" onClick={exportCSV}>
// // //                   <img src="images/dashboard/export-icon.svg" alt="" /> Export
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {isDashboard && (
// // //               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
// // //                 {DATE_FILTERS.map(df => (
// // //                   <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`} onClick={() => setDateFilter(df.key)}>
// // //                     {df.label}
// // //                   </button>
// // //                 ))}
// // //                 {dateFilter === "custom" && (
// // //                   <>
// // //                     <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
// // //                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
// // //                     <span style={{ color: "#94a3b8" }}>→</span>
// // //                     <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
// // //                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
// // //                   </>
// // //                 )}
// // //               </div>
// // //             )}

// // //             <div className="cards-head-dash">
// // //               <div className="card-inner-dash bdr-total"><h4>{loading ? "—" : total}</h4><p>Total Cases</p></div>
// // //               <div className="card-inner-dash bdr-progress"><h4>{loading ? "—" : counts["in-progress"]}</h4><p>In Progress</p></div>
// // //               <div className="card-inner-dash bdr-com"><h4>{loading ? "—" : counts.completed}</h4><p>Completed</p></div>
// // //               <div className="card-inner-dash bdr-rate"><h4>{loading ? "—" : clearRate}%</h4><p>Clear Rate</p></div>
// // //             </div>

// // //             {isDashboard && (
// // //               <div className="dash-inner-wrp-both" style={{ marginBottom: "0" }}>
// // //                 <div className="dash-inner-left">
// // //                   <CaseTrendsChart
// // //                     casesData={chartCases}
// // //                     label={DATE_FILTERS.find(d => d.key === dateFilter)?.label}
// // //                     vsText={counts.completed > 0 ? `▲ ${clearRate}% clear rate` : "No completions yet"}
// // //                     vsColor={counts.completed > 0 ? "#14d8a7" : "#94a3b8"}
// // //                     dateFilter={dateFilter} customFrom={customFrom} customTo={customTo}
// // //                   />
// // //                 </div>
// // //                 <div className="dash-inner-right">
// // //                   <div className="quick-stats">
// // //                     <div className="stats-header"><h3>QUICK STATS</h3></div>
// // //                     <div className="stats-body">
// // //                       <div className="stats-row"><span>Total Cases</span><strong>{loading ? "—" : total}</strong></div>
// // //                       <div className="stats-row"><span>Pending</span><strong>{loading ? "—" : counts.pending}</strong></div>
// // //                       <div className="stats-row"><span>In Progress</span><strong>{loading ? "—" : counts["in-progress"]}</strong></div>
// // //                       <div className="stats-row"><span>Completed</span><strong>{loading ? "—" : counts.completed}</strong></div>
// // //                       <div className="stats-row"><span>Clear Rate</span><strong>{loading ? "—" : `${clearRate}%`}</strong></div>
// // //                       <div className="stats-row"><span>Avg TAT</span><strong>—</strong></div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {isDashboard && (
// // //               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
// // //                 {STATUS_TABS.map(tab => (
// // //                   <button key={tab.key} className={`tab-cta ${statusTab === tab.key ? "active" : ""}`} onClick={() => handleTabChange(tab.key)}>
// // //                     {tab.label}
// // //                     <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
// // //                       {counts[tab.key] ?? 0}
// // //                     </span>
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             )}

// // //             <div className="dash-inner-wrp-both client-portal">

// // //               {/* LEFT: Case list */}
// // //               <div className="dash-inner-left">
// // //                 <div className="down-table">
// // //                   <div className="client-portal-cases">
// // //                     <h3>{STATUS_TABS.find(t => t.key === statusTab)?.label.toUpperCase()} ({filtered.length})</h3>
// // //                   </div>

// // //                   {loading ? (
// // //                     <p style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>Loading cases…</p>
// // //                   ) : filtered.length === 0 ? (
// // //                     <div style={{ padding: "40px", textAlign: "center" }}>
// // //                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>No {statusTab === "all" ? "" : statusTab + " "}cases found.</p>
// // //                       {cases.length === 0 && (
// // //                         <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>+ Add Your First Case</button>
// // //                       )}
// // //                     </div>
// // //                   ) : (
// // //                     <table>
// // //                       <tbody>
// // //                         {filtered.map(c => {
// // //                           // ── FIX: color comes from STATUS, not progress percentage ──
// // //                           const meta       = getStatusMeta(c.status);
// // //                           const color      = meta.color;
// // //                           const pct        = meta.pct;
// // //                           const dayLabel   = meta.dayLabel(c);
// // //                           const name       = c.candidate || c.candidate_name || "—";
// // //                           const isSelected = selectedCase?.case_id === c.case_id;
// // //                           return (
// // //                             <tr
// // //                               className="boder-tbl active"
// // //                               key={c.case_id}
// // //                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
// // //                               style={{
// // //                                 cursor: "pointer",
// // //                                 background: isSelected ? "#eef3ff" : undefined,
// // //                                 borderLeft: isSelected ? "3px solid #2b3b8c" : "3px solid transparent",
// // //                               }}
// // //                             >
// // //                               <td>
// // //                                 <div className="criminal-case">
// // //                                   <p>
// // //                                     <span>{c.case_id}</span><br />
// // //                                     <span style={{ fontSize: "11px", color: "#94a3b8" }}>
// // //                                       {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
// // //                                     </span>
// // //                                   </p>
// // //                                 </div>
// // //                               </td>
// // //                               <td><div className="client-names">{name}</div></td>
// // //                               <td>
// // //                                 <div className="custom-progress">
// // //                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
// // //                                 </div>
// // //                                 {/* ── FIX: label uses status-based text ── */}
// // //                                 <p className="progress-client-text" style={{ color }}>{dayLabel}</p>
// // //                               </td>
// // //                               <td>
// // //                                 <div className="parent-client-boxes">
// // //                                   {/* ── FIX: box color from status ── */}
// // //                                   <span className="client-cases-box" style={{ background: color }} />
// // //                                 </div>
// // //                               </td>
// // //                             </tr>
// // //                           );
// // //                         })}
// // //                       </tbody>
// // //                     </table>
// // //                   )}
// // //                 </div>
// // //               </div>

// // //               {/* RIGHT: Case detail */}
// // //               <div className="dash-inner-right status-cases">
// // //                 {!selectedCase ? (
// // //                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
// // //                     <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to view details</p>
// // //                   </div>
// // //                 ) : (
// // //                   <>
// // //                     {/* Header */}
// // //                     <div style={{ background: "#27348B", color: "#fff", padding: "14px 18px", fontWeight: 700, fontSize: "14px", borderRadius: "6px 6px 0 0" }}>
// // //                       CASE — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}
// // //                     </div>

// // //                     {/* 4 tabs */}
// // //                     <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "1px solid #e2e8f0" }}>
// // //                       {["overview", "checks", "documents", "comments"].map((t, i) => (
// // //                         <button key={t} onClick={() => setActiveDetailTab(t)} style={{
// // //                           padding: "11px 0", border: "none",
// // //                           borderRight: i < 3 ? "1px solid #e2e8f0" : "none",
// // //                           borderBottom: activeDetailTab === t ? "2px solid #27348B" : "2px solid transparent",
// // //                           background: activeDetailTab === t ? "#f0f4ff" : "#fff",
// // //                           color: activeDetailTab === t ? "#27348B" : "#64748b",
// // //                           fontWeight: activeDetailTab === t ? 700 : 400,
// // //                           fontSize: "13px", cursor: "pointer", textTransform: "capitalize",
// // //                         }}>
// // //                           {t.charAt(0).toUpperCase() + t.slice(1)}
// // //                         </button>
// // //                       ))}
// // //                     </div>

// // //                     <div style={{ border: "1px solid #e2e8f0", borderTop: "none", padding: "16px", borderRadius: "0 0 6px 6px" }}>

// // //                       {/* OVERVIEW */}
// // //                       {activeDetailTab === "overview" && (
// // //                         <div>
// // //                           {[
// // //                             { label: "Case ID",   value: selectedCase.case_id },
// // //                             { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
// // //                             { label: "Status",    value: (
// // //                               <span style={{
// // //                                 background: getStatusMeta(selectedCase.status).color,
// // //                                 color: "#fff", fontSize: "11px", fontWeight: 700,
// // //                                 padding: "3px 10px", borderRadius: "4px",
// // //                               }}>
// // //                                 {statusLabel(selectedCase.status)}
// // //                               </span>
// // //                             )},
// // //                             { label: "Priority",  value: selectedCase.priority || "Normal" },
// // //                             // ── FIX: TAT formatted to remove scientific notation ──
// // //                             { label: "TAT",       value: formatTAT(selectedCase.tat) },
// // //                             { label: "Created",   value: selectedCase.created_at ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
// // //                             { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
// // //                           ].map(r => (
// // //                             <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
// // //                               <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
// // //                               <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       )}

// // //                       {/* CHECKS — Check-wise status grid */}
// // //                       {activeDetailTab === "checks" && <CheckwiseGrid c={selectedCase} />}

// // //                       {/* DOCUMENTS */}
// // //                       {activeDetailTab === "documents" && (
// // //                         <div>
// // //                           <CheckwiseGrid c={selectedCase} />
// // //                           <div style={{ marginTop: "16px", padding: "20px", background: "#f8fafc", borderRadius: "6px", textAlign: "center" }}>
// // //                             <p style={{ color: "#94a3b8", fontSize: "13px" }}>Document upload/download coming soon.</p>
// // //                           </div>
// // //                         </div>
// // //                       )}

// // //                       {/* COMMENTS */}
// // //                       {activeDetailTab === "comments" && (
// // //                         <div>
// // //                           <textarea placeholder="Write a comment or query about this case…" style={{
// // //                             width: "100%", minHeight: "100px", padding: "10px 12px",
// // //                             border: "1px solid #e2e8f0", borderRadius: "6px",
// // //                             fontSize: "13px", resize: "vertical", outline: "none", boxSizing: "border-box",
// // //                           }} />
// // //                           <button className="primary-cta" style={{ marginTop: "10px" }}>Submit Comment</button>
// // //                         </div>
// // //                       )}
// // //                     </div>

// // //                     {/* Action buttons */}
// // //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "14px" }}>
// // //                       <button className="secondary-cta import" onClick={exportCSV}
// // //                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px" }}>
// // //                         <img src="images/dashboard/export-excel.svg" alt="" /> Download Report
// // //                       </button>
// // //                       <button className="primary-cta export"
// // //                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px" }}>
// // //                         <img src="images/dashboard/export-icon.svg" alt="" /> Submit Query
// // //                       </button>
// // //                     </div>
// // //                   </>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </main>
// // //       </section>
// // //     </>
// // //   );
// // // }
// // import { useState, useEffect } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import Sidebar from "./Sidebar";
// // import Header from "./Header";
// // import CaseTrendsChart from "./CaseTrendsChart";
// // import { API_URL } from "../src/config";

// // const STATUS_TABS = [
// //   { key: "all",         label: "All Cases"   },
// //   { key: "pending",     label: "Pending"     },
// //   { key: "in-progress", label: "In Progress" },
// //   { key: "completed",   label: "Completed"   },
// // ];

// // const DATE_FILTERS = [
// //   { key: "today",  label: "Today"      },
// //   { key: "week",   label: "This Week"  },
// //   { key: "month",  label: "This Month" },
// //   { key: "custom", label: "Custom"     },
// // ];

// // const CHECK_BADGE = {
// //   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
// //   in_progress: { label: "In Progress", bg: "#028090", color: "#fff" },
// //   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
// //   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
// //   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// // };

// // const STATUS_META = {
// //   "pending":     { color: "#f59e0b", pct: 20, dayLabel: () => "Day 1/7"  },
// //   "in-progress": { color: "#028090", pct: 60, dayLabel: () => "Day 4/7"  },
// //   "qc-review":   { color: "#7c3aed", pct: 85, dayLabel: () => "Day 6/7"  },
// //   "completed":   { color: "#10b981", pct: 100, dayLabel: () => "Done"    },
// //   "on-hold":     { color: "#94a3b8", pct: 30, dayLabel: () => "On Hold"  },
// // };

// // function getStatusMeta(status) {
// //   return STATUS_META[status] || STATUS_META["pending"];
// // }

// // function statusLabel(s) {
// //   return {
// //     "pending": "Pending", "in-progress": "In Progress",
// //     "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold",
// //   }[s] || s;
// // }

// // function formatTAT(tat) {
// //   if (!tat) return "—";
// //   const str = String(tat);
// //   if (/\d+\.?\d*[eE][+\-]?\d+/.test(str)) return "—";
// //   const num = parseFloat(str);
// //   if (!isNaN(num) && !str.includes("d") && !str.includes("D")) return `${Math.round(num)} days`;
// //   return str;
// // }

// // function getTabFromURL(search) {
// //   const tab = new URLSearchParams(search).get("tab") || "all";
// //   return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// // }

// // function inferCheckStatus(caseStat) {
// //   if (caseStat === "completed")   return "clear";
// //   if (caseStat === "in-progress") return "in_progress";
// //   if (caseStat === "pending")     return "pending";
// //   return "na";
// // }

// // // ── Timeline events generator based on case status ─────────────────────────
// // function buildTimeline(c) {
// //   const created = c.created_at ? new Date(c.created_at) : new Date();
// //   const fmt = (d) => d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
// //   const fmtTime = (d) => d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

// //   const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

// //   const events = [
// //     {
// //       icon: "✓",
// //       color: "#10b981",
// //       title: "Case Submitted",
// //       desc: `Case ${c.case_id} created and submitted for processing.`,
// //       date: fmt(created),
// //       time: fmtTime(created),
// //       done: true,
// //     },
// //   ];

// //   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
// //     const d2 = addDays(created, 1);
// //     events.push({
// //       icon: "✓",
// //       color: "#028090",
// //       title: "Verification Started",
// //       desc: "Documents received. Verification team assigned and checks initiated.",
// //       date: fmt(d2),
// //       time: fmtTime(d2),
// //       done: true,
// //     });
// //   } else {
// //     events.push({
// //       icon: "○",
// //       color: "#94a3b8",
// //       title: "Verification Pending",
// //       desc: "Awaiting assignment to verification team.",
// //       date: "—",
// //       time: "",
// //       done: false,
// //     });
// //   }

// //   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
// //     const d3 = addDays(created, 3);
// //     events.push({
// //       icon: "✓",
// //       color: "#028090",
// //       title: "Checks In Progress",
// //       desc: `Running ${c.checks ? (Array.isArray(c.checks) ? c.checks.join(", ") : c.checks) : "all"} checks.`,
// //       date: fmt(d3),
// //       time: fmtTime(d3),
// //       done: true,
// //     });
// //   } else {
// //     events.push({
// //       icon: "○",
// //       color: "#94a3b8",
// //       title: "Checks In Progress",
// //       desc: "Check-wise verification not yet started.",
// //       date: "—",
// //       time: "",
// //       done: false,
// //     });
// //   }

// //   if (["qc-review", "completed"].includes(c.status)) {
// //     const d4 = addDays(created, 5);
// //     events.push({
// //       icon: "✓",
// //       color: "#7c3aed",
// //       title: "QC Review",
// //       desc: "Case submitted for quality control review.",
// //       date: fmt(d4),
// //       time: fmtTime(d4),
// //       done: true,
// //     });
// //   } else {
// //     events.push({
// //       icon: "○",
// //       color: "#94a3b8",
// //       title: "QC Review",
// //       desc: "Quality check pending.",
// //       date: "—",
// //       time: "",
// //       done: false,
// //     });
// //   }

// //   if (c.status === "completed") {
// //     const d5 = addDays(created, 7);
// //     events.push({
// //       icon: "✓",
// //       color: "#10b981",
// //       title: "Report Dispatched",
// //       desc: "Final BGV report generated and dispatched to client.",
// //       date: fmt(d5),
// //       time: fmtTime(d5),
// //       done: true,
// //     });
// //   } else {
// //     events.push({
// //       icon: "○",
// //       color: "#94a3b8",
// //       title: "Report Dispatch",
// //       desc: "Report will be generated after QC approval.",
// //       date: "—",
// //       time: "",
// //       done: false,
// //     });
// //   }

// //   return events;
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

// //   const fetchCases = () => {
// //     setLoading(true);
// //     fetch(`${API_URL}/api/cases`, {
// //       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
// //     })
// //       .then(r => r.json())
// //       .then(data => {
// //         const list = data.cases || [];
// //         setCases(list);
// //         const currentTab = getTabFromURL(location.search);
// //         const first = list.find(c => currentTab === "all" || c.status === currentTab);
// //         setSelectedCase(first || list[0] || null);
// //       })
// //       .catch(console.error)
// //       .finally(() => setLoading(false));
// //   };

// //   useEffect(() => { fetchCases(); }, []);

// //   useEffect(() => {
// //     const tab = getTabFromURL(location.search);
// //     setStatusTab(tab);
// //     setSearch("");
// //     setActiveDetailTab("overview");
// //     if (cases.length > 0) {
// //       const first = cases.find(c => tab === "all" || c.status === tab);
// //       setSelectedCase(first || null);
// //     }
// //   }, [location.search]);

// //   const isInRange = (createdAt) => {
// //     if (!createdAt) return true;
// //     const d   = new Date(createdAt);
// //     const now = new Date();
// //     if (dateFilter === "today") return d.toDateString() === now.toDateString();
// //     if (dateFilter === "week")  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
// //     if (dateFilter === "month") { return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); }
// //     if (dateFilter === "custom") {
// //       if (!customFrom && !customTo) return true;
// //       const from = customFrom ? new Date(customFrom) : null;
// //       const to   = customTo   ? new Date(customTo + "T23:59:59") : null;
// //       if (from && d < from) return false;
// //       if (to   && d > to)   return false;
// //       return true;
// //     }
// //     return true;
// //   };

// //   const isDashboard = !new URLSearchParams(location.search).get("tab");

// //   const filtered = cases.filter(c => {
// //     const matchTab    = statusTab === "all" || c.status === statusTab;
// //     const matchSearch = !search ||
// //       (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
// //       (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
// //     const matchDate = !isDashboard || isInRange(c.created_at);
// //     return matchTab && matchSearch && matchDate;
// //   });

// //   const counts = {
// //     all:           cases.length,
// //     pending:       cases.filter(c => c.status === "pending").length,
// //     "in-progress": cases.filter(c => c.status === "in-progress").length,
// //     completed:     cases.filter(c => c.status === "completed").length,
// //   };

// //   const total     = cases.length;
// //   const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;
// //   const chartCases = isDashboard ? cases.filter(c => isInRange(c.created_at)) : cases;

// //   const getChecksArray = (c) => {
// //     if (Array.isArray(c.checks)) return c.checks;
// //     if (typeof c.checks === "string") return c.checks.split(/[·,]/).map(x => x.trim()).filter(Boolean);
// //     return [];
// //   };

// //   const getCheckStatus = (c, checkName) => {
// //     if (c.check_statuses && c.check_statuses[checkName]) return c.check_statuses[checkName];
// //     return inferCheckStatus(c.status);
// //   };

// //   const handleTabChange = (key) => navigate(`/Client?tab=${key}`, { replace: true });

// //   const exportCSV = () => {
// //     const headers = ["Case ID", "Candidate", "Checks", "Status", "Created", "Amount"];
// //     const rows    = filtered.map(c => [
// //       c.case_id, c.candidate || c.candidate_name,
// //       Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
// //       c.status, c.created_at, `₹${c.total_amount || 0}`,
// //     ]);
// //     const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
// //     const blob = new Blob([csv], { type: "text/csv" });
// //     const url  = URL.createObjectURL(blob);
// //     const a    = document.createElement("a");
// //     a.href = url; a.download = `my-cases-${Date.now()}.csv`; a.click();
// //     URL.revokeObjectURL(url);
// //   };

// //   // ── Check-wise Status grid — 2 column with divider (matches Image 1) ───────
// //   const CheckwiseGrid = ({ c }) => {
// //     const checks = getChecksArray(c);
// //     if (checks.length === 0) return (
// //       <p style={{ color: "#94a3b8", fontSize: "13px", padding: "12px 0" }}>No checks assigned.</p>
// //     );
// //     const left  = checks.filter((_, i) => i % 2 === 0);
// //     const right = checks.filter((_, i) => i % 2 !== 0);

// //     return (
// //       <div>
// //         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
// //           Check-wise Status
// //         </p>
// //         <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 12px" }}>
// //           <div>
// //             {left.map((chk, i) => {
// //               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
// //               return (
// //                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: i < left.length - 1 ? "1px solid #f1f5f9" : "none" }}>
// //                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
// //                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //           <div style={{ background: "#e2e8f0" }} />
// //           <div>
// //             {right.map((chk, i) => {
// //               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
// //               return (
// //                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: i < right.length - 1 ? "1px solid #f1f5f9" : "none" }}>
// //                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
// //                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // ── Timeline component ────────────────────────────────────────────────────
// //   const TimelineView = ({ c }) => {
// //     const events = buildTimeline(c);
// //     return (
// //       <div style={{ padding: "4px 0" }}>
// //         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
// //           Case Timeline
// //         </p>
// //         <div style={{ position: "relative" }}>
// //           {/* Vertical line */}
// //           <div style={{
// //             position: "absolute", left: "15px", top: "8px",
// //             bottom: "8px", width: "2px", background: "#e2e8f0", zIndex: 0,
// //           }} />

// //           {events.map((ev, i) => (
// //             <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "20px", position: "relative", zIndex: 1 }}>
// //               {/* Icon dot */}
// //               <div style={{
// //                 width: "30px", height: "30px", borderRadius: "50%",
// //                 background: ev.done ? ev.color : "#e2e8f0",
// //                 color: "#fff", display: "flex", alignItems: "center",
// //                 justifyContent: "center", fontSize: "13px", fontWeight: 700,
// //                 flexShrink: 0, border: `2px solid ${ev.done ? ev.color : "#cbd5e1"}`,
// //                 boxShadow: ev.done ? `0 0 0 3px ${ev.color}22` : "none",
// //               }}>
// //                 {ev.done ? "✓" : "○"}
// //               </div>

// //               {/* Content */}
// //               <div style={{ flex: 1, paddingTop: "4px" }}>
// //                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
// //                   <span style={{ fontSize: "13px", fontWeight: 700, color: ev.done ? "#1e293b" : "#94a3b8" }}>
// //                     {ev.title}
// //                   </span>
// //                   {ev.date !== "—" && (
// //                     <span style={{ fontSize: "11px", color: "#94a3b8", whiteSpace: "nowrap", marginLeft: "8px" }}>
// //                       {ev.date} {ev.time}
// //                     </span>
// //                   )}
// //                 </div>
// //                 <p style={{ fontSize: "12px", color: ev.done ? "#64748b" : "#cbd5e1", margin: 0, lineHeight: 1.5 }}>
// //                   {ev.desc}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <>
// //       <Sidebar />
// //       <section id="content">
// //         <Header />
// //         <main>
// //           <div className="dash-wrper">

// //             {/* Page header */}
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
// //                 <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
// //                   value={search} onChange={e => setSearch(e.target.value)} />
// //                 {search && (
// //                   <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
// //                 )}
// //                 <button className="primary-cta export" onClick={exportCSV}>
// //                   <img src="images/dashboard/export-icon.svg" alt="" /> Export
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Date filter — Dashboard only */}
// //             {isDashboard && (
// //               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
// //                 {DATE_FILTERS.map(df => (
// //                   <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`} onClick={() => setDateFilter(df.key)}>
// //                     {df.label}
// //                   </button>
// //                 ))}
// //                 {dateFilter === "custom" && (
// //                   <>
// //                     <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
// //                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
// //                     <span style={{ color: "#94a3b8" }}>→</span>
// //                     <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
// //                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
// //                   </>
// //                 )}
// //               </div>
// //             )}

// //             {/* Stat cards */}
// //             <div className="cards-head-dash">
// //               <div className="card-inner-dash bdr-total"><h4>{loading ? "—" : total}</h4><p>Total Cases</p></div>
// //               <div className="card-inner-dash bdr-progress"><h4>{loading ? "—" : counts["in-progress"]}</h4><p>In Progress</p></div>
// //               <div className="card-inner-dash bdr-com"><h4>{loading ? "—" : counts.completed}</h4><p>Completed</p></div>
// //               <div className="card-inner-dash bdr-rate"><h4>{loading ? "—" : clearRate}%</h4><p>Clear Rate</p></div>
// //             </div>

// //             {/* Chart + Quick Stats — Dashboard only */}
// //             {isDashboard && (
// //               <div className="dash-inner-wrp-both" style={{ marginBottom: "0" }}>
// //                 <div className="dash-inner-left">
// //                   <CaseTrendsChart
// //                     casesData={chartCases}
// //                     label={DATE_FILTERS.find(d => d.key === dateFilter)?.label}
// //                     vsText={counts.completed > 0 ? `▲ ${clearRate}% clear rate` : "No completions yet"}
// //                     vsColor={counts.completed > 0 ? "#14d8a7" : "#94a3b8"}
// //                     dateFilter={dateFilter} customFrom={customFrom} customTo={customTo}
// //                   />
// //                 </div>
// //                 <div className="dash-inner-right">
// //                   <div className="quick-stats">
// //                     <div className="stats-header"><h3>QUICK STATS</h3></div>
// //                     <div className="stats-body">
// //                       <div className="stats-row"><span>Total Cases</span><strong>{loading ? "—" : total}</strong></div>
// //                       <div className="stats-row"><span>Pending</span><strong>{loading ? "—" : counts.pending}</strong></div>
// //                       <div className="stats-row"><span>In Progress</span><strong>{loading ? "—" : counts["in-progress"]}</strong></div>
// //                       <div className="stats-row"><span>Completed</span><strong>{loading ? "—" : counts.completed}</strong></div>
// //                       <div className="stats-row"><span>Clear Rate</span><strong>{loading ? "—" : `${clearRate}%`}</strong></div>
// //                       <div className="stats-row"><span>Avg TAT</span><strong>—</strong></div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Status filter tabs — Dashboard only */}
// //             {isDashboard && (
// //               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
// //                 {STATUS_TABS.map(tab => (
// //                   <button key={tab.key} className={`tab-cta ${statusTab === tab.key ? "active" : ""}`} onClick={() => handleTabChange(tab.key)}>
// //                     {tab.label}
// //                     <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
// //                       {counts[tab.key] ?? 0}
// //                     </span>
// //                   </button>
// //                 ))}
// //               </div>
// //             )}

// //             {/* Split panel */}
// //             <div className="dash-inner-wrp-both client-portal">

// //               {/* LEFT: Case list */}
// //               <div className="dash-inner-left">
// //                 <div className="down-table">
// //                   <div className="client-portal-cases">
// //                     <h3>{STATUS_TABS.find(t => t.key === statusTab)?.label.toUpperCase()} ({filtered.length})</h3>
// //                   </div>

// //                   {loading ? (
// //                     <p style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>Loading cases…</p>
// //                   ) : filtered.length === 0 ? (
// //                     <div style={{ padding: "40px", textAlign: "center" }}>
// //                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>No {statusTab === "all" ? "" : statusTab + " "}cases found.</p>
// //                       {cases.length === 0 && (
// //                         <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>+ Add Your First Case</button>
// //                       )}
// //                     </div>
// //                   ) : (
// //                     <table>
// //                       <tbody>
// //                         {filtered.map(c => {
// //                           const meta       = getStatusMeta(c.status);
// //                           const color      = meta.color;
// //                           const pct        = meta.pct;
// //                           const dayLabel   = meta.dayLabel(c);
// //                           const name       = c.candidate || c.candidate_name || "—";
// //                           const isSelected = selectedCase?.case_id === c.case_id;
// //                           return (
// //                             <tr className="boder-tbl active" key={c.case_id}
// //                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
// //                               style={{
// //                                 cursor: "pointer",
// //                                 background: isSelected ? "#eef3ff" : undefined,
// //                                 borderLeft: isSelected ? "3px solid #2b3b8c" : "3px solid transparent",
// //                               }}
// //                             >
// //                               <td>
// //                                 <div className="criminal-case">
// //                                   <p>
// //                                     <span>{c.case_id}</span><br />
// //                                     <span style={{ fontSize: "11px", color: "#94a3b8" }}>
// //                                       {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
// //                                     </span>
// //                                   </p>
// //                                 </div>
// //                               </td>
// //                               <td><div className="client-names">{name}</div></td>
// //                               <td>
// //                                 <div className="custom-progress">
// //                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
// //                                 </div>
// //                                 <p className="progress-client-text" style={{ color }}>{dayLabel}</p>
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
// //                     {/* Header — dark navy like Image 1 */}
// //                     <div style={{ background: "#27348B", color: "#fff", padding: "14px 18px", fontWeight: 700, fontSize: "14px", borderRadius: "6px 6px 0 0" }}>
// //                       CASE DETAIL — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}
// //                     </div>

// //                     {/* 4 tabs: Overview · Timeline · Documents · Comments */}
// //                     <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
// //                       {["overview", "timeline", "documents", "comments"].map((t, i) => (
// //                         <button key={t} onClick={() => setActiveDetailTab(t)} style={{
// //                           padding: "12px 0", border: "none",
// //                           borderRight: i < 3 ? "1px solid #e2e8f0" : "none",
// //                           borderBottom: activeDetailTab === t ? "3px solid #27348B" : "3px solid transparent",
// //                           background: activeDetailTab === t ? "#f0f4ff" : "#fff",
// //                           color: activeDetailTab === t ? "#27348B" : "#64748b",
// //                           fontWeight: activeDetailTab === t ? 700 : 400,
// //                           fontSize: "13px", cursor: "pointer", textTransform: "capitalize",
// //                           transition: "all 0.15s",
// //                         }}>
// //                           {t.charAt(0).toUpperCase() + t.slice(1)}
// //                         </button>
// //                       ))}
// //                     </div>

// //                     {/* Tab content */}
// //                     <div style={{ border: "1px solid #e2e8f0", borderTop: "none", padding: "16px", borderRadius: "0 0 6px 6px", background: "#fff", minHeight: "260px", maxHeight: "420px", overflowY: "auto" }}>

// //                       {/* ── OVERVIEW ── */}
// //                       {activeDetailTab === "overview" && (
// //                         <div>
// //                           {[
// //                             { label: "Case ID",   value: selectedCase.case_id },
// //                             { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
// //                             { label: "Status",    value: (
// //                               <span style={{ background: getStatusMeta(selectedCase.status).color, color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
// //                                 {statusLabel(selectedCase.status)}
// //                               </span>
// //                             )},
// //                             { label: "Priority",  value: selectedCase.priority || "Normal" },
// //                             { label: "TAT",       value: formatTAT(selectedCase.tat) },
// //                             { label: "Created",   value: selectedCase.created_at ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
// //                             { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
// //                           ].map(r => (
// //                             <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
// //                               <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
// //                               <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       )}

// //                       {/* ── TIMELINE ── */}
// //                       {activeDetailTab === "timeline" && <TimelineView c={selectedCase} />}

// //                       {/* ── DOCUMENTS — Check-wise Status (matches Image 1) ── */}
// //                       {activeDetailTab === "documents" && <CheckwiseGrid c={selectedCase} />}

// //                       {/* ── COMMENTS ── */}
// //                       {activeDetailTab === "comments" && (
// //                         <div>
// //                           <textarea placeholder="Write a comment or query about this case…" style={{
// //                             width: "100%", minHeight: "100px", padding: "10px 12px",
// //                             border: "1px solid #e2e8f0", borderRadius: "6px",
// //                             fontSize: "13px", resize: "vertical", outline: "none", boxSizing: "border-box",
// //                           }} />
// //                           <button className="primary-cta" style={{ marginTop: "10px" }}>Submit Comment</button>
// //                         </div>
// //                       )}
// //                     </div>

// //                     {/* Action buttons — full width like Image 1 */}
// //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" }}>
// //                       <button className="secondary-cta import" onClick={exportCSV}
// //                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px", height: "auto", borderRadius: "6px" }}>
// //                         <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "18px", height: "18px" }} />
// //                         Download Report
// //                       </button>
// //                       <button className="primary-cta export"
// //                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px", height: "auto", borderRadius: "6px" }}>
// //                         <img src="images/dashboard/export-icon.svg" alt="" style={{ width: "18px", height: "18px" }} />
// //                         Submit Query
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
//   { key: "pending",     label: "Active Cases"     },
//   { key: "in-progress", label: "In Progress" },
//   { key: "completed",   label: "Completed"   },
// ];

// const DATE_FILTERS = [
//   { key: "today",  label: "Today"      },
//   { key: "week",   label: "This Week"  },
//   { key: "month",  label: "This Month" },
//   { key: "custom", label: "Custom"     },
// ];

// const CHECK_BADGE = {
//   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
//   in_progress: { label: "In Progress", bg: "#028090", color: "#fff" },
//   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
//   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
//   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// };

// const STATUS_META = {
//   "pending":     { color: "#f59e0b", pct: 20, dayLabel: () => "Day 1/7"  },
//   "in-progress": { color: "#028090", pct: 60, dayLabel: () => "Day 4/7"  },
//   "qc-review":   { color: "#7c3aed", pct: 85, dayLabel: () => "Day 6/7"  },
//   "completed":   { color: "#10b981", pct: 100, dayLabel: () => "Done"    },
//   "on-hold":     { color: "#94a3b8", pct: 30, dayLabel: () => "On Hold"  },
// };

// function getStatusMeta(status) {
//   return STATUS_META[status] || STATUS_META["pending"];
// }

// function statusLabel(s) {
//   return {
//     "pending": "Active", "in-progress": "In Progress",
//     "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold",
//   }[s] || s;
// }

// function formatTAT(tat) {
//   if (!tat) return "—";
//   const str = String(tat);
//   if (/\d+\.?\d*[eE][+\-]?\d+/.test(str)) return "—";
//   const num = parseFloat(str);
//   if (!isNaN(num) && !str.includes("d") && !str.includes("D")) return `${Math.round(num)} days`;
//   return str;
// }

// function getTabFromURL(search) {
//   const tab = new URLSearchParams(search).get("tab") || "all";
//   return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// }

// function inferCheckStatus(caseStat) {
//   if (caseStat === "completed")   return "clear";
//   if (caseStat === "in-progress") return "in_progress";
//   if (caseStat === "pending")     return "pending";
//   return "na";
// }

// // ── Timeline events generator based on case status ─────────────────────────
// function buildTimeline(c) {
//   const created = c.created_at ? new Date(c.created_at) : new Date();
//   const fmt = (d) => d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   const fmtTime = (d) => d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

//   const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

//   const events = [
//     {
//       icon: "✓",
//       color: "#10b981",
//       title: "Case Submitted",
//       desc: `Case ${c.case_id} created and submitted for processing.`,
//       date: fmt(created),
//       time: fmtTime(created),
//       done: true,
//     },
//   ];

//   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
//     const d2 = addDays(created, 1);
//     events.push({
//       icon: "✓",
//       color: "#028090",
//       title: "Verification Started",
//       desc: "Documents received. Verification team assigned and checks initiated.",
//       date: fmt(d2),
//       time: fmtTime(d2),
//       done: true,
//     });
//   } else {
//     events.push({
//       icon: "○",
//       color: "#94a3b8",
//       title: "Verification Pending",
//       desc: "Awaiting assignment to verification team.",
//       date: "—",
//       time: "",
//       done: false,
//     });
//   }

//   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
//     const d3 = addDays(created, 3);
//     events.push({
//       icon: "✓",
//       color: "#028090",
//       title: "Checks In Progress",
//       desc: `Running ${c.checks ? (Array.isArray(c.checks) ? c.checks.join(", ") : c.checks) : "all"} checks.`,
//       date: fmt(d3),
//       time: fmtTime(d3),
//       done: true,
//     });
//   } else {
//     events.push({
//       icon: "○",
//       color: "#94a3b8",
//       title: "Checks In Progress",
//       desc: "Check-wise verification not yet started.",
//       date: "—",
//       time: "",
//       done: false,
//     });
//   }

//   if (["qc-review", "completed"].includes(c.status)) {
//     const d4 = addDays(created, 5);
//     events.push({
//       icon: "✓",
//       color: "#7c3aed",
//       title: "QC Review",
//       desc: "Case submitted for quality control review.",
//       date: fmt(d4),
//       time: fmtTime(d4),
//       done: true,
//     });
//   } else {
//     events.push({
//       icon: "○",
//       color: "#94a3b8",
//       title: "QC Review",
//       desc: "Quality check pending.",
//       date: "—",
//       time: "",
//       done: false,
//     });
//   }

//   if (c.status === "completed") {
//     const d5 = addDays(created, 7);
//     events.push({
//       icon: "✓",
//       color: "#10b981",
//       title: "Report Dispatched",
//       desc: "Final BGV report generated and dispatched to client.",
//       date: fmt(d5),
//       time: fmtTime(d5),
//       done: true,
//     });
//   } else {
//     events.push({
//       icon: "○",
//       color: "#94a3b8",
//       title: "Report Dispatch",
//       desc: "Report will be generated after QC approval.",
//       date: "—",
//       time: "",
//       done: false,
//     });
//   }

//   return events;
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
//   const chartCases = isDashboard ? cases.filter(c => isInRange(c.created_at)) : cases;

//   const getChecksArray = (c) => {
//     if (Array.isArray(c.checks)) return c.checks;
//     if (typeof c.checks === "string") return c.checks.split(/[·,]/).map(x => x.trim()).filter(Boolean);
//     return [];
//   };

//   const getCheckStatus = (c, checkName) => {
//     if (c.check_statuses && c.check_statuses[checkName]) return c.check_statuses[checkName];
//     return inferCheckStatus(c.status);
//   };

//   const handleTabChange = (key) => navigate(`/Client?tab=${key}`, { replace: true });

//   const exportCSV = () => {
//     const headers = ["Case ID", "Candidate", "Checks", "Status", "Created", "Amount"];
//     const rows    = filtered.map(c => [
//       c.case_id, c.candidate || c.candidate_name,
//       Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
//       c.status, c.created_at, `₹${c.total_amount || 0}`,
//     ]);
//     const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
//     const blob = new Blob([csv], { type: "text/csv" });
//     const url  = URL.createObjectURL(blob);
//     const a    = document.createElement("a");
//     a.href = url; a.download = `my-cases-${Date.now()}.csv`; a.click();
//     URL.revokeObjectURL(url);
//   };

//   // ── Check-wise Status grid — 2 column with divider (matches Image 1) ───────
//   const CheckwiseGrid = ({ c }) => {
//     const checks = getChecksArray(c);
//     if (checks.length === 0) return (
//       <p style={{ color: "#94a3b8", fontSize: "13px", padding: "12px 0" }}>No checks assigned.</p>
//     );
//     const left  = checks.filter((_, i) => i % 2 === 0);
//     const right = checks.filter((_, i) => i % 2 !== 0);

//     return (
//       <div>
//         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//           Check-wise Status
//         </p>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 12px" }}>
//           <div>
//             {left.map((chk, i) => {
//               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
//               return (
//                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: i < left.length - 1 ? "1px solid #f1f5f9" : "none" }}>
//                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
//                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//           <div style={{ background: "#e2e8f0" }} />
//           <div>
//             {right.map((chk, i) => {
//               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
//               return (
//                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: i < right.length - 1 ? "1px solid #f1f5f9" : "none" }}>
//                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
//                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // ── Timeline component ────────────────────────────────────────────────────
//   const TimelineView = ({ c }) => {
//     const events = buildTimeline(c);
//     return (
//       <div style={{ padding: "4px 0" }}>
//         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//           Case Timeline
//         </p>
//         <div style={{ position: "relative" }}>
//           {/* Vertical line */}
//           <div style={{
//             position: "absolute", left: "15px", top: "8px",
//             bottom: "8px", width: "2px", background: "#e2e8f0", zIndex: 0,
//           }} />

//           {events.map((ev, i) => (
//             <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "20px", position: "relative", zIndex: 1 }}>
//               {/* Icon dot */}
//               <div style={{
//                 width: "30px", height: "30px", borderRadius: "50%",
//                 background: ev.done ? ev.color : "#e2e8f0",
//                 color: "#fff", display: "flex", alignItems: "center",
//                 justifyContent: "center", fontSize: "13px", fontWeight: 700,
//                 flexShrink: 0, border: `2px solid ${ev.done ? ev.color : "#cbd5e1"}`,
//                 boxShadow: ev.done ? `0 0 0 3px ${ev.color}22` : "none",
//               }}>
//                 {ev.done ? "✓" : "○"}
//               </div>

//               {/* Content */}
//               <div style={{ flex: 1, paddingTop: "4px" }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
//                   <span style={{ fontSize: "13px", fontWeight: 700, color: ev.done ? "#1e293b" : "#94a3b8" }}>
//                     {ev.title}
//                   </span>
//                   {ev.date !== "—" && (
//                     <span style={{ fontSize: "11px", color: "#94a3b8", whiteSpace: "nowrap", marginLeft: "8px" }}>
//                       {ev.date} {ev.time}
//                     </span>
//                   )}
//                 </div>
//                 <p style={{ fontSize: "12px", color: ev.done ? "#64748b" : "#cbd5e1", margin: 0, lineHeight: 1.5 }}>
//                   {ev.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

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
//                 <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
//                   value={search} onChange={e => setSearch(e.target.value)} />
//                 {search && (
//                   <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
//                 )}
//                 <button className="primary-cta export" onClick={exportCSV}>
//                   <img src="images/dashboard/export-icon.svg" alt="" /> Export
//                 </button>
//               </div>
//             </div>

//             {/* Date filter — Dashboard only */}
//             {isDashboard && (
//               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
//                 {DATE_FILTERS.map(df => (
//                   <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`} onClick={() => setDateFilter(df.key)}>
//                     {df.label}
//                   </button>
//                 ))}
//                 {dateFilter === "custom" && (
//                   <>
//                     <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//                     <span style={{ color: "#94a3b8" }}>→</span>
//                     <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//                   </>
//                 )}
//               </div>
//             )}

//             {/* Stat cards */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total"><h4>{loading ? "—" : total}</h4><p>Total Cases</p></div>
//               <div className="card-inner-dash bdr-progress"><h4>{loading ? "—" : counts["in-progress"]}</h4><p>In Progress</p></div>
//               <div className="card-inner-dash bdr-com"><h4>{loading ? "—" : counts.completed}</h4><p>Completed</p></div>
//               <div className="card-inner-dash bdr-rate"><h4>{loading ? "—" : clearRate}%</h4><p>Clear Rate</p></div>
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
//                     dateFilter={dateFilter} customFrom={customFrom} customTo={customTo}
//                   />
//                 </div>
//                 <div className="dash-inner-right">
//                   <div className="quick-stats">
//                     <div className="stats-header"><h3>QUICK STATS</h3></div>
//                     <div className="stats-body">
//                       <div className="stats-row"><span>Total Cases</span><strong>{loading ? "—" : total}</strong></div>
//                       <div className="stats-row"><span>Active Cases</span><strong>{loading ? "—" : counts.pending}</strong></div>
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
//                   <button key={tab.key} className={`tab-cta ${statusTab === tab.key ? "active" : ""}`} onClick={() => handleTabChange(tab.key)}>
//                     {tab.label}
//                     <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
//                       {counts[tab.key] ?? 0}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Split panel */}
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
//                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>No {statusTab === "all" ? "" : statusTab + " "}cases found.</p>
//                       {cases.length === 0 && (
//                         <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>+ Add Your First Case</button>
//                       )}
//                     </div>
//                   ) : (
//                     <table>
//                       <tbody>
//                         {filtered.map(c => {
//                           const meta       = getStatusMeta(c.status);
//                           const color      = meta.color;
//                           const pct        = meta.pct;
//                           const dayLabel   = meta.dayLabel(c);
//                           const name       = c.candidate || c.candidate_name || "—";
//                           const isSelected = selectedCase?.case_id === c.case_id;
//                           return (
//                             <tr className="boder-tbl active" key={c.case_id}
//                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
//                               style={{
//                                 cursor: "pointer",
//                                 background: isSelected ? "#eef3ff" : undefined,
//                                 borderLeft: isSelected ? "3px solid #2b3b8c" : "3px solid transparent",
//                               }}
//                             >
//                               <td>
//                                 <div className="criminal-case">
//                                   <p>
//                                     <span>{c.case_id}</span><br />
//                                     <span style={{ fontSize: "11px", color: "#94a3b8" }}>
//                                       {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
//                                     </span>
//                                   </p>
//                                 </div>
//                               </td>
//                               <td><div className="client-names">{name}</div></td>
//                               <td>
//                                 <div className="custom-progress">
//                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
//                                 </div>
//                                 <p className="progress-client-text" style={{ color }}>{dayLabel}</p>
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
//                     {/* Header — dark navy like Image 1 */}
//                     <div style={{ background: "#27348B", color: "#fff", padding: "14px 18px", fontWeight: 700, fontSize: "14px", borderRadius: "6px 6px 0 0" }}>
//                       CASE DETAIL — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}
//                     </div>

//                     {/* 4 tabs: Overview · Timeline · Documents · Comments */}
//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
//                       {["overview", "timeline", "documents", "comments"].map((t, i) => (
//                         <button key={t} onClick={() => setActiveDetailTab(t)} style={{
//                           padding: "12px 0", border: "none",
//                           borderRight: i < 3 ? "1px solid #e2e8f0" : "none",
//                           borderBottom: activeDetailTab === t ? "3px solid #27348B" : "3px solid transparent",
//                           background: activeDetailTab === t ? "#f0f4ff" : "#fff",
//                           color: activeDetailTab === t ? "#27348B" : "#64748b",
//                           fontWeight: activeDetailTab === t ? 700 : 400,
//                           fontSize: "13px", cursor: "pointer", textTransform: "capitalize",
//                           transition: "all 0.15s",
//                         }}>
//                           {t.charAt(0).toUpperCase() + t.slice(1)}
//                         </button>
//                       ))}
//                     </div>

//                     {/* Tab content */}
//                     <div style={{ border: "1px solid #e2e8f0", borderTop: "none", padding: "16px", borderRadius: "0 0 6px 6px", background: "#fff", minHeight: "260px", maxHeight: "420px", overflowY: "auto" }}>

//                       {/* ── OVERVIEW ── */}
//                       {activeDetailTab === "overview" && (
//                         <div>
//                           {[
//                             { label: "Case ID",   value: selectedCase.case_id },
//                             { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
//                             { label: "Status",    value: (
//                               <span style={{ background: getStatusMeta(selectedCase.status).color, color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
//                                 {statusLabel(selectedCase.status)}
//                               </span>
//                             )},
//                             { label: "Priority",  value: selectedCase.priority || "Normal" },
//                             { label: "TAT",       value: formatTAT(selectedCase.tat) },
//                             { label: "Created",   value: selectedCase.created_at ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
//                             { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
//                           ].map(r => (
//                             <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
//                               <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
//                               <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {/* ── TIMELINE ── */}
//                       {activeDetailTab === "timeline" && <TimelineView c={selectedCase} />}

//                       {/* ── DOCUMENTS — Check-wise Status (matches Image 1) ── */}
//                       {activeDetailTab === "documents" && <CheckwiseGrid c={selectedCase} />}

//                       {/* ── COMMENTS ── */}
//                       {activeDetailTab === "comments" && (
//                         <div>
//                           <textarea placeholder="Write a comment or query about this case…" style={{
//                             width: "100%", minHeight: "100px", padding: "10px 12px",
//                             border: "1px solid #e2e8f0", borderRadius: "6px",
//                             fontSize: "13px", resize: "vertical", outline: "none", boxSizing: "border-box",
//                           }} />
//                           <button className="primary-cta" style={{ marginTop: "10px" }}>Submit Comment</button>
//                         </div>
//                       )}
//                     </div>

//                     {/* Action buttons — full width like Image 1 */}
//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" }}>
//                       <button className="secondary-cta import" onClick={exportCSV}
//                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px", height: "auto", borderRadius: "6px" }}>
//                         <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "18px", height: "18px" }} />
//                         Download Report
//                       </button>
//                       <button className="primary-cta export"
//                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px", height: "auto", borderRadius: "6px" }}>
//                         <img src="images/dashboard/export-icon.svg" alt="" style={{ width: "18px", height: "18px" }} />
//                         Submit Query
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
// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import CaseTrendsChart from "./CaseTrendsChart";
// import { API_URL } from "../src/config";

// // ── Status tabs — "In Progress" tab kept for filtering but removed from sidebar
// const STATUS_TABS = [
//   { key: "all",         label: "All Cases"   },
//   { key: "pending",     label: "Active Cases"     },
//   { key: "in-progress", label: "In Progress" },
//   { key: "completed",   label: "Completed"   },
// ];

// const DATE_FILTERS = [
//   { key: "today",  label: "Today"      },
//   { key: "week",   label: "This Week"  },
//   { key: "month",  label: "This Month" },
//   { key: "custom", label: "Custom"     },
// ];

// const CHECK_BADGE = {
//   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
//   in_progress: { label: "In Progress", bg: "#028090", color: "#fff" },
//   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
//   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
//   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// };

// const STATUS_META = {
//   "pending":     { color: "#f59e0b", pct: 20, dayLabel: () => "Day 1/7"  },
//   "in-progress": { color: "#028090", pct: 60, dayLabel: () => "Day 4/7"  },
//   "qc-review":   { color: "#7c3aed", pct: 85, dayLabel: () => "Day 6/7"  },
//   "completed":   { color: "#10b981", pct: 100, dayLabel: () => "Done"    },
//   "on-hold":     { color: "#94a3b8", pct: 30, dayLabel: () => "On Hold"  },
// };

// function getStatusMeta(status) {
//   return STATUS_META[status] || STATUS_META["pending"];
// }

// function statusLabel(s) {
//   return {
//     "pending": "Active", "in-progress": "In Progress",
//     "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold",
//   }[s] || s;
// }

// function formatTAT(tat) {
//   if (!tat) return "—";
//   const str = String(tat);
//   if (/\d+\.?\d*[eE][+\-]?\d+/.test(str)) return "—";
//   const num = parseFloat(str);
//   if (!isNaN(num) && !str.includes("d") && !str.includes("D")) return `${Math.round(num)} days`;
//   return str;
// }

// function getTabFromURL(search) {
//   const tab = new URLSearchParams(search).get("tab") || "all";
//   return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// }

// function inferCheckStatus(caseStat) {
//   if (caseStat === "completed")   return "clear";
//   if (caseStat === "in-progress") return "in_progress";
//   if (caseStat === "pending")     return "pending";
//   return "na";
// }

// // ── Timeline events generator ────────────────────────────────────────────────
// function buildTimeline(c) {
//   const created = c.created_at ? new Date(c.created_at) : new Date();
//   const fmt = (d) => d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   const fmtTime = (d) => d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
//   const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

//   const events = [
//     { icon: "✓", color: "#10b981", title: "Case Submitted",
//       desc: `Case ${c.case_id} created and submitted for processing.`,
//       date: fmt(created), time: fmtTime(created), done: true },
//   ];

//   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
//     const d2 = addDays(created, 1);
//     events.push({ icon: "✓", color: "#028090", title: "Verification Started",
//       desc: "Documents received. Verification team assigned and checks initiated.",
//       date: fmt(d2), time: fmtTime(d2), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "Verification Pending",
//       desc: "Awaiting assignment to verification team.", date: "—", time: "", done: false });
//   }

//   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
//     const d3 = addDays(created, 3);
//     events.push({ icon: "✓", color: "#028090", title: "Checks In Progress",
//       desc: `Running ${c.checks ? (Array.isArray(c.checks) ? c.checks.join(", ") : c.checks) : "all"} checks.`,
//       date: fmt(d3), time: fmtTime(d3), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "Checks In Progress",
//       desc: "Check-wise verification not yet started.", date: "—", time: "", done: false });
//   }

//   if (["qc-review", "completed"].includes(c.status)) {
//     const d4 = addDays(created, 5);
//     events.push({ icon: "✓", color: "#7c3aed", title: "QC Review",
//       desc: "Case submitted for quality control review.",
//       date: fmt(d4), time: fmtTime(d4), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "QC Review",
//       desc: "Quality check pending.", date: "—", time: "", done: false });
//   }

//   if (c.status === "completed") {
//     const d5 = addDays(created, 7);
//     events.push({ icon: "✓", color: "#10b981", title: "Report Dispatched",
//       desc: "Final BGV report generated and dispatched to client.",
//       date: fmt(d5), time: fmtTime(d5), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "Report Dispatch",
//       desc: "Report will be generated after QC approval.", date: "—", time: "", done: false });
//   }

//   return events;
// }

// // ── Bulk upload CSV parser ────────────────────────────────────────────────────
// function parseBulkCSV(text) {
//   const lines = text.trim().split("\n").filter(Boolean);
//   if (lines.length < 2) return { rows: [], errors: ["CSV must have a header row and at least one data row."] };
//   const headers = lines[0].split(",").map(h => h.trim().toLowerCase().replace(/\s+/g, "_"));
//   const rows = [];
//   const errors = [];
//   lines.slice(1).forEach((line, i) => {
//     const vals = line.split(",").map(v => v.trim().replace(/^"|"$/g, ""));
//     const row = {};
//     headers.forEach((h, j) => { row[h] = vals[j] || ""; });
//     if (!row.candidate_name && !row.candidate) { errors.push(`Row ${i + 2}: missing candidate name`); return; }
//     if (!row.candidate_email && !row.email)    { errors.push(`Row ${i + 2}: missing email`); return; }
//     rows.push({
//       candidate_name:  row.candidate_name || row.candidate,
//       candidate_email: row.candidate_email || row.email,
//       candidate_mobile: row.mobile || row.candidate_mobile || "",
//       position:        row.position || "",
//       checks:          (row.checks || "employment").split("|").map(c => c.trim()),
//       billing_mode:    row.billing_mode || "postpaid_client",
//       client_name:     row.client_name || row.client || "",
//     });
//   });
//   return { rows, errors };
// }

// export default function Client() {
//   const navigate  = useNavigate();
//   const location  = useLocation();

//   const [cases, setCases]               = useState([]);
//   const [selectedCase, setSelectedCase] = useState(null);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusTab, setStatusTab]       = useState(() => getTabFromURL(location.search));
//   const [dateFilter, setDateFilter]     = useState("month");
//   const [customFrom, setCustomFrom]     = useState("");
//   const [customTo, setCustomTo]         = useState("");
//   const [activeDetailTab, setActiveDetailTab] = useState("overview");

//   // ── Bulk upload state ───────────────────────────────────────────────────────
//   const [showBulkModal, setShowBulkModal]   = useState(false);
//   const [bulkRows, setBulkRows]             = useState([]);
//   const [bulkErrors, setBulkErrors]         = useState([]);
//   const [bulkUploading, setBulkUploading]   = useState(false);
//   const [bulkDone, setBulkDone]             = useState(false);
//   const fileInputRef = useRef(null);

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

//   // For "all" tab (Total Cases page) and "pending"/"completed" — always apply date filter
//   const isTabWithDateFilter = ["all", "pending", "completed"].includes(statusTab);

//   const filtered = cases.filter(c => {
//     const matchTab    = statusTab === "all" || c.status === statusTab;
//     const matchSearch = !search ||
//       (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
//       (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
//     // Dashboard: always date-filter; tab pages: date-filter for all/pending/completed
//     const matchDate = isDashboard ? isInRange(c.created_at)
//       : isTabWithDateFilter ? isInRange(c.created_at) : true;
//     return matchTab && matchSearch && matchDate;
//   });

//   const counts = {
//     all:           cases.length,
//     pending:       cases.filter(c => c.status === "pending").length,
//     "in-progress": cases.filter(c => c.status === "in-progress").length,
//     completed:     cases.filter(c => c.status === "completed").length,
//   };

//   const total     = cases.length;
//   // "Pending Link" count = cases that are in-progress (have a pending link stage)
//   const pendingLinkCount = counts["in-progress"];
//   const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;
//   const chartCases = isDashboard ? cases.filter(c => isInRange(c.created_at)) : cases;

//   const getChecksArray = (c) => {
//     if (Array.isArray(c.checks)) return c.checks;
//     if (typeof c.checks === "string") return c.checks.split(/[·,]/).map(x => x.trim()).filter(Boolean);
//     return [];
//   };

//   const getCheckStatus = (c, checkName) => {
//     if (c.check_statuses && c.check_statuses[checkName]) return c.check_statuses[checkName];
//     return inferCheckStatus(c.status);
//   };

//   const handleTabChange = (key) => navigate(`/Client?tab=${key}`, { replace: true });

//   // ── Export CSV ──────────────────────────────────────────────────────────────
//   const exportCSV = () => {
//     const headers = ["Case ID", "Case Receive Date", "Candidate", "Client", "Checks", "TAT", "Status"];
//     const rows    = filtered.map(c => [
//       c.case_id,
//       c.created_at ? new Date(c.created_at).toLocaleDateString("en-IN") : "—",
//       c.candidate || c.candidate_name,
//       c.client || c.client_name || "—",
//       Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
//       formatTAT(c.tat),
//       statusLabel(c.status),
//     ]);
//     const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
//     const blob = new Blob([csv], { type: "text/csv" });
//     const url  = URL.createObjectURL(blob);
//     const a    = document.createElement("a");
//     a.href = url; a.download = `cases-${Date.now()}.csv`; a.click();
//     URL.revokeObjectURL(url);
//   };

//   // ── Bulk upload handlers ────────────────────────────────────────────────────
//   const handleBulkFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = (ev) => {
//       const { rows, errors } = parseBulkCSV(ev.target.result);
//       setBulkRows(rows);
//       setBulkErrors(errors);
//       setBulkDone(false);
//     };
//     reader.readAsText(file);
//   };

//   const handleBulkSubmit = async () => {
//     if (bulkRows.length === 0) return;
//     setBulkUploading(true);
//     try {
//       const results = await Promise.allSettled(
//         bulkRows.map(row =>
//           fetch(`${API_URL}/api/cases`, {
//             method: "POST",
//             headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" },
//             body: JSON.stringify(row),
//           })
//         )
//       );
//       const failed = results.filter(r => r.status === "rejected" || (r.value && !r.value.ok)).length;
//       if (failed > 0) setBulkErrors([`${failed} case(s) failed to upload. Others may have succeeded.`]);
//       else setBulkErrors([]);
//       setBulkDone(true);
//       fetchCases();
//     } catch (err) {
//       setBulkErrors([err.message]);
//     } finally {
//       setBulkUploading(false);
//     }
//   };

//   const closeBulkModal = () => {
//     setShowBulkModal(false);
//     setBulkRows([]);
//     setBulkErrors([]);
//     setBulkDone(false);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   // ── DateRangeBar — reusable for tab pages ─────────────────────────────────
//   const DateRangeBar = () => (
//     <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center", marginBottom: "12px" }}>
//       {DATE_FILTERS.map(df => (
//         <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
//           onClick={() => setDateFilter(df.key)}>
//           {df.label}
//         </button>
//       ))}
//       {dateFilter === "custom" && (
//         <>
//           <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
//             style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//           <span style={{ color: "#94a3b8" }}>→</span>
//           <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
//             style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//         </>
//       )}
//     </div>
//   );

//   // ── Total Cases Grid View ──────────────────────────────────────────────────
//   const TotalCasesGrid = () => (
//     <div className="dash-wrper">
//       <div className="dash-upper-head">
//         <div className="left">
//           <h3 className="dash-title-text">Total Cases</h3>
//           <span style={{ fontSize: "12px", color: "#64748b", background: "#eef3ff", padding: "3px 10px", borderRadius: "20px", marginLeft: "10px" }}>
//             {filtered.length} records
//           </span>
//         </div>
//         <div className="right">
//           <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
//             value={search} onChange={e => setSearch(e.target.value)} />
//           {search && (
//             <button onClick={() => setSearch("")}
//               style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
//           )}
//           <button className="primary-cta export" onClick={exportCSV}>
//             <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
//           </button>
//           <button className="secondary-cta import" onClick={exportCSV}
//             style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//             <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "16px" }} /> Export Excel
//           </button>
//         </div>
//       </div>

//       <DateRangeBar />

//       <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
//         <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
//           <thead>
//             <tr style={{ background: "#27348B", color: "#fff" }}>
//               {["Case ID", "Case Receive Date", "Candidate Name", "Client", "Checks", "TAT", "Status", "Action"].map(h => (
//                 <th key={h} style={{ padding: "13px 14px", textAlign: "left", fontWeight: 700, fontSize: "12px",
//                   textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr><td colSpan={8} style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>Loading…</td></tr>
//             ) : filtered.length === 0 ? (
//               <tr><td colSpan={8} style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>No cases found.</td></tr>
//             ) : (
//               filtered.map((c, i) => {
//                 const meta = getStatusMeta(c.status);
//                 return (
//                   <tr key={c.case_id} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc",
//                     borderBottom: "1px solid #f1f5f9" }}>
//                     <td style={{ padding: "12px 14px", fontWeight: 700, color: "#27348B" }}>{c.case_id}</td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>
//                       {c.created_at ? new Date(c.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#1e293b", fontWeight: 500 }}>
//                       {c.candidate || c.candidate_name || "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>
//                       {c.client || c.client_name || "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>
//                       {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks || "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>{formatTAT(c.tat)}</td>
//                     <td style={{ padding: "12px 14px" }}>
//                       <span style={{ background: meta.color, color: "#fff", fontSize: "11px", fontWeight: 700,
//                         padding: "4px 10px", borderRadius: "4px", whiteSpace: "nowrap" }}>
//                         {statusLabel(c.status)}
//                       </span>
//                     </td>
//                     <td style={{ padding: "12px 14px" }}>
//                       <button className="primary-cta"
//                         style={{ padding: "6px 16px", fontSize: "12px", height: "auto", borderRadius: "6px" }}
//                         onClick={() => { setSelectedCase(c); navigate("/Client"); }}>
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   // ── Check-wise Status grid ─────────────────────────────────────────────────
//   const CheckwiseGrid = ({ c }) => {
//     const checks = getChecksArray(c);
//     if (checks.length === 0) return (
//       <p style={{ color: "#94a3b8", fontSize: "13px", padding: "12px 0" }}>No checks assigned.</p>
//     );
//     const left  = checks.filter((_, i) => i % 2 === 0);
//     const right = checks.filter((_, i) => i % 2 !== 0);
//     return (
//       <div>
//         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//           Check-wise Status
//         </p>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 12px" }}>
//           <div>
//             {left.map((chk, i) => {
//               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
//               return (
//                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
//                   padding: "9px 0", borderBottom: i < left.length - 1 ? "1px solid #f1f5f9" : "none" }}>
//                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
//                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700,
//                     padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//           <div style={{ background: "#e2e8f0" }} />
//           <div>
//             {right.map((chk, i) => {
//               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
//               return (
//                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
//                   padding: "9px 0", borderBottom: i < right.length - 1 ? "1px solid #f1f5f9" : "none" }}>
//                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
//                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700,
//                     padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // ── Timeline component ─────────────────────────────────────────────────────
//   const TimelineView = ({ c }) => {
//     const events = buildTimeline(c);
//     return (
//       <div style={{ padding: "4px 0" }}>
//         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//           Case Timeline
//         </p>
//         <div style={{ position: "relative" }}>
//           <div style={{ position: "absolute", left: "15px", top: "8px", bottom: "8px", width: "2px", background: "#e2e8f0", zIndex: 0 }} />
//           {events.map((ev, i) => (
//             <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "20px", position: "relative", zIndex: 1 }}>
//               <div style={{ width: "30px", height: "30px", borderRadius: "50%",
//                 background: ev.done ? ev.color : "#e2e8f0", color: "#fff",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: "13px", fontWeight: 700, flexShrink: 0,
//                 border: `2px solid ${ev.done ? ev.color : "#cbd5e1"}`,
//                 boxShadow: ev.done ? `0 0 0 3px ${ev.color}22` : "none" }}>
//                 {ev.done ? "✓" : "○"}
//               </div>
//               <div style={{ flex: 1, paddingTop: "4px" }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
//                   <span style={{ fontSize: "13px", fontWeight: 700, color: ev.done ? "#1e293b" : "#94a3b8" }}>{ev.title}</span>
//                   {ev.date !== "—" && (
//                     <span style={{ fontSize: "11px", color: "#94a3b8", whiteSpace: "nowrap", marginLeft: "8px" }}>
//                       {ev.date} {ev.time}
//                     </span>
//                   )}
//                 </div>
//                 <p style={{ fontSize: "12px", color: ev.done ? "#64748b" : "#cbd5e1", margin: 0, lineHeight: 1.5 }}>{ev.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   // ── If on "all" tab (Total Cases), show grid view ─────────────────────────
//   if (!isDashboard && statusTab === "all") {
//     return (
//       <>
//         <Sidebar />
//         <section id="content">
//           <Header />
//           <main>
//             <TotalCasesGrid />
//           </main>
//         </section>
//       </>
//     );
//   }

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
//                 <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
//                   value={search} onChange={e => setSearch(e.target.value)} />
//                 {search && (
//                   <button onClick={() => setSearch("")}
//                     style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
//                 )}
//                 {/* Bulk Upload button */}
//                 <button className="secondary-cta import"
//                   onClick={() => setShowBulkModal(true)}
//                   style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                   <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "16px" }} />
//                   Bulk Upload
//                 </button>
//                 <button className="primary-cta export" onClick={exportCSV}>
//                   <img src="images/dashboard/export-icon.svg" alt="" /> Export
//                 </button>
//               </div>
//             </div>

//             {/* Date filter — Dashboard AND Active Cases / Completed tabs */}
//             {(isDashboard || isTabWithDateFilter) && (
//               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
//                 {DATE_FILTERS.map(df => (
//                   <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
//                     onClick={() => setDateFilter(df.key)}>
//                     {df.label}
//                   </button>
//                 ))}
//                 {dateFilter === "custom" && (
//                   <>
//                     <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//                     <span style={{ color: "#94a3b8" }}>→</span>
//                     <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//                   </>
//                 )}
//               </div>
//             )}

//             {/* ── Stat cards
//                 Dashboard: Active | In Progress→Pending Link | Completed | Clear Rate
//                 Text changes: "Total Cases"→"Active", "In Progress"→"Pending Link" (change request point 3a/3c)
//             ── */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total">
//                 <h4>{loading ? "—" : counts.pending}</h4>
//                 <p>Active</p>
//               </div>
//               <div className="card-inner-dash bdr-com">
//                 <h4>{loading ? "—" : counts.completed}</h4>
//                 <p>Completed</p>
//               </div>
//               <div className="card-inner-dash bdr-progress">
//                 <h4>{loading ? "—" : pendingLinkCount}</h4>
//                 <p>Pending Link</p>
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
//                     dateFilter={dateFilter} customFrom={customFrom} customTo={customTo}
//                   />
//                 </div>
//                 <div className="dash-inner-right">
//                   <div className="quick-stats">
//                     <div className="stats-header"><h3>QUICK STATS</h3></div>
//                     <div className="stats-body">
//                       <div className="stats-row"><span>Total Cases</span><strong>{loading ? "—" : total}</strong></div>
//                       <div className="stats-row"><span>Active Cases</span><strong>{loading ? "—" : counts.pending}</strong></div>
//                       <div className="stats-row"><span>Pending Link</span><strong>{loading ? "—" : pendingLinkCount}</strong></div>
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
//                   <button key={tab.key} className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
//                     onClick={() => handleTabChange(tab.key)}>
//                     {tab.label}
//                     <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px",
//                       padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
//                       {counts[tab.key] ?? 0}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Tab label for non-dashboard pages */}
//             {!isDashboard && (
//               <div style={{ marginBottom: "8px" }}>
//                 <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#27348B", margin: 0 }}>
//                   {STATUS_TABS.find(t => t.key === statusTab)?.label || "Cases"} ({filtered.length})
//                 </h4>
//               </div>
//             )}

//             {/* Split panel */}
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
//                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>No {statusTab === "all" ? "" : statusTab + " "}cases found.</p>
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
//                           const meta       = getStatusMeta(c.status);
//                           const color      = meta.color;
//                           const pct        = meta.pct;
//                           const dayLabel   = meta.dayLabel(c);
//                           const name       = c.candidate || c.candidate_name || "—";
//                           const isSelected = selectedCase?.case_id === c.case_id;
//                           return (
//                             <tr className="boder-tbl active" key={c.case_id}
//                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
//                               style={{
//                                 cursor: "pointer",
//                                 background: isSelected ? "#eef3ff" : undefined,
//                                 borderLeft: isSelected ? "3px solid #2b3b8c" : "3px solid transparent",
//                               }}>
//                               <td>
//                                 <div className="criminal-case">
//                                   <p>
//                                     <span>{c.case_id}</span><br />
//                                     <span style={{ fontSize: "11px", color: "#94a3b8" }}>
//                                       {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
//                                     </span>
//                                   </p>
//                                 </div>
//                               </td>
//                               <td><div className="client-names">{name}</div></td>
//                               <td>
//                                 <div className="custom-progress">
//                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
//                                 </div>
//                                 <p className="progress-client-text" style={{ color }}>{dayLabel}</p>
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
//                     <div style={{ background: "#27348B", color: "#fff", padding: "14px 18px", fontWeight: 700, fontSize: "14px", borderRadius: "6px 6px 0 0" }}>
//                       CASE DETAIL — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}
//                     </div>

//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
//                       {["overview", "timeline", "documents", "comments"].map((t, i) => (
//                         <button key={t} onClick={() => setActiveDetailTab(t)} style={{
//                           padding: "12px 0", border: "none",
//                           borderRight: i < 3 ? "1px solid #e2e8f0" : "none",
//                           borderBottom: activeDetailTab === t ? "3px solid #27348B" : "3px solid transparent",
//                           background: activeDetailTab === t ? "#f0f4ff" : "#fff",
//                           color: activeDetailTab === t ? "#27348B" : "#64748b",
//                           fontWeight: activeDetailTab === t ? 700 : 400,
//                           fontSize: "13px", cursor: "pointer", textTransform: "capitalize",
//                           transition: "all 0.15s",
//                         }}>
//                           {t.charAt(0).toUpperCase() + t.slice(1)}
//                         </button>
//                       ))}
//                     </div>

//                     <div style={{ border: "1px solid #e2e8f0", borderTop: "none", padding: "16px", borderRadius: "0 0 6px 6px",
//                       background: "#fff", minHeight: "260px", maxHeight: "420px", overflowY: "auto" }}>

//                       {activeDetailTab === "overview" && (
//                         <div>
//                           {[
//                             { label: "Case ID",   value: selectedCase.case_id },
//                             { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
//                             { label: "Status",    value: (
//                               <span style={{ background: getStatusMeta(selectedCase.status).color, color: "#fff",
//                                 fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
//                                 {statusLabel(selectedCase.status)}
//                               </span>
//                             )},
//                             { label: "Priority",  value: selectedCase.priority || "Normal" },
//                             { label: "TAT",       value: formatTAT(selectedCase.tat) },
//                             { label: "Created",   value: selectedCase.created_at
//                               ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
//                             { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
//                           ].map(r => (
//                             <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
//                               padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
//                               <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
//                               <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {activeDetailTab === "timeline"  && <TimelineView c={selectedCase} />}
//                       {activeDetailTab === "documents" && <CheckwiseGrid c={selectedCase} />}

//                       {activeDetailTab === "comments" && (
//                         <div>
//                           <textarea placeholder="Write a comment or query about this case…" style={{
//                             width: "100%", minHeight: "100px", padding: "10px 12px",
//                             border: "1px solid #e2e8f0", borderRadius: "6px",
//                             fontSize: "13px", resize: "vertical", outline: "none", boxSizing: "border-box",
//                           }} />
//                           <button className="primary-cta" style={{ marginTop: "10px" }}>Submit Comment</button>
//                         </div>
//                       )}
//                     </div>

//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" }}>
//                       <button className="secondary-cta import" onClick={exportCSV}
//                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//                           padding: "13px", height: "auto", borderRadius: "6px" }}>
//                         <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "18px", height: "18px" }} />
//                         Download Report
//                       </button>
//                       <button className="primary-cta export"
//                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//                           padding: "13px", height: "auto", borderRadius: "6px" }}>
//                         <img src="images/dashboard/export-icon.svg" alt="" style={{ width: "18px", height: "18px" }} />
//                         Submit Query
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>

//       {/* ── Bulk Upload Modal ────────────────────────────────────────────────── */}
//       {showBulkModal && (
//         <div style={{
//           position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000,
//           display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
//         }}>
//           <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", maxWidth: "640px",
//             width: "100%", maxHeight: "80vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>

//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//               <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#1e293b" }}>Bulk Upload Cases</h3>
//               <button onClick={closeBulkModal}
//                 style={{ background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: "#94a3b8" }}>×</button>
//             </div>

//             {!bulkDone ? (
//               <>
//                 <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "16px", marginBottom: "20px", fontSize: "13px", color: "#475569" }}>
//                   <strong>CSV Format:</strong> Upload a CSV file with the following columns:<br />
//                   <code style={{ fontSize: "12px", background: "#e2e8f0", padding: "2px 6px", borderRadius: "4px" }}>
//                     candidate_name, candidate_email, mobile, position, checks, billing_mode, client_name
//                   </code><br />
//                   <span style={{ marginTop: "6px", display: "block" }}>
//                     For <code>checks</code>, separate multiple checks with <code>|</code> e.g. <code>employment|education|address</code>
//                   </span>
//                 </div>

//                 <input ref={fileInputRef} type="file" accept=".csv" onChange={handleBulkFileChange}
//                   style={{ marginBottom: "16px", fontSize: "13px" }} />

//                 {bulkErrors.length > 0 && (
//                   <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "8px",
//                     padding: "12px", marginBottom: "16px", fontSize: "13px", color: "#dc2626" }}>
//                     {bulkErrors.map((e, i) => <div key={i}>⚠ {e}</div>)}
//                   </div>
//                 )}

//                 {bulkRows.length > 0 && (
//                   <div style={{ marginBottom: "16px" }}>
//                     <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "8px" }}>
//                       <strong>{bulkRows.length}</strong> row(s) ready to upload:
//                     </p>
//                     <div style={{ maxHeight: "200px", overflowY: "auto", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
//                       <table style={{ width: "100%", fontSize: "12px", borderCollapse: "collapse" }}>
//                         <thead>
//                           <tr style={{ background: "#f8fafc" }}>
//                             {["Candidate", "Email", "Checks", "Billing"].map(h => (
//                               <th key={h} style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700,
//                                 borderBottom: "1px solid #e2e8f0", color: "#475569" }}>{h}</th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {bulkRows.map((r, i) => (
//                             <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
//                               <td style={{ padding: "7px 10px", color: "#1e293b" }}>{r.candidate_name}</td>
//                               <td style={{ padding: "7px 10px", color: "#64748b" }}>{r.candidate_email}</td>
//                               <td style={{ padding: "7px 10px", color: "#64748b" }}>{r.checks?.join(", ")}</td>
//                               <td style={{ padding: "7px 10px", color: "#64748b" }}>{r.billing_mode}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 )}

//                 <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
//                   <button className="secondary-cta" onClick={closeBulkModal}
//                     style={{ padding: "10px 20px", height: "auto", borderRadius: "8px" }}>Cancel</button>
//                   <button className="primary-cta"
//                     disabled={bulkRows.length === 0 || bulkUploading}
//                     onClick={handleBulkSubmit}
//                     style={{ padding: "10px 24px", height: "auto", borderRadius: "8px" }}>
//                     {bulkUploading ? "Uploading…" : `Upload ${bulkRows.length} Case(s)`}
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div style={{ textAlign: "center", padding: "24px 0" }}>
//                 <div style={{ width: "56px", height: "56px", background: "#10b981", borderRadius: "50%",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   margin: "0 auto 16px", fontSize: "24px", color: "#fff" }}>✓</div>
//                 <h4 style={{ color: "#1e293b", marginBottom: "8px" }}>Upload Complete!</h4>
//                 <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "20px" }}>
//                   {bulkRows.length} case(s) were uploaded successfully.
//                   {bulkErrors.length > 0 && ` ${bulkErrors.length} failed.`}
//                 </p>
//                 <button className="primary-cta" onClick={closeBulkModal}
//                   style={{ padding: "10px 24px", height: "auto", borderRadius: "8px" }}>Done</button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import CaseTrendsChart from "./CaseTrendsChart";
// import { API_URL } from "../src/config";

// // ── Status tabs — "In Progress" tab kept for filtering but removed from sidebar
// const STATUS_TABS = [
//   { key: "all",         label: "All Cases"   },
//   { key: "pending",     label: "Active Cases"     },
//   { key: "in-progress", label: "In Progress" },
//   { key: "completed",   label: "Completed"   },
// ];

// const DATE_FILTERS = [
//   { key: "today",  label: "Today"      },
//   { key: "week",   label: "This Week"  },
//   { key: "month",  label: "This Month" },
//   { key: "custom", label: "Custom"     },
// ];

// const CHECK_BADGE = {
//   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
//   in_progress: { label: "In Progress", bg: "#028090", color: "#fff" },
//   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
//   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
//   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// };

// const STATUS_META = {
//   "pending":     { color: "#f59e0b", pct: 20, dayLabel: () => "Day 1/7"  },
//   "in-progress": { color: "#028090", pct: 60, dayLabel: () => "Day 4/7"  },
//   "qc-review":   { color: "#7c3aed", pct: 85, dayLabel: () => "Day 6/7"  },
//   "completed":   { color: "#10b981", pct: 100, dayLabel: () => "Done"    },
//   "on-hold":     { color: "#94a3b8", pct: 30, dayLabel: () => "On Hold"  },
// };

// function getStatusMeta(status) {
//   return STATUS_META[status] || STATUS_META["pending"];
// }

// function statusLabel(s) {
//   return {
//     "pending": "Active", "in-progress": "In Progress",
//     "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold",
//   }[s] || s;
// }

// function formatTAT(tat) {
//   if (!tat) return "—";
//   const str = String(tat);
//   if (/\d+\.?\d*[eE][+\-]?\d+/.test(str)) return "—";
//   const num = parseFloat(str);
//   if (!isNaN(num) && !str.includes("d") && !str.includes("D")) return `${Math.round(num)} days`;
//   return str;
// }

// function getTabFromURL(search) {
//   const tab = new URLSearchParams(search).get("tab") || "all";
//   return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// }

// function inferCheckStatus(caseStat) {
//   if (caseStat === "completed")   return "clear";
//   if (caseStat === "in-progress") return "in_progress";
//   if (caseStat === "pending")     return "pending";
//   return "na";
// }

// // ── Timeline events generator ────────────────────────────────────────────────
// function buildTimeline(c) {
//   const created = c.created_at ? new Date(c.created_at) : new Date();
//   const fmt = (d) => d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   const fmtTime = (d) => d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
//   const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

//   const events = [
//     { icon: "✓", color: "#10b981", title: "Case Submitted",
//       desc: `Case ${c.case_id} created and submitted for processing.`,
//       date: fmt(created), time: fmtTime(created), done: true },
//   ];

//   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
//     const d2 = addDays(created, 1);
//     events.push({ icon: "✓", color: "#028090", title: "Verification Started",
//       desc: "Documents received. Verification team assigned and checks initiated.",
//       date: fmt(d2), time: fmtTime(d2), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "Verification Pending",
//       desc: "Awaiting assignment to verification team.", date: "—", time: "", done: false });
//   }

//   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
//     const d3 = addDays(created, 3);
//     events.push({ icon: "✓", color: "#028090", title: "Checks In Progress",
//       desc: `Running ${c.checks ? (Array.isArray(c.checks) ? c.checks.join(", ") : c.checks) : "all"} checks.`,
//       date: fmt(d3), time: fmtTime(d3), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "Checks In Progress",
//       desc: "Check-wise verification not yet started.", date: "—", time: "", done: false });
//   }

//   if (["qc-review", "completed"].includes(c.status)) {
//     const d4 = addDays(created, 5);
//     events.push({ icon: "✓", color: "#7c3aed", title: "QC Review",
//       desc: "Case submitted for quality control review.",
//       date: fmt(d4), time: fmtTime(d4), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "QC Review",
//       desc: "Quality check pending.", date: "—", time: "", done: false });
//   }

//   if (c.status === "completed") {
//     const d5 = addDays(created, 7);
//     events.push({ icon: "✓", color: "#10b981", title: "Report Dispatched",
//       desc: "Final BGV report generated and dispatched to client.",
//       date: fmt(d5), time: fmtTime(d5), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "Report Dispatch",
//       desc: "Report will be generated after QC approval.", date: "—", time: "", done: false });
//   }

//   return events;
// }

// // ── Bulk upload CSV parser ────────────────────────────────────────────────────
// function parseBulkCSV(text) {
//   const lines = text.trim().split("\n").filter(Boolean);
//   if (lines.length < 2) return { rows: [], errors: ["CSV must have a header row and at least one data row."] };
//   const headers = lines[0].split(",").map(h => h.trim().toLowerCase().replace(/\s+/g, "_"));
//   const rows = [];
//   const errors = [];
//   lines.slice(1).forEach((line, i) => {
//     const vals = line.split(",").map(v => v.trim().replace(/^"|"$/g, ""));
//     const row = {};
//     headers.forEach((h, j) => { row[h] = vals[j] || ""; });
//     if (!row.candidate_name && !row.candidate) { errors.push(`Row ${i + 2}: missing candidate name`); return; }
//     if (!row.candidate_email && !row.email)    { errors.push(`Row ${i + 2}: missing email`); return; }
//     rows.push({
//       candidate_name:  row.candidate_name || row.candidate,
//       candidate_email: row.candidate_email || row.email,
//       candidate_mobile: row.mobile || row.candidate_mobile || "",
//       position:        row.position || "",
//       checks:          (row.checks || "employment").split("|").map(c => c.trim()),
//       billing_mode:    row.billing_mode || "postpaid_client",
//       client_name:     row.client_name || row.client || "",
//     });
//   });
//   return { rows, errors };
// }

// export default function Client() {
//   const navigate  = useNavigate();
//   const location  = useLocation();

//   const [cases, setCases]               = useState([]);
//   const [selectedCase, setSelectedCase] = useState(null);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusTab, setStatusTab]       = useState(() => getTabFromURL(location.search));
//   const [dateFilter, setDateFilter]     = useState("month");
//   const [customFrom, setCustomFrom]     = useState("");
//   const [customTo, setCustomTo]         = useState("");
//   const [activeDetailTab, setActiveDetailTab] = useState("overview");

//   // ── Bulk upload state ───────────────────────────────────────────────────────
//   const [showBulkModal, setShowBulkModal]   = useState(false);
//   const [bulkRows, setBulkRows]             = useState([]);
//   const [bulkErrors, setBulkErrors]         = useState([]);
//   const [bulkUploading, setBulkUploading]   = useState(false);
//   const [bulkDone, setBulkDone]             = useState(false);
//   const fileInputRef = useRef(null);

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

//   // For "all" tab (Total Cases page) and "pending"/"completed" — always apply date filter
//   const isTabWithDateFilter = ["all", "pending", "completed"].includes(statusTab);

//   const filtered = cases.filter(c => {
//     const matchTab    = statusTab === "all" || c.status === statusTab;
//     const matchSearch = !search ||
//       (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
//       (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
//     // Dashboard: always date-filter; tab pages: date-filter for all/pending/completed
//     const matchDate = isDashboard ? isInRange(c.created_at)
//       : isTabWithDateFilter ? isInRange(c.created_at) : true;
//     return matchTab && matchSearch && matchDate;
//   });

//   const counts = {
//     all:           cases.length,
//     pending:       cases.filter(c => c.status === "pending").length,
//     "in-progress": cases.filter(c => c.status === "in-progress").length,
//     completed:     cases.filter(c => c.status === "completed").length,
//   };

//   const total     = cases.length;
//   // "Pending Link" count = cases that are in-progress (have a pending link stage)
//   const pendingLinkCount = counts["in-progress"];
//   const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;
//   const chartCases = isDashboard ? cases.filter(c => isInRange(c.created_at)) : cases;

//   const getChecksArray = (c) => {
//     if (Array.isArray(c.checks)) return c.checks;
//     if (typeof c.checks === "string") return c.checks.split(/[·,]/).map(x => x.trim()).filter(Boolean);
//     return [];
//   };

//   const getCheckStatus = (c, checkName) => {
//     if (c.check_statuses && c.check_statuses[checkName]) return c.check_statuses[checkName];
//     return inferCheckStatus(c.status);
//   };

//   const handleTabChange = (key) => navigate(`/Client?tab=${key}`, { replace: true });

//   // ── Export CSV ──────────────────────────────────────────────────────────────
//   const exportCSV = () => {
//     const headers = ["Case ID", "Case Receive Date", "Candidate", "Client", "Checks", "TAT", "Status"];
//     const rows    = filtered.map(c => [
//       c.case_id,
//       c.created_at ? new Date(c.created_at).toLocaleDateString("en-IN") : "—",
//       c.candidate || c.candidate_name,
//       c.client || c.client_name || "—",
//       Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
//       formatTAT(c.tat),
//       statusLabel(c.status),
//     ]);
//     const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
//     const blob = new Blob([csv], { type: "text/csv" });
//     const url  = URL.createObjectURL(blob);
//     const a    = document.createElement("a");
//     a.href = url; a.download = `cases-${Date.now()}.csv`; a.click();
//     URL.revokeObjectURL(url);
//   };

//   // ── Bulk upload handlers ────────────────────────────────────────────────────
//   const handleBulkFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = (ev) => {
//       const { rows, errors } = parseBulkCSV(ev.target.result);
//       setBulkRows(rows);
//       setBulkErrors(errors);
//       setBulkDone(false);
//     };
//     reader.readAsText(file);
//   };

//   const handleBulkSubmit = async () => {
//     if (bulkRows.length === 0) return;
//     setBulkUploading(true);
//     try {
//       const results = await Promise.allSettled(
//         bulkRows.map(row =>
//           fetch(`${API_URL}/api/cases`, {
//             method: "POST",
//             headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" },
//             body: JSON.stringify(row),
//           })
//         )
//       );
//       const failed = results.filter(r => r.status === "rejected" || (r.value && !r.value.ok)).length;
//       if (failed > 0) setBulkErrors([`${failed} case(s) failed to upload. Others may have succeeded.`]);
//       else setBulkErrors([]);
//       setBulkDone(true);
//       fetchCases();
//     } catch (err) {
//       setBulkErrors([err.message]);
//     } finally {
//       setBulkUploading(false);
//     }
//   };

//   const closeBulkModal = () => {
//     setShowBulkModal(false);
//     setBulkRows([]);
//     setBulkErrors([]);
//     setBulkDone(false);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   // ── DateRangeBar — reusable for tab pages ─────────────────────────────────
//   const DateRangeBar = () => (
//     <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center", marginBottom: "12px" }}>
//       {DATE_FILTERS.map(df => (
//         <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
//           onClick={() => setDateFilter(df.key)}>
//           {df.label}
//         </button>
//       ))}
//       {dateFilter === "custom" && (
//         <>
//           <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
//             style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//           <span style={{ color: "#94a3b8" }}>→</span>
//           <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
//             style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//         </>
//       )}
//     </div>
//   );

//   // ── Total Cases Grid View ──────────────────────────────────────────────────
//   const TotalCasesGrid = () => (
//     <div className="dash-wrper">
//       <div className="dash-upper-head">
//         <div className="left">
//           <h3 className="dash-title-text">Total Cases</h3>
//           <span style={{ fontSize: "12px", color: "#64748b", background: "#eef3ff", padding: "3px 10px", borderRadius: "20px", marginLeft: "10px" }}>
//             {filtered.length} records
//           </span>
//         </div>
//         <div className="right">
//           <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
//             value={search} onChange={e => setSearch(e.target.value)} />
//           {search && (
//             <button onClick={() => setSearch("")}
//               style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
//           )}
//           <button className="primary-cta export" onClick={exportCSV}>
//             <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
//           </button>
//           <button className="secondary-cta import" onClick={exportCSV}
//             style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//             <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "16px" }} /> Export Excel
//           </button>
//         </div>
//       </div>

//       <DateRangeBar />

//       <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
//         <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
//           <thead>
//             <tr style={{ background: "#27348B", color: "#fff" }}>
//               {["Case ID", "Case Receive Date", "Candidate Name", "Client", "Checks", "TAT", "Status", "Action"].map(h => (
//                 <th key={h} style={{ padding: "13px 14px", textAlign: "left", fontWeight: 700, fontSize: "12px",
//                   textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr><td colSpan={8} style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>Loading…</td></tr>
//             ) : filtered.length === 0 ? (
//               <tr><td colSpan={8} style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>No cases found.</td></tr>
//             ) : (
//               filtered.map((c, i) => {
//                 const meta = getStatusMeta(c.status);
//                 return (
//                   <tr key={c.case_id} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc",
//                     borderBottom: "1px solid #f1f5f9" }}>
//                     <td style={{ padding: "12px 14px", fontWeight: 700, color: "#27348B" }}>{c.case_id}</td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>
//                       {c.created_at ? new Date(c.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#1e293b", fontWeight: 500 }}>
//                       {c.candidate || c.candidate_name || "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>
//                       {c.client || c.client_name || "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>
//                       {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks || "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>{formatTAT(c.tat)}</td>
//                     <td style={{ padding: "12px 14px" }}>
//                       <span style={{ background: meta.color, color: "#fff", fontSize: "11px", fontWeight: 700,
//                         padding: "4px 10px", borderRadius: "4px", whiteSpace: "nowrap" }}>
//                         {statusLabel(c.status)}
//                       </span>
//                     </td>
//                     <td style={{ padding: "12px 14px" }}>
//                       <button className="primary-cta"
//                         style={{ padding: "6px 16px", fontSize: "12px", height: "auto", borderRadius: "6px" }}
//                         onClick={() => { setSelectedCase(c); navigate("/Client"); }}>
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   // ── Check-wise Status grid ─────────────────────────────────────────────────
//   const CheckwiseGrid = ({ c }) => {
//     const checks = getChecksArray(c);
//     if (checks.length === 0) return (
//       <p style={{ color: "#94a3b8", fontSize: "13px", padding: "12px 0" }}>No checks assigned.</p>
//     );
//     const left  = checks.filter((_, i) => i % 2 === 0);
//     const right = checks.filter((_, i) => i % 2 !== 0);
//     return (
//       <div>
//         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//           Check-wise Status
//         </p>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 12px" }}>
//           <div>
//             {left.map((chk, i) => {
//               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
//               return (
//                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
//                   padding: "9px 0", borderBottom: i < left.length - 1 ? "1px solid #f1f5f9" : "none" }}>
//                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
//                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700,
//                     padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//           <div style={{ background: "#e2e8f0" }} />
//           <div>
//             {right.map((chk, i) => {
//               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
//               return (
//                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
//                   padding: "9px 0", borderBottom: i < right.length - 1 ? "1px solid #f1f5f9" : "none" }}>
//                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
//                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700,
//                     padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // ── Timeline component ─────────────────────────────────────────────────────
//   const TimelineView = ({ c }) => {
//     const events = buildTimeline(c);
//     return (
//       <div style={{ padding: "4px 0" }}>
//         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//           Case Timeline
//         </p>
//         <div style={{ position: "relative" }}>
//           <div style={{ position: "absolute", left: "15px", top: "8px", bottom: "8px", width: "2px", background: "#e2e8f0", zIndex: 0 }} />
//           {events.map((ev, i) => (
//             <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "20px", position: "relative", zIndex: 1 }}>
//               <div style={{ width: "30px", height: "30px", borderRadius: "50%",
//                 background: ev.done ? ev.color : "#e2e8f0", color: "#fff",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: "13px", fontWeight: 700, flexShrink: 0,
//                 border: `2px solid ${ev.done ? ev.color : "#cbd5e1"}`,
//                 boxShadow: ev.done ? `0 0 0 3px ${ev.color}22` : "none" }}>
//                 {ev.done ? "✓" : "○"}
//               </div>
//               <div style={{ flex: 1, paddingTop: "4px" }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
//                   <span style={{ fontSize: "13px", fontWeight: 700, color: ev.done ? "#1e293b" : "#94a3b8" }}>{ev.title}</span>
//                   {ev.date !== "—" && (
//                     <span style={{ fontSize: "11px", color: "#94a3b8", whiteSpace: "nowrap", marginLeft: "8px" }}>
//                       {ev.date} {ev.time}
//                     </span>
//                   )}
//                 </div>
//                 <p style={{ fontSize: "12px", color: ev.done ? "#64748b" : "#cbd5e1", margin: 0, lineHeight: 1.5 }}>{ev.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   // ── If on "all" tab (Total Cases), show grid view ─────────────────────────
//   if (!isDashboard && statusTab === "all") {
//     return (
//       <>
//         <Sidebar />
//         <section id="content">
//           <Header />
//           <main>
//             <TotalCasesGrid />
//           </main>
//         </section>
//       </>
//     );
//   }

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
//                 <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
//                   value={search} onChange={e => setSearch(e.target.value)} />
//                 {search && (
//                   <button onClick={() => setSearch("")}
//                     style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
//                 )}
//                 {/* Bulk Upload button */}
//                 <button className="secondary-cta import"
//                   onClick={() => setShowBulkModal(true)}
//                   style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                   <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "16px" }} />
//                   Bulk Upload
//                 </button>
//                 <button className="primary-cta export" onClick={exportCSV}>
//                   <img src="images/dashboard/export-icon.svg" alt="" /> Export
//                 </button>
//               </div>
//             </div>

//             {/* Date filter — Dashboard AND Active Cases / Completed tabs */}
//             {(isDashboard || isTabWithDateFilter) && (
//               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
//                 {DATE_FILTERS.map(df => (
//                   <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
//                     onClick={() => setDateFilter(df.key)}>
//                     {df.label}
//                   </button>
//                 ))}
//                 {dateFilter === "custom" && (
//                   <>
//                     <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//                     <span style={{ color: "#94a3b8" }}>→</span>
//                     <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//                   </>
//                 )}
//               </div>
//             )}

//             {/* ── Stat cards
//                 Dashboard: Active | In Progress→Pending Link | Completed | Clear Rate
//                 Text changes: "Total Cases"→"Active", "In Progress"→"Pending Link" (change request point 3a/3c)
//             ── */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total">
//                 <h4>{loading ? "—" : counts.pending}</h4>
//                 <p>Active</p>
//               </div>
//               <div className="card-inner-dash bdr-com">
//                 <h4>{loading ? "—" : counts.completed}</h4>
//                 <p>Completed</p>
//               </div>
//               <div className="card-inner-dash bdr-progress">
//                 <h4>{loading ? "—" : pendingLinkCount}</h4>
//                 <p>Pending Link</p>
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
//                     dateFilter={dateFilter} customFrom={customFrom} customTo={customTo}
//                   />
//                 </div>
//                 <div className="dash-inner-right">
//                   <div className="quick-stats">
//                     <div className="stats-header"><h3>QUICK STATS</h3></div>
//                     <div className="stats-body">
//                       <div className="stats-row"><span>Total Cases</span><strong>{loading ? "—" : total}</strong></div>
//                       <div className="stats-row"><span>Active Cases</span><strong>{loading ? "—" : counts.pending}</strong></div>
//                       <div className="stats-row"><span>Pending Link</span><strong>{loading ? "—" : pendingLinkCount}</strong></div>
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
//                   <button key={tab.key} className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
//                     onClick={() => handleTabChange(tab.key)}>
//                     {tab.label}
//                     <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px",
//                       padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
//                       {counts[tab.key] ?? 0}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Tab label for non-dashboard pages */}
//             {!isDashboard && (
//               <div style={{ marginBottom: "8px" }}>
//                 <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#27348B", margin: 0 }}>
//                   {STATUS_TABS.find(t => t.key === statusTab)?.label || "Cases"} ({filtered.length})
//                 </h4>
//               </div>
//             )}

//             {/* Split panel */}
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
//                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>No {statusTab === "all" ? "" : statusTab + " "}cases found.</p>
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
//                           const meta       = getStatusMeta(c.status);
//                           const color      = meta.color;
//                           const pct        = meta.pct;
//                           const dayLabel   = meta.dayLabel(c);
//                           const name       = c.candidate || c.candidate_name || "—";
//                           const isSelected = selectedCase?.case_id === c.case_id;
//                           return (
//                             <tr className="boder-tbl active" key={c.case_id}
//                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
//                               style={{
//                                 cursor: "pointer",
//                                 background: isSelected ? "#eef3ff" : undefined,
//                                 borderLeft: isSelected ? "3px solid #2b3b8c" : "3px solid transparent",
//                               }}>
//                               <td>
//                                 <div className="criminal-case">
//                                   <p>
//                                     <span>{c.case_id}</span><br />
//                                     <span style={{ fontSize: "11px", color: "#94a3b8" }}>
//                                       {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
//                                     </span>
//                                   </p>
//                                 </div>
//                               </td>
//                               <td><div className="client-names">{name}</div></td>
//                               <td>
//                                 <div className="custom-progress">
//                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
//                                 </div>
//                                 <p className="progress-client-text" style={{ color }}>{dayLabel}</p>
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
//                     <div style={{ background: "#27348B", color: "#fff", padding: "14px 18px", fontWeight: 700, fontSize: "14px", borderRadius: "6px 6px 0 0" }}>
//                       CASE DETAIL — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}
//                     </div>

//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
//                       {["overview", "timeline", "documents", "comments"].map((t, i) => (
//                         <button key={t} onClick={() => setActiveDetailTab(t)} style={{
//                           padding: "12px 0", border: "none",
//                           borderRight: i < 3 ? "1px solid #e2e8f0" : "none",
//                           borderBottom: activeDetailTab === t ? "3px solid #27348B" : "3px solid transparent",
//                           background: activeDetailTab === t ? "#f0f4ff" : "#fff",
//                           color: activeDetailTab === t ? "#27348B" : "#64748b",
//                           fontWeight: activeDetailTab === t ? 700 : 400,
//                           fontSize: "13px", cursor: "pointer", textTransform: "capitalize",
//                           transition: "all 0.15s",
//                         }}>
//                           {t.charAt(0).toUpperCase() + t.slice(1)}
//                         </button>
//                       ))}
//                     </div>

//                     <div style={{ border: "1px solid #e2e8f0", borderTop: "none", padding: "16px", borderRadius: "0 0 6px 6px",
//                       background: "#fff", minHeight: "260px", maxHeight: "420px", overflowY: "auto" }}>

//                       {activeDetailTab === "overview" && (
//                         <div>
//                           {[
//                             { label: "Case ID",   value: selectedCase.case_id },
//                             { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
//                             { label: "Status",    value: (
//                               <span style={{ background: getStatusMeta(selectedCase.status).color, color: "#fff",
//                                 fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
//                                 {statusLabel(selectedCase.status)}
//                               </span>
//                             )},
//                             { label: "Priority",  value: selectedCase.priority || "Normal" },
//                             { label: "TAT",       value: formatTAT(selectedCase.tat) },
//                             { label: "Created",   value: selectedCase.created_at
//                               ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
//                             { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
//                           ].map(r => (
//                             <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
//                               padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
//                               <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
//                               <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {activeDetailTab === "timeline"  && <TimelineView c={selectedCase} />}
//                       {activeDetailTab === "documents" && <CheckwiseGrid c={selectedCase} />}

//                       {activeDetailTab === "comments" && (
//                         <div>
//                           <textarea placeholder="Write a comment or query about this case…" style={{
//                             width: "100%", minHeight: "100px", padding: "10px 12px",
//                             border: "1px solid #e2e8f0", borderRadius: "6px",
//                             fontSize: "13px", resize: "vertical", outline: "none", boxSizing: "border-box",
//                           }} />
//                           <button className="primary-cta" style={{ marginTop: "10px" }}>Submit Comment</button>
//                         </div>
//                       )}
//                     </div>

//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" }}>
//                       <button className="secondary-cta import" onClick={exportCSV}
//                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//                           padding: "13px", height: "auto", borderRadius: "6px" }}>
//                         <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "18px", height: "18px" }} />
//                         Download Report
//                       </button>
//                       <button className="primary-cta export"
//                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//                           padding: "13px", height: "auto", borderRadius: "6px" }}>
//                         <img src="images/dashboard/export-icon.svg" alt="" style={{ width: "18px", height: "18px" }} />
//                         Submit Query
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>

//       {/* ── Bulk Upload Modal ────────────────────────────────────────────────── */}
//       {showBulkModal && (
//         <div style={{
//           position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000,
//           display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
//         }}>
//           <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", maxWidth: "640px",
//             width: "100%", maxHeight: "80vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>

//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//               <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#1e293b" }}>Bulk Upload Cases</h3>
//               <button onClick={closeBulkModal}
//                 style={{ background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: "#94a3b8" }}>×</button>
//             </div>

//             {!bulkDone ? (
//               <>
//                 <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "16px", marginBottom: "20px", fontSize: "13px", color: "#475569" }}>
//                   <strong>CSV Format:</strong> Upload a CSV file with the following columns:<br />
//                   <code style={{ fontSize: "12px", background: "#e2e8f0", padding: "2px 6px", borderRadius: "4px" }}>
//                     candidate_name, candidate_email, mobile, position, checks, billing_mode, client_name
//                   </code><br />
//                   <span style={{ marginTop: "6px", display: "block" }}>
//                     For <code>checks</code>, separate multiple checks with <code>|</code> e.g. <code>employment|education|address</code>
//                   </span>
//                 </div>

//                 <input ref={fileInputRef} type="file" accept=".csv" onChange={handleBulkFileChange}
//                   style={{ marginBottom: "16px", fontSize: "13px" }} />

//                 {bulkErrors.length > 0 && (
//                   <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "8px",
//                     padding: "12px", marginBottom: "16px", fontSize: "13px", color: "#dc2626" }}>
//                     {bulkErrors.map((e, i) => <div key={i}>⚠ {e}</div>)}
//                   </div>
//                 )}

//                 {bulkRows.length > 0 && (
//                   <div style={{ marginBottom: "16px" }}>
//                     <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "8px" }}>
//                       <strong>{bulkRows.length}</strong> row(s) ready to upload:
//                     </p>
//                     <div style={{ maxHeight: "200px", overflowY: "auto", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
//                       <table style={{ width: "100%", fontSize: "12px", borderCollapse: "collapse" }}>
//                         <thead>
//                           <tr style={{ background: "#f8fafc" }}>
//                             {["Candidate", "Email", "Checks", "Billing"].map(h => (
//                               <th key={h} style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700,
//                                 borderBottom: "1px solid #e2e8f0", color: "#475569" }}>{h}</th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {bulkRows.map((r, i) => (
//                             <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
//                               <td style={{ padding: "7px 10px", color: "#1e293b" }}>{r.candidate_name}</td>
//                               <td style={{ padding: "7px 10px", color: "#64748b" }}>{r.candidate_email}</td>
//                               <td style={{ padding: "7px 10px", color: "#64748b" }}>{r.checks?.join(", ")}</td>
//                               <td style={{ padding: "7px 10px", color: "#64748b" }}>{r.billing_mode}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 )}

//                 <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
//                   <button className="secondary-cta" onClick={closeBulkModal}
//                     style={{ padding: "10px 20px", height: "auto", borderRadius: "8px" }}>Cancel</button>
//                   <button className="primary-cta"
//                     disabled={bulkRows.length === 0 || bulkUploading}
//                     onClick={handleBulkSubmit}
//                     style={{ padding: "10px 24px", height: "auto", borderRadius: "8px" }}>
//                     {bulkUploading ? "Uploading…" : `Upload ${bulkRows.length} Case(s)`}
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div style={{ textAlign: "center", padding: "24px 0" }}>
//                 <div style={{ width: "56px", height: "56px", background: "#10b981", borderRadius: "50%",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   margin: "0 auto 16px", fontSize: "24px", color: "#fff" }}>✓</div>
//                 <h4 style={{ color: "#1e293b", marginBottom: "8px" }}>Upload Complete!</h4>
//                 <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "20px" }}>
//                   {bulkRows.length} case(s) were uploaded successfully.
//                   {bulkErrors.length > 0 && ` ${bulkErrors.length} failed.`}
//                 </p>
//                 <button className="primary-cta" onClick={closeBulkModal}
//                   style={{ padding: "10px 24px", height: "auto", borderRadius: "8px" }}>Done</button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import CaseTrendsChart from "./CaseTrendsChart";
// import { API_URL } from "../src/config";

// // ── Status tabs — "In Progress" tab kept for filtering but removed from sidebar
// const STATUS_TABS = [
//   { key: "all",         label: "All Cases"   },
//   { key: "pending",     label: "Active Cases"     },
//   { key: "in-progress", label: "In Progress" },
//   { key: "completed",   label: "Completed"   },
// ];

// const DATE_FILTERS = [
//   { key: "today",  label: "Today"      },
//   { key: "week",   label: "This Week"  },
//   { key: "month",  label: "This Month" },
//   { key: "custom", label: "Custom"     },
// ];

// const CHECK_BADGE = {
//   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
//   in_progress: { label: "In Progress", bg: "#028090", color: "#fff" },
//   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
//   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
//   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// };

// const STATUS_META = {
//   "pending":     { color: "#f59e0b", pct: 20, dayLabel: () => "Day 1/7"  },
//   "in-progress": { color: "#028090", pct: 60, dayLabel: () => "Day 4/7"  },
//   "qc-review":   { color: "#7c3aed", pct: 85, dayLabel: () => "Day 6/7"  },
//   "completed":   { color: "#10b981", pct: 100, dayLabel: () => "Done"    },
//   "on-hold":     { color: "#94a3b8", pct: 30, dayLabel: () => "On Hold"  },
// };

// function getStatusMeta(status) {
//   return STATUS_META[status] || STATUS_META["pending"];
// }

// function statusLabel(s) {
//   return {
//     "pending": "Active", "in-progress": "In Progress",
//     "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold",
//   }[s] || s;
// }

// function formatTAT(tat) {
//   if (!tat) return "—";
//   const str = String(tat);
//   if (/\d+\.?\d*[eE][+\-]?\d+/.test(str)) return "—";
//   const num = parseFloat(str);
//   if (!isNaN(num) && !str.includes("d") && !str.includes("D")) return `${Math.round(num)} days`;
//   return str;
// }

// function getTabFromURL(search) {
//   const tab = new URLSearchParams(search).get("tab") || "all";
//   return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// }

// function inferCheckStatus(caseStat) {
//   if (caseStat === "completed")   return "clear";
//   if (caseStat === "in-progress") return "in_progress";
//   if (caseStat === "pending")     return "pending";
//   return "na";
// }

// // ── Timeline events generator ────────────────────────────────────────────────
// function buildTimeline(c) {
//   const created = c.created_at ? new Date(c.created_at) : new Date();
//   const fmt = (d) => d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   const fmtTime = (d) => d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
//   const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

//   const events = [
//     { icon: "✓", color: "#10b981", title: "Case Submitted",
//       desc: `Case ${c.case_id} created and submitted for processing.`,
//       date: fmt(created), time: fmtTime(created), done: true },
//   ];

//   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
//     const d2 = addDays(created, 1);
//     events.push({ icon: "✓", color: "#028090", title: "Verification Started",
//       desc: "Documents received. Verification team assigned and checks initiated.",
//       date: fmt(d2), time: fmtTime(d2), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "Verification Pending",
//       desc: "Awaiting assignment to verification team.", date: "—", time: "", done: false });
//   }

//   if (["in-progress", "qc-review", "completed"].includes(c.status)) {
//     const d3 = addDays(created, 3);
//     events.push({ icon: "✓", color: "#028090", title: "Checks In Progress",
//       desc: `Running ${c.checks ? (Array.isArray(c.checks) ? c.checks.join(", ") : c.checks) : "all"} checks.`,
//       date: fmt(d3), time: fmtTime(d3), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "Checks In Progress",
//       desc: "Check-wise verification not yet started.", date: "—", time: "", done: false });
//   }

//   if (["qc-review", "completed"].includes(c.status)) {
//     const d4 = addDays(created, 5);
//     events.push({ icon: "✓", color: "#7c3aed", title: "QC Review",
//       desc: "Case submitted for quality control review.",
//       date: fmt(d4), time: fmtTime(d4), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "QC Review",
//       desc: "Quality check pending.", date: "—", time: "", done: false });
//   }

//   if (c.status === "completed") {
//     const d5 = addDays(created, 7);
//     events.push({ icon: "✓", color: "#10b981", title: "Report Dispatched",
//       desc: "Final BGV report generated and dispatched to client.",
//       date: fmt(d5), time: fmtTime(d5), done: true });
//   } else {
//     events.push({ icon: "○", color: "#94a3b8", title: "Report Dispatch",
//       desc: "Report will be generated after QC approval.", date: "—", time: "", done: false });
//   }

//   return events;
// }

// // ── Bulk upload CSV parser ────────────────────────────────────────────────────
// function parseBulkCSV(text) {
//   const lines = text.trim().split("\n").filter(Boolean);
//   if (lines.length < 2) return { rows: [], errors: ["CSV must have a header row and at least one data row."] };
//   const headers = lines[0].split(",").map(h => h.trim().toLowerCase().replace(/\s+/g, "_"));
//   const rows = [];
//   const errors = [];
//   lines.slice(1).forEach((line, i) => {
//     const vals = line.split(",").map(v => v.trim().replace(/^"|"$/g, ""));
//     const row = {};
//     headers.forEach((h, j) => { row[h] = vals[j] || ""; });
//     if (!row.candidate_name && !row.candidate) { errors.push(`Row ${i + 2}: missing candidate name`); return; }
//     if (!row.candidate_email && !row.email)    { errors.push(`Row ${i + 2}: missing email`); return; }
//     rows.push({
//       candidate_name:  row.candidate_name || row.candidate,
//       candidate_email: row.candidate_email || row.email,
//       candidate_mobile: row.mobile || row.candidate_mobile || "",
//       position:        row.position || "",
//       checks:          (row.checks || "employment").split("|").map(c => c.trim()),
//       billing_mode:    row.billing_mode || "postpaid_client",
//       client_name:     row.client_name || row.client || "",
//     });
//   });
//   return { rows, errors };
// }

// export default function Client() {
//   const navigate  = useNavigate();
//   const location  = useLocation();

//   const [cases, setCases]               = useState([]);
//   const [selectedCase, setSelectedCase] = useState(null);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [statusTab, setStatusTab]       = useState(() => getTabFromURL(location.search));
//   const [dateFilter, setDateFilter]     = useState("month");
//   const [customFrom, setCustomFrom]     = useState("");
//   const [customTo, setCustomTo]         = useState("");
//   const [activeDetailTab, setActiveDetailTab] = useState("overview");

//   // ── Bulk upload state ───────────────────────────────────────────────────────
//   const [showBulkModal, setShowBulkModal]   = useState(false);
//   const [bulkRows, setBulkRows]             = useState([]);
//   const [bulkErrors, setBulkErrors]         = useState([]);
//   const [bulkUploading, setBulkUploading]   = useState(false);
//   const [bulkDone, setBulkDone]             = useState(false);
//   const fileInputRef = useRef(null);

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

//   // For "all" tab (Total Cases page) and "pending"/"completed" — always apply date filter
//   const isTabWithDateFilter = ["all", "pending", "completed"].includes(statusTab);

//   const filtered = cases.filter(c => {
//     const matchTab    = statusTab === "all" || c.status === statusTab;
//     const matchSearch = !search ||
//       (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
//       (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
//     // Dashboard: always date-filter; tab pages: date-filter for all/pending/completed
//     const matchDate = isDashboard ? isInRange(c.created_at)
//       : isTabWithDateFilter ? isInRange(c.created_at) : true;
//     return matchTab && matchSearch && matchDate;
//   });

//   const counts = {
//     all:           cases.length,
//     pending:       cases.filter(c => c.status === "pending").length,
//     "in-progress": cases.filter(c => c.status === "in-progress").length,
//     completed:     cases.filter(c => c.status === "completed").length,
//   };

//   const total     = cases.length;
//   // "Pending Link" count = cases that are in-progress (have a pending link stage)
//   const pendingLinkCount = counts["in-progress"];
//   const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;
//   const chartCases = isDashboard ? cases.filter(c => isInRange(c.created_at)) : cases;

//   const getChecksArray = (c) => {
//     if (Array.isArray(c.checks)) return c.checks;
//     if (typeof c.checks === "string") return c.checks.split(/[·,]/).map(x => x.trim()).filter(Boolean);
//     return [];
//   };

//   const getCheckStatus = (c, checkName) => {
//     if (c.check_statuses && c.check_statuses[checkName]) return c.check_statuses[checkName];
//     return inferCheckStatus(c.status);
//   };

//   const handleTabChange = (key) => navigate(`/Client?tab=${key}`, { replace: true });

//   // ── Export CSV ──────────────────────────────────────────────────────────────
//   const exportCSV = () => {
//     const headers = ["Case ID", "Case Receive Date", "Candidate", "Client", "Checks", "TAT", "Status"];
//     const rows    = filtered.map(c => [
//       c.case_id,
//       c.created_at ? new Date(c.created_at).toLocaleDateString("en-IN") : "—",
//       c.candidate || c.candidate_name,
//       c.client || c.client_name || "—",
//       Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
//       formatTAT(c.tat),
//       statusLabel(c.status),
//     ]);
//     const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
//     const blob = new Blob([csv], { type: "text/csv" });
//     const url  = URL.createObjectURL(blob);
//     const a    = document.createElement("a");
//     a.href = url; a.download = `cases-${Date.now()}.csv`; a.click();
//     URL.revokeObjectURL(url);
//   };

//   // ── Bulk upload handlers ────────────────────────────────────────────────────
//   const handleBulkFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = (ev) => {
//       const { rows, errors } = parseBulkCSV(ev.target.result);
//       setBulkRows(rows);
//       setBulkErrors(errors);
//       setBulkDone(false);
//     };
//     reader.readAsText(file);
//   };

//   const handleBulkSubmit = async () => {
//     if (bulkRows.length === 0) return;
//     setBulkUploading(true);
//     try {
//       const results = await Promise.allSettled(
//         bulkRows.map(row =>
//           fetch(`${API_URL}/api/cases`, {
//             method: "POST",
//             headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" },
//             body: JSON.stringify(row),
//           })
//         )
//       );
//       const failed = results.filter(r => r.status === "rejected" || (r.value && !r.value.ok)).length;
//       if (failed > 0) setBulkErrors([`${failed} case(s) failed to upload. Others may have succeeded.`]);
//       else setBulkErrors([]);
//       setBulkDone(true);
//       fetchCases();
//     } catch (err) {
//       setBulkErrors([err.message]);
//     } finally {
//       setBulkUploading(false);
//     }
//   };

//   const closeBulkModal = () => {
//     setShowBulkModal(false);
//     setBulkRows([]);
//     setBulkErrors([]);
//     setBulkDone(false);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   // ── DateRangeBar — reusable for tab pages ─────────────────────────────────
//   const DateRangeBar = () => (
//     <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center", marginBottom: "12px" }}>
//       {DATE_FILTERS.map(df => (
//         <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
//           onClick={() => setDateFilter(df.key)}>
//           {df.label}
//         </button>
//       ))}
//       {dateFilter === "custom" && (
//         <>
//           <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
//             style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//           <span style={{ color: "#94a3b8" }}>→</span>
//           <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
//             style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//         </>
//       )}
//     </div>
//   );

//   // ── Total Cases Grid View ──────────────────────────────────────────────────
//   const TotalCasesGrid = () => (
//     <div className="dash-wrper">
//       <div className="dash-upper-head">
//         <div className="left">
//           <h3 className="dash-title-text">Total Cases</h3>
//           <span style={{ fontSize: "12px", color: "#64748b", background: "#eef3ff", padding: "3px 10px", borderRadius: "20px", marginLeft: "10px" }}>
//             {filtered.length} records
//           </span>
//         </div>
//         <div className="right">
//           <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
//             value={search} onChange={e => setSearch(e.target.value)} />
//           {search && (
//             <button onClick={() => setSearch("")}
//               style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
//           )}
//           <button className="primary-cta export" onClick={exportCSV}>
//             <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
//           </button>
//           <button className="secondary-cta import" onClick={exportCSV}
//             style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//             <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "16px" }} /> Export Excel
//           </button>
//         </div>
//       </div>

//       <DateRangeBar />

//       <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
//         <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
//           <thead>
//             <tr style={{ background: "#27348B", color: "#fff" }}>
//               {["Case ID", "Case Receive Date", "Candidate Name", "Client", "Checks", "TAT", "Status", "Action"].map(h => (
//                 <th key={h} style={{ padding: "13px 14px", textAlign: "left", fontWeight: 700, fontSize: "12px",
//                   textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr><td colSpan={8} style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>Loading…</td></tr>
//             ) : filtered.length === 0 ? (
//               <tr><td colSpan={8} style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>No cases found.</td></tr>
//             ) : (
//               filtered.map((c, i) => {
//                 const meta = getStatusMeta(c.status);
//                 return (
//                   <tr key={c.case_id} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc",
//                     borderBottom: "1px solid #f1f5f9" }}>
//                     <td style={{ padding: "12px 14px", fontWeight: 700, color: "#27348B" }}>{c.case_id}</td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>
//                       {c.created_at ? new Date(c.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#1e293b", fontWeight: 500 }}>
//                       {c.candidate || c.candidate_name || "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>
//                       {c.client || c.client_name || "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>
//                       {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks || "—"}
//                     </td>
//                     <td style={{ padding: "12px 14px", color: "#475569" }}>{formatTAT(c.tat)}</td>
//                     <td style={{ padding: "12px 14px" }}>
//                       <span style={{ background: meta.color, color: "#fff", fontSize: "11px", fontWeight: 700,
//                         padding: "4px 10px", borderRadius: "4px", whiteSpace: "nowrap" }}>
//                         {statusLabel(c.status)}
//                       </span>
//                     </td>
//                     <td style={{ padding: "12px 14px" }}>
//                       <button className="primary-cta"
//                         style={{ padding: "6px 16px", fontSize: "12px", height: "auto", borderRadius: "6px" }}
//                         onClick={() => { setSelectedCase(c); navigate("/Client"); }}>
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   // ── Check-wise Status grid ─────────────────────────────────────────────────
//   const CheckwiseGrid = ({ c }) => {
//     const checks = getChecksArray(c);
//     if (checks.length === 0) return (
//       <p style={{ color: "#94a3b8", fontSize: "13px", padding: "12px 0" }}>No checks assigned.</p>
//     );
//     const left  = checks.filter((_, i) => i % 2 === 0);
//     const right = checks.filter((_, i) => i % 2 !== 0);
//     return (
//       <div>
//         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//           Check-wise Status
//         </p>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 12px" }}>
//           <div>
//             {left.map((chk, i) => {
//               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
//               return (
//                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
//                   padding: "9px 0", borderBottom: i < left.length - 1 ? "1px solid #f1f5f9" : "none" }}>
//                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
//                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700,
//                     padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//           <div style={{ background: "#e2e8f0" }} />
//           <div>
//             {right.map((chk, i) => {
//               const badge = CHECK_BADGE[getCheckStatus(c, chk)] || CHECK_BADGE.na;
//               return (
//                 <div key={chk} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
//                   padding: "9px 0", borderBottom: i < right.length - 1 ? "1px solid #f1f5f9" : "none" }}>
//                   <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{chk}</span>
//                   <span style={{ background: badge.bg, color: badge.color, fontSize: "11px", fontWeight: 700,
//                     padding: "4px 12px", borderRadius: "4px", minWidth: "90px", textAlign: "center" }}>{badge.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // ── Timeline component ─────────────────────────────────────────────────────
//   const TimelineView = ({ c }) => {
//     const events = buildTimeline(c);
//     return (
//       <div style={{ padding: "4px 0" }}>
//         <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
//           Case Timeline
//         </p>
//         <div style={{ position: "relative" }}>
//           <div style={{ position: "absolute", left: "15px", top: "8px", bottom: "8px", width: "2px", background: "#e2e8f0", zIndex: 0 }} />
//           {events.map((ev, i) => (
//             <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "20px", position: "relative", zIndex: 1 }}>
//               <div style={{ width: "30px", height: "30px", borderRadius: "50%",
//                 background: ev.done ? ev.color : "#e2e8f0", color: "#fff",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: "13px", fontWeight: 700, flexShrink: 0,
//                 border: `2px solid ${ev.done ? ev.color : "#cbd5e1"}`,
//                 boxShadow: ev.done ? `0 0 0 3px ${ev.color}22` : "none" }}>
//                 {ev.done ? "✓" : "○"}
//               </div>
//               <div style={{ flex: 1, paddingTop: "4px" }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
//                   <span style={{ fontSize: "13px", fontWeight: 700, color: ev.done ? "#1e293b" : "#94a3b8" }}>{ev.title}</span>
//                   {ev.date !== "—" && (
//                     <span style={{ fontSize: "11px", color: "#94a3b8", whiteSpace: "nowrap", marginLeft: "8px" }}>
//                       {ev.date} {ev.time}
//                     </span>
//                   )}
//                 </div>
//                 <p style={{ fontSize: "12px", color: ev.done ? "#64748b" : "#cbd5e1", margin: 0, lineHeight: 1.5 }}>{ev.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   // ── If on "all" tab (Total Cases), show grid view ─────────────────────────
//   if (!isDashboard && statusTab === "all") {
//     return (
//       <>
//         <Sidebar />
//         <section id="content">
//           <Header />
//           <main>
//             <TotalCasesGrid />
//           </main>
//         </section>
//       </>
//     );
//   }

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
//                 <input type="text" className="dash-search-input" placeholder="Search case ID or candidate…"
//                   value={search} onChange={e => setSearch(e.target.value)} />
//                 {search && (
//                   <button onClick={() => setSearch("")}
//                     style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
//                 )}
//                 {/* Bulk Upload button */}
//                 <button className="secondary-cta import"
//                   onClick={() => setShowBulkModal(true)}
//                   style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                   <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "16px" }} />
//                   Bulk Upload
//                 </button>
//                 <button className="primary-cta export" onClick={exportCSV}>
//                   <img src="images/dashboard/export-icon.svg" alt="" /> Export
//                 </button>
//               </div>
//             </div>

//             {/* Date filter — Dashboard AND Active Cases / Completed tabs */}
//             {(isDashboard || isTabWithDateFilter) && (
//               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
//                 {DATE_FILTERS.map(df => (
//                   <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
//                     onClick={() => setDateFilter(df.key)}>
//                     {df.label}
//                   </button>
//                 ))}
//                 {dateFilter === "custom" && (
//                   <>
//                     <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//                     <span style={{ color: "#94a3b8" }}>→</span>
//                     <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)}
//                       style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px" }} />
//                   </>
//                 )}
//               </div>
//             )}

//             {/* ── Stat cards
//                 Dashboard: Active | In Progress→Pending Link | Completed | Clear Rate
//                 Text changes: "Total Cases"→"Active", "In Progress"→"Pending Link" (change request point 3a/3c)
//             ── */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total">
//                 <h4>{loading ? "—" : counts.pending}</h4>
//                 <p>Active</p>
//               </div>
//               <div className="card-inner-dash bdr-com">
//                 <h4>{loading ? "—" : counts.completed}</h4>
//                 <p>Completed</p>
//               </div>
//               <div className="card-inner-dash bdr-progress">
//                 <h4>{loading ? "—" : pendingLinkCount}</h4>
//                 <p>Pending Link</p>
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
//                     dateFilter={dateFilter} customFrom={customFrom} customTo={customTo}
//                   />
//                 </div>
//                 <div className="dash-inner-right">
//                   <div className="quick-stats">
//                     <div className="stats-header"><h3>QUICK STATS</h3></div>
//                     <div className="stats-body">
//                       <div className="stats-row"><span>Total Cases</span><strong>{loading ? "—" : total}</strong></div>
//                       <div className="stats-row"><span>Active Cases</span><strong>{loading ? "—" : counts.pending}</strong></div>
//                       <div className="stats-row"><span>Pending Link</span><strong>{loading ? "—" : pendingLinkCount}</strong></div>
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
//                   <button key={tab.key} className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
//                     onClick={() => handleTabChange(tab.key)}>
//                     {tab.label}
//                     <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px",
//                       padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
//                       {counts[tab.key] ?? 0}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Tab label for non-dashboard pages */}
//             {!isDashboard && (
//               <div style={{ marginBottom: "8px" }}>
//                 <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#27348B", margin: 0 }}>
//                   {STATUS_TABS.find(t => t.key === statusTab)?.label || "Cases"} ({filtered.length})
//                 </h4>
//               </div>
//             )}

//             {/* Split panel */}
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
//                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>No {statusTab === "all" ? "" : statusTab + " "}cases found.</p>
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
//                           const meta       = getStatusMeta(c.status);
//                           const color      = meta.color;
//                           const pct        = meta.pct;
//                           const dayLabel   = meta.dayLabel(c);
//                           const name       = c.candidate || c.candidate_name || "—";
//                           const isSelected = selectedCase?.case_id === c.case_id;
//                           return (
//                             <tr className="boder-tbl active" key={c.case_id}
//                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
//                               style={{
//                                 cursor: "pointer",
//                                 background: isSelected ? "#eef3ff" : undefined,
//                                 borderLeft: isSelected ? "3px solid #2b3b8c" : "3px solid transparent",
//                               }}>
//                               <td>
//                                 <div className="criminal-case">
//                                   <p>
//                                     <span>{c.case_id}</span><br />
//                                     <span style={{ fontSize: "11px", color: "#94a3b8" }}>
//                                       {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
//                                     </span>
//                                   </p>
//                                 </div>
//                               </td>
//                               <td><div className="client-names">{name}</div></td>
//                               <td>
//                                 <div className="custom-progress">
//                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
//                                 </div>
//                                 <p className="progress-client-text" style={{ color }}>{dayLabel}</p>
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
//                     <div style={{ background: "#27348B", color: "#fff", padding: "14px 18px", fontWeight: 700, fontSize: "14px", borderRadius: "6px 6px 0 0" }}>
//                       CASE DETAIL — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}
//                     </div>

//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
//                       {["overview", "timeline", "documents", "comments"].map((t, i) => (
//                         <button key={t} onClick={() => setActiveDetailTab(t)} style={{
//                           padding: "12px 0", border: "none",
//                           borderRight: i < 3 ? "1px solid #e2e8f0" : "none",
//                           borderBottom: activeDetailTab === t ? "3px solid #27348B" : "3px solid transparent",
//                           background: activeDetailTab === t ? "#f0f4ff" : "#fff",
//                           color: activeDetailTab === t ? "#27348B" : "#64748b",
//                           fontWeight: activeDetailTab === t ? 700 : 400,
//                           fontSize: "13px", cursor: "pointer", textTransform: "capitalize",
//                           transition: "all 0.15s",
//                         }}>
//                           {t.charAt(0).toUpperCase() + t.slice(1)}
//                         </button>
//                       ))}
//                     </div>

//                     <div style={{ border: "1px solid #e2e8f0", borderTop: "none", padding: "16px", borderRadius: "0 0 6px 6px",
//                       background: "#fff", minHeight: "260px", maxHeight: "420px", overflowY: "auto" }}>

//                       {activeDetailTab === "overview" && (
//                         <div>
//                           {[
//                             { label: "Case ID",   value: selectedCase.case_id },
//                             { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
//                             { label: "Status",    value: (
//                               <span style={{ background: getStatusMeta(selectedCase.status).color, color: "#fff",
//                                 fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>
//                                 {statusLabel(selectedCase.status)}
//                               </span>
//                             )},
//                             { label: "Priority",  value: selectedCase.priority || "Normal" },
//                             { label: "TAT",       value: formatTAT(selectedCase.tat) },
//                             { label: "Created",   value: selectedCase.created_at
//                               ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
//                             { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
//                           ].map(r => (
//                             <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
//                               padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
//                               <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
//                               <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {activeDetailTab === "timeline"  && <TimelineView c={selectedCase} />}
//                       {activeDetailTab === "documents" && <CheckwiseGrid c={selectedCase} />}

//                       {activeDetailTab === "comments" && (
//                         <div>
//                           <textarea placeholder="Write a comment or query about this case…" style={{
//                             width: "100%", minHeight: "100px", padding: "10px 12px",
//                             border: "1px solid #e2e8f0", borderRadius: "6px",
//                             fontSize: "13px", resize: "vertical", outline: "none", boxSizing: "border-box",
//                           }} />
//                           <button className="primary-cta" style={{ marginTop: "10px" }}>Submit Comment</button>
//                         </div>
//                       )}
//                     </div>

//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" }}>
//                       <button className="secondary-cta import" onClick={exportCSV}
//                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//                           padding: "13px", height: "auto", borderRadius: "6px" }}>
//                         <img src="images/dashboard/export-excel.svg" alt="" style={{ width: "18px", height: "18px" }} />
//                         Download Report
//                       </button>
//                       <button className="primary-cta export"
//                         style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//                           padding: "13px", height: "auto", borderRadius: "6px" }}>
//                         <img src="images/dashboard/export-icon.svg" alt="" style={{ width: "18px", height: "18px" }} />
//                         Submit Query
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>

//       {/* ── Bulk Upload Modal ────────────────────────────────────────────────── */}
//       {showBulkModal && (
//         <div style={{
//           position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000,
//           display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
//         }}>
//           <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", maxWidth: "640px",
//             width: "100%", maxHeight: "80vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>

//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//               <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#1e293b" }}>Bulk Upload Cases</h3>
//               <button onClick={closeBulkModal}
//                 style={{ background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: "#94a3b8" }}>×</button>
//             </div>

//             {!bulkDone ? (
//               <>
//                 <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "16px", marginBottom: "20px", fontSize: "13px", color: "#475569" }}>
//                   <strong>CSV Format:</strong> Upload a CSV file with the following columns:<br />
//                   <code style={{ fontSize: "12px", background: "#e2e8f0", padding: "2px 6px", borderRadius: "4px" }}>
//                     candidate_name, candidate_email, mobile, position, checks, billing_mode, client_name
//                   </code><br />
//                   <span style={{ marginTop: "6px", display: "block" }}>
//                     For <code>checks</code>, separate multiple checks with <code>|</code> e.g. <code>employment|education|address</code>
//                   </span>
//                 </div>

//                 <input ref={fileInputRef} type="file" accept=".csv" onChange={handleBulkFileChange}
//                   style={{ marginBottom: "16px", fontSize: "13px" }} />

//                 {bulkErrors.length > 0 && (
//                   <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "8px",
//                     padding: "12px", marginBottom: "16px", fontSize: "13px", color: "#dc2626" }}>
//                     {bulkErrors.map((e, i) => <div key={i}>⚠ {e}</div>)}
//                   </div>
//                 )}

//                 {bulkRows.length > 0 && (
//                   <div style={{ marginBottom: "16px" }}>
//                     <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "8px" }}>
//                       <strong>{bulkRows.length}</strong> row(s) ready to upload:
//                     </p>
//                     <div style={{ maxHeight: "200px", overflowY: "auto", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
//                       <table style={{ width: "100%", fontSize: "12px", borderCollapse: "collapse" }}>
//                         <thead>
//                           <tr style={{ background: "#f8fafc" }}>
//                             {["Candidate", "Email", "Checks", "Billing"].map(h => (
//                               <th key={h} style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700,
//                                 borderBottom: "1px solid #e2e8f0", color: "#475569" }}>{h}</th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {bulkRows.map((r, i) => (
//                             <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
//                               <td style={{ padding: "7px 10px", color: "#1e293b" }}>{r.candidate_name}</td>
//                               <td style={{ padding: "7px 10px", color: "#64748b" }}>{r.candidate_email}</td>
//                               <td style={{ padding: "7px 10px", color: "#64748b" }}>{r.checks?.join(", ")}</td>
//                               <td style={{ padding: "7px 10px", color: "#64748b" }}>{r.billing_mode}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 )}

//                 <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
//                   <button className="secondary-cta" onClick={closeBulkModal}
//                     style={{ padding: "10px 20px", height: "auto", borderRadius: "8px" }}>Cancel</button>
//                   <button className="primary-cta"
//                     disabled={bulkRows.length === 0 || bulkUploading}
//                     onClick={handleBulkSubmit}
//                     style={{ padding: "10px 24px", height: "auto", borderRadius: "8px" }}>
//                     {bulkUploading ? "Uploading…" : `Upload ${bulkRows.length} Case(s)`}
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div style={{ textAlign: "center", padding: "24px 0" }}>
//                 <div style={{ width: "56px", height: "56px", background: "#10b981", borderRadius: "50%",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   margin: "0 auto 16px", fontSize: "24px", color: "#fff" }}>✓</div>
//                 <h4 style={{ color: "#1e293b", marginBottom: "8px" }}>Upload Complete!</h4>
//                 <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "20px" }}>
//                   {bulkRows.length} case(s) were uploaded successfully.
//                   {bulkErrors.length > 0 && ` ${bulkErrors.length} failed.`}
//                 </p>
//                 <button className="primary-cta" onClick={closeBulkModal}
//                   style={{ padding: "10px 24px", height: "auto", borderRadius: "8px" }}>Done</button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CaseTrendsChart from "./CaseTrendsChart";
import { API_URL } from "../src/config";

// Status Tabs
const STATUS_TABS = [
  { key: "all",         label: "All Cases" },
  { key: "pending",     label: "Active Cases" },
  { key: "in-progress", label: "In Progress" },
  { key: "completed",   label: "Completed" },
];

const DATE_FILTERS = [
  { key: "today",  label: "Today" },
  { key: "week",   label: "This Week" },
  { key: "month",  label: "This Month" },
  { key: "custom", label: "Custom" },
];

function getTabFromURL(search) {
  const tab = new URLSearchParams(search).get("tab") || "all";
  return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
}

function statusLabel(s) {
  return {
    "pending": "Active",
    "in-progress": "In Progress",
    "completed": "Completed"
  }[s] || s;
}

function formatTAT(tat) {
  if (!tat) return "—";
  const str = String(tat);
  if (/\d+\.?\d*[eE][+\-]?\d+/.test(str)) return "—";
  const num = parseFloat(str);
  if (!isNaN(num)) return `${Math.round(num)} days`;
  return str;
}

export default function Client() {
  const navigate = useNavigate();
  const location = useLocation();

  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusTab, setStatusTab] = useState(() => getTabFromURL(location.search));
  const [dateFilter, setDateFilter] = useState("month");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const [activeDetailTab, setActiveDetailTab] = useState("overview");

  const token = localStorage.getItem("token");

  const fetchCases = () => {
    setLoading(true);
    fetch(`${API_URL}/api/cases`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then(r => r.json())
      .then(data => {
        const list = data.cases || [];
        setCases(list);
        if (list.length > 0) {
          setSelectedCase(list[0]);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCases();
  }, []);

  useEffect(() => {
    const tab = getTabFromURL(location.search);
    setStatusTab(tab);
    setSearch("");
    if (cases.length > 0) {
      const first = cases.find(c => tab === "all" || c.status === tab) || cases[0];
      setSelectedCase(first);
    }
  }, [location.search, cases]);

  const isInRange = (createdAt) => {
    if (!createdAt) return true;
    const d = new Date(createdAt);
    const now = new Date();

    if (dateFilter === "today") return d.toDateString() === now.toDateString();
    if (dateFilter === "week") {
      const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w;
    }
    if (dateFilter === "month") {
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }
    if (dateFilter === "custom") {
      if (!customFrom && !customTo) return true;
      const from = customFrom ? new Date(customFrom) : null;
      const to = customTo ? new Date(customTo + "T23:59:59") : null;
      if (from && d < from) return false;
      if (to && d > to) return false;
      return true;
    }
    return true;
  };

  const filtered = cases.filter(c => {
    const matchTab = statusTab === "all" || c.status === statusTab;
    const matchSearch = !search ||
      (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
      (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
    const matchDate = isInRange(c.created_at);
    return matchTab && matchSearch && matchDate;
  });

  const counts = {
    all: cases.length,
    pending: cases.filter(c => c.status === "pending").length,
    "in-progress": cases.filter(c => c.status === "in-progress").length,
    completed: cases.filter(c => c.status === "completed").length,
  };

  const total = cases.length;
  const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;
  const pendingLinkCount = counts["in-progress"];

  const handleTabChange = (key) => navigate(`/Client?tab=${key}`, { replace: true });

  const exportCSV = () => {
    alert("Export functionality ready");
  };

  // Decide layout: Split view for Active & Completed, Full table for Dashboard / All Cases
  const showSplitView = statusTab === "pending" || statusTab === "completed";

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* Page Header */}
            <div className="dash-upper-head">
              <div className="left">
                <h3 className="dash-title-text">Client Portal — This Month</h3>
              </div>
              <div className="right">
                <input
                  type="text"
                  className="dash-search-input"
                  placeholder="Search case ID or candidate..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="primary-cta export" onClick={exportCSV}>
                  Export
                </button>
              </div>
            </div>

            {/* Status Tabs */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
              {STATUS_TABS.map((tab) => (
                <button
                  key={tab.key}
                  className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
                  onClick={() => handleTabChange(tab.key)}
                >
                  {tab.label} <span style={{ marginLeft: "6px" }}>({counts[tab.key] || 0})</span>
                </button>
              ))}
            </div>

            {/* Date Filters */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
              {DATE_FILTERS.map((df) => (
                <button
                  key={df.key}
                  className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
                  onClick={() => setDateFilter(df.key)}
                >
                  {df.label}
                </button>
              ))}
              {dateFilter === "custom" && (
                <>
                  <input
                    type="date"
                    value={customFrom}
                    onChange={(e) => setCustomFrom(e.target.value)}
                    style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "8px" }}
                  />
                  <span style={{ color: "#94a3b8", alignSelf: "center" }}>→</span>
                  <input
                    type="date"
                    value={customTo}
                    onChange={(e) => setCustomTo(e.target.value)}
                    style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "8px" }}
                  />
                </>
              )}
            </div>

            {/* Stat Cards */}
            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total">
                <h4>{loading ? "—" : counts.pending}</h4>
                <p>Active</p>
              </div>
              <div className="card-inner-dash bdr-com">
                <h4>{loading ? "—" : counts.completed}</h4>
                <p>Completed</p>
              </div>
              <div className="card-inner-dash bdr-progress">
                <h4>{loading ? "—" : pendingLinkCount}</h4>
                <p>Pending Link</p>
              </div>
              <div className="card-inner-dash bdr-rate">
                <h4>{loading ? "—" : clearRate}%</h4>
                <p>Clear Rate</p>
              </div>
            </div>

            {/* Chart + Quick Stats */}
            <div className="dash-inner-wrp-both" style={{ marginBottom: "24px" }}>
              <div className="dash-inner-left">
                <CaseTrendsChart
                  casesData={cases}
                  label="This Month"
                  dateFilter={dateFilter}
                />
              </div>
              <div className="dash-inner-right">
                <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", height: "100%" }}>
                  <div style={{ background: "#27348B", color: "#fff", padding: "14px 20px", fontWeight: 700 }}>
                    QUICK STATS
                  </div>
                  {[
                    { label: "Total Cases", value: total },
                    { label: "Active Cases", value: counts.pending },
                    { label: "Pending Link", value: pendingLinkCount },
                    { label: "Completed", value: counts.completed },
                    { label: "Clear Rate", value: `${clearRate}%` },
                    { label: "Avg TAT", value: "0 days" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "14px 20px",
                        background: i % 2 === 0 ? "#f8fafc" : "#fff",
                        borderBottom: "1px solid #e2e8f0"
                      }}
                    >
                      <span style={{ color: "#334155" }}>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conditional Layout */}
            {showSplitView ? (
              /* ==================== SPLIT VIEW (Active / Completed) ==================== */
              <div className="dash-inner-wrp-both client-portal">
                {/* LEFT: Case List */}
                <div className="dash-inner-left">
                  <div className="down-table">
                    <h3 style={{ marginBottom: "16px" }}>
                      {statusTab === "pending" ? "ACTIVE CASES" : "COMPLETED CASES"} ({filtered.length})
                    </h3>
                    {loading ? (
                      <p style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>Loading...</p>
                    ) : filtered.length === 0 ? (
                      <p style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>No cases found</p>
                    ) : (
                      <table>
                        <tbody>
                          {filtered.map((c) => {
                            const isSelected = selectedCase?.case_id === c.case_id;
                            return (
                              <tr
                                key={c.case_id}
                                onClick={() => setSelectedCase(c)}
                                style={{
                                  cursor: "pointer",
                                  background: isSelected ? "#eef3ff" : "transparent",
                                  borderLeft: isSelected ? "4px solid #27348B" : "4px solid transparent"
                                }}
                              >
                                <td style={{ padding: "14px" }}>
                                  <strong>{c.case_id}</strong><br />
                                  <small style={{ color: "#64748b" }}>{c.candidate || c.candidate_name}</small>
                                </td>
                                <td style={{ padding: "14px" }}>{Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>

                {/* RIGHT: Case Details */}
                <div className="dash-inner-right status-cases">
                  {selectedCase ? (
                    <div style={{ background: "#fff", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                      <div style={{ background: "#27348B", color: "#fff", padding: "16px", borderRadius: "8px 8px 0 0" }}>
                        CASE DETAIL — {selectedCase.case_id}
                      </div>
                      <div style={{ padding: "20px" }}>
                        <p><strong>Candidate:</strong> {selectedCase.candidate || selectedCase.candidate_name}</p>
                        <p><strong>Status:</strong> {statusLabel(selectedCase.status)}</p>
                        <p><strong>TAT:</strong> {formatTAT(selectedCase.tat)}</p>
                      </div>
                    </div>
                  ) : (
                    <p style={{ textAlign: "center", color: "#94a3b8", padding: "40px" }}>Select a case to view details</p>
                  )}
                </div>
              </div>
            ) : (
              /* ==================== FULL TABLE VIEW (Dashboard / All Cases) ==================== */
              <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ background: "#27348B", color: "#fff" }}>
                      <th style={{ padding: "16px 14px", textAlign: "left" }}>CASE ID</th>
                      <th style={{ padding: "16px 14px", textAlign: "left" }}>CANDIDATE</th>
                      <th style={{ padding: "16px 14px", textAlign: "left" }}>CLIENT</th>
                      <th style={{ padding: "16px 14px", textAlign: "left" }}>CHECKS</th>
                      <th style={{ padding: "16px 14px", textAlign: "left" }}>STATUS</th>
                      <th style={{ padding: "16px 14px", textAlign: "left" }}>TAT</th>
                      <th style={{ padding: "16px 14px", textAlign: "center" }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan="7" style={{ padding: "60px", textAlign: "center", color: "#64748b" }}>Loading cases...</td></tr>
                    ) : filtered.length === 0 ? (
                      <tr><td colSpan="7" style={{ padding: "60px", textAlign: "center", color: "#64748b" }}>No cases found</td></tr>
                    ) : (
                      filtered.map((c, i) => (
                        <tr key={c.case_id} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "16px 14px", fontWeight: 600, color: "#27348B" }}>{c.case_id}</td>
                          <td style={{ padding: "16px 14px" }}>{c.candidate || c.candidate_name || "—"}</td>
                          <td style={{ padding: "16px 14px" }}>{c.client || c.client_name || "—"}</td>
                          <td style={{ padding: "16px 14px" }}>{Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks || "—"}</td>
                          <td style={{ padding: "16px 14px" }}>
                            <span style={{
                              padding: "6px 14px",
                              borderRadius: "6px",
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#fff",
                              background: c.status === "completed" ? "#10b981" : c.status === "pending" ? "#f59e0b" : "#028090"
                            }}>
                              {statusLabel(c.status)}
                            </span>
                          </td>
                          <td style={{ padding: "16px 14px" }}>{formatTAT(c.tat)}</td>
                          <td style={{ padding: "16px 14px", textAlign: "center" }}>
                            <button className="primary-cta" onClick={() => setSelectedCase(c)}>
                              View
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
}