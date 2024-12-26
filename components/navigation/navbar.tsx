"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/subtract.png";
import NavLinks from "./nav-links";
import SideNav from "./side-navigation";
import useUploadCVData from "../../hooks/useUploadCVData";

const Navbar = () => {
  const { data, isLoading, error } = useUploadCVData({ itemQuantity: 1 });
  const [isScrolled, setIsScrolled] = useState(false);

  const desktopClassName =
    "[text-decoration:none] text-black tracking-[0.03em] font-poppins dark:text-white cursor-pointer hover:text-blue-600 text-nowrap tablet:px-[6px] laptop:px-[12px]";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cvUrl = data.length > 0 ? data[0]?.cvUrl : null;
  return (
    <header
      className={`min-w-full flex items-center justify-center gap-[40px] tablet:gap-[20px] laptop:gap-[50px] ${
        isScrolled
          ? " bg-gainsboro-200 dark:bg-gray-100 pt-3 pb-2 z-50 fixed top-0 transition ease-in-out duration-700 "
          : " dark:text-white"
      }`}
    >
      <div className="flex">
        <div className=" flex items-center gap-2 desktop:gap-5 desktop:mr-[75px]">
          <Image
            src={logo}
            alt="portfolio"
            priority
            className="h-[40px] w-[40px] desktop:w-[50px] desktop:h-[50px]"
          />
          <div>
            <a className=" text-2xl desktop:text-3xl">
              <b>E</b>
              <span>{`phrem `}</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="hidden tablet:flex  ">
        <nav className=" flex items-start justify-start">
          <div className="flex items-center justify-start cursor-pointer">
            <NavLinks desktopClassName={desktopClassName} />
          </div>
        </nav>
      </nav>
      <div className="flex flex-col items-start justify-start bg-darkorange-100 rounded-md desktop:ml-2">
        <button className="cursor-pointer [border:none] px-[6px]  rounded-md bg-darkorange-100 flex flex-row items-start justify-start whitespace-nowrap hover:bg-orangered tablet:p-[4px] laptop:px-[12px]">
          <a
            href={cvUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="[text-decoration:none] relative text-sm font-poppins tracking-[0.03em] text-white inline-block z-[1] tablet:text-md  "
          >
            Downlaod CV
          </a>
        </button>
      </div>
      <SideNav />
    </header>
  );
};

export default Navbar;
