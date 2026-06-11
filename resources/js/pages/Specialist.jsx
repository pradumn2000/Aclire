// import { useNavigate } from "react-router-dom";


// export default function Client() {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };


//   return (
//     <>
 

//   {/* CONTENT */}
//   <section id="noSidebar">
//     {/* NAVBAR */}
//     <nav>
//       <div className="nav-toggle">
//         <div className="bx bx-menu">
//           <img src="images/inner-pages/client-portal-icon.svg" alt="" />
//         </div>
//       </div>
      
//       <div className="head-src">
//         <h3>SPECIALIST — Report Writing  · QC  · Dispatch · Comments · Export</h3>
//       </div>
      
//       <button type="button" className="primary-cta">Specialist Role</button>
//     </nav>


//     {/* MAIN */}
//     <main>

//      <div className="dash-wrper">


//           <div className="dash-upper-head">
//           <div className="left"> 
//           <button className="tab-cta">Today</button>
//           <button className="tab-cta">This Week</button>
//           <button className="tab-cta">This Month</button>
//           <button className="tab-cta active">Custom</button>
//           </div>
//           <div className="right">
//           <button className="date-wrapper"><img src="/images/dashboard/calendar-icon.svg"></img><input
//         type="text"
//         name="daterange"
//         className="selectedDate"
//         placeholder="Select Date"
//         readOnly
//       /></button>
//           <button className="primary-cta export"><img src="images/dashboard/export-icon.svg" alt="" /> Export CSV</button>
//           <button className="secondary-cta import"><img src="images/dashboard/export-excel.svg" alt="" />Export Excel</button>
//           </div>
//           </div>


//       {/* DASHBOARD Inner body */}

    
// <div className="cre-dashboard-container">
//     <div className="cre-dashboard-wrapper">
        
//         {/* LEFT COLUMN: CHECK RESULTS */}
//         <section className="cre-left-panel">
//             <header className="cre-panel-header">
//                 <h2>CHECK RESULTS</h2>
//             </header>

//             <div className="cre-check-list">

//                 <div
//                     className="cre-check-row"
//                     style={{ "--accent-border-color": "#10b981" }}
//                 >
//                     <span className="cre-check-label">Employment</span>
//                     <button className="cre-status-pill cre-pill-clear">
//                         Clear
//                     </button>
//                 </div>

//                 <div
//                     className="cre-check-row"
//                     style={{ "--accent-border-color": "#eb4d4b" }}
//                 >
//                     <span className="cre-check-label">Education</span>
//                     <button className="cre-status-pill cre-pill-discrepancy">
//                         Discrepancy
//                     </button>
//                 </div>

//                 <div
//                     className="cre-check-row"
//                     style={{ "--accent-border-color": "#10b981" }}
//                 >
//                     <span className="cre-check-label">Address</span>
//                     <button className="cre-status-pill cre-pill-clear">
//                         Clear
//                     </button>
//                 </div>

//                 <div
//                     className="cre-check-row"
//                     style={{ "--accent-border-color": "#10b981" }}
//                 >
//                     <span className="cre-check-label">Database</span>
//                     <button className="cre-status-pill cre-pill-clear">
//                         Clear
//                     </button>
//                 </div>

//                 <div
//                     className="cre-check-row"
//                     style={{ "--accent-border-color": "#ffa502" }}
//                 >
//                     <span className="cre-check-label">Criminal</span>
//                     <button className="cre-status-pill cre-pill-pending">
//                         Pending
//                     </button>
//                 </div>

//                 <div
//                     className="cre-check-row"
//                     style={{ "--accent-border-color": "#10b981" }}
//                 >
//                     <span className="cre-check-label">Drug Test</span>
//                     <button className="cre-status-pill cre-pill-clear">
//                         Clear
//                     </button>
//                 </div>

//                 <div
//                     className="cre-check-row"
//                     style={{ "--accent-border-color": "#94a3b8" }}
//                 >
//                     <span className="cre-check-label">Courtroom</span>
//                     <button className="cre-status-pill cre-pill-na">
//                         N/A
//                     </button>
//                 </div>

//             </div>

//             {/* Bottom discrepancy banner */}
//             <div className="cre-alert-banner">
//                 <i className="fa-solid fa-triangle-exclamation"></i>
//                 <span>DISCREPANCY FOUND — Education</span>
//             </div>
//         </section>

