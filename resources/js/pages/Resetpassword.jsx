import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("reset_email");

  const handleReset = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: confirm,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Reset failed ❌");
      return;
    }

    alert("Password reset successful ✅");

    localStorage.removeItem("reset_email");

    navigate("/");
  };

  return (
    <form onSubmit={handleReset}>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
}