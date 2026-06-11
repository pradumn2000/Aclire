// institutionStore.js — Shared store for Universities, Companies, Labs, Courts
// Used by Verifyer.jsx dropdowns and AddInstitution.jsx admin page
// Replace localStorage with API calls when backend is ready:
//   GET  /api/institutions?type=university
//   POST /api/institutions
//   POST /api/institutions/bulk (CSV/Excel upload)
//   DELETE /api/institutions/:id

const STORE_KEY = "bgv_institutions_store";

// ─── Seed data ────────────────────────────────────────────────────────────────
const SEED = [
  // Universities
  { id: "u001", type: "university", name: "Delhi University",            state: "Delhi",             code: "DU",   status: "active",  aicte: "approved",   verified: true  },
  { id: "u002", type: "university", name: "Mumbai University",           state: "Maharashtra",       code: "MU",   status: "active",  aicte: "approved",   verified: true  },
  { id: "u003", type: "university", name: "Anna University",             state: "Tamil Nadu",        code: "AU",   status: "active",  aicte: "approved",   verified: true  },
  { id: "u004", type: "university", name: "Bangalore University",        state: "Karnataka",         code: "BU",   status: "active",  aicte: "approved",   verified: true  },
  { id: "u005", type: "university", name: "Pune University",             state: "Maharashtra",       code: "PU",   status: "active",  aicte: "approved",   verified: true  },
  { id: "u006", type: "university", name: "Osmania University",          state: "Telangana",         code: "OU",   status: "active",  aicte: "approved",   verified: true  },
  { id: "u007", type: "university", name: "Calcutta University",         state: "West Bengal",       code: "CU",   status: "active",  aicte: "approved",   verified: true  },
  { id: "u008", type: "university", name: "IIT Delhi",                   state: "Delhi",             code: "IITD", status: "active",  aicte: "approved",   verified: true  },
  { id: "u009", type: "university", name: "IIT Bombay",                  state: "Maharashtra",       code: "IITB", status: "active",  aicte: "approved",   verified: true  },
  { id: "u010", type: "university", name: "NIT Trichy",                  state: "Tamil Nadu",        code: "NITT", status: "active",  aicte: "approved",   verified: true  },

  // Companies (Employers)
  { id: "c001", type: "company",    name: "Infosys Limited",             state: "Karnataka",         code: "INFY", status: "active",  industry: "IT",      verified: true  },
  { id: "c002", type: "company",    name: "Tata Consultancy Services",   state: "Maharashtra",       code: "TCS",  status: "active",  industry: "IT",      verified: true  },
  { id: "c003", type: "company",    name: "Wipro Technologies",          state: "Karnataka",         code: "WIP",  status: "active",  industry: "IT",      verified: true  },
  { id: "c004", type: "company",    name: "HCL Technologies",            state: "Uttar Pradesh",     code: "HCL",  status: "active",  industry: "IT",      verified: true  },
  { id: "c005", type: "company",    name: "Accenture India",             state: "Karnataka",         code: "ACC",  status: "active",  industry: "Consulting", verified: true },
  { id: "c006", type: "company",    name: "Cognizant Technology",        state: "Tamil Nadu",        code: "CTG",  status: "active",  industry: "IT",      verified: true  },
  { id: "c007", type: "company",    name: "Deloitte India",              state: "Maharashtra",       code: "DEL",  status: "active",  industry: "Consulting", verified: true },
  { id: "c008", type: "company",    name: "Reliance Industries",         state: "Maharashtra",       code: "RIL",  status: "active",  industry: "Conglomerate", verified: true },
  { id: "c009", type: "company",    name: "HDFC Bank",                   state: "Maharashtra",       code: "HDFC", status: "active",  industry: "Banking", verified: true  },
  { id: "c010", type: "company",    name: "Amazon India",                state: "Karnataka",         code: "AMZ",  status: "active",  industry: "E-Commerce", verified: true },

  // Labs (Drug Test)
  { id: "l001", type: "lab",        name: "Apollo Diagnostics",          state: "Pan India",         code: "APD",  status: "active",  accredited: true     },
  { id: "l002", type: "lab",        name: "SRL Diagnostics",             state: "Pan India",         code: "SRL",  status: "active",  accredited: true     },
  { id: "l003", type: "lab",        name: "Thyrocare Technologies",      state: "Maharashtra",       code: "THY",  status: "active",  accredited: true     },
  { id: "l004", type: "lab",        name: "Dr Lal PathLabs",             state: "Pan India",         code: "DLL",  status: "active",  accredited: true     },

  // Courts
  { id: "ct001", type: "court",     name: "Supreme Court of India",      state: "Delhi",             code: "SCI",  status: "active",  level: "apex"        },
  { id: "ct002", type: "court",     name: "Delhi High Court",            state: "Delhi",             code: "DHC",  status: "active",  level: "high"        },
  { id: "ct003", type: "court",     name: "Bombay High Court",           state: "Maharashtra",       code: "BHC",  status: "active",  level: "high"        },
  { id: "ct004", type: "court",     name: "Madras High Court",           state: "Tamil Nadu",        code: "MHC",  status: "active",  level: "high"        },
  { id: "ct005", type: "court",     name: "Bangalore District Court",    state: "Karnataka",         code: "BDC",  status: "active",  level: "district"    },
  { id: "ct006", type: "court",     name: "Mumbai District Court",       state: "Maharashtra",       code: "MDC",  status: "active",  level: "district"    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function init() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  localStorage.setItem(STORE_KEY, JSON.stringify(SEED));
  return [...SEED];
}

function persist(data) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch {}
}

