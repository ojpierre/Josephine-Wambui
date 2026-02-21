"use client"

import { useEffect, useState } from "react"
import { useSound } from "@/hooks/use-sound"

const skillCategories = [
  {
    name: "Communication",
    emoji: "💬",
    color: "#e91e8c",
    description: "Verbal & written communication excellence",
    skills: ["Verbal Communication", "Written Communication", "Client Relations", "Customer Service"],
  },
  {
    name: "Microsoft Office",
    emoji: "📊",
    color: "#f06292",
    description: "Data entry, analysis & reporting",
    skills: ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Data Entry", "Reporting"],
  },
  {
    name: "CRM & Support",
    emoji: "🎯",
    color: "#f48fb1",
    description: "Customer interaction management",
    skills: ["CRM Software", "Customer Interaction", "Phone Support", "Email Support"],
  },
  {
    name: "Organization",
    emoji: "📋",
    color: "#ec407a",
    description: "Time management & scheduling",
    skills: ["Time Management", "Multitasking", "Scheduling", "Calendar Management"],
  },
  {
    name: "Problem Solving",
    emoji: "🧩",
    color: "#ad1457",
    description: "Analytical & quick learning",
    skills: ["Analytical Thinking", "Troubleshooting", "Quick Learning", "Adaptability"],
  },
  {
    name: "Admin Support",
    emoji: "✨",
    color: "#c2185b",
    description: "Email & data management",
    skills: ["Email Management", "Data Entry Accuracy", "Documentation", "Financial Operations"],
  },
]

export function SkillsShowcase() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const { playSound } = useSound()

  useEffect(() => {
    // Stagger animation on mount
    skillCategories.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index])
      }, index * 150)
    })
  }, [])

  return (
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center girly-gradient-text">What I Bring to the Table ✨</h3>
      <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
        A unique blend of communication, analytical, and organizational skills that make me a valuable team member.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.name}
            className={`skill-card relative group cursor-pointer transition-all duration-500 ${
              visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            onMouseEnter={() => playSound("hover", 0.2)}
          >
            <div
              className="relative p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm 
                         hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                         flex flex-col h-full min-h-[220px]"
              style={{
                borderColor: category.color + "40",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    textShadow: `0 0 20px ${category.color}80`,
                  }}
                >
                  {category.emoji}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${category.color}40 0%, transparent 70%)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
