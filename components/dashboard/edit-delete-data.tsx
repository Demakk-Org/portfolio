import { useState } from "react";
import { DataItem, EditDataProps } from "./update-dashboard-data";
import Form from "./form";
import Modal from "./modal";
import ServiceItem from "./service-item";
import Table from "./table";
import useFormHandler, { FormDataTypes } from "../../hooks/useFormHandler";
import { formFields, tableHeaders } from "./form-field";

export default function EditDeleteData<T extends DataItem>({
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
    deleteItem,
    startEditing,
    cancelEditing,
  } = useFormHandler(data, category);

  const headers = tableHeaders[category] || [
    "Title",
    "Description",
    "Created At",
  ];

  return (
    <div>
      <Table
        headers={headers}
        rows={collectionData}
        renderRow={(row) => (
          <>
            <ServiceItem<T> row={row} category={category} />
            <td className="flex px-6 py-4">
              <button
                onClick={() => {
                  // startEditing(row);
                  startEditing({
                    ...row,
                    name: row.name || "",
                  } as FormDataTypes);
                  setIsEditing(true);
                }}
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteItem(row.id);
                }}
                className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md"
              >
                Delete
              </button>
            </td>
          </>
        )}
      />
      <Modal isOpen={isEditing} title={`Edit ${category}`}>
        <Form
          fields={formFields[category]}
          formData={formData || {}}
          onChange={handleInputChange}
        />
        <input type="file" onChange={handleFileChange} />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              setIsEditing(false);
              cancelEditing();
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
  );
}
