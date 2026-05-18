import React from 'react'
import { BarChart3, Code, Server, Search, Gamepad2, Brain, TrendingUp } from 'lucide-react'

function Skills() {
  const skillCategories = [
    {
      category: 'Data Analysis & Statistics',
      icon: BarChart3,
      skills: ['Python', 'SPSS', 'pandas', 'NumPy', 'PCA', 'Factor Analysis', 'Clustering', 'Regression', 'Survey Sampling'],
    },
    {
      category: 'Machine Learning & Data Product',
      icon: Brain,
      skills: ['scikit-learn', 'Feature Engineering', 'Model Inference', 'Financial Data', 'API Integration', 'Data Pipeline'],
    },
    {
      category: 'Web Development',
      icon: Code,
      skills: ['React', 'Vite', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      category: 'Backend & Deployment',
      icon: Server,
      skills: ['FastAPI', 'APIs', 'Docker', 'Docker Compose', 'Caddy', 'Git', 'GitHub'],
    },
    {
      category: 'Research & Finance',
      icon: TrendingUp,
      skills: ['Equity Research', 'Semiconductor Analysis', 'AI Infrastructure', 'Industry Mapping', 'Investment Thesis', 'Risk Analysis', 'Report Writing'],
    },
    {
      category: 'Game Development',
      icon: Gamepad2,
      skills: ['Unity', 'C#', 'Animator', 'PlayerPrefs', 'VideoPlayer', 'Game Design'],
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#FAF6F1'}}>
      {/* 装饰背景 blob */}
      <div 
        className="absolute top-10 -left-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{backgroundColor: '#FFA500'}}
      ></div>
      <div 
        className="absolute bottom-20 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{backgroundColor: '#F4A460'}}
      ></div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        <h2 className="text-4xl font-bold mb-3 text-center" style={{color: '#1F2A44'}}>Skills</h2>
        <p className="text-center mb-2 max-w-2xl mx-auto" style={{color: '#6B625B'}}>
          A mix of statistics, economics, research, and development skills that support my data-driven projects.
        </p>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{color: '#6B625B', fontSize: '0.95rem'}}>
          Combining statistics, economics, and web development, I build practical applications.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon
            return (
              <div
                key={idx}
                className="relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group cursor-default"
                style={{
                  backgroundColor: 'rgba(255, 252, 247, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid #F5E6D3',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(217, 140, 95, 0.2)'
                  e.currentTarget.style.borderColor = '#F0A867'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.borderColor = '#F5E6D3'
                }}
              >
                {/* 右上角装饰 */}
                <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#F4A460'}}></div>
                    <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#FFB366'}}></div>
                    <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#FFCC99'}}></div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <div 
                    className="p-2.5 rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #FFE4CC 0%, #FFE6D5 100%)',
                    }}
                  >
                    <IconComponent 
                      size={24} 
                      style={{color: '#D97706', strokeWidth: 1.8}}
                    />
                  </div>
                  <h3 className="text-lg font-bold" style={{color: '#1F2A44'}}>
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer"
                      style={{
                        backgroundColor: '#FEF3E6',
                        color: '#C97A29',
                        border: '1px solid #FDDDBD',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFE6CC'
                        e.currentTarget.style.color = '#A85A0A'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FEF3E6'
                        e.currentTarget.style.color = '#C97A29'
                        e.currentTarget.style.transform = 'translateY(0)'
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
