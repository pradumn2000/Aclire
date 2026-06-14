// EntitySelect.jsx — Shared dropdown for any form field that needs a
// university / lab / court / company picked from the admin-managed database.
//
// Usage:
//   <EntitySelect entity="university" value={form.institution} onChange={(v) => set("institution", v)} />
//   <EntitySelect entity="company"    value={form.company}     onChange={(v) => set("company", v)} />
//   <EntitySelect entity="lab"        value={form.lab}         onChange={(v) => set("lab", v)} />
//   <EntitySelect entity="court"      value={form.court}       onChange={(v) => set("court", v)} />
//
// Falls back to a free-text input ("+ Other") if the entry isn't in the
// database yet — admins should then add it via AddInstitution / AddCompany
// so it shows up for everyone going forward.

import { useState } from "react";
import { useInstitutions } from "../src/store/institutionStore";
import { useCompanies } from "../src/store/companyStore";

export default function EntitySelect({
  entity,                 // "university" | "lab" | "court" | "company"
  value,
  onChange,
  placeholder,
  required = false,
  name,
  style = {},
}) {
  const isCompany = entity === "company";

  // Both hooks are always called (rules of hooks) — only the relevant one is used.
  const { institutions, loading: instLoading } = useInstitutions();
  const { companies, loading: compLoading }    = useCompanies();

  const options = isCompany
    ? companies.filter((c) => c.status !== "inactive")
    : institutions.filter((i) => i.status !== "inactive" && i.type === entity);

  const loading = isCompany ? compLoading : instLoading;

  const matchesList = !value || options.some((o) => o.name === value);
  const [customMode, setCustomMode] = useState(!matchesList);

  const baseStyle = {
    padding: "9px 12px",
    border: "1.5px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "13px",
    outline: "none",
    background: "#f8fafc",
    color: "#1e293b",
    width: "100%",
    boxSizing: "border-box",
    ...style,
  };

  // ── Free-text fallback ──────────────────────────────────────
  if (customMode) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <input
          type="text"
          name={name}
          required={required}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Enter ${entity} name…`}
          style={{ ...baseStyle, cursor: "text" }}
        />
        {options.length > 0 && (
          <button
            type="button"
            onClick={() => setCustomMode(false)}
            style={{
              fontSize: "11px", color: "#2563eb", background: "none",
              border: "none", cursor: "pointer", textAlign: "left", padding: 0,
            }}
          >
            ← choose from list instead
          </button>
        )}
      </div>
    );
  }

  // ── Dropdown of DB-backed entries ───────────────────────────
  return (
    <select
      name={name}
      required={required}
      value={value || ""}
      onChange={(e) => {
        if (e.target.value === "__other__") {
          setCustomMode(true);
          onChange("");
        } else {
          onChange(e.target.value);
        }
      }}
      style={{ ...baseStyle, cursor: "pointer" }}
    >
      <option value="">
        {loading ? "Loading…" : (placeholder || `— Select ${entity} —`)}
      </option>
      {options.map((o) => (
        <option key={o.id} value={o.name}>{o.name}</option>
      ))}
      <option value="__other__">+ Other (not in list)</option>
    </select>
  );
}