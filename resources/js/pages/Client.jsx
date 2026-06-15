// // // // // import { useNavigate } from "react-router-dom";


// // // // // export default function Client() {
// // // // //   const navigate = useNavigate();

// // // // //   const logout = () => {
// // // // //     localStorage.removeItem("token");
// // // // //     navigate("/");
// // // // //   };


// // // // //   return (
// // // // //     <>
 

// // // // //   {/* CONTENT */}
// // // // //   <section id="noSidebar">
// // // // //     {/* NAVBAR */}
// // // // //     <nav>
// // // // //       <div className="nav-toggle">
// // // // //         <div className="bx bx-menu">
// // // // //           <img src="images/inner-pages/client-portal-icon.svg" alt="" />
// // // // //         </div>
// // // // //       </div>
      
// // // // //       <div className="head-src">
// // // // //         <h3>CLIENT PORTAL — Case Submission · Status Traking · Reports · Export</h3>
// // // // //       </div>
      
// // // // //       <button type="button" className="primary-cta">Client Role</button>
// // // // //     </nav>


// // // // //     {/* MAIN */}
// // // // //     <main>

// // // // //      <div className="dash-wrper">

// // // // //      <div className="header-navbar">
      
// // // // //           <button className="tab-cta">Dashboard</button>
// // // // //           <button className="tab-cta active">Active Cases</button>
// // // // //           <button className="tab-cta">Completed</button>
// // // // //           <button className="tab-cta">Generate Link</button>
// // // // //           <button className="tab-cta">Reports & Trends</button>
// // // // //           <button className="tab-cta">Billing</button>
          
// // // // //      </div>

// // // // //           <div className="dash-upper-head">
// // // // //           <div className="left"> 
// // // // //           <button className="tab-cta">Today</button>
// // // // //           <button className="tab-cta">This Week</button>
// // // // //           <button className="tab-cta">This Month</button>
// // // // //           <button className="tab-cta active">Custom</button>
// // // // //           </div>
// // // // //           <div className="right">
// // // // //           <button className="date-wrapper"><img src="/images/dashboard/calendar-icon.svg"></img><input
// // // // //         type="text"
// // // // //         name="daterange"
// // // // //         className="selectedDate"
// // // // //         placeholder="Select Date"
// // // // //         readOnly
// // // // //       /></button>
// // // // //           <button className="primary-cta export"><img src="images/dashboard/export-icon.svg" alt="" /> Export CSV</button>
// // // // //           <button className="secondary-cta import"><img src="images/dashboard/export-excel.svg" alt="" />Export Excel</button>
// // // // //           </div>
// // // // //           </div>

// // // // //        {/* TOP SECTION */}
// // // // //       <div className="cards-head-dash">

// // // // //        <div className="card-inner-dash bdr-total">
// // // // //         <h4>18</h4>
// // // // //         <p>Active</p>
// // // // //        </div>

// // // // //        <div className="card-inner-dash bdr-com">
// // // // //         <h4>42</h4>
// // // // //         <p>Completed</p>
// // // // //        </div>

// // // // //        <div className="card-inner-dash bdr-progress">
// // // // //         <h4>3</h4>
// // // // //         <p>Pending Link</p>
// // // // //        </div>

       

// // // // //        {/* <div className="card-inner-dash bdr-client">
// // // // //         <h4>50</h4>
// // // // //         <p>Clients</p>
// // // // //        </div> */}

// // // // //        <div className="card-inner-dash bdr-rate">
// // // // //         <h4>96%</h4>
// // // // //         <p>Clear Rate</p>
// // // // //        </div>

// // // // //       </div>

// // // // //       {/* DASHBOARD Inner body */}

// // // // //       <div className="dash-inner-wrp-both client-portal">

// // // // //           <div className="dash-inner-left">
         
         
        
// // // // //           <div className="down-table">
// // // // //           <div className="client-portal-cases">
// // // // //         <h3>ACTIVE CASES (18 total)</h3>
// // // // //          </div>
// // // // //          <form className="search-input">
// // // // //         <input type="text" class="form-control" name="" placeholder="Search candidate or case ID..."></input>
// // // // //         <a href="#" class="search"><img src="images/inner-pages/search-icon.svg" /></a>
// // // // //          </form>
// // // // //             <table>
// // // // //       {/* <thead>
// // // // //         <tr>
// // // // //           <th>Case ID</th>
// // // // //         </tr>
// // // // //       </thead> */}

// // // // //       <tbody>
// // // // //         <tr>
// // // // //           <td>
// // // // //             <div className="criminal-case">
              
// // // // //               <p><span>BGV-2405</span> <br></br>
// // // // //               Emp-Edu-Criminal
// // // // //               </p>
// // // // //             </div>
// // // // //           </td>
// // // // //           <td>
// // // // //           <div className="client-names">
// // // // //             Ravi Kumar
// // // // //           </div></td>
// // // // //           <td>
// // // // //           <div class="custom-progress">
// // // // //   <div class="custom-progress-bar yellows"></div>
// // // // // </div>
// // // // // <p className="progress-client-text yellows">Day 3/7</p>
// // // // //           </td>
// // // // //           <td>
// // // // //             <div className="parent-client-boxes">
// // // // //               <span className="client-cases-box blue"></span>
// // // // //             </div>
// // // // //           </td>
// // // // //         </tr>

// // // // //         <tr>
// // // // //           <td>
// // // // //             <div className="criminal-case">
              
// // // // //               <p><span>BGV-2406</span> <br></br>
// // // // //               All 7 Checks
// // // // //               </p>
// // // // //             </div>
// // // // //           </td>
// // // // //           <td>
// // // // //           <div className="client-names">
// // // // //             Anjali Mehta
// // // // //           </div>
// // // // //           </td>
// // // // //           <td>
// // // // //           <div class="custom-progress">
// // // // //   <div class="custom-progress-bar blue"></div>
// // // // // </div>
// // // // // <p className="progress-client-text blue">Day 6/7</p>
// // // // //           </td>
// // // // //           <td><div className="parent-client-boxes">
// // // // //               <span className="client-cases-box yellow"></span>
// // // // //             </div></td>
// // // // //            </tr>

// // // // //         <tr>
// // // // //           <td>
// // // // //             <div className="criminal-case">
              
// // // // //               <p><span>BGV-2407</span> <br></br>
// // // // //               Edu-DB
// // // // //               </p>
// // // // //             </div>
// // // // //           </td>
// // // // //           <td>
// // // // //           <div className="client-names">
// // // // //             Suresh Pillai
// // // // //           </div>
// // // // //           </td>
// // // // //           <td>
// // // // //           <div class="custom-progress">
// // // // //   <div class="custom-progress-bar green"></div>
// // // // // </div>
// // // // // <p className="progress-client-text green">Done</p>
// // // // //           </td>
// // // // //           <td><div className="parent-client-boxes">
// // // // //               <span className="client-cases-box succes"></span>
// // // // //             </div></td>
// // // // //            </tr>

// // // // //         <tr>
// // // // //           <td>
// // // // //             <div className="criminal-case">
              
// // // // //               <p><span>BGV-2408</span> <br></br>
// // // // //               Emp-Addr
// // // // //               </p>
// // // // //             </div>
// // // // //           </td>
// // // // //           <td>
// // // // //           <div className="client-names">
// // // // //            Neha Sharma
// // // // //           </div>
// // // // //           </td>
// // // // //           <td>
// // // // //           <div class="custom-progress">
// // // // //   <div class="custom-progress-bar yellows"></div>
// // // // // </div>
// // // // // <p className="progress-client-text yellows">Day 1/7</p>
// // // // //           </td>
// // // // //           <td><div className="parent-client-boxes">
// // // // //               <span className="client-cases-box bdr-clr"></span>
// // // // //             </div></td>
// // // // //            </tr>
// // // // //       </tbody>
// // // // //     </table>
// // // // //           </div>
// // // // //       </div>

// // // // //       <div className="dash-inner-right status-cases">
// // // // //            <div className="quick-stats cases">

// // // // //       <div className="stats-header">
// // // // //         <h3>CASE DETAIL  --  BVG - 2405 | Amit Verma</h3>
// // // // //       </div>

       


// // // // //     </div>

// // // // //      <div className="header-navbar inner-case">
      
// // // // //           <button className="tab-cta">Overview</button>
// // // // //           <button className="tab-cta active">Timeline</button>
// // // // //           <button className="tab-cta">Documents</button>
// // // // //           <button className="tab-cta">Comments</button>
          
// // // // //      </div>

// // // // //      <div className="clients-status">
// // // // //       <h4>Check - Wise Status</h4>

// // // // //         <div className="empolyment-body-wrp">
// // // // //         <div className="empolyment-card-wrp">
// // // // //           <div className="empolyment-cards">
// // // // //           <p>Empolyment</p>
// // // // //         <span class="primary-cta green">Clear</span>
// // // // //         </div>
// // // // //          <div className="empolyment-cards">
// // // // //           <p>Criminal</p>
// // // // //         <span class="primary-cta blue">In Progress</span>
// // // // //         </div>
// // // // //         </div>

// // // // //         <div className="empolyment-card-wrp">
// // // // //           <div className="empolyment-cards">
// // // // //           <p>Education</p>
// // // // //         <span class="primary-cta denger-red">Discrepancy</span>
// // // // //         </div>
// // // // //          <div className="empolyment-cards">
// // // // //           <p>Drug Test</p>
// // // // //         <span class="primary-cta yellow">Pending</span>
// // // // //         </div>
// // // // //         </div>

// // // // //         <div className="empolyment-card-wrp">
// // // // //           <div className="empolyment-cards">
// // // // //           <p>Address</p>
// // // // //         <span class="primary-cta green">Clear</span>
// // // // //         </div>
// // // // //          <div className="empolyment-cards">
// // // // //           <p>Courtroom</p>
// // // // //         <span class="primary-cta bdr-color">N/A</span>
// // // // //         </div>
// // // // //         </div>

// // // // //         <div className="empolyment-card-wrp">
// // // // //           <div className="empolyment-cards">
// // // // //           <p>Database</p>
// // // // //         <span class="primary-cta green">Clear</span>
// // // // //         </div>
        
// // // // //         </div>


// // // // //         </div>

// // // // //      </div>

// // // // // <div className="status-wise">
// // // // //           <button className="secondary-cta import"><img src="images/dashboard/export-excel.svg" alt="" />Download Report</button>
// // // // //           <button className="primary-cta export"><img src="images/dashboard/export-icon.svg" alt="" />Submit Query</button>
// // // // //           </div>     


     
// // // // //       </div>

