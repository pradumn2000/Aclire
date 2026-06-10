
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Forgetpassword from "./pages/Forgetpassword";
// import VerifyAccount from "./pages/Verifyaccount"; // 
// import Resetpassword from "./pages/Resetpassword";
// import Confrimpassword from "./pages/Confrimpassword";
// import Dashboard from "./pages/Dashboard";
// import Emploment from "./pages/Emploment";
// // import Verifyer from "./pages/Verifyer";
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
// // import Empolymentcheck from "./pages/Employmentcheck";

// const isAuth = () => !!localStorage.getItem("token");

// function PrivateRoute({ children }) {
//   return isAuth() ? children : <Navigate to="/" />;
// }

// function App() {
//   return (
//     <BrowserRouter>
   
//       <Routes>

//   <Route path="/" element={<Login />} />
//   <Route path="/signup" element={<Signup />} />
//   <Route path="/forgetpassword" element={<Forgetpassword />} />
//   <Route path="/verifyaccount" element={<VerifyAccount />} />
//   <Route path="/resetpassword" element={<Resetpassword />} />
//   <Route path="/confirmpassword" element={<Confrimpassword />} />

//   <Route path="/clientportal" element={<Clientportal/>} />
//   <Route path="/emploment" element={<Emploment />} />
//   <Route path="/Verifyer" element={<Verifyer />} />
//     <Route path="/AllCases" element={<AllCases />} />
//   <Route path ="/Client" element={<Client/>}/>
// <Route path="/Settings" element={<Settings/>}/>
// <Route path="/Intake" element={<Intake/>}/>
// <Route path="/Allocator" element={<Allocator/>}/>
// <Route path="/Specialist" element={<Specialist/>}/>
// <Route path="/Trends" element={<Trends/>}/>
// <Route path="/Apiintegretion" element={<Apiintegretion/>}/>
// <Route path="/StatusEmploment" element={<StatusEmploment/>}/>
//   <Route
//     path="/dashboard"
//     element={
//       <PrivateRoute>
//         <Dashboard />
//       </PrivateRoute>
//     }
//   />

// </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.createRoot(document.getElementById("app")).render(<App />);
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
import ClientCases from "./pages/ClientCases";
import ClientRegistration from "./pages/ClientRegistration";
// ─────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────

// Returns token or null
const getToken = () => localStorage.getItem("token");

// Returns the logged-in user object or null
const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || null;
  } catch {
    return null;
  }
};

// ─────────────────────────────────────────
// PrivateRoute — checks token + optional role
// Usage:
//   <PrivateRoute>                        — just needs a token
//   <PrivateRoute role="admin">           — needs token AND role === admin
//   <PrivateRoute role={["admin","pvt_qc"]}> — needs token AND role in list
// ─────────────────────────────────────────
function PrivateRoute({ children, role }) {
  const token = getToken();
  const user  = getUser();

  // Not logged in at all
  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  // Role check — if role prop passed, enforce it
  if (role) {
    const allowed = Array.isArray(role) ? role : [role];
    if (!allowed.includes(user.role)) {
      // Logged in but wrong role — redirect to their own dashboard
      return <Navigate to={getRoleRoute(user.role)} replace />;
    }
  }

  return children;
}

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
// App
// ─────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Public routes ── */}
        <Route path="/"                  element={<Login />} />
        <Route path="/signup"            element={<Signup />} />
        <Route path="/forgetpassword"    element={<Forgetpassword />} />
        <Route path="/verifyaccount"     element={<VerifyAccount />} />
        <Route path="/resetpassword"     element={<Resetpassword />} />
        <Route path="/confirmpassword"   element={<Confrimpassword />} />
        <Route path="/createonboarding"  element={<CreateOnboarding />} />
        {/* ── Admin only ── */}
        <Route path="/dashboard" element={
          <PrivateRoute role="admin">
            <Dashboard />
          </PrivateRoute>
        } />

        <Route path="/Trends" element={
          <PrivateRoute role="admin">
            <Trends />
          </PrivateRoute>
        } />

        <Route path="/Apiintegretion" element={
          <PrivateRoute role="admin">
            <Apiintegretion />
          </PrivateRoute>
        } />

        {/* ── Allocator only ── */}
        <Route path="/Allocator" element={
          <PrivateRoute role="allocator">
            <Allocator />
          </PrivateRoute>
        } />

        {/* ── Verifier only ── */}
        <Route path="/Verifyer" element={
          <PrivateRoute role="verifier">
            <Verifyer />
          </PrivateRoute>
        } />

        <Route path="/emploment" element={
          <PrivateRoute role="verifier">
            <Emploment />
          </PrivateRoute>
        } />

        <Route path="/StatusEmploment" element={
          <PrivateRoute role="verifier">
            <StatusEmploment />
          </PrivateRoute>
        } />

        {/* ── Check Manager only ── */}
        <Route path="/AllCases" element={
          <PrivateRoute role="check_manager">
            <AllCases />
          </PrivateRoute>
        } />

        {/* ── Report Writing / Specialist only ── */}
        <Route path="/Specialist" element={
          <PrivateRoute role="report_writing">
            <Specialist />
          </PrivateRoute>
        } />

        {/* ── PVT / QC only ── */}
        <Route path="/Intake" element={
          <PrivateRoute role="pvt_qc">
            <Intake />
          </PrivateRoute>
        } />

        {/* ── Client only ── */}
        <Route path="/Client" element={
          <PrivateRoute role="client">
            <Client />
          </PrivateRoute>
        } />

        {/* ── Onboarding only ── */}
        <Route path="/clientportal" element={
          <PrivateRoute role="onboarding">
            <Clientportal />
          </PrivateRoute>
        } />

        {/* ── Settings — accessible by any logged-in user ── */}
        <Route path="/Settings" element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        } />

        {/* ── admin create login and roles ── */}
        <Route path="/UserManagement" element={
  <PrivateRoute role="admin">
    <UserManagement />
  </PrivateRoute>
} />
<Route path="/AddCase" element={
  <PrivateRoute role={["admin", "allocator"]}>
    <AddCase />
  </PrivateRoute>
} />


<Route path="/ClientCases" element={
  <PrivateRoute role="client">
    <ClientCases />
  </PrivateRoute>
} />

        {/* ── Catch all — redirect to login ── */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

// ─────────────────────────────────────────
// Mount — fixed createRoot warning
// ─────────────────────────────────────────
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);