import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CurrentBuild = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [-2, 4]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [3, -5]);
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} style={{ padding: '10rem 5vw', position: 'relative' }}>
      
      <div style={{ marginBottom: '8rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{ 
          fontFamily: 'var(--font-handwritten)', 
          fontSize: '3rem', 
          color: 'var(--text-muted)',
          transform: 'rotate(-2deg)',
          marginBottom: '1rem'
        }}>
          Currently building...
        </h2>
        <div style={{ width: '100px', height: '1px', background: 'var(--text-muted)' }} />
      </div>

      <div className="current-build-notes" style={{ position: 'relative', minHeight: '60vh' }}>
        
        {/* Sticky Note 1 */}
        <motion.div
          className="sticky-note-1"
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '350px',
            padding: '2rem',
            background: 'rgba(20, 20, 25, 0.8)',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            borderRadius: '4px',
            rotate: rotate1,
            y: y1,
            zIndex: 3,
            backdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--accent-color)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>PROJECT 02</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'monospace' }}>STEALTH</span>
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ambitious EdTech Venture</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Alongside CURAA, Krishnendu is quietly building an ambitious EdTech venture currently under wraps.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', marginTop: '1rem' }}>
            The project explores the future of learning through a modern, experience-first approach designed for the next generation of students and creators. Rather than treating education as a rigid system, the vision is to make learning immersive, engaging, emotionally connected, and future-oriented.
          </p>
        </motion.div>

        {/* Sticky Note 2 */}
        <motion.div
          className="sticky-note-2"
          style={{
            position: 'absolute',
            top: '30%',
            right: '10%',
            width: '400px',
            padding: '3rem 2rem',
            background: 'rgba(5, 5, 10, 0.9)',
            border: '1px dashed rgba(255,255,255,0.2)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.7)',
            borderRadius: '8px',
            rotate: rotate2,
            y: y2,
            zIndex: 2
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-handwritten)', fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', transform: 'rotate(-2deg)' }}>
            Status:
          </h3>
          <div style={{ color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            <p>Still in stealth mode.</p>
            <p>Still being shaped.</p>
            <p style={{ color: 'var(--accent-color)' }}>Still being built with obsession.</p>
          </div>
        </motion.div>

        {/* Abstract code snippet in background */}
        <motion.div
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            opacity: 0.1,
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            color: 'var(--accent-color)',
            lineHeight: '1.8',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          {`const visionary = new Founder({
  obsession: true,
  sleep: undefined,
  vision: "unbounded"
});

async function build() {
  while (true) {
    await visionary.iterate();
    if (visionary.impact > 1000000) break;
  }
}

build().catch(console.error);`}
        </motion.div>

      </div>
    </section>
  );
};

export default CurrentBuild;
