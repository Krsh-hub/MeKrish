import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LateNightAtmosphere = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

  return (
    <section ref={ref} style={{ height: '150vh', background: '#000', position: 'relative' }}>
      <div className="cinematic-fog" />
      
      <div style={{ position: 'sticky', top: '0', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        
        {/* Floating Fragments */}
        <motion.div style={{ position: 'absolute', top: '20%', left: '10%', y: y1, filter: 'blur(4px)', opacity: 0.3, color: 'var(--accent-color)', fontFamily: 'monospace' }}>
          {`const vision = new Set();`}
        </motion.div>
        <motion.div style={{ position: 'absolute', bottom: '20%', right: '15%', y: y2, filter: 'blur(2px)', opacity: 0.4, color: '#fff', fontStyle: 'italic' }}>
          "Just one more iteration."
        </motion.div>
        <motion.div style={{ position: 'absolute', top: '70%', left: '20%', y: y1, filter: 'blur(6px)', opacity: 0.2, color: 'var(--curaa-accent)', fontFamily: 'monospace', fontSize: '2rem' }}>
          {`{ status: "building" }`}
        </motion.div>
        
        {/* Central Statement */}
        <motion.div style={{ opacity, filter: blur, textAlign: 'center', zIndex: 10 }}>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', marginBottom: '1rem' }}>
            Still figuring it out.
          </h2>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--text-muted)' }}>
            Still building anyway.
          </h2>
        </motion.div>
        
      </div>
    </section>
  );
};

export default LateNightAtmosphere;
