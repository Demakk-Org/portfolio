import { Timestamp } from "firebase/firestore";

export interface DataItem {
  createdAt: Timestamp;
  id: string;
  name?: string;
  title?: string;
  description?: string;
  feedback?: string;
  techStack?: string;
  file?: File | null;
  imageUrl?: string;
  skills?: string[];
  cvUrl?: string;
  linkUrl?: string;
}

export enum CategoryType {
  hero = "hero",
  aboutMe = "aboutMe",
  services = "services",
  projects = "projects",
  testimonials = "testimonials",
  contact = "contact",
  uploadCV = "uploadCV",
  socialMediaPlatforms = "socialMediaPlatforms",
}