// // // // //       </div>
      
// // // // //      </div>
      
// // // // //     </main>
// // // // //   </section>
// // // // // </>
// // // // //   );
// // // // // }
// // // // // Client.jsx — redirects to the full ClientCases page
// // // // // The rich case management UI lives in ClientCases.jsx
// // // // // import { useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function Client() {
// // // // //   const navigate = useNavigate();
// // // // //   useEffect(() => { navigate("/ClientCases", { replace: true }); }, []);
// // // // //   return null;
// // // // // }
// // // // // import { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import Sidebar from "./Sidebar";
// // // // // import { API_URL } from "../src/config";

// // // // // const CHECK_STATUS_STYLE = {
// // // // //   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
// // // // //   in_progress: { label: "In Progress", bg: "#2b3b8c", color: "#fff" },
// // // // //   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
// // // // //   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
// // // // //   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// // // // // };

// // // // // const ALL_CHECK_TYPES = ["Employment","Education","Address","Database","Criminal","Drug Test","Courtroom"];

// // // // // export default function Client() {
// // // // //   const navigate = useNavigate();
// // // // //   const [cases, setCases]           = useState([]);
// // // // //   const [selectedCase, setSelectedCase] = useState(null);
// // // // //   const [loading, setLoading]       = useState(true);
// // // // //   const [search, setSearch]         = useState("");
// // // // //   const [activeDetailTab, setActiveDetailTab] = useState("overview");

// // // // //   const token = localStorage.getItem("token");
// // // // //   const user  = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

// // // // //   useEffect(() => {
// // // // //     fetch(`${API_URL}/api/cases`, {
// // // // //       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }
// // // // //     })
// // // // //       .then(r => r.json())
// // // // //       .then(data => {
// // // // //         const list = data.cases || [];
// // // // //         setCases(list);
// // // // //         if (list.length > 0) setSelectedCase(list[0]);
// // // // //       })
// // // // //       .catch(console.error)
// // // // //       .finally(() => setLoading(false));
// // // // //   }, []);

// // // // //   const filtered = cases.filter(c => {
// // // // //     if (!search) return true;
// // // // //     const s = search.toLowerCase();
// // // // //     return c.case_id?.toLowerCase().includes(s) || c.candidate?.toLowerCase().includes(s);
// // // // //   });

// // // // //   const active    = cases.filter(c => c.status === "in-progress" || c.status === "pending").length;
// // // // //   const completed = cases.filter(c => c.status === "completed").length;
// // // // //   const total     = cases.length;

// // // // //   // Parse checks from "EMP·EDU·CRI" back to array
// // // // //   const checksArr = (checksStr) =>
// // // // //     checksStr ? checksStr.split("·").map(s => s.trim()) : [];

// // // // //   const progressPct = (c) => {
// // // // //     if (c.status === "completed") return 100;
// // // // //     if (c.status === "in-progress") return 60;
// // // // //     if (c.status === "qc-review") return 85;
// // // // //     return 20;
// // // // //   };

// // // // //   const progressColor = (pct) => {
// // // // //     if (pct >= 100) return "#10b981";
// // // // //     if (pct >= 60)  return "#028090";
// // // // //     return "#f59e0b";
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <Sidebar />

// // // // //       <section id="content">
// // // // //         {/* Navbar */}
// // // // //         <nav>
// // // // //           <div className="nav-toggle">
// // // // //             <div className="bx bx-menu">
// // // // //               <img src="images/inner-pages/client-portal-icon.svg" alt="" />
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="head-src">
// // // // //             <h3>CLIENT PORTAL — {user.name || "My Account"} · Case Status · Reports</h3>
// // // // //           </div>
// // // // //           <button type="button" className="primary-cta" onClick={() => navigate("/AddCase")}>
// // // // //             + Add Case
// // // // //           </button>
// // // // //         </nav>

// // // // //         <main>
// // // // //           <div className="dash-wrper">

// // // // //             {/* ── Tabs ── */}
// // // // //             <div className="header-navbar">
// // // // //               <button className="tab-cta active">Active Cases</button>
// // // // //               <button className="tab-cta" onClick={() => navigate("/AllCases")}>All Cases</button>
// // // // //               <button className="tab-cta" onClick={() => navigate("/AddCase")}>Add Case</button>
// // // // //             </div>

// // // // //             {/* ── Stat cards ── */}
// // // // //             <div className="cards-head-dash">
// // // // //               <div className="card-inner-dash bdr-total">
// // // // //                 <h4>{loading ? "—" : total}</h4>
// // // // //                 <p>Total Cases</p>
// // // // //               </div>
// // // // //               <div className="card-inner-dash bdr-com">
// // // // //                 <h4>{loading ? "—" : active}</h4>
// // // // //                 <p>Active</p>
// // // // //               </div>
// // // // //               <div className="card-inner-dash bdr-progress">
// // // // //                 <h4>{loading ? "—" : completed}</h4>
// // // // //                 <p>Completed</p>
// // // // //               </div>
// // // // //               <div className="card-inner-dash bdr-rate">
// // // // //                 <h4>{total > 0 ? Math.round((completed / total) * 100) : 0}%</h4>
// // // // //                 <p>Clear Rate</p>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* ── Main body ── */}
// // // // //             <div className="dash-inner-wrp-both client-portal">

// // // // //               {/* ── LEFT: Case List ── */}
// // // // //               <div className="dash-inner-left">
// // // // //                 <div className="down-table">
// // // // //                   <div className="client-portal-cases">
// // // // //                     <h3>CASES ({filtered.length})</h3>
// // // // //                   </div>

// // // // //                   <form className="search-input" onSubmit={e => e.preventDefault()} style={{ padding: "10px" }}>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       className="form-control"
// // // // //                       placeholder="Search case ID or candidate..."
// // // // //                       value={search}
// // // // //                       onChange={e => setSearch(e.target.value)}
// // // // //                       style={{ width: "100%", padding: "8px 14px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "13px", outline: "none" }}
// // // // //                     />
// // // // //                   </form>

// // // // //                   {loading ? (
// // // // //                     <p style={{ padding: "20px", color: "#888", fontSize: "14px" }}>Loading...</p>
// // // // //                   ) : filtered.length === 0 ? (
// // // // //                     <div style={{ padding: "30px", textAlign: "center" }}>
// // // // //                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>No cases yet.</p>
// // // // //                       <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>
// // // // //                         + Add Your First Case
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <table>
// // // // //                       <tbody>
// // // // //                         {filtered.map(c => {
// // // // //                           const pct = progressPct(c);
// // // // //                           const isSelected = selectedCase?.case_id === c.case_id;
// // // // //                           return (
// // // // //                             <tr
// // // // //                               key={c.case_id}
// // // // //                               onClick={() => setSelectedCase(c)}
// // // // //                               style={{ cursor: "pointer", background: isSelected ? "#eef1fb" : undefined, borderLeft: isSelected ? "4px solid #2b3b8c" : "4px solid transparent" }}
// // // // //                             >
// // // // //                               <td>
// // // // //                                 <div className="criminal-case">
// // // // //                                   <p>
// // // // //                                     <span>{c.case_id}</span><br />
// // // // //                                     {c.checks}
// // // // //                                   </p>
// // // // //                                 </div>
// // // // //                               </td>
// // // // //                               <td>
// // // // //                                 <div className="client-names">{c.candidate}</div>
// // // // //                               </td>
// // // // //                               <td>
// // // // //                                 <div className="custom-progress">
// // // // //                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: progressColor(pct) }} />
// // // // //                                 </div>
// // // // //                                 <p className="progress-client-text" style={{ color: progressColor(pct) }}>
// // // // //                                   {c.status === "completed" ? "Done" : `${pct}%`}
// // // // //                                 </p>
// // // // //                               </td>
// // // // //                               <td>
// // // // //                                 <div className="parent-client-boxes">
// // // // //                                   <span className="client-cases-box" style={{ background: progressColor(pct) }} />
// // // // //                                 </div>
// // // // //                               </td>
// // // // //                             </tr>
// // // // //                           );
// // // // //                         })}
// // // // //                       </tbody>
// // // // //                     </table>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* ── RIGHT: Case Detail ── */}
// // // // //               <div className="dash-inner-right status-cases">
// // // // //                 {selectedCase ? (
// // // // //                   <>
// // // // //                     <div className="quick-stats cases">
// // // // //                       <div className="stats-header">
// // // // //                         <h3>CASE — {selectedCase.case_id} | {selectedCase.candidate}</h3>
// // // // //                       </div>
// // // // //                     </div>

// // // // //                     {/* Detail tabs */}
// // // // //                     <div className="header-navbar inner-case">
// // // // //                       {["overview", "checks", "documents"].map(t => (
// // // // //                         <button
// // // // //                           key={t}
// // // // //                           className={`tab-cta ${activeDetailTab === t ? "active" : ""}`}
// // // // //                           onClick={() => setActiveDetailTab(t)}
// // // // //                         >
// // // // //                           {t.charAt(0).toUpperCase() + t.slice(1)}
// // // // //                         </button>
// // // // //                       ))}
// // // // //                     </div>

// // // // //                     {/* Overview */}
// // // // //                     {activeDetailTab === "overview" && (
// // // // //                       <div style={{ padding: "16px" }}>
// // // // //                         {[
// // // // //                           { label: "Case ID",    value: selectedCase.case_id },
// // // // //                           { label: "Candidate",  value: selectedCase.candidate },
// // // // //                           { label: "Client",     value: selectedCase.client },
// // // // //                           { label: "Status",     value: selectedCase.status },
// // // // //                           { label: "Priority",   value: selectedCase.priority || "Normal" },
// // // // //                           { label: "TAT",        value: selectedCase.tat },
// // // // //                           { label: "Created",    value: selectedCase.created_at },
// // // // //                           { label: "Amount",     value: `₹${selectedCase.total_amount?.toLocaleString() || "—"}` },
// // // // //                         ].map(r => (
// // // // //                           <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
// // // // //                             <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
// // // // //                             <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
// // // // //                           </div>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                     )}

