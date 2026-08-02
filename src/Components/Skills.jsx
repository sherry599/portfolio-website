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
    text: "text-[#007a99] dark:text-[#38bdf8]",
    border: "border-[#007a99]/20 dark:border-[#38bdf8]/20",
    bg: "bg-[#007a99]/5 dark:bg-[#38bdf8]/5"
  },
  "Next.js": { 
    icon: SiNextdotjs, 
    color: "#000000", 
    text: "text-zinc-800 dark:text-zinc-200",
    border: "border-zinc-800/20 dark:border-zinc-200/20",
    bg: "bg-zinc-800/5 dark:bg-zinc-200/5"
  },
  "JavaScript": { 
    icon: SiJavascript, 
    color: "#F7DF1E", 
    text: "text-amber-700 dark:text-yellow-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5"
  },
  "Tailwind": { 
    icon: SiTailwindcss, 
    color: "#06B6D4", 
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5"
  },
  "Redux / RTK": { 
    icon: SiRedux, 
    color: "#764ABC", 
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5"
  },
  "Node.js": { 
    icon: SiNodedotjs, 
    color: "#339933", 
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5"
  },
  "Express": { 
    icon: SiExpress, 
    color: "#000000", 
    text: "text-zinc-700 dark:text-zinc-300",
    border: "border-zinc-500/20",
    bg: "bg-zinc-500/5"
  },
  "Agentic AI": { 
    icon: Bot, 
    color: "#A855F7", 
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/5"
  },
  "LLMs": { 
    icon: Brain, 
    color: "#8B5CF6", 
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5"
  },
  "MongoDB": { 
    icon: SiMongodb, 
    color: "#47A248", 
    text: "text-green-600 dark:text-green-400",
    border: "border-green-500/20",
    bg: "bg-green-500/5"
  },
  "Redis": { 
    icon: SiRedis, 
    color: "#DC382D", 
    text: "text-red-600 dark:text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/5"
  },
  "Supabase": { 
    icon: SiSupabase, 
    color: "#3ECF8E", 
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5"
  },
  "Prisma": { 
    icon: SiPrisma, 
    color: "#2D3748", 
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/5"
  },
  "Docker": { 
    icon: SiDocker, 
    color: "#2496ED", 
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5"
  },
  "GitHub CI": { 
    icon: SiGithubactions, 
    color: "#2088FF", 
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5"
  },
  "Git": { 
    icon: SiGit, 
    color: "#F05032", 
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5"
  },
  "Figma": { 
    icon: SiFigma, 
    color: "#F24E1E", 
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-500/20",
    bg: "bg-rose-500/5"
  },
  "Framer Motion": { 
    icon: SiFramer, 
    color: "#F43F5E", 
    text: "text-pink-600 dark:text-pink-400",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5"
  },
  "shadcn/ui": { 
    icon: SiShadcnui, 
    color: "#000000", 
    text: "text-zinc-800 dark:text-zinc-200",
    border: "border-zinc-500/20",
    bg: "bg-zinc-500/5"
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
          className="text-xs md:text-sm font-extrabold uppercase tracking-[0.18em] select-none text-primary"
        >
          {char === " " ? "\u00A0" : char}
        </Motion.span>
      ))}
    </span>
  );
};

const TechPill = ({ name, delay }) => {
  const details = TECH_DETAILS[name] || { icon: Zap, color: "#888888", text: "text-secondary", border: "border-subtle", bg: "bg-elevated/40" };
  const IconComponent = details.icon;

  return (
    <Motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 100, damping: 14, delay }}
      whileHover="hover"
      variants={{
        normal: { y: 0, scale: 1 },
        hover: { y: -4, scale: 1.04 }
      }}
      className={`group flex items-center gap-3 px-5 py-3 rounded-xl border ${details.border} ${details.bg} transition-[transform,border-color,box-shadow] duration-300 cursor-default transform-gpu hover:shadow-lg`}
    >
      <Motion.span
        variants={{
          normal: { scale: 1, rotate: 0 },
          hover: { scale: 1.18, rotate: 8 }
        }}
        transition={{ type: "spring", stiffness: 350, damping: 12 }}
        className="flex-shrink-0 flex items-center justify-center"
        style={{ color: details.color }}
      >
        <IconComponent size={20} />
      </Motion.span>

      <Motion.span
        variants={{
          normal: { x: 0 },
          hover: { x: 2 }
        }}
        transition={{ duration: 0.2 }}
        className={`text-[13px] font-bold tracking-wide whitespace-nowrap ${details.text}`}
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
      className="flex flex-col md:flex-row md:items-start gap-8 py-8 sm:py-10 border-b border-zinc-100 dark:border-zinc-800/60 last:border-0"
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
    <div className="relative bg-primary overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-20 right-10 w-48 h-48 border border-zinc-200 dark:border-zinc-800/40 rotate-45"></div>
        <div className="absolute bottom-20 left-12 w-64 h-64 border border-zinc-200 dark:border-zinc-800/40 rounded-full"></div>
        
        {/* Floating background dots */}
        <div className="floating-dots text-zinc-400/50 dark:text-zinc-800/60">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-6"></div>
          <div className="floating-dot dot-7"></div>
        </div>
      </div>

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
            className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-surface/60 backdrop-blur-md px-6 md:px-10 py-5 overflow-visible shadow-[0_12px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
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