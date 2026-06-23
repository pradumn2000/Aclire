// // // // import { useNavigate } from "react-router-dom";


// // // // export default function Verifyer() {
// // // //   const navigate = useNavigate();

// // // //   const logout = () => {
// // // //     localStorage.removeItem("token");
// // // //     navigate("/");
// // // //   };


// // // //   return (
// // // //     <>
 

// // // //   {/* CONTENT */}
// // // //   <section id="noSidebar">
// // // //     {/* NAVBAR */}
// // // //     <nav className="verifyer">
// // // //       <div className="nav-toggle">
// // // //         <div className="bx bx-menu">
// // // //           <img src="images/inner-pages/emp-check-icon.svg" alt="" />
// // // //         </div>
// // // //       </div>
      
// // // //       <div className="head-src">
// // // //         <h3>VERIFIER — Resoult Avalibility & Result Entry | BGV-2401 Employment</h3>
// // // //       </div>
      
// // // //       <button type="button" className="primary-cta">Verifier Role</button>
// // // //     </nav>


// // // //     {/* MAIN */}
// // // //     <main>

// // // //      <div className="dash-wrper">

// // // //      <div className="header-navbar">
      
// // // //           <button className="tab-cta">Employment</button>
// // // //           <button className="tab-cta active">Education</button>
// // // //           <button className="tab-cta">Address</button>
// // // //           <button className="tab-cta">Database</button>
// // // //           <button className="tab-cta">Criminal</button>
// // // //           <button className="tab-cta">Drug Test</button>
// // // //           <button className="tab-cta">Courtroom</button>
          
// // // //      </div>

// // // //           <div className="dash-upper-head">
// // // //           <div className="left"> 
// // // //           <button className="tab-cta">Today</button>
// // // //           <button className="tab-cta">This Week</button>
// // // //           <button className="tab-cta">This Month</button>
// // // //           <button className="tab-cta active">Custom</button>
// // // //           </div>
// // // //           <div className="right">
// // // //           <button className="date-wrapper"><img src="/images/dashboard/calendar-icon.svg"></img><input
// // // //         type="text"
// // // //         name="daterange"
// // // //         className="selectedDate"
// // // //         placeholder="Select Date"
// // // //         readOnly
// // // //       /></button>
// // // //           <button className="primary-cta export"><img src="images/dashboard/export-icon.svg" alt="" /> Export CSV</button>
// // // //           <button className="secondary-cta import"><img src="images/dashboard/export-excel.svg" alt="" />Export Excel</button>
// // // //           </div>
// // // //           </div>

      

// // // //       {/* Emplyment Check  body */}

// // // //     {/* Main Portal Layout Container */}
// // // // <div className="sas-portal-container">

// // // //   {/* Outer Flexbox Layout */}
// // // //   <div className="sas-emplyment-check-body">

// // // //     {/* FIRST CARD */}
// // // //     <div className="sas-frist-card">

// // // //       <div className="sas-card-header sas-source-header">
// // // //         <h2>SOURCE AVAILABILITY STATUS</h2>
// // // //       </div>

// // // //       {/* Table Header */}
// // // //       <div className="sas-table-header">
// // // //         <span className="sas-th-col col-source">Source</span>
// // // //         <span className="sas-th-col col-type">Type</span>
// // // //         <span className="sas-th-col col-availability">Availability</span>
// // // //         <span className="sas-th-col col-tat">TAT</span>
// // // //         <span className="sas-th-col col-action"></span>
// // // //       </div>

// // // //       {/* Rows */}
// // // //       <div className="sas-source-rows-list">

// // // //         <div className="sas-source-row status-border-green">

// // // //           <div className="sas-source-info col-source">
// // // //             <span className="sas-source-title">
// // // //               Infosys HR Portal
// // // //             </span>

// // // //             <span className="sas-source-tag">
// // // //               Email
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-type">
// // // //             <span className="sas-badge badge-responsive">
// // // //               Responsive
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-availability">
// // // //             <span className="sas-availability-text">
// // // //               24h
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-action">
// // // //             <button className="sas-action-btn">
// // // //               Use
// // // //             </button>
// // // //           </div>

// // // //         </div>

// // // //         <div className="sas-source-row status-border-teal">

// // // //           <div className="sas-source-info col-source">
// // // //             <span className="sas-source-title">
// // // //               Employment DB API
// // // //             </span>

// // // //             <span className="sas-source-tag">
// // // //               API
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-type">
// // // //             <span className="sas-badge badge-live">
// // // //               Live
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-availability">
// // // //             <span className="sas-availability-text">
// // // //               Instant
// // // //             </span>
// // // //           </div>


// // // //           <div className="col-action">
// // // //             <button className="sas-action-btn">
// // // //               Use
// // // //             </button>
// // // //           </div>

// // // //         </div>

// // // //         <div className="sas-source-row status-border-orange">

// // // //           <div className="sas-source-info col-source">
// // // //             <span className="sas-source-title">
// // // //               EPFO Records
// // // //             </span>

// // // //             <span className="sas-source-tag">
// // // //               Government
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-type">
// // // //             <span className="sas-badge badge-partially">
// // // //               Partially
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-availability">
// // // //             <span className="sas-availability-text">
// // // //               48h
// // // //             </span>
// // // //           </div>


// // // //           <div className="col-action">
// // // //             <button className="sas-action-btn">
// // // //               Use
// // // //             </button>
// // // //           </div>

// // // //         </div>


// // // //         <div className="sas-source-row status-border-teal">

// // // //           <div className="sas-source-info col-source">
// // // //             <span className="sas-source-title">
// // // //               Employment DB API
// // // //             </span>

// // // //             <span className="sas-source-tag">
// // // //               API
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-type">
// // // //             <span className="sas-badge badge-live">
// // // //               Live
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-availability">
// // // //             <span className="sas-availability-text">
// // // //               Instant
// // // //             </span>
// // // //           </div>


// // // //           <div className="col-action">
// // // //             <button className="sas-action-btn">
// // // //               Use
// // // //             </button>
// // // //           </div>

// // // //         </div>

// // // //         <div className="sas-source-row status-border-orange">

// // // //           <div className="sas-source-info col-source">
// // // //             <span className="sas-source-title">
// // // //               EPFO Records
// // // //             </span>

// // // //             <span className="sas-source-tag">
// // // //               Government
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-type">
// // // //             <span className="sas-badge badge-partially">
// // // //               Partially
// // // //             </span>
// // // //           </div>

// // // //           <div className="col-availability">
// // // //             <span className="sas-availability-text">
// // // //               48h
// // // //             </span>
// // // //           </div>


// // // //           <div className="col-action">
// // // //             <button className="sas-action-btn">
// // // //               Use
// // // //             </button>
// // // //           </div>

// // // //         </div>

// // // //       </div>
// // // //     </div>

// // // //     {/* SECOND CARD */}
// // // //     <div className="sas-second-card">

// // // //       <div className="sas-card-header sas-form-header">
// // // //         <h2>
// // // //           RESULT ENTRY FORM — Employment Verification
// // // //         </h2>
// // // //       </div>

// // // //       <form className="sas-entry-form" id="resultEntryForm">

// // // //         <div className="sas-form-group">
// // // //           <label className="sas-form-label">
// // // //             Employer Confirmed
// // // //           </label>

// // // //           <input
// // // //             type="text"
// // // //             className="sas-form-input"
// // // //             defaultValue="Infosys Limited"
// // // //             placeholder="Enter confirmed employer name"
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="sas-form-group">
// // // //           <label className="sas-form-label">
// // // //             Employment Period
// // // //           </label>

// // // //           <input
// // // //             type="text"
// // // //             className="sas-form-input"
// // // //             defaultValue="Jan 2018 – Mar 2022"
// // // //             placeholder="e.g., Jan 2018 - Mar 2022"
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="sas-form-group">
// // // //           <label className="sas-form-label">
// // // //             Designation
// // // //           </label>

// // // //           <input
// // // //             type="text"
// // // //             className="sas-form-input"
// // // //             defaultValue="Senior Systems Engineer"
// // // //             placeholder="Enter designation"
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="sas-form-group">
// // // //           <label className="sas-form-label">
// // // //             Exit Reason
// // // //           </label>

// // // //           <input
// // // //             type="text"
// // // //             className="sas-form-input"
// // // //             defaultValue="Resignation (voluntary)"
// // // //             placeholder="Enter exit reason"
// // // //             required
// // // //           />
// // // //         </div>

// // // //         {/* Toggle Buttons */}
// // // //         <div className="sas-form-group">

// // // //           <label className="sas-form-label">
// // // //             Verification Outcome
// // // //           </label>

// // // //           <div className="sas-outcome-toggle-group">

// // // //             <button
// // // //               type="button"
// // // //               className="sas-toggle-btn active-clear"
// // // //             >
// // // //               Clear
// // // //             </button>

// // // //             <button
// // // //               type="button"
// // // //               className="sas-toggle-btn"
// // // //             >
// // // //               Discrepancy
// // // //             </button>

// // // //             <button
// // // //               type="button"
// // // //               className="sas-toggle-btn"
// // // //             >
// // // //               Unable to Verify
// // // //             </button>

// // // //           </div>
// // // //         </div>

// // // //         {/* Remarks */}
// // // //         <div className="sas-form-group flex-grow-input">

// // // //           <label className="sas-form-label">
// // // //             Verifier Remarks
// // // //           </label>

// // // //           <textarea
// // // //             className="sas-form-textarea"
// // // //             rows="3"
// // // //             placeholder="Enter detailed remarks..."
// // // //             defaultValue="HR responded via email on 02/05. All details match."
// // // //           ></textarea>

// // // //         </div>

// // // //         {/* Actions */}
// // // //         <div className="sas-form-actions-row">

// // // //           <button
// // // //             type="submit"
// // // //             className="sas-btn-submit"
// // // //           >
// // // //             SAVE & MARK DONE
// // // //           </button>

// // // //           <button
// // // //             type="button"
// // // //             className="sas-btn-draft"
// // // //             id="btnSaveDraft"
// // // //           >
// // // //             SAVE DRAFT
// // // //           </button>

// // // //           <button
// // // //             type="button"
// // // //             className="sas-btn-cancel"
// // // //             aria-label="Cancel"
// // // //           >

// // // //             <svg
// // // //               viewBox="0 0 24 24"
// // // //               width="18"
// // // //               height="18"
// // // //               fill="none"
// // // //               stroke="currentColor"
// // // //               strokeWidth="2.5"
// // // //               strokeLinecap="round"
// // // //               strokeLinejoin="round"
// // // //             >
// // // //               <line x1="18" y1="6" x2="6" y2="18"></line>
// // // //               <line x1="6" y1="6" x2="18" y2="18"></line>
// // // //             </svg>

// // // //           </button>

// // // //         </div>

// // // //       </form>
// // // //     </div>

// // // //     {/* THIRD CARD */}
// // // //     <div className="sas-thrid-card">

// // // //       {/* Activity */}
// // // //       <div className="sas-activity-block">

// // // //         <div className="sas-card-header sas-activity-header">
// // // //           <h2>ACTIVITY LOG & COMMENTS</h2>
// // // //         </div>

// // // //         <div className="sas-activity-content">

// // // //           <h3 className="sas-section-subtitle">
// // // //             Status Timeline
// // // //           </h3>

// // // //           <div className="sas-timeline-list">

// // // //             <div className="sas-timeline-item">

// // // //               <div className="sas-timeline-left">

// // // //                 <span className="sas-time-stamp">
// // // //                   11:02
// // // //                 </span>

// // // //                 <div className="sas-timeline-node node-active">

// // // //                   <svg
// // // //                     viewBox="0 0 24 24"
// // // //                     width="10"
// // // //                     height="10"
// // // //                     fill="none"
// // // //                     stroke="currentColor"
// // // //                     strokeWidth="3"
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   >
// // // //                     <polyline points="20 6 9 17 4 12"></polyline>
// // // //                   </svg>

// // // //                 </div>

// // // //               </div>

// // // //               <div className="sas-timeline-right">
// // // //                 <span className="sas-log-text text-highlight">
// // // //                   Result saved (Draft)
// // // //                 </span>
// // // //               </div>

// // // //             </div>

// // // //           </div>

// // // //         </div>
// // // //       </div>

// // // //       {/* COMMENTS */}
// // // //       <div className="sas-comments-sub-block">

// // // //         <div className="sas-comments-bar-header">
// // // //           <h3>COMMENTS</h3>
// // // //         </div>

// // // //         <div className="sas-comments-container">

// // // //           <div
// // // //             className="sas-comments-stream"
// // // //             id="sasCommentsStream"
// // // //           >

// // // //             <div className="sas-comment-bubble">

// // // //               <div className="sas-comment-avatar avatar-purple">
// // // //                 P
// // // //               </div>

// // // //               <div className="sas-comment-body">

// // // //                 <div className="sas-comment-info-row">

// // // //                   <span className="sas-commenter-title">
// // // //                     Priya (QC)
// // // //                   </span>

// // // //                   <span className="sas-comment-date">
// // // //                     10:50 AM
// // // //                   </span>

// // // //                 </div>

// // // //                 <p className="sas-comment-desc">
// // // //                   Please confirm exit reason documented.
// // // //                 </p>

// // // //               </div>

// // // //             </div>

// // // //           </div>

// // // //           {/* Reply */}
// // // //           <form
// // // //             className="sas-reply-form"
// // // //             id="sasReplyForm"
// // // //           >

// // // //             <input
// // // //               type="text"
// // // //               id="sasReplyInput"
// // // //               placeholder="Reply..."
// // // //               autoComplete="off"
// // // //               required
// // // //             />

// // // //             <button
// // // //               type="submit"
// // // //               className="sas-send-btn"
// // // //               aria-label="Send reply"
// // // //             >

// // // //               <svg
// // // //                 viewBox="0 0 24 24"
// // // //                 width="16"
// // // //                 height="16"
// // // //                 fill="none"
// // // //                 stroke="currentColor"
// // // //                 strokeWidth="2.5"
// // // //                 strokeLinecap="round"
// // // //                 strokeLinejoin="round"
// // // //               >
// // // //                 <line x1="22" y1="2" x2="11" y2="13"></line>

// // // //                 <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
// // // //               </svg>

// // // //             </button>

// // // //           </form>

// // // //         </div>
// // // //       </div>

// // // //     </div>
// // // //   </div>
// // // // </div>
      
      
// // // //      </div>
      
// // // //     </main>
// // // //   </section>
// // // // </>
// // // //   );
// // // // }
// // // import { useState, useRef, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import Sidebar from "./Sidebar";

// // // // ─────────────────────────────────────────
// // // // Mock cases per check type
// // // // Replace with API call when backend is ready:
// // // // GET /api/cases?check_type={checkType}&assigned_to={userId}
// // // // ─────────────────────────────────────────
// // // const MOCK_CASES = {
// // //   employment: [
// // //     { id: "BGV-2401", candidate: "Ravi Kumar",   client: "Infosys", tat: "3d", status: "pending",     employer: "Infosys Limited",       period: "Jan 2018 – Mar 2022", designation: "Sr. Systems Engineer", exitReason: "Resignation (voluntary)" },
// // //     { id: "BGV-2402", candidate: "Anjali Mehta", client: "TCS",     tat: "5d", status: "in-progress", employer: "Tata Consultancy",       period: "Jun 2019 – Dec 2023", designation: "Business Analyst",     exitReason: "Better opportunity" },
// // //     { id: "BGV-2403", candidate: "Suresh Pillai",client: "Wipro",   tat: "4d", status: "completed",   employer: "Wipro Technologies",     period: "Mar 2015 – Aug 2019", designation: "Project Manager",      exitReason: "Retirement" },
// // //     { id: "BGV-2404", candidate: "Neha Sharma",  client: "HCL",     tat: "1d", status: "pending",     employer: "HCL Technologies",       period: "Jul 2020 – Present",  designation: "Software Engineer",    exitReason: "—" },
// // //   ],
// // //   education: [
// // //     { id: "BGV-2405", candidate: "Amit Verma",   client: "Accenture", tat: "2d", status: "pending",     institution: "Delhi University", degree: "B.Tech", yop: "2017", rollNo: "DU17CS042" },
// // //     { id: "BGV-2406", candidate: "Priya Singh",  client: "Cognizant", tat: "3d", status: "in-progress", institution: "Mumbai University",degree: "MBA",    yop: "2019", rollNo: "MU19MB118" },
// // //   ],
// // //   address: [
// // //     { id: "BGV-2407", candidate: "Rohit Gupta",  client: "Infosys", tat: "2d", status: "pending",     address: "42 MG Road, Bangalore 560001", type: "Permanent" },
// // //   ],
// // //   database: [
// // //     { id: "BGV-2408", candidate: "Kavya Nair",   client: "TCS",     tat: "1d", status: "pending",     screenType: "CIBIL + Criminal DB", result: "Pending" },
// // //   ],
// // //   criminal: [
// // //     { id: "BGV-2409", candidate: "Deepak Rao",   client: "Wipro",   tat: "4d", status: "pending",     court: "Bangalore District Court", jurisdiction: "Civil + Criminal" },
// // //   ],
// // //   drug_test: [
// // //     { id: "BGV-2410", candidate: "Sneha Iyer",   client: "HCL",     tat: "3d", status: "pending",     lab: "Apollo Diagnostics", sampleType: "Urine" },
// // //   ],
// // //   courtroom: [
// // //     { id: "BGV-2411", candidate: "Vikram Mehta", client: "Infosys", tat: "5d", status: "pending",     court: "Mumbai High Court", caseRef: "MHC/2023/4421" },
// // //   ],
// // // };

