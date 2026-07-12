// // import { useNavigate } from "react-router-dom";


// // export default function Client() {
// //   const navigate = useNavigate();

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };


// //   return (
// //     <>
 

// //   {/* CONTENT */}
// //   <section id="noSidebar">
// //     {/* NAVBAR */}
// //     <nav>
// //       <div className="nav-toggle">
// //         <div className="bx bx-menu">
// //           <img src="images/inner-pages/client-portal-icon.svg" alt="" />
// //         </div>
// //       </div>
      
// //       <div className="head-src">
// //         <h3>PVT / QC INTAKE — Queue  · Case Detail · Comments · Trends  · Export</h3>
// //       </div>
      
// //       <button type="button" className="primary-cta">PVT Role</button>
// //     </nav>


// //     {/* MAIN */}
// //     <main>

// //      <div className="dash-wrper">

// //      {/* <div className="header-navbar">
      
// //           <button className="tab-cta">Dashboard</button>
// //           <button className="tab-cta active">Active Cases</button>
// //           <button className="tab-cta">Completed</button>
// //           <button className="tab-cta">Generate Link</button>
// //           <button className="tab-cta">Reports & Trends</button>
          
// //      </div> */}

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
// //         <h4>18</h4>
// //         <p>Active</p>
// //        </div>

// //        <div className="card-inner-dash bdr-com">
// //         <h4>42</h4>
// //         <p>Completed</p>
// //        </div>

// //        <div className="card-inner-dash bdr-progress">
// //         <h4>3</h4>
// //         <p>Pending Link</p>
// //        </div>

       

// //        {/* <div className="card-inner-dash bdr-client">
// //         <h4>50</h4>
// //         <p>Clients</p>
// //        </div> */}

// //        <div className="card-inner-dash bdr-rate">
// //         <h4>96%</h4>
// //         <p>Clear Rate</p>
// //        </div>

// //       </div>

// //       {/* DASHBOARD Inner body */}

// //     <div className="intake-wrp">
// //   {/* COLUMN 1: NEW CASES QUEUE */}
// // <section className="dashboard-column queue-column" id="queue-section">
// //   <header className="column-header">
// //     <h2>NEW CASES QUEUE</h2>
// //   </header>

// //   <div className="column-content scrollable-content">
    
// //     {/* Case 1 */}
// //     <article className="case-card active" id="case-2420">
// //       <div className="case-card-info">
// //         <h3 className="case-id">BGV-2420</h3>
// //         <p className="case-candidate">Amit Verma</p>
// //       </div>
// //       <span className="badge badge-new">NEW</span>
// //     </article>

// //     {/* Case 2 */}
// //     <article className="case-card" id="case-2421">
// //       <div className="case-card-info">
// //         <h3 className="case-id">BGV-2421</h3>
// //         <p className="case-candidate">Deepa Nair</p>
// //       </div>
// //       <span className="badge badge-new">NEW</span>
// //     </article>

// //     {/* Case 3 */}
// //     <article className="case-card" id="case-2422">
// //       <div className="case-card-info">
// //         <h3 className="case-id">BGV-2422</h3>
// //         <p className="case-candidate">Kiran Rao</p>
// //       </div>
// //       <span className="badge badge-incomplete">INCOMPLETE</span>
// //     </article>

// //     {/* Case 4 */}
// //     <article className="case-card" id="case-2423">
// //       <div className="case-card-info">
// //         <h3 className="case-id">BGV-2423</h3>
// //         <p className="case-candidate">Sonal Joshi</p>
// //       </div>
// //       <span className="badge badge-new">NEW</span>
// //     </article>

// //     {/* Case 5 */}
// //     <article className="case-card" id="case-2424">
// //       <div className="case-card-info">
// //         <h3 className="case-id">BGV-2424</h3>
// //         <p className="case-candidate">Manoj Tiwari</p>
// //       </div>
// //       <span className="badge badge-review">REVIEW</span>
// //     </article>

// //     {/* Case 6 */}
// //     <article className="case-card" id="case-2425">
// //       <div className="case-card-info">
// //         <h3 className="case-id">BGV-2425</h3>
// //         <p className="case-candidate">Preethi Iyer</p>
// //       </div>
// //       <span className="badge badge-review">REVIEW</span>
// //     </article>
// //   </div>
// // </section>

// // {/* COLUMN 2: CASE DETAIL */}
// // <section className="dashboard-column detail-column" id="detail-section">
  
// //   <header className="column-header">
// //     <h2>CASE DETAIL — BGV-2420 | Amit Verma</h2>
// //   </header>

// //   <div className="column-content detail-content">
    
// //     <div className="detail-fields-group">

// //       {/* Candidate */}
// //       <div className="detail-field">
// //         <span className="field-label">Candidate</span>
// //         <span className="field-value">Amit Verma</span>
// //       </div>

