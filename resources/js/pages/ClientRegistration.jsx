

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { API_URL } from "../src/config";

// const CHECK_OPTIONS = [
//   { key: "employment", label: "Employment" },
//   { key: "education",  label: "Education" },
//   { key: "address",    label: "Address" },
//   { key: "database",   label: "Database" },
//   { key: "criminal",   label: "Criminal" },
//   { key: "drug_test",  label: "Drug Test" },
//   { key: "courtroom",  label: "Courtroom" },
// ];

// const BILLING_OPTIONS = [
//   { key: "prepaid_client",    label: "Prepaid — Client",    desc: "Pay upfront before cases" },
//   { key: "prepaid_candidate", label: "Prepaid — Candidate", desc: "Candidate pays directly" },
//   { key: "postpaid_client",   label: "Postpaid — Client",   desc: "Pay at month end" },
// ];

// const EMPTY = {
//   companyName:    "",
//   address:        "",
//   gstin:          "",
//   primaryContact: "",
//   contactPhone:   "",
//   contactEmail:   "",
//   password:       "",
//   confirmPass:    "",
//   billingMode:    "postpaid_client",
//   agreedChecks:   [],
// };

// export default function ClientRegistration() {
//   const navigate = useNavigate();
//   const [form, setForm]       = useState(EMPTY);
//   const [error, setError]     = useState("");
//   const [loading, setLoading] = useState(false);
//   const [step, setStep]       = useState(1); // 1=company info, 2=billing+checks, 3=success

//   const set = (f, v) => setForm((p) => ({ ...p, [f]: v }));

//   const toggleCheck = (key) =>
//     setForm((p) => {
//       const has = p.agreedChecks.includes(key);
//       return {
//         ...p,
//         agreedChecks: has ? p.agreedChecks.filter((c) => c !== key) : [...p.agreedChecks, key],
//       };
//     });

//   const validateStep1 = () => {
//     if (!form.companyName.trim())    return "Company name is required.";
//     if (!form.address.trim())        return "Address is required.";
//     if (!form.gstin.trim())          return "GSTIN is required.";
//     if (!form.primaryContact.trim()) return "Primary contact name is required.";
//     if (!form.contactPhone.trim())   return "Contact phone is required.";
//     if (!form.contactEmail.trim())   return "Email is required.";
//     if (form.password.length < 8)    return "Password must be at least 8 characters.";
//     if (form.password !== form.confirmPass) return "Passwords do not match.";
//     return null;
//   };

//   const validateStep2 = () => {
//     if (form.agreedChecks.length === 0) return "Select at least one check type.";
//     return null;
//   };

//   const handleStep1 = (e) => {
//     e.preventDefault();
//     const err = validateStep1();
//     if (err) { setError(err); return; }
//     setError("");
//     setStep(2);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const err = validateStep2();
//     if (err) { setError(err); return; }
//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch(`${API_URL}/api/clients/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify({
//           companyName:    form.companyName.trim(),
//           address:        form.address.trim(),
//           gstin:          form.gstin.trim(),
//           primaryContact: form.primaryContact.trim(),
//           contactPhone:   form.contactPhone.trim(),
//           contactEmail:   form.contactEmail.trim(),
//           password:       form.password,
//           billingMode:    form.billingMode,
//           agreedChecks:   form.agreedChecks,
//           checkRates:     {}, // rate card not collected at registration
//         }),
//       });

//       const data = await res.json().catch(() => ({}));

//       if (res.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));
//         setStep(3);
//         return;
//       }

//       // Real validation/server error — surface it instead of faking success.
//       const fieldErrors = data.errors
//         ? Object.values(data.errors).flat().join(" ")
//         : null;
//       setError(fieldErrors || data.message || `Registration failed (${res.status}).`);