//         {/* MIDDLE COLUMN: REPORT EDITOR */}
//         <section className="cre-middle-panel">
//             <header className="cre-panel-header">
//                 <h2>
//                     REPORT EDITOR — BGV-2403 &nbsp;|&nbsp; Suresh Pillai
//                 </h2>
//             </header>

//             <div className="cre-editor-content">

//                 {/* Executive Summary */}
//                 <div
//                     className="cre-editor-card"
//                     style={{
//                         "--card-theme-color": "#2b3b8c",
//                         "--card-header-bg": "rgba(43, 59, 140, 0.05)"
//                     }}
//                 >
//                     <div className="cre-card-header">
//                         <h3>Executive Summary</h3>
//                     </div>

//                     <div className="cre-card-body">
//                         <p>
//                             Verification completed for 6/7 checks. One
//                             discrepancy in Education — degree year mismatch
//                             (claimed 2018, found 2019).
//                         </p>
//                     </div>
//                 </div>

//                 {/* Employment Verification */}
//                 <div
//                     className="cre-editor-card"
//                     style={{
//                         "--card-theme-color": "#2b3b8c",
//                         "--card-header-bg": "rgba(43, 59, 140, 0.05)"
//                     }}
//                 >
//                     <div className="cre-card-header">
//                         <h3>Employment Verification</h3>
//                     </div>

//                     <div className="cre-card-body">
//                         <p>
//                             Verified with Wipro HR. Period, designation,
//                             exit reason confirmed. Source:
//                             hr.verify@wipro.com | Response: Phone 02/05.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Education Discrepancy */}
//                 <div
//                     className="cre-editor-card"
//                     style={{
//                         "--card-theme-color": "#e67e22",
//                         "--card-header-bg": "rgba(230, 126, 34, 0.07)",
//                         "--card-border-color": "rgba(230, 126, 34, 0.3)"
//                     }}
//                 >
//                     <div className="cre-card-header">
//                         <h3>
//                             Education Discrepancy{" "}
//                             <i className="fa-solid fa-triangle-exclamation"></i>
//                         </h3>
//                     </div>

//                     <div className="cre-card-body">
//                         <p>
//                             Candidate claimed 2018 graduation. Institution
//                             records show 2019. Flagged for client decision
//                             before final report.
//                         </p>
//                     </div>
//                 </div>

//             </div>

//             {/* Footer buttons */}
//             <footer className="cre-editor-footer">
//                 <button className="cre-btn cre-btn-success">
//                     SUBMIT FOR QC
//                 </button>

//                 <button className="cre-btn cre-btn-purple">
//                     SAVE DRAFT
//                 </button>

//                 <button className="cre-btn cre-btn-navy">
//                     DISPATCH TO CLIENT
//                 </button>
//             </footer>
//         </section>

//         {/* RIGHT COLUMN: COMMENTS & QC NOTES */}
//         <section className="cre-right-panel">
//             <header className="cre-panel-header">
//                 <h2>COMMENTS & QC NOTES</h2>
//             </header>

//             <div className="cre-comments-content">

//                 {/* Comment 1 */}
//                 <div className="cre-comment-card">
//                     <div className="cre-avatar cre-avatar-purple">Q</div>

//                     <div className="cre-comment-details">
//                         <div className="cre-comment-meta">
//                             <span className="cre-comment-author">
//                                 QC Lead
//                             </span>

//                             <span className="cre-comment-time">
//                                 11:30
//                             </span>
//                         </div>

//                         <p className="cre-comment-text">
//                             Education discrepancy must be flagged prominently.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Comment 2 */}
//                 <div className="cre-comment-card">
//                     <div className="cre-avatar cre-avatar-teal">S</div>

//                     <div className="cre-comment-details">
//                         <div className="cre-comment-meta">
//                             <span className="cre-comment-author">
//                                 Specialist
//                             </span>

//                             <span className="cre-comment-time">
//                                 11:15
//                             </span>
//                         </div>

//                         <p className="cre-comment-text">
//                             Section 3 updated with institution proof attached.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Comment 3 */}
//                 <div className="cre-comment-card">
//                     <div className="cre-avatar cre-avatar-purple">Q</div>

//                     <div className="cre-comment-details">
//                         <div className="cre-comment-meta">
//                             <span className="cre-comment-author">
//                                 QC Lead
//                             </span>

//                             <span className="cre-comment-time">
//                                 10:50
//                             </span>
//                         </div>