// // // // //                     {/* Check-wise status */}
// // // // //                     {activeDetailTab === "checks" && (
// // // // //                       <div className="clients-status">
// // // // //                         <h4>Check-wise Status</h4>
// // // // //                         <div className="empolyment-body-wrp">
// // // // //                           {checksArr(selectedCase.checks).map(ch => {
// // // // //                             // Map short codes back to full name
// // // // //                             const fullName = ALL_CHECK_TYPES.find(t => t.toUpperCase().startsWith(ch)) || ch;
// // // // //                             // Status will come from API in future; mock for now
// // // // //                             const s = selectedCase.status === "completed" ? "clear" : "in_progress";
// // // // //                             const style = CHECK_STATUS_STYLE[s] || CHECK_STATUS_STYLE.pending;
// // // // //                             return (
// // // // //                               <div className="empolyment-card-wrp" key={ch}>
// // // // //                                 <div className="empolyment-cards">
// // // // //                                   <p>{fullName}</p>
// // // // //                                   <span className="primary-cta" style={{ background: style.bg, border: `1px solid ${style.bg}`, color: style.color, width: "45%" }}>
// // // // //                                     {style.label}
// // // // //                                   </span>
// // // // //                                 </div>
// // // // //                               </div>
// // // // //                             );
// // // // //                           })}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     )}

// // // // //                     {/* Documents */}
// // // // //                     {activeDetailTab === "documents" && (
// // // // //                       <div style={{ padding: "16px" }}>
// // // // //                         <p style={{ color: "#94a3b8", fontSize: "14px" }}>Document upload/download feature coming soon.</p>
// // // // //                       </div>
// // // // //                     )}

// // // // //                     <div className="status-wise" style={{ marginTop: "auto" }}>
// // // // //                       <button className="secondary-cta import">
// // // // //                         <img src="images/dashboard/export-excel.svg" alt="" /> Download Report
// // // // //                       </button>
// // // // //                       <button className="primary-cta export">
// // // // //                         <img src="images/dashboard/export-icon.svg" alt="" /> Submit Query
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </>
// // // // //                 ) : (
// // // // //                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
// // // // //                     <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to view details</p>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>

// // // // //             </div>
// // // // //           </div>
// // // // //         </main>
// // // // //       </section>
// // // // //     </>
// // // // //   );
// // // // // }
// // // // import { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import Sidebar from "./Sidebar";
// // // // import { API_URL } from "../src/config";

// // // // const CHECK_STATUS_STYLE = {
// // // //   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
// // // //   in_progress: { label: "In Progress", bg: "#2b3b8c", color: "#fff" },
// // // //   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
// // // //   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
// // // //   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// // // // };

// // // // const ALL_CHECK_TYPES = ["Employment","Education","Address","Database","Criminal","Drug Test","Courtroom"];

// // // // export default function Client() {
// // // //   const navigate = useNavigate();
// // // //   const [cases, setCases]           = useState([]);
// // // //   const [selectedCase, setSelectedCase] = useState(null);
// // // //   const [loading, setLoading]       = useState(true);
// // // //   const [search, setSearch]         = useState("");
// // // //   const [activeDetailTab, setActiveDetailTab] = useState("overview");

// // // //   const token = localStorage.getItem("token");
// // // //   const user  = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

// // // //   useEffect(() => {
// // // //     fetch(`${API_URL}/api/cases`, {
// // // //       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }
// // // //     })
// // // //       .then(r => r.json())
// // // //       .then(data => {
// // // //         const list = data.cases || [];
// // // //         setCases(list);
// // // //         if (list.length > 0) setSelectedCase(list[0]);
// // // //       })
// // // //       .catch(console.error)
// // // //       .finally(() => setLoading(false));
// // // //   }, []);

// // // //   const filtered = cases.filter(c => {
// // // //     if (!search) return true;
// // // //     const s = search.toLowerCase();
// // // //     return c.case_id?.toLowerCase().includes(s) || c.candidate?.toLowerCase().includes(s);
// // // //   });

// // // //   const active    = cases.filter(c => c.status === "in-progress" || c.status === "pending").length;
// // // //   const completed = cases.filter(c => c.status === "completed").length;
// // // //   const total     = cases.length;

// // // //   // Parse checks from "EMP·EDU·CRI" back to array
// // // //   const checksArr = (checksStr) =>
// // // //     checksStr ? checksStr.split("·").map(s => s.trim()) : [];

// // // //   const progressPct = (c) => {
// // // //     if (c.status === "completed") return 100;
// // // //     if (c.status === "in-progress") return 60;
// // // //     if (c.status === "qc-review") return 85;
// // // //     return 20;
// // // //   };

// // // //   const progressColor = (pct) => {
// // // //     if (pct >= 100) return "#10b981";
// // // //     if (pct >= 60)  return "#028090";
// // // //     return "#f59e0b";
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Sidebar />

// // // //       <section id="content">
// // // //         {/* Navbar */}
// // // //         <nav>
// // // //           <div className="nav-toggle">
// // // //             <div className="bx bx-menu">
// // // //               <img src="images/inner-pages/client-portal-icon.svg" alt="" />
// // // //             </div>
// // // //           </div>
// // // //           <div className="head-src">
// // // //             <h3>CLIENT PORTAL — {user.name || "My Account"} · Case Status · Reports</h3>
// // // //           </div>
// // // //           <button type="button" className="primary-cta" onClick={() => navigate("/AddCase")}>
// // // //             + Add Case
// // // //           </button>
// // // //         </nav>

// // // //         <main>
// // // //           <div className="dash-wrper">

// // // //             {/* ── Tabs ── */}
// // // //             <div className="header-navbar">
// // // //               <button className="tab-cta active">Active Cases</button>
// // // //               <button className="tab-cta" onClick={() => navigate("/AllCases")}>All Cases</button>
// // // //               <button className="tab-cta" onClick={() => navigate("/AddCase")}>Add Case</button>
// // // //             </div>

// // // //             {/* ── Stat cards ── */}
// // // //             <div className="cards-head-dash">
// // // //               <div className="card-inner-dash bdr-total">
// // // //                 <h4>{loading ? "—" : total}</h4>
// // // //                 <p>Total Cases</p>
// // // //               </div>
// // // //               <div className="card-inner-dash bdr-com">
// // // //                 <h4>{loading ? "—" : active}</h4>
// // // //                 <p>Active</p>
// // // //               </div>
// // // //               <div className="card-inner-dash bdr-progress">
// // // //                 <h4>{loading ? "—" : completed}</h4>
// // // //                 <p>Completed</p>
// // // //               </div>
// // // //               <div className="card-inner-dash bdr-rate">
// // // //                 <h4>{total > 0 ? Math.round((completed / total) * 100) : 0}%</h4>
// // // //                 <p>Clear Rate</p>
// // // //               </div>
// // // //             </div>

// // // //             {/* ── Main body ── */}
// // // //             <div className="dash-inner-wrp-both client-portal">

// // // //               {/* ── LEFT: Case List ── */}
// // // //               <div className="dash-inner-left">
// // // //                 <div className="down-table">
// // // //                   <div className="client-portal-cases">
// // // //                     <h3>CASES ({filtered.length})</h3>
// // // //                   </div>

// // // //                   <form className="search-input" onSubmit={e => e.preventDefault()} style={{ padding: "10px" }}>
// // // //                     <input
// // // //                       type="text"
// // // //                       className="form-control"
// // // //                       placeholder="Search case ID or candidate..."
// // // //                       value={search}
// // // //                       onChange={e => setSearch(e.target.value)}
// // // //                       style={{ width: "100%", padding: "8px 14px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "13px", outline: "none" }}
// // // //                     />
// // // //                   </form>

// // // //                   {loading ? (
// // // //                     <p style={{ padding: "20px", color: "#888", fontSize: "14px" }}>Loading...</p>
// // // //                   ) : filtered.length === 0 ? (
// // // //                     <div style={{ padding: "30px", textAlign: "center" }}>
// // // //                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>No cases yet.</p>
// // // //                       <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>
// // // //                         + Add Your First Case
// // // //                       </button>
// // // //                     </div>
// // // //                   ) : (
// // // //                     <table>
// // // //                       <tbody>
// // // //                         {filtered.map(c => {
// // // //                           const pct = progressPct(c);
// // // //                           const isSelected = selectedCase?.case_id === c.case_id;
// // // //                           return (
// // // //                             <tr
// // // //                               key={c.case_id}
// // // //                               onClick={() => setSelectedCase(c)}
// // // //                               style={{ cursor: "pointer", background: isSelected ? "#eef1fb" : undefined, borderLeft: isSelected ? "4px solid #2b3b8c" : "4px solid transparent" }}
// // // //                             >
// // // //                               <td>
// // // //                                 <div className="criminal-case">
// // // //                                   <p>
// // // //                                     <span>{c.case_id}</span><br />
// // // //                                     {c.checks}
// // // //                                   </p>
// // // //                                 </div>
// // // //                               </td>
// // // //                               <td>
// // // //                                 <div className="client-names">{c.candidate}</div>
// // // //                               </td>
// // // //                               <td>
// // // //                                 <div className="custom-progress">
// // // //                                   <div className="custom-progress-bar" style={{ width: `${pct}%`, background: progressColor(pct) }} />
// // // //                                 </div>
// // // //                                 <p className="progress-client-text" style={{ color: progressColor(pct) }}>
// // // //                                   {c.status === "completed" ? "Done" : `${pct}%`}
// // // //                                 </p>
// // // //                               </td>
// // // //                               <td>
// // // //                                 <div className="parent-client-boxes">
// // // //                                   <span className="client-cases-box" style={{ background: progressColor(pct) }} />
// // // //                                 </div>
// // // //                               </td>
// // // //                             </tr>
// // // //                           );
// // // //                         })}
// // // //                       </tbody>
// // // //                     </table>
// // // //                   )}
// // // //                 </div>
// // // //               </div>

// // // //               {/* ── RIGHT: Case Detail ── */}
// // // //               <div className="dash-inner-right status-cases">
// // // //                 {selectedCase ? (
// // // //                   <>
// // // //                     <div className="quick-stats cases">
// // // //                       <div className="stats-header">
// // // //                         <h3>CASE — {selectedCase.case_id} | {selectedCase.candidate}</h3>
// // // //                       </div>
// // // //                     </div>

// // // //                     {/* Detail tabs */}
// // // //                     <div className="header-navbar inner-case">
// // // //                       {["overview", "checks", "documents"].map(t => (
// // // //                         <button
// // // //                           key={t}
// // // //                           className={`tab-cta ${activeDetailTab === t ? "active" : ""}`}
// // // //                           onClick={() => setActiveDetailTab(t)}
// // // //                         >
// // // //                           {t.charAt(0).toUpperCase() + t.slice(1)}
// // // //                         </button>
// // // //                       ))}
// // // //                     </div>

