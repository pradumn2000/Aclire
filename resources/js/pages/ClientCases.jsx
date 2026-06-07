import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

// ── Mock Data ────────────────────────────────────────────────
const MOCK_CASES = [
  {
    id: "BGV-2401", candidate: "Ravi Kumar", position: "Senior Engineer",
    checks: ["Employment", "Education", "Criminal"],
    status: "active", priority: "high",
    received: "2026-06-01", deadline: "2026-06-08",
    progress: 60, billing: "Postpaid — Client",
    checkStatus: { Employment: "clear", Education: "in_progress", Criminal: "pending" },
    comments: [
      { author: "BGV Team", time: "10:30 AM", text: "Employment check completed. Education in progress." },
    ],
  },
  {
    id: "BGV-2402", candidate: "Anjali Mehta", position: "Product Manager",
    checks: ["Employment", "Education", "Address", "Database", "Criminal", "Drug Test", "Courtroom"],
    status: "active", priority: "urgent",
    received: "2026-06-02", deadline: "2026-06-09",
    progress: 85, billing: "Prepaid — Client",
    checkStatus: { Employment: "clear", Education: "clear", Address: "clear", Database: "clear", Criminal: "in_progress", "Drug Test": "pending", Courtroom: "na" },
    comments: [
      { author: "BGV Team", time: "9:15 AM", text: "6 of 7 checks done. Criminal verification ongoing." },
      { author: "Anjali Mehta (Client)", time: "9:45 AM", text: "Please expedite criminal check." },
    ],
  },
  {
    id: "BGV-2403", candidate: "Suresh Pillai", position: "Finance Lead",
    checks: ["Education", "Database"],
    status: "discrepancy", priority: "high",
    received: "2026-05-28", deadline: "2026-06-04",
    progress: 100, billing: "Postpaid — Client",
    checkStatus: { Education: "discrepancy", Database: "clear" },
    comments: [
      { author: "BGV Team", time: "Yesterday", text: "Education discrepancy found — degree year mismatch (claimed 2018, found 2019)." },
    ],
  },
  {
    id: "BGV-2404", candidate: "Neha Sharma", position: "HR Manager",
    checks: ["Employment", "Address"],
    status: "completed", priority: "normal",
    received: "2026-05-20", deadline: "2026-05-27",
    progress: 100, billing: "Prepaid — Candidate",
    checkStatus: { Employment: "clear", Address: "clear" },
    comments: [],
  },
  {
    id: "BGV-2405", candidate: "Vikram Nair", position: "DevOps Engineer",
    checks: ["Employment", "Education", "Criminal"],
    status: "completed", priority: "normal",
    received: "2026-05-18", deadline: "2026-05-25",
    progress: 100, billing: "Postpaid — Client",
    checkStatus: { Employment: "clear", Education: "clear", Criminal: "clear" },
    comments: [],
  },
];

const STATUS_CONFIG = {
  active:      { label: "Active",      color: "#2b3b8c", bg: "#eef1fb" },
  completed:   { label: "Completed",   color: "#10b981", bg: "#f0fdf4" },
  discrepancy: { label: "Discrepancy", color: "#eb4d4b", bg: "#fff5f5" },
  pending:     { label: "Pending",     color: "#f59e0b", bg: "#fffbeb" },
};

const CHECK_STATUS_CONFIG = {
  clear:       { label: "Clear",       color: "#10b981" },
  in_progress: { label: "In Progress", color: "#2b3b8c" },
  pending:     { label: "Pending",     color: "#f59e0b" },
  discrepancy: { label: "Discrepancy", color: "#eb4d4b" },
  na:          { label: "N/A",         color: "#94a3b8" },
};

const PRIORITY_CONFIG = {
  normal: { label: "Normal", color: "#64748b" },
  high:   { label: "High",   color: "#f59e0b" },
  urgent: { label: "Urgent", color: "#eb4d4b" },
};

