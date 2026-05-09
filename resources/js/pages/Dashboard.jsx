import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
  {/* SIDEBAR */}
  <section id="sidebar">
    <a href="javascript:void(0);" className="brand">
      <img src="images/logo.svg" alt="" />
      <img src="images/coll-logo.svg" alt="" className="collapsed" />
    </a>

    <ul className="side-menu">
      <li className="active">
        <a href="dashboard.html">
          <img src="images/menu/1.svg" alt="" />
          <span className="text">Dashboard</span>
        </a>
      </li>

      <li>
        <a href="leads-sales.html">
          <img src="images/menu/2.svg" alt="" />
          <span className="text">All Cases</span>
        </a>
      </li>

      <li>
        <a href="ongoing-projects.html">
          <img src="images/menu/3.svg" alt="" />
          <span className="text">WIP</span>
        </a>
      </li>

      <li>
        <a href="containers-list.html">
          <img src="images/menu/4.svg" alt="" />
          <span className="text">Completed</span>
        </a>
      </li>

      <li>
        <a href="team-management.html">
          <img src="images/menu/5.svg" alt="" />
          <span className="text">Clients</span>
        </a>
      </li>

      <li>
        <a href="ticket-management.html">
          <img src="images/menu/6.svg" alt="" />
          <span className="text">Reports</span>
        </a>
      </li>

      <li>
        <a href="alerts.html">
          <img src="images/menu/7.svg" alt="" />
          <span className="text">Trends</span>
        </a>
      </li>

       <li>
        <a href="alerts.html">
          <img src="images/menu/7.svg" alt="" />
          <span className="text">Settings</span>
        </a>
      </li>

      <li className="logout-menu">
        <a
          role="button"
          data-bs-toggle="modal"
          data-bs-target="#logout"
        >
          <img src="images/menu/8.svg" alt="" />
          <span className="text">Logout</span>
        </a>
      </li>
    </ul>
  </section>

  {/* CONTENT */}
  <section id="content">
    {/* NAVBAR */}
    <nav>
      <div className="nav-toggle">
        <div className="bx bx-menu">
          <img src="images/sidebar-collapse.svg" alt="" />
        </div>
      </div>

      <div className="head-src">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search..." />
      </div>

      <div className="notification dropdown">
        <button
          className="notification-btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          <img src="images/notification.svg" alt="" />
          <span className="dot"></span>
        </button>

        <div className="dropdown-menu dropdown-menu-end">
          <div className="notification-dropdown">

            <div className="notification-dropdown-header">
              <h4>
                Notifications <br />
                <span>Today</span>
              </h4>

              <button
                type="button"
                className="btn-close close-dropdown"
              ></button>
            </div>

            <div className="notification-dropdown-body">

              <div className="notification-dropdown-body-itm blue">
                <div className="notification-dropdown-body-txt">
                  <h3>New Container Arrived</h3>

                  <p>
                    CNT-DEN-005 arrived — 75.0 CBM textile goods.
                    Assign dock Mew and upload packing sheet.
                  </p>

                  <span>2 minutes ago</span>
                </div>

                <a href="#" className="notification-dropdown-body-btn">
                  View
                </a>
              </div>

              <div className="notification-dropdown-body-itm red">
                <div className="notification-dropdown-body-txt">
                  <h3>Overdue Delivery</h3>

                  <p>
                    ORD-2026-0104 delivery date passed 8 days ago.
                    Truck not yet assigned. Penalty: $850.
                  </p>

                  <span>3 minutes ago</span>
                </div>

                <a href="#" className="notification-dropdown-body-btn">
                  View
                </a>
              </div>

            </div>

            <div className="notification-dropdown-footer">
              <button
                type="button"
                className="close-dropdown"
              >
                Close
              </button>

              <a href="alerts.html" className="primary-btn">
                View All
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="admin-icon">
        <img src="images/profile.svg" alt="" />
        Erik Brown
      </div>
    </nav>

    {/* MAIN */}
    <main>

      {/* TOP SECTION */}
      <div className="top-head">

        <div className="top-head-in">
          <h1>Dashboard</h1>
        </div>

        <div className="top-head-filter">

          <select name="year" className="filter-select">
            <option value="1">2025-26</option>
            <option value="2">2024-25</option>
            <option value="3">2023-24</option>
            <option value="4">2022-23</option>
            <option value="5">2021-22</option>
          </select>

          <select name="city" className="filter-select">
            <option value="1">Denver</option>
            <option value="2">New York</option>
            <option value="3">Los Angeles</option>
            <option value="4">Chicago</option>
            <option value="5">Houston</option>
          </select>

          <a className="filter-btn" href="calendar.html">
            <img src="images/eye.svg" alt="" />
            Calendar View
          </a>

        </div>
      </div>

      {/* DASHBOARD */}
      <div className="dashboard-innr">

        <h2 className="innr-heading">Overview</h2>

        <div className="dashboard-card-wrap">

          <div className="dashboard-card-in">
            <div className="dashboard-card-in-top">

              <div className="dashboard-card-in-text">
                <h4>47</h4>
                <p>Active Leads</p>
              </div>

              <img src="images/dashboard/1.svg" alt="" />
            </div>

            <div className="dashboard-card-in-info">
              <p>
                <span>
                  <i className="fa-solid fa-arrow-up-long"></i> 1.20%
                </span>
                {" "}since last year
              </p>
            </div>
          </div>

          <div className="dashboard-card-in">
            <div className="dashboard-card-in-top">

              <div className="dashboard-card-in-text">
                <h4>32</h4>
                <p>Ongoing Projects</p>
              </div>

              <img src="images/dashboard/2.svg" alt="" />
            </div>

            <div className="dashboard-card-in-info">
              <p>
                <span>
                  <i className="fa-solid fa-arrow-up-long"></i> 1.20%
                </span>
                {" "}since last year
              </p>
            </div>
          </div>

        </div>

        {/* PERFORMANCE */}
        <h2 className="innr-heading">Performance</h2>

        <div className="performance-grid-wrp">

          <div className="performance-in-card">
            <h4>
              Leads & Sales{" "}
              <a href="leads-sales.html">
                <i className="fa-solid fa-arrow-up-long"></i>
                {" "}View Details
              </a>
            </h4>

            <ul>
              <li>
                New Leads <span>12</span>
              </li>

              <li>
                Conversion Rate <span>32.5%</span>
              </li>

              <li>
                Budget Calculation Sent (Pending) <span>08</span>
              </li>
            </ul>
          </div>

          <div className="performance-in-card">
            <h4>Design</h4>

            <ul>
              <li>
                In-progress <span>12</span>
              </li>

              <li>
                Completed <span>08</span>
              </li>

              <li>
                Approved <span>08</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  </section>
</>
  );
}