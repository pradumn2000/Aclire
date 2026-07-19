
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { API_URL } from "../src/config";

// const ROLE_TITLE = {
//   admin:          "ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export",
//   allocator:      "ALLOCATOR DASHBOARD — Case Distribution · Assignment",
//   verifier:       "VERIFIER DASHBOARD — My Cases · Result Entry",
//   check_manager:  "CHECK MANAGER — Case Overview · Status Tracking",
//   report_writing: "REPORT WRITING — Draft · QC · Dispatch",
//   pvt_qc:         "PVT / QC INTAKE — Queue · Case Detail · Comments",
//   client:         "CLIENT PORTAL — My Cases · Status · Reports",
//   onboarding:     "ONBOARDING — Client Setup · Candidate Link Generator",
// };

// const ROLE_BADGE_COLOR = {
//   admin:          "#2b3b8c",
//   allocator:      "#028090",
//   verifier:       "#7c3aed",
//   check_manager:  "#0891b2",
//   report_writing: "#d97706",
//   pvt_qc:         "#059669",
//   client:         "#eb4d4b",
//   onboarding:     "#db2777",
// };

// export default function Header() {
//   const navigate = useNavigate();
//   const user = (() => {
//     try { return JSON.parse(localStorage.getItem("user")) || {}; }
//     catch { return {}; }
//   })();

//   const role  = user.role || "admin";
//   const title = ROLE_TITLE[role] || "SATYAPAN BGV PORTAL";
//   const badge = ROLE_BADGE_COLOR[role] || "#2b3b8c";

//   const logout = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await fetch(`${API_URL}/api/logout`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
//       });
//     } catch {}
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   return (
//     <nav>
//       <div className="nav-toggle">
//         <div className="bx bx-menu">
//           <img src="images/sidebar/sidebar-collapse.svg" alt="" />
//         </div>
//       </div>

//       <div className="head-src">
//         <h3>{title}</h3>
//       </div>

//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         {/* User info badge */}
//         <div style={{
//           display: "flex", alignItems: "center", gap: "8px",
//           background: "rgba(255,255,255,0.12)", borderRadius: "10px",
//           padding: "6px 14px"
//         }}>
//           <div style={{
//             width: "32px", height: "32px", borderRadius: "50%",
//             background: badge, color: "#fff",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             fontWeight: 700, fontSize: "14px", flexShrink: 0
//           }}>
//             {(user.name || "A")[0].toUpperCase()}
//           </div>
//           <div style={{ lineHeight: 1.2 }}>
//             <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>
//               {user.name || "Admin"}
//             </div>
//             <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", textTransform: "capitalize" }}>
//               {role.replace("_", " ")}
//             </div>
//           </div>
//         </div>

//         <button
//           type="button"
//           className="primary-cta"
//           onClick={logout}
//           style={{ padding: "0 16px", height: "38px", fontSize: "13px" }}
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../src/config";

const ROLE_TITLE = {
  admin:          "ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export",
  allocator:      "ALLOCATOR DASHBOARD — Case Distribution · Assignment",
  verifier:       "VERIFIER DASHBOARD — My Cases · Result Entry",
  check_manager:  "CHECK MANAGER — Case Overview · Status Tracking",
  report_writing: "REPORT WRITING — Draft · QC · Dispatch",
  pvt_qc:         "PVT / QC INTAKE — Queue · Case Detail · Comments",
  client:         "CLIENT PORTAL — My Cases · Status · Reports",
  onboarding:     "ONBOARDING — Client Setup · Candidate Link Generator",
};

const ROLE_BADGE_COLOR = {
  admin:          "#2b3b8c",
  allocator:      "#028090",
  verifier:       "#7c3aed",
  check_manager:  "#0891b2",
  report_writing: "#d97706",
  pvt_qc:         "#059669",
  client:         "#eb4d4b",
  onboarding:     "#db2777",
};

export default function Header() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false); // Toggle state

  const user = (() => {
    try { return JSON.parse(localStorage.getItem("user")) || {}; }
    catch { return {}; }
  })();

  const role  = user.role || "admin";
  const title = ROLE_TITLE[role] || "SATYAPAN BGV PORTAL";
  const badge = ROLE_BADGE_COLOR[role] || "#2b3b8c";

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${API_URL}/api/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      });
    } catch {}
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav style={{ position: "relative" }}>
      <div className="nav-toggle">
        <div className="bx bx-menu">
          <img src="images/sidebar/sidebar-collapse.svg" alt="" />
        </div>
      </div>

      <div className="head-src">
        <h3>{title}</h3>
      </div>

      {/* Notification and User Container */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
        {/* Notification Icon (Left of User Badge) */}
        <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setShowNotifications(!showNotifications)}>
          <img src="images/notification-icon.svg" alt="Notifications" style={{ width: "24px" }} />
          <span style={{ position: "absolute", top: "-5px", right: "-5px", background: "red", color: "white", fontSize: "10px", padding: "2px 5px", borderRadius: "50%", fontWeight: "bold" }}>2</span>
        </div>

        {/* Notification Dropdown */}
        {showNotifications && (
          <div style={{
            position: "absolute", top: "60px", right: "160px", width: "320px",
            background: "#fff", boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            borderRadius: "10px", padding: "15px", zIndex: 1000, color: "#333"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <h4 style={{ margin: 0 }}>Notifications</h4>
              <span style={{ fontSize: "12px", color: "#007bff", cursor: "pointer" }}>See all</span>
            </div>
            <hr style={{ border: "0", borderTop: "1px solid #eee" }} />
            <div style={{ fontSize: "13px", lineHeight: "1.4" }}>
              <p><b>Today at 12:50 PM</b><br/>Your request to create 1,250,000 UVs has been accepted.</p>
              <hr style={{ border: "0", borderTop: "1px solid #eee" }} />
              <p><b>July 3, 9:28 A.M</b><br/>Your request to create 50,000 UVs has been accepted.</p>
            </div>
          </div>
        )}

        {/* User info badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.12)", borderRadius: "10px",
          padding: "6px 14px"
        }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: badge, color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: "14px", flexShrink: 0
          }}>
            {(user.name || "A")[0].toUpperCase()}
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>
              {user.name || "Admin"}
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", textTransform: "capitalize" }}>
              {role.replace("_", " ")}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="primary-cta"
          onClick={logout}
          style={{ padding: "0 16px", height: "38px", fontSize: "13px" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}