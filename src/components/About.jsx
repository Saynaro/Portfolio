import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stack = [
  'React', 'Node.js', 'Express', 'Tailwind', 'GSAP',
  'Prisma', 'MySQL', 'PostgreSQL', 'Figma', 'JavaScript (ES6)',
  'HTML5 & CSS3', 'JWT', 'REST API', 'Redis', 'Docker',
  'Socket.IO', 'Hetzner', 'Vercel', 'OAuth'
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
            À propos de moi
          </div>

          <div ref={textRef} className="md:col-span-8 space-y-6 text-gray-200">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
              Développeur <span className="text-[var(--color-primary)]">Fullstack</span> passionné par l'écosystème JavaScript, je conçois des applications web modernes, sécurisées et hautement interactives avec une forte orientation produit.
            </p>

            <div className="text-gray-400 text-lg sm:text-xl font-light pt-4 space-y-4">
              <p className="font-medium text-gray-300">Je m’intéresse particulièrement à :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>La conception de SaaS scalables & multi-tenant</li>
                <li>L'optimisation des performances et le temps réel (WebSockets, Caching)</li>
                <li>Les architectures backend robustes et la conteneurisation (Docker, DevOps)</li>
              </ul>

              <p className="pt-6 text-xl sm:text-2xl font-light text-gray-300 leading-relaxed">
                <span className="text-[var(--color-primary)]"> Mon objectif :</span> transformer des idées complexes en produits fluides, performants et centrés sur l'expérience utilisateur.
              </p>
            </div>
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
