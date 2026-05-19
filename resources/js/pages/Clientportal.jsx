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
    <nav>
      <div className="nav-toggle">
        <div className="bx bx-menu">
          <img src="images/sidebar-collapse.svg" alt="" />
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
          <button className="primary-cta">Export CSV</button>
          <button className="secondary-cta">Export Excel</button>
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



       <div className="card-inner-dash bdr-rate">
        <h4>96%</h4>
        <p>Clear Rate</p>
       </div>

      </div>

      {/* DASHBOARD Inner body */}

      <div className="dash-inner-wrp-both">
          <div className="dash-inner-left">
          <div className="up-table">
          <img src="/images/dashboard/graph-dash.png" alt="logo" />
          </div>

          <div className="down-table">
            <table>
      <thead>
        <tr>
          <th>Case ID</th>
          <th>Candidate</th>
          <th>Client</th>
          <th>Checks</th>
          <th>Status</th>
          <th>TAT</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>BGV-2401</td>
          <td>Ravi Kumar</td>
          <td>Infosys</td>
          <td>Emp-Edu-Addr</td>
          <td><span className="status in-progress">In Progress</span></td>
          <td>3d</td>
          <td>
            <button className="view-cta">View</button>
          </td>
        </tr>

        <tr>
          <td>BGV-2402</td>
          <td>Anjali Mehta</td>
          <td>TCS</td>
          <td>Emp-Criminal</td>
          <td><span className="status qc-review">QC Review</span></td>
          <td>5d</td>
          <td>
            <button className="view-cta">View</button>
          </td>
        </tr>

        <tr>
          <td>BGV-2403</td>
          <td>Suresh Pillai</td>
          <td>Wipro</td>
          <td>All 7</td>
          <td><span className="status completed">Completed</span></td>
          <td>4d</td>
          <td>
            <button className="view-cta">Report</button>
          </td>
        </tr>

        <tr>
          <td>BGV-2404</td>
          <td>Neha Sharma</td>
          <td>HCL</td>
          <td>Edu-DB</td>
          <td><span className="status pending">Pending</span></td>
          <td>1d</td>
          <td>
            <button className="view-cta">View</button>
          </td>
        </tr>
      </tbody>
    </table>
          </div>
      </div>

      <div className="dash-inner-right">
           <div className="quick-stats">

      <div className="stats-header">
        <h3>QUICK STATS</h3>
      </div>

      <div className="stats-body">

        <div className="stats-row">
          <span>Avg TAT</span>
          <span>4.2 days</span>
        </div>

        <div className="stats-row">
          <span>Clear Rate</span>
          <span>92%</span>
        </div>

        <div className="stats-row">
          <span>Discrepancy</span>
          <span>8%</span>
        </div>

        <div className="stats-row">
          <span>Discrepancy</span>
          <span>8%</span>
        </div>

        <div className="stats-row">
          <span>Discrepancy</span>
          <span>8%</span>
        </div>

        <div className="stats-row">
          <span>Discrepancy</span>
          <span>8%</span>
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