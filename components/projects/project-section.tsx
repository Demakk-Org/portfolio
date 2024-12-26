"use client";

import useProjectData, { ProjectType } from "../../hooks/useProjectData";
import ProjectCard from "./project-card";

const ProjectSection = () => {
  const {
    filteredProjects,
    selectedSkill,
    setSelectedSkill,
    isLoading,
    error,
    allSkills,
  } = useProjectData({itemQuantity:3});

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center pt-[10%]  dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="text-3xl tablet:text-3xl mb-0">My Projects</h1>
      <p className=" tablet:px-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.
      </p>
      <div className="flex flex-wrap justify-start gap-x-3 gap-y-2 tablet:gap-3 tablet:p-2">
        {allSkills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className={` flex px-3 py-2 tablet:px-5 tablet:py-3 font-poppins rounded-lg tablet:text-sm ${
              selectedSkill === skill
                ? "bg-darkorange-100"
                : "bg-whitesmoke-200 dark:bg-white text-black dark:hover:bg-gainsboro-200"
            }`}
          >
            {skill.charAt(0).toUpperCase() + skill.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-7 pt-[2rem] tablet:flex-row">
        {isLoading ? (
          <p>Loading</p>
        ) : error ? (
          <p>getting error when fetching the data</p>
        ) : (
          filteredProjects.map((project: ProjectType) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              skills={project.skills}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
