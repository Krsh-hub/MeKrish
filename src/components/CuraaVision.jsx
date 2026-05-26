import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import curaaLogo from '../assets/curaa.jpeg';

const CuraaVision = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);

  return (
    <section ref={containerRef} style={{ padding: '15rem 5vw', position: 'relative', background: '#000', overflow: 'hidden' }}>
      
      {/* Background Grids */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
        opacity: 0.5,
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        
        {/* Left: Typography & Vision */}
        <motion.div style={{ y: yText }}>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 6vw, 6rem)', 
            lineHeight: '0.9',
            marginBottom: '2rem',
            color: '#fff',
            letterSpacing: '-0.02em'
          }}>
            Building <br/>
            <span style={{ color: 'var(--curaa-accent)' }}>CURAA.</span>
          </h2>
          
          <div style={{ 
            paddingLeft: '2rem', 
            borderLeft: '2px solid var(--curaa-accent)',
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              “CURAA is not just another startup idea — it is an attempt to build something meaningful in a world overloaded with noise.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Built with a future-first mindset, CURAA represents experimentation, innovation, and the obsession to create products that genuinely solve problems instead of simply existing in the market. The vision behind CURAA is deeply rooted in understanding people, simplifying experiences, and building systems that feel human.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              For Krishnendu, CURAA is more than work. It is pressure, ambition, sleepless nights, uncertainty, resilience, and the excitement of building something from zero.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#fff', lineHeight: '1.8', fontStyle: 'italic', fontWeight: '500' }}>
              Every decision around CURAA is driven by one question:<br/>
              ‘Can this create real impact?’
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              The journey is still unfolding.”
            </p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05, x: 10 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '1rem',
              color: 'var(--curaa-accent)',
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.8rem',
              cursor: 'pointer'
            }}
          >
            Explore the vision <span>→</span>
          </motion.div>
        </motion.div>

        {/* Right: Abstract representation of CURAA */}
        <div style={{ position: 'relative', height: '600px', width: '100%' }}>
          <motion.div 
            style={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: '80%',
              height: '80%',
              background: 'linear-gradient(135deg, rgba(255,80,0,0.1), rgba(0,0,0,0))',
              border: '1px solid rgba(255,80,0,0.2)',
              borderRadius: '24px',
              backdropFilter: 'blur(20px)',
              scale: scaleImage,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
              overflow: 'hidden'
            }}
          >
            <motion.img 
              src={curaaLogo} 
              alt="CURAA Logo" 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                width: '60%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 30px rgba(255,80,0,0.3))',
                borderRadius: '50%',
                zIndex: 2,
                marginBottom: '2rem'
              }} 
            />
            
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-handwritten)', transform: 'rotate(-5deg)' }}>Building</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--curaa-accent)' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              boxShadow: ['0 0 50px rgba(255,80,0,0.2)', '0 0 150px rgba(255,80,0,0.4)', '0 0 50px rgba(255,80,0,0.2)']
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,80,0,0.8) 0%, transparent 70%)',
              filter: 'blur(50px)',
              zIndex: -1
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default CuraaVision;
