// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Forgetpassword from "./pages/Forgetpassword";
// import verifyaccount from "./pages/Verifyaccount";
// import Dashboard from "./pages/Dashboard";

// // simple auth check
// const isAuth = () => !!localStorage.getItem("token");

// // protect dashboard
// function PrivateRoute({ children }) {
//   return isAuth() ? children : <Navigate to="/login" />;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Navigate to="/login" />} /> */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/Forgetpassword" element={<Forgetpassword />} />
//         <Route path="/Verifyaccount" element={<verifyaccount />} />
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
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
import VerifyAccount from "./pages/Verifyaccount"; // ✅ fixed
import Resetpassword from "./pages/Resetpassword";
import Confrimpassword from "./pages/Confrimpassword";
import Dashboard from "./pages/Dashboard";
import Clientportal from "./pages/Clientportal";
// import Empolymentcheck from "./pages/Employmentcheck";

const isAuth = () => !!localStorage.getItem("token");

function PrivateRoute({ children }) {
  return isAuth() ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
        <Route path="/Verifyaccount" element={<VerifyAccount />} />
        <Route path="/Resetpassword" element={<Resetpassword/>}/>
        <Route path="/Confrimpassword" element={<Confrimpassword/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Clientportal" element={<Clientportal/>}/>
          {/* <Route path="/Employmentcheck" element={<Employmentcheck/>}/> */}
      

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);