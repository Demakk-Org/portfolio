interface FormProps {
  fields: { name: string; label: string; type: string; rows?: number }[];
  formData: { [key: string]: any };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Form = ({ fields, formData, onChange }: FormProps) => {
  return (
    <>
      {fields.map((field: any) => (
        <label key={field.name} className="block">
          <span className="text-gray-700">{field.label}</span>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              value={formData[field.name] || ""}
              onChange={onChange}
              rows={field.rows || 3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          )}
        </label>
      ))}
    </>
  );
};

export default Form;