// //       {/* Client */}
// //       <div className="detail-field">
// //         <span className="field-label">Client</span>
// //         <span className="field-value">Deloitte India</span>
// //       </div>

// //       {/* Submitted */}
// //       <div className="detail-field">
// //         <span className="field-label">Submitted</span>
// //         <span className="field-value">Today 10:40 AM</span>
// //       </div>

// //       {/* Check Types */}
// //       <div className="detail-field">
// //         <span className="field-label">Check Types</span>
// //         <span className="field-value check-types">
// //           Emp · Edu · Criminal · DB
// //         </span>
// //       </div>

// //       {/* Documents */}
// //       <div className="detail-field documents-field">
// //         <span className="field-label">Documents</span>

// //         <div className="documents-list">
// //           <span className="doc-item">
// //             Aadhar <span className="checkmark">✓</span>
// //           </span>

// //           <span className="doc-item">
// //             PAN <span className="checkmark">✓</span>
// //           </span>

// //           <span className="doc-item">
// //             Degree <span className="checkmark">✓</span>
// //           </span>

// //           <span className="doc-item">
// //             Offer Letter <span className="checkmark">✓</span>
// //           </span>
// //         </div>
// //       </div>
// //     </div>

// //     {/* Action Buttons */}
// //     <div className="detail-actions">

// //       <button className="btn btn-approve" type="button">
// //         <svg
// //           className="btn-icon"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           stroke="currentColor"
// //           strokeWidth="3"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //         >
// //           <polyline points="20 6 9 17 4 12"></polyline>
// //         </svg>

// //         APPROVE & ROUTE
// //       </button>

// //       <button className="btn btn-return" type="button">
// //         <svg
// //           className="btn-icon"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           stroke="currentColor"
// //           strokeWidth="3"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //         >
// //           <line x1="18" y1="6" x2="6" y2="18"></line>
// //           <line x1="6" y1="6" x2="18" y2="18"></line>
// //         </svg>

// //         RETURN TO CLIENT
// //       </button>

// //       <button className="btn btn-request" type="button">
// //         <svg
// //           className="btn-icon"
// //           viewBox="0 0 24 24"
// //           fill="none"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //         >
// //           <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
// //         </svg>

// //         REQUEST DOCS
// //       </button>
// //     </div>
// //   </div>
// // </section>

// // {/* COLUMN 3 */}
// // <div className="dashboard-column right-column">

// //   {/* COMMENTS */}
// //   <section
// //     className="right-subcolumn comments-section"
// //     id="comments-section"
// //   >
// //     <header className="column-header">
// //       <h2>COMMENTS</h2>
// //     </header>

// //     <div className="column-content comments-content">

// //       {/* Comments List */}
// //       <div className="comments-list">

// //         <div className="comment-card">
// //           <div className="comment-avatar">A</div>

// //           <div className="comment-body">

// //             <div className="comment-meta">
// //               <span className="comment-author">Admin</span>
// //               <span className="comment-time">09:45</span>
// //             </div>

// //             <p className="comment-text">
// //               Documents incomplete — degree cert missing.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Comment Input */}
// //       <form
// //         className="comment-input-area"
// //         onSubmit={(e) => e.preventDefault()}
// //       >
// //         <input
// //           type="text"
// //           className="comment-input"
// //           placeholder="Add comment..."
// //           aria-label="Add comment"
// //         />

// //         <button
// //           type="submit"
// //           className="comment-send-btn"
// //           aria-label="Send comment"
// //         >
// //           <svg
// //             className="send-icon"
// //             viewBox="0 0 24 24"
// //             fill="none"
// //             stroke="currentColor"
// //             strokeWidth="2.5"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           >
// //             <line x1="22" y1="2" x2="11" y2="13"></line>

// //             <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
// //           </svg>
// //         </button>
// //       </form>
// //     </div>
// //   </section>
// // </div>
// //     </div>
      
// //      </div>
      
// //     </main>
// //   </section>
// // </>
// //   );
// // }
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { API_URL } from "../src/config";

