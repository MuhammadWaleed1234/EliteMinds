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

// Entrepreneur Profile - Startup & Innovation Theme
function EntrepreneurProfile({ member }: ProfilePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 400

    // Network connections animation for entrepreneurship
    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = []
    for (let i = 0; i < 20; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(8, 20, 40, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw connections
        nodes.forEach((other) => {
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.3 * (1 - dist / 150)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })

        // Draw nodes
        ctx.fillStyle = "rgba(168, 85, 247, 0.6)"
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={false} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-96 opacity-40" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <div className="relative rounded-xl overflow-hidden border-2 border-purple-500/30 h-80 group">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                
                {/* Innovation Metrics */}
                <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Innovation Metrics
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/70">Global Reach</span>
                      <span className="font-bold text-purple-500">5 Countries</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/70">Collaborations</span>
                      <span className="font-bold text-purple-500">7 Universities</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/70">Awards</span>
                      <span className="font-bold text-purple-500">Folio3 Winner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-12">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2 gradient-text">{member.name}</h1>
                <p className="text-2xl text-primary font-semibold mb-4">{member.title}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">🚀 Founder Track</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs font-semibold">🌍 Global Network</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                <p className="text-lg text-foreground/90 leading-relaxed">{member.bio}</p>
              </div>

              {/* Journey Timeline */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <span className="gradient-text">Achievement Journey</span>
                </h2>
                <div className="space-y-4">
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {i + 1}
                        </div>
                        {i < member.achievements.length - 1 && (
                          <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-30 mt-2" />
                        )}
                      </div>
                      <div className="pb-8 flex-1">
                        <div className="bg-card border border-border/50 rounded-lg p-4 group-hover:border-purple-500/50 transition-colors">
                          <p className="text-foreground/90">{achievement}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Grid */}
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">Core Competencies</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {member.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-default"
                    >
                      <p className="font-semibold text-foreground">{skill}</p>
                    </div>
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

// Business Leader Profile - Executive & Corporate Theme
function BusinessLeaderProfile({ member }: ProfilePageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={false} />

      <section className="relative pt-32 pb-20 px-4">
        {/* Executive Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 flex-shrink-0">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-2 gradient-text">{member.name}</h1>
                <p className="text-2xl text-primary font-semibold mb-4">{member.title}</p>
                <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-semibold border border-blue-500/30">
                    💼 Nestle Alumni
                  </span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-semibold border border-cyan-500/30">
                    🏢 Devsinc Experience
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-semibold border border-blue-500/30">
                    ⭐ Executive Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Professional Summary */}
          <div className="bg-card border border-border/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Professional Profile
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">{member.bio}</p>
          </div>

          {/* Core Competencies - Improved Section */}
          <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold gradient-text">Core Competencies</h2>
                <p className="text-sm text-foreground/60">Executive leadership skills and expertise</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {member.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="group bg-card border border-blue-500/30 rounded-xl p-5 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-colors">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold text-foreground group-hover:text-blue-500 transition-colors">{skill}</span>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Career Highlights */}
          <div className="bg-card border border-border/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Career Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {member.achievements.map((achievement, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground/80">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Philosophy - Full Width */}
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/30 rounded-2xl p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Leadership Philosophy</h3>
              <p className="text-lg text-foreground/80 italic leading-relaxed">
                "Perfection isn't just a goal—it's a standard. Excellence in presentation and execution drives success. A true leader doesn't just manage—they inspire, elevate, and deliver results that exceed expectations."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// AI/ML Specialist Profile - Tech & Data Science Theme
function AISpecialistProfile({ member }: ProfilePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 400

    // Neural network visualization
    const layers = [
      { nodes: 4, x: 100 },
      { nodes: 6, x: canvas.width / 3 },
      { nodes: 6, x: (canvas.width * 2) / 3 },
      { nodes: 3, x: canvas.width - 100 },
    ]

    let pulse = 0

    const animate = () => {
      ctx.fillStyle = "rgba(8, 20, 40, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      pulse += 0.02

      // Draw connections
      for (let l = 0; l < layers.length - 1; l++) {
        const currentLayer = layers[l]
        const nextLayer = layers[l + 1]

        for (let i = 0; i < currentLayer.nodes; i++) {
          for (let j = 0; j < nextLayer.nodes; j++) {
            const y1 = (canvas.height / (currentLayer.nodes + 1)) * (i + 1)
            const y2 = (canvas.height / (nextLayer.nodes + 1)) * (j + 1)

            const opacity = 0.1 + Math.abs(Math.sin(pulse + i + j)) * 0.2
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(currentLayer.x, y1)
            ctx.lineTo(nextLayer.x, y2)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      layers.forEach((layer) => {
        for (let i = 0; i < layer.nodes; i++) {
          const y = (canvas.height / (layer.nodes + 1)) * (i + 1)
          const size = 3 + Math.abs(Math.sin(pulse + i)) * 2

          ctx.fillStyle = "rgba(34, 197, 94, 0.8)"
          ctx.beginPath()
          ctx.arc(layer.x, y, size, 0, Math.PI * 2)
          ctx.fill()

          ctx.strokeStyle = "rgba(34, 197, 94, 0.3)"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(layer.x, y, size + 5, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={false} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-96 opacity-30" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-xs font-mono font-bold border border-green-500/30">
                    AI/ML
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-xs font-mono font-bold border border-emerald-500/30">
                    DATA_SCIENCE
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2 gradient-text font-mono">{member.name}</h1>
                <p className="text-2xl text-primary font-semibold mb-4">{member.title}</p>
              </div>

              {/* Tech Bio */}
              <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-l-4 border-green-500 rounded-r-xl p-8">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg text-foreground/90 leading-relaxed">{member.bio}</p>
                </div>
              </div>

              {/* ML Projects/Achievements */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="gradient-text">Technical Achievements</span>
                </h2>
                <div className="space-y-4">
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="bg-card border border-green-500/20 rounded-lg p-5 hover:border-green-500/40 transition-all hover:translate-x-2">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 font-mono text-white text-sm">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground/90 font-mono text-sm">{achievement}</p>
                        </div>
                        <svg className="w-5 h-5 text-green-500/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">Technical Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {member.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4 hover:border-green-500 transition-all cursor-default"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse" />
                        <p className="font-mono text-sm font-semibold text-foreground">{skill}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-32 space-y-6">
                <div className="relative rounded-xl overflow-hidden border-2 border-green-500/30 h-80 group">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
                    ACTIVE
                  </div>
                </div>

                {/* Code Block Style Info */}
                <div className="bg-card border border-green-500/30 rounded-xl overflow-hidden font-mono text-sm">
                  <div className="bg-green-500/20 px-4 py-2 border-b border-green-500/30 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-foreground/70">profile.json</span>
                  </div>
                  <div className="p-4 space-y-1 text-xs">
                    <div><span className="text-green-500">"name"</span>: <span className="text-yellow-400">"{member.name}"</span>,</div>
                    <div><span className="text-green-500">"role"</span>: <span className="text-yellow-400">"AI/ML Specialist"</span>,</div>
                    <div><span className="text-green-500">"company"</span>: <span className="text-yellow-400">"Devsinc"</span>,</div>
                    <div><span className="text-green-500">"status"</span>: <span className="text-yellow-400">"Crushing It"</span></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 font-mono">$ ./philosophy.sh</h3>
                  <p className="text-sm text-foreground/70 font-mono">
                    "Lock in when it matters. Provide bold, straightforward feedback. Master the art of knowing when effort counts."
                  </p>
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

// Animator Profile - Creative & Visual Theme
function AnimatorProfile({ member }: ProfilePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 400

    // Animated brush strokes
    const strokes: Array<{
      x: number
      y: number
      length: number
      angle: number
      speed: number
      color: string
      alpha: number
    }> = []

    for (let i = 0; i < 15; i++) {
      strokes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        color: ["#f97316", "#ef4444", "#fbbf24"][Math.floor(Math.random() * 3)],
        alpha: Math.random() * 0.3 + 0.1,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(8, 20, 40, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      strokes.forEach((stroke) => {
        stroke.angle += stroke.speed
        const x2 = stroke.x + Math.cos(stroke.angle) * stroke.length
        const y2 = stroke.y + Math.sin(stroke.angle) * stroke.length

        ctx.strokeStyle = stroke.color + Math.floor(stroke.alpha * 255).toString(16).padStart(2, "0")
        ctx.lineWidth = 3
        ctx.lineCap = "round"
        ctx.beginPath()
        ctx.moveTo(stroke.x, stroke.y)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        stroke.x += Math.cos(stroke.angle) * 0.3
        stroke.y += Math.sin(stroke.angle) * 0.3

        if (stroke.x < 0 || stroke.x > canvas.width) stroke.x = Math.random() * canvas.width
        if (stroke.y < 0 || stroke.y > canvas.height) stroke.y = Math.random() * canvas.height
      })

      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={false} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-96 opacity-40" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <div className="flex justify-center gap-2 mb-4">
              <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-bold">🎨 Master Animator</span>
              <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">🇵🇰 Pakistan's Best</span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold">✨ Creative Director</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 gradient-text">{member.name}</h1>
            <p className="text-3xl text-primary font-semibold mb-6">{member.title}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden border-4 border-orange-500/30 h-96 group">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-xl">Peak Performance Artist</p>
                <p className="text-white/80 text-sm">Animating the future, one frame at a time</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 via-red-500/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-8 flex items-center">
              <p className="text-xl text-foreground/90 leading-relaxed">{member.bio}</p>
            </div>
          </div>

          {/* Creative Portfolio Grid */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Creative Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {member.achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="group bg-card border border-border/50 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:scale-105 cursor-default"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold group-hover:rotate-12 transition-transform">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/90 text-lg">{achievement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Showcase */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Creative Arsenal</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {member.skills.map((skill, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/30 rounded-xl p-6 text-center hover:border-orange-500 transition-all hover:scale-110 cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/20 group-hover:from-orange-500/20 group-hover:to-red-500/40 transition-all" />
                  <p className="relative z-10 font-bold text-lg text-foreground">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mt-12 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-yellow-500/10 border-l-4 border-orange-500 rounded-r-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-bold">Future Vision</h3>
            </div>
            <p className="text-lg text-foreground/80 italic">
              "Destined to lead Pakistan's animation industry with a studio that will redefine creative excellence and mentor the next generation of artists."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Full-Stack Developer Profile - Tech & Code Theme
function DeveloperProfile({ member }: ProfilePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 400

    // Matrix-style code rain
    const chars = "MERN{}</>[]();01"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const animate = () => {
      ctx.fillStyle = "rgba(8, 20, 40, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#6366f1"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={false} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-96 opacity-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="flex items-center gap-2 mb-4 font-mono text-sm">
                  <span className="text-indigo-500">const</span>
                  <span className="text-purple-400">developer</span>
                  <span className="text-foreground/60">=</span>
                  <span className="text-yellow-400">{`{`}</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2 gradient-text ml-8">{member.name}</h1>
                <p className="text-2xl text-primary font-semibold mb-4 ml-8">{member.title}</p>
                <div className="flex gap-2 flex-wrap ml-8">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-md text-xs font-mono font-bold border border-indigo-500/30">
                    MERN
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-md text-xs font-mono font-bold border border-purple-500/30">
                    FULL_STACK
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs font-mono font-bold border border-blue-500/30">
                    INTL_EXPERT
                  </span>
                </div>
                <div className="font-mono text-sm text-yellow-400 mt-2">{`}`}</div>
              </div>

              {/* Code-Style Bio */}
              <div className="bg-card border border-indigo-500/30 rounded-xl overflow-hidden">
                <div className="bg-indigo-500/20 px-4 py-2 border-b border-indigo-500/30 flex items-center gap-2 font-mono text-xs">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-foreground/70">about.tsx</span>
                  <div className="ml-auto flex gap-4">
                    <span className="text-indigo-400">TypeScript</span>
                    <span className="text-foreground/50">React</span>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <div><span className="text-purple-400">export</span> <span className="text-indigo-400">const</span> <span className="text-yellow-300">about</span> <span className="text-foreground/60">=</span> {`{`}</div>
                  <div className="ml-4 text-foreground/80">{member.bio}</div>
                  <div>{`}`}</div>
                </div>
              </div>

              {/* Project Timeline */}
              <div>
                <h2 className="text-3xl font-bold mb-6 font-mono flex items-center gap-3">
                  <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="gradient-text">Project Milestones</span>
                </h2>
                <div className="space-y-4">
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="group bg-card border border-indigo-500/20 rounded-lg p-5 hover:border-indigo-500/50 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg p-3 flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground/90">{achievement}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Grid */}
              <div>
                <h2 className="text-3xl font-bold mb-6 font-mono gradient-text">Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {member.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="group bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-lg p-4 hover:border-indigo-500 hover:scale-105 transition-all cursor-default"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:animate-pulse" />
                        <p className="font-mono text-sm font-semibold text-foreground">{skill}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-32 space-y-6">
                <div className="relative rounded-xl overflow-hidden border-2 border-indigo-500/30 h-80 group">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
                    ONLINE
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-xs font-mono">
                    🏋️ Gym + Code
                  </div>
                </div>

                {/* Status Card */}
                <div className="bg-card border border-indigo-500/30 rounded-xl overflow-hidden">
                  <div className="bg-indigo-500/20 px-4 py-2 border-b border-indigo-500/30 font-mono text-xs text-foreground/70">
                    developer_stats.json
                  </div>
                  <div className="p-4 space-y-3 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-indigo-400">experience:</span>
                      <span className="text-yellow-400">"Analyzinn + International"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-400">clients:</span>
                      <span className="text-yellow-400">"US-based"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-400">stack:</span>
                      <span className="text-yellow-400">"MERN"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-400">vibe:</span>
                      <span className="text-yellow-400">"Chill bro energy"</span>
                    </div>
                  </div>
                </div>

                {/* Philosophy */}
                <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 font-mono flex items-center gap-2">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Philosophy
                  </h3>
                  <p className="text-sm text-foreground/70 font-mono">
                    "Balance is key. Code with excellence, collaborate with ease, and bring positive energy to every project."
                  </p>
                </div>

                {/* Collaboration Badge */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white text-center">
                  <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold mb-2">International Collaborator</h3>
                  <p className="text-sm text-white/80">Proven track record with US clients & global teams</p>
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

// Main Profile Router Component
export default function ProfilePage({ member }: ProfilePageProps) {
  switch (member.id) {
    case "muhammad-waleed":
      return <EntrepreneurProfile member={member} />
    case "armeen-fatima":
      return <BusinessLeaderProfile member={member} />
    case "arooba-iqbal":
      return <AISpecialistProfile member={member} />
    case "muiz-ul-islam":
      return <AnimatorProfile member={member} />
    case "amaz-ahmed":
      return <DeveloperProfile member={member} />
    default:
      return <EntrepreneurProfile member={member} />
  }
}
