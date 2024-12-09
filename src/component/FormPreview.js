import React, { useState } from "react";
import "./FormPreview.css"; // Import the CSS file for styling

const FormPreview = ({ formFields, conditionalLogic, addCondition }) => {
  const [responses, setResponses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formFields.forEach((field) => {
      data[field.label.toLowerCase().replace(/ /g, "_")] = formData.get(field.label.toLowerCase().replace(/ /g, "_"));
    });
    setResponses((prev) => [...prev, data]);
  };

  return (
    <div className="form-preview">
      <h3 className="title">Form Preview</h3>
      <form onSubmit={handleSubmit} className="preview-form">
        {formFields.map((field, index) => {
          const condition = conditionalLogic[field.label.toLowerCase().replace(/ /g, "_")];
          if (condition) {
            const { dependsOn, value } = condition;
            const dependentField = formFields.find(
              (f) => f.label.toLowerCase().replace(/ /g, "_") === dependsOn
            );
            if (!dependentField || responses[dependsOn] !== value) {
              return null; // Skip rendering
            }
          }

          return (
            <div key={index} className="form-field">
              {field.type === "text" && (
                <input
                  type="text"
                  name={field.label.toLowerCase().replace(/ /g, "_")}
                  placeholder={field.label}
                  className="input-field"
                />
              )}
              {field.type === "textarea" && (
                <textarea
                  name={field.label.toLowerCase().replace(/ /g, "_")}
                  placeholder={field.label}
                  className="textarea-field"
                />
              )}
              {field.type === "email" && (
                <input
                  type="email"
                  name={field.label.toLowerCase().replace(/ /g, "_")}
                  placeholder={field.label}
                  className="input-field"
                />
              )}
              {field.type === "password" && (
                <input
                  type="password"
                  name={field.label.toLowerCase().replace(/ /g, "_")}
                  placeholder={field.label}
                  className="input-field"
                />
              )}
            </div>
          );
        })}
        <button type="submit" className="submit-button">Submit</button>
      </form>

      <h4 className="responses-title">Responses</h4>
      <pre className="responses-box">{JSON.stringify(responses, null, 2)}</pre>
    </div>
  );
};

export default FormPreview;
