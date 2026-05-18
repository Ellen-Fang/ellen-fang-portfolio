import React from 'react'

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Ellen Fang
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
          Statistics Student | Data Analysis | Financial Research | Web Development
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
            className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
