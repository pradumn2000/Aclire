// import { useNavigate } from "react-router-dom";


// export default function Clientportal() {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };


//   return (
//     <>
 

//   {/* CONTENT */}
//   <section id="noSidebar">
//     {/* NAVBAR */}
//     <nav className="verifyer">
//       <div className="nav-toggle">
//         <div className="bx bx-menu">
//           <img src="images/inner-pages/emp-check-icon.svg" alt="" />
//         </div>
//       </div>
      
//       <div className="head-src">
//         <h3>ONBOARDING ROLE + CANDIDATE PORTAL LINK  —  Resignation | Billing Link Gen</h3>
//       </div>
      
//       <button type="button" className="primary-cta">Onboarding Role</button>
//     </nav>


//     {/* MAIN */}
//     <main>

//      {/* Main Portal Layout Container */}
// <div className="cob-portal-container">

//   {/* Outer Flexbox Layout */}
//   <div className="cob-emplyment-check-body">

//     {/* FIRST CARD */}
//     <div className="cob-frist-card">

//       <div className="cob-card-header cob-client-header">
//         <h2>CLIENT ONBOARDING FORM</h2>
//       </div>

//       <form
//         className="cob-client-form"
//         id="clientOnboardingForm"
//       >

//         {/* Company Name */}
//         <div className="cob-form-group">

//           <label className="cob-form-label">
//             Company Name
//           </label>

//           <input
//             type="text"
//             className="cob-form-input"
//             defaultValue="Deloitte India Pvt Ltd"
//             placeholder="Enter company name"
//             required
//           />

//         </div>

//         {/* GSTIN */}
//         <div className="cob-form-group">

//           <label className="cob-form-label">
//             GSTIN
//           </label>

//           <input
//             type="text"
//             className="cob-form-input"
//             defaultValue="27AABCD1234F1Z5"
//             placeholder="Enter GSTIN number"
//             required
//           />

//         </div>

//         {/* Primary Contact */}
//         <div className="cob-form-group">

//           <label className="cob-form-label">
//             Primary Contact
//           </label>

//           <input
//             type="text"
//             className="cob-form-input"
//             defaultValue="Ramesh Joshi — +91-98765-43210"
//             placeholder="Contact Name — Phone Number"
//             required
//           />

//         </div>

//         {/* Billing Mode */}
//         <div className="cob-form-group">

//           <label className="cob-form-label">
//             Billing Mode
//           </label>

//           <div className="cob-billing-toggle-group">

//             <button
//               type="button"
//               className="cob-toggle-btn"
//             >
//               Prepaid — Client
//             </button>

//             <button
//               type="button"
//               className="cob-toggle-btn"
//             >
//               Prepaid — Candidate
//             </button>

//             <button
//               type="button"
//               className="cob-toggle-btn active-teal"
//             >
//               Postpaid — Client
//             </button>

//           </div>

//         </div>

//         {/* Check Types */}
//         <div className="cob-form-group">

//           <label className="cob-form-label">
//             Agreed Check Types
//           </label>

//           <div className="cob-check-tags-group">

//             <span className="cob-check-tag active-navy">
//               Emp
//             </span>

//             <span className="cob-check-tag active-navy">
//               Edu
//             </span>

//             <span className="cob-check-tag active-navy">
//               Addr
//             </span>

//             <span className="cob-check-tag active-navy">
//               DB
//             </span>

//             <span className="cob-check-tag">
//               Criminal
//             </span>

//             <span className="cob-check-tag">
//               Drug
//             </span>

//             <span className="cob-check-tag">
//               Court
//             </span>

//           </div>

//         </div>

//         {/* Rate Card */}
//         <div className="cob-form-group">

//           <label className="cob-form-label">
//             Rate Card
//           </label>

//           <div className="cob-rate-cards-container">

//             <div
//               className="cob-rate-card-item"
//               id="rate-emp"
//             >
//               <span className="cob-rate-label">
//                 Employment
//               </span>

//               <span className="cob-rate-value">
//                 ₹350
//               </span>
//             </div>

//             <div
//               className="cob-rate-card-item"
//               id="rate-edu"
//             >
//               <span className="cob-rate-label">
//                 Education
//               </span>

