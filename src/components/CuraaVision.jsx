import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CuraaVision = () => {
  return (
    <section id="curaa" style={{ padding: '8rem 2rem', position: 'relative' }}>
      
      {/* Abstract Background element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          right: '-10%',
          top: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--curaa-glow) 0%, transparent 60%)',
          filter: 'blur(100px)',
          zIndex: 0,
          borderRadius: '50%'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="curaa-glow-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            CURAA
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            More than a startup. A movement focused on solving meaningful problems through ambitious thinking and future-focused vision.
          </p>
        </motion.div>

        {/* Cinematic Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="glass-panel"
          style={{
            padding: '4rem',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 102, 0, 0.2)',
            background: 'linear-gradient(135deg, rgba(255,102,0,0.05) 0%, rgba(0,0,0,0) 100%)'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Redefining the standard.</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '500px', lineHeight: '1.6' }}>
              At CURAA, we don't just build products. We engineer experiences that push boundaries. It's about taking bold bets on product innovation and relentless experimentation.
            </p>
            
            <a href="#" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: 'var(--curaa-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              Explore Vision <ArrowRight size={16} />
            </a>
          </div>

          {/* Decorative wireframe/grid in background of card */}
          <div style={{
            position: 'absolute',
            right: '-10%',
            bottom: '-20%',
            width: '50%',
            height: '100%',
            backgroundImage: 'linear-gradient(rgba(255,102,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            transform: 'perspective(500px) rotateX(45deg)',
            opacity: 0.5,
            zIndex: 1
          }} />
        </motion.div>

        {/* Future Ventures Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            marginTop: '4rem',
            padding: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span style={{ color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>01 / Future Ventures</span>
          <span style={{ fontStyle: 'italic', color: '#fff' }}>Always ideating. Always building.</span>
        </motion.div>

      </div>
    </section>
  );
};

export default CuraaVision;
