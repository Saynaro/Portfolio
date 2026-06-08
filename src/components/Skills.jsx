import React from 'react';
import { 
  SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiGreensock, 
  SiPrisma, SiMysql, SiPostgresql, SiFigma,
  SiRedis, SiDocker, SiSocketdotio, SiHetzner, SiVercel, SiOpenid
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'GSAP', icon: SiGreensock, color: '#88CE02' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Socket.io', icon: SiSocketdotio, color: '#FFFFFF' },
  { name: 'Hetzner', icon: SiHetzner, color: '#D50C22' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  { name: 'OAuth', icon: SiOpenid, color: '#F78C40' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter uppercase mb-4">
            Mon <span className="text-[var(--color-primary)]">Arsenal</span>
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-2xl">
            Les outils et technologies que j'utilise pour concevoir des expériences numériques robustes, évolutives et visuellement époustouflantes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-300 relative overflow-hidden"
              style={{ '--hover-color': skill.color }}
            >
              {/* Background Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: skill.color }}
              ></div>
              
              <skill.icon 
                className="text-5xl mb-4 text-[color:var(--hover-color)] opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 drop-shadow-md" 
              />
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