//     } catch (networkErr) {
//       // Only reached on genuine network failure (server unreachable, CORS,
//       // DNS, etc.) — not on 4xx/5xx responses, which are handled above.
//       setError("Could not reach the server. Please check your connection and try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── Success screen ─────────────────────────────────────────────────────
//   if (step === 3) {
//     return (
//       <section className="log-in">
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px" }}>
//           <div style={{ background: "#1e2761", borderRadius: "20px", padding: "48px 40px", textAlign: "center", maxWidth: "480px", width: "100%" }}>
//             <div style={{ width: "64px", height: "64px", background: "#02c39a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "28px" }}>✓</div>
//             <h2 style={{ color: "#fff", fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>Registration Successful!</h2>
//             <p style={{ color: "#cad2e1", fontSize: "14px", marginBottom: "24px" }}>
//               Welcome, <strong style={{ color: "#02c39a" }}>{form.companyName}</strong>.<br />
//               Your client account is now active.
//             </p>
//             <div style={{ background: "#111528", borderRadius: "10px", padding: "16px", marginBottom: "24px", textAlign: "left" }}>
//               {[
//                 ["Address",  form.address],
//                 ["GSTIN",    form.gstin],
//                 ["Contact",  form.primaryContact],
//                 ["Billing",  BILLING_OPTIONS.find(b => b.key === form.billingMode)?.label],
//                 ["Checks",   form.agreedChecks.map(c => CHECK_OPTIONS.find(o => o.key === c)?.label).join(", ")],
//               ].map(([k, v]) => (
//                 <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #1e2761", fontSize: "13px" }}>
//                   <span style={{ color: "#94a3b8" }}>{k}</span>
//                   <span style={{ color: "#fff", fontWeight: 600 }}>{v}</span>
//                 </div>
//               ))}
//             </div>
//             <button className="primary-cta" style={{ width: "100%" }} onClick={() => navigate("/Client")}>
//               Go to Client Portal →
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="log-in" style={{ background: "#f0f4ff" }}>
//       <div className="container">
//         <div className="row align-items-center" style={{ minHeight: "100vh" }}>

//           {/* Left panel */}
//           <div className="col-lg-5">
//             <div style={{ padding: "40px 20px" }}>
//               <div style={{ marginBottom: "24px" }}>
//                 <img src="/images/login/logo.png" alt="logo" style={{ width: "180px", height: "60px", objectFit: "contain", borderRadius: "10px" }} />
//               </div>
//               <h1 style={{ color: "#1e2761", fontSize: "28px", fontWeight: 800, lineHeight: 1.3, marginBottom: "16px" }}>
//                 Register Your Company
//               </h1>
//               <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.6, marginBottom: "32px" }}>
//                 Set up your BGV client account to start submitting verification cases, track progress in real-time, and download reports.
//               </p>

//               {/* Step indicator */}
//               <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "32px" }}>
//                 {[1, 2].map((s) => (
//                   <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                     <div style={{
//                       width: "32px", height: "32px", borderRadius: "50%",
//                       background: step >= s ? "#1e2761" : "#e2e8f0",
//                       color: step >= s ? "#fff" : "#94a3b8",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       fontWeight: 700, fontSize: "13px",
//                     }}>
//                       {step > s ? "✓" : s}
//                     </div>
//                     <span style={{ fontSize: "13px", color: step >= s ? "#1e2761" : "#94a3b8", fontWeight: step >= s ? 600 : 400 }}>
//                       {s === 1 ? "Company Info" : "Billing & Checks"}
//                     </span>
//                     {s < 2 && <span style={{ color: "#cbd5e1", margin: "0 4px" }}>→</span>}
//                   </div>
//                 ))}
//               </div>

//               <p style={{ fontSize: "13px", color: "#64748b" }}>
//                 Already registered?{" "}
//                 <Link to="/" style={{ color: "#1e2761", fontWeight: 700 }}>Sign In</Link>
//               </p>
//             </div>
//           </div>

//           {/* Form panel */}
//           <div className="col-lg-7">
//             <div style={{ background: "#1e2761", borderRadius: "20px", padding: "40px", margin: "20px 0" }}>

