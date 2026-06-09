// // ── Case Store ─────────────────────────────────────────────
// // Thin wrapper around localStorage so state survives page refresh.
// // All components import from here.

// const STORAGE_KEY = "bgv_cases";

// export function getCases() {
//   try {
//     return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
//   } catch {
//     return [];
//   }
// }

// export function saveCase(newCase) {
//   const cases = getCases();
//   cases.unshift(newCase); // newest first
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
// }

// export function clearCases() {
//   localStorage.removeItem(STORAGE_KEY);
// }
// ── Case Store ─────────────────────────────────────────────
// Thin localStorage wrapper. All components import from here.
// When you wire a real API, only this file changes.

const STORAGE_KEY = "bgv_cases";

export function getCases() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

/** Prepend a new case (newest first). */
export function saveCase(newCase) {
  const cases = getCases();
  cases.unshift(newCase);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
}

/**
 * Merge a patch object into an existing case by id.
 * e.g. updateCase("BGV-2401", { label: "Completed", status: "completed" })
 */
export function updateCase(id, patch) {
  const cases = getCases();
  const idx   = cases.findIndex((c) => c.id === id);
  if (idx === -1) return;
  cases[idx] = { ...cases[idx], ...patch };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
}

export function clearCases() {
  localStorage.removeItem(STORAGE_KEY);
}