// // // //                     {/* Overview */}
// // // //                     {activeDetailTab === "overview" && (
// // // //                       <div style={{ padding: "16px" }}>
// // // //                         {[
// // // //                           { label: "Case ID",    value: selectedCase.case_id },
// // // //                           { label: "Candidate",  value: selectedCase.candidate },
// // // //                           { label: "Client",     value: selectedCase.client },
// // // //                           { label: "Status",     value: selectedCase.status },
// // // //                           { label: "Priority",   value: selectedCase.priority || "Normal" },
// // // //                           { label: "TAT",        value: selectedCase.tat },
// // // //                           { label: "Created",    value: selectedCase.created_at },
// // // //                           { label: "Amount",     value: `₹${selectedCase.total_amount?.toLocaleString() || "—"}` },
// // // //                         ].map(r => (
// // // //                           <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
// // // //                             <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
// // // //                             <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
// // // //                           </div>
// // // //                         ))}
// // // //                       </div>
// // // //                     )}

// // // //                     {/* Check-wise status */}
// // // //                     {activeDetailTab === "checks" && (
// // // //                       <div className="clients-status">
// // // //                         <h4>Check-wise Status</h4>
// // // //                         <div className="empolyment-body-wrp">
// // // //                           {checksArr(selectedCase.checks).map(ch => {
// // // //                             // Map short codes back to full name
// // // //                             const fullName = ALL_CHECK_TYPES.find(t => t.toUpperCase().startsWith(ch)) || ch;
// // // //                             // Status will come from API in future; mock for now
// // // //                             const s = selectedCase.status === "completed" ? "clear" : "in_progress";
// // // //                             const style = CHECK_STATUS_STYLE[s] || CHECK_STATUS_STYLE.pending;
// // // //                             return (
// // // //                               <div className="empolyment-card-wrp" key={ch}>
// // // //                                 <div className="empolyment-cards">
// // // //                                   <p>{fullName}</p>
// // // //                                   <span className="primary-cta" style={{ background: style.bg, border: `1px solid ${style.bg}`, color: style.color, width: "45%" }}>
// // // //                                     {style.label}
// // // //                                   </span>
// // // //                                 </div>
// // // //                               </div>
// // // //                             );
// // // //                           })}
// // // //                         </div>
// // // //                       </div>
// // // //                     )}

// // // //                     {/* Documents */}
// // // //                     {activeDetailTab === "documents" && (
// // // //                       <div style={{ padding: "16px" }}>
// // // //                         <p style={{ color: "#94a3b8", fontSize: "14px" }}>Document upload/download feature coming soon.</p>
// // // //                       </div>
// // // //                     )}

// // // //                     <div className="status-wise" style={{ marginTop: "auto" }}>
// // // //                       <button className="secondary-cta import">
// // // //                         <img src="images/dashboard/export-excel.svg" alt="" /> Download Report
// // // //                       </button>
// // // //                       <button className="primary-cta export">
// // // //                         <img src="images/dashboard/export-icon.svg" alt="" /> Submit Query
// // // //                       </button>
// // // //                     </div>
// // // //                   </>
// // // //                 ) : (
// // // //                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
// // // //                     <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to view details</p>
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //             </div>
// // // //           </div>
// // // //         </main>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // }
// // // import { useState, useEffect } from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import Sidebar from "./Sidebar";
// // // import Header from "./Header";
// // // import { API_URL } from "../src/config";

// // // const CHECK_STATUS_STYLE = {
// // //   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
// // //   in_progress: { label: "In Progress", bg: "#2b3b8c", color: "#fff" },
// // //   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
// // //   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
// // //   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// // // };

// // // const STATUS_TABS = [
// // //   { key: "all",          label: "All Cases"   },
// // //   { key: "pending",      label: "Pending"     },
// // //   { key: "in-progress",  label: "In Progress" },
// // //   { key: "completed",    label: "Completed"   },
// // // ];

// // // export default function Client() {
// // //   const navigate = useNavigate();
// // //   const location  = useLocation();
// // //     const getInitialTab = () => {
// // //     const params = new URLSearchParams(location.search);
// // //     const tab    = params.get("tab");
// // //     return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// // //   };

// // //   const [cases, setCases]               = useState([]);
// // //   const [selectedCase, setSelectedCase] = useState(null);
// // //   const [loading, setLoading]           = useState(true);
// // //   const [search, setSearch]             = useState("");
// // // const [statusTab, setStatusTab] = useState(getInitialTab); 
// // //   const [activeDetailTab, setActiveDetailTab] = useState("overview");

// // //   const token = localStorage.getItem("token");
// // //   const user  = (() => {
// // //     try { return JSON.parse(localStorage.getItem("user")) || {}; }
// // //     catch { return {}; }
// // //   })();

// // //   useEffect(() => {
    
    
// // //     fetch(`${API_URL}/api/cases`, {
// // //       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
// // //     })
// // //       .then(r => r.json())
// // //       .then(data => {
// // //         const list = data.cases || [];
// // //         setCases(list);
// // //         if (list.length > 0) setSelectedCase(list[0]);
// // //       })
// // //       .catch(console.error)
// // //       .finally(() => setLoading(false));
// // //   }, []);
// // //   useEffect(() => {
// // //   const params = new URLSearchParams(location.search);
// // //   const tab    = params.get("tab") || "all";

// // //   if (["all", "pending", "in-progress", "completed"].includes(tab)) {
// // //     setStatusTab(tab);
// // //     setSearch("");
// // //     setActiveDetailTab("overview");

// // //     // Auto-select first case for the new tab (runs after cases are loaded too)
// // //     const first = cases.find(c => tab === "all" || c.status === tab);
// // //     setSelectedCase(first || null);
// // //   }
// // // }, [location.search, cases]);

// // //   // ── Counts per tab ─────────────────────────────────────────
// // //   const counts = {
// // //     all:           cases.length,
// // //     pending:       cases.filter(c => c.status === "pending").length,
// // //     "in-progress": cases.filter(c => c.status === "in-progress").length,
// // //     completed:     cases.filter(c => c.status === "completed").length,
// // //   };

// // //   // ── Filter by tab + search ─────────────────────────────────
// // //   const filtered = cases.filter(c => {
// // //     const matchTab    = statusTab === "all" || c.status === statusTab;
// // //     const matchSearch = !search ||
// // //       c.case_id?.toLowerCase().includes(search.toLowerCase()) ||
// // //       c.candidate?.toLowerCase().includes(search.toLowerCase());
// // //     return matchTab && matchSearch;
// // //   });

// // //   const total     = cases.length;
// // //   const completed = counts.completed;
// // //   const clearRate = total > 0 ? Math.round((completed / total) * 100) : 0;

// // //   const progressPct = (c) => {
// // //     if (c.status === "completed")   return 100;
// // //     if (c.status === "qc-review")   return 85;
// // //     if (c.status === "in-progress") return 60;
// // //     return 20;
// // //   };

// // //   const progressColor = (pct) => {
// // //     if (pct >= 100) return "#10b981";
// // //     if (pct >= 60)  return "#028090";
// // //     return "#f59e0b";
// // //   };

// // //   const checksArr = (checksStr) =>
// // //     checksStr ? checksStr.split("·").map(s => s.trim()) : [];

// // //   // When tab changes, auto-select first case in that filtered list
// // //   const handleTabChange = (key) => {
// // //     setStatusTab(key);
// // //     setSearch("");
// // //     const first = cases.find(c => key === "all" || c.status === key);
// // //     setSelectedCase(first || null);
// // //     setActiveDetailTab("overview");
// // //   };

// // //   return (
// // //     <>
// // //       <Sidebar />

// // //       <section id="content">
// // //         <Header />

// // //         <main>
// // //           <div className="dash-wrper">

// // //             {/* ── Page header ── */}
// // //             <div className="dash-upper-head">
// // //               <div className="left">
// // //                 <div className="dash-title-flex">
// // //                   <h3 className="dash-title-text">Client Portal</h3>
// // //                   <span style={{
// // //                     fontSize: "12px", color: "#64748b",
// // //                     background: "#eef3ff", padding: "3px 10px", borderRadius: "20px"
// // //                   }}>
// // //                     {user.name || "My Account"}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //               <div className="right">
// // //                 <div style={{ position: "relative" }}>
// // //                   <input
// // //                     type="text"
// // //                     className="dash-search-input"
// // //                     placeholder="Search case ID or candidate…"
// // //                     value={search}
// // //                     onChange={e => setSearch(e.target.value)}
// // //                   />
// // //                   {search && (
// // //                     <button
// // //                       onClick={() => setSearch("")}
// // //                       style={{
// // //                         position: "absolute", right: "8px", top: "50%",
// // //                         transform: "translateY(-50%)", background: "none",
// // //                         border: "none", cursor: "pointer", fontSize: "16px", color: "#94a3b8",
// // //                       }}
// // //                     >×</button>
// // //                   )}
// // //                 </div>
// // //                 <button className="primary-cta" onClick={() => navigate("/AddCase")}>
// // //                   + Add Case
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* ── Stat cards ── */}
// // //             <div className="cards-head-dash">
// // //               <div className="card-inner-dash bdr-total">
// // //                 <h4>{loading ? "—" : total}</h4>
// // //                 <p>Total Cases</p>
// // //               </div>
// // //               <div className="card-inner-dash bdr-progress">
// // //                 <h4>{loading ? "—" : counts.pending}</h4>
// // //                 <p>Pending</p>
// // //               </div>
// // //               <div className="card-inner-dash bdr-com">
// // //                 <h4>{loading ? "—" : counts["in-progress"]}</h4>
// // //                 <p>In Progress</p>
// // //               </div>
// // //               <div className="card-inner-dash bdr-rate">
// // //                 <h4>{loading ? "—" : clearRate}%</h4>
// // //                 <p>Clear Rate</p>
// // //               </div>
// // //             </div>

// // //             {/* ── Status filter tabs ── */}
// // //             <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
// // //               {STATUS_TABS.map(tab => (
// // //                 <button
// // //                   key={tab.key}
// // //                   className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
// // //                   onClick={() => handleTabChange(tab.key)}
// // //                 >
// // //                   {tab.label}
// // //                   <span style={{
// // //                     marginLeft: "6px", background: "rgba(0,0,0,0.1)",
// // //                     borderRadius: "8px", padding: "1px 6px",
// // //                     fontSize: "11px", fontWeight: 700,
// // //                   }}>
// // //                     {counts[tab.key] ?? 0}
// // //                   </span>
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             {/* ── Split panel body ── */}
// // //             <div className="dash-inner-wrp-both client-portal">

// // //               {/* ── LEFT: Case list ── */}
// // //               <div className="dash-inner-left">
// // //                 <div className="down-table">

// // //                   <div className="client-portal-cases">
// // //                     <h3>
// // //                       {STATUS_TABS.find(t => t.key === statusTab)?.label.toUpperCase()}
// // //                       {" "}({filtered.length})
// // //                     </h3>
// // //                   </div>

