// import { useNavigate } from "react-router-dom";


// export default function Verifyer() {
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
//     <nav className="verifyer">
//       <div className="nav-toggle">
//         <div className="bx bx-menu">
//           <img src="images/inner-pages/emp-check-icon.svg" alt="" />
//         </div>
//       </div>
      
//       <div className="head-src">
//         <h3>VERIFIER — Resoult Avalibility & Result Entry | BGV-2401 Employment</h3>
//       </div>
      
//       <button type="button" className="primary-cta">Verifier Role</button>
//     </nav>


//     {/* MAIN */}
//     <main>

//      <div className="dash-wrper">

//      <div className="header-navbar">
      
//           <button className="tab-cta">Employment</button>
//           <button className="tab-cta active">Education</button>
//           <button className="tab-cta">Address</button>
//           <button className="tab-cta">Database</button>
//           <button className="tab-cta">Criminal</button>
//           <button className="tab-cta">Drug Test</button>
//           <button className="tab-cta">Courtroom</button>
          
//      </div>

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

      

//       {/* Emplyment Check  body */}

//     {/* Main Portal Layout Container */}
// <div className="sas-portal-container">

//   {/* Outer Flexbox Layout */}
//   <div className="sas-emplyment-check-body">

//     {/* FIRST CARD */}
//     <div className="sas-frist-card">

//       <div className="sas-card-header sas-source-header">
//         <h2>SOURCE AVAILABILITY STATUS</h2>
//       </div>

//       {/* Table Header */}
//       <div className="sas-table-header">
//         <span className="sas-th-col col-source">Source</span>
//         <span className="sas-th-col col-type">Type</span>
//         <span className="sas-th-col col-availability">Availability</span>
//         <span className="sas-th-col col-tat">TAT</span>
//         <span className="sas-th-col col-action"></span>
//       </div>

//       {/* Rows */}
//       <div className="sas-source-rows-list">

//         <div className="sas-source-row status-border-green">

//           <div className="sas-source-info col-source">
//             <span className="sas-source-title">
//               Infosys HR Portal
//             </span>

//             <span className="sas-source-tag">
//               Email
//             </span>
//           </div>

//           <div className="col-type">
//             <span className="sas-badge badge-responsive">
//               Responsive
//             </span>
//           </div>

//           <div className="col-availability">
//             <span className="sas-availability-text">
//               24h
//             </span>
//           </div>

//           <div className="col-action">
//             <button className="sas-action-btn">
//               Use
//             </button>
//           </div>

//         </div>

//         <div className="sas-source-row status-border-teal">

//           <div className="sas-source-info col-source">
//             <span className="sas-source-title">
//               Employment DB API
//             </span>

//             <span className="sas-source-tag">
//               API
//             </span>
//           </div>

//           <div className="col-type">
//             <span className="sas-badge badge-live">
//               Live
//             </span>
//           </div>

//           <div className="col-availability">
//             <span className="sas-availability-text">
//               Instant
//             </span>
//           </div>


//           <div className="col-action">
//             <button className="sas-action-btn">
//               Use
//             </button>
//           </div>

//         </div>

//         <div className="sas-source-row status-border-orange">

//           <div className="sas-source-info col-source">
//             <span className="sas-source-title">
//               EPFO Records
//             </span>

//             <span className="sas-source-tag">
//               Government
//             </span>
//           </div>

//           <div className="col-type">
//             <span className="sas-badge badge-partially">
//               Partially
//             </span>
//           </div>

//           <div className="col-availability">
//             <span className="sas-availability-text">
//               48h
//             </span>
//           </div>


//           <div className="col-action">
//             <button className="sas-action-btn">
//               Use
//             </button>
//           </div>

//         </div>


//         <div className="sas-source-row status-border-teal">

//           <div className="sas-source-info col-source">
//             <span className="sas-source-title">
//               Employment DB API
//             </span>

//             <span className="sas-source-tag">
//               API
//             </span>
//           </div>

//           <div className="col-type">
//             <span className="sas-badge badge-live">
//               Live
//             </span>
//           </div>

//           <div className="col-availability">
//             <span className="sas-availability-text">
//               Instant
//             </span>
//           </div>


