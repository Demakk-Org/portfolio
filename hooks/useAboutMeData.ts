import { useEffect, useState } from "react";
import { fetchFirestoreCollection } from "../components/lib/firebase-crud/collection-fetcher";

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
    fetchFirestoreCollection<AboutMe>("aboutMe", itemQuantity)
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
