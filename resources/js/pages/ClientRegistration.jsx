
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../../css/style.css";
// // import { API_URL } from "../src/config";

// // const ROLES = [
// //   { value: "admin",          label: "Admin" },
// //   { value: "allocator",      label: "Allocator" },
// //   { value: "verifier",       label: "Verifier" },
// //   { value: "check_manager",  label: "Check Manager" },
// //   { value: "report_writing", label: "Report Writing Specialist" },
// //   { value: "pvt_qc",         label: "PVT / QC" },
// //   { value: "client",         label: "Client" },
// // ];

// // export default function ClientRegistration() {
// //   const [form, setForm]                 = useState({ name: "", email: "", password: "", confirm: "", role: "" });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [error, setError]               = useState("");
// //   const [loading, setLoading]           = useState(false);
// //   const navigate = useNavigate();

// //   const set = (field, value) => setForm((p) => ({ ...p, [field]: value }));

// //   const validate = () => {
// //     if (!form.name.trim())     return "Full name is required.";
// //     if (!form.email.trim())    return "Email is required.";
// //     if (!form.role)            return "Please select a role.";
// //     if (form.password.length < 8) return "Password must be at least 8 characters.";
// //     if (form.password !== form.confirm) return "Passwords do not match.";
// //     return null;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const err = validate();
// //     if (err) { setError(err); return; }

// //     setError("");
// //     setLoading(true);

// //     try {
// //       const res  = await fetch(`${API_URL}/api/register`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json", Accept: "application/json" },
// //         body: JSON.stringify({
// //           name:     form.name.trim(),
// //           email:    form.email.trim(),
// //           password: form.password,
// //           role:     form.role,
// //         }),
// //       });
// //       const data = await res.json();

// //       if (!res.ok) {
// //         setError(data.message || "Registration failed.");
// //         return;
// //       }

// //       // Auto-login after signup
// //       if (data.token) {
// //         localStorage.setItem("token", data.token);
// //         localStorage.setItem("user",  JSON.stringify(data.user));
// //       }

// //       navigate("/dashboard");

// //     } catch {
// //       setError("Unable to connect to server. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section className="log-in">
// //       <div className="container">
// //         <div className="row">

// //           <div className="col-lg-6">
// //             <div className="login-left-img">
// //               <img src="/images/login/login-left.png" alt="" />
// //             </div>
// //           </div>

// //           <div className="col-lg-6">
// //             <div className="login-wrp">

// //               <div className="log-in-logo">
// //                 <img src="/images/login/logo.png" alt="logo" />
// //               </div>

// //               <div className="log-in-inner-wrp">
// //                 <h2>Create Account</h2>
// //                 <p>Verification Management System</p>

// //                 <form onSubmit={handleSubmit}>

// //                   {/* Enter Company Name */}
// //                   <div className="login-pst">
// //                     <div className="input-grp">
// //                       <input
// //                         type="text"
// //                         placeholder="EnterCompany Name"
// //                         value={form.name}
// //                         onChange={(e) => set("name", e.target.value)}
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Enter GSTIN */}
// //                   <div className="login-pst">
// //                     <div className="input-grp">
// //                       <input
// //                         type="text"
// //                         placeholder="Enter GSTIN"
// //                         value={form.email}
// //                         onChange={(e) => set("email", e.target.value)}
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Primary Contact */}
// //                   <div className="login-pst">
// //                     <div className="input-grp">
// //                       <input
// //                         type="text"
// //                         placeholder="Enter Primary Contact"
// //                         value={form.email}
// //                         onChange={(e) => set("email", e.target.value)}
// //                         required
// //                       />
// //                     </div>
// //                   </div>

                 

// //                   {error && (
// //                     <p style={{ color: "#dc2626", fontSize: "0.82rem", marginBottom: "10px" }}>
// //                       {error}
// //                     </p>
// //                   )}

// //                   <input
// //                     type="submit"
// //                     value={loading ? "Creating account…" : "Create Account"}
// //                     className="primary-cta"
// //                     disabled={loading}
// //                     style={{ width: "100%", marginTop: "8px", cursor: loading ? "not-allowed" : "pointer" }}
// //                   />

// //                 </form>

// //                 <div className="ac-switch" style={{
// //                   marginTop: "20px", textAlign: "center",
// //                   fontSize: "0.85rem", color: "#64748b",
// //                 }}>
// //                   Already have an account?{" "}
// //                   <a href="/" style={{ color: "#2b3b8c", fontWeight: 700, textDecoration: "underline" }}>
// //                     Sign In
// //                   </a>
// //                 </div>

// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // Clientportal.jsx — Onboarding role page
// // Route: /clientportal (role: onboarding)
// // Features:
// //   - Client onboarding form (company registration)
// //   - Candidate portal LINK GENERATOR → writes to caseStore.generateCandidateLink
// //   - Generated link is copy-able, SMS-able, email-able
// //   - Links table showing all generated links

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { getAllCases } from "./caseStore";
// import { generateCandidateLink, getAllCandidateLinks, revokeCandidateLink } from "./caseStore";
// import { registerClient } from "./clientStore";

// const CHECK_TYPES = [
//   { key: "employment", label: "Emp" },
//   { key: "education",  label: "Edu" },
//   { key: "address",    label: "Addr" },
//   { key: "database",   label: "DB" },
//   { key: "criminal",   label: "Criminal" },
//   { key: "drug_test",  label: "Drug" },
//   { key: "courtroom",  label: "Court" },
// ];

// const BILLING_MODES = [
//   { key: "prepaid_client",    label: "Prepaid — Client" },
//   { key: "prepaid_candidate", label: "Prepaid — Candidate" },
//   { key: "postpaid_client",   label: "Postpaid — Client" },
// ];

// const EXPIRY_OPTIONS = [24, 48, 72, 168]; // hours

// // ── Helpers ───────────────────────────────────────────────────────────────────
// function getUser() { try { return JSON.parse(localStorage.getItem("user")) || {}; } catch { return {}; } }

// export default function Clientportal() {
//   const navigate  = useNavigate();
//   const user      = getUser();

//   // ── Link generator state ──────────────────────────────────────────────────
//   const [cases, setCases]           = useState([]);
//   const [linkForm, setLinkForm]     = useState({ caseId: "", candidateName: "", email: "", mobile: "", position: "", expiryHours: 72, checks: [] });
//   const [generatedLink, setGeneratedLink] = useState("");
//   const [linkCopied, setLinkCopied] = useState(false);
//   const [linkSent, setLinkSent]     = useState("");
//   const [allLinks, setAllLinks]     = useState([]);
//   const [linkError, setLinkError]   = useState("");

//   // ── Onboarding form state ─────────────────────────────────────────────────
//   const [clientForm, setClientForm] = useState({ companyName: "", gstin: "", primaryContact: "", billingMode: "postpaid_client", agreedChecks: [] });
//   const [clientSuccess, setClientSuccess] = useState("");
//   const [clientError, setClientError]     = useState("");

//   useEffect(() => {
//     setCases(getAllCases());
//     setAllLinks(getAllCandidateLinks());
//   }, []);

//   const setL = (f, v) => setLinkForm((p) => ({ ...p, [f]: v }));
//   const setC = (f, v) => setClientForm((p) => ({ ...p, [f]: v }));

//   const toggleCheckLink  = (k) => setL("checks",        linkForm.checks.includes(k) ? linkForm.checks.filter(c => c !== k) : [...linkForm.checks, k]);
//   const toggleCheckClient = (k) => setC("agreedChecks", clientForm.agreedChecks.includes(k) ? clientForm.agreedChecks.filter(c => c !== k) : [...clientForm.agreedChecks, k]);

//   // When a case is selected, auto-fill from case data
//   const handleCaseSelect = (caseId) => {
//     const c = cases.find((x) => x.id === caseId);
//     if (c) {
//       setL("caseId",        caseId);
//       setL("candidateName", c.candidate || "");
//       setL("email",         c.email     || "");
//       setL("mobile",        c.mobile    || "");
//       setL("checks",        c.checkKeys || []);
//     } else {
//       setL("caseId", caseId);
//     }
//   };

//   // ── Generate link ─────────────────────────────────────────────────────────
//   const handleGenerate = (e) => {
//     e.preventDefault();
//     if (!linkForm.candidateName.trim()) { setLinkError("Candidate name is required."); return; }
//     if (!linkForm.email.trim())          { setLinkError("Email is required."); return; }
//     if (linkForm.checks.length === 0)    { setLinkError("Select at least one check type."); return; }
//     setLinkError("");

