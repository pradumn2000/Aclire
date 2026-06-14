// src/store/companyStore.js — API-backed company data hook
// Used by AddCompany.jsx (admin CRUD) and EntitySelect.jsx (read-only dropdowns)

import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../config";

const authHeaders = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export function useCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState("");

  // ── Load all companies (admin view includes inactive) ──────
  const refresh = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res  = await fetch(`${API_URL}/api/companies?include_inactive=1`, {
        headers: authHeaders(),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to load companies");
      setCompanies(data.companies || []);
    } catch (err) {
      setError(err.message || "Failed to load companies");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  // ── Add single company ──────────────────────────────────────
  const addOne = async (form) => {
    const res  = await fetch(`${API_URL}/api/companies`, {
      method:  "POST",
      headers: authHeaders(),
      body:    JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to add company");

    setCompanies((prev) => [data.company, ...prev]);
    return data.company;
  };

  // ── Bulk add (CSV / Excel import) ────────────────────────────
  const bulkAdd = async (rows) => {
    const res  = await fetch(`${API_URL}/api/companies/bulk`, {
      method:  "POST",
      headers: authHeaders(),
      body:    JSON.stringify({ rows }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to import companies");

    setCompanies((prev) => [...(data.companies || []), ...prev]);
    return data.companies || [];
  };

  // ── Remove (soft-delete → status: inactive) ──────────────────
  const remove = async (id) => {
    const res  = await fetch(`${API_URL}/api/companies/${id}`, {
      method:  "DELETE",
      headers: authHeaders(),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to remove company");

    setCompanies((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "inactive" } : c))
    );
  };

  return { companies, loading, error, addOne, bulkAdd, remove, refresh };
}