// // // const CHECK_TYPES = [
// // //   { key: "employment", label: "Employment" },
// // //   { key: "education",  label: "Education" },
// // //   { key: "address",    label: "Address" },
// // //   { key: "database",   label: "Database" },
// // //   { key: "criminal",   label: "Criminal" },
// // //   { key: "drug_test",  label: "Drug Test" },
// // //   { key: "courtroom",  label: "Courtroom" },
// // // ];

// // // const SOURCES = {
// // //   employment: [
// // //     { name: "Infosys HR Portal",   tag: "Email",      badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green" },
// // //     { name: "Employment DB API",   tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
// // //     { name: "EPFO Records",        tag: "Government", badge: "Partially",  badgeClass: "badge-partially",  tat: "48h",     borderClass: "status-border-orange" },
// // //   ],
// // //   education: [
// // //     { name: "University Portal",   tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
// // //     { name: "Result Link DB",      tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green" },
// // //   ],
// // //   address: [
// // //     { name: "Field Agent",         tag: "Physical",   badge: "Available",  badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-green" },
// // //     { name: "Digital Trace",       tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
// // //   ],
// // //   database: [
// // //     { name: "CIBIL API",           tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
// // //     { name: "Criminal DB",         tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green" },
// // //   ],
// // //   criminal: [
// // //     { name: "District Court",      tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "72h",     borderClass: "status-border-orange" },
// // //     { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
// // //   ],
// // //   drug_test: [
// // //     { name: "Apollo Diagnostics",  tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green" },
// // //     { name: "SRL Diagnostics",     tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-orange" },
// // //   ],
// // //   courtroom: [
// // //     { name: "High Court Registry", tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "5d",      borderClass: "status-border-orange" },
// // //     { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
// // //   ],
// // // };

// // // // Get verifier's assigned check type from user object
// // // // When API is ready: user.check_type from login response
// // // function getAssignedCheckType() {
// // //   try {
// // //     const user = JSON.parse(localStorage.getItem("user")) || {};
// // //     return user.check_type || "employment"; // default to employment until API provides it
// // //   } catch {
// // //     return "employment";
// // //   }
// // // }

// // // export default function Verifyer() {
// // //   const navigate = useNavigate();

// // //   const assignedType  = getAssignedCheckType();
// // //   const [activeTab, setActiveTab]     = useState(assignedType);
// // //   const [cases, setCases]             = useState(MOCK_CASES[assignedType] || []);
// // //   const [selectedCase, setSelectedCase] = useState(null);

// // //   // Form state
// // //   const [form, setForm]       = useState({});
// // //   const [outcome, setOutcome] = useState("clear");
// // //   const [remarks, setRemarks] = useState("");
// // //   const [saveStatus, setSaveStatus] = useState(""); // "saved" | "draft" | ""

// // //   // Activity log
// // //   const [activity, setActivity] = useState([
// // //     { time: "10:30", text: "Case assigned to verifier" },
// // //   ]);

// // //   // Comments
// // //   const [comments, setComments] = useState([
// // //     { id: 1, author: "Priya (QC)", avatar: "P", avatarClass: "avatar-purple", time: "10:50 AM", text: "Please confirm exit reason documented." },
// // //   ]);
// // //   const [commentInput, setCommentInput] = useState("");
// // //   const commentsEndRef = useRef(null);

// // //   // Search
// // //   const [search, setSearch] = useState("");

// // //   // Load cases when tab changes
// // //   useEffect(() => {
// // //     setCases(MOCK_CASES[activeTab] || []);
// // //     setSelectedCase(null);
// // //     setForm({});
// // //     setSaveStatus("");
// // //   }, [activeTab]);

// // //   // Scroll comments to bottom when new comment added
// // //   useEffect(() => {
// // //     commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [comments]);

// // //   // Select a case — pre-fill form
// // //   const selectCase = (c) => {
// // //     setSelectedCase(c);
// // //     setForm({ ...c });
// // //     setOutcome("clear");
// // //     setRemarks("");
// // //     setSaveStatus("");
// // //     setActivity([
// // //       { time: formatTime(), text: `Case ${c.id} opened` },
// // //     ]);
// // //   };

// // //   // Save & Mark Done
// // //   const handleSave = (e) => {
// // //     e.preventDefault();
// // //     if (!selectedCase) return;

// // //     // TODO: Replace with API call:
// // //     // POST /api/cases/{id}/result
// // //     // { ...form, outcome, remarks, status: "completed" }

// // //     setCases((prev) =>
// // //       prev.map((c) => c.id === selectedCase.id ? { ...c, status: "completed" } : c)
// // //     );
// // //     setActivity((prev) => [
// // //       ...prev,
// // //       { time: formatTime(), text: `Result saved — ${outcomeLabel(outcome)}` },
// // //     ]);
// // //     setSaveStatus("saved");
// // //   };

// // //   // Save Draft
// // //   const handleDraft = () => {
// // //     if (!selectedCase) return;

// // //     // TODO: POST /api/cases/{id}/draft
// // //     setCases((prev) =>
// // //       prev.map((c) => c.id === selectedCase.id ? { ...c, status: "in-progress" } : c)
// // //     );
// // //     setActivity((prev) => [
// // //       ...prev,
// // //       { time: formatTime(), text: "Draft saved" },
// // //     ]);
// // //     setSaveStatus("draft");
// // //   };

// // //   // Post comment
// // //   const handleComment = (e) => {
// // //     e.preventDefault();
// // //     if (!commentInput.trim()) return;

// // //     const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();
// // //     const name = user.name || "Verifier";
// // //     const initial = name.charAt(0).toUpperCase();

// // //     // TODO: POST /api/cases/{id}/comments { text: commentInput }
// // //     setComments((prev) => [
// // //       ...prev,
// // //       { id: Date.now(), author: name, avatar: initial, avatarClass: "avatar-blue", time: formatTime(true), text: commentInput.trim() },
// // //     ]);
// // //     setCommentInput("");
// // //     setActivity((prev) => [
// // //       ...prev,
// // //       { time: formatTime(), text: "Comment added" },
// // //     ]);
// // //   };

// // //   // Filtered cases
// // //   const filtered = cases.filter((c) =>
// // //     c.id.toLowerCase().includes(search.toLowerCase()) ||
// // //     c.candidate.toLowerCase().includes(search.toLowerCase()) ||
// // //     c.client.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   const sources = SOURCES[activeTab] || [];
// // //   const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

// // //   return (
// // //     <>
// // //       <Sidebar />

// // //       <section id="noSidebar">

// // //         {/* Nav */}
// // //         <nav className="verifyer">
// // //           <div className="nav-toggle">
// // //             <img src="images/inner-pages/emp-check-icon.svg" alt="" />
// // //           </div>
// // //           <div className="head-src">
// // //             <h3>
// // //               VERIFIER — {CHECK_TYPES.find(t => t.key === activeTab)?.label} Check
// // //               {selectedCase ? ` | ${selectedCase.id} · ${selectedCase.candidate}` : ""}
// // //             </h3>
// // //           </div>
// // //           <button type="button" className="primary-cta">
// // //             {user.name || "Verifier"}
// // //           </button>
// // //         </nav>

// // //         <main>
// // //           <div className="dash-wrper">

// // //             {/* Check type tabs */}
// // //             <div className="header-navbar">
// // //               {CHECK_TYPES.map((t) => (
// // //                 <button
// // //                   key={t.key}
// // //                   className={`tab-cta ${activeTab === t.key ? "active" : ""} ${t.key !== assignedType ? "tab-disabled" : ""}`}
// // //                   onClick={() => t.key === assignedType && setActiveTab(t.key)}
// // //                   title={t.key !== assignedType ? "Not your assigned check type" : ""}
// // //                   style={{ opacity: t.key !== assignedType ? 0.4 : 1, cursor: t.key !== assignedType ? "not-allowed" : "pointer" }}
// // //                 >
// // //                   {t.label}
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             {/* Date filters + search */}
// // //             <div className="dash-upper-head">
// // //               <div className="left">
// // //                 <button className="tab-cta">Today</button>
// // //                 <button className="tab-cta">This Week</button>
// // //                 <button className="tab-cta">This Month</button>
// // //                 <button className="tab-cta active">Custom</button>
// // //               </div>
// // //               <div className="right">
// // //                 <div className="input-grp" style={{ margin: 0 }}>
// // //                   <input
// // //                     type="text"
// // //                     placeholder="Search cases..."
// // //                     value={search}
// // //                     onChange={(e) => setSearch(e.target.value)}
// // //                     style={{ minWidth: "200px" }}
// // //                   />
// // //                 </div>
// // //                 <button className="primary-cta export">
// // //                   <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Cases list (above the 3-card layout) */}
// // //             <div className="down-table" style={{ marginBottom: "16px" }}>
// // //               <table>
// // //                 <thead>
// // //                   <tr>
// // //                     <th>Case ID</th>
// // //                     <th>Candidate</th>
// // //                     <th>Client</th>
// // //                     <th>TAT</th>
// // //                     <th>Status</th>
// // //                     <th>Action</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {filtered.length === 0 ? (
// // //                     <tr><td colSpan="6" style={{ textAlign: "center", padding: "20px", color: "#888" }}>No cases found.</td></tr>
// // //                   ) : (
// // //                     filtered.map((c) => (
// // //                       <tr
// // //                         key={c.id}
// // //                         style={{ background: selectedCase?.id === c.id ? "#f0f7ff" : "" }}
// // //                       >
// // //                         <td>{c.id}</td>
// // //                         <td>{c.candidate}</td>
// // //                         <td>{c.client}</td>
// // //                         <td>{c.tat}</td>
// // //                         <td><span className={`status ${c.status}`}>{statusLabel(c.status)}</span></td>
// // //                         <td>
// // //                           <button
// // //                             className="view-cta"
// // //                             onClick={() => selectCase(c)}
// // //                           >
// // //                             {selectedCase?.id === c.id ? "Selected" : "Open"}
// // //                           </button>
// // //                         </td>
// // //                       </tr>
// // //                     ))
// // //                   )}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             {/* 3-card verification layout */}
// // //             {selectedCase ? (
// // //               <div className="sas-portal-container">
// // //                 <div className="sas-emplyment-check-body">

// // //                   {/* CARD 1 — Source availability */}
// // //                   <div className="sas-frist-card">
// // //                     <div className="sas-card-header sas-source-header">
// // //                       <h2>SOURCE AVAILABILITY STATUS</h2>
// // //                     </div>
// // //                     <div className="sas-table-header">
// // //                       <span className="sas-th-col col-source">Source</span>
// // //                       <span className="sas-th-col col-type">Type</span>
// // //                       <span className="sas-th-col col-availability">TAT</span>
// // //                       <span className="sas-th-col col-action"></span>
// // //                     </div>
// // //                     <div className="sas-source-rows-list">
// // //                       {sources.map((s, i) => (
// // //                         <div key={i} className={`sas-source-row ${s.borderClass}`}>
// // //                           <div className="sas-source-info col-source">
// // //                             <span className="sas-source-title">{s.name}</span>
// // //                             <span className="sas-source-tag">{s.tag}</span>
// // //                           </div>
// // //                           <div className="col-type">
// // //                             <span className={`sas-badge ${s.badgeClass}`}>{s.badge}</span>
// // //                           </div>
// // //                           <div className="col-availability">
// // //                             <span className="sas-availability-text">{s.tat}</span>
// // //                           </div>
// // //                           <div className="col-action">
// // //                             <button
// // //                               className="sas-action-btn"
// // //                               onClick={() => setActivity((prev) => [...prev, { time: formatTime(), text: `Source selected: ${s.name}` }])}
// // //                             >
// // //                               Use
// // //                             </button>
// // //                           </div>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>

// // //                   {/* CARD 2 — Result entry form */}
// // //                   <div className="sas-second-card">
// // //                     <div className="sas-card-header sas-form-header">
// // //                       <h2>RESULT ENTRY FORM — {CHECK_TYPES.find(t => t.key === activeTab)?.label} Verification</h2>
// // //                     </div>

// // //                     <form className="sas-entry-form" onSubmit={handleSave}>

// // //                       {/* Dynamic fields based on check type */}
// // //                       {activeTab === "employment" && <>
// // //                         <FormField label="Employer Confirmed"  value={form.employer     || ""} onChange={(v) => setForm({ ...form, employer: v })} />
// // //                         <FormField label="Employment Period"   value={form.period       || ""} onChange={(v) => setForm({ ...form, period: v })} />
// // //                         <FormField label="Designation"        value={form.designation  || ""} onChange={(v) => setForm({ ...form, designation: v })} />
// // //                         <FormField label="Exit Reason"        value={form.exitReason   || ""} onChange={(v) => setForm({ ...form, exitReason: v })} />
// // //                       </>}

// // //                       {activeTab === "education" && <>
// // //                         <FormField label="Institution"        value={form.institution  || ""} onChange={(v) => setForm({ ...form, institution: v })} />
// // //                         <FormField label="Degree"             value={form.degree       || ""} onChange={(v) => setForm({ ...form, degree: v })} />
// // //                         <FormField label="Year of Passing"    value={form.yop          || ""} onChange={(v) => setForm({ ...form, yop: v })} />
// // //                         <FormField label="Roll Number"        value={form.rollNo       || ""} onChange={(v) => setForm({ ...form, rollNo: v })} />
// // //                       </>}

// // //                       {activeTab === "address" && <>
// // //                         <FormField label="Address"            value={form.address      || ""} onChange={(v) => setForm({ ...form, address: v })} />
// // //                         <FormField label="Address Type"       value={form.type         || ""} onChange={(v) => setForm({ ...form, type: v })} />
// // //                       </>}

// // //                       {activeTab === "database" && <>
// // //                         <FormField label="Screen Type"        value={form.screenType   || ""} onChange={(v) => setForm({ ...form, screenType: v })} />
// // //                         <FormField label="Result"             value={form.result       || ""} onChange={(v) => setForm({ ...form, result: v })} />
// // //                       </>}

// // //                       {activeTab === "criminal" && <>
// // //                         <FormField label="Court"              value={form.court        || ""} onChange={(v) => setForm({ ...form, court: v })} />
// // //                         <FormField label="Jurisdiction"       value={form.jurisdiction || ""} onChange={(v) => setForm({ ...form, jurisdiction: v })} />
// // //                       </>}

// // //                       {activeTab === "drug_test" && <>
// // //                         <FormField label="Lab"                value={form.lab          || ""} onChange={(v) => setForm({ ...form, lab: v })} />
// // //                         <FormField label="Sample Type"        value={form.sampleType   || ""} onChange={(v) => setForm({ ...form, sampleType: v })} />
// // //                       </>}

// // //                       {activeTab === "courtroom" && <>
// // //                         <FormField label="Court"              value={form.court        || ""} onChange={(v) => setForm({ ...form, court: v })} />
// // //                         <FormField label="Case Reference"     value={form.caseRef      || ""} onChange={(v) => setForm({ ...form, caseRef: v })} />
// // //                       </>}

// // //                       {/* Outcome toggle */}
// // //                       <div className="sas-form-group">
// // //                         <label className="sas-form-label">Verification Outcome</label>
// // //                         <div className="sas-outcome-toggle-group">
// // //                           {["clear", "discrepancy", "unable"].map((o) => (
// // //                             <button
// // //                               key={o}
// // //                               type="button"
// // //                               className={`sas-toggle-btn ${outcome === o ? `active-${o === "clear" ? "clear" : o === "discrepancy" ? "disc" : "unable"}` : ""}`}
// // //                               style={{ background: outcome === o ? outcomeColor(o) : "", color: outcome === o ? "#fff" : "", borderColor: outcome === o ? outcomeColor(o) : "" }}
// // //                               onClick={() => setOutcome(o)}
// // //                             >
// // //                               {outcomeLabel(o)}
// // //                             </button>
// // //                           ))}
// // //                         </div>
// // //                       </div>

// // //                       {/* Remarks */}
// // //                       <div className="sas-form-group flex-grow-input">
// // //                         <label className="sas-form-label">Verifier Remarks</label>
// // //                         <textarea
// // //                           className="sas-form-textarea"
// // //                           rows="3"
// // //                           placeholder="Enter detailed remarks..."
// // //                           value={remarks}
// // //                           onChange={(e) => setRemarks(e.target.value)}
// // //                         />
// // //                       </div>

// // //                       {/* Success feedback */}
// // //                       {saveStatus === "saved"  && <p style={{ color: "green", fontSize: "13px", marginBottom: "8px" }}>Saved and marked done.</p>}
// // //                       {saveStatus === "draft"  && <p style={{ color: "#888",  fontSize: "13px", marginBottom: "8px" }}>Draft saved.</p>}

// // //                       {/* Actions */}
// // //                       <div className="sas-form-actions-row">
// // //                         <button type="submit" className="sas-btn-submit">SAVE & MARK DONE</button>
// // //                         <button type="button" className="sas-btn-draft" onClick={handleDraft}>SAVE DRAFT</button>
// // //                         <button
// // //                           type="button"
// // //                           className="sas-btn-cancel"
// // //                           onClick={() => { setSelectedCase(null); setForm({}); setSaveStatus(""); }}
// // //                         >
// // //                           <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// // //                             <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
// // //                           </svg>
// // //                         </button>
// // //                       </div>

// // //                     </form>
// // //                   </div>

// // //                   {/* CARD 3 — Activity + Comments */}
// // //                   <div className="sas-thrid-card">

