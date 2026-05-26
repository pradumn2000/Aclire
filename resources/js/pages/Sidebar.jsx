import React from "react";

export default function Sidebar() {
  return (
     <section id="sidebar">
    <a href="javascript:void(0);" className="brand">
      <img src="/images/login/logo.png" alt="logo" />
      <img src="/images/login/side-logo.png" alt="" className="collapsed" />
    </a>

    <ul className="side-menu">
      <li className="active">
        <a href="dashboard.html">
          <img src="images/sidebar/home-icon.svg" alt="" />
          <i class="fa-solid fa-house"></i>
          <span className="text">Dashboard</span>
        </a>
      </li>

      <li>
        <a href="leads-sales.html">
          <img src="images/sidebar/cases-icon.svg" alt="" />
          <span className="text">All Cases</span>
        </a>
      </li>

      <li>
        <a href="ongoing-projects.html">
          <img src="images/sidebar/wip-icon.svg" alt="" />
          <span className="text">WIP</span>
        </a>
      </li>

      <li>
        <a href="containers-list.html">
          <img src="images/sidebar/completed-icon.svg" alt="" />
          <span className="text">Completed</span>
        </a>
      </li>

      <li>
        <a href="team-management.html">
          <img src="images/sidebar/clients-icon.svg" alt="" />
          <span className="text">Clients</span>
        </a>
      </li>

      <li>
        <a href="ticket-management.html">
          <img src="images/sidebar/report-icon.svg" alt="" />
          <span className="text">Reports</span>
        </a>
      </li>

      <li>
        <a href="alerts.html">
          <img src="images/sidebar/trend-icon.svg" alt="" />
          <span className="text">Trends</span>
        </a>
      </li>

       <li>
        <a href="alerts.html">
          <img src="images/sidebar/setting-icon.svg" alt="" />
          <span className="text">Settings</span>
        </a>
      </li>

      <li className="logout-menu">
        <a
          role="button"
          data-bs-toggle="modal"
          data-bs-target="#logout"
        >
          <img src="images/sidebar/logout-icon.svg" alt="" />
          <span className="text logout">Logout</span>
        </a>
      </li>
    </ul>
  </section>
  );
}
// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// export default function Sidebar() {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <section id="sidebar">
//       <a href="javascript:void(0);" className="brand">
//         <img src="/images/login/logo.png" alt="logo" />
//         <img src="/images/login/side-logo.png" alt="" className="collapsed" />
//       </a>

//       <ul className="side-menu">
//         <li>
//           <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
//             <img src="images/sidebar/home-icon.svg" alt="" />
//             <span className="text">Dashboard</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/all-cases" className={({ isActive }) => isActive ? "active" : ""}>
//             <img src="images/sidebar/cases-icon.svg" alt="" />
//             <span className="text">All Cases</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/wip" className={({ isActive }) => isActive ? "active" : ""}>
//             <img src="images/sidebar/wip-icon.svg" alt="" />
//             <span className="text">WIP</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/completed" className={({ isActive }) => isActive ? "active" : ""}>
//             <img src="images/sidebar/completed-icon.svg" alt="" />
//             <span className="text">Completed</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/client" className={({ isActive }) => isActive ? "active" : ""}>
//             <img src="images/sidebar/clients-icon.svg" alt="" />
//             <span className="text">Clients</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/emploment" className={({ isActive }) => isActive ? "active" : ""}>
//             <img src="images/sidebar/report-icon.svg" alt="" />
//             <span className="text">Employment</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/clientportal" className={({ isActive }) => isActive ? "active" : ""}>
//             <img src="images/sidebar/trend-icon.svg" alt="" />
//             <span className="text">Client Portal</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/verifyer" className={({ isActive }) => isActive ? "active" : ""}>
//             <img src="images/sidebar/setting-icon.svg" alt="" />
//             <span className="text">Verifyer</span>
//           </NavLink>
//         </li>

//         <li className="logout-menu">
//           <a role="button" onClick={logout} style={{ cursor: "pointer" }}>
//             <img src="images/sidebar/logout-icon.svg" alt="" />
//             <span className="text logout">Logout</span>
//           </a>
//         </li>
//       </ul>
//     </section>
//   );
// }