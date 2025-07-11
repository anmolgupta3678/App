import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Download, MessageCircle } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS configuration
      const serviceId = 'service_0njjgwv';
      const templateId = 'template_vxujyeo';
      const publicKey = 'rbwvSiTO4CDH_DZhA';
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anmolgupta3678@gmail.com',
      href: 'mailto:anmolgupta3678@gmail.com',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 84400 39109',
      href: 'tel:+918440039109',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, Rajasthan, India',
      href: '#',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/anmolgupta3678',
      color: 'hover:bg-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anmol-gupta-029713286/',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: 'https://x.com/Anmolgupta3678',
      color: 'hover:bg-black'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/anmolgupta3678/',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-rose-900 dark:to-black pt-20"
    >
      <ThreeBackground type="floating" color="#f43f5e" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                Let's Connect
              </h2>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {info.label}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className={`w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                <motion.a
                  href="/resume.pdf"
                  download="Anmol_Gupta_Resume.pdf"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <MessageCircle className="w-8 h-8 text-yellow-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Send Message
                </h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-gray-800 dark:text-white placeholder-gray-500"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-gray-800 dark:text-white placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-gray-800 dark:text-white placeholder-gray-500"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none text-gray-800 dark:text-white placeholder-gray-500"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </motion.div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                  >
                    ❌ Failed to send message. Please try again or contact me directly at anmolgupta3678@gmail.com
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className={`w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 hover:scale-105'
                  } text-black`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Let's Build Something Amazing Together
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">24h</div>
                <p className="text-gray-600 dark:text-gray-400">Response Time</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">∞</div>
                <p className="text-gray-600 dark:text-gray-400">Possibilities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;