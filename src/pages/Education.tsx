import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'BCA in AI&Data Science',
      institution: 'Vivekananda Global University',
      location: 'Jaipur, Rajasthan',
      duration: '2023 - 2026',
      status: 'Currently Pursuing',
      description: 'Comprehensive computer science program focusing on software engineering, data structures, algorithms, and modern development practices.',
      highlights: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Management Systems',
        'Web Development',
        'Machine Learning Fundamentals',
        'DevOps Practices'
      ],
      
    },
    {
      degree: '12th Grade (Senior Secondary)',
      institution: 'Prem Niketan Ucch Madymik Vidhylay',
      location: 'Jaipur, Rajasthan',
      duration: '2022 - 2023',
      status: 'Completed',
      description: 'Science stream with focus on Physics, Chemistry, and Mathematics. Strong foundation in analytical thinking and problem-solving.',
      highlights: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Hindi',
        'English'
      ],
      gpa: 'Percentage: 56%',
      color: 'from-green-500 to-teal-600'
    },
    {
      degree: '10th Grade (Secondary)',
      institution: 'Prem Niketan Ucch Madymik Vidhylay',
      location: 'Jaipur, Rajasthan',
      duration: '2020 - 2021',
      status: 'Completed',
      description: 'Strong academic foundation with excellent performance in mathematics and science subjects.',
      highlights: [
        'Mathematics',
        'Science',
        'Social Studies',
        'English',
        'Hindi',
        'Sanskrit'
      ],
      gpa: 'Percentage: 86%',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const courses = [
    {
      title: 'Full Stack Web Development',
      provider: 'Self-Learning & Projects',
      duration: '2023 - Present',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      title: 'DevOps & Cloud Computing',
      provider: 'Online Platforms',
      duration: '2024 - Present',
      skills: ['Docker', 'AWS', 'Linux', 'CI/CD']
    },
    {
      title: 'Mobile App Development',
      provider: 'Flutter Documentation & Tutorials',
      duration: '2023 - 2024',
      skills: ['Flutter', 'Dart', 'Firebase', 'Mobile UI/UX']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-black pt-20"
    >
      <ThreeBackground type="waves" color="#06b6d4" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Education Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic background and continuous learning path that shaped my technical expertise
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Academic Timeline
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < education.length - 1 && (
                  <div className="absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-yellow-400 to-transparent transform -translate-x-1/2 z-10" />
                )}
                
                <div className={`glass dark:glass-dark rounded-2xl p-8 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                } hover:scale-105 transition-all duration-300`}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center mb-4 lg:mb-0 flex-shrink-0`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 lg:mb-0">
                          {edu.degree}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Currently Pursuing'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                        }`}>
                          {edu.status}
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {edu.institution}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* GPA/Percentage */}
                      <div className="flex items-center space-x-2 mb-4">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {edu.gpa}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                          Key Subjects/Areas:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Courses */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Additional Learning
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass dark:glass-dark rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {course.provider}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-500 mb-4">
                  <Calendar size={14} className="mr-2" />
                  <span className="text-xs">{course.duration}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Academic Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">3+</div>
                <p className="text-gray-600 dark:text-gray-400">Years of Study</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
                <p className="text-gray-600 dark:text-gray-400">Core Subjects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">∞</div>
                <p className="text-gray-600 dark:text-gray-400">Learning Journey</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;