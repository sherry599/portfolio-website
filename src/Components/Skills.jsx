import React from 'react';
import { motion } from 'framer-motion';
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss,
  SiGit, SiJavascript, SiNextdotjs, SiRedux, SiDocker, SiRedis,
  SiGithubactions, SiFigma, SiFramer, SiShadcnui, SiSupabase
} from 'react-icons/si';


/* ─────────────────────────────────────────────────────────── */
/*  Data                                                        */
/* ─────────────────────────────────────────────────────────── */
const CATEGORIES = [
  {
    label: 'Frontend',
    techs: [
      { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
      { name: 'Next.js',     Icon: SiNextdotjs,   color: '#888' },
      { name: 'JavaScript',  Icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'Tailwind',    Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux / RTK', Icon: SiRedux,       color: '#764ABC' },
    ],
  },
  {
    label: 'Backend',
    techs: [
      { name: 'Node.js',  Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express',  Icon: SiExpress,   color: '#888' },
    ],
  },
  {
    label: 'Database',
    techs: [
      { name: 'MongoDB',   Icon: SiMongodb,  color: '#47A248' },
      { name: 'Redis',     Icon: SiRedis,    color: '#DC382D' },
      { name: 'Supabase',  Icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    label: 'DevOps & Infra',
    techs: [
      { name: 'Docker',     Icon: SiDocker,        color: '#2496ED' },
      { name: 'GitHub CI',  Icon: SiGithubactions, color: '#2088FF' },
      { name: 'Git',        Icon: SiGit,           color: '#F05032' },
    ],
  },
  {
    label: 'Tools & Design',
    techs: [
      { name: 'Figma',          Icon: SiFigma,    color: '#F24E1E' },
      { name: 'Framer Motion',  Icon: SiFramer,   color: '#0055FF' },
      { name: 'shadcn/ui',      Icon: SiShadcnui, color: '#888' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Single tech pill                                            */
/* ─────────────────────────────────────────────────────────── */
const TechPill = ({ name, Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
    className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-default bg-elevated hover:bg-surface hover:border-zinc-400 dark:hover:border-zinc-500 hover:-translate-y-[2.5px] hover:shadow-sm transition-all duration-200 cursor-default text-primary"
  >
    <Icon
      size={16}
      style={{ color: color === '#888' ? 'currentColor' : color }}
      className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
    />
    <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
      {name}
    </span>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────── */
/*  Category row                                               */
/* ─────────────────────────────────────────────────────────── */
const CategoryRow = ({ label, techs, rowIndex }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay: rowIndex * 0.07, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col sm:flex-row sm:items-start gap-4 py-5 border-b border-subtle last:border-0"
  >
    {/* Label column */}
    <div className="sm:w-36 flex-shrink-0 pt-1">
      <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-primary mono">
        {label}
      </span>
    </div>

    {/* Pills */}
    <div className="flex flex-wrap gap-2">
      {techs.map((tech, i) => (
        <TechPill
          key={tech.name}
          {...tech}
          delay={rowIndex * 0.06 + i * 0.04}
        />
      ))}
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────── */
/*  Main section                                               */
/* ─────────────────────────────────────────────────────────── */
const Skills = () => (
  <div className="relative bg-primary">
    {/* Faint radial glow */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-zinc-200/30 dark:from-zinc-700/10 to-transparent rounded-full blur-3xl" />
    </div>

    <section id="skills" className="pt-6 pb-10 md:pt-8 md:pb-14 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1.5px] bg-accent" />
            <span className="text-xs font-bold text-secondary tracking-[0.2em] uppercase mono">
              Capabilities
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-3 leading-tight">
            Tech{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">
              Stack
            </span>
          </h2>
          <p className="text-sm text-secondary font-light max-w-md leading-relaxed mx-auto">
            A curated set of tools and technologies I work with across the full development lifecycle.
          </p>
        </motion.div>

        {/* ── Category table ── */}
        <div className="relative rounded-2xl border border-subtle bg-surface/50 backdrop-blur-sm px-5 md:px-8 py-2 overflow-hidden">
          {/* very faint inner grid */}
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
        </div>

        {/* ── Bottom meta line ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex items-center gap-3"
        >
          <div className="flex-1 h-px bg-zinc-200/60 dark:bg-zinc-800/60" />
          <span className="text-[10px] mono text-secondary/60 tracking-widest uppercase">
            {CATEGORIES.reduce((s, c) => s + c.techs.length, 0)} technologies
          </span>
          <div className="flex-1 h-px bg-zinc-200/60 dark:bg-zinc-800/60" />
        </motion.div>

      </div>
    </section>
  </div>
);

export default Skills;