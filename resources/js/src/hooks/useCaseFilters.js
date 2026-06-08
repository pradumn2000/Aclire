import { useState, useMemo, useCallback } from "react";

// ─────────────────────────────────────────────────────────────
//  useCaseFilters
//  Drop this hook into Dashboard and AllCases.
//  Returns filtered cases + all the controls you need to wire up.
// ─────────────────────────────────────────────────────────────

/**
 * @param {Array}  cases       - raw case array from useCases()
 * @param {Object} opts
 *   showStatusFilter  boolean  - AllCases needs it, Dashboard doesn't need to surface it
 */
export function useCaseFilters(cases, { showStatusFilter = true } = {}) {

  // ── Date preset ──────────────────────────────────────────
  const [datePreset, setDatePreset]   = useState("all");   // all | today | week | month | custom
  const [customRange, setCustomRange] = useState({ from: "", to: "" });
  const [showPicker, setShowPicker]   = useState(false);

  // ── Status filter (AllCases tab bar) ─────────────────────
  const [statusFilter, setStatusFilter] = useState("All");

  // ── Search (AllCases search box) ─────────────────────────
  const [search, setSearch] = useState("");

  // ── Helpers ──────────────────────────────────────────────
  const today = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const parseDate = (iso) => {
    const d = new Date(iso);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const inDateRange = useCallback((caseIso) => {
    if (!caseIso) return true;
    const d = parseDate(caseIso);
    const t = today();

    if (datePreset === "today") {
      return d.getTime() === t.getTime();
    }
    if (datePreset === "week") {
      const weekAgo = new Date(t); weekAgo.setDate(t.getDate() - 6);
      return d >= weekAgo && d <= t;
    }
    if (datePreset === "month") {
      const monthAgo = new Date(t); monthAgo.setMonth(t.getMonth() - 1);
      return d >= monthAgo && d <= t;
    }
    if (datePreset === "custom") {
      const from = customRange.from ? parseDate(customRange.from) : null;
      const to   = customRange.to   ? parseDate(customRange.to)   : null;
      if (from && d < from) return false;
      if (to   && d > to)   return false;
      return true;
    }
    return true; // "all"
  }, [datePreset, customRange]);

  // ── Filtered list ────────────────────────────────────────
  const filtered = useMemo(() => {
    return cases.filter(row => {
      // date
      if (!inDateRange(row.createdAt)) return false;

      // status tab
      if (showStatusFilter && statusFilter !== "All" && row.label !== statusFilter) return false;

      // search
      if (search.trim()) {
        const q = search.toLowerCase();
        const hit =
          (row.id        || "").toLowerCase().includes(q) ||
          (row.candidate || "").toLowerCase().includes(q) ||
          (row.client    || "").toLowerCase().includes(q);
        if (!hit) return false;
      }

      return true;
    });
  }, [cases, inDateRange, statusFilter, search, showStatusFilter]);

  // ── Date preset label (for the button display) ───────────
  const dateLabel = useMemo(() => {
    if (datePreset === "today")  return "Today";
    if (datePreset === "week")   return "This Week";
    if (datePreset === "month")  return "This Month";
    if (datePreset === "custom" && customRange.from && customRange.to)
      return `${customRange.from} → ${customRange.to}`;
    if (datePreset === "custom" && customRange.from)
      return `From ${customRange.from}`;
    return "Select Date";
  }, [datePreset, customRange]);

  // ── Apply custom range from the date picker ──────────────
  const applyCustomRange = useCallback((from, to) => {
    setCustomRange({ from, to });
    setDatePreset("custom");
    setShowPicker(false);
  }, []);

  const clearDate = useCallback(() => {
    setDatePreset("all");
    setCustomRange({ from: "", to: "" });
    setShowPicker(false);
  }, []);

  // ── Export helpers ───────────────────────────────────────
  const toCSVRow = (row) => [
    row.id, row.candidate, row.email || "", row.mobile || "",
    row.client, row.checks, row.label, row.tat,
    row.billingMode || "", row.amount || "",
    row.priority || "", row.createdAt ? row.createdAt.slice(0, 10) : "",
  ];

  const CSV_HEADERS = [
    "Case ID", "Candidate", "Email", "Mobile",
    "Client", "Checks", "Status", "TAT",
    "Billing Mode", "Amount (₹)",
    "Priority", "Created Date",
  ];

  const exportCSV = useCallback(() => {
    const rows = [CSV_HEADERS, ...filtered.map(toCSVRow)];
    const csv  = rows.map(r =>
      r.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")
    ).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = `bgv_cases_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [filtered]);

  const exportExcel = useCallback(() => {
    // Build a proper .xlsx using SheetJS-style HTML table trick —
    // works in all browsers without any npm package.
    const rows = [CSV_HEADERS, ...filtered.map(toCSVRow)];

    // Build XML for a real .xlsx (Office Open XML)
    // We use the simpler xls (HTML table) approach that Excel opens natively.
    const table = [
      "<table>",
      "<thead><tr>" + CSV_HEADERS.map(h => `<th>${h}</th>`).join("") + "</tr></thead>",
      "<tbody>",
      ...filtered.map(row => {
        const cells = toCSVRow(row);
        return "<tr>" + cells.map(v => `<td>${v ?? ""}</td>`).join("") + "</tr>";
      }),
      "</tbody></table>",
    ].join("");

    const html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:x="urn:schemas-microsoft-com:office:excel"
            xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="UTF-8">
      <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets>
      <x:ExcelWorksheet><x:Name>BGV Cases</x:Name>
      <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
      </x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
      </head><body>${table}</body></html>`;

    const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = `bgv_cases_${new Date().toISOString().slice(0, 10)}.xls`;
    a.click();
    URL.revokeObjectURL(url);
  }, [filtered]);

  return {
    // filtered data
    filtered,

    // date controls
    datePreset, setDatePreset,
    customRange, applyCustomRange, clearDate,
    showPicker, setShowPicker,
    dateLabel,

    // status tab (AllCases)
    statusFilter, setStatusFilter,

    // search (AllCases)
    search, setSearch,

    // exports
    exportCSV,
    exportExcel,
  };
}