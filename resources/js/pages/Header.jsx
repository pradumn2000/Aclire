


// import React, { useState, useEffect } from "react";
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
//   const [showNotifications, setShowNotifications] = useState(false); // Toggle state

//   const user = (() => {
//     try { return JSON.parse(localStorage.getItem("user")) || {}; }
//     catch { return {}; }
//   })();

//   const role  = user.role || "admin";
//   const title = ROLE_TITLE[role] || "SATYAPAN BGV PORTAL";
//   const badge = ROLE_BADGE_COLOR[role] || "#2b3b8c";

//     const [notifCount, setNotifCount] = useState(0);
// const [pendingRegs, setPendingRegs] = useState([]);

//   useEffect(() => {
//   if (role !== "admin") return;
//   const token = localStorage.getItem("token");
//   fetch(`${API_URL}/api/client-registrations?status=pending`, {
//     headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
//   })
//     .then(r => r.json())
//     .then(data => {
//       const regs = data.registrations || [];
//       setPendingRegs(regs);
//       setNotifCount(regs.length);
//     })
//     .catch(() => {});
// }, [role]);

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
//     <nav style={{ position: "relative" }}>
//       <div className="nav-toggle">
//         <div className="bx bx-menu">
//           <img src="images/sidebar/sidebar-collapse.svg" alt="" />
//         </div>
//       </div>

//       <div className="head-src">
//         <h3>{title}</h3>
//       </div>

//       {/* Notification and User Container */}
//       <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
//         {/* Notification Icon (Left of User Badge) */}
//         <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setShowNotifications(!showNotifications)}>
//           <img src="images/sidebar/NOTIFICATION.svg" alt="Notifications" style={{ width: "24px" }} />
//           <span style={{ position: "absolute", top: "-5px", right: "-5px", background: "red", color: "white", fontSize: "10px", padding: "2px 5px", borderRadius: "50%", fontWeight: "bold" }}>{notifCount > 0 && (
//   <span style={{ position: "absolute", top: "-5px", right: "-5px", background: "red", color: "white", fontSize: "10px", padding: "2px 5px", borderRadius: "50%", fontWeight: "bold" }}>
//     {notifCount}
//   </span>
// )}</span>
//         </div>

