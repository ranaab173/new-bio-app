import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { BlogSection } from "@/components/blog-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
    </main>
  )
}
