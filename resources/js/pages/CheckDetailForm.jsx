// import { useState } from "react";
// import { CHECK_FORM_CONFIG } from "../src/checkFormsConfig";
// import { API_URL } from "../src/config";

// export default function CheckDetailForm({ caseObj, checkKey, onClose, onSaved }) {
//   const config = CHECK_FORM_CONFIG[checkKey] || { label: checkKey, fields: [], documents: [] };
//   const token = localStorage.getItem("token");

//   const existing = caseObj?.check_details?.[checkKey] || {};
//   const [fields, setFields]     = useState(existing.fields || {});
//   const [documents, setDocuments] = useState(existing.documents || {}); // { docKey: { name, url } }
//   const [uploadingKey, setUploadingKey] = useState(null);
//   const [saving, setSaving]     = useState(false);
//   const [error, setError]       = useState("");
//   const [shareLink, setShareLink] = useState("");
//   const [linkCopied, setLinkCopied] = useState(false);
//   const [generatingLink, setGeneratingLink] = useState(false);
//   const [dynamicLists, setDynamicLists]     = useState({}); // key -> [{id,name}]
//   const [dynamicLoading, setDynamicLoading] = useState({});
  
//   const buildKey = (f, scopeVal) =>
//     `${f.source}|${scopeVal || ""}|${JSON.stringify(f.extraParams || {})}`;

//   useEffect(() => {
//     config.fields
//       .filter(f => f.type === "select_dynamic")
//       .forEach(f => {
//         const scopeVal = f.filterBy ? fields[f.filterBy] : null;
//         if (f.filterBy && !scopeVal) return; // wait until National/International is picked
//         const key = buildKey(f, scopeVal);
//         if (dynamicLists[key] || dynamicLoading[key]) return;

//         setDynamicLoading(p => ({ ...p, [key]: true }));
//         const params = new URLSearchParams(f.extraParams || {});
//         if (scopeVal) params.set("scope", scopeVal.toLowerCase());

//         fetch(`${API_URL}/api/${f.source}?${params.toString()}`, {
//           headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
//         })
//           .then(r => r.json())
//           .then(data => {
//             const list = data[f.source] || [];
//             setDynamicLists(p => ({ ...p, [key]: list }));
//           })
//           .catch(() => setDynamicLists(p => ({ ...p, [key]: [] })))
//           .finally(() => setDynamicLoading(p => ({ ...p, [key]: false })));
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [fields.scope]);

//   const setField = (key, value) => setFields(p => ({ ...p, [key]: value }));


//   const handleSave = async () => {
//     setSaving(true);
//     setError("");
//     try {
//       const res = await fetch(`${API_URL}/api/cases/${caseObj.case_id}/checks/${checkKey}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ fields }),
//       });
//       const data = await res.json();
//       if (!res.ok) { setError(data.message || "Failed to save."); return; }
//       onSaved?.(checkKey, { fields, documents });
//       onClose();
//     } catch {
//       setError("Server error while saving.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleUpload = async (docKey, file) => {
//     if (!file) return;
//     setUploadingKey(docKey);
//     setError("");
//     try {
//       const formData = new FormData();
//       formData.append("document_key", docKey);
//       formData.append("file", file);

//       const res = await fetch(`${API_URL}/api/cases/${caseObj.case_id}/checks/${checkKey}/documents`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
//         body: formData,
//       });
//       const data = await res.json();
//       if (!res.ok) { setError(data.message || "Upload failed."); return; }

//       setDocuments(p => ({ ...p, [docKey]: { name: file.name, url: data.url } }));
//     } catch {
//       setError("Server error while uploading.");
//     } finally {
//       setUploadingKey(null);
//     }
//   };

//   const handleRemoveDoc = (docKey) => {
//     setDocuments(p => {
//       const next = { ...p };
//       delete next[docKey];
//       return next;
//     });
//     // Optionally: fire DELETE /api/cases/{id}/checks/{checkKey}/documents/{docKey}
//   };

