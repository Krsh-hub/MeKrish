import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import me2 from '../assets/me2.jpeg';

const taglines = [
  "Building ideas that refuse to stay small.",
  "Startup mind. Creative soul.",
  "Obsessed with impact.",
  "Still building.",
  "Turning chaos into vision."
];

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${me2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
          zIndex: 0
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50%',
        background: 'linear-gradient(to top, var(--bg-color), transparent)',
        zIndex: 1
      }} />

      {/* Background glow effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 3 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />

      <div className="container" style={{ textAlign: 'center', zIndex: 10 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-sans)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem'
          }}
        >
          Entrepreneur. Builder. Co-Founder of CURAA.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="glow-text"
          style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            margin: '0',
            lineHeight: '1',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(180deg, #ffffff 0%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          KRISHNENDU
          <br />
          DHAR
        </motion.h1>

        <div style={{ height: '40px', marginTop: '2rem', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                width: '100%',
                fontSize: '1.2rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic'
              }}
            >
              {taglines[taglineIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--text-muted), transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
