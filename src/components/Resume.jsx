import React from 'react'

function Resume() {
  const backgroundPoints = [
    'Built data analysis and machine learning projects using Python, R, and statistical methods.',
    'Developed front-end and interactive projects with React, Vite, Tailwind CSS, and Unity.',
    'Conducted financial and industry research on semiconductors, AI infrastructure, and related technology sectors.'
  ]

  return (
    <section id="resume" className="py-20 px-4 bg-gray-50">
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
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic & Project Background</h3>
              <div className="space-y-5">
                {backgroundPoints.map((point, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                        <span className="text-blue-600 font-bold text-sm">✓</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
