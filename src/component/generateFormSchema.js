export const generateFormSchema = (formFields) => {
    return {
      fields: formFields.map((field) => ({
        type: field.type,
        label: field.label,
        required: false, // You can add validation logic for required fields here
      })),
    };
  };
  