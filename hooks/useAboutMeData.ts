import { useEffect, useState } from "react";
import { fetchFirestoreData } from "../components/lib/firebase-crud/fetch-data";

interface AboutMe {
  id: string;
  skills: string[];
  imageUrl: string;
}

const useAboutMeData = ({ itemQuantity }: { itemQuantity: number }) => {
  const [data, setData] = useState<AboutMe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchFirestoreData<AboutMe>("aboutMe", itemQuantity)
      .then(({ collectionData, error }) => {
        if (error !== null) {
          setError(error);
        } else {
          setData(collectionData);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};

export default useAboutMeData;
