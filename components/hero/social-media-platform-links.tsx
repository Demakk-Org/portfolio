import Link from "next/link";
import useSocialMediaPlatformData from "../../hooks/useSocialMediaPlatformData";
import Image from "next/image";

const SocialMediaPlatformLinks = () => {
  const { data, isLoading, error } = useSocialMediaPlatformData({
    itemQuantity: 4,
  });
  console.log(data);
  return (
    <>
      {data.map((socialMedia) => {
        return (
          <Link
            key={socialMedia.id}
            href={socialMedia.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={socialMedia.imageUrl}
              alt={`${socialMedia.name} logo`}
              width={50}
              height={50}
              className="rounded-full object-cover h-[30px] w-[30px] tablet:h-[50px] tablet:w-[50px]"
            />
          </Link>
        );
      })}
    </>
  );
};

export default SocialMediaPlatformLinks;
