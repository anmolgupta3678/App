import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-3 h-3"
      style={{
        left: mousePosition.x - 6,
        top: mousePosition.y - 6,
      }}
    >
      <div className="w-full h-full rounded-full bg-yellow-400/60" />
    </motion.div>
  );
};

export default CustomCursor;