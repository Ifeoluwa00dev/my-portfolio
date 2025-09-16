import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import OverallProjects from './components/OverallProjects';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function WebDesignerPortfolio() {
  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      <Header/>

      <Hero/>
      
      <About/>
      

 
     <Projects/>

      <Skills/>
      
      
      <CallToAction/>
      
      <Contacts/>

      <Footer/>
    </div>
  );
}