//               {/* ── STEP 1: Company Info ──────────────────────────────── */}
//               {step === 1 && (
//                 <>
//                   <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>
//                     Company Information
//                   </h3>
//                   <form onSubmit={handleStep1} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

//                     <FormRow label={<>Company Name <span className="form-required">*</span></>}>
//                       <input
//                         type="text"
//                         placeholder="e.g. Deloitte India Pvt Ltd"
//                         value={form.companyName}
//                         onChange={(e) => set("companyName", e.target.value)}
//                         required
//                         style={inputStyle}
//                       />
//                     </FormRow>

//                     <FormRow label={<>Address <span className="form-required">*</span></>}>
//                       <input
//                         type="text"
//                         placeholder="Registered office address"
//                         value={form.address}
//                         onChange={(e) => set("address", e.target.value)}
//                         required
//                         style={inputStyle}
//                       />
//                     </FormRow>

//                     <FormRow label={<>GSTIN <span className="form-required">*</span></>}>
//                       <input
//                         type="text"
//                         placeholder="e.g. 27AABCD1234F1Z5"
//                         value={form.gstin}
//                         onChange={(e) => set("gstin", e.target.value.toUpperCase())}
//                         required
//                         maxLength={15}
//                         style={inputStyle}
//                       />
//                     </FormRow>

//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
//                       <FormRow label={<>Primary Contact Name <span className="form-required">*</span></>}>
//                         <input
//                           type="text"
//                           placeholder="Full name"
//                           value={form.primaryContact}
//                           onChange={(e) => set("primaryContact", e.target.value)}
//                           required
//                           style={inputStyle}
//                         />
//                       </FormRow>

//                       <FormRow label={<>Contact Phone <span className="form-required">*</span></>}>
//                         <input
//                           type="text"
//                           placeholder="Enter 12 digit mobile number"
//                           value={form.contactPhone}
//                           onChange={(e) => {
//                             const value = e.target.value.replace(/\D/g, "").slice(0, 12);
//                             set("contactPhone", value);
//                           }}
//                           maxLength={12}
//                           style={inputStyle}
//                           required
//                         />
//                       </FormRow>
//                     </div>

//                     <FormRow label={<>Company Email <span className="form-required">*</span></>}>
//                       <input
//                         type="email"
//                         placeholder="hr@yourcompany.com"
//                         value={form.contactEmail}
//                         onChange={(e) => set("contactEmail", e.target.value)}
//                         required
//                         style={inputStyle}
//                       />
//                     </FormRow>

//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
//                       <FormRow label={<>Password <span className="form-required">*</span></>}>
//                         <input
//                           type="password"
//                           placeholder="Min. 8 characters"
//                           value={form.password}
//                           onChange={(e) => set("password", e.target.value)}
//                           required
//                           minLength={8}
//                           style={inputStyle}
//                         />
//                       </FormRow>
//                       <FormRow label={<>Confirm Password <span className="form-required">*</span></>}>
//                         <input
//                           type="password"
//                           placeholder="Repeat password"
//                           value={form.confirmPass}
//                           onChange={(e) => set("confirmPass", e.target.value)}
//                           required
//                           style={inputStyle}
//                         />
//                       </FormRow>
//                     </div>

//                     {error && <p style={{ color: "#ff6b6b", fontSize: "13px" }}>⚠ {error}</p>}

//                     <button type="submit" className="primary-cta" style={{ width: "100%", marginTop: "8px" }}>
//                       Next: Billing & Checks →
//                     </button>
//                   </form>
//                 </>
//               )}

//               {/* ── STEP 2: Billing + Check Types ────────────────────── */}
//               {step === 2 && (
//                 <>
//                   <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
//                     <button
//                       type="button"
//                       onClick={() => { setStep(1); setError(""); }}
//                       style={{ background: "none", border: "none", color: "#02c39a", cursor: "pointer", fontSize: "14px", fontWeight: 600 }}
//                     >
//                       ← Back
//                     </button>
//                     <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, margin: 0 }}>
//                       Billing Mode & Check Types
//                     </h3>
//                   </div>

