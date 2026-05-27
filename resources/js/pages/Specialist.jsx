import { useNavigate } from "react-router-dom";


export default function Client() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <>
 

  {/* CONTENT */}
  <section id="noSidebar">
    {/* NAVBAR */}
    <nav>
      <div className="nav-toggle">
        <div className="bx bx-menu">
          <img src="images/inner-pages/client-portal-icon.svg" alt="" />
        </div>
      </div>
      
      <div className="head-src">
        <h3>CLIENT PORTAL — Case Submission · Status Traking · Reports · Export</h3>
      </div>
      
      <button type="button" className="primary-cta">Client Role</button>
    </nav>


    {/* MAIN */}
    <main>

     <div className="dash-wrper">


          <div className="dash-upper-head">
          <div className="left"> 
          <button className="tab-cta">Today</button>
          <button className="tab-cta">This Week</button>
          <button className="tab-cta">This Month</button>
          <button className="tab-cta active">Custom</button>
          </div>
          <div className="right">
          <button className="date-wrapper"><img src="/images/dashboard/calendar-icon.svg"></img><input
        type="text"
        name="daterange"
        className="selectedDate"
        placeholder="Select Date"
        readOnly
      /></button>
          <button className="primary-cta export"><img src="images/dashboard/export-icon.svg" alt="" /> Export CSV</button>
          <button className="secondary-cta import"><img src="images/dashboard/export-excel.svg" alt="" />Export Excel</button>
          </div>
          </div>


      {/* DASHBOARD Inner body */}

    