// // //                   {loading ? (
// // //                     <p style={{ padding: "20px", color: "#888", fontSize: "14px" }}>Loading…</p>
// // //                   ) : filtered.length === 0 ? (
// // //                     <div style={{ padding: "30px", textAlign: "center" }}>
// // //                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>
// // //                         No {statusTab === "all" ? "" : statusTab + " "}cases found.
// // //                       </p>
// // //                       {cases.length === 0 && (
// // //                         <button
// // //                           className="primary-cta"
// // //                           onClick={() => navigate("/AddCase")}
// // //                           style={{ marginTop: "12px" }}
// // //                         >
// // //                           + Add Your First Case
// // //                         </button>
// // //                       )}
// // //                     </div>
// // //                   ) : (
// // //                     <table>
// // //                       <tbody>
// // //                         {filtered.map(c => {
// // //                           const pct        = progressPct(c);
// // //                           const color      = progressColor(pct);
// // //                           const isSelected = selectedCase?.case_id === c.case_id;
// // //                           return (
// // //                             <tr
// // //                               key={c.case_id}
// // //                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
// // //                               style={{
// // //                                 cursor: "pointer",
// // //                                 background:  isSelected ? "#eef1fb" : undefined,
// // //                                 borderLeft:  isSelected ? "4px solid #2b3b8c" : "4px solid transparent",
// // //                               }}
// // //                             >
// // //                               <td>
// // //                                 <div className="criminal-case">
// // //                                   <p>
// // //                                     <span>{c.case_id}</span><br />
// // //                                     {c.checks}
// // //                                   </p>
// // //                                 </div>
// // //                               </td>
// // //                               <td>
// // //                                 <div className="client-names">{c.candidate}</div>
// // //                               </td>
// // //                               <td>
// // //                                 <div className="custom-progress">
// // //                                   <div
// // //                                     className="custom-progress-bar"
// // //                                     style={{ width: `${pct}%`, background: color }}
// // //                                   />
// // //                                 </div>
// // //                                 <p className="progress-client-text" style={{ color }}>
// // //                                   {c.status === "completed" ? "Done" : `${pct}%`}
// // //                                 </p>
// // //                               </td>
// // //                               <td>
// // //                                 <div className="parent-client-boxes">
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

// // //               {/* ── RIGHT: Case detail ── */}
// // //               <div className="dash-inner-right status-cases">
// // //                 {!selectedCase ? (
// // //                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
// // //                     <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to view details</p>
// // //                   </div>
// // //                 ) : (
// // //                   <>
// // //                     {/* Case header */}
// // //                     <div className="quick-stats cases">
// // //                       <div className="stats-header">
// // //                         <h3>CASE — {selectedCase.case_id} | {selectedCase.candidate}</h3>
// // //                       </div>
// // //                     </div>

// // //                     {/* Detail tabs */}
// // //                     <div className="header-navbar inner-case">
// // //                       {["overview", "checks", "documents"].map(t => (
// // //                         <button
// // //                           key={t}
// // //                           className={`tab-cta ${activeDetailTab === t ? "active" : ""}`}
// // //                           onClick={() => setActiveDetailTab(t)}
// // //                         >
// // //                           {t.charAt(0).toUpperCase() + t.slice(1)}
// // //                         </button>
// // //                       ))}
// // //                     </div>

// // //                     {/* ── Overview tab ── */}
// // //                     {activeDetailTab === "overview" && (
// // //                       <div className="clients-status">
// // //                         {[
// // //                           { label: "Case ID",   value: selectedCase.case_id },
// // //                           { label: "Candidate", value: selectedCase.candidate },
// // //                           { label: "Client",    value: selectedCase.client },
// // //                           { label: "Status",    value: statusLabel(selectedCase.status) },
// // //                           { label: "Priority",  value: selectedCase.priority || "Normal" },
// // //                           { label: "TAT",       value: selectedCase.tat || "—" },
// // //                           { label: "Created",   value: selectedCase.created_at
// // //                               ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
// // //                               : "—" },
// // //                           { label: "Amount",    value: `₹${selectedCase.total_amount?.toLocaleString() || "—"}` },
// // //                         ].map(r => (
// // //                           <div
// // //                             key={r.label}
// // //                             style={{
// // //                               display: "flex", justifyContent: "space-between",
// // //                               padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px",
// // //                             }}
// // //                           >
// // //                             <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
// // //                             <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
// // //                           </div>
// // //                         ))}
// // //                       </div>
// // //                     )}

// // //                     {/* ── Checks tab ── */}
// // //                     {activeDetailTab === "checks" && (
// // //                       <div className="clients-status">
// // //                         <h4>Check-wise Status</h4>
// // //                         <div className="empolyment-body-wrp">
// // //                           {checksArr(selectedCase.checks).map(ch => {
// // //                             const s     = selectedCase.status === "completed" ? "clear" : "in_progress";
// // //                             const style = CHECK_STATUS_STYLE[s] || CHECK_STATUS_STYLE.pending;
// // //                             return (
// // //                               <div className="empolyment-card-wrp" key={ch}>
// // //                                 <div className="empolyment-cards">
// // //                                   <p>{ch}</p>
// // //                                   <span
// // //                                     className="primary-cta"
// // //                                     style={{ background: style.bg, border: `1px solid ${style.bg}`, color: style.color, width: "45%" }}
// // //                                   >
// // //                                     {style.label}
// // //                                   </span>
// // //                                 </div>
// // //                               </div>
// // //                             );
// // //                           })}
// // //                         </div>
// // //                       </div>
// // //                     )}

// // //                     {/* ── Documents tab ── */}
// // //                     {activeDetailTab === "documents" && (
// // //                       <div style={{ padding: "16px" }}>
// // //                         <p style={{ color: "#94a3b8", fontSize: "14px" }}>
// // //                           Document upload/download coming soon.
// // //                         </p>
// // //                       </div>
// // //                     )}

// // //                     {/* Action buttons */}
// // //                     <div className="status-wise" style={{ marginTop: "16px" }}>
// // //                       <button className="secondary-cta import">
// // //                         <img src="images/dashboard/export-excel.svg" alt="" /> Download Report
// // //                       </button>
// // //                       <button className="primary-cta export">
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

// // // // ── Helper ────────────────────────────────────────────────────────────────────
// // // function statusLabel(s) {
// // //   return {
// // //     "pending":     "Pending",
// // //     "in-progress": "In Progress",
// // //     "completed":   "Completed",
// // //     "qc-review":   "QC Review",
// // //     "on-hold":     "On Hold",
// // //   }[s] || s;
// // // }
// // import { useState, useEffect } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import Sidebar from "./Sidebar";
// // import Header from "./Header";
// // import { API_URL } from "../src/config";

// // const CHECK_STATUS_STYLE = {
// //   clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
// //   in_progress: { label: "In Progress", bg: "#2b3b8c", color: "#fff" },
// //   pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
// //   discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
// //   na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
// // };

// // const STATUS_TABS = [
// //   { key: "all",          label: "All Cases"   },
// //   { key: "pending",      label: "Pending"     },
// //   { key: "in-progress",  label: "In Progress" },
// //   { key: "completed",    label: "Completed"   },
// // ];

// // export default function Client() {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const getInitialTab = () => {
// //     const params = new URLSearchParams(location.search);
// //     const tab    = params.get("tab");
// //     return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
// //   };

// //   const [cases, setCases]               = useState([]);
// //   const [selectedCase, setSelectedCase] = useState(null);
// //   const [loading, setLoading]           = useState(true);
// //   const [search, setSearch]             = useState("");
// //   const [statusTab, setStatusTab]       = useState(getInitialTab);
// //   const [activeDetailTab, setActiveDetailTab] = useState("overview");

// //   const token = localStorage.getItem("token");
// //   const user  = (() => {
// //     try { return JSON.parse(localStorage.getItem("user")) || {}; }
// //     catch { return {}; }
// //   })();

// //   // ── Fetch cases on mount ────────────────────────────────────
// //   useEffect(() => {
// //     fetch(`${API_URL}/api/cases`, {
// //       headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
// //     })
// //       .then(r => r.json())
// //       .then(data => {
// //         const list = data.cases || [];
// //         setCases(list);
// //         if (list.length > 0) setSelectedCase(list[0]);
// //       })
// //       .catch(console.error)
// //       .finally(() => setLoading(false));
// //   }, []);

// //   // ── Sync tab from URL query param ──────────────────────────
// //   useEffect(() => {
// //     const params = new URLSearchParams(location.search);
// //     const tab    = params.get("tab") || "all";

// //     if (["all", "pending", "in-progress", "completed"].includes(tab)) {
// //       setStatusTab(tab);
// //       setSearch("");
// //       setActiveDetailTab("overview");

// //       const first = cases.find(c => tab === "all" || c.status === tab);
// //       setSelectedCase(first || null);
// //     }
// //   }, [location.search, cases]);

// //   // ── Counts per tab ─────────────────────────────────────────
// //   const counts = {
// //     all:           cases.length,
// //     pending:       cases.filter(c => c.status === "pending").length,
// //     "in-progress": cases.filter(c => c.status === "in-progress").length,
// //     completed:     cases.filter(c => c.status === "completed").length,
// //   };

// //   // ── Filter by tab + search ─────────────────────────────────
// //   const filtered = cases.filter(c => {
// //     const matchTab    = statusTab === "all" || c.status === statusTab;
// //     const matchSearch = !search ||
// //       c.case_id?.toLowerCase().includes(search.toLowerCase()) ||
// //       c.candidate?.toLowerCase().includes(search.toLowerCase());
// //     return matchTab && matchSearch;
// //   });

// //   // ── Stat card values (matches admin dashboard) ─────────────
// //   const total     = cases.length;
// //   const completed = counts.completed;
// //   const inProgress = counts["in-progress"];
// //   const clearRate = total > 0 ? Math.round((completed / total) * 100) : 0;

// //   // ── Progress helpers ───────────────────────────────────────
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

// //   const checksArr = (checksStr) =>
// //     checksStr ? checksStr.split("·").map(s => s.trim()) : [];

// //   // ── Tab change handler ─────────────────────────────────────
// //   const handleTabChange = (key) => {
// //     setStatusTab(key);
// //     setSearch("");
// //     const first = cases.find(c => key === "all" || c.status === key);
// //     setSelectedCase(first || null);
// //     setActiveDetailTab("overview");
// //   };

// //   return (
// //     <>
// //       <Sidebar />

// //       <section id="content">
// //         <Header />

