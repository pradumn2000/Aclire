import { useNavigate } from "react-router-dom";


export default function Dashboard() {
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
    <nav className="verifyer">
      <div className="nav-toggle">
        <div className="bx bx-menu">
          <img src="images/inner-pages/emp-check-icon.svg" alt="" />
        </div>
      </div>
      
      <div className="head-src">
        <h3>VERIFIER — Resoult Avalibility & Result Entry | BGV-2401 Employment</h3>
      </div>
      
      <button type="button" className="primary-cta">Verifier Role</button>
    </nav>


    {/* MAIN */}
    <main>

     <div className="dash-wrper">

     <div className="header-navbar">
      
          <button className="tab-cta">Employment</button>
          <button className="tab-cta active">Education</button>
          <button className="tab-cta">Address</button>
          <button className="tab-cta">Database</button>
          <button className="tab-cta">Criminal</button>
          <button className="tab-cta">Drug Test</button>
          <button className="tab-cta">Courtroom</button>
          
     </div>

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

      

      {/* Emplyment Check  body */}

    {/* Main Portal Layout Container */}
<div className="sas-portal-container">

  {/* Outer Flexbox Layout */}
  <div className="sas-emplyment-check-body">

    {/* FIRST CARD */}
    <div className="sas-frist-card">

      <div className="sas-card-header sas-source-header">
        <h2>SOURCE AVAILABILITY STATUS</h2>
      </div>

      {/* Table Header */}
      <div className="sas-table-header">
        <span className="sas-th-col col-source">Source</span>
        <span className="sas-th-col col-type">Type</span>
        <span className="sas-th-col col-availability">Availability</span>
        <span className="sas-th-col col-tat">TAT</span>
        <span className="sas-th-col col-action"></span>
      </div>

      {/* Rows */}
      <div className="sas-source-rows-list">

        <div className="sas-source-row status-border-green">

          <div className="sas-source-info col-source">
            <span className="sas-source-title">
              Infosys HR Portal
            </span>

            <span className="sas-source-tag">
              Email
            </span>
          </div>

          <div className="col-type">
            <span className="sas-badge badge-responsive">
              Responsive
            </span>
          </div>

          <div className="col-availability">
            <span className="sas-availability-text">
              24h
            </span>
          </div>

          <div className="col-action">
            <button className="sas-action-btn">
              Use
            </button>
          </div>

        </div>

        <div className="sas-source-row status-border-teal">

          <div className="sas-source-info col-source">
            <span className="sas-source-title">
              Employment DB API
            </span>

            <span className="sas-source-tag">
              API
            </span>
          </div>

          <div className="col-type">
            <span className="sas-badge badge-live">
              Live
            </span>
          </div>

          <div className="col-availability">
            <span className="sas-availability-text">
              Instant
            </span>
          </div>


          <div className="col-action">
            <button className="sas-action-btn">
              Use
            </button>
          </div>

        </div>

        <div className="sas-source-row status-border-orange">

          <div className="sas-source-info col-source">
            <span className="sas-source-title">
              EPFO Records
            </span>

            <span className="sas-source-tag">
              Government
            </span>
          </div>

          <div className="col-type">
            <span className="sas-badge badge-partially">
              Partially
            </span>
          </div>

          <div className="col-availability">
            <span className="sas-availability-text">
              48h
            </span>
          </div>


          <div className="col-action">
            <button className="sas-action-btn">
              Use
            </button>
          </div>

        </div>


        <div className="sas-source-row status-border-teal">

          <div className="sas-source-info col-source">
            <span className="sas-source-title">
              Employment DB API
            </span>

            <span className="sas-source-tag">
              API
            </span>
          </div>

          <div className="col-type">
            <span className="sas-badge badge-live">
              Live
            </span>
          </div>

          <div className="col-availability">
            <span className="sas-availability-text">
              Instant
            </span>
          </div>


          <div className="col-action">
            <button className="sas-action-btn">
              Use
            </button>
          </div>

        </div>

        <div className="sas-source-row status-border-orange">

          <div className="sas-source-info col-source">
            <span className="sas-source-title">
              EPFO Records
            </span>

            <span className="sas-source-tag">
              Government
            </span>
          </div>

          <div className="col-type">
            <span className="sas-badge badge-partially">
              Partially
            </span>
          </div>

          <div className="col-availability">
            <span className="sas-availability-text">
              48h
            </span>
          </div>


          <div className="col-action">
            <button className="sas-action-btn">
              Use
            </button>
          </div>

        </div>

      </div>
    </div>

    {/* SECOND CARD */}
    <div className="sas-second-card">

      <div className="sas-card-header sas-form-header">
        <h2>
          RESULT ENTRY FORM — Employment Verification
        </h2>
      </div>

      <form className="sas-entry-form" id="resultEntryForm">

        <div className="sas-form-group">
          <label className="sas-form-label">
            Employer Confirmed
          </label>

          <input
            type="text"
            className="sas-form-input"
            defaultValue="Infosys Limited"
            placeholder="Enter confirmed employer name"
            required
          />
        </div>

        <div className="sas-form-group">
          <label className="sas-form-label">
            Employment Period
          </label>

          <input
            type="text"
            className="sas-form-input"
            defaultValue="Jan 2018 – Mar 2022"
            placeholder="e.g., Jan 2018 - Mar 2022"
            required
          />
        </div>

        <div className="sas-form-group">
          <label className="sas-form-label">
            Designation
          </label>

          <input
            type="text"
            className="sas-form-input"
            defaultValue="Senior Systems Engineer"
            placeholder="Enter designation"
            required
          />
        </div>

        <div className="sas-form-group">
          <label className="sas-form-label">
            Exit Reason
          </label>

          <input
            type="text"
            className="sas-form-input"
            defaultValue="Resignation (voluntary)"
            placeholder="Enter exit reason"
            required
          />
        </div>

        {/* Toggle Buttons */}
        <div className="sas-form-group">

          <label className="sas-form-label">
            Verification Outcome
          </label>

          <div className="sas-outcome-toggle-group">

            <button
              type="button"
              className="sas-toggle-btn active-clear"
            >
              Clear
            </button>

            <button
              type="button"
              className="sas-toggle-btn"
            >
              Discrepancy
            </button>

            <button
              type="button"
              className="sas-toggle-btn"
            >
              Unable to Verify
            </button>

          </div>
        </div>

        {/* Remarks */}
        <div className="sas-form-group flex-grow-input">

          <label className="sas-form-label">
            Verifier Remarks
          </label>

          <textarea
            className="sas-form-textarea"
            rows="3"
            placeholder="Enter detailed remarks..."
            defaultValue="HR responded via email on 02/05. All details match."
          ></textarea>

        </div>

        {/* Actions */}
        <div className="sas-form-actions-row">

          <button
            type="submit"
            className="sas-btn-submit"
          >
            SAVE & MARK DONE
          </button>

          <button
            type="button"
            className="sas-btn-draft"
            id="btnSaveDraft"
          >
            SAVE DRAFT
          </button>

          <button
            type="button"
            className="sas-btn-cancel"
            aria-label="Cancel"
          >

            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>

          </button>

        </div>

      </form>
    </div>

    {/* THIRD CARD */}
    <div className="sas-thrid-card">

      {/* Activity */}
      <div className="sas-activity-block">

        <div className="sas-card-header sas-activity-header">
          <h2>ACTIVITY LOG & COMMENTS</h2>
        </div>

        <div className="sas-activity-content">

          <h3 className="sas-section-subtitle">
            Status Timeline
          </h3>

          <div className="sas-timeline-list">

            <div className="sas-timeline-item">

              <div className="sas-timeline-left">

                <span className="sas-time-stamp">
                  11:02
                </span>

                <div className="sas-timeline-node node-active">

                  <svg
                    viewBox="0 0 24 24"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>

                </div>

              </div>

              <div className="sas-timeline-right">
                <span className="sas-log-text text-highlight">
                  Result saved (Draft)
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* COMMENTS */}
      <div className="sas-comments-sub-block">

        <div className="sas-comments-bar-header">
          <h3>COMMENTS</h3>
        </div>

        <div className="sas-comments-container">

          <div
            className="sas-comments-stream"
            id="sasCommentsStream"
          >

            <div className="sas-comment-bubble">

              <div className="sas-comment-avatar avatar-purple">
                P
              </div>

              <div className="sas-comment-body">

                <div className="sas-comment-info-row">

                  <span className="sas-commenter-title">
                    Priya (QC)
                  </span>

                  <span className="sas-comment-date">
                    10:50 AM
                  </span>

                </div>

                <p className="sas-comment-desc">
                  Please confirm exit reason documented.
                </p>

              </div>

            </div>

          </div>

          {/* Reply */}
          <form
            className="sas-reply-form"
            id="sasReplyForm"
          >

            <input
              type="text"
              id="sasReplyInput"
              placeholder="Reply..."
              autoComplete="off"
              required
            />

            <button
              type="submit"
              className="sas-send-btn"
              aria-label="Send reply"
            >

              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>

                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>

            </button>

          </form>

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