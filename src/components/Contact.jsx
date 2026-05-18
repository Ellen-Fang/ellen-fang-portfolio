import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          I'm always interested in discussing new projects and opportunities. Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email */}
          <a
            href="mailto:runyusheng@gmail.com"
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700 break-all">runyusheng@gmail.com</p>
          </a>
          
          {/* GitHub */}
          <a
            href="https://github.com/Ellen-Fang"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">🐙</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">GitHub</h3>
            <p className="text-gray-700">Ellen-Fang</p>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact
