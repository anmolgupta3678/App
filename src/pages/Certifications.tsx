import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Star } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      date: '2025',
      status: 'Completed',
      description: 'Comprehensive certification covering Python programming for data science, AI, and development. Includes Pandas, NumPy, Jupyter, and web scraping.',
      skills: ['Python', 'Data Science', 'AI', 'Pandas', 'NumPy', 'Web Scraping', 'REST API'],
      color: 'from-blue-400 to-blue-600',
      link: 'https://www.coursera.org/account/accomplishments/verify/OCZVIO8D28TF'
    },
    {
      title: 'Basics of Cisco Networking',
      issuer: 'LearnQuest',
      date: '2025',
      status: 'Completed',
      description: 'Comprehensive certification covering fundamental networking concepts, OSI models, network infrastructure, routing, and security.',
      skills: ['Networking', 'Cisco', 'OSI Models', 'Network Security', 'TCP/IP', 'Network Administration'],
      color: 'from-blue-500 to-blue-700',
      link: 'https://www.coursera.org/account/accomplishments/verify/QR33RG061ZXC'
    },
    {
      title: 'Preparing Data for Analysis with Microsoft Excel',
      issuer: 'Microsoft',
      date: '2025',
      status: 'Completed',
      description: 'Professional certification for data preparation and analysis using Microsoft Excel. Covers data cleansing, manipulation, and analysis techniques.',
      skills: ['Excel', 'Data Analysis', 'Data Cleansing', 'Power BI', 'Data Management'],
      color: 'from-green-500 to-green-700',
      link: 'https://www.coursera.org/account/accomplishments/verify/Y1A7DKQC6RCZ'
    },
  
    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      date: '2024',
      status: 'Completed',
      description: 'Comprehensive certification covering AWS cloud fundamentals and foundational services.',
      skills: ['AWS', 'Cloud Computing', 'Cloud Services', 'DevOps'],
      color: 'from-orange-500 to-yellow-500',
      link: 'https://www.credly.com/badges/1413f7a5-befa-488a-90c6-da9c2b039536/linked_in_profile'
    },
    {
      title: 'EXIN Cloud Computing Foundation Certificate (CLOUDF)',
      issuer: 'EXIN',
      date: '2024',
      status: 'Completed',
      description: 'Professional certification confirming understanding of cloud architectures, business benefits, security aspects and service agreements.',
      skills: ['Cloud Computing', 'Cloud Architecture', 'Security', 'Service Agreements'],
      color: 'from-blue-600 to-indigo-600',
      link: 'https://mylogin.exin.nl/polarserver.asp?Script=GetLinkedInPost&CandidateCertificateGUID=24324517-3AAB-40CE-9A15-5423304BD628&ts=1255411859'
    },
    {
      title: 'Basics of AI/ML Workshop',
      issuer: 'GeeksforGeeks & IIT Roorkee',
      date: '2024',
      status: 'Completed',
      description: 'Participation certificate for AI/ML workshop conducted by Cognizance 2025, the Annual Technical Festival of IIT Roorkee in collaboration with GeeksforGeeks.',
      skills: ['AI', 'Machine Learning', 'Data Science', 'Workshop'],
      color: 'from-purple-500 to-pink-500',
      link: 'https://hyperstack.id/credential/db1168b5-2ec8-4da4-b0af-cf4e41535a33'
    }
  ];

  const achievements = [
    {
      title: 'National Hackathon Participation',
      description: 'Participated in 2 national-level hackathons showcasing problem-solving skills',
      year: '2023-2024',
      icon: Award
    },
    {
      title: 'BCA Student at VGU',
      description: 'Currently pursuing Bachelor of Computer Applications (BCA) at Vivekananda Global University',
      year: '2023-2026',
      icon: Star
    },
    {
      title: 'LinuxWorld Informatics Intern',
      description: 'Currently doing first internship at LinuxWorld Informatics Pvt. Ltd., exploring Python',
      year: '2024-Present',
      icon: Award
    },
    {
      title: 'AI & Data Science Focus',
      description: 'Specializing in AI and Data Science with hands-on project experience',
      year: '2023-Present',
      icon: Star
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-purple-900 dark:to-black pt-20"
    >
      <ParticleBackground type="stars" color="#a855f7" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Certifications & Achievements
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and notable achievements in my journey
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Professional Certifications
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
              >
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'In Progress' 
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      : cert.status === 'Planned'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  }`}>
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-yellow-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a 
                  href={cert.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                    cert.link 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                  }`}
                >
                  <ExternalLink size={16} />
                  <span>View Certificate</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Notable Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass dark:glass-dark rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-yellow-600 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-500">
                      <Calendar size={14} className="mr-2" />
                      <span className="text-xs">{achievement.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Continuous Learning Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently pursuing multiple certifications to enhance my expertise in cloud computing and DevOps.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">3+</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Certifications in Progress</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">5+</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Achievements Earned</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">∞</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Learning Never Stops</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certifications;