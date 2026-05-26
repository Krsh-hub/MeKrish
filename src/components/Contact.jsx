import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" style={{ 
      minHeight: '80vh', 
      position: 'relative',
      background: 'linear-gradient(to top, rgba(0, 136, 255, 0.05), var(--bg-color))'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ 
            fontSize: 'clamp(3rem, 6vw, 6rem)', 
            marginBottom: '2rem',
            color: '#fff',
            letterSpacing: '-0.02em'
          }}>
            Let's build something <br/>
            <span className="glow-text text-gradient">unforgettable.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '4rem'
          }}
        >
          <a href="https://www.instagram.com/heykr1sh?igsh=Mm5jODcya3ljNDc4" target="_blank" rel="noopener noreferrer" className="social-link" style={socialLinkStyle}>
            <InstagramIcon />
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/krishnendu-dhar-b2a5562b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link" style={socialLinkStyle}>
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:krishnendudhar10@gmail.com" className="social-link" style={socialLinkStyle}>
            <Mail size={24} />
            <span>Email</span>
          </a>
        </motion.div>

      </div>

      <div style={{
        position: 'absolute',
        bottom: '2rem',
        width: '100%',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        letterSpacing: '0.1em'
      }}>
        © {new Date().getFullYear()} KRISHNENDU DHAR. ALL RIGHTS RESERVED.
      </div>
    </section>
  );
};

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '1rem 2rem',
  borderRadius: '50px',
  border: '1px solid rgba(255,255,255,0.1)',
  color: 'var(--text-main)',
  background: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontSize: '0.9rem'
};

export default Contact;
