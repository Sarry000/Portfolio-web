import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-200 transform hover:scale-110 mb-8"
          >
            <ArrowUp size={20} />
          </button>
          
          {/* Logo */}
          <div className="text-red-600 text-2xl font-bold mb-6">
            Portfolio
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 Sarthak Bukane. Made with 
            <Heart size={16} className="text-red-600" />
            using React & Tailwind CSS
          </p>
          
          {/* Additional Links */}
          <div className="flex justify-center gap-8 mt-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-red-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-gray-400 hover:text-red-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;