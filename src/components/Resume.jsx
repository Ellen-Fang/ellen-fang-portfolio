import React from 'react'

function Resume() {
  const backgroundPoints = [
    'Built data analysis and machine learning projects using Python, R, and statistical methods.',
    'Developed front-end and interactive projects with React, Vite, Tailwind CSS, and Unity.',
    'Conducted financial and industry research on semiconductors, AI infrastructure, and related technology sectors.'
  ]

  return (
    <section id="resume" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Education & Background</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="border-l-4 border-blue-600 pl-6 space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Bachelor of Science in Statistics</h4>
                <p className="text-gray-600 text-sm font-medium">National Chengchi University | 2023/09 – 2027/06</p>
                <p className="text-gray-700 leading-relaxed">
                  Focused on statistical methods, data analysis, programming, and quantitative research with applications in finance and data science.
                </p>
              </div>
            </div>
          </div>
          
          {/* Academic & Project Background */}
          <div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic & Project Background</h3>
              <div className="space-y-5">
                {backgroundPoints.map((point, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100">
                        <span className="text-emerald-600 font-bold text-sm">✓</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Leadership Section */}
        <div className="mt-20">
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">💼 Experience & Leadership</h3>
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Department of Statistics, NCCU — Computer Assistant</h4>
                <p className="text-gray-500 text-sm font-medium mt-1 mb-3">Sep 2024 – Present</p>
                <p className="text-gray-700 leading-relaxed">
                  Maintained departmental hardware and software resources, supported technical needs, edited admission videos, and led student assistants through structured task coordination.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">NCCUPASS — Backend Developer</h4>
                <p className="text-gray-500 text-sm font-medium mt-1 mb-3">2025 – Present</p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Maintained backend services and developed software features for a campus service platform.
                </p>
                <a href="https://nccupass.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  https://nccupass.com/ →
                </a>
              </div>

              {/* Experience Item 3 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">PyDay 2025 — Organizer</h4>
                <p className="text-gray-500 text-sm font-medium mt-1 mb-3">2025</p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Helped organize a programming event that strengthened my interest in coding, AI, and developer communities.
                </p>
                <a href="https://www.accupass.com/event/2505150542041736392010" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Event →
                </a>
              </div>

              {/* Experience Item 4 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">NCCU MITC — Design Team Member</h4>
                <p className="text-gray-500 text-sm font-medium mt-1 mb-3">Sep 2025 – Jun 2026</p>
                <p className="text-gray-700 leading-relaxed">
                  Created visual materials and promotional designs for club activities related to technology and programming.
                </p>
              </div>

              {/* Experience Item 5 */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">NCCU Dancing Club — Popping Instructor</h4>
                <p className="text-gray-500 text-sm font-medium mt-1 mb-3"></p>
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
