// // // import React from "react";

// // // export default function Sidebar() {
// // //   return (
// // //      <section id="sidebar">
// // //     <a href="javascript:void(0);" className="brand">
// // //       <img src="/images/login/logo.png" alt="logo" />
// // //       <img src="/images/login/side-logo.png" alt="" className="collapsed" />
// // //     </a>

// // //     <ul className="side-menu">
// // //       <li className="active">
// // //         <a href="dashboard.html">
// // //           <img src="images/sidebar/home-icon.svg" alt="" />
// // //           <i class="fa-solid fa-house"></i>
// // //           <span className="text">Dashboard</span>
// // //         </a>
// // //       </li>

// // //       <li>
// // //         <a href="leads-sales.html">
// // //           <img src="images/sidebar/cases-icon.svg" alt="" />
// // //           <span className="text">All Cases</span>
// // //         </a>
// // //       </li>

// // //       <li>
// // //         <a href="ongoing-projects.html">
// // //           <img src="images/sidebar/wip-icon.svg" alt="" />
// // //           <span className="text">WIP</span>
// // //         </a>
// // //       </li>

// // //       <li>
// // //         <a href="containers-list.html">
// // //           <img src="images/sidebar/completed-icon.svg" alt="" />
// // //           <span className="text">Completed</span>
// // //         </a>
// // //       </li>

// // //       <li>
// // //         <a href="team-management.html">
// // //           <img src="images/sidebar/clients-icon.svg" alt="" />
// // //           <span className="text">Clients</span>
// // //         </a>
// // //       </li>

// // //       <li>
// // //         <a href="ticket-management.html">
// // //           <img src="images/sidebar/report-icon.svg" alt="" />
// // //           <span className="text">Reports</span>
// // //         </a>
// // //       </li>

// // //       <li>
// // //         <a href="alerts.html">
// // //           <img src="images/sidebar/trend-icon.svg" alt="" />
// // //           <span className="text">Trends</span>
// // //         </a>
// // //       </li>

// // //        <li>
// // //         <a href="alerts.html">
// // //           <img src="images/sidebar/setting-icon.svg" alt="" />
// // //           <span className="text">Settings</span>
// // //         </a>
// // //       </li>

// // //       <li className="logout-menu">
// // //         <a
// // //           role="button"
// // //           data-bs-toggle="modal"
// // //           data-bs-target="#logout"
// // //         >
// // //           <img src="images/sidebar/logout-icon.svg" alt="" />
// // //           <span className="text logout">Logout</span>
// // //         </a>
// // //       </li>
// // //     </ul>
// // //   </section>
// // //   );
// // // }
// // import React from "react";
// // import { NavLink, useNavigate } from "react-router-dom";

