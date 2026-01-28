import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {ExternalLink, Code2, Palette} from 'lucide-react'

const Hero = () => {
  return (
    <>
       <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span>Available for new projects</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-jakarta font-extrabold leading-tight mb-6">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">digital experiences</span> with purpose
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 max-w-lg">
                I build modern, responsive websites that help businesses reach their full potential in the digital space. Specializing in high-performance frontend engineering.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold flex items-center space-x-2 shadow-xl shadow-indigo-600/30 transition-all"
                >
                  <span>View Projects</span>
                  <ExternalLink size={18} />
                </motion.a>
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-panel rounded-xl font-bold border border-white/10 flex items-center space-x-2 hover:bg-white/5 transition-all"
                >
                  <span>Let's Connect</span>
                </motion.a>
              </div>

              <div className="mt-12 flex items-center space-x-8 text-gray-500">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">5+</span>
                  <span className="text-xs uppercase tracking-widest font-semibold">Years Exp</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">50+</span>
                  <span className="text-xs uppercase tracking-widest font-semibold">Happy Clients</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl transform rotate-6 border border-white/10 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-indigo-500/10 rounded-3xl transform -rotate-3 border border-white/10"></div>
                <img 
                  src="https://res.cloudinary.com/drkksaa3i/image/upload/v1769516338/IMG-20260114-WA0005_guhplm.jpg" 
                  alt="Ifeoluwa Dev" 
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-white/20"
                />
                
                {/* Floating Badges */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass-panel p-4 rounded-2xl border border-white/10 z-20 flex items-center space-x-3"
                >
                  <div className="p-2 bg-indigo-500 rounded-lg"><Code2 size={24} /></div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Expertise</p>
                    <p className="font-bold text-sm">Frontend Dev</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl border border-white/10 z-20 flex items-center space-x-3"
                >
                  <div className="p-2 bg-purple-500 rounded-lg"><Palette size={24} /></div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Creative</p>
                    <p className="font-bold text-sm">UI/UX Designer</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  )
}

export default Hero
