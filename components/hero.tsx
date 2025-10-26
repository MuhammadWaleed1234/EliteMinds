"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(8, 20, 40, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(166, 104, 255, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Elite Minds</h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            A collective of exceptional individuals from FAST pushing boundaries in technology, design, and innovation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#team"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Meet the Team
            </Link>
            <Link
              href="#gallery"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-12 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold gradient-text">5</div>
            <p className="text-foreground/60 mt-2">Exceptional Talents</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl font-bold gradient-text">∞</div>
            <p className="text-foreground/60 mt-2">Possibilities</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-4xl font-bold gradient-text">1</div>
            <p className="text-foreground/60 mt-2">Vision</p>
          </div>
        </div>
      </div>
    </section>
  )
}
