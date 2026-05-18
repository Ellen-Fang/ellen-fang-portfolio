import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Fortune Ticker',
      subtitle: 'AI Stock Prediction System',
      description: 'Built an end-to-end AI stock prediction system that combines financial data automation, feature engineering, machine learning inference, FastAPI APIs, an interactive fortune-drawing UI, and Docker-based deployment.',
      technologies: ['Python', 'FastAPI', 'scikit-learn', 'pandas', 'Twelve Data API', 'Docker', 'Docker Compose', 'Caddy'],
      github: 'https://github.com/Ellen-Fang/fortune-ticker',
      demo: null,
    },
    {
      id: 2,
      title: 'Equity Research & Industry Notes',
      subtitle: 'AI ASIC & Semiconductor Industry Research',
      description: 'Built a structured research collection on AI ASICs and semiconductor value chains, covering industry drivers, ASIC vs GPU positioning, CSP custom silicon trends, company case studies, investment risks, and monitoring indicators.',
      technologies: ['Equity Research', 'Semiconductor Analysis', 'AI Infrastructure', 'Industry Mapping', 'Investment Thesis', 'Risk Analysis'],
      github: 'https://github.com/Ellen-Fang/equity-research-and-industry',
      demo: null,
    },
    {
      id: 3,
      title: 'Investment Platform Case Study',
      subtitle: 'Product Prototype & Front-end Case Study',
      description: 'Transformed an investment community platform proposal into a functional front-end prototype, focusing on product structure, user flow, community browsing, gamified features, and responsive interface implementation.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Product Design', 'UI/UX'],
      github: 'https://github.com/Ellen-Fang/investment-platform-case-study',
      demo: 'https://ellen-fang.github.io/investment-platform-case-study/profile',
    },
    {
      id: 4,
      title: 'Multivariate Analysis Projects',
      subtitle: 'Applied Statistical Analysis Portfolio',
      description: 'Completed a collection of multivariate statistical analysis reports covering PCA, factor analysis, K-means clustering, market segmentation, and logistic regression for classification and interpretation.',
      technologies: ['SPSS', 'PCA', 'Factor Analysis', 'K-means Clustering', 'Logistic Regression', 'Statistical Reporting'],
      github: 'https://github.com/Ellen-Fang/multivariate-analysis-projects',
      demo: null,
    },
    {
      id: 5,
      title: 'Indigenous Employment Sampling Design',
      subtitle: 'Survey Sampling Design Report',
      description: 'Designed a survey sampling plan for Indigenous household employment research, applying stratified sampling, proportional allocation, and two-stage cluster sampling to balance representativeness and fieldwork feasibility.',
      technologies: ['Survey Sampling', 'Stratified Sampling', 'Two-stage Cluster Sampling', 'Statistical Estimation', 'Report Writing'],
      github: 'https://github.com/Ellen-Fang/indigenous-employment-sampling-design',
      demo: null,
    },
    {
      id: 6,
      title: 'Running Frenchie',
      subtitle: 'Unity 2D Endless Runner Game',
      description: 'Developed a Unity 2D endless runner game featuring character animation states, randomized platform generation, obstacle avoidance, score tracking, scrolling city backgrounds, and video-based scene transitions.',
      technologies: ['Unity', 'C#', 'Animator', 'PlayerPrefs', 'VideoPlayer', 'Game Design'],
      github: 'https://github.com/Ellen-Fang/Running-Frenchie',
      demo: null,
    },
    {
      id: 7,
      title: 'Research & Writing Samples',
      subtitle: 'Academic Writing & Economic Reasoning',
      description: 'Collected undergraduate writing samples that demonstrate research framing, survey-based analysis, English academic writing, and applied economic reasoning through topics such as appearance anxiety and ticket scalping markets.',
      technologies: ['Academic Writing', 'Survey Research', 'Descriptive Statistics', 'Microeconomics', 'English Writing'],
      github: 'https://github.com/Ellen-Fang/research-and-writing-samples',
      demo: null,
    },
    {
      id: 8,
      title: 'Personal Portfolio Website',
      subtitle: 'React Portfolio Site',
      description: 'Designed and built a responsive personal portfolio website with React, Vite, and Tailwind CSS to present projects across data analysis, web development, financial research, and interactive media.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Ellen-Fang/ellen-fang-portfolio',
      demo: 'https://ellen-fang-portfolio.vercel.app/',
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
                <h3 className="text-xl font-bold mb-1" style={{color: '#1F2A44'}}>{project.title}</h3>
                {project.subtitle && (
                  <p className="text-sm font-medium mb-3" style={{color: '#D98C5F'}}>{project.subtitle}</p>
                )}
                {project.category && (
                  <p className="text-xs font-medium mb-4" style={{color: '#6B625B'}}>Category: {project.category}</p>
                )}
                <p className="mb-4 text-sm leading-relaxed" style={{color: '#6B625B'}}>{project.description}</p>
                
                {project.highlights && (
                  <div className="mb-4 text-xs leading-relaxed" style={{color: '#6B625B'}}>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="list-disc list-inside">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
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
