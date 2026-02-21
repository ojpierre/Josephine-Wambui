import { LinkedinIcon, MailIcon, PhoneIcon } from "./simple-icons"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SkillsShowcase } from "./skills-showcase"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">🌺</div>
      <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>🌸</div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Text Content - 60% */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Me <span className="text-primary">💕</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p className="text-pretty">
                I&apos;m a Customer Service Representative with solid experience in client communication and 
                administrative support. I&apos;m skilled in managing customer inquiries, multitasking, and using 
                Microsoft Office tools effectively. ✨
              </p>
              <p className="text-pretty">
                Currently completing my Bachelor&apos;s degree in Mathematics and Computer Science at Kenyatta University, 
                I bring strong analytical and problem-solving skills to every challenge. I&apos;m also certified in 
                AI Career Essentials, staying current with emerging tech trends.
              </p>
              <p className="text-pretty">
                With experience at CCI Kenya and Prialto, I bring CRM expertise, data entry accuracy, and 
                excellent time management to contribute effectively to business operations and virtual support 
                roles. I&apos;m enthusiastic about growing in fast-paced environments! 🌷
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="outline" size="lg" asChild className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <a
                  href="https://linkedin.com/in/josphine-Wambui-wambui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <a href="mailto:31josphinenjeri@gmail.com" className="gap-2">
                  <MailIcon className="w-5 h-5" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <a href="tel:+254111510506" className="gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  Call Me
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image - 40% */}
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl pink-glow">
              <Image
                src="/images/profile.jpg"
                alt="Josephine Wambui - Professional portrait"
                fill
                className="object-cover rounded-md"
                priority
              />
              {/* Pink overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-md" />
            </div>
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="mt-20 space-y-16">
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 pink-glow">
            <SkillsShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