//           <div className="col-action">
//             <button className="sas-action-btn">
//               Use
//             </button>
//           </div>

//         </div>

//         <div className="sas-source-row status-border-orange">

//           <div className="sas-source-info col-source">
//             <span className="sas-source-title">
//               EPFO Records
//             </span>

//             <span className="sas-source-tag">
//               Government
//             </span>
//           </div>

//           <div className="col-type">
//             <span className="sas-badge badge-partially">
//               Partially
//             </span>
//           </div>

//           <div className="col-availability">
//             <span className="sas-availability-text">
//               48h
//             </span>
//           </div>


//           <div className="col-action">
//             <button className="sas-action-btn">
//               Use
//             </button>
//           </div>

//         </div>

//       </div>
//     </div>

//     {/* SECOND CARD */}
//     <div className="sas-second-card">

//       <div className="sas-card-header sas-form-header">
//         <h2>
//           RESULT ENTRY FORM — Employment Verification
//         </h2>
//       </div>

//       <form className="sas-entry-form" id="resultEntryForm">

//         <div className="sas-form-group">
//           <label className="sas-form-label">
//             Employer Confirmed
//           </label>

//           <input
//             type="text"
//             className="sas-form-input"
//             defaultValue="Infosys Limited"
//             placeholder="Enter confirmed employer name"
//             required
//           />
//         </div>

//         <div className="sas-form-group">
//           <label className="sas-form-label">
//             Employment Period
//           </label>

//           <input
//             type="text"
//             className="sas-form-input"
//             defaultValue="Jan 2018 – Mar 2022"
//             placeholder="e.g., Jan 2018 - Mar 2022"
//             required
//           />
//         </div>

//         <div className="sas-form-group">
//           <label className="sas-form-label">
//             Designation
//           </label>

//           <input
//             type="text"
//             className="sas-form-input"
//             defaultValue="Senior Systems Engineer"
//             placeholder="Enter designation"
//             required
//           />
//         </div>

//         <div className="sas-form-group">
//           <label className="sas-form-label">
//             Exit Reason
//           </label>

//           <input
//             type="text"
//             className="sas-form-input"
//             defaultValue="Resignation (voluntary)"
//             placeholder="Enter exit reason"
//             required
//           />
//         </div>

//         {/* Toggle Buttons */}
//         <div className="sas-form-group">

//           <label className="sas-form-label">
//             Verification Outcome
//           </label>

//           <div className="sas-outcome-toggle-group">

//             <button
//               type="button"
//               className="sas-toggle-btn active-clear"
//             >
//               Clear
//             </button>

//             <button
//               type="button"
//               className="sas-toggle-btn"
//             >
//               Discrepancy
//             </button>

//             <button
//               type="button"
//               className="sas-toggle-btn"
//             >
//               Unable to Verify
//             </button>

//           </div>
//         </div>

//         {/* Remarks */}
//         <div className="sas-form-group flex-grow-input">

//           <label className="sas-form-label">
//             Verifier Remarks
//           </label>

//           <textarea
//             className="sas-form-textarea"
//             rows="3"
//             placeholder="Enter detailed remarks..."
//             defaultValue="HR responded via email on 02/05. All details match."
//           ></textarea>

//         </div>

//         {/* Actions */}
//         <div className="sas-form-actions-row">

//           <button
//             type="submit"
//             className="sas-btn-submit"
//           >
//             SAVE & MARK DONE
//           </button>

//           <button
//             type="button"
//             className="sas-btn-draft"
//             id="btnSaveDraft"
//           >
//             SAVE DRAFT
//           </button>

//           <button
//             type="button"
//             className="sas-btn-cancel"
//             aria-label="Cancel"
//           >

//             <svg
//               viewBox="0 0 24 24"
//               width="18"
//               height="18"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="18" y1="6" x2="6" y2="18"></line>
//               <line x1="6" y1="6" x2="18" y2="18"></line>
//             </svg>

//           </button>

//         </div>

//       </form>
//     </div>

//     {/* THIRD CARD */}
//     <div className="sas-thrid-card">

//       {/* Activity */}
//       <div className="sas-activity-block">

