// import React from "react";

// export default function Header() {
//   return (
//     <nav>
//       <div className="nav-toggle">
//         <div className="bx bx-menu">
//           <img src="images/sidebar/sidebar-collapse.svg" alt="" />
//         </div>
//       </div>
      
//       <div className="head-src">
//         <h3>ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export</h3>
//       </div>
      
//       <button type="button" className="primary-cta">Admin Role</button>
//     </nav>
//   );
// }
// Header.jsx — Dynamic header: reads role + name from localStorage user object
// Displays role-appropriate title and user name

// import { useNavigate, useLocation } from "react-router-dom";

// function getUser() { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } }

// const ROLE_TITLES = {
//   admin:          "ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export",
//   allocator:      "ALLOCATOR — Case Distribution · Assignments · Progress",
//   verifier:       "VERIFIER — Source Check · Result Entry · Activity Log",
//   check_manager:  "CHECK MANAGER — All Cases · QC Review · Progress",
//   report_writing: "REPORT WRITING — Check Results · Editor · Dispatch",
//   pvt_qc:         "PVT / QC INTAKE — Queue · Case Detail · Comments · Trends",
//   client:         "CLIENT PORTAL — Case Submission · Status Tracking · Reports",
//   onboarding:     "ONBOARDING — Client Registration · Link Generator · Billing",
// };

// const ROLE_LABELS = {
//   admin:          "Admin",
//   allocator:      "Allocator",
//   verifier:       "Verifier",
//   check_manager:  "Check Manager",
//   report_writing: "Specialist",
//   pvt_qc:         "PVT / QC",
//   client:         "Client",
//   onboarding:     "Onboarding",
// };

// // Page-specific overrides based on current path
// const PATH_TITLES = {
//   "/dashboard":      "ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export",
//   "/AllCases":       "ALL CASES — Search · Filter · Export · QC Review",
//   "/AddCase":        "ADD CASE — New Verification Request",
//   "/AddInstitution": "INSTITUTION DATABASE — Universities · Companies · Labs · Courts",
//   "/UserManagement": "USER MANAGEMENT — Create · Assign Roles · Delete",
//   "/Trends":         "TRENDS & ANALYTICS — Performance · Volume · TAT",
//   "/Apiintegretion": "API INTEGRATION — EPFO · University APIs · Flow",
//   "/Settings":       "SETTINGS — Account · Notifications · Security",
//   "/ClientCases":    "MY CASES — Active · Completed · Documents · Comments",
// };

// export default function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const user     = getUser();
//   const role     = user.role || "admin";

//   const title = PATH_TITLES[location.pathname] || ROLE_TITLES[role] || "BGV PORTAL";
//   const label = ROLE_LABELS[role] || "User";
//   const name  = user.name || label;

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   return (
//     <nav>
//       {/* Sidebar toggle */}
//       <div className="nav-toggle">
//         <div
//           className="bx bx-menu"
//           style={{ cursor: "pointer" }}
//           onClick={() => {
//             const sidebar = document.getElementById("sidebar");
//             if (sidebar) sidebar.classList.toggle("hide");
//           }}
//         >
//           <img src="images/sidebar/sidebar-collapse.svg" alt="menu"
//             onError={(e) => {
//               e.target.replaceWith(Object.assign(document.createElement("span"), { textContent: "☰", style: "font-size:20px;color:#fff;" }));
//             }}
//           />
//         </div>
//       </div>

//       {/* Title */}
//       <div className="head-src">
//         <h3>{title}</h3>
//       </div>

//       {/* User info + logout */}
//       <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//         <div style={{ textAlign: "right", lineHeight: 1.3 }}>
//           <div style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>{name}</div>
//           <div style={{ color: "#cad2e1", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
//         </div>
//         <button
//           type="button"
//           className="primary-cta"
//           style={{ fontSize: "13px", height: "38px", padding: "0 16px" }}
//           onClick={logout}
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import { API_URL } from "../src/config";

// const CHECK_STATUS_STYLE = {
//   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
//   in_progress: { label: "In Progress", bg: "#2b3b8c", color: "#fff" },
//   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
//   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
//   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// };

// const ALL_CHECK_TYPES = ["Employment","Education","Address","Database","Criminal","Drug Test","Courtroom"];

// export default function Client() {
//   const navigate = useNavigate();
//   const [cases, setCases]           = useState([]);
//   const [selectedCase, setSelectedCase] = useState(null);
//   const [loading, setLoading]       = useState(true);
//   const [search, setSearch]         = useState("");
//   const [activeDetailTab, setActiveDetailTab] = useState("overview");

//   const token = localStorage.getItem("token");
//   const user  = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

//   useEffect(() => {
//     fetch(`${API_URL}/api/cases`, {
//       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }
//     })
//       .then(r => r.json())
//       .then(data => {
//         const list = data.cases || [];
//         setCases(list);
//         if (list.length > 0) setSelectedCase(list[0]);
//       })
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, []);