// //         <main>
// //           <div className="dash-wrper">

// //             {/* ── Page header ── */}
// //             <div className="dash-upper-head">
// //               <div className="left">
// //                 <div className="dash-title-flex">
// //                   <h3 className="dash-title-text">Client Portal</h3>
// //                   <span style={{
// //                     fontSize: "12px", color: "#64748b",
// //                     background: "#eef3ff", padding: "3px 10px", borderRadius: "20px"
// //                   }}>
// //                     {user.name || "My Account"}
// //                   </span>
// //                 </div>
// //               </div>
// //               <div className="right">
// //                 <div style={{ position: "relative" }}>
// //                   <input
// //                     type="text"
// //                     className="dash-search-input"
// //                     placeholder="Search case ID or candidate…"
// //                     value={search}
// //                     onChange={e => setSearch(e.target.value)}
// //                   />
// //                   {search && (
// //                     <button
// //                       onClick={() => setSearch("")}
// //                       style={{
// //                         position: "absolute", right: "8px", top: "50%",
// //                         transform: "translateY(-50%)", background: "none",
// //                         border: "none", cursor: "pointer", fontSize: "16px", color: "#94a3b8",
// //                       }}
// //                     >×</button>
// //                   )}
// //                 </div>
// //                 <button className="primary-cta" onClick={() => navigate("/AddCase")}>
// //                   + Add Case
// //                 </button>
// //               </div>
// //             </div>

// //             {/* ── Stat cards — same order as admin dashboard ── */}
// //             {/* Admin: Total Cases · In Progress · Completed · Clients · Clear Rate */}
// //             {/* Client: Total Cases · In Progress · Completed · Clear Rate          */}
// //             <div className="cards-head-dash">

// //               <div className="card-inner-dash bdr-total">
// //                 <h4>{loading ? "—" : total}</h4>
// //                 <p>Total Cases</p>
// //               </div>

// //               <div className="card-inner-dash bdr-progress">
// //                 <h4>{loading ? "—" : inProgress}</h4>
// //                 <p>In Progress</p>
// //               </div>

// //               <div className="card-inner-dash bdr-com">
// //                 <h4>{loading ? "—" : completed}</h4>
// //                 <p>Completed</p>
// //               </div>

// //               <div className="card-inner-dash bdr-rate">
// //                 <h4>{loading ? "—" : clearRate}%</h4>
// //                 <p>Clear Rate</p>
// //               </div>

// //             </div>

// //             {/* ── Status filter tabs ── */}
// //             <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
// //               {STATUS_TABS.map(tab => (
// //                 <button
// //                   key={tab.key}
// //                   className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
// //                   onClick={() => handleTabChange(tab.key)}
// //                 >
// //                   {tab.label}
// //                   <span style={{
// //                     marginLeft: "6px", background: "rgba(0,0,0,0.1)",
// //                     borderRadius: "8px", padding: "1px 6px",
// //                     fontSize: "11px", fontWeight: 700,
// //                   }}>
// //                     {counts[tab.key] ?? 0}
// //                   </span>
// //                 </button>
// //               ))}
// //             </div>

// //             {/* ── Split panel body ── */}
// //             <div className="dash-inner-wrp-both client-portal">

// //               {/* ── LEFT: Case list ── */}
// //               <div className="dash-inner-left">
// //                 <div className="down-table">

// //                   <div className="client-portal-cases">
// //                     <h3>
// //                       {STATUS_TABS.find(t => t.key === statusTab)?.label.toUpperCase()}
// //                       {" "}({filtered.length})
// //                     </h3>
// //                   </div>

// //                   {loading ? (
// //                     <p style={{ padding: "20px", color: "#888", fontSize: "14px" }}>Loading…</p>
// //                   ) : filtered.length === 0 ? (
// //                     <div style={{ padding: "30px", textAlign: "center" }}>
// //                       <p style={{ color: "#94a3b8", fontSize: "14px" }}>
// //                         No {statusTab === "all" ? "" : statusTab + " "}cases found.
// //                       </p>
// //                       {cases.length === 0 && (
// //                         <button
// //                           className="primary-cta"
// //                           onClick={() => navigate("/AddCase")}
// //                           style={{ marginTop: "12px" }}
// //                         >
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
// //                           return (
// //                             <tr
// //                               key={c.case_id}
// //                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
// //                               style={{
// //                                 cursor:     "pointer",
// //                                 background: isSelected ? "#eef1fb" : undefined,
// //                                 borderLeft: isSelected ? "4px solid #2b3b8c" : "4px solid transparent",
// //                               }}
// //                             >
// //                               <td>
// //                                 <div className="criminal-case">
// //                                   <p>
// //                                     <span>{c.case_id}</span><br />
// //                                     {c.checks}
// //                                   </p>
// //                                 </div>
// //                               </td>
// //                               <td>
// //                                 <div className="client-names">{c.candidate}</div>
// //                               </td>
// //                               <td>
// //                                 <div className="custom-progress">
// //                                   <div
// //                                     className="custom-progress-bar"
// //                                     style={{ width: `${pct}%`, background: color }}
// //                                   />
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

// //               {/* ── RIGHT: Case detail ── */}
// //               <div className="dash-inner-right status-cases">
// //                 {!selectedCase ? (
// //                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
// //                     <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to view details</p>
// //                   </div>
// //                 ) : (
// //                   <>
// //                     {/* Case header */}
// //                     <div className="quick-stats cases">
// //                       <div className="stats-header">
// //                         <h3>CASE — {selectedCase.case_id} | {selectedCase.candidate}</h3>
// //                       </div>
// //                     </div>

// //                     {/* Detail tabs */}
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

// //                     {/* ── Overview tab ── */}
// //                     {activeDetailTab === "overview" && (
// //                       <div className="clients-status">
// //                         {[
// //                           { label: "Case ID",   value: selectedCase.case_id },
// //                           { label: "Candidate", value: selectedCase.candidate },
// //                           { label: "Client",    value: selectedCase.client },
// //                           { label: "Status",    value: statusLabel(selectedCase.status) },
// //                           { label: "Priority",  value: selectedCase.priority || "Normal" },
// //                           { label: "TAT",       value: selectedCase.tat || "—" },
// //                           {
// //                             label: "Created",
// //                             value: selectedCase.created_at
// //                               ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", {
// //                                   day: "2-digit", month: "short", year: "numeric",
// //                                 })
// //                               : "—"
// //                           },
// //                           { label: "Amount", value: `₹${selectedCase.total_amount?.toLocaleString() || "—"}` },
// //                         ].map(r => (
// //                           <div
// //                             key={r.label}
// //                             style={{
// //                               display: "flex", justifyContent: "space-between",
// //                               padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px",
// //                             }}
// //                           >
// //                             <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
// //                             <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     )}

// //                     {/* ── Checks tab ── */}
// //                     {activeDetailTab === "checks" && (
// //                       <div className="clients-status">
// //                         <h4>Check-wise Status</h4>
// //                         <div className="empolyment-body-wrp">
// //                           {checksArr(selectedCase.checks).map(ch => {
// //                             const s     = selectedCase.status === "completed" ? "clear" : "in_progress";
// //                             const style = CHECK_STATUS_STYLE[s] || CHECK_STATUS_STYLE.pending;
// //                             return (
// //                               <div className="empolyment-card-wrp" key={ch}>
// //                                 <div className="empolyment-cards">
// //                                   <p>{ch}</p>
// //                                   <span
// //                                     className="primary-cta"
// //                                     style={{
// //                                       background: style.bg,
// //                                       border: `1px solid ${style.bg}`,
// //                                       color: style.color,
// //                                       width: "45%",
// //                                     }}
// //                                   >
// //                                     {style.label}
// //                                   </span>
// //                                 </div>
// //                               </div>
// //                             );
// //                           })}
// //                         </div>
// //                       </div>
// //                     )}

// //                     {/* ── Documents tab ── */}
// //                     {activeDetailTab === "documents" && (
// //                       <div style={{ padding: "16px" }}>
// //                         <p style={{ color: "#94a3b8", fontSize: "14px" }}>
// //                           Document upload/download coming soon.
// //                         </p>
// //                       </div>
// //                     )}

// //                     {/* Action buttons */}
// //                     <div className="status-wise" style={{ marginTop: "16px" }}>
// //                       <button className="secondary-cta import">
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

// // // ── Helper ────────────────────────────────────────────────────────────────────
// // function statusLabel(s) {
// //   return {
// //     "pending":     "Pending",
// //     "in-progress": "In Progress",
// //     "completed":   "Completed",
// //     "qc-review":   "QC Review",
// //     "on-hold":     "On Hold",
// //   }[s] || s;
// // }
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { API_URL } from "../src/config";

// const STATUS_TABS = [
//   { key: "all", label: "All Cases" },
//   { key: "pending", label: "Pending" },
//   { key: "in-progress", label: "In Progress" },
//   { key: "completed", label: "Completed" },
// ];

// const DATE_FILTERS = [
//   { key: "today", label: "Today" },
//   { key: "week", label: "This Week" },
//   { key: "month", label: "This Month" },
//   { key: "custom", label: "Custom" },
// ];

// // Status Label Helper Function
// function statusLabel(s) {
//   return {
//     "pending":     "Pending",
//     "in-progress": "In Progress",
//     "completed":   "Completed",
//     "qc-review":   "QC Review",
//     "on-hold":     "On Hold",
//   }[s] || s;
// }

// export default function Client() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [cases, setCases] = useState([]);
//   const [selectedCase, setSelectedCase] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [statusTab, setStatusTab] = useState("all");
//   const [dateFilter, setDateFilter] = useState("month");
//   const [customRange, setCustomRange] = useState({ start: "", end: "" });
//   const [activeDetailTab, setActiveDetailTab] = useState("overview");

//   const token = localStorage.getItem("token");
//   const user = (() => {
//     try { return JSON.parse(localStorage.getItem("user")) || {}; }
//     catch { return {}; }
//   })();

//   const fetchCases = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_URL}/api/cases`, {
//         headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
//       });
//       const data = await res.json();
//       const list = data.cases || [];
//       setCases(list);
//       if (list.length > 0 && !selectedCase) setSelectedCase(list[0]);
//     } catch (err) {
//       console.error("Failed to fetch cases", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCases();
//   }, []);

//   // Refresh after adding case
//   useEffect(() => {
//     if (location.state?.refresh) fetchCases();
//   }, [location.state]);

//   const isInDateRange = (createdAt) => {
//     if (!createdAt) return true;
//     const date = new Date(createdAt);
//     const now = new Date();

