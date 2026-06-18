// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import Forgetpassword from "./pages/Forgetpassword";
// // import VerifyAccount from "./pages/Verifyaccount";
// // import Resetpassword from "./pages/Resetpassword";
// // import Confrimpassword from "./pages/Confrimpassword";
// // import Dashboard from "./pages/Dashboard";
// // import Emploment from "./pages/Emploment";
// // import Verifyer from "./pages/verifyer";
// // import Clientportal from "./pages/Clientportal";
// // import Client from "./pages/Client";
// // import Settings from "./pages/Settings";
// // import Intake from "./pages/Intake";
// // import Allocator from "./pages/Allocator";
// // import Specialist from "./pages/Specialist";
// // import AllCases from "./pages/AllCases";
// // import Trends from "./pages/Trends";
// // import Apiintegretion from "./pages/Apiintegretion";
// // import StatusEmploment from "./pages/StatusEmploment";
// // import UserManagement from "./pages/UserManagement";
// // import AddCase from "./pages/AddCase";
// // import ClientCases from "./pages/ClientCases";
// // import ClientRegistration from "./pages/ClientRegistration";
// // import AddInstitution from "./pages/AddInstitution";
// // import CompanyManagement from "./pages/AddCompany";
// // import ClientBilling from "./pages/ClientBilling";
// // // ─────────────────────────────────────────
// // // Helpers
// // // ─────────────────────────────────────────

// // const getToken = () => localStorage.getItem("token");

// // const getUser = () => {
// //   try {
// //     return JSON.parse(localStorage.getItem("user")) || null;
// //   } catch {
// //     return null;
// //   }
// // };

// // // Returns the home route for a given role
// // function getRoleRoute(role) {
// //   const routes = {
// //     admin:          "/dashboard",
// //     allocator:      "/Allocator",
// //     verifier:       "/Verifyer",
// //     check_manager:  "/AllCases",
// //     report_writing: "/Specialist",
// //     pvt_qc:         "/Intake",
// //     client:         "/Client",
// //     onboarding:     "/clientportal",
// //   };
// //   return routes[role] || "/";
// // }

// // // ─────────────────────────────────────────
// // // PrivateRoute
// // // - No role prop  → any logged-in user
// // // - role="x"      → that role OR admin
// // // - role={[...]}  → any of those roles OR admin
// // // ─────────────────────────────────────────
// // function PrivateRoute({ children, role }) {
// //   const token = getToken();
// //   const user  = getUser();

// //   if (!token || !user) {
// //     return <Navigate to="/" replace />;
// //   }

// //   if (role) {
// //     const allowed = Array.isArray(role) ? role : [role];
// //     // Admin can always access any page
// //     if (user.role !== "admin" && !allowed.includes(user.role)) {
// //       return <Navigate to={getRoleRoute(user.role)} replace />;
// //     }
// //   }

// //   return children;
// // }

// // // ─────────────────────────────────────────
// // // App
// // // ─────────────────────────────────────────
// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>

// //         {/* ── Public routes ── */}
// //         <Route path="/"                element={<Login />} />
// //         <Route path="/signup"          element={<Signup />} />
// //         <Route path="/client-register" element={<ClientRegistration />} />
// //         <Route path="/forgetpassword"  element={<Forgetpassword />} />
// //         <Route path="/verifyaccount"   element={<VerifyAccount />} />
// //         <Route path="/resetpassword"   element={<Resetpassword />} />
// //         <Route path="/confirmpassword" element={<Confrimpassword />} />

// //         {/* ── Admin ── */}
// //         <Route path="/dashboard" element={
// //           <PrivateRoute role="admin"><Dashboard /></PrivateRoute>
// //         } />
// //         <Route path="/Trends" element={
// //           <PrivateRoute role="admin"><Trends /></PrivateRoute>
// //         } />
// //         <Route path="/Apiintegretion" element={
// //           <PrivateRoute role="admin"><Apiintegretion /></PrivateRoute>
// //         } />
// //         <Route path="/UserManagement" element={
// //           <PrivateRoute role="admin"><UserManagement /></PrivateRoute>
// //         } />
// //         <Route path="/AddInstitution" element={
// //           <PrivateRoute role="admin"><AddInstitution /></PrivateRoute>
// //         } />

