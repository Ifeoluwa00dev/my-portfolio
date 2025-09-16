import React from 'react'

const CallToAction = () => {
  return (
    <>
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            I'm currently available for freelance work. If you're interested in working together, get in touch!
          </p>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-colors inline-block"
          >
            Let's Work Together
          </a>
        </div>
      </section>

    </>
  )
}

export default CallToAction