import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, BarChart3, Target, Zap, Orbit } from 'lucide-react';
import { SiSalesforce, SiJira, SiHubspot, SiWordpress, SiWoocommerce, SiClaude } from 'react-icons/si';

const TECH_DETAILS = {
  "Salesforce": { 
    icon: SiSalesforce, 
    color: "#00A1E0", 
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5"
  },
  "Hubspot": { 
    icon: SiHubspot, 
    color: "#FF7A59", 
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-500/20",
    bg: "bg-rose-500/5"
  },
  "Gainsight": { 
    logoImg: "/gainsight-logo.png", 
    color: "#00A3E0", 
    text: "text-sky-600 dark:text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/5"
  },
  "Churnzero": { 
    logoImg: "/churnzero-logo.png", 
    color: "#FF5B24", 
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/10 dark:bg-orange-500/15"
  },
  "Catalyst": { 
    logoImg: "/catalyst-logo.png", 
    color: "#4F46E5", 
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/5"
  },
  "Salesloft": { 
    logoImg: "/salesloft-logo.png", 
    color: "#054D33", 
    text: "text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5"
  },
  "Jira": { 
    icon: SiJira, 
    color: "#0052CC", 
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/5"
  },
  "WordPress": { 
    icon: SiWordpress, 
    color: "#21759B", 
    text: "text-sky-600 dark:text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/5"
  },
  "Wordpress": { 
    icon: SiWordpress, 
    color: "#21759B", 
    text: "text-sky-600 dark:text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/5"
  },
  "WooCommerce": { 
    logoImg: "/woocommerce-logo.png", 
    color: "#7F54B3", 
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5"
  },
  "Woocommerce": { 
    logoImg: "/woocommerce-logo.png", 
    color: "#7F54B3", 
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5"
  },
  "Claude": { 
    icon: SiClaude, 
    color: "#D97757", 
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5"
  },
  "Antigravity": { 
    logoImg: "/antigravity-logo.png", 
    color: "#3B82F6", 
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5"
  }
};

const CATEGORIES = [
  {
    label: 'Platforms & Enterprise Tools',
    techs: ['Salesforce', 'Hubspot', 'Gainsight', 'Churnzero', 'Catalyst', 'Salesloft', 'Jira', 'WordPress', 'WooCommerce', 'Claude', 'Antigravity'],
  }
];

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
  const details = TECH_DETAILS[name] || { icon: Zap, color: "#888888", text: "text-secondary", border: "border-default", bg: "bg-surface" };
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
      className={`group flex items-center gap-3 px-5 py-3.5 rounded-xl border ${details.border} ${details.bg} transition-[transform,border-color,box-shadow] duration-300 cursor-default transform-gpu hover:shadow-lg`}
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
        {details.logoImg ? (
          <img src={details.logoImg} alt={name} className="w-5 h-5 object-contain rounded-sm" />
        ) : (
          <IconComponent size={22} />
        )}
      </Motion.span>

      <Motion.span
        variants={{
          normal: { x: 0 },
          hover: { x: 2 }
        }}
        transition={{ duration: 0.2 }}
        className={`text-sm font-bold tracking-wide whitespace-nowrap ${details.text}`}
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
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
        <AnimatedLabel text={label} inView={inView} />
      </div>

      <div className="flex flex-wrap gap-4">
        {techs.map((tech, idx) => (
          <TechPill key={tech} name={tech} delay={rowIndex * 0.08 + idx * 0.05} />
        ))}
      </div>
    </Motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 border-b border-default pb-4 sm:pb-6 gap-4 sm:gap-0">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest mono">02 / CORE COMPETENCIES & TOOLS</span>
              <div className="w-8 h-[1.5px] bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
              Platforms & Enterprise Tools
            </h2>
          </div>
        </div>

        {/* Categories List */}
        <div className="flex flex-col gap-8">
          {CATEGORIES.map((cat, idx) => (
            <CategoryRow key={cat.label} label={cat.label} techs={cat.techs} rowIndex={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;