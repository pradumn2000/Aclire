import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { API_URL } from "../src/config";

export default function PendingRegistrations() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [regs, setRegs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRegs = () => {
    setLoading(true);
    fetch(`${API_URL}/api/client-registrations?status=pending`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then(r => r.json())
      .then(d => setRegs(d.registrations || []))
      .finally(() => setLoading(false));
  };

  useEffect(fetchRegs, []);

  const reject = async (id) => {
    if (!window.confirm("Reject this registration?")) return;
    await fetch(`${API_URL}/api/client-registrations/${id}/reject`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    });
    fetchRegs();
  };

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">
            <h2 className="ac-page-title">Pending Registrations</h2>

            {loading ? (
              <p style={{ padding: "30px", color: "#94a3b8" }}>Loading…</p>
            ) : regs.length === 0 ? (
              <p style={{ padding: "30px", color: "#94a3b8" }}>No pending registrations.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
                {regs.map(r => (
                  <div key={r.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px",
                    padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <strong style={{ color: "#1e293b" }}>{r.company_name}</strong>
                      <div style={{ fontSize: "13px", color: "#64748b" }}>
                        {r.contact_email} · {r.primary_contact}
                        {r.agreed_checks?.length ? ` · requested: ${r.agreed_checks.join(", ")}` : ""}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button className="primary-cta"
                        onClick={() => navigate(`/AddClient?registrationId=${r.id}`)}>
                        Review
                      </button>
                      <button className="secondary-cta import" onClick={() => reject(r.id)}>Reject</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
}