//   const generateShareLink = async () => {
//     setGeneratingLink(true);
//     try {
//       const res = await fetch(`${API_URL}/api/cases/${caseObj.case_id}/checks/${checkKey}/share-link`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
//       });
//       const data = await res.json();
//       if (res.ok) setShareLink(data.url);
//       else setError(data.message || "Could not generate link.");
//     } catch {
//       setError("Server error generating link.");
//     } finally {
//       setGeneratingLink(false);
//     }
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText(shareLink);
//     setLinkCopied(true);
//     setTimeout(() => setLinkCopied(false), 2000);
//   };

//   return (
//     <div style={{
//       position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1100,
//       display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
//     }}>
//       <div style={{ background: "#fff", borderRadius: "14px", width: "100%", maxWidth: "560px",
//         maxHeight: "88vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>

//         <div style={{ background: "#27348B", color: "#fff", padding: "16px 20px",
//           display: "flex", justifyContent: "space-between", alignItems: "center",
//           borderRadius: "14px 14px 0 0" }}>
//           <strong style={{ fontSize: "14px" }}>
//             {config.label} — {caseObj.case_id}
//           </strong>
//           <button onClick={onClose} style={{ background: "none", border: "none", color: "#fff",
//             fontSize: "20px", cursor: "pointer" }}>×</button>
//         </div>

//         <div style={{ padding: "20px" }}>
//           {error && (
//             <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", color: "#dc2626",
//               borderRadius: "8px", padding: "10px 12px", fontSize: "13px", marginBottom: "14px" }}>
//               {error}
//             </div>
//           )}

//           {config.fields.length > 0 && (
//             <>
//               <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase",
//                 letterSpacing: "0.05em", marginBottom: "12px" }}>Details</p>
//               <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "22px" }}>
//                 {config.fields.map(f => (
//                   <div key={f.key} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                     <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
//                       {f.label}{f.required && <span style={{ color: "#eb4d4b" }}> *</span>}
//                     </label>
//                     {f.type === "select" ? (
//                       <select value={fields[f.key] || ""} onChange={e => setField(f.key, e.target.value)}
//                         style={inputStyle}>
//                         <option value="">— Select —</option>
//                         {f.options.map(o => <option key={o} value={o}>{o}</option>)}
//                       </select>
//                     ) : f.type === "textarea" ? (
//                       <textarea value={fields[f.key] || ""} onChange={e => setField(f.key, e.target.value)}
//                         rows={3} style={{ ...inputStyle, resize: "vertical" }} />
//                     ) : (
//                       <input type={f.type} value={fields[f.key] || ""} onChange={e => setField(f.key, e.target.value)}
//                         style={inputStyle} />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {config.documents.length > 0 && (
//             <>
//               <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase",
//                 letterSpacing: "0.05em", marginBottom: "12px" }}>Documents</p>
//               <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
//                 {config.documents.map(d => {
//                   const uploaded = documents[d.key];
//                   return (
//                     <div key={d.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
//                       border: "1px solid #e2e8f0", borderRadius: "8px", padding: "10px 12px" }}>
//                       <div>
//                         <div style={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>{d.label}</div>
//                         {uploaded && (
//                           <div style={{ fontSize: "11px", color: "#10b981" }}>✓ {uploaded.name}</div>
//                         )}
//                       </div>
//                       <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//                         {uploaded && (
//                           <button onClick={() => handleRemoveDoc(d.key)}
//                             style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "12px" }}>
//                             Remove
//                           </button>
//                         )}
//                         <label style={{
//                           background: uploaded ? "#f1f5f9" : "#eef3ff", color: "#27348B", fontSize: "12px",
//                           fontWeight: 700, padding: "6px 12px", borderRadius: "6px", cursor: "pointer",
//                         }}>
//                           {uploadingKey === d.key ? "Uploading…" : uploaded ? "Replace" : "Upload"}
//                           <input type="file" hidden
//                             onChange={e => handleUpload(d.key, e.target.files[0])} />
//                         </label>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </>
//           )}

//           {config.fields.length === 0 && config.documents.length === 0 && (
//             <p style={{ fontSize: "13px", color: "#94a3b8" }}>
//               No form fields defined for this check yet.
//             </p>
//           )}

