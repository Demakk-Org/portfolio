import { useEffect, useState } from "react";
import { fetchFirestoreCollection } from "../components/lib/firebase-crud/collection-fetcher";

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt?: any;
}

const useServiceData = ({ itemQuantity }: { itemQuantity: number }) => {
  const [data, setData] = useState<ServiceType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchFirestoreCollection<ServiceType>("services", itemQuantity)
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

export default useServiceData;
