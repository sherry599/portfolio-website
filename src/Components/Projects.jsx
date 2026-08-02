import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Github, Star, GitFork, ArrowUpRight, Code2, Lightbulb } from 'lucide-react';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, 
  SiTypescript, SiDocker, SiRedis, SiSocketdotio, SiStripe, SiPrisma, SiPython, SiGo, SiCplusplus,
  SiJavascript, SiSupabase, SiExpo, SiRedux, SiGooglemaps, SiPaypal, SiAmazons3, SiCloudinary, SiFramer
} from 'react-icons/si';
import { usePageTransition } from '@/Components/PageTransitionContext';
import MagneticButton from './ui/MagneticButton';
import { fetchGitHubData } from '../lib/github';
import { projectsData } from '../data/projectsData';

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

const getTechIcon = (tech) => {
  if (!tech) return <Code2 className="w-3.5 h-3.5 text-secondary" />;
  const lower = tech.toLowerCase();
  const iconMap = {
    'react': <SiReact className="w-3.5 h-3.5" />,
    'react native': <SiReact className="w-3.5 h-3.5" />,
    'typescript': <SiTypescript className="w-3.5 h-3.5" />,
    'javascript': <SiJavascript className="w-3.5 h-3.5" />,
    'next.js': <SiNextdotjs className="w-3.5 h-3.5" />,
    'node.js': <SiNodedotjs className="w-3.5 h-3.5" />,
    'mongodb': <SiMongodb className="w-3.5 h-3.5" />,
    'express': <SiExpress className="w-3.5 h-3.5" />,
    'tailwind css': <SiTailwindcss className="w-3.5 h-3.5" />,
    'redis': <SiRedis className="w-3.5 h-3.5" />,
    'socket.io': <SiSocketdotio className="w-3.5 h-3.5" />,
    'stripe': <SiStripe className="w-3.5 h-3.5" />,
    'docker': <SiDocker className="w-3.5 h-3.5" />,
    'prisma': <SiPrisma className="w-3.5 h-3.5" />,
    'supabase': <SiSupabase className="w-3.5 h-3.5" />,
    'expo': <SiExpo className="w-3.5 h-3.5" />,
    'redux toolkit': <SiRedux className="w-3.5 h-3.5" />,
    'gemini api': <Lightbulb className="w-3.5 h-3.5" />,
    'google maps': <SiGooglemaps className="w-3.5 h-3.5" />,
    'paypal': <SiPaypal className="w-3.5 h-3.5" />,
    'aws s3': <SiAmazons3 className="w-3.5 h-3.5" />,
    'cloudinary': <SiCloudinary className="w-3.5 h-3.5" />,
    'framer motion': <SiFramer className="w-3.5 h-3.5" />,
    'shadcn/ui': <SiNextdotjs className="w-3.5 h-3.5" />,
    'python': <SiPython className="w-3.5 h-3.5" />,
    'go': <SiGo className="w-3.5 h-3.5" />,
    'c++': <SiCplusplus className="w-3.5 h-3.5" />
  };
  return iconMap[lower] || <Code2 className="w-3.5 h-3.5 text-secondary" />;
};

