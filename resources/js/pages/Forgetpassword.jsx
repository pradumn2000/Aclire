// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../../css/style.css";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Send code to:", email);
//   };

//   return (
//     <section className="log-in">
//       <div className="container">
//         <div className="row">
//          <div className="col-lg-6">
//     <div className="login-left-img">
//       <img src="/images/login/login-left.png" alt="logo" />
//     </div>
//         </div>
//           <div className="col-lg-6">

//             <div className="login-wrp">

//               {/* Logo */}
//               <div className="log-in-logo">
//                 <img src="/images/login/logo.png" alt="logo" />
//               </div>

//               <div className="log-in-inner-wrp">

//                 {/* Back Button */}
                
//                 <div className="password-icon">
//                   <a href="/"><img src="/images/login/left-icon.svg"></img></a>
//                 <h2>Forgot Password?</h2>
//                 </div>
//                 <p>Please enter your Email to get a verification code</p>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit}>
//                   <div className="login-pst">
//                     <div className="input-grp">
//                       <input
//                         type="email"
//                         placeholder="Enter Email/Phone"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <Link to="/Verifyaccount">
//    <input
//                     type="submit"
//                     value="Send Code"
//                     className="primary-cta"
//                   />
// </Link>
                
//                 </form>

//                 {/* Switch */}
//                 <div className="ac-switch">
//                   Remembered your password?{" "}
//                   <Link to="/">
//                     <u>Log In</u>
//                   </Link>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/style.css";
import { API_URL } from "../src/config"

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const res = await fetch("http://localhost:8000/api/forgot-password",
      const res = await fetch(`${API_URL}/api/forgot-password`,  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to send OTP");
        return;
      }

      // Save email so VerifyAccount can read it
      localStorage.setItem("reset_email", email);
      navigate("/Verifyaccount");
    } catch (error) {
      alert("Something went wrong. Please try again.");
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
                <div className="password-icon">
                  <a href="/"><img src="/images/login/left-icon.svg" alt="back" /></a>
                  <h2>Forgot Password?</h2>
                </div>
                <p>Please enter your Email to get a verification code</p>

                <form onSubmit={handleSubmit}>
                  <div className="login-pst">
                    <div className="input-grp">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {/* ✅ Button inside form, no wrapping <Link> */}
                  <input
                    type="submit"
                    value={loading ? "Sending..." : "Send Code"}
                    className="primary-cta"
                    disabled={loading}
                  />
                </form>

                <div className="ac-switch">
                  Remembered your password?{" "}
                  <Link to="/"><u>Log In</u></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}