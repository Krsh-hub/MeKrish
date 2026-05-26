import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import me1 from '../assets/me1.jpeg';

const Identity = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="identity" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Side: Cinematic Image & Quote */}
        <div style={{ position: 'relative' }}>
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <img 
                src={me1} 
                alt="Krishnendu Dhar" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(30%) contrast(1.2)',
                  transition: 'filter 0.5s ease'
                }}
                onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'}
                onMouseOut={e => e.currentTarget.style.filter = 'grayscale(30%) contrast(1.2)'}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, var(--bg-color), transparent 50%)',
                pointerEvents: 'none'
              }} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-20px',
              background: 'rgba(3, 3, 5, 0.8)',
              backdropFilter: 'blur(10px)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              zIndex: 10
            }}
          >
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
              lineHeight: '1.1',
              marginBottom: '1rem',
              color: 'var(--text-main)'
            }}>
              I romanticize <br/>
              <span className="text-gradient">building startups.</span>
            </h2>
            <div style={{
              width: '40px',
              height: '2px',
              backgroundColor: 'var(--accent-color)',
            }} />
          </motion.div>
        </div>

        {/* Right Side: Identity Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            paddingLeft: '2rem'
          }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--text-main)' }}>A young entrepreneur from India.</strong> Fascinated by the intersection of AI-native products, bold branding, and human creativity.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            I am driven by an obsession to build meaningful things. The kind of things that solve real problems, spark emotion, and refuse to be ignored. I thrive in the pressure cooker of startup culture because pressure creates clarity.
          </p>
          <p>
            When I'm not building, you'll find me immersed in football, music, and the relentless pursuit of innovation. I don't just want to build products; <span style={{ color: 'var(--text-main)' }}>I want to create things that outlive me.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Identity;
