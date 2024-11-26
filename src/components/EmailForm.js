import React from 'react';

const EmailForm = ({ name, address, subject, message, date, onNameChange, onAddressChange, onSubjectChange, onMessageChange, onDateChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={onNameChange} 
          placeholder="Enter recipient's name"
          style={{ marginLeft: '10px' }}
        />
      </label>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Address:
          <input 
            type="text" 
            value={address} 
            onChange={onAddressChange} 
            placeholder="Enter recipient's address"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Subject:
          <input 
            type="text" 
            value={subject} 
            onChange={onSubjectChange} 
            placeholder="Enter subject"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Message:
          <textarea 
            value={message} 
            onChange={onMessageChange} 
            placeholder="Enter your message"
            style={{ marginLeft: '10px', width: '100%', height: '100px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Date:
          <input 
            type="date" 
            value={date} 
            onChange={onDateChange} 
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
    </div>
  );
};

export default EmailForm;
