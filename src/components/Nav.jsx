import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 left-0 w-full p-6 sm:p-10 flex justify-between items-center z-50 ${isOpen ? '' : 'mix-blend-difference'}`}>
        <div className="text-xl font-bold tracking-tighter text-white relative z-50">
          <a href="#home" onClick={closeMenu}>SAINARO<span className="text-[var(--color-primary)]">.</span></a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-300 relative z-50">
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
        
        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white relative z-50" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="flex flex-col gap-10 text-3xl font-medium tracking-wide text-gray-200 text-center">
          <a href="#about" onClick={closeMenu} className="hover:text-white active:text-[var(--color-primary)] hover:scale-110 transition-all duration-300">About</a>
          <a href="#skills" onClick={closeMenu} className="hover:text-white active:text-[var(--color-primary)] hover:scale-110 transition-all duration-300">Skills</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-white active:text-[var(--color-primary)] hover:scale-110 transition-all duration-300">Projects</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-white active:text-[var(--color-primary)] hover:scale-110 transition-all duration-300">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
