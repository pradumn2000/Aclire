import { useState, useEffect, useRef } from "react";

/**
 * DateRangePicker
 *
 * Props:
 *   datePreset      string   - "all" | "today" | "week" | "month" | "custom"
 *   setDatePreset   fn
 *   customRange     { from: "YYYY-MM-DD", to: "YYYY-MM-DD" }
 *   applyCustomRange fn(from, to)
 *   clearDate       fn
 *   showPicker      bool
 *   setShowPicker   fn
 *   dateLabel       string   - text shown on the button
 */
export default function DateRangePicker({
  datePreset,
  setDatePreset,
  customRange,
  applyCustomRange,
  clearDate,
  showPicker,
  setShowPicker,
  dateLabel,
}) {
  const [localFrom, setLocalFrom] = useState(customRange.from || "");
  const [localTo,   setLocalTo]   = useState(customRange.to   || "");
  const ref = useRef(null);

  // Close picker on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowPicker(false);
      }
    };
    if (showPicker) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showPicker, setShowPicker]);

  // Sync local state when customRange changes externally
  useEffect(() => {
    setLocalFrom(customRange.from || "");
    setLocalTo(customRange.to     || "");
  }, [customRange]);

  const handlePreset = (preset) => {
    setDatePreset(preset);
    if (preset !== "custom") {
      setShowPicker(false);
    }
  };

  const handleApply = () => {
    applyCustomRange(localFrom, localTo);
  };

  const isActive = (preset) => datePreset === preset;

  return (
    <div style={{ position: "relative" }} ref={ref}>
      {/* Trigger button */}
      <button
        className="date-wrapper"
        onClick={() => setShowPicker(v => !v)}
        style={{
          display: "flex", alignItems: "center", gap: 6,
          borderColor: datePreset !== "all" ? "#2b3b8c" : undefined,
          background: datePreset !== "all" ? "#eef1fb" : undefined,
        }}
      >
        <img src="/images/dashboard/calendar-icon.svg" alt="" />
        <span style={{
          fontSize: "0.8rem",
          color: datePreset !== "all" ? "#2b3b8c" : "#64748b",
          fontWeight: datePreset !== "all" ? 600 : 400,
          maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          {dateLabel}
        </span>
        {datePreset !== "all" && (
          <span
            onClick={(e) => { e.stopPropagation(); clearDate(); }}
            style={{
              marginLeft: 2, color: "#94a3b8", fontSize: "0.9rem",
              lineHeight: 1, cursor: "pointer", fontWeight: 700,
            }}
            title="Clear date filter"
          >×</span>
        )}
      </button>

      {/* Dropdown */}
      {showPicker && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", right: 0,
          background: "#fff", border: "1.5px solid #e2e8f0",
          borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          zIndex: 1000, minWidth: 280, padding: 16,
        }}>
          {/* Preset buttons */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
            {[
              { key: "all",   label: "All Time"   },
              { key: "today", label: "Today"       },
              { key: "week",  label: "This Week"   },
              { key: "month", label: "This Month"  },
            ].map(p => (
              <button key={p.key} onClick={() => handlePreset(p.key)} style={{
                padding: "8px 12px", borderRadius: 8, fontSize: "0.8rem", fontWeight: 600,
                cursor: "pointer", transition: "all 0.15s",
                border: isActive(p.key) ? "1.5px solid #2b3b8c" : "1.5px solid #e2e8f0",
                background: isActive(p.key) ? "#eef1fb" : "#f8fafc",
                color: isActive(p.key) ? "#2b3b8c" : "#64748b",
              }}>
                {p.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px dashed #e2e8f0", marginBottom: 14 }} />

          {/* Custom range */}
          <p style={{ margin: "0 0 8px", fontSize: "0.75rem", fontWeight: 700,
            color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Custom Range
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 600 }}>From</label>
              <input
                type="date"
                value={localFrom}
                max={localTo || undefined}
                onChange={e => { setLocalFrom(e.target.value); setDatePreset("custom"); }}
                style={{
                  padding: "8px 10px", border: "1.5px solid #e2e8f0", borderRadius: 7,
                  fontSize: "0.82rem", color: "#1e293b", outline: "none",
                  background: "#f8fafc",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 600 }}>To</label>
              <input
                type="date"
                value={localTo}
                min={localFrom || undefined}
                onChange={e => { setLocalTo(e.target.value); setDatePreset("custom"); }}
                style={{
                  padding: "8px 10px", border: "1.5px solid #e2e8f0", borderRadius: 7,
                  fontSize: "0.82rem", color: "#1e293b", outline: "none",
                  background: "#f8fafc",
                }}
              />
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <button onClick={clearDate} style={{
              flex: 1, padding: "8px", borderRadius: 8, fontSize: "0.78rem",
              fontWeight: 600, cursor: "pointer",
              border: "1.5px solid #e2e8f0", background: "#f8fafc", color: "#64748b",
            }}>
              Clear
            </button>
            <button onClick={handleApply} style={{
              flex: 2, padding: "8px", borderRadius: 8, fontSize: "0.78rem",
              fontWeight: 700, cursor: "pointer",
              border: "1.5px solid #2b3b8c", background: "#2b3b8c", color: "#fff",
            }}>
              Apply Range
            </button>
          </div>
        </div>
      )}
    </div>
  );
}