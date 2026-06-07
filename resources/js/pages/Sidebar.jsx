// // import React from "react";

// // export default function Sidebar() {
// //   return (
// //      <section id="sidebar">
// //     <a href="javascript:void(0);" className="brand">
// //       <img src="/images/login/logo.png" alt="logo" />
// //       <img src="/images/login/side-logo.png" alt="" className="collapsed" />
// //     </a>

// //     <ul className="side-menu">
// //       <li className="active">
// //         <a href="dashboard.html">
// //           <img src="images/sidebar/home-icon.svg" alt="" />
// //           <i class="fa-solid fa-house"></i>
// //           <span className="text">Dashboard</span>
// //         </a>
// //       </li>

// //       <li>
// //         <a href="leads-sales.html">
// //           <img src="images/sidebar/cases-icon.svg" alt="" />
// //           <span className="text">All Cases</span>
// //         </a>
// //       </li>

// //       <li>
// //         <a href="ongoing-projects.html">
// //           <img src="images/sidebar/wip-icon.svg" alt="" />
// //           <span className="text">WIP</span>
// //         </a>
// //       </li>

// //       <li>
// //         <a href="containers-list.html">
// //           <img src="images/sidebar/completed-icon.svg" alt="" />
// //           <span className="text">Completed</span>
// //         </a>
// //       </li>

// //       <li>
// //         <a href="team-management.html">
// //           <img src="images/sidebar/clients-icon.svg" alt="" />
// //           <span className="text">Clients</span>
// //         </a>
// //       </li>

// //       <li>
// //         <a href="ticket-management.html">
// //           <img src="images/sidebar/report-icon.svg" alt="" />
// //           <span className="text">Reports</span>
// //         </a>
// //       </li>

// //       <li>
// //         <a href="alerts.html">
// //           <img src="images/sidebar/trend-icon.svg" alt="" />
// //           <span className="text">Trends</span>
// //         </a>
// //       </li>

// //        <li>
// //         <a href="alerts.html">
// //           <img src="images/sidebar/setting-icon.svg" alt="" />
// //           <span className="text">Settings</span>
// //         </a>
// //       </li>

// //       <li className="logout-menu">
// //         <a
// //           role="button"
// //           data-bs-toggle="modal"
// //           data-bs-target="#logout"
// //         >
// //           <img src="images/sidebar/logout-icon.svg" alt="" />
// //           <span className="text logout">Logout</span>
// //         </a>
// //       </li>
// //     </ul>
// //   </section>
// //   );
// // }
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
//           <NavLink to="/AllCases" className={({ isActive }) => isActive ? "active" : ""}>
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
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { API_URL } from "../src/config";

// ─────────────────────────────────────────
// Menu config per role
// Each item: { to, icon, label }
// ─────────────────────────────────────────
const ROLE_MENUS = {

  admin: [
    { to: "/dashboard",      icon: "home-icon.svg",      label: "Dashboard" },
    { to: "/AllCases",       icon: "cases-icon.svg",     label: "All Cases" },
    { to: "/Trends",         icon: "trend-icon.svg",     label: "Trends" },
    { to: "/UserManagement", icon: "clients-icon.svg",   label: "User Management" },
    { to: "/Apiintegretion", icon: "setting-icon.svg",   label: "API Integration" },
    { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
    { to: "/AddCase", icon: "wip-icon.svg", label: "Add Case" },
  ],

  allocator: [
    { to: "/Allocator",      icon: "cases-icon.svg",     label: "Allocate Cases" },
    { to: "/AllCases",       icon: "wip-icon.svg",       label: "All Cases" },
    { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
    { to: "/AddCase", icon: "wip-icon.svg", label: "Add Case" },
  ],

  verifier: [
    { to: "/Verifyer",       icon: "home-icon.svg",      label: "My Cases" },
    { to: "/emploment",      icon: "report-icon.svg",    label: "Employment" },
    { to: "/StatusEmploment",icon: "wip-icon.svg",       label: "Status" },
    { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
  ],

  check_manager: [
    { to: "/AllCases",       icon: "cases-icon.svg",     label: "All Cases" },
    { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
  ],

  report_writing: [
    { to: "/Specialist",     icon: "report-icon.svg",    label: "Report Writing" },
    { to: "/AllCases",       icon: "cases-icon.svg",     label: "All Cases" },
    { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
  ],

  pvt_qc: [
    { to: "/Intake",         icon: "cases-icon.svg",     label: "QC Intake" },
    { to: "/AllCases",       icon: "wip-icon.svg",       label: "All Cases" },
    { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
  ],

  client: [
    { to: "/Client",         icon: "home-icon.svg",      label: "My Cases" },
    { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
      { to: "/ClientCases", icon: "cases-icon.svg", label: "All Cases" },
  { to: "/AddCase",     icon: "wip-icon.svg",   label: "Add Case"  },
  ],

  onboarding: [
    { to: "/clientportal",   icon: "clients-icon.svg",   label: "Client Portal" },
    { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
  ],

};

export default function Sidebar() {
  const navigate = useNavigate();

  // Get role from localStorage
  const user = (() => {
    try { return JSON.parse(localStorage.getItem("user")) || {}; }
    catch { return {}; }
  })();

  const role  = user.role || "verifier";
  const menu  = ROLE_MENUS[role] || ROLE_MENUS.verifier;

  // ── Logout ──────────────────────────────
  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${API_URL}/api/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
    } catch {
      // silently fail — still log out locally
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  return (
    <section id="sidebar">

      {/* Logo */}
      <a href="javascript:void(0);" className="brand">
        <img src="/images/login/logo.png" alt="logo" />
        <img src="/images/login/side-logo.png" alt="" className="collapsed" />
      </a>

      <ul className="side-menu">

        {/* Role-specific menu items */}
        {menu.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <img src={`images/sidebar/${item.icon}`} alt="" />
              <span className="text">{item.label}</span>
            </NavLink>
          </li>
        ))}

        {/* Logout — always visible */}
        <li className="logout-menu">
          <a role="button" onClick={logout} style={{ cursor: "pointer" }}>
            <img src="images/sidebar/logout-icon.svg" alt="" />
            <span className="text logout">Logout</span>
          </a>
        </li>

      </ul>
    </section>
  );
}