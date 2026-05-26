import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

        {/* Floating Thoughts */}
        {thoughts.map((thought, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, delay: thought.delay }}
            style={{
              position: 'absolute',
              top: thought.top,
              left: thought.left,
              y: index % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [-100, 100]), // Parallax effect
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
                fontSize: '1.1rem',
                color: '#fff',
                whiteSpace: 'nowrap',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                cursor: 'default'
              }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'var(--accent-color)',
                color: 'var(--accent-color)',
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
