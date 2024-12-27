import { useState } from "react";
import { dashboardCRUD } from "../components/dashboard/dashboard-crud";
import prepareFormData from "../components/dashboard/update-form";

export interface FormDataTypes {
  id?: string;
  name: string;
  title: string;
  description: string;
  feedback: string;
  techStack: string;
  file: File | null;
}

export default function useFormHandler<T extends { id: string }>(
  initialData: T[],
  category: string
) {
  const [collectionData, setCollectionData] = useState<T[]>(initialData);
  const [editingItem, setEditingItem] = useState<FormDataTypes | null>(null);

  const [formData, setFormData] = useState<FormDataTypes>({
    name: "",
    title: "",
    description: "",
    feedback: "",
    techStack: "",
    file: null,
  });

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

  const startEditing = (item: FormDataTypes) => {
    // setEditingItem(item);
    setEditingItem({
      name: item.name,
      title: item.title,
      description: item.description,
      feedback: item.feedback,
      techStack: item.techStack,
      file: null,
    });
    setFormData({
      name: item.name,
      title: item.title,
      description: item.description,
      feedback: item.feedback,
      techStack: item.techStack,
      file: null,
    });
  };

  const saveItem = async () => {
    try {
      const { updatedFormData, file } = prepareFormData(formData, category);
      const updatedItem = await dashboardCRUD.saveItem(
        updatedFormData,
        category,
        file,
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
    setFormData({
      name: "",
      title: "",
      description: "",
      feedback: "",
      techStack: "",
      file: null,
    });
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
