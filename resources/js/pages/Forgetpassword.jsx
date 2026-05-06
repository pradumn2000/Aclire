import { useState } from "react";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom"; 
import "../../css/style.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8000/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Failed to send OTP ");
      return;
    }

    // store email for next step
    localStorage.setItem("reset_email", email);

    alert("OTP sent ");

    // redirect to verify page
    navigate("/Verifyaccount");

  } catch (err) {
    alert("Server error ");
  }
};

  return (
    <section className="log-in">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            <div className="login-wrp">

              {/* Logo */}
              <div className="log-in-logo">
                <img src="/images/login/logo.png" alt="logo" />
              </div>

              <div className="log-in-inner-wrp">

                {/* Back Button */}
                <Link to="/login" className="back-icon">
                  ←
                </Link>

                <h2>Forgot Password?</h2>
                <p>Please enter your Email to get a verification code</p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="login-pst">
                    <div className="input-grp">
                      <input
                        type="email"
                        placeholder="Enter Email/Phone"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                 <input
                    type="submit"
                    value="Send Code"
                    className="primary-cta"
                  />
                </form>

                {/* Switch */}
                <div className="ac-switch">
                  Remembered your password?{" "}
                  <Link to="/">
                    <u>Log In</u>
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