import React, { useState } from "react";
import FieldLibrary from "./FieldLibrary";
import FormCanvas from "./FormCanvas";
import FormPreview from "./FormPreview";

const templates = {
  contactForm: [
    { type: "text", label: "Name", required: true },
    { type: "email", label: "Email", required: true },
    { type: "textarea", label: "Message", required: false },
  ],
  registrationForm: [
    { type: "text", label: "First Name" },
    { type: "text", label: "Last Name" },
    { type: "email", label: "Email Address" },
    { type: "password", label: "Password" },
  ],
};

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [conditionalLogic, setConditionalLogic] = useState({});

  const generateFormSchema = () =>
    formFields.map((field) => ({
      type: field.type,
      label: field.label,
      name: field.label.toLowerCase().replace(/ /g, "_"),
      options: field.options || [],
      required: field.required || false,
    }));

  const addCondition = (fieldName, condition) => {
    setConditionalLogic((prev) => ({
      ...prev,
      [fieldName]: condition,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        gap: "20px",
      }}
    >
      <FieldLibrary setFormFields={setFormFields} />
      <FormCanvas formFields={formFields} setFormFields={setFormFields} />
      <FormPreview
        formFields={formFields}
        conditionalLogic={conditionalLogic}
        addCondition={addCondition}
      />

      <div style={{ width: "25%", padding: "10px", textAlign: "center" }}>
        <h3>Actions</h3>
        <div>
          {/* Styled Buttons */}
          <button
            onClick={() => console.log(generateFormSchema())}
            style={{
              backgroundColor: "#4CAF50", // Green background for Export
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              fontSize: "16px",
              marginBottom: "12px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Export JSON Schema
          </button>

          <button
            onClick={() => setFormFields(templates.contactForm)}
            style={{
              backgroundColor: "#2196F3", // Blue background for Load Contact Form
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              fontSize: "16px",
              marginBottom: "12px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0b7dda")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2196F3")}
          >
            Load Contact Form
          </button>

          <button
            onClick={() => setFormFields(templates.registrationForm)}
            style={{
              backgroundColor: "#ff9800", // Orange background for Load Registration Form
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              fontSize: "16px",
              marginBottom: "12px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e68900")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff9800")}
          >
            Load Registration Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
