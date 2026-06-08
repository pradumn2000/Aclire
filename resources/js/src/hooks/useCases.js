import { useState, useEffect, useCallback } from "react";
import { getCases, saveCase as storeSaveCase } from "../store/caseStore";

// Custom hook — subscribe to the case list.
// Any component using this hook will re-render when a case is added
// (even from another tab) via the storage event.
export function useCases() {
  const [cases, setCases] = useState(() => getCases());

  const refresh = useCallback(() => setCases(getCases()), []);

  // Keep in sync if another tab writes to localStorage
  useEffect(() => {
    window.addEventListener("storage", refresh);
    return () => window.removeEventListener("storage", refresh);
  }, [refresh]);

  const addCase = useCallback((newCase) => {
    storeSaveCase(newCase);
    setCases(getCases()); // update this tab immediately
  }, []);

  return { cases, addCase, refresh };
}