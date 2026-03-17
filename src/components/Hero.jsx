import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      textRefs.current,
      { y: 150, opacity: 0, rotateZ: 5 },
      { 
        y: 0, 
        opacity: 1, 
        rotateZ: 0,
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power4.out',
        delay: 0.2
      }
    ).fromTo(
      '.hero-fade-in',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' },
      '-=0.5'
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-3xl filter pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10 flex flex-col justify-center h-full">
        
        <div className="mb-6 hero-fade-in text-[var(--color-primary)] font-medium tracking-wider uppercase text-sm sm:text-base">
          Based in the World
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-[10vw] font-bold leading-[0.9] tracking-tighter uppercase whitespace-nowrap">
          <div className="overflow-hidden">
            <span ref={addToRefs} className="block">Full Stack</span>
          </div>
          <div className="overflow-hidden flex items-center gap-4 sm:gap-8">
            <span ref={addToRefs} className="block text-stroke text-transparent">Developer</span>
          </div>
        </h1>

        <div className="mt-16 sm:mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10 hero-fade-in">
          <div className="max-w-md text-gray-400 text-lg sm:text-xl font-light leading-relaxed">
            I craft immersive, high-performance web experiences blending modern development with sleek aesthetics. Let's build something exceptional.
          </div>
          
          <a href="#projects" className="group flex items-center gap-4 hover:gap-6 transition-all duration-300">
            <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-dark transition-all duration-300">
              <ArrowDownRight strokeWidth={1.5} />
            </div>
            <span className="text-sm uppercase tracking-widest font-medium group-hover:text-[var(--color-primary)] transition-colors duration-300">View Work</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