//           <div style={{ borderTop: "1px dashed #e2e8f0", paddingTop: "16px", marginBottom: "16px" }}>
//             <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "8px" }}>
//               Missing info or docs?
//             </p>
//             {!shareLink ? (
//               <button onClick={generateShareLink} disabled={generatingLink}
//                 style={{ width: "100%", padding: "10px", border: "1.5px dashed #0d9488", borderRadius: "8px",
//                   background: "#f0fdfa", color: "#0d9488", fontWeight: 700, fontSize: "13px", cursor: "pointer" }}>
//                 {generatingLink ? "Generating…" : "Share this tab with candidate"}
//               </button>
//             ) : (
//               <div style={{ display: "flex", gap: "8px", alignItems: "center", background: "#f8fafc",
//                 border: "1.5px solid #e2e8f0", borderRadius: "8px", padding: "8px 12px" }}>
//                 <span style={{ fontSize: "12px", color: "#0d9488", flex: 1, wordBreak: "break-all" }}>{shareLink}</span>
//                 <button onClick={copyLink} style={{ background: "#0d9488", color: "#fff", border: "none",
//                   borderRadius: "6px", padding: "5px 10px", fontSize: "11px", fontWeight: 700, cursor: "pointer" }}>
//                   {linkCopied ? "Copied!" : "Copy"}
//                 </button>
//               </div>
//             )}
//           </div>

//           <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
//             <button onClick={onClose} style={{ padding: "10px 18px", borderRadius: "8px",
//               border: "1.5px solid #e2e8f0", background: "#fff", color: "#64748b", fontWeight: 600, cursor: "pointer" }}>
//               Cancel
//             </button>
//             <button onClick={handleSave} disabled={saving} style={{ padding: "10px 22px", borderRadius: "8px",
//               border: "none", background: "#27348B", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
//               {saving ? "Saving…" : "Save"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%", padding: "9px 12px", border: "1.5px solid #e2e8f0", borderRadius: "8px",
//   fontSize: "13px", color: "#1e293b", background: "#f8fafc", outline: "none", boxSizing: "border-box",
// };
import { useState, useEffect } from "react";
import { CHECK_FORM_CONFIG } from "../src/checkFormsConfig";
import { API_URL } from "../src/config";

