import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

// Import local project images
import sainairImg from '../assets/sainair.png';
import gameGuideImg from '../assets/GameGuide.png';
import ktSegmentImg from '../assets/KTSegment.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Site Climatisation',
    type: 'Corporate Website',
    url: 'https://sainair.com',
    imageUrl: sainairImg,
    tech: ['React', 'Tailwind', 'Responsive'],
    color: '#00ffcc'
  },
  {
    id: 2,
    title: 'Guides de Jeux Video',
    type: 'Fullstack Platform',
    url: 'https://guideprojet.onrender.com/',
    imageUrl: gameGuideImg,
    tech: ['Node.js', 'Express', 'React', 'Fullstack'],
    color: '#ff00cc'
  },
  {
    id: 3,
    title: 'School IT Site',
    type: 'Educational Portal',
    url: 'https://school-it-omega.vercel.app/',
    imageUrl: ktSegmentImg,
    tech: ['Full Responsive', 'Contact Form', 'UI/UX'],
    color: '#00ccff'
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const el = containerRef.current;

    // Pinning effect or staggered reveal
    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
          }
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <section id="projects" className="py-32 bg-dark relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-24">
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter uppercase">Selected<br /><span className="text-stroke text-transparent">Works</span></h2>
          <p className="max-w-xs text-gray-400 mt-6 sm:mt-0 font-light text-lg">
            A showcase of my recent fullstack and frontend projects, built with modern web technologies.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={addToRefs}
              className="group relative flex flex-col md:flex-row gap-8 sm:gap-16 items-center"
            >

              {/* Image Container */}
              <div className={`w-full md:w-3/5 rounded-2xl overflow-hidden relative overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-700 ease-in-out`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to a gradient if image service fails
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = `linear-gradient(45deg, ${project.color}22, #000)`;
                  }}
                />
              </div>

              {/* Text Container */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className="text-sm tracking-[0.2em] text-gray-500 uppercase font-semibold mb-4">
                  0{index + 1} &mdash; {project.type}
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-none group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full border border-gray-700 text-xs text-gray-300 font-medium tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-white uppercase tracking-widest text-sm font-semibold max-w-max pb-1 border-b border-white hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300 transform group-hover:translate-x-2"
                >
                  Visit Live Site <ExternalLink size={16} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
