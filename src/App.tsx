import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  const slideVariants = {
    initial: { x: '100vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { x: '-100vw', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  } as import('framer-motion').Variants;
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ minHeight: '100vh' }}
        className="relative z-10"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/education" element={<Education />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
  return (
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-gray-800"
          >
            Loading Portfolio...
          </motion.h2>
        </motion.div>
          </div>
    );
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen transition-colors duration-300 bg-black`}>
      <Router>
        <CustomCursor />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;