// // //                     {/* Activity log */}
// // //                     <div className="sas-activity-block">
// // //                       <div className="sas-card-header sas-activity-header">
// // //                         <h2>ACTIVITY LOG & COMMENTS</h2>
// // //                       </div>
// // //                       <div className="sas-activity-content">
// // //                         <h3 className="sas-section-subtitle">Status Timeline</h3>
// // //                         <div className="sas-timeline-list">
// // //                           {activity.map((a, i) => (
// // //                             <div key={i} className="sas-timeline-item">
// // //                               <div className="sas-timeline-left">
// // //                                 <span className="sas-time-stamp">{a.time}</span>
// // //                                 <div className="sas-timeline-node node-active">
// // //                                   <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// // //                                     <polyline points="20 6 9 17 4 12" />
// // //                                   </svg>
// // //                                 </div>
// // //                               </div>
// // //                               <div className="sas-timeline-right">
// // //                                 <span className="sas-log-text text-highlight">{a.text}</span>
// // //                               </div>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     </div>

// // //                     {/* Comments */}
// // //                     <div className="sas-comments-sub-block">
// // //                       <div className="sas-comments-bar-header">
// // //                         <h3>COMMENTS</h3>
// // //                       </div>
// // //                       <div className="sas-comments-container">
// // //                         <div className="sas-comments-stream" id="sasCommentsStream">
// // //                           {comments.map((c) => (
// // //                             <div key={c.id} className="sas-comment-bubble">
// // //                               <div className={`sas-comment-avatar ${c.avatarClass}`}>{c.avatar}</div>
// // //                               <div className="sas-comment-body">
// // //                                 <div className="sas-comment-info-row">
// // //                                   <span className="sas-commenter-title">{c.author}</span>
// // //                                   <span className="sas-comment-date">{c.time}</span>
// // //                                 </div>
// // //                                 <p className="sas-comment-desc">{c.text}</p>
// // //                               </div>
// // //                             </div>
// // //                           ))}
// // //                           <div ref={commentsEndRef} />
// // //                         </div>

// // //                         <form className="sas-reply-form" onSubmit={handleComment}>
// // //                           <input
// // //                             type="text"
// // //                             placeholder="Reply..."
// // //                             value={commentInput}
// // //                             onChange={(e) => setCommentInput(e.target.value)}
// // //                             autoComplete="off"
// // //                           />
// // //                           <button type="submit" className="sas-send-btn" aria-label="Send reply">
// // //                             <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// // //                               <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
// // //                             </svg>
// // //                           </button>
// // //                         </form>
// // //                       </div>
// // //                     </div>

// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ) : (
// // //               <div style={{ textAlign: "center", padding: "40px", color: "#888", fontSize: "14px" }}>
// // //                 Select a case from the table above to begin verification.
// // //               </div>
// // //             )}

// // //           </div>
// // //         </main>
// // //       </section>
// // //     </>
// // //   );
// // // }

// // // // ── Small reusable form field ─────────────────────────
// // // function FormField({ label, value, onChange }) {
// // //   return (
// // //     <div className="sas-form-group">
// // //       <label className="sas-form-label">{label}</label>
// // //       <input
// // //         type="text"
// // //         className="sas-form-input"
// // //         value={value}
// // //         onChange={(e) => onChange(e.target.value)}
// // //         placeholder={`Enter ${label.toLowerCase()}`}
// // //       />
// // //     </div>
// // //   );
// // // }

// // // // ── Helpers ───────────────────────────────────────────
// // // function formatTime(full = false) {
// // //   const now = new Date();
// // //   if (full) return now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
// // //   return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
// // // }

// // // function statusLabel(s) {
// // //   return { pending: "Pending", "in-progress": "In Progress", completed: "Completed", "qc-review": "QC Review" }[s] || s;
// // // }

// // // function outcomeLabel(o) {
// // //   return { clear: "Clear", discrepancy: "Discrepancy", unable: "Unable to Verify" }[o] || o;
// // // }

// // // function outcomeColor(o) {
// // //   return { clear: "#16a34a", discrepancy: "#dc2626", unable: "#d97706" }[o] || "#333";
// // // }
// // // Verifyer.jsx — Fully functional BGV Verifier page
// // // Wired to caseStore.js (localStorage-backed, replace with API when ready)
// // //
// // // Features:
// // //   ✔ Tab-per-check-type (admin can see all; verifier role restricted to assigned type)
// // //   ✔ Case table with search, status filter, date preset + custom range, CSV export
// // //   ✔ Live status-count badges on tabs
// // //   ✔ 3-card layout: Source Availability | Result Entry Form | Activity + Comments
// // //   ✔ Dynamic form fields per check type (employment / education / address / database / criminal / drug_test / courtroom)
// // //   ✔ Verification Outcome toggle (Clear / Discrepancy / Unable to Verify)
// // //   ✔ Save & Mark Done → persists to caseStore, case becomes "completed"
// // //   ✔ Save Draft → persists to caseStore, case becomes "in-progress"
// // //   ✔ Activity log auto-appends on every action
// // //   ✔ Comments stream: loads from store, adds new comments, auto-scrolls
// // //   ✔ Source "Use" button logs to activity
// // //   ✔ Case summary panel in Card 1
// // //   ✔ Admin mode: bypass check-type restriction via user.role === "admin"

// // import { useState, useRef, useEffect, useCallback } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Sidebar from "./Sidebar";
// // import {
// //   getAllCases,
// //   saveVerifierResult,
// //   saveDraft,
// //   getComments,
// //   addComment,
// //   SOURCES,
// //   CHECK_TYPES,
// // } from "../src/store/caseStore";

// // // ─── Helpers ──────────────────────────────────────────────────────────────────

// // function pad(n) { return String(n).padStart(2, "0"); }

// // function formatTime(full = false) {
// //   const now = new Date();
// //   if (full) return now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
// //   return `${pad(now.getHours())}:${pad(now.getMinutes())}`;
// // }

// // function statusLabel(s) {
// //   return { pending: "Pending", "in-progress": "In Progress", completed: "Completed", "qc-review": "QC Review" }[s] || s;
// // }

// // function outcomeLabel(o) {
// //   return { clear: "Clear", discrepancy: "Discrepancy", unable: "Unable to Verify" }[o] || o;
// // }

// // function outcomeColor(o) {
// //   return { clear: "#16a34a", discrepancy: "#dc2626", unable: "#d97706" }[o] || "#64748b";
// // }

// // function getUser() {
// //   try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; }
// // }

// // function isAdmin() {
// //   return getUser().role === "admin";
// // }

// // function getAssignedCheckType() {
// //   return getUser().check_type || "employment";
// // }

// // function exportCSV(rows, checkType) {
// //   const headers = ["Case ID", "Candidate", "Client", "TAT", "Status", "Check Type", "Outcome", "Remarks", "Saved At"];
// //   const lines = rows.map((c) => [
// //     c.id, c.candidate, c.client, c.tat, c.status, c.checkType,
// //     c.verifierResult?.outcome || "",
// //     `"${(c.verifierResult?.remarks || "").replace(/"/g, '""')}"`,
// //     c.verifierResult?.savedAt || "",
// //   ].join(","));
// //   const blob = new Blob([headers.join(",") + "\n" + lines.join("\n")], { type: "text/csv" });
// //   const url = URL.createObjectURL(blob);
// //   const a = document.createElement("a");
// //   a.href = url;
// //   a.download = `verifier_${checkType}_${Date.now()}.csv`;
// //   a.click();
// //   URL.revokeObjectURL(url);
// // }

// // // ─── Sub-components ───────────────────────────────────────────────────────────

// // function FormField({ label, value, onChange }) {
// //   return (
// //     <div className="sas-form-group">
// //       <label className="sas-form-label">{label}</label>
// //       <input
// //         type="text"
// //         className="sas-form-input"
// //         value={value}
// //         onChange={(e) => onChange(e.target.value)}
// //         placeholder={`Enter ${label.toLowerCase()}`}
// //       />
// //     </div>
// //   );
// // }

// // function StatusBadge({ status }) {
// //   const map = {
// //     pending:       { bg: "#fff3cd", color: "#856404" },
// //     "in-progress": { bg: "#cce5ff", color: "#004085" },
// //     completed:     { bg: "#d4edda", color: "#155724" },
// //     "qc-review":   { bg: "#e2d9f3", color: "#4b1f8d" },
// //   };
// //   const s = map[status] || { bg: "#e9ecef", color: "#495057" };
// //   return (
// //     <span style={{ background: s.bg, color: s.color, padding: "3px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
// //       {statusLabel(status)}
// //     </span>
// //   );
// // }

// // // ─── Main Component ───────────────────────────────────────────────────────────

// // export default function Verifyer() {
// //   const navigate     = useNavigate();
// //   const admin        = isAdmin();
// //   const assignedType = getAssignedCheckType();

// //   // ── Tab & case list
// //   const [activeTab, setActiveTab]       = useState(assignedType);
// //   const [allCases, setAllCases]         = useState([]);
// //   const [selectedCase, setSelectedCase] = useState(null);

// //   // ── Filters
// //   const [search, setSearch]             = useState("");
// //   const [statusFilter, setStatusFilter] = useState("all");
// //   const [datePreset, setDatePreset]     = useState("all");
// //   const [customFrom, setCustomFrom]     = useState("");
// //   const [customTo, setCustomTo]         = useState("");
// //   const [showDatePicker, setShowDatePicker] = useState(false);

// //   // ── Form
// //   const [form, setForm]         = useState({});
// //   const [outcome, setOutcome]   = useState("clear");
// //   const [remarks, setRemarks]   = useState("");
// //   const [saveStatus, setSaveStatus] = useState(""); // "saved" | "draft" | "error"

// //   // ── Activity & comments
// //   const [activity, setActivity]         = useState([]);
// //   const [comments, setComments]         = useState([]);
// //   const [commentInput, setCommentInput] = useState("");
// //   const commentsEndRef = useRef(null);
// //   const datePickerRef  = useRef(null);

// //   // ── Load cases from store
// //   const loadCases = useCallback(() => {
// //     const cases = getAllCases().filter((c) => c.checkType === activeTab);
// //     setAllCases(cases);
// //   }, [activeTab]);

// //   useEffect(() => {
// //     loadCases();
// //     setSelectedCase(null);
// //     setForm({});
// //     setSaveStatus("");
// //     setSearch("");
// //     setStatusFilter("all");
// //   }, [activeTab, loadCases]);

// //   // ── Auto-scroll comments
// //   useEffect(() => {
// //     commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [comments]);

// //   // ── Close date picker on outside click
// //   useEffect(() => {
// //     const h = (e) => {
// //       if (datePickerRef.current && !datePickerRef.current.contains(e.target)) setShowDatePicker(false);
// //     };
// //     document.addEventListener("mousedown", h);
// //     return () => document.removeEventListener("mousedown", h);
// //   }, []);

// //   // ── Date range filter
// //   const isInDateRange = useCallback((dateStr) => {
// //     if (!dateStr || datePreset === "all") return true;
// //     const d = new Date(dateStr);
// //     const now = new Date();
// //     if (datePreset === "today") return d.toDateString() === now.toDateString();
// //     if (datePreset === "week")  { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
// //     if (datePreset === "month") { const m = new Date(now); m.setMonth(now.getMonth() - 1); return d >= m; }
// //     if (datePreset === "custom" && customFrom && customTo) {
// //       return d >= new Date(customFrom) && d <= new Date(customTo + "T23:59:59");
// //     }
// //     return true;
// //   }, [datePreset, customFrom, customTo]);

// //   // ── Filtered cases
// //   const filtered = allCases.filter((c) => {
// //     const q = search.toLowerCase();
// //     const matchSearch  = !search || c.id.toLowerCase().includes(q) || c.candidate.toLowerCase().includes(q) || (c.client || "").toLowerCase().includes(q);
// //     const matchStatus  = statusFilter === "all" || c.status === statusFilter;
// //     const matchDate    = isInDateRange(c.createdDate);
// //     return matchSearch && matchStatus && matchDate;
// //   });

// //   // ── Status counts for tab badges
// //   const statusCounts = {
// //     all:           allCases.length,
// //     pending:       allCases.filter((c) => c.status === "pending").length,
// //     "in-progress": allCases.filter((c) => c.status === "in-progress").length,
// //     completed:     allCases.filter((c) => c.status === "completed").length,
// //     "qc-review":   allCases.filter((c) => c.status === "qc-review").length,
// //   };

// //   // ── Select a case — pre-fill form and load comments
// //   const selectCase = (c) => {
// //     setSelectedCase(c);
// //     setForm({ ...c });
// //     setOutcome(c.verifierResult?.outcome || "clear");
// //     setRemarks(c.verifierResult?.remarks || "");
// //     setSaveStatus("");
// //     setComments(getComments(c.id));
// //     setActivity([
// //       { time: formatTime(), text: `Case ${c.id} opened — ${c.candidate}` },
// //       ...(c.verifierResult ? [{ time: formatTime(), text: `Previous result: ${outcomeLabel(c.verifierResult.outcome)}${c.verifierResult.isDraft ? " (Draft)" : ""}` }] : []),
// //     ]);
// //   };

// //   // ── Save & Mark Done
// //   const handleSave = (e) => {
// //     e.preventDefault();
// //     if (!selectedCase) return;
// //     try {
// //       // TODO: POST /api/cases/{id}/result { ...form, outcome, remarks, status: "completed" }
// //       saveVerifierResult(selectedCase.id, form, outcome, remarks);
// //       loadCases();
// //       setSelectedCase((prev) => ({ ...prev, status: "completed", verifierResult: { outcome, remarks, savedAt: new Date().toISOString() } }));
// //       setActivity((prev) => [...prev, { time: formatTime(), text: `✔ Saved & marked done — ${outcomeLabel(outcome)}` }]);
// //       setSaveStatus("saved");
// //     } catch {
// //       setSaveStatus("error");
// //     }
// //   };

// //   // ── Save Draft
// //   const handleDraft = () => {
// //     if (!selectedCase) return;
// //     try {
// //       // TODO: POST /api/cases/{id}/draft
// //       saveDraft(selectedCase.id, form, outcome, remarks);
// //       loadCases();
// //       setSelectedCase((prev) => ({ ...prev, status: "in-progress", verifierResult: { outcome, remarks, savedAt: new Date().toISOString(), isDraft: true } }));
// //       setActivity((prev) => [...prev, { time: formatTime(), text: "💾 Draft saved" }]);
// //       setSaveStatus("draft");
// //     } catch {
// //       setSaveStatus("error");
// //     }
// //   };

// //   // ── Post comment
// //   const handleComment = (e) => {
// //     e.preventDefault();
// //     if (!commentInput.trim() || !selectedCase) return;
// //     const user = getUser();
// //     const name = user.name || "Verifier";
// //     const newComment = {
// //       id: Date.now(),
// //       author: name,
// //       avatar: name.charAt(0).toUpperCase(),
// //       avatarClass: "avatar-blue",
// //       time: formatTime(true),
// //       text: commentInput.trim(),
// //     };
// //     // TODO: POST /api/cases/{id}/comments
// //     const updated = addComment(selectedCase.id, newComment);
// //     setComments(updated);
// //     setCommentInput("");
// //     setActivity((prev) => [...prev, { time: formatTime(), text: "Comment added" }]);
// //   };

// //   // ── Source "Use" click
// //   const handleUseSource = (sourceName) => {
// //     setActivity((prev) => [...prev, { time: formatTime(), text: `Source selected: ${sourceName}` }]);
// //   };

// //   const sources = SOURCES[activeTab] || [];
// //   const user    = getUser();

// //   // ── Check if tab is accessible
// //   const canAccessTab = (key) => admin || key === assignedType;

// //   // ── Count pending cases per type (for tab badge)
// //   function pendingCount(type) {
// //     try { return getAllCases().filter((c) => c.checkType === type && c.status !== "completed").length; } catch { return 0; }
// //   }

// //   return (
// //     <>
// //       <Sidebar />

// //       <section id="noSidebar">

// //         {/* ── Navbar ────────────────────────────────────────────── */}
// //         <nav className="verifyer">
// //           <div className="nav-toggle">
// //             <img src="images/inner-pages/emp-check-icon.svg" alt="" />
// //           </div>
// //           <div className="head-src">
// //             <h3>
// //               {admin ? "ADMIN — VERIFIER VIEW" : "VERIFIER"} — {CHECK_TYPES.find((t) => t.key === activeTab)?.label} Check
// //               {selectedCase ? ` | ${selectedCase.id} · ${selectedCase.candidate}` : ""}
// //             </h3>
// //           </div>
// //           <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
// //             {admin && (
// //               <span style={{ background: "#fef3c7", color: "#92400e", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 700 }}>
// //                 ADMIN MODE
// //               </span>
// //             )}
// //             <button type="button" className="primary-cta" style={{ fontSize: "13px" }}>
// //               {user.name || "Verifier"}
// //             </button>
// //             <button
// //               type="button"
// //               className="secondary-cta"
// //               style={{ fontSize: "13px" }}
// //               onClick={() => { localStorage.removeItem("token"); navigate("/"); }}
// //             >
// //               Logout
// //             </button>
// //           </div>
// //         </nav>

// //         <main>
// //           <div className="dash-wrper">

// //             {/* ── Check-type tabs ───────────────────────────────── */}
// //             <div className="header-navbar">
// //               {CHECK_TYPES.map((t) => {
// //                 const accessible = canAccessTab(t.key);
// //                 const count = pendingCount(t.key);
// //                 return (
// //                   <button
// //                     key={t.key}
// //                     className={`tab-cta ${activeTab === t.key ? "active" : ""}`}
// //                     onClick={() => accessible && setActiveTab(t.key)}
// //                     title={!accessible ? "Not your assigned check type" : ""}
// //                     style={{ opacity: !accessible ? 0.35 : 1, cursor: !accessible ? "not-allowed" : "pointer" }}
// //                   >
// //                     {t.label}
// //                     {accessible && count > 0 && (
// //                       <span style={{ marginLeft: "5px", background: activeTab === t.key ? "#fff" : "#0ea5e9", color: activeTab === t.key ? "#0ea5e9" : "#fff", borderRadius: "8px", padding: "1px 6px", fontSize: "10px", fontWeight: 700 }}>
// //                         {count}
// //                       </span>
// //                     )}
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* ── Filters + Search row ──────────────────────────── */}
// //             <div className="dash-upper-head">
// //               <div className="left" style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>

