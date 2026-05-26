import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import me3 from '../assets/me3.jpeg';

const milestones = [
  { year: "2019", title: "The Spark", desc: "Discovered entrepreneurship back in 8th grade. Realized early on that the obsession wasn't just about building software, but about building businesses and solving real problems." },
  { year: "2024", title: "College & Evolution", desc: "Got admitted to college for Computer Science Engineering. Expanding my technical toolkit while navigating the early stages of the startup ecosystem." },
  { year: "2025", title: "Setbacks & Inception", desc: "A brutal setback year on all fronts. But pressure creates clarity. Learned hard lessons, doubled down on my convictions, and started building CURAA from the ground up." },
  { year: "2026", title: "It's Official", desc: "Now 19 and in my 2nd year of college. CURAA officially registered on January 1st, 2026. Taking the leap into the unknown, cementing the vision, and embracing the chaos of startup life." },
  { year: "NOW", title: "Devoted & Exploring", desc: "Fully devoted to scaling CURAA while aggressively exploring other crazy, ambitious ideas. The journey doesn't end; we're just getting started." },
];

const JourneyCard = ({ item, index, total }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 20%"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="journey-card"
      style={{
        position: 'sticky',
        top: `${20 + index * 5}vh`,
        padding: '3rem',
        background: 'rgba(5, 5, 10, 0.95)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '16px',
        boxShadow: '0 -20px 40px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(20px)',
        scale,
        opacity,
        zIndex: index,
        marginBottom: '40vh', // space between cards
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start'
      }}
    >
      <div style={{ fontFamily: 'var(--font-handwritten)', fontSize: '4rem', color: 'var(--accent-color)', lineHeight: 0.8, transform: 'rotate(-5deg)' }}>
        {item.year}
      </div>
      <div>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>{item.title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.6' }}>{item.desc}</p>
      </div>
    </motion.div>
  );
};

const Journey = () => {
  return (
    <section id="journey" style={{ padding: '10rem 5vw', position: 'relative', background: '#000' }}>
      
      {/* Sticky Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          backgroundImage: `url(${me3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) opacity(0.3)',
          zIndex: 0,
          maskImage: 'linear-gradient(to right, transparent, black 50%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%)'
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '10rem' }}>
          <h2 style={{ fontSize: '4vw', color: '#fff', letterSpacing: '-0.02em' }}>The Documentary.</h2>
        </div>

        <div style={{ position: 'relative', paddingBottom: '20vh' }}>
          {milestones.map((item, index) => (
            <JourneyCard key={index} item={item} index={index} total={milestones.length} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journey;
