import { FormDataTypes } from "../../hooks/useFormHandler";

interface FieldsType {
  name: string;
  label: string;
  type: string;
  rows?: number;
}

interface FormProps {
  fields: FieldsType[];
  formData: { [key: string]: FormDataTypes };
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DashboardDataInputForm = ({
  fields,
  formData,
  onInputChange,
  onFileChange,
}: FormProps) => {
  const inputStyle =
    "w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50";

  return (
    <>
      <div className="p-6 border border-gray-300 rounded-md bg-white space-y-6">
        {fields.map((field: FieldsType) => (
          <label key={field.name} className="block space-y-2">
            <span className="text-black">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name] as string}
                onChange={onInputChange}
                rows={field.rows || 3}
                className={inputStyle}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={(formData[field.name] as string) || ""}
                onChange={field.type === "file" ? onFileChange : onInputChange}
                className={inputStyle}
              />
            )}
            <img src={formData.imageUrl as string} alt="" />
          </label>
        ))}
      </div>
    </>
  );
};

export default DashboardDataInputForm;
