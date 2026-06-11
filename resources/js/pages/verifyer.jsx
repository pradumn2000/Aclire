// // import { useNavigate } from "react-router-dom";


// // export default function Verifyer() {
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
// //     <nav className="verifyer">
// //       <div className="nav-toggle">
// //         <div className="bx bx-menu">
// //           <img src="images/inner-pages/emp-check-icon.svg" alt="" />
// //         </div>
// //       </div>
      
// //       <div className="head-src">
// //         <h3>VERIFIER — Resoult Avalibility & Result Entry | BGV-2401 Employment</h3>
// //       </div>
      
// //       <button type="button" className="primary-cta">Verifier Role</button>
// //     </nav>


// //     {/* MAIN */}
// //     <main>

// //      <div className="dash-wrper">

// //      <div className="header-navbar">
      
// //           <button className="tab-cta">Employment</button>
// //           <button className="tab-cta active">Education</button>
// //           <button className="tab-cta">Address</button>
// //           <button className="tab-cta">Database</button>
// //           <button className="tab-cta">Criminal</button>
// //           <button className="tab-cta">Drug Test</button>
// //           <button className="tab-cta">Courtroom</button>
          
// //      </div>

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

      

// //       {/* Emplyment Check  body */}

// //     {/* Main Portal Layout Container */}
// // <div className="sas-portal-container">

// //   {/* Outer Flexbox Layout */}
// //   <div className="sas-emplyment-check-body">

// //     {/* FIRST CARD */}
// //     <div className="sas-frist-card">

// //       <div className="sas-card-header sas-source-header">
// //         <h2>SOURCE AVAILABILITY STATUS</h2>
// //       </div>

// //       {/* Table Header */}
// //       <div className="sas-table-header">
// //         <span className="sas-th-col col-source">Source</span>
// //         <span className="sas-th-col col-type">Type</span>
// //         <span className="sas-th-col col-availability">Availability</span>
// //         <span className="sas-th-col col-tat">TAT</span>
// //         <span className="sas-th-col col-action"></span>
// //       </div>

// //       {/* Rows */}
// //       <div className="sas-source-rows-list">

// //         <div className="sas-source-row status-border-green">

// //           <div className="sas-source-info col-source">
// //             <span className="sas-source-title">
// //               Infosys HR Portal
// //             </span>

// //             <span className="sas-source-tag">
// //               Email
// //             </span>
// //           </div>

// //           <div className="col-type">
// //             <span className="sas-badge badge-responsive">
// //               Responsive
// //             </span>
// //           </div>

// //           <div className="col-availability">
// //             <span className="sas-availability-text">
// //               24h
// //             </span>
// //           </div>

// //           <div className="col-action">
// //             <button className="sas-action-btn">
// //               Use
// //             </button>
// //           </div>

// //         </div>

// //         <div className="sas-source-row status-border-teal">

// //           <div className="sas-source-info col-source">
// //             <span className="sas-source-title">
// //               Employment DB API
// //             </span>

// //             <span className="sas-source-tag">
// //               API
// //             </span>
// //           </div>

// //           <div className="col-type">
// //             <span className="sas-badge badge-live">
// //               Live
// //             </span>
// //           </div>

// //           <div className="col-availability">
// //             <span className="sas-availability-text">
// //               Instant
// //             </span>
// //           </div>


// //           <div className="col-action">
// //             <button className="sas-action-btn">
// //               Use
// //             </button>
// //           </div>

// //         </div>

// //         <div className="sas-source-row status-border-orange">

// //           <div className="sas-source-info col-source">
// //             <span className="sas-source-title">
// //               EPFO Records
// //             </span>

// //             <span className="sas-source-tag">
// //               Government
// //             </span>
// //           </div>

// //           <div className="col-type">
// //             <span className="sas-badge badge-partially">
// //               Partially
// //             </span>
// //           </div>

// //           <div className="col-availability">
// //             <span className="sas-availability-text">
// //               48h
// //             </span>
// //           </div>


// //           <div className="col-action">
// //             <button className="sas-action-btn">
// //               Use
// //             </button>
// //           </div>

// //         </div>


// //         <div className="sas-source-row status-border-teal">

// //           <div className="sas-source-info col-source">
// //             <span className="sas-source-title">
// //               Employment DB API
// //             </span>

// //             <span className="sas-source-tag">
// //               API
// //             </span>
// //           </div>

// //           <div className="col-type">
// //             <span className="sas-badge badge-live">
// //               Live
// //             </span>
// //           </div>

// //           <div className="col-availability">
// //             <span className="sas-availability-text">
// //               Instant
// //             </span>
// //           </div>


// //           <div className="col-action">
// //             <button className="sas-action-btn">
// //               Use
// //             </button>
// //           </div>

// //         </div>

// //         <div className="sas-source-row status-border-orange">

// //           <div className="sas-source-info col-source">
// //             <span className="sas-source-title">
// //               EPFO Records
// //             </span>

// //             <span className="sas-source-tag">
// //               Government
// //             </span>
// //           </div>

// //           <div className="col-type">
// //             <span className="sas-badge badge-partially">
// //               Partially
// //             </span>
// //           </div>

// //           <div className="col-availability">
// //             <span className="sas-availability-text">
// //               48h
// //             </span>
// //           </div>


// //           <div className="col-action">
// //             <button className="sas-action-btn">
// //               Use
// //             </button>
// //           </div>

// //         </div>

// //       </div>
// //     </div>

// //     {/* SECOND CARD */}
// //     <div className="sas-second-card">

// //       <div className="sas-card-header sas-form-header">
// //         <h2>
// //           RESULT ENTRY FORM — Employment Verification
// //         </h2>
// //       </div>

// //       <form className="sas-entry-form" id="resultEntryForm">

// //         <div className="sas-form-group">
// //           <label className="sas-form-label">
// //             Employer Confirmed
// //           </label>

// //           <input
// //             type="text"
// //             className="sas-form-input"
// //             defaultValue="Infosys Limited"
// //             placeholder="Enter confirmed employer name"
// //             required
// //           />
// //         </div>

// //         <div className="sas-form-group">
// //           <label className="sas-form-label">
// //             Employment Period
// //           </label>

// //           <input
// //             type="text"
// //             className="sas-form-input"
// //             defaultValue="Jan 2018 – Mar 2022"
// //             placeholder="e.g., Jan 2018 - Mar 2022"
// //             required
// //           />
// //         </div>

// //         <div className="sas-form-group">
// //           <label className="sas-form-label">
// //             Designation
// //           </label>

// //           <input
// //             type="text"
// //             className="sas-form-input"
// //             defaultValue="Senior Systems Engineer"
// //             placeholder="Enter designation"
// //             required
// //           />
// //         </div>

// //         <div className="sas-form-group">
// //           <label className="sas-form-label">
// //             Exit Reason
// //           </label>

// //           <input
// //             type="text"
// //             className="sas-form-input"
// //             defaultValue="Resignation (voluntary)"
// //             placeholder="Enter exit reason"
// //             required
// //           />
// //         </div>

// //         {/* Toggle Buttons */}
// //         <div className="sas-form-group">

// //           <label className="sas-form-label">
// //             Verification Outcome
// //           </label>

// //           <div className="sas-outcome-toggle-group">

// //             <button
// //               type="button"
// //               className="sas-toggle-btn active-clear"
// //             >
// //               Clear
// //             </button>

// //             <button
// //               type="button"
// //               className="sas-toggle-btn"
// //             >
// //               Discrepancy
// //             </button>

// //             <button
// //               type="button"
// //               className="sas-toggle-btn"
// //             >
// //               Unable to Verify
// //             </button>

// //           </div>
// //         </div>

// //         {/* Remarks */}
// //         <div className="sas-form-group flex-grow-input">

