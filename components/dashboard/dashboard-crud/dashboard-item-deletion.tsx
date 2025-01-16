import React from "react";
import Modal from "../modal";
import useFormHandler from "../../../hooks/useDashboardFormHandler";
import { CategoryType, DataItem } from "../../../types/type";

interface DeleteDataProps<T extends DataItem> {
  row: T;
  category: CategoryType;
  data: T[];
}

export default function RemoveDashboardItem<T extends DataItem>({
  data,
  category,
  row,
}: DeleteDataProps<T>) {
  const {
    isConfirmingDelete,
    onDeleteConfirmation,
    cancelDelete,
    onDeleteItemInitiator,
    setIsConfirmingDelete,
  } = useFormHandler(data, category);

  return (
    <>
      <button
        onClick={() => {
          onDeleteItemInitiator(row);
          setIsConfirmingDelete(true);
        }}
        className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md"
      >
        Delete
      </button>
      <Modal
        isOpen={isConfirmingDelete}
        title="Are you sure?"
        onClose={cancelDelete}
      >
        <p>
          Do you really want to delete this item? This action is irriversible.
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={cancelDelete}
            className="px-4 py-2 text-white bg-gray-500 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onDeleteConfirmation}
            className="px-4 py-2 text-white bg-red-500 rounded-md"
          >
            Confirm
          </button>
        </div>
      </Modal>
    </>
  );
}
