import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, ShieldCheck, TrendingUp, Award, Zap } from 'lucide-react';
import { usePageTransition } from './PageTransitionContext';
import MagneticButton from './ui/MagneticButton';
import { repositoryShowcase } from '../data/openSourceData';

export const OpenSourceContributions = () => {
  const { transitionTo, isTransitioning, activeCardId, prefetch } = usePageTransition();
  const isThisTransitioning = isTransitioning && activeCardId === 'open-source';

  return (
    <div className="relative bg-primary overflow-hidden border-t border-zinc-200 dark:border-zinc-800/40">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-24 right-20 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-purple-500/5 blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-purple-500/5 dark:bg-emerald-500/5 blur-3xl opacity-40" />
        
        {/* Geometric Background Shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 border border-zinc-200 dark:border-zinc-800/40 rotate-45 pointer-events-none"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 border border-zinc-200 dark:border-zinc-800/40 rounded-full pointer-events-none"></div>
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
              <span className="text-sm font-semibold text-accent tracking-wider uppercase mono">Strategic CS Operations</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-6">
              CS Playbooks & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">Frameworks</span>
            </h2>

            <p className="text-lg text-secondary font-light leading-relaxed max-w-xl">
              Proven account management methodologies, executive QBR/EBR playbooks, and AI-powered customer health scoring systems.
            </p>
          </div>

          {/* Shared-Element Card Container */}
          <motion.div
            layoutId="openSourceHeroCard"
            className="group relative bg-surface/30 border border-zinc-200 dark:border-zinc-800/40 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => transitionTo('/open-source', 'open-source')}
            style={{
              boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
            }}
          >
            {/* Hover Glow Light */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-500/10 dark:from-emerald-400/10 via-transparent to-purple-500/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Text, stats & CTA */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary">
                    Executive CS Strategy & Playbook Architecture
                  </h3>
                  <p className="text-sm text-secondary mt-2">
                    Repeatable account retention playbooks, Voice-of-Customer loops, and automated health triggers driving 107% NRR across Enterprise & Mid-Market SaaS portfolios.
                  </p>
                </div>

                {/* Dashboard Stats Preview */}
                <div className="grid grid-cols-3 gap-4 border-t border-subtle pt-6">
                  <div>
                    <div className="text-2xl font-black text-emerald-500 tracking-tight">
                      107%
                    </div>
                    <span className="text-[10px] mono uppercase tracking-wider text-secondary">Net Rev Retention</span>
                  </div>

                  <div>
                    <div className="text-2xl font-black text-blue-500 tracking-tight">
                      87%+
                    </div>
                    <span className="text-[10px] mono uppercase tracking-wider text-secondary">Average CSAT</span>
                  </div>

                  <div>
                    <div className="text-2xl font-black text-amber-500 tracking-tight">
                      $4M+
                    </div>
                    <span className="text-[10px] mono uppercase tracking-wider text-secondary">Managing Book of Business</span>
                  </div>
                </div>

                {/* Trigger Button */}
                <div className="pt-2">
                  <MagneticButton
                    onMouseEnter={() => prefetch('/open-source')}
                    onClick={(e) => {
                      e.stopPropagation();
                      transitionTo('/open-source', 'open-source');
                    }}
                    className="group bg-accent text-inverse border border-default px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-xl shadow-2xl transition-colors duration-300"
                  >
                    <span>Explore All CS Playbooks</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </MagneticButton>
                </div>
              </div>

              {/* Framework Showcase Preview */}
              <div className="lg:col-span-5 bg-elevated/20 border border-subtle rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm space-y-3">
                <div className="flex items-center justify-between border-b border-subtle pb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-accent" />
                    <span className="text-[10px] font-bold text-secondary tracking-widest mono uppercase">CS Framework Modules</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {repositoryShowcase.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-primary/40 border border-default">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-primary">{item.name}</span>
                      <span className="text-[10px] font-mono text-emerald-500 font-bold">{item.stars}</span>
                    </div>
                    <p className="text-[11px] text-secondary line-clamp-2">{item.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
};

export default OpenSourceContributions;
