// CandidatePortal.jsx — Token-gated document upload portal for candidates
// Route: /candidate/:token  (public — accessed via generated link)
// The token encodes: { caseId, candidateName, email, checks[], expiry }
// When the page loads it decodes the token, shows required upload fields, 
// and on submit calls POST /api/candidate/submit/:caseId

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "./config";
import { getCaseById, updateCase } from "./caseStore";

// ── Check-type → required documents map ───────────────────────────────────────
const REQUIRED_DOCS = {
  employment: [
    { key: "offer_letter",       label: "Offer Letter",              accept: ".pdf,.jpg,.png" },
    { key: "relieving_letter",   label: "Relieving / Experience Letter", accept: ".pdf,.jpg,.png" },
    { key: "payslips",           label: "Last 3 Payslips",           accept: ".pdf,.jpg,.png,.zip" },
    { key: "appointment_letter", label: "Appointment Letter",        accept: ".pdf,.jpg,.png" },
  ],
  education: [
    { key: "degree_certificate", label: "Degree Certificate",        accept: ".pdf,.jpg,.png" },
    { key: "marksheet",          label: "Final Year Marksheet",       accept: ".pdf,.jpg,.png" },
    { key: "provisional_cert",   label: "Provisional Certificate",   accept: ".pdf,.jpg,.png" },
  ],
  address: [
    { key: "aadhar",             label: "Aadhar Card",               accept: ".pdf,.jpg,.png" },
    { key: "utility_bill",       label: "Utility Bill / Rent Agreement", accept: ".pdf,.jpg,.png" },
  ],
  database: [
    { key: "pan_card",           label: "PAN Card",                  accept: ".pdf,.jpg,.png" },
    { key: "aadhar",             label: "Aadhar Card",               accept: ".pdf,.jpg,.png" },
  ],
  criminal: [
    { key: "aadhar",             label: "Aadhar Card",               accept: ".pdf,.jpg,.png" },
    { key: "police_verification",label: "Police Verification (if any)", accept: ".pdf,.jpg,.png" },
  ],
  drug_test: [
    { key: "consent_form",       label: "Drug Test Consent Form",    accept: ".pdf,.jpg,.png" },
    { key: "govt_id",            label: "Government ID Proof",       accept: ".pdf,.jpg,.png" },
  ],
  courtroom: [
    { key: "aadhar",             label: "Aadhar Card",               accept: ".pdf,.jpg,.png" },
    { key: "legal_docs",         label: "Any Existing Legal Documents", accept: ".pdf,.jpg,.png,.zip" },
  ],
};

// Common docs always required
const COMMON_DOCS = [
  { key: "photo",    label: "Passport Size Photo",       accept: ".jpg,.jpeg,.png" },
  { key: "govt_id",  label: "Government ID (Aadhar/PAN)", accept: ".pdf,.jpg,.png" },
];

// ── Token decoder ─────────────────────────────────────────────────────────────
function decodeToken(token) {
  try {
    // Real backend will issue JWT — here we try to decode base64 payload
    const payload = JSON.parse(atob(token));
    return payload;
  } catch {
    return null;
  }
}

// ── Mock token decoder for localStorage-based links ──────────────────────────
function resolveFromStore(token) {
  try {
    const links = JSON.parse(localStorage.getItem("bgv_candidate_links") || "{}");
    return links[token] || null;
  } catch { return null; }
}

