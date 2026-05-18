import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Fortune Ticker',
      description: 'Built a stock prediction web app that combines machine learning, FastAPI, and an interactive fortune-drawing UI.',
      technologies: ['Python', 'Machine Learning', 'FastAPI', 'React'],
      github: 'https://github.com/Ellen-Fang/Fortune-Ticker',
      demo: null,
    },
    {
      id: 2,
      title: 'Investment Platform Case Study',
      description: 'Designed and implemented a front-end case study for an investment community platform, focusing on product structure, UI design, and user interaction.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
      github: 'https://github.com/Ellen-Fang',
      demo: null,
    },
    {
      id: 3,
      title: 'Running Frenchie',
      description: 'Developed a Unity 2D endless runner game with character animation, procedural ground generation, scoring logic, and interactive gameplay.',
      technologies: ['Unity', 'C#', 'Game Design'],
      github: 'https://github.com/Ellen-Fang',
      demo: null,
    },
    {
      id: 4,
      title: 'Multivariate Analysis Projects',
      description: 'Applied statistical methods including PCA, clustering, and logistic regression to analyze structured datasets and communicate insights.',
      technologies: ['Python', 'R', 'Statistics', 'Data Analysis'],
      github: 'https://github.com/Ellen-Fang',
      demo: null,
    },
    {
      id: 5,
      title: 'Equity Research & Industry Notes',
      description: 'Organized financial research notes and industry analysis on semiconductors, AI infrastructure, and related technology sectors.',
      technologies: ['Financial Research', 'Industry Analysis', 'Report Writing'],
      github: 'https://github.com/Ellen-Fang',
      demo: null,
    },
    {
      id: 6,
      title: 'Research & Writing Samples',
      description: 'Collected research reports and writing samples that demonstrate academic writing, data organization, and analytical communication.',
      technologies: ['Research', 'Academic Writing', 'Data Visualization'],
      github: 'https://github.com/Ellen-Fang',
      demo: null,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4" style={{backgroundColor: '#FFFCF7'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#1F2A44'}}>Featured Projects</h2>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{color: '#6B625B'}}>
          A selection of projects that showcase my skills in data analysis, web development, research, and creative implementation.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{backgroundColor: '#FFFCF7', borderColor: '#E8D8C8'}}
            >
              <div className="h-40" style={{background: 'linear-gradient(135deg, #F3D7C2 0%, #E8D8C8 100%)'}}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{color: '#1F2A44'}}>{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed" style={{color: '#6B625B'}}>{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style={{backgroundColor: '#F3D7C2', color: '#1F2A44'}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 text-white rounded-lg font-semibold transition-all text-sm hover:scale-105"
                      style={{backgroundColor: '#D98C5F'}}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border-2 rounded-lg font-semibold transition-all text-sm"
                      style={{borderColor: '#D98C5F', color: '#D98C5F', backgroundColor: 'transparent'}}
                      onMouseEnter={(e) => {e.target.style.backgroundColor = '#F3D7C2'; e.target.style.color = '#1F2A44'}}
                      onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#D98C5F'}}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