export default function CheckDetailForm({ caseObj, checkKey, onClose, onSaved }) {
  const config = CHECK_FORM_CONFIG[checkKey] || { label: checkKey, fields: [], documents: [] };
  const token = localStorage.getItem("token");

  const existing = caseObj?.check_details?.[checkKey] || {};
  const [fields, setFields]     = useState(existing.fields || {});
  const [documents, setDocuments] = useState(existing.documents || {}); // { docKey: { name, url } }
  const [uploadingKey, setUploadingKey] = useState(null);
  const [saving, setSaving]     = useState(false);
  const [error, setError]       = useState("");
  const [shareLink, setShareLink] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const [generatingLink, setGeneratingLink] = useState(false);

  // ── Dynamic lookup lists (institutions / companies), keyed by
  //    `${source}|${scopeValue}|${extraParamsJSON}` so different fields /
  //    scopes don't collide or refetch unnecessarily.
  const [dynamicLists, setDynamicLists]     = useState({});
  const [dynamicLoading, setDynamicLoading] = useState({});

  const buildListKey = (f, scopeVal) =>
    `${f.source}|${scopeVal || ""}|${JSON.stringify(f.extraParams || {})}`;

  useEffect(() => {
    config.fields
      .filter((f) => f.type === "select_dynamic")
      .forEach((f) => {
        const scopeVal = f.filterBy ? fields[f.filterBy] : null;
        // If this field is gated by a scope field (e.g. National/International)
        // and nothing's been picked yet, don't fetch — wait for the user.
        if (f.filterBy && !scopeVal) return;

        const listKey = buildListKey(f, scopeVal);
        if (dynamicLists[listKey] || dynamicLoading[listKey]) return;

        setDynamicLoading((p) => ({ ...p, [listKey]: true }));

        const params = new URLSearchParams(f.extraParams || {});
        if (scopeVal) params.set("scope", scopeVal.toLowerCase());

        fetch(`${API_URL}/api/${f.source}?${params.toString()}`, {
          headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
        })
          .then((r) => r.json())
          .then((data) => {
            const list = data[f.source] || [];
            setDynamicLists((p) => ({ ...p, [listKey]: list }));
          })
          .catch(() => setDynamicLists((p) => ({ ...p, [listKey]: [] })))
          .finally(() => setDynamicLoading((p) => ({ ...p, [listKey]: false })));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields.scope]);

  const setField = (key, value) => setFields((p) => ({ ...p, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/cases/${caseObj.case_id}/checks/${checkKey}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ fields }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || "Failed to save."); return; }
      onSaved?.(checkKey, { fields, documents });
      onClose();
    } catch {
      setError("Server error while saving.");
    } finally {
      setSaving(false);
    }
  };

  const handleUpload = async (docKey, file) => {
    if (!file) return;
    setUploadingKey(docKey);
    setError("");
    try {
      const formData = new FormData();
      formData.append("document_key", docKey);
      formData.append("file", file);

      const res = await fetch(`${API_URL}/api/cases/${caseObj.case_id}/checks/${checkKey}/documents`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || "Upload failed."); return; }

      setDocuments((p) => ({ ...p, [docKey]: { name: file.name, url: data.url } }));
    } catch {
      setError("Server error while uploading.");
    } finally {
      setUploadingKey(null);
    }
  };

  const handleRemoveDoc = (docKey) => {
    setDocuments((p) => {
      const next = { ...p };
      delete next[docKey];
      return next;
    });
    // Optionally: fire DELETE /api/cases/{id}/checks/{checkKey}/documents/{docKey}
  };

  const generateShareLink = async () => {
    setGeneratingLink(true);
    try {
      const res = await fetch(`${API_URL}/api/cases/${caseObj.case_id}/checks/${checkKey}/share-link`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      });
      const data = await res.json();
      if (res.ok) setShareLink(data.url);
      else setError(data.message || "Could not generate link.");
    } catch {
      setError("Server error generating link.");
    } finally {
      setGeneratingLink(false);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1100,
      display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
    }}>
      <div style={{ background: "#fff", borderRadius: "14px", width: "100%", maxWidth: "560px",
        maxHeight: "88vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>

        <div style={{ background: "#27348B", color: "#fff", padding: "16px 20px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          borderRadius: "14px 14px 0 0" }}>
          <strong style={{ fontSize: "14px" }}>
            {config.label} — {caseObj.case_id}
          </strong>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#fff",
            fontSize: "20px", cursor: "pointer" }}>×</button>
        </div>

        <div style={{ padding: "20px" }}>
          {error && (
            <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", color: "#dc2626",
              borderRadius: "8px", padding: "10px 12px", fontSize: "13px", marginBottom: "14px" }}>
              {error}
            </div>
          )}

          {config.fields.length > 0 && (
            <>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase",
                letterSpacing: "0.05em", marginBottom: "12px" }}>Details</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "22px" }}>
                {config.fields.map((f) => (
                  <div key={f.key} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>
                      {f.label}{f.required && <span style={{ color: "#eb4d4b" }}> *</span>}
                    </label>

                    {f.type === "select" ? (
                      <select value={fields[f.key] || ""} onChange={(e) => setField(f.key, e.target.value)}
                        style={inputStyle}>
                        <option value="">— Select —</option>
                        {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>

                    ) : f.type === "radio" ? (
                      <div style={{ display: "flex", gap: "18px", padding: "4px 0" }}>
                        {f.options.map((o) => (
                          <label key={o} style={{
                            display: "flex", alignItems: "center", gap: "6px",
                            fontSize: "13px", fontWeight: 600, color: "#27348B", cursor: "pointer",
                          }}>
                            <input
                              type="radio"
                              name={`${checkKey}-${f.key}`}
                              value={o}
                              checked={fields[f.key] === o}
                              onChange={() => setField(f.key, o)}
                              style={{ width: "14px", height: "14px", accentColor: "#27348B", cursor: "pointer" }}
                            />
                            {o}
                          </label>
                        ))}
                      </div>

                    ) : f.type === "select_dynamic" ? (
                      (() => {
                        const scopeVal        = f.filterBy ? fields[f.filterBy] : null;
                        const waitingOnScope  = f.filterBy && !scopeVal;
                        const listKey         = buildListKey(f, scopeVal);
                        const options         = dynamicLists[listKey] || [];
                        const loading         = dynamicLoading[listKey];
                        const listId          = `dl-${checkKey}-${f.key}`;

                        return (
                          <>
                            <input
                              list={listId}
                              value={fields[f.key] || ""}
                              onChange={(e) => setField(f.key, e.target.value)}
                              disabled={waitingOnScope}
                              placeholder={
                                waitingOnScope
                                  ? "Select National / International first"
                                  : loading
                                  ? "Loading…"
                                  : `Type or select ${f.label.toLowerCase()}…`
                              }
                              style={{
                                ...inputStyle,
                                background: waitingOnScope ? "#f1f5f9" : inputStyle.background,
                                cursor: waitingOnScope ? "not-allowed" : "text",
                              }}
                            />
                            <datalist id={listId}>
                              {options.map((o) => <option key={o.id} value={o.name} />)}
                            </datalist>
                          </>
                        );
                      })()

                    ) : f.type === "textarea" ? (
                      <textarea value={fields[f.key] || ""} onChange={(e) => setField(f.key, e.target.value)}
                        rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    ) : (
                      <input type={f.type} value={fields[f.key] || ""} onChange={(e) => setField(f.key, e.target.value)}
                        style={inputStyle} />
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {config.documents.length > 0 && (
            <>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase",
                letterSpacing: "0.05em", marginBottom: "12px" }}>Documents</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                {config.documents.map((d) => {
                  const uploaded = documents[d.key];
                  return (
                    <div key={d.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                      border: "1px solid #e2e8f0", borderRadius: "8px", padding: "10px 12px" }}>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>{d.label}</div>
                        {uploaded && (
                          <div style={{ fontSize: "11px", color: "#10b981" }}>✓ {uploaded.name}</div>
                        )}
                      </div>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        {uploaded && (
                          <button onClick={() => handleRemoveDoc(d.key)}
                            style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "12px" }}>
                            Remove
                          </button>
                        )}
                        <label style={{
                          background: uploaded ? "#f1f5f9" : "#eef3ff", color: "#27348B", fontSize: "12px",
                          fontWeight: 700, padding: "6px 12px", borderRadius: "6px", cursor: "pointer",
                        }}>
                          {uploadingKey === d.key ? "Uploading…" : uploaded ? "Replace" : "Upload"}
                          <input type="file" hidden
                            onChange={(e) => handleUpload(d.key, e.target.files[0])} />
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {config.fields.length === 0 && config.documents.length === 0 && (
            <p style={{ fontSize: "13px", color: "#94a3b8" }}>
              No form fields defined for this check yet.
            </p>
          )}

          <div style={{ borderTop: "1px dashed #e2e8f0", paddingTop: "16px", marginBottom: "16px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "8px" }}>
              Missing info or docs?
            </p>
            {!shareLink ? (
              <button onClick={generateShareLink} disabled={generatingLink}
                style={{ width: "100%", padding: "10px", border: "1.5px dashed #0d9488", borderRadius: "8px",
                  background: "#f0fdfa", color: "#0d9488", fontWeight: 700, fontSize: "13px", cursor: "pointer" }}>
                {generatingLink ? "Generating…" : "Share this tab with candidate"}
              </button>
            ) : (
              <div style={{ display: "flex", gap: "8px", alignItems: "center", background: "#f8fafc",
                border: "1.5px solid #e2e8f0", borderRadius: "8px", padding: "8px 12px" }}>
                <span style={{ fontSize: "12px", color: "#0d9488", flex: 1, wordBreak: "break-all" }}>{shareLink}</span>
                <button onClick={copyLink} style={{ background: "#0d9488", color: "#fff", border: "none",
                  borderRadius: "6px", padding: "5px 10px", fontSize: "11px", fontWeight: 700, cursor: "pointer" }}>
                  {linkCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
            <button onClick={onClose} style={{ padding: "10px 18px", borderRadius: "8px",
              border: "1.5px solid #e2e8f0", background: "#fff", color: "#64748b", fontWeight: 600, cursor: "pointer" }}>
              Cancel
            </button>
            <button onClick={handleSave} disabled={saving} style={{ padding: "10px 22px", borderRadius: "8px",
              border: "none", background: "#27348B", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "9px 12px", border: "1.5px solid #e2e8f0", borderRadius: "8px",
  fontSize: "13px", color: "#1e293b", background: "#f8fafc", outline: "none", boxSizing: "border-box",
};