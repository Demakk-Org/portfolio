import React, { useState } from "react";
import Modal from "../modal";
import DashboardDataInputForm from "../data-input-form";
import useFormHandler, { FormDataTypes } from "../../../hooks/useFormHandler";
import { formFields } from "../formEntries";
import { EditDataProps } from "./update-dashboard-data";
import { DataItem } from "../../../types/type";
import {
  baseButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "../../../styles/style";

export default function CreateDashboardData<T extends DataItem>({
  data,
  category,
}: EditDataProps<T>) {
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const { formData, handleInputChange, handleFileChange, saveItem } =
    useFormHandler(data, category);

  return (
    <div>
      <button
        onClick={() => setIsAdding(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add New {category}
      </button>
      <Modal
        isOpen={isAdding}
        title={`Add New ${category} Item`}
        onClose={() => setIsAdding(false)}
      >
        <DashboardDataInputForm
          fields={formFields[category]}
          formData={formData as { [key: string]: FormDataTypes }}
          onInputChange={handleInputChange}
          onFileChange={handleFileChange}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              setIsAdding(false);
            }}
            className={`${baseButtonStyle} ${secondaryButtonStyle}`}
          >
            Cancel
          </button>

          <button
            onClick={saveItem}
            className={`${baseButtonStyle} ${primaryButtonStyle}`}
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
}
