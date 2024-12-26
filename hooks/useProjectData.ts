import { useEffect, useState } from "react";
import { fetchFirestoreData } from "../components/lib/firebase-crud/fetch-data";

export interface ProjectType {
  id?: string;
  title: string;
  imageUrl: string;
  description: string;
  skills: string[];
}

export default function useProjectData({
  itemQuantity,
}: {
  itemQuantity: number;
}) {
  const [data, setData] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [allSkills, setAllSkills] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchFirestoreData<ProjectType>("projects", itemQuantity)
      .then(({ collectionData, error }) => {
        if (error !== null) {
          setError(error);
        } else {
          setData(collectionData);

          const skills = [
            "All",
            ...new Set(collectionData.flatMap((project) => project.skills)),
          ];
          setAllSkills(skills.map((skill) => skill.toLowerCase()));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const filtered =
        selectedSkill === "all"
          ? data
          : data.filter((project: ProjectType) =>
              project.skills.includes(selectedSkill.toLowerCase())
            );
      setFilteredProjects((prevFilteredProjects) =>
        prevFilteredProjects === filtered ? prevFilteredProjects : filtered
      );
    }
  }, [data, selectedSkill]);

  return {
    data,
    filteredProjects,
    selectedSkill,
    setSelectedSkill,
    isLoading,
    error,
    allSkills,
  };
}
