import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Fortune Ticker',
      description: 'Stock price short-term prediction with fortune cookie interactive interface. Demonstrates data processing, machine learning, and full-stack integration.',
      technologies: ['Python', 'Machine Learning', 'FastAPI', 'React', 'Deployment'],
      github: 'https://github.com/Ellen-Fang/Fortune-Ticker',
      demo: '#',
    },
    {
      id: 2,
      title: 'Investment Platform Case Study',
      description: 'A comprehensive case study of a fintech community platform. Showcases React development, TypeScript, Tailwind CSS, and product design thinking.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Running Frenchie',
      description: 'A 2D endless runner game featuring character animation, procedural scene generation, and interactive game mechanics.',
      technologies: ['Unity', 'C#', 'Game Design', '2D Graphics'],
      github: 'https://github.com/Ellen-Fang',
      demo: '#',
    },
    {
      id: 4,
      title: 'Multivariate Analysis Projects',
      description: 'Statistical analysis projects including PCA, clustering, logistic regression, and other advanced multivariate methods.',
      technologies: ['Python', 'R', 'Statistics', 'Data Analysis'],
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Equity Research & Industry Notes',
      description: 'Financial research and industry analysis focusing on semiconductors and AI infrastructure. Demonstrates financial literacy and industry knowledge.',
      technologies: ['Financial Analysis', 'Industry Research', 'Report Writing'],
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Research & Writing Samples',
      description: 'Academic research reports and writing samples showcasing analytical thinking, data presentation, and communication skills.',
      technologies: ['Research', 'Academic Writing', 'Data Visualization'],
      github: '#',
      demo: '#',
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  {project.demo !== '#' && (
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
