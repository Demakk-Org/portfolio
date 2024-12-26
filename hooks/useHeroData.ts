import { useEffect, useState } from "react";
import { fetchFirestoreData } from "../components/lib/firebase-crud/fetch-data";

export interface HeroType {
  id: string;
  description: string;
  imageUrl: any;
}

const useHeroData = ({ itemQuantity }: { itemQuantity: number }) => {
  const [data, setData] = useState<HeroType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchFirestoreData<HeroType>("hero", itemQuantity)
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

export default useHeroData;
