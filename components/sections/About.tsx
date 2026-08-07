import React from 'react';
import {motion} from 'framer-motion';
import {Layout, Globe, Send} from 'lucide-react'

const About = () => {
  return (
    <>
      <section id="about" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-4xl lg:text-5xl font-jakarta font-extrabold mb-8">
                  My <span className="text-indigo-500">Journey</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-400">
                  <p>
                    Ifeoluwa is a full-stack developer building production web products since 2024. His journey began in graphic design, building a strong eye for detail and positioning before moving into engineering.
                  </p>
                  <p>
                    He has since evolved into a career that blends creativity with technical expertise. He is highly skilled in React, TypeScript, Next.js, Supabase, and Node.js, with hands-on experience integrating the Claude and Gemini APIs into production products.
                  </p>
                </div>

                <div className="mt-12 space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-indigo-400 border border-white/10">
                      <Layout size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Education</h4>
                      <p className="text-gray-400">B.Sc. in Engineering Physics | Obafemi Awolowo University</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-indigo-400 border border-white/10">
                      <Globe size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Location</h4>
                      <p className="text-gray-400">Based in Lagos, Nigeria — Available for Remote work worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 glass-panel p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-2xl font-jakarta font-bold mb-8">Core Skills Expertise</h3>
                <div className="space-y-8">
                  {[
                    { name: 'Frontend Development', level: 95, color: 'bg-indigo-500' },
                    { name: 'UI/UX Design', level: 90, color: 'bg-purple-500' },
                    { name: 'AI / LLM Integration', level: 85, color: 'bg-blue-500' },
                    { name: 'System Architecture', level: 80, color: 'bg-emerald-500' }
                  ].map((skill, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="font-bold text-gray-200">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                          className={`h-full ${skill.color} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold mb-1">Looking for a collaborator?</h5>
                    <p className="text-sm text-gray-400">Let's discuss your next project</p>
                  </div>
                  <a href="#contact" className="p-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors">
                    <Send size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    </>
  )
}

export default About
