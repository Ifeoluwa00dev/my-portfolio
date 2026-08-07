import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { PROJECTS } from '../../constants';

// Separate component for each project card with its own carousel
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [project.images]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-panel group rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all shadow-2xl"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section - 60% on large screens */}
        <div className="relative w-full lg:w-[60%] h-64 lg:h-auto overflow-hidden">
          <div className="relative w-full h-full">
            {/* Main Carousel Images */}
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={project.images[currentImageIndex]} 
                alt={`${project.title} - view ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030014]/80 lg:to-[#030014]/60"></div>
            
            {/* Carousel Indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImageIndex 
                        ? 'w-8 bg-indigo-500' 
                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
            
            {/* Tech Stack Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[60%] lg:max-w-[50%] z-10">
              {project.techStack.slice(0, 4).map(tech => (
                <motion.span 
                  key={tech} 
                  className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content Section - 40% on large screens */}
        <div className="w-full lg:w-[40%] p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl lg:text-3xl font-bold font-jakarta text-white group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <motion.a 
                href={project.link || '#'} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass-panel rounded-lg hover:bg-indigo-500 transition-colors flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
            
            <p className="text-gray-400 text-sm lg:text-base mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="space-y-3 mb-6">
              <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                Key Features
              </p>
              <div className="space-y-2">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    className="flex items-start text-sm text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <ChevronRight size={16} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.a 
            href={project.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 border border-indigo-500/50 text-sm font-bold hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Project Details</span>
            <ChevronRight size={16} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Project['category']>('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <>
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6 text-center mb-16">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-jakarta font-extrabold mb-6"
          >
            My Featured <span className="text-indigo-500">Projects</span>
          </motion.h2>
          <motion.p 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Here's a selection of my recent work. Each project represents a unique challenge and a custom-tailored solution.
          </motion.p>
        </div>

        <div className="container mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Product', 'AI', 'Business', 'Healthcare'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as Project['category'])}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === filter 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                    : 'glass-panel text-gray-400 hover:text-white border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;