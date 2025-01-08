"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "services", href: "/dashboard/services" },
  { name: "projects", href: "/dashboard/projects" },
  { name: "testimonials", href: "/dashboard/testimonials" },
  { name: "hero", href: "/dashboard/hero" },
  {
    name: "about me",
    href: "/dashboard/about-me",
  },
  { name: "upload cv", href: "/dashboard/upload-cv" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center rounded-3xl text-sm px-5 font-bold tracking-[0.07em] hover:bg-sky-100 [text-decoration:none] hover:text-blue-600 tablet:justify-center",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <p className="text-black">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
