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
    <section id="about" className="py-20 px-4" style={{backgroundColor: '#FFF8F0'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center" style={{color: '#1F2A44'}}>About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img 
              src="/profile.jpg" 
              alt="Ellen Fang" 
              className="rounded-2xl w-full h-auto object-contain shadow-lg"
            />
            <p className="leading-relaxed" style={{color: '#1F2A44'}}>
              I'm a statistics student interested in turning data into practical insights. My work spans data analysis, financial research, web development, and interactive projects, with a focus on building tools that connect analytical thinking with real-world use cases.
            </p>
            <p className="leading-relaxed" style={{color: '#1F2A44'}}>
              Beyond coursework, I have gained hands-on experience in system maintenance, backend development, event organization, and team coordination. These experiences shaped my interest in using programming and AI not only for analysis, but also for creating products and services that solve concrete problems.
            </p>
            <p className="leading-relaxed" style={{color: '#6B625B'}}>
              I enjoy working across both technical and creative fields, from statistical modeling and web systems to game development and visual design.
            </p>
          </div>
          
          <div className="space-y-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-lg p-5 border shadow-sm hover:shadow-md transition-all"
                style={{backgroundColor: '#FFFCF7', borderColor: '#E8D8C8', hover: {borderColor: '#D98C5F'}}}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold" style={{color: '#1F2A44'}}>{item.title}</h3>
                </div>
                <p className="ml-11 font-medium text-sm" style={{color: '#1F2A44'}}>{item.content}</p>
                {item.description && (
                  <p className="ml-11 text-sm leading-relaxed mt-2" style={{color: '#6B625B'}}>{item.description}</p>
                )}
              </div>
            ))}
            
            {/* Experience & Leadership Block */}
            <div className="rounded-lg p-5 border shadow-sm" style={{backgroundColor: '#FFFCF7', borderColor: '#E8D8C8'}}>
              <h3 className="font-bold mb-4 flex items-center space-x-2 text-sm" style={{color: '#1F2A44'}}>
                <span>💼</span>
                <span>Experience & Leadership</span>
              </h3>
              
              <div className="space-y-4">
                {/* Experience Item 1 */}
                <div className="pl-3" style={{borderLeftWidth: '3px', borderLeftColor: '#D98C5F'}}>
                  <h4 className="font-semibold text-xs" style={{color: '#1F2A44'}}>Department of Statistics, NCCU — Computer Assistant</h4>
                  <p className="text-xs mt-0.5 mb-1" style={{color: '#6B625B'}}>Sep 2024 – Present</p>
                  <p className="text-xs leading-relaxed" style={{color: '#1F2A44'}}>
                    System maintenance, technical support, admission video editing, and team coordination.
                  </p>
                </div>

                {/* Experience Item 2 */}
                <div className="pl-3" style={{borderLeftWidth: '3px', borderLeftColor: '#D98C5F'}}>
                  <h4 className="font-semibold text-xs" style={{color: '#1F2A44'}}>NCCUPASS — Backend Developer</h4>
                  <p className="text-xs mt-0.5 mb-1" style={{color: '#6B625B'}}>2025 – Present</p>
                  <p className="text-xs leading-relaxed mb-1" style={{color: '#1F2A44'}}>
                    Backend maintenance and feature development for a campus service platform.
                  </p>
                  <a href="https://nccupass.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium" style={{color: '#D98C5F'}}>
                    nccupass.com →
                  </a>
                </div>

                {/* Experience Item 3 */}
                <div className="pl-3" style={{borderLeftWidth: '3px', borderLeftColor: '#D98C5F'}}>
                  <h4 className="font-semibold text-xs" style={{color: '#1F2A44'}}>PyDay 2025 — Organizer</h4>
                  <p className="text-xs mt-0.5 mb-1" style={{color: '#6B625B'}}>2025</p>
                  <p className="text-xs leading-relaxed mb-1" style={{color: '#1F2A44'}}>
                    Helped organize a programming event and strengthened my interest in coding and AI.
                  </p>
                  <a href="https://www.accupass.com/event/2505150542041736392010" target="_blank" rel="noopener noreferrer" className="text-xs font-medium" style={{color: '#D98C5F'}}>
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
