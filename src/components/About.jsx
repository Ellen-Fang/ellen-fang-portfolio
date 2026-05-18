import React from 'react'

function About() {
  const highlights = [
    {
      title: 'Education',
      content: 'Statistics',
      icon: '🎓'
    },
    {
      title: 'Current Focus',
      content: 'Data Analysis & Web Development',
      icon: '🎯'
    },
    {
      title: 'Interests',
      content: 'Game Development, Data Analysis, Machine Learning',
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
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a statistics student passionate about turning data into insights and insights into impact. My work spans data analysis, financial research, web development, and interactive projects.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I combine statistical rigor with practical implementation skills, and I'm fascinated by how technology can solve real-world problems.
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
                <p className="text-gray-700 ml-11">{item.content}</p>
              </div>
            ))}
            
            {/* Experience & Leadership Block */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center space-x-2">
                <span>💼</span>
                <span>Experience & Leadership</span>
              </h3>
              
              <div className="space-y-6">
                {/* Experience Item 1 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 text-sm">Department of Statistics, NCCU</h4>
                  <p className="text-gray-500 text-xs font-medium mt-0.5 mb-2">Computer Assistant • Sep 2024 – Present</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Maintained departmental hardware/software resources, supported technical needs, edited admission videos, and coordinated student assistants.
                  </p>
                </div>

                {/* Experience Item 2 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 text-sm">NCCUPASS — Backend Developer</h4>
                  <p className="text-gray-500 text-xs font-medium mt-0.5 mb-2">2025 – Present</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    Maintained backend services and developed software features for a campus service platform.
                  </p>
                  <a href="https://nccupass.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                    nccupass.com →
                  </a>
                </div>

                {/* Experience Item 3 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 text-sm">PyDay 2025 — Organizer</h4>
                  <p className="text-gray-500 text-xs font-medium mt-0.5 mb-2">2025</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    Helped organize a programming event that strengthened my interest in coding, AI, and developer communities.
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