//         <div className="sas-card-header sas-activity-header">
//           <h2>ACTIVITY LOG & COMMENTS</h2>
//         </div>

//         <div className="sas-activity-content">

//           <h3 className="sas-section-subtitle">
//             Status Timeline
//           </h3>

//           <div className="sas-timeline-list">

//             <div className="sas-timeline-item">

//               <div className="sas-timeline-left">

//                 <span className="sas-time-stamp">
//                   11:02
//                 </span>

//                 <div className="sas-timeline-node node-active">

//                   <svg
//                     viewBox="0 0 24 24"
//                     width="10"
//                     height="10"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="20 6 9 17 4 12"></polyline>
//                   </svg>

//                 </div>

//               </div>

//               <div className="sas-timeline-right">
//                 <span className="sas-log-text text-highlight">
//                   Result saved (Draft)
//                 </span>
//               </div>

//             </div>

//           </div>

//         </div>
//       </div>

//       {/* COMMENTS */}
//       <div className="sas-comments-sub-block">

//         <div className="sas-comments-bar-header">
//           <h3>COMMENTS</h3>
//         </div>

//         <div className="sas-comments-container">

//           <div
//             className="sas-comments-stream"
//             id="sasCommentsStream"
//           >

//             <div className="sas-comment-bubble">

//               <div className="sas-comment-avatar avatar-purple">
//                 P
//               </div>

//               <div className="sas-comment-body">

//                 <div className="sas-comment-info-row">

//                   <span className="sas-commenter-title">
//                     Priya (QC)
//                   </span>

//                   <span className="sas-comment-date">
//                     10:50 AM
//                   </span>

//                 </div>

//                 <p className="sas-comment-desc">
//                   Please confirm exit reason documented.
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* Reply */}
//           <form
//             className="sas-reply-form"
//             id="sasReplyForm"
//           >

//             <input
//               type="text"
//               id="sasReplyInput"
//               placeholder="Reply..."
//               autoComplete="off"
//               required
//             />

//             <button
//               type="submit"
//               className="sas-send-btn"
//               aria-label="Send reply"
//             >

//               <svg
//                 viewBox="0 0 24 24"
//                 width="16"
//                 height="16"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="22" y1="2" x2="11" y2="13"></line>

//                 <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
//               </svg>

//             </button>

//           </form>

//         </div>
//       </div>

//     </div>
//   </div>
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

// ─────────────────────────────────────────
// Mock cases per check type
// Replace with API call when backend is ready:
// GET /api/cases?check_type={checkType}&assigned_to={userId}
// ─────────────────────────────────────────
const MOCK_CASES = {
  employment: [
    { id: "BGV-2401", candidate: "Ravi Kumar",   client: "Infosys", tat: "3d", status: "pending",     employer: "Infosys Limited",       period: "Jan 2018 – Mar 2022", designation: "Sr. Systems Engineer", exitReason: "Resignation (voluntary)" },
    { id: "BGV-2402", candidate: "Anjali Mehta", client: "TCS",     tat: "5d", status: "in-progress", employer: "Tata Consultancy",       period: "Jun 2019 – Dec 2023", designation: "Business Analyst",     exitReason: "Better opportunity" },
    { id: "BGV-2403", candidate: "Suresh Pillai",client: "Wipro",   tat: "4d", status: "completed",   employer: "Wipro Technologies",     period: "Mar 2015 – Aug 2019", designation: "Project Manager",      exitReason: "Retirement" },
    { id: "BGV-2404", candidate: "Neha Sharma",  client: "HCL",     tat: "1d", status: "pending",     employer: "HCL Technologies",       period: "Jul 2020 – Present",  designation: "Software Engineer",    exitReason: "—" },
  ],
  education: [
    { id: "BGV-2405", candidate: "Amit Verma",   client: "Accenture", tat: "2d", status: "pending",     institution: "Delhi University", degree: "B.Tech", yop: "2017", rollNo: "DU17CS042" },
    { id: "BGV-2406", candidate: "Priya Singh",  client: "Cognizant", tat: "3d", status: "in-progress", institution: "Mumbai University",degree: "MBA",    yop: "2019", rollNo: "MU19MB118" },
  ],
  address: [
    { id: "BGV-2407", candidate: "Rohit Gupta",  client: "Infosys", tat: "2d", status: "pending",     address: "42 MG Road, Bangalore 560001", type: "Permanent" },
  ],
  database: [
    { id: "BGV-2408", candidate: "Kavya Nair",   client: "TCS",     tat: "1d", status: "pending",     screenType: "CIBIL + Criminal DB", result: "Pending" },
  ],
  criminal: [
    { id: "BGV-2409", candidate: "Deepak Rao",   client: "Wipro",   tat: "4d", status: "pending",     court: "Bangalore District Court", jurisdiction: "Civil + Criminal" },
  ],
  drug_test: [
    { id: "BGV-2410", candidate: "Sneha Iyer",   client: "HCL",     tat: "3d", status: "pending",     lab: "Apollo Diagnostics", sampleType: "Urine" },
  ],
  courtroom: [
    { id: "BGV-2411", candidate: "Vikram Mehta", client: "Infosys", tat: "5d", status: "pending",     court: "Mumbai High Court", caseRef: "MHC/2023/4421" },
  ],
};

