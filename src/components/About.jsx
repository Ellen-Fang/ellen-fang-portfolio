import React from 'react'

function About() {
  const highlights = [
    {
      title: 'Education',
      content: 'Statistics, National Chengchi University',
      description: 'Building a foundation in statistical modeling, data analysis, and quantitative reasoning.',
      icon: '🎓'
    },
    {
      title: 'Current Focus',
      content: 'Data Analysis & Web Development',
      description: 'Currently exploring backend development, AI applications, and practical data-driven projects.',
      icon: '🎯'
    },
    {
      title: 'Interests',
      content: 'Game Development, Machine Learning, Financial Research',
      description: 'Interested in combining analytical methods with interactive and user-centered applications.',
      icon: '💡'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img 
              src="/profile.jpg" 
              alt="Ellen Fang" 
              className="rounded-2xl w-full h-auto object-contain shadow-lg"
            />
            <p className="text-gray-700 leading-relaxed">
              I'm a statistics student interested in turning data into practical insights. My work spans data analysis, financial research, web development, and interactive projects, with a focus on building tools that connect analytical thinking with real-world use cases.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond coursework, I have gained hands-on experience in system maintenance, backend development, event organization, and team coordination. These experiences shaped my interest in using programming and AI not only for analysis, but also for creating products and services that solve concrete problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I enjoy working across both technical and creative fields, from statistical modeling and web systems to game development and visual design.
            </p>
          </div>
          
          <div className="space-y-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 ml-11 font-medium text-sm">{item.content}</p>
                {item.description && (
                  <p className="text-gray-600 ml-11 text-sm leading-relaxed mt-2">{item.description}</p>
                )}
              </div>
            ))}
            
            {/* Experience & Leadership Block */}
            <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2 text-sm">
                <span>💼</span>
                <span>Experience & Leadership</span>
              </h3>
              
              <div className="space-y-4">
                {/* Experience Item 1 */}
                <div className="border-l-3 border-blue-500 pl-3">
                  <h4 className="font-semibold text-gray-900 text-xs">Department of Statistics, NCCU — Computer Assistant</h4>
                  <p className="text-gray-500 text-xs mt-0.5 mb-1">Sep 2024 – Present</p>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    System maintenance, technical support, admission video editing, and team coordination.
                  </p>
                </div>

                {/* Experience Item 2 */}
                <div className="border-l-3 border-blue-500 pl-3">
                  <h4 className="font-semibold text-gray-900 text-xs">NCCUPASS — Backend Developer</h4>
                  <p className="text-gray-500 text-xs mt-0.5 mb-1">2025 – Present</p>
                  <p className="text-gray-700 text-xs leading-relaxed mb-1">
                    Backend maintenance and feature development for a campus service platform.
                  </p>
                  <a href="https://nccupass.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                    nccupass.com →
                  </a>
                </div>

                {/* Experience Item 3 */}
                <div className="border-l-3 border-blue-500 pl-3">
                  <h4 className="font-semibold text-gray-900 text-xs">PyDay 2025 — Organizer</h4>
                  <p className="text-gray-500 text-xs mt-0.5 mb-1">2025</p>
                  <p className="text-gray-700 text-xs leading-relaxed mb-1">
                    Helped organize a programming event and strengthened my interest in coding and AI.
                  </p>
                  <a href="https://www.accupass.com/event/2505150542041736392010" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                    View Event →
                  </a>
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