//     const result = generateCandidateLink({
//       caseId:        linkForm.caseId || `LINK-${Date.now().toString(36).toUpperCase()}`,
//       candidateName: linkForm.candidateName.trim(),
//       email:         linkForm.email.trim(),
//       checks:        linkForm.checks,
//       expiryHours:   linkForm.expiryHours,
//     });
//     setGeneratedLink(result.url);
//     setAllLinks(getAllCandidateLinks());
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText(generatedLink).catch(() => {});
//     setLinkCopied(true);
//     setTimeout(() => setLinkCopied(false), 2000);
//   };

//   const sendSMS = () => {
//     window.open(`sms:${linkForm.mobile}?body=Complete your BGV document upload: ${generatedLink}`, "_blank");
//     setLinkSent("sms");
//   };

//   const sendEmail = () => {
//     window.open(`mailto:${linkForm.email}?subject=BGV Document Upload Link&body=Dear ${linkForm.candidateName},%0A%0APlease upload your documents here: ${generatedLink}%0A%0AThis link expires in ${linkForm.expiryHours} hours.`, "_blank");
//     setLinkSent("email");
//   };

//   const handleRevoke = (token) => {
//     revokeCandidateLink(token);
//     if (generatedLink.includes(token)) setGeneratedLink("");
//     setAllLinks(getAllCandidateLinks());
//   };

//   // ── Client onboarding submit ───────────────────────────────────────────────
//   const handleClientSubmit = (e) => {
//     e.preventDefault();
//     if (!clientForm.companyName.trim()) { setClientError("Company name is required."); return; }
//     if (!clientForm.gstin.trim())        { setClientError("GSTIN is required."); return; }
//     setClientError("");
//     try {
//       registerClient({
//         companyName:    clientForm.companyName.trim(),
//         gstin:          clientForm.gstin.trim(),
//         primaryContact: clientForm.primaryContact.trim(),
//         billingMode:    clientForm.billingMode,
//         agreedChecks:   clientForm.agreedChecks,
//         contactEmail:   `${clientForm.companyName.toLowerCase().replace(/\s+/g, ".")}@client.bgv`,
//       });
//       setClientSuccess(`Client "${clientForm.companyName}" account created successfully.`);
//       setClientForm({ companyName: "", gstin: "", primaryContact: "", billingMode: "postpaid_client", agreedChecks: [] });
//       setTimeout(() => setClientSuccess(""), 3000);
//     } catch (err) {
//       setClientError(err.message || "Failed to create client.");
//     }
//   };

//   return (
//     <>
//       <Sidebar />
//       <section id="content">
//         <Header />
//         <main>
//           <div className="dash-wrper">

//             {/* ── Nav header ── */}
//             <nav className="verifyer" style={{ background: "var(--primary-color)", borderRadius: "10px", height: "60px" }}>
//               <div className="nav-toggle">
//                 <img src="images/inner-pages/emp-check-icon.svg" alt="" style={{ width: "30px", height: "30px" }} />
//               </div>
//               <div className="head-src">
//                 <h3>ONBOARDING — Client Registration · Candidate Link Generator</h3>
//               </div>
//               <button className="primary-cta" style={{ fontSize: "13px" }}>{user.name || "Onboarding"}</button>
//             </nav>

//             {/* ── Two-column layout ── */}
//             <div className="cob-portal-container">
//               <div className="cob-emplyment-check-body">

//                 {/* ── CARD 1: Client Onboarding Form ─────────────────── */}
//                 <div className="cob-frist-card">
//                   <div className="cob-card-header cob-client-header">
//                     <h2>CLIENT ONBOARDING FORM</h2>
//                   </div>

//                   <form className="cob-client-form" onSubmit={handleClientSubmit}>

//                     <div className="cob-form-group">
//                       <label className="cob-form-label">Company Name *</label>
//                       <input type="text" className="cob-form-input" placeholder="Enter company name"
//                         value={clientForm.companyName} onChange={(e) => setC("companyName", e.target.value)} required />
//                     </div>

//                     <div className="cob-form-group">
//                       <label className="cob-form-label">GSTIN *</label>
//                       <input type="text" className="cob-form-input" placeholder="e.g. 27AABCD1234F1Z5" maxLength={15}
//                         value={clientForm.gstin} onChange={(e) => setC("gstin", e.target.value.toUpperCase())} required />
//                     </div>

//                     <div className="cob-form-group">
//                       <label className="cob-form-label">Primary Contact</label>
//                       <input type="text" className="cob-form-input" placeholder="Name — Phone"
//                         value={clientForm.primaryContact} onChange={(e) => setC("primaryContact", e.target.value)} />
//                     </div>

