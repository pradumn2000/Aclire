import { useState, useEffect } from "react";
import { API_URL } from "../src/config";

const EVENT_ICONS = {
  created:       "🆕",
  status_change: "🔄",
  check_result:  "✅",
  comment:       "💬",
  document:      "📄",
  default:       "•",
};

export default function CaseTimeline({ caseId }) {
  const [events, setEvents]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState("");

  useEffect(() => {
    if (!caseId) return;
    const token = localStorage.getItem("token");
    fetch(`${API_URL}/api/cases/${caseId}/timeline`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load timeline");
        return res.json();
      })
      .then((data) => setEvents(data.timeline || []))
      .catch(() => setError("Unable to load case timeline."))
      .finally(() => setLoading(false));
  }, [caseId]);

  if (loading) return <p style={{ fontSize: "13px", color: "#94a3b8" }}>Loading timeline…</p>;
  if (error)   return <p style={{ fontSize: "13px", color: "#dc2626" }}>{error}</p>;
  if (events.length === 0) return <p style={{ fontSize: "13px", color: "#94a3b8" }}>No activity recorded yet.</p>;

  return (
    <div className="case-timeline">
      {events.map((ev, i) => (
        <div key={ev.id} className="case-timeline-item">
          <div className="case-timeline-marker">
            <span className="case-timeline-icon">{EVENT_ICONS[ev.type] || EVENT_ICONS.default}</span>
            {i < events.length - 1 && <span className="case-timeline-line" />}
          </div>
          <div className="case-timeline-content">
            <div className="case-timeline-head">
              <strong>{ev.title}</strong>
              <span className="case-timeline-time">
                {new Date(ev.timestamp).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
              </span>
            </div>
            {ev.description && <p className="case-timeline-desc">{ev.description}</p>}
            {ev.actor && <span className="case-timeline-actor">by {ev.actor}</span>}
          </div>
        </div>
      ))}
      <style>{`
        .case-timeline { display: flex; flex-direction: column; }
        .case-timeline-item { display: flex; gap: 12px; }
        .case-timeline-marker { display: flex; flex-direction: column; align-items: center; }
        .case-timeline-icon { width: 28px; height: 28px; border-radius: 50%; background: #eef1fb; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; }
        .case-timeline-line { flex: 1; width: 2px; background: #e2e8f0; margin: 4px 0; min-height: 24px; }
        .case-timeline-content { padding-bottom: 20px; flex: 1; }
        .case-timeline-head { display: flex; justify-content: space-between; gap: 12px; align-items: baseline; flex-wrap: wrap; }
        .case-timeline-head strong { font-size: 13px; color: #1e293b; }
        .case-timeline-time { font-size: 11px; color: #94a3b8; white-space: nowrap; }
        .case-timeline-desc { font-size: 12px; color: #64748b; margin: 4px 0 2px; }
        .case-timeline-actor { font-size: 11px; color: #94a3b8; font-style: italic; }
      `}</style>
    </div>
  );
}