//               <span className="cob-rate-value">
//                 ₹280
//               </span>
//             </div>

//             <div
//               className="cob-rate-card-item"
//               id="rate-addr"
//             >
//               <span className="cob-rate-label">
//                 Address
//               </span>

//               <span className="cob-rate-value">
//                 ₹180
//               </span>
//             </div>

//             <div
//               className="cob-rate-card-item"
//               id="rate-db"
//             >
//               <span className="cob-rate-label">
//                 Database
//               </span>

//               <span className="cob-rate-value">
//                 ₹120
//               </span>
//             </div>

//           </div>

//         </div>

//         {/* Button */}
//         <div className="cob-form-actions">

//           <button
//             type="submit"
//             className="cob-btn-create-account"
//           >
//             CREATE CLIENT ACCOUNT
//           </button>

//         </div>

//       </form>
//     </div>

//     {/* SECOND CARD */}
//     <div className="cob-second-card">

//       <div className="cob-card-header cob-portal-header">
//         <h2>
//           CANDIDATE PORTAL — LINK GENERATOR
//         </h2>
//       </div>

//       <div className="cob-portal-generator-content">

//         <p className="cob-section-description">
//           Generate a unique onboarding link per candidate.
//         </p>

//         <form
//           className="cob-generator-form"
//           id="linkGeneratorForm"
//         >

//           {/* Candidate Name */}
//           <div className="cob-form-group">

//             <label className="cob-form-label">
//               Candidate Name
//             </label>

//             <input
//               type="text"
//               className="cob-form-input"
//               id="candidateNameInput"
//               placeholder="Enter candidate name"
//               required
//             />

//           </div>

//           {/* Email */}
//           <div className="cob-form-group">

//             <label className="cob-form-label">
//               Email
//             </label>

//             <input
//               type="email"
//               className="cob-form-input"
//               id="candidateEmailInput"
//               placeholder="Enter candidate email address"
//               required
//             />

//           </div>

//           {/* Mobile */}
//           <div className="cob-form-group">

//             <label className="cob-form-label">
//               Mobile
//             </label>

//             <input
//               type="tel"
//               className="cob-form-input"
//               id="candidateMobileInput"
//               placeholder="Enter mobile number"
//               required
//             />

//           </div>

//           {/* Position */}
//           <div className="cob-form-group">

//             <label className="cob-form-label">
//               Position Applied
//             </label>

//             <input
//               type="text"
//               className="cob-form-input"
//               id="candidatePosInput"
//               placeholder="Enter position name"
//               required
//             />

//           </div>

//           {/* Checkboxes */}
//           <div className="cob-form-group">

//             <label className="cob-form-label">
//               Check Types
//             </label>

//             <div className="cob-checkboxes-row">

//               <label className="cob-checkbox-item">

//                 <input
//                   type="checkbox"
//                   className="cob-checkbox-native"
//                   value="emp"
//                   defaultChecked
//                 />

//                 <span className="cob-checkbox-custom">
//                   ✔
//                 </span>

//                 <span className="cob-checkbox-label">
//                   Emp
//                 </span>

//               </label>

//               <label className="cob-checkbox-item">

//                 <input
//                   type="checkbox"
//                   className="cob-checkbox-native"
//                   value="edu"
//                   defaultChecked
//                 />

//                 <span className="cob-checkbox-custom">
//                   ✔
//                 </span>

//                 <span className="cob-checkbox-label">
//                   Edu
//                 </span>

//               </label>

//             </div>

//           </div>

//           {/* Expiry */}
//           <div className="cob-form-group">

//             <label className="cob-form-label">
//               Link Expiry
//             </label>

//             <div className="cob-expiry-toggle-group">

//               <button
//                 type="button"
//                 className="cob-toggle-btn"
//               >
//                 24h
//               </button>

//               <button
//                 type="button"
//                 className="cob-toggle-btn"
//               >
//                 48h
//               </button>

//               <button
//                 type="button"
//                 className="cob-toggle-btn active-teal"
//               >
//                 72h
//               </button>

//               <button
//                 type="button"
//                 className="cob-toggle-btn"
//               >
//                 7 days
//               </button>

//             </div>

//           </div>

