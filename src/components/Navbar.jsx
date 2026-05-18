import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className="fixed w-full bg-amber-50 border-b border-amber-100 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Icon */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-200">✨</span>
            <span className="text-2xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">Ellen Fang</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={
                  link.label === 'Resume'
                    ? "px-5 py-2 bg-gradient-to-r from-orange-400 to-rose-300 text-white rounded-full font-semibold hover:shadow-md transition-all duration-200 hover:scale-105"
                    : "px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-amber-100 rounded-full transition-all duration-200 font-medium"
                }
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={
                  link.label === 'Resume'
                    ? "block w-full text-left px-4 py-3 bg-gradient-to-r from-orange-400 to-rose-300 text-white rounded-lg font-semibold transition-all duration-200"
                    : "block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-100 rounded-lg transition-colors font-medium"
                }
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
