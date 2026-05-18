import React from 'react'

function Hero() {
  return (
    <section className="hero-section px-4" style={{backgroundColor: '#FFF8F0'}}>
      <div className="hero-content max-w-3xl mx-auto text-center">
        <p className="text-lg mb-3 leading-relaxed font-medium" style={{color: '#1F2A44'}}>
          Statistics student building data-driven applications, financial research projects, and interactive web experiences.
        </p>
        <p className="hero-paragraph" style={{color: '#6B625B'}}>
          I combine statistics, financial research, backend development, and front-end implementation to build practical projects—from machine learning stock prediction tools to research-driven case studies and interactive applications.
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
