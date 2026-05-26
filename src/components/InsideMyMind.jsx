import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import brainImg from '../assets/brain.png';

const thoughts = [
  { text: "Ideas keep me awake at night.", top: "20%", left: "10%", delay: 0 },
  { text: "Pressure creates clarity.", top: "60%", left: "15%", delay: 0.2 },
  { text: "The future belongs to builders.", top: "30%", left: "60%", delay: 0.4 },
  { text: "Football. Music. Startups. Repeat.", top: "70%", left: "55%", delay: 0.6 },
  { text: "Still learning. Still building.", top: "45%", left: "35%", delay: 0.8 },
];

const InsideMyMind = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      id="mind" 
      ref={containerRef}
      style={{ 
        minHeight: '120vh', 
        position: 'relative',
        background: 'linear-gradient(180deg, var(--bg-color) 0%, #0a0a0f 100%)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', height: '100%', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', paddingTop: '10rem', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Inside My Mind
          </h2>
        </div>

        {/* Background Brain Image Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${brainImg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'drop-shadow(0 0 50px var(--accent-color))',
            zIndex: 0
          }}
        />

        {/* Floating Thoughts emerging from the center */}
        {thoughts.map((thought, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, top: '50%', left: '50%' }}
            whileInView={{ opacity: 1, scale: 1, top: thought.top, left: thought.left }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ 
              duration: 1.5, 
              delay: thought.delay, 
              type: "spring", 
              bounce: 0.4 
            }}
            style={{
              position: 'absolute',
              y: index % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [-100, 100]), // Parallax effect
              zIndex: 2
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, index % 2 === 0 ? 2 : -2, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4 + index, 
                ease: "easeInOut" 
              }}
              className="glass-panel"
              style={{
                padding: '1.5rem 2.5rem',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#fff',
                whiteSpace: 'nowrap',
                background: 'rgba(255, 102, 0, 0.1)', // Contrasting neon orange tint
                border: '1px solid rgba(255, 102, 0, 0.5)',
                boxShadow: '0 20px 40px rgba(255, 102, 0, 0.2), 0 0 20px rgba(255, 102, 0, 0.2) inset',
                cursor: 'default',
                transform: 'translate(-50%, -50%)' // Center the thought card on its coordinate
              }}
              whileHover={{ 
                scale: 1.1, 
                background: 'rgba(255, 102, 0, 0.2)',
                borderColor: '#ff6600',
                color: '#fff',
                boxShadow: '0 30px 60px rgba(255, 102, 0, 0.4), 0 0 30px rgba(255, 102, 0, 0.4) inset',
                transition: { duration: 0.3 }
              }}
            >
              "{thought.text}"
            </motion.div>
          </motion.div>
        ))}
        
      </div>
    </section>
  );
};

export default InsideMyMind;
