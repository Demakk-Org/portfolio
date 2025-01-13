import Link from "next/link";
import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/ephrem-mekuria-20215319a",
    icon: FaLinkedinIn,
  },
  { id: 2, href: "https://github.com/ermias5", icon: FaGithub },
  {
    id: 3,
    href: "https://web.facebook.com/ephrem.mekuria.58",
    icon: FaFacebook,
  },
  { id: 4, href: "", icon: FaDiscord },
];

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((socialLink) => {
        const LinkIcon = socialLink.icon;
        return (
          <Link
            key={socialLink.id}
            href={socialLink.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon className="mx-3 size-5 text-dimgray dark:text-blue-400 hover:text-blue-800 desktop:size-6" />
          </Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
