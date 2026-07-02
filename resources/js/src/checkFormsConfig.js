export const QUALIFICATION_OPTIONS = [
  "UG", "PG", "Secondary Education", "Senior Secondary", "Certification", "Diploma", "ITI",
];

export const EMPLOYMENT_TYPE_OPTIONS = ["Permanent", "FTE", "Contractual"];

export const CHECK_FORM_CONFIG = {
  education: {
    label: "Education",
    fields: [
      { key: "qualification",   label: "Education Qualification", type: "select", options: QUALIFICATION_OPTIONS, required: true },
      { key: "instituteName",   label: "Institute Name",  type: "text", required: true },
      { key: "universityName",  label: "University Name", type: "text", required: true },
      { key: "rollNo",          label: "Roll No",         type: "text", required: true },
      { key: "yearOfPassing",   label: "Year of Passing", type: "text", required: true },
      { key: "modeOfStudy",     label: "Mode of Study",   type: "text", required: false },
    ],
    documents: [
      { key: "final_year_marksheet", label: "Final Year Marksheet" },
      { key: "degree",                label: "Degree" },
      { key: "provisional_certificate", label: "Provisional Certificate" },
      { key: "consolidated_marksheet",  label: "Consolidated Marksheet" },
      { key: "passing_certificate",     label: "Passing Certificate" },
      { key: "arn_letter",              label: "ARN Letter" },
    ],
  },
  employment: {
    label: "Employment",
    fields: [
      { key: "lastCompanyName", label: "Last Company Name", type: "text",   required: true },
      { key: "dateOfLeaving",   label: "Date of Leaving",   type: "date",   required: true },
      { key: "employmentType",  label: "Employment Type",   type: "select", options: EMPLOYMENT_TYPE_OPTIONS, required: true },
      { key: "epfoNumber",      label: "EPFO Number",       type: "text",   required: false },
      { key: "salary",          label: "Salary",            type: "text",   required: false },
    ],
    documents: [
      { key: "relieving_letter",  label: "Relieving Letter" },
      { key: "experience_letter", label: "Experience Letter" },
      { key: "salary_slip",       label: "Salary Slip" },
      { key: "epfo",              label: "EPFO" },
    ],
  },
  address: {
    label: "Address",
    fields: [
      { key: "address", label: "Address",  type: "textarea", required: true },
      { key: "country",  label: "Country",  type: "text", required: true },
      { key: "state",    label: "State",    type: "text", required: true },
      { key: "city",     label: "City",     type: "text", required: true },
      { key: "pinCode",  label: "Pin Code", type: "text", required: true },
    ],
    documents: [
      { key: "aadhar_card", label: "Aadhar Card" },
      { key: "voter_id",    label: "Voter ID" },
      { key: "pan_card",    label: "Pan Card" },
    ],
  },
  database: {
    label: "Database",
    fields: [],
    documents: [
      { key: "aadhar_card",      label: "Aadhar Card" },
      { key: "voter_id",         label: "Voter ID" },
      { key: "pan_card",         label: "Pan Card" },
      { key: "driving_licence",  label: "Driving Licence" },
    ],
  },
  // No fields/docs specified yet for these — placeholders so the UI still opens a modal.
  criminal: { label: "Criminal",  fields: [], documents: [] },
  drug:     { label: "Drug Test", fields: [], documents: [] },
  court:    { label: "Courtroom", fields: [], documents: [] },
};

// Derives a status from what's actually been filled in / uploaded.
export function computeCheckStatus(checkKey, data) {
  const config = CHECK_FORM_CONFIG[checkKey];
  if (!config) return "pending";
  const fields = data?.fields || {};
  const docs   = data?.documents || {};

  const hasAnyField = Object.values(fields).some(v => v && String(v).trim() !== "");
  const hasAnyDoc    = Object.keys(docs).length > 0;
  if (!hasAnyField && !hasAnyDoc) return "pending";

  const requiredFields = config.fields.filter(f => f.required).map(f => f.key);
  const fieldsComplete  = requiredFields.every(k => fields[k] && String(fields[k]).trim() !== "");
  const docsComplete    = config.documents.length === 0 || config.documents.every(d => docs[d.key]);

  if (fieldsComplete && docsComplete) return "submitted";
  return "in_progress";
}