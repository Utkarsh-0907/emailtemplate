import React, { useState, useEffect } from "react";
import "./App.css";
import EmailForm from "./components/EmailForm";
import EmailPreview from "./components/EmailPreview";

function App() {
  const [formType, setFormType] = useState("jobSelection");
  const [employeeName, setEmployeeName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");
  const [lastDate, setLastDate] = useState("");

  const generateMessage = () => {
    const messageTemplate =
       `Dear ${employeeName || "Employee Name"},\n\n
I am writing to inform you about the ${formType || "Resignation"} process at ${
            companyName || "Company Name"
          }.\n\n
Your effective date will be ${
            effectiveDate || "Effective Date"
          } and your last working day will be ${lastDate || "Last Date"}.\n\n
Best regards,\nUtkarsh Gandhi`;
        

    return messageTemplate;
  };

  const handleFieldChange = (field) => (e) => {
    switch (field) {
      case "employeeName":
        setEmployeeName(e.target.value);
        break;
      case "companyName":
        setCompanyName(e.target.value);
        break;
      case "effectiveDate":
        setEffectiveDate(e.target.value);
        break;
      case "lastDate":
        setLastDate(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Email Template Generator</h1>

      <EmailForm
        formType={formType}
        employeeName={employeeName}
        companyName={companyName}
        effectiveDate={effectiveDate}
        lastDate={lastDate}
        onFormTypeChange={(e) => setFormType(e.target.value)}
        onFieldChange={handleFieldChange}
      />

      <EmailPreview
        formType={formType}
        employeeName={employeeName}
        companyName={companyName}
        effectiveDate={effectiveDate}
        lastDate={lastDate}
        message={generateMessage()}
      />
    </div>
  );
}

export default App;
