import { useNavigate } from "react-router-dom";


export default function Clientportal() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <>
 

  {/* CONTENT */}
  <section id="noSidebar">
    {/* NAVBAR */}
    <nav className="verifyer">
      <div className="nav-toggle">
        <div className="bx bx-menu">
          <img src="images/inner-pages/emp-check-icon.svg" alt="" />
        </div>
      </div>
      
      <div className="head-src">
        <h3>ONBOARDING ROLE + CANDIDATE PORTAL LINK  —  Resignation | Billing Link Gen</h3>
      </div>
      
      <button type="button" className="primary-cta">Onboarding Role</button>
    </nav>


    {/* MAIN */}
    <main>

     {/* Main Portal Layout Container */}
<div className="cob-portal-container">

  {/* Outer Flexbox Layout */}
  <div className="cob-emplyment-check-body">

    {/* FIRST CARD */}
    <div className="cob-frist-card">

      <div className="cob-card-header cob-client-header">
        <h2>CLIENT ONBOARDING FORM</h2>
      </div>

      <form
        className="cob-client-form"
        id="clientOnboardingForm"
      >

        {/* Company Name */}
        <div className="cob-form-group">

          <label className="cob-form-label">
            Company Name
          </label>

          <input
            type="text"
            className="cob-form-input"
            defaultValue="Deloitte India Pvt Ltd"
            placeholder="Enter company name"
            required
          />

        </div>

        {/* GSTIN */}
        <div className="cob-form-group">

          <label className="cob-form-label">
            GSTIN
          </label>

          <input
            type="text"
            className="cob-form-input"
            defaultValue="27AABCD1234F1Z5"
            placeholder="Enter GSTIN number"
            required
          />

        </div>

        {/* Primary Contact */}
        <div className="cob-form-group">

          <label className="cob-form-label">
            Primary Contact
          </label>

          <input
            type="text"
            className="cob-form-input"
            defaultValue="Ramesh Joshi — +91-98765-43210"
            placeholder="Contact Name — Phone Number"
            required
          />

        </div>

        {/* Billing Mode */}
        <div className="cob-form-group">

          <label className="cob-form-label">
            Billing Mode
          </label>

          <div className="cob-billing-toggle-group">

            <button
              type="button"
              className="cob-toggle-btn"
            >
              Prepaid — Client
            </button>

            <button
              type="button"
              className="cob-toggle-btn"
            >
              Prepaid — Candidate
            </button>

            <button
              type="button"
              className="cob-toggle-btn active-teal"
            >
              Postpaid — Client
            </button>

          </div>

        </div>

        {/* Check Types */}
        <div className="cob-form-group">

          <label className="cob-form-label">
            Agreed Check Types
          </label>

          <div className="cob-check-tags-group">

            <span className="cob-check-tag active-navy">
              Emp
            </span>

            <span className="cob-check-tag active-navy">
              Edu
            </span>

            <span className="cob-check-tag active-navy">
              Addr
            </span>

            <span className="cob-check-tag active-navy">
              DB
            </span>

            <span className="cob-check-tag">
              Criminal
            </span>

            <span className="cob-check-tag">
              Drug
            </span>

            <span className="cob-check-tag">
              Court
            </span>

          </div>

        </div>

        {/* Rate Card */}
        <div className="cob-form-group">

          <label className="cob-form-label">
            Rate Card
          </label>

          <div className="cob-rate-cards-container">

            <div
              className="cob-rate-card-item"
              id="rate-emp"
            >
              <span className="cob-rate-label">
                Employment
              </span>

              <span className="cob-rate-value">
                ₹350
              </span>
            </div>

            <div
              className="cob-rate-card-item"
              id="rate-edu"
            >
              <span className="cob-rate-label">
                Education
              </span>

              <span className="cob-rate-value">
                ₹280
              </span>
            </div>

            <div
              className="cob-rate-card-item"
              id="rate-addr"
            >
              <span className="cob-rate-label">
                Address
              </span>

              <span className="cob-rate-value">
                ₹180
              </span>
            </div>

            <div
              className="cob-rate-card-item"
              id="rate-db"
            >
              <span className="cob-rate-label">
                Database
              </span>

              <span className="cob-rate-value">
                ₹120
              </span>
            </div>

          </div>

        </div>

        {/* Button */}
        <div className="cob-form-actions">

          <button
            type="submit"
            className="cob-btn-create-account"
          >
            CREATE CLIENT ACCOUNT
          </button>

        </div>

      </form>
    </div>

    {/* SECOND CARD */}
    <div className="cob-second-card">

      <div className="cob-card-header cob-portal-header">
        <h2>
          CANDIDATE PORTAL — LINK GENERATOR
        </h2>
      </div>

      <div className="cob-portal-generator-content">

        <p className="cob-section-description">
          Generate a unique onboarding link per candidate.
        </p>

        <form
          className="cob-generator-form"
          id="linkGeneratorForm"
        >

          {/* Candidate Name */}
          <div className="cob-form-group">

            <label className="cob-form-label">
              Candidate Name
            </label>

            <input
              type="text"
              className="cob-form-input"
              id="candidateNameInput"
              placeholder="Enter candidate name"
              required
            />

          </div>

          {/* Email */}
          <div className="cob-form-group">

            <label className="cob-form-label">
              Email
            </label>

            <input
              type="email"
              className="cob-form-input"
              id="candidateEmailInput"
              placeholder="Enter candidate email address"
              required
            />

          </div>

          {/* Mobile */}
          <div className="cob-form-group">

            <label className="cob-form-label">
              Mobile
            </label>

            <input
              type="tel"
              className="cob-form-input"
              id="candidateMobileInput"
              placeholder="Enter mobile number"
              required
            />

          </div>

          {/* Position */}
          <div className="cob-form-group">

            <label className="cob-form-label">
              Position Applied
            </label>

            <input
              type="text"
              className="cob-form-input"
              id="candidatePosInput"
              placeholder="Enter position name"
              required
            />

          </div>

          {/* Checkboxes */}
          <div className="cob-form-group">

            <label className="cob-form-label">
              Check Types
            </label>

            <div className="cob-checkboxes-row">

              <label className="cob-checkbox-item">

                <input
                  type="checkbox"
                  className="cob-checkbox-native"
                  value="emp"
                  defaultChecked
                />

                <span className="cob-checkbox-custom">
                  ✔
                </span>

                <span className="cob-checkbox-label">
                  Emp
                </span>

              </label>

              <label className="cob-checkbox-item">

                <input
                  type="checkbox"
                  className="cob-checkbox-native"
                  value="edu"
                  defaultChecked
                />

                <span className="cob-checkbox-custom">
                  ✔
                </span>

                <span className="cob-checkbox-label">
                  Edu
                </span>

              </label>

            </div>

          </div>

          {/* Expiry */}
          <div className="cob-form-group">

            <label className="cob-form-label">
              Link Expiry
            </label>

            <div className="cob-expiry-toggle-group">

              <button
                type="button"
                className="cob-toggle-btn"
              >
                24h
              </button>

              <button
                type="button"
                className="cob-toggle-btn"
              >
                48h
              </button>

              <button
                type="button"
                className="cob-toggle-btn active-teal"
              >
                72h
              </button>

              <button
                type="button"
                className="cob-toggle-btn"
              >
                7 days
              </button>

            </div>

          </div>

          {/* Generated Link */}
          <div
            className="cob-generated-link-wrapper"
            id="linkDisplayWrapper"
            style={{ display: "flex" }}
          >

            <span
              className="cob-generated-url-text"
              id="generatedUrlText"
            >
              https://bgv.portal/candidate/link/7f3a9c2e...
            </span>

          </div>

          {/* Buttons */}
          <div className="cob-action-buttons-row">

            <button
              type="submit"
              className="cob-action-btn cob-btn-generate"
            >
              GENERATE LINK
            </button>

            <button
              type="button"
              className="cob-action-btn cob-btn-copy"
              id="btnCopyLink"
            >
              COPY LINK 📋
            </button>

            <button
              type="button"
              className="cob-action-btn cob-btn-sms"
              id="btnSendSms"
            >
              SEND SMS
            </button>

            <button
              type="button"
              className="cob-action-btn cob-btn-email"
              id="btnSendEmail"
            >
              EMAIL
            </button>

          </div>

        </form>

      </div>
    </div>

  </div>

  {/* Footer */}
  <footer className="cob-portal-footer">

    <div className="cob-footer-left">
      BGV Portal — Developer Design Reference v2.0
    </div>

    <div className="cob-footer-right">
      Product Team Confidential
    </div>

  </footer>

</div>
      
    </main>
  </section>
</>
  );
}