// //                 {/* Date presets */}
// //                 {[
// //                   { key: "all",   label: "All Dates" },
// //                   { key: "today", label: "Today" },
// //                   { key: "week",  label: "This Week" },
// //                   { key: "month", label: "This Month" },
// //                 ].map((p) => (
// //                   <button
// //                     key={p.key}
// //                     className={`tab-cta ${datePreset === p.key ? "active" : ""}`}
// //                     onClick={() => { setDatePreset(p.key); setShowDatePicker(false); }}
// //                   >
// //                     {p.label}
// //                   </button>
// //                 ))}

// //                 {/* Custom date picker */}
// //                 <div ref={datePickerRef} style={{ position: "relative" }}>
// //                   <button
// //                     className={`tab-cta ${datePreset === "custom" ? "active" : ""}`}
// //                     onClick={() => setShowDatePicker((v) => !v)}
// //                   >
// //                     📅 Custom {datePreset === "custom" && customFrom ? `(${customFrom} → ${customTo || "?"})` : ""}
// //                   </button>
// //                   {showDatePicker && (
// //                     <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #ddd", borderRadius: "8px", padding: "14px", zIndex: 200, boxShadow: "0 4px 20px rgba(0,0,0,.13)", display: "flex", flexDirection: "column", gap: "8px", minWidth: "240px" }}>
// //                       <label style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>From</label>
// //                       <input type="date" value={customFrom} onChange={(e) => setCustomFrom(e.target.value)} style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "6px 10px", fontSize: "13px" }} />
// //                       <label style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>To</label>
// //                       <input type="date" value={customTo} onChange={(e) => setCustomTo(e.target.value)} style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "6px 10px", fontSize: "13px" }} />
// //                       <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
// //                         <button className="primary-cta" style={{ flex: 1, fontSize: "12px" }} onClick={() => { if (customFrom && customTo) { setDatePreset("custom"); setShowDatePicker(false); } }}>Apply</button>
// //                         <button className="secondary-cta" style={{ flex: 1, fontSize: "12px" }} onClick={() => { setDatePreset("all"); setCustomFrom(""); setCustomTo(""); setShowDatePicker(false); }}>Clear</button>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Divider */}
// //                 <span style={{ color: "#e2e8f0", fontSize: "20px" }}>|</span>

// //                 {/* Status filter tabs */}
// //                 {[
// //                   { key: "all",          label: "All" },
// //                   { key: "pending",      label: "Pending" },
// //                   { key: "in-progress",  label: "In Progress" },
// //                   { key: "completed",    label: "Completed" },
// //                   { key: "qc-review",    label: "QC Review" },
// //                 ].map(({ key, label }) => (
// //                   <button
// //                     key={key}
// //                     className={`tab-cta ${statusFilter === key ? "active" : ""}`}
// //                     onClick={() => setStatusFilter(key)}
// //                   >
// //                     {label}
// //                     <span style={{ marginLeft: "4px", background: "rgba(0,0,0,.1)", borderRadius: "8px", padding: "1px 5px", fontSize: "10px", fontWeight: 700 }}>
// //                       {statusCounts[key] ?? 0}
// //                     </span>
// //                   </button>
// //                 ))}
// //               </div>

// //               <div className="right" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
// //                 {/* Search */}
// //                 <div className="input-grp" style={{ margin: 0, position: "relative" }}>
// //                   <input
// //                     type="text"
// //                     placeholder="Search ID, name, client..."
// //                     value={search}
// //                     onChange={(e) => setSearch(e.target.value)}
// //                     style={{ minWidth: "220px", paddingRight: search ? "30px" : "10px" }}
// //                   />
// //                   {search && (
// //                     <button
// //                       onClick={() => setSearch("")}
// //                       style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: "18px", lineHeight: 1 }}
// //                     >
// //                       ×
// //                     </button>
// //                   )}
// //                 </div>
// //                 <button className="primary-cta export" onClick={() => exportCSV(filtered, activeTab)}>
// //                   <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
// //                 </button>
// //               </div>
// //             </div>

// //             {/* ── Cases table ──────────────────────────────────── */}
// //             <div className="down-table" style={{ marginBottom: "16px" }}>
// //               <table>
// //                 <thead>
// //                   <tr>
// //                     <th>Case ID</th>
// //                     <th>Candidate</th>
// //                     <th>Client</th>
// //                     <th>TAT</th>
// //                     <th>Status</th>
// //                     <th>Outcome</th>
// //                     <th>Created</th>
// //                     <th>Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {filtered.length === 0 ? (
// //                     <tr>
// //                       <td colSpan="8" style={{ textAlign: "center", padding: "28px", color: "#9ca3af", fontSize: "14px" }}>
// //                         No cases match current filters.
// //                       </td>
// //                     </tr>
// //                   ) : (
// //                     filtered.map((c) => (
// //                       <tr
// //                         key={c.id}
// //                         style={{ background: selectedCase?.id === c.id ? "#eff6ff" : "", transition: "background .15s", cursor: "pointer" }}
// //                         onClick={() => selectCase(c)}
// //                       >
// //                         <td style={{ fontWeight: 700, color: "#0369a1" }}>{c.id}</td>
// //                         <td>{c.candidate}</td>
// //                         <td>{c.client}</td>
// //                         <td>
// //                           <span style={{ padding: "2px 8px", borderRadius: "10px", fontSize: "12px", fontWeight: 600, background: c.tat === "1d" ? "#fee2e2" : "#f0fdf4", color: c.tat === "1d" ? "#b91c1c" : "#15803d" }}>
// //                             {c.tat}
// //                           </span>
// //                         </td>
// //                         <td><StatusBadge status={c.status} /></td>
// //                         <td>
// //                           {c.verifierResult?.outcome ? (
// //                             <span style={{ color: outcomeColor(c.verifierResult.outcome), fontSize: "12px", fontWeight: 600 }}>
// //                               {c.verifierResult.outcome === "clear" ? "✔" : c.verifierResult.outcome === "discrepancy" ? "✗" : "?"} {outcomeLabel(c.verifierResult.outcome)}
// //                               {c.verifierResult.isDraft && <span style={{ color: "#94a3b8", fontWeight: 400 }}> (Draft)</span>}
// //                             </span>
// //                           ) : (
// //                             <span style={{ color: "#cbd5e1", fontSize: "12px" }}>—</span>
// //                           )}
// //                         </td>
// //                         <td style={{ fontSize: "12px", color: "#6b7280" }}>{c.createdDate}</td>
// //                         <td onClick={(e) => e.stopPropagation()}>
// //                           <button
// //                             className="view-cta"
// //                             onClick={() => selectCase(c)}
// //                             style={selectedCase?.id === c.id ? { background: "#0ea5e9", color: "#fff", border: "1px solid #0ea5e9" } : {}}
// //                           >
// //                             {selectedCase?.id === c.id ? "● Active" : "Open"}
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   )}
// //                 </tbody>
// //               </table>
// //               <div style={{ padding: "8px 14px", fontSize: "12px", color: "#9ca3af", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between" }}>
// //                 <span>Showing {filtered.length} of {allCases.length} {activeTab.replace("_", " ")} cases</span>
// //                 {selectedCase && (
// //                   <span style={{ color: "#0ea5e9", fontWeight: 600 }}>
// //                     ● {selectedCase.id} — {selectedCase.candidate} selected
// //                   </span>
// //                 )}
// //               </div>
// //             </div>

// //             {/* ── 3-card verification layout ───────────────────── */}
// //             {selectedCase ? (
// //               <div className="sas-portal-container">
// //                 <div className="sas-emplyment-check-body">

// //                   {/* ── CARD 1: Source Availability ───────────────── */}
// //                   <div className="sas-frist-card">
// //                     <div className="sas-card-header sas-source-header">
// //                       <h2>SOURCE AVAILABILITY STATUS</h2>
// //                     </div>

// //                     <div className="sas-table-header">
// //                       <span className="sas-th-col col-source">Source</span>
// //                       <span className="sas-th-col col-type">Type</span>
// //                       <span className="sas-th-col col-availability">TAT</span>
// //                       <span className="sas-th-col col-action" />
// //                     </div>

// //                     <div className="sas-source-rows-list">
// //                       {sources.map((s, i) => (
// //                         <div key={i} className={`sas-source-row ${s.borderClass}`}>
// //                           <div className="sas-source-info col-source">
// //                             <span className="sas-source-title">{s.name}</span>
// //                             <span className="sas-source-tag">{s.tag}</span>
// //                           </div>
// //                           <div className="col-type">
// //                             <span className={`sas-badge ${s.badgeClass}`}>{s.badge}</span>
// //                           </div>
// //                           <div className="col-availability">
// //                             <span className="sas-availability-text">{s.tat}</span>
// //                           </div>
// //                           <div className="col-action">
// //                             <button className="sas-action-btn" onClick={() => handleUseSource(s.name)}>
// //                               Use
// //                             </button>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>

// //                     {/* Case summary mini-panel */}
// //                     <div style={{ marginTop: "16px", padding: "12px 14px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
// //                       <div style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", marginBottom: "10px" }}>CASE SUMMARY</div>
// //                       {[
// //                         ["Case ID",   selectedCase.id],
// //                         ["Candidate", selectedCase.candidate],
// //                         ["Client",    selectedCase.client],
// //                         ["TAT",       selectedCase.tat],
// //                         ["Priority",  selectedCase.priority || "—"],
// //                         ["Created",   selectedCase.createdDate],
// //                         ["Status",    statusLabel(selectedCase.status)],
// //                       ].map(([k, v]) => (
// //                         <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", padding: "3px 0", borderBottom: "1px solid #f1f5f9" }}>
// //                           <span style={{ color: "#64748b" }}>{k}</span>
// //                           <span style={{ fontWeight: 600, color: "#1e293b" }}>{v}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   {/* ── CARD 2: Result Entry Form ─────────────────── */}
// //                   <div className="sas-second-card">
// //                     <div className="sas-card-header sas-form-header">
// //                       <h2>
// //                         RESULT ENTRY FORM — {CHECK_TYPES.find((t) => t.key === activeTab)?.label} Verification
// //                       </h2>
// //                     </div>

// //                     <form className="sas-entry-form" onSubmit={handleSave}>

// //                       {/* Dynamic fields per check type */}
// //                       {activeTab === "employment" && <>
// //                         <FormField label="Employer Confirmed" value={form.employer     || ""} onChange={(v) => setForm({ ...form, employer: v })} />
// //                         <FormField label="Employment Period"  value={form.period       || ""} onChange={(v) => setForm({ ...form, period: v })} />
// //                         <FormField label="Designation"        value={form.designation  || ""} onChange={(v) => setForm({ ...form, designation: v })} />
// //                         <FormField label="Exit Reason"        value={form.exitReason   || ""} onChange={(v) => setForm({ ...form, exitReason: v })} />
// //                       </>}

// //                       {activeTab === "education" && <>
// //                         <FormField label="Institution"     value={form.institution  || ""} onChange={(v) => setForm({ ...form, institution: v })} />
// //                         <FormField label="Degree"          value={form.degree       || ""} onChange={(v) => setForm({ ...form, degree: v })} />
// //                         <FormField label="Year of Passing" value={form.yop          || ""} onChange={(v) => setForm({ ...form, yop: v })} />
// //                         <FormField label="Roll Number"     value={form.rollNo       || ""} onChange={(v) => setForm({ ...form, rollNo: v })} />
// //                       </>}

// //                       {activeTab === "address" && <>
// //                         <FormField label="Address"      value={form.address || ""} onChange={(v) => setForm({ ...form, address: v })} />
// //                         <FormField label="Address Type" value={form.type    || ""} onChange={(v) => setForm({ ...form, type: v })} />
// //                       </>}

// //                       {activeTab === "database" && <>
// //                         <FormField label="Screen Type" value={form.screenType || ""} onChange={(v) => setForm({ ...form, screenType: v })} />
// //                         <FormField label="Result"      value={form.result     || ""} onChange={(v) => setForm({ ...form, result: v })} />
// //                       </>}

// //                       {activeTab === "criminal" && <>
// //                         <FormField label="Court"        value={form.court        || ""} onChange={(v) => setForm({ ...form, court: v })} />
// //                         <FormField label="Jurisdiction" value={form.jurisdiction || ""} onChange={(v) => setForm({ ...form, jurisdiction: v })} />
// //                       </>}

// //                       {activeTab === "drug_test" && <>
// //                         <FormField label="Lab"         value={form.lab        || ""} onChange={(v) => setForm({ ...form, lab: v })} />
// //                         <FormField label="Sample Type" value={form.sampleType || ""} onChange={(v) => setForm({ ...form, sampleType: v })} />
// //                       </>}

// //                       {activeTab === "courtroom" && <>
// //                         <FormField label="Court"          value={form.court   || ""} onChange={(v) => setForm({ ...form, court: v })} />
// //                         <FormField label="Case Reference" value={form.caseRef || ""} onChange={(v) => setForm({ ...form, caseRef: v })} />
// //                       </>}

// //                       {/* Outcome toggle */}
// //                       <div className="sas-form-group">
// //                         <label className="sas-form-label">Verification Outcome</label>
// //                         <div className="sas-outcome-toggle-group">
// //                           {[
// //                             { key: "clear",       label: "Clear" },
// //                             { key: "discrepancy", label: "Discrepancy" },
// //                             { key: "unable",      label: "Unable to Verify" },
// //                           ].map((o) => (
// //                             <button
// //                               key={o.key}
// //                               type="button"
// //                               className="sas-toggle-btn"
// //                               style={{
// //                                 background:  outcome === o.key ? outcomeColor(o.key) : "",
// //                                 color:       outcome === o.key ? "#fff" : "",
// //                                 borderColor: outcome === o.key ? outcomeColor(o.key) : "",
// //                                 fontWeight:  outcome === o.key ? 700 : "",
// //                                 transform:   outcome === o.key ? "scale(1.03)" : "",
// //                                 transition:  "all .15s",
// //                               }}
// //                               onClick={() => setOutcome(o.key)}
// //                             >
// //                               {o.label}
// //                             </button>
// //                           ))}
// //                         </div>
// //                       </div>

// //                       {/* Remarks */}
// //                       <div className="sas-form-group flex-grow-input">
// //                         <label className="sas-form-label">Verifier Remarks</label>
// //                         <textarea
// //                           className="sas-form-textarea"
// //                           rows="4"
// //                           placeholder="Enter detailed remarks, discrepancy notes, or any supporting information..."
// //                           value={remarks}
// //                           onChange={(e) => setRemarks(e.target.value)}
// //                         />
// //                       </div>

// //                       {/* Status feedback */}
// //                       {saveStatus === "saved" && (
// //                         <div style={{ padding: "8px 12px", borderRadius: "6px", background: "#dcfce7", color: "#15803d", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
// //                           ✔ Result saved — case marked as Completed.
// //                         </div>
// //                       )}
// //                       {saveStatus === "draft" && (
// //                         <div style={{ padding: "8px 12px", borderRadius: "6px", background: "#f0f9ff", color: "#0369a1", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
// //                           💾 Draft saved — case is In Progress.
// //                         </div>
// //                       )}
// //                       {saveStatus === "error" && (
// //                         <div style={{ padding: "8px 12px", borderRadius: "6px", background: "#fef2f2", color: "#b91c1c", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>
// //                           ✗ Error saving. Please try again.
// //                         </div>
// //                       )}

// //                       {/* Action buttons */}
// //                       <div className="sas-form-actions-row">
// //                         <button type="submit" className="sas-btn-submit">SAVE & MARK DONE</button>
// //                         <button type="button" className="sas-btn-draft" onClick={handleDraft}>SAVE DRAFT</button>
// //                         <button
// //                           type="button"
// //                           className="sas-btn-cancel"
// //                           title="Close case"
// //                           onClick={() => { setSelectedCase(null); setForm({}); setSaveStatus(""); }}
// //                         >
// //                           <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                             <line x1="18" y1="6" x2="6" y2="18" />
// //                             <line x1="6" y1="6" x2="18" y2="18" />
// //                           </svg>
// //                         </button>
// //                       </div>

// //                     </form>
// //                   </div>

// //                   {/* ── CARD 3: Activity Log + Comments ──────────── */}
// //                   <div className="sas-thrid-card">

