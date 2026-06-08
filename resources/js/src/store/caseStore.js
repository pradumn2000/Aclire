// ── Case Store ─────────────────────────────────────────────
// Thin wrapper around localStorage so state survives page refresh.
// All components import from here.

const STORAGE_KEY = "bgv_cases";

export function getCases() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveCase(newCase) {
  const cases = getCases();
  cases.unshift(newCase); // newest first
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
}

export function clearCases() {
  localStorage.removeItem(STORAGE_KEY);
}