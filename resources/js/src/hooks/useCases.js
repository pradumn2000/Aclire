
// import { useState, useEffect, useCallback } from "react";
// // import { getCases, saveCase as storeSaveCase, updateCase as storeUpdateCase } from "../store/caseStore";
// import {
//   getAllCases,
//   updateCase as storeUpdateCase
// } from "../store/caseStore";
// /**
//  * useCases — subscribe to and mutate the global case list.
//  *
//  * Returned API:
//  *   cases        - current array (newest first)
//  *   addCase(obj) - prepend a new case
//  *   updateCase(id, patch) - merge patch into an existing case
//  *   refresh()    - re-read from localStorage
//  */
// export function useCases() {
//   const [cases, setCases] = useState(() =>
// getAllCases());

//   const refresh = useCallback(() => setCases(getAllCases()), []);

//   // Keep in sync when another tab writes
//   useEffect(() => {
//     window.addEventListener("storage", refresh);
//     return () => window.removeEventListener("storage", refresh);
//   }, [refresh]);

//   const addCase = useCallback((newCase) => {
//     storeSaveCase(newCase);
//     setCases(getAllCases());
//   }, []);

//   const updateCase = useCallback((id, patch) => {
//     storeUpdateCase(id, patch);
//     setCases(getAllCases());
//   }, []);

//   return { cases, addCase, updateCase, refresh };
// }
import { useState, useEffect, useCallback } from "react";
import {
  fetchAllCases,
  createCase,
  updateCaseAPI,
} from "../store/caseStore";

/**
 * useCases — fetch and mutate the case list via the Laravel API.
 *
 * Returned API:
 *   cases    - current array (role-filtered by the backend)
 *   loading  - true while the initial fetch is in flight
 *   error    - error message string, if the fetch failed
 *   addCase(payload)      - create a new case, prepend to list
 *   updateCase(id, patch) - PUT a patch to an existing case, merge locally
 *   refresh()             - re-fetch from the API
 */
export function useCases() {
  const [cases, setCases]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState("");

  const refresh = useCallback(() => {
    setLoading(true);
    setError("");
    fetchAllCases()
      .then(setCases)
      .catch((e) => setError(e.message || "Failed to load cases."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const addCase = useCallback(async (newCase) => {
    const created = await createCase(newCase);
    setCases((prev) => [created, ...prev]);
    return created;
  }, []);

  const updateCase = useCallback(async (id, patch) => {
    const updated = await updateCaseAPI(id, patch);
    setCases((prev) =>
      prev.map((c) => (c.case_id === id || c.id === id ? { ...c, ...updated } : c))
    );
    return updated;
  }, 
  []);

  return { cases, loading, error, addCase, updateCase, refresh };
}