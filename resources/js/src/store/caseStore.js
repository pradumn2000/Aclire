// // // // ── Case Store ─────────────────────────────────────────────
// // // // Thin wrapper around localStorage so state survives page refresh.
// // // // All components import from here.

// // // const STORAGE_KEY = "bgv_cases";

// // // export function getCases() {
// // //   try {
// // //     return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
// // //   } catch {
// // //     return [];
// // //   }
// // // }

// // // export function saveCase(newCase) {
// // //   const cases = getCases();
// // //   cases.unshift(newCase); // newest first
// // //   localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
// // // }

// // // export function clearCases() {
// // //   localStorage.removeItem(STORAGE_KEY);
// // // }
// // // ── Case Store ─────────────────────────────────────────────
// // // Thin localStorage wrapper. All components import from here.
// // // When you wire a real API, only this file changes.

// // const STORAGE_KEY = "bgv_cases";

// // export function getCases() {
// //   try {
// //     return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
// //   } catch {
// //     return [];
// //   }
// // }

// // /** Prepend a new case (newest first). */
// // export function saveCase(newCase) {
// //   const cases = getCases();
// //   cases.unshift(newCase);
// //   localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
// // }

// // /**
// //  * Merge a patch object into an existing case by id.
// //  * e.g. updateCase("BGV-2401", { label: "Completed", status: "completed" })
// //  */
// // export function updateCase(id, patch) {
// //   const cases = getCases();
// //   const idx   = cases.findIndex((c) => c.id === id);
// //   if (idx === -1) return;
// //   cases[idx] = { ...cases[idx], ...patch };
// //   localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
// // }

// // export function clearCases() {
// //   localStorage.removeItem(STORAGE_KEY);
// // }
// // caseStore.js — Shared state store for BGV cases
// // Used by Dashboard, AllCases, and Verifier pages
// // Replace localStorage-based mocks with API calls when backend is ready

