// // import { useNavigate } from "react-router-dom";
// // import Header from "./Header";
// // import Sidebar from "./Sidebar";

// // export default function Dashboard() {
// //   const navigate = useNavigate();

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   return (
// //     <>
// //   {/* SIDEBAR */}
// //  <Sidebar/>

// //   {/* CONTENT */}
// //   <section id="content">
// //     {/* NAVBAR */}
// //     <Header/>


// //     {/* MAIN */}
// //     <main>

// //      <div className="dash-wrper">

// //           <div className="dash-upper-head">
// //           <div className="left"> 
// //           <button className="tab-cta">Today</button>
// //           <button className="tab-cta">This Week</button>
// //           <button className="tab-cta">This Month</button>
// //           <button className="tab-cta active">Custom</button>
// //           </div>
// //           <div className="right">
// //           <button className="date-wrapper"><img src="/images/dashboard/calendar-icon.svg"></img><input
// //         type="text"
// //         name="daterange"
// //         className="selectedDate"
// //         placeholder="Select Date"
// //         readOnly
// //       /></button>
// //           <button className="primary-cta export"><img src="images/dashboard/export-icon.svg" alt="" /> Export CSV</button>
// //           <button className="secondary-cta import"><img src="images/dashboard/export-excel.svg" alt="" />Export Excel</button>
// //           </div>
// //           </div>

// //        {/* TOP SECTION */}
// //       <div className="cards-head-dash">

// //        <div className="card-inner-dash bdr-total">
// //         <h4>1,284</h4>
// //         <p>Total Cases</p>
// //        </div>

// //        <div className="card-inner-dash bdr-progress">
// //         <h4>342</h4>
// //         <p>In Progress</p>
// //        </div>

// //        <div className="card-inner-dash bdr-com">
// //         <h4>856</h4>
// //         <p>Completed</p>
// //        </div>

// //        <div className="card-inner-dash bdr-client">
// //         <h4>50</h4>
// //         <p>Clients</p>
// //        </div>

// //        <div className="card-inner-dash bdr-rate">
// //         <h4>92%</h4>
// //         <p>Clear Rate</p>
// //        </div>

// //       </div>

// //       {/* DASHBOARD Inner body */}

// //       <div className="dash-inner-wrp-both">
// //           <div className="dash-inner-left">
// //           <div className="up-table">
// //           <img src="/images/dashboard/graph-dash.png" alt="logo" />
// //           </div>

// //           <div className="down-table">
// //             <table>
// //       <thead>
// //         <tr>
// //           <th>Case ID</th>
// //           <th>Candidate</th>
// //           <th>Client</th>
// //           <th>Checks</th>
// //           <th>Status</th>
// //           <th>TAT</th>
// //           <th>Action</th>
// //         </tr>
// //       </thead>

// //       <tbody>
// //         <tr>
// //           <td>BGV-2401</td>
// //           <td>Ravi Kumar</td>
// //           <td>Infosys</td>
// //           <td>Emp-Edu-Addr</td>
// //           <td><span className="status in-progress">In Progress</span></td>
// //           <td>3d</td>
// //           <td>
// //             <button className="view-cta">View</button>
// //           </td>
// //         </tr>

// //         <tr>
// //           <td>BGV-2402</td>
// //           <td>Anjali Mehta</td>
// //           <td>TCS</td>
// //           <td>Emp-Criminal</td>
// //           <td><span className="status qc-review">QC Review</span></td>
// //           <td>5d</td>
// //           <td>
// //             <button className="view-cta">View</button>
// //           </td>
// //         </tr>

// //         <tr>
// //           <td>BGV-2403</td>
// //           <td>Suresh Pillai</td>
// //           <td>Wipro</td>
// //           <td>All 7</td>
// //           <td><span className="status completed">Completed</span></td>
// //           <td>4d</td>
// //           <td>
// //             <button className="view-cta">Report</button>
// //           </td>
// //         </tr>

// //         <tr>
// //           <td>BGV-2404</td>
// //           <td>Neha Sharma</td>
// //           <td>HCL</td>
// //           <td>Edu-DB</td>
// //           <td><span className="status pending">Pending</span></td>
// //           <td>1d</td>
// //           <td>
// //             <button className="view-cta">View</button>
// //           </td>
// //         </tr>
// //       </tbody>
// //     </table>
// //           </div>
// //       </div>

// //       <div className="dash-inner-right">
// //            <div className="quick-stats">

// //       <div className="stats-header">
// //         <h3>QUICK STATS</h3>
// //       </div>

// //       <div className="stats-body">

// //         <div className="stats-row">
// //           <span>Avg TAT</span>
// //           <span>4.2 days</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Clear Rate</span>
// //           <span>92%</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Discrepancy</span>
// //           <span>8%</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Discrepancy</span>
// //           <span>8%</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Discrepancy</span>
// //           <span>8%</span>
// //         </div>

// //         <div className="stats-row">
// //           <span>Discrepancy</span>
// //           <span>8%</span>
// //         </div>

// //       </div>
// //     </div>
// //       </div>
// //       </div>
// //      </div>
      
// //     </main>
// //   </section>
// // </>
// //   );
// // }
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { useCases } from "../src/hooks/useCases";

// const STATUS_MAP = {
//   "In Progress": "in-progress",
//   "QC Review":   "qc-review",
//   "Pending":     "pending",
//   "Completed":   "completed",
// };

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { cases } = useCases();

//   // ── Derived stats ─────────────────────────────────────
//   const total      = cases.length;
//   const inProgress = cases.filter(c => c.label === "In Progress").length;
//   const completed  = cases.filter(c => c.label === "Completed").length;
//   const clients    = new Set(cases.map(c => c.clientId).filter(Boolean)).size;
//   const clearRate  = total > 0
//     ? Math.round((completed / total) * 100)
//     : 0;

//   // 5 most recent for the table
//   const recent = cases.slice(0, 5);

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">

//             <div className="dash-upper-head">
//               <div className="left">
//                 <button className="tab-cta">Today</button>
//                 <button className="tab-cta">This Week</button>
//                 <button className="tab-cta">This Month</button>
//                 <button className="tab-cta active">Custom</button>
//               </div>
//               <div className="right">
//                 <button className="date-wrapper">
//                   <img src="/images/dashboard/calendar-icon.svg" alt="" />
//                   <input type="text" className="selectedDate" placeholder="Select Date" readOnly />
//                 </button>
//                 <button className="primary-cta export">
//                   <img src="/images/dashboard/export-icon.svg" alt="" /> Export CSV
//                 </button>
//                 <button className="secondary-cta import">
//                   <img src="/images/dashboard/export-excel.svg" alt="" /> Export Excel
//                 </button>
//               </div>
//             </div>

//             {/* ── Stats cards ── */}
//             <div className="cards-head-dash">
//               <div className="card-inner-dash bdr-total">
//                 <h4>{total.toLocaleString()}</h4>
//                 <p>Total Cases</p>
//               </div>
//               <div className="card-inner-dash bdr-progress">
//                 <h4>{inProgress}</h4>
//                 <p>In Progress</p>
//               </div>
//               <div className="card-inner-dash bdr-com">
//                 <h4>{completed}</h4>
//                 <p>Completed</p>
//               </div>
//               <div className="card-inner-dash bdr-client">
//                 <h4>{clients}</h4>
//                 <p>Clients</p>
//               </div>
//               <div className="card-inner-dash bdr-rate">
//                 <h4>{clearRate}%</h4>
//                 <p>Clear Rate</p>
//               </div>
//             </div>

//             {/* ── Inner body ── */}
//             <div className="dash-inner-wrp-both">
//               <div className="dash-inner-left">
//                 <div className="up-table">
//                   <img src="/images/dashboard/graph-dash.png" alt="graph" />
//                 </div>

//                 <div className="down-table">
//                   {recent.length === 0 ? (
//                     <div style={{
//                       textAlign: "center", padding: "40px",
//                       color: "#94a3b8", fontSize: "0.875rem",
//                     }}>
//                       No cases yet.{" "}
//                       <button
//                         onClick={() => navigate("/AddCase")}
//                         style={{ color: "#2b3b8c", fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}
//                       >
//                         Add your first case →
//                       </button>
//                     </div>
//                   ) : (
//                     <table>
//                       <thead>
//                         <tr>
//                           <th>Case ID</th>
//                           <th>Candidate</th>
//                           <th>Client</th>
//                           <th>Checks</th>
//                           <th>Status</th>
//                           <th>TAT</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {recent.map(row => (
//                           <tr key={row.id}>
//                             <td>{row.id}</td>
//                             <td>{row.candidate}</td>
//                             <td>{row.client}</td>
//                             <td>{row.checks}</td>
//                             <td>
//                               <span className={`status ${STATUS_MAP[row.label] || row.status}`}>
//                                 {row.label}
//                               </span>
//                             </td>
//                             <td>{row.tat}</td>
//                             <td>
//                               <button className="view-cta">View</button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   )}
//                 </div>
//               </div>

//               <div className="dash-inner-right">
//                 <div className="quick-stats">
//                   <div className="stats-header">
//                     <h3>QUICK STATS</h3>
//                   </div>
//                   <div className="stats-body">
//                     <div className="stats-row">
//                       <span>Total Cases</span>
//                       <span>{total}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>In Progress</span>
//                       <span>{inProgress}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Completed</span>
//                       <span>{completed}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Pending</span>
//                       <span>{cases.filter(c => c.label === "Pending").length}</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Clear Rate</span>
//                       <span>{clearRate}%</span>
//                     </div>
//                     <div className="stats-row">
//                       <span>Unique Clients</span>
//                       <span>{clients}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </main>
//       </section>
//     </>
//   );
// }
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useCases } from "../src/hooks/useCases";
import { useCaseFilters } from "../src/hooks/useCaseFilters";
import DateRangePicker from "../src/components/DateRangePicker";

