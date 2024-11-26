import React, { useState } from "react";
import "./App.css";
import EmailForm from "./components/EmailForm";
import EmailPreview from "./components/EmailPreview";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(""); 

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Email Template Generator</h1>

      <EmailForm
        name={name}
        address={address}
        subject={subject}
        message={message}
        date={date} 
        onNameChange={(e) => setName(e.target.value)}
        onAddressChange={(e) => setAddress(e.target.value)}
        onSubjectChange={(e) => setSubject(e.target.value)}
        onMessageChange={(e) => setMessage(e.target.value)}
        onDateChange={(e) => setDate(e.target.value)} 
      />

      <EmailPreview
        name={name}
        address={address}
        subject={subject}
        message={message}
        date={date} 
      />
    </div>
  );
}

export default App;
