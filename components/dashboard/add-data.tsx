import React, { useState } from "react";
import Modal from "./modal";
import Form from "./form";
import useFormHandler from "../../hooks/useFormHandler";
import { formFields } from "./form-field";
import { DataItem, EditDataProps } from "./update-dashboard-data";

export default function AddNewData<T extends DataItem>({
  data,
  category,
}: EditDataProps<T>) {
  const [isAdding, setIsAdding] = useState(false);

  const { formData, handleInputChange, handleFileChange, saveItem } =
    useFormHandler(data, category);

  return (
    <>
      <div>
        <button
          onClick={() => setIsAdding(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add New {category}
        </button>
        <Modal isOpen={isAdding} title={`Add New ${category} Item`}>
          <Form
            fields={formFields[category]}
            formData={formData || {}}
            onChange={handleInputChange}
          />
          <input type="file" onChange={handleFileChange} />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                setIsAdding(false);
              }}
              className="mt-1 block  text-sm text-indigo-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            >
              Cancel
            </button>

            <button
              onClick={saveItem}
              className="mt-1 block  text-sm text-indigo-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            >
              Save
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}
