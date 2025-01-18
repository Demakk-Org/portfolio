import { useEffect, useState } from "react";
import { fetchFirestoreCollection } from "../components/lib/firebase-crud/collection-fetcher";

interface SocialLinkProps {
  id: string;
  name: string;
  linkUrl: string;
  imageUrl: string;
}

const useSocialMediaPlatformData = ({
  itemQuantity,
}: {
  itemQuantity: number;
}) => {
  const [data, setData] = useState<SocialLinkProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchFirestoreCollection<SocialLinkProps>(
      "socialMediaPlatforms",
      itemQuantity
    )
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

export default useSocialMediaPlatformData;
