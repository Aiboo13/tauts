import React from "react";
import "../style/login.css";

function Input({ type, placeholder, value, onChange, id, className }) {
  return (
    <div className="input-group d-flex flex-column">
      <small>{placeholder}</small>
      <input
        style={{backgroundColor: "#80808034" }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className={className}
      />
    </div>
  );
}

export default Input;