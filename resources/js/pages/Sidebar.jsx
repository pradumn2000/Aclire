
// import { useNavigate, useLocation } from "react-router-dom";

// function getUser() {
//   try {
//     return JSON.parse(localStorage.getItem("user")) || {};
//   } catch {
//     return {};
//   }
// }

// // Helper to normalize role (handles spelling variations)
// const normalizeRole = (role) => {
//   if (!role) return "admin";
  
//   const r = role.toString().toLowerCase().trim();

//   const roleMap = {
//     "verifier": "verifyer",
//     "verifyer": "verifyer",
//     "employment_verifier": "employment_verifier",
//     "education_verifier": "education_verifier",
//     "address_verifier": "address_verifier",
//     "database_verifier": "database_verifier",
//     "criminal_verifier": "criminal_verifier",
//     "drug_test_verifier": "drug_test_verifier",
//     "courtroom_verifier": "courtroom_verifier",
//     "employment verifier": "employment_verifier",
//     "education verifier": "education_verifier",
//   };

//   return roleMap[r] || r;
// };

// const ROLE_NAV = {
//   admin: [
//     { path: "/dashboard",      label: "Dashboard",           img: "images/sidebar/home-icon.svg" },
//     { path: "/AllCases",       label: "All Cases",           img: "images/sidebar/cases-icon.svg" },
//     { path: "/AddCase",        label: "Add Client",          img: "images/sidebar/wip-icon.svg" },
//     { path: "/Allocator",      label: "Case Allocation",     img: "images/sidebar/cases-icon.svg" },
//     { path: "/Verifyer",       label: "Verifier",            img: "images/sidebar/setting-icon.svg" },
//     { path: "/emploment",      label: "Employment",          img: "images/sidebar/report-icon.svg" },
//     { path: "/Specialist",     label: "Report Writing",      img: "images/sidebar/report-icon.svg" },
//     { path: "/Intake",         label: "QC Intake",           img: "images/sidebar/cases-icon.svg" },
//     { path: "/clientportal",   label: "Generate Links",      img: "images/sidebar/trend-icon.svg" },
//     { path: "/UserManagement", label: "User Management",     img: "images/sidebar/clients-icon.svg" },
//     { path: "/AddInstitution", label: "Add Institution",     img: "images/sidebar/setting-icon.svg" },
//     { path: "/AddCompany",     label: "Add Company",         img: "images/sidebar/setting-icon.svg" },
//     { path: "/Apiintegretion", label: "API Integration",     img: "images/sidebar/setting-icon.svg" },
//     { path: "/Settings",       label: "Settings",            img: "images/sidebar/setting-icon.svg" },
//   ],

//   client: [
//     { path: "/Client",                 label: "Dashboard",        img: "images/sidebar/home-icon.svg" },
//     { path: "/AddCase",                label: "Add Case",         img: "images/sidebar/plus-solid-full-white.svg" },
//     { path: "/Client?tab=all",         label: "Total Cases",      img: "images/sidebar/cases-icon.svg" },
//     { path: "/Client?tab=pending",     label: "Active Cases",     img: "images/sidebar/wip-icon.svg" },
//     { path: "/Client?tab=completed",   label: "Completed Cases",  img: "images/sidebar/completed-icon.svg" },
//     { path: "/clientportal",           label: "Generate Links",   img: "images/sidebar/chart-bar-regular-full.svg" },
//     { path: "/Trends",                 label: "Reports & Trends", img: "images/sidebar/money-check-dollar-solid-full.svg" },
//     { path: "/ClientBilling",          label: "Billing",          img: "images/sidebar/trend-icon.svg" },
//   ],

//   allocator: [
//     { path: "/AllocatorDashboard",           label: "Dashboard",        img: "images/sidebar/home-icon.svg" },
//     { path: "/Allocator",                    label: "Case Allocation",  img: "images/sidebar/cases-icon.svg" },
//     { path: "/Allocator?tab=unassigned",     label: "Unassigned",       img: "images/sidebar/wip-icon.svg" },
//     { path: "/Allocator?tab=assigned",       label: "Assigned",         img: "images/sidebar/report-icon.svg" },
//     { path: "/Allocator?tab=in-progress",    label: "In Progress",      img: "images/sidebar/wip-icon.svg" },
//     { path: "/Allocator?tab=completed",      label: "Completed",        img: "images/sidebar/completed-icon.svg" },
//     { path: "/AllCases",                     label: "All Cases",        img: "images/sidebar/cases-icon.svg" },
//   ],

