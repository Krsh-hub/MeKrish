import React, { useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import CurrentBuild from './components/CurrentBuild';
import Identity from './components/Identity';
import CuraaVision from './components/CuraaVision';
import InsideMyMind from './components/InsideMyMind';
import Journey from './components/Journey';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  
  // Smooth scroll behavior for anchor links (if any)
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <SmoothScroll>
      <div className="noise-overlay"></div>
      <CustomCursor />
      
      <main>
        <Hero />
        <CurrentBuild />
        <Identity />
        <CuraaVision />
        <InsideMyMind />
        <Journey />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

export default App;
