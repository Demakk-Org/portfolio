import Hero from "../components/hero/Hero";
import ContactSection from "../components/contact-section/contact";
import AboutMe from "../components/about-me/about";
import ServiceSection from "../components/services/service-section";
import ProjectSection from "../components/projects/project-section";
import TestimonialsSection from "../components/testimonials/testimonial-section";
import Navbar from "../components/navigation/navbar";
import FooterSection from "../components/footer-section/footer";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-grow desktop:pt-[30px] ">
        <Navbar />
        <Hero />
        <AboutMe />
        <ServiceSection />
        <ProjectSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
