import React from "react";

const InputField = ({ label, type, value, onChange, placeholder, style }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        {label}:
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={style}
        />
      </label>
    </div>
  );
};

export default InputField;