// //         {/* ── Allocator (+ admin) ── */}
// //         <Route path="/Allocator" element={
// //           <PrivateRoute role="allocator"><Allocator /></PrivateRoute>
// //         } />
// //         <Route path="/AddCase" element={
// //           <PrivateRoute role={["admin", "allocator"]}><AddCase /></PrivateRoute>
// //         } />

// //         {/* ── Verifier (+ admin) ── */}
// //         <Route path="/Verifyer" element={
// //           <PrivateRoute role="verifier"><Verifyer /></PrivateRoute>
// //         } />
// //         <Route path="/emploment" element={
// //           <PrivateRoute role="verifier"><Emploment /></PrivateRoute>
// //         } />
// //         <Route path="/StatusEmploment" element={
// //           <PrivateRoute role="verifier"><StatusEmploment /></PrivateRoute>
// //         } />

// //         {/* ── Check Manager (+ admin) ── */}
// //         <Route path="/AllCases" element={
// //           <PrivateRoute role="check_manager"><AllCases /></PrivateRoute>
// //         } />

// //         {/* ── Report Writing (+ admin) ── */}
// //         <Route path="/Specialist" element={
// //           <PrivateRoute role="report_writing"><Specialist /></PrivateRoute>
// //         } />

// //         {/* ── PVT / QC (+ admin) ── */}
// //         <Route path="/Intake" element={
// //           <PrivateRoute role="pvt_qc"><Intake /></PrivateRoute>
// //         } />

// //         {/* ── Client (+ admin) ── */}
// //         <Route path="/Client" element={
// //           <PrivateRoute role="client"><Client /></PrivateRoute>
// //         } />
// //         <Route path="/ClientCases" element={
// //           <PrivateRoute role="client"><ClientCases /></PrivateRoute>
// //         } />

// //         {/* ── Onboarding (+ admin) ── */}
// //         <Route path="/clientportal" element={
// //           <PrivateRoute role="onboarding"><Clientportal /></PrivateRoute>
// //         } />

// //         {/* ── Settings — any logged-in user ── */}
// //         <Route path="/Settings" element={
// //           <PrivateRoute><Settings /></PrivateRoute>
// //         } />
// //         <Route path="/AddCompany" element={
// //           <PrivateRoute><CompanyManagement /></PrivateRoute>
// //         } />
// //         <Route path="/AddCase" element={
// //   <PrivateRoute role={["admin", "allocator", "client"]}><AddCase /></PrivateRoute>
// // } />

// // // ...

// // <Route path="/clientportal" element={
// //   <PrivateRoute role={["onboarding", "client"]}><Clientportal /></PrivateRoute>
// // } />

// // // ...

// // <Route path="/ClientBilling" element={
// //   <PrivateRoute role="client"><ClientBilling /></PrivateRoute>
// // } />

// //         {/* ── Catch all ── */}
// //         <Route path="*" element={<Navigate to="/" replace />} />

// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // const container = document.getElementById("app");
// // const root = ReactDOM.createRoot(container);
// // root.render(<App />);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Forgetpassword from "./pages/Forgetpassword";
// import VerifyAccount from "./pages/Verifyaccount";
// import Resetpassword from "./pages/Resetpassword";
// import Confrimpassword from "./pages/Confrimpassword";
// import Dashboard from "./pages/Dashboard";
// import Emploment from "./pages/Emploment";
// import Verifyer from "./pages/verifyer";
// import Clientportal from "./pages/Clientportal";
// import Client from "./pages/Client";
// import Settings from "./pages/Settings";
// import Intake from "./pages/Intake";
// import Allocator from "./pages/Allocator";
// import Specialist from "./pages/Specialist";
// import AllCases from "./pages/AllCases";
// import Trends from "./pages/Trends";
// import Apiintegretion from "./pages/Apiintegretion";
// import StatusEmploment from "./pages/StatusEmploment";
// import UserManagement from "./pages/UserManagement";
// import AddCase from "./pages/AddCase";
// import ClientCases from "./pages/ClientCases";
// import ClientRegistration from "./pages/ClientRegistration";
// import AddInstitution from "./pages/AddInstitution";
// import CompanyManagement from "./pages/AddCompany";
// import ClientBilling from "./pages/ClientBilling";
// import ClientOnboardingForm from "./pages/Clientonbordingform";
// // ─────────────────────────────────────────
// // Helpers
// // ─────────────────────────────────────────

