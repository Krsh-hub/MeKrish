import React from 'react';
import { motion } from 'framer-motion';

const Identity = () => {
  return (
    <section id="identity" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Side: Cinematic Typography / Quote */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 4rem)', 
            lineHeight: '1.1',
            marginBottom: '2rem',
            color: 'var(--text-main)'
          }}>
            I romanticize <br/>
            <span className="text-gradient">building startups.</span>
          </h2>
          <div style={{
            width: '60px',
            height: '2px',
            backgroundColor: 'var(--accent-color)',
            marginBottom: '2rem'
          }} />
        </motion.div>

        {/* Right Side: Identity Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--text-muted)'
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
