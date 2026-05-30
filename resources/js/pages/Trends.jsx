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
        <h3>TRENDS & ANALYTICS DASHBOARD — Date-wise · Role-wise · Export All</h3>
      </div>
      
      <button type="button" className="primary-cta">Admin/Mgr</button>
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

      

      {/* DASHBOARD Inner body */}
<div className="apg-dash-table-section">
  <div className="apg-dash-table-header">
    <div className="apg-dash-table-title">
      DATE-WISE CASE LOG — This Month
    </div>

    <div className="apg-dash-table-actions">
      <button
        className="primary-cta"
        id="apg-btn-csv"
      >
        CSV
      </button>

      <button
        className="secondary-cta"
        id="apg-btn-excel"
      >
        Excel / PDF
      </button>
    </div>
  </div>

  <div className="apg-dash-table-container">
    <table className="apg-dash-table">
      <thead>
        <tr>
          <th style={{ width: "15%" }}>Date</th>
          <th>New Cases</th>
          <th>Completed</th>
          <th>Discrepancy</th>
          <th>QC Reject</th>
          <th>Avg TAT</th>
          <th>Clear Rate</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="apg-dash-td-date">01 May 2026</td>
          <td>28</td>
          <td>21</td>
          <td className="text-red font-medium">2</td>
          <td>1</td>
          <td>4.1d</td>
          <td>93%</td>
        </tr>

        <tr>
          <td className="apg-dash-td-date">02 May 2026</td>
          <td>32</td>
          <td>18</td>
          <td className="text-red font-medium">3</td>
          <td>0</td>
          <td>4.8d</td>
          <td>91%</td>
        </tr>

        <tr>
          <td className="apg-dash-td-date">03 May 2026</td>
          <td>24</td>
          <td>30</td>
          <td className="text-gray">1</td>
          <td>2</td>
          <td>5.2d</td>
          <td>96%</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      
     </div>
      
    </main>
  </section>
</>
  );
}