// // ─── Initial mock data ───────────────────────────────────────────────────────
// // const INITIAL_CASES = [
// //   { id: "BGV-2401", candidate: "Ravi Kumar",    email: "ravi@mail.com",   mobile: "9876543210", client: "Infosys",    checks: "Employment",        status: "pending",      tat: "3d",  billing: "Fixed",   amount: 2500, priority: "High",   createdDate: "2024-05-01", checkType: "employment", employer: "Infosys Limited",    period: "Jan 2018 – Mar 2022", designation: "Sr. Systems Engineer", exitReason: "Resignation (voluntary)", verifierResult: null },
// //   { id: "BGV-2402", candidate: "Anjali Mehta",  email: "anjali@mail.com", mobile: "9876543211", client: "TCS",        checks: "Employment,Edu",    status: "in-progress",  tat: "5d",  billing: "Hourly",  amount: 3200, priority: "Medium", createdDate: "2024-05-03", checkType: "employment", employer: "Tata Consultancy",   period: "Jun 2019 – Dec 2023", designation: "Business Analyst",     exitReason: "Better opportunity",     verifierResult: null },
// //   { id: "BGV-2403", candidate: "Suresh Pillai", email: "suresh@mail.com", mobile: "9876543212", client: "Wipro",      checks: "Employment",        status: "completed",    tat: "4d",  billing: "Fixed",   amount: 2000, priority: "Low",    createdDate: "2024-05-05", checkType: "employment", employer: "Wipro Technologies", period: "Mar 2015 – Aug 2019", designation: "Project Manager",      exitReason: "Retirement",             verifierResult: { outcome: "clear", remarks: "All verified.", savedAt: "2024-05-06T10:00:00Z" } },
// //   { id: "BGV-2404", candidate: "Neha Sharma",   email: "neha@mail.com",   mobile: "9876543213", client: "HCL",        checks: "Employment,Address",status: "pending",      tat: "1d",  billing: "Fixed",   amount: 1800, priority: "High",   createdDate: "2024-05-06", checkType: "employment", employer: "HCL Technologies",   period: "Jul 2020 – Present",  designation: "Software Engineer",    exitReason: "—",                      verifierResult: null },
// //   { id: "BGV-2405", candidate: "Amit Verma",    email: "amit@mail.com",   mobile: "9876543214", client: "Accenture",  checks: "Education",         status: "pending",      tat: "2d",  billing: "Hourly",  amount: 1500, priority: "Medium", createdDate: "2024-05-07", checkType: "education",  institution: "Delhi University", degree: "B.Tech", yop: "2017", rollNo: "DU17CS042", verifierResult: null },
// //   { id: "BGV-2406", candidate: "Priya Singh",   email: "priya@mail.com",  mobile: "9876543215", client: "Cognizant",  checks: "Education",         status: "in-progress",  tat: "3d",  billing: "Fixed",   amount: 1600, priority: "Low",    createdDate: "2024-05-08", checkType: "education",  institution: "Mumbai University",degree: "MBA",    yop: "2019", rollNo: "MU19MB118", verifierResult: null },
// //   { id: "BGV-2407", candidate: "Rohit Gupta",   email: "rohit@mail.com",  mobile: "9876543216", client: "Infosys",    checks: "Address",           status: "pending",      tat: "2d",  billing: "Fixed",   amount: 1200, priority: "Medium", createdDate: "2024-05-09", checkType: "address",    address: "42 MG Road, Bangalore 560001", type: "Permanent", verifierResult: null },
// //   { id: "BGV-2408", candidate: "Kavya Nair",    email: "kavya@mail.com",  mobile: "9876543217", client: "TCS",        checks: "Database",          status: "pending",      tat: "1d",  billing: "Hourly",  amount: 900,  priority: "High",   createdDate: "2024-05-10", checkType: "database",   screenType: "CIBIL + Criminal DB", result: "Pending", verifierResult: null },
// //   { id: "BGV-2409", candidate: "Deepak Rao",    email: "deepak@mail.com", mobile: "9876543218", client: "Wipro",      checks: "Criminal",          status: "pending",      tat: "4d",  billing: "Fixed",   amount: 2100, priority: "High",   createdDate: "2024-05-11", checkType: "criminal",   court: "Bangalore District Court", jurisdiction: "Civil + Criminal", verifierResult: null },
// //   { id: "BGV-2410", candidate: "Sneha Iyer",    email: "sneha@mail.com",  mobile: "9876543219", client: "HCL",        checks: "Drug Test",         status: "pending",      tat: "3d",  billing: "Fixed",   amount: 1400, priority: "Low",    createdDate: "2024-05-12", checkType: "drug_test",  lab: "Apollo Diagnostics", sampleType: "Urine", verifierResult: null },
// //   { id: "BGV-2411", candidate: "Vikram Mehta",  email: "vikram@mail.com", mobile: "9876543220", client: "Infosys",    checks: "Courtroom",         status: "pending",      tat: "5d",  billing: "Hourly",  amount: 3000, priority: "High",   createdDate: "2024-05-13", checkType: "courtroom",  court: "Mumbai High Court", caseRef: "MHC/2023/4421", verifierResult: null },
// //   { id: "BGV-2412", candidate: "Meera Joshi",   email: "meera@mail.com",  mobile: "9876543221", client: "Accenture",  checks: "Employment,Edu",    status: "qc-review",    tat: "2d",  billing: "Fixed",   amount: 2800, priority: "Medium", createdDate: "2024-05-14", checkType: "employment", employer: "Accenture India",    period: "Apr 2021 – Present",  designation: "UX Designer",          exitReason: "—",                      verifierResult: { outcome: "discrepancy", remarks: "Period mismatch noted.", savedAt: "2024-05-15T09:30:00Z" } },
// // ];

// // ─── Storage key ─────────────────────────────────────────────────────────────
// const STORE_KEY = "bgv_cases_store";
// const COMMENTS_KEY = "bgv_comments_store";

// // ─── Initialise from localStorage or seed with mock data ─────────────────────
// function initStore() {
//   try {
//     const raw = localStorage.getItem(STORE_KEY);
//     if (raw) return JSON.parse(raw);
//   } catch {}
//   // Seed
//   localStorage.setItem(STORE_KEY, JSON.stringify(INITIAL_CASES));
//   return INITIAL_CASES;
// }

// function persist(cases) {
//   try { localStorage.setItem(STORE_KEY, JSON.stringify(cases)); } catch {}
// }

// // ─── Public API ───────────────────────────────────────────────────────────────

// /** Get all cases */
// export function getAllCases() {
//   return initStore();
// }

// /** Get cases filtered by checkType */
// export function getCasesByType(checkType) {
//   return initStore().filter((c) => c.checkType === checkType);
// }

// /** Get a single case by ID */
// export function getCaseById(id) {
//   return initStore().find((c) => c.id === id) || null;
// }

// /** Update a case (merges partial fields) */
// export function updateCase(id, updates) {
//   const cases = initStore().map((c) =>
//     c.id === id ? { ...c, ...updates } : c
//   );
//   persist(cases);
//   return cases.find((c) => c.id === id);
// }