export default function ClientCases() {
  const navigate = useNavigate();

  const [cases, setCases]           = useState(MOCK_CASES);
  const [activeTab, setActiveTab]   = useState("all");
  const [search, setSearch]         = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterBilling, setFilterBilling]   = useState("all");
  const [selectedCase, setSelectedCase]     = useState(MOCK_CASES[0]);
  const [activeDetail, setActiveDetail]     = useState("overview"); // overview | comments | documents
  const [newComment, setNewComment]         = useState("");
  const [deleteConfirm, setDeleteConfirm]   = useState(null);

  // ── Derived counts ────────────────────────────────────────
  const counts = {
    all:         cases.length,
    active:      cases.filter(c => c.status === "active").length,
    completed:   cases.filter(c => c.status === "completed").length,
    discrepancy: cases.filter(c => c.status === "discrepancy").length,
  };

  // ── Filtered list ─────────────────────────────────────────
  const filtered = cases.filter(c => {
    if (activeTab !== "all" && c.status !== activeTab) return false;
    if (filterPriority !== "all" && c.priority !== filterPriority) return false;
    if (filterBilling !== "all" && !c.billing.toLowerCase().includes(filterBilling)) return false;
    if (search && !c.candidate.toLowerCase().includes(search.toLowerCase()) &&
        !c.id.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  // ── Actions ───────────────────────────────────────────────
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const updated = cases.map(c =>
      c.id === selectedCase.id
        ? { ...c, comments: [...c.comments, { author: "You (Client)", time: "Just now", text: newComment.trim() }] }
        : c
    );
    setCases(updated);
    setSelectedCase(updated.find(c => c.id === selectedCase.id));
    setNewComment("");
  };

  const handleDelete = (caseId) => {
    const updated = cases.filter(c => c.id !== caseId);
    setCases(updated);
    setDeleteConfirm(null);
    if (selectedCase?.id === caseId) setSelectedCase(updated[0] || null);
  };

  // ── Tabs config ───────────────────────────────────────────
  const TABS = [
    { key: "all",         label: "All Cases"    },
    { key: "active",      label: "Active"       },
    { key: "completed",   label: "Completed"    },
    { key: "discrepancy", label: "Discrepancy"  },
  ];

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="dash-wrper">

            {/* ── Top stats ── */}
            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total">
                <h4>{counts.active}</h4><p>Active</p>
              </div>
              <div className="card-inner-dash bdr-com">
                <h4>{counts.completed}</h4><p>Completed</p>
              </div>
              <div className="card-inner-dash bdr-progress">
                <h4>{counts.discrepancy}</h4><p>Discrepancy</p>
              </div>
              <div className="card-inner-dash bdr-rate">
                <h4>{counts.all > 0 ? Math.round((counts.completed / counts.all) * 100) : 0}%</h4>
                <p>Clear Rate</p>
              </div>
            </div>

            {/* ── Main layout ── */}
            <div className="cc-layout">

              {/* ══ LEFT: Case List ══════════════════════════ */}
              <div className="cc-left">

                {/* Tabs */}
                <div className="cc-tabs">
                  {TABS.map(t => (
                    <button key={t.key}
                      className={`cc-tab ${activeTab === t.key ? "cc-tab-active" : ""}`}
                      onClick={() => setActiveTab(t.key)}>
                      {t.label}
                      <span className="cc-tab-count">{counts[t.key]}</span>
                    </button>
                  ))}
                </div>

                {/* Search + filters */}
                <div className="cc-filter-bar">
                  <div className="cc-search-wrap">
                    <span className="cc-search-icon">⌕</span>
                    <input className="cc-search" type="text"
                      placeholder="Search candidate or case ID..."
                      value={search} onChange={e => setSearch(e.target.value)} />
                  </div>
                  <select className="cc-filter-select"
                    value={filterPriority} onChange={e => setFilterPriority(e.target.value)}>
                    <option value="all">All Priority</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                  <select className="cc-filter-select"
                    value={filterBilling} onChange={e => setFilterBilling(e.target.value)}>
                    <option value="all">All Billing</option>
                    <option value="prepaid">Prepaid</option>
                    <option value="postpaid">Postpaid</option>
                  </select>
                </div>

                {/* Add case button */}
                <button className="cc-add-btn" onClick={() => navigate("/AddCase")}>
                  + Add New Case
                </button>

                {/* Case list */}
                <div className="cc-case-list">
                  {filtered.length === 0 && (
                    <div className="cc-empty">No cases match your filters.</div>
                  )}
                  {filtered.map(c => {
                    const st = STATUS_CONFIG[c.status];
                    const pr = PRIORITY_CONFIG[c.priority];
                    const isSelected = selectedCase?.id === c.id;
                    return (
                      <div key={c.id}
                        className={`cc-case-row ${isSelected ? "cc-case-selected" : ""}`}
                        onClick={() => { setSelectedCase(c); setActiveDetail("overview"); }}>
                        <div className="cc-case-row-top">
                          <span className="cc-case-id">{c.id}</span>
                          <span className="cc-case-status-pill"
                            style={{ color: st.color, background: st.bg }}>
                            {st.label}
                          </span>
                        </div>
                        <div className="cc-case-name">{c.candidate}</div>
                        <div className="cc-case-pos">{c.position}</div>
                        <div className="cc-case-row-bottom">
                          <span className="cc-case-checks">
                            {c.checks.length} check{c.checks.length > 1 ? "s" : ""}
                          </span>
                          <span className="cc-case-priority"
                            style={{ color: pr.color }}>● {pr.label}</span>
                          <span className="cc-case-billing-tag">{c.billing}</span>
                        </div>
                        <div className="cc-progress-bar-wrap">
                          <div className="cc-progress-bar-fill"
                            style={{
                              width: `${c.progress}%`,
                              background: c.status === "discrepancy" ? "#eb4d4b"
                                : c.progress === 100 ? "#10b981" : "#2b3b8c",
                            }} />
                        </div>
                        <div className="cc-case-row-meta">
                          <span>Due: {c.deadline}</span>
                          <span>{c.progress}% done</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ══ RIGHT: Case Detail ═══════════════════════ */}
              {selectedCase ? (
                <div className="cc-right">

                  {/* Detail header */}
                  <div className="cc-detail-header">
                    <div className="cc-detail-title-row">
                      <div>
                        <span className="cc-detail-id">{selectedCase.id}</span>
                        <h3 className="cc-detail-name">{selectedCase.candidate}</h3>
                        <span className="cc-detail-pos">{selectedCase.position}</span>
                      </div>
                      <div className="cc-detail-header-actions">
                        <button className="cc-download-btn"
                          title="Download Report">
                          ↓ Report
                        </button>
                        <button className="cc-delete-btn"
                          onClick={() => setDeleteConfirm(selectedCase.id)}
                          title="Delete Case">
                          🗑
                        </button>
                      </div>
                    </div>

                    <div className="cc-detail-meta-row">
                      <span className="cc-detail-meta-item">
                        <span className="cc-meta-label">Billing</span>
                        {selectedCase.billing}
                      </span>
                      <span className="cc-detail-meta-item">
                        <span className="cc-meta-label">Received</span>
                        {selectedCase.received}
                      </span>
                      <span className="cc-detail-meta-item">
                        <span className="cc-meta-label">Deadline</span>
                        {selectedCase.deadline}
                      </span>
                      <span className="cc-detail-meta-item">
                        <span className="cc-meta-label">Priority</span>
                        <span style={{ color: PRIORITY_CONFIG[selectedCase.priority].color, fontWeight: 700 }}>
                          {PRIORITY_CONFIG[selectedCase.priority].label}
                        </span>
                      </span>
                    </div>

                    {/* Detail tabs */}
                    <div className="cc-detail-tabs">
                      {["overview", "comments", "documents"].map(t => (
                        <button key={t}
                          className={`cc-detail-tab ${activeDetail === t ? "cc-detail-tab-active" : ""}`}
                          onClick={() => setActiveDetail(t)}>
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                          {t === "comments" && selectedCase.comments.length > 0 &&
                            <span className="cc-comment-badge">{selectedCase.comments.length}</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ── Overview tab ── */}
                  {activeDetail === "overview" && (
                    <div className="cc-detail-body">
                      <h4 className="cc-section-label">Check-wise Status</h4>
                      <div className="cc-checks-status-grid">
                        {selectedCase.checks.map(chk => {
                          const st = CHECK_STATUS_CONFIG[selectedCase.checkStatus[chk]] || CHECK_STATUS_CONFIG.pending;
                          return (
                            <div key={chk} className="cc-check-status-card">
                              <span className="cc-check-status-name">{chk}</span>
                              <span className="cc-check-status-pill"
                                style={{ color: st.color, background: `${st.color}18` }}>
                                {st.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <h4 className="cc-section-label" style={{ marginTop: 20 }}>Overall Progress</h4>
                      <div className="cc-overall-progress-wrap">
                        <div className="cc-overall-progress-bar">
                          <div className="cc-overall-progress-fill"
                            style={{
                              width: `${selectedCase.progress}%`,
                              background: selectedCase.status === "discrepancy" ? "#eb4d4b"
                                : selectedCase.progress === 100 ? "#10b981" : "#2b3b8c",
                            }} />
                        </div>
                        <span className="cc-overall-progress-pct">{selectedCase.progress}%</span>
                      </div>

                      <div className="cc-detail-actions">
                        <button className="primary-cta export"
                          style={{ fontSize: "0.8rem", padding: "10px 18px" }}>
                          ↓ Download Report
                        </button>
                        <button className="secondary-cta import"
                          style={{ fontSize: "0.8rem", padding: "10px 18px" }}
                          onClick={() => setActiveDetail("comments")}>
                          ✉ Submit Query
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── Comments tab ── */}
                  {activeDetail === "comments" && (
                    <div className="cc-detail-body">
                      <div className="cc-comments-list">
                        {selectedCase.comments.length === 0 && (
                          <div className="cc-empty-comments">No comments yet. Be the first to ask.</div>
                        )}
                        {selectedCase.comments.map((cm, i) => (
                          <div key={i} className="cc-comment-card">
                            <div className="cc-comment-avatar">
                              {cm.author.charAt(0).toUpperCase()}
                            </div>
                            <div className="cc-comment-body">
                              <div className="cc-comment-meta">
                                <span className="cc-comment-author">{cm.author}</span>
                                <span className="cc-comment-time">{cm.time}</span>
                              </div>
                              <p className="cc-comment-text">{cm.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="cc-comment-input-row">
                        <input className="cc-comment-input" type="text"
                          placeholder="Type your query or comment..."
                          value={newComment}
                          onChange={e => setNewComment(e.target.value)}
                          onKeyDown={e => e.key === "Enter" && handleAddComment()} />
                        <button className="cc-comment-send" onClick={handleAddComment}>Send</button>
                      </div>
                    </div>
                  )}

                  {/* ── Documents tab ── */}
                  {activeDetail === "documents" && (
                    <div className="cc-detail-body">
                      <div className="cc-docs-list">
                        {[
                          { name: "Employment Verification Report", type: "PDF", date: "2026-06-05", ready: true },
                          { name: "Education Certificate Copy",     type: "PDF", date: "2026-06-04", ready: true },
                          { name: "Criminal Check Report",          type: "PDF", date: "—",          ready: false },
                          { name: "Final BGV Report",               type: "PDF", date: "—",          ready: selectedCase.status === "completed" },
                        ].map((doc, i) => (
                          <div key={i} className="cc-doc-row">
                            <div className="cc-doc-icon">📄</div>
                            <div className="cc-doc-info">
                              <span className="cc-doc-name">{doc.name}</span>
                              <span className="cc-doc-date">{doc.date !== "—" ? `Uploaded ${doc.date}` : "Not available yet"}</span>
                            </div>
                            <button className={`cc-doc-download ${!doc.ready ? "cc-doc-disabled" : ""}`}
                              disabled={!doc.ready}>
                              {doc.ready ? "↓ Download" : "Pending"}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="cc-right cc-right-empty">
                  <p>Select a case to view details</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </section>

      {/* ── Delete Confirm Modal ── */}
      {deleteConfirm && (
        <div className="cc-modal-overlay">
          <div className="cc-modal">
            <h3 className="cc-modal-title">Delete Case?</h3>
            <p className="cc-modal-body">
              This will permanently remove <strong>{deleteConfirm}</strong> and all its data.
              This action cannot be undone.
            </p>
            <div className="cc-modal-actions">
              <button className="cc-modal-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
              <button className="cc-modal-confirm" onClick={() => handleDelete(deleteConfirm)}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{styles}</style>
    </>
  );
}

const styles = `
  /* ── Layout ── */
  .cc-layout {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 20px;
    margin-top: 20px;
    align-items: start;
  }
  @media (max-width: 1024px) { .cc-layout { grid-template-columns: 1fr; } }

  /* ── Left panel ── */
  .cc-left { display: flex; flex-direction: column; gap: 12px; }

  .cc-tabs {
    display: flex; gap: 4px;
    background: #f0f2f8; border-radius: 10px; padding: 4px;
  }
  .cc-tab {
    flex: 1; padding: 7px 6px; border: none; border-radius: 7px;
    background: transparent; font-size: 0.72rem; font-weight: 600;
    color: #64748b; cursor: pointer; transition: all 0.15s;
    display: flex; align-items: center; justify-content: center; gap: 4px;
  }
  .cc-tab-active { background: #fff; color: #2b3b8c; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
  .cc-tab-count {
    background: #e2e8f0; color: #475569; font-size: 0.62rem; font-weight: 700;
    padding: 1px 5px; border-radius: 20px;
  }
  .cc-tab-active .cc-tab-count { background: #eef1fb; color: #2b3b8c; }

  .cc-filter-bar { display: flex; gap: 8px; align-items: center; }
  .cc-search-wrap {
    flex: 1; display: flex; align-items: center; gap: 6px;
    background: #fff; border: 1.5px solid #e2e8f0; border-radius: 8px;
    padding: 7px 10px;
  }
  .cc-search-icon { font-size: 1rem; color: #94a3b8; }
  .cc-search {
    border: none; outline: none; font-size: 0.8rem; color: #1e293b;
    background: transparent; width: 100%;
  }
  .cc-filter-select {
    padding: 7px 10px; border: 1.5px solid #e2e8f0; border-radius: 8px;
    font-size: 0.75rem; font-weight: 600; color: #475569;
    background: #fff; cursor: pointer; outline: none;
  }

  .cc-add-btn {
    width: 100%; padding: 10px; border: 1.5px dashed #2b3b8c;
    border-radius: 8px; background: #eef1fb; color: #2b3b8c;
    font-size: 0.82rem; font-weight: 700; cursor: pointer;
    transition: all 0.15s;
  }
  .cc-add-btn:hover { background: #dde3f5; }

  .cc-case-list { display: flex; flex-direction: column; gap: 8px; max-height: 65vh; overflow-y: auto; }
  .cc-empty { text-align: center; color: #94a3b8; font-size: 0.85rem; padding: 32px; }

  .cc-case-row {
    background: #fff; border: 1.5px solid #e8ecf4; border-radius: 10px;
    padding: 14px; cursor: pointer; transition: all 0.15s;
  }
  .cc-case-row:hover { border-color: #2b3b8c; }
  .cc-case-selected { border-color: #2b3b8c; box-shadow: 0 0 0 2px #eef1fb; }

  .cc-case-row-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
  .cc-case-id { font-size: 0.72rem; font-weight: 700; color: #2b3b8c; }
  .cc-case-status-pill { font-size: 0.68rem; font-weight: 700; padding: 2px 8px; border-radius: 20px; }
  .cc-case-name { font-size: 0.9rem; font-weight: 700; color: #1e293b; margin-bottom: 2px; }
  .cc-case-pos  { font-size: 0.75rem; color: #94a3b8; margin-bottom: 8px; }

  .cc-case-row-bottom {
    display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 8px;
  }
  .cc-case-checks { font-size: 0.7rem; color: #64748b; }
  .cc-case-priority { font-size: 0.7rem; font-weight: 700; }
  .cc-case-billing-tag {
    font-size: 0.65rem; background: #f0f2f8; color: #475569;
    padding: 2px 7px; border-radius: 20px; font-weight: 600; margin-left: auto;
  }

  .cc-progress-bar-wrap {
    height: 4px; background: #f0f2f8; border-radius: 2px; margin-bottom: 4px; overflow: hidden;
  }
  .cc-progress-bar-fill { height: 100%; border-radius: 2px; transition: width 0.3s; }
  .cc-case-row-meta { display: flex; justify-content: space-between; font-size: 0.68rem; color: #94a3b8; }

  /* ── Right panel ── */
  .cc-right {
    background: #fff; border: 1.5px solid #e8ecf4; border-radius: 12px;
    overflow: hidden; position: sticky; top: 20px;
  }
  .cc-right-empty {
    display: flex; align-items: center; justify-content: center;
    min-height: 400px; color: #94a3b8; font-size: 0.9rem;
  }

  .cc-detail-header { padding: 20px 20px 0; border-bottom: 1px solid #f0f2f8; }
  .cc-detail-title-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
  .cc-detail-id { font-size: 0.72rem; font-weight: 700; color: #2b3b8c; display: block; margin-bottom: 2px; }
  .cc-detail-name { font-size: 1.1rem; font-weight: 800; color: #1e293b; margin: 0 0 2px; }
  .cc-detail-pos { font-size: 0.78rem; color: #94a3b8; }

  .cc-detail-header-actions { display: flex; gap: 8px; align-items: center; }
  .cc-download-btn {
    padding: 7px 12px; border: 1.5px solid #2b3b8c; border-radius: 7px;
    background: #eef1fb; color: #2b3b8c; font-size: 0.75rem; font-weight: 700;
    cursor: pointer; transition: all 0.15s;
  }
  .cc-download-btn:hover { background: #2b3b8c; color: #fff; }
  .cc-delete-btn {
    padding: 7px 10px; border: 1.5px solid #fecaca; border-radius: 7px;
    background: #fff5f5; color: #eb4d4b; font-size: 0.85rem;
    cursor: pointer; transition: all 0.15s;
  }
  .cc-delete-btn:hover { background: #eb4d4b; color: #fff; border-color: #eb4d4b; }

  .cc-detail-meta-row {
    display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 14px;
  }
  .cc-detail-meta-item { font-size: 0.75rem; color: #1e293b; display: flex; flex-direction: column; gap: 1px; }
  .cc-meta-label { font-size: 0.65rem; color: #94a3b8; font-weight: 600; text-transform: uppercase; }

  .cc-detail-tabs { display: flex; gap: 0; border-top: 1px solid #f0f2f8; }
  .cc-detail-tab {
    padding: 10px 16px; border: none; background: transparent;
    font-size: 0.78rem; font-weight: 600; color: #94a3b8;
    cursor: pointer; border-bottom: 2px solid transparent;
    transition: all 0.15s; display: flex; align-items: center; gap: 6px;
  }
  .cc-detail-tab-active { color: #2b3b8c; border-bottom-color: #2b3b8c; }
  .cc-comment-badge {
    background: #2b3b8c; color: #fff; font-size: 0.6rem; font-weight: 700;
    width: 16px; height: 16px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }

  .cc-detail-body { padding: 18px 20px; }
  .cc-section-label {
    font-size: 0.72rem; font-weight: 700; color: #94a3b8;
    text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 10px;
  }

  /* Check status grid */
  .cc-checks-status-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .cc-check-status-card {
    display: flex; justify-content: space-between; align-items: center;
    background: #f8fafc; border: 1px solid #e8ecf4; border-radius: 8px;
    padding: 9px 12px;
  }
  .cc-check-status-name { font-size: 0.78rem; font-weight: 600; color: #334155; }
  .cc-check-status-pill { font-size: 0.68rem; font-weight: 700; padding: 2px 8px; border-radius: 20px; }

  /* Overall progress */
  .cc-overall-progress-wrap { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
  .cc-overall-progress-bar { flex: 1; height: 8px; background: #f0f2f8; border-radius: 4px; overflow: hidden; }
  .cc-overall-progress-fill { height: 100%; border-radius: 4px; transition: width 0.4s; }
  .cc-overall-progress-pct { font-size: 0.82rem; font-weight: 700; color: #2b3b8c; white-space: nowrap; }

  .cc-detail-actions { display: flex; gap: 10px; flex-wrap: wrap; }

  /* Comments */
  .cc-comments-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px; max-height: 340px; overflow-y: auto; }
  .cc-empty-comments { text-align: center; color: #94a3b8; font-size: 0.82rem; padding: 24px; }
  .cc-comment-card { display: flex; gap: 10px; }
  .cc-comment-avatar {
    width: 32px; height: 32px; border-radius: 50%; background: #2b3b8c;
    color: #fff; font-size: 0.8rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .cc-comment-body { flex: 1; }
  .cc-comment-meta { display: flex; gap: 8px; align-items: center; margin-bottom: 4px; }
  .cc-comment-author { font-size: 0.78rem; font-weight: 700; color: #1e293b; }
  .cc-comment-time   { font-size: 0.68rem; color: #94a3b8; }
  .cc-comment-text   { font-size: 0.8rem; color: #475569; margin: 0; line-height: 1.5; }

  .cc-comment-input-row { display: flex; gap: 8px; }
  .cc-comment-input {
    flex: 1; padding: 10px 13px; border: 1.5px solid #e2e8f0; border-radius: 8px;
    font-size: 0.82rem; color: #1e293b; outline: none;
  }
  .cc-comment-input:focus { border-color: #2b3b8c; }
  .cc-comment-send {
    padding: 10px 16px; background: #2b3b8c; color: #fff;
    border: none; border-radius: 8px; font-size: 0.82rem; font-weight: 700;
    cursor: pointer; transition: background 0.15s;
  }
  .cc-comment-send:hover { background: #1e2d6b; }

  /* Documents */
  .cc-docs-list { display: flex; flex-direction: column; gap: 10px; }
  .cc-doc-row {
    display: flex; align-items: center; gap: 12px;
    background: #f8fafc; border: 1px solid #e8ecf4; border-radius: 8px; padding: 12px;
  }
  .cc-doc-icon { font-size: 1.2rem; }
  .cc-doc-info { flex: 1; display: flex; flex-direction: column; gap: 2px; }
  .cc-doc-name { font-size: 0.82rem; font-weight: 600; color: #1e293b; }
  .cc-doc-date { font-size: 0.7rem; color: #94a3b8; }
  .cc-doc-download {
    padding: 6px 12px; border: 1.5px solid #2b3b8c; border-radius: 7px;
    background: #eef1fb; color: #2b3b8c; font-size: 0.72rem; font-weight: 700;
    cursor: pointer; white-space: nowrap; transition: all 0.15s;
  }
  .cc-doc-download:hover:not(:disabled) { background: #2b3b8c; color: #fff; }
  .cc-doc-disabled {
    border-color: #e2e8f0; background: #f8fafc; color: #94a3b8; cursor: not-allowed;
  }

  /* Modal */
  .cc-modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.4);
    display: flex; align-items: center; justify-content: center; z-index: 999;
  }
  .cc-modal {
    background: #fff; border-radius: 14px; padding: 32px; max-width: 400px;
    width: 90%; box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  }
  .cc-modal-title { font-size: 1.1rem; font-weight: 800; color: #1e293b; margin: 0 0 10px; }
  .cc-modal-body  { font-size: 0.85rem; color: #64748b; line-height: 1.6; margin-bottom: 24px; }
  .cc-modal-actions { display: flex; gap: 10px; justify-content: flex-end; }
  .cc-modal-cancel {
    padding: 9px 18px; border: 1.5px solid #e2e8f0; border-radius: 8px;
    background: #fff; color: #475569; font-size: 0.82rem; font-weight: 600; cursor: pointer;
  }
  .cc-modal-confirm {
    padding: 9px 18px; border: none; border-radius: 8px;
    background: #eb4d4b; color: #fff; font-size: 0.82rem; font-weight: 700; cursor: pointer;
  }
`;