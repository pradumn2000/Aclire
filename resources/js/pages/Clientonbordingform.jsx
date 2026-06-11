
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useCases } from "../src/hooks/useCases";
import { useCaseFilters } from "../src/hooks/useCaseFilters";
import DateRangePicker from "../src/components/DateRangePicker";

const STATUS_MAP = {
  "In Progress": "in-progress",
  "QC Review":   "qc-review",
  "Pending":     "pending",
  "Completed":   "completed",
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { cases } = useCases();

  const {
    filtered,
    datePreset, setDatePreset,
    customRange, applyCustomRange, clearDate,
    showPicker, setShowPicker,
    dateLabel,
    exportCSV,
    exportExcel,
  } = useCaseFilters(cases, { showStatusFilter: false });

  // ── Derived stats (from filtered set) ─────────────────────
  const total      = filtered.length;
  const inProgress = filtered.filter(c => c.label === "In Progress").length;
  const completed  = filtered.filter(c => c.label === "Completed").length;
  const clients    = new Set(filtered.map(c => c.clientId).filter(Boolean)).size;
  const clearRate  = total > 0 ? Math.round((completed / total) * 100) : 0;
  const recent     = filtered.slice(0, 5);

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <main>
          <div className="form-container">
      <h2>Client Onboarding Form</h2>
      <form onSubmit={handleSubmit}>

        {/* Client Onboarding Form */}
        <div className="form-group">
          <label htmlFor="client_onboarding">Client Onboarding Form</label>
          <input 
            type="text" 
            id="client_onboarding" 
            name="client_onboarding" 
            placeholder="Enter onboarding details"
            value={formData.client_onboarding}
            onChange={handleChange}
          />
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label htmlFor="company_name">Company Name</label>
          <input 
            type="text" 
            id="company_name" 
            name="company_name" 
            placeholder="Enter company name"
            value={formData.company_name}
            onChange={handleChange}
          />
        </div>

        {/* GSTIN */}
        <div className="form-group">
          <label htmlFor="gstin">GSTIN</label>
          <input 
            type="text" 
            id="gstin" 
            name="gstin" 
            placeholder="Enter 15-digit GSTIN"
            value={formData.gstin}
            onChange={handleChange}
          />
        </div>

        {/* Company Address */}
        <div className="form-group">
          <label htmlFor="company_address">Company Address</label>
          <input 
            type="text" 
            id="company_address" 
            name="company_address" 
            placeholder="Enter company full address"
            value={formData.company_address}
            onChange={handleChange}
          />
        </div>

        {/* Primary Contact */}
        <div className="form-group">
          <label htmlFor="primary_contact">Primary Contact</label>
          <input 
            type="text" 
            id="primary_contact" 
            name="primary_contact" 
            placeholder="Enter primary contact number"
            value={formData.primary_contact}
            onChange={handleChange}
          />
        </div>

        {/* Email Id */}
        <div className="form-group">
          <label htmlFor="email_id">Email Id</label>
          <input 
            type="email" 
            id="email_id" 
            name="email_id" 
            placeholder="example@company.com"
            value={formData.email_id}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit Onboarding Details</button>

      </form>
    </div>
        </main>
      </section>
    </>
  );
}