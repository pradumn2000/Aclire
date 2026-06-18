import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";


export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <>
 <Sidebar />

  {/* CONTENT */}
  <section id="noSidebar">
    {/* NAVBAR */}
    <nav>
      <div className="nav-toggle">
        <div className="bx bx-menu">
          <img src="images/inner-pages/emp-check-icon.svg" alt="" />
        </div>
      </div>
      
      <div className="head-src">
        <h3>VERIFIER — Employment Check | Source Details · Payment · Queue · Comments</h3>
      </div>
      
      <button type="button" className="primary-cta">Verifier Role</button>
    </nav>


    {/* MAIN */}
    <main>

     <div className="dash-wrper">

     <div className="header-navbar">
      
          <button className="tab-cta active">Employment</button>
          <button className="tab-cta">Education</button>
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
          <button className="tab-cta active">This Month</button>
          <button className="tab-cta">Custom</button>
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

      {/* Outer Flexbox Layout specified by user */}
<div className="emplyment-check-body">

  {/* FIRST CARD: My Queue (Left Column) */}
  <div className="frist-card">
    <div className="card-header queue-header">
      <h2>
        MY QUEUE <span className="case-count">(8 cases)</span>
      </h2>
    </div>

    <div className="queue-list">

      <div className="queue-item active">
        <div className="queue-item-row">
          <span className="case-id">BGV-2401</span>
          <span className="badge priority-high">HIGH</span>
        </div>

        <div className="queue-item-row margin-top-sm">
          <span className="candidate-name">Ravi Kumar</span>
          <span className="case-age">Age: 3d</span>
        </div>
      </div>

      <div className="queue-item">
        <div className="queue-item-row">
          <span className="case-id">BGV-2402</span>
          <span className="badge priority-medium">MED</span>
        </div>

        <div className="queue-item-row margin-top-sm">
          <span className="candidate-name">Anjali Mehta</span>
          <span className="case-age">Age: 2d</span>
        </div>
      </div>

      <div className="queue-item">
        <div className="queue-item-row">
          <span className="case-id">BGV-2403</span>
          <span className="badge priority-low">LOW</span>
        </div>

        <div className="queue-item-row margin-top-sm">
          <span className="candidate-name">Suresh Pillai</span>
          <span className="case-age">Age: 1d</span>
        </div>
      </div>

      <div className="queue-item">
        <div className="queue-item-row">
          <span className="case-id">BGV-2408</span>
          <span className="badge priority-high">HIGH</span>
        </div>

        <div className="queue-item-row margin-top-sm">
          <span className="candidate-name">Sonal Joshi</span>
          <span className="case-age">Age: 4d</span>
        </div>
      </div>

      <div className="queue-item">
        <div className="queue-item-row">
          <span className="case-id">BGV-2412</span>
          <span className="badge priority-medium">MED</span>
        </div>

        <div className="queue-item-row margin-top-sm">
          <span className="candidate-name">Vikram Das</span>
          <span className="case-age">Age: 5d</span>
        </div>
      </div>

      <div className="queue-item">
        <div className="queue-item-row">
          <span className="case-id">BGV-2415</span>
          <span className="badge priority-low">LOW</span>
        </div>

        <div className="queue-item-row margin-top-sm">
          <span className="candidate-name">Reena Shah</span>
          <span className="case-age">Age: 2d</span>
        </div>
      </div>

    </div>
  </div>

  {/* SECOND CARD */}
  <div className="second-card">

    <div className="card-header verification-header">
      <h2>
        VERIFICATION SOURCE — BGV-2401 | Ravi Kumar | Employment
      </h2>
    </div>

    <div className="card-content-wrapper">

      {/* SOURCE DETAILS */}
      <div className="sub-section">

        <div className="sub-section-header details-sub-header">
          <h3>SOURCE DETAILS</h3>
        </div>

        <div className="details-table">

          <div className="details-row">
            <span className="details-label">Employer:</span>
            <span className="details-value font-weight-semibold">
              Infosys Limited
            </span>
          </div>

          <div className="details-row">
            <span className="details-label">HR Contact:</span>
            <span className="details-value email-value">
              hr.verify@infosys.com
            </span>
          </div>

          <div className="details-row">
            <span className="details-label">Phone:</span>
            <span className="details-value">
              +91-80-2852-0261
            </span>
          </div>

          <div className="details-row">
            <span className="details-label">Mode:</span>
            <span className="details-value">
              Email + Phone
            </span>
          </div>

        </div>
      </div>

      {/* PROCESS */}
      <div className="sub-section margin-top-md">

        <div className="process-title-wrapper">
          <h3 className="process-title">
            VERIFICATION PROCESS
          </h3>
        </div>

        <div className="process-steps-list">

          <div className="step-item">
            <div className="step-left">
              <div className="step-dot bg-done"></div>
              <span className="step-text">
                1. Email Sent to HR
              </span>
            </div>

            <button className="step-btn btn-done">
              Done
            </button>
          </div>

          <div className="step-item">
            <div className="step-left">
              <div className="step-dot bg-done"></div>
              <span className="step-text">
                2. Phone Follow-up
              </span>
            </div>

            <button className="step-btn btn-done">
              Done
            </button>
          </div>

          <div className="step-item">
            <div className="step-left">
              <div className="step-dot bg-pending"></div>
              <span className="step-text">
                3. Awaiting HR Response
              </span>
            </div>

            <button className="step-btn btn-pending">
              Pending
            </button>
          </div>

          <div className="step-item">
            <div className="step-left">
              <div className="step-dot bg-locked"></div>
              <span className="step-text">
                4. Result Entry
              </span>
            </div>

            <button
              className="step-btn btn-locked"
              disabled
            >
              Locked
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>

  {/* THIRD CARD */}
  <div className="thrid-card">

    {/* Charges */}
    <div className="charges-block">

      <div className="card-header charges-header">
        <h2>VERIFICATION CHARGES & PAYMENT</h2>
      </div>

      <div className="charges-content">

        <div className="table-header-row">
          <span className="th-label">Source</span>
          <span className="th-value">Charge</span>
        </div>

        <div className="charges-list">

          <div className="charge-item">
            <span className="charge-name">
              Infosys HR Verification
            </span>

            <span className="charge-amount">
              ₹ 350
            </span>
          </div>

          <div className="charge-item">
            <span className="charge-name">
              Database Access Fee
            </span>

            <span className="charge-amount">
              ₹ 120
            </span>
          </div>

          <div className="charge-item">
            <span className="charge-name">
              Communication Charges
            </span>

            <span className="charge-amount">
              ₹ 50
            </span>
          </div>

        </div>

        <div className="total-row">
          <span className="total-label">TOTAL</span>
          <span className="total-amount">₹ 520</span>
        </div>

      </div>
    </div>

    {/* COMMENTS */}
    <div className="comments-block margin-top-md">

      <div className="card-header comments-header">
        <h2>COMMENTS & STATUS TRACK</h2>
      </div>

      <div className="comments-container">

        <div className="comments-list" id="commentsList">

          <div className="comment-item">

            <div className="comment-avatar avatar-p">
              P
            </div>

            <div className="comment-body">

              <div className="comment-header">
                <span className="commenter-name">
                  Priya S (QC)
                </span>

                <span className="comment-time">
                  10:24 AM
                </span>
              </div>

              <p className="comment-text">
                Employer HR not responding — escalate via phone.
              </p>

            </div>
          </div>

          <div className="comment-item">

            <div className="comment-avatar avatar-r">
              R
            </div>

            <div className="comment-body">

              <div className="comment-header">
                <span className="commenter-name">
                  Rahul D (Verifier)
                </span>

                <span className="comment-time">
                  09:55 AM
                </span>
              </div>

              <p className="comment-text">
                Email sent to hr.verify@infosys.com with consent copy attached.
              </p>

            </div>
          </div>

        </div>

        {/* Input */}
        <form className="comment-input-box" id="commentForm">

          <input
            type="text"
            id="commentInput"
            placeholder="Type a comment..."
            autoComplete="off"
            required
          />

          <button
            type="submit"
            className="send-comment-btn"
            aria-label="Send comment"
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
      
    </main>
  </section>
</>
  );
}