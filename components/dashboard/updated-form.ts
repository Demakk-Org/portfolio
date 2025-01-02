import { FormDataTypes } from "../../hooks/useFormHandler";
import { CategoryType } from "../../types/type";

export default function prepareFormData(
  formData: FormDataTypes,
  category: CategoryType
) {
  const techStackArray = formData.techStack
    ? formData.techStack
        .split(",")
        .map((tech: string) => tech.trim().toLowerCase())
    : [];

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
