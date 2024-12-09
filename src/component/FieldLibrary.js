import React from "react";
import './FieldLibrary.css';

const FieldLibrary = ({ setFormFields }) => {
  const addField = (type) => {
    const label = prompt("Enter field label:");
    if (label) {
      setFormFields((prev) => [...prev, { type, label }]);
    }
  };

  return (
    <div className="field-library">
      <h3>Field Library</h3>
      <div className="button-container">
        <button className="field-button" onClick={() => addField("text")}>Text</button>
        <button className="field-button" onClick={() => addField("textarea")}>Textarea</button>
        <button className="field-button" onClick={() => addField("email")}>Email</button>
        <button className="field-button" onClick={() => addField("password")}>Password</button>
        <button className="field-button" onClick={() => addField("select")}>Select</button>
        <button className="field-button" onClick={() => addField("radio")}>Radio</button>
      </div>
    </div>
  );
};

export default FieldLibrary;
