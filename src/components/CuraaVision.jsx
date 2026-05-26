import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
            marginBottom: '3rem'
          }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Healthcare is broken. The architecture is outdated, the user experience is an afterthought, and the system is bleeding efficiency. We are not just building software; we are re-architecting the infrastructure of care.
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
              justifyContent: 'flex-end',
              padding: '3rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>v1.0.0</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--curaa-accent)' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
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
