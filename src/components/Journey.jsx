import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  { year: "The Genesis", title: "Student Life & Techno India University", desc: "Where the curiosity began. Discovering the world of code, design, and what it means to build." },
  { year: "The Spark", title: "Discovering Entrepreneurship", desc: "Realizing that building software wasn't enough. The obsession shifted to building businesses and solving real problems." },
  { year: "The Leap", title: "Building CURAA", desc: "Taking the leap into the unknown. Assembling a vision, shaping the product, and embracing the chaos of startup life." },
  { year: "The Crucible", title: "Setbacks and Pressure", desc: "Learning that growth comes from friction. Dealing with failures, iterating rapidly, and understanding resilience." },
  { year: "The Horizon", title: "Rebuilding & Dreaming Bigger", desc: "The journey doesn't end. We are just getting started. Scaling the vision and creating an unforgettable legacy." },
];

const Journey = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" style={{ padding: '8rem 2rem', position: 'relative', background: '#000' }}>
      <div className="container" ref={containerRef} style={{ position: 'relative', maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '3rem', color: '#fff' }}>The Cinematic Journey</h2>
        </div>

        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '50px',
          top: '200px',
          bottom: '0',
          width: '2px',
          background: 'rgba(255,255,255,0.1)',
          zIndex: 1
        }}>
          <motion.div style={{
            width: '100%',
            height: lineHeight,
            background: 'var(--accent-color)',
            boxShadow: '0 0 15px var(--accent-color)'
          }} />
        </div>

        {/* Milestones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                paddingLeft: '100px',
                zIndex: 2
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '43px',
                top: '0',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#000',
                border: '2px solid var(--accent-color)',
                boxShadow: '0 0 10px var(--accent-glow)'
              }} />

              <span style={{ 
                color: 'var(--accent-color)', 
                fontFamily: 'var(--font-display)', 
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                {item.year}
              </span>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journey;
