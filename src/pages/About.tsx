import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Code, Coffee, Music, Camera } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const About: React.FC = () => {
  const interests = [
    { icon: Code, name: 'Coding', description: 'Building innovative solutions' },
    { icon: Coffee, name: 'Coffee', description: 'Fuel for creativity' },
    { icon: Music, name: 'Music', description: 'Inspiration and focus' },
    { icon: Camera, name: 'Photography', description: 'Capturing moments' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Always seeking new ways to solve problems and improve processes.',
    },
    {
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and knowledge sharing.',
    },
    {
      title: 'Quality',
      description: 'Committed to delivering high-quality, maintainable code.',
    },
    {
      title: 'Growth',
      description: 'Continuously learning and adapting to new technologies.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-black pt-20"
    >
      <ParticleBackground type="bubbles" color="#f7dc6f" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-yellow-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  My Journey
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Computer Science student at Vivekananda Global University, 
                  currently pursuing my BCA degree (2023-2026). My journey in technology is 
                  driven by curiosity and a desire to solve real-world problems through innovative solutions.
                </p>
                <p>
                  With expertise in Python, Linux, Docker, and Machine Learning, I'm constantly 
                  exploring new technologies and pushing the boundaries of what's possible in the 
                  digital realm. My goal is to contribute meaningfully to the tech industry.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  What I Love
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 text-center hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <interest.icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {interest.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {interest.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            My Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass dark:glass-dark rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold text-yellow-600 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass dark:glass-dark rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Fun Facts About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">3+</div>
              <p className="text-gray-600 dark:text-gray-300">Years of Coding</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">∞</div>
              <p className="text-gray-600 dark:text-gray-300">Cups of Coffee</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;