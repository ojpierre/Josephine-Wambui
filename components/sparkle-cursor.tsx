"use client"

import { useEffect, useRef } from "react"

interface SparkleTrail {
  x: number
  y: number
  size: number
  opacity: number
  color: string
  vx: number
  vy: number
  life: number
}

export function SparkleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailsRef = useRef<SparkleTrail[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const colors = [
      "#e91e8c",
      "#f48fb1",
      "#ff69b4",
      "#ffb6c1",
      "#ffc0cb",
      "#fff",
    ]

    let lastSpawnTime = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      const now = Date.now()
      if (now - lastSpawnTime < 30) return
      lastSpawnTime = now

      // Spawn sparkles at cursor
      for (let i = 0; i < 3; i++) {
        trailsRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          size: Math.random() * 4 + 2,
          opacity: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          life: 1,
        })
      }

      // Limit array size
      if (trailsRef.current.length > 60) {
        trailsRef.current = trailsRef.current.slice(-60)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    const drawSparkle = (x: number, y: number, size: number, color: string, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.fillStyle = color
      ctx.globalAlpha = opacity

      // Draw 4-point sparkle star
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2
        const outerR = size
        const innerR = size * 0.3
        ctx.lineTo(Math.cos(angle) * outerR, Math.sin(angle) * outerR)
        const midAngle = angle + Math.PI / 4
        ctx.lineTo(Math.cos(midAngle) * innerR, Math.sin(midAngle) * innerR)
      }
      ctx.closePath()
      ctx.fill()

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trailsRef.current = trailsRef.current.filter((trail) => {
        trail.x += trail.vx
        trail.y += trail.vy
        trail.vy += 0.02 // slight gravity
        trail.life -= 0.02
        trail.opacity = trail.life
        trail.size *= 0.98

        if (trail.life <= 0) return false

        drawSparkle(trail.x, trail.y, trail.size, trail.color, trail.opacity)
        return true
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "normal" }}
    />
  )
}
