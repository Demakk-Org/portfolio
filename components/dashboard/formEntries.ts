type FormFieldConfig = {
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  pattern?: RegExp;
  defaultValue?: string | number;
};

type FormFieldType = {
  name: string;
  label: string;
  type: "text" | "textarea" | "number" | "date" | "email" | "file";
  config?: FormFieldConfig;
};

export const formFields: { [key: string]: FormFieldType[] } = {
  services: [
    {
      name: "title",
      label: "Title",
      type: "text",
      // config: { required: true, placeholder: "Enter title" },
    },
    { name: "description", label: "Description", type: "textarea" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  projects: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "skills", label: "Skills (comma-separated)", type: "text" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  testimonials: [
    { name: "name", label: "Name", type: "text" },
    { name: "title", label: "Title", type: "text" },
    { name: "feedback", label: "Feedback", type: "textarea" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  hero: [
    { name: "description", label: "Description", type: "textarea" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  aboutMe: [
    { name: "skills", label: "Skills (comma-separated)", type: "text" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  uploadCV: [{ name: "cvUrl", label: "CV URL", type: "file" }],
};

export const tableHeaders: { [key: string]: string[] } = {
  services: ["Title", "Description", "Image", "Created At", "Actions"],
  projects: [
    "Title",
    "Description",
    "Tech Stack",
    "Image",
    "Created At",
    "Actions",
  ],
  testimonials: ["Name", "Title", "Feedback", "Image", "Created At", "Actions"],
  hero: ["Description", "Image", "Created At", "Actions"],
  aboutMe: ["skills", "Image", "Created At", "Actions"],
  uploadCV: ["CV URL", "Created At", "Actions"],
};
