
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { API_URL } from "../src/config";
// import { registerClient } from "../src/store/clientStore";

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
//   { key: "prepaid_client",     label: "Prepaid — Client",     desc: "Pay upfront before cases" },
//   { key: "prepaid_candidate",  label: "Prepaid — Candidate",  desc: "Candidate pays directly" },
//   { key: "postpaid_client",    label: "Postpaid — Client",    desc: "Pay at month end" },
// ];

// const EMPTY = {
//   companyName:    "",
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
//   const navigate   = useNavigate();
//   const [form, setForm]     = useState(EMPTY);
//   const [error, setError]   = useState("");
//   const [loading, setLoading] = useState(false);
//   const [step, setStep]     = useState(1); // 1=company info, 2=billing+checks, 3=success

//   const set = (f, v) => setForm((p) => ({ ...p, [f]: v }));

//   const toggleCheck = (key) =>
//     setForm((p) => ({
//       ...p,
//       agreedChecks: p.agreedChecks.includes(key)
//         ? p.agreedChecks.filter((c) => c !== key)
//         : [...p.agreedChecks, key],
//     }));

//   const validateStep1 = () => {
//     if (!form.companyName.trim())    return "Company name is required.";
//     if (!form.gstin.trim())          return "GSTIN is required.";
//     if (!form.primaryContact.trim()) return "Primary contact name is required.";
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
//       // Try real API first
//       const res = await fetch(`${API_URL}/api/clients/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify({
//           companyName:    form.companyName.trim(),
//           gstin:          form.gstin.trim(),
//           primaryContact: form.primaryContact.trim(),
//           contactPhone:   form.contactPhone.trim(),
//           contactEmail:   form.contactEmail.trim(),
//           password:       form.password,
//           billingMode:    form.billingMode,
//           agreedChecks:   form.agreedChecks,
//         }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));
//         setStep(3);
//         return;
//       }
//       const data = await res.json();
//       throw new Error(data.message || "Registration failed.");

//     } catch (apiErr) {
//       // Fallback to localStorage store
//       try {
//         const result = registerClient({
//           companyName:    form.companyName.trim(),
//           gstin:          form.gstin.trim(),
//           primaryContact: form.primaryContact.trim(),
//           contactPhone:   form.contactPhone.trim(),
//           contactEmail:   form.contactEmail.trim(),
//           billingMode:    form.billingMode,
//           agreedChecks:   form.agreedChecks,
//         });
//         localStorage.setItem("token", result.token);
//         localStorage.setItem("user",  JSON.stringify(result.user));
//         setStep(3);
//       } catch (storeErr) {
//         setError(storeErr.message || "Registration failed. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── Success screen ─────────────────────────────────────────────────────────
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
//                 ["GSTIN", form.gstin],
//                 ["Contact", form.primaryContact],
//                 ["Billing", BILLING_OPTIONS.find(b => b.key === form.billingMode)?.label],
//                 ["Checks", form.agreedChecks.map(c => CHECK_OPTIONS.find(o => o.key === c)?.label).join(", ")],
//               ].map(([k, v]) => (
//                 <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #1e2761", fontSize: "13px" }}>
//                   <span style={{ color: "#94a3b8" }}>{k}</span>
//                   <span style={{ color: "#fff", fontWeight: 600 }}>{v}</span>
//                 </div>
//               ))}
//             </div>
//             <button
//               className="primary-cta"
//               style={{ width: "100%" }}
//               onClick={() => navigate("/Client")}
//             >
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
//               <p style={{ fontSize: "13px", color: "#64748b", marginTop: "8px" }}>
//                 Staff member?{" "}
//                 <Link to="/signup" style={{ color: "#028090", fontWeight: 700 }}>Staff Signup</Link>
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

//                     <FormRow label="Company Name *">
//                       <input type="text" placeholder="e.g. Deloitte India Pvt Ltd"
//                         value={form.companyName} onChange={(e) => set("companyName", e.target.value)} required
//                         style={inputStyle} />
//                     </FormRow>