//                     <div className="cob-form-group">
//                       <label className="cob-form-label">Billing Mode</label>
//                       <div className="cob-billing-toggle-group">
//                         {BILLING_MODES.map((b) => (
//                           <button key={b.key} type="button"
//                             className={`cob-toggle-btn ${clientForm.billingMode === b.key ? "active-teal" : ""}`}
//                             onClick={() => setC("billingMode", b.key)}>
//                             {b.label}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="cob-form-group">
//                       <label className="cob-form-label">Agreed Check Types</label>
//                       <div className="cob-check-tags-group">
//                         {CHECK_TYPES.map((c) => (
//                           <span key={c.key}
//                             className={`cob-check-tag ${clientForm.agreedChecks.includes(c.key) ? "active-navy" : ""}`}
//                             onClick={() => toggleCheckClient(c.key)} style={{ cursor: "pointer" }}>
//                             {c.label}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="cob-form-group">
//                       <label className="cob-form-label">Rate Card (₹)</label>
//                       <div className="cob-rate-cards-container">
//                         {[["Employment", "350"], ["Education", "280"], ["Address", "180"], ["Database", "120"]].map(([l, v]) => (
//                           <div key={l} className="cob-rate-card-item">
//                             <span className="cob-rate-label">{l}</span>
//                             <span className="cob-rate-value">₹{v}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {clientError   && <p style={{ color: "#ef4444", fontSize: "13px" }}>{clientError}</p>}
//                     {clientSuccess && <p style={{ color: "#02c39a", fontSize: "13px", fontWeight: 600 }}>✔ {clientSuccess}</p>}

//                     <div className="cob-form-actions">
//                       <button type="submit" className="cob-btn-create-account">CREATE CLIENT ACCOUNT</button>
//                     </div>

//                   </form>
//                 </div>

//                 {/* ── CARD 2: Candidate Link Generator ───────────────── */}
//                 <div className="cob-second-card">
//                   <div className="cob-card-header cob-portal-header">
//                     <h2>CANDIDATE PORTAL — LINK GENERATOR</h2>
//                   </div>

//                   <div className="cob-portal-generator-content">
//                     <form className="cob-generator-form" onSubmit={handleGenerate}>

//                       {/* Select existing case (optional) */}
//                       <div className="cob-form-group">
//                         <label className="cob-form-label">Link to Case (optional)</label>
//                         <select className="cob-form-input" value={linkForm.caseId} onChange={(e) => handleCaseSelect(e.target.value)}
//                           style={{ cursor: "pointer" }}>
//                           <option value="">— New / Manual entry —</option>
//                           {cases.map((c) => (
//                             <option key={c.id} value={c.id}>{c.id} — {c.candidate}</option>
//                           ))}
//                         </select>
//                       </div>

//                       <div className="cob-form-group">
//                         <label className="cob-form-label">Candidate Name *</label>
//                         <input type="text" className="cob-form-input" placeholder="Full name"
//                           value={linkForm.candidateName} onChange={(e) => setL("candidateName", e.target.value)} required />
//                       </div>

//                       <div className="cob-form-group">
//                         <label className="cob-form-label">Email *</label>
//                         <input type="email" className="cob-form-input" placeholder="candidate@email.com"
//                           value={linkForm.email} onChange={(e) => setL("email", e.target.value)} required />
//                       </div>

//                       <div className="cob-form-group">
//                         <label className="cob-form-label">Mobile</label>
//                         <input type="tel" className="cob-form-input" placeholder="+91 XXXXX XXXXX"
//                           value={linkForm.mobile} onChange={(e) => setL("mobile", e.target.value)} />
//                       </div>

//                       <div className="cob-form-group">
//                         <label className="cob-form-label">Check Types *</label>
//                         <div className="cob-checkboxes-row" style={{ flexWrap: "wrap", gap: "8px" }}>
//                           {CHECK_TYPES.map((c) => {
//                             const active = linkForm.checks.includes(c.key);
//                             return (
//                               <label key={c.key} className="cob-checkbox-item" style={{ flex: "unset", background: active ? "var(--tab-btn-color)" : "#f1f5f9", color: active ? "#fff" : "#475569", minWidth: "70px" }}>
//                                 <input type="checkbox" className="cob-checkbox-native" checked={active} onChange={() => toggleCheckLink(c.key)} />
//                                 <span className="cob-checkbox-custom">{active ? "✔" : ""}</span>
//                                 <span className="cob-checkbox-label">{c.label}</span>
//                               </label>
//                             );
//                           })}
//                         </div>
//                       </div>