//                         <p className="cre-comment-text">
//                             Confirm if client wants to proceed despite discrepancy.
//                         </p>
//                     </div>
//                 </div>

//             </div>

//             {/* Input */}
//             <div className="cre-notes-input-wrapper">
//                 <input
//                     type="text"
//                     className="cre-note-input"
//                     placeholder="Add note..."
//                 />

//                 <button className="cre-btn-send">
//                     <i className="fa-solid fa-paper-plane"></i>
//                 </button>
//             </div>

//             {/* Stats */}
//             <div className="cre-monthly-banner">
//                 Reports This Month: 42
//             </div>

//             {/* Export Buttons */}
//             <footer className="cre-right-footer">
//                 <button className="cre-btn cre-btn-success">
//                     Export CSV
//                 </button>

//                 <button className="cre-btn cre-btn-navy">
//                     Export Excel
//                 </button>
//             </footer>
//         </section>

//     </div>
// </div>
      
//      </div>
      
//     </main>
//   </section>
// </>
//   );
// }
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { API_URL } from "../src/config";

// ── Mock cases — replace with: GET /api/cases?role=report_writing
const MOCK_CASES = [
  {
    id:"BGV-2401", candidate:"Ravi Kumar",    position:"Senior Engineer", client:"Infosys",
    checks:{ Employment:"clear", Education:"in_progress", Criminal:"pending" },
    progress:60, status:"active",
    sections:[
      { title:"Executive Summary",        content:"Verification in progress. Employment check completed. Education ongoing." },
      { title:"Employment Verification",  content:"Verified with Infosys HR. Period, designation, and exit reason confirmed. Source: hr@infosys.com | Response: Email 01/06." },
    ],
    comments:[
      { author:"QC Lead", avatar:"Q", color:"#7c3aed", time:"10:50 AM", text:"Please ensure employment section references the email date." },
    ],
  },
  {
    id:"BGV-2403", candidate:"Suresh Pillai", position:"Finance Lead", client:"Wipro",
    checks:{ Education:"discrepancy", Database:"clear" },
    progress:100, status:"discrepancy",
    sections:[
      { title:"Executive Summary",        content:"Verification completed for 1/2 checks. One discrepancy in Education — degree year mismatch (claimed 2018, found 2019)." },
      { title:"Education Discrepancy ⚠",  content:"Candidate claimed 2018 graduation. Institution records show 2019. Flagged for client decision before final report." },
      { title:"Database Check",           content:"CIBIL and criminal database clear. No adverse records found." },
    ],
    comments:[
      { author:"QC Lead",    avatar:"Q", color:"#7c3aed",  time:"11:30 AM", text:"Education discrepancy must be flagged prominently." },
      { author:"Specialist", avatar:"S", color:"#0d9488",  time:"11:15 AM", text:"Section updated with institution proof attached." },
    ],
  },
  {
    id:"BGV-2402", candidate:"Anjali Mehta",  position:"Product Manager", client:"TCS",
    checks:{ Employment:"clear", Education:"clear", Address:"clear", Database:"clear", Criminal:"in_progress", "Drug Test":"pending", Courtroom:"na" },
    progress:85, status:"active",
    sections:[
      { title:"Executive Summary",        content:"6 of 7 checks done. Criminal verification ongoing." },
      { title:"Employment Verification",  content:"Confirmed with TCS HR. All details match." },
      { title:"Education Verification",   content:"Mumbai University records confirmed. Degree details match." },
    ],
    comments:[
      { author:"Client", avatar:"C", color:"#2b3b8c", time:"9:45 AM", text:"Please expedite criminal check." },
    ],
  },
];

const CHECK_STATUS_CONFIG = {
  clear:       { label:"Clear",        color:"#10b981" },
  in_progress: { label:"In Progress",  color:"#2b3b8c" },
  pending:     { label:"Pending",      color:"#f59e0b" },
  discrepancy: { label:"Discrepancy",  color:"#eb4d4b" },
  na:          { label:"N/A",          color:"#94a3b8" },
};

