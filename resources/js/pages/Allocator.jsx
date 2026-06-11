// import { useNavigate } from "react-router-dom";


// export default function Client() {
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
//     <nav>
//       <div className="nav-toggle">
//         <div className="bx bx-menu">
//           <img src="images/inner-pages/client-portal-icon.svg" alt="" />
//         </div>
//       </div>
      
//       <div className="head-src">
//         <h3>ALLOCATOR & CHECK MANAGER — Distribution  · Progress  · Trends · Export</h3>
//       </div>
      
//       <button type="button" className="primary-cta">Allocator / Mgr</button>
//     </nav>


//     {/* MAIN */}
//     <main>

//      <div className="dash-wrper">


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


//       {/* DASHBOARD Inner body */}

//     <div className="cab-dashboard-container">
//     <div className="cab-dashboard-wrapper">
        
//         {/* LEFT PANEL: CASE ALLOCATION BOARD */}
//         <section className="cab-board-section">
//             <header className="cab-board-header">
//                 <h2>CASE ALLOCATION BOARD — Drag & Drop by Check Type</h2>
//             </header>
            
//             <div className="cab-board-columns">
                
//                 {/* Column 1: Employment */}
//                 <div 
//                     className="cab-board-column" 
//                     id="col-employment" 
//                     data-type="employment" 
//                     style={{
//                         "--accent-color": "#0d8390",
//                         "--bg-accent": "rgba(13, 131, 144, 0.08)"
//                     }}
//                 >
//                     <div className="cab-column-header">
//                         <h3>Employment</h3>
//                     </div>

//                     <div className="cab-cards-container" data-type="employment">
                        
//                         <div className="cab-case-card" draggable="true" id="card-bgv-2401">
//                             <div className="cab-card-body">
//                                 <div className="cab-card-id">BGV-2401</div>
//                                 <div className="cab-card-status">Unassigned</div>
//                             </div>

//                             <div className="cab-card-footer">
//                                 <div className="cab-assign-select-wrapper">
//                                     <select
//                                         className="cab-assign-select"
//                                         onChange={(e) => updateCardAssignment(e.target)}
//                                     >
//                                         <option value="" selected>
//                                             Assign ▾
//                                         </option>
//                                         <option value="rahul">Rahul Sharma</option>
//                                         <option value="priya">Priya Patel</option>
//                                         <option value="amit">Amit Kumar</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="cab-case-card" draggable="true" id="card-bgv-2405">
//                             <div className="cab-card-body">
//                                 <div className="cab-card-id">BGV-2405</div>
//                                 <div className="cab-card-status">Unassigned</div>
//                             </div>

//                             <div className="cab-card-footer">
//                                 <div className="cab-assign-select-wrapper">
//                                     <select
//                                         className="cab-assign-select"
//                                         onChange={(e) => updateCardAssignment(e.target)}
//                                     >
//                                         <option value="" selected>
//                                             Assign ▾
//                                         </option>
//                                         <option value="rahul">Rahul Sharma</option>
//                                         <option value="priya">Priya Patel</option>
//                                         <option value="amit">Amit Kumar</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Column 2: Education */}
//                 <div
//                     className="cab-board-column"
//                     id="col-education"
//                     data-type="education"
//                     style={{
//                         "--accent-color": "#2b3b8c",
//                         "--bg-accent": "rgba(43, 59, 140, 0.08)"
//                     }}
//                 >
//                     <div className="cab-column-header">
//                         <h3>Education</h3>
//                     </div>

//                     <div className="cab-cards-container" data-type="education">
                        
//                         <div className="cab-case-card" draggable="true" id="card-bgv-2403">
//                             <div className="cab-card-body">
//                                 <div className="cab-card-id">BGV-2403</div>
//                                 <div className="cab-card-status">Unassigned</div>
//                             </div>