function genId(prefix) {
  return `${prefix}${Date.now().toString(36)}`;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/** Get all institutions */
export function getAllInstitutions() {
  return init();
}

/** Get by type: "university" | "company" | "lab" | "court" */
export function getByType(type) {
  return init().filter((i) => i.type === type && i.status !== "inactive");
}

/** Search across all types */
export function searchInstitutions(q) {
  if (!q) return init();
  const lower = q.toLowerCase();
  return init().filter(
    (i) =>
      i.name.toLowerCase().includes(lower) ||
      (i.code || "").toLowerCase().includes(lower) ||
      (i.state || "").toLowerCase().includes(lower)
  );
}

/** Add a single institution */
export function addInstitution(data) {
  const all = init();
  const prefix = { university: "u", company: "c", lab: "l", court: "ct" }[data.type] || "x";
  const newItem = {
    id: genId(prefix),
    status: "active",
    verified: false,
    createdAt: new Date().toISOString(),
    ...data,
  };
  all.push(newItem);
  persist(all);
  return newItem;
}

/** Bulk add from parsed CSV/Excel rows */
export function bulkAddInstitutions(rows) {
  const all = init();
  const added = [];
  rows.forEach((row) => {
    if (!row.name || !row.type) return; // skip invalid rows
    const prefix = { university: "u", company: "c", lab: "l", court: "ct" }[row.type] || "x";
    const newItem = {
      id: genId(prefix),
      status: "active",
      verified: false,
      createdAt: new Date().toISOString(),
      ...row,
    };
    all.push(newItem);
    added.push(newItem);
  });
  persist(all);
  return added;
}

/** Update institution */
export function updateInstitution(id, updates) {
  const all = init().map((i) => (i.id === id ? { ...i, ...updates } : i));
  persist(all);
  return all.find((i) => i.id === id);
}

/** Delete (soft delete) */
export function deleteInstitution(id) {
  const all = init().map((i) => (i.id === id ? { ...i, status: "inactive" } : i));
  persist(all);
}

/** Hard reset to seed data (dev only) */
export function resetInstitutions() {
  localStorage.removeItem(STORE_KEY);
  return init();
}

// ─── React hook ───────────────────────────────────────────────────────────────
// Usage: const { institutions, addOne, bulkAdd, remove } = useInstitutions();

import { useState, useCallback } from "react";

export function useInstitutions(typeFilter) {
  const [institutions, setInstitutions] = useState(() =>
    typeFilter ? getByType(typeFilter) : getAllInstitutions()
  );

  const refresh = useCallback(() => {
    setInstitutions(typeFilter ? getByType(typeFilter) : getAllInstitutions());
  }, [typeFilter]);

  const addOne = useCallback(
    (data) => { addInstitution(data); refresh(); },
    [refresh]
  );

  const bulkAdd = useCallback(
    (rows) => { bulkAddInstitutions(rows); refresh(); },
    [refresh]
  );

  const remove = useCallback(
    (id) => { deleteInstitution(id); refresh(); },
    [refresh]
  );

  const update = useCallback(
    (id, updates) => { updateInstitution(id, updates); refresh(); },
    [refresh]
  );

  return { institutions, addOne, bulkAdd, remove, update, refresh };
}
