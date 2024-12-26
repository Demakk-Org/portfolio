import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const deleteFirestoreData = async (category: string, docId: string) => {
  try {
    const docRef = doc(db, category, docId);
    await deleteDoc(docRef);
    console.log("Document deleted successfully");
  } catch (e) {
    console.error("Error while deleting data:", e);
  }
};

export default deleteFirestoreData;