// // export default function Sidebar() {
// //   const navigate = useNavigate();

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   return (
// //     <section id="sidebar">
// //       <a href="javascript:void(0);" className="brand">
// //         <img src="/images/login/logo.png" alt="logo" />
// //         <img src="/images/login/side-logo.png" alt="" className="collapsed" />
// //       </a>

// //       <ul className="side-menu">
// //         <li>
// //           <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
// //             <img src="images/sidebar/home-icon.svg" alt="" />
// //             <span className="text">Dashboard</span>
// //           </NavLink>
// //         </li>

// //         <li>
// //           <NavLink to="/AllCases" className={({ isActive }) => isActive ? "active" : ""}>
// //             <img src="images/sidebar/cases-icon.svg" alt="" />
// //             <span className="text">All Cases</span>
// //           </NavLink>
// //         </li>

// //         <li>
// //           <NavLink to="/wip" className={({ isActive }) => isActive ? "active" : ""}>
// //             <img src="images/sidebar/wip-icon.svg" alt="" />
// //             <span className="text">WIP</span>
// //           </NavLink>
// //         </li>

// //         <li>
// //           <NavLink to="/completed" className={({ isActive }) => isActive ? "active" : ""}>
// //             <img src="images/sidebar/completed-icon.svg" alt="" />
// //             <span className="text">Completed</span>
// //           </NavLink>
// //         </li>

// //         <li>
// //           <NavLink to="/client" className={({ isActive }) => isActive ? "active" : ""}>
// //             <img src="images/sidebar/clients-icon.svg" alt="" />
// //             <span className="text">Clients</span>
// //           </NavLink>
// //         </li>

// //         <li>
// //           <NavLink to="/emploment" className={({ isActive }) => isActive ? "active" : ""}>
// //             <img src="images/sidebar/report-icon.svg" alt="" />
// //             <span className="text">Employment</span>
// //           </NavLink>
// //         </li>

// //         <li>
// //           <NavLink to="/clientportal" className={({ isActive }) => isActive ? "active" : ""}>
// //             <img src="images/sidebar/trend-icon.svg" alt="" />
// //             <span className="text">Client Portal</span>
// //           </NavLink>
// //         </li>

// //         <li>
// //           <NavLink to="/verifyer" className={({ isActive }) => isActive ? "active" : ""}>
// //             <img src="images/sidebar/setting-icon.svg" alt="" />
// //             <span className="text">Verifyer</span>
// //           </NavLink>
// //         </li>

// //         <li className="logout-menu">
// //           <a role="button" onClick={logout} style={{ cursor: "pointer" }}>
// //             <img src="images/sidebar/logout-icon.svg" alt="" />
// //             <span className="text logout">Logout</span>
// //           </a>
// //         </li>
// //       </ul>
// //     </section>
// //   );
// // }
// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { API_URL } from "../src/config";

// // ─────────────────────────────────────────
// // Menu config per role
// // Each item: { to, icon, label }
// // ─────────────────────────────────────────
// const ROLE_MENUS = {

//   admin: [
//     { to: "/dashboard",      icon: "home-icon.svg",      label: "Dashboard" },
//     { to: "/AllCases",       icon: "cases-icon.svg",     label: "All Cases" },
//     { to: "/Trends",         icon: "trend-icon.svg",     label: "Trends" },
//     { to: "/UserManagement", icon: "clients-icon.svg",   label: "User Management" },
//     { to: "/Apiintegretion", icon: "setting-icon.svg",   label: "API Integration" },
//     { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
//     { to: "/AddCase", icon: "wip-icon.svg", label: "Add Case" },
//   ],

//   allocator: [
//     { to: "/Allocator",      icon: "cases-icon.svg",     label: "Allocate Cases" },
//     { to: "/AllCases",       icon: "wip-icon.svg",       label: "All Cases" },
//     { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
//     { to: "/AddCase", icon: "wip-icon.svg", label: "Add Case" },
//   ],

//   verifier: [
//     { to: "/Verifyer",       icon: "home-icon.svg",      label: "My Cases" },
//     { to: "/emploment",      icon: "report-icon.svg",    label: "Employment" },
//     { to: "/StatusEmploment",icon: "wip-icon.svg",       label: "Status" },
//     { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
//   ],

//   check_manager: [
//     { to: "/AllCases",       icon: "cases-icon.svg",     label: "All Cases" },
//     { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
//   ],

//   report_writing: [
//     { to: "/Specialist",     icon: "report-icon.svg",    label: "Report Writing" },
//     { to: "/AllCases",       icon: "cases-icon.svg",     label: "All Cases" },
//     { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
//   ],

//   pvt_qc: [
//     { to: "/Intake",         icon: "cases-icon.svg",     label: "QC Intake" },
//     { to: "/AllCases",       icon: "wip-icon.svg",       label: "All Cases" },
//     { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
//   ],

//   client: [
//     { to: "/Client",         icon: "home-icon.svg",      label: "My Cases" },
//     { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
//       { to: "/ClientCases", icon: "cases-icon.svg", label: "All Cases" },
//   { to: "/AddCase",     icon: "wip-icon.svg",   label: "Add Case"  },
//   ],

//   onboarding: [
//     { to: "/clientportal",   icon: "clients-icon.svg",   label: "Client Portal" },
//     { to: "/Settings",       icon: "setting-icon.svg",   label: "Settings" },
//   ],

// };

// export default function Sidebar() {
//   const navigate = useNavigate();

//   // Get role from localStorage
//   const user = (() => {
//     try { return JSON.parse(localStorage.getItem("user")) || {}; }
//     catch { return {}; }
//   })();

//   const role  = user.role || "verifier";
//   const menu  = ROLE_MENUS[role] || ROLE_MENUS.verifier;

//   // ── Logout ──────────────────────────────
//   const logout = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await fetch(`${API_URL}/api/logout`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//       });
//     } catch {
//       // silently fail — still log out locally
//     } finally {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       navigate("/");
//     }
//   };

//   return (
//     <section id="sidebar">

//       {/* Logo */}
//       <a href="javascript:void(0);" className="brand">
//         <img src="/images/login/logo.png" alt="logo" />
//         <img src="/images/login/side-logo.png" alt="" className="collapsed" />
//       </a>

//       <ul className="side-menu">

//         {/* Role-specific menu items */}
//         {menu.map((item) => (
//           <li key={item.to}>
//             <NavLink
//               to={item.to}
//               className={({ isActive }) => isActive ? "active" : ""}
//             >
//               <img src={`images/sidebar/${item.icon}`} alt="" />
//               <span className="text">{item.label}</span>
//             </NavLink>
//           </li>
//         ))}

//         {/* Logout — always visible */}
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
// Sidebar.jsx — Role-aware sidebar
// Shows only the links relevant to the logged-in user's role
// Admin sees all; other roles see only their pages

import { useNavigate, useLocation } from "react-router-dom";

function getUser() { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } }

