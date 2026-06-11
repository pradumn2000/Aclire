
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../../css/style.css";
// // import { API_URL } from "../src/config"

// // export default function Signup() {
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirm, setShowConfirm] = useState(false);

// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");

// //   // handle input
// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   // submit
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setSuccess("");

// //     // validation
// //     if (form.password !== form.confirmPassword) {
// //       setError("Passwords do not match ❌");
// //       return;
// //     }

// //     try {
// //       // const res = await fetch("http://localhost:8000/api/register", {
// //       const res = await fetch(`${API_URL}/api/register`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Accept: "application/json",
// //         },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await res.json();

// //       if (!res.ok) {
// //         setError(data.message || "Signup failed ❌");
// //         return;
// //       }

// //       setSuccess("Account created successfully ");

// //       setTimeout(() => {
// //         navigate("/");
// //       }, 1000);

// //     } catch (err) {
// //       setError("Server error ");
// //     }
// //   };

// //   return (
    
// //     <section className="log-in">
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-lg-6">
// //             <div className="login-left-img">
// //       <img src="/images/login/login-left.png" alt="logo" />
// //     </div>
// //           </div>
// //           <div className="col-lg-6">
// //             <div className="login-wrp">

// //           <div className="log-in-logo">
// //             <img src="/images/login/logo.png" alt="logo" />
// //           </div>

// //           <div className="log-in-inner-wrp">
// //             <h2>Create your account</h2>
// //             <p>Connect with your community</p>

// //             <form onSubmit={handleSubmit}>

// //               {/* Username */}
// //               <div className="login-pst">
// //                 {/* <label>Username</label> */}
// //                 <div className="input-grp">
// //                   <input
// //                     type="text"
// //                     name="username"
// //                     placeholder="Enter Username"
// //                     value={form.username}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               {/* Email */}
// //               <div className="login-pst">
// //                 {/* <label>Email</label> */}
// //                 <div className="input-grp">
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     placeholder="Enter Email"
// //                     value={form.email}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               {/* Password */}
// //               <div className="login-pst">
// //                 {/* <label>Password</label> */}
// //                 <div className="input-grp pass">
// //                   <input
// //                     type={showPassword ? "text" : "password"}
// //                     name="password"
// //                     placeholder="Enter Password"
// //                     className="password"
// //                     value={form.password}
// //                     onChange={handleChange}
// //                     required
// //                   />

// //                   <div
// //                     className="password-eye"
// //                     onClick={() => setShowPassword(!showPassword)}
// //                   >
// //                     <div className={showPassword ? "eye eye-open" : "eye eye-close"}></div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Confirm Password */}
// //               <div className="login-pst">
// //                 {/* <label>Confirm Password</label> */}
// //                 <div className="input-grp pass">
// //                   <input
// //                     type={showConfirm ? "text" : "password"}
// //                     name="confirmPassword"
// //                     placeholder="Re-enter Password"
// //                     className="password"
// //                     value={form.confirmPassword}
// //                     onChange={handleChange}
// //                     required
// //                   />

// //                   <div
// //                     className="password-eye"
// //                     onClick={() => setShowConfirm(!showConfirm)}
// //                   >
// //                     <div className={showConfirm ? "eye eye-open" : "eye eye-close"}></div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Submit */}
// //               <input
// //                 type="submit"
// //                 value="Create Account"
// //                 className="primary-cta"
// //               />
// //             </form>

// //             {/* Success */}
// //             {success && <p style={{ color: "green" }}>{success}</p>}

// //             {/* Error */}
// //             {error && <p style={{ color: "red" }}>{error}</p>}

// //             {/* Switch */}
// //             <div className="ac-switch">
// //               Already have an account?{" "}
// //               <a href="/">
// //                 <u>Login</u>
// //               </a>
// //             </div>

// //           </div>
// //         </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../css/style.css";
// import { API_URL } from "../src/config";

