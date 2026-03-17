import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      textRef.current,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          end: 'bottom bottom',
        }
      }
    );

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="contact" className="py-32 bg-dark-lighter min-h-[80vh] flex flex-col justify-between relative overflow-hidden" ref={containerRef}>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-96 bg-[var(--color-primary)] opacity-[0.05] rounded-[100%] blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full flex-grow flex flex-col justify-center items-center text-center relative z-10">
        <div className="text-sm tracking-[0.3em] uppercase text-gray-500 font-semibold mb-8">
          Next Steps
        </div>

        <h2 ref={textRef} className="text-6xl sm:text-8xl md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.9] mb-12">
          Let's <span className="text-stroke text-transparent">Talk</span>
        </h2>

        <a
          href="mailto:contact@example.com"
          className="inline-flex items-center justify-center gap-4 bg-white text-dark px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-primary)] transition-colors duration-300"
        >
          <Mail size={18} /> Get In Touch
        </a>
      </div>

      <footer ref={footerRef} className="max-w-7xl mx-auto px-6 sm:px-10 w-full mt-24 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Sainaro. All Rights Reserved.
        </div>

        <div className="flex items-center gap-8">
          <a href="https://github.com/Saynaro" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/khalid-sainaro/" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Linkedin size={20} />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
