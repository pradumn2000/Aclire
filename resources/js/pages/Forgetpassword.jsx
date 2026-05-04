import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Send code to:", email);
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

                 <a href="/Verifyaccount"> <input
                    type="submit"
                    value="Send Code"
                    className="primary-cta"
                  /></a>
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