import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { TimelineSection } from "@/components/timeline-section"
import { ContactSection } from "@/components/contact-section"
import { BackgroundAnimations } from "@/components/background-animations"
import { SparkleCursor } from "@/components/sparkle-cursor"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundAnimations />
      <SparkleCursor />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ContactSection />
      </div>
    </main>
  )
}