//           {/* Generated Link */}
//           <div
//             className="cob-generated-link-wrapper"
//             id="linkDisplayWrapper"
//             style={{ display: "flex" }}
//           >

//             <span
//               className="cob-generated-url-text"
//               id="generatedUrlText"
//             >
//               https://bgv.portal/candidate/link/7f3a9c2e...
//             </span>

//           </div>

//           {/* Buttons */}
//           <div className="cob-action-buttons-row">

//             <button
//               type="submit"
//               className="cob-action-btn cob-btn-generate"
//             >
//               GENERATE LINK
//             </button>

//             <button
//               type="button"
//               className="cob-action-btn cob-btn-copy"
//               id="btnCopyLink"
//             >
//               COPY LINK 📋
//             </button>

//             <button
//               type="button"
//               className="cob-action-btn cob-btn-sms"
//               id="btnSendSms"
//             >
//               SEND SMS
//             </button>

//             <button
//               type="button"
//               className="cob-action-btn cob-btn-email"
//               id="btnSendEmail"
//             >
//               EMAIL
//             </button>

//           </div>

//         </form>

//       </div>
//     </div>

//   </div>

//   {/* Footer */}
//   <footer className="cob-portal-footer">

//     <div className="cob-footer-left">
//       BGV Portal — Developer Design Reference v2.0
//     </div>

//     <div className="cob-footer-right">
//       Product Team Confidential
//     </div>

//   </footer>

// </div>
      
//     </main>
//   </section>
// </>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { API_URL } from "../src/config";

// ── Mock clients — replace with: GET /api/clients
const MOCK_CLIENTS = [
  { id:1, name:"Deloitte India Pvt Ltd",     gstin:"29AABCD1234F1Z5", contact:"Ramesh Joshi",    phone:"+91-98765-43210", billing:"postpaid_client",     checks:["emp","edu","addr","db"],         rates:{ emp:350, edu:280, addr:180, db:120, criminal:220, drug:400, court:160 } },
  { id:2, name:"Gaurav Technologies Pvt Ltd",gstin:"27AABCD5678G2Z3", contact:"Suresh Sharma",   phone:"+91-99876-54321", billing:"prepaid_client",      checks:["emp","edu","criminal"],          rates:{ emp:300, edu:250, addr:160, db:100, criminal:200, drug:380, court:140 } },
  { id:3, name:"Wipro Limited",              gstin:"29AAACW0000K1ZR", contact:"Kavya Nair",      phone:"+91-97654-32100", billing:"prepaid_candidate",   checks:["emp","edu","addr","db","criminal"],rates:{ emp:320, edu:260, addr:170, db:110, criminal:210, drug:390, court:150 } },
];

const CHECK_OPTIONS = [
  { key:"emp",     label:"Employment" },
  { key:"edu",     label:"Education"  },
  { key:"addr",    label:"Address"    },
  { key:"db",      label:"Database"   },
  { key:"criminal",label:"Criminal"   },
  { key:"drug",    label:"Drug Test"  },
  { key:"court",   label:"Courtroom"  },
];

const BILLING_OPTIONS = [
  { key:"prepaid_client",     label:"Prepaid — Client"    },
  { key:"prepaid_candidate",  label:"Prepaid — Candidate" },
  { key:"postpaid_client",    label:"Postpaid — Client"   },
];

const EXPIRY_OPTIONS = ["24h","48h","72h","7 days"];

const EMPTY_CLIENT_FORM = {
  name:"", gstin:"", contact:"", phone:"", billing:"postpaid_client",
  checks:["emp","edu","addr","db"], rates:{ emp:350, edu:280, addr:180, db:120, criminal:220, drug:400, court:160 },
};

const EMPTY_LINK_FORM = {
  candidateName:"", email:"", mobile:"", position:"",
  checks:["emp","edu"], expiry:"72h",
};