// //                     {/* Activity log */}
// //                     <div className="sas-activity-block">
// //                       <div className="sas-card-header sas-activity-header">
// //                         <h2>ACTIVITY LOG & COMMENTS</h2>
// //                       </div>
// //                       <div className="sas-activity-content">
// //                         <h3 className="sas-section-subtitle">Status Timeline</h3>
// //                         <div className="sas-timeline-list" style={{ maxHeight: "220px", overflowY: "auto" }}>
// //                           {activity.map((a, i) => (
// //                             <div key={i} className="sas-timeline-item">
// //                               <div className="sas-timeline-left">
// //                                 <span className="sas-time-stamp">{a.time}</span>
// //                                 <div className="sas-timeline-node node-active">
// //                                   <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //                                     <polyline points="20 6 9 17 4 12" />
// //                                   </svg>
// //                                 </div>
// //                               </div>
// //                               <div className="sas-timeline-right">
// //                                 <span className="sas-log-text text-highlight">{a.text}</span>
// //                               </div>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Comments */}
// //                     <div className="sas-comments-sub-block">
// //                       <div className="sas-comments-bar-header">
// //                         <h3>
// //                           COMMENTS
// //                           <span style={{ fontSize: "11px", fontWeight: 400, color: "#94a3b8", marginLeft: "6px" }}>
// //                             ({comments.length})
// //                           </span>
// //                         </h3>
// //                       </div>
// //                       <div className="sas-comments-container">
// //                         <div className="sas-comments-stream" style={{ maxHeight: "240px", overflowY: "auto" }}>
// //                           {comments.length === 0 && (
// //                             <p style={{ textAlign: "center", color: "#bbb", fontSize: "13px", padding: "16px 0" }}>
// //                               No comments yet.
// //                             </p>
// //                           )}
// //                           {comments.map((c) => (
// //                             <div key={c.id} className="sas-comment-bubble">
// //                               <div className={`sas-comment-avatar ${c.avatarClass}`}>{c.avatar}</div>
// //                               <div className="sas-comment-body">
// //                                 <div className="sas-comment-info-row">
// //                                   <span className="sas-commenter-title">{c.author}</span>
// //                                   <span className="sas-comment-date">{c.time}</span>
// //                                 </div>
// //                                 <p className="sas-comment-desc">{c.text}</p>
// //                               </div>
// //                             </div>
// //                           ))}
// //                           <div ref={commentsEndRef} />
// //                         </div>

// //                         <form className="sas-reply-form" onSubmit={handleComment}>
// //                           <input
// //                             type="text"
// //                             placeholder="Add a comment..."
// //                             value={commentInput}
// //                             onChange={(e) => setCommentInput(e.target.value)}
// //                             autoComplete="off"
// //                           />
// //                           <button type="submit" className="sas-send-btn" aria-label="Send comment">
// //                             <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                               <line x1="22" y1="2" x2="11" y2="13" />
// //                               <polygon points="22 2 15 22 11 13 2 9 22 2" />
// //                             </svg>
// //                           </button>
// //                         </form>
// //                       </div>
// //                     </div>

// //                   </div>
// //                 </div>
// //               </div>
// //             ) : (
// //               /* Empty state */
// //               <div style={{ textAlign: "center", padding: "56px 20px", color: "#94a3b8", background: "#f8fafc", borderRadius: "12px", border: "1px dashed #e2e8f0" }}>
// //                 <div style={{ fontSize: "36px", marginBottom: "12px" }}>📋</div>
// //                 <div style={{ fontSize: "15px", fontWeight: 700, color: "#64748b", marginBottom: "6px" }}>No Case Selected</div>
// //                 <div style={{ fontSize: "13px" }}>
// //                   Click <strong>Open</strong> on any case above (or click a row) to begin verification.
// //                 </div>
// //               </div>
// //             )}

// //           </div>
// //         </main>
// //       </section>
// //     </>
// //   );
// // }

// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Sidebar from "./Sidebar";
// // import Header from "./Header";
// // import { API_URL } from "../src/config";

// // // ── Check tab definitions ─────────────────────────────────────
// // const CHECK_TABS = [
// //   { key: "employment", label: "Employment" },
// //   { key: "education",  label: "Education"  },
// //   { key: "address",    label: "Address"    },
// //   { key: "database",   label: "Database"   },
// //   { key: "criminal",   label: "Criminal"   },
// //   { key: "drug",       label: "Drug Test"  },
// //   { key: "court",      label: "Courtroom"  },
// // ];

// // // ── Field definitions per check type ─────────────────────────
// // const CHECK_FIELDS = {
// //   employment: [
// //     { key: "company_name",      label: "Company Name",        type: "text" },
// //     { key: "designation",       label: "Designation",         type: "text" },
// //     { key: "employee_id",       label: "Employee ID",         type: "text" },
// //     { key: "date_of_joining",   label: "Date of Joining",     type: "date" },
// //     { key: "date_of_leaving",   label: "Date of Leaving",     type: "date" },
// //     { key: "last_salary",       label: "Last Salary (₹)",     type: "text" },
// //     { key: "reason_for_leaving",label: "Reason for Leaving",  type: "text" },
// //     { key: "reporting_manager", label: "Reporting Manager",   type: "text" },
// //     { key: "hr_contact",        label: "HR Contact Email",    type: "text" },
// //     { key: "hr_phone",          label: "HR Phone",            type: "text" },
// //     { key: "verification_mode", label: "Verification Mode",   type: "select", options: ["Email", "Phone", "Email + Phone", "Portal", "Visit"] },
// //     { key: "remarks",           label: "Remarks",             type: "textarea" },
// //   ],
// //   education: [
// //     { key: "institution_name",  label: "Institution Name",    type: "text" },
// //     { key: "degree",            label: "Degree / Certificate",type: "text" },
// //     { key: "course",            label: "Course / Specialization", type: "text" },
// //     { key: "roll_number",       label: "Roll / Reg. Number",  type: "text" },
// //     { key: "year_of_passing",   label: "Year of Passing",     type: "text" },
// //     { key: "percentage",        label: "Percentage / CGPA",   type: "text" },
// //     { key: "verification_mode", label: "Verification Mode",   type: "select", options: ["University Portal", "Email", "Phone", "Visit", "Result Link"] },
// //     { key: "result_link",       label: "Result Link (URL)",   type: "text" },
// //     { key: "remarks",           label: "Remarks",             type: "textarea" },
// //   ],
// //   address: [
// //     { key: "address_line",      label: "Address",             type: "text" },
// //     { key: "city",              label: "City",                type: "text" },
// //     { key: "state",             label: "State",               type: "text" },
// //     { key: "pincode",           label: "Pincode",             type: "text" },
// //     { key: "residency_type",    label: "Residency Type",      type: "select", options: ["Owned", "Rented", "PG / Hostel", "Family Home"] },
// //     { key: "years_at_address",  label: "Years at Address",    type: "text" },
// //     { key: "neighbour_name",    label: "Neighbour / Ref Name",type: "text" },
// //     { key: "neighbour_phone",   label: "Neighbour Phone",     type: "text" },
// //     { key: "verification_mode", label: "Verification Mode",   type: "select", options: ["Physical Visit", "Digital", "Phone"] },
// //     { key: "remarks",           label: "Remarks",             type: "textarea" },
// //   ],
// //   database: [
// //     { key: "db_checked",        label: "Databases Checked",   type: "text" },
// //     { key: "match_found",       label: "Match Found?",        type: "select", options: ["No Match", "Potential Match", "Confirmed Match"] },
// //     { key: "match_details",     label: "Match Details",       type: "textarea" },
// //     { key: "pan_verified",      label: "PAN Verified?",       type: "select", options: ["Yes", "No", "Not Applicable"] },
// //     { key: "aadhar_verified",   label: "Aadhaar Verified?",   type: "select", options: ["Yes", "No", "Not Applicable"] },
// //     { key: "remarks",           label: "Remarks",             type: "textarea" },
// //   ],
// //   criminal: [
// //     { key: "court_checked",     label: "Courts Checked",      type: "text" },
// //     { key: "police_verified",   label: "Police Record Check", type: "select", options: ["Clear", "Record Found", "Not Accessible"] },
// //     { key: "case_details",      label: "Case Details (if any)", type: "textarea" },
// //     { key: "state_checked",     label: "State",               type: "text" },
// //     { key: "district_checked",  label: "District",            type: "text" },
// //     { key: "verification_mode", label: "Verification Mode",   type: "select", options: ["Online Portal", "Physical", "Phone"] },
// //     { key: "remarks",           label: "Remarks",             type: "textarea" },
// //   ],
// //   drug: [
// //     { key: "test_type",         label: "Test Type",           type: "select", options: ["Urine Test", "Blood Test", "Hair Follicle", "Saliva Test"] },
// //     { key: "lab_name",          label: "Lab Name",            type: "text" },
// //     { key: "test_date",         label: "Test Date",           type: "date" },
// //     { key: "substances_tested", label: "Substances Tested",   type: "text" },
// //     { key: "result",            label: "Test Result",         type: "select", options: ["Negative (Clear)", "Positive", "Inconclusive", "Refused"] },
// //     { key: "lab_report_ref",    label: "Lab Report Ref No.",  type: "text" },
// //     { key: "remarks",           label: "Remarks",             type: "textarea" },
// //   ],
// //   court: [
// //     { key: "court_name",        label: "Court Name",          type: "text" },
// //     { key: "case_number",       label: "Case Number",         type: "text" },
// //     { key: "case_type",         label: "Case Type",           type: "select", options: ["Civil", "Criminal", "Labour", "Consumer", "Other"] },
// //     { key: "filing_date",       label: "Filing Date",         type: "date" },
// //     { key: "current_status",    label: "Current Status",      type: "select", options: ["Active", "Disposed", "Appealed", "No Record Found"] },
// //     { key: "next_date",         label: "Next Hearing Date",   type: "date" },
// //     { key: "remarks",           label: "Remarks",             type: "textarea" },
// //   ],
// // };

// // // ── Mock cases for queue (will be real API later) ─────────────
// // const MOCK_QUEUE = [
// //   { id: "BGV-2501", candidate: "Ravi Kumar",    priority: "HIGH",   age: "3d", checks: ["employment","education","criminal"] },
// //   { id: "BGV-2502", candidate: "Anjali Mehta",  priority: "MED",    age: "2d", checks: ["employment","database"] },
// //   { id: "BGV-2503", candidate: "Suresh Pillai", priority: "LOW",    age: "1d", checks: ["education","address"] },
// //   { id: "BGV-2504", candidate: "Neha Sharma",   priority: "HIGH",   age: "4d", checks: ["employment","education","criminal","drug"] },
// //   { id: "BGV-2505", candidate: "Vikram Nair",   priority: "MED",    age: "1d", checks: ["court"] },
// // ];

// // const PRIORITY_COLOR = { HIGH: "#eb4d4b", MED: "#f59e0b", LOW: "#10b981" };
// // const OUTCOME_STYLES = {
// //   clear:       { bg: "#f0fdf4", color: "#16a34a", label: "✔ Clear" },
// //   discrepancy: { bg: "#fff5f5", color: "#dc2626", label: "✗ Discrepancy" },
// //   unable:      { bg: "#fffbeb", color: "#b45309", label: "? Unable to Verify" },
// // };

// // export default function Verifyer() {
// //   const navigate    = useNavigate();
// //   const user        = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

// //   // ── State ────────────────────────────────────────────────────
// //   const [activeCheck, setActiveCheck]   = useState("employment");
// //   const [selectedCase, setSelectedCase] = useState(MOCK_QUEUE[0]);
// //   const [form, setForm]                 = useState({});         // field values
// //   const [outcome, setOutcome]           = useState("");         // clear | discrepancy | unable
// //   const [comments, setComments]         = useState([
// //     { author: "QC Lead", time: "10:24 AM", text: "Please prioritise BGV-2501 — client deadline today." },
// //   ]);
// //   const [newComment, setNewComment]     = useState("");
// //   const [saving, setSaving]             = useState(false);
// //   const [saveMsg, setSaveMsg]           = useState("");

// //   // When case or check type changes, reset form
// //   useEffect(() => {
// //     setForm({});
// //     setOutcome("");
// //     setSaveMsg("");
// //   }, [selectedCase?.id, activeCheck]);

// //   // ── Only show tabs that are in the selected case's checks ────
// //   const availableTabs = CHECK_TABS.filter(t =>
// //     selectedCase?.checks.includes(t.key)
// //   );

// //   // Jump to first available tab when case changes
// //   useEffect(() => {
// //     if (selectedCase && !selectedCase.checks.includes(activeCheck)) {
// //       setActiveCheck(selectedCase.checks[0] || "employment");
// //     }
// //   }, [selectedCase]);

// //   const setField = (key, val) => setForm(p => ({ ...p, [key]: val }));

// //   // ── Save / Submit ────────────────────────────────────────────
// //   const handleSave = async (isDraft) => {
// //     setSaving(true);
// //     setSaveMsg("");
// //     // TODO: replace with real API call:
// //     // await fetch(`${API_URL}/api/cases/${selectedCase.id}/check-result`, {
// //     //   method: "POST",
// //     //   headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
// //     //   body: JSON.stringify({ check_type: activeCheck, outcome, form_data: form, is_draft: isDraft }),
// //     // });
// //     await new Promise(r => setTimeout(r, 700));
// //     setSaving(false);
// //     setSaveMsg(isDraft ? "Draft saved." : "Result submitted for QC.");
// //     setTimeout(() => setSaveMsg(""), 3000);
// //   };

// //   const sendComment = () => {
// //     if (!newComment.trim()) return;
// //     setComments(p => [...p, {
// //       author: user.name || "Verifier",
// //       time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
// //       text: newComment.trim(),
// //     }]);
// //     setNewComment("");
// //   };

// //   const fields = CHECK_FIELDS[activeCheck] || [];

// //   return (
// //     <>
// //       <Sidebar />
// //       <section id="content">
// //         <Header />
// //         <main>
// //           <div className="dash-wrper">

// //             {/* ── Check Type Tabs ── */}
// //             <div className="header-navbar">
// //               {CHECK_TABS.map(tab => {
// //                 const isAvail = selectedCase?.checks.includes(tab.key);
// //                 return (
// //                   <button
// //                     key={tab.key}
// //                     className={`tab-cta ${activeCheck === tab.key ? "active" : ""}`}
// //                     style={!isAvail ? { opacity: 0.4, cursor: "not-allowed" } : {}}
// //                     onClick={() => isAvail && setActiveCheck(tab.key)}
// //                     title={!isAvail ? "Not selected for this case" : ""}
// //                   >
// //                     {tab.label}
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* ── Body: Queue | Form | Activity ── */}
// //             <div className="emplyment-check-body">

// //               {/* ── LEFT: Case Queue ── */}
// //               <div className="frist-card">
// //                 <div className="card-header queue-header">
// //                   <h2>MY QUEUE <span className="case-count">({MOCK_QUEUE.length} cases)</span></h2>
// //                 </div>
// //                 <div className="queue-list">
// //                   {MOCK_QUEUE.map(c => (
// //                     <div
// //                       key={c.id}
// //                       className={`queue-item ${selectedCase?.id === c.id ? "active" : ""}`}
// //                       onClick={() => setSelectedCase(c)}
// //                     >
// //                       <div className="queue-item-row">
// //                         <span className="case-id">{c.id}</span>
// //                         <span className="badge" style={{ background: PRIORITY_COLOR[c.priority] }}>
// //                           {c.priority}
// //                         </span>
// //                       </div>
// //                       <div className="queue-item-row margin-top-sm">
// //                         <span className="candidate-name">{c.candidate}</span>
// //                         <span className="case-age">Age: {c.age}</span>
// //                       </div>
// //                       <div style={{ marginTop: "6px", display: "flex", gap: "4px", flexWrap: "wrap" }}>
// //                         {c.checks.map(ch => (
// //                           <span key={ch} style={{
// //                             fontSize: "10px", fontWeight: 700, padding: "2px 7px",
// //                             borderRadius: "4px", background: "#eef1fb", color: "#2b3b8c"
// //                           }}>
// //                             {ch.slice(0,3).toUpperCase()}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* ── MIDDLE: Result Entry Form ── */}
// //               <div className="second-card">
// //                 <div className="card-header verification-header">
// //                   <h2>
// //                     {CHECK_TABS.find(t => t.key === activeCheck)?.label.toUpperCase()} CHECK
// //                     {selectedCase ? ` — ${selectedCase.id} | ${selectedCase.candidate}` : ""}
// //                   </h2>
// //                 </div>

// //                 <div className="card-content-wrapper" style={{ overflowY: "auto" }}>

// //                   {/* Outcome toggle */}
// //                   <div style={{ marginBottom: "18px" }}>
// //                     <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "8px", textTransform: "uppercase" }}>
// //                       Outcome
// //                     </p>
// //                     <div style={{ display: "flex", gap: "10px" }}>
// //                       {Object.entries(OUTCOME_STYLES).map(([key, s]) => (
// //                         <button
// //                           key={key}
// //                           onClick={() => setOutcome(key)}
// //                           style={{
// //                             flex: 1, padding: "10px", border: `2px solid ${outcome === key ? s.color : "#e2e8f0"}`,
// //                             borderRadius: "8px", background: outcome === key ? s.bg : "#f8fafc",
// //                             color: outcome === key ? s.color : "#64748b",
// //                             fontWeight: 700, fontSize: "13px", cursor: "pointer",
// //                           }}
// //                         >
// //                           {s.label}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   {/* Dynamic fields */}
// //                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
// //                     {fields.map(f => {
// //                       if (f.type === "textarea") return (
// //                         <div key={f.key} style={{ gridColumn: "1 / -1" }}>
// //                           <label style={labelStyle}>{f.label}</label>
// //                           <textarea
// //                             rows={3}
// //                             value={form[f.key] || ""}
// //                             onChange={e => setField(f.key, e.target.value)}
// //                             placeholder={`Enter ${f.label.toLowerCase()}...`}
// //                             style={inputStyle}
// //                           />
// //                         </div>
// //                       );
// //                       if (f.type === "select") return (
// //                         <div key={f.key}>
// //                           <label style={labelStyle}>{f.label}</label>
// //                           <select
// //                             value={form[f.key] || ""}
// //                             onChange={e => setField(f.key, e.target.value)}
// //                             style={{ ...inputStyle, cursor: "pointer" }}
// //                           >
// //                             <option value="">— Select —</option>
// //                             {f.options.map(o => <option key={o} value={o}>{o}</option>)}
// //                           </select>
// //                         </div>
// //                       );
// //                       return (
// //                         <div key={f.key}>
// //                           <label style={labelStyle}>{f.label}</label>
// //                           <input
// //                             type={f.type}
// //                             value={form[f.key] || ""}
// //                             onChange={e => setField(f.key, e.target.value)}
// //                             placeholder={f.type === "date" ? "" : `Enter ${f.label.toLowerCase()}...`}
// //                             style={inputStyle}
// //                           />
// //                         </div>
// //                       );
// //                     })}
// //                   </div>

