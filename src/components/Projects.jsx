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
      github: null,
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
      github: null,
      demo: null,
    },
    {
      id: 5,
      title: 'Equity Research & Industry Notes',
      description: 'Organized financial research notes and industry analysis on semiconductors, AI infrastructure, and related technology sectors.',
      technologies: ['Financial Research', 'Industry Analysis', 'Report Writing'],
      github: null,
      demo: null,
    },
    {
      id: 6,
      title: 'Research & Writing Samples',
      description: 'Collected research reports and writing samples that demonstrate academic writing, data organization, and analytical communication.',
      technologies: ['Research', 'Academic Writing', 'Data Visualization'],
      github: null,
      demo: null,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          A selection of projects that showcase my skills in data analysis, web development, research, and creative implementation.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-40"></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
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
                      className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all text-sm"
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