const STATUS_MAP = {
  "In Progress": "in-progress",
  "QC Review":   "qc-review",
  "Pending":     "pending",
  "Completed":   "completed",
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { cases } = useCases();

  const {
    filtered,
    datePreset, setDatePreset,
    customRange, applyCustomRange, clearDate,
    showPicker, setShowPicker,
    dateLabel,
    exportCSV,
    exportExcel,
  } = useCaseFilters(cases, { showStatusFilter: false });

  // ── Derived stats (from filtered set) ─────────────────────
  const total      = filtered.length;
  const inProgress = filtered.filter(c => c.label === "In Progress").length;
  const completed  = filtered.filter(c => c.label === "Completed").length;
  const clients    = new Set(filtered.map(c => c.clientId).filter(Boolean)).size;
  const clearRate  = total > 0 ? Math.round((completed / total) * 100) : 0;
  const recent     = filtered.slice(0, 5);

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* ── Top bar ── */}
            <div className="dash-upper-head">
              <div className="left">
                {[
                  { key: "all",   label: "All Time"  },
                  { key: "week",  label: "This Week"  },
                  { key: "month", label: "This Month" },
                  { key: "custom", label: "Custom"   },
                ].map(p => (
                  <button
                    key={p.key}
                    className={`tab-cta ${datePreset === p.key ? "active" : ""}`}
                    onClick={() => {
                      if (p.key === "custom") {
                        setShowPicker(v => !v);
                        setDatePreset("custom");
                      } else {
                        setDatePreset(p.key);
                      }
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="right">
                <DateRangePicker
                  datePreset={datePreset}
                  setDatePreset={setDatePreset}
                  customRange={customRange}
                  applyCustomRange={applyCustomRange}
                  clearDate={clearDate}
                  showPicker={showPicker}
                  setShowPicker={setShowPicker}
                  dateLabel={dateLabel}
                />
                <button className="primary-cta export" onClick={exportCSV}>
                  <img src="/images/dashboard/export-icon.svg" alt="" /> Export CSV
                </button>
                <button className="secondary-cta import" onClick={exportExcel}>
                  <img src="/images/dashboard/export-excel.svg" alt="" /> Export Excel
                </button>
              </div>
            </div>

            {/* ── Active filter badge ── */}
            {datePreset !== "all" && (
              <div style={{
                margin: "8px 0 0", display: "flex", alignItems: "center", gap: 8,
                fontSize: "0.78rem", color: "#2b3b8c",
              }}>
                <span style={{
                  background: "#eef1fb", border: "1px solid #c7d2fe",
                  borderRadius: 20, padding: "3px 12px", fontWeight: 600,
                }}>
                  📅 {dateLabel} — {total} case{total !== 1 ? "s" : ""}
                </span>
                <button onClick={clearDate} style={{
                  background: "none", border: "none", color: "#94a3b8",
                  fontSize: "0.75rem", cursor: "pointer", textDecoration: "underline",
                }}>
                  Clear
                </button>
              </div>
            )}

            {/* ── Stats cards ── */}
            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total">
                <h4>{total.toLocaleString()}</h4>
                <p>Total Cases</p>
              </div>
              <div className="card-inner-dash bdr-progress">
                <h4>{inProgress}</h4>
                <p>In Progress</p>
              </div>
              <div className="card-inner-dash bdr-com">
                <h4>{completed}</h4>
                <p>Completed</p>
              </div>
              <div className="card-inner-dash bdr-client">
                <h4>{clients}</h4>
                <p>Clients</p>
              </div>
              <div className="card-inner-dash bdr-rate">
                <h4>{clearRate}%</h4>
                <p>Clear Rate</p>
              </div>
            </div>

            {/* ── Inner body ── */}
            <div className="dash-inner-wrp-both">
              <div className="dash-inner-left">
                <div className="up-table">
                  <img src="/images/dashboard/graph-dash.png" alt="graph" />
                </div>

                <div className="down-table">
                  {recent.length === 0 ? (
                    <div style={{
                      textAlign: "center", padding: "40px",
                      color: "#94a3b8", fontSize: "0.875rem",
                    }}>
                      No cases for this period.{" "}
                      {cases.length === 0 && (
                        <button
                          onClick={() => navigate("/AddCase")}
                          style={{
                            color: "#2b3b8c", fontWeight: 700,
                            background: "none", border: "none", cursor: "pointer",
                          }}
                        >
                          Add your first case →
                        </button>
                      )}
                    </div>
                  ) : (
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
                        {recent.map(row => (
                          <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.candidate}</td>
                            <td>{row.client}</td>
                            <td>{row.checks}</td>
                            <td>
                              <span className={`status ${STATUS_MAP[row.label] || row.status}`}>
                                {row.label}
                              </span>
                            </td>
                            <td>{row.tat}</td>
                            <td><button className="view-cta">View</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div className="dash-inner-right">
                <div className="quick-stats">
                  <div className="stats-header">
                    <h3>QUICK STATS</h3>
                  </div>
                  <div className="stats-body">
                    <div className="stats-row">
                      <span>Total Cases</span>
                      <span>{total}</span>
                    </div>
                    <div className="stats-row">
                      <span>In Progress</span>
                      <span>{inProgress}</span>
                    </div>
                    <div className="stats-row">
                      <span>Completed</span>
                      <span>{completed}</span>
                    </div>
                    <div className="stats-row">
                      <span>Pending</span>
                      <span>{filtered.filter(c => c.label === "Pending").length}</span>
                    </div>
                    <div className="stats-row">
                      <span>QC Review</span>
                      <span>{filtered.filter(c => c.label === "QC Review").length}</span>
                    </div>
                    <div className="stats-row">
                      <span>Clear Rate</span>
                      <span>{clearRate}%</span>
                    </div>
                    <div className="stats-row">
                      <span>Unique Clients</span>
                      <span>{clients}</span>
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