//                   <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

//                     {/* Billing mode */}
//                     <div>
//                       <label style={labelStyle}>Billing Mode *</label>
//                       <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
//                         {BILLING_OPTIONS.map((b) => (
//                           <label key={b.key} style={{
//                             display: "flex", alignItems: "center", gap: "12px",
//                             padding: "12px 16px", borderRadius: "10px", cursor: "pointer",
//                             border: form.billingMode === b.key ? "2px solid #02c39a" : "2px solid #3a4faa",
//                             background: form.billingMode === b.key ? "rgba(2,195,154,0.1)" : "transparent",
//                             transition: "all .15s",
//                           }}>
//                             <input
//                               type="radio"
//                               name="billingMode"
//                               value={b.key}
//                               checked={form.billingMode === b.key}
//                               onChange={() => set("billingMode", b.key)}
//                               style={{ accentColor: "#02c39a" }}
//                             />
//                             <div>
//                               <div style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>{b.label}</div>
//                               <div style={{ color: "#94a3b8", fontSize: "12px" }}>{b.desc}</div>
//                             </div>
//                           </label>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Check types */}
//                     <div>
//                       <label style={labelStyle}>
//                         Agreed Check Types *
//                         <span style={{ color: "#94a3b8", fontWeight: 400, marginLeft: "8px" }}>(select all that apply)</span>
//                       </label>
//                       <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
//                         {CHECK_OPTIONS.map((c) => {
//                           const active = form.agreedChecks.includes(c.key);
//                           return (
//                             <button
//                               key={c.key}
//                               type="button"
//                               onClick={() => toggleCheck(c.key)}
//                               style={{
//                                 padding: "8px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 600,
//                                 cursor: "pointer", border: "2px solid",
//                                 borderColor: active ? "#02c39a" : "#3a4faa",
//                                 background: active ? "rgba(2,195,154,0.15)" : "transparent",
//                                 color: active ? "#02c39a" : "#cad2e1",
//                                 transition: "all .15s",
//                               }}
//                             >
//                               {active ? "✓ " : ""}{c.label}
//                             </button>
//                           );
//                         })}
//                       </div>
//                     </div>

//                     {error && <p style={{ color: "#ff6b6b", fontSize: "13px" }}>⚠ {error}</p>}

//                     <button
//                       type="submit"
//                       className="primary-cta"
//                       disabled={loading}
//                       style={{ width: "100%", marginTop: "8px" }}
//                     >
//                       {loading ? "Registering…" : "Register Company →"}
//                     </button>
//                   </form>
//                 </>
//               )}

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// // ── Sub-components ────────────────────────────────────────────────────────
// function FormRow({ label, children }) {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
//       <label style={labelStyle}>{label}</label>
//       {children}
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%", padding: "10px 14px", borderRadius: "10px",
//   border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)",
//   color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box",
// };

// const labelStyle = {
//   color: "#cad2e1", fontSize: "12px", fontWeight: 700,
//   textTransform: "uppercase", letterSpacing: "0.05em",
// };


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "../src/config";

const CHECK_OPTIONS = [
  { key: "employment", label: "Employment" },
  { key: "education",  label: "Education" },
  { key: "address",    label: "Address" },
  { key: "database",   label: "Database" },
  { key: "criminal",   label: "Criminal" },
  { key: "drug_test",  label: "Drug Test" },
  { key: "courtroom",  label: "Courtroom" },
];

const BILLING_OPTIONS = [
  { key: "prepaid_client",    label: "Prepaid — Client",    desc: "Pay upfront before cases" },
  { key: "prepaid_candidate", label: "Prepaid — Candidate", desc: "Candidate pays directly" },
  { key: "postpaid_client",   label: "Postpaid — Client",   desc: "Pay at month end" },
];

