import { ProfileSection } from "@/components/shared/ProfileSection";
import { AboutSection } from "@/components/shared/AboutSection";
import { ExperienceSection } from "@/components/shared/ExperienceSection";
import { ProjectsSection } from "@/components/shared/ProjectsSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
