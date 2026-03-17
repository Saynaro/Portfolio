import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Use GSAP quickTo for highly optimized, smooth cursor tracking
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    const moveCursor = (e) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    const handleMouseEnter = () => {
      setHovering(true);
      gsap.to(cursor, { 
        scale: 2.5, 
        backgroundColor: 'rgba(200, 200, 200, 0.1)',
        backdropFilter: 'blur(4px)',
        duration: 0.3, 
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      setHovering(false);
      gsap.to(cursor, { 
        scale: 1, 
        backgroundColor: 'rgba(210, 210, 210, 0.7)', // Soft grey dot like in the video
        backdropFilter: 'none',
        duration: 0.3, 
        ease: "power2.out" 
      });
    };

    // Attach hover effects to all interactive elements
    const interactables = document.querySelectorAll('a, button');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      // Make sure elements themselves don't show the default cursor
      el.style.cursor = 'none';
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Hide default cursor across the entire document
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-[rgba(210,210,210,0.7)] pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center shadow-lg mix-blend-difference"
      style={{ willChange: 'transform, width, height' }}
    >
      <span 
        className="text-[4px] uppercase tracking-widest text-white font-bold opacity-0 transition-opacity duration-300 absolute"
        style={{ opacity: isHovering ? 1 : 0 }}
      >
        Interact
      </span>
    </div>
  );
};

export default CustomCursor;