export default function Clientportal() {
  const navigate = useNavigate();

  // ── Client onboarding form ──
  const [clientForm, setClientForm] = useState(EMPTY_CLIENT_FORM);
  const [clientSaved, setClientSaved] = useState(false);
  const [clientLoading, setClientLoading] = useState(false);

  // ── Link generator form ──
  const [linkForm, setLinkForm]       = useState(EMPTY_LINK_FORM);
  const [generatedLink, setGeneratedLink] = useState("");
  const [linkCopied, setLinkCopied]   = useState(false);
  const [linkSent, setLinkSent]       = useState("");

  // ── Recently onboarded clients list ──
  const [clients, setClients]         = useState(MOCK_CLIENTS);
  const [selectedClient, setSelectedClient] = useState(null);

  // ── Client form helpers ──
  const setC = (field, val) => setClientForm(p => ({ ...p, [field]: val }));
  const toggleCheck = (key) =>
    setClientForm(p => ({
      ...p,
      checks: p.checks.includes(key) ? p.checks.filter(c=>c!==key) : [...p.checks, key],
    }));

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    if (!clientForm.name.trim() || !clientForm.gstin.trim()) {
      alert("Company name and GSTIN are required."); return;
    }
    setClientLoading(true);
    await new Promise(r => setTimeout(r, 800));
    // TODO: POST /api/clients { ...clientForm }
    const newClient = { id: Date.now(), ...clientForm };
    setClients(prev => [newClient, ...prev]);
    setClientSaved(true);
    setClientLoading(false);
    setTimeout(() => { setClientSaved(false); setClientForm(EMPTY_CLIENT_FORM); }, 2500);
  };

  // ── Load client into onboarding form ──
  const loadClient = (c) => {
    setSelectedClient(c.id);
    setClientForm({ name:c.name, gstin:c.gstin, contact:c.contact, phone:c.phone,
      billing:c.billing, checks:[...c.checks], rates:{ ...c.rates } });
  };

  // ── Link form helpers ──
  const setL = (field, val) => setLinkForm(p => ({ ...p, [field]: val }));
  const toggleLinkCheck = (key) =>
    setLinkForm(p => ({
      ...p,
      checks: p.checks.includes(key) ? p.checks.filter(c=>c!==key) : [...p.checks, key],
    }));

  const handleGenerateLink = (e) => {
    e.preventDefault();
    if (!linkForm.candidateName.trim() || !linkForm.email.trim()) {
      alert("Candidate name and email are required."); return;
    }
    // TODO: POST /api/candidate-links { ...linkForm }
    const token = Math.random().toString(36).slice(2,12);
    setGeneratedLink(`https://bgv.portal/candidate/${token}`);
    setLinkSent("");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink).catch(()=>{});
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const sendLink = (method) => {
    // TODO: POST /api/candidate-links/send { link: generatedLink, method, ...linkForm }
    setLinkSent(`${method} sent to ${linkForm.email || linkForm.mobile}!`);
    setTimeout(() => setLinkSent(""), 3000);
  };

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* ── Stats ── */}
            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total"><h4>{clients.length}</h4><p>Total Clients</p></div>
              <div className="card-inner-dash bdr-com"><h4>{clients.filter(c=>c.billing==="postpaid_client").length}</h4><p>Postpaid</p></div>
              <div className="card-inner-dash bdr-progress"><h4>{clients.filter(c=>c.billing.startsWith("prepaid")).length}</h4><p>Prepaid</p></div>
              <div className="card-inner-dash bdr-rate"><h4>7</h4><p>Check Types</p></div>
            </div>

            {/* ── Existing clients quick-load strip ── */}
            <div style={{ background:"#fff", border:"1px solid #e8ecf4", borderRadius:"10px", padding:"14px 16px" }}>
              <p style={{ fontSize:"12px", fontWeight:700, color:"#94a3b8", textTransform:"uppercase",
                letterSpacing:"0.06em", marginBottom:"10px" }}>
                Existing Clients — click to load into form
              </p>
              <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                {clients.map(c => (
                  <button key={c.id} onClick={() => loadClient(c)}
                    style={{
                      padding:"7px 14px", borderRadius:"20px", fontSize:"12px", fontWeight:600,
                      border:"1.5px solid", cursor:"pointer", transition:"all 0.15s",
                      borderColor: selectedClient===c.id ? "#2b3b8c" : "#e2e8f0",
                      background:  selectedClient===c.id ? "#eef1fb"  : "#f8fafc",
                      color:       selectedClient===c.id ? "#2b3b8c"  : "#475569",
                    }}>
                    {c.name.split(" ").slice(0,2).join(" ")}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Two-column layout ── */}
            <div className="cob-portal-container">
              <div className="cob-emplyment-check-body">

                {/* ══ LEFT: Client Onboarding Form ══ */}
                <div className="cob-frist-card">
                  <div className="cob-card-header cob-client-header">
                    <h2>CLIENT ONBOARDING FORM</h2>
                  </div>

                  <form className="cob-client-form" onSubmit={handleClientSubmit}>

                    <div className="cob-form-group">
                      <label className="cob-form-label">Company Name <span style={{color:"#eb4d4b"}}>*</span></label>
                      <input type="text" className="cob-form-input" placeholder="Enter company name"
                        value={clientForm.name} onChange={e => setC("name",e.target.value)} required />
                    </div>

                    <div className="cob-form-group">
                      <label className="cob-form-label">GSTIN <span style={{color:"#eb4d4b"}}>*</span></label>
                      <input type="text" className="cob-form-input" placeholder="e.g. 29AABCD1234F1Z5"
                        value={clientForm.gstin} onChange={e => setC("gstin",e.target.value)} required />
                    </div>

                    <div className="cob-form-group">
                      <label className="cob-form-label">Primary Contact</label>
                      <input type="text" className="cob-form-input" placeholder="Name — Phone"
                        value={clientForm.contact} onChange={e => setC("contact",e.target.value)} />
                    </div>

                    <div className="cob-form-group">
                      <label className="cob-form-label">Billing Mode</label>
                      <div className="cob-billing-toggle-group">
                        {BILLING_OPTIONS.map(b => (
                          <button key={b.key} type="button"
                            className={`cob-toggle-btn ${clientForm.billing===b.key ? "active-teal" : ""}`}
                            onClick={() => setC("billing",b.key)}>
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="cob-form-group">
                      <label className="cob-form-label">Agreed Check Types</label>
                      <div className="cob-check-tags-group">
                        {CHECK_OPTIONS.map(ch => (
                          <span key={ch.key}
                            className={`cob-check-tag ${clientForm.checks.includes(ch.key) ? "active-navy" : ""}`}
                            onClick={() => toggleCheck(ch.key)}
                            style={{ cursor:"pointer" }}>
                            {ch.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="cob-form-group">
                      <label className="cob-form-label">Rate Card</label>
                      <div className="cob-rate-cards-container">
                        {clientForm.checks.slice(0,4).map(key => {
                          const ch = CHECK_OPTIONS.find(c=>c.key===key);
                          return (
                            <div key={key} className="cob-rate-card-item">
                              <span className="cob-rate-label">{ch?.label}</span>
                              <input type="number" style={{ width:"60px", border:"1px solid #bfdbfe",
                                borderRadius:"4px", padding:"2px 6px", textAlign:"center",
                                fontSize:"13px", fontWeight:700, color:"#1e3a8a", background:"transparent" }}
                                value={clientForm.rates[key] || 0}
                                onChange={e => setC("rates",{ ...clientForm.rates, [key]: Number(e.target.value) })} />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {clientSaved && (
                      <div style={{ background:"#f0fdf4", border:"1px solid #86efac", borderRadius:"8px",
                        padding:"10px 14px", fontSize:"13px", fontWeight:700, color:"#16a34a" }}>
                        ✓ Client account created successfully.
                      </div>
                    )}

                    <div className="cob-form-actions">
                      <button type="submit" className="cob-btn-create-account" disabled={clientLoading}>
                        {clientLoading ? "CREATING..." : "CREATE CLIENT ACCOUNT"}
                      </button>
                    </div>
                  </form>
                </div>

                {/* ══ RIGHT: Candidate Link Generator ══ */}
                <div className="cob-second-card">
                  <div className="cob-card-header cob-portal-header">
                    <h2>CANDIDATE PORTAL — LINK GENERATOR</h2>
                  </div>

                  <div className="cob-portal-generator-content">
                    <p className="cob-section-description">
                      Generate a unique onboarding link per candidate.
                    </p>

                    <form className="cob-generator-form" onSubmit={handleGenerateLink}>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Candidate Name <span style={{color:"#eb4d4b"}}>*</span></label>
                        <input type="text" className="cob-form-input" placeholder="Enter candidate name"
                          value={linkForm.candidateName} onChange={e => setL("candidateName",e.target.value)} required />
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Email <span style={{color:"#eb4d4b"}}>*</span></label>
                        <input type="email" className="cob-form-input" placeholder="candidate@email.com"
                          value={linkForm.email} onChange={e => setL("email",e.target.value)} required />
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Mobile</label>
                        <input type="tel" className="cob-form-input" placeholder="+91 XXXXX XXXXX"
                          value={linkForm.mobile} onChange={e => setL("mobile",e.target.value)} />
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Position Applied</label>
                        <input type="text" className="cob-form-input" placeholder="e.g. Senior Engineer"
                          value={linkForm.position} onChange={e => setL("position",e.target.value)} />
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Check Types</label>
                        <div className="cob-checkboxes-row" style={{ flexWrap:"wrap" }}>
                          {CHECK_OPTIONS.map(ch => (
                            <label key={ch.key} className="cob-checkbox-item"
                              style={{ flex:"1 1 80px", background: linkForm.checks.includes(ch.key) ? "var(--tab-btn-color)" : "#e2e8f0",
                                color: linkForm.checks.includes(ch.key) ? "#fff" : "#475569" }}>
                              <input type="checkbox" className="cob-checkbox-native"
                                checked={linkForm.checks.includes(ch.key)}
                                onChange={() => toggleLinkCheck(ch.key)} />
                              <span className="cob-checkbox-label" style={{ fontSize:"11px", fontWeight:700 }}>
                                {ch.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="cob-form-group">
                        <label className="cob-form-label">Link Expiry</label>
                        <div className="cob-expiry-toggle-group">
                          {EXPIRY_OPTIONS.map(opt => (
                            <button key={opt} type="button"
                              className={`cob-toggle-btn ${linkForm.expiry===opt ? "active-teal":""}`}
                              onClick={() => setL("expiry",opt)}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Generated link display */}
                      {generatedLink && (
                        <div className="cob-generated-link-wrapper">
                          <span className="cob-generated-url-text">{generatedLink}</span>
                        </div>
                      )}

                      {linkSent && (
                        <div style={{ background:"#f0fdf4", border:"1px solid #86efac", borderRadius:"8px",
                          padding:"8px 12px", fontSize:"13px", fontWeight:600, color:"#16a34a" }}>
                          ✓ {linkSent}
                        </div>
                      )}

                      <div className="cob-action-buttons-row">
                        <button type="submit" className="cob-action-btn cob-btn-generate">
                          GENERATE LINK
                        </button>
                        <button type="button" className="cob-action-btn cob-btn-copy"
                          onClick={copyLink} disabled={!generatedLink}
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

              </div>

              {/* ── Client table ── */}
              <div className="down-table" style={{ marginTop:"20px" }}>
                <div style={{ background:"var(--primary-color)", padding:"12px 16px",
                  borderRadius:"10px 10px 0 0" }}>
                  <h3 style={{ color:"#fff", fontSize:"15px", fontWeight:700, margin:0 }}>
                    ONBOARDED CLIENTS ({clients.length})
                  </h3>
                </div>
                <table>
                  <thead>
                    <tr><th>Company</th><th>GSTIN</th><th>Contact</th><th>Billing</th><th>Check Types</th></tr>
                  </thead>
                  <tbody>
                    {clients.map(c => (
                      <tr key={c.id}>
                        <td style={{ fontWeight:600 }}>{c.name}</td>
                        <td style={{ fontFamily:"monospace", fontSize:"12px" }}>{c.gstin}</td>
                        <td>{c.contact}</td>
                        <td>
                          <span className={`status ${c.billing.startsWith("prepaid")?"completed":"in-progress"}`}
                            style={{ width:"auto", padding:"4px 10px", fontSize:"11px" }}>
                            {c.billing.replace("_"," ").replace(/\b\w/g,l=>l.toUpperCase())}
                          </span>
                        </td>
                        <td style={{ fontSize:"12px", color:"#64748b" }}>
                          {c.checks.map(k => CHECK_OPTIONS.find(o=>o.key===k)?.label).join(" · ")}
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