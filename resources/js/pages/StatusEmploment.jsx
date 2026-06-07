import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
  {/* SIDEBAR */}
 <Sidebar/>

  {/* CONTENT */}
  <section id="content">
    {/* NAVBAR */}
    <Header/>


    {/* MAIN */}
    <main>

     <div className="emp-chk-wrapper">
  <div className="emp-chk-card">

    {/* Header Section */}
    <div className="emp-chk-header">
      <h2 className="emp-chk-title">
        Status - Employment Check - 1
        <span className="emp-chk-chevron">&#9662;</span>
      </h2>
      <p className="emp-chk-subtitle">Please Update</p>
    </div>

    <div className="emp-chk-divider-thick"></div>

    {/* Metadata Grid */}
    <div className="emp-chk-meta-grid">
      <div className="emp-chk-meta-item">
        <label className="emp-chk-meta-label">S.No:</label>
        <input
          type="text"
          className="emp-chk-meta-input emp-chk-readonly"
          defaultValue="132"
          readOnly
        />
      </div>

      <div className="emp-chk-meta-item">
        <label className="emp-chk-meta-label">Case ID:</label>
        <input
          type="text"
          className="emp-chk-meta-input emp-chk-readonly"
          defaultValue="AISPLDEMO -1"
          readOnly
        />
      </div>

      <div className="emp-chk-meta-item">
        <label className="emp-chk-meta-label">Case Received Date:</label>
        <input
          type="text"
          className="emp-chk-meta-input emp-chk-readonly"
          defaultValue="2023-02-27"
          readOnly
        />
      </div>

      <div className="emp-chk-meta-item">
        <label className="emp-chk-meta-label">Client Name:</label>
        <input
          type="text"
          className="emp-chk-meta-input emp-chk-readonly"
          defaultValue="Gaurav Technologies"
          readOnly
        />
      </div>

      <div className="emp-chk-meta-item">
        <label className="emp-chk-meta-label">Candidate Name:</label>
        <input
          type="text"
          className="emp-chk-meta-input emp-chk-readonly"
          defaultValue="Rohan"
          readOnly
        />
      </div>

      <div className="emp-chk-meta-item">
        <label className="emp-chk-meta-label">Gender:</label>
        <input
          type="text"
          className="emp-chk-meta-input emp-chk-readonly"
          defaultValue="Male"
          readOnly
        />
      </div>
    </div>

    <div className="emp-chk-divider-thin"></div>

    {/* Table Container */}
    <div className="emp-chk-table">

      {/* Table Headers */}
      <div className="emp-chk-table-header-row">
        <div className="emp-chk-col-particulars emp-chk-header-label">
          Particulars
        </div>
        <div className="emp-chk-col-claim emp-chk-header-label">
          Applicant&apos;s Claim
        </div>
        <div className="emp-chk-col-feedback emp-chk-header-label">
          Feedback
        </div>
      </div>

      {/* Company Name */}
      <div className="emp-chk-table-row">
        <div className="emp-chk-col-particulars emp-chk-row-label">
          Company Name:
        </div>
        <div className="emp-chk-col-claim">
          <input
            type="text"
            className="emp-chk-claim-input emp-chk-readonly"
            defaultValue="Gaurav Technologies Private Limited"
            readOnly
          />
        </div>
        <div className="emp-chk-col-feedback">
          <input
            type="text"
            className="emp-chk-feedback-text"
            defaultValue="Yes"
            placeholder="Enter feedback"
          />
        </div>
      </div>

      {/* Employment Dates */}
      <div className="emp-chk-table-row">
        <div className="emp-chk-col-particulars emp-chk-row-label">
          Employment Dates:
        </div>
        <div className="emp-chk-col-claim">
          <input
            type="text"
            className="emp-chk-claim-input emp-chk-readonly"
            defaultValue="18-Jul-2022 to 31-Jan-2023"
            readOnly
          />
        </div>
        <div className="emp-chk-col-feedback">
          <input
            type="text"
            className="emp-chk-feedback-text"
            defaultValue="Yes"
            placeholder="Enter feedback"
          />
        </div>
      </div>

      {/* Designation */}
      <div className="emp-chk-table-row">
        <div className="emp-chk-col-particulars emp-chk-row-label">
          Designation:
        </div>
        <div className="emp-chk-col-claim">
          <input
            type="text"
            className="emp-chk-claim-input emp-chk-readonly"
            defaultValue="Project Manager"
            readOnly
          />
        </div>
        <div className="emp-chk-col-feedback">
          <input
            type="text"
            className="emp-chk-feedback-text"
            defaultValue="Yes"
            placeholder="Enter feedback"
          />
        </div>
      </div>

      {/* Employee ID */}
      <div className="emp-chk-table-row">
        <div className="emp-chk-col-particulars emp-chk-row-label">
          Employee ID:
        </div>
        <div className="emp-chk-col-claim">
          <input
            type="text"
            className="emp-chk-claim-input emp-chk-readonly"
            defaultValue="415263"
            readOnly
          />
        </div>
        <div className="emp-chk-col-feedback">
          <input
            type="text"
            className="emp-chk-feedback-text"
            defaultValue="Yes"
            placeholder="Enter feedback"
          />
        </div>
      </div>

      {/* Salary */}
      <div className="emp-chk-table-row">
        <div className="emp-chk-col-particulars emp-chk-row-label">
          Salary:
        </div>
        <div className="emp-chk-col-claim">
          <input
            type="text"
            className="emp-chk-claim-input emp-chk-readonly"
            defaultValue=""
            readOnly
          />
        </div>
        <div className="emp-chk-col-feedback">
          <input
            type="text"
            className="emp-chk-feedback-text"
            defaultValue="12 Lacs"
            placeholder="Enter feedback"
          />
        </div>
      </div>

      {/* Reason for Leaving */}
      <div className="emp-chk-table-row">
        <div className="emp-chk-col-particulars emp-chk-row-label">
          Reason for Leaving:
        </div>
        <div className="emp-chk-col-claim">
          <input
            type="text"
            className="emp-chk-claim-input emp-chk-readonly"
            defaultValue=""
            readOnly
          />
        </div>
        <div className="emp-chk-col-feedback">
          <input
            type="text"
            className="emp-chk-feedback-text"
            defaultValue="Personal"
            placeholder="Enter feedback"
          />
        </div>
      </div>

      {/* Reporting Manager */}
      <div className="emp-chk-table-row">
        <div className="emp-chk-col-particulars emp-chk-row-label">
          Reporting Manager:
        </div>
        <div className="emp-chk-col-claim">
          <input
            type="text"
            className="emp-chk-claim-input emp-chk-readonly"
            defaultValue=""
            readOnly
          />
        </div>
        <div className="emp-chk-col-feedback">
          <input
            type="text"
            className="emp-chk-feedback-text"
            defaultValue="Gaurav"
            placeholder="Enter feedback"
          />
        </div>
      </div>

    </div>
  </div>
</div>
      
    </main>
  </section>
</>
  );
}