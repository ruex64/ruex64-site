import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiCplusplus,
  SiC,
  SiFirebase,
  SiMongodb,
  SiNetlify,
  SiAdobephotoshop,
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
  { name: 'C', icon: <SiC className="text-gray-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-orange-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white bg-black rounded-full p-1" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-teal-400" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-indigo-600 dark:text-indigo-400 font-press">Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center transform transition-transform hover:scale-110 cursor-pointer"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm text-center text-gray-700 dark:text-gray-300 font-sharetech">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
