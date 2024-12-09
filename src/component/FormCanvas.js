import React from "react";

const FormCanvas = ({ formFields, setFormFields }) => {
  // Remove the field at the specified index
  const removeField = (index) => {
    setFormFields((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        width: "50%", // Increased the width to better accommodate the form
        padding: "20px",
        border: "2px solid #ccc", // Added border for better structure
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ textAlign: "center", color: "#333" }}>Form Canvas</h3>
      <div style={{ marginBottom: "15px" }}>
        {formFields.length === 0 ? (
          <p style={{ color: "#888", fontStyle: "italic" }}>
            No fields added yet. Drag and drop fields from the Field Library.
          </p>
        ) : (
          formFields.map((field, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "12px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: "bold", color: "#555" }}>
                {field.label} ({field.type})
              </span>
              <button
                onClick={() => removeField(index)}
                style={{
                  backgroundColor: "#ff4d4f", // Red background for remove
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#ff7875")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4d4f")}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FormCanvas;
