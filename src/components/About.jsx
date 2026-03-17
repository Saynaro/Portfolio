import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stack = [
  'React', 'Node.js', 'Express', 'Tailwind', 'GSAP', 
  'Prisma', 'MySQL', 'PostgreSQL', 'Figma', 'JavaScript (ES6)', 
  'HTML5 & CSS3', 'JWT', 'REST API'
];

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    
    // Animate text reveal relative to scroll
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        }
      }
    );

    // Infinite marquee animation
    gsap.to('.marquee-content', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <section id="about" className="py-32 relative bg-dark-lighter overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-4 border-t border-gray-800 pt-16">
          <div className="md:col-span-4 uppercase text-sm tracking-[0.2em] text-gray-400 font-semibold mt-2">
            Who I Am
          </div>
          
          <div ref={textRef} className="md:col-span-8 space-y-8 text-2xl sm:text-4xl md:text-5xl font-medium leading-tight text-gray-200">
            <p>
              I am a <span className="text-[var(--color-primary)]">Fullstack Web Developer</span> passionate about crafting digital experiences that harmonize clean code with stunning aesthetics.
            </p>
            <p className="text-gray-500 text-xl sm:text-2xl pt-4 font-light max-w-2xl leading-relaxed">
              My expertise spans the entire development lifecycle—from responsive frontends built with modern libraries to robust backends powered by scalable infrastructure and secure APIs.
            </p>
          </div>
        </div>

      </div>

      {/* Tech Stack Marquee */}
      <div className="mt-32 w-full flex overflow-hidden whitespace-nowrap bg-[var(--color-primary)] text-dark py-6 sm:py-8 border-y border-[var(--color-primary)] select-none">
        <div className="marquee-content flex items-center space-x-12 sm:space-x-24 text-4xl sm:text-6xl font-bold uppercase tracking-tighter shrink-0 pl-12 sm:pl-24">
          {stack.map((item, i) => <span key={i}>{item}</span>)}
        </div>
        <div className="marquee-content flex items-center space-x-12 sm:space-x-24 text-4xl sm:text-6xl font-bold uppercase tracking-tighter shrink-0 pl-12 sm:pl-24">
          {stack.map((item, i) => <span key={i + stack.length}>{item}</span>)}
        </div>
      </div>
      
    </section>
  );
};

export default About;
