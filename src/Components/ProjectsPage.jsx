import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Monitor, Smartphone, Terminal, ArrowUpRight, Github, ArrowLeft, Star, GitFork, Code2, Lightbulb, Zap, Brain } from 'lucide-react';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, 
  SiTypescript, SiDocker, SiRedis, SiSocketdotio, SiStripe, SiPrisma, SiPython, SiGo, SiCplusplus,
  SiJavascript, SiSupabase, SiExpo, SiRedux, SiGooglemaps, SiPaypal, SiAmazons3, SiCloudinary, SiFramer,
  SiPostgresql, SiShadcnui
} from 'react-icons/si';
import { fetchGitHubData } from '../lib/github';
import { ExpandableTabs } from './ui/expandable-tabs';
import { usePageTransition } from '@/Components/PageTransitionContext';
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

  const filterTabs = useMemo(() => [
    { title: "All Projects", icon: Grid },
    { title: "Web Apps", icon: Monitor },
    { title: "Mobile Apps", icon: Smartphone },
    { title: "CLI Tools", icon: Terminal }
  ], []);

  // Compile project list from projectsData static configurations
  const projectsList = useMemo(() => {
    return Object.values(projectsData).map(project => {
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
  }, [gitData]);

  // Filter projects dynamically based on categories in projectsData
  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => {
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
  }, [projectsList, activeFilterIndex, filterTabs]);

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

  const getTechIcon = (tech) => {
    if (!tech) return <Code2 className="w-3.5 h-3.5 text-secondary" />;
    const lower = tech.toLowerCase();
    const iconMap = {
      'react': <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
      'react native': <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
      'typescript': <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" />,
      'javascript': <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" />,
      'next.js': <SiNextdotjs className="w-3.5 h-3.5 text-zinc-950 dark:text-white" />,
      'node.js': <SiNodedotjs className="w-3.5 h-3.5 text-[#339933]" />,
      'mongodb': <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" />,
      'express': <SiExpress className="w-3.5 h-3.5 text-zinc-950 dark:text-white" />,
      'tailwind css': <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />,
      'redis': <SiRedis className="w-3.5 h-3.5 text-[#DC382D]" />,
      'socket.io': <SiSocketdotio className="w-3.5 h-3.5 text-zinc-950 dark:text-white" />,
      'stripe': <SiStripe className="w-3.5 h-3.5 text-[#635BFF]" />,
      'docker': <SiDocker className="w-3.5 h-3.5 text-[#2496ED]" />,
      'prisma': <SiPrisma className="w-3.5 h-3.5 text-[#5A67D8] dark:text-[#a5b4fc]" />,
      'supabase': <SiSupabase className="w-3.5 h-3.5 text-[#3ECF8E]" />,
      'expo': <SiExpo className="w-3.5 h-3.5 text-[#000020] dark:text-white" />,
      'redux toolkit': <SiRedux className="w-3.5 h-3.5 text-[#764ABC]" />,
      'gemini api': <Lightbulb className="w-3.5 h-3.5 text-[#ea80fc]" />,
      'groq api': <Brain className="w-3.5 h-3.5 text-[#f55a10]" />,
      'google maps': <SiGooglemaps className="w-3.5 h-3.5 text-[#EA4335]" />,
      'paypal': <SiPaypal className="w-3.5 h-3.5 text-[#003087]" />,
      'aws s3': <SiAmazons3 className="w-3.5 h-3.5 text-[#FF9900]" />,
      'cloudinary': <SiCloudinary className="w-3.5 h-3.5 text-[#3448C5]" />,
      'framer motion': <SiFramer className="w-3.5 h-3.5 text-[#FF007F]" />,
      'shadcn/ui': <SiShadcnui className="w-3.5 h-3.5 text-zinc-950 dark:text-white" />,
      'python': <SiPython className="w-3.5 h-3.5 text-[#3776AB]" />,
      'go': <SiGo className="w-3.5 h-3.5 text-[#00ADD8]" />,
      'c++': <SiCplusplus className="w-3.5 h-3.5 text-[#00599C]" />,
      'postgresql': <SiPostgresql className="w-3.5 h-3.5 text-[#4169E1]" />,
      'bullmq': <Zap className="w-3.5 h-3.5 text-[#FF5050]" />,
      'multer': <Code2 className="w-3.5 h-3.5 text-[#FFA500]" />,
      'gsap': <Zap className="w-3.5 h-3.5 text-[#88CE02]" />,
      'canvas api': <Code2 className="w-3.5 h-3.5 text-[#FF4500]" />,
      'scrolltrigger': <Zap className="w-3.5 h-3.5 text-[#00FFFF]" />,
      'app router': <Code2 className="w-3.5 h-3.5 text-[#FF00EA]" />,
      'jwt': <Code2 className="w-3.5 h-3.5 text-[#D63AFF]" />,
      'api integration': <Code2 className="w-3.5 h-3.5 text-[#00C853]" />,
      'ai api': <Brain className="w-3.5 h-3.5 text-[#BF55EC]" />
    };
    return iconMap[lower] || <Code2 className="w-3.5 h-3.5 text-secondary" />;
  };

  const getTechColor = (tech) => {
    if (!tech) return { text: "text-secondary", border: "border-subtle/50", bg: "bg-elevated/40" };
    const lower = tech.toLowerCase();
    const colorMap = {
      'react': { text: 'text-[#007a99] dark:text-[#38bdf8]', border: 'border-[#007a99]/20 dark:border-[#38bdf8]/20', bg: 'bg-[#007a99]/5 dark:bg-[#38bdf8]/5' },
      'react native': { text: 'text-[#007a99] dark:text-[#38bdf8]', border: 'border-[#007a99]/20 dark:border-[#38bdf8]/20', bg: 'bg-[#007a99]/5 dark:bg-[#38bdf8]/5' },
      'expo': { text: 'text-[#ea580c] dark:text-[#f97316]', border: 'border-[#ea580c]/20 dark:border-[#f97316]/20', bg: 'bg-[#ea580c]/5 dark:bg-[#f97316]/5' },
      'typescript': { text: 'text-[#1d4ed8] dark:text-[#60a5fa]', border: 'border-[#1d4ed8]/20 dark:border-[#60a5fa]/20', bg: 'bg-[#1d4ed8]/5 dark:bg-[#60a5fa]/5' },
      'javascript': { text: 'text-[#b45309] dark:text-[#fbbf24]', border: 'border-[#b45309]/20 dark:border-[#fbbf24]/20', bg: 'bg-[#b45309]/5 dark:bg-[#fbbf24]/5' },
      'next.js': { text: 'text-zinc-800 dark:text-zinc-200', border: 'border-zinc-800/20 dark:border-zinc-200/20', bg: 'bg-zinc-800/5 dark:bg-zinc-200/5' },
      'node.js': { text: 'text-[#15803d] dark:text-[#4ade80]', border: 'border-[#15803d]/20 dark:border-[#4ade80]/20', bg: 'bg-[#15803d]/5 dark:bg-[#4ade80]/5' },
      'mongodb': { text: 'text-[#166534] dark:text-[#22c55e]', border: 'border-[#166534]/20 dark:border-[#22c55e]/20', bg: 'bg-[#166534]/5 dark:bg-[#22c55e]/5' },
      'express': { text: 'text-zinc-700 dark:text-zinc-300', border: 'border-zinc-700/20 dark:border-zinc-300/20', bg: 'bg-zinc-700/5 dark:bg-zinc-300/5' },
      'tailwind css': { text: 'text-[#0369a1] dark:text-[#22d3ee]', border: 'border-[#0369a1]/20 dark:border-[#22d3ee]/20', bg: 'bg-[#0369a1]/5 dark:bg-[#22d3ee]/5' },
      'redis': { text: 'text-[#b91c1c] dark:text-[#f87171]', border: 'border-[#b91c1c]/20 dark:border-[#f87171]/20', bg: 'bg-[#b91c1c]/5 dark:bg-[#f87171]/5' },
      'socket.io': { text: 'text-[#0284c7] dark:text-[#38bdf8]', border: 'border-[#0284c7]/20 dark:border-[#38bdf8]/20', bg: 'bg-[#0284c7]/5 dark:bg-[#38bdf8]/5' },
      'stripe': { text: 'text-[#4338ca] dark:text-[#818cf8]', border: 'border-[#4338ca]/20 dark:border-[#818cf8]/20', bg: 'bg-[#4338ca]/5 dark:bg-[#818cf8]/5' },
      'docker': { text: 'text-[#0369a1] dark:text-[#38bdf8]', border: 'border-[#0369a1]/20 dark:border-[#38bdf8]/20', bg: 'bg-[#0369a1]/5 dark:bg-[#38bdf8]/5' },
      'prisma': { text: 'text-[#4f46e5] dark:text-[#a5b4fc]', border: 'border-[#4f46e5]/20 dark:border-[#a5b4fc]/20', bg: 'bg-[#4f46e5]/5 dark:bg-[#a5b4fc]/5' },
      'supabase': { text: 'text-[#065f46] dark:text-[#3ecf8e]', border: 'border-[#065f46]/20 dark:border-[#3ecf8e]/20', bg: 'bg-[#065f46]/5 dark:bg-[#3ecf8e]/5' },
      'redux toolkit': { text: 'text-[#6d28d9] dark:text-[#a582e2]', border: 'border-[#6d28d9]/20 dark:border-[#a582e2]/20', bg: 'bg-[#6d28d9]/5 dark:bg-[#a582e2]/5' },
      'gemini api': { text: 'text-[#a21caf] dark:text-[#f472b6]', border: 'border-[#a21caf]/20 dark:border-[#f472b6]/20', bg: 'bg-[#a21caf]/5 dark:bg-[#f472b6]/5' },
      'groq api': { text: 'text-[#c2410c] dark:text-[#f97316]', border: 'border-[#c2410c]/20 dark:border-[#f97316]/20', bg: 'bg-[#c2410c]/5 dark:bg-[#f97316]/5' },
      'google maps': { text: 'text-[#b91c1c] dark:text-[#fb7268]', border: 'border-[#b91c1c]/20 dark:border-[#fb7268]/20', bg: 'bg-[#b91c1c]/5 dark:bg-[#fb7268]/5' },
      'paypal': { text: 'text-[#1d4ed8] dark:text-[#3b8beb]', border: 'border-[#1d4ed8]/20 dark:border-[#3b8beb]/20', bg: 'bg-[#1d4ed8]/5 dark:bg-[#3b8beb]/5' },
      'aws s3': { text: 'text-[#c2410c] dark:text-[#ffb74d]', border: 'border-[#c2410c]/20 dark:border-[#ffb74d]/20', bg: 'bg-[#c2410c]/5 dark:bg-[#ffb74d]/5' },
      'cloudinary': { text: 'text-[#1d4ed8] dark:text-[#6a7ce8]', border: 'border-[#1d4ed8]/20 dark:border-[#6a7ce8]/20', bg: 'bg-[#1d4ed8]/5 dark:bg-[#6a7ce8]/5' },
      'framer motion': { text: 'text-[#be185d] dark:text-[#ff409f]', border: 'border-[#be185d]/20 dark:border-[#ff409f]/20', bg: 'bg-[#be185d]/5 dark:bg-[#ff409f]/5' },
      'shadcn/ui': { text: 'text-zinc-800 dark:text-zinc-200', border: 'border-zinc-800/20 dark:border-zinc-200/20', bg: 'bg-zinc-800/5 dark:bg-zinc-200/5' },
      'python': { text: 'text-[#1d4ed8] dark:text-[#63a4db]', border: 'border-[#1d4ed8]/20 dark:border-[#63a4db]/20', bg: 'bg-[#1d4ed8]/5 dark:bg-[#63a4db]/5' },
      'go': { text: 'text-[#0369a1] dark:text-[#33c9eb]', border: 'border-[#0369a1]/20 dark:border-[#33c9eb]/20', bg: 'bg-[#0369a1]/5 dark:bg-[#33c9eb]/5' },
      'c++': { text: 'text-[#1d4ed8] dark:text-[#3382c4]', border: 'border-[#1d4ed8]/20 dark:border-[#3382c4]/20', bg: 'bg-[#1d4ed8]/5 dark:bg-[#3382c4]/5' },
      'postgresql': { text: 'text-[#1d4ed8] dark:text-[#60a5fa]', border: 'border-[#1d4ed8]/20 dark:border-[#60a5fa]/20', bg: 'bg-[#1d4ed8]/5 dark:bg-[#60a5fa]/5' },
      'bullmq': { text: 'text-[#b91c1c] dark:text-[#ff8a8a]', border: 'border-[#b91c1c]/20 dark:border-[#ff8a8a]/20', bg: 'bg-[#b91c1c]/5 dark:bg-[#ff8a8a]/5' },
      'multer': { text: 'text-[#b45309] dark:text-[#fbbf24]', border: 'border-[#b45309]/20 dark:border-[#fbbf24]/20', bg: 'bg-[#b45309]/5 dark:bg-[#fbbf24]/5' },
      'gsap': { text: 'text-[#4d7c0f] dark:text-[#a3e635]', border: 'border-[#4d7c0f]/20 dark:border-[#a3e635]/20', bg: 'bg-[#4d7c0f]/5 dark:bg-[#a3e635]/5' },
      'canvas api': { text: 'text-[#c2410c] dark:text-[#f76d4d]', border: 'border-[#c2410c]/20 dark:border-[#f76d4d]/20', bg: 'bg-[#c2410c]/5 dark:bg-[#f76d4d]/5' },
      'scrolltrigger': { text: 'text-[#0891b2] dark:text-[#33ffff]', border: 'border-[#0891b2]/20 dark:border-[#33ffff]/20', bg: 'bg-[#0891b2]/5 dark:bg-[#33ffff]/5' },
      'app router': { text: 'text-[#a21caf] dark:text-[#ff33ed]', border: 'border-[#a21caf]/20 dark:border-[#ff33ed]/20', bg: 'bg-[#a21caf]/5 dark:bg-[#ff33ed]/5' },
      'jwt': { text: 'text-[#701a75] dark:text-[#e473ff]', border: 'border-[#701a75]/20 dark:border-[#e473ff]/20', bg: 'bg-[#701a75]/5 dark:bg-[#e473ff]/5' },
      'api integration': { text: 'text-[#15803d] dark:text-[#52b202]', border: 'border-[#15803d]/20 dark:border-[#52b202]/20', bg: 'bg-[#15803d]/5 dark:bg-[#52b202]/5' },
      'ai api': { text: 'text-[#6d28d9] dark:text-[#d24dff]', border: 'border-[#6d28d9]/20 dark:border-[#d24dff]/20', bg: 'bg-[#6d28d9]/5 dark:bg-[#d24dff]/5' }
    };
    return colorMap[lower] || { text: "text-secondary", border: "border-subtle/50", bg: "bg-elevated/40" };
  };

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.0
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
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
                            loading="lazy"
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
                    <div className="mb-3">
                      <h3 className="text-lg font-bold tracking-tight text-primary mb-1 truncate group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-secondary leading-relaxed line-clamp-3 font-light">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack badge row */}
                    <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-neutral-800/50">
                      <div className="flex flex-wrap gap-2">
                        {techTags.map((tag) => {
                          const styleInfo = getTechColor(tag);
                          return (
                            <span
                              key={tag}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border ${styleInfo.border} ${styleInfo.bg} ${styleInfo.text} text-[10px] mono rounded-full`}
                            >
                              {getTechIcon(tag)}
                              <span className="capitalize">{tag}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-5 pt-3 border-t border-subtle/40 flex gap-2.5">
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