// const getToken = () => localStorage.getItem("token");

// const getUser = () => {
//   try {
//     return JSON.parse(localStorage.getItem("user")) || null;
//   } catch {
//     return null;
//   }
// };

// // Returns the home route for a given role
// function getRoleRoute(role) {
//   const routes = {
//     admin:          "/dashboard",
//     allocator:      "/Allocator",
//     verifier:       "/Verifyer",
//     check_manager:  "/AllCases",
//     report_writing: "/Specialist",
//     pvt_qc:         "/Intake",
//     client:         "/Client",
//     onboarding:     "/clientportal",
//   };
//   return routes[role] || "/";
// }

// // ─────────────────────────────────────────
// // PrivateRoute
// // - No role prop  → any logged-in user
// // - role="x"      → that role OR admin
// // - role={[...]}  → any of those roles OR admin
// // ─────────────────────────────────────────
// function PrivateRoute({ children, role }) {
//   const token = getToken();
//   const user  = getUser();

//   if (!token || !user) {
//     return <Navigate to="/" replace />;
//   }

//   if (role) {
//     const allowed = Array.isArray(role) ? role : [role];
//     // Admin can always access any page
//     if (user.role !== "admin" && !allowed.includes(user.role)) {
//       return <Navigate to={getRoleRoute(user.role)} replace />;
//     }
//   }

//   return children;
// }

// // ─────────────────────────────────────────
// // App
// // ─────────────────────────────────────────
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* ── Public routes ── */}
//         <Route path="/"                element={<Login />} />
//         <Route path="/signup"          element={<Signup />} />
//         <Route path="/client-register" element={<ClientRegistration />} />
//         <Route path="/forgetpassword"  element={<Forgetpassword />} />
//         <Route path="/verifyaccount"   element={<VerifyAccount />} />
//         <Route path="/resetpassword"   element={<Resetpassword />} />
//         <Route path="/confirmpassword" element={<Confrimpassword />} />

//         {/* ── Admin ── */}
//         <Route path="/dashboard" element={
//           <PrivateRoute role="admin"><Dashboard /></PrivateRoute>
//         } />
//         <Route path="/Trends" element={
//           <PrivateRoute role="admin"><Trends /></PrivateRoute>
//         } />
//         <Route path="/Apiintegretion" element={
//           <PrivateRoute role="admin"><Apiintegretion /></PrivateRoute>
//         } />
//         <Route path="/UserManagement" element={
//           <PrivateRoute role="admin"><UserManagement /></PrivateRoute>
//         } />
//         <Route path="/AddInstitution" element={
//           <PrivateRoute role="admin"><AddInstitution /></PrivateRoute>
//         } />

//         {/* ── Allocator (+ admin) ── */}
//         <Route path="/Allocator" element={
//           <PrivateRoute role="allocator"><Allocator /></PrivateRoute>
//         } />

//         {/* ── Add Case (admin, allocator, client) ── */}
//         <Route path="/AddCase" element={
//           <PrivateRoute role={["admin", "allocator", "client"]}><AddCase /></PrivateRoute>
//         } />

//         {/* ── Verifier (+ admin) ── */}
//         <Route path="/Verifyer" element={
//           <PrivateRoute role="verifier"><Verifyer /></PrivateRoute>
//         } />
//         <Route path="/emploment" element={
//           <PrivateRoute role="verifier"><Emploment /></PrivateRoute>
//         } />
//         <Route path="/StatusEmploment" element={
//           <PrivateRoute role="verifier"><StatusEmploment /></PrivateRoute>
//         } />