<div className="cre-dashboard-container">
    <div className="cre-dashboard-wrapper">
        
        {/* LEFT COLUMN: CHECK RESULTS */}
        <section className="cre-left-panel">
            <header className="cre-panel-header">
                <h2>CHECK RESULTS</h2>
            </header>

            <div className="cre-check-list">

                <div
                    className="cre-check-row"
                    style={{ "--accent-border-color": "#10b981" }}
                >
                    <span className="cre-check-label">Employment</span>
                    <button className="cre-status-pill cre-pill-clear">
                        Clear
                    </button>
                </div>

                <div
                    className="cre-check-row"
                    style={{ "--accent-border-color": "#eb4d4b" }}
                >
                    <span className="cre-check-label">Education</span>
                    <button className="cre-status-pill cre-pill-discrepancy">
                        Discrepancy
                    </button>
                </div>

                <div
                    className="cre-check-row"
                    style={{ "--accent-border-color": "#10b981" }}
                >
                    <span className="cre-check-label">Address</span>
                    <button className="cre-status-pill cre-pill-clear">
                        Clear
                    </button>
                </div>

                <div
                    className="cre-check-row"
                    style={{ "--accent-border-color": "#10b981" }}
                >
                    <span className="cre-check-label">Database</span>
                    <button className="cre-status-pill cre-pill-clear">
                        Clear
                    </button>
                </div>

                <div
                    className="cre-check-row"
                    style={{ "--accent-border-color": "#ffa502" }}
                >
                    <span className="cre-check-label">Criminal</span>
                    <button className="cre-status-pill cre-pill-pending">
                        Pending
                    </button>
                </div>

                <div
                    className="cre-check-row"
                    style={{ "--accent-border-color": "#10b981" }}
                >
                    <span className="cre-check-label">Drug Test</span>
                    <button className="cre-status-pill cre-pill-clear">
                        Clear
                    </button>
                </div>

                <div
                    className="cre-check-row"
                    style={{ "--accent-border-color": "#94a3b8" }}
                >
                    <span className="cre-check-label">Courtroom</span>
                    <button className="cre-status-pill cre-pill-na">
                        N/A
                    </button>
                </div>

            </div>

            {/* Bottom discrepancy banner */}
            <div className="cre-alert-banner">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>DISCREPANCY FOUND — Education</span>
            </div>
        </section>

        {/* MIDDLE COLUMN: REPORT EDITOR */}
        <section className="cre-middle-panel">
            <header className="cre-panel-header">
                <h2>
                    REPORT EDITOR — BGV-2403 &nbsp;|&nbsp; Suresh Pillai
                </h2>
            </header>

            <div className="cre-editor-content">

                {/* Executive Summary */}
                <div
                    className="cre-editor-card"
                    style={{
                        "--card-theme-color": "#2b3b8c",
                        "--card-header-bg": "rgba(43, 59, 140, 0.05)"
                    }}
                >
                    <div className="cre-card-header">
                        <h3>Executive Summary</h3>
                    </div>

                    <div className="cre-card-body">
                        <p>
                            Verification completed for 6/7 checks. One
                            discrepancy in Education — degree year mismatch
                            (claimed 2018, found 2019).
                        </p>
                    </div>
                </div>

                {/* Employment Verification */}
                <div
                    className="cre-editor-card"
                    style={{
                        "--card-theme-color": "#2b3b8c",
                        "--card-header-bg": "rgba(43, 59, 140, 0.05)"
                    }}
                >
                    <div className="cre-card-header">
                        <h3>Employment Verification</h3>
                    </div>

                    <div className="cre-card-body">
                        <p>
                            Verified with Wipro HR. Period, designation,
                            exit reason confirmed. Source:
                            hr.verify@wipro.com | Response: Phone 02/05.
                        </p>
                    </div>
                </div>

                {/* Education Discrepancy */}
                <div
                    className="cre-editor-card"
                    style={{
                        "--card-theme-color": "#e67e22",
                        "--card-header-bg": "rgba(230, 126, 34, 0.07)",
                        "--card-border-color": "rgba(230, 126, 34, 0.3)"
                    }}
                >
                    <div className="cre-card-header">
                        <h3>
                            Education Discrepancy{" "}
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </h3>
                    </div>

                    <div className="cre-card-body">
                        <p>
                            Candidate claimed 2018 graduation. Institution
                            records show 2019. Flagged for client decision
                            before final report.
                        </p>
                    </div>
                </div>

            </div>

            {/* Footer buttons */}
            <footer className="cre-editor-footer">
                <button className="cre-btn cre-btn-success">
                    SUBMIT FOR QC
                </button>

                <button className="cre-btn cre-btn-purple">
                    SAVE DRAFT
                </button>

                <button className="cre-btn cre-btn-navy">
                    DISPATCH TO CLIENT
                </button>
            </footer>
        </section>

        {/* RIGHT COLUMN: COMMENTS & QC NOTES */}
        <section className="cre-right-panel">
            <header className="cre-panel-header">
                <h2>COMMENTS & QC NOTES</h2>
            </header>

            <div className="cre-comments-content">

                {/* Comment 1 */}
                <div className="cre-comment-card">
                    <div className="cre-avatar cre-avatar-purple">Q</div>

                    <div className="cre-comment-details">
                        <div className="cre-comment-meta">
                            <span className="cre-comment-author">
                                QC Lead
                            </span>

                            <span className="cre-comment-time">
                                11:30
                            </span>
                        </div>

                        <p className="cre-comment-text">
                            Education discrepancy must be flagged prominently.
                        </p>
                    </div>
                </div>

                {/* Comment 2 */}
                <div className="cre-comment-card">
                    <div className="cre-avatar cre-avatar-teal">S</div>

                    <div className="cre-comment-details">
                        <div className="cre-comment-meta">
                            <span className="cre-comment-author">
                                Specialist
                            </span>

                            <span className="cre-comment-time">
                                11:15
                            </span>
                        </div>

                        <p className="cre-comment-text">
                            Section 3 updated with institution proof attached.
                        </p>
                    </div>
                </div>

                {/* Comment 3 */}
                <div className="cre-comment-card">
                    <div className="cre-avatar cre-avatar-purple">Q</div>

                    <div className="cre-comment-details">
                        <div className="cre-comment-meta">
                            <span className="cre-comment-author">
                                QC Lead
                            </span>

                            <span className="cre-comment-time">
                                10:50
                            </span>
                        </div>

                        <p className="cre-comment-text">
                            Confirm if client wants to proceed despite discrepancy.
                        </p>
                    </div>
                </div>

            </div>

            {/* Input */}
            <div className="cre-notes-input-wrapper">
                <input
                    type="text"
                    className="cre-note-input"
                    placeholder="Add note..."
                />

                <button className="cre-btn-send">
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>

            {/* Stats */}
            <div className="cre-monthly-banner">
                Reports This Month: 42
            </div>

            {/* Export Buttons */}
            <footer className="cre-right-footer">
                <button className="cre-btn cre-btn-success">
                    Export CSV
                </button>

                <button className="cre-btn cre-btn-navy">
                    Export Excel
                </button>
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