const TECH_BADGE_COLORS = {
  'react': {
    light: { bg: '#e0f7fa', border: 'rgba(0,180,216,0.2)', text: '#007a99' },
    dark: { bg: 'rgba(0,180,216,0.15)', border: 'rgba(0,180,216,0.25)', text: '#61dafb' }
  },
  'react native': {
    light: { bg: '#e0f7fa', border: 'rgba(0,180,216,0.2)', text: '#007a99' },
    dark: { bg: 'rgba(0,180,216,0.15)', border: 'rgba(0,180,216,0.25)', text: '#61dafb' }
  },
  'typescript': {
    light: { bg: '#e3f2fd', border: 'rgba(49,120,198,0.2)', text: '#0d47a1' },
    dark: { bg: 'rgba(49,120,198,0.15)', border: 'rgba(49,120,198,0.25)', text: '#3178c6' }
  },
  'javascript': {
    light: { bg: '#fffde7', border: 'rgba(247,223,30,0.2)', text: '#7f6000' },
    dark: { bg: 'rgba(247,223,30,0.1)', border: 'rgba(247,223,30,0.2)', text: '#f7df1e' }
  },
  'next.js': {
    light: { bg: '#f5f5f5', border: '#e0e0e0', text: '#000000' },
    dark: { bg: '#222222', border: '#333333', text: '#ffffff' }
  },
  'node.js': {
    light: { bg: '#e8f5e9', border: 'rgba(51,153,51,0.2)', text: '#1b5e20' },
    dark: { bg: 'rgba(51,153,51,0.15)', border: 'rgba(51,153,51,0.25)', text: '#339933' }
  },
  'mongodb': {
    light: { bg: '#e8f5e9', border: 'rgba(71,162,72,0.2)', text: '#1b5e20' },
    dark: { bg: 'rgba(71,162,72,0.15)', border: 'rgba(71,162,72,0.25)', text: '#47a248' }
  },
  'express': {
    light: { bg: '#f5f5f5', border: '#e0e0e0', text: '#333333' },
    dark: { bg: '#222222', border: '#333333', text: '#ffffff' }
  },
  'tailwind css': {
    light: { bg: '#e0f7fa', border: 'rgba(6,182,212,0.2)', text: '#00838f' },
    dark: { bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.25)', text: '#06b6d4' }
  },
  'redis': {
    light: { bg: '#ffebee', border: 'rgba(220,56,45,0.2)', text: '#b71c1c' },
    dark: { bg: 'rgba(220,56,45,0.15)', border: 'rgba(220,56,45,0.25)', text: '#dc382d' }
  },
  'socket.io': {
    light: { bg: '#f5f5f5', border: '#e0e0e0', text: '#000000' },
    dark: { bg: '#222222', border: '#333333', text: '#ffffff' }
  },
  'stripe': {
    light: { bg: '#e8eaf6', border: 'rgba(99,91,255,0.2)', text: '#283593' },
    dark: { bg: 'rgba(99,91,255,0.15)', border: 'rgba(99,91,255,0.25)', text: '#635bff' }
  },
  'docker': {
    light: { bg: '#e1f5fe', border: 'rgba(36,150,237,0.2)', text: '#01579b' },
    dark: { bg: 'rgba(36,150,237,0.15)', border: 'rgba(36,150,237,0.25)', text: '#2496ed' }
  },
  'prisma': {
    light: { bg: '#f3e5f5', border: 'rgba(90,44,188,0.2)', text: '#4a148c' },
    dark: { bg: 'rgba(90,44,188,0.15)', border: 'rgba(90,44,188,0.25)', text: '#a582e2' }
  },
  'supabase': {
    light: { bg: '#e8f8f2', border: 'rgba(62,207,142,0.2)', text: '#117046' },
    dark: { bg: 'rgba(62,207,142,0.15)', border: 'rgba(62,207,142,0.25)', text: '#3ecf8e' }
  },
  'expo': {
    light: { bg: '#ffebe6', border: 'rgba(249,115,22,0.2)', text: '#c2410c' },
    dark: { bg: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.25)', text: '#f97316' }
  },
  'redux toolkit': {
    light: { bg: '#f3e5f5', border: 'rgba(118,74,188,0.2)', text: '#4a148c' },
    dark: { bg: 'rgba(118,74,188,0.15)', border: 'rgba(118,74,188,0.25)', text: '#764abc' }
  },
  'gemini api': {
    light: { bg: '#fffde7', border: 'rgba(234,179,8,0.2)', text: '#a16207' },
    dark: { bg: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.25)', text: '#eab308' }
  },
  'google maps': {
    light: { bg: '#ffebee', border: 'rgba(234,67,53,0.2)', text: '#c62828' },
    dark: { bg: 'rgba(234,67,53,0.15)', border: 'rgba(234,67,53,0.25)', text: '#ea4335' }
  },
  'paypal': {
    light: { bg: '#e3f2fd', border: 'rgba(0,48,135,0.2)', text: '#003087' },
    dark: { bg: 'rgba(0,48,135,0.15)', border: 'rgba(0,48,135,0.25)', text: '#3b8beb' }
  },
  'aws s3': {
    light: { bg: '#fff3e0', border: 'rgba(255,153,0,0.2)', text: '#e65100' },
    dark: { bg: 'rgba(255,153,0,0.15)', border: 'rgba(255,153,0,0.25)', text: '#ff9900' }
  },
  'cloudinary': {
    light: { bg: '#e8eaf6', border: 'rgba(52,72,197,0.2)', text: '#1a237e' },
    dark: { bg: 'rgba(52,72,197,0.15)', border: 'rgba(52,72,197,0.25)', text: '#3448c5' }
  },
  'framer motion': {
    light: { bg: '#fce4ec', border: 'rgba(244,63,94,0.2)', text: '#880e4f' },
    dark: { bg: 'rgba(244,63,94,0.15)', border: 'rgba(244,63,94,0.25)', text: '#f43f5e' }
  },
  'shadcn/ui': {
    light: { bg: '#f5f5f5', border: '#e0e0e0', text: '#000000' },
    dark: { bg: '#222222', border: '#333333', text: '#ffffff' }
  }
};

