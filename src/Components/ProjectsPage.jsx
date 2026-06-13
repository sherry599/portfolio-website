import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Monitor, Smartphone, Terminal, ArrowUpRight, Github, ArrowLeft, Star, GitFork, Code2 } from 'lucide-react';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, 
  SiTypescript, SiDocker, SiRedis, SiSocketdotio, SiStripe, SiPrisma, SiPython, SiGo, SiCplusplus 
} from 'react-icons/si';
import { fetchGitHubData } from '../lib/github';
import { ExpandableTabs } from './ui/expandable-tabs';
import { usePageTransition } from './PageTransitionContext';
import NoiseMeshBackground from './ui/NoiseMeshBackground';
import MagneticButton from './ui/MagneticButton';
import ThemeToggle from './ThemeToggle';
import { projectsData } from '../data/projectsData';

export const ProjectsPage = () => {
  const [gitData, setGitData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const { transitionTo } = usePageTransition();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchGitHubData();
      setGitData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary text-primary flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-8 h-8 border-2 border-t-transparent border-neutral-400 rounded-full"
          />
          <span className="text-xs font-semibold tracking-widest uppercase mono text-secondary">Loading Projects...</span>
        </div>
      </div>
    );
  }

  const filterTabs = [
    { title: "All Projects", icon: Grid },
    { title: "Web Apps", icon: Monitor },
    { title: "Mobile Apps", icon: Smartphone },
    { title: "CLI Tools", icon: Terminal }
  ];

  const getTechIcon = (tech) => {
    if (!tech) return <Code2 className="w-3.5 h-3.5" />;
    const iconMap = {
      'react': <SiReact className="w-3.5 h-3.5 text-[#0ea5e9] dark:text-[#38bdf8]" />,
      'react native': <SiReact className="w-3.5 h-3.5 text-[#0ea5e9] dark:text-[#38bdf8]" />,
      'typescript': <SiTypescript className="w-3.5 h-3.5 text-[#2563eb] dark:text-[#60a5fa]" />,
      'next.js': <SiNextdotjs className="w-3.5 h-3.5 text-primary dark:text-white" />,
      'node.js': <SiNodedotjs className="w-3.5 h-3.5 text-[#16a34a] dark:text-[#4ade80]" />,
      'mongodb': <SiMongodb className="w-3.5 h-3.5 text-[#15803d] dark:text-[#22c55e]" />,
      'express': <SiExpress className="w-3.5 h-3.5 text-secondary dark:text-neutral-300" />,
      'tailwind css': <SiTailwindcss className="w-3.5 h-3.5 text-[#0891b2] dark:text-[#22d3ee]" />,
      'redis': <SiRedis className="w-3.5 h-3.5 text-[#dc2626] dark:text-[#f87171]" />,
      'socket.io': <SiSocketdotio className="w-3.5 h-3.5 text-primary dark:text-white" />,
      'stripe': <SiStripe className="w-3.5 h-3.5 text-[#4f46e5] dark:text-[#818cf8]" />,
      'docker': <SiDocker className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#38bdf8]" />,
      'prisma': <SiPrisma className="w-3.5 h-3.5 text-primary dark:text-white" />,
      'python': <SiPython className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#38bdf8]" />,
      'go': <SiGo className="w-3.5 h-3.5 text-[#0891b2] dark:text-[#22d3ee]" />,
      'c++': <SiCplusplus className="w-3.5 h-3.5 text-[#2563eb] dark:text-[#60a5fa]" />
    };
    return iconMap[tech.toLowerCase()] || <Code2 className="w-3.5 h-3.5" />;
  };

  const getTechColor = (tech) => {
    if (!tech) return { text: "text-secondary", border: "border-subtle/50", bg: "bg-elevated/40" };
    const lower = tech.toLowerCase();
    const colorMap = {
      'react': { text: 'text-[#0ea5e9] dark:text-[#38bdf8]', border: 'border-[#38bdf8]/20', bg: 'bg-[#38bdf8]/5' },
      'react native': { text: 'text-[#0ea5e9] dark:text-[#38bdf8]', border: 'border-[#38bdf8]/20', bg: 'bg-[#38bdf8]/5' },
      'expo': { text: 'text-[#ea580c] dark:text-[#f97316]', border: 'border-[#f97316]/20', bg: 'bg-[#f97316]/5' },
      'typescript': { text: 'text-[#2563eb] dark:text-[#60a5fa]', border: 'border-[#60a5fa]/20', bg: 'bg-[#60a5fa]/5' },
      'javascript': { text: 'text-[#d97706] dark:text-[#fbbf24]', border: 'border-[#fbbf24]/20', bg: 'bg-[#fbbf24]/5' },
      'next.js': { text: 'text-primary dark:text-white', border: 'border-zinc-500/20', bg: 'bg-zinc-500/5' },
      'node.js': { text: 'text-[#16a34a] dark:text-[#4ade80]', border: 'border-[#4ade80]/20', bg: 'bg-[#4ade80]/5' },
      'mongodb': { text: 'text-[#15803d] dark:text-[#22c55e]', border: 'border-[#22c55e]/20', bg: 'bg-[#22c55e]/5' },
      'express': { text: 'text-secondary dark:text-neutral-300', border: 'border-neutral-500/20', bg: 'bg-neutral-500/5' },
      'tailwind css': { text: 'text-[#0891b2] dark:text-[#22d3ee]', border: 'border-[#22d3ee]/20', bg: 'bg-[#22d3ee]/5' },
      'redis': { text: 'text-[#dc2626] dark:text-[#f87171]', border: 'border-[#f87171]/20', bg: 'bg-[#f87171]/5' },
      'socket.io': { text: 'text-primary dark:text-white', border: 'border-zinc-500/20', bg: 'bg-zinc-500/5' },
      'stripe': { text: 'text-[#4f46e5] dark:text-[#818cf8]', border: 'border-[#818cf8]/20', bg: 'bg-[#818cf8]/5' },
      'docker': { text: 'text-[#0284c7] dark:text-[#38bdf8]', border: 'border-[#38bdf8]/20', bg: 'bg-[#38bdf8]/5' },
      'prisma': { text: 'text-primary dark:text-white', border: 'border-zinc-500/20', bg: 'bg-zinc-500/5' },
      'python': { text: 'text-[#0284c7] dark:text-[#38bdf8]', border: 'border-[#38bdf8]/20', bg: 'bg-[#38bdf8]/5' },
      'go': { text: 'text-[#0891b2] dark:text-[#22d3ee]', border: 'border-[#22d3ee]/20', bg: 'bg-[#22d3ee]/5' },
      'c++': { text: 'text-[#2563eb] dark:text-[#60a5fa]', border: 'border-[#60a5fa]/20', bg: 'bg-[#60a5fa]/5' }
    };
    return colorMap[lower] || { text: "text-secondary", border: "border-subtle/50", bg: "bg-elevated/40" };
  };

  // Compile project list from projectsData static configurations
  const projectsList = Object.values(projectsData).map(project => {
    const matchedRepo = gitData?.repos?.find(r => 
      r.name.toLowerCase() === project.id.toLowerCase() || 
      (project.githubLink && r.link.toLowerCase() === project.githubLink.toLowerCase())
    );
    return {
      ...project,
      stars: matchedRepo ? matchedRepo.stars : 0,
      forks: matchedRepo ? matchedRepo.forks : 0,
    };
  });

  // Filter projects dynamically based on categories in projectsData
  const filteredProjects = projectsList.filter((project) => {
    const cat = (project.category || "").toLowerCase();
    const title = (project.title || "").toLowerCase();
    const activeFilter = filterTabs[activeFilterIndex].title;

    if (activeFilter === "All Projects") return true;
    if (activeFilter === "Web Apps") {
      return cat.includes('web') || cat.includes('stack') || cat.includes('frontend');
    }
    if (activeFilter === "Mobile Apps") {
      return cat.includes('mobile');
    }
    if (activeFilter === "CLI Tools") {
      return cat.includes('cli') || title.includes('envarmor');
    }
    return true;
  });

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-primary text-primary overflow-hidden pb-24">
      {/* Background with Ambient Mesh & Floating Lights */}
      <NoiseMeshBackground />

      {/* Geometric Background Shapes (White border in dark mode, black/gray in light mode) */}
      <div className="absolute top-24 right-20 w-64 h-64 border border-zinc-200/40 dark:border-white/10 rotate-45 pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 border border-zinc-200/40 dark:border-white/10 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-zinc-200/40 dark:bg-white/10 rotate-12 pointer-events-none"></div>

      {/* Typographic elements in background (monochrome outline adjust) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[5%] font-mono font-black text-[12vw] uppercase tracking-tighter text-neutral-900/[0.015] dark:text-white/[0.025] leading-none">
          PROJECTS
        </div>
        <div className="absolute top-[45%] right-[2%] font-mono font-black text-[11vw] uppercase tracking-tighter text-neutral-900/[0.015] dark:text-white/[0.025] leading-none">
          SOFTWARE
        </div>
        <div className="absolute bottom-[15%] left-[4%] font-mono font-black text-[13vw] uppercase tracking-tighter text-neutral-900/[0.015] dark:text-white/[0.025] leading-none">
          BUILD
        </div>
        <div className="absolute bottom-[5%] right-[8%] font-mono font-black text-[12vw] uppercase tracking-tighter text-neutral-900/[0.015] dark:text-white/[0.025] leading-none">
          DEPLOY
        </div>
      </div>

      {/* Decorative Top header grid */}
      <div className="absolute top-0 left-0 w-full h-[30vh] border-b border-subtle pointer-events-none opacity-20 bg-gradient-to-b from-primary via-transparent to-transparent" />

      {/* Header Navigation */}
      <header className="relative z-20 container mx-auto px-6 max-w-6xl py-8 grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <button
            onClick={() => transitionTo('/')}
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors group text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="flex justify-center">
          <ThemeToggle />
        </div>

        <div className="flex justify-end">
          <span className="text-xs tracking-[0.25em] uppercase font-bold text-accent mono">Projects Hub</span>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl mt-12">
        
        {/* Title / Hero (Monochrome) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mono">Creations</span>
            <span className="h-[1px] w-8 bg-zinc-300 dark:bg-zinc-700" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Explore My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-white dark:to-neutral-400">Projects</span>
          </h1>
          
          <p className="text-base text-secondary leading-relaxed font-light">
            A showcase of my recent project case studies. Explore web applications, mobile platforms, and developer utilities.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12">
          <ExpandableTabs
            tabs={filterTabs}
            activeColor="text-primary"
            activeTab={activeFilterIndex}
            onChange={(val) => val !== null && setActiveFilterIndex(val)}
            showAllTitles={true}
            className="p-1 border border-subtle bg-surface/50 backdrop-blur-md shadow-lg rounded-xl"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const techTags = project.tech || [];

              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layoutId={`project-card-${project.id}`}
                  className="group relative flex flex-col justify-between overflow-hidden border border-subtle bg-surface/30 hover:bg-surface/50 transition-all duration-300 shadow-sm rounded-2xl p-6"
                >
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-default rounded-2xl transition-colors duration-300 pointer-events-none" />
                  
                  <div>
                    {/* Header: Category and Git Link */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] tracking-wider uppercase font-bold text-secondary mono bg-elevated border border-subtle px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-primary transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Thumbnail / Image preview */}
                    <div className="relative h-40 overflow-hidden rounded-xl bg-elevated mb-5 border border-subtle flex items-center justify-center">
                      {project.image ? (
                        <>
                          <img
                            src={`/${project.image}`}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-40" />
                        </>
                      ) : (
                        <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-secondary/60 bg-surface/40 select-none">
                          <div className="flex items-center justify-between opacity-50 border-b border-subtle/50 pb-1.5">
                            <span>MODULE: {project.title}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          </div>
                          <div className="flex flex-col gap-1 my-auto font-light leading-none">
                            <span className="text-primary font-bold">git status</span>
                            <span>working directory clean</span>
                          </div>
                          <div className="flex justify-between border-t border-subtle/50 pt-1.5 text-[9px]">
                            <span>STARS: {project.stars}</span>
                            <span>FORKS: {project.forks}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold tracking-tight text-primary mb-2 truncate group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-secondary leading-relaxed line-clamp-3 font-light">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack badge row */}
                  <div className="mt-4 pt-4 border-t border-subtle flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {techTags.slice(0, 3).map((tag) => {
                        const styleInfo = getTechColor(tag);
                        return (
                          <span 
                            key={tag}
                            className={`inline-flex items-center gap-1.5 px-2 py-0.5 border ${styleInfo.border} ${styleInfo.bg} ${styleInfo.text} text-[9px] mono rounded`}
                          >
                            {getTechIcon(tag)}
                            <span className="capitalize">{tag}</span>
                          </span>
                        );
                      })}
                      {techTags.length > 3 && (
                        <span className="text-[9px] mono text-secondary/50 self-center">
                          +{techTags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2.5">
                      <MagneticButton
                        onClick={() => transitionTo(`/project/${project.id}`, project.id)}
                        className="flex-1 border border-subtle bg-elevated/50 hover:bg-primary text-primary px-3 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                      >
                        <span>Inspect details</span>
                      </MagneticButton>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 border border-subtle bg-elevated/20 hover:bg-primary text-secondary hover:text-primary transition-colors rounded-lg"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
export default ProjectsPage;