//                       <div className="cob-form-group">
//                         <label className="cob-form-label">Link Expiry</label>
//                         <div className="cob-expiry-toggle-group">
//                           {EXPIRY_OPTIONS.map((h) => (
//                             <button key={h} type="button"
//                               className={`cob-toggle-btn ${linkForm.expiryHours === h ? "active-teal" : ""}`}
//                               onClick={() => setL("expiryHours", h)}>
//                               {h >= 168 ? "7 days" : `${h}h`}
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       {linkError && <p style={{ color: "#ef4444", fontSize: "13px" }}>⚠ {linkError}</p>}

//                       {/* Generated link display */}
//                       {generatedLink && (
//                         <div className="cob-generated-link-wrapper">
//                           <span className="cob-generated-url-text">{generatedLink}</span>
//                         </div>
//                       )}

//                       <div className="cob-action-buttons-row">
//                         <button type="submit" className="cob-action-btn cob-btn-generate">GENERATE LINK</button>
//                         {generatedLink && (
//                           <>
//                             <button type="button" className="cob-action-btn cob-btn-copy" onClick={copyLink}>
//                               {linkCopied ? "COPIED ✓" : "COPY LINK 📋"}
//                             </button>
//                             {linkForm.mobile && (
//                               <button type="button" className="cob-action-btn cob-btn-sms" onClick={sendSMS}>
//                                 {linkSent === "sms" ? "SENT ✓" : "SEND SMS"}
//                               </button>
//                             )}
//                             <button type="button" className="cob-action-btn cob-btn-email" onClick={sendEmail}>
//                               {linkSent === "email" ? "SENT ✓" : "EMAIL"}
//                             </button>
//                           </>
//                         )}
//                       </div>

//                     </form>

//                     {/* ── Generated links table ── */}
//                     {allLinks.length > 0 && (
//                       <div style={{ padding: "0 24px 24px" }}>
//                         <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px" }}>
//                           Previously Generated Links ({allLinks.length})
//                         </h4>
//                         <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "200px", overflowY: "auto" }}>
//                           {allLinks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((l) => {
//                             const expired = new Date(l.expiry) < new Date();
//                             return (
//                               <div key={l.token} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
//                                 <div style={{ flex: 1, minWidth: 0 }}>
//                                   <div style={{ fontSize: "13px", fontWeight: 600, color: "#1e293b", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.candidateName}</div>
//                                   <div style={{ fontSize: "11px", color: expired ? "#ef4444" : "#94a3b8" }}>
//                                     {l.caseId} · Expires {new Date(l.expiry).toLocaleDateString("en-IN")} {expired && "· EXPIRED"}
//                                   </div>
//                                 </div>
//                                 <button
//                                   onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/candidate/${l.token}`); }}
//                                   style={{ padding: "4px 10px", background: "#eef3ff", border: "none", borderRadius: "6px", color: "#1e2761", fontSize: "11px", fontWeight: 700, cursor: "pointer" }}>
//                                   Copy
//                                 </button>
//                                 <button
//                                   onClick={() => handleRevoke(l.token)}
//                                   style={{ padding: "4px 10px", background: "#fef2f2", border: "none", borderRadius: "6px", color: "#dc2626", fontSize: "11px", fontWeight: 700, cursor: "pointer" }}>
//                                   Revoke
//                                 </button>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </main>
//       </section>
//     </>
//   );
// }
// ClientRegistration.jsx — Separate registration form for client companies
// Route: /client-register (public)
// On submit: POST /api/clients/register → returns token + user with role="client"
// Falls back to clientStore.js (localStorage) if API unavailable

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "./config";
import { registerClient } from "./clientStore";

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
  { key: "prepaid_client",     label: "Prepaid — Client",     desc: "Pay upfront before cases" },
  { key: "prepaid_candidate",  label: "Prepaid — Candidate",  desc: "Candidate pays directly" },
  { key: "postpaid_client",    label: "Postpaid — Client",    desc: "Pay at month end" },
];