const EMPTY = {
  companyName:    "",
  address:        "",
  gstin:          "",
  primaryContact: "",
  contactPhone:   "",
  contactEmail:   "",
  password:       "",
  confirmPass:    "",
  billingMode:    "postpaid_client",
  agreedChecks:   [],
};

export default function ClientRegistration() {
  const navigate = useNavigate();
  const [form, setForm]       = useState(EMPTY);
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep]       = useState(1); // 1=company info, 2=billing+checks, 3=success

  const set = (f, v) => setForm((p) => ({ ...p, [f]: v }));

  const toggleCheck = (key) =>
    setForm((p) => {
      const has = p.agreedChecks.includes(key);
      return {
        ...p,
        agreedChecks: has ? p.agreedChecks.filter((c) => c !== key) : [...p.agreedChecks, key],
      };
    });

  const validateStep1 = () => {
    if (!form.companyName.trim())    return "Company name is required.";
    if (!form.address.trim())        return "Address is required.";
    if (!form.gstin.trim())          return "GSTIN is required.";
    if (!form.primaryContact.trim()) return "Primary contact name is required.";
    if (!form.contactPhone.trim())   return "Contact phone is required.";
    if (!form.contactEmail.trim())   return "Email is required.";
    if (form.password.length < 8)    return "Password must be at least 8 characters.";
    if (form.password !== form.confirmPass) return "Passwords do not match.";
    return null;
  };

  const validateStep2 = () => {
    if (form.agreedChecks.length === 0) return "Select at least one check type.";
    return null;
  };

  const handleStep1 = (e) => {
    e.preventDefault();
    const err = validateStep1();
    if (err) { setError(err); return; }
    setError("");
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateStep2();
    if (err) { setError(err); return; }
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/clients/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          companyName:    form.companyName.trim(),
          address:        form.address.trim(),
          gstin:          form.gstin.trim(),
          primaryContact: form.primaryContact.trim(),
          contactPhone:   form.contactPhone.trim(),
          contactEmail:   form.contactEmail.trim(),
          password:       form.password,
          billingMode:    form.billingMode,
          agreedChecks:   form.agreedChecks,
          checkRates:     {}, // rate card not collected at registration
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setStep(3);
        return;
      }

      // Real validation/server error — surface it instead of faking success.
      const fieldErrors = data.errors
        ? Object.values(data.errors).flat().join(" ")
        : null;
      setError(fieldErrors || data.message || `Registration failed (${res.status}).`);

    } catch (networkErr) {
      // Only reached on genuine network failure (server unreachable, CORS,
      // DNS, etc.) — not on 4xx/5xx responses, which are handled above.
      setError("Could not reach the server. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Success screen ─────────────────────────────────────────────────────
  if (step === 3) {
    return (
      <section className="log-in">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px" }}>
          <div style={{ background: "#1e2761", borderRadius: "20px", padding: "48px 40px", textAlign: "center", maxWidth: "480px", width: "100%" }}>
            <div style={{ width: "64px", height: "64px", background: "#02c39a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "28px" }}>✓</div>
            <h2 style={{ color: "#fff", fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>Registration Successful!</h2>
            <p style={{ color: "#cad2e1", fontSize: "14px", marginBottom: "24px" }}>
              Welcome, <strong style={{ color: "#02c39a" }}>{form.companyName}</strong>.<br />
              Your client account is now active.
            </p>
            <div style={{ background: "#111528", borderRadius: "10px", padding: "16px", marginBottom: "24px", textAlign: "left" }}>
              {[
                ["Address",  form.address],
                ["GSTIN",    form.gstin],
                ["Contact",  form.primaryContact],
                ["Billing",  BILLING_OPTIONS.find(b => b.key === form.billingMode)?.label],
                ["Checks",   form.agreedChecks.map(c => CHECK_OPTIONS.find(o => o.key === c)?.label).join(", ")],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #1e2761", fontSize: "13px" }}>
                  <span style={{ color: "#94a3b8" }}>{k}</span>
                  <span style={{ color: "#fff", fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
            <button className="primary-cta" style={{ width: "100%" }} onClick={() => navigate("/Client")}>
              Go to Client Portal →
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="log-in" style={{ background: "#f0f4ff" }}>
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "100vh" }}>

          {/* Left panel */}
          <div className="col-lg-5">
            <div style={{ padding: "40px 20px" }}>
              <div style={{ marginBottom: "24px" }}>
                <img src="/images/login/logo.png" alt="logo" style={{ width: "180px", height: "60px", objectFit: "contain", borderRadius: "10px" }} />
              </div>
              <h1 style={{ color: "#1e2761", fontSize: "28px", fontWeight: 800, lineHeight: 1.3, marginBottom: "16px" }}>
                Register Your Company
              </h1>
              <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.6, marginBottom: "32px" }}>
                Set up your BGV client account to start submitting verification cases, track progress in real-time, and download reports.
              </p>

              {/* Step indicator */}
              <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "32px" }}>
                {[1, 2].map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      background: step >= s ? "#1e2761" : "#e2e8f0",
                      color: step >= s ? "#fff" : "#94a3b8",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: "13px",
                    }}>
                      {step > s ? "✓" : s}
                    </div>
                    <span style={{ fontSize: "13px", color: step >= s ? "#1e2761" : "#94a3b8", fontWeight: step >= s ? 600 : 400 }}>
                      {s === 1 ? "Company Info" : "Billing & Checks"}
                    </span>
                    {s < 2 && <span style={{ color: "#cbd5e1", margin: "0 4px" }}>→</span>}
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "13px", color: "#64748b" }}>
                Already registered?{" "}
                <Link to="/" style={{ color: "#1e2761", fontWeight: 700 }}>Sign In</Link>
              </p>
            </div>
          </div>

          {/* Form panel */}
          <div className="col-lg-7">
            <div style={{ background: "#1e2761", borderRadius: "20px", padding: "40px", margin: "20px 0" }}>

              {/* ── STEP 1: Company Info ──────────────────────────────── */}
              {step === 1 && (
                <>
                  <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>
                    Company Information
                  </h3>
                  <form onSubmit={handleStep1} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                    <FormRow label={<>Company Name <span className="form-required">*</span></>}>
                      <input
                        type="text"
                        placeholder="e.g. Deloitte India Pvt Ltd"
                        value={form.companyName}
                        onChange={(e) => set("companyName", e.target.value)}
                        required
                        style={inputStyle}
                      />
                    </FormRow>

                    <FormRow label={<>Address <span className="form-required">*</span></>}>
                      <input
                        type="text"
                        placeholder="Registered office address"
                        value={form.address}
                        onChange={(e) => set("address", e.target.value)}
                        required
                        style={inputStyle}
                      />
                    </FormRow>

                    <FormRow label={<>GSTIN <span className="form-required">*</span></>}>
                      <input
                        type="text"
                        placeholder="e.g. 27AABCD1234F1Z5"
                        value={form.gstin}
                        onChange={(e) => set("gstin", e.target.value.toUpperCase())}
                        required
                        maxLength={15}
                        style={inputStyle}
                      />
                    </FormRow>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <FormRow label={<>Primary Contact Name <span className="form-required">*</span></>}>
                        <input
                          type="text"
                          placeholder="Full name"
                          value={form.primaryContact}
                          onChange={(e) => set("primaryContact", e.target.value)}
                          required
                          style={inputStyle}
                        />
                      </FormRow>

                      <FormRow label={<>Contact Phone <span className="form-required">*</span></>}>
                        <input
                          type="text"
                          placeholder="Enter 12 digit mobile number"
                          value={form.contactPhone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "").slice(0, 12);
                            set("contactPhone", value);
                          }}
                          maxLength={12}
                          style={inputStyle}
                          required
                        />
                      </FormRow>
                    </div>

                    <FormRow label={<>Company Email <span className="form-required">*</span></>}>
                      <input
                        type="email"
                        placeholder="hr@yourcompany.com"
                        value={form.contactEmail}
                        onChange={(e) => set("contactEmail", e.target.value)}
                        required
                        style={inputStyle}
                      />
                    </FormRow>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <FormRow label={<>Password <span className="form-required">*</span></>}>
                        <input
                          type="password"
                          placeholder="Min. 8 characters"
                          value={form.password}
                          onChange={(e) => set("password", e.target.value)}
                          required
                          minLength={8}
                          style={inputStyle}
                        />
                      </FormRow>
                      <FormRow label={<>Confirm Password <span className="form-required">*</span></>}>
                        <input
                          type="password"
                          placeholder="Repeat password"
                          value={form.confirmPass}
                          onChange={(e) => set("confirmPass", e.target.value)}
                          required
                          style={inputStyle}
                        />
                      </FormRow>
                    </div>

                    {error && <p style={{ color: "#ff6b6b", fontSize: "13px" }}>⚠ {error}</p>}

                    <button type="submit" className="primary-cta" style={{ width: "100%", marginTop: "8px" }}>
                      Next: Billing & Checks →
                    </button>
                  </form>
                </>
              )}

              {/* ── STEP 2: Billing + Check Types ────────────────────── */}
              {step === 2 && (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <button
                      type="button"
                      onClick={() => { setStep(1); setError(""); }}
                      style={{ background: "none", border: "none", color: "#02c39a", cursor: "pointer", fontSize: "14px", fontWeight: 600 }}
                    >
                      ← Back
                    </button>
                    <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, margin: 0 }}>
                      Billing Mode & Check Types
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                    {/* Billing mode */}
                    <div>
                      <label style={labelStyle}>Billing Mode *</label>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                        {BILLING_OPTIONS.map((b) => (
                          <label key={b.key} style={{
                            display: "flex", alignItems: "center", gap: "12px",
                            padding: "12px 16px", borderRadius: "10px", cursor: "pointer",
                            border: form.billingMode === b.key ? "2px solid #02c39a" : "2px solid #3a4faa",
                            background: form.billingMode === b.key ? "rgba(2,195,154,0.1)" : "transparent",
                            transition: "all .15s",
                          }}>
                            <input
                              type="radio"
                              name="billingMode"
                              value={b.key}
                              checked={form.billingMode === b.key}
                              onChange={() => set("billingMode", b.key)}
                              style={{ accentColor: "#02c39a" }}
                            />
                            <div>
                              <div style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>{b.label}</div>
                              <div style={{ color: "#94a3b8", fontSize: "12px" }}>{b.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Check types */}
                    <div>
                      <label style={labelStyle}>
                        Agreed Check Types *
                        <span style={{ color: "#94a3b8", fontWeight: 400, marginLeft: "8px" }}>(select all that apply)</span>
                      </label>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                        {CHECK_OPTIONS.map((c) => {
                          const active = form.agreedChecks.includes(c.key);
                          return (
                            <button
                              key={c.key}
                              type="button"
                              onClick={() => toggleCheck(c.key)}
                              style={{
                                padding: "8px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 600,
                                cursor: "pointer", border: "2px solid",
                                borderColor: active ? "#02c39a" : "#3a4faa",
                                background: active ? "rgba(2,195,154,0.15)" : "transparent",
                                color: active ? "#02c39a" : "#cad2e1",
                                transition: "all .15s",
                              }}
                            >
                              {active ? "✓ " : ""}{c.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {error && <p style={{ color: "#ff6b6b", fontSize: "13px" }}>⚠ {error}</p>}

                    <button
                      type="submit"
                      className="primary-cta"
                      disabled={loading}
                      style={{ width: "100%", marginTop: "8px" }}
                    >
                      {loading ? "Registering…" : "Register Company →"}
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────
function FormRow({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "10px 14px", borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)",
  color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box",
};

const labelStyle = {
  color: "#cad2e1", fontSize: "12px", fontWeight: 700,
  textTransform: "uppercase", letterSpacing: "0.05em",
};