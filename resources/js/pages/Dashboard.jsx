
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { API_URL } from "../src/config";

export default function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    in_progress: 0,
    completed: 0,
    clients: 0,
    clear_rate: "0%",
    avg_tat: "0 days",
    pending: 0,
  });

  const [cases, setCases] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // Dashboard API
  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };

    Promise.all([
      fetch(`${API_URL}/api/dashboard-stats`, { headers })
        .then(res => res.json()),

      fetch(`${API_URL}/api/cases`, { headers })
        .then(res => res.json()),

      fetch(`${API_URL}/api/users`, { headers })
        .then(res => res.json()),
    ])
      .then(([statsData, casesData, usersData]) => {
        setStats(statsData);
        setCases(casesData.cases || []);

        const clientUsers =
          (usersData.users || []).filter(
            user => user.role === "client"
          );

        setClients(clientUsers);
      })
      .catch(error => {
        console.error("Dashboard Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);


  return (
    <>
      <Sidebar />

      <section id="content">

        <Header />

        <main>

          <div className="dash-wrper">


            {/* Top Filter Bar */}

            <div className="dash-upper-head">

              <div className="left">

                <button className="tab-cta">
                  Today
                </button>


                <button className="tab-cta">
                  This Week
                </button>


                <button className="tab-cta active">
                  This Month
                </button>


                <button className="tab-cta">
                  Custom
                </button>

              </div>


              <div className="right">

                <button className="primary-cta export">

                  <img
                    src="/images/dashboard/export-icon.svg"
                    alt=""
                  />

                  Export CSV

                </button>


                <button className="secondary-cta import">

                  <img
                    src="/images/dashboard/export-excel.svg"
                    alt=""
                  />

                  Export Excel

                </button>

              </div>

            </div>



            {/* Dashboard Cards */}

            <div className="cards-head-dash">


              <div className="card-inner-dash bdr-total">

                <h4>
                  {loading ? "—" : stats.total}
                </h4>

                <p>Total Cases</p>

              </div>



              <div className="card-inner-dash bdr-progress">

                <h4>
                  {loading ? "—" : stats.in_progress}
                </h4>

                <p>In Progress</p>

              </div>



              <div className="card-inner-dash bdr-com">

                <h4>
                  {loading ? "—" : stats.completed}
                </h4>

                <p>Completed</p>

              </div>



              <div className="card-inner-dash bdr-client">

                <h4>
                  {loading ? "—" : clients.length}
                </h4>

                <p>Clients</p>

              </div>



              <div className="card-inner-dash bdr-rate">

                <h4>
                  {loading ? "—" : stats.clear_rate}
                </h4>

                <p>Clear Rate</p>

              </div>

            </div>



            {/* Dashboard Body */}

            <div className="dash-inner-wrp-both">


              {/* Left Section */}

              <div className="dash-inner-left">


                {/* Case Trends */}

                <div className="up-table">

                  <div
                    style={{
                      background: "#27348B",
                      color: "#fff",
                      padding: "14px 18px",
                      fontWeight: "700",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >

                    <span>
                      CASE TRENDS — This Month
                    </span>


                    <span
                      style={{
                        color: "#14d8a7",
                      }}
                    >
                      ▲ 14% vs last month
                    </span>

                  </div>


                  <img
                    src="/images/dashboard/graph-dash.png"
                    alt="Graph"
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                  />

                </div>
                                {/* Recent Cases Table */}

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

                      {
                        loading ? (

                          <tr>
                            <td colSpan="7"
                              style={{
                                textAlign: "center",
                                padding: "25px"
                              }}>
                              Loading Cases...
                            </td>
                          </tr>

                        ) : cases.length === 0 ? (

                          <tr>

                            <td
                              colSpan="7"
                              style={{
                                textAlign: "center",
                                padding: "25px"
                              }}
                            >

                              No cases found

                            </td>

                          </tr>

                        ) : (

                          cases.slice(0, 4).map((row) => (

                            <tr key={row.case_id}>

                              <td>
                                {row.case_id}
                              </td>


                              <td>
                                {row.candidate}
                              </td>


                              <td>
                                {row.client}
                              </td>


                              <td>
                                {row.checks}
                              </td>


                              <td>

                                <span
                                  className={`status ${row.status}`}
                                >
                                  {statusLabel(row.status)}
                                </span>

                              </td>


                              <td>
                                {row.tat || "—"}
                              </td>


                              <td>

                                <button
                                  className="view-cta"
                                  onClick={() =>
                                    navigate("/AllCases")
                                  }
                                >
                                  View
                                </button>

                              </td>


                            </tr>

                          ))

                        )

                      }

                    </tbody>

                  </table>

                </div>

              </div>


              {/* RIGHT SIDE QUICK STATS */}


              <div className="dash-inner-right">


                <div className="quick-stats">


                  <div
                    className="stats-header"
                  >

                    <h3>
                      QUICK STATS
                    </h3>

                  </div>



                  <div className="stats-body">


                    <div className="stats-row">
                      <span>Avg TAT</span>
                      <strong>
                        {stats.avg_tat}
                      </strong>
                    </div>


                    <div className="stats-row">
                      <span>Clear Rate</span>
                      <strong>
                        {stats.clear_rate}
                      </strong>
                    </div>


                    <div className="stats-row">
                      <span>Discrepancy</span>

                      <strong>
                        {stats.discrepancy || "8%"}
                      </strong>
                    </div>


                    <div className="stats-row">
                      <span>Pending QC</span>

                      <strong>
                        {stats.pending}
                      </strong>

                    </div>


                    <div className="stats-row">

                      <span>
                        Clients
                      </span>


                      <strong>
                        {clients.length}
                      </strong>

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



/* Status Labels */

function statusLabel(status) {

  const labels = {

    "in-progress": "In Progress",

    "qc-review": "QC Review",

    "completed": "Completed",

    "pending": "Pending",

    "on-hold": "On Hold"

  };


  return labels[status] || status;

}