import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { FormDataTypes } from "../../../hooks/useDashboardFormHandler";

export const createCategoryDocument = async ({
  category,
  data,
}: {
  category: string;
  data: FormDataTypes;
}) => {
  try {
    const collectionRef = collection(db, category);

    const docRef = await addDoc(collectionRef, {
      ...data,
      createdAt: serverTimestamp(),
    });

    if (docRef) {
      alert(`Document created to ${category} category`);
    }
  } catch (e) {
    console.error("Error while creating data:", e);
  }
};

export default createCategoryDocument;
