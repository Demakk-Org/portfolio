import { useState } from "react";
import prepareFormData from "../components/dashboard/categoryFormHandler";
import { CategoryType } from "../types/type";
import { dashboardCRUD } from "../components/dashboard/dashboard-crud/dashboard-crud";

export interface FormDataTypes {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  feedback?: string;
  skills?: string;
  file?: File | null;
  cvUrl?: string;
  imageUrl?: string;
  linkUrl?: string;
}

export default function useFormHandler<T extends { id: string }>(
  initialData: T[],
  category: CategoryType
) {
  const [collectionData, setCollectionData] = useState<T[]>(initialData);
  const [editingItem, setEditingItem] = useState<FormDataTypes | null>(null);
  const [itemToDelete, setItemToDelete] = useState<T | null>(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormDataTypes>({
    name: "",
    title: "",
    description: "",
    feedback: "",
    skills: "",
    file: null,
    linkUrl: "",
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
    setEditingItem({
      id: item.id,
      name: item.name,
      title: item.title,
      description: item.description,
      feedback: item.feedback,
      skills: item.skills,
      imageUrl: item.imageUrl,
      linkUrl: item.linkUrl,
    });
    setFormData({
      id: item.id,
      name: item.name,
      title: item.title,
      description: item.description,
      feedback: item.feedback,
      skills: item.skills,
      imageUrl: item.imageUrl,
      linkUrl: item.linkUrl,
    });
  };

  const saveItem = async () => {
    try {
      const { updatedFormData } = prepareFormData(formData, category);
      const updatedItem = (await dashboardCRUD.saveItem(
        updatedFormData,
        category,
        editingItem?.id
      )) as T;
      if (editingItem?.id) {
        setCollectionData((prev) =>
          prev.map((item) => (item.id === updatedItem?.id ? updatedItem : item))
        );
      } else {
        setCollectionData((prev) => [...prev, updatedItem]);
      }
      clearFormEntries();
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  const clearFormEntries = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      title: "",
      description: "",
      feedback: "",
      skills: "",
      file: null,
      imageUrl: "",
      cvUrl: "",
      linkUrl: "",
    });
  };

  async function deleteItem(itemToDelete: FormDataTypes) {
    const id = itemToDelete.id;
    try {
      const fileUrl =
        category === "uploadCV" ? itemToDelete?.cvUrl : itemToDelete?.imageUrl;
      await dashboardCRUD.deleteItem(category, id!, fileUrl);
      setCollectionData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  function onDeleteItemInitiator(item: T) {
    setItemToDelete(item);
    setIsConfirmingDelete(true);
  }

  async function onDeleteConfirmation() {
    if (itemToDelete) {
      try {
        await deleteItem(itemToDelete);
        setIsConfirmingDelete(false);
        setItemToDelete(null);
      } catch (e) {
        console.error("Error deleting item", e);
      }
    }
  }

  function cancelDelete() {
    setIsConfirmingDelete(false);
    setItemToDelete(null);
  }

  return {
    isConfirmingDelete,
    collectionData,
    formData,
    handleInputChange,
    handleFileChange,
    saveItem,
    deleteItem,
    onDeleteConfirmation,
    cancelDelete,
    onDeleteItemInitiator,
    setIsConfirmingDelete,
    startEditing,
    clearFormEntries,
  };
}
