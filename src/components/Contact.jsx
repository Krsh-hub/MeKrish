import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 3rem',
        borderRadius: '100px',
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.02)',
        color: 'var(--text-main)',
        textDecoration: 'none',
        fontSize: '1.2rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        cursor: 'none', // Assuming we have CustomCursor
        backdropFilter: 'blur(10px)',
      }}
      whileHover={{
        background: 'var(--accent-color)',
        color: '#fff',
        borderColor: 'var(--accent-color)',
        scale: 1.05
      }}
    >
      {children}
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section id="contact" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'relative',
      background: '#000',
      overflow: 'hidden'
    }}>
      
      {/* Cinematic Text Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        style={{
          position: 'absolute',
          width: '150vw',
          height: '150vw',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: 'clamp(3rem, 8vw, 8rem)', 
          lineHeight: '0.9', 
          marginBottom: '2rem',
          color: '#fff',
          letterSpacing: '-0.04em'
        }}>
          Let's build <br/> 
          <span style={{ color: 'var(--text-muted)' }}>something</span> <br/>
          <span style={{ fontFamily: 'var(--font-handwritten)', color: 'var(--accent-color)', fontSize: '1.2em' }}>huge.</span>
        </h2>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '1.5rem', marginBottom: '4rem' }}>
          Always open to visionary ideas.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <MagneticButton href="mailto:krishnendudhar10@gmail.com">
            Email Me
          </MagneticButton>
          <MagneticButton href="https://www.linkedin.com/in/krishnendu-dhar-b2a5562b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            LinkedIn
          </MagneticButton>
          <MagneticButton href="https://www.instagram.com/heykr1sh?igsh=Mm5jODcya3ljNDc4">
            Instagram
          </MagneticButton>
        </div>
      </div>
      
      <div style={{ position: 'absolute', bottom: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
        © {new Date().getFullYear()} KRISHNENDU DHAR. ALL RIGHTS RESERVED.
      </div>
    </section>
  );
};

export default Contact;