export default function Specialist() {
  const navigate = useNavigate();

  const [cases, setCases]               = useState(MOCK_CASES);
  const [selectedCase, setSelectedCase] = useState(MOCK_CASES[0]);
  const [sections, setSections]         = useState(MOCK_CASES[0].sections);
  const [comments, setComments]         = useState(MOCK_CASES[0].comments);
  const [commentInput, setCommentInput] = useState("");
  const [saveStatus, setSaveStatus]     = useState(""); // "draft"|"submitted"|"dispatched"|""
  const [search, setSearch]             = useState("");
  const commentsEndRef = useRef(null);

  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior:"smooth" });
  }, [comments]);

  const selectCase = (c) => {
    setSelectedCase(c);
    setSections([...c.sections.map(s => ({ ...s }))]);
    setComments([...c.comments]);
    setSaveStatus("");
  };

  const updateSection = (idx, newContent) => {
    setSections(prev => prev.map((s,i) => i===idx ? { ...s, content:newContent } : s));
  };

  const handleDraft = () => {
    // TODO: POST /api/cases/{id}/report/draft { sections }
    setSaveStatus("draft");
  };

  const handleSubmitQC = () => {
    // TODO: POST /api/cases/{id}/report/submit-qc { sections }
    setSaveStatus("submitted");
  };

  const handleDispatch = () => {
    // TODO: POST /api/cases/{id}/report/dispatch { sections }
    setSaveStatus("dispatched");
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; }})();
    const name = user.name || "Specialist";
    // TODO: POST /api/cases/{id}/comments { text: commentInput }
    setComments(prev => [...prev, {
      author: name, avatar: name.charAt(0).toUpperCase(),
      color: "#0d9488",
      time: new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}),
      text: commentInput.trim(),
    }]);
    setCommentInput("");
  };

  const filtered = cases.filter(c =>
    c.id.toLowerCase().includes(search.toLowerCase()) ||
    c.candidate.toLowerCase().includes(search.toLowerCase())
  );

  const reportsThisMonth = 42; // TODO: from API

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
                <h4>{cases.filter(c=>c.status==="active").length}</h4><p>Active</p>
              </div>
              <div className="card-inner-dash bdr-progress">
                <h4>{cases.filter(c=>c.status==="discrepancy").length}</h4><p>Discrepancy</p>
              </div>
              <div className="card-inner-dash bdr-com">
                <h4>{reportsThisMonth}</h4><p>Reports This Month</p>
              </div>
              <div className="card-inner-dash bdr-rate">
                <h4>{cases.length > 0 ? Math.round((cases.filter(c=>c.status==="completed").length/cases.length)*100) : 0}%</h4>
                <p>Clear Rate</p>
              </div>
            </div>

            {/* ── Search + export bar ── */}
            <div className="dash-upper-head">
              <div className="left">
                <div style={{ position:"relative", display:"flex", alignItems:"center" }}>
                  <input type="text" placeholder="Search case or candidate..."
                    value={search} onChange={e => setSearch(e.target.value)}
                    style={{ height:"42px", padding:"0 12px 0 36px", border:"1.5px solid #e2e8f0",
                      borderRadius:"8px", fontSize:"13px", minWidth:"220px", outline:"none" }} />
                  <span style={{ position:"absolute", left:"10px", color:"#94a3b8", fontSize:"16px" }}>⌕</span>
                </div>
              </div>
              <div className="right">
                <button className="primary-cta export">Export CSV</button>
                <button className="secondary-cta import">Export Excel</button>
              </div>
            </div>

            {/* ── 3-column layout ── */}
            <div className="cre-dashboard-container">
              <div className="cre-dashboard-wrapper">

                {/* ── LEFT: Check Results ── */}
                <section className="cre-left-panel">
                  <header className="cre-panel-header">
                    <h2>CHECK RESULTS</h2>
                  </header>

                  {/* Case selector */}
                  <div style={{ padding:"12px", borderBottom:"1px solid #f0f2f8" }}>
                    <select
                      value={selectedCase.id}
                      onChange={e => selectCase(cases.find(c => c.id === e.target.value))}
                      style={{ width:"100%", height:"38px", padding:"0 10px", border:"1.5px solid #e2e8f0",
                        borderRadius:"8px", fontSize:"13px", fontWeight:600, outline:"none",
                        background:"#f8fafc", cursor:"pointer" }}
                    >
                      {filtered.map(c => (
                        <option key={c.id} value={c.id}>{c.id} · {c.candidate}</option>
                      ))}
                    </select>
                  </div>

                  <div className="cre-check-list">
                    {Object.entries(selectedCase.checks).map(([chk, st]) => {
                      const cfg = CHECK_STATUS_CONFIG[st] || CHECK_STATUS_CONFIG.pending;
                      return (
                        <div key={chk} className="cre-check-row"
                          style={{ "--accent-border-color": cfg.color }}>
                          <span className="cre-check-label">{chk}</span>
                          <button className={`cre-status-pill`}
                            style={{ background: cfg.color }}>
                            {cfg.label}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Discrepancy banner if any */}
                  {Object.values(selectedCase.checks).includes("discrepancy") && (
                    <div className="cre-alert-banner">
                      ⚠ DISCREPANCY FOUND — {
                        Object.entries(selectedCase.checks).find(([,v])=>v==="discrepancy")?.[0]
                      }
                    </div>
                  )}
                </section>

                {/* ── MIDDLE: Report Editor ── */}
                <section className="cre-middle-panel">
                  <header className="cre-panel-header">
                    <h2>REPORT EDITOR — {selectedCase.id} | {selectedCase.candidate}</h2>
                  </header>

                  <div className="cre-editor-content">
                    {sections.map((sec, idx) => {
                      const isDisc = sec.title.toLowerCase().includes("discrepancy");
                      return (
                        <div key={idx} className="cre-editor-card"
                          style={{
                            "--card-theme-color": isDisc ? "#e67e22" : "#2b3b8c",
                            "--card-header-bg": isDisc ? "rgba(230,126,34,0.07)" : "rgba(43,59,140,0.05)",
                            "--card-border-color": isDisc ? "rgba(230,126,34,0.3)" : undefined,
                          }}>
                          <div className="cre-card-header"><h3>{sec.title}</h3></div>
                          <div className="cre-card-body">
                            <textarea
                              value={sec.content}
                              onChange={e => updateSection(idx, e.target.value)}
                              rows={4}
                              style={{ width:"100%", border:"1px solid #e2e8f0", borderRadius:"6px",
                                padding:"8px 10px", fontSize:"13px", resize:"vertical",
                                fontFamily:"inherit", outline:"none", background:"#f8fafc",
                                lineHeight:1.6, color:"#475569" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {saveStatus === "draft"      && <p style={{ padding:"0 20px 8px", color:"#888",   fontSize:"13px" }}>Draft saved.</p>}
                  {saveStatus === "submitted"  && <p style={{ padding:"0 20px 8px", color:"#0d9488",fontSize:"13px" }}>Submitted for QC review.</p>}
                  {saveStatus === "dispatched" && <p style={{ padding:"0 20px 8px", color:"#10b981",fontSize:"13px" }}>Dispatched to client.</p>}

                  <footer className="cre-editor-footer">
                    <button className="cre-btn cre-btn-success" onClick={handleSubmitQC}>SUBMIT FOR QC</button>
                    <button className="cre-btn cre-btn-purple"  onClick={handleDraft}>SAVE DRAFT</button>
                    <button className="cre-btn cre-btn-navy"    onClick={handleDispatch}>DISPATCH TO CLIENT</button>
                  </footer>
                </section>

                {/* ── RIGHT: Comments & QC Notes ── */}
                <section className="cre-right-panel">
                  <header className="cre-panel-header"><h2>COMMENTS & QC NOTES</h2></header>

                  <div className="cre-comments-content">
                    {comments.map((cm, i) => (
                      <div key={i} className="cre-comment-card">
                        <div className="cre-avatar" style={{ background: cm.color }}>{cm.avatar}</div>
                        <div className="cre-comment-details">
                          <div className="cre-comment-meta">
                            <span className="cre-comment-author">{cm.author}</span>
                            <span className="cre-comment-time">{cm.time}</span>
                          </div>
                          <p className="cre-comment-text">{cm.text}</p>
                        </div>
                      </div>
                    ))}
                    <div ref={commentsEndRef} />
                  </div>

                  <div className="cre-notes-input-wrapper">
                    <input type="text" className="cre-note-input" placeholder="Add note..."
                      value={commentInput} onChange={e => setCommentInput(e.target.value)}
                      onKeyDown={e => e.key==="Enter" && handleAddComment(e)} />
                    <button className="cre-btn-send" onClick={handleAddComment}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </button>
                  </div>

                  <div className="cre-monthly-banner">Reports This Month: {reportsThisMonth}</div>

                  <footer className="cre-right-footer">
                    <button className="cre-btn cre-btn-success">Export CSV</button>
                    <button className="cre-btn cre-btn-navy">Export Excel</button>
                  </footer>
                </section>

              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}