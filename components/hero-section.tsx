"use client"

import { useEffect, useState } from "react"
import { ChevronDownIcon } from "./simple-icons"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl animate-float opacity-30">🌸</div>
        <div className="absolute top-40 right-20 text-3xl animate-float opacity-20" style={{ animationDelay: '1s' }}>💖</div>
        <div className="absolute bottom-40 left-1/4 text-2xl animate-float opacity-25" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute top-1/3 right-1/4 text-3xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}>🦋</div>
        <div className="absolute bottom-60 right-10 text-2xl animate-float opacity-30" style={{ animationDelay: '1.5s' }}>🌷</div>
        <div className="absolute top-60 left-1/3 text-xl animate-float opacity-20" style={{ animationDelay: '3s' }}>💫</div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-primary font-medium mb-4 tracking-wider" style={{ fontFamily: 'var(--font-dancing), cursive' }}>
            ✨ Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
            <span className="girly-gradient-text">Josephine Wambui</span>
            <br />
            <span className="text-primary text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-dancing), cursive' }}>
              Customer Service & Admin Professional
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance leading-relaxed">
            Skilled in client communication, CRM management, and administrative support — 
            bringing analytical thinking and warm professionalism to every interaction 💕
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-all duration-300 animate-pink-pulse shadow-lg"
            >
              Get in Touch 💌
            </a>
            <a
              href="#about"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Learn More ✨
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll to about section"
      >
        <ChevronDownIcon className="w-8 h-8 text-primary" />
      </a>
    </section>
  )
}