// // ── Mock cases — replace with: GET /api/cases?role=pvt_qc&status=intake
// const MOCK_CASES = [
//   {
//     id:"BGV-2420", candidate:"Amit Verma",    client:"Deloitte India", submitted:"Today 10:40 AM",
//     checks:"Emp · Edu · Criminal · DB", status:"new",
//     docs:["Aadhar","PAN","Degree","Offer Letter"],
//     comments:[{ author:"Admin", avatar:"A", color:"#7c3aed", time:"09:45", text:"Documents incomplete — degree cert missing." }],
//   },
//   {
//     id:"BGV-2421", candidate:"Deepa Nair",    client:"Infosys",       submitted:"Today 11:00 AM",
//     checks:"Emp · Edu", status:"new",
//     docs:["Aadhar","PAN"],
//     comments:[],
//   },
//   {
//     id:"BGV-2422", candidate:"Kiran Rao",     client:"TCS",           submitted:"Today 09:15 AM",
//     checks:"Emp · Addr · DB", status:"incomplete",
//     docs:["Aadhar"],
//     comments:[{ author:"PVT", avatar:"P", color:"#0d9488", time:"09:20", text:"Degree certificate not uploaded." }],
//   },
//   {
//     id:"BGV-2423", candidate:"Sonal Joshi",   client:"Wipro",         submitted:"Today 10:00 AM",
//     checks:"Edu · Criminal", status:"new",
//     docs:["Aadhar","PAN","Degree"],
//     comments:[],
//   },
//   {
//     id:"BGV-2424", candidate:"Manoj Tiwari",  client:"HCL",           submitted:"Today 08:45 AM",
//     checks:"All 7 Checks", status:"review",
//     docs:["Aadhar","PAN","Degree","Offer Letter","Address Proof"],
//     comments:[{ author:"Admin", avatar:"A", color:"#7c3aed", time:"08:50", text:"Please prioritise — urgent hire." }],
//   },
//   {
//     id:"BGV-2425", candidate:"Preethi Iyer",  client:"Accenture",     submitted:"Today 08:00 AM",
//     checks:"Emp · Edu · Addr", status:"review",
//     docs:["Aadhar","PAN","Degree"],
//     comments:[],
//   },
// ];

// const BADGE_CONFIG = {
//   new:        { label:"NEW",        bg:"var(--tab-btn-color)" },
//   incomplete: { label:"INCOMPLETE", bg:"var(--alert-red)"    },
//   review:     { label:"REVIEW",     bg:"var(--yellow-color)" },
//   approved:   { label:"APPROVED",   bg:"var(--sucess-btn-color)" },
//   returned:   { label:"RETURNED",   bg:"#64748b" },
// };

// export default function Intake() {
//   const navigate = useNavigate();

//   const [cases, setCases]               = useState(MOCK_CASES);
//   const [selected, setSelected]         = useState(MOCK_CASES[0]);
//   const [comments, setComments]         = useState(MOCK_CASES[0].comments);
//   const [commentInput, setCommentInput] = useState("");
//   const [actionMsg, setActionMsg]       = useState("");
//   const commentsEndRef = useRef(null);

//   useEffect(() => {
//     commentsEndRef.current?.scrollIntoView({ behavior:"smooth" });
//   }, [comments]);

//   const selectCase = (c) => {
//     setSelected(c);
//     setComments([...c.comments]);
//     setActionMsg("");
//   };

//   const handleAction = (action) => {
//     // TODO: POST /api/cases/{id}/action { action }
//     // action: "approve" | "return" | "request_docs"
//     const statusMap = { approve:"approved", return:"returned", request_docs:"incomplete" };
//     const msgMap    = {
//       approve:      "Case approved and routed to Allocator.",
//       return:       "Case returned to client.",
//       request_docs: "Document request sent to candidate.",
//     };

//     setCases(prev => prev.map(c =>
//       c.id === selected.id ? { ...c, status: statusMap[action] } : c
//     ));
//     setSelected(prev => ({ ...prev, status: statusMap[action] }));
//     setActionMsg(msgMap[action]);
//     setTimeout(() => setActionMsg(""), 4000);
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!commentInput.trim()) return;
//     const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; }})();
//     const name = user.name || "PVT";
//     // TODO: POST /api/cases/{id}/comments { text: commentInput }
//     const newComment = {
//       author: name, avatar: name.charAt(0).toUpperCase(),
//       color:"#0d9488",
//       time: new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}),
//       text: commentInput.trim(),
//     };
//     setComments(prev => [...prev, newComment]);
//     setCases(prev => prev.map(c =>
//       c.id === selected.id ? { ...c, comments:[...c.comments, newComment] } : c
//     ));
//     setCommentInput("");
//   };

//   const counts = {
//     active:    cases.filter(c=>c.status==="new"||c.status==="review").length,
//     completed: cases.filter(c=>c.status==="approved").length,
//     pending:   cases.filter(c=>c.status==="incomplete").length,
//     clearRate: cases.length > 0
//       ? Math.round((cases.filter(c=>c.status==="approved").length / cases.length)*100)
//       : 0,
//   };

//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">

//             {/* ── Stats ── */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total"><h4>{counts.active}</h4><p>Active</p></div>
//               <div className="card-inner-dash bdr-com"><h4>{counts.completed}</h4><p>Approved</p></div>
//               <div className="card-inner-dash bdr-progress"><h4>{counts.pending}</h4><p>Incomplete</p></div>
//               <div className="card-inner-dash bdr-rate"><h4>{counts.clearRate}%</h4><p>Clear Rate</p></div>
//             </div>

