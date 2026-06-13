import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { usePageTransition } from './PageTransitionContext';
import MagneticButton from './ui/MagneticButton';
import { fetchGitHubData } from '../lib/github';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [gitData, setGitData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { transitionTo, isTransitioning, activeCardId } = usePageTransition();
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

  // Showcase only the top 3 featured projects (EnvArmor, KHIDMAT, Noretmy)
  const featuredProjectIds = ['envarmor', 'khidmat', 'noretmy'];
  const featuredProjects = featuredProjectIds.map(id => {
    const project = projectsData[id];
    // Match with dynamic stargazers & forks from GitHub
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
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-neutral-300/5 dark:bg-white/5 blur-3xl opacity-40"></div>
        <div className="absolute bottom-24 right-10 w-80 h-80 rounded-full bg-neutral-400/5 dark:bg-white/5 blur-3xl opacity-50"></div>
        
        {/* Geometric Background Shapes (White border in dark mode, black in light mode) */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-zinc-200/40 dark:border-white/10 rotate-45 pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 border border-zinc-200/40 dark:border-white/10 rounded-full pointer-events-none"></div>

        {/* Background text watermark */}
        <div className="absolute top-[30%] right-[10%] font-mono font-black text-[12vw] uppercase tracking-tighter text-neutral-900/[0.012] dark:text-white/[0.018]">
          BUILD
        </div>
      </div>

      <motion.section 
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
        className="py-24 md:py-32 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          {/* Section Header */}
          <div className="mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1.5px] bg-accent"></div>
              <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Portfolio</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-white dark:to-neutral-400">Projects</span>
            </h2>

            <p className="text-lg text-secondary font-light leading-relaxed">
              Explore my featured project creations and case studies.
            </p>
          </div>

          {/* Dynamic 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, idx) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  onClick={() => transitionTo(`/project/${project.id}`, project.id)}
                  className="group relative flex flex-col justify-between overflow-hidden border border-subtle bg-surface/30 hover:bg-surface/50 transition-all duration-300 shadow-sm rounded-2xl p-6 cursor-pointer"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] tracking-wider font-bold text-secondary uppercase mono bg-elevated border border-subtle px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-secondary hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Image / Graphic Fallback */}
                    <div className="relative h-36 overflow-hidden rounded-xl bg-elevated mb-5 border border-subtle flex items-center justify-center">
                      {project.image ? (
                        <>
                          <img
                            src={`/${project.image}`}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-102 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-40" />
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
                    <h3 className="text-lg font-bold tracking-tight text-primary mb-2 truncate group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed line-clamp-3 font-light mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer Stats */}
                  <div className="mt-4 pt-3 border-t border-subtle flex items-center justify-between text-[10px] text-secondary mono">
                    <div className="flex gap-2">
                      <span className="flex items-center gap-0.5"><Star className="w-3 h-3" /> {project.stars}</span>
                      <span className="flex items-center gap-0.5"><GitFork className="w-3 h-3" /> {project.forks}</span>
                    </div>
                    <span className="inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Inspect <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trigger Button to full Projects Page */}
          <div className="flex justify-center">
            <MagneticButton
              onClick={() => transitionTo('/projects', 'projects')}
              className="group bg-accent text-inverse border border-default px-10 py-5 font-bold uppercase tracking-widest text-xs rounded-xl shadow-2xl transition-colors duration-300"
            >
              <span>See All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </MagneticButton>
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default Projects;