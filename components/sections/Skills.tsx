import React from 'react';
import {Code2, Cpu, Palette}  from 'lucide-react'
import {motion} from 'framer-motion'
import {SKILL_CATEGORIES} from '../../constants'

const Skills = () => {
  return (
    <>
       <section id="skills" className="py-32 bg-indigo-900/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-jakarta font-extrabold mb-6">Expertise <span className="text-indigo-500">& Skills</span></h2>
              <p className="text-gray-400">A comprehensive list of tools and technologies I use to bring ideas to life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SKILL_CATEGORIES.map((category, idx) => (
                <motion.div 
                  key={category.title}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                    {idx === 0 ? <Code2 size={24} /> : idx === 1 ? <Cpu size={24} /> : <Palette size={24} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 font-jakarta">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.skills.map(skill => (
                      <li key={skill} className="flex items-center space-x-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                        <span className="text-sm font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Skills