//                             <div className="cab-card-footer">
//                                 <div className="cab-assign-select-wrapper">
//                                     <select
//                                         className="cab-assign-select"
//                                         onChange={(e) => updateCardAssignment(e.target)}
//                                     >
//                                         <option value="" selected>
//                                             Assign ▾
//                                         </option>
//                                         <option value="rahul">Rahul Sharma</option>
//                                         <option value="priya">Priya Patel</option>
//                                         <option value="amit">Amit Kumar</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Column 3: Address */}
//                 <div
//                     className="cab-board-column"
//                     id="col-address"
//                     data-type="education"
//                     style={{
//                         "--accent-color": "#2b3b8c",
//                         "--bg-accent": "rgba(43, 59, 140, 0.08)"
//                     }}
//                 >
//                     <div className="cab-column-header">
//                         <h3>Address</h3>
//                     </div>

//                     <div className="cab-cards-container" data-type="education">
                        
//                         <div className="cab-case-card" draggable="true" id="card-bgv-2403">
//                             <div className="cab-card-body">
//                                 <div className="cab-card-id">BGV-2403</div>
//                                 <div className="cab-card-status">Unassigned</div>
//                             </div>

//                             <div className="cab-card-footer">
//                                 <div className="cab-assign-select-wrapper">
//                                     <select
//                                         className="cab-assign-select"
//                                         onChange={(e) => updateCardAssignment(e.target)}
//                                     >
//                                         <option value="" selected>
//                                             Assign ▾
//                                         </option>
//                                         <option value="rahul">Rahul Sharma</option>
//                                         <option value="priya">Priya Patel</option>
//                                         <option value="amit">Amit Kumar</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Column 4: Database */}
//                 <div
//                     className="cab-board-column"
//                     id="col-database"
//                     data-type="education"
//                     style={{
//                         "--accent-color": "#2b3b8c",
//                         "--bg-accent": "rgba(43, 59, 140, 0.08)"
//                     }}
//                 >
//                     <div className="cab-column-header">
//                         <h3>Database</h3>
//                     </div>

//                     <div className="cab-cards-container" data-type="education">
                        
//                         <div className="cab-case-card" draggable="true" id="card-bgv-2403">
//                             <div className="cab-card-body">
//                                 <div className="cab-card-id">BGV-2403</div>
//                                 <div className="cab-card-status">Unassigned</div>
//                             </div>

//                             <div className="cab-card-footer">
//                                 <div className="cab-assign-select-wrapper">
//                                     <select
//                                         className="cab-assign-select"
//                                         onChange={(e) => updateCardAssignment(e.target)}
//                                     >
//                                         <option value="" selected>
//                                             Assign ▾
//                                         </option>
//                                         <option value="rahul">Rahul Sharma</option>
//                                         <option value="priya">Priya Patel</option>
//                                         <option value="amit">Amit Kumar</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Column 5: Criminal */}
//                 <div
//                     className="cab-board-column"
//                     id="col-criminal"
//                     data-type="education"
//                     style={{
//                         "--accent-color": "#2b3b8c",
//                         "--bg-accent": "rgba(43, 59, 140, 0.08)"
//                     }}
//                 >
//                     <div className="cab-column-header">
//                         <h3>Criminal</h3>
//                     </div>

//                     <div className="cab-cards-container" data-type="education">
                        
//                         <div className="cab-case-card" draggable="true" id="card-bgv-2403">
//                             <div className="cab-card-body">
//                                 <div className="cab-card-id">BGV-2403</div>
//                                 <div className="cab-card-status">Unassigned</div>
//                             </div>

//                             <div className="cab-card-footer">
//                                 <div className="cab-assign-select-wrapper">
//                                     <select
//                                         className="cab-assign-select"
//                                         onChange={(e) => updateCardAssignment(e.target)}
//                                     >
//                                         <option value="" selected>
//                                             Assign ▾
//                                         </option>
//                                         <option value="rahul">Rahul Sharma</option>
//                                         <option value="priya">Priya Patel</option>
//                                         <option value="amit">Amit Kumar</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Add remaining columns same way */}
//             </div>