//   // ── Basic Verifier ─────────────────────────────────────────────────────────
//   verifyer: [
//     { path: "/Verifyer",                label: "Dashboard",      img: "images/sidebar/home-icon.svg" },
//     { path: "/Verifyer?tab=pending",    label: "Active Cases",   img: "images/sidebar/wip-icon.svg" },
//     { path: "/Verifyer?tab=completed",  label: "Completed",      img: "images/sidebar/completed-icon.svg" },
//   ],

//   // ── Specialized Verifier Roles ─────────────────────────────────────────────
//   employment_verifier: [
//     { path: "/Verifyer",                label: "Dashboard",        img: "images/sidebar/home-icon.svg" },
//     { path: "/Verifyer?tab=pending",    label: "Active Cases",     img: "images/sidebar/wip-icon.svg" },
//     { path: "/Verifyer?tab=completed",  label: "Completed",        img: "images/sidebar/completed-icon.svg" },
//     { path: "/emploment",               label: "Employment Check", img: "images/sidebar/report-icon.svg" },
//   ],

//   education_verifier: [
//     { path: "/Verifyer",                label: "Dashboard",      img: "images/sidebar/home-icon.svg" },
//     { path: "/Verifyer?tab=pending",    label: "Active Cases",   img: "images/sidebar/wip-icon.svg" },
//     { path: "/Verifyer?tab=completed",  label: "Completed",      img: "images/sidebar/completed-icon.svg" },
//   ],

//   address_verifier: [
//     { path: "/Verifyer",                label: "Dashboard",      img: "images/sidebar/home-icon.svg" },
//     { path: "/Verifyer?tab=pending",    label: "Active Cases",   img: "images/sidebar/wip-icon.svg" },
//     { path: "/Verifyer?tab=completed",  label: "Completed",      img: "images/sidebar/completed-icon.svg" },
//   ],

//   database_verifier: [
//     { path: "/Verifyer",                label: "Dashboard",      img: "images/sidebar/home-icon.svg" },
//     { path: "/Verifyer?tab=pending",    label: "Active Cases",   img: "images/sidebar/wip-icon.svg" },
//     { path: "/Verifyer?tab=completed",  label: "Completed",      img: "images/sidebar/completed-icon.svg" },
//   ],

//   criminal_verifier: [
//     { path: "/Verifyer",                label: "Dashboard",      img: "images/sidebar/home-icon.svg" },
//     { path: "/Verifyer?tab=pending",    label: "Active Cases",   img: "images/sidebar/wip-icon.svg" },
//     { path: "/Verifyer?tab=completed",  label: "Completed",      img: "images/sidebar/completed-icon.svg" },
//   ],

//   drug_test_verifier: [
//     { path: "/Verifyer",                label: "Dashboard",      img: "images/sidebar/home-icon.svg" },
//     { path: "/Verifyer?tab=pending",    label: "Active Cases",   img: "images/sidebar/wip-icon.svg" },
//     { path: "/Verifyer?tab=completed",  label: "Completed",      img: "images/sidebar/completed-icon.svg" },
//   ],

//   courtroom_verifier: [
//     { path: "/Verifyer",                label: "Dashboard",      img: "images/sidebar/home-icon.svg" },
//     { path: "/Verifyer?tab=pending",    label: "Active Cases",   img: "images/sidebar/wip-icon.svg" },
//     { path: "/Verifyer?tab=completed",  label: "Completed",      img: "images/sidebar/completed-icon.svg" },
//   ],

//   // ── Check Manager ──────────────────────────────────────────────────────────
//   check_manager: [
//     { path: "/CheckManagerDashboard",        label: "Dashboard",        img: "images/sidebar/home-icon.svg" },
//     { path: "/AllCases",                     label: "All Cases",        img: "images/sidebar/cases-icon.svg" },
//     { path: "/Allocator",                    label: "Case Allocation",  img: "images/sidebar/cases-icon.svg" },
//     { path: "/Verifyer",                     label: "Verification",     img: "images/sidebar/setting-icon.svg" },
//     { path: "/emploment",                    label: "Employment",       img: "images/sidebar/report-icon.svg" },
//     { path: "/StatusEmploment",              label: "Employment Status",img: "images/sidebar/wip-icon.svg" },
//     { path: "/Intake",                       label: "QC Intake",        img: "images/sidebar/cases-icon.svg" },
//     { path: "/UserManagement",               label: "Team",             img: "images/sidebar/clients-icon.svg" },
//   ],

