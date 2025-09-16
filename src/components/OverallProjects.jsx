import { Menu, X, Mail, Clock, Star, Code, Database, CheckCircle, Brain, FileText, Zap, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
function OverallProjects() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const overallProjects = [
      {
        name: "Sarah Johnson",
        role: "Marketing Director",
        text: "Working with Assistify transformed our marketing operations. The content creation and data analysis capabilities are exceptional, allowing us to make informed decisions quickly.",
        avatar: "/api/placeholder/80/80"
      },
      {
        name: "Michael Chen",
        role: "E-commerce Owner",
        text: "Customer service has never been easier. Assistify helps manage inquiries 24/7, tracks orders, and maintains our customer database flawlessly. Highly recommended!",
        avatar: "/api/placeholder/80/80"
      },
      {
        name: "Emma Rodriguez",
        role: "Startup Founder",
        text: "For a startup like ours, having Assistify is like having an entire administrative team. From scheduling to document preparation, everything is handled with precision.",
        avatar: "/api/placeholder/80/80"
      }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % overallProjects.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }, [overallProjects.length]);
  
    return (
      <section id="overallProjects" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4"> <span className="text-blue-600">OVERALL PROJECTS</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what clients are saying about their experience with my virtual assistant services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {overallProjects.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`bg-white p-6 md:p-8 rounded-xl shadow-md transition-all duration-500 ${
                    activeIndex === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 absolute top-0 -translate-x-full'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                      />
                    </div>
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className="text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6">
              {overallProjects.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full transition-all ${
                    activeIndex === index ? 'bg-blue-600 w-6' : 'bg-blue-200'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default OverallProjects;