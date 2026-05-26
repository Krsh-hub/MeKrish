import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const F1CarAnimation = () => {
  const containerRef = useRef(null);
  
  // Track the scroll progress of this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to horizontal movement (moves from left to right)
  const carX = useTransform(scrollYProgress, [0, 1], ["-50vw", "150vw"]);
  
  // Slight tilt/wobble for speed effect
  const carRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -2, 0]);

  return (
    <div ref={containerRef} style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 20 }}>
      <motion.div
        style={{
          x: carX,
          y: '80vh', // Position near the bottom of the section
          rotate: carRotate,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          opacity: 0.8,
          filter: 'drop-shadow(0 0 10px var(--accent-glow))'
        }}
      >
        {/* Speed lines trailing behind the car */}
        <motion.div 
          animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          style={{
            width: '200px',
            height: '2px',
            background: 'linear-gradient(to right, transparent, var(--accent-color))',
            marginRight: '-20px',
            transformOrigin: 'right center'
          }}
        />
        
        {/* Minimalist F1 Car SVG Silhouette */}
        <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Body */}
          <path d="M10,40 L30,35 L50,25 L80,20 L130,20 L160,25 L180,30 L195,40 Z" fill="var(--text-main)" />
          {/* Rear Wing */}
          <path d="M10,40 L10,15 L30,15 L30,35 Z" fill="var(--text-main)" />
          {/* Front Wing */}
          <path d="M170,40 L170,35 L195,35 L195,40 Z" fill="var(--text-main)" />
          {/* Halo / Cockpit */}
          <path d="M80,20 L90,10 L110,10 L120,20 Z" fill="var(--accent-color)" opacity="0.8" />
          
          {/* Wheels */}
          <circle cx="45" cy="40" r="15" fill="#111" stroke="#333" strokeWidth="3" />
          <circle cx="155" cy="40" r="15" fill="#111" stroke="#333" strokeWidth="3" />
          {/* Wheel Rims (spinning effect via CSS if we wanted, but static is fine here) */}
          <circle cx="45" cy="40" r="5" fill="var(--accent-color)" />
          <circle cx="155" cy="40" r="5" fill="var(--accent-color)" />
        </svg>

      </motion.div>
    </div>
  );
};

export default F1CarAnimation;