//   const filtered = cases.filter(c => {
//     if (!search) return true;
//     const s = search.toLowerCase();
//     return c.case_id?.toLowerCase().includes(s) || c.candidate?.toLowerCase().includes(s);
//   });

//   const active    = cases.filter(c => c.status === "in-progress" || c.status === "pending").length;
//   const completed = cases.filter(c => c.status === "completed").length;
//   const total     = cases.length;

//   // Parse checks from "EMP·EDU·CRI" back to array
//   const checksArr = (checksStr) =>
//     checksStr ? checksStr.split("·").map(s => s.trim()) : [];

//   const progressPct = (c) => {
//     if (c.status === "completed") return 100;
//     if (c.status === "in-progress") return 60;
//     if (c.status === "qc-review") return 85;
//     return 20;
//   };

//   const progressColor = (pct) => {
//     if (pct >= 100) return "#10b981";
//     if (pct >= 60)  return "#028090";
//     return "#f59e0b";
//   };

//   return (
//     <>
//       <Sidebar />

//       <section id="content">
//         {/* Navbar */}
//         <nav>
//           <div className="nav-toggle">
//             <div className="bx bx-menu">
//               <img src="images/inner-pages/client-portal-icon.svg" alt="" />
//             </div>
//           </div>
//           <div className="head-src">
//             <h3>CLIENT PORTAL — {user.name || "My Account"} · Case Status · Reports</h3>
//           </div>
//           <button type="button" className="primary-cta" onClick={() => navigate("/AddCase")}>
//             + Add Case
//           </button>
//         </nav>

//         <main>
//           <div className="dash-wrper">

//             {/* ── Tabs ── */}
//             <div className="header-navbar">
//               <button className="tab-cta active">Active Cases</button>
//               <button className="tab-cta" onClick={() => navigate("/AllCases")}>All Cases</button>
//               <button className="tab-cta" onClick={() => navigate("/AddCase")}>Add Case</button>
//             </div>

//             {/* ── Stat cards ── */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total">
//                 <h4>{loading ? "—" : total}</h4>
//                 <p>Total Cases</p>
//               </div>
//               <div className="card-inner-dash bdr-com">
//                 <h4>{loading ? "—" : active}</h4>
//                 <p>Active</p>
//               </div>
//               <div className="card-inner-dash bdr-progress">
//                 <h4>{loading ? "—" : completed}</h4>
//                 <p>Completed</p>
//               </div>
//               <div className="card-inner-dash bdr-rate">
//                 <h4>{total > 0 ? Math.round((completed / total) * 100) : 0}%</h4>
//                 <p>Clear Rate</p>
//               </div>
//             </div>

//             {/* ── Main body ── */}
//             <div className="dash-inner-wrp-both client-portal">

//               {/* ── LEFT: Case List ── */}
//               <div className="dash-inner-left">
//                 <div className="down-table">
//                   <div className="client-portal-cases">
//                     <h3>CASES ({filtered.length})</h3>
//                   </div>

//                   <form className="search-input" onSubmit={e => e.preventDefault()} style={{ padding: "10px" }}>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Search case ID or candidate..."
//                       value={search}
//                       onChange={e => setSearch(e.target.value)}
//                       style={{ width: "100%", padding: "8px 14px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "13px", outline: "none" }}
//                     />
//                   </form>

//                   {loading ? (
//                     <p style={{ padding: "20px", color: "#888", fontSize: "14px" }}>Loading...</p>
//                   ) : filtered.length === 0 ? (
//                     <div style={{ padding: "30px", textAlign: "center" }}>
//                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>No cases yet.</p>
//                       <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>
//                         + Add Your First Case
//                       </button>
//                     </div>
//                   ) : (
//                     <table>
//                       <tbody>
//                         {filtered.map(c => {
//                           const pct = progressPct(c);
//                           const isSelected = selectedCase?.case_id === c.case_id;
//                           return (
//                             <tr
//                               key={c.case_id}
//                               onClick={() => setSelectedCase(c)}
//                               style={{ cursor: "pointer", background: isSelected ? "#eef1fb" : undefined, borderLeft: isSelected ? "4px solid #2b3b8c" : "4px solid transparent" }}
//                             >
//                               <td>
//                                 <div className="criminal-case">
//                                   <p>
//                                     <span>{c.case_id}</span><br />
//                                     {c.checks}
//                                   </p>
//                                 </div>
//                               </td>
//                               <td>
//                                 <div className="client-names">{c.candidate}</div>
//                               </td>
//                               <td>
//                                 <div className="custom-progress">
//                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: progressColor(pct) }} />
//                                 </div>
//                                 <p className="progress-client-text" style={{ color: progressColor(pct) }}>
//                                   {c.status === "completed" ? "Done" : `${pct}%`}
//                                 </p>
//                               </td>
//                               <td>
//                                 <div className="parent-client-boxes">
//                                   <span className="client-cases-box" style={{ background: progressColor(pct) }} />
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

