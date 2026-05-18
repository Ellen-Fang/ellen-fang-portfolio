import React from 'react'

function Hero() {
  return (
    <section className="hero-section px-4" style={{backgroundColor: '#FFF8F0'}}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-3 leading-relaxed font-medium" style={{color: '#1F2A44'}}>
          A quick overview of my background, projects, technical skills, and resume.
        </p>
        <p className="hero-paragraph" style={{color: '#6B625B'}}>
          Scroll down to explore my work in statistics, data analysis, web development, and interactive projects, along with selected case studies and practical tools I have built along the way.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            style={{backgroundColor: '#D98C5F'}}
          >
            View Projects
          </a>
          <a
            href="https://github.com/Ellen-Fang"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 rounded-lg font-semibold transition-all duration-200"
            style={{borderColor: '#D98C5F', color: '#D98C5F', backgroundColor: 'transparent'}}
            onMouseEnter={(e) => {e.target.style.backgroundColor = '#F3D7C2'}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'}}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
