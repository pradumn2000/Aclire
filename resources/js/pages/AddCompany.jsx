import React, { useState } from "react";

export default function CompanyManagement() {
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [companies, setCompanies] = useState([
    { id: 1, name: "Tata Consultancy Services", code: "TCS", industry: "IT Sector", state: "Maharashtra", website: "https://tcs.com", status: "Verified" },
    { id: 2, name: "Infosys Limited", code: "INFY", industry: "IT Sector", state: "Karnataka", website: "https://infosys.com", status: "Pending" }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    industry: "",
    state: "",
    website: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCompany = {
      id: companies.length + 1,
      name: formData.name,
      code: formData.code || "—",
      industry: formData.industry || "—",
      state: formData.state || "—",
      website: formData.website || "",
      status: "Pending"
    };

    setCompanies([...companies, newCompany]);
    setFormData({ name: "", code: "", industry: "", state: "", website: "" });
    setShowForm(false);
  };

  const openDeleteModal = (companyName) => {
    setSelectedCompany(companyName);
    setShowDeleteModal(true);
  };

  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <aside className="sidebar"></aside>

      <section id="content">
        <header className="main-header"></header>

        <main>
          <div className="dash-wrper">

            <div className="dash-upper-head">
              <div className="left">
                <div className="dash-title-flex">
                  <h3 className="dash-title-text">Company Database</h3>
                </div>
              </div>

              <div className="right">
                <input
                  type="text"
                  placeholder="Search name, code, industry…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="dash-search-input"
                />

                <input type="file" id="bulk-file-input" accept=".csv" className="hidden-file-input" />
                <button className="secondary-cta import" onClick={() => document.getElementById("bulk-file-input").click()}>
                  <img src="/images/dashboard/export-excel.svg" alt="" />
                  Import CSV
                </button>

                <button className="primary-cta export">
                  <img src="/images/dashboard/export-icon.svg" alt="" />
                  Export CSV
                </button>

                <button className="primary-cta" onClick={() => setShowForm(!showForm)}>
                  {showForm ? "Cancel Form" : "+ Add Company"}
                </button>
              </div>
            </div>

            <div className="cards-head-dash">
              <div className="card-inner-dash bdr-total">
                <h4>{companies.length}</h4>
                <p>Total Companies</p>
              </div>

              <div className="card-inner-dash bdr-com">
                <h4>{companies.filter(c => c.status === "Verified").length}</h4>
                <p>Verified</p>
              </div>

              <div className="card-inner-dash bdr-progress">
                <h4>{companies.filter(c => c.status === "Pending").length}</h4>
                <p>Pending Verification</p>
              </div>

              <div className="card-inner-dash bdr-client">
                <h4>{[...new Set(companies.map(c => c.industry))].length}</h4>
                <p>Industries</p>
              </div>
            </div>

            <div className="dash-inner-wrp-both">
              <div className="dash-inner-left">
                
                {showForm && (
                  <div className="up-table form-container-box">
                    <div className="form-header-bar">
                      <span>ADD NEW EMPLOYER / COMPANY</span>
                    </div>

                    <form onSubmit={handleFormSubmit}>
                      <div className="form-grid-inputs">
                        <div className="form-field-group">
                          <label>COMPANY NAME *</label>
                          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Infosys" required className="form-theme-input" />
                        </div>
                        <div className="form-field-group">
                          <label>SHORT CODE</label>
                          <input type="text" name="code" value={formData.code} onChange={handleInputChange} placeholder="e.g. INFY" maxLength={8} className="form-theme-input" />
                        </div>
                        <div className="form-field-group">
                          <label>INDUSTRY</label>
                          <input type="text" name="industry" value={formData.industry} onChange={handleInputChange} placeholder="e.g. IT Sector" className="form-theme-input" />
                        </div>
                        <div className="form-field-group">
                          <label>STATE</label>
                          <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="e.g. Karnataka" className="form-theme-input" />
                        </div>
                        <div className="form-field-group">
                          <label>WEBSITE</label>
                          <input type="url" name="website" value={formData.website} onChange={handleInputChange} placeholder="https://..." className="form-theme-input" />
                        </div>
                      </div>

                      <div className="form-actions-flex">
                        <button type="submit" className="primary-cta pad-btn">Save Company</button>
                        <button type="button" className="secondary-cta pad-btn" onClick={() => setShowForm(false)}>Cancel</button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="down-table">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Code</th>
                        <th>Industry</th>
                        <th>State</th>
                        <th>Website</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCompanies.length === 0 ? (
                        <tr>
                          <td colSpan="8" className="empty-table-cell">No companies found</td>
                        </tr>
                      ) : (
                        filteredCompanies.map((company, index) => (
                          <tr key={company.id}>
                            <td>{index + 1}</td>
                            <td className="company-name-cell">{company.name}</td>
                            <td className="code-cell">{company.code}</td>
                            <td>{company.industry}</td>
                            <td>{company.state}</td>
                            <td>
                              {company.website ? (
                                <a href={company.website} target="_blank" rel="noreferrer" className="table-link-anchor">Link ↗</a>
                              ) : "—"}
                            </td>
                            <td>
                              <span className={`status ${company.status === "Verified" ? "completed" : "pending"}`}>
                                {company.status}
                              </span>
                            </td>
                            <td>
                              <button className="view-cta remove-btn-theme" onClick={() => openDeleteModal(company.name)}>
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

              </div>

              <div className="dash-inner-right">
                <div className="quick-stats">
                  <div className="stats-header">
                    <h3>DATABASE UTILITIES</h3>
                  </div>
                  <div className="stats-body">
                    <div className="utility-box-inner">
                      <p className="utility-desc-text">
                        Use the sample file structure to perform error-free bulk uploads via CSV format.
                      </p>
                      <button className="secondary-cta full-width-center-btn">
                        🏢 Download CSV Template ↓
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </main>
      </section>

      {showDeleteModal && (
        <div className="modal-overlay-blur">
          <div className="modal-card-wrapper">
            <h3 className="modal-title-heading">Remove Employer?</h3>
            <p className="modal-body-text">
              <strong>{selectedCompany}</strong> will be permanently removed from the active verifier dropdown list.
            </p>
            <div className="modal-actions-right">
              <button className="secondary-cta pad-btn" onClick={() => setShowDeleteModal(false)}>Cancel</button>
              <button className="primary-cta pad-btn delete-confirm-bg" onClick={() => setShowDeleteModal(false)}>Yes, Remove</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}