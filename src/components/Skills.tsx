import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'C#', level: 80 },
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 85 },
        { name: 'SQL', level: 75 }
      ]
    },
    {
      title: 'Technologies & Frameworks',
      skills: [
        { name: 'Unity Engine', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'React (Basics)', level: 60 },
        { name: 'Game Development', level: 85 },
        { name: 'Web Technologies', level: 80 },
        { name: 'AI/ML Basics', level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'N8N', level: 80 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Communication', level: 80 },
        { name: 'Time Management', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Technical <span className="text-red-600">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-red-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-600 to-red-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Additional Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Game Physics', 'n8n Workflows', 'Google Gemini LLM', 'Speech-to-Text APIs',
                'Data Structures', 'Algorithms', 'Critical Thinking', 'Adaptability',
                'Team Collaboration', 'Project Management', 'Version Control', 'Automation'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-red-600 hover:text-white transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;