// const ROLES = [
//   { value: "admin",          label: "Admin" },
//   { value: "allocator",      label: "Allocator" },
//   { value: "verifier",       label: "Verifier" },
//   { value: "check_manager",  label: "Check Manager" },
//   { value: "report_writing", label: "Report Writing Specialist" },
//   { value: "pvt_qc",         label: "PVT / QC" },
//   { value: "client",         label: "Client" },
// ];

// export default function Signup() {
//   const [form, setForm]                 = useState({ name: "", email: "", password: "", confirm: "", role: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError]               = useState("");
//   const [loading, setLoading]           = useState(false);
//   const navigate = useNavigate();

//   const set = (field, value) => setForm((p) => ({ ...p, [field]: value }));

//   const validate = () => {
//     if (!form.name.trim())     return "Full name is required.";
//     if (!form.email.trim())    return "Email is required.";
//     if (!form.role)            return "Please select a role.";
//     if (form.password.length < 8) return "Password must be at least 8 characters.";
//     if (form.password !== form.confirm) return "Passwords do not match.";
//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const err = validate();
//     if (err) { setError(err); return; }

//     setError("");
//     setLoading(true);

//     try {
//       const res  = await fetch(`${API_URL}/api/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify({
//           name:     form.name.trim(),
//           email:    form.email.trim(),
//           password: form.password,
//           role:     form.role,
//         }),
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Registration failed.");
//         return;
//       }

//       // Auto-login after signup
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user",  JSON.stringify(data.user));
//       }

//       navigate("/dashboard");

//     } catch {
//       setError("Unable to connect to server. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="log-in">
//       <div className="container">
//         <div className="row">

//           <div className="col-lg-6">
//             <div className="login-left-img">
//               <img src="/images/login/login-left.png" alt="" />
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <div className="login-wrp">

//               <div className="log-in-logo">
//                 <img src="/images/login/logo.png" alt="logo" />
//               </div>

//               <div className="log-in-inner-wrp">
//                 <h2>Create Account</h2>
//                 <p>Verification Management System</p>

//                 <form onSubmit={handleSubmit}>

//                   {/* Full name */}
//                   <div className="login-pst">
//                     <div className="input-grp">
//                       <input
//                         type="text"
//                         placeholder="Full name"
//                         value={form.name}
//                         onChange={(e) => set("name", e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="login-pst">
//                     <div className="input-grp">
//                       <input
//                         type="email"
//                         placeholder="Email address"
//                         value={form.email}
//                         onChange={(e) => set("email", e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Role */}
//                   <div className="login-pst">
//                     <div className="input-grp">
//                       <select
//                         value={form.role}
//                         onChange={(e) => set("role", e.target.value)}
//                         required
//                         style={{
//                           width: "100%", padding: "10px 14px",
//                           border: "1.5px solid #e2e8f0", borderRadius: "8px",
//                           fontSize: "0.875rem", color: form.role ? "#1e293b" : "#94a3b8",
//                           background: "#f8fafc", outline: "none",
//                           appearance: "none",
//                         }}
//                       >
//                         <option value="" disabled>Select your role</option>
//                         {ROLES.map((r) => (
//                           <option key={r.value} value={r.value}>{r.label}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* Password */}
//                   <div className="login-pst">
//                     <div className="input-grp pass">
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Password (min. 8 characters)"
//                         className="password"
//                         value={form.password}
//                         onChange={(e) => set("password", e.target.value)}
//                         required
//                       />
//                       <div className="password-eye" onClick={() => setShowPassword((v) => !v)}>
//                         <div className={showPassword ? "eye eye-open" : "eye eye-close"} />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Confirm password */}
//                   <div className="login-pst">
//                     <div className="input-grp">
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Confirm password"
//                         value={form.confirm}
//                         onChange={(e) => set("confirm", e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>

//                   {error && (
//                     <p style={{ color: "#dc2626", fontSize: "0.82rem", marginBottom: "10px" }}>
//                       {error}
//                     </p>
//                   )}

//                   <input
//                     type="submit"
//                     value={loading ? "Creating account…" : "Create Account"}
//                     className="primary-cta"
//                     disabled={loading}
//                     style={{ width: "100%", marginTop: "8px", cursor: loading ? "not-allowed" : "pointer" }}
//                   />

