import React from 'react';
import {motion} from 'framer-motion'
import {Mail, Linkedin, Github, Send } from 'lucide-react'

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="glass-panel rounded-[40px] p-8 md:p-16 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] -z-10"></div>
              
              <div className="max-w-3xl mx-auto">
                <div>
                  <h2 className="text-4xl md:text-6xl font-jakarta font-extrabold mb-8 leading-tight">
                    Let's work <span className="text-indigo-500">together</span>
                  </h2>
                  <p className="text-xl text-gray-400 mb-12">
                    Have a project in mind or want to discuss potential collaboration? I'm always open to interesting conversations and opportunities.
                  </p>
                  
                  <div className="space-y-8">
                    <a href="mailto:adeleganifeoluwapojoshua@gmail.com" className="flex items-center space-x-6 group">
                      <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all border border-white/10">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Me</p>
                        <p className="text-lg font-bold break-all">adeleganifeoluwapojoshua@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/joshua-adelegan-2a751b281/" className="flex items-center space-x-6 group">
                      <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all border border-white/10">
                        <Linkedin size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">LinkedIn</p>
                        <p className="text-lg font-bold">linkedin.com/in/joshua-adelegan-2a751b281</p>
                      </div>
                    </a>

                    <a href="https://github.com/Ifeoluwa00dev" className="flex items-center space-x-6 group">
                      <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all border border-white/10">
                        <Github size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">GitHub</p>
                        <p className="text-lg font-bold">github.com/ifeoluwa00dev</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* <motion.form 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 px-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 px-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 px-1">Subject</label>
                    <input type="text" placeholder="Project Inquiry" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 px-1">Message</label>
                    <textarea rows={5} placeholder="Tell me about your project..." className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all resize-none"></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center justify-center space-x-3 shadow-xl shadow-indigo-600/30 transition-all"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </motion.button>
                </motion.form> */}
              </div>
            </div>
          </div>
        </section>
    </>
  )
} 

export default Contact
