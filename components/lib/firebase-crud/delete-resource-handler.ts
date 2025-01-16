import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../firebase"; // Reuse existing instances

const deleteResourceFromFirestoreAndStorage = async (
  category: string,
  docId: string,
  filepath?: string
) => {
  try {
    if (!category || !docId) {
      throw new Error("Category and docId are required to delete a document.");
    }

    // Delete Firestore document
    const docRef = doc(db, category, docId);
    await deleteDoc(docRef);
    console.log("Document deleted successfully");

    // Delete file from storage if filepath is provided
    if (filepath) {
      const fileRef = ref(storage, filepath);
      await deleteObject(fileRef);
    }
  } catch (error) {
    console.error("Error while deleting Firestore data or file:", error);
    throw error;
  }
};

export default deleteResourceFromFirestoreAndStorage;
