import { FormDataTypes } from "../../../hooks/useFormHandler";
import { CategoryType } from "../../../types/type";
import createFirestoreData from "../../lib/firebase-crud/create-data";
import deleteFirestoreData from "../../lib/firebase-crud/delete-data";
import uploadFile from "../../lib/firebase-crud/storage";
import updateFirestoreData from "../../lib/firebase-crud/update-data";

class DashboardCRUD {
  async saveItem(formData: FormDataTypes, category: CategoryType, id?: string) {
    // Handle file upload
    if (formData.file) {
      const folder = category === "uploadCV" ? "cv" : "images";
      const fileUrl = await uploadFile(folder, formData.file, category);
      formData[category === "uploadCV" ? "cvUrl" : "imageUrl"] = fileUrl;
      delete formData.file;
    }

    if (id) {
      // Update Firestore document
      await updateFirestoreData({ category, docId: id, data: formData });
      return { ...formData, id };
    } else {
      // Create new document
      const newDoc = await createFirestoreData({ data: formData, category });
      return newDoc;
    }
  }

  async deleteItem(category: string, id: string, fileUrl?: string) {
    await deleteFirestoreData(category, id, fileUrl);
  }
}

export const dashboardCRUD = new DashboardCRUD();
