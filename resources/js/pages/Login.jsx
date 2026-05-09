 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     {error && <p style={{ color: "red" }}>{error}</p>}

//     try {
//     //   const res = await fetch("http://localhost:8000/api/login", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //       Accept: "application/json",
//     //     },
//     //     body: JSON.stringify({ email, password }),
//     //   });

//     //   const data = await res.json();

//     //   if (!res.ok) {
//     //     setError(data.message || "Login failed ");
//     //     return;
//     //   }
//     const res = await fetch("http://localhost:8000/api/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     email: email.trim(),
//     password: password.trim(),
//   }),
// });

// let data;
// // const data = await res.json();

// // console.log("LOGIN RESPONSE:", data); // 🔥 ADD THIS
// try {
//   data = await res.json();
// } catch (err) {
//   setError("Server error (invalid response)");
//   return;
// }

// if (!res.ok) {
//   setError(data.message || "Login failed ❌");
//   return;
// }
    

//       localStorage.setItem("token", data.token);

//       setSuccess("Welcome! Redirecting...");

//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 1000);

//     } catch (err) {
//       setError("Server error ");
//     }
//   };
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return; // 🔥 prevent duplicate
  setLoading(true);

  try {
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
      }),
    });

    const data = await res.json();

    // console.log("LOGIN RESPONSE:", data);

    if (!res.ok) {
      setError(data.message || "Login failed");
      setLoading(false);
      return;
    }

    localStorage.setItem("token", data.token);

    navigate("/dashboard");

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
        <div className="col-lg-6">
    <div className="login-left-img">
      <img src="/images/login/login-left.png" alt="logo" />
    </div>
        </div>
          <div className="col-lg-6">
            <div className="login-wrp">

              <div className="log-in-logo">
                <img src="/images/login/logo.png" alt="logo" />
              </div>

              <div className="log-in-inner-wrp">
                <h2>Login</h2>
                <p>Varification Management System</p>

                <form onSubmit={handleSubmit}>
                  
                  {/* Email */}
                  <div className="login-pst">
                    {/* <label>Email</label> */}
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
                    {/* <label>Password</label> */}

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
                    <a href="/Forgetpassword">Forgot Password?</a>
                  </div>

                  {/* Submit */}
              
                    <input
                    type="submit"
                    value="Login"
                    className="primary-cta"
                  />
                  
                </form>

    

                {/* Signup Link */}
                <div className="ac-switch">
                  New here? <a href="/signup"><u>Create an Account</u></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
{/* <!-- Modal --> */}
<div className="modal fade" id="sucessModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content all-pop-bg">
      <div className="modal-body">
        <div className="login-succ-in">
            <h3>Login Successful</h3>
            <p>Welcome to <span>Styapan</span></p>
            <form>
              <button type="submit" className="primary-cta" data-bs-dismiss="modal" aria-label="Close">Get Started
            
          </button></form></div>
      </div>
      
    </div>
  </div>
</div>
  
    </section>
  );
}

