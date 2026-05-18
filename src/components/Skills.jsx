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
    <section id="skills" className="py-20 px-4" style={{backgroundColor: '#FFF8F0'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#1F2A44'}}>Skills</h2>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{color: '#6B625B'}}>
          A diverse skill set developed through academic studies and practical projects.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl p-8 border shadow-sm hover:shadow-md transition-all"
              style={{backgroundColor: '#FFFCF7', borderColor: '#E8D8C8'}}
            >
              <h3 className="text-xl font-bold mb-6" style={{color: '#1F2A44'}}>{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#D98C5F'}}></div>
                    <span className="font-medium" style={{color: '#1F2A44'}}>{skill}</span>
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
