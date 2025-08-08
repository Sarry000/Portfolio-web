import React, { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import profileImage from '../../public/images/Profile.png';
import rocketBoosterGif from '../../public/images/Rocket-Booster.gif'; 
import MazeGif from '../../public/images/Maze.gif';
import Telegram from '../../public/images/Telegram.png'; 
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Web Apps', 'Games', 'APIs', 'UI/UX'];
  
  const projects = [
    {
      id: 1,
      title: 'Rocket Booster',
      description: 'Developed a multi-level arcade-style game using Unity Engine, showcasing strong skills in game mechanics and user engagement. Designed and implemented C# scripts for player movement, boost system, and progressive difficulty across levels.',
      image: rocketBoosterGif,
      category: 'Games',
      technologies: ['Unity Engine', 'C#', 'Game Physics'],
      liveUrl: 'https://sarry007.itch.io/rocket-boster',
      githubUrl: 'https://github.com/Sarry000/'
    },
    {
      id: 2,
      title: 'Maze Ball',
      description: 'Developed a 3D physics-based rolling ball maze game in Unity using C#, focusing on smooth player controls and realistic ball movement. Engineered a third-person follow camera for better player experience and game immersion.',
      image: MazeGif,
      category: 'Games',
      technologies: ['Unity', 'C#', '3D Physics', 'Camera Systems'],
      githubUrl: 'https://github.com/Sarry000/Maze-Ball'
    },
    {
      id: 3,
      title: 'AI Voice Interviewer',
      description: 'Built a self-hostable AI-powered voice interviewer leveraging n8n workflows, Google Gemini LLM, and browser-based Speech-to-Text APIs for simulating realistic, context-aware interview practice. Integrated voice-to-text and text-to-speech for seamless interactions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'APIs',
      technologies: ['n8n', 'Google Gemini LLM', 'Speech-to-Text', 'AI'],
      liveUrl: 'https://n8n.io/workflows/6614-practice-job-interviews-with-voice-based-google-gemini-ai-interviewer/',
      githubUrl: 'https://github.com/Sarry000/ai-voice-interviewer'
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'Developed a responsive personal portfolio website showcasing projects and skills. Built during internship at Oasis InfoByte, demonstrating proficiency in web technologies and modern design principles.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: ['Web Apps', 'UI/UX'],
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://github.com/Sarry000/',
      githubUrl: 'https://github.com/Sarry000/'
    },
    {
      id: 5,
      title: 'n8n-telegram-digest-bot',
      description: 'A powerful, no-code/low-code workflow built in n8n that automatically generates a daily AI-powered summary of a Telegram group chat and posts it back to the group.',
      image: Telegram,
      category: ['APIs'],
      technologies: ['AI Agent', 'N8N', 'Automation', 'JavaScript'],
      liveUrl: 'https://github.com/Sarry000/',
      githubUrl: 'https://github.com/Sarry000/'
    },
    {
      id: 6,
      title: 'Simple Calculator',
      description: 'Built a functional calculator application with clean UI and responsive design. Implemented various mathematical operations and error handling for better user experience.',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'UI/UX',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://github.com/Sarry000/',
      githubUrl: 'https://github.com/Sarry000/'
    }
  ];

    const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(selectedCategory)
          : project.category === selectedCategory
      );

return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Profile Photo & Intro */}
          <div className="flex flex-col items-center mb-12">
            <img
              src={profileImage}
              alt="Sarthak Bukane"
              width={256}  
              height={256} 
              className="w-32 h-32 rounded-full border-4 border-red-600 mb-4 object-cover object-center transform hover:scale-105 transition-transform duration-300"
              loading="eager"
              style={{
                objectFit: 'cover',
                backfaceVisibility: 'hidden', // Prevents jagged edges during transform
                WebkitBackfaceVisibility: 'hidden'
              }}
            />
            <h3 className="text-2xl font-bold text-white">Sarthak Bukane</h3>
            <p className="text-gray-400 text-center mt-2 max-w-md">
              Passionate developer specializing in Game Dev, desktop, and AI projects.
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Featured <span className="text-red-600">Projects</span>
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-red-600/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;