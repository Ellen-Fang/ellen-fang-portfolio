import React from 'react'

function Resume() {
  return (
    <section id="resume" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education & Resume</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Statistics / Data Science</h4>
                <p className="text-gray-600 text-sm mt-1">University Name | Year</p>
                <p className="text-gray-700 mt-2">Relevant coursework in statistical methods, data analysis, and quantitative research.</p>
              </div>
            </div>
          </div>
          
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience Highlights</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Project-Based Learning</h4>
                <p className="text-gray-600 text-sm mt-1">Various Projects</p>
                <p className="text-gray-700 mt-2">Developed practical skills through real-world projects combining data analysis, web development, and research.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            For a detailed view of my background and accomplishments
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