// ─── Nav config per role ──────────────────────────────────────────────────────
// const ROLE_NAV = {
//   // admin: [
//   //   { path: "/dashboard",      label: "Dashboard",         img: "images/sidebar/dashboard-icon.svg" },
//   //   { path: "/AllCases",       label: "All Cases",         img: "images/sidebar/cases-icon.svg" },
//   //   { path: "/AddCase",        label: "Add Case",          img: "images/sidebar/add-case-icon.svg" },
//   //   { path: "/Trends",         label: "Trends",            img: "images/sidebar/trends-icon.svg" },
//   //   { path: "/UserManagement", label: "User Management",   img: "images/sidebar/users-icon.svg" },
//   //   { path: "/AddInstitution", label: "Institution DB",    img: "images/sidebar/database-icon.svg" },
//   //   { path: "/Apiintegretion", label: "API Integration",   img: "images/sidebar/api-icon.svg" },
//   //   { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   // ]
//   admin: [
//   { path:"/dashboard", label:"Dashboard" },
//   { path:"/AllCases", label:"All Cases" },
//   { path:"/AddCase", label:"Add Client" },
//   { path:"/Allocator", label:"Case Allocation" },
//   { path:"/Verifyer", label:"Verifier" },
//   { path:"/emploment", label:"Employment" },
//   { path:"/StatusEmploment", label:"Employment Status" },
//   { path:"/Specialist", label:"Report Writing" },
//   { path:"/Intake", label:"QC Intake" },
//   { path:"/clientportal", label:"Client Portal" },
//   { path:"/UserManagement", label:"User Management" },
//   { path:"/AddInstitution", label:"Institution DB" },
//   { path:"/AddCompany", label:"Add Company" },
//   { path:"/Apiintegretion", label:"API Integration" },
//   { path:"/Settings", label:"Settings" }
// ],
//   allocator: [
//     { path: "/Allocator",      label: "Case Allocation",   img: "images/sidebar/cases-icon.svg" },
//     { path: "/AddCase",        label: "Add Client Case",          img: "images/sidebar/add-case-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   verifier: [
//     { path: "/Verifyer",       label: "Verification",      img: "images/inner-pages/emp-check-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   check_manager: [
//     { path: "/AllCases",       label: "All Cases",         img: "images/sidebar/cases-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   report_writing: [
//     { path: "/Specialist",     label: "Report Writing",    img: "images/sidebar/cases-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   pvt_qc: [
//     { path: "/Intake",         label: "Intake / QC",       img: "images/sidebar/cases-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   client: [
//     { path: "/Client",         label: "Dashboard",         img: "images/sidebar/dashboard-icon.svg" },
//     { path: "/ClientCases",    label: "My Cases",          img: "images/sidebar/cases-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   onboarding: [
//     { path: "/clientportal",   label: "Onboarding",        img: "images/inner-pages/client-portal-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
// };
// const ROLE_NAV = {
//   admin: [
//     { path:"/dashboard", label:"Dashboard" },
//     { path:"/AllCases", label:"All Cases" },
//     { path:"/AddCase", label:"Add Client" },
//     { path:"/Allocator", label:"Case Allocation" },
//     { path:"/Verifyer", label:"Verifier" },
//     { path:"/emploment", label:"Employment" },
//     { path:"/StatusEmploment", label:"Employment Status" },
//     { path:"/Specialist", label:"Report Writing" },
//     { path:"/Intake", label:"QC Intake" },
//     { path:"/clientportal", label:"Candidate Portal — Link Generator" },
//     { path:"/UserManagement", label:"User Management" },
//     { path:"/AddInstitution", label:"Institution DB" },
//     { path:"/AddCompany", label:"Add Company" },
//     { path:"/Apiintegretion", label:"API Integration" },
//     { path:"/Settings", label:"Settings" }
//   ],
//   allocator: [
//     { path: "/Allocator",      label: "Case Allocation",   img: "images/sidebar/cases-icon.svg" },
//     { path: "/AddCase",        label: "Add Client Case",   img: "images/sidebar/add-case-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   verifier: [
//     { path: "/Verifyer",       label: "Verification",      img: "images/inner-pages/emp-check-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   check_manager: [
//     { path: "/AllCases",       label: "All Cases",         img: "images/sidebar/cases-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   report_writing: [
//     { path: "/Specialist",     label: "Report Writing",    img: "images/sidebar/cases-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   pvt_qc: [
//     { path: "/Intake",         label: "Intake / QC",       img: "images/sidebar/cases-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
//   client: [
//     { path: "/Client",         label: "Dashboard",                       img: "images/sidebar/dashboard-icon.svg" },
//     { path: "/ClientCases",    label: "My Cases",                        img: "images/sidebar/cases-icon.svg" },
//     { path: "/AddCase",        label: "Add Case",                        img: "images/sidebar/add-case-icon.svg" },
//     { path: "/clientportal",   label: "Candidate Portal — Link Generator", img: "images/inner-pages/client-portal-icon.svg" },
//     { path: "/ClientCases?status=pending",   label: "Pending Cases",   img: "images/sidebar/cases-icon.svg" },
//     { path: "/ClientCases?status=completed", label: "Completed Cases", img: "images/sidebar/cases-icon.svg" },
//     { path: "/ClientBilling",  label: "Billing",                         img: "images/sidebar/settings-icon.svg" },
//     { path: "/Settings",       label: "Settings",                        img: "images/sidebar/settings-icon.svg" },
//   ],
//   onboarding: [
//     { path: "/clientportal",   label: "Candidate Portal — Link Generator", img: "images/inner-pages/client-portal-icon.svg" },
//     { path: "/Settings",       label: "Settings",          img: "images/sidebar/settings-icon.svg" },
//   ],
// };
// Sidebar.jsx — add img paths to admin role too, and fix the image fallback

