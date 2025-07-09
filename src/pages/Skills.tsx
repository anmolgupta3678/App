import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Settings, Users, Lightbulb, MessageCircle, Puzzle } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';

const Skills: React.FC = () => {
  const technicalSkills = {
    'Languages': {
      icon: Code,
      skills: ['Python', 'Java', 'C', 'C++', 'MySQL'],
      color: 'from-blue-500 to-purple-600'
    },
    'Tools': {
      icon: Settings,
      skills: ['VS Code', 'MySQL', 'PyCharm', 'Dev C++', 'IntelliJ IDEA'],
      color: 'from-green-500 to-teal-600'
    },
    'Technologies': {
      icon: Cloud,
      skills: ['Linux', 'GitHub', 'ReactJS', 'NodeJS', 'JWT', 'Flutter'],
      color: 'from-yellow-500 to-orange-600'
    }
  };

  const softSkills = [
    { name: 'DSA', icon: Puzzle, description: 'Data Structures & Algorithms' },
    { name: 'C/C++/Python', icon: Code, description: 'Programming Languages' },
    { name: 'DBMS', icon: Database, description: 'Database Management' },
    { name: 'Communication', icon: MessageCircle, description: 'Effective Communication' },
    { name: 'Problem Solving', icon: Lightbulb, description: 'Analytical Thinking' },
    { name: 'Editing', icon: Settings, description: 'Content & Video Editing' },
    { name: '3D Design', icon: Settings, description: '3D Modeling & Design' },
    { name: 'SSM', icon: Users, description: 'Social Media Management' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-black pt-20"
    >
      <ThreeBackground type="constellation" color="#8b5cf6" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Technical Expertise
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(technicalSkills).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${data.color} flex items-center justify-center mr-4`}>
                    <data.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {data.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + skillIndex * 0.1 }}
                      className="bg-white/50 dark:bg-gray-800/50 rounded-lg px-4 py-3 text-center font-medium text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Soft Skills & Competencies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass dark:glass-dark rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Levels Visualization */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Proficiency Levels
          </h2>
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: 'Python', level: 90 },
                { skill: 'ReactJS', level: 85 },
                { skill: 'Linux', level: 80 },
                { skill: 'NodeJS', level: 75 },
                { skill: 'MySQL', level: 85 },
                { skill: 'Flutter', level: 70 },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1.4 + index * 0.1 }}
                  className="mb-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800 dark:text-white">
                      {item.skill}
                    </span>
                    <span className="text-yellow-600 font-bold">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 1.5, delay: 1.4 + index * 0.1 }}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;