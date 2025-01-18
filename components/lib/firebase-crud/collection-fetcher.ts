import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

type FirestoreResponse<T> =
  | {
      collectionData: T[];
      error: null;
    }
  | {
      collectionData: null;
      error: string;
    };
export async function fetchFirestoreCollection<T>(
  collectionName: string,
  limitNumber: number
): Promise<FirestoreResponse<T>> {
  const collectionRef = collection(db, collectionName);
  const q = query(
    collectionRef,
    orderBy("createdAt", "desc"),
    limit(limitNumber)
  );
  try {
    const querySnapshot = await getDocs(q);
    const collectionData = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    }) as T[];
    return { collectionData, error: null };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      collectionData: null,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
