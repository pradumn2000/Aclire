// import { useState, useEffect, useCallback } from "react";
// import { getCases, saveCase as storeSaveCase } from "../store/caseStore";

// // Custom hook — subscribe to the case list.
// // Any component using this hook will re-render when a case is added
// // (even from another tab) via the storage event.
// export function useCases() {
//   const [cases, setCases] = useState(() => getCases());

//   const refresh = useCallback(() => setCases(getCases()), []);

//   // Keep in sync if another tab writes to localStorage
//   useEffect(() => {
//     window.addEventListener("storage", refresh);
//     return () => window.removeEventListener("storage", refresh);
//   }, [refresh]);

//   const addCase = useCallback((newCase) => {
//     storeSaveCase(newCase);
//     setCases(getCases()); // update this tab immediately
//   }, []);

//   return { cases, addCase, refresh };
// }
import { useState, useEffect, useCallback } from "react";
// import { getCases, saveCase as storeSaveCase, updateCase as storeUpdateCase } from "../store/caseStore";
import {
  getAllCases,
  updateCase as storeUpdateCase
} from "../store/caseStore";
/**
 * useCases — subscribe to and mutate the global case list.
 *
 * Returned API:
 *   cases        - current array (newest first)
 *   addCase(obj) - prepend a new case
 *   updateCase(id, patch) - merge patch into an existing case
 *   refresh()    - re-read from localStorage
 */
export function useCases() {
  const [cases, setCases] = useState(() =>
getAllCases());

  const refresh = useCallback(() => setCases(getAllCases()), []);

  // Keep in sync when another tab writes
  useEffect(() => {
    window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, [refresh]);

  const addCase = useCallback((newCase) => {
    storeSaveCase(newCase);
    setCases(getAllCases());
  }, []);

  const updateCase = useCallback((id, patch) => {
    storeUpdateCase(id, patch);
    setCases(getAllCases());
  }, []);

  return { cases, addCase, updateCase, refresh };
}