//             {/* ── 3-column intake layout ── */}
//             <div className="intake-wrp">

//               {/* ── COL 1: Queue ── */}
//               <section className="dashboard-column queue-column" id="queue-section">
//                 <header className="column-header"><h2>NEW CASES QUEUE</h2></header>
//                 <div className="column-content scrollable-content" style={{ padding:"12px" }}>
//                   {cases.map(c => {
//                     const badge = BADGE_CONFIG[c.status] || BADGE_CONFIG.new;
//                     const isSelected = selected?.id === c.id;
//                     return (
//                       <article key={c.id}
//                         className={`case-card ${isSelected ? "active" : ""}`}
//                         onClick={() => selectCase(c)}
//                         style={{ marginBottom:"10px", cursor:"pointer" }}>
//                         <div className="case-card-info">
//                           <h3 className="case-id">{c.id}</h3>
//                           <p className="case-candidate">{c.candidate}</p>
//                         </div>
//                         <span className="badge" style={{ background: badge.bg }}>{badge.label}</span>
//                       </article>
//                     );
//                   })}
//                 </div>
//               </section>

//               {/* ── COL 2: Case Detail ── */}
//               <section className="dashboard-column detail-column" id="detail-section">
//                 <header className="column-header">
//                   <h2>CASE DETAIL — {selected?.id} | {selected?.candidate}</h2>
//                 </header>
//                 {selected && (
//                   <div className="column-content detail-content">
//                     <div className="detail-fields-group">
//                       <div className="detail-field">
//                         <span className="field-label">Candidate</span>
//                         <span className="field-value">{selected.candidate}</span>
//                       </div>
//                       <div className="detail-field">
//                         <span className="field-label">Client</span>
//                         <span className="field-value">{selected.client}</span>
//                       </div>
//                       <div className="detail-field">
//                         <span className="field-label">Submitted</span>
//                         <span className="field-value">{selected.submitted}</span>
//                       </div>
//                       <div className="detail-field">
//                         <span className="field-label">Check Types</span>
//                         <span className="field-value check-types">{selected.checks}</span>
//                       </div>
//                       <div className="detail-field documents-field">
//                         <span className="field-label">Documents</span>
//                         <div className="documents-list">
//                           {selected.docs.map((d,i) => (
//                             <span key={i} className="doc-item">
//                               {d} <span className="checkmark">✓</span>
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {actionMsg && (
//                       <div style={{ background:"#f0fdf4", border:"1px solid #86efac", borderRadius:"8px",
//                         padding:"10px 14px", fontSize:"13px", fontWeight:600, color:"#16a34a", margin:"12px 0 0" }}>
//                         ✓ {actionMsg}
//                       </div>
//                     )}

//                     <div className="detail-actions">
//                       <button className="btn btn-approve" onClick={() => handleAction("approve")}>
//                         <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                           <polyline points="20 6 9 17 4 12"/>
//                         </svg>
//                         APPROVE & ROUTE
//                       </button>
//                       <button className="btn btn-return" onClick={() => handleAction("return")}>
//                         <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                           <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
//                         </svg>
//                         RETURN TO CLIENT
//                       </button>
//                       <button className="btn btn-request" onClick={() => handleAction("request_docs")}>
//                         <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                           <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
//                         </svg>
//                         REQUEST DOCS
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </section>

//               {/* ── COL 3: Comments ── */}
//               <div className="dashboard-column right-column">
//                 <section className="right-subcolumn comments-section" id="comments-section"
//                   style={{ height:"100%" }}>
//                   <header className="column-header"><h2>COMMENTS</h2></header>
//                   <div className="column-content comments-content">
//                     <div className="comments-list" style={{ flex:1, overflowY:"auto", maxHeight:"340px" }}>
//                       {comments.length === 0 && (
//                         <p style={{ color:"#94a3b8", fontSize:"13px", textAlign:"center", padding:"16px" }}>
//                           No comments yet.
//                         </p>
//                       )}
//                       {comments.map((cm,i) => (
//                         <div key={i} className="comment-card">
//                           <div className="comment-avatar" style={{ background: cm.color }}>{cm.avatar}</div>
//                           <div className="comment-body">
//                             <div className="comment-meta">
//                               <span className="comment-author">{cm.author}</span>
//                               <span className="comment-time">{cm.time}</span>
//                             </div>
//                             <p className="comment-text">{cm.text}</p>
//                           </div>
//                         </div>
//                       ))}
//                       <div ref={commentsEndRef} />
//                     </div>

//                     <form className="comment-input-area" onSubmit={handleComment} style={{ marginTop:"auto" }}>
//                       <input type="text" className="comment-input" placeholder="Add comment..."
//                         value={commentInput} onChange={e => setCommentInput(e.target.value)}
//                         aria-label="Add comment" />
//                       <button type="submit" className="comment-send-btn" aria-label="Send comment">
//                         <svg className="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                           <line x1="22" y1="2" x2="11" y2="13"/>
//                           <polygon points="22 2 15 22 11 13 2 9 22 2"/>
//                         </svg>
//                       </button>
//                     </form>
//                   </div>
//                 </section>
//               </div>

//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// }
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CaseTrendsChart from "./CaseTrendsChart";
import { API_URL } from "../src/config";

// ── Standard date filters (per spec: today / this month / custom) ──────────
const DATE_FILTERS = [
  { key: "today",  label: "Today"      },
  { key: "month",  label: "This Month" },
  { key: "custom", label: "Custom"     },
  { key: "all",    label: "All Time"   },
];

const BADGE_CONFIG = {
  pending:     { label: "NEW",      bg: "var(--tab-btn-color)"    },
  "on-hold":   { label: "INCOMPLETE", bg: "var(--alert-red)"      },
  "qc-review": { label: "REVIEW",   bg: "var(--yellow-color)"     },
  "in-progress": { label: "APPROVED", bg: "var(--sucess-btn-color)" },
  completed:   { label: "APPROVED", bg: "var(--sucess-btn-color)" },
};

function getTabFromURL(search) {
  const tab = new URLSearchParams(search).get("tab") || "";
  return ["active", "approved", "incomplete", "clear-rate"].includes(tab) ? tab : "active";
}

function getChecksArray(c) {
  if (Array.isArray(c.checks)) return c.checks;
  if (typeof c.checks === "string") return c.checks.split(/[·,]/).map(x => x.trim()).filter(Boolean);
  return [];
}

// Real uploaded documents live nested per-check in check_details (see
// CheckDetailForm.jsx), not as a flat list on the case. Flatten them here so
// QC can see everything the candidate/client has uploaded across all checks,
// with the actual download URL the upload endpoint returned.
function flattenDocuments(c) {
  const details = c.check_details || {};
  const out = [];
  Object.entries(details).forEach(([checkKey, detail]) => {
    const docs = detail?.documents || {};
    Object.entries(docs).forEach(([docKey, doc]) => {
      if (doc?.url) out.push({ checkKey, docKey, name: doc.name || docKey, url: doc.url });
    });
  });
  return out;
}

export default function Intake() {
  const navigate = useNavigate();
  const location = useLocation();

  const [cases, setCases]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState("");

  const [selected, setSelected]         = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments]         = useState({}); // case_id -> [comment,...] — local only, see note below
  const [actionMsg, setActionMsg]       = useState("");
  const [actionWarning, setActionWarning] = useState("");
  const commentsEndRef = useRef(null);

  const [dateFilter, setDateFilter] = useState("month");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo]     = useState("");

  const tab = getTabFromURL(location.search);
  const token = localStorage.getItem("token");

  const fetchCases = () => {
    setLoading(true);
    setError("");
    fetch(`${API_URL}/api/cases`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then(async (r) => {
        if (r.status === 401 || r.status === 403) {
          throw new Error("Your account doesn't have access to the case list.");
        }
        if (!r.ok) throw new Error("Failed to load cases.");
        return r.json();
      })
      .then(data => setCases(data.cases || []))
      .catch(err => setError(err.message || "Failed to load cases."))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchCases(); }, []);

  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selected, comments]);

  // ── Date range filter ───────────────────────────────────────────────────
  const isInRange = (createdAt) => {
    if (!createdAt) return true;
    if (dateFilter === "all") return true;
    const d   = new Date(createdAt);
    const now = new Date();
    if (dateFilter === "today") return d.toDateString() === now.toDateString();
    if (dateFilter === "month") return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
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

  const dateCases = cases.filter(c => isInRange(c.created_at));

  // ── The four buckets QC cares about ─────────────────────────────────────
  // pending      = submitted by client, awaiting QC review (the "queue")
  // in-progress / qc-review / completed = QC has approved and forwarded it on
  // on-hold      = QC returned it / flagged as incomplete
  const queueCases      = dateCases.filter(c => c.status === "pending");
  const approvedCases   = dateCases.filter(c => ["in-progress", "qc-review", "completed"].includes(c.status));
  const incompleteCases = dateCases.filter(c => c.status === "on-hold");
  const clearRate        = dateCases.length > 0 ? Math.round((approvedCases.length / dateCases.length) * 100) : 0;

  const counts = {
    active:     queueCases.length,
    approved:   approvedCases.length,
    incomplete: incompleteCases.length,
    clearRate,
  };

  // Which list backs the 3-column board depends on the tab.
  const boardList = tab === "incomplete" ? incompleteCases : queueCases;

  useEffect(() => {
    // Keep `selected` valid whenever the tab, filters, or data change.
    if (tab === "approved" || tab === "clear-rate") { setSelected(null); return; }
    if (!selected || !boardList.find(c => c.case_id === selected.case_id)) {
      setSelected(boardList[0] || null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, cases, dateFilter, customFrom, customTo]);

  const selectCase = (c) => {
    setSelected(c);
    setActionMsg("");
    setActionWarning("");
  };

  // ── Approve / Return / Request Docs ─────────────────────────────────────
  // Confirmed: PATCH /api/cases/{caseId}/status, body {status: "pending"|"in-progress"|"qc-review"|"completed"|"on-hold"}.
  // Note: this route has no role restriction in api.php, so any authenticated
  // user can currently call it — worth tightening server-side to pvt_qc/admin
  // if that matters for your access model.
  const handleAction = async (action) => {
    if (!selected) return;
    const statusMap = { approve: "in-progress", return: "on-hold", request_docs: selected.status };
    const msgMap = {
      approve:      "Case approved and forwarded to Allocator / Verifiers.",
      return:       "Case returned to client.",
      request_docs: "Document request noted (candidate notification not yet wired up).",
    };
    const nextStatus = statusMap[action];
    setActionWarning("");

    if (action !== "request_docs") {
      try {
        const res = await fetch(`${API_URL}/api/cases/${selected.case_id}/status`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: nextStatus }),
        });
        if (!res.ok) {
          setActionWarning("Status update failed — this change is local only and won't survive a refresh.");
        }
      } catch {
        setActionWarning("Couldn't reach the server — this change is local only and won't survive a refresh.");
      }
    }

    setCases(prev => prev.map(c => c.case_id === selected.case_id ? { ...c, status: nextStatus } : c));
    setSelected(prev => prev ? { ...prev, status: nextStatus } : prev);
    setActionMsg(msgMap[action]);
    setTimeout(() => setActionMsg(""), 4000);
  };

  // ── Comments — local only, same limitation as Client.jsx's Comments tab.
  // TODO: POST /api/cases/{id}/comments once that endpoint exists.
  const handleComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim() || !selected) return;
    const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();
    const name = user.name || "PVT/QC";
    const newComment = {
      author: name, avatar: name.charAt(0).toUpperCase(), color: "#0d9488",
      time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      text: commentInput.trim(),
    };
    setComments(prev => ({ ...prev, [selected.case_id]: [...(prev[selected.case_id] || []), newComment] }));
    setCommentInput("");
  };

  const selectedComments = selected ? (comments[selected.case_id] || []) : [];
  const selectedDocs      = selected ? flattenDocuments(selected) : [];

  const setTab = (next) => navigate(`/Intake?tab=${next}`, { replace: true });

  // ── Shared read-only table for the Approved tab ──────────────────────────
  const ApprovedTable = () => (
    <div className="down-table">
      {loading ? (
        <p style={{ padding: "24px", color: "#888", fontSize: "14px" }}>Loading cases...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Case ID</th><th>Candidate</th><th>Client</th><th>Checks</th><th>Status</th><th>Approved / Forwarded</th>
            </tr>
          </thead>
          <tbody>
            {approvedCases.length === 0 ? (
              <tr><td colSpan={6} style={{ textAlign: "center", padding: "32px", color: "#94a3b8" }}>No approved cases in this range.</td></tr>
            ) : (
              approvedCases.map(c => (
                <tr key={c.case_id}>
                  <td style={{ fontWeight: 700, color: "#2b3b8c" }}>{c.case_id}</td>
                  <td>{c.candidate || c.candidate_name || "—"}</td>
                  <td>{c.client || c.client_name || "—"}</td>
                  <td style={{ fontSize: "12px", color: "#475569" }}>{getChecksArray(c).join(", ") || "—"}</td>
                  <td><span className={`status ${c.status}`}>{c.status}</span></td>
                  <td style={{ fontSize: "12px", color: "#94a3b8" }}>Now visible on the Allocator board</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );

  // ── Clear Rate tab — analytics view, not a case list ────────────────────
  const ClearRateView = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <CaseTrendsChart
        casesData={dateCases}
        label={DATE_FILTERS.find(d => d.key === dateFilter)?.label}
        vsText={`${clearRate}% clear rate — ${approvedCases.length} of ${dateCases.length} cases`}
        vsColor={approvedCases.length > 0 ? "#14d8a7" : "#94a3b8"}
        dateFilter={dateFilter} customFrom={customFrom} customTo={customTo}
      />
      <div className="cards-head-dash">
        <div className="card-inner-dash bdr-total"><h4>{counts.active}</h4><p>Awaiting QC</p></div>
        <div className="card-inner-dash bdr-com"><h4>{counts.approved}</h4><p>Approved</p></div>
        <div className="card-inner-dash bdr-progress"><h4>{counts.incomplete}</h4><p>Incomplete</p></div>
        <div className="card-inner-dash bdr-rate"><h4>{clearRate}%</h4><p>Clear Rate</p></div>
      </div>
    </div>
  );

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* ── Tabs — mirrors the sidebar's Active/Approved/Incomplete/Clear Rate links ── */}
            <div className="dash-upper-head">
              <div className="left">
                <button className={`tab-cta ${tab === "active" ? "active" : ""}`} onClick={() => setTab("active")}>
                  Active
                  <span style={{ marginLeft: "5px", background: "rgba(0,0,0,.08)", borderRadius: "10px", padding: "1px 6px", fontSize: "12px" }}>{counts.active}</span>
                </button>
                <button className={`tab-cta ${tab === "approved" ? "active" : ""}`} onClick={() => setTab("approved")}>
                  Approved
                  <span style={{ marginLeft: "5px", background: "rgba(0,0,0,.08)", borderRadius: "10px", padding: "1px 6px", fontSize: "12px" }}>{counts.approved}</span>
                </button>
                <button className={`tab-cta ${tab === "incomplete" ? "active" : ""}`} onClick={() => setTab("incomplete")}>
                  Incomplete
                  <span style={{ marginLeft: "5px", background: "rgba(0,0,0,.08)", borderRadius: "10px", padding: "1px 6px", fontSize: "12px" }}>{counts.incomplete}</span>
                </button>
                <button className={`tab-cta ${tab === "clear-rate" ? "active" : ""}`} onClick={() => setTab("clear-rate")}>
                  Clear Rate
                  <span style={{ marginLeft: "5px", background: "rgba(0,0,0,.08)", borderRadius: "10px", padding: "1px 6px", fontSize: "12px" }}>{clearRate}%</span>
                </button>
              </div>
            </div>

            {/* ── Date filters ── */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              {DATE_FILTERS.map(df => (
                <button key={df.key} className={`tab-cta ${dateFilter === df.key ? "active" : ""}`}
                  onClick={() => setDateFilter(df.key)}>
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

            {/* ── Stats — same 4 numbers regardless of tab, driven by the date range ── */}
            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total"><h4>{loading ? "—" : counts.active}</h4><p>Active</p></div>
              <div className="card-inner-dash bdr-com"><h4>{loading ? "—" : counts.approved}</h4><p>Approved</p></div>
              <div className="card-inner-dash bdr-progress"><h4>{loading ? "—" : counts.incomplete}</h4><p>Incomplete</p></div>
              <div className="card-inner-dash bdr-rate"><h4>{loading ? "—" : `${clearRate}%`}</h4><p>Clear Rate</p></div>
            </div>

            {error && (
              <div style={{ padding: "12px 16px", background: "#fff5f5", border: "1px solid #fca5a5",
                borderRadius: "8px", color: "#dc2626", fontSize: "14px" }}>
                {error}
              </div>
            )}

            {/* ── Tab content ── */}
            {tab === "approved" ? (
              <ApprovedTable />
            ) : tab === "clear-rate" ? (
              <ClearRateView />
            ) : (
              <div className="intake-wrp">

                {/* ── COL 1: Queue ── */}
                <section className="dashboard-column queue-column" id="queue-section">
                  <header className="column-header">
                    <h2>{tab === "incomplete" ? "INCOMPLETE CASES" : "NEW CASES QUEUE"}</h2>
                  </header>
                  <div className="column-content scrollable-content" style={{ padding: "12px" }}>
                    {loading ? (
                      <p style={{ color: "#94a3b8", fontSize: "13px" }}>Loading…</p>
                    ) : boardList.length === 0 ? (
                      <p style={{ color: "#94a3b8", fontSize: "13px", padding: "8px 4px" }}>Nothing here right now.</p>
                    ) : (
                      boardList.map(c => {
                        const badge = BADGE_CONFIG[c.status] || BADGE_CONFIG.pending;
                        const isSelected = selected?.case_id === c.case_id;
                        return (
                          <article key={c.case_id}
                            className={`case-card ${isSelected ? "active" : ""}`}
                            onClick={() => selectCase(c)}
                            style={{ marginBottom: "10px", cursor: "pointer" }}>
                            <div className="case-card-info">
                              <h3 className="case-id">{c.case_id}</h3>
                              <p className="case-candidate">{c.candidate || c.candidate_name || "—"}</p>
                            </div>
                            <span className="badge" style={{ background: badge.bg }}>{badge.label}</span>
                          </article>
                        );
                      })
                    )}
                  </div>
                </section>

                {/* ── COL 2: Case Detail ── */}
                <section className="dashboard-column detail-column" id="detail-section">
                  <header className="column-header">
                    <h2>{selected ? `CASE DETAIL — ${selected.case_id} | ${selected.candidate || selected.candidate_name || "—"}` : "CASE DETAIL"}</h2>
                  </header>
                  {!selected ? (
                    <div style={{ padding: "40px", textAlign: "center", color: "#94a3b8", fontSize: "14px" }}>
                      Select a case from the queue.
                    </div>
                  ) : (
                    <div className="column-content detail-content">
                      <div className="detail-fields-group">
                        <div className="detail-field">
                          <span className="field-label">Candidate</span>
                          <span className="field-value">{selected.candidate || selected.candidate_name || "—"}</span>
                        </div>
                        <div className="detail-field">
                          <span className="field-label">Client</span>
                          <span className="field-value">{selected.client || selected.client_name || "—"}</span>
                        </div>
                        <div className="detail-field">
                          <span className="field-label">Submitted</span>
                          <span className="field-value">
                            {selected.created_at ? new Date(selected.created_at).toLocaleString("en-IN") : "—"}
                          </span>
                        </div>
                        <div className="detail-field">
                          <span className="field-label">Check Types</span>
                          <span className="field-value check-types">{getChecksArray(selected).join(" · ") || "—"}</span>
                        </div>
                        <div className="detail-field documents-field">
                          <span className="field-label">Documents</span>
                          <div className="documents-list">
                            {selectedDocs.length === 0 ? (
                              <span style={{ fontSize: "12px", color: "#94a3b8" }}>No documents uploaded yet.</span>
                            ) : (
                              selectedDocs.map((d, i) => (
                                <a key={i} className="doc-item" href={d.url} target="_blank" rel="noreferrer"
                                  style={{ textDecoration: "none", cursor: "pointer" }}>
                                  {d.name} <span className="checkmark">⬇</span>
                                </a>
                              ))
                            )}
                          </div>
                        </div>
                      </div>

                      {actionMsg && (
                        <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px",
                          padding: "10px 14px", fontSize: "13px", fontWeight: 600, color: "#16a34a", margin: "12px 0 0" }}>
                          ✓ {actionMsg}
                        </div>
                      )}
                      {actionWarning && (
                        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "8px",
                          padding: "10px 14px", fontSize: "13px", fontWeight: 600, color: "#a16207", margin: "8px 0 0" }}>
                          ⚠ {actionWarning}
                        </div>
                      )}

                      <div className="detail-actions">
                        <button className="btn btn-approve" onClick={() => handleAction("approve")}>
                          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          APPROVE & ROUTE
                        </button>
                        <button className="btn btn-return" onClick={() => handleAction("return")}>
                          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                          RETURN TO CLIENT
                        </button>
                        <button className="btn btn-request" onClick={() => handleAction("request_docs")}>
                          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                          </svg>
                          REQUEST DOCS
                        </button>
                      </div>
                    </div>
                  )}
                </section>

                {/* ── COL 3: Comments ── */}
                <div className="dashboard-column right-column">
                  <section className="right-subcolumn comments-section" id="comments-section" style={{ height: "100%" }}>
                    <header className="column-header"><h2>COMMENTS</h2></header>
                    <div className="column-content comments-content">
                      <div className="comments-list" style={{ flex: 1, overflowY: "auto", maxHeight: "340px" }}>
                        {!selected ? (
                          <p style={{ color: "#94a3b8", fontSize: "13px", textAlign: "center", padding: "16px" }}>
                            Select a case to see comments.
                          </p>
                        ) : selectedComments.length === 0 ? (
                          <p style={{ color: "#94a3b8", fontSize: "13px", textAlign: "center", padding: "16px" }}>
                            No comments yet.
                          </p>
                        ) : (
                          selectedComments.map((cm, i) => (
                            <div key={i} className="comment-card">
                              <div className="comment-avatar" style={{ background: cm.color }}>{cm.avatar}</div>
                              <div className="comment-body">
                                <div className="comment-meta">
                                  <span className="comment-author">{cm.author}</span>
                                  <span className="comment-time">{cm.time}</span>
                                </div>
                                <p className="comment-text">{cm.text}</p>
                              </div>
                            </div>
                          ))
                        )}
                        <div ref={commentsEndRef} />
                      </div>

                      <form className="comment-input-area" onSubmit={handleComment} style={{ marginTop: "auto" }}>
                        <input type="text" className="comment-input" placeholder="Add comment..."
                          value={commentInput} onChange={e => setCommentInput(e.target.value)}
                          disabled={!selected} aria-label="Add comment" />
                        <button type="submit" className="comment-send-btn" aria-label="Send comment" disabled={!selected}>
                          <svg className="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </section>
                </div>

              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
}