const CHECK_TYPES = [
  { key: "employment", label: "Employment" },
  { key: "education",  label: "Education" },
  { key: "address",    label: "Address" },
  { key: "database",   label: "Database" },
  { key: "criminal",   label: "Criminal" },
  { key: "drug_test",  label: "Drug Test" },
  { key: "courtroom",  label: "Courtroom" },
];

const SOURCES = {
  employment: [
    { name: "Infosys HR Portal",   tag: "Email",      badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green" },
    { name: "Employment DB API",   tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
    { name: "EPFO Records",        tag: "Government", badge: "Partially",  badgeClass: "badge-partially",  tat: "48h",     borderClass: "status-border-orange" },
  ],
  education: [
    { name: "University Portal",   tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
    { name: "Result Link DB",      tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green" },
  ],
  address: [
    { name: "Field Agent",         tag: "Physical",   badge: "Available",  badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-green" },
    { name: "Digital Trace",       tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
  ],
  database: [
    { name: "CIBIL API",           tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
    { name: "Criminal DB",         tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green" },
  ],
  criminal: [
    { name: "District Court",      tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "72h",     borderClass: "status-border-orange" },
    { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
  ],
  drug_test: [
    { name: "Apollo Diagnostics",  tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green" },
    { name: "SRL Diagnostics",     tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-orange" },
  ],
  courtroom: [
    { name: "High Court Registry", tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "5d",      borderClass: "status-border-orange" },
    { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
  ],
};

// Get verifier's assigned check type from user object
// When API is ready: user.check_type from login response
function getAssignedCheckType() {
  try {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    return user.check_type || "employment"; // default to employment until API provides it
  } catch {
    return "employment";
  }
}

export default function Verifyer() {
  const navigate = useNavigate();

  const assignedType  = getAssignedCheckType();
  const [activeTab, setActiveTab]     = useState(assignedType);
  const [cases, setCases]             = useState(MOCK_CASES[assignedType] || []);
  const [selectedCase, setSelectedCase] = useState(null);

  // Form state
  const [form, setForm]       = useState({});
  const [outcome, setOutcome] = useState("clear");
  const [remarks, setRemarks] = useState("");
  const [saveStatus, setSaveStatus] = useState(""); // "saved" | "draft" | ""

  // Activity log
  const [activity, setActivity] = useState([
    { time: "10:30", text: "Case assigned to verifier" },
  ]);

  // Comments
  const [comments, setComments] = useState([
    { id: 1, author: "Priya (QC)", avatar: "P", avatarClass: "avatar-purple", time: "10:50 AM", text: "Please confirm exit reason documented." },
  ]);
  const [commentInput, setCommentInput] = useState("");
  const commentsEndRef = useRef(null);

  // Search
  const [search, setSearch] = useState("");

  // Load cases when tab changes
  useEffect(() => {
    setCases(MOCK_CASES[activeTab] || []);
    setSelectedCase(null);
    setForm({});
    setSaveStatus("");
  }, [activeTab]);

  // Scroll comments to bottom when new comment added
  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  // Select a case — pre-fill form
  const selectCase = (c) => {
    setSelectedCase(c);
    setForm({ ...c });
    setOutcome("clear");
    setRemarks("");
    setSaveStatus("");
    setActivity([
      { time: formatTime(), text: `Case ${c.id} opened` },
    ]);
  };

  // Save & Mark Done
  const handleSave = (e) => {
    e.preventDefault();
    if (!selectedCase) return;

    // TODO: Replace with API call:
    // POST /api/cases/{id}/result
    // { ...form, outcome, remarks, status: "completed" }

    setCases((prev) =>
      prev.map((c) => c.id === selectedCase.id ? { ...c, status: "completed" } : c)
    );
    setActivity((prev) => [
      ...prev,
      { time: formatTime(), text: `Result saved — ${outcomeLabel(outcome)}` },
    ]);
    setSaveStatus("saved");
  };

  // Save Draft
  const handleDraft = () => {
    if (!selectedCase) return;

    // TODO: POST /api/cases/{id}/draft
    setCases((prev) =>
      prev.map((c) => c.id === selectedCase.id ? { ...c, status: "in-progress" } : c)
    );
    setActivity((prev) => [
      ...prev,
      { time: formatTime(), text: "Draft saved" },
    ]);
    setSaveStatus("draft");
  };

  // Post comment
  const handleComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();
    const name = user.name || "Verifier";
    const initial = name.charAt(0).toUpperCase();

    // TODO: POST /api/cases/{id}/comments { text: commentInput }
    setComments((prev) => [
      ...prev,
      { id: Date.now(), author: name, avatar: initial, avatarClass: "avatar-blue", time: formatTime(true), text: commentInput.trim() },
    ]);
    setCommentInput("");
    setActivity((prev) => [
      ...prev,
      { time: formatTime(), text: "Comment added" },
    ]);
  };

  // Filtered cases
  const filtered = cases.filter((c) =>
    c.id.toLowerCase().includes(search.toLowerCase()) ||
    c.candidate.toLowerCase().includes(search.toLowerCase()) ||
    c.client.toLowerCase().includes(search.toLowerCase())
  );

  const sources = SOURCES[activeTab] || [];
  const user = (() => { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } })();

  return (
    <>
      <Sidebar />

      <section id="noSidebar">

        {/* Nav */}
        <nav className="verifyer">
          <div className="nav-toggle">
            <img src="images/inner-pages/emp-check-icon.svg" alt="" />
          </div>
          <div className="head-src">
            <h3>
              VERIFIER — {CHECK_TYPES.find(t => t.key === activeTab)?.label} Check
              {selectedCase ? ` | ${selectedCase.id} · ${selectedCase.candidate}` : ""}
            </h3>
          </div>
          <button type="button" className="primary-cta">
            {user.name || "Verifier"}
          </button>
        </nav>

        <main>
          <div className="dash-wrper">

            {/* Check type tabs */}
            <div className="header-navbar">
              {CHECK_TYPES.map((t) => (
                <button
                  key={t.key}
                  className={`tab-cta ${activeTab === t.key ? "active" : ""} ${t.key !== assignedType ? "tab-disabled" : ""}`}
                  onClick={() => t.key === assignedType && setActiveTab(t.key)}
                  title={t.key !== assignedType ? "Not your assigned check type" : ""}
                  style={{ opacity: t.key !== assignedType ? 0.4 : 1, cursor: t.key !== assignedType ? "not-allowed" : "pointer" }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Date filters + search */}
            <div className="dash-upper-head">
              <div className="left">
                <button className="tab-cta">Today</button>
                <button className="tab-cta">This Week</button>
                <button className="tab-cta">This Month</button>
                <button className="tab-cta active">Custom</button>
              </div>
              <div className="right">
                <div className="input-grp" style={{ margin: 0 }}>
                  <input
                    type="text"
                    placeholder="Search cases..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: "200px" }}
                  />
                </div>
                <button className="primary-cta export">
                  <img src="images/dashboard/export-icon.svg" alt="" /> Export CSV
                </button>
              </div>
            </div>

            {/* Cases list (above the 3-card layout) */}
            <div className="down-table" style={{ marginBottom: "16px" }}>
              <table>
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Candidate</th>
                    <th>Client</th>
                    <th>TAT</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr><td colSpan="6" style={{ textAlign: "center", padding: "20px", color: "#888" }}>No cases found.</td></tr>
                  ) : (
                    filtered.map((c) => (
                      <tr
                        key={c.id}
                        style={{ background: selectedCase?.id === c.id ? "#f0f7ff" : "" }}
                      >
                        <td>{c.id}</td>
                        <td>{c.candidate}</td>
                        <td>{c.client}</td>
                        <td>{c.tat}</td>
                        <td><span className={`status ${c.status}`}>{statusLabel(c.status)}</span></td>
                        <td>
                          <button
                            className="view-cta"
                            onClick={() => selectCase(c)}
                          >
                            {selectedCase?.id === c.id ? "Selected" : "Open"}
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* 3-card verification layout */}
            {selectedCase ? (
              <div className="sas-portal-container">
                <div className="sas-emplyment-check-body">

                  {/* CARD 1 — Source availability */}
                  <div className="sas-frist-card">
                    <div className="sas-card-header sas-source-header">
                      <h2>SOURCE AVAILABILITY STATUS</h2>
                    </div>
                    <div className="sas-table-header">
                      <span className="sas-th-col col-source">Source</span>
                      <span className="sas-th-col col-type">Type</span>
                      <span className="sas-th-col col-availability">TAT</span>
                      <span className="sas-th-col col-action"></span>
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
                            <button
                              className="sas-action-btn"
                              onClick={() => setActivity((prev) => [...prev, { time: formatTime(), text: `Source selected: ${s.name}` }])}
                            >
                              Use
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 2 — Result entry form */}
                  <div className="sas-second-card">
                    <div className="sas-card-header sas-form-header">
                      <h2>RESULT ENTRY FORM — {CHECK_TYPES.find(t => t.key === activeTab)?.label} Verification</h2>
                    </div>

                    <form className="sas-entry-form" onSubmit={handleSave}>

                      {/* Dynamic fields based on check type */}
                      {activeTab === "employment" && <>
                        <FormField label="Employer Confirmed"  value={form.employer     || ""} onChange={(v) => setForm({ ...form, employer: v })} />
                        <FormField label="Employment Period"   value={form.period       || ""} onChange={(v) => setForm({ ...form, period: v })} />
                        <FormField label="Designation"        value={form.designation  || ""} onChange={(v) => setForm({ ...form, designation: v })} />
                        <FormField label="Exit Reason"        value={form.exitReason   || ""} onChange={(v) => setForm({ ...form, exitReason: v })} />
                      </>}

                      {activeTab === "education" && <>
                        <FormField label="Institution"        value={form.institution  || ""} onChange={(v) => setForm({ ...form, institution: v })} />
                        <FormField label="Degree"             value={form.degree       || ""} onChange={(v) => setForm({ ...form, degree: v })} />
                        <FormField label="Year of Passing"    value={form.yop          || ""} onChange={(v) => setForm({ ...form, yop: v })} />
                        <FormField label="Roll Number"        value={form.rollNo       || ""} onChange={(v) => setForm({ ...form, rollNo: v })} />
                      </>}

                      {activeTab === "address" && <>
                        <FormField label="Address"            value={form.address      || ""} onChange={(v) => setForm({ ...form, address: v })} />
                        <FormField label="Address Type"       value={form.type         || ""} onChange={(v) => setForm({ ...form, type: v })} />
                      </>}

                      {activeTab === "database" && <>
                        <FormField label="Screen Type"        value={form.screenType   || ""} onChange={(v) => setForm({ ...form, screenType: v })} />
                        <FormField label="Result"             value={form.result       || ""} onChange={(v) => setForm({ ...form, result: v })} />
                      </>}

                      {activeTab === "criminal" && <>
                        <FormField label="Court"              value={form.court        || ""} onChange={(v) => setForm({ ...form, court: v })} />
                        <FormField label="Jurisdiction"       value={form.jurisdiction || ""} onChange={(v) => setForm({ ...form, jurisdiction: v })} />
                      </>}

                      {activeTab === "drug_test" && <>
                        <FormField label="Lab"                value={form.lab          || ""} onChange={(v) => setForm({ ...form, lab: v })} />
                        <FormField label="Sample Type"        value={form.sampleType   || ""} onChange={(v) => setForm({ ...form, sampleType: v })} />
                      </>}

                      {activeTab === "courtroom" && <>
                        <FormField label="Court"              value={form.court        || ""} onChange={(v) => setForm({ ...form, court: v })} />
                        <FormField label="Case Reference"     value={form.caseRef      || ""} onChange={(v) => setForm({ ...form, caseRef: v })} />
                      </>}

                      {/* Outcome toggle */}
                      <div className="sas-form-group">
                        <label className="sas-form-label">Verification Outcome</label>
                        <div className="sas-outcome-toggle-group">
                          {["clear", "discrepancy", "unable"].map((o) => (
                            <button
                              key={o}
                              type="button"
                              className={`sas-toggle-btn ${outcome === o ? `active-${o === "clear" ? "clear" : o === "discrepancy" ? "disc" : "unable"}` : ""}`}
                              style={{ background: outcome === o ? outcomeColor(o) : "", color: outcome === o ? "#fff" : "", borderColor: outcome === o ? outcomeColor(o) : "" }}
                              onClick={() => setOutcome(o)}
                            >
                              {outcomeLabel(o)}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Remarks */}
                      <div className="sas-form-group flex-grow-input">
                        <label className="sas-form-label">Verifier Remarks</label>
                        <textarea
                          className="sas-form-textarea"
                          rows="3"
                          placeholder="Enter detailed remarks..."
                          value={remarks}
                          onChange={(e) => setRemarks(e.target.value)}
                        />
                      </div>

                      {/* Success feedback */}
                      {saveStatus === "saved"  && <p style={{ color: "green", fontSize: "13px", marginBottom: "8px" }}>Saved and marked done.</p>}
                      {saveStatus === "draft"  && <p style={{ color: "#888",  fontSize: "13px", marginBottom: "8px" }}>Draft saved.</p>}

                      {/* Actions */}
                      <div className="sas-form-actions-row">
                        <button type="submit" className="sas-btn-submit">SAVE & MARK DONE</button>
                        <button type="button" className="sas-btn-draft" onClick={handleDraft}>SAVE DRAFT</button>
                        <button
                          type="button"
                          className="sas-btn-cancel"
                          onClick={() => { setSelectedCase(null); setForm({}); setSaveStatus(""); }}
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>

                    </form>
                  </div>

                  {/* CARD 3 — Activity + Comments */}
                  <div className="sas-thrid-card">

                    {/* Activity log */}
                    <div className="sas-activity-block">
                      <div className="sas-card-header sas-activity-header">
                        <h2>ACTIVITY LOG & COMMENTS</h2>
                      </div>
                      <div className="sas-activity-content">
                        <h3 className="sas-section-subtitle">Status Timeline</h3>
                        <div className="sas-timeline-list">
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
                        <h3>COMMENTS</h3>
                      </div>
                      <div className="sas-comments-container">
                        <div className="sas-comments-stream" id="sasCommentsStream">
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
                            placeholder="Reply..."
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                            autoComplete="off"
                          />
                          <button type="submit" className="sas-send-btn" aria-label="Send reply">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px", color: "#888", fontSize: "14px" }}>
                Select a case from the table above to begin verification.
              </div>
            )}

          </div>
        </main>
      </section>
    </>
  );
}

// ── Small reusable form field ─────────────────────────
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

// ── Helpers ───────────────────────────────────────────
function formatTime(full = false) {
  const now = new Date();
  if (full) return now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function statusLabel(s) {
  return { pending: "Pending", "in-progress": "In Progress", completed: "Completed", "qc-review": "QC Review" }[s] || s;
}

function outcomeLabel(o) {
  return { clear: "Clear", discrepancy: "Discrepancy", unable: "Unable to Verify" }[o] || o;
}

function outcomeColor(o) {
  return { clear: "#16a34a", discrepancy: "#dc2626", unable: "#d97706" }[o] || "#333";
}