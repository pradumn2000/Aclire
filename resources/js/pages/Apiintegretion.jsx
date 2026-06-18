import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar"; // adjust path if needed

export default function Client() {
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
      <div classNameName="nav-toggle">
        <div classNameName="bx bx-menu">
          <img src="images/inner-pages/client-portal-icon.svg" alt="" />
        </div>
      </div>
      
      <div classNameName="head-src">
        <h3>TRENDS & ANALYTICS DASHBOARD — Date-wise · Role-wise · Export All</h3>
      </div>
      
      <button type="button" classNameName="primary-cta">Admin/Mgr</button>
    </nav>


    {/* MAIN */}
    <main>

     <div classNameName="dash-wrper">

     {/* <div classNameName="header-navbar">
      
          <button classNameName="tab-cta">Dashboard</button>
          <button classNameName="tab-cta active">Active Cases</button>
          <button classNameName="tab-cta">Completed</button>
          <button classNameName="tab-cta">Generate Link</button>
          <button classNameName="tab-cta">Reports & Trends</button>
          
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

      

      {/* DASHBOARD Inner body */}
  <div className="apg-flow-wrapper">
    
    {/* <!-- Top Row: 3 API Cards --> */}
    <div className="apg-flow-api-row">
      
      {/* <!-- API Card 1: Education API --> */}
      <div className="apg-flow-api-card apg-flow-card-teal">
        <div className="apg-flow-card-header">
          <span className="apg-flow-card-title">Education API</span>
          <span className="apg-flow-badge-live">Live</span>
        </div>
        <div className="apg-flow-card-body">
          YoP &rarr; Result-link DB &rarr; Institution portal. Auto-fetches official result page, no manual search.
        </div>
      </div>
      {/* <!-- API Card 2: Employment API --> */}
      <div className="apg-flow-api-card apg-flow-card-blue">
        <div className="apg-flow-card-header">
          <span className="apg-flow-card-title">Employment API</span>
          <span className="apg-flow-badge-live">Live</span>
        </div>
        <div className="apg-flow-card-body">
          Sends verification request to employer source. Auto-populates response into case timeline.
        </div>
      </div>
      {/* <!-- API Card 3: Database Check API --> */}
      <div className="apg-flow-api-card apg-flow-card-orange">
        <div className="apg-flow-card-header">
          <span className="apg-flow-card-title">Database Check API</span>
          <span className="apg-flow-badge-live">Live</span>
        </div>
        <div className="apg-flow-card-body">
          Hits configured 3rd-party record databases. Instant result &mdash; no manual screener needed.
        </div>
      </div>
    </div>
    {/* <!-- Middle Row: 2 Database Cards --> */}
    <div className="apg-flow-db-row">
      
      {/* <!-- Database Card 1: Education & Employment Database --> */}
      <div className="apg-flow-db-card apg-flow-card-teal">
        <div className="apg-flow-card-header">
          EDUCATION & EMPLOYMENT DATABASE
        </div>
        <div className="apg-flow-card-body">
          <ul className="apg-flow-list">
            <li><span className="apg-flow-list-icon">&rsaquo;</span> Institution / Employer name</li>
            <li><span className="apg-flow-list-icon">&rsaquo;</span> Payment amount &middot; Verification process steps</li>
            <li><span className="apg-flow-list-icon">&rsaquo;</span> Email ID &middot; Phone &middot; Contact info</li>
            <li><span className="apg-flow-list-icon">&rsaquo;</span> Turnaround time &middot; Process notes</li>
          </ul>
        </div>
      </div>
      {/* <!-- Database Card 2: Result Link Database --> */}
      <div className="apg-flow-db-card apg-flow-card-blue">
        <div className="apg-flow-card-header">
          RESULT LINK DATABASE (Education YoP-wise)
        </div>
        <div className="apg-flow-card-body">
          <ul className="apg-flow-list">
            <li><span className="apg-flow-list-icon">&rsaquo;</span> Year-of-Passing (YoP) wise result links</li>
            <li><span className="apg-flow-list-icon">&rsaquo;</span> Result link per passing year</li>
            <li><span className="apg-flow-list-icon">&rsaquo;</span> Synced with education source entries</li>
            <li><span className="apg-flow-list-icon">&rsaquo;</span> Auto-fetched during verification &mdash; no manual lookups</li>
          </ul>
        </div>
      </div>
    </div>
    {/* <!-- Bottom Row: System Flow Diagram --> */}
    <div className="apg-flow-system-container">
      <div className="apg-flow-system-title">SYSTEM FLOW</div>
      
      <div className="apg-flow-diagram-wrapper">
        <div className="apg-flow-diagram-row">
          
          {/* <!-- Step 1 --> */}
          <div className="apg-flow-step-block apg-flow-bg-teal-light">
            Client Portal
          </div>
          
          <div className="apg-flow-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          {/* <!-- Step 2 --> */}
          <div className="apg-flow-step-block apg-flow-bg-purple">
            PVT Gate
          </div>
          
          <div className="apg-flow-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          {/* <!-- Step 3 --> */}
          <div className="apg-flow-step-block apg-flow-bg-orange">
            Allocator
          </div>
          
          <div className="apg-flow-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          {/* <!-- Step 4 --> */}
          <div className="apg-flow-step-block apg-flow-bg-blue">
            Verifiers
          </div>
          
          <div className="apg-flow-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          {/* <!-- Step 5 --> */}
          <div className="apg-flow-step-block apg-flow-bg-green">
            Result DB
          </div>
          
          <div className="apg-flow-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
           {/* Step 6  */}
          <div className="apg-flow-step-block apg-flow-bg-dark-purple">
            Specialist
          </div>
          
          <div className="apg-flow-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          {/* <!-- Step 7 --> */}
          <div className="apg-flow-step-block apg-flow-bg-teal-dark">
            Client
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