//     if (dateFilter === "today") return date.toDateString() === now.toDateString();
//     if (dateFilter === "week") {
//       const weekAgo = new Date(now); weekAgo.setDate(weekAgo.getDate() - 7);
//       return date >= weekAgo;
//     }
//     if (dateFilter === "month") {
//       return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
//     }
//     if (dateFilter === "custom" && customRange.start && customRange.end) {
//       return date >= new Date(customRange.start) && date <= new Date(customRange.end);
//     }
//     return true;
//   };

//   const filtered = cases.filter(c => {
//     const tabMatch = statusTab === "all" || c.status === statusTab;
//     const searchMatch = !search ||
//       c.case_id?.toLowerCase().includes(search.toLowerCase()) ||
//       c.candidate?.toLowerCase().includes(search.toLowerCase());
//     return tabMatch && searchMatch && isInDateRange(c.created_at);
//   });

//   const counts = {
//     all: cases.length,
//     pending: cases.filter(c => c.status === "pending").length,
//     "in-progress": cases.filter(c => c.status === "in-progress").length,
//     completed: cases.filter(c => c.status === "completed").length,
//   };

//   const total = cases.length;
//   const completedCount = counts.completed;
//   const clearRate = total > 0 ? Math.round((completedCount / total) * 100) : 0;

//   const progressPct = (c) => {
//     if (c.status === "completed") return 100;
//     if (c.status === "in-progress") return 60;
//     return 20;
//   };

//   const progressColor = (pct) => {
//     if (pct >= 100) return "#10b981";
//     if (pct >= 60) return "#028090";
//     return "#f59e0b";
//   };

//   const checksArr = (checksStr) => checksStr ? checksStr.split("·").map(s => s.trim()) : [];

//   const handleTabChange = (key) => {
//     setStatusTab(key);
//     setSearch("");
//     const first = cases.find(c => key === "all" || c.status === key);
//     setSelectedCase(first || null);
//     setActiveDetailTab("overview");
//   };

//   const exportCSV = () => {
//     const headers = ["Case ID", "Candidate", "Checks", "Status", "Created", "Amount"];
//     const rows = filtered.map(c => [
//       c.case_id, c.candidate, c.checks, c.status, c.created_at, `₹${c.total_amount || 0}`
//     ]);
//     const csv = [headers, ...rows].map(row => row.join(",")).join("\n");
//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `client-cases-${dateFilter}.csv`;
//     a.click();
//   };

//   return (
//     <>
//       <Sidebar />

//       <section id="content">
//         <Header />

//         <main>
//           <div className="dash-wrper">

//             {/* Page Header */}
//             <div className="dash-upper-head">
//               <div className="left">
//                 <div className="dash-title-flex">
//                   <h3 className="dash-title-text">Client Portal</h3>
//                   <span style={{
//                     fontSize: "12px", color: "#64748b",
//                     background: "#eef3ff", padding: "3px 10px", borderRadius: "20px"
//                   }}>
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
//                 <button className="primary-cta" onClick={() => navigate("/AddCase")}>
//                   + Add Case
//                 </button>
//               </div>
//             </div>

//             {/* Date Filters + Export */}
//             <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px", alignItems: "center" }}>
//               {DATE_FILTERS.map(df => (
//                 <button
//                   key={df.key}
//                   className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
//                   onClick={() => setDateFilter(df.key)}
//                 >
//                   {df.label}
//                 </button>
//               ))}

//               {dateFilter === "custom" && (
//                 <div style={{ display: "flex", gap: "6px" }}>
//                   <input type="date" onChange={e => setCustomRange(p => ({ ...p, start: e.target.value }))} />
//                   <input type="date" onChange={e => setCustomRange(p => ({ ...p, end: e.target.value }))} />
//                 </div>
//               )}

//               <button className="primary-cta export" onClick={exportCSV}>
//                 Export CSV
//               </button>
//               <button className="secondary-cta import" onClick={exportCSV}>
//                 Export Excel
//               </button>
//             </div>

//             {/* Stat Cards */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total"><h4>{loading ? "—" : total}</h4><p>Total Cases</p></div>
//               <div className="card-inner-dash bdr-progress"><h4>{loading ? "—" : counts["in-progress"]}</h4><p>In Progress</p></div>
//               <div className="card-inner-dash bdr-com"><h4>{loading ? "—" : completedCount}</h4><p>Completed</p></div>
//               <div className="card-inner-dash bdr-rate"><h4>{loading ? "—" : clearRate}%</h4><p>Clear Rate</p></div>
//             </div>

//             {/* Status Tabs */}
//             <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
//               {STATUS_TABS.map(tab => (
//                 <button
//                   key={tab.key}
//                   className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
//                   onClick={() => handleTabChange(tab.key)}
//                 >
//                   {tab.label} <span style={{ marginLeft: "6px", fontSize: "12px" }}>({counts[tab.key]})</span>
//                 </button>
//               ))}
//             </div>

//             {/* Main Content */}
//             <div className="dash-inner-wrp-both client-portal">
//               {/* LEFT - Case List */}
//               <div className="dash-inner-left">
//                 <div className="down-table">
//                   <div className="client-portal-cases">
//                     <h3>
//                       {STATUS_TABS.find(t => t.key === statusTab)?.label.toUpperCase()} ({filtered.length})
//                     </h3>
//                   </div>

//                   {loading ? (
//                     <p style={{ padding: "30px", textAlign: "center" }}>Loading cases...</p>
//                   ) : filtered.length === 0 ? (
//                     <p style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>No cases found</p>
//                   ) : (
//                     <table>
//                       <tbody>
//                         {filtered.map(c => {
//                           const pct = progressPct(c);
//                           const color = progressColor(pct);
//                           const isSelected = selectedCase?.case_id === c.case_id;

//                           return (
//                             <tr
//                               key={c.case_id}
//                               onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
//                               style={{
//                                 cursor: "pointer",
//                                 background: isSelected ? "#eef1fb" : undefined,
//                                 borderLeft: isSelected ? "4px solid #2b3b8c" : "4px solid transparent"
//                               }}
//                             >
//                               <td>
//                                 <div className="criminal-case">
//                                   <p><span>{c.case_id}</span><br />{c.checks}</p>
//                                 </div>
//                               </td>
//                               <td><div className="client-names">{c.candidate}</div></td>
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

//               {/* RIGHT - Case Detail */}
//               <div className="dash-inner-right status-cases">
//                 {!selectedCase ? (
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
//                     <p style={{ color: "#94a3b8" }}>Select a case to view details</p>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="quick-stats cases">
//                       <div className="stats-header">
//                         <h3>CASE — {selectedCase.case_id} | {selectedCase.candidate}</h3>
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
//                           { label: "Case ID", value: selectedCase.case_id },
//                           { label: "Candidate", value: selectedCase.candidate },
//                           { label: "Client", value: selectedCase.client },
//                           { label: "Status", value: statusLabel(selectedCase.status) },
//                           { label: "Amount", value: `₹${selectedCase.total_amount || 0}` },
//                         ].map(r => (
//                           <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
//                             <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
//                             <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value}</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {activeDetailTab === "checks" && (
//                       <div className="clients-status">
//                         <h4>Check-wise Status</h4>
//                         <div className="empolyment-body-wrp">
//                           {checksArr(selectedCase.checks).map(ch => (
//                             <div className="empolyment-card-wrp" key={ch}>
//                               <div className="empolyment-cards">
//                                 <p>{ch}</p>
//                                 <span className="primary-cta green">Clear</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     <div className="status-wise" style={{ marginTop: "16px" }}>
//                       <button className="secondary-cta import" onClick={exportCSV}>
//                         Download Report
//                       </button>
//                       <button className="primary-cta export">Submit Query</button>
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
import { API_URL } from "../src/config";

const STATUS_TABS = [
  { key: "all",          label: "All Cases"   },
  { key: "pending",      label: "Pending"     },
  { key: "in-progress",  label: "In Progress" },
  { key: "completed",    label: "Completed"   },
];

const DATE_FILTERS = [
  { key: "today", label: "Today"      },
  { key: "week",  label: "This Week"  },
  { key: "month", label: "This Month" },
  { key: "all",   label: "All Time"   },
];

const CHECK_STATUS_STYLE = {
  clear:       { label: "Clear",       bg: "#10b981", color: "#fff" },
  in_progress: { label: "In Progress", bg: "#2b3b8c", color: "#fff" },
  pending:     { label: "Pending",     bg: "#f59e0b", color: "#fff" },
  discrepancy: { label: "Discrepancy", bg: "#ef4444", color: "#fff" },
  na:          { label: "N/A",         bg: "#94a3b8", color: "#fff" },
};

function statusLabel(s) {
  return { "pending": "Pending", "in-progress": "In Progress", "completed": "Completed", "qc-review": "QC Review", "on-hold": "On Hold" }[s] || s;
}