// //                   {/* Save message */}
// //                   {saveMsg && (
// //                     <div style={{ marginTop: "12px", padding: "10px 14px", borderRadius: "8px", background: "#f0fdf4", color: "#16a34a", fontSize: "13px", fontWeight: 600 }}>
// //                       {saveMsg}
// //                     </div>
// //                   )}

// //                   {/* Action buttons */}
// //                   <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
// //                     <button
// //                       onClick={() => handleSave(false)}
// //                       disabled={saving || !outcome}
// //                       style={{
// //                         flex: 2, padding: "12px", background: saving ? "#94a3b8" : "#10b981",
// //                         color: "#fff", border: "none", borderRadius: "8px",
// //                         fontWeight: 700, fontSize: "13px", cursor: outcome ? "pointer" : "not-allowed",
// //                         letterSpacing: "0.5px"
// //                       }}
// //                     >
// //                       {saving ? "Saving..." : "✔ SAVE & MARK DONE"}
// //                     </button>
// //                     <button
// //                       onClick={() => handleSave(true)}
// //                       disabled={saving}
// //                       style={{
// //                         flex: 1, padding: "12px", background: "#1e2761",
// //                         color: "#fff", border: "none", borderRadius: "8px",
// //                         fontWeight: 700, fontSize: "13px", cursor: "pointer"
// //                       }}
// //                     >
// //                       SAVE DRAFT
// //                     </button>
// //                     <button
// //                       onClick={() => { setForm({}); setOutcome(""); }}
// //                       style={{
// //                         width: "44px", padding: "12px", background: "#ef4444",
// //                         color: "#fff", border: "none", borderRadius: "8px",
// //                         fontWeight: 700, fontSize: "16px", cursor: "pointer"
// //                       }}
// //                     >
// //                       ×
// //                     </button>
// //                   </div>

// //                 </div>
// //               </div>

// //               {/* ── RIGHT: Charges + Comments ── */}
// //               <div className="thrid-card">

// //                 {/* Charges */}
// //                 <div className="charges-block">
// //                   <div className="card-header charges-header">
// //                     <h2>VERIFICATION CHARGES</h2>
// //                   </div>
// //                   <div className="charges-content">
// //                     <div className="table-header-row">
// //                       <span className="th-label">Source</span>
// //                       <span className="th-value">Charge</span>
// //                     </div>
// //                     <div className="charges-list">
// //                       {selectedCase?.checks.map(ch => {
// //                         const rates = { employment: 350, education: 280, address: 180, database: 120, criminal: 220, drug: 400, court: 160 };
// //                         const label = CHECK_TABS.find(t => t.key === ch)?.label;
// //                         return (
// //                           <div className="charge-item" key={ch}>
// //                             <span className="charge-name">{label} Verification</span>
// //                             <span className="charge-amount">₹ {rates[ch]}</span>
// //                           </div>
// //                         );
// //                       })}
// //                     </div>
// //                     <div className="total-row">
// //                       <span className="total-label">TOTAL</span>
// //                       <span className="total-amount">
// //                         ₹ {(selectedCase?.checks || []).reduce((s, ch) => {
// //                           const rates = { employment: 350, education: 280, address: 180, database: 120, criminal: 220, drug: 400, court: 160 };
// //                           return s + (rates[ch] || 0);
// //                         }, 0)}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Comments */}
// //                 <div className="comments-block margin-top-md">
// //                   <div className="card-header comments-header">
// //                     <h2>COMMENTS & STATUS TRACK</h2>
// //                   </div>
// //                   <div className="comments-container">
// //                     <div className="comments-list">
// //                       {comments.map((c, i) => (
// //                         <div className="comment-item" key={i}>
// //                           <div className="comment-avatar avatar-p" style={{ background: i % 2 === 0 ? "#7c3aed" : "#0d9488" }}>
// //                             {c.author[0].toUpperCase()}
// //                           </div>
// //                           <div className="comment-body">
// //                             <div className="comment-header">
// //                               <span className="commenter-name">{c.author}</span>
// //                               <span className="comment-time">{c.time}</span>
// //                             </div>
// //                             <p className="comment-text">{c.text}</p>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                     <div className="comment-input-box">
// //                       <input
// //                         type="text"
// //                         placeholder="Type a comment..."
// //                         value={newComment}
// //                         onChange={e => setNewComment(e.target.value)}
// //                         onKeyDown={e => e.key === "Enter" && sendComment()}
// //                       />
// //                       <button className="send-comment-btn" onClick={sendComment}>
// //                         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                           <line x1="22" y1="2" x2="11" y2="13" />
// //                           <polygon points="22 2 15 22 11 13 2 9 22 2" />
// //                         </svg>
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>

// //               </div>

// //             </div>
// //           </div>
// //         </main>
// //       </section>
// //     </>
// //   );
// // }

// // // ── Shared input styles ────────────────────────────────────────
// // const labelStyle = {
// //   display: "block", fontSize: "11px", fontWeight: 700,
// //   color: "#475569", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.3px"
// // };
// // const inputStyle = {
// //   width: "100%", padding: "9px 12px", border: "1.5px solid #e2e8f0",
// //   borderRadius: "8px", fontSize: "13px", color: "#1e293b", background: "#f8fafc",
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { API_URL } from "../src/config";

// // ── Check tab definitions ─────────────────────────────────────
// const CHECK_TABS = [
//   { key: "employment", label: "Employment" },
//   { key: "education",  label: "Education"  },
//   { key: "address",    label: "Address"    },
//   { key: "database",   label: "Database"   },
//   { key: "criminal",   label: "Criminal"   },
//   { key: "drug",       label: "Drug Test"  },
//   { key: "court",      label: "Courtroom"  },
// ];

// // ── Field definitions per check type ─────────────────────────
// const CHECK_FIELDS = {
//   employment: [
//     { key: "company_name",      label: "Company Name",        type: "text" },
//     { key: "designation",       label: "Designation",         type: "text" },
//     { key: "employee_id",       label: "Employee ID",         type: "text" },
//     { key: "date_of_joining",   label: "Date of Joining",     type: "date" },
//     { key: "date_of_leaving",   label: "Date of Leaving",     type: "date" },
//     { key: "last_salary",       label: "Last Salary (₹)",     type: "text" },
//     { key: "reason_for_leaving",label: "Reason for Leaving",  type: "text" },
//     { key: "reporting_manager", label: "Reporting Manager",   type: "text" },
//     { key: "hr_contact",        label: "HR Contact Email",    type: "text" },
//     { key: "hr_phone",          label: "HR Phone",            type: "text" },
//     { key: "verification_mode", label: "Verification Mode",   type: "select", options: ["Email", "Phone", "Email + Phone", "Portal", "Visit"] },
//     { key: "remarks",           label: "Remarks",             type: "textarea" },
//   ],
//   education: [
//     { key: "institution_name",  label: "Institution Name",    type: "text" },
//     { key: "degree",            label: "Degree / Certificate",type: "text" },
//     { key: "course",            label: "Course / Specialization", type: "text" },
//     { key: "roll_number",       label: "Roll / Reg. Number",  type: "text" },
//     { key: "year_of_passing",   label: "Year of Passing",     type: "text" },
//     { key: "percentage",        label: "Percentage / CGPA",   type: "text" },
//     { key: "verification_mode", label: "Verification Mode",   type: "select", options: ["University Portal", "Email", "Phone", "Visit", "Result Link"] },
//     { key: "result_link",       label: "Result Link (URL)",   type: "text" },
//     { key: "remarks",           label: "Remarks",             type: "textarea" },
//   ],
//   address: [
//     { key: "address_line",      label: "Address",             type: "text" },
//     { key: "city",              label: "City",                type: "text" },
//     { key: "state",             label: "State",               type: "text" },
//     { key: "pincode",           label: "Pincode",             type: "text" },
//     { key: "residency_type",    label: "Residency Type",      type: "select", options: ["Owned", "Rented", "PG / Hostel", "Family Home"] },
//     { key: "years_at_address",  label: "Years at Address",    type: "text" },
//     { key: "neighbour_name",    label: "Neighbour / Ref Name",type: "text" },
//     { key: "neighbour_phone",   label: "Neighbour Phone",     type: "text" },
//     { key: "verification_mode", label: "Verification Mode",   type: "select", options: ["Physical Visit", "Digital", "Phone"] },
//     { key: "remarks",           label: "Remarks",             type: "textarea" },
//   ],
//   database: [
//     { key: "db_checked",        label: "Databases Checked",   type: "text" },
//     { key: "match_found",       label: "Match Found?",        type: "select", options: ["No Match", "Potential Match", "Confirmed Match"] },
//     { key: "match_details",     label: "Match Details",       type: "textarea" },
//     { key: "pan_verified",      label: "PAN Verified?",       type: "select", options: ["Yes", "No", "Not Applicable"] },
//     { key: "aadhar_verified",   label: "Aadhaar Verified?",   type: "select", options: ["Yes", "No", "Not Applicable"] },
//     { key: "remarks",           label: "Remarks",             type: "textarea" },
//   ],
//   criminal: [
//     { key: "court_checked",     label: "Courts Checked",      type: "text" },
//     { key: "police_verified",   label: "Police Record Check", type: "select", options: ["Clear", "Record Found", "Not Accessible"] },
//     { key: "case_details",      label: "Case Details (if any)", type: "textarea" },
//     { key: "state_checked",     label: "State",               type: "text" },
//     { key: "district_checked",  label: "District",            type: "text" },
//     { key: "verification_mode", label: "Verification Mode",   type: "select", options: ["Online Portal", "Physical", "Phone"] },
//     { key: "remarks",           label: "Remarks",             type: "textarea" },
//   ],
//   drug: [
//     { key: "test_type",         label: "Test Type",           type: "select", options: ["Urine Test", "Blood Test", "Hair Follicle", "Saliva Test"] },
//     { key: "lab_name",          label: "Lab Name",            type: "text" },
//     { key: "test_date",         label: "Test Date",           type: "date" },
//     { key: "substances_tested", label: "Substances Tested",   type: "text" },
//     { key: "result",            label: "Test Result",         type: "select", options: ["Negative (Clear)", "Positive", "Inconclusive", "Refused"] },
//     { key: "lab_report_ref",    label: "Lab Report Ref No.",  type: "text" },
//     { key: "remarks",           label: "Remarks",             type: "textarea" },
//   ],
//   court: [
//     { key: "court_name",        label: "Court Name",          type: "text" },
//     { key: "case_number",       label: "Case Number",         type: "text" },
//     { key: "case_type",         label: "Case Type",           type: "select", options: ["Civil", "Criminal", "Labour", "Consumer", "Other"] },
//     { key: "filing_date",       label: "Filing Date",         type: "date" },
//     { key: "current_status",    label: "Current Status",      type: "select", options: ["Active", "Disposed", "Appealed", "No Record Found"] },
//     { key: "next_date",         label: "Next Hearing Date",   type: "date" },
//     { key: "remarks",           label: "Remarks",             type: "textarea" },
//   ],
// };

// // ── Mock cases for queue (will be real API later) ─────────────
// const MOCK_QUEUE = [
//   { id: "BGV-2501", candidate: "Ravi Kumar",    priority: "HIGH",   age: "3d", checks: ["employment","education","criminal"] },
//   { id: "BGV-2502", candidate: "Anjali Mehta",  priority: "MED",    age: "2d", checks: ["employment","database"] },
//   { id: "BGV-2503", candidate: "Suresh Pillai", priority: "LOW",    age: "1d", checks: ["education","address"] },
//   { id: "BGV-2504", candidate: "Neha Sharma",   priority: "HIGH",   age: "4d", checks: ["employment","education","criminal","drug"] },
//   { id: "BGV-2505", candidate: "Vikram Nair",   priority: "MED",    age: "1d", checks: ["court"] },
// ];

// const PRIORITY_COLOR = { HIGH: "#eb4d4b", MED: "#f59e0b", LOW: "#10b981" };
// const OUTCOME_STYLES = {
//   clear:       { bg: "#f0fdf4", color: "#16a34a", label: "✔ Clear" },
//   discrepancy: { bg: "#fff5f5", color: "#dc2626", label: "✗ Discrepancy" },
//   unable:      { bg: "#fffbeb", color: "#b45309", label: "? Unable to Verify" },
// };

// export default function Verifyer() {
//   const navigate    = useNavigate();
//   const user        = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

//   // ── State ────────────────────────────────────────────────────
//   const [activeCheck, setActiveCheck]   = useState("employment");
//   const [selectedCase, setSelectedCase] = useState(MOCK_QUEUE[0]);
//   const [form, setForm]                 = useState({});         // field values
//   const [outcome, setOutcome]           = useState("");         // clear | discrepancy | unable
//   const [comments, setComments]         = useState([
//     { author: "QC Lead", time: "10:24 AM", text: "Please prioritise BGV-2501 — client deadline today." },
//   ]);
//   const [newComment, setNewComment]     = useState("");
//   const [saving, setSaving]             = useState(false);
//   const [saveMsg, setSaveMsg]           = useState("");

//   // When case or check type changes, reset form
//   useEffect(() => {
//     setForm({});
//     setOutcome("");
//     setSaveMsg("");
//   }, [selectedCase?.id, activeCheck]);

//   // ── Only show tabs that are in the selected case's checks ────
//   const availableTabs = CHECK_TABS.filter(t =>
//     selectedCase?.checks.includes(t.key)
//   );

//   // Jump to first available tab when case changes
//   useEffect(() => {
//     if (selectedCase && !selectedCase.checks.includes(activeCheck)) {
//       setActiveCheck(selectedCase.checks[0] || "employment");
//     }
//   }, [selectedCase]);

//   const setField = (key, val) => setForm(p => ({ ...p, [key]: val }));

//   // ── Save / Submit ────────────────────────────────────────────
//   const handleSave = async (isDraft) => {
//     setSaving(true);
//     setSaveMsg("");
//     // TODO: replace with real API call:
//     // await fetch(`${API_URL}/api/cases/${selectedCase.id}/check-result`, {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
//     //   body: JSON.stringify({ check_type: activeCheck, outcome, form_data: form, is_draft: isDraft }),
//     // });
//     await new Promise(r => setTimeout(r, 700));
//     setSaving(false);
//     setSaveMsg(isDraft ? "Draft saved." : "Result submitted for QC.");
//     setTimeout(() => setSaveMsg(""), 3000);
//   };

//   const sendComment = () => {
//     if (!newComment.trim()) return;
//     setComments(p => [...p, {
//       author: user.name || "Verifier",
//       time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
//       text: newComment.trim(),
//     }]);
//     setNewComment("");
//   };

//   const fields = CHECK_FIELDS[activeCheck] || [];

//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">

//             {/* ── Check Type Tabs ── */}
//             <div className="header-navbar">
//               {CHECK_TABS.map(tab => {
//                 const isAvail = selectedCase?.checks.includes(tab.key);
//                 return (
//                   <button
//                     key={tab.key}
//                     className={`tab-cta ${activeCheck === tab.key ? "active" : ""}`}
//                     style={!isAvail ? { opacity: 0.4, cursor: "not-allowed" } : {}}
//                     onClick={() => isAvail && setActiveCheck(tab.key)}
//                     title={!isAvail ? "Not selected for this case" : ""}
//                   >
//                     {tab.label}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* ── Body: Queue | Form | Activity ── */}
//             <div className="emplyment-check-body">

//               {/* ── LEFT: Case Queue ── */}
//               <div className="frist-card">
//                 <div className="card-header queue-header">
//                   <h2>MY QUEUE <span className="case-count">({MOCK_QUEUE.length} cases)</span></h2>
//                 </div>
//                 <div className="queue-list">
//                   {MOCK_QUEUE.map(c => (
//                     <div
//                       key={c.id}
//                       className={`queue-item ${selectedCase?.id === c.id ? "active" : ""}`}
//                       onClick={() => setSelectedCase(c)}
//                     >
//                       <div className="queue-item-row">
//                         <span className="case-id">{c.id}</span>
//                         <span className="badge" style={{ background: PRIORITY_COLOR[c.priority] }}>
//                           {c.priority}
//                         </span>
//                       </div>
//                       <div className="queue-item-row margin-top-sm">
//                         <span className="candidate-name">{c.candidate}</span>
//                         <span className="case-age">Age: {c.age}</span>
//                       </div>
//                       <div style={{ marginTop: "6px", display: "flex", gap: "4px", flexWrap: "wrap" }}>
//                         {c.checks.map(ch => (
//                           <span key={ch} style={{
//                             fontSize: "10px", fontWeight: 700, padding: "2px 7px",
//                             borderRadius: "4px", background: "#eef1fb", color: "#2b3b8c"
//                           }}>
//                             {ch.slice(0,3).toUpperCase()}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* ── MIDDLE: Result Entry Form ── */}



// // ── Shared input styles ────────────────────────────────────────
const labelStyle = {
  display: "block", fontSize: "11px", fontWeight: 700,
  color: "#475569", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.3px"
};
const inputStyle = {
  width: "100%",
  padding: "9px 12px",
  border: "1.5px solid #e2e8f0",
  borderRadius: "8px",
  fontSize: "13px",
  color: "#1e293b",
  background: "#f8fafc",
  outline: "none",
  fontFamily: "inherit",
  resize: "vertical",
};
// Verifyer.jsx — BGV Verifier Page
// ✔ Fetches real cases from API filtered by verifier's assigned check type
// ✔ Role-based tab restriction: education_verifier can only open Education tab, etc.
// ✔ Sidebar: Active Cases / Completed Cases in split-view (same design as Client.jsx)
// ✔ Queue shows case_id, candidate name, checks, TAT, priority
// ✔ Middle: Result entry form with dynamic fields per check type
// ✔ Right: Verification charges + comments

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { API_URL } from "../src/config";

