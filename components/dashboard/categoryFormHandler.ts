import { FormDataTypes } from "../../hooks/useDashboardFormHandler";
import { CategoryType } from "../../types/type";

export default function prepareFormData(
  formData: FormDataTypes,
  category: CategoryType
) {
  const techStackArray =
    typeof formData.skills === "string"
      ? formData.skills.split(",").map((tech: string) => tech.trim())
      : formData.skills;

  let data = {};
  switch (category) {
    case "hero":
      data = { description: formData.description };
      break;
    case "aboutMe":
      data = { skills: techStackArray };
      break;
    case "services":
      data = { description: formData.description, title: formData.title };
      break;
    case "projects":
      data = {
        description: formData.description,
        title: formData.title,
        skills: techStackArray,
      };
      break;
    case "testimonials":
      data = {
        title: formData.title,
        name: formData.name,
        feedback: formData.feedback,
      };
      break;
    case "uploadCV":
      data = {
        title: formData.title,
        name: formData.name,
      };
    case "socialMediaPlatforms":
      data = {
        name: formData.name,
        linkUrl: formData.linkUrl,
      };
      break;
  }
  if (formData.file) {
    data = {
      ...data,
      file: formData.file,
    };
  }

  return {
    updatedFormData: data,
  };
}
