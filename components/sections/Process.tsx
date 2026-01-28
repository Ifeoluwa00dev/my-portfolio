import React from 'react';
import {motion} from 'framer-motion';
import {PROCESS_STEPS} from '../../constants'

const Process = () => {
  return (
    <>
      <section className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-jakarta font-extrabold mb-6">My <span className="text-indigo-500">Work Process</span></h2>
              <p className="text-gray-400">How I take projects from concept to reality.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Process Line Connector (Desktop) */}
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -z-10"></div>

              {PROCESS_STEPS.map((step, idx) => (
                <motion.div 
                  key={step.id}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 text-center"
                >
                  <div className="relative mb-8 inline-block">
                    <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center border-2 border-white/10 group-hover:border-indigo-500 transition-all mx-auto bg-[#030014] z-10 relative">
                      <span className="text-3xl font-black font-jakarta text-indigo-500">{step.id}</span>
                    </div>
                    {/* Shadow pulse */}
                    <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-125 -z-10 animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-jakarta">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Process
