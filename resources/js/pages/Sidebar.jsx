

import { useNavigate, useLocation } from "react-router-dom";

function getUser() { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } }



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
    { path: "/clientportal",   label: "Generate Links",    img: "images/sidebar/trend-icon.svg" },
    //  { path: "/clientportal",   label: "Client onbordingform",    img: "images/sidebar/trend-icon.svg" },
    { path: "/UserManagement", label: "User Management",     img: "images/sidebar/clients-icon.svg" },
    { path: "/AddInstitution", label: "Add Institution",      img: "images/sidebar/setting-icon.svg" },
    { path: "/AddCompany",     label: "Add Company",         img: "images/sidebar/setting-icon.svg" },
    { path: "/Apiintegretion", label: "API Integration",     img: "images/sidebar/setting-icon.svg" },
    { path: "/Settings",       label: "Settings",            img: "images/sidebar/setting-icon.svg" },
  ],


client: [
  { path: "/Client",              label: "Dashboard",       img: "images/sidebar/home-icon.svg" },
  { path: "/Client?tab=all",      label: "Total Cases",       img: "images/sidebar/cases-icon.svg" },
  { path: "/Client?tab=pending",  label: "In Process",   img: "images/sidebar/wip-icon.svg" },
  { path: "/Client?tab=in-progress", label: "In Progress",  img: "images/sidebar/report-icon.svg" },
  { path: "/Client?tab=completed",label: "Completed Cases", img: "images/sidebar/completed-icon.svg" },
  { path: "/AddCase",             label: "Add Case",        img: "images/sidebar/plus-solid-full.svg" },
  { path: "/clientportal",   label: "Generate Links",    img: "images/sidebar/trend-icon.svg" },
  // { path: "/Settings",            label: "Settings",        img: "images/sidebar/setting-icon.svg" },
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
