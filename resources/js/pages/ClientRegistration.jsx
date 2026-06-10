
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";
import { API_URL } from "../src/config";

const ROLES = [
  { value: "admin",          label: "Admin" },
  { value: "allocator",      label: "Allocator" },
  { value: "verifier",       label: "Verifier" },
  { value: "check_manager",  label: "Check Manager" },
  { value: "report_writing", label: "Report Writing Specialist" },
  { value: "pvt_qc",         label: "PVT / QC" },
  { value: "client",         label: "Client" },
];

export default function ClientRegistration() {
  const [form, setForm]                 = useState({ name: "", email: "", password: "", confirm: "", role: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError]               = useState("");
  const [loading, setLoading]           = useState(false);
  const navigate = useNavigate();

  const set = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const validate = () => {
    if (!form.name.trim())     return "Full name is required.";
    if (!form.email.trim())    return "Email is required.";
    if (!form.role)            return "Please select a role.";
    if (form.password.length < 8) return "Password must be at least 8 characters.";
    if (form.password !== form.confirm) return "Passwords do not match.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }

    setError("");
    setLoading(true);

    try {
      const res  = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:     form.name.trim(),
          email:    form.email.trim(),
          password: form.password,
          role:     form.role,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      // Auto-login after signup
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user",  JSON.stringify(data.user));
      }

      navigate("/dashboard");

    } catch {
      setError("Unable to connect to server. Please try again.");
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
              <img src="/images/login/login-left.png" alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="login-wrp">

              <div className="log-in-logo">
                <img src="/images/login/logo.png" alt="logo" />
              </div>

              <div className="log-in-inner-wrp">
                <h2>Create Account</h2>
                <p>Verification Management System</p>

                <form onSubmit={handleSubmit}>

                  {/* Enter Company Name */}
                  <div className="login-pst">
                    <div className="input-grp">
                      <input
                        type="text"
                        placeholder="EnterCompany Name"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Enter GSTIN */}
                  <div className="login-pst">
                    <div className="input-grp">
                      <input
                        type="text"
                        placeholder="Enter GSTIN"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Primary Contact */}
                  <div className="login-pst">
                    <div className="input-grp">
                      <input
                        type="text"
                        placeholder="Enter Primary Contact"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                 

                  {error && (
                    <p style={{ color: "#dc2626", fontSize: "0.82rem", marginBottom: "10px" }}>
                      {error}
                    </p>
                  )}

                  <input
                    type="submit"
                    value={loading ? "Creating account…" : "Create Account"}
                    className="primary-cta"
                    disabled={loading}
                    style={{ width: "100%", marginTop: "8px", cursor: loading ? "not-allowed" : "pointer" }}
                  />

                </form>

                <div className="ac-switch" style={{
                  marginTop: "20px", textAlign: "center",
                  fontSize: "0.85rem", color: "#64748b",
                }}>
                  Already have an account?{" "}
                  <a href="/" style={{ color: "#2b3b8c", fontWeight: 700, textDecoration: "underline" }}>
                    Sign In
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
