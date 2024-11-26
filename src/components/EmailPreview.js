import React from "react";

const EmailPreview = ({ name, address, subject, message, date }) => {
  const generateEmailContent = () => {
    return `
      Subject: ${subject}

      Hi ${name},

      I hope this message finds you well!

      Address: ${address}

      Date: ${date}

      Message:
      ${message}

      Best regards,
      Your Name
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
