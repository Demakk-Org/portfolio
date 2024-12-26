import { useEffect, useState } from "react";
import { fetchFirestoreData } from "../components/lib/firebase-crud/fetch-data";

export interface TestimonialType {
  id?: string;
  name: string;
  title: string;
  imageUrl: string;
  feedback: string;
}

const useTestimonialData = ({ itemQuantity }: { itemQuantity: number }) => {
  const [data, setData] = useState<TestimonialType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchFirestoreData<TestimonialType>("testimonials", itemQuantity)
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

export default useTestimonialData;