// //           <label className="sas-form-label">
// //             Verifier Remarks
// //           </label>

// //           <textarea
// //             className="sas-form-textarea"
// //             rows="3"
// //             placeholder="Enter detailed remarks..."
// //             defaultValue="HR responded via email on 02/05. All details match."
// //           ></textarea>

// //         </div>

// //         {/* Actions */}
// //         <div className="sas-form-actions-row">

// //           <button
// //             type="submit"
// //             className="sas-btn-submit"
// //           >
// //             SAVE & MARK DONE
// //           </button>

// //           <button
// //             type="button"
// //             className="sas-btn-draft"
// //             id="btnSaveDraft"
// //           >
// //             SAVE DRAFT
// //           </button>

// //           <button
// //             type="button"
// //             className="sas-btn-cancel"
// //             aria-label="Cancel"
// //           >

// //             <svg
// //               viewBox="0 0 24 24"
// //               width="18"
// //               height="18"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             >
// //               <line x1="18" y1="6" x2="6" y2="18"></line>
// //               <line x1="6" y1="6" x2="18" y2="18"></line>
// //             </svg>

// //           </button>

// //         </div>

// //       </form>
// //     </div>

// //     {/* THIRD CARD */}
// //     <div className="sas-thrid-card">

// //       {/* Activity */}
// //       <div className="sas-activity-block">

// //         <div className="sas-card-header sas-activity-header">
// //           <h2>ACTIVITY LOG & COMMENTS</h2>
// //         </div>

// //         <div className="sas-activity-content">

// //           <h3 className="sas-section-subtitle">
// //             Status Timeline
// //           </h3>

// //           <div className="sas-timeline-list">

// //             <div className="sas-timeline-item">

// //               <div className="sas-timeline-left">

// //                 <span className="sas-time-stamp">
// //                   11:02
// //                 </span>

// //                 <div className="sas-timeline-node node-active">

// //                   <svg
// //                     viewBox="0 0 24 24"
// //                     width="10"
// //                     height="10"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="3"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   >
// //                     <polyline points="20 6 9 17 4 12"></polyline>
// //                   </svg>

// //                 </div>

// //               </div>

// //               <div className="sas-timeline-right">
// //                 <span className="sas-log-text text-highlight">
// //                   Result saved (Draft)
// //                 </span>
// //               </div>

// //             </div>

// //           </div>

// //         </div>
// //       </div>

// //       {/* COMMENTS */}
// //       <div className="sas-comments-sub-block">

// //         <div className="sas-comments-bar-header">
// //           <h3>COMMENTS</h3>
// //         </div>

// //         <div className="sas-comments-container">

// //           <div
// //             className="sas-comments-stream"
// //             id="sasCommentsStream"
// //           >

// //             <div className="sas-comment-bubble">

// //               <div className="sas-comment-avatar avatar-purple">
// //                 P
// //               </div>

// //               <div className="sas-comment-body">

// //                 <div className="sas-comment-info-row">

// //                   <span className="sas-commenter-title">
// //                     Priya (QC)
// //                   </span>

// //                   <span className="sas-comment-date">
// //                     10:50 AM
// //                   </span>

// //                 </div>

// //                 <p className="sas-comment-desc">
// //                   Please confirm exit reason documented.
// //                 </p>

// //               </div>

// //             </div>

// //           </div>

// //           {/* Reply */}
// //           <form
// //             className="sas-reply-form"
// //             id="sasReplyForm"
// //           >

// //             <input
// //               type="text"
// //               id="sasReplyInput"
// //               placeholder="Reply..."
// //               autoComplete="off"
// //               required
// //             />

// //             <button
// //               type="submit"
// //               className="sas-send-btn"
// //               aria-label="Send reply"
// //             >

// //               <svg
// //                 viewBox="0 0 24 24"
// //                 width="16"
// //                 height="16"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2.5"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //               >
// //                 <line x1="22" y1="2" x2="11" y2="13"></line>

// //                 <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
// //               </svg>

// //             </button>

// //           </form>

// //         </div>
// //       </div>

// //     </div>
// //   </div>
// // </div>
      
      
// //      </div>
      
// //     </main>
// //   </section>
// // </>
// //   );
// // }
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";

// // ─────────────────────────────────────────
// // Mock cases per check type
// // Replace with API call when backend is ready:
// // GET /api/cases?check_type={checkType}&assigned_to={userId}
// // ─────────────────────────────────────────
// const MOCK_CASES = {
//   employment: [
//     { id: "BGV-2401", candidate: "Ravi Kumar",   client: "Infosys", tat: "3d", status: "pending",     employer: "Infosys Limited",       period: "Jan 2018 – Mar 2022", designation: "Sr. Systems Engineer", exitReason: "Resignation (voluntary)" },
//     { id: "BGV-2402", candidate: "Anjali Mehta", client: "TCS",     tat: "5d", status: "in-progress", employer: "Tata Consultancy",       period: "Jun 2019 – Dec 2023", designation: "Business Analyst",     exitReason: "Better opportunity" },
//     { id: "BGV-2403", candidate: "Suresh Pillai",client: "Wipro",   tat: "4d", status: "completed",   employer: "Wipro Technologies",     period: "Mar 2015 – Aug 2019", designation: "Project Manager",      exitReason: "Retirement" },
//     { id: "BGV-2404", candidate: "Neha Sharma",  client: "HCL",     tat: "1d", status: "pending",     employer: "HCL Technologies",       period: "Jul 2020 – Present",  designation: "Software Engineer",    exitReason: "—" },
//   ],
//   education: [
//     { id: "BGV-2405", candidate: "Amit Verma",   client: "Accenture", tat: "2d", status: "pending",     institution: "Delhi University", degree: "B.Tech", yop: "2017", rollNo: "DU17CS042" },
//     { id: "BGV-2406", candidate: "Priya Singh",  client: "Cognizant", tat: "3d", status: "in-progress", institution: "Mumbai University",degree: "MBA",    yop: "2019", rollNo: "MU19MB118" },
//   ],
//   address: [
//     { id: "BGV-2407", candidate: "Rohit Gupta",  client: "Infosys", tat: "2d", status: "pending",     address: "42 MG Road, Bangalore 560001", type: "Permanent" },
//   ],
//   database: [
//     { id: "BGV-2408", candidate: "Kavya Nair",   client: "TCS",     tat: "1d", status: "pending",     screenType: "CIBIL + Criminal DB", result: "Pending" },
//   ],
//   criminal: [
//     { id: "BGV-2409", candidate: "Deepak Rao",   client: "Wipro",   tat: "4d", status: "pending",     court: "Bangalore District Court", jurisdiction: "Civil + Criminal" },
//   ],
//   drug_test: [
//     { id: "BGV-2410", candidate: "Sneha Iyer",   client: "HCL",     tat: "3d", status: "pending",     lab: "Apollo Diagnostics", sampleType: "Urine" },
//   ],
//   courtroom: [
//     { id: "BGV-2411", candidate: "Vikram Mehta", client: "Infosys", tat: "5d", status: "pending",     court: "Mumbai High Court", caseRef: "MHC/2023/4421" },
//   ],
// };

// const CHECK_TYPES = [
//   { key: "employment", label: "Employment" },
//   { key: "education",  label: "Education" },
//   { key: "address",    label: "Address" },
//   { key: "database",   label: "Database" },
//   { key: "criminal",   label: "Criminal" },
//   { key: "drug_test",  label: "Drug Test" },
//   { key: "courtroom",  label: "Courtroom" },
// ];

