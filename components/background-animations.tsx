"use client"

import { useEffect, useRef, useState } from "react"

interface Sparkle {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  color: string
}

interface FloatingHeart {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
  rotSpeed: number
}

interface Petal {
  x: number
  y: number
  size: number
  speed: number
  drift: number
  opacity: number
  rotation: number
}

const pinkColors = [
  "255, 182, 193", // light pink
  "255, 105, 180", // hot pink
  "244, 143, 177", // pink
  "233, 30, 140",  // deep pink
  "240, 98, 146",  // medium pink
  "255, 192, 203", // pastel pink
]

export function BackgroundAnimations() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const sparklesRef = useRef<Sparkle[]>([])
  const heartsRef = useRef<FloatingHeart[]>([])
  const petalsRef = useRef<Petal[]>([])
  const animationFrameRef = useRef<number>()

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

    // Initialize sparkles (pink-tinted)
    const initSparkles = () => {
      sparklesRef.current = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        color: pinkColors[Math.floor(Math.random() * pinkColors.length)],
      }))
    }
    initSparkles()

    // Initialize floating hearts
    const initHearts = () => {
      heartsRef.current = Array.from({ length: 8 }, () => ({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        size: Math.random() * 12 + 6,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      }))
    }
    initHearts()

    // Initialize falling petals
    const initPetals = () => {
      petalsRef.current = Array.from({ length: 12 }, () => ({
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 0.8 + 0.3,
        drift: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        rotation: Math.random() * Math.PI * 2,
      }))
    }
    initPetals()

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)

    // Draw sparkles with pink tint
    const drawSparkles = () => {
      sparklesRef.current.forEach((sparkle) => {
        ctx.fillStyle = `rgba(${sparkle.color}, ${sparkle.opacity})`
        
        // Draw 4-point star shape
        ctx.save()
        ctx.translate(sparkle.x, sparkle.y)
        ctx.beginPath()
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2
          const outerR = sparkle.size * 2
          const innerR = sparkle.size * 0.5
          ctx.lineTo(Math.cos(angle) * outerR, Math.sin(angle) * outerR)
          const midAngle = angle + Math.PI / 4
          ctx.lineTo(Math.cos(midAngle) * innerR, Math.sin(midAngle) * innerR)
        }
        ctx.closePath()
        ctx.fill()
        ctx.restore()

        sparkle.opacity += sparkle.twinkleSpeed
        if (sparkle.opacity > 0.7 || sparkle.opacity < 0.1) {
          sparkle.twinkleSpeed *= -1
        }
      })
    }

    // Draw heart shape
    const drawHeart = (x: number, y: number, size: number, opacity: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.fillStyle = `rgba(233, 30, 140, ${opacity})`
      ctx.beginPath()
      const topCurveHeight = size * 0.3
      ctx.moveTo(0, topCurveHeight)
      // left curve
      ctx.bezierCurveTo(0, 0, -size, 0, -size, topCurveHeight)
      // bottom left
      ctx.bezierCurveTo(-size, size * 0.7, 0, size, 0, size * 1.2)
      // bottom right
      ctx.bezierCurveTo(0, size, size, size * 0.7, size, topCurveHeight)
      // right curve
      ctx.bezierCurveTo(size, 0, 0, 0, 0, topCurveHeight)
      ctx.fill()
      ctx.restore()
    }

    // Draw floating hearts
    const drawHearts = () => {
      heartsRef.current.forEach((heart) => {
        drawHeart(heart.x, heart.y, heart.size, heart.opacity, heart.rotation)
        
        heart.y -= heart.speed
        heart.x += Math.sin(heart.y * 0.01) * 0.5
        heart.rotation += heart.rotSpeed

        // Reset heart when it goes off screen
        if (heart.y < -50) {
          heart.y = canvas.height + 50
          heart.x = Math.random() * canvas.width
          heart.opacity = Math.random() * 0.3 + 0.1
        }
      })
    }

    // Draw falling petals
    const drawPetals = () => {
      petalsRef.current.forEach((petal) => {
        ctx.save()
        ctx.translate(petal.x, petal.y)
        ctx.rotate(petal.rotation)
        ctx.fillStyle = `rgba(255, 182, 193, ${petal.opacity})`
        ctx.beginPath()
        ctx.ellipse(0, 0, petal.size, petal.size * 0.6, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        petal.y += petal.speed
        petal.x += petal.drift + Math.sin(petal.y * 0.02) * 0.3
        petal.rotation += 0.01

        if (petal.y > canvas.height + 20) {
          petal.y = -20
          petal.x = Math.random() * canvas.width
        }
      })
    }

    // Animation loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawSparkles()
      drawHearts()
      drawPetals()

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [scrollY])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "multiply" }} />
}
