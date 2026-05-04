
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // validation
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed ❌");
        return;
      }

      setSuccess("Account created successfully ✅");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (err) {
      setError("Server error ❌");
    }
  };

  return (
    <section className="log-in">
      <div className="container">
        <div className="login-wrp">

          <div className="log-in-logo">
            <img src="/images/login/logo.png" alt="logo" />
          </div>

          <div className="log-in-inner-wrp">
            <h2>Create your account</h2>
            <p>Connect with your community</p>

            <form onSubmit={handleSubmit}>

              {/* Username */}
              <div className="login-pst">
                <label>Username</label>
                <div className="input-grp">
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="login-pst">
                <label>Email</label>
                <div className="input-grp">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
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
                    name="password"
                    placeholder="Enter Password"
                    className="password"
                    value={form.password}
                    onChange={handleChange}
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
                <label>Confirm Password</label>
                <div className="input-grp pass">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Re-enter Password"
                    className="password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  <div
                    className="password-eye"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    <div className={showConfirm ? "eye eye-open" : "eye eye-close"}></div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <input
                type="submit"
                value="Create Account"
                className="primary-cta"
              />
            </form>

            {/* Success */}
            {success && <p style={{ color: "green" }}>{success}</p>}

            {/* Error */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Switch */}
            <div className="ac-switch">
              Already have an account?{" "}
              <a href="/">
                <u>Login</u>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

