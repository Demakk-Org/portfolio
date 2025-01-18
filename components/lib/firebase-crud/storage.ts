import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

interface FileStorageProps {
  folder: string;
  file: File;
  category: string;
}

async function uploadFile({ folder, file, category }: FileStorageProps) {
  const storage = getStorage();
  const filePath = `${folder}/${category}/${file.name}`;
  const fileRef = ref(storage, filePath);
  try {
    const snapshot = await uploadBytes(fileRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

export default uploadFile;
