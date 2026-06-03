// import { useState } from "react";
// import { useNavigate } from "react-router-dom";


// export default function ResetPassword() {
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const navigate = useNavigate();

//   const email = localStorage.getItem("reset_email");

//   const handleReset = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:8000/api/reset-password", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         email,
//         password,
//         password_confirmation: confirm,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       alert(data.message || "Reset failed ❌");
//       return;
//     }

//     alert("Password reset successful ✅");

//     localStorage.removeItem("reset_email");

//     navigate("/");
//   };

//   return (
//     <form onSubmit={handleReset}>
//       <input
//         type="password"
//         placeholder="New Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         value={confirm}
//         onChange={(e) => setConfirm(e.target.value)}
//       />
//       <button type="submit">Reset Password</button>
//     </form>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";
import { API_URL } from "../src/config";

export default function ResetPassword() {
  const [newPassword, setNewPassword]           = useState("");
  const [confirmPassword, setConfirmPassword]   = useState("");
  const [showPassword, setShowPassword]         = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const email = localStorage.getItem("reset_email");

  // ✅ Guard — if no email in localStorage, send back to forgot password
//   if (!email) {
//     navigate("/Forgetpassword");
//     return null;
//   }
// Replace this:
if (!email) {
  navigate("/forgetpassword");
  return null;
}

// With this:
useEffect(() => {
  if (!email) navigate("/forgetpassword");
}, []);

if (!email) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
    //   const res = await fetch("http://localhost:8000/api/reset-password", {
    const res = await fetch(`${API_URL}/api/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password:              newPassword,
          password_confirmation: confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Password reset failed");
        return;
      }

      setSuccess("Password reset successful! Redirecting to login...");

      // ✅ Clean up localStorage after successful reset
      localStorage.removeItem("reset_email");
      localStorage.removeItem("token"); 

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="log-in">
      <div className="container">
        <div className="row">

          {/* Left Image */}
          <div className="col-lg-6">
            <div className="login-left-img">
              <img src="/images/login/login-left.png" alt="logo" />
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className="login-wrp">

              <div className="log-in-logo">
                <img src="/images/login/logo.png" alt="logo" />
              </div>

              <div className="log-in-inner-wrp">

                <div className="password-icon">
                  <a href="/Verifyaccount">
                    <img src="/images/login/left-icon.svg" alt="back" />
                  </a>
                  <h2>New Password</h2>
                </div>
                <p>Enter your new password below</p>

                <form onSubmit={handleSubmit}>

                  {/* New Password */}
                  <div className="login-pst">
                    <div className="input-grp pass">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        className="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                      <div
                        className="password-eye"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <div className={showPassword ? "eye eye-open" : "eye eye-close"}></div>
                      </div>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="login-pst">
                    <div className="input-grp pass">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <div
                        className="password-eye"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        <div className={showConfirmPassword ? "eye eye-open" : "eye eye-close"}></div>
                      </div>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
                  )}

                  {/* Success Message */}
                  {success && (
                    <p style={{ color: "green", marginBottom: "10px" }}>{success}</p>
                  )}

                  {/* Submit */}
                  <input
                    type="submit"
                    value={loading ? "Updating..." : "Update Password"}
                    className="primary-cta"
                    disabled={loading}
                  />

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}