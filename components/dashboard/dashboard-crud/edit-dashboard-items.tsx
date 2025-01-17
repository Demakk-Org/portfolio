import { useState } from "react";
import { EditDataProps } from "./update-dashboard-data";
import DashboardDataInputForm from "../data-input-form";
import Modal from "../modal";
import RenderRowData from "../row-data-displayer";
import Table from "../table";
import useFormHandler, {
  FormDataTypes,
} from "../../../hooks/useDashboardFormHandler";
import { formFields, tableHeaders } from "../formEntries";
import RemoveDashboardItem from "./dashboard-item-deletion";
import { DataItem } from "../../../types/type";
import {
  baseButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "../../../styles/style";

export default function EditDashboardData<T extends DataItem>({
  data,
  category,
}: EditDataProps<T>) {
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);

  const {
    collectionData,
    formData,
    handleInputChange,
    handleFileChange,
    saveItem,
    startEditing,
  } = useFormHandler(data, category);

  const headers = tableHeaders[category] || [
    "Title",
    "Description",
    "Created At",
  ];

  return (
    <>
      <Table
        headers={headers}
        rows={collectionData}
        renderRow={(row) => (
          <>
            <RenderRowData<T> row={row} category={category} />
            <td className="flex mt-3 px-6 py-4">
              <button
                onClick={() => {
                  startEditing({
                    ...row,
                  } as FormDataTypes);
                  setIsFormModalOpen(true);
                }}
                className="px-4 py-1 text-white bg-blue-500 rounded-md"
              >
                Edit
              </button>
              <RemoveDashboardItem data={data} row={row} category={category} />
            </td>
          </>
        )}
      />
      <Modal
        isOpen={isFormModalOpen}
        title={`Edit ${category}`}
        onClose={() => setIsFormModalOpen(false)}
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
              setIsFormModalOpen(false);
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
    </>
  );
}
