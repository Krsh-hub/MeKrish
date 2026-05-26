import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import me2 from '../assets/me2.jpeg';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={containerRef} style={{ 
      height: '100vh', 
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '0 5vw'
    }}>
      {/* Immersive Asymmetrical Background */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          right: '-10%',
          width: '70%',
          height: '110%',
          y: yBg,
          backgroundImage: `url(${me2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
          filter: 'grayscale(30%) contrast(1.1) brightness(0.8)',
          zIndex: 0,
          maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)'
        }}
      />
      
      {/* Dark fade out to bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40%',
        background: 'linear-gradient(to top, var(--bg-color), transparent)',
        zIndex: 1
      }} />

      {/* Layered Typography Block */}
      <motion.div 
        style={{ zIndex: 10, y: yText, opacity: opacityText, position: 'relative' }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ 
              padding: '0.4rem 1rem', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '20px',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              backdropFilter: 'blur(10px)',
              background: 'rgba(255,255,255,0.03)'
            }}
          >
            Founder
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{ 
              padding: '0.4rem 1rem', 
              border: '1px solid var(--accent-glow)', 
              borderRadius: '20px',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              backdropFilter: 'blur(10px)',
              background: 'rgba(0,102,255,0.1)',
              color: 'var(--accent-color)'
            }}
          >
            Creative Strategist
          </motion.span>
        </div>

        <h1 style={{
          fontSize: 'clamp(4rem, 10vw, 10rem)',
          lineHeight: '0.9',
          letterSpacing: '-0.04em',
          margin: 0,
          color: '#fff',
          textShadow: '0 20px 40px rgba(0,0,0,0.5)',
          position: 'relative'
        }}>
          KRISHNENDU
          <br/>
          <span style={{ 
            color: 'transparent', 
            WebkitTextStroke: '2px rgba(255,255,255,0.8)',
            position: 'relative',
            left: '10%'
          }}>DHAR</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '2rem',
            color: 'var(--accent-color)',
            marginTop: '2rem',
            marginLeft: '5%',
            transform: 'rotate(-2deg)'
          }}
        >
          building ideas that refuse to stay small.
        </motion.p>
      </motion.div>

      {/* Floating ambient orb */}
      <motion.div
        animate={{ 
          x: [0, 50, 0, -50, 0],
          y: [0, -30, 0, 30, 0],
          scale: [1, 1.2, 1, 0.8, 1]
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
    </section>
  );
};

export default Hero;
