import React from 'react';
import { Briefcase, BookOpen, MapPin, Star, Award, Code } from 'lucide-react';
import josh from "../assets/images/DSC_3034.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section header with underline */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column - Image and quick stats */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main image with decorative elements */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={josh} 
                  alt="Joshua working on designs" 
                  className="w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-60">
                    
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 -left-6 w-full h-full border-2 border-indigo-200 rounded-lg -z-10">
                  <p>gerete</p>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 z-20 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  <div>
                    <div className="text-sm text-gray-600">Experience</div>
                    <div className="font-bold">5+ Years</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-indigo-600" />
                  
                </div>
              </div>
            </div>
            
            {/* Skills list */}
            <div className="mt-16 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-indigo-600" />
                Core Skills
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Web Design</span>
                    <span className="text-indigo-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Frontend Development</span>
                    <span className="text-indigo-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">UI/UX Design</span>
                    <span className="text-indigo-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Bio and details */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">My Journey</h3>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                Ìfẹ́olúwa is a versatile Frontend Developer and UI/UX Designer with over 5 years of experience creating innovative digital solutions. His journey began with graphics design, building a strong eye for detail and positioning, and has since evolved into a career that blends creativity with technical expertise.

He is highly skilled in React, Tailwind CSS, JavaScript, TypeScript, Vite, Git/GitHub, API integration, Redux Toolkit, and Firebase, with proven ability to design and develop seamless, user-friendly interfaces. His background in UI/UX ensures every product he works on is both visually appealing and functionally effective.

Ìfẹ́olúwa is adaptable, teachable, and committed to continuous learning, with a strong problem-solving mindset. He thrives in both collaborative and independent roles, consistently delivering quality results while maintaining a focus on user experience and innovation.
                </p>
                
                <p className="leading-relaxed">
                  I specialize in creating websites and applications that not only look stunning but also deliver measurable results. My approach combines aesthetic sensibility with technical expertise to build digital experiences that users love.
                </p>
                
                <blockquote className="border-l-4 border-indigo-600 pl-4 italic my-8">
                  I believe that great design is about solving problems beautifully. Every project begins with understanding the unique challenges and goals of my clients, then crafting solutions that are both visually appealing and highly functional.
                </blockquote>
              </div>
              
              {/* Info cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-5 rounded-lg md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <h4 className="text-xl font-bold">Education</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>B.A. in Engineering Physics</span>
                      <span className="text-gray-500">2019-2024</span>
                      <span>Obafemi Awolowo University</span>
                    </li>
                  </ul>
                </div>
                
        
                
                <div className="bg-gray-50 p-5 rounded-lg md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <h4 className="text-xl font-bold">Location</h4>
                  </div>
                  <p>Based in Lagos Nigeria — Available for  <b>REMOTE</b> work worldwide</p>
                  <a href="#contact" className="inline-block mt-3 text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                    Let's discuss your project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;