//         {/* ── Check Manager (+ admin) ── */}
//         <Route path="/AllCases" element={
//           <PrivateRoute role="check_manager"><AllCases /></PrivateRoute>
//         } />

//         {/* ── Report Writing (+ admin) ── */}
//         <Route path="/Specialist" element={
//           <PrivateRoute role="report_writing"><Specialist /></PrivateRoute>
//         } />

//         {/* ── PVT / QC (+ admin) ── */}
//         <Route path="/Intake" element={
//           <PrivateRoute role="pvt_qc"><Intake /></PrivateRoute>
//         } />

//         {/* ── Client (+ admin) ── */}
//         <Route path="/Client" element={
//           <PrivateRoute role="client"><Client /></PrivateRoute>
//         } />
//         <Route path="/ClientCases" element={
//           <PrivateRoute role="client"><ClientCases /></PrivateRoute>
//         } />
//         <Route path="/ClientBilling" element={
//           <PrivateRoute role="client"><ClientBilling /></PrivateRoute>
//         } />

//         {/* ── Candidate Portal — Link Generator (onboarding + client + admin) ── */}
//         <Route path="/clientportal" element={
//           <PrivateRoute role={["onboarding", "client"]}><Clientportal /></PrivateRoute>
//         } />

//         {/* ── Settings — any logged-in user ── */}
//         <Route path="/Settings" element={
//           <PrivateRoute><Settings /></PrivateRoute>
//         } />
//         <Route path="/AddCompany" element={
//           <PrivateRoute><CompanyManagement /></PrivateRoute>
//         } />
//                 <Route path="/ClientOnboardingForm" element={
//           <PrivateRoute><ClientOnboardingForm /></PrivateRoute>
//         } />

//         {/* ── Catch all ── */}
//         <Route path="*" element={<Navigate to="/" replace />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// const container = document.getElementById("app");
// const root = ReactDOM.createRoot(container);
// root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgetpassword from "./pages/Forgetpassword";
import VerifyAccount from "./pages/Verifyaccount";
import Resetpassword from "./pages/Resetpassword";
import Confrimpassword from "./pages/Confrimpassword";
import Dashboard from "./pages/Dashboard";
import Emploment from "./pages/Emploment";
import Verifyer from "./pages/verifyer";
import Clientportal from "./pages/Clientportal";
import Client from "./pages/Client";
import Settings from "./pages/Settings";
import Intake from "./pages/Intake";
import Allocator from "./pages/Allocator";
import Specialist from "./pages/Specialist";
import AllCases from "./pages/AllCases";
import Trends from "./pages/Trends";
import Apiintegretion from "./pages/Apiintegretion";
import StatusEmploment from "./pages/StatusEmploment";
import UserManagement from "./pages/UserManagement";
import AddCase from "./pages/AddCase";
import ClientRegistration from "./pages/ClientRegistration";
import AddInstitution from "./pages/AddInstitution";
import CompanyManagement from "./pages/AddCompany";
import ClientBilling from "./pages/ClientBilling";
import ClientOnboardingForm from "./pages/Clientonbordingform";

// ─────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────

const getToken = () => localStorage.getItem("token");

const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || null;
  } catch {
    return null;
  }
};

// Returns the home route for a given role
function getRoleRoute(role) {
  const routes = {
    admin:          "/dashboard",
    allocator:      "/Allocator",
    verifier:       "/Verifyer",
    check_manager:  "/AllCases",
    report_writing: "/Specialist",
    pvt_qc:         "/Intake",
    client:         "/Client",
    onboarding:     "/clientportal",
  };
  return routes[role] || "/";
}

