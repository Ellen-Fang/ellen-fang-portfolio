import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 px-4" style={{backgroundColor: '#FFF8F0'}}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#1F2A44'}}>Get In Touch</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{color: '#6B625B'}}>
          I'm always interested in discussing new projects and opportunities. Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a
            href="https://github.com/Ellen-Fang"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-xl p-8 text-center hover:shadow-lg transition-all"
            style={{backgroundColor: '#FFFCF7', borderColor: '#E8D8C8'}}
          >
            <div className="text-4xl mb-4">🐙</div>
            <h3 className="text-lg font-bold mb-2" style={{color: '#1F2A44'}}>GitHub</h3>
            <p style={{color: '#1F2A44'}}>Ellen-Fang</p>
          </a>

          <a
            href="mailto:runyusheng@gmail.com"
            className="border rounded-xl p-8 text-center hover:shadow-lg transition-all"
            style={{backgroundColor: '#FFFCF7', borderColor: '#E8D8C8'}}
          >
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-lg font-bold mb-2" style={{color: '#1F2A44'}}>Gmail</h3>
            <p style={{color: '#1F2A44'}}>runyusheng@gmail.com</p>
          </a>
        </div>
        
        <div className="flex flex-col items-center">
          <p className="text-center max-w-md" style={{color: '#6B625B'}}>
            Feel free to reach out through GitHub or email. I'd love to discuss projects and opportunities!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
