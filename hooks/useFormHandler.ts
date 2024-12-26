import { useState } from "react";
import { dashboardCRUD } from "../components/dashboard/dashboard-crud";

export default function useFormHandler<T extends { id: string }>(
  initialData: T[],
  category: string
) {
  const [collectionData, setCollectionData] = useState<T[]>(initialData);
  const [editingItem, setEditingItem] = useState<T | null>(null);

  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({ ...prevData, file }));
  };

  const startEditing = (item: T) => {
    setEditingItem(item);
    setFormData(item);
  };

  const saveItem = async () => {
    try {
      const updatedItem = await dashboardCRUD.saveItem(
        formData,
        category,
        editingItem?.id
      );
      setCollectionData((prev) =>
        prev.map((item) => (item.id === updatedItem?.id ? updatedItem : item))
      );
      cancelEditing();
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  const cancelEditing = () => {
    setEditingItem(null);
    setFormData({});
  };

  const deleteItem = async (id: string) => {
    try {
      await dashboardCRUD.deleteItem(category, id);
      setCollectionData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return {
    collectionData,
    formData,
    handleInputChange,
    handleFileChange,
    saveItem,
    deleteItem,
    startEditing,
    cancelEditing,
  };
}
