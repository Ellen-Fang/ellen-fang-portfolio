import React from 'react'

function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Here you can find a quick overview of my background, selected projects, technical skills, and resume.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
          Scroll down to explore my work in data analysis, financial research, web development, and interactive applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          <a
            href="https://github.com/Ellen-Fang"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-slate-700 text-slate-700 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-all duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
