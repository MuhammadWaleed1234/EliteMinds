"use client"

import Link from "next/link"
import { useState } from "react"

const team = [
  {
    id: "muhammad-waleed",
    name: "Muhammad Waleed",
    title: "Strategic Problem Solver",
    description: "Finds the easiest paths to fulfill requirements. Folio3 Internship winner.",
    image: "/Waleed.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "armeen-fatima",
    name: "Armeen Fatima",
    title: "Business Excellence Leader",
    description: "Perfectionist who presents work like a CEO. Nestle & Devsinc experience.",
    image: "/Armeen.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "arooba-iqbal",
    name: "Arooba Iqbal",
    title: "AI/ML Specialist",
    description: "Knows when to lock in. Bold feedback and AI/ML expertise from Devsinc.",
    image: "/Arooba.jpg",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "muiz-ul-islam",
    name: "Muiz ul Islam Khan",
    title: "Peak Animator",
    description: "Pakistan's best animator. Mentor and future animation studio leader.",
    image: "/Muiz.jpg",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "amaz-ahmed",
    name: "Amaz Ahmed",
    title: "Full-Stack Developer",
    description: "Beauty with brains. MERN stack expert with international clients.",
    image: "/Amaz.jpg",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function TeamGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="team" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Meet the Team</h2>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
          Five exceptional individuals united by excellence, innovation, and a shared vision for the future
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {team.map((member, index) => (
          <Link
            key={member.id}
            href={`/profile/${member.id}`}
            className="group"
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className="relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col cursor-pointer transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{member.title}</p>
                <p className="text-foreground/70 text-sm flex-1">{member.description}</p>

                <div className="mt-4 inline-flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  View Profile
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
