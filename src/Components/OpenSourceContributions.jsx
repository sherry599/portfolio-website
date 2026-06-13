import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, ArrowRight, GitBranch, GitMerge, Star, Terminal } from 'lucide-react';
import { usePageTransition } from './PageTransitionContext';
import MagneticButton from './ui/MagneticButton';
import { fetchGitHubData } from '../lib/github';

export const OpenSourceContributions = () => {
  const [gitData, setGitData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { transitionTo, isTransitioning, activeCardId, prefetch } = usePageTransition();
  const isThisTransitioning = isTransitioning && activeCardId === 'open-source';

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
          <span className="text-xs uppercase mono text-secondary">Syncing Community Logs...</span>
        </div>
      </div>
    );
  }

  // Compile real-time metrics
  const totalPRs = gitData.prs.length;
  const totalStars = gitData.repos.reduce((sum, r) => sum + r.stars, 0);
  const totalRepos = gitData.repos.length;

  return (
    <div className="relative bg-primary overflow-hidden border-t border-subtle">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-24 right-20 w-80 h-80 rounded-full bg-neutral-300/5 dark:bg-white/5 blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-neutral-400/5 dark:bg-white/5 blur-3xl opacity-40" />
        
        {/* Geometric Background Shapes (White border in dark mode, black/gray in light mode) */}
        <div className="absolute top-20 left-20 w-64 h-64 border border-zinc-200/40 dark:border-white/10 rotate-45 pointer-events-none"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 border border-zinc-200/40 dark:border-white/10 rounded-full pointer-events-none"></div>
      </div>

      {/* Main Section with Exit Animation */}
      <motion.section 
        id="openSource" 
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
        className="py-10 md:py-14 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          {/* Section Header */}
          <div className="mb-12 max-w-2xl mx-auto text-center flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1.5px] bg-accent"></div>
              <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Community</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-6">
              Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">Contributions</span>
            </h2>

            <p className="text-lg text-secondary font-light leading-relaxed max-w-xl">
              Contributing high-performance updates, security hardening, and structural enhancements to developer tools and community-driven platforms.
            </p>
          </div>

          {/* Morphing Shared-Element Card Container */}
          <motion.div
            layoutId="openSourceHeroCard"
            className="group relative bg-surface/30 border border-subtle p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl hover:border-default transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => transitionTo('/open-source', 'open-source')}
            style={{
              boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
            }}
          >
            {/* Hover Glow Light - Monochromatic white */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-neutral-500/5 dark:from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Text, stats & CTA */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary">
                    Open Source Contributions
                  </h3>
                </div>

                {/* Dashboard Stats Preview */}
                <div className="grid grid-cols-3 gap-4 border-t border-subtle pt-6">
                  <div>
                    <div className="text-2xl font-black text-primary tracking-tight">
                      {totalPRs}+
                    </div>
                    <span className="text-[10px] mono uppercase tracking-wider text-secondary">PRs Checked</span>
                  </div>

                  <div>
                    <div className="text-2xl font-black text-primary tracking-tight">
                      {totalStars}
                    </div>
                    <span className="text-[10px] mono uppercase tracking-wider text-secondary">Stars Accrued</span>
                  </div>

                  <div>
                    <div className="text-2xl font-black text-primary tracking-tight">
                      {totalRepos}
                    </div>
                    <span className="text-[10px] mono uppercase tracking-wider text-secondary">Repositories</span>
                  </div>
                </div>

                {/* Trigger Button with Page Transition hook */}
                <div className="pt-2">
                  <MagneticButton
                    onMouseEnter={() => prefetch('/open-source')}
                    onClick={(e) => {
                      e.stopPropagation();
                      transitionTo('/open-source', 'open-source');
                    }}
                    className="group bg-accent text-inverse border border-default px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-xl shadow-2xl transition-colors duration-300"
                  >
                    <span>View Open Source Contributions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </MagneticButton>
                </div>
              </div>

              {/* GitHub Pulse Representation preview (Real log elements) */}
              <div className="lg:col-span-5 bg-elevated/20 border border-subtle rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4 border-b border-subtle pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-[10px] font-bold text-secondary tracking-widest mono uppercase">Live Contributions Log</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Simulated Terminal logs built from real GitHub PR events */}
                <div className="space-y-3 font-light text-xs text-secondary leading-relaxed">
                  {gitData.prs.slice(0, 3).map((pr, index) => (
                    <div key={pr.id || index} className="flex items-start gap-2.5">
                      <GitMerge className="w-3.5 h-3.5 text-neutral-400 mt-0.5" />
                      <div>
                        <span className="text-primary font-bold">{pr.org}/{pr.repo}</span>
                        <p className="text-[11px] font-light text-secondary line-clamp-1">{pr.title}</p>
                      </div>
                    </div>
                  ))}
                  {gitData.prs.length === 0 && (
                    <div className="text-xs text-secondary/50 mono">No recent merges found in public logs.</div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-subtle/60 flex items-center justify-between text-[9px] text-secondary mono">
                  <span className="uppercase truncate">ACTIVE: {gitData.prs.slice(0, 3).map(p => p.repo).join(', ') || 'N/A'}</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
};

export default OpenSourceContributions;
