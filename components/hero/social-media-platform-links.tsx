"use client";

import Link from "next/link";
import useSocialMediaPlatformData from "../../hooks/useSocialMediaPlatformData";
import Image from "next/image";

const SocialMediaPlatformLinks = () => {
  const { data } = useSocialMediaPlatformData({
    itemQuantity: 10,
  });

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
              width={100}
              height={100}
              className="rounded-full text-dimgray mx-3 object-cover h-[25px] w-[25px] tablet:h-[30px] tablet:w-[30px] filter brightness-[75%]"
            />
          </Link>
        );
      })}
    </>
  );
};

export default SocialMediaPlatformLinks;
