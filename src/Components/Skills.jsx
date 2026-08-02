import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss,
  SiGit, SiJavascript, SiNextdotjs, SiRedux, SiDocker, SiRedis,
  SiGithubactions, SiFigma, SiFramer, SiShadcnui, SiSupabase, SiPrisma
} from 'react-icons/si';
import { Bot, Brain, Zap } from 'lucide-react';

const TECH_DETAILS = {
  "React": { 
    icon: SiReact, 
    color: "#61DAFB", 
    colorLight: "#007a99", 
    bg: "#e0f7fa", 
    bgDark: "rgba(0,180,216,0.15)", 
    textLight: "#006064", 
    textDark: "#80deea" 
  },
  "Next.js": { 
    icon: SiNextdotjs, 
    color: "#ffffff", 
    colorLight: "#000000", 
    bg: "#e0e0e0", 
    bgDark: "#222222", 
    textLight: "#111111", 
    textDark: "#ffffff" 
  },
  "JavaScript": { 
    icon: SiJavascript, 
    color: "#F7DF1E", 
    colorLight: "#856404", 
    bg: "#fffde7", 
    bgDark: "rgba(247,223,30,0.1)", 
    textLight: "#533f03", 
    textDark: "#f7df1e" 
  },
  "Tailwind": { 
    icon: SiTailwindcss, 
    color: "#06B6D4", 
    colorLight: "#00838f", 
    bg: "#e0f7fa", 
    bgDark: "rgba(6,182,212,0.15)", 
    textLight: "#004d40", 
    textDark: "#80deea" 
  },
  "Redux / RTK": { 
    icon: SiRedux, 
    color: "#764ABC", 
    colorLight: "#4a148c", 
    bg: "#f3e5f5", 
    bgDark: "rgba(118,74,188,0.15)", 
    textLight: "#311b92", 
    textDark: "#e1bee7" 
  },
  
  "Node.js": { 
    icon: SiNodedotjs, 
    color: "#339933", 
    colorLight: "#1b5e20", 
    bg: "#e8f5e9", 
    bgDark: "rgba(51,153,51,0.15)", 
    textLight: "#0d3c0e", 
    textDark: "#a5d6a7" 
  },
  "Express": { 
    icon: SiExpress, 
    color: "#ffffff", 
    colorLight: "#000000", 
    bg: "#e0e0e0", 
    bgDark: "#222222", 
    textLight: "#111111", 
    textDark: "#ffffff" 
  },
  "Agentic AI": { 
    icon: Bot, 
    color: "#A855F7", 
    colorLight: "#6a1b9a", 
    bg: "#f3e5f5", 
    bgDark: "rgba(168,85,247,0.15)", 
    textLight: "#4a148c", 
    textDark: "#e9d5ff" 
  },
  "LLMs": { 
    icon: Brain, 
    color: "#8B5CF6", 
    colorLight: "#4527a0", 
    bg: "#ede7f6", 
    bgDark: "rgba(139,92,246,0.15)", 
    textLight: "#311b92", 
    textDark: "#ddd6fe" 
  },
  
  "MongoDB": { 
    icon: SiMongodb, 
    color: "#47A248", 
    colorLight: "#1b5e20", 
    bg: "#e8f5e9", 
    bgDark: "rgba(71,162,72,0.15)", 
    textLight: "#0d3c0e", 
    textDark: "#a5d6a7" 
  },
  "Redis": { 
    icon: SiRedis, 
    color: "#DC382D", 
    colorLight: "#b71c1c", 
    bg: "#ffebee", 
    bgDark: "rgba(220,56,45,0.15)", 
    textLight: "#7f0000", 
    textDark: "#ffcdd2" 
  },
  "Supabase": { 
    icon: SiSupabase, 
    color: "#3ECF8E", 
    colorLight: "#117046", 
    bg: "#e8f8f2", 
    bgDark: "rgba(62,207,142,0.15)", 
    textLight: "#064e3b", 
    textDark: "#a7f3d0" 
  },
  "Prisma": { 
    icon: SiPrisma, 
    color: "#38bdf8", 
    colorLight: "#0369a1", 
    bg: "#e0f2fe", 
    bgDark: "rgba(56,189,248,0.15)", 
    textLight: "#075985", 
    textDark: "#bae6fd" 
  },
  
  "Docker": { 
    icon: SiDocker, 
    color: "#2496ED", 
    colorLight: "#01579b", 
    bg: "#e1f5fe", 
    bgDark: "rgba(36,150,237,0.15)", 
    textLight: "#004d40", 
    textDark: "#bae6fd" 
  },
  "GitHub CI": { 
    icon: SiGithubactions, 
    color: "#2088FF", 
    colorLight: "#0d47a1", 
    bg: "#e3f2fd", 
    bgDark: "rgba(32,136,255,0.15)", 
    textLight: "#0a2540", 
    textDark: "#bae6fd" 
  },
  "Git": { 
    icon: SiGit, 
    color: "#F05032", 
    colorLight: "#bf360c", 
    bg: "#fbe9e7", 
    bgDark: "rgba(240,80,50,0.15)", 
    textLight: "#5d1900", 
    textDark: "#ffccbc" 
  },
  
  "Figma": { 
    icon: SiFigma, 
    color: "#F24E1E", 
    colorLight: "#bf360c", 
    bg: "#fbe9e7", 
    bgDark: "rgba(242,78,30,0.15)", 
    textLight: "#5d1900", 
    textDark: "#ffccbc" 
  },
  "Framer Motion": { 
    icon: SiFramer, 
    color: "#F43F5E", 
    colorLight: "#880e4f", 
    bg: "#fce4ec", 
    bgDark: "rgba(244,63,94,0.15)", 
    textLight: "#4a001f", 
    textDark: "#fecdd3" 
  },
  "shadcn/ui": { 
    icon: SiShadcnui, 
    color: "#ffffff", 
    colorLight: "#000000", 
    bg: "#e0e0e0", 
    bgDark: "#222222", 
    textLight: "#111111", 
    textDark: "#ffffff" 
  }
};