// const SOURCES = {
//   employment: [
//     { name: "Infosys HR Portal",   tag: "Email",      badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green" },
//     { name: "Employment DB API",   tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//     { name: "EPFO Records",        tag: "Government", badge: "Partially",  badgeClass: "badge-partially",  tat: "48h",     borderClass: "status-border-orange" },
//   ],
//   education: [
//     { name: "University Portal",   tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//     { name: "Result Link DB",      tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green" },
//   ],
//   address: [
//     { name: "Field Agent",         tag: "Physical",   badge: "Available",  badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-green" },
//     { name: "Digital Trace",       tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//   ],
//   database: [
//     { name: "CIBIL API",           tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//     { name: "Criminal DB",         tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green" },
//   ],
//   criminal: [
//     { name: "District Court",      tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "72h",     borderClass: "status-border-orange" },
//     { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//   ],
//   drug_test: [
//     { name: "Apollo Diagnostics",  tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green" },
//     { name: "SRL Diagnostics",     tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-orange" },
//   ],
//   courtroom: [
//     { name: "High Court Registry", tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "5d",      borderClass: "status-border-orange" },
//     { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//   ],
// };

// // Get verifier's assigned check type from user object
// // When API is ready: user.check_type from login response
// function getAssignedCheckType() {
//   try {
//     const user = JSON.parse(localStorage.getItem("user")) || {};
//     return user.check_type || "employment"; // default to employment until API provides it
//   } catch {
//     return "employment";
//   }
// }

// export default function Verifyer() {
//   const navigate = useNavigate();

//   const assignedType  = getAssignedCheckType();
//   const [activeTab, setActiveTab]     = useState(assignedType);
//   const [cases, setCases]             = useState(MOCK_CASES[assignedType] || []);
//   const [selectedCase, setSelectedCase] = useState(null);

//   // Form state
//   const [form, setForm]       = useState({});
//   const [outcome, setOutcome] = useState("clear");
//   const [remarks, setRemarks] = useState("");
//   const [saveStatus, setSaveStatus] = useState(""); // "saved" | "draft" | ""

//   // Activity log
//   const [activity, setActivity] = useState([
//     { time: "10:30", text: "Case assigned to verifier" },
//   ]);

//   // Comments
//   const [comments, setComments] = useState([
//     { id: 1, author: "Priya (QC)", avatar: "P", avatarClass: "avatar-purple", time: "10:50 AM", text: "Please confirm exit reason documented." },
//   ]);
//   const [commentInput, setCommentInput] = useState("");
//   const commentsEndRef = useRef(null);

//   // Search
//   const [search, setSearch] = useState("");

//   // Load cases when tab changes
//   useEffect(() => {
//     setCases(MOCK_CASES[activeTab] || []);
//     setSelectedCase(null);
//     setForm({});
//     setSaveStatus("");
//   }, [activeTab]);

//   // Scroll comments to bottom when new comment added
//   useEffect(() => {
//     commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [comments]);

//   // Select a case — pre-fill form
//   const selectCase = (c) => {
//     setSelectedCase(c);
//     setForm({ ...c });
//     setOutcome("clear");
//     setRemarks("");
//     setSaveStatus("");
//     setActivity([
//       { time: formatTime(), text: `Case ${c.id} opened` },
//     ]);
//   };

//   // Save & Mark Done
//   const handleSave = (e) => {
//     e.preventDefault();
//     if (!selectedCase) return;

//     // TODO: Replace with API call:
//     // POST /api/cases/{id}/result
//     // { ...form, outcome, remarks, status: "completed" }

//     setCases((prev) =>
//       prev.map((c) => c.id === selectedCase.id ? { ...c, status: "completed" } : c)
//     );
//     setActivity((prev) => [
//       ...prev,
//       { time: formatTime(), text: `Result saved — ${outcomeLabel(outcome)}` },
//     ]);
//     setSaveStatus("saved");
//   };

//   // Save Draft
//   const handleDraft = () => {
//     if (!selectedCase) return;

//     // TODO: POST /api/cases/{id}/draft
//     setCases((prev) =>
//       prev.map((c) => c.id === selectedCase.id ? { ...c, status: "in-progress" } : c)
//     );
//     setActivity((prev) => [
//       ...prev,
//       { time: formatTime(), text: "Draft saved" },
//     ]);
//     setSaveStatus("draft");
//   };

//   // Post comment
//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!commentInput.trim()) return;

//     const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();
//     const name = user.name || "Verifier";
//     const initial = name.charAt(0).toUpperCase();

//     // TODO: POST /api/cases/{id}/comments { text: commentInput }
//     setComments((prev) => [
//       ...prev,
//       { id: Date.now(), author: name, avatar: initial, avatarClass: "avatar-blue", time: formatTime(true), text: commentInput.trim() },
//     ]);
//     setCommentInput("");
//     setActivity((prev) => [
//       ...prev,
//       { time: formatTime(), text: "Comment added" },
//     ]);
//   };

//   // Filtered cases
//   const filtered = cases.filter((c) =>
//     c.id.toLowerCase().includes(search.toLowerCase()) ||
//     c.candidate.toLowerCase().includes(search.toLowerCase()) ||
//     c.client.toLowerCase().includes(search.toLowerCase())
//   );

//   const sources = SOURCES[activeTab] || [];
//   const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

//   return (
//     <>
//       <Sidebar />

//       <section id="noSidebar">

//         {/* Nav */}
//         <nav className="verifyer">
//           <div className="nav-toggle">
//             <img src="images/inner-pages/emp-check-icon.svg" alt="" />
//           </div>
//           <div className="head-src">
//             <h3>
//               VERIFIER — {CHECK_TYPES.find(t => t.key === activeTab)?.label} Check
//               {selectedCase ? ` | ${selectedCase.id} · ${selectedCase.candidate}` : ""}
//             </h3>
//           </div>
//           <button type="button" className="primary-cta">
//             {user.name || "Verifier"}
//           </button>
//         </nav>

//         <main>
//           <div className="dash-wrper">

//             {/* Check type tabs */}
//             <div className="header-navbar">
//               {CHECK_TYPES.map((t) => (
//                 <button
//                   key={t.key}
//                   className={`tab-cta ${activeTab === t.key ? "active" : ""} ${t.key !== assignedType ? "tab-disabled" : ""}`}
//                   onClick={() => t.key === assignedType && setActiveTab(t.key)}
//                   title={t.key !== assignedType ? "Not your assigned check type" : ""}
//                   style={{ opacity: t.key !== assignedType ? 0.4 : 1, cursor: t.key !== assignedType ? "not-allowed" : "pointer" }}
//                 >
//                   {t.label}
//                 </button>
//               ))}
//             </div>

//             {/* Date filters + search */}
//             <div className="dash-upper-head">
//               <div className="left">
//                 <button className="tab-cta">Today</button>
//                 <button className="tab-cta">This Week</button>
//                 <button className="tab-cta">This Month</button>
//                 <button className="tab-cta active">Custom</button>
//               </div>
//               <div className="right">
//                 <div className="input-grp" style={{ margin: 0 }}>
//                   <input
//                     type="text"
//                     placeholder="Search cases..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     style={{ minWidth: "200px" }}
//                   />
//                 </div>
//                 <button className="primary-cta export">
//                   <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
//                 </button>
//               </div>
//             </div>

//             {/* Cases list (above the 3-card layout) */}
//             <div className="down-table" style={{ marginBottom: "16px" }}>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Case ID</th>
//                     <th>Candidate</th>
//                     <th>Client</th>
//                     <th>TAT</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filtered.length === 0 ? (
//                     <tr><td colSpan="6" style={{ textAlign: "center", padding: "20px", color: "#888" }}>No cases found.</td></tr>
//                   ) : (
//                     filtered.map((c) => (
//                       <tr
//                         key={c.id}
//                         style={{ background: selectedCase?.id === c.id ? "#f0f7ff" : "" }}
//                       >
//                         <td>{c.id}</td>
//                         <td>{c.candidate}</td>
//                         <td>{c.client}</td>
//                         <td>{c.tat}</td>
//                         <td><span className={`status ${c.status}`}>{statusLabel(c.status)}</span></td>
//                         <td>
//                           <button
//                             className="view-cta"
//                             onClick={() => selectCase(c)}
//                           >
//                             {selectedCase?.id === c.id ? "Selected" : "Open"}
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* 3-card verification layout */}
//             {selectedCase ? (
//               <div className="sas-portal-container">
//                 <div className="sas-emplyment-check-body">

