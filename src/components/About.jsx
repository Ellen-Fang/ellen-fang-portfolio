import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-64 md:h-80"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a Statistics student passionate about turning data into insights and insights into impact. My journey spans across data analysis, financial research, and web development.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in statistical methods and quantitative analysis, I'm fascinated by how technology can solve real-world problems. I combine analytical rigor with practical implementation skills.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📊</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Data Analysis & Research</h3>
                  <p className="text-gray-600">Statistical analysis, financial research, and data-driven insights</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">💻</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Web Development</h3>
                  <p className="text-gray-600">Building interactive and responsive web applications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🎮</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Creative Projects</h3>
                  <p className="text-gray-600">Game development and interactive experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
