
import React, { useState, useEffect } from 'react';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Background from './components/layouts/Background';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

const App: React.FC = () => {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  return (
    <div className="relative min-h-screen bg-[#030014] text-white selection:bg-indigo-500 selection:text-white">
      
      <Background/>

    
      <Navbar/>

      <main>
        
        <Hero/>
        <About/>
       <Projects/>
       <Skills/>
        <Process/>
        <Contact/>
        
      </main>


      <Footer/>

      {/* Back to top button */}
      <ScrollToTop/>
    </div>
  );
};

export default App;