//               {/* ── RIGHT: Case Detail ── */}
//               <div className="dash-inner-right status-cases">
//                 {selectedCase ? (
//                   <>
//                     <div className="quick-stats cases">
//                       <div className="stats-header">
//                         <h3>CASE — {selectedCase.case_id} | {selectedCase.candidate}</h3>
//                       </div>
//                     </div>

//                     {/* Detail tabs */}
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

//                     {/* Overview */}
//                     {activeDetailTab === "overview" && (
//                       <div style={{ padding: "16px" }}>
//                         {[
//                           { label: "Case ID",    value: selectedCase.case_id },
//                           { label: "Candidate",  value: selectedCase.candidate },
//                           { label: "Client",     value: selectedCase.client },
//                           { label: "Status",     value: selectedCase.status },
//                           { label: "Priority",   value: selectedCase.priority || "Normal" },
//                           { label: "TAT",        value: selectedCase.tat },
//                           { label: "Created",    value: selectedCase.created_at },
//                           { label: "Amount",     value: `₹${selectedCase.total_amount?.toLocaleString() || "—"}` },
//                         ].map(r => (
//                           <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
//                             <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
//                             <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {/* Check-wise status */}
//                     {activeDetailTab === "checks" && (
//                       <div className="clients-status">
//                         <h4>Check-wise Status</h4>
//                         <div className="empolyment-body-wrp">
//                           {checksArr(selectedCase.checks).map(ch => {
//                             // Map short codes back to full name
//                             const fullName = ALL_CHECK_TYPES.find(t => t.toUpperCase().startsWith(ch)) || ch;
//                             // Status will come from API in future; mock for now
//                             const s = selectedCase.status === "completed" ? "clear" : "in_progress";
//                             const style = CHECK_STATUS_STYLE[s] || CHECK_STATUS_STYLE.pending;
//                             return (
//                               <div className="empolyment-card-wrp" key={ch}>
//                                 <div className="empolyment-cards">
//                                   <p>{fullName}</p>
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

//                     {/* Documents */}
//                     {activeDetailTab === "documents" && (
//                       <div style={{ padding: "16px" }}>
//                         <p style={{ color: "#94a3b8", fontSize: "14px" }}>Document upload/download feature coming soon.</p>
//                       </div>
//                     )}

//                     <div className="status-wise" style={{ marginTop: "auto" }}>
//                       <button className="secondary-cta import">
//                         <img src="images/dashboard/export-excel.svg" alt="" /> Download Report
//                       </button>
//                       <button className="primary-cta export">
//                         <img src="images/dashboard/export-icon.svg" alt="" /> Submit Query
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
//                     <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to view details</p>
//                   </div>
//                 )}
//               </div>

//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../src/config";

const ROLE_TITLE = {
  admin:          "ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export",
  allocator:      "ALLOCATOR DASHBOARD — Case Distribution · Assignment",
  verifier:       "VERIFIER DASHBOARD — My Cases · Result Entry",
  check_manager:  "CHECK MANAGER — Case Overview · Status Tracking",
  report_writing: "REPORT WRITING — Draft · QC · Dispatch",
  pvt_qc:         "PVT / QC INTAKE — Queue · Case Detail · Comments",
  client:         "CLIENT PORTAL — My Cases · Status · Reports",
  onboarding:     "ONBOARDING — Client Setup · Candidate Link Generator",
};

const ROLE_BADGE_COLOR = {
  admin:          "#2b3b8c",
  allocator:      "#028090",
  verifier:       "#7c3aed",
  check_manager:  "#0891b2",
  report_writing: "#d97706",
  pvt_qc:         "#059669",
  client:         "#eb4d4b",
  onboarding:     "#db2777",
};

export default function Header() {
  const navigate = useNavigate();
  const user = (() => {
    try { return JSON.parse(localStorage.getItem("user")) || {}; }
    catch { return {}; }
  })();

  const role  = user.role || "admin";
  const title = ROLE_TITLE[role] || "SATYAPAN BGV PORTAL";
  const badge = ROLE_BADGE_COLOR[role] || "#2b3b8c";

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${API_URL}/api/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      });
    } catch {}
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav>
      <div className="nav-toggle">
        <div className="bx bx-menu">
          <img src="images/sidebar/sidebar-collapse.svg" alt="" />
        </div>
      </div>

      <div className="head-src">
        <h3>{title}</h3>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* User info badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.12)", borderRadius: "10px",
          padding: "6px 14px"
        }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: badge, color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: "14px", flexShrink: 0
          }}>
            {(user.name || "A")[0].toUpperCase()}
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>
              {user.name || "Admin"}
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", textTransform: "capitalize" }}>
              {role.replace("_", " ")}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="primary-cta"
          onClick={logout}
          style={{ padding: "0 16px", height: "38px", fontSize: "13px" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