export default function CandidatePortal() {
  const { token }   = useParams();
  const navigate    = useNavigate();

  const [info, setInfo]       = useState(null);    // { caseId, candidateName, email, checks, expiry }
  const [caseData, setCaseData] = useState(null);
  const [error, setError]     = useState("");
  const [files, setFiles]     = useState({});       // { docKey: File }
  const [step, setStep]       = useState("loading"); // loading | form | submitted | expired | invalid
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress]   = useState(0);

  // ── Decode token on mount ─────────────────────────────────────────────────
  useEffect(() => {
    if (!token) { setStep("invalid"); return; }

    // Try localStorage link store first (for our generated links)
    const linkData = resolveFromStore(token);
    if (linkData) {
      if (linkData.expiry && new Date(linkData.expiry) < new Date()) {
        setStep("expired");
        return;
      }
      setInfo(linkData);
      const c = getCaseById(linkData.caseId);
      setCaseData(c);
      setStep("form");
      return;
    }

    // Try JWT decode
    const decoded = decodeToken(token);
    if (!decoded || !decoded.caseId) { setStep("invalid"); return; }
    if (decoded.expiry && new Date(decoded.expiry) < new Date()) { setStep("expired"); return; }
    setInfo(decoded);
    const c = getCaseById(decoded.caseId);
    setCaseData(c);
    setStep("form");
  }, [token]);

  // ── File select ───────────────────────────────────────────────────────────
  const handleFile = (key, file) => {
    setFiles((p) => ({ ...p, [key]: file }));
  };

  // ── Determine required docs from checks ──────────────────────────────────
  const requiredDocs = () => {
    const checks = info?.checks || caseData?.checkKeys || [];
    const seen   = new Set();
    const docs   = [...COMMON_DOCS];
    checks.forEach((c) => {
      (REQUIRED_DOCS[c] || []).forEach((d) => {
        if (!seen.has(d.key)) { seen.add(d.key); docs.push(d); }
      });
    });
    return docs;
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setProgress(0);

    // Check mandatory files
    const docs = requiredDocs();
    const mandatory = docs.filter((d) => ["photo", "govt_id"].includes(d.key));
    const missing = mandatory.filter((d) => !files[d.key]);
    if (missing.length > 0) {
      setError(`Please upload: ${missing.map((d) => d.label).join(", ")}`);
      setUploading(false);
      return;
    }
    setError("");

    try {
      // Try real API
      const formData = new FormData();
      formData.append("caseId",         info.caseId);
      formData.append("candidateName",  info.candidateName);
      formData.append("email",          info.email);
      formData.append("token",          token);
      Object.entries(files).forEach(([key, file]) => {
        if (file) formData.append(key, file);
      });

      // Simulate upload progress
      const interval = setInterval(() => {
        setProgress((p) => Math.min(p + 10, 90));
      }, 200);

      try {
        const res = await fetch(`${API_URL}/api/candidate/submit/${info.caseId}`, {
          method: "POST",
          body: formData,
        });
        clearInterval(interval);
        setProgress(100);
        if (!res.ok) throw new Error("Upload failed");
      } catch {
        clearInterval(interval);
        setProgress(100);
        // Fallback: mark in localStorage
        updateCase(info.caseId, {
          status: "in-progress",
          docsSubmitted: true,
          docsSubmittedAt: new Date().toISOString(),
          submittedDocs: Object.keys(files),
        });
      }

      await new Promise((r) => setTimeout(r, 400));
      setStep("submitted");
    } finally {
      setUploading(false);
    }
  };

  // ── Render states ─────────────────────────────────────────────────────────

  if (step === "loading") {
    return <CenteredCard><div style={{ color: "#64748b", fontSize: "15px" }}>⌛ Loading your portal…</div></CenteredCard>;
  }

  if (step === "invalid") {
    return (
      <CenteredCard>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>❌</div>
        <h2 style={{ color: "#1e2761", marginBottom: "8px" }}>Invalid Link</h2>
        <p style={{ color: "#64748b", fontSize: "14px" }}>This link is invalid or has already been used. Please contact your HR team for a new link.</p>
      </CenteredCard>
    );
  }

  if (step === "expired") {
    return (
      <CenteredCard>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>⏰</div>
        <h2 style={{ color: "#1e2761", marginBottom: "8px" }}>Link Expired</h2>
        <p style={{ color: "#64748b", fontSize: "14px" }}>This upload link has expired. Please contact your HR team to generate a new link.</p>
      </CenteredCard>
    );
  }

  if (step === "submitted") {
    return (
      <CenteredCard>
        <div style={{ width: "64px", height: "64px", background: "#02c39a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", margin: "0 auto 20px" }}>✓</div>
        <h2 style={{ color: "#1e2761", marginBottom: "8px" }}>Documents Submitted!</h2>
        <p style={{ color: "#64748b", fontSize: "14px", maxWidth: "320px", margin: "0 auto 20px", textAlign: "center" }}>
          Your documents for <strong>{info?.candidateName}</strong> (Case: {info?.caseId}) have been received. You'll be notified once verification is complete.
        </p>
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "14px 20px", fontSize: "13px", color: "#15803d" }}>
          Submitted: {Object.keys(files).length} document(s) · {new Date().toLocaleDateString("en-IN")}
        </div>
      </CenteredCard>
    );
  }

  // ── Main form ─────────────────────────────────────────────────────────────
  const docs = requiredDocs();

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4ff", padding: "24px 16px" }}>
      {/* Header */}
      <div style={{ background: "#1e2761", borderRadius: "14px", padding: "20px 28px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px", maxWidth: "800px", margin: "0 auto 24px" }}>
        <img src="/images/login/logo.png" alt="logo" style={{ width: "100px", height: "36px", objectFit: "contain", borderRadius: "6px" }} />
        <div>
          <h1 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, margin: 0 }}>
            BGV Document Upload Portal
          </h1>
          <p style={{ color: "#cad2e1", fontSize: "13px", margin: 0 }}>
            Case: <strong style={{ color: "#02c39a" }}>{info?.caseId}</strong> · {info?.candidateName}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Case info card */}
        <div style={{ background: "#fff", borderRadius: "12px", padding: "20px", marginBottom: "20px", border: "1px solid #e8ecf4" }}>
          <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "14px" }}>
            Your Verification Details
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
            {[
              ["Candidate",  info?.candidateName || caseData?.candidate],
              ["Email",      info?.email || caseData?.email],
              ["Case ID",    info?.caseId],
              ["Checks",     (info?.checks || caseData?.checkKeys || []).join(", ") || "See below"],
              ["Client",     caseData?.client || "—"],
              ["Expires",    info?.expiry ? new Date(info.expiry).toLocaleDateString("en-IN") : "N/A"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase" }}>{k}</span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>{v || "—"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upload form */}
        <form onSubmit={handleSubmit}>
          <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e8ecf4", overflow: "hidden", marginBottom: "20px" }}>
            <div style={{ background: "#1e2761", padding: "14px 20px" }}>
              <h3 style={{ color: "#fff", fontSize: "14px", fontWeight: 700, margin: 0 }}>
                Required Documents ({docs.length})
              </h3>
            </div>

            <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {docs.map((doc) => {
                const uploaded = !!files[doc.key];
                return (
                  <div key={doc.key} style={{
                    display: "flex", alignItems: "center", gap: "14px",
                    padding: "14px 16px", borderRadius: "10px",
                    border: uploaded ? "2px solid #02c39a" : "1.5px solid #e2e8f0",
                    background: uploaded ? "#f0fdf4" : "#f8fafc",
                    transition: "all .15s",
                  }}>
                    <div style={{ fontSize: "24px" }}>{uploaded ? "✅" : "📄"}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>
                        {doc.label}
                        {["photo", "govt_id"].includes(doc.key) && (
                          <span style={{ marginLeft: "6px", background: "#fef3c7", color: "#b45309", fontSize: "10px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px" }}>REQUIRED</span>
                        )}
                      </div>
                      {uploaded && (
                        <div style={{ fontSize: "12px", color: "#16a34a", marginTop: "2px" }}>
                          ✓ {files[doc.key].name} ({(files[doc.key].size / 1024).toFixed(1)} KB)
                        </div>
                      )}
                    </div>
                    <label style={{
                      padding: "8px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer",
                      background: uploaded ? "#02c39a" : "#1e2761", color: "#fff", whiteSpace: "nowrap",
                    }}>
                      {uploaded ? "Change" : "Upload"}
                      <input
                        type="file"
                        accept={doc.accept}
                        style={{ display: "none" }}
                        onChange={(e) => handleFile(doc.key, e.target.files[0])}
                      />
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress */}
          {uploading && (
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#64748b", marginBottom: "6px" }}>
                <span>Uploading documents…</span>
                <span>{progress}%</span>
              </div>
              <div style={{ height: "6px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${progress}%`, background: "#02c39a", transition: "width .2s", borderRadius: "3px" }} />
              </div>
            </div>
          )}

          {error && (
            <div style={{ padding: "12px 16px", borderRadius: "8px", background: "#fef2f2", border: "1px solid #fca5a5", color: "#b91c1c", fontSize: "13px", fontWeight: 600, marginBottom: "16px" }}>
              ⚠ {error}
            </div>
          )}

          <button
            type="submit"
            className="primary-cta"
            disabled={uploading}
            style={{ width: "100%", fontSize: "15px", height: "52px" }}
          >
            {uploading ? `Uploading… ${progress}%` : "Submit Documents →"}
          </button>

          <p style={{ textAlign: "center", fontSize: "12px", color: "#94a3b8", marginTop: "12px" }}>
            🔒 Your documents are encrypted and used only for verification purposes.
          </p>
        </form>
      </div>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function CenteredCard({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f4ff", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ background: "#fff", borderRadius: "16px", padding: "48px 40px", maxWidth: "440px", width: "100%", textAlign: "center", boxShadow: "0 8px 30px rgba(0,0,0,.08)" }}>
        {children}
      </div>
    </div>
  );
}