//             <footer className="cab-board-footer">
//                 <button className="cab-btn cab-btn-primary" id="btn-confirm">
//                     <i className="fa-solid fa-circle-check"></i> CONFIRM ASSIGNMENTS
//                 </button>
//             </footer>
//         </section>

//         {/* RIGHT PANEL: CHECK MANAGER OVERVIEW */}
//         <aside className="cab-manager-section">
//             <header className="cab-manager-header">
//                 <h2>CHECK MANAGER — Overview (Read-Only)</h2>
//             </header>

//             <div className="cab-manager-content">
//                 <div className="cab-overview-list">

//                     <div
//                         className="cab-progress-item"
//                         id="progress-employment"
//                         style={{ "--item-color": "#0d8390" }}
//                     >
//                         <div className="cab-progress-info">
//                             <span className="cab-progress-label">Employment</span>
//                             <span className="cab-progress-percent" id="pct-employment">
//                                 78%
//                             </span>
//                         </div>

//                         <div className="cab-progress-bar-bg">
//                             <div
//                                 className="cab-progress-bar-fill"
//                                 id="fill-employment"
//                                 style={{ width: "78%" }}
//                             ></div>
//                         </div>
//                     </div>

//                     <div
//                         className="cab-progress-item"
//                         id="progress-education"
//                         style={{ "--item-color": "#2b3b8c" }}
//                     >
//                         <div className="cab-progress-info">
//                             <span className="cab-progress-label">Education</span>
//                             <span className="cab-progress-percent" id="pct-education">
//                                 65%
//                             </span>
//                         </div>

//                         <div className="cab-progress-bar-bg">
//                             <div
//                                 className="cab-progress-bar-fill"
//                                 id="fill-education"
//                                 style={{ width: "65%" }}
//                             ></div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             <footer className="cab-manager-footer">
//                 <button
//                     className="primary-cta"
//                     id="btn-csv"
//                 >
//                     <i className="fa-solid fa-file-csv"></i> Export Progress CSV
//                 </button>

//                 <button
//                     className="secondary-cta"
//                     id="btn-excel"
//                 >
//                     <i className="fa-solid fa-file-excel"></i> Export Excel
//                 </button>
//             </footer>
//         </aside>
//     </div>
// </div>

// {/* Notification Toast */}
// <div id="toast" className="cab-toast cab-hidden">
//     <i className="fa-solid fa-circle-check cab-toast-icon"></i>
//     <span id="toast-message">
//         Assignments successfully confirmed!
//     </span>
// </div>
      
//      </div>
      
