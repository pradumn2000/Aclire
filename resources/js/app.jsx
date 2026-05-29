
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgetpassword from "./pages/Forgetpassword";
import VerifyAccount from "./pages/Verifyaccount"; // 
import Resetpassword from "./pages/Resetpassword";
import Confrimpassword from "./pages/Confrimpassword";
import Dashboard from "./pages/Dashboard";
import Emploment from "./pages/Emploment";
// import Verifyer from "./pages/Verifyer";
import Verifyer from "./pages/verifyer";
import Clientportal from "./pages/Clientportal";
import Client from "./pages/Client";
import Settings from "./pages/Settings";
import Intake from "./pages/Intake";
import Allocator from "./pages/Allocator";
import Specialist from "./pages/Specialist";
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
  <Route path="/forgetpassword" element={<Forgetpassword />} />
  <Route path="/verifyaccount" element={<VerifyAccount />} />
  <Route path="/resetpassword" element={<Resetpassword />} />
  <Route path="/confirmpassword" element={<Confrimpassword />} />

  <Route path="/clientportal" element={<Clientportal/>} />
  <Route path="/emploment" element={<Emploment />} />
  <Route path="/Verifyer" element={<Verifyer />} />
  <Route path ="/Client" element={<Client/>}/>
<Route path="/Settings" element={<Settings/>}/>
<Route path="/Intake" element={<Intake/>}/>
<Route path="/Allocator" element={<Allocator/>}/>
<Route path="/Specialist" element={<Specialist/>}/>
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