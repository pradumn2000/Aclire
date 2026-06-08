// import Header from "./Header";
// import Sidebar from "./Sidebar";

// const allCasesData = [
//   { id: "BGV-2401", candidate: "Ravi Kumar",    client: "Infosys", checks: "Emp·Edu·Addr",  status: "in-progress", label: "In Progress", tat: "3d" },
//   { id: "BGV-2402", candidate: "Anjali Mehta",  client: "TCS",     checks: "Emp·Criminal",  status: "qc-review",   label: "QC Review",   tat: "5d" },
//   { id: "BGV-2403", candidate: "Suresh Pillai", client: "Wipro",   checks: "All 7",          status: "completed",   label: "Completed",   tat: "4d" },
//   { id: "BGV-2404", candidate: "Neha Sharma",   client: "HCL",     checks: "Edu·DB",         status: "pending",     label: "Pending",     tat: "1d" },
//   { id: "BGV-2405", candidate: "Amit Verma",    client: "Deloitte",checks: "Emp·Edu·Crim",   status: "in-progress", label: "In Progress", tat: "2d" },
//   { id: "BGV-2406", candidate: "Deepa Nair",    client: "Infosys", checks: "All 7",          status: "in-progress", label: "In Progress", tat: "6d" },
// ];

// export default function AllCases() {
//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">

//             <div className="dash-upper-head">
//               <div className="left">
//                 <button className="tab-cta active">All</button>
//                 <button className="tab-cta">In Progress</button>
//                 <button className="tab-cta">QC Review</button>
//                 <button className="tab-cta">Pending</button>
//               </div>
//               <div className="right">
//                 <button className="date-wrapper">
//                   <img src="/images/dashboard/calendar-icon.svg" alt="" />
//                   <input type="text" name="daterange" className="selectedDate" placeholder="Select Date" readOnly />
//                 </button>
//                 <button className="primary-cta export">
//                   <img src="/images/dashboard/export-icon.svg" alt="" /> Export CSV
//                 </button>
//                 <button className="secondary-cta import">
//                   <img src="/images/dashboard/export-excel.svg" alt="" /> Export Excel
//                 </button>
//               </div>
//             </div>

//             {/* Search bar */}
//             <div style={{ margin: "16px 0" }}>
//               <input
//                 type="text"
//                 placeholder="Search candidate or case ID..."
//                 style={{
//                   width: "100%", padding: "10px 16px", borderRadius: "8px",
//                   border: "1px solid #ddd", fontSize: "14px", outline: "none"
//                 }}
//               />
//             </div>

//             {/* Cases Table */}
//             <div className="down-table">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Case ID</th>
//                     <th>Candidate</th>
//                     <th>Client</th>
//                     <th>Checks</th>
//                     <th>Status</th>
//                     <th>TAT</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {allCasesData.map((row) => (
//                     <tr key={row.id}>
//                       <td>{row.id}</td>
//                       <td>{row.candidate}</td>
//                       <td>{row.client}</td>
//                       <td>{row.checks}</td>
//                       <td><span className={`status ${row.status}`}>{row.label}</span></td>
//                       <td>{row.tat}</td>
//                       <td><button className="view-cta">View</button></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//           </div>
//         </main>
//       </section>
//     </>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useCases } from "../hooks/useCases";

const STATUS_FILTERS = ["All", "In Progress", "QC Review", "Pending", "Completed"];

const STATUS_MAP = {
  "In Progress": "in-progress",
  "QC Review":   "qc-review",
  "Pending":     "pending",
  "Completed":   "completed",
};

export default function AllCases() {
  const navigate = useNavigate();
  const { cases } = useCases();
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = cases.filter(row => {
    const matchStatus =
      activeFilter === "All" || row.label === activeFilter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      row.id.toLowerCase().includes(q) ||
      row.candidate.toLowerCase().includes(q) ||
      (row.client || "").toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            <div className="dash-upper-head">
              <div className="left">
                {STATUS_FILTERS.map(f => (
                  <button
                    key={f}
                    className={`tab-cta ${activeFilter === f ? "active" : ""}`}
                    onClick={() => setActiveFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="right">
                <button className="date-wrapper">
                  <img src="/images/dashboard/calendar-icon.svg" alt="" />
                  <input type="text" className="selectedDate" placeholder="Select Date" readOnly />
                </button>
                <button className="primary-cta export">
                  <img src="/images/dashboard/export-icon.svg" alt="" /> Export CSV
                </button>
                <button className="secondary-cta import">
                  <img src="/images/dashboard/export-excel.svg" alt="" /> Export Excel
                </button>
              </div>
            </div>

            {/* Search */}
            <div style={{ margin: "16px 0" }}>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search candidate, case ID or client…"
                style={{
                  width: "100%", padding: "10px 16px", borderRadius: "8px",
                  border: "1px solid #ddd", fontSize: "14px", outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Table */}
            <div className="down-table">
              {filtered.length === 0 ? (
                <div style={{
                  textAlign: "center", padding: "60px 20px",
                  color: "#94a3b8", fontSize: "0.9rem",
                }}>
                  {cases.length === 0
                    ? <>No cases yet. <button
                        onClick={() => navigate("/AddCase")}
                        style={{ color: "#2b3b8c", fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}
                      >Add your first case →</button></>
                    : "No cases match your filter."}
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
                    {filtered.map(row => (
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
        </main>
      </section>
    </>
  );
}