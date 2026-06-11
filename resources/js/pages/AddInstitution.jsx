// AddInstitution.jsx — Admin page to manage the institution database
// Route: /AddInstitution (admin only)
// Features:
//   - Manual add form (single institution)
//   - Bulk import via CSV/Excel (parse client-side)
//   - Table with search, type filter, delete
//   - Download template CSV

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useInstitutions } from "../src/store/institutionStore";


const TYPES = [
  { key: "university", label: "University / College",  icon: "🎓" },
  { key: "company",    label: "Company / Employer",    icon: "🏢" },
  { key: "lab",        label: "Diagnostic Lab",        icon: "🔬" },
  { key: "court",      label: "Court",                 icon: "⚖️" },
];

const EMPTY_FORM = { type: "university", name: "", code: "", state: "", website: "", stature: "", industry: "", aicte: "", accredited: false };

export default function AddInstitution() {
  const navigate = useNavigate();
  const { institutions, addOne, bulkAdd, remove, refresh } = useInstitutions();

  const [typeFilter, setTypeFilter] = useState("all");
  const [search, setSearch]         = useState("");
  const [showForm, setShowForm]     = useState(false);
  const [form, setForm]             = useState(EMPTY_FORM);
  const [formError, setFormError]   = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [bulkResult, setBulkResult] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const fileRef = useRef(null);

  const set = (f, v) => setForm((p) => ({ ...p, [f]: v }));

  // ── Filtered list ──────────────────────────────────────────────────────────
  const filtered = institutions.filter((i) => {
    if (i.status === "inactive") return false;
    if (typeFilter !== "all" && i.type !== typeFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        i.name.toLowerCase().includes(q) ||
        (i.code || "").toLowerCase().includes(q) ||
        (i.state || "").toLowerCase().includes(q)
      );
    }
    return true;
  });

  // ── Manual add ────────────────────────────────────────────────────────────
  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name.trim()) { setFormError("Name is required."); return; }
    setFormError("");
    addOne(form);
    setForm(EMPTY_FORM);
    setFormSuccess(`"${form.name}" added successfully.`);
    setTimeout(() => { setFormSuccess(""); setShowForm(false); }, 1500);
  };

  // ── Bulk CSV/Excel parse ───────────────────────────────────────────────────
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const text   = evt.target.result;
        const lines  = text.trim().split("\n");
        const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/\s+/g, "_"));
        const rows = lines.slice(1).map((line) => {
          const vals = line.split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
          const obj  = {};
          headers.forEach((h, i) => { obj[h] = vals[i] || ""; });
          return obj;
        }).filter((r) => r.name && r.type);

        if (rows.length === 0) {
          setBulkResult({ error: "No valid rows found. Make sure CSV has 'name' and 'type' columns." });
          return;
        }
        bulkAdd(rows);
        setBulkResult({ count: rows.length });
        setTimeout(() => setBulkResult(null), 4000);
      } catch {
        setBulkResult({ error: "Failed to parse file. Please use the template format." });
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  // ── Template CSV download ──────────────────────────────────────────────────
  const downloadTemplate = (type) => {
    const headers = "type,name,code,state,website,stature,industry,aicte,accredited";
    const examples = {
      university: `university,Example University,EU,Maharashtra,https://example.edu,government,education,approved,true`,
      company:    `company,Example Corp Ltd,ECL,Karnataka,https://example.com,private,IT,,`,
      lab:        `lab,Example Diagnostics,ED,Pan India,https://example.lab,,,,true`,
      court:      `court,District Court Example,DCE,Delhi,,,,,`,
    };
    const csv = `${headers}\n${examples[type] || examples.university}`;
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = `institution_template_${type}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  // ── Export current list ────────────────────────────────────────────────────
  const exportCSV = () => {
    const rows = filtered.map((i) =>
      [i.type, i.name, i.code, i.state, i.website, i.stature, i.industry, i.aicte, i.verified ? "true" : "false"].join(",")
    );
    const csv  = `type,name,code,state,website,stature,industry,aicte,verified\n${rows.join("\n")}`;
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = "institutions_export.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  const counts = TYPES.reduce((acc, t) => {
    acc[t.key] = institutions.filter((i) => i.type === t.key && i.status !== "inactive").length;
    return acc;
  }, {});

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* ── Page header ── */}
            <div className="dash-upper-head">
              <div className="left" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1e2761", margin: 0 }}>
                  Institution Database
                </h3>
                <span style={{ fontSize: "12px", color: "#64748b", background: "#eef3ff", padding: "3px 10px", borderRadius: "20px" }}>
                  {institutions.filter(i => i.status !== "inactive").length} total
                </span>
              </div>
              <div className="right" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {/* Search */}
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    placeholder="Search name, code, state…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px", outline: "none", minWidth: "220px" }}
                  />
                  {search && (
                    <button onClick={() => setSearch("")} style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "16px", color: "#94a3b8" }}>×</button>
                  )}
                </div>

                {/* Bulk import */}
                <input ref={fileRef} type="file" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} style={{ display: "none" }} />
                <button className="secondary-cta import" onClick={() => fileRef.current?.click()}>
                  <img src="images/dashboard/export-excel.svg" alt="" /> Import CSV
                </button>

                {/* Export */}
                <button className="primary-cta export" onClick={exportCSV}>
                  <img src="images/dashboard/export-icon.svg" alt="" /> Export
                </button>

                {/* Add button */}
                <button className="primary-cta" onClick={() => { setShowForm(v => !v); setFormError(""); setFormSuccess(""); }}>
                  {showForm ? "Cancel" : "+ Add Institution"}
                </button>
              </div>
            </div>

            {/* ── Bulk result toast ── */}
            {bulkResult && (
              <div style={{ padding: "12px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, background: bulkResult.error ? "#fef2f2" : "#f0fdf4", color: bulkResult.error ? "#b91c1c" : "#15803d", border: `1px solid ${bulkResult.error ? "#fca5a5" : "#bbf7d0"}` }}>
                {bulkResult.error ? `⚠ ${bulkResult.error}` : `✔ ${bulkResult.count} institutions imported successfully.`}
              </div>
            )}

            {/* ── Template download hints ── */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {TYPES.map((t) => (
                <button key={t.key} onClick={() => downloadTemplate(t.key)}
                  style={{ fontSize: "12px", padding: "5px 12px", border: "1px dashed #cbd5e1", borderRadius: "6px", background: "#f8fafc", color: "#64748b", cursor: "pointer" }}>
                  {t.icon} {t.label} template ↓
                </button>
              ))}
            </div>

            {/* ── Manual add form ── */}
            {showForm && (
              <div className="down-table" style={{ padding: "24px" }}>
                <h4 style={{ marginBottom: "16px", fontSize: "14px", fontWeight: 700, color: "#1e2761" }}>Add New Institution</h4>
                <form onSubmit={handleAdd}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "12px" }}>

                    <FieldGroup label="Type *">
                      <select value={form.type} onChange={(e) => set("type", e.target.value)} style={selectStyle}>
                        {TYPES.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
                      </select>
                    </FieldGroup>

                    <FieldGroup label="Name *">
                      <input type="text" placeholder="Institution name" value={form.name}
                        onChange={(e) => set("name", e.target.value)} required style={fieldStyle} />
                    </FieldGroup>

                    <FieldGroup label="Short Code">
                      <input type="text" placeholder="e.g. DU, TCS" value={form.code}
                        onChange={(e) => set("code", e.target.value.toUpperCase())} maxLength={8} style={fieldStyle} />
                    </FieldGroup>

                    <FieldGroup label="State">
                      <input type="text" placeholder="e.g. Maharashtra" value={form.state}
                        onChange={(e) => set("state", e.target.value)} style={fieldStyle} />
                    </FieldGroup>

                    <FieldGroup label="Website">
                      <input type="url" placeholder="https://..." value={form.website}
                        onChange={(e) => set("website", e.target.value)} style={fieldStyle} />
                    </FieldGroup>

                    {form.type === "university" && (
                      <>
                        <FieldGroup label="Stature">
                          <select value={form.stature} onChange={(e) => set("stature", e.target.value)} style={selectStyle}>
                            <option value="">Select</option>
                            <option value="government">Government</option>
                            <option value="private">Private</option>
                            <option value="autonomous">Autonomous</option>
                            <option value="deemed">Deemed University</option>
                          </select>
                        </FieldGroup>
                        <FieldGroup label="AICTE Status">
                          <select value={form.aicte} onChange={(e) => set("aicte", e.target.value)} style={selectStyle}>
                            <option value="">Select</option>
                            <option value="approved">Approved</option>
                            <option value="not_approved">Not Approved</option>
                            <option value="applied">Applied / Pending</option>
                          </select>
                        </FieldGroup>
                      </>
                    )}

                    {form.type === "company" && (
                      <FieldGroup label="Industry">
                        <input type="text" placeholder="e.g. IT, Banking" value={form.industry}
                          onChange={(e) => set("industry", e.target.value)} style={fieldStyle} />
                      </FieldGroup>
                    )}

                    {form.type === "lab" && (
                      <FieldGroup label="Accredited">
                        <label style={{ display: "flex", alignItems: "center", gap: "8px", height: "42px", cursor: "pointer" }}>
                          <input type="checkbox" checked={form.accredited}
                            onChange={(e) => set("accredited", e.target.checked)} />
                          <span style={{ fontSize: "13px", color: "#475569" }}>NABL Accredited</span>
                        </label>
                      </FieldGroup>
                    )}

                  </div>

                  {formError   && <p style={{ color: "#dc2626", fontSize: "13px", marginBottom: "8px" }}>{formError}</p>}
                  {formSuccess && <p style={{ color: "#16a34a", fontSize: "13px", marginBottom: "8px" }}>✔ {formSuccess}</p>}

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit" className="primary-cta" style={{ fontSize: "13px", height: "40px" }}>
                      Add Institution
                    </button>
                    <button type="button" className="secondary-cta" onClick={() => setShowForm(false)} style={{ fontSize: "13px", height: "40px" }}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ── Type filter tabs ── */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[{ key: "all", label: "All", icon: "🏛" }, ...TYPES].map((t) => (
                <button
                  key={t.key}
                  className={`tab-cta ${typeFilter === t.key ? "active" : ""}`}
                  onClick={() => setTypeFilter(t.key)}
                >
                  {t.icon} {t.label}
                  <span style={{ marginLeft: "5px", background: "rgba(0,0,0,0.1)", borderRadius: "8px", padding: "1px 6px", fontSize: "11px", fontWeight: 700 }}>
                    {t.key === "all" ? institutions.filter(i => i.status !== "inactive").length : (counts[t.key] || 0)}
                  </span>
                </button>
              ))}
            </div>

            {/* ── Table ── */}
            <div className="down-table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Code</th>
                    <th>State</th>
                    <th>Details</th>
                    <th>Verified</th>
                    <th>Added</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan="9" style={{ textAlign: "center", padding: "32px", color: "#94a3b8" }}>
                        No institutions found. {search && "Try clearing the search."}
                      </td>
                    </tr>
                  ) : (
                    filtered.map((inst, i) => (
                      <tr key={inst.id}>
                        <td style={{ color: "#64748b", fontSize: "12px" }}>{i + 1}</td>
                        <td style={{ fontWeight: 600, color: "#1e293b" }}>{inst.name}</td>
                        <td>
                          <span style={{
                            padding: "3px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 700,
                            background: typeColors[inst.type]?.bg || "#f0f2f8",
                            color:      typeColors[inst.type]?.text || "#475569",
                          }}>
                            {TYPES.find(t => t.key === inst.type)?.icon} {inst.type}
                          </span>
                        </td>
                        <td style={{ fontSize: "13px", color: "#64748b", fontFamily: "monospace" }}>{inst.code || "—"}</td>
                        <td style={{ fontSize: "13px" }}>{inst.state || "—"}</td>
                        <td style={{ fontSize: "12px", color: "#64748b" }}>
                          {inst.type === "university" && inst.aicte && `AICTE: ${inst.aicte}`}
                          {inst.type === "company" && inst.industry}
                          {inst.type === "lab" && inst.accredited && "NABL Accredited"}
                          {inst.type === "court" && inst.level && `Level: ${inst.level}`}
                          {!inst.aicte && !inst.industry && !inst.accredited && !inst.level && "—"}
                        </td>
                        <td>
                          <span style={{ color: inst.verified ? "#16a34a" : "#94a3b8", fontWeight: 700, fontSize: "13px" }}>
                            {inst.verified ? "✔ Yes" : "Pending"}
                          </span>
                        </td>
                        <td style={{ fontSize: "12px", color: "#64748b" }}>
                          {inst.createdAt ? new Date(inst.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "Seed"}
                        </td>
                        <td>
                          <button
                            className="view-cta"
                            style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fca5a5", fontSize: "12px", height: "34px", width: "70px" }}
                            onClick={() => setDeleteConfirm(inst)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div style={{ padding: "8px 16px", fontSize: "12px", color: "#94a3b8", borderTop: "1px solid #f1f5f9" }}>
                Showing {filtered.length} of {institutions.filter(i => i.status !== "inactive").length} institutions
              </div>
            </div>

          </div>
        </main>
      </section>

      {/* ── Delete confirm modal ── */}
      {deleteConfirm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 }}>
          <div style={{ background: "#fff", borderRadius: "14px", padding: "32px", maxWidth: "400px", width: "90%", boxShadow: "0 20px 60px rgba(0,0,0,.2)" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e293b", marginBottom: "10px" }}>Remove Institution?</h3>
            <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "24px" }}>
              <strong>{deleteConfirm.name}</strong> will be removed from the database and will no longer appear in verifier dropdowns.
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button onClick={() => setDeleteConfirm(null)}
                style={{ padding: "9px 18px", border: "1.5px solid #e2e8f0", borderRadius: "8px", background: "#fff", color: "#475569", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
                Cancel
              </button>
              <button
                onClick={() => { remove(deleteConfirm.id); setDeleteConfirm(null); }}
                style={{ padding: "9px 18px", border: "none", borderRadius: "8px", background: "#dc2626", color: "#fff", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function FieldGroup({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label style={{ fontSize: "11px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</label>
      {children}
    </div>
  );
}

const fieldStyle  = { padding: "9px 12px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "13px", outline: "none", background: "#f8fafc", color: "#1e293b", width: "100%", boxSizing: "border-box" };
const selectStyle = { ...fieldStyle, cursor: "pointer" };

const typeColors = {
  university: { bg: "#eff6ff", text: "#1d4ed8" },
  company:    { bg: "#f0fdf4", text: "#15803d" },
  lab:        { bg: "#fdf4ff", text: "#7c3aed" },
  court:      { bg: "#fffbeb", text: "#b45309" },
};