//   // ── Report Writing (Specialist) ────────────────────────────────────────────
//   report_writing: [
//     { path: "/SpecialistDashboard",          label: "Dashboard",        img: "images/sidebar/home-icon.svg" },
//     { path: "/Specialist",                   label: "Report Writing",   img: "images/sidebar/report-icon.svg" },
//     { path: "/Specialist?tab=pending",       label: "Pending Reports",  img: "images/sidebar/wip-icon.svg" },
//     { path: "/Specialist?tab=in-progress",   label: "In Progress",      img: "images/sidebar/report-icon.svg" },
//     { path: "/Specialist?tab=completed",     label: "Completed",        img: "images/sidebar/completed-icon.svg" },
//     { path: "/AllCases",                     label: "Case Reference",   img: "images/sidebar/cases-icon.svg" },
//   ],

//   // ── PVC / QC ───────────────────────────────────────────────────────────────
//   pvc_qc: [
//     { path: "/QCDashboard",                  label: "Dashboard",        img: "images/sidebar/home-icon.svg" },
//     { path: "/Intake",                       label: "QC Intake",        img: "images/sidebar/cases-icon.svg" },
//     { path: "/Intake?tab=pending",           label: "Pending QC",       img: "images/sidebar/wip-icon.svg" },
//     { path: "/Intake?tab=review",            label: "Under Review",     img: "images/sidebar/report-icon.svg" },
//     { path: "/Intake?tab=approved",          label: "Approved",         img: "images/sidebar/completed-icon.svg" },
//     { path: "/Intake?tab=rejected",          label: "Rejected",         img: "images/sidebar/setting-icon.svg" },
//     { path: "/AllCases",                     label: "All Cases",        img: "images/sidebar/cases-icon.svg" },
//   ],

//   // ── Onboarding ─────────────────────────────────────────────────────────────
//   onboarding: [
//     { path: "/OnboardingDashboard",          label: "Dashboard",        img: "images/sidebar/home-icon.svg" },
//     { path: "/AddCase",                      label: "New Case",         img: "images/sidebar/plus-solid-full.svg" },
//     { path: "/clientportal",                 label: "Generate Links",   img: "images/sidebar/trend-icon.svg" },
//     { path: "/AddInstitution",               label: "Add Institution",  img: "images/sidebar/setting-icon.svg" },
//     { path: "/AddCompany",                   label: "Add Company",      img: "images/sidebar/setting-icon.svg" },
//     { path: "/AllCases",                     label: "All Cases",        img: "images/sidebar/cases-icon.svg" },
//   ],
// };

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const user = getUser();
//   const rawRole = user.role || "admin";
//   const role = normalizeRole(rawRole);

//   const navItems = ROLE_NAV[role] || ROLE_NAV.admin;

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   return (
//     <aside id="sidebar">
//       {/* Brand */}
//       <div className="brand">
//         <img src="/images/login/logo.png" alt="SATYAPAN" />
//         <img src="/images/login/logo-small.png" alt="" className="collapsed" />
//       </div>

//       {/* Navigation */}
//       <ul className="side-menu">
//         {navItems.map((item) => {
//           const [itemPath, itemQuery] = item.path.split("?");

//           const isActive = (() => {
//             if (location.pathname !== itemPath) return false;
//             if (!itemQuery) return !location.search;
//             return location.search === `?${itemQuery}`;
//           })();

//           return (
//             <li key={item.path} className={isActive ? "active" : ""}>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate(item.path);
//                 }}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.label}
//                   onError={(e) => { e.target.style.display = "none"; }}
//                 />
//                 <span className="text">{item.label}</span>
//               </a>
//             </li>
//           );
//         })}

//         {/* Logout */}
//         <li className="logout-menu">
//           <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>
//             <img
//               src="/images/sidebar/logout-icon.svg"
//               alt=""
//               onError={(e) => { e.target.style.display = "none"; }}
//             />
//             <span className="text logout">Logout</span>
//           </a>
//         </li>
//       </ul>
//     </aside>
//   );
// }
import { useNavigate, useLocation } from "react-router-dom";

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("user")) || {};
  } catch {
    return {};
  }
}