//         {/* Notification Dropdown */}
//         {showNotifications && (
//   <div style={{
//     position: "absolute", top: "52px", right: "245px", width: "320px",
//     background: "#fff", boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//     borderRadius: "10px", padding: "15px", zIndex: 1000, color: "#333"
//   }}>
//     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
//       <h4 style={{ margin: 0, color: "#000" }}>Pending Registrations</h4>
//       <span style={{ fontSize: "12px", color: "#000", cursor: "pointer" }}
//         onClick={() => navigate("/PendingRegistrations")}>See all</span>
//     </div>
//     <hr style={{ border: "0", borderTop: "1px solid #eee" }} />
//     <div style={{ fontSize: "13px", lineHeight: "1.4" }}>
//       {pendingRegs.length === 0 ? (
//         <p style={{ color: "#94a3b8", textAlign: "left" }}>No pending registrations.</p>
//       ) : pendingRegs.slice(0, 5).map(r => (
//         <p key={r.id} style={{ color: "#000", textAlign: "left" }}>
//           <b>{r.company_name}</b><br/>{r.contact_email}
//         </p>
//       ))}
//     </div>
//   </div>
// )}

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
import React, { useState, useEffect } from "react";
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
  const [showNotifications, setShowNotifications] = useState(false);

  const user = (() => {
    try { return JSON.parse(localStorage.getItem("user")) || {}; }
    catch { return {}; }
  })();

  const role = user.role || "admin";
  const title = ROLE_TITLE[role] || "SATYAPAN BGV PORTAL";
  const badge = ROLE_BADGE_COLOR[role] || "#2b3b8c";

  const [notifCount, setNotifCount] = useState(0);
  const [pendingRegs, setPendingRegs] = useState([]);
  const [recentClients, setRecentClients] = useState([]);

  // Fetch notifications (Pending + Recent Clients)
  const fetchNotifications = () => {
    if (role !== "admin") return;
    const token = localStorage.getItem("token");

    // Pending Registrations
    fetch(`${API_URL}/api/client-registrations?status=pending`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then(r => r.json())
      .then(data => {
        const regs = data.registrations || [];
        setPendingRegs(regs);
      })
      .catch(() => {});

    // Recent Client Activity (Self-reg + Admin added)
    fetch(`${API_URL}/api/notifications/client-activity`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then(r => r.json())
      .then(data => {
        setRecentClients(data.recent_clients || []);
        // Total notification count = pending registrations + recent new clients
        const totalAlerts = (data.pending_registrations?.length || 0) + (data.recent_clients?.length || 0);
        setNotifCount(Math.min(totalAlerts, 99)); // Cap at 99
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchNotifications();
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, [role]);

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

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
        {/* Notification Bell */}
        <div 
          style={{ position: "relative", cursor: "pointer" }} 
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <img src="images/sidebar/NOTIFICATION.svg" alt="Notifications" style={{ width: "24px" }} />
          {notifCount > 0 && (
            <span style={{
              position: "absolute", top: "-6px", right: "-6px",
              background: "#ef4444", color: "white", fontSize: "10px",
              padding: "1px 6px", borderRadius: "50%", fontWeight: "bold",
              minWidth: "16px", textAlign: "center"
            }}>
              {notifCount}
            </span>
          )}
        </div>

        {/* Enhanced Notification Dropdown */}
        {showNotifications && (
          <div style={{
            position: "absolute", top: "55px", right: "90px", width: "400px",
            background: "#fff", boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
            borderRadius: "12px", padding: "18px", zIndex: 1000, color: "#1e2937"
          }}>
            <h4 style={{ margin: "0 0 14px 0", fontWeight: 600 }}>Notifications</h4>

            {/* Pending Self-Registrations */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <strong>Pending Self-Registrations ({pendingRegs.length})</strong>
                <span 
                  style={{ color: "#3b82f6", fontSize: "13px", cursor: "pointer" }}
                  onClick={() => { navigate("/PendingRegistrations"); setShowNotifications(false); }}
                >
                  View All →
                </span>
              </div>
              {pendingRegs.length === 0 ? (
                <p style={{ color: "#64748b", fontSize: "13.5px" }}>No pending registrations at the moment.</p>
              ) : (
                pendingRegs.slice(0, 5).map(r => (
                  <div key={r.id} style={{ padding: "9px 0", borderBottom: "1px solid #f1f5f9" }}>
                    <div><strong>{r.company_name}</strong></div>
                    <div style={{ fontSize: "12.5px", color: "#64748b" }}>
                      {r.contact_email} • {r.primary_contact}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Recently Added Clients (Both Self & Admin Added) */}
            {recentClients.length > 0 && (
              <div>
                <strong style={{ display: "block", marginBottom: "10px" }}>Recently Added Clients</strong>
                {recentClients.slice(0, 5).map(c => (
                  <div key={c.id} style={{ padding: "9px 0", borderBottom: "1px solid #f1f5f9", fontSize: "13.5px" }}>
                    <strong>{c.name}</strong><br />
                    <span style={{ color: "#64748b" }}>{c.email}</span>
                    <span style={{ fontSize: "12px", marginLeft: "8px", color: "#94a3b8" }}>
                      {new Date(c.created_at).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {pendingRegs.length === 0 && recentClients.length === 0 && (
              <p style={{ color: "#94a3b8", textAlign: "center", padding: "20px 0" }}>
                No new notifications
              </p>
            )}
          </div>
        )}

        {/* User Info Badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.12)", borderRadius: "10px",
          padding: "6px 14px"
        }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: badge, color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: "14px"
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