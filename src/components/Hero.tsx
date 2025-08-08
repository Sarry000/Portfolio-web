import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="block">SARTHAK</span>
          <span className="text-red-600">BUKANE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Computer Engineering Student & Game Developer
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          A passionate and detail-oriented final-year Computer Engineering student with a strong foundation in programming, 
          game development, and database management. Proficient in Python, JavaScript, and Unity Engine.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <Play size={20} />
            View Projects
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <Info size={20} />
            More Info
          </button>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;