import React from 'react'
import { BarChart3, Code, Server, Search, Gamepad2 } from 'lucide-react'

function Skills() {
  const skillCategories = [
    {
      category: 'Data Analysis',
      icon: BarChart3,
      skills: ['Python', 'R', 'SPSS', 'Excel', 'PCA', 'Clustering', 'Regression'],
    },
    {
      category: 'Web Development',
      icon: Code,
      skills: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'TypeScript'],
    },
    {
      category: 'Backend & Tools',
      icon: Server,
      skills: ['FastAPI', 'Git', 'GitHub', 'Docker', 'APIs'],
    },
    {
      category: 'Research',
      icon: Search,
      skills: ['Financial Research', 'Industry Analysis', 'Report Writing'],
    },
    {
      category: 'Game Development',
      icon: Gamepad2,
      skills: ['Unity', 'C#', 'Game Design'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4" style={{backgroundColor: '#FFF8F0'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#1F2A44'}}>Skills</h2>
        <p className="text-center mb-6 max-w-2xl mx-auto" style={{color: '#6B625B'}}>
          Combining statistics, economics, and web development, I build data-driven projects with practical applications.
        </p>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{color: '#6B625B', fontSize: '0.95rem'}}>
          A diverse skill set developed through academic studies and practical projects.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon
            return (
              <div
                key={idx}
                className="rounded-xl p-8 border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-default"
                style={{
                  backgroundColor: '#FFFCF7',
                  borderColor: '#E8D8C8',
                  borderWidth: '1.5px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D98C5F'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E8D8C8'}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div 
                    className="p-2 rounded-lg"
                    style={{backgroundColor: '#FFF0E6'}}
                  >
                    <IconComponent 
                      size={24} 
                      style={{color: '#D98C5F', strokeWidth: 1.5}}
                    />
                  </div>
                  <h3 className="text-xl font-bold" style={{color: '#1F2A44'}}>
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 hover:shadow-sm"
                      style={{
                        backgroundColor: '#FAE8D8',
                        color: '#D98C5F',
                        border: '1px solid #F0D4BD',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