const CATEGORIES = [
  {
    label: 'Frontend',
    techs: ['React', 'Next.js', 'JavaScript', 'Tailwind', 'Redux / RTK'],
  },
  {
    label: 'Backend',
    techs: ['Node.js', 'Express', 'Agentic AI', 'LLMs'],
  },
  {
    label: 'Database',
    techs: ['MongoDB', 'Redis', 'Supabase', 'Prisma'],
  },
  {
    label: 'DevOps & Infra',
    techs: ['Docker', 'GitHub CI', 'Git'],
  },
  {
    label: 'Tools & Design',
    techs: ['Figma', 'Framer Motion', 'shadcn/ui'],
  },
];

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
};

// Premium character staggered animation
const characterVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const AnimatedLabel = ({ text, inView }) => {
  const characters = text.split("");
  return (
    <span className="inline-flex">
      {characters.map((char, i) => (
        <Motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={characterVariants}
          className="text-xs md:text-sm font-extrabold uppercase tracking-[0.18em] select-none"
        >
          {char === " " ? "\u00A0" : char}
        </Motion.span>
      ))}
    </span>
  );
};

const TechPill = ({ name, delay }) => {
  const isDark = useDarkMode();
  const details = TECH_DETAILS[name] || { icon: Zap, color: "#888888", colorLight: "#111111", bg: "#f5f5f5", bgDark: "#222222", textLight: "#111111", textDark: "#ffffff" };
  const IconComponent = details.icon;

  const color = isDark ? details.color : details.colorLight;
  const initialBg = isDark ? details.bgDark : details.bg;
  const textColor = isDark ? details.textDark : details.textLight;

  return (
    <Motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 100, damping: 14, delay }}
      whileHover="hover"
      variants={{
        normal: { y: 0, scale: 1 },
        hover: { y: -5, scale: 1.03 }
      }}
      style={{
        backgroundColor: initialBg,
      }}
      className="group flex items-center gap-3 px-5 py-3 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 cursor-default border border-transparent"
      onMouseEnter={(e) => {
        // Brighten background cleanly on hover
        e.currentTarget.style.backgroundColor = isDark ? initialBg.replace("0.15", "0.22") : initialBg;
        e.currentTarget.style.filter = "brightness(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = initialBg;
        e.currentTarget.style.filter = "none";
      }}
    >
      <Motion.span
        variants={{
          normal: { scale: 1, rotate: 0 },
          hover: { scale: 1.18, rotate: 8 }
        }}
        transition={{ type: "spring", stiffness: 350, damping: 12 }}
        style={{ color }}
        className="flex-shrink-0 flex items-center justify-center"
      >
        <IconComponent size={20} />
      </Motion.span>

      <Motion.span
        variants={{
          normal: { x: 0 },
          hover: { x: 2 }
        }}
        transition={{ duration: 0.2 }}
        style={{ color: textColor }}
        className="text-[13px] font-bold tracking-wide whitespace-nowrap"
      >
        {name}
      </Motion.span>
    </Motion.div>
  );
};

