import React from "react";
import InputField from "./InputField";

const EmailForm = ({
  formType,
  employeeName,
  companyName,
  effectiveDate,
  lastDate,
  onFormTypeChange,
  onFieldChange,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <label>
          Form Type:
          <select value={formType} onChange={onFormTypeChange}>
            <option value="jobSelection">Job Selection</option>
            <option value="resignation">Resignation</option>
          </select>
        </label>
      </div>

      <InputField
        label="Employee Name"
        type="text"
        value={employeeName}
        onChange={onFieldChange("employeeName")}
        placeholder="Employee Name"
      />

      <InputField
        label="Company Name"
        type="text"
        value={companyName}
        onChange={onFieldChange("companyName")}
        placeholder="Company Name"
      />

      <InputField
        label="Effective Date"
        type="date"
        value={effectiveDate}
        onChange={onFieldChange("effectiveDate")}
        placeholder="Effective Date"
      />

      <InputField
        label="Last Date"
        type="date"
        value={lastDate}
        onChange={onFieldChange("lastDate")}
        placeholder="Last Date"
      />
    </div>
  );
};

export default EmailForm;
