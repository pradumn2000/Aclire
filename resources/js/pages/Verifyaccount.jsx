
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyAccount() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("reset_email");

  const handleVerify = async (e) => {
    e.preventDefault();

const res = await fetch("http://localhost:8000/api/verify-otp", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json", //IMPORTANT
  },
  body: JSON.stringify({ email, otp }),
});

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Invalid OTP ");
      return;
    }

    alert("OTP verified ");
    navigate("/ResetPassword");
  };

  return (
<<<<<<< Updated upstream
    <form onSubmit={handleVerify}>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button type="submit">Verify OTP</button>
    </form>
=======
    <section className="log-in">
      <div className="container">
        <div className="row">
         <div className="col-lg-6">
    <div className="login-left-img">
      <img src="/images/login/login-left.png" alt="logo" />
    </div>
        </div>
          <div className="col-lg-6">
            <div className="login-wrp">

              {/* Logo */}
              <div className="log-in-logo">
                <img src="/images/login/logo.png" alt="logo" />
              </div>

              <div className="log-in-inner-wrp">
                <h2>Styapan</h2>
                <p>Verification Management System</p>

                {/* Messages */}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}

                {/* Form */}
                <form onSubmit={handleSubmit}>

                  {/* Email */}
                  <div className="login-pst">
                    <label>Email</label>
                    <div className="input-grp">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="login-pst">
                    <label>Password</label>

                    <div className="input-grp pass">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

                  {/* Forgot Password */}
                  <div className="forgot-pass">
                    <Link to="/Forgetpassword">Forgot Password?</Link>
                  </div>

                  {/* Submit */}
                  <input
                    type="submit"
                    value="Login"
                    className="primary-cta"
                  />
                </form>

                {/* Signup */}
                <div className="ac-switch">
                  New here? <Link to="/signup"><u>Create an Account</u></Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="sucessModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content all-pop-bg">
            <div className="modal-body">
              <div className="login-succ-in">
                <h3>Login Successful</h3>
                <p>Welcome to <span>Styapan</span></p>

                <button
                  className="primary-cta"
                  data-bs-dismiss="modal"
                >
                  Get Started
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
>>>>>>> Stashed changes
  );
}