"use client";

import React from "react";
import Image from "next/image";
import ToggleTheme from "../theme-toggle/toggle-theme";
import SocialLinks from "./social-links";
import useHeroData from "../../hooks/useHeroData";

const Hero = () => {
  const { data, isLoading, error } = useHeroData({ itemQuantity: 1 });
  return (
    <>
      <div className="fixed flex items-center justify-center top-[10rem] left-[1rem] cursor-pointer tablet:top-[10rem] tablet:left-[2rem] laptop:top-[20rem] laptop:left-[7rem]">
        <ToggleTheme />
      </div>
      <div
        id="hero"
        className={`flex flex-col-reverse items-center justify-center px-[5%]  pt-[10%]  gap-10 font- dark:text-white tablet:flex-row tablet:gap-[140px] tablet:px-[20%] desktop:px-[20%] desktop:pt-[10%] `}
      >
        <div className="w-full flex flex-col ">
          <div className="flex flex-col desktop:gap-[20px]  ">
            <div className=" flex flex-col items-start justify-start gap-1.5 desktop:self-stretch">
              <div className="flex items-start justify-start ">
                <div className="tracking-[0.03em] font-semibold inline-block  desktop:min-w-[90px]">{`Hi I am `}</div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-start justify-start ">
                  <h3 className="m-0  font-semibold text-lg text-darkorange-100">{`Ephrem Mekuria `}</h3>
                </div>
                <div className="flex items-start justify-start gap-2 -my-[1rem] desktop:text-2xl desktop:flex-col desktop:-my-[2px]">
                  <h1 className="text-inherit tracking-[0.03em] font-bold font-[inherit] desktop:inline-block desktop:max-w-full desktop:w-[400px] desktop:m-0">{`Flutter`}</h1>
                  <div className=" flex justify-end desktop:mt-[-25px] desktop:self-stretch">
                    <h1 className="text-inherit tracking-[0.05em] font-bold font-[inherit] desktop:m-0 ">{`Developer`}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start ">
              <p className="flex  text-left leading-relaxed tracking-normal">
                {data.map((descriptionData) => descriptionData.description)}
              </p>

              <button
                className=" bg-orange-400 rounded text-lg px-[1rem] py-[.5rem] text-white desktop:text-2xl cursor-pointer "
                onClick={() => {
                  const contactElement = document.getElementById("contact");
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                hire me
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-full overflow-hidden h-[200px] w-[200px] relative  desktop:h-[300px] desktop:w-[300px]  ">
            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              data.map((image, index) => (
                <Image
                  src={image.imageUrl}
                  alt={`Image of ${index}`}
                  key={index}
                  className="object-cover"
                  fill
                />
              ))
            )}
          </div>
          <div className="hidden tablet:flex">
            <div className="flex items-center justify-center gap-5 my-8 w-full">
              <div className="rounded-full cursor-pointer">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