const CategoryRow = ({ label, techs, rowIndex }) => {
  const [inView, setInView] = useState(false);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.7, delay: rowIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col md:flex-row md:items-start gap-8 py-8 sm:py-10 border-b border-subtle last:border-0"
    >
      {/* Label column with Animated characters */}
      <div className="md:w-56 flex-shrink-0 pt-3 flex items-center gap-3">
        <Motion.div 
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: rowIndex * 0.1 }}
          className="w-1.5 h-3.5 bg-accent/80 rounded-full" 
        />
        <AnimatedLabel text={label} inView={inView} />
      </div>

      {/* Pills wrapper with correct spacing */}
      <div className="flex flex-wrap gap-4">
        {techs.map((techName, i) => (
          <TechPill
            key={techName}
            name={techName}
            delay={rowIndex * 0.06 + i * 0.03}
          />
        ))}
      </div>
    </Motion.div>
  );
};

const Skills = () => {
  return (
    <div className="relative bg-primary">
      {/* Faint radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-zinc-200/30 dark:from-zinc-700/10 to-transparent rounded-full blur-3xl" />
      </div>

      <section id="skills" className="pt-16 pb-20 md:pt-20 md:pb-28 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

          {/* Heading */}
          <Motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-14 md:mb-20 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1.5px] bg-accent" />
              <span className="text-xs font-bold text-secondary tracking-[0.2em] uppercase mono">
                Capabilities
              </span>
              <div className="w-8 h-[1.5px] bg-accent" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-3 leading-tight font-display">
              Tech{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">
                Stack
              </span>
            </h2>
            <p className="text-sm text-secondary font-light max-w-md leading-relaxed mx-auto">
              A curated set of tools and technologies I work with across the full development lifecycle.
            </p>
          </Motion.div>

          {/* Container box with exact scroll reveal animation */}
          <Motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl border border-default bg-surface/60 backdrop-blur-md px-6 md:px-10 py-5 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
          >
            {/* Faint inner grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {CATEGORIES.map((cat, i) => (
              <CategoryRow
                key={cat.label}
                label={cat.label}
                techs={cat.techs}
                rowIndex={i}
              />
            ))}
          </Motion.div>

          {/* Bottom meta line */}
          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center gap-3"
          >
            <div className="flex-1 h-px bg-zinc-200/60 dark:bg-zinc-800/60" />
            <span className="text-[10px] mono text-secondary/60 tracking-widest uppercase">
              {CATEGORIES.reduce((s, c) => s + c.techs.length, 0)} technologies
            </span>
            <div className="flex-1 h-px bg-zinc-200/60 dark:bg-zinc-800/60" />
          </Motion.div>

        </div>
      </section>
    </div>
  );
};

export default Skills;