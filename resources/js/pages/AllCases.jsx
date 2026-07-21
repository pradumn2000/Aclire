
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

//     // Calculate pagination
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filtered.slice(indexOfFirstUser, indexOfLastUser);
//   const totalPages = Math.ceil(filtered.length / usersPerPage);

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
//                {/* Pagination Controls */}
//               {totalPages > 1 && (
//                 <div style={{ display: "flex", justifyContent: "center", padding: "20px", gap: "5px" }}>
//                   <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} style={{ padding: "5px 10px" }}>«</button>
//                   <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1} style={{ padding: "5px 10px" }}>‹</button>
//                   {[...Array(totalPages)].map((_, i) => (
//                     <button key={i} onClick={() => setCurrentPage(i + 1)} style={{ padding: "5px 12px", background: currentPage === i + 1 ? "#2b3b8c" : "#fff", color: currentPage === i + 1 ? "#fff" : "#000" }}>{i + 1}</button>
//                   ))}
//                   <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages} style={{ padding: "5px 10px" }}>›</button>
//                   <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} style={{ padding: "5px 10px" }}>»</button>
//                 </div>
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

  // Pagination States (यहाँ इन्हें define कर दिया गया है)
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // एक पेज पर कितने केस दिखाने हैं

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

  // Filter cases when tab or search changes
  const filtered = cases.filter(c => {
    const matchTab = activeTab === "all" || c.status === activeTab;
    const matchSearch = !search ||
      c.case_id?.toLowerCase().includes(search.toLowerCase()) ||
      c.candidate?.toLowerCase().includes(search.toLowerCase()) ||
      c.client?.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  // Calculate pagination based on filtered cases
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filtered.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filtered.length / usersPerPage);

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
                    onClick={() => { setActiveTab(tab.key); setCurrentPage(1); }}
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
                onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
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
                    {currentUsers.length === 0 ? (
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
                      currentUsers.map(row => (
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

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div style={{ display: "flex", justifyContent: "center", padding: "20px", gap: "5px" }}>
                  <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} style={{ padding: "5px 10px" }}>«</button>
                  <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1} style={{ padding: "5px 10px" }}>‹</button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i + 1)} style={{ padding: "5px 12px", background: currentPage === i + 1 ? "#2b3b8c" : "#fff", color: currentPage === i + 1 ? "#fff" : "#000" }}>{i + 1}</button>
                  ))}
                  <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages} style={{ padding: "5px 10px" }}>›</button>
                  <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} style={{ padding: "5px 10px" }}>»</button>
                </div>
              )}

              {!loading && (
                <div style={{ padding: "10px 16px", fontSize: "12px", color: "#9ca3af", borderTop: "1px solid #f1f5f9" }}>
                  Showing {currentUsers.length} of {filtered.length} cases (Total: {cases.length})
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