//                   {/* CARD 1 — Source availability */}
//                   <div className="sas-frist-card">
//                     <div className="sas-card-header sas-source-header">
//                       <h2>SOURCE AVAILABILITY STATUS</h2>
//                     </div>
//                     <div className="sas-table-header">
//                       <span className="sas-th-col col-source">Source</span>
//                       <span className="sas-th-col col-type">Type</span>
//                       <span className="sas-th-col col-availability">TAT</span>
//                       <span className="sas-th-col col-action"></span>
//                     </div>
//                     <div className="sas-source-rows-list">
//                       {sources.map((s, i) => (
//                         <div key={i} className={`sas-source-row ${s.borderClass}`}>
//                           <div className="sas-source-info col-source">
//                             <span className="sas-source-title">{s.name}</span>
//                             <span className="sas-source-tag">{s.tag}</span>
//                           </div>
//                           <div className="col-type">
//                             <span className={`sas-badge ${s.badgeClass}`}>{s.badge}</span>
//                           </div>
//                           <div className="col-availability">
//                             <span className="sas-availability-text">{s.tat}</span>
//                           </div>
//                           <div className="col-action">
//                             <button
//                               className="sas-action-btn"
//                               onClick={() => setActivity((prev) => [...prev, { time: formatTime(), text: `Source selected: ${s.name}` }])}
//                             >
//                               Use
//                             </button>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* CARD 2 — Result entry form */}
//                   <div className="sas-second-card">
//                     <div className="sas-card-header sas-form-header">
//                       <h2>RESULT ENTRY FORM — {CHECK_TYPES.find(t => t.key === activeTab)?.label} Verification</h2>
//                     </div>

//                     <form className="sas-entry-form" onSubmit={handleSave}>

//                       {/* Dynamic fields based on check type */}
//                       {activeTab === "employment" && <>
//                         <FormField label="Employer Confirmed"  value={form.employer     || ""} onChange={(v) => setForm({ ...form, employer: v })} />
//                         <FormField label="Employment Period"   value={form.period       || ""} onChange={(v) => setForm({ ...form, period: v })} />
//                         <FormField label="Designation"        value={form.designation  || ""} onChange={(v) => setForm({ ...form, designation: v })} />
//                         <FormField label="Exit Reason"        value={form.exitReason   || ""} onChange={(v) => setForm({ ...form, exitReason: v })} />
//                       </>}

//                       {activeTab === "education" && <>
//                         <FormField label="Institution"        value={form.institution  || ""} onChange={(v) => setForm({ ...form, institution: v })} />
//                         <FormField label="Degree"             value={form.degree       || ""} onChange={(v) => setForm({ ...form, degree: v })} />
//                         <FormField label="Year of Passing"    value={form.yop          || ""} onChange={(v) => setForm({ ...form, yop: v })} />
//                         <FormField label="Roll Number"        value={form.rollNo       || ""} onChange={(v) => setForm({ ...form, rollNo: v })} />
//                       </>}

//                       {activeTab === "address" && <>
//                         <FormField label="Address"            value={form.address      || ""} onChange={(v) => setForm({ ...form, address: v })} />
//                         <FormField label="Address Type"       value={form.type         || ""} onChange={(v) => setForm({ ...form, type: v })} />
//                       </>}

//                       {activeTab === "database" && <>
//                         <FormField label="Screen Type"        value={form.screenType   || ""} onChange={(v) => setForm({ ...form, screenType: v })} />
//                         <FormField label="Result"             value={form.result       || ""} onChange={(v) => setForm({ ...form, result: v })} />
//                       </>}

//                       {activeTab === "criminal" && <>
//                         <FormField label="Court"              value={form.court        || ""} onChange={(v) => setForm({ ...form, court: v })} />
//                         <FormField label="Jurisdiction"       value={form.jurisdiction || ""} onChange={(v) => setForm({ ...form, jurisdiction: v })} />
//                       </>}

//                       {activeTab === "drug_test" && <>
//                         <FormField label="Lab"                value={form.lab          || ""} onChange={(v) => setForm({ ...form, lab: v })} />
//                         <FormField label="Sample Type"        value={form.sampleType   || ""} onChange={(v) => setForm({ ...form, sampleType: v })} />
//                       </>}

//                       {activeTab === "courtroom" && <>
//                         <FormField label="Court"              value={form.court        || ""} onChange={(v) => setForm({ ...form, court: v })} />
//                         <FormField label="Case Reference"     value={form.caseRef      || ""} onChange={(v) => setForm({ ...form, caseRef: v })} />
//                       </>}

//                       {/* Outcome toggle */}
//                       <div className="sas-form-group">
//                         <label className="sas-form-label">Verification Outcome</label>
//                         <div className="sas-outcome-toggle-group">
//                           {["clear", "discrepancy", "unable"].map((o) => (
//                             <button
//                               key={o}
//                               type="button"
//                               className={`sas-toggle-btn ${outcome === o ? `active-${o === "clear" ? "clear" : o === "discrepancy" ? "disc" : "unable"}` : ""}`}
//                               style={{ background: outcome === o ? outcomeColor(o) : "", color: outcome === o ? "#fff" : "", borderColor: outcome === o ? outcomeColor(o) : "" }}
//                               onClick={() => setOutcome(o)}
//                             >
//                               {outcomeLabel(o)}
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Remarks */}
//                       <div className="sas-form-group flex-grow-input">
//                         <label className="sas-form-label">Verifier Remarks</label>
//                         <textarea
//                           className="sas-form-textarea"
//                           rows="3"
//                           placeholder="Enter detailed remarks..."
//                           value={remarks}
//                           onChange={(e) => setRemarks(e.target.value)}
//                         />
//                       </div>

//                       {/* Success feedback */}
//                       {saveStatus === "saved"  && <p style={{ color: "green", fontSize: "13px", marginBottom: "8px" }}>Saved and marked done.</p>}
//                       {saveStatus === "draft"  && <p style={{ color: "#888",  fontSize: "13px", marginBottom: "8px" }}>Draft saved.</p>}

//                       {/* Actions */}
//                       <div className="sas-form-actions-row">
//                         <button type="submit" className="sas-btn-submit">SAVE & MARK DONE</button>
//                         <button type="button" className="sas-btn-draft" onClick={handleDraft}>SAVE DRAFT</button>
//                         <button
//                           type="button"
//                           className="sas-btn-cancel"
//                           onClick={() => { setSelectedCase(null); setForm({}); setSaveStatus(""); }}
//                         >
//                           <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                             <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
//                           </svg>
//                         </button>
//                       </div>

//                     </form>
//                   </div>

//                   {/* CARD 3 — Activity + Comments */}
//                   <div className="sas-thrid-card">