// ─────────────────────────────────────────
// PrivateRoute
// - No role prop  → any logged-in user
// - role="x"      → that role OR admin
// - role={[...]}  → any of those roles OR admin
// ─────────────────────────────────────────
function PrivateRoute({ children, role }) {
  const token = getToken();
  const user  = getUser();

  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  if (role) {
    const allowed = Array.isArray(role) ? role : [role];
    // Admin can always access any page
    if (user.role !== "admin" && !allowed.includes(user.role)) {
      return <Navigate to={getRoleRoute(user.role)} replace />;
    }
  }

  return children;
}

// ─────────────────────────────────────────
// App
// ─────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Public routes ── */}
        <Route path="/"                element={<Login />} />
        <Route path="/signup"          element={<Signup />} />
        <Route path="/client-register" element={<ClientRegistration />} />
        <Route path="/forgetpassword"  element={<Forgetpassword />} />
        <Route path="/verifyaccount"   element={<VerifyAccount />} />
        <Route path="/resetpassword"   element={<Resetpassword />} />
        <Route path="/confirmpassword" element={<Confrimpassword />} />

        {/* ── Admin ── */}
        <Route path="/dashboard" element={
          <PrivateRoute role="admin"><Dashboard /></PrivateRoute>
        } />
       <Route path="/Trends" element={
  <PrivateRoute role={["admin", "client"]}><Trends /></PrivateRoute>
} />
        <Route path="/Apiintegretion" element={
          <PrivateRoute role="admin"><Apiintegretion /></PrivateRoute>
        } />
        <Route path="/UserManagement" element={
          <PrivateRoute role="admin"><UserManagement /></PrivateRoute>
        } />
        <Route path="/AddInstitution" element={
          <PrivateRoute role="admin"><AddInstitution /></PrivateRoute>
        } />

        {/* ── Allocator (+ admin) ── */}
        <Route path="/Allocator" element={
          <PrivateRoute role="allocator"><Allocator /></PrivateRoute>
        } />

        {/* ── Add Case (admin, allocator, client) ── */}
        <Route path="/AddCase" element={
          <PrivateRoute role={["admin", "allocator", "client"]}><AddCase /></PrivateRoute>
        } />

        {/* ── Verifier (+ admin) ── */}
        <Route path="/Verifyer" element={
          <PrivateRoute role="verifier"><Verifyer /></PrivateRoute>
        } />
        <Route path="/emploment" element={
          <PrivateRoute role="verifier"><Emploment /></PrivateRoute>
        } />
        <Route path="/StatusEmploment" element={
          <PrivateRoute role="verifier"><StatusEmploment /></PrivateRoute>
        } />

        {/* ── Check Manager (+ admin) ── */}
        <Route path="/AllCases" element={
          <PrivateRoute role="check_manager"><AllCases /></PrivateRoute>
        } />

        {/* ── Report Writing (+ admin) ── */}
        <Route path="/Specialist" element={
          <PrivateRoute role="report_writing"><Specialist /></PrivateRoute>
        } />

        {/* ── PVT / QC (+ admin) ── */}
        <Route path="/Intake" element={
          <PrivateRoute role="pvt_qc"><Intake /></PrivateRoute>
        } />

        {/* ── Client (+ admin) — dynamic case list + detail, filtered server-side ── */}
        <Route path="/Client" element={
          <PrivateRoute role="client"><Client /></PrivateRoute>
        } />
        <Route path="/ClientBilling" element={
          <PrivateRoute role="client"><ClientBilling /></PrivateRoute>
        } />

        {/* ── Candidate Portal — Link Generator (onboarding + client + admin) ── */}
        <Route path="/clientportal" element={
          <PrivateRoute role={["onboarding", "client"]}><Clientportal /></PrivateRoute>
        } />

        {/* ── Settings — any logged-in user ── */}
        <Route path="/Settings" element={
          <PrivateRoute><Settings /></PrivateRoute>
        } />
        <Route path="/AddCompany" element={
          <PrivateRoute><CompanyManagement /></PrivateRoute>
        } />
        <Route path="/ClientOnboardingForm" element={
          <PrivateRoute><ClientOnboardingForm /></PrivateRoute>
        } />

        {/* ── Catch all ── */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);