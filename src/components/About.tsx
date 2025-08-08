import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working effectively in team environments'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            About <span className="text-red-600">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Computer Engineering Student & Game Developer
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a passionate and detail-oriented final-year Computer Engineering student 
                with a strong foundation in programming, game development, and database management. 
                Proficient in Python, JavaScript, and Unity Engine, with hands-on experience 
                in building games, AI-based projects, and web development.
              </p>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm eager to contribute to innovative tech solutions and grow in a collaborative 
                environment. My experience spans from game development with Unity to AI-powered 
                applications and web development projects.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                  Python
                </span>
                <span className="px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                  Unity Engine
                </span>
                <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm">
                  C#
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-black/40 p-6 rounded-lg border border-gray-800 hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-red-600 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;