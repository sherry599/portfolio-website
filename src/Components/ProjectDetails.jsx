import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Target, Zap, Code2, CheckCircle, Github, AlertCircle, Lightbulb, Star, GitFork, Clock } from 'lucide-react';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens, 
  SiCloudinary, SiNextdotjs, SiRedis, SiSocketdotio, SiStripe, SiRedux, 
  SiPaypal, SiAmazons3, SiShadcnui, SiFramer, SiTypescript, SiDocker, SiGooglemaps, SiPrisma, SiPython, SiGo, SiCplusplus, SiSupabase
} from 'react-icons/si';
import { useParams } from 'react-router-dom';
import { usePageTransition } from './PageTransitionContext';
import { fetchGitHubData } from '../lib/github';
import { projectsData } from '../data/projectsData';
import NoiseMeshBackground from './ui/NoiseMeshBackground';
import MagneticButton from './ui/MagneticButton';

const ProjectDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [gitData, setGitData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { transitionTo } = usePageTransition();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchGitHubData();
      setGitData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary text-primary flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-8 h-8 border-2 border-t-transparent border-neutral-400 rounded-full"
          />
          <span className="text-xs font-semibold tracking-widest uppercase mono text-secondary">Loading Repository Details...</span>
        </div>
      </div>
    );
  }

  // Find the static project definition first
  const project = projectsData[id.toLowerCase()];

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary mb-4 font-mono">Project Not Found</h1>
          <button
            onClick={() => transitionTo('/projects')}
            className="inline-flex items-center gap-2 bg-elevated border border-subtle text-primary px-6 py-3 hover:bg-primary transition-all rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects Hub
          </button>
        </div>
      </div>
    );
  }

  // Find the real-time repository data matching this project
  const repo = gitData?.repos?.find(r => 
    r.name.toLowerCase() === project.id.toLowerCase() ||
    (project.githubLink && r.link.toLowerCase() === project.githubLink.toLowerCase())
  );

  const stars = repo ? repo.stars : 0;
  const forks = repo ? repo.forks : 0;

  const getTechIcon = (tech) => {
    if (!tech) return <Code2 className="w-4 h-4" />;
    const iconMap = {
      'react': <SiReact className="w-4 h-4 text-[#0ea5e9] dark:text-[#38bdf8]" />,
      'react native': <SiReact className="w-4 h-4 text-[#0ea5e9] dark:text-[#38bdf8]" />,
      'expo': <Zap className="w-4 h-4 text-[#ea580c] dark:text-[#f97316]" />,
      'typescript': <SiTypescript className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />,
      'next.js': <SiNextdotjs className="w-4 h-4 text-primary dark:text-white" />,
      'node.js': <SiNodedotjs className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />,
      'mongodb': <SiMongodb className="w-4 h-4 text-[#15803d] dark:text-[#22c55e]" />,
      'express': <SiExpress className="w-4 h-4 text-secondary dark:text-neutral-300" />,
      'tailwind css': <SiTailwindcss className="w-4 h-4 text-[#0891b2] dark:text-[#22d3ee]" />,
      'multer': <SiCloudinary className="w-4 h-4 text-[#ea580c] dark:text-[#f97316]" />,
      'cloudinary': <SiCloudinary className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />,
      'jwt': <SiJsonwebtokens className="w-4 h-4 text-[#db2777] dark:text-[#f472b6]" />,
      'redis': <SiRedis className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />,
      'socket.io': <SiSocketdotio className="w-4 h-4 text-primary dark:text-white" />,
      'stripe': <SiStripe className="w-4 h-4 text-[#4f46e5] dark:text-[#818cf8]" />,
      'redux toolkit': <SiRedux className="w-4 h-4 text-[#764abc] dark:text-[#a78bfa]" />,
      'paypal': <SiPaypal className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />,
      'aws s3': <SiAmazons3 className="w-4 h-4 text-[#ea580c] dark:text-[#f97316]" />,
      'shadcn/ui': <SiShadcnui className="w-4 h-4 text-primary dark:text-white" />,
      'framer motion': <SiFramer className="w-4 h-4 text-[#db2777] dark:text-[#f472b6]" />,
      'docker': <SiDocker className="w-4 h-4 text-[#0284c7] dark:text-[#38bdf8]" />,
      'google maps': <SiGooglemaps className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />,
      'supabase': <SiSupabase className="w-4 h-4 text-[#3ECF8E]" />,
      'gemini api': <Lightbulb className="w-4 h-4 text-[#eab308] dark:text-[#fde047]" />,
      'prisma': <SiPrisma className="w-4 h-4 text-primary dark:text-white" />,
      'python': <SiPython className="w-4 h-4 text-[#0284c7] dark:text-[#38bdf8]" />,
      'go': <SiGo className="w-4 h-4 text-[#0891b2] dark:text-[#22d3ee]" />,
      'c++': <SiCplusplus className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
    };
    return iconMap[tech.toLowerCase()] || <Code2 className="w-4 h-4" />;
  };

  const getTechColor = (tech) => {
    if (!tech) return { text: "text-secondary", border: "border-subtle", bg: "bg-surface/30" };
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
    return colorMap[lower] || { text: "text-secondary", border: "border-subtle", bg: "bg-surface/30" };
  };

  const imgFile = project.image;

  // Page container variants
  const pageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemStaggerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.45, 
        ease: "easeOut" 
      }
    }
  };

  const techTags = project.tech || [];

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden pb-24">
      {/* Background with Ambient Mesh & Floating Lights */}
      <NoiseMeshBackground />

      {/* Geometric Background Shapes (White border in dark mode, black/gray in light mode) */}
      <div className="absolute top-24 right-20 w-64 h-64 border border-zinc-200/40 dark:border-white/10 rotate-45 pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 border border-zinc-200/40 dark:border-white/10 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-zinc-200/40 dark:bg-white/10 rotate-12 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-6 py-6 md:py-8 max-w-6xl"
        >
          <button
            onClick={() => transitionTo('/projects')}
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors group text-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold tracking-tight">Back to Projects Hub</span>
          </button>
        </motion.div>

        <motion.div 
          variants={pageContainerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 max-w-6xl"
        >
          {/* Hero Wrapper */}
          <motion.div 
            variants={itemStaggerVariants}
            className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-12 items-center"
          >
            {/* Left: Image container */}
            <motion.div 
              layoutId={`project-card-${project.id}`}
              className="lg:col-span-5 relative h-[300px] md:h-[420px] overflow-hidden rounded-2xl border border-subtle bg-surface/30 backdrop-blur-md shadow-lg p-4 flex flex-col justify-center"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-primary border border-subtle flex items-center justify-center">
                {imgFile ? (
                  <>
                    <motion.img
                      layoutId={`project-img-${project.id}`}
                      src={`/${imgFile}`}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                  </>
                ) : (
                  // Stunning tech terminal panel fallback
                  <div className="w-full h-full p-6 flex flex-col justify-between font-mono text-xs text-secondary/60 bg-surface/30 select-none">
                    <div className="flex items-center justify-between border-b border-subtle/50 pb-2">
                      <span>PROJECT_DASHBOARD: {project.title}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="flex flex-col gap-1.5 my-auto">
                      <span className="text-primary font-bold">git log -n 1</span>
                      <span className="text-secondary/80">commit {project.id.toString().padEnd(40, '0')}</span>
                      <span>Author: Ali Mahmood &lt;aliranam30@gmail.com&gt;</span>
                      <span>Date: {new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between border-t border-subtle/50 pt-2 text-[10px]">
                      <span>STARS: {stars}</span>
                      <span>FORKS: {forks}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right: Info details (Monochrome) */}
            <motion.div 
              variants={itemStaggerVariants}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-elevated border border-subtle text-secondary text-[10px] font-bold tracking-widest uppercase mono mb-4 rounded">
                  {project.category}
                </span>
                
                <h1 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">
                  {project.title}
                </h1>
                
                <p className="text-base text-secondary leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="flex items-center gap-6 py-4 border-t border-b border-subtle text-xs text-secondary mono">
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-neutral-400" />
                  <span className="text-primary font-bold">{stars}</span> stars
                </span>
                <span className="flex items-center gap-1.5">
                  <GitFork className="w-4 h-4 text-neutral-400" />
                  <span className="text-primary font-bold">{forks}</span> forks
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  Active repo
                </span>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-[10px] font-bold text-secondary mb-3 tracking-widest uppercase mono">Languages & Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techTags.map((tech) => {
                    const styleInfo = getTechColor(tech);
                    return (
                      <div
                        key={tech}
                        className={`flex items-center gap-1.5 px-3 py-1.5 border ${styleInfo.border} ${styleInfo.bg} ${styleInfo.text} text-xs rounded-lg transition-all duration-300`}
                      >
                        {getTechIcon(tech)}
                        <span className="font-semibold capitalize">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.link && (
                  <MagneticButton
                    onClick={() => window.open(project.link, '_blank')}
                    className="bg-accent text-inverse border border-default px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md"
                  >
                    <span>Launch Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </MagneticButton>
                )}

                {project.githubLink && (
                  <MagneticButton
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="border border-subtle bg-surface/30 hover:bg-primary text-primary px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm"
                  >
                    <span>GitHub Source</span>
                    <Github className="w-3.5 h-3.5" />
                  </MagneticButton>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Tabs Section (Monochrome) */}
          <motion.div variants={itemStaggerVariants} className="max-w-6xl">
            <div className="border border-subtle bg-surface/30 backdrop-blur-md mb-8 overflow-x-auto px-6 rounded-2xl shadow-sm">
              <div className="flex gap-8 min-w-max">
                {['overview', 'features', 'challenges'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${activeTab === tab
                      ? 'text-primary'
                      : 'text-tertiary hover:text-secondary'
                      }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTabDetails"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Contents */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pb-12 md:pb-20"
            >
              {activeTab === 'overview' && (
                <div className="space-y-8 max-w-4xl">
                  <div className="bg-surface/30 backdrop-blur-md p-6 md:p-8 border border-subtle border-l-2 border-l-accent rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                      <h3 className="text-base font-bold tracking-tight text-primary uppercase mono">Project Mission & Architecture</h3>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed font-light font-sans">
                      {project.purpose}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-6 border border-subtle bg-surface/30 backdrop-blur-md rounded-2xl shadow-sm">
                      <div className="text-2xl font-black text-primary mb-1">{techTags.length}</div>
                      <div className="text-[9px] text-secondary font-bold mono uppercase tracking-wider">Stack Items</div>
                    </div>
                    <div className="text-center p-6 border border-subtle bg-surface/30 backdrop-blur-md rounded-2xl shadow-sm">
                      <div className="text-2xl font-black text-primary mb-1">{(project.keyFeatures || []).length}</div>
                      <div className="text-[9px] text-secondary font-bold mono uppercase tracking-wider">Features</div>
                    </div>
                    <div className="text-center p-6 border border-subtle bg-surface/30 backdrop-blur-md rounded-2xl shadow-sm">
                      <div className="text-2xl font-black text-primary mb-1">{(project.challenges || []).length}</div>
                      <div className="text-[9px] text-secondary font-bold mono uppercase tracking-wider">Case Studies</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="max-w-4xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    <h3 className="text-base font-bold tracking-tight text-primary uppercase mono">Core Features</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {(project.keyFeatures || []).map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className="flex items-start gap-3.5 p-5 border border-subtle bg-surface/30 backdrop-blur-sm rounded-2xl"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-elevated flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-3.5 h-3.5 text-neutral-400" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-[9px] text-secondary font-bold mono">FEATURE {String(idx + 1).padStart(2, '0')}</div>
                          <p className="text-xs text-secondary leading-relaxed font-light font-sans">
                            {feature}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'challenges' && (
                <div className="max-w-5xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    <h3 className="text-base font-bold tracking-tight text-primary uppercase mono">Challenges & Resolutions</h3>
                  </div>

                  <div className="space-y-6">
                    {(project.challenges || []).map((item, idx) => (
                      <motion.div
                        key={item.challenge}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className="border border-subtle bg-surface/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm"
                      >
                        <div className="px-6 py-2 border-b border-subtle bg-elevated">
                          <span className="text-[9px] text-secondary font-bold mono">CASE STUDY {String(idx + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="grid md:grid-cols-2">
                          <div className="p-6 border-b md:border-b-0 md:border-r border-subtle">
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-bold text-primary mb-2 text-sm tracking-tight font-mono">The Obstacle</h4>
                                <p className="text-xs text-secondary leading-relaxed font-light font-sans">
                                  {item.challenge}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 bg-surface/10">
                            <div className="flex items-start gap-3">
                              <Lightbulb className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-bold text-primary mb-2 text-sm tracking-tight font-mono">The Resolution</h4>
                                <p className="text-xs text-secondary leading-relaxed font-light font-sans">
                                  {item.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;