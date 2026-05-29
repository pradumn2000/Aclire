// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import "../auth/custom.js";

// export default function VerifyAccount() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const navigate = useNavigate();
//   const inputRefs = useRef([]);

//   const email = localStorage.getItem("reset_email") || "example@gmail.com";

//   const handleInputChange = (index, value) => {
//     if (!/^\d*$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 3) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace") {
//       if (otp[index] === "" && index > 0) {
//         // Move to previous input if current is empty
//         inputRefs.current[index - 1]?.focus();
//       } else {
//         // Clear current input
//         const newOtp = [...otp];
//         newOtp[index] = "";
//         setOtp(newOtp);
//       }
//     }
//   };

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     const otpString = otp.join("");

//     try {
//       const res = await fetch("http://localhost:8000/api/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//         body: JSON.stringify({ email, otp: otpString }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.message || "Invalid OTP");
//         return;
//       }

//       alert("OTP verified successfully!");
//       navigate("/ResetPassword");
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section className="log-in">
//       <div className="container">
//         <div className="row">

//           <div className="col-lg-6">
//             <div className="login-left-img">
//               <img src="/images/login/login-left.png" alt="login" />
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <div className="login-wrp">

//               <div className="log-in-logo">
//                 <img src="/images/login/logo.png" alt="logo" />
//               </div>

//               <div className="log-in-inner-wrp">
//                 <h2>Verify Your Account</h2>
//                 <p>
//                   Please enter the 6 digit code sent to <br />
//                   <span>{email}</span>
//                 </p>

//                 <form onSubmit={handleVerify}>
//                   <div className="login-pst">
//                     <div className="input-multigrp">
//                       {otp.map((digit, index) => (
//                         <input
//                           key={index}
//                           ref={(el) => (inputRefs.current[index] = el)}
//                           value={digit}
//                           type="text"
//                           maxLength="1"
//                           onChange={(e) => handleInputChange(index, e.target.value)}
//                           onKeyDown={(e) => handleKeyDown(index, e)}
//                           className="input-field-code-in inputs"
//                           autoFocus={index === 0}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                  <a href="/Confrimpassword"> <input
//                     type="submit"
//                     value="Verify OTP"
//                     className="primary-cta"
//                   /></a>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../auth/custom.js";

export default function VerifyAccount() {
  const [otp, setOtp] = useState(["", "", "", ""]);  // 4 digits ✅
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const email = localStorage.getItem("reset_email") || "example@gmail.com";

  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const otpString = otp.join("");

    if (otpString.length < 4) {
      alert("Please enter the complete 4-digit OTP");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, otp: otpString }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid OTP");
        return;
      }

      alert("OTP verified successfully!");
      navigate("/ResetPassword");
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
              <img src="/images/login/login-left.png" alt="login" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login-wrp">
              <div className="log-in-logo">
                <img src="/images/login/logo.png" alt="logo" />
              </div>
              <div className="log-in-inner-wrp">
                <h2>Verify Your Account</h2>
                {/* ✅ Fixed: "4 digit" not "6 digit" */}
                <p>
                  Please enter the 4 digit code sent to <br />
                  <span>{email}</span>
                </p>

                <form onSubmit={handleVerify}>
                  <div className="login-pst">
                    <div className="input-multigrp">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          value={digit}
                          type="text"
                          maxLength="1"
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          className="input-field-code-in inputs"
                          autoFocus={index === 0}
                        />
                      ))}
                    </div>
                  </div>
                  {/* ✅ No wrapping <a> tag — form onSubmit handles navigation */}
                  <input
                    type="submit"
                    value={loading ? "Verifying..." : "Verify OTP"}
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