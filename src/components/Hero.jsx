import React from 'react';
import { ArrowUpRight, Code, Palette, Sparkles } from 'lucide-react';
import image from '../assets/images/Josh.png';
import josh from "../assets/images/DSC_3033.jpg";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-tr from-gray-900 to-indigo-900 text-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {/* Name and title with animated border */}
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg opacity-75 blur"></div>
                <div className="relative bg-gray-900 rounded-lg px-6 py-3 border border-indigo-400">
                  <h2 className="text-lg font-medium text-white">Ìfẹ́olúwa • Developer & Designer</h2>
                </div>
              </div>
              
              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Crafting digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">experiences</span> with purpose
              </h1>
              
              {/* Description */}
              <p className="text-gray-300 text-lg max-w-lg">
                I build modern, responsive websites that help businesses reach their full potential in the digital space.
              </p>
              
              {/* Skills badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                  <Code className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm">Frontend Development</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                  <Palette className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm">Creative Solutions</span>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="group relative px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium shadow-lg overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
                <a href="#contact" className="px-6 py-3 bg-transparent border border-indigo-400 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Let's Connect
                </a>
                <a href="https://drive.google.com/file/d/1cA1bgtStobfH46piy0A26P--Sy0TnGK2/view?usp=drive_link" className= "group relative px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium shadow-lg overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                    Resume
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              
              {/* Image container with grid pattern overlay */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-400 p-1 bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-gray-900 opacity-60"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRjNGY1YSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden">
                  <img 
                    src={josh} 
                    alt="Joshua" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-700">
                <div className="text-center">
                  <div className="text-xl font-bold text-indigo-400">5+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;