// ── Check tab definitions ──────────────────────────────────────────────────────
const CHECK_TABS = [
  { key: "employment", label: "Employment" },
  { key: "education",  label: "Education"  },
  { key: "address",    label: "Address"    },
  { key: "database",   label: "Database"   },
  { key: "criminal",   label: "Criminal"   },
  { key: "drug",       label: "Drug Test"  },
  { key: "court",      label: "Courtroom"  },
];

// ── Which API check key maps to which verifier role ───────────────────────────
const ROLE_CHECK_MAP = {
  employment_verifier:  "employment",
  education_verifier:   "education",
  address_verifier:     "address",
  database_verifier:    "database",
  criminal_verifier:    "criminal",
  drug_test_verifier:   "drug",
  courtroom_verifier:   "court",
};

// ── Normalise check keys coming from the API (emp→employment, edu→education…) ─
const NORMALISE_CHECK = {
  emp:        "employment",
  employment: "employment",
  edu:        "education",
  education:  "education",
  addr:       "address",
  address:    "address",
  db:         "database",
  database:   "database",
  criminal:   "criminal",
  cri:        "criminal",
  drug:       "drug",
  drug_test:  "drug",
  court:      "court",
  courtroom:  "court",
};

// ── Field definitions per check type ──────────────────────────────────────────
const CHECK_FIELDS = {
  employment: [
    { key: "company_name",       label: "Company Name",         type: "text" },
    { key: "designation",        label: "Designation",          type: "text" },
    { key: "employee_id",        label: "Employee ID",          type: "text" },
    { key: "date_of_joining",    label: "Date of Joining",      type: "date" },
    { key: "date_of_leaving",    label: "Date of Leaving",      type: "date" },
    { key: "last_salary",        label: "Last Salary (₹)",      type: "text" },
    { key: "reason_for_leaving", label: "Reason for Leaving",   type: "text" },
    { key: "reporting_manager",  label: "Reporting Manager",    type: "text" },
    { key: "hr_contact",         label: "HR Contact Email",     type: "text" },
    { key: "hr_phone",           label: "HR Phone",             type: "text" },
    { key: "verification_mode",  label: "Verification Mode",    type: "select", options: ["Email", "Phone", "Email + Phone", "Portal", "Visit"] },
    { key: "remarks",            label: "Remarks",              type: "textarea" },
  ],
  education: [
    { key: "institution_name",   label: "Institution Name",     type: "text" },
    { key: "degree",             label: "Degree / Certificate", type: "text" },
    { key: "course",             label: "Course / Specialization", type: "text" },
    { key: "roll_number",        label: "Roll / Reg. Number",   type: "text" },
    { key: "year_of_passing",    label: "Year of Passing",      type: "text" },
    { key: "percentage",         label: "Percentage / CGPA",    type: "text" },
    { key: "verification_mode",  label: "Verification Mode",    type: "select", options: ["University Portal", "Email", "Phone", "Visit", "Result Link"] },
    { key: "result_link",        label: "Result Link (URL)",    type: "text" },
    { key: "remarks",            label: "Remarks",              type: "textarea" },
  ],
  address: [
    { key: "address_line",       label: "Address",              type: "text" },
    { key: "city",               label: "City",                 type: "text" },
    { key: "state",              label: "State",                type: "text" },
    { key: "pincode",            label: "Pincode",              type: "text" },
    { key: "residency_type",     label: "Residency Type",       type: "select", options: ["Owned", "Rented", "PG / Hostel", "Family Home"] },
    { key: "years_at_address",   label: "Years at Address",     type: "text" },
    { key: "neighbour_name",     label: "Neighbour / Ref Name", type: "text" },
    { key: "neighbour_phone",    label: "Neighbour Phone",      type: "text" },
    { key: "verification_mode",  label: "Verification Mode",    type: "select", options: ["Physical Visit", "Digital", "Phone"] },
    { key: "remarks",            label: "Remarks",              type: "textarea" },
  ],
  database: [
    { key: "db_checked",         label: "Databases Checked",    type: "text" },
    { key: "match_found",        label: "Match Found?",         type: "select", options: ["No Match", "Potential Match", "Confirmed Match"] },
    { key: "match_details",      label: "Match Details",        type: "textarea" },
    { key: "pan_verified",       label: "PAN Verified?",        type: "select", options: ["Yes", "No", "Not Applicable"] },
    { key: "aadhar_verified",    label: "Aadhaar Verified?",    type: "select", options: ["Yes", "No", "Not Applicable"] },
    { key: "remarks",            label: "Remarks",              type: "textarea" },
  ],
  criminal: [
    { key: "court_checked",      label: "Courts Checked",       type: "text" },
    { key: "police_verified",    label: "Police Record Check",  type: "select", options: ["Clear", "Record Found", "Not Accessible"] },
    { key: "case_details",       label: "Case Details (if any)",type: "textarea" },
    { key: "state_checked",      label: "State",                type: "text" },
    { key: "district_checked",   label: "District",             type: "text" },
    { key: "verification_mode",  label: "Verification Mode",    type: "select", options: ["Online Portal", "Physical", "Phone"] },
    { key: "remarks",            label: "Remarks",              type: "textarea" },
  ],
  drug: [
    { key: "test_type",          label: "Test Type",            type: "select", options: ["Urine Test", "Blood Test", "Hair Follicle", "Saliva Test"] },
    { key: "lab_name",           label: "Lab Name",             type: "text" },
    { key: "test_date",          label: "Test Date",            type: "date" },
    { key: "substances_tested",  label: "Substances Tested",    type: "text" },
    { key: "result",             label: "Test Result",          type: "select", options: ["Negative (Clear)", "Positive", "Inconclusive", "Refused"] },
    { key: "lab_report_ref",     label: "Lab Report Ref No.",   type: "text" },
    { key: "remarks",            label: "Remarks",              type: "textarea" },
  ],
  court: [
    { key: "court_name",         label: "Court Name",           type: "text" },
    { key: "case_number",        label: "Case Number",          type: "text" },
    { key: "case_type",          label: "Case Type",            type: "select", options: ["Civil", "Criminal", "Labour", "Consumer", "Other"] },
    { key: "filing_date",        label: "Filing Date",          type: "date" },
    { key: "current_status",     label: "Current Status",       type: "select", options: ["Active", "Disposed", "Appealed", "No Record Found"] },
    { key: "next_date",          label: "Next Hearing Date",    type: "date" },
    { key: "remarks",            label: "Remarks",              type: "textarea" },
  ],
};

const VERIFICATION_RATES = {
  employment: 350, education: 280, address: 180,
  database: 120,   criminal: 220,  drug: 400, court: 160,
};

const PRIORITY_META = {
  HIGH:   { bg: "#fee2e2", color: "#b91c1c", dot: "#ef4444" },
  MED:    { bg: "#fef9c3", color: "#92400e", dot: "#f59e0b" },
  MEDIUM: { bg: "#fef9c3", color: "#92400e", dot: "#f59e0b" },
  LOW:    { bg: "#dcfce7", color: "#15803d", dot: "#22c55e" },
  normal: { bg: "#f1f5f9", color: "#475569", dot: "#94a3b8" },
};

const OUTCOME_OPTS = [
  { key: "clear",       label: "✔  Clear",            bg: "#f0fdf4", color: "#16a34a", border: "#16a34a" },
  { key: "discrepancy", label: "✗  Discrepancy",       bg: "#fef2f2", color: "#dc2626", border: "#dc2626" },
  { key: "unable",      label: "?  Unable to Verify",  bg: "#fffbeb", color: "#b45309", border: "#d97706" },
];

const STATUS_META = {
  "pending":     { color: "#f59e0b", pct: 20, label: "Pending"     },
  "in-progress": { color: "#028090", pct: 60, label: "In Progress" },
  "qc-review":   { color: "#7c3aed", pct: 85, label: "QC Review"  },
  "completed":   { color: "#10b981", pct: 100, label: "Completed" },
  "on-hold":     { color: "#94a3b8", pct: 30, label: "On Hold"    },
};

// ── Helpers ────────────────────────────────────────────────────────────────────
function getUser() {
  try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; }
}

function getToken() { return localStorage.getItem("token"); }

function normChecks(raw) {
  if (!raw) return [];
  const arr = Array.isArray(raw)
    ? raw
    : String(raw).split(/[,·|]/).map(s => s.trim()).filter(Boolean);
  return arr.map(k => NORMALISE_CHECK[k.toLowerCase()] || k.toLowerCase());
}

function calcTAT(createdAt) {
  if (!createdAt) return "—";
  const days = Math.floor((Date.now() - new Date(createdAt)) / 86400000);
  return days === 0 ? "Today" : `${days}d`;
}

function normPriority(p) {
  if (!p) return "LOW";
  return String(p).toUpperCase();
}

// ── Shared input styles ────────────────────────────────────────────────────────
const labelSt = {
  display: "block", fontSize: "11px", fontWeight: 700,
  color: "#475569", marginBottom: "5px",
  textTransform: "uppercase", letterSpacing: "0.4px",
};
const inputSt = {
  width: "100%", padding: "9px 12px",
  border: "1.5px solid #e2e8f0", borderRadius: "8px",
  fontSize: "13px", color: "#1e293b", background: "#f8fafc",
  outline: "none", fontFamily: "inherit", boxSizing: "border-box",
};
const textareaSt = { ...inputSt, resize: "vertical", minHeight: "72px" };

