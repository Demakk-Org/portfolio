import createFirestoreData from "../lib/firebase-crud/create-data";
import deleteFirestoreData from "../lib/firebase-crud/delete-data";
import uploadFile from "../lib/firebase-crud/storage";
import updateFirestoreData from "../lib/firebase-crud/update-data";

export const dashboardCRUD = {
  async saveItem(formData: any, category: string, file: any, id?: string) {
    // Handle file upload
    if (file) {
      const folder = category === "uploadCV" ? "cv" : "images";
      const fileUrl = await uploadFile(folder, file, category);
      formData[category === "uploadCV" ? "cvUrl" : "imageUrl"] = fileUrl;
    }

    if (id) {
      // Update Firestore document
      await updateFirestoreData({ category, docId: id, formData });
      return { ...formData, id };
    } else {
      // Create new document
      const newDoc = await createFirestoreData({ data: formData, category });
      return newDoc;
    }
  },

  async deleteItem(category: string, id: string) {
    await deleteFirestoreData(category, id);
  },
};