// /** Save verifier result — marks case completed */
// export function saveVerifierResult(id, formData, outcome, remarks) {
//   return updateCase(id, {
//     ...formData,
//     status: "completed",
//     verifierResult: { outcome, remarks, savedAt: new Date().toISOString() },
//   });
// }

// /** Save draft — keeps in-progress status */
// export function saveDraft(id, formData, outcome, remarks) {
//   return updateCase(id, {
//     ...formData,
//     status: "in-progress",
//     verifierResult: { outcome, remarks, savedAt: new Date().toISOString(), isDraft: true },
//   });
// }

// // ─── Comments store ───────────────────────────────────────────────────────────

// function initComments() {
//   try {
//     const raw = localStorage.getItem(COMMENTS_KEY);
//     if (raw) return JSON.parse(raw);
//   } catch {}
//   const seed = {
//     "BGV-2401": [{ id: 1, author: "Priya (QC)", avatar: "P", avatarClass: "avatar-purple", time: "10:50 AM", text: "Please confirm exit reason documented." }],
//     "BGV-2402": [{ id: 2, author: "Raj (Admin)", avatar: "R", avatarClass: "avatar-blue", time: "09:15 AM", text: "Client needs update by EOD." }],
//   };
//   localStorage.setItem(COMMENTS_KEY, JSON.stringify(seed));
//   return seed;
// }

// function persistComments(comments) {
//   try { localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments)); } catch {}
// }

// export function getComments(caseId) {
//   return initComments()[caseId] || [];
// }

// export function addComment(caseId, comment) {
//   const all = initComments();
//   all[caseId] = [...(all[caseId] || []), comment];
//   persistComments(all);
//   return all[caseId];
// }

// // ─── Stats helpers ────────────────────────────────────────────────────────────

// export function getCaseStats(cases) {
//   const total      = cases.length;
//   const pending    = cases.filter((c) => c.status === "pending").length;
//   const inProgress = cases.filter((c) => c.status === "in-progress").length;
//   const completed  = cases.filter((c) => c.status === "completed").length;
//   const qcReview   = cases.filter((c) => c.status === "qc-review").length;
//   const totalRevenue = cases.reduce((s, c) => s + (c.amount || 0), 0);
//   return { total, pending, inProgress, completed, qcReview, totalRevenue };
// }

// export const SOURCES = {
//   employment: [
//     { name: "Infosys HR Portal",   tag: "Email",      badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green" },
//     { name: "Employment DB API",   tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//     { name: "EPFO Records",        tag: "Government", badge: "Partially",  badgeClass: "badge-partially",  tat: "48h",     borderClass: "status-border-orange" },
//   ],
//   education: [
//     { name: "University Portal",   tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//     { name: "Result Link DB",      tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green" },
//   ],
//   address: [
//     { name: "Field Agent",         tag: "Physical",   badge: "Available",  badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-green" },
//     { name: "Digital Trace",       tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//   ],
//   database: [
//     { name: "CIBIL API",           tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//     { name: "Criminal DB",         tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green" },
//   ],
//   criminal: [
//     { name: "District Court",      tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "72h",     borderClass: "status-border-orange" },
//     { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//   ],
//   drug_test: [
//     { name: "Apollo Diagnostics",  tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green" },
//     { name: "SRL Diagnostics",     tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-orange" },
//   ],
//   courtroom: [
//     { name: "High Court Registry", tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "5d",      borderClass: "status-border-orange" },
//     { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal" },
//   ],
// };

// export const CHECK_TYPES = [
//   { key: "employment", label: "Employment" },
//   { key: "education",  label: "Education" },
//   { key: "address",    label: "Address" },
//   { key: "database",   label: "Database" },
//   { key: "criminal",   label: "Criminal" },
//   { key: "drug_test",  label: "Drug Test" },
//   { key: "courtroom",  label: "Courtroom" },
// ];


// // ─── useCases React hook ──────────────────────────────────────────────────────
// // Usage: const { cases, addCase, updateCaseById } = useCases();

// import { useState, useCallback } from "react";

// export function useCases() {
//   const [cases, setCases] = useState(() => getAllCases());

//   const refresh = useCallback(() => setCases(getAllCases()), []);