// Helper to normalize role (handles spelling variations)
const normalizeRole = (role) => {
  if (!role) return "admin";

  const r = role.toString().toLowerCase().trim();

  const roleMap = {
    "verifier": "verifyer",
    "verifyer": "verifyer",
    "employment_verifier": "employment_verifier",
    "education_verifier": "education_verifier",
    "address_verifier": "address_verifier",
    "database_verifier": "database_verifier",
    "criminal_verifier": "criminal_verifier",
    "drug_test_verifier": "drug_test_verifier",
    "courtroom_verifier": "courtroom_verifier",
    "employment verifier": "employment_verifier",
    "education verifier": "education_verifier",
  };

  return roleMap[r] || r;
};

// ── Standard 3-tab set added to every non-admin, non-client role's sidebar.
//    "Clear Rate" isn't included here — it's a stat, not a page — it should
//    appear as a dashboard stat card on each role's Dashboard nav target instead.
const STANDARD_CASE_TABS = (basePath) => [
  { path: `${basePath}?tab=pending`,   label: "Active Cases",    img: "images/sidebar/wip-icon.svg" },
  { path: `${basePath}?tab=completed`, label: "Completed Cases", img: "images/sidebar/completed-icon.svg" },
  { path: `${basePath}?tab=all`,       label: "Total Cases",     img: "images/sidebar/cases-icon.svg" },
];

