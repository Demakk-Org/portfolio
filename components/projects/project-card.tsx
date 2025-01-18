"use client";

import Image from "next/image";
import React from "react";
import { ProjectType } from "../../hooks/useProjectData";
import imagePlaceholder from "../../public/subtract.png";

const ProjectCard: React.FC<ProjectType> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-[300px] relative items-center tablet:items-start  text-black  bg-whitesmoke-100  rounded-lg laptop:items-center tablet:w-[200px] laptop:w-[300px]">
      <div className="flex items-center justify-center relative bg-red-100 rounded-lg h-[350px] w-[300px] tablet:h-[250px] tablet:w-[200px] laptop:h-[400px] laptop:w-[300px]">
        <Image
          src={imageUrl ?? imagePlaceholder}
          alt={`my ${title} image`}
          width={300}
          height={300}
          className="rounded-lg h-[300px] w-[200px]  tablet:h-[250px] tablet:w-[200px] laptop:w-[270px] laptop:h-[370px]"
        />
      </div>

      <h3 className="text-sm text-darkorange-100 pt-3">{title}</h3>
      <h1 className="mt-2 px-5 text-sm text-gray-700  line-clamp-2 dark:text-black">
        {description}
      </h1>
    </div>
  );
};

export default ProjectCard;