//                 </form>

//                 <div className="ac-switch" style={{
//                   marginTop: "20px", textAlign: "center",
//                   fontSize: "0.85rem", color: "#64748b",
//                 }}>
//                   Already have an account?{" "}
//                   <a href="/" style={{ color: "#2b3b8c", fontWeight: 700, textDecoration: "underline" }}>
//                     Sign In
//                   </a>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
// Signup.jsx — Staff/Internal signup (no role selection — admin assigns roles via UserManagement)
// After signup, user is pending activation until admin assigns a role.
// Clients use /client-register instead.

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "./config";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm]               = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPass, setShowPass]       = useState(false);
  const [error, setError]             = useState("");
  const [loading, setLoading]         = useState(false);

  const set = (f, v) => setForm((p) => ({ ...p, [f]: v }));

  const validate = () => {
    if (!form.name.trim())        return "Full name is required.";
    if (!form.email.trim())       return "Email is required.";
    if (form.password.length < 8) return "Password must be at least 8 characters.";
    if (form.password !== form.confirm) return "Passwords do not match.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    setLoading(true);
    try {
      const res  = await fetch(`${API_URL}/api/register`, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify({ name: form.name.trim(), email: form.email.trim(), password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || "Registration failed."); return; }

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user",  JSON.stringify(data.user));
        // Redirect based on role (admin assigns later)
        navigate("/dashboard");
      } else {
        // Pending activation
        navigate("/", { state: { info: "Account created. Please wait for admin to activate your account." } });
      }
    } catch {
      setError("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="log-in">
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "100vh" }}>

          {/* Left image */}
          <div className="col-lg-6">
            <div className="login-left-img">
              <img src="/images/login/login-left.png" alt="" />
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-6">
            <div className="login-wrp">
              <div className="log-in-logo">
                <img src="/images/login/logo.png" alt="logo" />
              </div>

              <div className="log-in-inner-wrp">
                <h2>Create Account</h2>
                <p>BGV Verification Management System</p>
                <p style={{ fontSize: "12px", color: "#02c39a", marginTop: "4px" }}>
                  Staff account — role assigned by admin
                </p>

                <form onSubmit={handleSubmit}>

                  {/* Name */}
                  <div className="login-pst">
                    <label>Full Name</label>
                    <div className="input-grp">
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="login-pst">
                    <label>Email Address</label>
                    <div className="input-grp">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="login-pst">
                    <label>Password</label>
                    <div className="input-grp pass" style={{ position: "relative" }}>
                      <input
                        type={showPass ? "text" : "password"}
                        className="password"
                        placeholder="Min. 8 characters"
                        value={form.password}
                        onChange={(e) => set("password", e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="password-eye"
                        onClick={() => setShowPass((v) => !v)}
                        style={{ background: "none", border: "none", position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
                      >
                        <span className={showPass ? "eye-open" : "eye-close"} />
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="login-pst">
                    <label>Confirm Password</label>
                    <div className="input-grp">
                      <input
                        type="password"
                        className="password"
                        placeholder="Repeat your password"
                        value={form.confirm}
                        onChange={(e) => set("confirm", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <p style={{ color: "#ff6b6b", fontSize: "13px", marginTop: "8px", textAlign: "left" }}>
                      ⚠ {error}
                    </p>
                  )}

                  <input
                    type="submit"
                    value={loading ? "Creating account…" : "Create Account"}
                    className="primary-cta"
                    disabled={loading}
                    style={{ width: "100%", marginTop: "16px", cursor: loading ? "not-allowed" : "pointer" }}
                  />

                </form>

                <div className="ac-switch" style={{ marginTop: "20px", fontSize: "14px" }}>
                  Already have an account?{" "}
                  <Link to="/" style={{ color: "#fff", fontWeight: 700 }}>Sign In</Link>
                </div>

                <div style={{ textAlign: "center", marginTop: "12px" }}>
                  <Link
                    to="/client-register"
                    style={{ color: "#02c39a", fontSize: "13px", textDecoration: "underline" }}
                  >
                    Register as a Client Company →
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
