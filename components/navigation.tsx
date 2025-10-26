"use client"

import Link from "next/link"
import { useState } from "react"

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-text">
            FASTians
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#team" className="text-foreground/80 hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="#gallery" className="text-foreground/80 hover:text-primary transition-colors">
              Gallery
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-foreground/80 hover:text-primary transition-colors py-2">
              Home
            </Link>
            <Link href="#team" className="block text-foreground/80 hover:text-primary transition-colors py-2">
              Team
            </Link>
            <Link href="#gallery" className="block text-foreground/80 hover:text-primary transition-colors py-2">
              Gallery
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
