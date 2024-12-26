import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const updateFirestoreData = async ({ category, docId, data }: any) => {
  try {
    const docRef = doc(db, category, docId);
    await updateDoc(docRef, data);
    console.log(`${category} document updated successfully`);
  } catch (e) {
    console.error("Error while creating data:", e);
  }
};

export default updateFirestoreData;
