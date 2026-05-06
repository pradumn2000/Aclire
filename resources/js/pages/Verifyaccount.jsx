
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
    <form onSubmit={handleVerify}>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button type="submit">Verify OTP</button>
    </form>
  );
}