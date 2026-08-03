// // // src/store/institutionStore.js — API-backed institution data hook
// // // Used by AddInstitution.jsx (admin CRUD) and EntitySelect.jsx (read-only dropdowns)

// // import { useState, useEffect, useCallback } from "react";
// // import { API_URL } from "../config";

// // const authHeaders = () => ({
// //   "Content-Type": "application/json",
// //   Accept: "application/json",
// //   Authorization: `Bearer ${localStorage.getItem("token")}`,
// // });

// // export function useInstitutions(type = null) {
// //   const [institutions, setInstitutions] = useState([]);
// //   const [loading, setLoading]           = useState(true);
// //   const [error, setError]               = useState("");

// //   // ── Load all institutions (admin view includes inactive) ──
// //   const refresh = useCallback(async () => {
// //     setLoading(true);
// //     setError("");
// //     try {
// //       const params = new URLSearchParams({ include_inactive: "1" });
// //       if (type) params.set("type", type);

// //       const res  = await fetch(`${API_URL}/api/institutions?${params.toString()}`, {
// //         headers: authHeaders(),
// //       });
// //       const data = await res.json();

// //       if (!res.ok) throw new Error(data.message || "Failed to load institutions");
// //       setInstitutions(data.institutions || []);
// //     } catch (err) {
// //       setError(err.message || "Failed to load institutions");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [type]);

// //   useEffect(() => { refresh(); }, [refresh]);

// //   // ── Add single institution ─────────────────────────────────
// //   const addOne = async (form) => {
// //     const res  = await fetch(`${API_URL}/api/institutions`, {
// //       method:  "POST",
// //       headers: authHeaders(),
// //       body:    JSON.stringify(form),
// //     });
// //     const data = await res.json();
// //     if (!res.ok) throw new Error(data.message || "Failed to add institution");

// //     setInstitutions((prev) => [data.institution, ...prev]);
// //     return data.institution;
// //   };

// //   // ── Bulk add (CSV / Excel import) ──────────────────────────
// //   const bulkAdd = async (rows) => {
// //     const res  = await fetch(`${API_URL}/api/institutions/bulk`, {
// //       method:  "POST",
// //       headers: authHeaders(),
// //       body:    JSON.stringify({ rows }),
// //     });
// //     const data = await res.json();
// //     if (!res.ok) throw new Error(data.message || "Failed to import institutions");

// //     setInstitutions((prev) => [...(data.institutions || []), ...prev]);
// //     return data.institutions || [];
// //   };

// //   // ── Remove (soft-delete → status: inactive) ────────────────
// //   const remove = async (id) => {
// //     const res  = await fetch(`${API_URL}/api/institutions/${id}`, {
// //       method:  "DELETE",
// //       headers: authHeaders(),
// //     });
// //     const data = await res.json();
// //     if (!res.ok) throw new Error(data.message || "Failed to remove institution");

// //     setInstitutions((prev) =>
// //       prev.map((i) => (i.id === id ? { ...i, status: "inactive" } : i))
// //     );
// //   };

// //   return { institutions, loading, error, addOne, bulkAdd, remove, refresh };
// // }
// // src/store/institutionStore.js
// import { useState, useEffect, useCallback } from "react";
// import { API_URL } from "../config";

// const authHeaders = () => ({
//   "Content-Type": "application/json",
//   Accept: "application/json",
//   Authorization: `Bearer ${localStorage.getItem("token")}`,
// });

// const normScope = (s) => (s ? String(s).trim().toLowerCase() : s);

// export function useInstitutions(type = null, scope = null) {
//   const [institutions, setInstitutions] = useState([]);
//   const [loading, setLoading]           = useState(true);
//   const [error, setError]               = useState("");

//   const refresh = useCallback(async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const params = new URLSearchParams({ include_inactive: "1" });
//       if (type) params.set("type", type);
//       if (scope) params.set("scope", normScope(scope)); // ← always lowercase on the wire

//       const res  = await fetch(`${API_URL}/api/institutions?${params.toString()}`, {
//         headers: authHeaders(),
//       });
//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || "Failed to load institutions");
//       setInstitutions(data.institutions || []);
//     } catch (err) {
//       setError(err.message || "Failed to load institutions");
//     } finally {
//       setLoading(false);
//     }
//   }, [type, scope]);

