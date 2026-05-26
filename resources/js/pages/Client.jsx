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

     <div className="header-navbar">
      
          <button className="tab-cta">Dashboard</button>
          <button className="tab-cta active">Active Cases</button>
          <button className="tab-cta">Completed</button>
          <button className="tab-cta">Generate Link</button>
          <button className="tab-cta">Reports & Trends</button>
          
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

      <div className="dash-inner-wrp-both client-portal">

          <div className="dash-inner-left">
         
         
        
          <div className="down-table">
          <div className="client-portal-cases">
        <h3>ACTIVE CASES (18 total)</h3>
         </div>
         <form className="search-input">
        <input type="text" class="form-control" name="" placeholder="Search candidate or case ID..."></input>
        <a href="#" class="search"><img src="images/inner-pages/search-icon.svg" /></a>
         </form>
            <table>
      {/* <thead>
        <tr>
          <th>Case ID</th>
        </tr>
      </thead> */}

      <tbody>
        <tr>
          <td>
            <div className="criminal-case">
              
              <p><span>BGV-2405</span> <br></br>
              Emp-Edu-Criminal
              </p>
            </div>
          </td>
          <td>
          <div className="client-names">
            Ravi Kumar
          </div></td>
          <td>
          <div class="custom-progress">
  <div class="custom-progress-bar yellows"></div>
</div>
<p className="progress-client-text yellows">Day 3/7</p>
          </td>
          <td>
            <div className="parent-client-boxes">
              <span className="client-cases-box blue"></span>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="criminal-case">
              
              <p><span>BGV-2406</span> <br></br>
              All 7 Checks
              </p>
            </div>
          </td>
          <td>
          <div className="client-names">
            Anjali Mehta
          </div>
          </td>
          <td>
          <div class="custom-progress">
  <div class="custom-progress-bar blue"></div>
</div>
<p className="progress-client-text blue">Day 6/7</p>
          </td>
          <td><div className="parent-client-boxes">
              <span className="client-cases-box yellow"></span>
            </div></td>
           </tr>

        <tr>
          <td>
            <div className="criminal-case">
              
              <p><span>BGV-2407</span> <br></br>
              Edu-DB
              </p>
            </div>
          </td>
          <td>
          <div className="client-names">
            Suresh Pillai
          </div>
          </td>
          <td>
          <div class="custom-progress">
  <div class="custom-progress-bar green"></div>
</div>
<p className="progress-client-text green">Done</p>
          </td>
          <td><div className="parent-client-boxes">
              <span className="client-cases-box succes"></span>
            </div></td>
           </tr>

        <tr>
          <td>
            <div className="criminal-case">
              
              <p><span>BGV-2408</span> <br></br>
              Emp-Addr
              </p>
            </div>
          </td>
          <td>
          <div className="client-names">
           Neha Sharma
          </div>
          </td>
          <td>
          <div class="custom-progress">
  <div class="custom-progress-bar yellows"></div>
</div>
<p className="progress-client-text yellows">Day 1/7</p>
          </td>
          <td><div className="parent-client-boxes">
              <span className="client-cases-box bdr-clr"></span>
            </div></td>
           </tr>
      </tbody>
    </table>
          </div>
      </div>

      <div className="dash-inner-right status-cases">
           <div className="quick-stats cases">

      <div className="stats-header">
        <h3>CASE DETAIL  --  BVG - 2405 | Amit Verma</h3>
      </div>

       


    </div>

     <div className="header-navbar inner-case">
      
          <button className="tab-cta">Overview</button>
          <button className="tab-cta active">Timeline</button>
          <button className="tab-cta">Documents</button>
          <button className="tab-cta">Comments</button>
          
     </div>

     <div className="clients-status">
      <h4>Check - Wise Status</h4>

        <div className="empolyment-body-wrp">
        <div className="empolyment-card-wrp">
          <div className="empolyment-cards">
          <p>Empolyment</p>
        <span class="primary-cta green">Clear</span>
        </div>
         <div className="empolyment-cards">
          <p>Criminal</p>
        <span class="primary-cta blue">In Progress</span>
        </div>
        </div>

        <div className="empolyment-card-wrp">
          <div className="empolyment-cards">
          <p>Education</p>
        <span class="primary-cta denger-red">Discrepancy</span>
        </div>
         <div className="empolyment-cards">
          <p>Drug Test</p>
        <span class="primary-cta yellow">Pending</span>
        </div>
        </div>

        <div className="empolyment-card-wrp">
          <div className="empolyment-cards">
          <p>Address</p>
        <span class="primary-cta green">Clear</span>
        </div>
         <div className="empolyment-cards">
          <p>Courtroom</p>
        <span class="primary-cta bdr-color">N/A</span>
        </div>
        </div>

        <div className="empolyment-card-wrp">
          <div className="empolyment-cards">
          <p>Database</p>
        <span class="primary-cta green">Clear</span>
        </div>
        
        </div>


        </div>

     </div>

<div className="status-wise">
          <button className="secondary-cta import"><img src="images/dashboard/export-excel.svg" alt="" />Download Report</button>
          <button className="primary-cta export"><img src="images/dashboard/export-icon.svg" alt="" />Submit Query</button>
          </div>     


     
      </div>

      </div>
      
     </div>
      
    </main>
  </section>
</>
  );
}