import createFirestoreData from "../lib/firebase-crud/create-data";
import deleteFirestoreData from "../lib/firebase-crud/delete-data";
import uploadFile from "../lib/firebase-crud/storage";
import updateFirestoreData from "../lib/firebase-crud/update-data";

export const dashboardCRUD = {
  async saveItem(data: any, category: string, id?: string) {
    // Handle file upload
    if (data.file) {
      const folder = category === "uploadCV" ? "cv" : "images";
      const fileUrl = await uploadFile(folder, data.file, category);
      data[category === "uploadCV" ? "cvUrl" : "imageUrl"] = fileUrl;

      delete data.file;
    }

    if (id) {
      // Update Firestore document
      await updateFirestoreData({ category, docId: id, data });
      return { ...data, id };
    } else {
      // Create new document
      const newDoc = await createFirestoreData({ data, category });
      return newDoc;
    }
  },

  async deleteItem(category: string, id: string) {
    await deleteFirestoreData(category, id);
  },
};
