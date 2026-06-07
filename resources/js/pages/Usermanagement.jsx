import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { API_URL } from "../src/config";

const ROLES = [
  { value: "admin",          label: "Admin" },
  { value: "allocator",      label: "Allocator" },
  { value: "verifier",       label: "Verifier" },
  { value: "check_manager",  label: "Check Manager" },
  { value: "report_writing", label: "Report Writing" },
  { value: "pvt_qc",         label: "PVT / QC" },
  { value: "client",         label: "Client" },
  { value: "onboarding",     label: "Onboarding" },
];

const ROLE_LABELS = Object.fromEntries(ROLES.map((r) => [r.value, r.label]));

export default function UserManagement() {
  const navigate = useNavigate();

  const [users, setUsers]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState("");

  // Create user form
  const [showForm, setShowForm] = useState(false);
  const [form, setForm]         = useState({ name: "", email: "", password: "", role: "" });
  const [formError, setFormError]     = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // Delete
  const [deletingId, setDeletingId] = useState(null);

  // Search
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  // ── Fetch users ──────────────────────────────────────
  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
        return;
      }

      const data = await res.json();
      setUsers(data.users || []);
    } catch (err) {
      setError("Failed to load users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  // ── Create user ───────────────────────────────────────
  const handleCreate = async (e) => {
    e.preventDefault();
    if (formLoading) return;

    setFormError("");
    setFormSuccess("");

    if (!form.role) {
      setFormError("Please select a role.");
      return;
    }

    setFormLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/users/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setFormError(data.message || "Failed to create user.");
        return;
      }

      setFormSuccess(`User "${data.user.name}" created successfully.`);
      setForm({ name: "", email: "", password: "", role: "" });
      fetchUsers(); // Refresh table

      // Auto close form after 1.5s
      setTimeout(() => {
        setShowForm(false);
        setFormSuccess("");
      }, 1500);

    } catch (err) {
      setFormError("Server error. Please try again.");
    } finally {
      setFormLoading(false);
    }
  };

  // ── Delete user ───────────────────────────────────────
  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;

    setDeletingId(id);

    try {
      const res = await fetch(`${API_URL}/api/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to delete user.");
        return;
      }

      setUsers((prev) => prev.filter((u) => u.id !== id));

    } catch (err) {
      alert("Server error. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  // ── Filtered users ────────────────────────────────────
  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    ROLE_LABELS[u.role]?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Sidebar />

      <section id="content">
        <Header />

        <main>
          <div className="dash-wrper">

            {/* ── Page header ── */}
            <div className="dash-upper-head">
              <div className="left">
                <h3 style={{ fontSize: "16px", fontWeight: 600, margin: 0 }}>
                  User Management
                </h3>
              </div>
              <div className="right">
                {/* Search */}
                <div className="input-grp" style={{ margin: 0 }}>
                  <input
                    type="text"
                    placeholder="Search by name, email or role..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: "240px" }}
                  />
                </div>
                {/* Create button */}
                <button
                  className="primary-cta"
                  onClick={() => { setShowForm(!showForm); setFormError(""); setFormSuccess(""); }}
                >
                  {showForm ? "Cancel" : "+ Create User"}
                </button>
              </div>
            </div>

            {/* ── Create user form ── */}
            {showForm && (
              <div className="down-table" style={{ marginBottom: "20px", padding: "20px" }}>
                <h4 style={{ marginBottom: "16px", fontSize: "14px", fontWeight: 600 }}>
                  Create New User
                </h4>
                <form onSubmit={handleCreate}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr auto", gap: "12px", alignItems: "end" }}>

                    <div className="login-pst" style={{ margin: 0 }}>
                      <div className="input-grp">
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="login-pst" style={{ margin: 0 }}>
                      <div className="input-grp">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="login-pst" style={{ margin: 0 }}>
                      <div className="input-grp">
                        <input
                          type="password"
                          placeholder="Password"
                          value={form.password}
                          onChange={(e) => setForm({ ...form, password: e.target.value })}
                          required
                          minLength={6}
                        />
                      </div>
                    </div>

                    <div className="login-pst" style={{ margin: 0 }}>
                      <div className="input-grp">
                        <select
                          value={form.role}
                          onChange={(e) => setForm({ ...form, role: e.target.value })}
                          required
                          style={{ width: "100%", height: "42px", padding: "0 12px", border: "1px solid #e0e0e0", borderRadius: "8px", background: "#fff", fontSize: "13px" }}
                        >
                          <option value="">Select Role</option>
                          {ROLES.map((r) => (
                            <option key={r.value} value={r.value}>{r.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <input
                      type="submit"
                      value={formLoading ? "Creating..." : "Create"}
                      className="primary-cta"
                      disabled={formLoading}
                      style={{ margin: 0, height: "42px" }}
                    />

                  </div>

                  {formError   && <p style={{ color: "red",   marginTop: "10px", fontSize: "13px" }}>{formError}</p>}
                  {formSuccess && <p style={{ color: "green", marginTop: "10px", fontSize: "13px" }}>{formSuccess}</p>}
                </form>
              </div>
            )}

            {/* ── Users table ── */}
            <div className="down-table">
              {error && (
                <p style={{ color: "red", padding: "16px", fontSize: "13px" }}>{error}</p>
              )}

              {loading ? (
                <p style={{ padding: "20px", fontSize: "13px", color: "#888" }}>Loading users...</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Created</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan="6" style={{ textAlign: "center", padding: "24px", color: "#888" }}>
                          {search ? "No users match your search." : "No users found."}
                        </td>
                      </tr>
                    ) : (
                      filtered.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <span className={`status ${getRoleClass(user.role)}`}>
                              {ROLE_LABELS[user.role] || user.role}
                            </span>
                          </td>
                          <td>{formatDate(user.created_at)}</td>
                          <td>
                            <button
                              className="view-cta"
                              style={{ background: "#fee2e2", color: "#dc2626", borderColor: "#fca5a5" }}
                              onClick={() => handleDelete(user.id, user.name)}
                              disabled={deletingId === user.id}
                            >
                              {deletingId === user.id ? "Deleting..." : "Delete"}
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              )}
            </div>

            {/* ── Summary ── */}
            {!loading && (
              <div style={{ marginTop: "12px", fontSize: "12px", color: "#888" }}>
                Showing {filtered.length} of {users.length} users
              </div>
            )}

          </div>
        </main>
      </section>
    </>
  );
}

// ── Helpers ──────────────────────────────────────────────

function getRoleClass(role) {
  const map = {
    admin:          "completed",
    allocator:      "in-progress",
    verifier:       "qc-review",
    check_manager:  "in-progress",
    report_writing: "qc-review",
    pvt_qc:         "pending",
    client:         "completed",
    onboarding:     "pending",
  };
  return map[role] || "pending";
}

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}