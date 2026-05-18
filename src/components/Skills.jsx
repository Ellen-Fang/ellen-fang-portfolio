import React from 'react'

function Skills() {
  const skillCategories = [
    {
      category: 'Data Analysis',
      skills: ['Python', 'R', 'SPSS', 'Excel', 'PCA', 'Clustering', 'Regression'],
    },
    {
      category: 'Web Development',
      skills: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'TypeScript'],
    },
    {
      category: 'Backend & Tools',
      skills: ['FastAPI', 'Git', 'GitHub', 'Docker', 'APIs'],
    },
    {
      category: 'Research',
      skills: ['Financial Research', 'Industry Analysis', 'Report Writing'],
    },
    {
      category: 'Game Development',
      skills: ['Unity', 'C#', 'Game Design'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Skills</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          A diverse skill set developed through academic studies and practical projects.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-300 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