//   useEffect(() => { refresh(); }, [refresh]);

//   const addOne = async (form) => {
//     const payload = { ...form, scope: normScope(form.scope) }; // ← normalize on write too
//     const res  = await fetch(`${API_URL}/api/institutions`, {
//       method:  "POST",
//       headers: authHeaders(),
//       body:    JSON.stringify(payload),
//     });
//     const data = await res.json();
//     if (!res.ok) throw new Error(data.message || "Failed to add institution");

//     setInstitutions((prev) => [data.institution, ...prev]);
//     return data.institution;
//   };

//   const bulkAdd = async (rows) => {
//     const normalizedRows = rows.map((r) => ({ ...r, scope: normScope(r.scope) }));
//     const res  = await fetch(`${API_URL}/api/institutions/bulk`, {
//       method:  "POST",
//       headers: authHeaders(),
//       body:    JSON.stringify({ rows: normalizedRows }),
//     });
//     const data = await res.json();
//     if (!res.ok) throw new Error(data.message || "Failed to import institutions");

//     setInstitutions((prev) => [...(data.institutions || []), ...prev]);
//     return data.institutions || [];
//   };

//   const remove = async (id) => {
//     const res  = await fetch(`${API_URL}/api/institutions/${id}`, {
//       method:  "DELETE",
//       headers: authHeaders(),
//     });
//     const data = await res.json();
//     if (!res.ok) throw new Error(data.message || "Failed to remove institution");

//     setInstitutions((prev) =>
//       prev.map((i) => (i.id === id ? { ...i, status: "inactive" } : i))
//     );
//   };

//   return { institutions, loading, error, addOne, bulkAdd, remove, refresh };
// }
// src/store/institutionStore.js — API-backed institution data hook
// Used by AddInstitution.jsx (admin CRUD) and EntitySelect.jsx (read-only dropdowns)

import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../config";

const authHeaders = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// Backend already lowercases the scope filter (`strtolower($request->scope)`
// in routes/api.php), but normalizing on the client too keeps writes and
// reads consistent no matter what casing a form happens to send.
const normScope = (s) => (s ? String(s).trim().toLowerCase() : s);

export function useInstitutions(type = null, scope = null) {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState("");

  // ── Load all institutions (admin view includes inactive) ──
  const refresh = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ include_inactive: "1" });
      if (type) params.set("type", type);
      if (scope) params.set("scope", normScope(scope));

      const res  = await fetch(`${API_URL}/api/institutions?${params.toString()}`, {
        headers: authHeaders(),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to load institutions");
      setInstitutions(data.institutions || []);
    } catch (err) {
      setError(err.message || "Failed to load institutions");
    } finally {
      setLoading(false);
    }
  }, [type, scope]);

  useEffect(() => { refresh(); }, [refresh]);

  // ── Add single institution ─────────────────────────────────
  const addOne = async (form) => {
    const payload = { ...form, scope: normScope(form.scope) };
    const res  = await fetch(`${API_URL}/api/institutions`, {
      method:  "POST",
      headers: authHeaders(),
      body:    JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to add institution");

    setInstitutions((prev) => [data.institution, ...prev]);
    return data.institution;
  };

  // ── Bulk add (CSV / Excel import) ──────────────────────────
  const bulkAdd = async (rows) => {
    const normalizedRows = rows.map((r) => ({ ...r, scope: normScope(r.scope) }));
    const res  = await fetch(`${API_URL}/api/institutions/bulk`, {
      method:  "POST",
      headers: authHeaders(),
      body:    JSON.stringify({ rows: normalizedRows }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to import institutions");

    setInstitutions((prev) => [...(data.institutions || []), ...prev]);
    return data.institutions || [];
  };

  // ── Remove (soft-delete → status: inactive) ────────────────
  const remove = async (id) => {
    const res  = await fetch(`${API_URL}/api/institutions/${id}`, {
      method:  "DELETE",
      headers: authHeaders(),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to remove institution");

    setInstitutions((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: "inactive" } : i))
    );
  };

  return { institutions, loading, error, addOne, bulkAdd, remove, refresh };
}