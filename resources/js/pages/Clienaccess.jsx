import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { API_URL } from "../src/config";

// ── Landing page for admin-generated client share links.
//    URL shape: /ClientAccess?token=<sanctum-token>
//
//    Verifies the token against /api/me, then signs the client in the
//    same way a normal password login would (token + user saved to
//    localStorage), and drops them straight onto Add Case so they can
//    start uploading cases immediately. ────────────────────────────
export default function ClientAccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");

    if (!token) {
      setError("This link is missing its access token.");
      return;
    }

    fetch(`${API_URL}/api/me`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then(r => {
        if (!r.ok) throw new Error("This link has expired or is no longer valid. Please ask for a new one.");
        return r.json();
      })
      .then(data => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/AddCase", { replace: true });
      })
      .catch(err => setError(err.message || "Something went wrong. Please ask for a new link."));
  }, [location.search, navigate]);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#f4f6fb", padding: "20px",
    }}>
      <div style={{
        background: "#fff", borderRadius: "16px", padding: "40px", maxWidth: "420px", width: "100%",
        textAlign: "center", boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
      }}>
        {error ? (
          <>
            <div style={{
              width: "56px", height: "56px", background: "#fff5f5", border: "2px solid #fca5a5",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 16px", fontSize: "24px", color: "#dc2626",
            }}>!</div>
            <h2 style={{ color: "#1e293b", fontSize: "1.1rem", marginBottom: "8px" }}>Link not valid</h2>
            <p style={{ color: "#64748b", fontSize: "14px" }}>{error}</p>
          </>
        ) : (
          <>
            <div style={{
              width: "56px", height: "56px", border: "3px solid #e2e8f0", borderTopColor: "#2b3b8c",
              borderRadius: "50%", margin: "0 auto 16px", animation: "spin 0.8s linear infinite",
            }} />
            <h2 style={{ color: "#1e293b", fontSize: "1.1rem", marginBottom: "8px" }}>Signing you in…</h2>
            <p style={{ color: "#64748b", fontSize: "14px" }}>Taking you to Add Case.</p>
          </>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}