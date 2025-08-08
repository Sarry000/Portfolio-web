import React from 'react';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Oasis InfoByte',
      location: 'Remote',
      period: 'Jun 2024 - Jul 2024',
      type: 'work',
      description: [
        'Collaborated with a cross-functional team to design, implement, and test multiple applications, improving teamwork and project delivery',
        'Led the development of web-based projects including a Personal Portfolio, Todo List, and Simple Calculator, demonstrating proficiency in Python and web technologies',
        'Utilized version control tools (Git, GitHub) to manage project codebases and streamline collaboration',
        'Developed and implemented Python scripts to automate data processes, reducing manual workload by 40% and increasing efficiency for ongoing projects',
        'Gained practical experience in end-to-end software development, problem-solving, and adapting to new technologies'
      ]
    }
  ];

  const education = [
    {
      title: 'B.E., Computer Science Engineering',
      company: 'Sandip Institute of Technology and Research Center, Nashik',
      location: 'Nashik, Maharashtra',
      period: 'Sep 2021 - Jul 2025',
      type: 'education',
      description: [
        'Currently pursuing Bachelor of Engineering in Computer Science',
        'CGPA: 7.5',
        'Strong foundation in programming languages including Python, JavaScript, and C#',
        'Hands-on experience with Unity Engine for game development projects',
        'Developed multiple projects including AI-based applications and web development solutions'
      ]
    },
    {
      title: 'HSC (Higher Secondary Certificate)',
      company: 'KTHM College, Nashik',
      location: 'Nashik, Maharashtra',
      period: 'Jun 2019 - Aug 2021',
      type: 'education',
      description: [
        'Completed Higher Secondary Education with 79%',
        'Science stream with focus on Mathematics and Physics',
        'Built strong analytical and problem-solving foundation'
      ]
    },
    {
      title: 'SSC (Secondary School Certificate)',
      company: 'St. Thomas Bethany Convent School, Nashik',
      location: 'Nashik, Maharashtra',
      period: 'Mar 2019',
      type: 'education',
      description: [
        'Completed Secondary School Education with 76%',
        'Strong academic foundation across all subjects',
        'Developed early interest in mathematics and logical thinking'
      ]
    }
  ];

  const allItems = [...experiences, ...education];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Experience & <span className="text-red-600">Education</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-red-600"></div>
            
            {allItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  {item.type === 'education' && (
                    <GraduationCap size={12} className="text-white" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className={`p-6 rounded-lg border transition-all duration-300 ${
                    item.type === 'work' 
                      ? 'bg-black/40 border-gray-800 hover:border-red-600/50' 
                      : 'bg-blue-900/20 border-blue-800 hover:border-blue-600/50'
                  }`}>
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <span className={`text-sm font-medium ${
                        item.type === 'work' ? 'text-red-400' : 'text-blue-400'
                      }`}>
                        {item.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span className="text-sm">{item.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className={`mr-2 ${
                            item.type === 'work' ? 'text-red-600' : 'text-blue-400'
                          }`}>•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
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

export default Experience;