"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaBookmark,
  FaHome,
  FaLayerGroup,
  FaProjectDiagram,
  FaServicestack,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const links = [
  { name: "Home", href: "#hero", icon: FaHome },
  { name: "About Me", href: "#about-me", icon: FaPerson },
  { name: "Services", href: "#services", icon: FaServicestack },
  { name: "Projects", href: "#projects", icon: FaProjectDiagram },
  { name: "Testimonials", href: "#testimonials", icon: FaLayerGroup },
  { name: "Contact", href: "#contact", icon: FaBookmark },
];
interface NavbarProps {
  desktopClassName?: string;
  navLinksForMobile?: string;
}
const NavLinks: React.FC<NavbarProps> = ({
  desktopClassName,
  navLinksForMobile,
}) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const NavLink = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              desktopClassName
                ? clsx(desktopClassName, {
                    "text-blue-600": pathname === link.href,
                  })
                : navLinksForMobile
            }
          >
            <div className="flex items-center gap-3">
              {navLinksForMobile && <NavLink />}
              {link.name}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
