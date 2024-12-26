export const formFields: { [key: string]: any[] } = {
  services: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "imageUrl", label: "Image URL", type: "text" },
  ],
  projects: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "techStack", label: "Tech Stack", type: "text" },
    { name: "imageUrl", label: "Image URL", type: "text" },
  ],
  testimonials: [
    { name: "name", label: "Name", type: "text" },
    { name: "title", label: "Title", type: "text" },
    { name: "feedback", label: "Feedback", type: "textarea" },
    { name: "imageUrl", label: "Image URL", type: "text" },
  ],
  hero: [
    { name: "description", label: "Description", type: "textarea" },
    { name: "imageUrl", label: "Image URL", type: "text" },
  ],
  aboutMe: [
    { name: "skills", label: "Skills (comma-separated)", type: "text" },
    { name: "imageUrl", label: "Image URL", type: "text" },
  ],
  uploadCV: [{ name: "cvUrl", label: "CV URL", type: "text" }],
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
