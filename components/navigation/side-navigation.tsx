"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/subtract.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLinks from "./nav-links";
// import SocialLinks from "../hero/social-links";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const mobileClassName =
    "[text-decoration:none] tracking-[0.03em] text-lg text-black font-poppins px-[12px] cursor-pointer text-nowrap";

  return (
    <div onClick={handleNav} className="flex z-20 tablet:hidden">
      <div>
        <AiOutlineMenu fontSize={"1.5rem"} />
      </div>
      <div
        className={
          nav
            ? "fixed flex justify-center items-center left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={`fixed left-0 ${
            nav
              ? "w-[65%] h-screen bg-slate-300 px-5 py-3 transition ease-in-out duration-1000"
              : "left-[-100%]"
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <Image src={logo} height={50} width={50} alt="logo" />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="flex justify-center font-bold border-b-2 border-blue-600 pb-7 ">
            Ephrem Mekuria
          </div>
          <div className="pt-10">
            <div className="flex flex-col items-start justify-start cursor-pointer gap-7">
              <NavLinks navLinksForMobile={mobileClassName} />
            </div>
          </div>
          <div className="flex flex-col items-center pt-20">
            <p className="text-lg font-bold"> Lets connect</p>
            <div className="flex items-center justify-center text-[10px]">
              <div className="rounded-full cursor-pointer">
                {/* <SocialLinks /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