const Projects = () => {
  const isDark = useDarkMode();
  const [gitData, setGitData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { transitionTo, isTransitioning, activeCardId, prefetch } = usePageTransition();
  const isThisTransitioning = isTransitioning && activeCardId === 'projects';

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
      <div className="py-24 bg-primary text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-t-transparent border-neutral-400 rounded-full animate-spin" />
          <span className="text-xs uppercase mono text-secondary">Syncing Project Registry...</span>
        </div>
      </div>
    );
  }

  const featuredProjectIds = ['medeaz', 'maintainermind', 'envarmor', 'khidmat', 'noretmy'];
  const featuredProjects = featuredProjectIds.map(id => {
    const project = projectsData[id];
    const matchedRepo = gitData?.repos?.find(r => 
      r.name.toLowerCase() === id.toLowerCase() || 
      (project?.githubLink && r.link.toLowerCase() === project.githubLink.toLowerCase())
    );
    return {
      ...project,
      stars: matchedRepo ? matchedRepo.stars : 0,
      forks: matchedRepo ? matchedRepo.forks : 0,
    };
  }).filter(Boolean);

  return (
    <div className="relative bg-primary overflow-hidden border-t border-subtle">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* White glow for dark mode */}
        <div className="absolute top-24 left-10 w-80 h-80 rounded-full bg-neutral-300/10 dark:bg-white/5 blur-3xl opacity-50"></div>
        <div className="absolute bottom-24 right-10 w-96 h-96 rounded-full bg-neutral-400/10 dark:bg-white/5 blur-3xl opacity-60"></div>
        
        {/* Geometric Background Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-zinc-200/50 dark:border-white/10 rotate-45 pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 border border-zinc-200/50 dark:border-white/10 rounded-full pointer-events-none"></div>

        {/* Background text watermark */}
        <div className="absolute top-[30%] right-[10%] font-mono font-black text-[12vw] uppercase tracking-tighter text-neutral-900/[0.012] dark:text-white/[0.018]">
          BUILD
        </div>
      </div>

      <Motion.section 
        id="projects" 
        animate={isThisTransitioning ? {
          opacity: 0,
          scale: 0.95,
          y: -50,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        } : {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" }
        }}
        className="py-16 md:py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          {/* Section Header */}
          <div className="mb-16 max-w-2xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1.5px] bg-accent"></div>
              <span className="text-xs font-bold text-secondary tracking-[0.2em] uppercase mono">Portfolio</span>
              <div className="w-8 h-[1.5px] bg-accent"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-5 font-display">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 to-neutral-600 dark:from-white dark:to-neutral-300">
                Projects
              </span>
            </h2>

            <p className="text-sm md:text-base text-secondary font-light max-w-md leading-relaxed mx-auto">
              Explore my featured project creations and case studies.
            </p>
          </div>

          {/* Dynamic 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project) => {
              const techTags = project.tech || [];
              return (
                <Motion.div
                  key={project.id}
                  whileHover="hover"
                  variants={{
                    normal: { y: 0 },
                    hover: { y: -5 }
                  }}
                  transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
                  onMouseEnter={() => prefetch(`/project/${project.id}`)}
                  onClick={() => transitionTo(`/project/${project.id}`, project.id)}
                  className="group relative flex flex-col justify-between overflow-hidden border border-zinc-200/70 dark:border-neutral-800/50 bg-surface/30 dark:bg-surface/10 backdrop-blur-md hover:bg-surface/50 dark:hover:bg-surface/15 transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),_0_8px_30px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),_0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-2xl p-6 cursor-pointer"
                >
                  {/* Glass Card Border Overlay */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-default/80 rounded-2xl transition-colors duration-300 pointer-events-none" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] tracking-wider font-bold text-secondary uppercase mono bg-elevated border border-subtle px-2 py-0.5 rounded">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/25 rounded-full shadow-[0_1px_5px_rgba(0,0,0,0.02)]">
                            <Star className="w-2.5 h-2.5 fill-accent" />
                            Featured
                          </span>
                        )}
                      </div>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-secondary hover:text-primary transition-colors p-1"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Image / Graphic Fallback */}
                    <div className="relative h-36 overflow-hidden rounded-xl bg-elevated mb-5 border border-default/40 shadow-sm flex items-center justify-center">
                      {project.image ? (
                        <>
                          <img
                            src={`/${project.image}`}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-103 group-hover:brightness-105 transition-all duration-300 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-30" />
                        </>
                      ) : (
                        <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[9px] text-secondary/60 bg-surface/40 select-none">
                          <span className="opacity-50 border-b border-subtle/40 pb-1">MODULE: {project.title}</span>
                          <div className="flex flex-col gap-0.5 my-auto">
                            <span className="text-primary font-bold">git status</span>
                            <span>working directory clean</span>
                          </div>
                          <div className="flex justify-between border-t border-subtle/40 pt-1">
                            <span>STARS: {project.stars}</span>
                            <span>FORKS: {project.forks}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Meta */}
                    <h3 className="text-base sm:text-lg font-black tracking-tight text-primary mb-2 truncate group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[12px] sm:text-xs text-secondary/90 leading-relaxed font-light mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Redesigned Tech Stack Badge Row */}
                    <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-neutral-800/50">
                      <div className="flex flex-wrap gap-2">
                        {techTags.slice(0, 5).map((tag) => {
                          const lowerTag = tag.toLowerCase();
                          const colorMap = TECH_BADGE_COLORS[lowerTag] || {
                            light: { bg: 'rgba(0,0,0,0.03)', border: 'rgba(0,0,0,0.08)', text: 'rgba(0,0,0,0.65)' },
                            dark: { bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)', text: 'rgba(255,255,255,0.75)' }
                          };
                          const colors = isDark ? colorMap.dark : colorMap.light;
                          
                          return (
                            <span
                              key={tag}
                              style={{
                                backgroundColor: colors.bg,
                                borderColor: colors.border,
                                color: colors.text
                              }}
                              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border text-[10px] font-bold tracking-wide mono rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.01)]"
                            >
                              <span style={{ color: colors.text }} className="flex-shrink-0 flex items-center justify-center">
                                {getTechIcon(tag)}
                              </span>
                              <span className="capitalize">{tag}</span>
                            </span>
                          );
                        })}
                        {techTags.length > 5 && (
                          <span className="inline-flex items-center px-2 py-0.5 border border-zinc-200 dark:border-neutral-800/50 bg-elevated/40 text-secondary text-[9px] font-bold mono rounded-full">
                            +{techTags.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="mt-5 pt-3 border-t border-subtle flex items-center justify-between text-[10px] text-secondary mono">
                    <div className="flex gap-2.5">
                      <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {project.stars}</span>
                      <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {project.forks}</span>
                    </div>
                    <span className="inline-flex items-center gap-0.5 font-bold group-hover:translate-x-0.5 transition-transform duration-200">
                      Inspect <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </span>
                  </div>
                </Motion.div>
              );
            })}
          </div>

          {/* Trigger Button to full Projects Page */}
          <div className="flex justify-center">
            <MagneticButton
              onMouseEnter={() => prefetch('/projects')}
              onClick={() => transitionTo('/projects', 'projects')}
              className="group bg-accent text-inverse border border-default px-10 py-5 font-bold uppercase tracking-widest text-xs rounded-xl shadow-2xl transition-colors duration-300"
            >
              <span>See All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </MagneticButton>
          </div>

        </div>
      </Motion.section>
    </div>
  );
};

export default Projects;