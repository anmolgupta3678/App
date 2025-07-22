import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag, X } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Job Predictor System',
      year: '2024',
      description: 'A machine learning-powered system for predicting job market trends and matching candidates with suitable positions using advanced algorithms.',
      longDescription: 'An intelligent job prediction system that uses machine learning algorithms to analyze job market trends and match candidates with suitable positions. Features include skill-based matching, salary prediction, and career path recommendations. Built with Python, scikit-learn, and advanced data analysis techniques.',
      technologies: ['Python', 'Machine Learning', 'scikit-learn', 'Data Analysis', 'Pandas', 'NumPy'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/anmolgupta3678/Job-predictor.git',
      demo: '#',
      features: [
        'Job market trend analysis',
        'Skill-based matching',
        'Salary prediction',
        'Career path recommendations',
        'Machine learning algorithms'
      ]
    },
  
    {
      id: 2,
      title: 'Automated Remote DevOps Tasks',
      year: '2024',
      description: 'A comprehensive automation system for managing Linux systems and Docker containers with real-time monitoring and deployment capabilities.',
      longDescription: 'Advanced DevOps automation platform that enables remote management of Linux systems and Docker containers through SSH. Features include automated deployment, real-time monitoring, system health tracking, and container orchestration. Built with Python, SSH automation, and Docker APIs.',
      technologies: ['Python', 'SSH', 'Docker', 'Linux', 'DevOps', 'Automation'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/anmolgupta3678/Docker-automation.git',
      demo: '#',
      features: [
        'SSH automation',
        'Docker container management',
        'Real-time monitoring',
        'Automated deployment',
        'System health tracking'
      ]
    },
    {
      id: 3,
      title: 'Smart Queue System',
      year: '2025',
      description: 'An intelligent queue management system that optimizes customer flow and reduces waiting times in service centers.',
      longDescription: 'Revolutionary queue management system that uses predictive analytics to optimize customer flow. Features include virtual queuing, real-time wait time predictions, and automated notifications. Supports multiple service points and provides comprehensive analytics for business optimization.',
      technologies: ['React', 'Node.js', 'Firebase', 'Flutter', 'Analytics', 'Push Notifications'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      features: [
        'Virtual queue management',
        'Predictive wait times',
        'Multi-service support',
        'Real-time notifications',
        'Analytics dashboard'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-black pt-20"
    >
      <ParticleBackground type="network" color="#10b981" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass dark:glass-dark rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                  {project.year}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-yellow-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <>
                      {/* Modal Header */}
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <X size={20} />
                        </button>
                        <div className="absolute bottom-4 left-6">
                          <h2 className="text-3xl font-bold text-white mb-2">
                            {project.title}
                          </h2>
                          <div className="flex items-center space-x-4 text-white/80">
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{project.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Modal Content */}
                      <div className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Description */}
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                              Project Overview
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              {project.longDescription}
                            </p>

                            {/* Features */}
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                                >
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies & Links */}
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-2 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                              >
                                <Github size={20} />
                                <span>View Source Code</span>
                              </a>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all"
                              >
                                <ExternalLink size={20} />
                                <span>Live Demo</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;