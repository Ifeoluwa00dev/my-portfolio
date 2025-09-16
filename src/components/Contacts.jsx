import React from 'react';
import {Mail} from 'lucide-react'

const Contacts = () => {
  return (
    <>
    <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
          
          <div className="flex flex-col gap-12 items-center">
            <div className="w-full md:w-full max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail size={20} className="text-indigo-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">
                       <a href="mailto:adeleganifeoluwapojoshua@gmail.com" className="hover:underline">
                          adeleganifeoluwapojoshua@gmail.com
                        </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-indigo-600 mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-gray-600">
                      <a href="https://www.linkedin.com/in/joshua-ifeoluwapo-adelegan-2a751b281/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                       linkedin.ifeoluwa
                      </a>
                      </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-indigo-600 mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-gray-600">
                        <a href="https://github.com/Ifeoluwa00dev" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          github.com/Ifeoluwa00dev
                        </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-6">
                  Have a project in mind or want to discuss potential collaboration? I'm always open to interesting conversations and opportunities.
                </p>
                <p className="text-gray-600">
                  Currently available for freelance projects starting in May 2025.
                </p>
              </div>
            </div>
            
            {/* <div className="md:w-1/2">
              <form className="bg-gray-50 rounded-lg p-8 shadow-md">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
                    placeholder="Your name" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
                    placeholder="Your email" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
                    placeholder="Subject" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="6" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>
    </>

  )
}

export default Contacts