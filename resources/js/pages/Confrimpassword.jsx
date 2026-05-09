import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // password match check
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      // API CALL
      // const res = await fetch("http://localhost:8000/api/update-password", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify({
      //     password: newPassword,
      //     confirm_password: confirmPassword,
      //   }),
      // });

      // const data = await res.json();

      // if (!res.ok) {
      //   setError(data.message || "Password update failed");
      //   setLoading(false);
      //   return;
      // }

      setSuccess("Password updated successfully");

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      setError("Server error");
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

                <h2>New Password</h2>
                <p>Verification Management System</p>

                <form onSubmit={handleSubmit}>

                  {/* New Password */}
                  <div className="login-pst">
                    {/* <label>New Password</label> */}

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
                        <div
                          className={
                            showPassword ? "eye eye-open" : "eye eye-close"
                          }
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="login-pst">
                    {/* <label>Confirm Password</label> */}

                    <div className="input-grp pass">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        className="password"
                        value={confirmPassword}
                        onChange={(e) =>
                          setConfirmPassword(e.target.value)
                        }
                        required
                      />

                      <div
                        className="password-eye"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        <div
                          className={
                            showConfirmPassword
                              ? "eye eye-open"
                              : "eye eye-close"
                          }
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p style={{ color: "red", marginBottom: "10px" }}>
                      {error}
                    </p>
                  )}

                  {/* Success Message */}
                  {success && (
                    <p style={{ color: "green", marginBottom: "10px" }}>
                      {success}
                    </p>
                  )}

                  {/* Submit Button */}
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