import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CinematicQuote = ({ quote }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div 
      ref={ref} 
      style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '0 5vw',
        position: 'relative',
        zIndex: 10
      }}
    >
      <motion.p 
        style={{ 
          opacity, 
          scale,
          y,
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 300,
          textAlign: 'center',
          color: 'var(--text-main)',
          textShadow: '0 0 30px rgba(255,255,255,0.1)',
          maxWidth: '800px',
          lineHeight: '1.2'
        }}
      >
        {quote}
      </motion.p>
    </div>
  );
};

export default CinematicQuote;