//     </main>
//   </section>
// </>
//   );
// }
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
        <h3>ALLOCATOR & CHECK MANAGER — Distribution  · Progress  · Trends · Export</h3>
      </div>
      
      <button type="button" className="primary-cta">Allocator / Mgr</button>
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

    <div className="cab-dashboard-container">
    <div className="cab-dashboard-wrapper">
        
        {/* LEFT PANEL: CASE ALLOCATION BOARD */}
        <section className="cab-board-section">
            <header className="cab-board-header">
                <h2>CASE ALLOCATION BOARD — Drag & Drop by Check Type</h2>
            </header>
            
            <div className="cab-board-columns">
                
                {/* Column 1: Employment */}
                <div 
                    className="cab-board-column" 
                    id="col-employment" 
                    data-type="employment" 
                    style={{
                        "--accent-color": "#0d8390",
                        "--bg-accent": "rgba(13, 131, 144, 0.08)"
                    }}
                >
                    <div className="cab-column-header">
                        <h3>Employment</h3>
                    </div>

                    <div className="cab-cards-container" data-type="employment">
                        
                        <div className="cab-case-card" draggable="true" id="card-bgv-2401">
                            <div className="cab-card-body">
                                <div className="cab-card-id">BGV-2401</div>
                                <div className="cab-card-status">Unassigned</div>
                            </div>

                            <div className="cab-card-footer">
                                <div className="cab-assign-select-wrapper">
                                    <select
                                        className="cab-assign-select"
                                        onChange={(e) => updateCardAssignment(e.target)}
                                    >
                                        <option value="" selected>
                                            Assign ▾
                                        </option>
                                        <option value="rahul">Rahul Sharma</option>
                                        <option value="priya">Priya Patel</option>
                                        <option value="amit">Amit Kumar</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="cab-case-card" draggable="true" id="card-bgv-2405">
                            <div className="cab-card-body">
                                <div className="cab-card-id">BGV-2405</div>
                                <div className="cab-card-status">Unassigned</div>
                            </div>

                            <div className="cab-card-footer">
                                <div className="cab-assign-select-wrapper">
                                    <select
                                        className="cab-assign-select"
                                        onChange={(e) => updateCardAssignment(e.target)}
                                    >
                                        <option value="" selected>
                                            Assign ▾
                                        </option>
                                        <option value="rahul">Rahul Sharma</option>
                                        <option value="priya">Priya Patel</option>
                                        <option value="amit">Amit Kumar</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Column 2: Education */}
                <div
                    className="cab-board-column"
                    id="col-education"
                    data-type="education"
                    style={{
                        "--accent-color": "#2b3b8c",
                        "--bg-accent": "rgba(43, 59, 140, 0.08)"
                    }}
                >
                    <div className="cab-column-header">
                        <h3>Education</h3>
                    </div>

                    <div className="cab-cards-container" data-type="education">
                        
                        <div className="cab-case-card" draggable="true" id="card-bgv-2403">
                            <div className="cab-card-body">
                                <div className="cab-card-id">BGV-2403</div>
                                <div className="cab-card-status">Unassigned</div>
                            </div>

                            <div className="cab-card-footer">
                                <div className="cab-assign-select-wrapper">
                                    <select
                                        className="cab-assign-select"
                                        onChange={(e) => updateCardAssignment(e.target)}
                                    >
                                        <option value="" selected>
                                            Assign ▾
                                        </option>
                                        <option value="rahul">Rahul Sharma</option>
                                        <option value="priya">Priya Patel</option>
                                        <option value="amit">Amit Kumar</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Column 3: Address */}
                <div
                    className="cab-board-column"
                    id="col-address"
                    data-type="education"
                    style={{
                        "--accent-color": "#2b3b8c",
                        "--bg-accent": "rgba(43, 59, 140, 0.08)"
                    }}
                >
                    <div className="cab-column-header">
                        <h3>Address</h3>
                    </div>

                    <div className="cab-cards-container" data-type="education">
                        
                        <div className="cab-case-card" draggable="true" id="card-bgv-2403">
                            <div className="cab-card-body">
                                <div className="cab-card-id">BGV-2403</div>
                                <div className="cab-card-status">Unassigned</div>
                            </div>

                            <div className="cab-card-footer">
                                <div className="cab-assign-select-wrapper">
                                    <select
                                        className="cab-assign-select"
                                        onChange={(e) => updateCardAssignment(e.target)}
                                    >
                                        <option value="" selected>
                                            Assign ▾
                                        </option>
                                        <option value="rahul">Rahul Sharma</option>
                                        <option value="priya">Priya Patel</option>
                                        <option value="amit">Amit Kumar</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Column 4: Database */}
                <div
                    className="cab-board-column"
                    id="col-database"
                    data-type="education"
                    style={{
                        "--accent-color": "#2b3b8c",
                        "--bg-accent": "rgba(43, 59, 140, 0.08)"
                    }}
                >
                    <div className="cab-column-header">
                        <h3>Database</h3>
                    </div>

                    <div className="cab-cards-container" data-type="education">
                        
                        <div className="cab-case-card" draggable="true" id="card-bgv-2403">
                            <div className="cab-card-body">
                                <div className="cab-card-id">BGV-2403</div>
                                <div className="cab-card-status">Unassigned</div>
                            </div>

                            <div className="cab-card-footer">
                                <div className="cab-assign-select-wrapper">
                                    <select
                                        className="cab-assign-select"
                                        onChange={(e) => updateCardAssignment(e.target)}
                                    >
                                        <option value="" selected>
                                            Assign ▾
                                        </option>
                                        <option value="rahul">Rahul Sharma</option>
                                        <option value="priya">Priya Patel</option>
                                        <option value="amit">Amit Kumar</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Column 5: Criminal */}
                <div
                    className="cab-board-column"
                    id="col-criminal"
                    data-type="education"
                    style={{
                        "--accent-color": "#2b3b8c",
                        "--bg-accent": "rgba(43, 59, 140, 0.08)"
                    }}
                >
                    <div className="cab-column-header">
                        <h3>Criminal</h3>
                    </div>

                    <div className="cab-cards-container" data-type="education">
                        
                        <div className="cab-case-card" draggable="true" id="card-bgv-2403">
                            <div className="cab-card-body">
                                <div className="cab-card-id">BGV-2403</div>
                                <div className="cab-card-status">Unassigned</div>
                            </div>

                            <div className="cab-card-footer">
                                <div className="cab-assign-select-wrapper">
                                    <select
                                        className="cab-assign-select"
                                        onChange={(e) => updateCardAssignment(e.target)}
                                    >
                                        <option value="" selected>
                                            Assign ▾
                                        </option>
                                        <option value="rahul">Rahul Sharma</option>
                                        <option value="priya">Priya Patel</option>
                                        <option value="amit">Amit Kumar</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Add remaining columns same way */}
            </div>

            <footer className="cab-board-footer">
                <button className="cab-btn cab-btn-primary" id="btn-confirm">
                    <i className="fa-solid fa-circle-check"></i> CONFIRM ASSIGNMENTS
                </button>
            </footer>
        </section>

        {/* RIGHT PANEL: CHECK MANAGER OVERVIEW */}
        <aside className="cab-manager-section">
            <header className="cab-manager-header">
                <h2>CHECK MANAGER — Overview (Read-Only)</h2>
            </header>

            <div className="cab-manager-content">
                <div className="cab-overview-list">

                    <div
                        className="cab-progress-item"
                        id="progress-employment"
                        style={{ "--item-color": "#0d8390" }}
                    >
                        <div className="cab-progress-info">
                            <span className="cab-progress-label">Employment</span>
                            <span className="cab-progress-percent" id="pct-employment">
                                78%
                            </span>
                        </div>

                        <div className="cab-progress-bar-bg">
                            <div
                                className="cab-progress-bar-fill"
                                id="fill-employment"
                                style={{ width: "78%" }}
                            ></div>
                        </div>
                    </div>

                    <div
                        className="cab-progress-item"
                        id="progress-education"
                        style={{ "--item-color": "#2b3b8c" }}
                    >
                        <div className="cab-progress-info">
                            <span className="cab-progress-label">Education</span>
                            <span className="cab-progress-percent" id="pct-education">
                                65%
                            </span>
                        </div>

                        <div className="cab-progress-bar-bg">
                            <div
                                className="cab-progress-bar-fill"
                                id="fill-education"
                                style={{ width: "65%" }}
                            ></div>
                        </div>
                    </div>

                </div>
            </div>

            <footer className="cab-manager-footer">
                <button
                    className="primary-cta"
                    id="btn-csv"
                >
                    <i className="fa-solid fa-file-csv"></i> Export Progress CSV
                </button>

                <button
                    className="secondary-cta"
                    id="btn-excel"
                >
                    <i className="fa-solid fa-file-excel"></i> Export Excel
                </button>
            </footer>
        </aside>
    </div>
</div>

{/* Notification Toast */}
<div id="toast" className="cab-toast cab-hidden">
    <i className="fa-solid fa-circle-check cab-toast-icon"></i>
    <span id="toast-message">
        Assignments successfully confirmed!
    </span>
</div>
      
     </div>
      
    </main>
  </section>
</>
  );
}