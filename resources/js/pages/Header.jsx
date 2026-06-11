// import React from "react";

// export default function Header() {
//   return (
//     <nav>
//       <div className="nav-toggle">
//         <div className="bx bx-menu">
//           <img src="images/sidebar/sidebar-collapse.svg" alt="" />
//         </div>
//       </div>
      
//       <div className="head-src">
//         <h3>ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export</h3>
//       </div>
      
//       <button type="button" className="primary-cta">Admin Role</button>
//     </nav>
//   );
// }
// Header.jsx — Dynamic header: reads role + name from localStorage user object
// Displays role-appropriate title and user name

import { useNavigate, useLocation } from "react-router-dom";

function getUser() { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } }

const ROLE_TITLES = {
  admin:          "ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export",
  allocator:      "ALLOCATOR — Case Distribution · Assignments · Progress",
  verifier:       "VERIFIER — Source Check · Result Entry · Activity Log",
  check_manager:  "CHECK MANAGER — All Cases · QC Review · Progress",
  report_writing: "REPORT WRITING — Check Results · Editor · Dispatch",
  pvt_qc:         "PVT / QC INTAKE — Queue · Case Detail · Comments · Trends",
  client:         "CLIENT PORTAL — Case Submission · Status Tracking · Reports",
  onboarding:     "ONBOARDING — Client Registration · Link Generator · Billing",
};

const ROLE_LABELS = {
  admin:          "Admin",
  allocator:      "Allocator",
  verifier:       "Verifier",
  check_manager:  "Check Manager",
  report_writing: "Specialist",
  pvt_qc:         "PVT / QC",
  client:         "Client",
  onboarding:     "Onboarding",
};

// Page-specific overrides based on current path
const PATH_TITLES = {
  "/dashboard":      "ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export",
  "/AllCases":       "ALL CASES — Search · Filter · Export · QC Review",
  "/AddCase":        "ADD CASE — New Verification Request",
  "/AddInstitution": "INSTITUTION DATABASE — Universities · Companies · Labs · Courts",
  "/UserManagement": "USER MANAGEMENT — Create · Assign Roles · Delete",
  "/Trends":         "TRENDS & ANALYTICS — Performance · Volume · TAT",
  "/Apiintegretion": "API INTEGRATION — EPFO · University APIs · Flow",
  "/Settings":       "SETTINGS — Account · Notifications · Security",
  "/ClientCases":    "MY CASES — Active · Completed · Documents · Comments",
};

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const user     = getUser();
  const role     = user.role || "admin";

  const title = PATH_TITLES[location.pathname] || ROLE_TITLES[role] || "BGV PORTAL";
  const label = ROLE_LABELS[role] || "User";
  const name  = user.name || label;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav>
      {/* Sidebar toggle */}
      <div className="nav-toggle">
        <div
          className="bx bx-menu"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const sidebar = document.getElementById("sidebar");
            if (sidebar) sidebar.classList.toggle("hide");
          }}
        >
          <img src="images/sidebar/sidebar-collapse.svg" alt="menu"
            onError={(e) => {
              e.target.replaceWith(Object.assign(document.createElement("span"), { textContent: "☰", style: "font-size:20px;color:#fff;" }));
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div className="head-src">
        <h3>{title}</h3>
      </div>

      {/* User info + logout */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div style={{ textAlign: "right", lineHeight: 1.3 }}>
          <div style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>{name}</div>
          <div style={{ color: "#cad2e1", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
        </div>
        <button
          type="button"
          className="primary-cta"
          style={{ fontSize: "13px", height: "38px", padding: "0 16px" }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
