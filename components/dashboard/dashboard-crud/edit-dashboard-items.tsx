import { useState } from "react";
import { EditDataProps } from "./update-dashboard-data";
import DashboardDataInputForm from "../data-input-form";
import Modal from "../modal";
import ServiceItem from "../service-item";
import Table from "../table";
import useFormHandler, { FormDataTypes } from "../../../hooks/useFormHandler";
import { formFields, tableHeaders } from "../formEntries";
import RemoveDashboardItemData from "./remove-dashboard-item";
import { DataItem } from "../../../types/type";

export default function EditDashboardData<T extends DataItem>({
  data,
  category,
}: EditDataProps<T>) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const {
    collectionData,
    formData,
    handleInputChange,
    handleFileChange,
    saveItem,
    startEditing,
    cancelEditing,
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
            <ServiceItem<T> row={row} category={category} />
            <td className="flex mt-5 px-6 py-4">
              <button
                onClick={() => {
                  startEditing({
                    ...row,
                  } as FormDataTypes);
                  setIsEditing(true);
                }}
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                Edit
              </button>
              <RemoveDashboardItemData
                data={data}
                row={row}
                category={category}
              />
            </td>
          </>
        )}
      />
      <Modal
        isOpen={isEditing}
        title={`Edit ${category}`}
        onClose={() => setIsEditing(false)}
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
              setIsEditing(false);
              cancelEditing();
            }}
          >
            Cancel
          </button>

          <button onClick={saveItem}>Save</button>
        </div>
      </Modal>
    </>
  );
}
