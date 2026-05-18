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
      content: 'Financial Research, Machine Learning',
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
              className="rounded-2xl w-full h-80 object-cover shadow-lg object-center"
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
