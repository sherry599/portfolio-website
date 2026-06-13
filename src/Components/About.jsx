import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiTailwindcss,
  SiGit,
  SiCplusplus,
  SiPython,
  SiDjango,
  SiSocketdotio,
  SiStripe,
  SiCloudinary,
  SiJsonwebtokens,
  SiPaypal,
  SiAmazons3,
  SiFramer,
  SiShadcnui,
  SiFigma,
} from 'react-icons/si';

import { CircularTestimonials } from '@/Components/ui/circular-testimonials';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stackVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const masterTechStack = [
  { label: 'JavaScript', icon: <SiJavascript className="w-4 h-4" />, color: 'text-[#F7DF1E]', hex: '#F7DF1E' },
  { label: 'TypeScript', icon: <SiTypescript className="w-4 h-4" />, color: 'text-[#3178C6]', hex: '#3178C6' },
  { label: 'React', icon: <SiReact className="w-4 h-4" />, color: 'text-[#61DAFB]', hex: '#61DAFB' },
  { label: 'RTK Query', icon: <SiRedux className="w-4 h-4" />, color: 'text-[#764ABC]', hex: '#764ABC' },
  { label: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" />, color: 'text-primary', hex: '#888888' },
  { label: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" />, color: 'text-[#339933]', hex: '#339933' },
  { label: 'Express', icon: <SiExpress className="w-4 h-4" />, color: 'text-secondary', hex: '#888888' },
  { label: 'MongoDB', icon: <SiMongodb className="w-4 h-4" />, color: 'text-[#47A248]', hex: '#47A248' },
  { label: 'Redis', icon: <SiRedis className="w-4 h-4" />, color: 'text-[#DC382D]', hex: '#DC382D' },
  { label: 'Docker', icon: <SiDocker className="w-4 h-4" />, color: 'text-[#2496ED]', hex: '#2496ED' },
  { label: 'GitHub Actions', icon: <SiGithubactions className="w-4 h-4" />, color: 'text-[#2088FF]', hex: '#2088FF' },
  { label: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" />, color: 'text-[#06B6D4]', hex: '#06B6D4' },
  { label: 'Git', icon: <SiGit className="w-4 h-4" />, color: 'text-[#F05032]', hex: '#F05032' },
  { label: 'Figma', icon: <SiFigma className="w-4 h-4" />, color: 'text-[#F24E1E]', hex: '#F24E1E' },
  { label: 'Python', icon: <SiPython className="w-4 h-4" />, color: 'text-[#3776AB]', hex: '#3776AB' },
  { label: 'Django', icon: <SiDjango className="w-4 h-4" />, color: 'text-[#2BA977]', hex: '#2BA977' }
];

const TechBadge = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-subtle bg-transparent text-sm text-primary transition-all duration-300 relative overflow-hidden"
      style={{
        borderColor: isHovered ? `${item.hex}50` : 'var(--border-default)',
        background: isHovered ? `${item.hex}08` : 'transparent',
        boxShadow: isHovered ? `0 8px 24px -6px ${item.hex}30` : 'none',
      }}
    >
      <span 
        className={`${item.color} flex items-center justify-center transition-transform duration-300`} 
        style={{ transform: isHovered ? 'scale(1.1) rotate(8deg)' : 'scale(1)' }}
      >
        {item.icon}
      </span>
      <span className="font-medium">{item.label}</span>
    </motion.span>
  );
};

const About = () => {
  const aboutSlides = [
    {
      name: "Who I Am",
      designation: "01 / Bio",
      quote: "I am Ali Mahmood, a Full Stack Software Engineer who designs clean, premium user interfaces and builds strong, scalable backends. Rather than just writing code, I focus on creating complete digital products, from multivendor marketplaces and interactive learning hubs to real-time utilities.",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1368&auto=format&fit=crop"
    },
    {
      name: "Why Me",
      designation: "02 / Value",
      quote: "Hiring different freelancers often leads to fragmented and inconsistent results. I take full responsibility for the entire project, crafting everything from smooth, polished animations to secure payment integrations. This ensures high quality and a seamless development process from start to finish.",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1368&auto=format&fit=crop"
    },
    {
      name: "Open Source",
      designation: "03 / Contributions",
      quote: "I enjoy contributing back to the open source community. My contributions have been merged into major libraries like Apache Arrow in C plus plus, where I refactored deprecated APIs and solved memory safety issues. This shows my focus on writing clean, reliable code that performs well under heavy use.",
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1368&auto=format&fit=crop"
    },
    {
      name: "Technical Excellence",
      designation: "04 / Projects",
      quote: "My projects showcase modern web engineering. I have built platforms like Noretmy (a freelancing marketplace), CampusCore (a fast, cached learning management system), and MultiMart (a vendor marketplace). Each one is optimized for speed, reliability, and security.",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1368&auto=format&fit=crop"
    },
    {
      name: "Problem Solving",
      designation: "05 / Logic",
      quote: "I really enjoy solving complex problems and finding efficient ways to organize data. A deep understanding of algorithms helps me write clean, readable code that runs efficiently. I keep my skills sharp by tackling challenging coding problems every day.",
      src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1368&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative bg-primary">
      <section id="about" className="pt-10 pb-6 md:pt-16 md:pb-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stackVariants}
            className="space-y-6"
          >
            <motion.div variants={sectionVariants} className="mb-8 flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1.5px] bg-accent"></div>
                <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Introduction</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">Me</span>
              </h2>
            </motion.div>

            <motion.div variants={sectionVariants} className="w-full border border-subtle bg-surface p-2 md:p-6 mb-4 shadow-2xl rounded-2xl flex justify-center items-center">
              <CircularTestimonials
                testimonials={aboutSlides}
                autoplay={false}
                colors={{
                  name: "var(--text-primary)",
                  designation: "var(--text-secondary)",
                  testimony: "var(--text-secondary)",
                  arrowBackground: "var(--bg-elevated)",
                  arrowForeground: "var(--text-primary)",
                  arrowHoverBackground: "var(--text-primary)",
                }}
                fontSizes={{
                  name: "1.75rem",
                  designation: "0.875rem",
                  quote: "1rem"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
