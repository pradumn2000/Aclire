
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
      <h2>Add Institute</h2>
      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Verification From University (Checkbox) */}
        <div className="form-group checkbox-group">
          <input 
            type="checkbox" 
            id="university_verification" 
            name="university_verification"
            checked={formData.university_verification}
            onChange={handleChange}
          />
          <label htmlFor="university_verification">Verification From University</label>
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            placeholder="Enter full address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* State */}
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input 
            type="text" 
            id="state" 
            name="state" 
            placeholder="Enter state name"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        {/* Pin Code */}
        <div className="form-group">
          <label htmlFor="pincode">Pin Code</label>
          <input 
            type="text" 
            id="pincode" 
            name="pincode" 
            placeholder="Enter 6-digit pin code"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>

        {/* Unique Code */}
        <div className="form-group">
          <label htmlFor="unique_code">Unique Code</label>
          <input 
            type="text" 
            id="unique_code" 
            name="unique_code" 
            placeholder="Enter unique code"
            value={formData.unique_code}
            onChange={handleChange}
          />
        </div>

        {/* Website */}
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input 
            type="text" 
            id="website" 
            name="website" 
            placeholder="https://example.com"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        {/* Stature Of institute (Disposition) */}
        <div className="form-group">
          <label htmlFor="stature">Stature Of Institute (Disposition)</label>
          <select 
            id="stature" 
            name="stature"
            value={formData.stature}
            onChange={handleChange}
          >
            <option value="">-- Select Stature --</option>
            <option value="government">Government</option>
            <option value="private">Private</option>
            <option value="autonomous">Autonomous</option>
            <option value="deemed">Deemed University</option>
          </select>
        </div>

        {/* Name Of Collaborate */}
        <div className="form-group">
          <label htmlFor="collaborate_name">Name Of Collaborate</label>
          <input 
            type="text" 
            id="collaborate_name" 
            name="collaborate_name" 
            placeholder="Enter collaborator name"
            value={formData.collaborate_name}
            onChange={handleChange}
          />
        </div>

        {/* Source Category */}
        <div className="form-group">
          <label htmlFor="source_category">Source Category</label>
          <select 
            id="source_category" 
            name="source_category"
            value={formData.source_category}
            onChange={handleChange}
          >
            <option value="">-- Select Category --</option>
            <option value="category_a">Category A</option>
            <option value="category_b">Category B</option>
            <option value="category_c">Category C</option>
          </select>
        </div>

        {/* Aicte Status */}
        <div className="form-group">
          <label htmlFor="aicte_status">AICTE Status</label>
          <select 
            id="aicte_status" 
            name="aicte_status"
            value={formData.aicte_status}
            onChange={handleChange}
          >
            <option value="">-- Select Status --</option>
            <option value="approved">Approved</option>
            <option value="not_approved">Not Approved</option>
            <option value="applied">Applied / Pending</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit Details</button>

      </form>
    </div>
        </main>
      </section>
    </>
  );
}