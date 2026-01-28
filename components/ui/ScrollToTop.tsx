import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {ChevronRight} from 'lucide-react'

const ScrollToTop = () => {

    const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <>
       <motion.button 
        className={`fixed bottom-8 right-8 p-4 glass-panel rounded-full z-40 border border-white/10 text-indigo-400 shadow-2xl transition-all ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={24} className="-rotate-90" />
      </motion.button>
    </>
  )
}

export default ScrollToTop
