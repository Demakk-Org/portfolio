import { useEffect, useState } from "react";
import { fetchFirestoreData } from "../components/lib/firebase-crud/fetch-data";

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
    fetchFirestoreData<ServiceType>("services", itemQuantity)
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
