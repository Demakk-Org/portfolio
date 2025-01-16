import Image from "next/image";
import React from "react";
import logo from "../../public/subtract.png";
import NavLinks from "../navigation/nav-links";
// import SocialLinks from "../hero/social-links";

const desktopClassName =
  "[text-decoration:none] tracking-[0.03em] font-poppins dark:text-white cursor-pointer hover:text-blue-600 text-nowrap tablet:px-[6px] laptop:px-[12px]";

const FooterSection = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center gap-10 dark:text-white mt-[100px] pt-7 bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center box-border gap-2 desktop:gap-5">
          <Image
            src={logo}
            alt="portfolio"
            priority
            className="h-[40px] w-[40px] desktop:w-[50px] desktop:h-[50px]"
          />
          <div className="flex-1 flex flex-col items-start justify-start">
            <a className=" text-xl desktop:text-3xl">
              <b>E</b>
              <span>{`phrem `}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden tablet:flex">
        <div className="flex justify-center gap-5 ">
          <NavLinks desktopClassName={desktopClassName} />
        </div>
      </div>
      <div className="flex justify-center items-center gap-1">
        {/* <SocialLinks /> */}
      </div>

      <div className="w-full flex justify-center gap-2 py-2 bg-dimgray text-md text-white font-poppins">
        <span>{`© 2023 `}</span>
        <b className="text-darkorange-100">{"Ephrem "}</b>
        <span>All Rights Reserved , Inc.</span>
      </div>
    </footer>
  );
};

export default FooterSection;
