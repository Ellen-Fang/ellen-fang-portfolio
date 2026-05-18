import React from 'react'

function Resume() {
  const backgroundPoints = [
    'Built data analysis and machine learning projects using Python, R, and statistical methods.',
    'Developed front-end and interactive projects with React, Vite, Tailwind CSS, and Unity.',
    'Conducted financial and industry research on semiconductors, AI infrastructure, and related technology sectors.'
  ]

  return (
    <section id="resume" className="py-20 px-4" style={{backgroundColor: '#FFFCF7'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center" style={{color: '#1F2A44'}}>Education & Background</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="rounded-xl p-8 shadow-md border h-full" style={{backgroundColor: '#FFFCF7', borderColor: '#E8D8C8'}}>
              <h3 className="text-2xl font-bold mb-6" style={{color: '#1F2A44'}}>Education</h3>
              <div className="pl-6 space-y-3" style={{borderLeftWidth: '4px', borderLeftColor: '#D98C5F'}}>
                <h4 className="text-lg font-semibold" style={{color: '#1F2A44'}}>Bachelor of Science in Statistics</h4>
                <p className="text-sm font-medium" style={{color: '#6B625B'}}>National Chengchi University | 2023/09 – 2027/06</p>
                <p className="leading-relaxed" style={{color: '#1F2A44'}}>
                  Focused on statistical methods, data analysis, programming, and quantitative research with applications in finance and data science.
                </p>
              </div>
            </div>
          </div>
          
          {/* Academic & Project Background */}
          <div>
            <div className="rounded-xl p-8 border shadow-sm h-full" style={{backgroundColor: '#FFF8F0', borderColor: '#E8D8C8'}}>
              <h3 className="text-2xl font-bold mb-6" style={{color: '#1F2A44'}}>Academic & Project Background</h3>
              <div className="space-y-5">
                {backgroundPoints.map((point, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full" style={{backgroundColor: '#F3D7C2'}}>
                        <span className="font-bold text-sm" style={{color: '#D98C5F'}}>✓</span>
                      </div>
                    </div>
                    <p className="leading-relaxed" style={{color: '#1F2A44'}}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Leadership Section */}
        <div className="mt-20">
          <div className="rounded-xl p-8 shadow-md border" style={{backgroundColor: '#FFFCF7', borderColor: '#E8D8C8'}}>
            <h3 className="text-2xl font-bold mb-8" style={{color: '#1F2A44'}}>💼 Experience & Leadership</h3>
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="pl-6" style={{borderLeftWidth: '4px', borderLeftColor: '#D98C5F'}}>
                <h4 className="text-lg font-semibold" style={{color: '#1F2A44'}}>Department of Statistics, NCCU — Computer Assistant</h4>
                <p className="text-sm font-medium mt-1 mb-3" style={{color: '#6B625B'}}>Sep 2024 – Present</p>
                <p className="leading-relaxed" style={{color: '#1F2A44'}}>
                  Maintained departmental hardware and software resources, supported technical needs, edited admission videos, and led student assistants through structured task coordination.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="pl-6" style={{borderLeftWidth: '4px', borderLeftColor: '#D98C5F'}}>
                <h4 className="text-lg font-semibold" style={{color: '#1F2A44'}}>NCCUPASS — Backend Developer</h4>
                <p className="text-sm font-medium mt-1 mb-3" style={{color: '#6B625B'}}>2025 – Present</p>
                <p className="leading-relaxed mb-2" style={{color: '#1F2A44'}}>
                  Maintained backend services and developed software features for a campus service platform.
                </p>
                <a href="https://nccupass.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium" style={{color: '#D98C5F'}}>
                  https://nccupass.com/ →
                </a>
              </div>

              {/* Experience Item 3 */}
              <div className="pl-6" style={{borderLeftWidth: '4px', borderLeftColor: '#D98C5F'}}>
                <h4 className="text-lg font-semibold" style={{color: '#1F2A44'}}>PyDay 2025 — Organizer</h4>
                <p className="text-sm font-medium mt-1 mb-3" style={{color: '#6B625B'}}>2025</p>
                <p className="leading-relaxed mb-2" style={{color: '#1F2A44'}}>
                  Helped organize a programming event that strengthened my interest in coding, AI, and developer communities.
                </p>
                <a href="https://www.accupass.com/event/2505150542041736392010" target="_blank" rel="noopener noreferrer" className="text-sm font-medium" style={{color: '#D98C5F'}}>
                  View Event →
                </a>
              </div>

              {/* Experience Item 4 */}
              <div className="pl-6" style={{borderLeftWidth: '4px', borderLeftColor: '#D98C5F'}}>
                <h4 className="text-lg font-semibold" style={{color: '#1F2A44'}}>NCCU MITC — Design Team Member</h4>
                <p className="text-sm font-medium mt-1 mb-3" style={{color: '#6B625B'}}>Sep 2025 – Jun 2026</p>
                <p className="leading-relaxed" style={{color: '#1F2A44'}}>
                  Created visual materials and promotional designs for club activities related to technology and programming.
                </p>
              </div>

              {/* Experience Item 5 */}
              <div className="pl-6" style={{borderLeftWidth: '4px', borderLeftColor: '#D98C5F'}}>
                <h4 className="text-lg font-semibold" style={{color: '#1F2A44'}}>NCCU Dancing Club — Popping Instructor</h4>
                <p className="text-sm font-medium mt-1 mb-3" style={{color: '#6B625B'}}></p>
                <p className="text-gray-700 leading-relaxed">
                  Taught Popping fundamentals, rhythm training, and performance practice to club members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
