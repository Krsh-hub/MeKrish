import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import me1 from '../assets/me1.jpeg';
import F1CarAnimation from './F1CarAnimation';

const Identity = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <section id="identity" style={{ padding: '15rem 5vw', position: 'relative', overflow: 'hidden' }}>
      <F1CarAnimation />
      
      {/* Background oversized typography */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          fontSize: '20vw',
          color: 'rgba(255,255,255,0.01)',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          pointerEvents: 'none',
          y: useTransform(scrollYProgress, [0, 1], [0, 300])
        }}
      >
        OBSESSED
      </motion.div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Broken Grid Image */}
        <motion.div
          style={{ 
            y: yImage,
            width: '40vw',
            maxWidth: '500px',
            aspectRatio: '3/4',
            position: 'absolute',
            right: '5%',
            top: '-10vh',
            zIndex: 1
          }}
        >
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <img 
              src={me1} 
              alt="Krishnendu" 
              style={{
                width: '100%',
                height: '110%',
                objectFit: 'cover',
                filter: 'grayscale(50%) contrast(1.2)',
              }}
            />
          </div>
          <div style={{ 
            position: 'absolute', 
            bottom: '-20px', 
            left: '-20px', 
            width: '100px', 
            height: '100px', 
            border: '1px solid var(--accent-color)', 
            borderRight: 'none', 
            borderTop: 'none' 
          }} />
        </motion.div>

        {/* Floating Text Blocks */}
        <motion.div 
          style={{ y: yText, position: 'relative', zIndex: 2, width: '60%', paddingTop: '10vh' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 5rem)', 
            lineHeight: '1',
            marginBottom: '3rem',
            color: 'var(--text-main)',
            position: 'relative'
          }}>
            I romanticize <br/>
            the <span style={{ fontFamily: 'var(--font-handwritten)', color: 'var(--accent-color)', fontSize: '1.2em', fontWeight: 'normal' }}>chaos</span> of <br/>
            building startups.
          </h2>

          <div style={{ 
            padding: '2rem 0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            color: 'var(--text-muted)',
            backdropFilter: 'blur(5px)'
          }}>
            <p>
              <strong style={{ color: '#fff' }}>A young entrepreneur from India.</strong> Fascinated by the intersection of AI-native products, bold branding, and human creativity.
            </p>
            <p>
              I am driven by an obsession to build meaningful things. The kind of things that solve real problems, spark emotion, and refuse to be ignored. I thrive in the pressure cooker of startup culture because <span style={{ color: '#fff' }}>pressure creates clarity.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Identity;
