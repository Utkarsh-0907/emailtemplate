import React from "react";

const EmailPreview = ({
  formType,
  employeeName,
  companyName,
  effectiveDate,
  lastDate,
  message,
}) => {
  const generateEmailContent = () => {
    return `
      Form Type: ${
        formType === "jobSelection" ? "Job Selection" : "Resignation"
      }
    
      Message:
      ${message}

    `;
  };

  return (
    <div>
      <h2>Email Preview</h2>
      <pre
        style={{
          backgroundColor: "#f4f4f4",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {generateEmailContent()}
      </pre>
    </div>
  );
};

export default EmailPreview;
