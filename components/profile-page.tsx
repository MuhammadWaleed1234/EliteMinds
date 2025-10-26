"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Navigation from "./navigation"
import Footer from "./footer"

interface ProfilePageProps {
  member: {
    id: string
    name: string
    title: string
    bio: string
    achievements: string[]
    skills: string[]
    image: string
    color: string
  }
}

export default function ProfilePage({ member }: ProfilePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isScrolled = false

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 400

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }> = []

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(8, 20, 40, 0.05)"
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
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-96 opacity-40" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="sticky top-32">
                <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 mb-6 h-80">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`} />
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-5xl md:text-6xl font-bold mb-2 gradient-text">{member.name}</h1>
              <p className="text-2xl text-primary font-semibold mb-8">{member.title}</p>

              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">{member.bio}</p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
                <div className="flex flex-wrap gap-3">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30 hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
