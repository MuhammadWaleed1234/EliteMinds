"use client"

import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    title: "Team Collaboration",
    image: "/team-working-together.jpg",
  },
  {
    id: 2,
    title: "Innovation Workshop",
    image: "/tech-workshop.jpg",
  },
  {
    id: 3,
    title: "Project Showcase",
    image: "/project-presentation.jpg",
  },
  {
    id: 4,
    title: "Creative Session",
    image: "/creative-brainstorm.jpg",
  },
  {
    id: 5,
    title: "Development Sprint",
    image: "/coding-session.jpg",
  },
  {
    id: 6,
    title: "Design Review",
    image: "/design-review.jpg",
  },
]

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Gallery</h2>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
          Moments of excellence, collaboration, and innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl cursor-pointer h-64 md:h-80"
            onClick={() => setSelectedId(item.id)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedId && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedId(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={galleryImages.find((img) => img.id === selectedId)?.image || "/placeholder.svg"}
              alt="Gallery"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