// ── Read ?tab= from URL ───────────────────────────────────────────────────────
function getTabFromURL(search) {
  const tab = new URLSearchParams(search).get("tab") || "all";
  return ["all", "pending", "in-progress", "completed"].includes(tab) ? tab : "all";
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

  // ── Fetch cases ───────────────────────────────────────────────────────────
  const fetchCases = () => {
    setLoading(true);
    fetch(`${API_URL}/api/cases`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then(r => r.json())
      .then(data => {
        const list = data.cases || [];
        setCases(list);

        // Auto-select first case matching the current URL tab
        const currentTab = getTabFromURL(location.search);
        const first = list.find(c => currentTab === "all" || c.status === currentTab);
        setSelectedCase(first || list[0] || null);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchCases(); }, []);

  // ── KEY FIX: sync tab when URL ?tab= changes (sidebar clicks) ────────────
  useEffect(() => {
    const tab = getTabFromURL(location.search);
    setStatusTab(tab);
    setSearch("");
    setActiveDetailTab("overview");
    // Auto-select first case for this tab (cases may already be loaded)
    if (cases.length > 0) {
      const first = cases.find(c => tab === "all" || c.status === tab);
      setSelectedCase(first || null);
    }
  }, [location.search]); // ← fires on every sidebar click

  // ── Date filter helper ────────────────────────────────────────────────────
  const isInRange = (createdAt) => {
    if (!createdAt) return true;
    const d   = new Date(createdAt);
    const now = new Date();
    if (dateFilter === "today") return d.toDateString() === now.toDateString();
    if (dateFilter === "week")  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
    if (dateFilter === "month") { return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); }
    if (dateFilter === "custom" && customFrom && customTo) {
      return d >= new Date(customFrom) && d <= new Date(customTo + "T23:59:59");
    }
    return true;
  };

  // ── Filtered list ─────────────────────────────────────────────────────────
  const filtered = cases.filter(c => {
    const matchTab    = statusTab === "all" || c.status === statusTab;
    const matchSearch = !search ||
      (c.case_id || "").toLowerCase().includes(search.toLowerCase()) ||
      (c.candidate || c.candidate_name || "").toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch && isInRange(c.created_at);
  });

  // ── Counts ────────────────────────────────────────────────────────────────
  const counts = {
    all:           cases.length,
    pending:       cases.filter(c => c.status === "pending").length,
    "in-progress": cases.filter(c => c.status === "in-progress").length,
    completed:     cases.filter(c => c.status === "completed").length,
  };

  const total     = cases.length;
  const clearRate = total > 0 ? Math.round((counts.completed / total) * 100) : 0;

  // ── Progress helpers ──────────────────────────────────────────────────────
  const progressPct = (c) => {
    if (c.status === "completed")   return 100;
    if (c.status === "qc-review")   return 85;
    if (c.status === "in-progress") return 60;
    return 20;
  };
  const progressColor = (pct) => {
    if (pct >= 100) return "#10b981";
    if (pct >= 60)  return "#028090";
    return "#f59e0b";
  };
  const checksArr = (s) => s ? s.split(/[·,]/).map(x => x.trim()).filter(Boolean) : [];

  // ── Tab change from buttons (not sidebar) ─────────────────────────────────
  const handleTabChange = (key) => {
    navigate(`/Client?tab=${key}`, { replace: true });
  };

  // ── Export CSV ────────────────────────────────────────────────────────────
  const exportCSV = () => {
    const headers = ["Case ID", "Candidate", "Checks", "Status", "Created", "Amount"];
    const rows    = filtered.map(c => [
      c.case_id,
      c.candidate || c.candidate_name,
      Array.isArray(c.checks) ? c.checks.join(", ") : c.checks,
      c.status, c.created_at,
      `₹${c.total_amount || 0}`,
    ]);
    const csv  = [headers, ...rows].map(r => r.map(v => `"${v ?? ""}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = `my-cases-${Date.now()}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* ── Page header — NO Add Case button here ── */}
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
                <input
                  type="text"
                  className="dash-search-input"
                  placeholder="Search case ID or candidate…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                {search && (
                  <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>×</button>
                )}
                <button className="primary-cta export" onClick={exportCSV}>
                  <img src="images/dashboard/export-icon.svg" alt="" /> Export
                </button>
              </div>
            </div>

            {/* ── Date filter tabs ── */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              {DATE_FILTERS.map(df => (
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
                    type="date" value={customFrom}
                    onChange={e => setCustomFrom(e.target.value)}
                    style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px", outline: "none" }}
                  />
                  <span style={{ color: "#94a3b8" }}>→</span>
                  <input
                    type="date" value={customTo}
                    onChange={e => setCustomTo(e.target.value)}
                    style={{ padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px", outline: "none" }}
                  />
                </>
              )}
            </div>

            {/* ── Stat cards — same as admin dashboard ── */}
            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total">
                <h4>{loading ? "—" : total}</h4>
                <p>Total Cases</p>
              </div>
              <div className="card-inner-dash bdr-progress">
                <h4>{loading ? "—" : counts["in-progress"]}</h4>
                <p>In Progress</p>
              </div>
              <div className="card-inner-dash bdr-com">
                <h4>{loading ? "—" : counts.completed}</h4>
                <p>Completed</p>
              </div>
              <div className="card-inner-dash bdr-rate">
                <h4>{loading ? "—" : clearRate}%</h4>
                <p>Clear Rate</p>
              </div>
            </div>

            {/* ── Quick Stats + Graph row (same as admin) ── */}
            <div className="dash-inner-wrp-both" style={{ marginBottom: "0" }}>
              <div className="dash-inner-left">
                <div className="up-table">
                  <div style={{ background: "#27348B", color: "#fff", padding: "14px 18px", fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
                    <span>CASE TRENDS — {DATE_FILTERS.find(d => d.key === dateFilter)?.label}</span>
                    <span style={{ color: "#14d8a7" }}>
                      {counts.completed > 0 ? `▲ ${clearRate}% clear rate` : "No completions yet"}
                    </span>
                  </div>
                  <img src="/images/dashboard/graph-dash.png" alt="Graph" style={{ width: "100%", display: "block" }} />
                </div>
              </div>

              <div className="dash-inner-right">
                <div className="quick-stats">
                  <div className="stats-header"><h3>QUICK STATS</h3></div>
                  <div className="stats-body">
                    <div className="stats-row">
                      <span>Total Cases</span>
                      <strong>{loading ? "—" : total}</strong>
                    </div>
                    <div className="stats-row">
                      <span>Pending</span>
                      <strong>{loading ? "—" : counts.pending}</strong>
                    </div>
                    <div className="stats-row">
                      <span>In Progress</span>
                      <strong>{loading ? "—" : counts["in-progress"]}</strong>
                    </div>
                    <div className="stats-row">
                      <span>Completed</span>
                      <strong>{loading ? "—" : counts.completed}</strong>
                    </div>
                    <div className="stats-row">
                      <span>Clear Rate</span>
                      <strong>{loading ? "—" : `${clearRate}%`}</strong>
                    </div>
                    <div className="stats-row">
                      <span>Avg TAT</span>
                      <strong>—</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Status filter tabs ── */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {STATUS_TABS.map(tab => (
                <button
                  key={tab.key}
                  className={`tab-cta ${statusTab === tab.key ? "active" : ""}`}
                  onClick={() => handleTabChange(tab.key)}
                >
                  {tab.label}
                  <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
                    {counts[tab.key] ?? 0}
                  </span>
                </button>
              ))}
            </div>

            {/* ── Split panel: case list + detail ── */}
            <div className="dash-inner-wrp-both client-portal">

              {/* LEFT: Case list */}
              <div className="dash-inner-left">
                <div className="down-table">
                  <div className="client-portal-cases">
                    <h3>
                      {STATUS_TABS.find(t => t.key === statusTab)?.label.toUpperCase()} ({filtered.length})
                    </h3>
                  </div>

                  {loading ? (
                    <p style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>Loading cases…</p>
                  ) : filtered.length === 0 ? (
                    <div style={{ padding: "40px", textAlign: "center" }}>
                      <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                        No {statusTab === "all" ? "" : statusTab + " "}cases found.
                      </p>
                      {cases.length === 0 && (
                        <button className="primary-cta" onClick={() => navigate("/AddCase")} style={{ marginTop: "12px" }}>
                          + Add Your First Case
                        </button>
                      )}
                    </div>
                  ) : (
                    <table>
                      <tbody>
                        {filtered.map(c => {
                          const pct        = progressPct(c);
                          const color      = progressColor(pct);
                          const isSelected = selectedCase?.case_id === c.case_id;
                          const name       = c.candidate || c.candidate_name || "—";
                          return (
                            <tr
                              key={c.case_id}
                              onClick={() => { setSelectedCase(c); setActiveDetailTab("overview"); }}
                              style={{
                                cursor:     "pointer",
                                background: isSelected ? "#eef1fb" : undefined,
                                borderLeft: isSelected ? "4px solid #2b3b8c" : "4px solid transparent",
                              }}
                            >
                              <td>
                                <div className="criminal-case">
                                  <p>
                                    <span>{c.case_id}</span><br />
                                    {Array.isArray(c.checks) ? c.checks.join(" · ") : c.checks}
                                  </p>
                                </div>
                              </td>
                              <td><div className="client-names">{name}</div></td>
                              <td>
                                <div className="custom-progress">
                                  <div className="custom-progress-bar" style={{ width: `${pct}%`, background: color }} />
                                </div>
                                <p className="progress-client-text" style={{ color }}>
                                  {c.status === "completed" ? "Done" : `${pct}%`}
                                </p>
                              </td>
                              <td>
                                <div className="parent-client-boxes">
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
                    <div className="quick-stats cases">
                      <div className="stats-header">
                        <h3>CASE — {selectedCase.case_id} | {selectedCase.candidate || selectedCase.candidate_name}</h3>
                      </div>
                    </div>

                    <div className="header-navbar inner-case">
                      {["overview", "checks", "documents"].map(t => (
                        <button
                          key={t}
                          className={`tab-cta ${activeDetailTab === t ? "active" : ""}`}
                          onClick={() => setActiveDetailTab(t)}
                        >
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </button>
                      ))}
                    </div>

                    {/* Overview tab */}
                    {activeDetailTab === "overview" && (
                      <div className="clients-status">
                        {[
                          { label: "Case ID",   value: selectedCase.case_id },
                          { label: "Candidate", value: selectedCase.candidate || selectedCase.candidate_name },
                          { label: "Status",    value: statusLabel(selectedCase.status) },
                          { label: "Priority",  value: selectedCase.priority || "Normal" },
                          { label: "TAT",       value: selectedCase.tat || "—" },
                          { label: "Created",   value: selectedCase.created_at ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
                          { label: "Amount",    value: `₹${(selectedCase.total_amount || 0).toLocaleString()}` },
                        ].map(r => (
                          <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>
                            <span style={{ color: "#64748b", fontWeight: 500 }}>{r.label}</span>
                            <span style={{ fontWeight: 700, color: "#1e293b" }}>{r.value || "—"}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Checks tab */}
                    {activeDetailTab === "checks" && (
                      <div className="clients-status">
                        <h4>Check-wise Status</h4>
                        <div className="empolyment-body-wrp">
                          {checksArr(Array.isArray(selectedCase.checks) ? selectedCase.checks.join("·") : selectedCase.checks).map(ch => {
                            const s     = selectedCase.status === "completed" ? "clear" : "in_progress";
                            const style = CHECK_STATUS_STYLE[s] || CHECK_STATUS_STYLE.pending;
                            return (
                              <div className="empolyment-card-wrp" key={ch}>
                                <div className="empolyment-cards">
                                  <p>{ch}</p>
                                  <span className="primary-cta" style={{ background: style.bg, border: `1px solid ${style.bg}`, color: style.color, width: "45%" }}>
                                    {style.label}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Documents tab */}
                    {activeDetailTab === "documents" && (
                      <div style={{ padding: "16px" }}>
                        <p style={{ color: "#94a3b8", fontSize: "14px" }}>Document upload/download coming soon.</p>
                      </div>
                    )}

                    <div className="status-wise" style={{ marginTop: "16px" }}>
                      <button className="secondary-cta import" onClick={exportCSV}>
                        <img src="images/dashboard/export-excel.svg" alt="" /> Download Report
                      </button>
                      <button className="primary-cta export">
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