//                     <FormRow label="GSTIN *">
//                       <input type="text" placeholder="e.g. 27AABCD1234F1Z5"
//                         value={form.gstin} onChange={(e) => set("gstin", e.target.value.toUpperCase())} required
//                         maxLength={15} style={inputStyle} />
//                     </FormRow>

//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
//                       <FormRow label="Primary Contact Name *">
//                         <input type="text" placeholder="Full name"
//                           value={form.primaryContact} onChange={(e) => set("primaryContact", e.target.value)} required
//                           style={inputStyle} />
//                       </FormRow>
//                       <FormRow label="Contact Phone">
//                         <input type="tel" placeholder="+91 XXXXX XXXXX"
//                           value={form.contactPhone} onChange={(e) => set("contactPhone", e.target.value)}
//                           style={inputStyle} />
//                       </FormRow>
//                     </div>

//                     <FormRow label="Company Email *">
//                       <input type="email" placeholder="hr@yourcompany.com"
//                         value={form.contactEmail} onChange={(e) => set("contactEmail", e.target.value)} required
//                         style={inputStyle} />
//                     </FormRow>

//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
//                       <FormRow label="Password *">
//                         <input type="password" placeholder="Min. 8 characters"
//                           value={form.password} onChange={(e) => set("password", e.target.value)} required
//                           style={inputStyle} />
//                       </FormRow>
//                       <FormRow label="Confirm Password *">
//                         <input type="password" placeholder="Repeat password"
//                           value={form.confirmPass} onChange={(e) => set("confirmPass", e.target.value)} required
//                           style={inputStyle} />
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
//                             <input type="radio" name="billingMode" value={b.key}
//                               checked={form.billingMode === b.key}
//                               onChange={() => set("billingMode", b.key)}
//                               style={{ accentColor: "#02c39a" }} />
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
//                               key={c.key} type="button"
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

// // ── Sub-components ─────────────────────────────────────────────────────────────
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
import Sidebar from "./Sidebar";
import Header from "./Header";

const CHECK_OPTIONS = [
  { key: "emp",      label: "Employment" },
  { key: "edu",      label: "Education"  },
  { key: "addr",     label: "Address"    },
  { key: "db",       label: "Database"   },
  { key: "criminal", label: "Criminal"   },
  { key: "drug",     label: "Drug Test"  },
  { key: "court",    label: "Courtroom"  },
];

const EXPIRY_OPTIONS = ["24h", "48h", "72h", "7 days"];

const EMPTY_LINK_FORM = {
  candidateName: "", email: "", mobile: "", position: "",
  checks: ["emp", "edu"], expiry: "72h",
};

// ── Mock seed data — replace with: GET /api/candidate-links
const MOCK_LINKS = [
  { id: 1, candidateName: "Aman Verma", email: "aman.verma@gmail.com", mobile: "+91-98123-45678", position: "Backend Developer", checks: ["emp","edu"], expiry: "72h", link: "https://bgv.portal/candidate/9f3k2lm1qz", status: "Pending", createdAt: "2026-06-10" },
  { id: 2, candidateName: "Priya Singh", email: "priya.singh@gmail.com", mobile: "+91-97123-45678", position: "QA Engineer", checks: ["emp","edu","addr"], expiry: "7 days", link: "https://bgv.portal/candidate/a8d92ksld0", status: "Submitted", createdAt: "2026-06-08" },
];

function randomToken() {
  return Math.random().toString(36).slice(2, 12);
}

// ── Tiny CSV parser (no external deps). Expected header row: name,email,mobile,position,checks
// "checks" column is pipe-separated, e.g. "emp|edu|addr"
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  return lines.slice(1).map((line) => {
    const cols = line.split(",").map((c) => c.trim());
    const row = {};
    headers.forEach((h, i) => (row[h] = cols[i] || ""));
    return {
      candidateName: row.name || row.candidatename || "",
      email: row.email || "",
      mobile: row.mobile || row.phone || "",
      position: row.position || "",
      checks: row.checks
        ? row.checks.split("|").map((c) => c.trim()).filter(Boolean)
        : ["emp", "edu"],
    };
  });
}