// ── FormField sub-component ────────────────────────────────────────────────────
function FormField({ f, value, onChange }) {
  if (f.type === "textarea") return (
    <div style={{ gridColumn: "1 / -1" }}>
      <label style={labelSt}>{f.label}</label>
      <textarea
        rows={3} value={value} onChange={e => onChange(e.target.value)}
        placeholder={`Enter ${f.label.toLowerCase()}…`} style={textareaSt}
      />
    </div>
  );
  if (f.type === "select") return (
    <div>
      <label style={labelSt}>{f.label}</label>
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{ ...inputSt, cursor: "pointer" }}>
        <option value="">— Select —</option>
        {f.options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
  return (
    <div>
      <label style={labelSt}>{f.label}</label>
      <input type={f.type} value={value} onChange={e => onChange(e.target.value)}
        placeholder={f.type === "date" ? "" : `Enter ${f.label.toLowerCase()}…`}
        style={inputSt} />
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function Verifyer() {
  const navigate = useNavigate();
  const location = useLocation();
  const user     = getUser();
  const token    = getToken();

  // Role resolution
  const role           = user.role || "";
  const isAdmin        = role === "admin";
  const assignedCheck  = ROLE_CHECK_MAP[role] || null; // null = admin / generic verifier sees all
  // Tab the verifier is allowed to click (null = any)

  // ── Sidebar view: "active" | "completed"
  const sidebarView = new URLSearchParams(location.search).get("view") || "active";

  // ── State ─────────────────────────────────────────────────────────────────
  const [cases,        setCases]        = useState([]);
  const [loading,      setLoading]      = useState(true);
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeCheck,  setActiveCheck]  = useState(assignedCheck || "employment");
  const [search,       setSearch]       = useState("");

  // Form
  const [form,       setForm]       = useState({});
  const [outcome,    setOutcome]    = useState("");
  const [saving,     setSaving]     = useState(false);
  const [saveMsg,    setSaveMsg]    = useState({ text: "", type: "" });

  // Comments
  const [comments,      setComments]      = useState([]);
  const [commentInput,  setCommentInput]  = useState("");
  const commentsEndRef = useRef(null);

  // ── Fetch real cases from API ──────────────────────────────────────────────
  const fetchCases = () => {
    setLoading(true);
    fetch(`${API_URL}/api/cases`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then(r => r.json())
      .then(data => {
        const raw = data.cases || [];
        // Normalise each case so checks is always an array of standard keys
        const normalised = raw.map(c => ({
          ...c,
          checks_raw:  c.checks,
          checks_norm: normChecks(c.checks),
          candidate:   c.candidate || c.candidate_name || "—",
          priority:    normPriority(c.priority),
          tat_display: calcTAT(c.created_at),
        }));
        setCases(normalised);
        if (normalised.length > 0 && !selectedCase) {
          const first = sidebarView === "completed"
            ? normalised.find(c => c.status === "completed")
            : normalised.find(c => c.status !== "completed");
          setSelectedCase(first || normalised[0]);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchCases(); }, []);

  // Auto-scroll comments
  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  // Reset form when case / check changes
  useEffect(() => {
    setForm({});
    setOutcome("");
    setSaveMsg({ text: "", type: "" });
  }, [selectedCase?.case_id, activeCheck]);

  // Jump active check to first valid tab on case selection
  useEffect(() => {
    if (!selectedCase) return;
    const validChecks = selectedCase.checks_norm;
    if (validChecks.length === 0) return;
    if (assignedCheck && validChecks.includes(assignedCheck)) {
      setActiveCheck(assignedCheck);
    } else if (!validChecks.includes(activeCheck)) {
      setActiveCheck(validChecks[0]);
    }
  }, [selectedCase?.case_id]);

  // ── Filtered queue lists ───────────────────────────────────────────────────
  const activeCases    = cases.filter(c => c.status !== "completed");
  const completedCases = cases.filter(c => c.status === "completed");

  const filterBySearch = (list) => {
    if (!search) return list;
    const q = search.toLowerCase();
    return list.filter(c =>
      (c.case_id || "").toLowerCase().includes(q) ||
      (c.candidate || "").toLowerCase().includes(q) ||
      (c.client || c.client_name || "").toLowerCase().includes(q)
    );
  };

  const queueList = filterBySearch(sidebarView === "completed" ? completedCases : activeCases);

  // ── Tab accessibility ──────────────────────────────────────────────────────
  // A tab is accessible if:
  //   1. The case has that check type, AND
  //   2. The verifier's role allows it (admin / generic verifier: any; specialist: only their type)
  const canAccessTab = (checkKey) => {
    if (!selectedCase) return false;
    const caseHasCheck = selectedCase.checks_norm.includes(checkKey);
    if (!caseHasCheck) return false;
    if (isAdmin || !assignedCheck) return true;           // admin / generic verifier
    return checkKey === assignedCheck;                     // specialist verifier
  };

  // ── Select a case ──────────────────────────────────────────────────────────
  const selectCase = (c) => {
    setSelectedCase(c);
    setComments([]);   // TODO: fetch from API  GET /api/cases/{id}/comments
  };

  // ── Save result ────────────────────────────────────────────────────────────
  const handleSave = async (isDraft) => {
    if (!outcome && !isDraft) {
      setSaveMsg({ text: "Please select an outcome before saving.", type: "error" });
      return;
    }
    setSaving(true);
    setSaveMsg({ text: "", type: "" });
    try {
      const res = await fetch(`${API_URL}/api/cases/${selectedCase.case_id}/check-result`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          check_type: activeCheck,
          outcome:    outcome || "unable",
          form_data:  form,
          is_draft:   isDraft,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setSaveMsg({
        text: isDraft ? "Draft saved — case stays In Progress." : "Result submitted — moved to QC Review.",
        type: "success",
      });
      fetchCases();
    } catch {
      setSaveMsg({ text: "Could not save. Please try again.", type: "error" });
    } finally {
      setSaving(false);
    }
  };

  // ── Send comment ───────────────────────────────────────────────────────────
  const sendComment = () => {
    if (!commentInput.trim()) return;
    // TODO: POST /api/cases/{id}/comments
    setComments(p => [...p, {
      id:     Date.now(),
      author: user.name || "Verifier",
      avatar: (user.name || "V").charAt(0).toUpperCase(),
      time:   new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      text:   commentInput.trim(),
    }]);
    setCommentInput("");
  };

  // ── Charges for selected case ──────────────────────────────────────────────
  const caseCharges = (selectedCase?.checks_norm || []).map(ch => ({
    label:  CHECK_TABS.find(t => t.key === ch)?.label || ch,
    amount: VERIFICATION_RATES[ch] || 0,
    key:    ch,
  }));
  const totalCharge = caseCharges.reduce((s, c) => s + c.amount, 0);

  // ── Case list item ─────────────────────────────────────────────────────────
  const QueueItem = ({ c }) => {
    const pm       = PRIORITY_META[c.priority] || PRIORITY_META.LOW;
    const sm       = STATUS_META[c.status] || STATUS_META["pending"];
    const isActive = selectedCase?.case_id === c.case_id;
    const checkLabels = c.checks_norm.map(k =>
      CHECK_TABS.find(t => t.key === k)?.label?.slice(0, 3).toUpperCase() || k.slice(0, 3).toUpperCase()
    );

    return (
      <tr
        className="boder-tbl active"
        onClick={() => selectCase(c)}
        style={{
          cursor: "pointer",
          background: isActive ? "#eef3ff" : undefined,
          borderLeft: isActive ? "3px solid #2b3b8c" : "3px solid transparent",
        }}
      >
        {/* Case ID + checks */}
        <td>
          <div className="criminal-case">
            <p>
              <span style={{ fontWeight: 700, color: "#27348B" }}>{c.case_id}</span>
              <br />
              <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                {checkLabels.join(" · ")}
              </span>
            </p>
          </div>
        </td>

        {/* Candidate name */}
        <td>
          <div className="client-names">{c.candidate}</div>
        </td>

        {/* Progress + TAT */}
        <td>
          <div className="custom-progress">
            <div className="custom-progress-bar" style={{ width: `${sm.pct}%`, background: sm.color }} />
          </div>
          <p className="progress-client-text" style={{ color: sm.color }}>{c.tat_display}</p>
        </td>

        {/* Priority dot */}
        <td>
          <div className="parent-client-boxes">
            <span
              className="client-cases-box"
              style={{ background: pm.dot }}
              title={c.priority}
            />
          </div>
        </td>
      </tr>
    );
  };

  // ── Right panel: full detail of selected case ──────────────────────────────
  const DetailPanel = () => {
    if (!selectedCase) return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "340px" }}>
        <p style={{ color: "#94a3b8", fontSize: "14px" }}>Select a case to begin verification</p>
      </div>
    );

    const fields = CHECK_FIELDS[activeCheck] || [];
    const sm     = STATUS_META[selectedCase.status] || STATUS_META["pending"];
    const pm     = PRIORITY_META[selectedCase.priority] || PRIORITY_META.LOW;

    return (
      <>
        {/* Header */}
        <div style={{
          background: "#27348B", color: "#fff", padding: "14px 18px",
          fontWeight: 700, fontSize: "13px", borderRadius: "6px 6px 0 0",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span>
            {selectedCase.case_id} — {selectedCase.candidate}
          </span>
          <span style={{
            background: pm.bg, color: pm.color, fontSize: "11px",
            fontWeight: 700, padding: "3px 10px", borderRadius: "20px",
          }}>
            {selectedCase.priority}
          </span>
        </div>

        {/* Check type tabs — only show checks present in this case */}
        <div style={{
          display: "flex", background: "#fff",
          borderBottom: "1px solid #e2e8f0", overflowX: "auto",
        }}>
          {CHECK_TABS.filter(t => selectedCase.checks_norm.includes(t.key)).map((t, i, arr) => {
            const accessible = canAccessTab(t.key);
            const isActive   = activeCheck === t.key;
            return (
              <button
                key={t.key}
                onClick={() => accessible && setActiveCheck(t.key)}
                title={!accessible ? "Your role cannot access this check type" : ""}
                style={{
                  padding: "11px 18px", border: "none", whiteSpace: "nowrap",
                  borderRight: i < arr.length - 1 ? "1px solid #e2e8f0" : "none",
                  borderBottom: isActive ? "3px solid #27348B" : "3px solid transparent",
                  background: isActive ? "#f0f4ff" : "#fff",
                  color: isActive ? "#27348B" : accessible ? "#64748b" : "#cbd5e1",
                  fontWeight: isActive ? 700 : 400,
                  fontSize: "13px",
                  cursor: accessible ? "pointer" : "not-allowed",
                  opacity: accessible ? 1 : 0.45,
                  transition: "all 0.15s",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Scrollable form body */}
        <div style={{
          border: "1px solid #e2e8f0", borderTop: "none",
          borderRadius: "0 0 6px 6px", background: "#fff",
          maxHeight: "520px", overflowY: "auto", padding: "16px",
        }}>

          {/* Case summary strip */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px", marginBottom: "18px",
          }}>
            {[
              { label: "Client",   value: selectedCase.client || selectedCase.client_name || "—" },
              { label: "Status",   value: <span style={{ background: sm.color, color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px" }}>{sm.label}</span> },
              { label: "TAT",      value: selectedCase.tat_display },
              { label: "Created",  value: selectedCase.created_at ? new Date(selectedCase.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—" },
            ].map(r => (
              <div key={r.label} style={{ background: "#f8fafc", borderRadius: "8px", padding: "10px 14px" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>{r.label}</div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b" }}>{r.value}</div>
              </div>
            ))}
          </div>

          {/* Outcome toggle */}
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#475569", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.4px" }}>
              Verification Outcome
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {OUTCOME_OPTS.map(o => (
                <button
                  key={o.key}
                  onClick={() => setOutcome(o.key)}
                  style={{
                    flex: 1, padding: "10px 8px", cursor: "pointer",
                    border: `2px solid ${outcome === o.key ? o.border : "#e2e8f0"}`,
                    borderRadius: "8px",
                    background: outcome === o.key ? o.bg : "#f8fafc",
                    color: outcome === o.key ? o.color : "#94a3b8",
                    fontWeight: outcome === o.key ? 700 : 500,
                    fontSize: "12px",
                    transition: "all 0.15s",
                  }}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic fields grid */}
          {!canAccessTab(activeCheck) ? (
            <div style={{ padding: "24px", textAlign: "center", color: "#94a3b8", fontSize: "13px", background: "#f8fafc", borderRadius: "8px" }}>
              Your role does not have access to the <strong>{CHECK_TABS.find(t => t.key === activeCheck)?.label}</strong> check.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {fields.map(f => (
                <FormField
                  key={f.key} f={f}
                  value={form[f.key] || ""}
                  onChange={v => setForm(p => ({ ...p, [f.key]: v }))}
                />
              ))}
            </div>
          )}

          {/* Save message */}
          {saveMsg.text && (
            <div style={{
              marginTop: "14px", padding: "10px 14px", borderRadius: "8px",
              background: saveMsg.type === "success" ? "#f0fdf4" : "#fef2f2",
              color:      saveMsg.type === "success" ? "#16a34a" : "#dc2626",
              fontSize: "13px", fontWeight: 600,
            }}>
              {saveMsg.text}
            </div>
          )}
        </div>

        {/* Action buttons */}
        {canAccessTab(activeCheck) && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" }}>
            <button
              onClick={() => handleSave(true)}
              disabled={saving}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "13px", background: "#27348B", color: "#fff", border: "none",
                borderRadius: "6px", fontWeight: 700, fontSize: "13px", cursor: "pointer",
              }}
            >
              💾 Save Draft
            </button>
            <button
              onClick={() => handleSave(false)}
              disabled={saving || !outcome}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "13px",
                background: saving || !outcome ? "#94a3b8" : "#10b981",
                color: "#fff", border: "none", borderRadius: "6px",
                fontWeight: 700, fontSize: "13px",
                cursor: saving || !outcome ? "not-allowed" : "pointer",
              }}
            >
              {saving ? "Saving…" : "✔ Save & Mark Done"}
            </button>
          </div>
        )}
      </>
    );
  };

  // ── Right sidebar: Charges + Comments ─────────────────────────────────────
  const RightPanel = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

      {/* Verification Charges */}
      <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
        <div style={{ background: "#27348B", padding: "13px 16px" }}>
          <h3 style={{ margin: 0, color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
            VERIFICATION CHARGES
          </h3>
        </div>
        {selectedCase ? (
          <>
            {caseCharges.map((c, i) => (
              <div key={c.key} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "12px 16px",
                background: i % 2 === 0 ? "#f8fafc" : "#fff",
                borderBottom: "1px solid #f1f5f9",
                fontSize: "13px",
              }}>
                <span style={{ color: "#475569" }}>{c.label} Check</span>
                <span style={{ fontWeight: 700, color: "#1e293b" }}>₹{c.amount}</span>
              </div>
            ))}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "14px 16px", background: "#27348B",
            }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "13px" }}>TOTAL</span>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "15px" }}>₹{totalCharge}</span>
            </div>
          </>
        ) : (
          <p style={{ padding: "16px", color: "#94a3b8", fontSize: "13px" }}>Select a case to see charges.</p>
        )}
      </div>

      {/* Comments */}
      <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #e2e8f0", flex: 1 }}>
        <div style={{ background: "#27348B", padding: "13px 16px" }}>
          <h3 style={{ margin: 0, color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
            COMMENTS & NOTES
          </h3>
        </div>
        <div style={{ maxHeight: "260px", overflowY: "auto", padding: "12px 14px" }}>
          {comments.length === 0 ? (
            <p style={{ color: "#cbd5e1", fontSize: "13px", textAlign: "center", padding: "16px 0" }}>
              No comments yet.
            </p>
          ) : (
            comments.map((c, i) => (
              <div key={c.id} style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
                <div style={{
                  width: "30px", height: "30px", borderRadius: "50%",
                  background: i % 2 === 0 ? "#7c3aed" : "#0d9488",
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 700, flexShrink: 0,
                }}>
                  {c.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#1e293b" }}>{c.author}</span>
                    <span style={{ fontSize: "11px", color: "#94a3b8" }}>{c.time}</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#475569", margin: 0, lineHeight: 1.5 }}>{c.text}</p>
                </div>
              </div>
            ))
          )}
          <div ref={commentsEndRef} />
        </div>
        <div style={{ borderTop: "1px solid #e2e8f0", display: "flex", gap: "0" }}>
          <input
            type="text"
            placeholder="Add a comment…"
            value={commentInput}
            onChange={e => setCommentInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendComment()}
            style={{
              flex: 1, border: "none", padding: "11px 14px",
              fontSize: "13px", outline: "none", background: "#fff",
            }}
          />
          <button onClick={sendComment} style={{
            background: "#27348B", border: "none", padding: "0 16px",
            cursor: "pointer", color: "#fff",
          }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* Page header */}
            <div className="dash-upper-head">
              <div className="left">
                <div className="dash-title-flex">
                  <h3 className="dash-title-text">Verifier Workspace</h3>
                  <span style={{
                    fontSize: "12px", color: "#64748b",
                    background: "#eef3ff", padding: "3px 10px", borderRadius: "20px",
                  }}>
                    {user.name || "Verifier"} — {role}
                  </span>
                  {assignedCheck && (
                    <span style={{
                      fontSize: "11px", color: "#fff",
                      background: "#27348B", padding: "3px 10px", borderRadius: "20px",
                    }}>
                      Assigned: {CHECK_TABS.find(t => t.key === assignedCheck)?.label}
                    </span>
                  )}
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
                  <button onClick={() => setSearch("")}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#94a3b8" }}>
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* View toggle: Active / Completed */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
              <button
                className={`tab-cta ${sidebarView === "active" ? "active" : ""}`}
                onClick={() => navigate("/Verifyer?view=active", { replace: true })}
              >
                Active Cases
                <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
                  {activeCases.length}
                </span>
              </button>
              <button
                className={`tab-cta ${sidebarView === "completed" ? "active" : ""}`}
                onClick={() => navigate("/Verifyer?view=completed", { replace: true })}
              >
                Completed
                <span style={{ marginLeft: "6px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
                  {completedCases.length}
                </span>
              </button>
            </div>

            {/* Three-column layout: Queue | Form | Charges+Comments */}
            <div style={{ display: "grid", gridTemplateColumns: "300px 1fr 280px", gap: "16px", alignItems: "start" }}>

              {/* ── LEFT: Case queue ── */}
              <div className="down-table" style={{ margin: 0 }}>
                <div className="client-portal-cases">
                  <h3>
                    {sidebarView === "completed" ? "COMPLETED" : "ACTIVE"} ({queueList.length})
                  </h3>
                </div>

                {loading ? (
                  <p style={{ padding: "24px", textAlign: "center", color: "#94a3b8" }}>Loading cases…</p>
                ) : queueList.length === 0 ? (
                  <p style={{ padding: "24px", textAlign: "center", color: "#94a3b8", fontSize: "13px" }}>
                    No {sidebarView} cases found.
                  </p>
                ) : (
                  <table>
                    <tbody>
                      {queueList.map(c => <QueueItem key={c.case_id} c={c} />)}
                    </tbody>
                  </table>
                )}
              </div>

              {/* ── MIDDLE: Detail + form ── */}
                            <div className="second-card">
                <div className="card-header verification-header">
                  <h2>
                    {CHECK_TABS.find(t => t.key === activeCheck)?.label.toUpperCase()} CHECK
                    {selectedCase ? ` — ${selectedCase.id} | ${selectedCase.candidate}` : ""}
                  </h2>
                </div>

                <div className="card-content-wrapper" style={{ overflowY: "auto" }}>

                  {/* Outcome toggle */}
                  <div style={{ marginBottom: "18px" }}>
                    <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "8px", textTransform: "uppercase" }}>
                      Outcome
                    </p>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {Object.entries(OUTCOME_STYLES).map(([key, s]) => (
                        <button
                          key={key}
                          onClick={() => setOutcome(key)}
                          style={{
                            flex: 1, padding: "10px", border: `2px solid ${outcome === key ? s.color : "#e2e8f0"}`,
                            borderRadius: "8px", background: outcome === key ? s.bg : "#f8fafc",
                            color: outcome === key ? s.color : "#64748b",
                            fontWeight: 700, fontSize: "13px", cursor: "pointer",
                          }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                   {/* Dynamic fields */}
                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {fields.map(f => {
                      if (f.type === "textarea") return (
                        <div key={f.key} style={{ gridColumn: "1 / -1" }}>
                          <label style={labelStyle}>{f.label}</label>
                          <textarea
                            rows={3}
                            value={form[f.key] || ""}
                            onChange={e => setField(f.key, e.target.value)}
                            placeholder={`Enter ${f.label.toLowerCase()}...`}
                            style={inputStyle}
                          />
                        </div>
                      );
                      if (f.type === "select") return (
                        <div key={f.key}>
                          <label style={labelStyle}>{f.label}</label>
                          <select
                            value={form[f.key] || ""}
                            onChange={e => setField(f.key, e.target.value)}
                            style={{ ...inputStyle, cursor: "pointer" }}
                          >
                            <option value="">— Select —</option>
                            {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      );
                      return (
                        <div key={f.key}>
                          <label style={labelStyle}>{f.label}</label>
                          <input
                            type={f.type}
                            value={form[f.key] || ""}
                            onChange={e => setField(f.key, e.target.value)}
                            placeholder={f.type === "date" ? "" : `Enter ${f.label.toLowerCase()}...`}
                            style={inputStyle}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Save message */}
                   {saveMsg && (
                    <div style={{ marginTop: "12px", padding: "10px 14px", borderRadius: "8px", background: "#f0fdf4", color: "#16a34a", fontSize: "13px", fontWeight: 600 }}>
                      {saveMsg}
                    </div>
                  )}

                   {/* Action buttons */}
                   <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
                    <button
                      onClick={() => handleSave(false)}
                      disabled={saving || !outcome}
                      style={{
                        flex: 2, padding: "12px", background: saving ? "#94a3b8" : "#10b981",
                        color: "#fff", border: "none", borderRadius: "8px",
                        fontWeight: 700, fontSize: "13px", cursor: outcome ? "pointer" : "not-allowed",
                        letterSpacing: "0.5px"
                      }}
                    >
                      {saving ? "Saving..." : "✔ SAVE & MARK DONE"}
                    </button>
                    <button
                      onClick={() => handleSave(true)}
                      disabled={saving}
                      style={{
                        flex: 1, padding: "12px", background: "#1e2761",
                        color: "#fff", border: "none", borderRadius: "8px",
                        fontWeight: 700, fontSize: "13px", cursor: "pointer"
                      }}
                    >
                       SAVE DRAFT
                     </button>
                     <button
                      onClick={() => { setForm({}); setOutcome(""); }}
                      style={{
                        width: "44px", padding: "12px", background: "#ef4444",
                        color: "#fff", border: "none", borderRadius: "8px",
                        fontWeight: 700, fontSize: "16px", cursor: "pointer"
                      }}
                    >
                      ×
                    </button>
                  </div>

                 </div>
               </div>

//               {/* ── RIGHT: Charges + Comments ── */}
              <div className="thrid-card">

                {/* Charges */}
                <div className="charges-block">
                  <div className="card-header charges-header">
                    <h2>VERIFICATION CHARGES</h2>
                  </div>
                  <div className="charges-content">
                    <div className="table-header-row">
                      <span className="th-label">Source</span>
                      <span className="th-value">Charge</span>
                    </div>
                    <div className="charges-list">
                      {selectedCase?.checks.map(ch => {
                        const rates = { employment: 350, education: 280, address: 180, database: 120, criminal: 220, drug: 400, court: 160 };
                        const label = CHECK_TABS.find(t => t.key === ch)?.label;
                        return (
                          <div className="charge-item" key={ch}>
                            <span className="charge-name">{label} Verification</span>
                            <span className="charge-amount">₹ {rates[ch]}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="total-row">
                      <span className="total-label">TOTAL</span>
                      <span className="total-amount">
                        ₹ {(selectedCase?.checks || []).reduce((s, ch) => {
                          const rates = { employment: 350, education: 280, address: 180, database: 120, criminal: 220, drug: 400, court: 160 };
                          return s + (rates[ch] || 0);
                        }, 0)}
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Comments */}
                 <div className="comments-block margin-top-md">
                   <div className="card-header comments-header">
                     <h2>COMMENTS & STATUS TRACK</h2>
                   </div>
                   <div className="comments-container">
                     <div className="comments-list">
                       {comments.map((c, i) => (
                        <div className="comment-item" key={i}>
                          <div className="comment-avatar avatar-p" style={{ background: i % 2 === 0 ? "#7c3aed" : "#0d9488" }}>
                             {c.author[0].toUpperCase()}
                           </div>
                           <div className="comment-body">
                             <div className="comment-header">
                               <span className="commenter-name">{c.author}</span>
                               <span className="comment-time">{c.time}</span>
                             </div>
                             <p className="comment-text">{c.text}</p>
                           </div>
                         </div>
                       ))}
                     </div>
                     <div className="comment-input-box">
                       <input
                         type="text"
                         placeholder="Type a comment..."
                         value={newComment}
                         onChange={e => setNewComment(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && sendComment()}
                       />
                       <button className="send-comment-btn" onClick={sendComment}>
                         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                           <line x1="22" y1="2" x2="11" y2="13" />
                           <polygon points="22 2 15 22 11 13 2 9 22 2" />
                         </svg>
                       </button>
                     </div>
                   </div>
                 </div>

               </div>

            </div>
          </div>
        </main>
      </section>
    </>
  );
}