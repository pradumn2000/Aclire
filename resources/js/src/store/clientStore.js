// clientStore.js — Store for client (company) registrations
// Clients register separately from staff users.
// Replace with API calls when backend is ready:
//   POST /api/clients/register  → creates a client account + login
//   GET  /api/clients           → admin list
//   GET  /api/clients/:id       → single client
//   PATCH /api/clients/:id      → update
//   DELETE /api/clients/:id     → deactivate

import { useState, useCallback } from "react";

const STORE_KEY = "bgv_clients_store";

// ─── Seed ─────────────────────────────────────────────────────────────────────
const SEED = [
  {
    id: "cl001",
    companyName:     "Deloitte India Pvt Ltd",
    gstin:           "27AABCD1234F1Z5",
    primaryContact:  "Ramesh Joshi",
    contactPhone:    "+91-98765-43210",
    contactEmail:    "ramesh@deloitte.in",
    billingMode:     "postpaid_client",
    agreedChecks:    ["employment", "education", "address", "database"],
    rates:           { employment: 350, education: 280, address: 180, database: 120 },
    status:          "active",
    createdAt:       "2026-01-15T10:00:00Z",
  },
  {
    id: "cl002",
    companyName:     "Infosys BPM Limited",
    gstin:           "29AABCI1234A1Z3",
    primaryContact:  "Priya Sharma",
    contactPhone:    "+91-98765-11111",
    contactEmail:    "priya@infosys.com",
    billingMode:     "prepaid_client",
    agreedChecks:    ["employment", "education", "criminal", "drug_test"],
    rates:           { employment: 320, education: 260, criminal: 200, drug_test: 380 },
    status:          "active",
    createdAt:       "2026-02-01T09:00:00Z",
  },
];

// ─── Persistence ──────────────────────────────────────────────────────────────
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

// ─── Public API ───────────────────────────────────────────────────────────────

export function getAllClients() { return init(); }

export function getClientById(id) {
  return init().find((c) => c.id === id) || null;
}

export function getClientByEmail(email) {
  return init().find((c) => c.contactEmail?.toLowerCase() === email?.toLowerCase()) || null;
}

/** Register a new client — returns { client, token } */
export function registerClient(data) {
  const all = init();
  // Check duplicate GSTIN
  if (all.find((c) => c.gstin === data.gstin)) {
    throw new Error("A client with this GSTIN already exists.");
  }
  const newClient = {
    id:          `cl${Date.now().toString(36)}`,
    status:      "active",
    createdAt:   new Date().toISOString(),
    agreedChecks: [],
    rates:       {},
    ...data,
  };
  all.push(newClient);
  persist(all);

  // Simulate token (real backend will issue JWT)
  const fakeToken = btoa(`client:${newClient.id}:${Date.now()}`);
  const userPayload = {
    id:    newClient.id,
    name:  newClient.companyName,
    email: newClient.contactEmail,
    role:  "client",
  };
  return { client: newClient, token: fakeToken, user: userPayload };
}

export function updateClient(id, updates) {
  const all = init().map((c) => (c.id === id ? { ...c, ...updates } : c));
  persist(all);
  return all.find((c) => c.id === id);
}

export function deactivateClient(id) {
  return updateClient(id, { status: "inactive" });
}

// ─── React hook ───────────────────────────────────────────────────────────────
export function useClients() {
  const [clients, setClients] = useState(() => getAllClients());

  const refresh = useCallback(() => setClients(getAllClients()), []);

  const register = useCallback((data) => {
    const result = registerClient(data);
    refresh();
    return result;
  }, [refresh]);

  const update = useCallback((id, updates) => {
    updateClient(id, updates);
    refresh();
  }, [refresh]);

  return { clients, register, update, refresh };
}
