import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { FormDataTypes } from "../../../hooks/useFormHandler";

export const createFirestoreData = async ({
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

export default createFirestoreData;