//                     {/* Activity log */}
//                     <div className="sas-activity-block">
//                       <div className="sas-card-header sas-activity-header">
//                         <h2>ACTIVITY LOG & COMMENTS</h2>
//                       </div>
//                       <div className="sas-activity-content">
//                         <h3 className="sas-section-subtitle">Status Timeline</h3>
//                         <div className="sas-timeline-list">
//                           {activity.map((a, i) => (
//                             <div key={i} className="sas-timeline-item">
//                               <div className="sas-timeline-left">
//                                 <span className="sas-time-stamp">{a.time}</span>
//                                 <div className="sas-timeline-node node-active">
//                                   <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                                     <polyline points="20 6 9 17 4 12" />
//                                   </svg>
//                                 </div>
//                               </div>
//                               <div className="sas-timeline-right">
//                                 <span className="sas-log-text text-highlight">{a.text}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Comments */}
//                     <div className="sas-comments-sub-block">
//                       <div className="sas-comments-bar-header">
//                         <h3>COMMENTS</h3>
//                       </div>
//                       <div className="sas-comments-container">
//                         <div className="sas-comments-stream" id="sasCommentsStream">
//                           {comments.map((c) => (
//                             <div key={c.id} className="sas-comment-bubble">
//                               <div className={`sas-comment-avatar ${c.avatarClass}`}>{c.avatar}</div>
//                               <div className="sas-comment-body">
//                                 <div className="sas-comment-info-row">
//                                   <span className="sas-commenter-title">{c.author}</span>
//                                   <span className="sas-comment-date">{c.time}</span>
//                                 </div>
//                                 <p className="sas-comment-desc">{c.text}</p>
//                               </div>
//                             </div>
//                           ))}
//                           <div ref={commentsEndRef} />
//                         </div>

//                         <form className="sas-reply-form" onSubmit={handleComment}>
//                           <input
//                             type="text"
//                             placeholder="Reply..."
//                             value={commentInput}
//                             onChange={(e) => setCommentInput(e.target.value)}
//                             autoComplete="off"
//                           />
//                           <button type="submit" className="sas-send-btn" aria-label="Send reply">
//                             <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                               <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
//                             </svg>
//                           </button>
//                         </form>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div style={{ textAlign: "center", padding: "40px", color: "#888", fontSize: "14px" }}>
//                 Select a case from the table above to begin verification.
//               </div>
//             )}

//           </div>
//         </main>
//       </section>
//     </>
//   );
// }

// // ── Small reusable form field ─────────────────────────
// function FormField({ label, value, onChange }) {
//   return (
//     <div className="sas-form-group">
//       <label className="sas-form-label">{label}</label>
//       <input
//         type="text"
//         className="sas-form-input"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={`Enter ${label.toLowerCase()}`}
//       />
//     </div>
//   );
// }

// // ── Helpers ───────────────────────────────────────────
// function formatTime(full = false) {
//   const now = new Date();
//   if (full) return now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
//   return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
// }

// function statusLabel(s) {
//   return { pending: "Pending", "in-progress": "In Progress", completed: "Completed", "qc-review": "QC Review" }[s] || s;
// }

// function outcomeLabel(o) {
//   return { clear: "Clear", discrepancy: "Discrepancy", unable: "Unable to Verify" }[o] || o;
// }

// function outcomeColor(o) {
//   return { clear: "#16a34a", discrepancy: "#dc2626", unable: "#d97706" }[o] || "#333";
// }
// Verifyer.jsx — Fully functional BGV Verifier page
// Wired to caseStore.js (localStorage-backed, replace with API when ready)
//
// Features:
//   ✔ Tab-per-check-type (admin can see all; verifier role restricted to assigned type)
//   ✔ Case table with search, status filter, date preset + custom range, CSV export
//   ✔ Live status-count badges on tabs
//   ✔ 3-card layout: Source Availability | Result Entry Form | Activity + Comments
//   ✔ Dynamic form fields per check type (employment / education / address / database / criminal / drug_test / courtroom)
//   ✔ Verification Outcome toggle (Clear / Discrepancy / Unable to Verify)
//   ✔ Save & Mark Done → persists to caseStore, case becomes "completed"
//   ✔ Save Draft → persists to caseStore, case becomes "in-progress"
//   ✔ Activity log auto-appends on every action
//   ✔ Comments stream: loads from store, adds new comments, auto-scrolls
//   ✔ Source "Use" button logs to activity
//   ✔ Case summary panel in Card 1
//   ✔ Admin mode: bypass check-type restriction via user.role === "admin"

import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  getAllCases,
  saveVerifierResult,
  saveDraft,
  getComments,
  addComment,
  SOURCES,
  CHECK_TYPES,
} from "../src/store/caseStore";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pad(n) { return String(n).padStart(2, "0"); }

