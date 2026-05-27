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

     {/* <div className="header-navbar">
      
          <button className="tab-cta">Dashboard</button>
          <button className="tab-cta active">Active Cases</button>
          <button className="tab-cta">Completed</button>
          <button className="tab-cta">Generate Link</button>
          <button className="tab-cta">Reports & Trends</button>
          
     </div> */}

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

       {/* TOP SECTION */}
      <div className="cards-head-dash">

       <div className="card-inner-dash bdr-total">
        <h4>18</h4>
        <p>Active</p>
       </div>

       <div className="card-inner-dash bdr-com">
        <h4>42</h4>
        <p>Completed</p>
       </div>

       <div className="card-inner-dash bdr-progress">
        <h4>3</h4>
        <p>Pending Link</p>
       </div>

       

       {/* <div className="card-inner-dash bdr-client">
        <h4>50</h4>
        <p>Clients</p>
       </div> */}

       <div className="card-inner-dash bdr-rate">
        <h4>96%</h4>
        <p>Clear Rate</p>
       </div>

      </div>

      {/* DASHBOARD Inner body */}

    <div className="intake-wrp">
  {/* COLUMN 1: NEW CASES QUEUE */}
<section className="dashboard-column queue-column" id="queue-section">
  <header className="column-header">
    <h2>NEW CASES QUEUE</h2>
  </header>

  <div className="column-content scrollable-content">
    
    {/* Case 1 */}
    <article className="case-card active" id="case-2420">
      <div className="case-card-info">
        <h3 className="case-id">BGV-2420</h3>
        <p className="case-candidate">Amit Verma</p>
      </div>
      <span className="badge badge-new">NEW</span>
    </article>

    {/* Case 2 */}
    <article className="case-card" id="case-2421">
      <div className="case-card-info">
        <h3 className="case-id">BGV-2421</h3>
        <p className="case-candidate">Deepa Nair</p>
      </div>
      <span className="badge badge-new">NEW</span>
    </article>

    {/* Case 3 */}
    <article className="case-card" id="case-2422">
      <div className="case-card-info">
        <h3 className="case-id">BGV-2422</h3>
        <p className="case-candidate">Kiran Rao</p>
      </div>
      <span className="badge badge-incomplete">INCOMPLETE</span>
    </article>

    {/* Case 4 */}
    <article className="case-card" id="case-2423">
      <div className="case-card-info">
        <h3 className="case-id">BGV-2423</h3>
        <p className="case-candidate">Sonal Joshi</p>
      </div>
      <span className="badge badge-new">NEW</span>
    </article>

    {/* Case 5 */}
    <article className="case-card" id="case-2424">
      <div className="case-card-info">
        <h3 className="case-id">BGV-2424</h3>
        <p className="case-candidate">Manoj Tiwari</p>
      </div>
      <span className="badge badge-review">REVIEW</span>
    </article>

    {/* Case 6 */}
    <article className="case-card" id="case-2425">
      <div className="case-card-info">
        <h3 className="case-id">BGV-2425</h3>
        <p className="case-candidate">Preethi Iyer</p>
      </div>
      <span className="badge badge-review">REVIEW</span>
    </article>
  </div>
</section>

{/* COLUMN 2: CASE DETAIL */}
<section className="dashboard-column detail-column" id="detail-section">
  
  <header className="column-header">
    <h2>CASE DETAIL — BGV-2420 | Amit Verma</h2>
  </header>

  <div className="column-content detail-content">
    
    <div className="detail-fields-group">

      {/* Candidate */}
      <div className="detail-field">
        <span className="field-label">Candidate</span>
        <span className="field-value">Amit Verma</span>
      </div>

      {/* Client */}
      <div className="detail-field">
        <span className="field-label">Client</span>
        <span className="field-value">Deloitte India</span>
      </div>

      {/* Submitted */}
      <div className="detail-field">
        <span className="field-label">Submitted</span>
        <span className="field-value">Today 10:40 AM</span>
      </div>

      {/* Check Types */}
      <div className="detail-field">
        <span className="field-label">Check Types</span>
        <span className="field-value check-types">
          Emp · Edu · Criminal · DB
        </span>
      </div>

      {/* Documents */}
      <div className="detail-field documents-field">
        <span className="field-label">Documents</span>

        <div className="documents-list">
          <span className="doc-item">
            Aadhar <span className="checkmark">✓</span>
          </span>

          <span className="doc-item">
            PAN <span className="checkmark">✓</span>
          </span>

          <span className="doc-item">
            Degree <span className="checkmark">✓</span>
          </span>

          <span className="doc-item">
            Offer Letter <span className="checkmark">✓</span>
          </span>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="detail-actions">

      <button className="btn btn-approve" type="button">
        <svg
          className="btn-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>

        APPROVE & ROUTE
      </button>

      <button className="btn btn-return" type="button">
        <svg
          className="btn-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>

        RETURN TO CLIENT
      </button>

      <button className="btn btn-request" type="button">
        <svg
          className="btn-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
        </svg>

        REQUEST DOCS
      </button>
    </div>
  </div>
</section>

{/* COLUMN 3 */}
<div className="dashboard-column right-column">

  {/* COMMENTS */}
  <section
    className="right-subcolumn comments-section"
    id="comments-section"
  >
    <header className="column-header">
      <h2>COMMENTS</h2>
    </header>

    <div className="column-content comments-content">

      {/* Comments List */}
      <div className="comments-list">

        <div className="comment-card">
          <div className="comment-avatar">A</div>

          <div className="comment-body">

            <div className="comment-meta">
              <span className="comment-author">Admin</span>
              <span className="comment-time">09:45</span>
            </div>

            <p className="comment-text">
              Documents incomplete — degree cert missing.
            </p>
          </div>
        </div>
      </div>

      {/* Comment Input */}
      <form
        className="comment-input-area"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="comment-input"
          placeholder="Add comment..."
          aria-label="Add comment"
        />

        <button
          type="submit"
          className="comment-send-btn"
          aria-label="Send comment"
        >
          <svg
            className="send-icon"
            viewBox="0 0 24 24"
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
  </section>
</div>
    </div>
      
     </div>
      
    </main>
  </section>
</>
  );
}