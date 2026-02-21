import { Button } from "@/components/ui/button"
import { LinkedinIcon, MailIcon, PhoneIcon } from "./simple-icons"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-5xl opacity-10 animate-float">💌</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>🌸</div>

      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="girly-gradient-text">Let&apos;s Connect</span> 💕
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 text-balance leading-relaxed">
          I&apos;m always excited about new opportunities in customer service, administrative support, 
          and productivity roles. Let&apos;s chat! ✨
        </p>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" asChild className="gap-2 min-w-[200px] rounded-full bg-primary hover:bg-primary/90 animate-pink-pulse">
            <a href="mailto:31josphinenjeri@gmail.com">
              <MailIcon className="w-5 h-5" />
              Send Email 💌
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2 min-w-[200px] bg-transparent rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <a href="https://linkedin.com/in/josphine-Wambui-wambui" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        {/* Additional Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground mb-4">
          <PhoneIcon className="w-4 h-4 text-primary" />
          <span>+254 111 510 506</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <span>📍 P.O Box 34034–00100, Nairobi, Kenya</span>
        </div>

        {/* Referees */}
        <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 girly-gradient-text">References 🌷</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="p-4 rounded-xl bg-secondary/30 border border-primary/10">
              <p className="font-semibold text-foreground">Winnie Githinji</p>
              <p className="text-sm text-muted-foreground">CCI Team Leader</p>
              <p className="text-sm text-primary mt-1">+254 742 594 052</p>
              <p className="text-sm text-primary">winnie.githinji@ccikenya.co.ke</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border border-primary/10">
              <p className="font-semibold text-foreground">Shadrack Kimani</p>
              <p className="text-sm text-muted-foreground">Senior Accountant, PCEA SACCO</p>
              <p className="text-sm text-primary mt-1">+254 719 350 880</p>
              <p className="text-sm text-primary">shadrackkimani@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-primary/20">
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://linkedin.com/in/josphine-Wambui-wambui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:31josphinenjeri@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Josephine Wambui. Made with 💖</p>
        </div>
      </div>
    </section>
  )
}