const ROLE_NAV = {
  admin: [
    { path: "/dashboard",      label: "Dashboard",           img: "images/sidebar/home-icon.svg" },
    { path: "/AllCases",       label: "All Cases",           img: "images/sidebar/cases-icon.svg" },
    { path: "/AddCase",        label: "Add Client",          img: "images/sidebar/wip-icon.svg" },
    { path: "/Allocator",      label: "Case Allocation",     img: "images/sidebar/cases-icon.svg" },
    { path: "/Verifyer",       label: "Verifier",            img: "images/sidebar/setting-icon.svg" },
    { path: "/emploment",      label: "Employment",          img: "images/sidebar/report-icon.svg" },
    { path: "/StatusEmploment",label: "Employment Status",   img: "images/sidebar/wip-icon.svg" },
    { path: "/Specialist",     label: "Report Writing",      img: "images/sidebar/report-icon.svg" },
    { path: "/Intake",         label: "QC Intake",           img: "images/sidebar/cases-icon.svg" },
    { path: "/clientportal",   label: "Candidate Portal",    img: "images/sidebar/trend-icon.svg" },
     { path: "/clientportal",   label: "Client onbordingform",    img: "images/sidebar/trend-icon.svg" },
    { path: "/UserManagement", label: "User Management",     img: "images/sidebar/clients-icon.svg" },
    { path: "/AddInstitution", label: "Add Institution",      img: "images/sidebar/setting-icon.svg" },
    { path: "/AddCompany",     label: "Add Company",         img: "images/sidebar/setting-icon.svg" },
    { path: "/Apiintegretion", label: "API Integration",     img: "images/sidebar/setting-icon.svg" },
    { path: "/Settings",       label: "Settings",            img: "images/sidebar/setting-icon.svg" },
  ],
  // ... keep other roles as-is
  // client: [
  //   { path: "/Client",         label: "Dashboard",           img: "images/sidebar/home-icon.svg" },
  //   { path: "/ClientCases",    label: "All Cases",           img: "images/sidebar/cases-icon.svg" },
  //   { path: "/ClientPending",  label: "Pending Cases",       img: "images/sidebar/wip-icon.svg" },
  //   { path: "/ClientProgress", label: "In Progress",         img: "images/sidebar/report-icon.svg" },
  //   { path: "/ClientCompleted",label: "Completed Cases",     img: "images/sidebar/completed-icon.svg" },
  //   { path: "/AddCase",        label: "Add Case",            img: "images/sidebar/add-case-icon.svg" },
  //   { path: "/Settings",       label: "Settings",            img: "images/sidebar/setting-icon.svg" },
  // ],
  // Sidebar.jsx — client role

client: [
  { path: "/Client",              label: "Dashboard",       img: "images/sidebar/home-icon.svg" },
  { path: "/Client?tab=all",      label: "All Cases",       img: "images/sidebar/cases-icon.svg" },
  { path: "/Client?tab=pending",  label: "Pending Cases",   img: "images/sidebar/wip-icon.svg" },
  { path: "/Client?tab=in-progress", label: "In Progress",  img: "images/sidebar/report-icon.svg" },
  { path: "/Client?tab=completed",label: "Completed Cases", img: "images/sidebar/completed-icon.svg" },
  { path: "/AddCase",             label: "Add Case",        img: "images/sidebar/add-case-icon.svg" },
  { path: "/clientportal",   label: "Candidate Portal",    img: "images/sidebar/trend-icon.svg" },
  { path: "/Settings",            label: "Settings",        img: "images/sidebar/setting-icon.svg" },
],
  // ... keep other roles
};
export default function Sidebar() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const user      = getUser();
  const role      = user.role || "admin";
  const navItems  = ROLE_NAV[role] || ROLE_NAV.admin;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <aside id="sidebar">

      {/* Brand */}
      <div className="brand">
        <img src="/images/login/logo.png" alt="BGV Portal" />
        <img src="/images/login/logo-small.png" alt="" className="collapsed" />
      </div>

      {/* Navigation */}
      <ul className="side-menu">
        {/* {navItems.map((item) => {
          const isActive = location.pathname === item.path ||
            (item.path !== "/" && location.pathname.startsWith(item.path));
          return (
            <li key={item.path} className={isActive ? "active" : ""}> */}
        {/* {navItems.map((item) => {
            const itemPath = item.path.split("?")[0];
            const isActive = location.pathname === itemPath ||
              (itemPath !== "/" && location.pathname.startsWith(itemPath));
            return (
              <li key={item.path} className={isActive ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigate(item.path); }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <span className="text">{item.label}</span>
              </a>
            </li>
          );
        })} */}

{navItems.map((item) => {
  const [itemPath, itemQuery] = item.path.split("?");
  
  const isActive = (() => {
    if (location.pathname !== itemPath) return false;          // path must match
    if (!itemQuery) return !location.search;                   // /Client (no query) = Dashboard only
    return location.search === `?${itemQuery}`;                // ?tab=pending must match exactly
  })();

  return (
    <li key={item.path} className={isActive ? "active" : ""}>
      <a href="#" onClick={(e) => { e.preventDefault(); navigate(item.path); }}>
        <img src={item.img} alt={item.label}
          onError={(e) => { e.target.style.display = "none"; }} />
        <span className="text">{item.label}</span>
      </a>
    </li>
  );
})}

        {/* Logout */}
        <li className="logout-menu">
          <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>
            <img src="/images/sidebar/logout-icon.svg" alt=""
              onError={(e) => { e.target.style.display = "none"; }} />
            <span className="text logout">Logout</span>
          </a>
        </li>
      </ul>

    </aside>
  );
}