function formatTime(full = false) {
  const now = new Date();
  if (full) return now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  return `${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

function statusLabel(s) {
  return { pending: "Pending", "in-progress": "In Progress", completed: "Completed", "qc-review": "QC Review" }[s] || s;
}

function outcomeLabel(o) {
  return { clear: "Clear", discrepancy: "Discrepancy", unable: "Unable to Verify" }[o] || o;
}

function outcomeColor(o) {
  return { clear: "#16a34a", discrepancy: "#dc2626", unable: "#d97706" }[o] || "#64748b";
}

function getUser() {
  try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; }
}

function isAdmin() {
  return getUser().role === "admin";
}

function getAssignedCheckType() {
  return getUser().check_type || "employment";
}

function exportCSV(rows, checkType) {
  const headers = ["Case ID", "Candidate", "Client", "TAT", "Status", "Check Type", "Outcome", "Remarks", "Saved At"];
  const lines = rows.map((c) => [
    c.id, c.candidate, c.client, c.tat, c.status, c.checkType,
    c.verifierResult?.outcome || "",
    `"${(c.verifierResult?.remarks || "").replace(/"/g, '""')}"`,
    c.verifierResult?.savedAt || "",
  ].join(","));
  const blob = new Blob([headers.join(",") + "\n" + lines.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `verifier_${checkType}_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FormField({ label, value, onChange }) {
  return (
    <div className="sas-form-group">
      <label className="sas-form-label">{label}</label>
      <input
        type="text"
        className="sas-form-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    pending:       { bg: "#fff3cd", color: "#856404" },
    "in-progress": { bg: "#cce5ff", color: "#004085" },
    completed:     { bg: "#d4edda", color: "#155724" },
    "qc-review":   { bg: "#e2d9f3", color: "#4b1f8d" },
  };
  const s = map[status] || { bg: "#e9ecef", color: "#495057" };
  return (
    <span style={{ background: s.bg, color: s.color, padding: "3px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
      {statusLabel(status)}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Verifyer() {
  const navigate     = useNavigate();
  const admin        = isAdmin();
  const assignedType = getAssignedCheckType();

  // ── Tab & case list
  const [activeTab, setActiveTab]       = useState(assignedType);
  const [allCases, setAllCases]         = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);

  // ── Filters
  const [search, setSearch]             = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [datePreset, setDatePreset]     = useState("all");
  const [customFrom, setCustomFrom]     = useState("");
  const [customTo, setCustomTo]         = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  // ── Form
  const [form, setForm]         = useState({});
  const [outcome, setOutcome]   = useState("clear");
  const [remarks, setRemarks]   = useState("");
  const [saveStatus, setSaveStatus] = useState(""); // "saved" | "draft" | "error"

  // ── Activity & comments
  const [activity, setActivity]         = useState([]);
  const [comments, setComments]         = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const commentsEndRef = useRef(null);
  const datePickerRef  = useRef(null);

  // ── Load cases from store
  const loadCases = useCallback(() => {
    const cases = getAllCases().filter((c) => c.checkType === activeTab);
    setAllCases(cases);
  }, [activeTab]);

  useEffect(() => {
    loadCases();
    setSelectedCase(null);
    setForm({});
    setSaveStatus("");
    setSearch("");
    setStatusFilter("all");
  }, [activeTab, loadCases]);

  // ── Auto-scroll comments
  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  // ── Close date picker on outside click
  useEffect(() => {
    const h = (e) => {
      if (datePickerRef.current && !datePickerRef.current.contains(e.target)) setShowDatePicker(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  // ── Date range filter
  const isInDateRange = useCallback((dateStr) => {
    if (!dateStr || datePreset === "all") return true;
    const d = new Date(dateStr);
    const now = new Date();
    if (datePreset === "today") return d.toDateString() === now.toDateString();
    if (datePreset === "week")  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
    if (datePreset === "month") { const m = new Date(now); m.setMonth(now.getMonth() - 1); return d >= m; }
    if (datePreset === "custom" && customFrom && customTo) {
      return d >= new Date(customFrom) && d <= new Date(customTo + "T23:59:59");
    }
    return true;
  }, [datePreset, customFrom, customTo]);

  // ── Filtered cases
  const filtered = allCases.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch  = !search || c.id.toLowerCase().includes(q) || c.candidate.toLowerCase().includes(q) || (c.client || "").toLowerCase().includes(q);
    const matchStatus  = statusFilter === "all" || c.status === statusFilter;
    const matchDate    = isInDateRange(c.createdDate);
    return matchSearch && matchStatus && matchDate;
  });

  // ── Status counts for tab badges
  const statusCounts = {
    all:           allCases.length,
    pending:       allCases.filter((c) => c.status === "pending").length,
    "in-progress": allCases.filter((c) => c.status === "in-progress").length,
    completed:     allCases.filter((c) => c.status === "completed").length,
    "qc-review":   allCases.filter((c) => c.status === "qc-review").length,
  };

  // ── Select a case — pre-fill form and load comments
  const selectCase = (c) => {
    setSelectedCase(c);
    setForm({ ...c });
    setOutcome(c.verifierResult?.outcome || "clear");
    setRemarks(c.verifierResult?.remarks || "");
    setSaveStatus("");
    setComments(getComments(c.id));
    setActivity([
      { time: formatTime(), text: `Case ${c.id} opened — ${c.candidate}` },
      ...(c.verifierResult ? [{ time: formatTime(), text: `Previous result: ${outcomeLabel(c.verifierResult.outcome)}${c.verifierResult.isDraft ? " (Draft)" : ""}` }] : []),
    ]);
  };

  // ── Save & Mark Done
  const handleSave = (e) => {
    e.preventDefault();
    if (!selectedCase) return;
    try {
      // TODO: POST /api/cases/{id}/result { ...form, outcome, remarks, status: "completed" }
      saveVerifierResult(selectedCase.id, form, outcome, remarks);
      loadCases();
      setSelectedCase((prev) => ({ ...prev, status: "completed", verifierResult: { outcome, remarks, savedAt: new Date().toISOString() } }));
      setActivity((prev) => [...prev, { time: formatTime(), text: `✔ Saved & marked done — ${outcomeLabel(outcome)}` }]);
      setSaveStatus("saved");
    } catch {
      setSaveStatus("error");
    }
  };

  // ── Save Draft
  const handleDraft = () => {
    if (!selectedCase) return;
    try {
      // TODO: POST /api/cases/{id}/draft
      saveDraft(selectedCase.id, form, outcome, remarks);
      loadCases();
      setSelectedCase((prev) => ({ ...prev, status: "in-progress", verifierResult: { outcome, remarks, savedAt: new Date().toISOString(), isDraft: true } }));
      setActivity((prev) => [...prev, { time: formatTime(), text: "💾 Draft saved" }]);
      setSaveStatus("draft");
    } catch {
      setSaveStatus("error");
    }
  };

  // ── Post comment
  const handleComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim() || !selectedCase) return;
    const user = getUser();
    const name = user.name || "Verifier";
    const newComment = {
      id: Date.now(),
      author: name,
      avatar: name.charAt(0).toUpperCase(),
      avatarClass: "avatar-blue",
      time: formatTime(true),
      text: commentInput.trim(),
    };
    // TODO: POST /api/cases/{id}/comments
    const updated = addComment(selectedCase.id, newComment);
    setComments(updated);
    setCommentInput("");
    setActivity((prev) => [...prev, { time: formatTime(), text: "Comment added" }]);
  };

  // ── Source "Use" click
  const handleUseSource = (sourceName) => {
    setActivity((prev) => [...prev, { time: formatTime(), text: `Source selected: ${sourceName}` }]);
  };

  const sources = SOURCES[activeTab] || [];
  const user    = getUser();

  // ── Check if tab is accessible
  const canAccessTab = (key) => admin || key === assignedType;

  // ── Count pending cases per type (for tab badge)
  function pendingCount(type) {
    try { return getAllCases().filter((c) => c.checkType === type && c.status !== "completed").length; } catch { return 0; }
  }

  return (
    <>
      <Sidebar />

      <section id="noSidebar">

        {/* ── Navbar ────────────────────────────────────────────── */}
        <nav className="verifyer">
          <div className="nav-toggle">
            <img src="images/inner-pages/emp-check-icon.svg" alt="" />
          </div>
          <div className="head-src">
            <h3>
              {admin ? "ADMIN — VERIFIER VIEW" : "VERIFIER"} — {CHECK_TYPES.find((t) => t.key === activeTab)?.label} Check
              {selectedCase ? ` | ${selectedCase.id} · ${selectedCase.candidate}` : ""}
            </h3>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {admin && (
              <span style={{ background: "#fef3c7", color: "#92400e", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 700 }}>
                ADMIN MODE
              </span>
            )}
            <button type="button" className="primary-cta" style={{ fontSize: "13px" }}>
              {user.name || "Verifier"}
            </button>
            <button
              type="button"
              className="secondary-cta"
              style={{ fontSize: "13px" }}
              onClick={() => { localStorage.removeItem("token"); navigate("/"); }}
            >
              Logout
            </button>
          </div>
        </nav>

        <main>
          <div className="dash-wrper">

            {/* ── Check-type tabs ───────────────────────────────── */}
            <div className="header-navbar">
              {CHECK_TYPES.map((t) => {
                const accessible = canAccessTab(t.key);
                const count = pendingCount(t.key);
                return (
                  <button
                    key={t.key}
                    className={`tab-cta ${activeTab === t.key ? "active" : ""}`}
                    onClick={() => accessible && setActiveTab(t.key)}
                    title={!accessible ? "Not your assigned check type" : ""}
                    style={{ opacity: !accessible ? 0.35 : 1, cursor: !accessible ? "not-allowed" : "pointer" }}
                  >
                    {t.label}
                    {accessible && count > 0 && (
                      <span style={{ marginLeft: "5px", background: activeTab === t.key ? "#fff" : "#0ea5e9", color: activeTab === t.key ? "#0ea5e9" : "#fff", borderRadius: "8px", padding: "1px 6px", fontSize: "10px", fontWeight: 700 }}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* ── Filters + Search row ──────────────────────────── */}
            <div className="dash-upper-head">
              <div className="left" style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>

                {/* Date presets */}
                {[
                  { key: "all",   label: "All Dates" },
                  { key: "today", label: "Today" },
                  { key: "week",  label: "This Week" },
                  { key: "month", label: "This Month" },
                ].map((p) => (
                  <button
                    key={p.key}
                    className={`tab-cta ${datePreset === p.key ? "active" : ""}`}
                    onClick={() => { setDatePreset(p.key); setShowDatePicker(false); }}
                  >
                    {p.label}
                  </button>
                ))}

                {/* Custom date picker */}
                <div ref={datePickerRef} style={{ position: "relative" }}>
                  <button
                    className={`tab-cta ${datePreset === "custom" ? "active" : ""}`}
                    onClick={() => setShowDatePicker((v) => !v)}
                  >
                    📅 Custom {datePreset === "custom" && customFrom ? `(${customFrom} → ${customTo || "?"})` : ""}
                  </button>
                  {showDatePicker && (
                    <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #ddd", borderRadius: "8px", padding: "14px", zIndex: 200, boxShadow: "0 4px 20px rgba(0,0,0,.13)", display: "flex", flexDirection: "column", gap: "8px", minWidth: "240px" }}>
                      <label style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>From</label>
                      <input type="date" value={customFrom} onChange={(e) => setCustomFrom(e.target.value)} style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "6px 10px", fontSize: "13px" }} />
                      <label style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>To</label>
                      <input type="date" value={customTo} onChange={(e) => setCustomTo(e.target.value)} style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "6px 10px", fontSize: "13px" }} />
                      <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                        <button className="primary-cta" style={{ flex: 1, fontSize: "12px" }} onClick={() => { if (customFrom && customTo) { setDatePreset("custom"); setShowDatePicker(false); } }}>Apply</button>
                        <button className="secondary-cta" style={{ flex: 1, fontSize: "12px" }} onClick={() => { setDatePreset("all"); setCustomFrom(""); setCustomTo(""); setShowDatePicker(false); }}>Clear</button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <span style={{ color: "#e2e8f0", fontSize: "20px" }}>|</span>

                {/* Status filter tabs */}
                {[
                  { key: "all",          label: "All" },
                  { key: "pending",      label: "Pending" },
                  { key: "in-progress",  label: "In Progress" },
                  { key: "completed",    label: "Completed" },
                  { key: "qc-review",    label: "QC Review" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    className={`tab-cta ${statusFilter === key ? "active" : ""}`}
                    onClick={() => setStatusFilter(key)}
                  >
                    {label}
                    <span style={{ marginLeft: "4px", background: "rgba(0,0,0,.1)", borderRadius: "8px", padding: "1px 5px", fontSize: "10px", fontWeight: 700 }}>
                      {statusCounts[key] ?? 0}
                    </span>
                  </button>
                ))}
              </div>

              <div className="right" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                {/* Search */}
                <div className="input-grp" style={{ margin: 0, position: "relative" }}>
                  <input
                    type="text"
                    placeholder="Search ID, name, client..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: "220px", paddingRight: search ? "30px" : "10px" }}
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: "18px", lineHeight: 1 }}
                    >
                      ×
                    </button>
                  )}
                </div>
                <button className="primary-cta export" onClick={() => exportCSV(filtered, activeTab)}>
                  <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
                </button>
              </div>
            </div>

            {/* ── Cases table ──────────────────────────────────── */}
            <div className="down-table" style={{ marginBottom: "16px" }}>
              <table>
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Candidate</th>
                    <th>Client</th>
                    <th>TAT</th>
                    <th>Status</th>
                    <th>Outcome</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: "center", padding: "28px", color: "#9ca3af", fontSize: "14px" }}>
                        No cases match current filters.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((c) => (
                      <tr
                        key={c.id}
                        style={{ background: selectedCase?.id === c.id ? "#eff6ff" : "", transition: "background .15s", cursor: "pointer" }}
                        onClick={() => selectCase(c)}
                      >
                        <td style={{ fontWeight: 700, color: "#0369a1" }}>{c.id}</td>
                        <td>{c.candidate}</td>
                        <td>{c.client}</td>
                        <td>
                          <span style={{ padding: "2px 8px", borderRadius: "10px", fontSize: "12px", fontWeight: 600, background: c.tat === "1d" ? "#fee2e2" : "#f0fdf4", color: c.tat === "1d" ? "#b91c1c" : "#15803d" }}>
                            {c.tat}
                          </span>
                        </td>
                        <td><StatusBadge status={c.status} /></td>
                        <td>
                          {c.verifierResult?.outcome ? (
                            <span style={{ color: outcomeColor(c.verifierResult.outcome), fontSize: "12px", fontWeight: 600 }}>
                              {c.verifierResult.outcome === "clear" ? "✔" : c.verifierResult.outcome === "discrepancy" ? "✗" : "?"} {outcomeLabel(c.verifierResult.outcome)}
                              {c.verifierResult.isDraft && <span style={{ color: "#94a3b8", fontWeight: 400 }}> (Draft)</span>}
                            </span>
                          ) : (
                            <span style={{ color: "#cbd5e1", fontSize: "12px" }}>—</span>
                          )}
                        </td>
                        <td style={{ fontSize: "12px", color: "#6b7280" }}>{c.createdDate}</td>
                        <td onClick={(e) => e.stopPropagation()}>
                          <button
                            className="view-cta"
                            onClick={() => selectCase(c)}
                            style={selectedCase?.id === c.id ? { background: "#0ea5e9", color: "#fff", border: "1px solid #0ea5e9" } : {}}
                          >
                            {selectedCase?.id === c.id ? "● Active" : "Open"}
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div style={{ padding: "8px 14px", fontSize: "12px", color: "#9ca3af", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between" }}>
                <span>Showing {filtered.length} of {allCases.length} {activeTab.replace("_", " ")} cases</span>
                {selectedCase && (
                  <span style={{ color: "#0ea5e9", fontWeight: 600 }}>
                    ● {selectedCase.id} — {selectedCase.candidate} selected
                  </span>
                )}
              </div>
            </div>

            {/* ── 3-card verification layout ───────────────────── */}
            {selectedCase ? (
              <div className="sas-portal-container">
                <div className="sas-emplyment-check-body">

                  {/* ── CARD 1: Source Availability ───────────────── */}
                  <div className="sas-frist-card">
                    <div className="sas-card-header sas-source-header">
                      <h2>SOURCE AVAILABILITY STATUS</h2>
                    </div>

                    <div className="sas-table-header">
                      <span className="sas-th-col col-source">Source</span>
                      <span className="sas-th-col col-type">Type</span>
                      <span className="sas-th-col col-availability">TAT</span>
                      <span className="sas-th-col col-action" />
                    </div>

                    <div className="sas-source-rows-list">
                      {sources.map((s, i) => (
                        <div key={i} className={`sas-source-row ${s.borderClass}`}>
                          <div className="sas-source-info col-source">
                            <span className="sas-source-title">{s.name}</span>
                            <span className="sas-source-tag">{s.tag}</span>
                          </div>
                          <div className="col-type">
                            <span className={`sas-badge ${s.badgeClass}`}>{s.badge}</span>
                          </div>
                          <div className="col-availability">
                            <span className="sas-availability-text">{s.tat}</span>
                          </div>
                          <div className="col-action">
                            <button className="sas-action-btn" onClick={() => handleUseSource(s.name)}>
                              Use
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Case summary mini-panel */}
                    <div style={{ marginTop: "16px", padding: "12px 14px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                      <div style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", marginBottom: "10px" }}>CASE SUMMARY</div>
                      {[
                        ["Case ID",   selectedCase.id],
                        ["Candidate", selectedCase.candidate],
                        ["Client",    selectedCase.client],
                        ["TAT",       selectedCase.tat],
                        ["Priority",  selectedCase.priority || "—"],
                        ["Created",   selectedCase.createdDate],
                        ["Status",    statusLabel(selectedCase.status)],
                      ].map(([k, v]) => (
                        <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", padding: "3px 0", borderBottom: "1px solid #f1f5f9" }}>
                          <span style={{ color: "#64748b" }}>{k}</span>
                          <span style={{ fontWeight: 600, color: "#1e293b" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── CARD 2: Result Entry Form ─────────────────── */}
                  <div className="sas-second-card">
                    <div className="sas-card-header sas-form-header">
                      <h2>
                        RESULT ENTRY FORM — {CHECK_TYPES.find((t) => t.key === activeTab)?.label} Verification
                      </h2>
                    </div>

                    <form className="sas-entry-form" onSubmit={handleSave}>

                      {/* Dynamic fields per check type */}
                      {activeTab === "employment" && <>
                        <FormField label="Employer Confirmed" value={form.employer     || ""} onChange={(v) => setForm({ ...form, employer: v })} />
                        <FormField label="Employment Period"  value={form.period       || ""} onChange={(v) => setForm({ ...form, period: v })} />
                        <FormField label="Designation"        value={form.designation  || ""} onChange={(v) => setForm({ ...form, designation: v })} />
                        <FormField label="Exit Reason"        value={form.exitReason   || ""} onChange={(v) => setForm({ ...form, exitReason: v })} />
                      </>}

                      {activeTab === "education" && <>
                        <FormField label="Institution"     value={form.institution  || ""} onChange={(v) => setForm({ ...form, institution: v })} />
                        <FormField label="Degree"          value={form.degree       || ""} onChange={(v) => setForm({ ...form, degree: v })} />
                        <FormField label="Year of Passing" value={form.yop          || ""} onChange={(v) => setForm({ ...form, yop: v })} />
                        <FormField label="Roll Number"     value={form.rollNo       || ""} onChange={(v) => setForm({ ...form, rollNo: v })} />
                      </>}

                      {activeTab === "address" && <>
                        <FormField label="Address"      value={form.address || ""} onChange={(v) => setForm({ ...form, address: v })} />
                        <FormField label="Address Type" value={form.type    || ""} onChange={(v) => setForm({ ...form, type: v })} />
                      </>}

                      {activeTab === "database" && <>
                        <FormField label="Screen Type" value={form.screenType || ""} onChange={(v) => setForm({ ...form, screenType: v })} />
                        <FormField label="Result"      value={form.result     || ""} onChange={(v) => setForm({ ...form, result: v })} />
                      </>}

                      {activeTab === "criminal" && <>
                        <FormField label="Court"        value={form.court        || ""} onChange={(v) => setForm({ ...form, court: v })} />
                        <FormField label="Jurisdiction" value={form.jurisdiction || ""} onChange={(v) => setForm({ ...form, jurisdiction: v })} />
                      </>}

                      {activeTab === "drug_test" && <>
                        <FormField label="Lab"         value={form.lab        || ""} onChange={(v) => setForm({ ...form, lab: v })} />
                        <FormField label="Sample Type" value={form.sampleType || ""} onChange={(v) => setForm({ ...form, sampleType: v })} />
                      </>}

                      {activeTab === "courtroom" && <>
                        <FormField label="Court"          value={form.court   || ""} onChange={(v) => setForm({ ...form, court: v })} />
                        <FormField label="Case Reference" value={form.caseRef || ""} onChange={(v) => setForm({ ...form, caseRef: v })} />
                      </>}

                      {/* Outcome toggle */}
                      <div className="sas-form-group">
                        <label className="sas-form-label">Verification Outcome</label>
                        <div className="sas-outcome-toggle-group">
                          {[
                            { key: "clear",       label: "Clear" },
                            { key: "discrepancy", label: "Discrepancy" },
                            { key: "unable",      label: "Unable to Verify" },
                          ].map((o) => (
                            <button
                              key={o.key}
                              type="button"
                              className="sas-toggle-btn"
                              style={{
                                background:  outcome === o.key ? outcomeColor(o.key) : "",
                                color:       outcome === o.key ? "#fff" : "",
                                borderColor: outcome === o.key ? outcomeColor(o.key) : "",
                                fontWeight:  outcome === o.key ? 700 : "",
                                transform:   outcome === o.key ? "scale(1.03)" : "",
                                transition:  "all .15s",
                              }}
                              onClick={() => setOutcome(o.key)}
                            >
                              {o.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Remarks */}
                      <div className="sas-form-group flex-grow-input">
                        <label className="sas-form-label">Verifier Remarks</label>
                        <textarea
                          className="sas-form-textarea"
                          rows="4"
                          placeholder="Enter detailed remarks, discrepancy notes, or any supporting information..."
                          value={remarks}
                          onChange={(e) => setRemarks(e.target.value)}
                        />
                      </div>

                      {/* Status feedback */}
                      {saveStatus === "saved" && (
                        <div style={{ padding: "8px 12px", borderRadius: "6px", background: "#dcfce7", color: "#15803d", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
                          ✔ Result saved — case marked as Completed.
                        </div>
                      )}
                      {saveStatus === "draft" && (
                        <div style={{ padding: "8px 12px", borderRadius: "6px", background: "#f0f9ff", color: "#0369a1", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
                          💾 Draft saved — case is In Progress.
                        </div>
                      )}
                      {saveStatus === "error" && (
                        <div style={{ padding: "8px 12px", borderRadius: "6px", background: "#fef2f2", color: "#b91c1c", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
                          ✗ Error saving. Please try again.
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="sas-form-actions-row">
                        <button type="submit" className="sas-btn-submit">SAVE & MARK DONE</button>
                        <button type="button" className="sas-btn-draft" onClick={handleDraft}>SAVE DRAFT</button>
                        <button
                          type="button"
                          className="sas-btn-cancel"
                          title="Close case"
                          onClick={() => { setSelectedCase(null); setForm({}); setSaveStatus(""); }}
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>

                    </form>
                  </div>

                  {/* ── CARD 3: Activity Log + Comments ──────────── */}
                  <div className="sas-thrid-card">

                    {/* Activity log */}
                    <div className="sas-activity-block">
                      <div className="sas-card-header sas-activity-header">
                        <h2>ACTIVITY LOG & COMMENTS</h2>
                      </div>
                      <div className="sas-activity-content">
                        <h3 className="sas-section-subtitle">Status Timeline</h3>
                        <div className="sas-timeline-list" style={{ maxHeight: "220px", overflowY: "auto" }}>
                          {activity.map((a, i) => (
                            <div key={i} className="sas-timeline-item">
                              <div className="sas-timeline-left">
                                <span className="sas-time-stamp">{a.time}</span>
                                <div className="sas-timeline-node node-active">
                                  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                              </div>
                              <div className="sas-timeline-right">
                                <span className="sas-log-text text-highlight">{a.text}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="sas-comments-sub-block">
                      <div className="sas-comments-bar-header">
                        <h3>
                          COMMENTS
                          <span style={{ fontSize: "11px", fontWeight: 400, color: "#94a3b8", marginLeft: "6px" }}>
                            ({comments.length})
                          </span>
                        </h3>
                      </div>
                      <div className="sas-comments-container">
                        <div className="sas-comments-stream" style={{ maxHeight: "240px", overflowY: "auto" }}>
                          {comments.length === 0 && (
                            <p style={{ textAlign: "center", color: "#bbb", fontSize: "13px", padding: "16px 0" }}>
                              No comments yet.
                            </p>
                          )}
                          {comments.map((c) => (
                            <div key={c.id} className="sas-comment-bubble">
                              <div className={`sas-comment-avatar ${c.avatarClass}`}>{c.avatar}</div>
                              <div className="sas-comment-body">
                                <div className="sas-comment-info-row">
                                  <span className="sas-commenter-title">{c.author}</span>
                                  <span className="sas-comment-date">{c.time}</span>
                                </div>
                                <p className="sas-comment-desc">{c.text}</p>
                              </div>
                            </div>
                          ))}
                          <div ref={commentsEndRef} />
                        </div>

                        <form className="sas-reply-form" onSubmit={handleComment}>
                          <input
                            type="text"
                            placeholder="Add a comment..."
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                            autoComplete="off"
                          />
                          <button type="submit" className="sas-send-btn" aria-label="Send comment">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="22" y1="2" x2="11" y2="13" />
                              <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ) : (
              /* Empty state */
              <div style={{ textAlign: "center", padding: "56px 20px", color: "#94a3b8", background: "#f8fafc", borderRadius: "12px", border: "1px dashed #e2e8f0" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>📋</div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#64748b", marginBottom: "6px" }}>No Case Selected</div>
                <div style={{ fontSize: "13px" }}>
                  Click <strong>Open</strong> on any case above (or click a row) to begin verification.
                </div>
              </div>
            )}

          </div>
        </main>
      </section>
    </>
  );
}