const ROLE_NAV = {
  admin: [
    { path: "/dashboard",      label: "Dashboard",           img: "images/sidebar/home-icon.svg" },
    { path: "/AllCases",       label: "All Cases",           img: "images/sidebar/cases-icon.svg" },
    { path: "/AddCase",        label: "Add Case",            img: "images/sidebar/wip-icon.svg" },
    { path: "/AddClient",      label: "Add Client",          img: "images/sidebar/plus-solid-full-white.svg" },
    { path: "/Allocator",      label: "Case Allocation",     img: "images/sidebar/cases-icon.svg" },
    { path: "/Verifyer",       label: "Verifier Cases",            img: "images/sidebar/setting-icon.svg" },
    { path: "/emploment",      label: "Employment",          img: "images/sidebar/report-icon.svg" },
    { path: "/Specialist",     label: "Report Writing",      img: "images/sidebar/report-icon.svg" },
    { path: "/Intake",         label: "QC Intake",           img: "images/sidebar/cases-icon.svg" },
    { path: "/clientportal",   label: "Generate Links",      img: "images/sidebar/trend-icon.svg" },
    { path: "/UserManagement", label: "User Management",     img: "images/sidebar/clients-icon.svg" },
    { path: "/AddInstitution", label: "Add Institution",     img: "images/sidebar/setting-icon.svg" },
    { path: "/AddCompany",     label: "Add Company",         img: "images/sidebar/setting-icon.svg" },
    { path: "/Apiintegretion", label: "API Integration",     img: "images/sidebar/setting-icon.svg" },
    { path: "/Settings",       label: "Settings",            img: "images/sidebar/setting-icon.svg" },
  ],

  client: [
    { path: "/Client",                 label: "Dashboard",        img: "images/sidebar/home-icon.svg" },
    { path: "/AddCase",                label: "Add Case",         img: "images/sidebar/plus-solid-full-white.svg" },
    { path: "/Client?tab=all",         label: "Total Cases",      img: "images/sidebar/cases-icon.svg" },
    { path: "/Client?tab=pending",     label: "Active Cases",     img: "images/sidebar/wip-icon.svg" },
    { path: "/Client?tab=completed",   label: "Completed Cases",  img: "images/sidebar/completed-icon.svg" },
    { path: "/clientportal",           label: "Generate Links",   img: "images/sidebar/chart-bar-regular-full.svg" },
    { path: "/Trends",                 label: "Reports & Trends", img: "images/sidebar/money-check-dollar-solid-full.svg" },
    { path: "/ClientBilling",          label: "Billing",          img: "images/sidebar/trend-icon.svg" },
  ],

  allocator: [
    { path: "/Allocator",   label: "Dashboard",  img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Allocator"),
    { path: "/AllCases",    label: "All Cases",  img: "images/sidebar/cases-icon.svg" },
  ],

  // ── Basic Verifier ─────────────────────────────────────────────────────────
  verifyer: [
    { path: "/Verifyer", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Verifyer"),
  ],

  // ── Specialized Verifier Roles ─────────────────────────────────────────────
  employment_verifier: [
    { path: "/Verifyer", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Verifyer"),
    { path: "/emploment", label: "Employment Check", img: "images/sidebar/report-icon.svg" },
  ],

  education_verifier: [
    { path: "/Verifyer", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Verifyer"),
  ],

  address_verifier: [
    { path: "/Verifyer", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Verifyer"),
  ],

  database_verifier: [
    { path: "/Verifyer", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Verifyer"),
  ],

  criminal_verifier: [
    { path: "/Verifyer", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Verifyer"),
  ],

  drug_test_verifier: [
    { path: "/Verifyer", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Verifyer"),
  ],

  courtroom_verifier: [
    { path: "/Verifyer", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Verifyer"),
  ],

  // ── Check Manager ──────────────────────────────────────────────────────────
  check_manager: [
    { path: "/AllCases",        label: "Dashboard",   img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/AllCases"),
    { path: "/Allocator",       label: "Case Allocation",   img: "images/sidebar/cases-icon.svg" },
    { path: "/Verifyer",        label: "Verification",      img: "images/sidebar/setting-icon.svg" },
    { path: "/emploment",       label: "Employment",        img: "images/sidebar/report-icon.svg" },
    { path: "/StatusEmploment", label: "Employment Status", img: "images/sidebar/wip-icon.svg" },
    { path: "/Intake",          label: "QC Intake",         img: "images/sidebar/cases-icon.svg" },
    { path: "/UserManagement",  label: "Team",              img: "images/sidebar/clients-icon.svg" },
  ],

  // ── Report Writing (Specialist) ────────────────────────────────────────────
  report_writing: [
    { path: "/Specialist", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/Specialist"),
    { path: "/AllCases",   label: "Case Reference", img: "images/sidebar/cases-icon.svg" },
  ],

  // ── PVT / QC — Active, Approved, Incomplete, Clear Rate (per spec) ─────────
  // NOTE: this key was previously "pvc_qc" (typo) while every role validation
  // in routes/api.php and App.jsx issues/expects "pvt_qc" — so QC users were
  // silently falling through to ROLE_NAV.admin this whole time. Fixed here.
  pvt_qc: [
    { path: "/Intake",                label: "Dashboard",   img: "images/sidebar/home-icon.svg" },
    { path: "/Intake?tab=active",     label: "Active",      img: "images/sidebar/wip-icon.svg" },
    { path: "/Intake?tab=approved",   label: "Approved",     img: "images/sidebar/completed-icon.svg" },
    { path: "/Intake?tab=incomplete", label: "Incomplete",  img: "images/sidebar/setting-icon.svg" },
    { path: "/Intake?tab=clear-rate", label: "Clear Rate",  img: "images/sidebar/trend-icon.svg" },
    { path: "/AllCases",              label: "All Cases",   img: "images/sidebar/cases-icon.svg" },
  ],

  // ── Onboarding ─────────────────────────────────────────────────────────────
  onboarding: [
    { path: "/clientportal", label: "Dashboard", img: "images/sidebar/home-icon.svg" },
    ...STANDARD_CASE_TABS("/AllCases"),
    { path: "/AddCase",        label: "New Case",        img: "images/sidebar/plus-solid-full.svg" },
    { path: "/clientportal",   label: "Generate Links",  img: "images/sidebar/trend-icon.svg" },
    { path: "/AddInstitution", label: "Add Institution", img: "images/sidebar/setting-icon.svg" },
    { path: "/AddCompany",     label: "Add Company",     img: "images/sidebar/setting-icon.svg" },
  ],
};

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getUser();
  const rawRole = user.role || "admin";
  const role = normalizeRole(rawRole);

  const navItems = ROLE_NAV[role] || ROLE_NAV.admin;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <aside id="sidebar">
      {/* Brand */}
      <div className="brand">
        <img src="/images/login/logo.png" alt="SATYAPAN" />
        <img src="/images/login/logo-small.png" alt="" className="collapsed" />
      </div>

      {/* Navigation */}
      <ul className="side-menu">
        {navItems.map((item, idx) => {
          const [itemPath, itemQuery] = item.path.split("?");

          const isActive = (() => {
            if (location.pathname !== itemPath) return false;
            if (!itemQuery) return !location.search;
            return location.search === `?${itemQuery}`;
          })();

          return (
            <li key={`${item.path}-${idx}`} className={isActive ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                }}
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
        })}

        {/* Logout */}
        <li className="logout-menu">
          <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>
            <img
              src="/images/sidebar/logout-icon.svg"
              alt=""
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <span className="text logout">Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}