// ─────────────────────────────────────────────────────────
//  Verifier Store  — localStorage persistence
//  Keys:
//    bgv_results    { [caseId]: { form, outcome, remarks, savedAt } }
//    bgv_activity   { [caseId]: [ { time, text } ] }
//    bgv_comments   { [caseId]: [ { id, author, avatar, avatarClass, time, text } ] }
// ─────────────────────────────────────────────────────────

const KEYS = {
  results:  "bgv_results",
  activity: "bgv_activity",
  comments: "bgv_comments",
};

function load(key) {
  try { return JSON.parse(localStorage.getItem(key) || "{}"); }
  catch { return {}; }
}
function save(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

// ── Results ──────────────────────────────────────────────
export function getResult(caseId) {
  return load(KEYS.results)[caseId] || null;
}
export function saveResult(caseId, payload) {
  const all = load(KEYS.results);
  all[caseId] = { ...payload, savedAt: new Date().toISOString() };
  save(KEYS.results, all);
}

// ── Activity ─────────────────────────────────────────────
export function getActivity(caseId) {
  return load(KEYS.activity)[caseId] || [];
}
export function appendActivity(caseId, entry) {
  const all = load(KEYS.activity);
  all[caseId] = [...(all[caseId] || []), entry];
  save(KEYS.activity, all);
}

// ── Comments ─────────────────────────────────────────────
export function getComments(caseId) {
  return load(KEYS.comments)[caseId] || [];
}
export function appendComment(caseId, comment) {
  const all = load(KEYS.comments);
  all[caseId] = [...(all[caseId] || []), comment];
  save(KEYS.comments, all);
}
