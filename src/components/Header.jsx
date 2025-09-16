import React from 'react';
import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, ExternalLink } from 'lucide-react';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">Ìfẹ́olúwa Dev</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" className="font-medium hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="font-medium hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="font-medium hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#testimonials" className="font-medium hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="#contact" className="font-medium hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#testimonials" className="font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header