//   const addCase = useCallback((newCase) => {
//     const all = getAllCases();
//     const withDefaults = {
//       createdDate: new Date().toISOString().split("T")[0],
//       status:      "pending",
//       verifierResult: null,
//       ...newCase,
//     };
//     all.push(withDefaults);
//     try { localStorage.setItem(STORE_KEY, JSON.stringify(all)); } catch {}
//     setCases([...all]);
//     return withDefaults;
//   }, []);

//   const updateCaseById = useCallback((id, updates) => {
//     updateCase(id, updates);
//     setCases(getAllCases());
//   }, []);

//   const removeCase = useCallback((id) => {
//     const all = getAllCases().filter((c) => c.id !== id);
//     try { localStorage.setItem(STORE_KEY, JSON.stringify(all)); } catch {}
//     setCases(all);
//   }, []);

//   return { cases, addCase, updateCaseById, removeCase, refresh };
// }

// // ─── Candidate link store ─────────────────────────────────────────────────────
// // Stores generated candidate upload links in localStorage
// // { token: { caseId, candidateName, email, checks, expiry, createdAt } }

// const LINKS_KEY = "bgv_candidate_links";

// function initLinks() {
//   try { return JSON.parse(localStorage.getItem(LINKS_KEY) || "{}"); } catch { return {}; }
// }

// function persistLinks(links) {
//   try { localStorage.setItem(LINKS_KEY, JSON.stringify(links)); } catch {}
// }

// /** Generate a candidate upload link token */
// export function generateCandidateLink({ caseId, candidateName, email, checks, expiryHours = 72 }) {
//   const expiry = new Date(Date.now() + expiryHours * 60 * 60 * 1000).toISOString();
//   // Simple token: base64 of JSON payload (backend will use JWT)
//   const payload = { caseId, candidateName, email, checks, expiry, createdAt: new Date().toISOString() };
//   const token   = btoa(JSON.stringify(payload)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

//   const links = initLinks();
//   links[token] = payload;
//   persistLinks(links);

//   const baseUrl = window?.location?.origin || "https://bgvportal.in";
//   return { token, url: `${baseUrl}/candidate/${token}`, expiry };
// }

// /** Get all generated links */
// export function getAllCandidateLinks() {
//   return Object.entries(initLinks()).map(([token, data]) => ({ token, ...data }));
// }

// /** Revoke a link */
// export function revokeCandidateLink(token) {
//   const links = initLinks();
//   delete links[token];
//   persistLinks(links);
// }
// caseStore.js — API-only store, no dummy data
// All pages fetch from Laravel API. localStorage only used for comments + candidate links.

import { useState, useCallback } from "react";
import { API_URL } from "./config";

// ─── Clear old dummy seed (run once on import) ────────────────────────────────
localStorage.removeItem("bgv_cases_store");

