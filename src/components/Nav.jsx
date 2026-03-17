import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Nav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full p-6 sm:p-10 flex justify-between items-center z-40 mix-blend-difference">
      <div className="text-xl font-bold tracking-tighter text-white">
        <a href="#home">SAINARO<span className="text-[var(--color-primary)]">.</span></a>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-300">
        <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
        <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
      </div>
      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </nav>
  );
};

export default Nav;