const SAMPLE_CSV = `name,email,mobile,position,checks
Aman Verma,aman.verma@gmail.com,+91-98123-45678,Backend Developer,emp|edu
Priya Singh,priya.singh@gmail.com,+91-97123-45678,QA Engineer,emp|edu|addr`;

export default function Clientportal() {
  // ── Single link generator ──
  const [linkForm, setLinkForm] = useState(EMPTY_LINK_FORM);
  const [generatedLink, setGeneratedLink] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const [linkSent, setLinkSent] = useState("");

  // ── All generated links (single + bulk) ──
  const [links, setLinks] = useState(MOCK_LINKS);

  // ── Bulk upload ──
  const [bulkRows, setBulkRows] = useState([]);
  const [bulkFileName, setBulkFileName] = useState("");
  const [bulkGenerating, setBulkGenerating] = useState(false);
  const [bulkDone, setBulkDone] = useState("");

  const setL = (field, val) => setLinkForm((p) => ({ ...p, [field]: val }));
  const toggleLinkCheck = (key) =>
    setLinkForm((p) => ({
      ...p,
      checks: p.checks.includes(key) ? p.checks.filter((c) => c !== key) : [...p.checks, key],
    }));

  const handleGenerateLink = (e) => {
    e.preventDefault();
    if (!linkForm.candidateName.trim() || !linkForm.email.trim()) {
      alert("Candidate name and email are required.");
      return;
    }
    // TODO: POST /api/candidate-links { ...linkForm }
    const link = `https://bgv.portal/candidate/${randomToken()}`;
    setGeneratedLink(link);
    setLinkSent("");
    setLinks((prev) => [
      { id: Date.now(), ...linkForm, link, status: "Pending", createdAt: new Date().toISOString().slice(0, 10) },
      ...prev,
    ]);
  };

  const copyLink = (text = generatedLink) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const sendLink = (method) => {
    // TODO: POST /api/candidate-links/send
    setLinkSent(`${method} sent to ${linkForm.email || linkForm.mobile}!`);
    setTimeout(() => setLinkSent(""), 3000);
  };

  // ── Bulk upload handlers ──
  const handleBulkFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBulkFileName(file.name);
    setBulkDone("");
    const reader = new FileReader();
    reader.onload = (evt) => {
      const rows = parseCSV(String(evt.target.result));
      setBulkRows(rows);
    };
    reader.readAsText(file);
  };

  const downloadSample = () => {
    const blob = new Blob([SAMPLE_CSV], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "candidate-links-sample.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleBulkGenerate = async () => {
    if (bulkRows.length === 0) return;
    setBulkGenerating(true);
    // TODO: POST /api/candidate-links/bulk { rows: bulkRows }
    await new Promise((r) => setTimeout(r, 600));
    const newLinks = bulkRows
      .filter((r) => r.candidateName && r.email)
      .map((r) => ({
        id: Date.now() + Math.random(),
        ...r,
        expiry: "72h",
        link: `https://bgv.portal/candidate/${randomToken()}`,
        status: "Pending",
        createdAt: new Date().toISOString().slice(0, 10),
      }));
    setLinks((prev) => [...newLinks, ...prev]);
    setBulkDone(`${newLinks.length} candidate link(s) generated.`);
    setBulkRows([]);
    setBulkFileName("");
    setBulkGenerating(false);
  };

  // ── Stats ──
  const total = links.length;
  const pending = links.filter((l) => l.status === "Pending").length;
  const submitted = links.filter((l) => l.status === "Submitted").length;

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* ── Stats ── */}
            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total"><h4>{total}</h4><p>Total Links</p></div>
              <div className="card-inner-dash bdr-progress"><h4>{pending}</h4><p>Pending</p></div>
              <div className="card-inner-dash bdr-com"><h4>{submitted}</h4><p>Submitted</p></div>
              <div className="card-inner-dash bdr-rate"><h4>{CHECK_OPTIONS.length}</h4><p>Check Types</p></div>
            </div>

            <div className="cob-portal-container">
              <div className="cob-emplyment-check-body">

                {/* ══ LEFT: Single Candidate Link ══ */}
                <div className="cob-frist-card">
                  <div className="cob-card-header cob-portal-header">
                    <h2>GENERATE CANDIDATE LINK</h2>
                  </div>

                  <div className="cob-portal-generator-content">
                    <p className="cob-section-description">
                      Generate a unique onboarding link for a single candidate.
                    </p>

                    <form className="cob-generator-form" onSubmit={handleGenerateLink}>
                      <div className="cob-form-group">
                        <label className="cob-form-label">Candidate Name <span style={{color:"#eb4d4b"}}>*</span></label>
                        <input type="text" className="cob-form-input" placeholder="Enter candidate name"
                          value={linkForm.candidateName} onChange={(e) => setL("candidateName", e.target.value)} required />
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Email <span style={{color:"#eb4d4b"}}>*</span></label>
                        <input type="email" className="cob-form-input" placeholder="candidate@email.com"
                          value={linkForm.email} onChange={(e) => setL("email", e.target.value)} required />
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Mobile</label>
                        <input type="tel" className="cob-form-input" placeholder="+91 XXXXX XXXXX"
                          value={linkForm.mobile} onChange={(e) => setL("mobile", e.target.value)} />
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Position Applied</label>
                        <input type="text" className="cob-form-input" placeholder="e.g. Senior Engineer"
                          value={linkForm.position} onChange={(e) => setL("position", e.target.value)} />
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Check Types</label>
                        <div className="cob-checkboxes-row" style={{ flexWrap: "wrap" }}>
                          {CHECK_OPTIONS.map((ch) => (
                            <label key={ch.key} className="cob-checkbox-item"
                              style={{ flex: "1 1 80px",
                                background: linkForm.checks.includes(ch.key) ? "var(--tab-btn-color)" : "#e2e8f0",
                                color: linkForm.checks.includes(ch.key) ? "#fff" : "#475569" }}>
                              <input type="checkbox" className="cob-checkbox-native"
                                checked={linkForm.checks.includes(ch.key)}
                                onChange={() => toggleLinkCheck(ch.key)} />
                              <span className="cob-checkbox-label" style={{ fontSize: "11px", fontWeight: 700 }}>
                                {ch.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Link Expiry</label>
                        <div className="cob-expiry-toggle-group">
                          {EXPIRY_OPTIONS.map((opt) => (
                            <button key={opt} type="button"
                              className={`cob-toggle-btn ${linkForm.expiry === opt ? "active-teal" : ""}`}
                              onClick={() => setL("expiry", opt)}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {generatedLink && (
                        <div className="cob-generated-link-wrapper">
                          <span className="cob-generated-url-text">{generatedLink}</span>
                        </div>
                      )}

                      {linkSent && (
                        <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px",
                          padding: "8px 12px", fontSize: "13px", fontWeight: 600, color: "#16a34a" }}>
                          ✓ {linkSent}
                        </div>
                      )}

                      <div className="cob-action-buttons-row">
                        <button type="submit" className="cob-action-btn cob-btn-generate">GENERATE LINK</button>
                        <button type="button" className="cob-action-btn cob-btn-copy"
                          onClick={() => copyLink()} disabled={!generatedLink}
                          style={{ opacity: generatedLink ? 1 : 0.4 }}>
                          {linkCopied ? "COPIED ✓" : "COPY LINK 📋"}
                        </button>
                        <button type="button" className="cob-action-btn cob-btn-sms"
                          onClick={() => sendLink("SMS")} disabled={!generatedLink}
                          style={{ opacity: generatedLink ? 1 : 0.4 }}>
                          SEND SMS
                        </button>
                        <button type="button" className="cob-action-btn cob-btn-email"
                          onClick={() => sendLink("Email")} disabled={!generatedLink}
                          style={{ opacity: generatedLink ? 1 : 0.4 }}>
                          EMAIL
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* ══ RIGHT: Bulk Upload ══ */}
                <div className="cob-second-card">
                  <div className="cob-card-header cob-client-header">
                    <h2>BULK UPLOAD — CANDIDATE LINKS</h2>
                  </div>

                  <div className="cob-portal-generator-content">
                    <p className="cob-section-description">
                      Upload a CSV to generate links for multiple candidates at once.
                    </p>

                    <div className="cob-form-group">
                      <label className="cob-form-label">CSV File</label>
                      <input type="file" accept=".csv" className="cob-form-input" onChange={handleBulkFile} />
                      {bulkFileName && (
                        <p style={{ fontSize: "12px", color: "#64748b", marginTop: "6px" }}>
                          {bulkFileName} — {bulkRows.length} row(s) detected
                        </p>
                      )}
                    </div>

                    <button type="button" className="cob-toggle-btn" onClick={downloadSample}>
                      Download Sample CSV
                    </button>

                    {bulkRows.length > 0 && (
                      <div style={{ marginTop: "16px", maxHeight: "220px", overflowY: "auto", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
                        <table>
                          <thead>
                            <tr><th>Name</th><th>Email</th><th>Mobile</th><th>Position</th><th>Checks</th></tr>
                          </thead>
                          <tbody>
                            {bulkRows.map((r, i) => (
                              <tr key={i}>
                                <td>{r.candidateName}</td>
                                <td>{r.email}</td>
                                <td>{r.mobile}</td>
                                <td>{r.position}</td>
                                <td>{r.checks.join(", ")}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {bulkDone && (
                      <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px",
                        padding: "8px 12px", fontSize: "13px", fontWeight: 600, color: "#16a34a", marginTop: "12px" }}>
                        ✓ {bulkDone}
                      </div>
                    )}

                    <div className="cob-action-buttons-row" style={{ marginTop: "16px" }}>
                      <button type="button" className="cob-action-btn cob-btn-generate"
                        onClick={handleBulkGenerate} disabled={bulkRows.length === 0 || bulkGenerating}
                        style={{ opacity: bulkRows.length === 0 ? 0.5 : 1 }}>
                        {bulkGenerating ? "GENERATING…" : `GENERATE ${bulkRows.length || ""} LINK(S)`}
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* ── Generated links table ── */}
              <div className="down-table" style={{ marginTop: "20px" }}>
                <div style={{ background: "var(--primary-color)", padding: "12px 16px", borderRadius: "10px 10px 0 0" }}>
                  <h3 style={{ color: "#fff", fontSize: "15px", fontWeight: 700, margin: 0 }}>
                    CANDIDATE LINKS ({links.length})
                  </h3>
                </div>
                <table>
                  <thead>
                    <tr><th>Candidate</th><th>Email</th><th>Position</th><th>Checks</th><th>Expiry</th><th>Link</th><th>Status</th><th></th></tr>
                  </thead>
                  <tbody>
                    {links.map((l) => (
                      <tr key={l.id}>
                        <td style={{ fontWeight: 600 }}>{l.candidateName}</td>
                        <td>{l.email}</td>
                        <td>{l.position || "—"}</td>
                        <td style={{ fontSize: "12px", color: "#64748b" }}>
                          {l.checks.map((k) => CHECK_OPTIONS.find((o) => o.key === k)?.label || k).join(" · ")}
                        </td>
                        <td>{l.expiry}</td>
                        <td style={{ fontFamily: "monospace", fontSize: "12px", maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {l.link}
                        </td>
                        <td>
                          <span className={`status ${l.status === "Submitted" ? "completed" : "in-progress"}`}
                            style={{ width: "auto", padding: "4px 10px", fontSize: "11px" }}>
                            {l.status}
                          </span>
                        </td>
                        <td>
                          <button type="button" className="cob-toggle-btn" onClick={() => copyLink(l.link)}>
                            Copy
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </main>
      </section>
    </>
  );
}