// ─── Auth helper ──────────────────────────────────────────────────────────────
function authHeaders() {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

// ─── Case API calls ───────────────────────────────────────────────────────────

export async function fetchAllCases() {
  const res  = await fetch(`${API_URL}/api/cases`, { headers: authHeaders() });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to fetch cases.");
  return data.cases || [];
}

export async function fetchCaseById(id) {
  const res  = await fetch(`${API_URL}/api/cases/${id}`, { headers: authHeaders() });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Case not found.");
  return data.case || data;
}

export async function createCase(payload) {
  const res  = await fetch(`${API_URL}/api/cases`, {
    method:  "POST",
    headers: authHeaders(),
    body:    JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to create case.");
  return data.case || data;
}

export async function updateCaseAPI(id, payload) {
  const res  = await fetch(`${API_URL}/api/cases/${id}`, {
    method:  "PUT",
    headers: authHeaders(),
    body:    JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to update case.");
  return data.case || data;
}

export async function saveVerifierResultAPI(id, payload) {
  const res  = await fetch(`${API_URL}/api/cases/${id}/verify`, {
    method:  "POST",
    headers: authHeaders(),
    body:    JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to save result.");
  return data.case || data;
}

export async function saveDraftAPI(id, payload) {
  const res  = await fetch(`${API_URL}/api/cases/${id}/draft`, {
    method:  "POST",
    headers: authHeaders(),
    body:    JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to save draft.");
  return data.case || data;
}

// ─── Stats helper (pass in cases array from API) ──────────────────────────────
export function getCaseStats(cases = []) {
  return {
    total:        cases.length,
    pending:      cases.filter(c => c.status === "pending").length,
    inProgress:   cases.filter(c => c.status === "in-progress").length,
    completed:    cases.filter(c => c.status === "completed").length,
    qcReview:     cases.filter(c => c.status === "qc-review").length,
    totalRevenue: cases.reduce((s, c) => s + (Number(c.total_amount) || Number(c.amount) || 0), 0),
  };
}

// ─── useCases React hook ──────────────────────────────────────────────────────
// Usage: const { cases, loading, error, refresh } = useCases();

export function useCases() {
  const [cases,   setCases]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState("");

  const refresh = useCallback(() => {
    setLoading(true);
    setError("");
    fetchAllCases()
      .then(setCases)
      .catch(e => setError(e.message || "Failed to load cases."))
      .finally(() => setLoading(false));
  }, []);

  // Auto-fetch on mount
  useState(() => { refresh(); }, []);

  return { cases, loading, error, refresh };
}

// ─── Comments (localStorage until API is ready) ───────────────────────────────
const COMMENTS_KEY = "bgv_comments_store";

function initComments() {
  try {
    const raw = localStorage.getItem(COMMENTS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}

function persistComments(all) {
  try { localStorage.setItem(COMMENTS_KEY, JSON.stringify(all)); } catch {}
}

export function getComments(caseId) {
  return initComments()[caseId] || [];
}

export function addComment(caseId, comment) {
  const all = initComments();
  all[caseId] = [...(all[caseId] || []), comment];
  persistComments(all);
  return all[caseId];
}

// ─── Candidate link store (localStorage) ─────────────────────────────────────
const LINKS_KEY = "bgv_candidate_links";

function initLinks() {
  try { return JSON.parse(localStorage.getItem(LINKS_KEY) || "{}"); } catch { return {}; }
}

function persistLinks(links) {
  try { localStorage.setItem(LINKS_KEY, JSON.stringify(links)); } catch {}
}

export function generateCandidateLink({ caseId, candidateName, email, checks, expiryHours = 72 }) {
  const expiry  = new Date(Date.now() + expiryHours * 60 * 60 * 1000).toISOString();
  const payload = { caseId, candidateName, email, checks, expiry, createdAt: new Date().toISOString() };
  const token   = btoa(JSON.stringify(payload))
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const links   = initLinks();
  links[token]  = payload;
  persistLinks(links);
  const baseUrl = window?.location?.origin || "https://bgvportal.in";
  return { token, url: `${baseUrl}/candidate/${token}`, expiry };
}

export function getAllCandidateLinks() {
  return Object.entries(initLinks()).map(([token, data]) => ({ token, ...data }));
}

export function revokeCandidateLink(token) {
  const links = initLinks();
  delete links[token];
  persistLinks(links);
}

// ─── Source availability (static config, used by Verifyer UI) ────────────────
export const SOURCES = {
  employment: [
    { name: "Infosys HR Portal",   tag: "Email",      badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green"  },
    { name: "Employment DB API",   tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal"   },
    { name: "EPFO Records",        tag: "Government", badge: "Partially",  badgeClass: "badge-partially",  tat: "48h",     borderClass: "status-border-orange" },
  ],
  education: [
    { name: "University Portal",   tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal"   },
    { name: "Result Link DB",      tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green"  },
  ],
  address: [
    { name: "Field Agent",         tag: "Physical",   badge: "Available",  badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-green"  },
    { name: "Digital Trace",       tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal"   },
  ],
  database: [
    { name: "CIBIL API",           tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal"   },
    { name: "Criminal DB",         tag: "API",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-green"  },
  ],
  criminal: [
    { name: "District Court",      tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "72h",     borderClass: "status-border-orange" },
    { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal"   },
  ],
  drug_test: [
    { name: "Apollo Diagnostics",  tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "24h",     borderClass: "status-border-green"  },
    { name: "SRL Diagnostics",     tag: "Lab",        badge: "Responsive", badgeClass: "badge-responsive", tat: "48h",     borderClass: "status-border-orange" },
  ],
  courtroom: [
    { name: "High Court Registry", tag: "Physical",   badge: "Partially",  badgeClass: "badge-partially",  tat: "5d",      borderClass: "status-border-orange" },
    { name: "e-Courts Portal",     tag: "Web",        badge: "Live",       badgeClass: "badge-live",       tat: "Instant", borderClass: "status-border-teal"   },
  ],
};

export const CHECK_TYPES = [
  { key: "employment", label: "Employment" },
  { key: "education",  label: "Education"  },
  { key: "address",    label: "Address"    },
  { key: "database",   label: "Database"   },
  { key: "criminal",   label: "Criminal"   },
  { key: "drug_test",  label: "Drug Test"  },
  { key: "courtroom",  label: "Courtroom"  },
];