const EMPTY = {
  companyName:    "",
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
  const navigate   = useNavigate();
  const [form, setForm]     = useState(EMPTY);
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep]     = useState(1); // 1=company info, 2=billing+checks, 3=success

  const set = (f, v) => setForm((p) => ({ ...p, [f]: v }));

  const toggleCheck = (key) =>
    setForm((p) => ({
      ...p,
      agreedChecks: p.agreedChecks.includes(key)
        ? p.agreedChecks.filter((c) => c !== key)
        : [...p.agreedChecks, key],
    }));

  const validateStep1 = () => {
    if (!form.companyName.trim())    return "Company name is required.";
    if (!form.gstin.trim())          return "GSTIN is required.";
    if (!form.primaryContact.trim()) return "Primary contact name is required.";
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
      // Try real API first
      const res = await fetch(`${API_URL}/api/clients/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          companyName:    form.companyName.trim(),
          gstin:          form.gstin.trim(),
          primaryContact: form.primaryContact.trim(),
          contactPhone:   form.contactPhone.trim(),
          contactEmail:   form.contactEmail.trim(),
          password:       form.password,
          billingMode:    form.billingMode,
          agreedChecks:   form.agreedChecks,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setStep(3);
        return;
      }
      const data = await res.json();
      throw new Error(data.message || "Registration failed.");

    } catch (apiErr) {
      // Fallback to localStorage store
      try {
        const result = registerClient({
          companyName:    form.companyName.trim(),
          gstin:          form.gstin.trim(),
          primaryContact: form.primaryContact.trim(),
          contactPhone:   form.contactPhone.trim(),
          contactEmail:   form.contactEmail.trim(),
          billingMode:    form.billingMode,
          agreedChecks:   form.agreedChecks,
        });
        localStorage.setItem("token", result.token);
        localStorage.setItem("user",  JSON.stringify(result.user));
        setStep(3);
      } catch (storeErr) {
        setError(storeErr.message || "Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ── Success screen ─────────────────────────────────────────────────────────
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
                ["GSTIN", form.gstin],
                ["Contact", form.primaryContact],
                ["Billing", BILLING_OPTIONS.find(b => b.key === form.billingMode)?.label],
                ["Checks", form.agreedChecks.map(c => CHECK_OPTIONS.find(o => o.key === c)?.label).join(", ")],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #1e2761", fontSize: "13px" }}>
                  <span style={{ color: "#94a3b8" }}>{k}</span>
                  <span style={{ color: "#fff", fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
            <button
              className="primary-cta"
              style={{ width: "100%" }}
              onClick={() => navigate("/Client")}
            >
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
              <p style={{ fontSize: "13px", color: "#64748b", marginTop: "8px" }}>
                Staff member?{" "}
                <Link to="/signup" style={{ color: "#028090", fontWeight: 700 }}>Staff Signup</Link>
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

                    <FormRow label="Company Name *">
                      <input type="text" placeholder="e.g. Deloitte India Pvt Ltd"
                        value={form.companyName} onChange={(e) => set("companyName", e.target.value)} required
                        style={inputStyle} />
                    </FormRow>

                    <FormRow label="GSTIN *">
                      <input type="text" placeholder="e.g. 27AABCD1234F1Z5"
                        value={form.gstin} onChange={(e) => set("gstin", e.target.value.toUpperCase())} required
                        maxLength={15} style={inputStyle} />
                    </FormRow>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <FormRow label="Primary Contact Name *">
                        <input type="text" placeholder="Full name"
                          value={form.primaryContact} onChange={(e) => set("primaryContact", e.target.value)} required
                          style={inputStyle} />
                      </FormRow>
                      <FormRow label="Contact Phone">
                        <input type="tel" placeholder="+91 XXXXX XXXXX"
                          value={form.contactPhone} onChange={(e) => set("contactPhone", e.target.value)}
                          style={inputStyle} />
                      </FormRow>
                    </div>

                    <FormRow label="Company Email *">
                      <input type="email" placeholder="hr@yourcompany.com"
                        value={form.contactEmail} onChange={(e) => set("contactEmail", e.target.value)} required
                        style={inputStyle} />
                    </FormRow>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <FormRow label="Password *">
                        <input type="password" placeholder="Min. 8 characters"
                          value={form.password} onChange={(e) => set("password", e.target.value)} required
                          style={inputStyle} />
                      </FormRow>
                      <FormRow label="Confirm Password *">
                        <input type="password" placeholder="Repeat password"
                          value={form.confirmPass} onChange={(e) => set("confirmPass", e.target.value)} required
                          style={inputStyle} />
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
                            <input type="radio" name="billingMode" value={b.key}
                              checked={form.billingMode === b.key}
                              onChange={() => set("billingMode", b.key)}
                              style={{ accentColor: "#02c39a" }} />
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
                              key={c.key} type="button"
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

// ── Sub-components ─────────────────────────────────────────────────────────────
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
