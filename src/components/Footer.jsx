import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{backgroundColor: '#FAF6F1'}} className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4" style={{color: '#1F2A44'}}>Ellen Fang</h3>
            <p className="text-sm leading-relaxed" style={{color: '#6B625B'}}>
              Statistics student passionate about data, research, and building meaningful projects.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{color: '#1F2A44'}}>Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="transition-colors" style={{color: '#6B625B'}} onMouseEnter={(e) => e.target.style.color = '#D98C5F'} onMouseLeave={(e) => e.target.style.color = '#6B625B'}>About</a></li>
              <li><a href="#projects" className="transition-colors" style={{color: '#6B625B'}} onMouseEnter={(e) => e.target.style.color = '#D98C5F'} onMouseLeave={(e) => e.target.style.color = '#6B625B'}>Projects</a></li>
              <li><a href="#skills" className="transition-colors" style={{color: '#6B625B'}} onMouseEnter={(e) => e.target.style.color = '#D98C5F'} onMouseLeave={(e) => e.target.style.color = '#6B625B'}>Skills</a></li>
              <li><a href="#contact" className="transition-colors" style={{color: '#6B625B'}} onMouseEnter={(e) => e.target.style.color = '#D98C5F'} onMouseLeave={(e) => e.target.style.color = '#6B625B'}>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{color: '#1F2A44'}}>Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/Ellen-Fang" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{color: '#6B625B'}} onMouseEnter={(e) => e.target.style.color = '#D98C5F'} onMouseLeave={(e) => e.target.style.color = '#6B625B'}>
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:runyusheng@gmail.com" className="transition-colors" style={{color: '#6B625B'}} onMouseEnter={(e) => e.target.style.color = '#D98C5F'} onMouseLeave={(e) => e.target.style.color = '#6B625B'}>
                  Gmail
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-sm" style={{borderTopWidth: '1px', borderTopColor: '#E8D8C8', color: '#6B625B'}}>
          <p>&copy; {currentYear} Ellen Fang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
