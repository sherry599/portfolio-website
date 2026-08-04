import React, { useState, useEffect, useCallback } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, UserCheck, TrendingUp, Cpu, 
  ShieldCheck, CheckCircle2, LineChart, Award, Terminal, Lock, Activity, Sparkles
} from 'lucide-react';

const aboutSlides = [
  {
    id: 1,
    tag: "01 / SUMMARY",
    category: "Senior Customer Success Manager",
    title: "B2B SaaS CS Leader & AI Operations Specialist",
    quote: "I am Shaheryar Mahmood, a Customer Success professional with 7 years of experience managing B2B SaaS accounts across technology, healthcare, and transportation. I drive customer retention, renewal management, revenue expansion, and long-term strategic partnerships.",
    icon: <UserCheck className="w-4 h-4 text-accent" />,
    highlights: ["$4M+ ARR Portfolio", "107% Net Revenue Retention", "AI-Powered CS Operations"]
  },
  {
    id: 2,
    tag: "02 / VALUE",
    category: "Commercial & Operational Excellence",
    title: "Data-Driven Retention & Revenue Expansion",
    quote: "I specialize in Gainsight health scoring, proactive churn risk mitigation, and executive business reviews (EBRs/QBRs). By pairing consultative account management with upsell/cross-sell strategy, I sustain high CSAT (87%+) and NPS (54).",
    icon: <TrendingUp className="w-4 h-4 text-accent" />,
    highlights: ["87%+ CSAT & 54 NPS", "180-Day Renewal Playbook", "~200% Quota Attainment"]
  },
  {
    id: 3,
    tag: "03 / AI & TECH",
    category: "Technical CS & AI Workflows",
    title: "Computer Science Technical Foundation & AI Innovation",
    quote: "Backed by a Bachelor's degree in Computer Science, I bridge complex product capabilities with strategic business outcomes. I design custom AI workflow agents in Gainsight and Claude, saving 20+ hours monthly and keeping churn consistently below 2.3%.",
    icon: <Cpu className="w-4 h-4 text-accent" />,
    highlights: ["BS in Computer Science", "Claude & AI Agents", "20+ Hours/Mo Saved"]
  },
  {
    id: 4,
    tag: "04 / GOVERNANCE",
    category: "Regulated Industries & Enterprise",
    title: "Regulated Industry Governance",
    quote: "Extensive experience managing enterprise accounts in highly regulated healthcare and transport sectors, maintaining 100% HIPAA compliance, security audit readiness, and seamless cross-functional SLA execution.",
    icon: <ShieldCheck className="w-4 h-4 text-accent" />,
    highlights: ["100% HIPAA Compliance", "Healthcare & Transportation", "Zero Compliance Incidents"]
  }
];

const ExecutiveWidget = ({ slideId }) => {
  switch (slideId) {
    case 1:
      return (
        <div className="flex flex-col h-full justify-between gap-4 p-6 bg-gradient-to-br from-sky-500/10 via-surface to-amber-500/10 dark:from-sky-950/60 dark:via-zinc-950 dark:to-amber-950/40 rounded-2xl border border-sky-500/30 dark:border-sky-500/50 shadow-[0_10px_35px_rgba(2,132,199,0.15)] relative overflow-hidden">
          {/* Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-sky-500/20 dark:border-sky-500/30 pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-sky-600 dark:text-sky-300">EXECUTIVE TELEMETRY</span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-300 border border-sky-500/30 shadow-xs">
              LIVE CS OPS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 my-auto relative z-10">
            <div className="p-3.5 rounded-xl bg-surface/90 dark:bg-zinc-900/90 border border-sky-500/20 shadow-xs hover:border-sky-500/40 transition-colors">
              <div className="text-[10px] font-mono text-secondary uppercase font-bold mb-1">$4M+ ARR</div>
              <div className="text-xl font-black text-primary">Portfolio</div>
              <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                <span>↑ 107% NRR</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-surface/90 dark:bg-zinc-900/90 border border-sky-500/20 shadow-xs hover:border-sky-500/40 transition-colors">
              <div className="text-[10px] font-mono text-secondary uppercase font-bold mb-1">CSAT & NPS</div>
              <div className="text-xl font-black text-primary">87% / 54</div>
              <div className="text-[10px] font-bold text-sky-600 dark:text-sky-400 mt-1">Top Tier CSAT</div>
            </div>
            <div className="p-3.5 rounded-xl bg-surface/90 dark:bg-zinc-900/90 border border-amber-500/20 shadow-xs hover:border-amber-500/40 transition-colors">
              <div className="text-[10px] font-mono text-secondary uppercase font-bold mb-1">Onboarding</div>
              <div className="text-xl font-black text-primary">&lt; 20 min</div>
              <div className="text-[10px] font-bold text-amber-600 dark:text-amber-400 mt-1">Reduced 55%</div>
            </div>
            <div className="p-3.5 rounded-xl bg-surface/90 dark:bg-zinc-900/90 border border-emerald-500/20 shadow-xs hover:border-emerald-500/40 transition-colors">
              <div className="text-[10px] font-mono text-secondary uppercase font-bold mb-1">Trial Lift</div>
              <div className="text-xl font-black text-primary">60% → 76%</div>
              <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">Q1-Q2 2026</div>
            </div>
          </div>

          <div className="pt-3 border-t border-sky-500/20 dark:border-sky-500/30 flex items-center justify-between text-[11px] font-mono relative z-10">
            <span className="text-secondary">Key Highlight Highlights</span>
            <span className="font-bold text-sky-600 dark:text-sky-400">7+ Yrs Leadership</span>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="flex flex-col h-full justify-between gap-4 p-6 bg-gradient-to-br from-emerald-500/10 via-surface to-amber-500/10 dark:from-emerald-950/60 dark:via-zinc-950 dark:to-amber-950/40 rounded-2xl border border-emerald-500/30 dark:border-emerald-500/50 shadow-[0_10px_35px_rgba(16,185,129,0.15)] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-emerald-500/20 dark:border-emerald-500/30 pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <LineChart className="w-4 h-4 text-emerald-500" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-300">RETENTION ENGINE</span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 shadow-xs">
              GAINSIGHT OPS
            </span>
          </div>

          <div className="space-y-3 my-auto relative z-10">
            <div className="p-3.5 rounded-xl bg-surface/90 dark:bg-zinc-900/90 border border-emerald-500/20 shadow-xs">
              <div className="flex justify-between items-center text-xs font-bold text-primary mb-1.5">
                <span>Gainsight Portfolio Health</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">88% Green</span>
              </div>
              <div className="w-full h-2 rounded-full bg-secondary/20 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full w-[88%]" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-surface/90 dark:bg-zinc-900/90 border border-blue-500/20 shadow-xs">
              <div className="flex justify-between items-center text-xs font-bold text-primary mb-1.5">
                <span>180-Day Renewal Playbook</span>
                <span className="text-blue-600 dark:text-blue-400 font-mono">98% Renewal</span>
              </div>
              <div className="w-full h-2 rounded-full bg-secondary/20 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-[98%]" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-surface/90 dark:bg-zinc-900/90 border border-amber-500/25 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-secondary uppercase font-bold">Quota Attainment</div>
                <div className="text-base sm:text-lg font-black text-primary mt-0.5">~200% via Upsell & Cross-sell</div>
              </div>
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-500 shrink-0">
                <Award className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-emerald-500/20 dark:border-emerald-500/30 flex items-center justify-between text-[11px] font-mono relative z-10">
            <span className="text-secondary">EBRs & QBRs Managed</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">Commercial Mastery</span>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="flex flex-col h-full justify-between gap-4 p-6 bg-gradient-to-br from-indigo-500/10 via-surface to-purple-500/10 dark:from-indigo-950/60 dark:via-zinc-950 dark:to-purple-950/40 rounded-2xl border border-indigo-500/30 dark:border-indigo-500/50 shadow-[0_10px_35px_rgba(99,102,241,0.15)] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-indigo-500/20 dark:border-indigo-500/30 pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-500" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-600 dark:text-purple-300">AI WORKFLOWS</span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-300 border border-purple-500/30 shadow-xs">
              BSCS DEGREE
            </span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs space-y-2 border border-zinc-800 my-auto shadow-inner relative z-10">
            <div className="text-zinc-500 text-[10px] flex items-center justify-between">
              <span>// Technical CS & AI Agents</span>
              <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <span className="text-emerald-400 font-bold">✔</span>
              <span>Degree: BS in Computer Science</span>
            </div>
            <div className="flex items-center gap-2 text-sky-400">
              <span className="text-emerald-400 font-bold">✔</span>
              <span>Agents: Claude & Gainsight AI</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <span className="text-emerald-400 font-bold">✔</span>
              <span>Time Saved: 20+ Hours / Month</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="text-emerald-400 font-bold">✔</span>
              <span>Churn Rate: &lt; 2.3% Consistent</span>
            </div>
          </div>

          <div className="pt-3 border-t border-indigo-500/20 dark:border-indigo-500/30 flex items-center justify-between text-[11px] font-mono relative z-10">
            <span className="text-secondary">API & Workflow Agents</span>
            <span className="font-bold text-purple-600 dark:text-purple-400">CS + Code Foundation</span>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="flex flex-col h-full justify-between gap-4 p-6 bg-gradient-to-br from-teal-500/10 via-surface to-blue-500/10 dark:from-teal-950/60 dark:via-zinc-950 dark:to-blue-950/40 rounded-2xl border border-teal-500/30 dark:border-teal-500/50 shadow-[0_10px_35px_rgba(20,184,166,0.15)] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-teal-500/20 dark:border-teal-500/30 pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-teal-500" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-teal-600 dark:text-teal-300">ENTERPRISE GOVERNANCE</span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-teal-500/15 text-teal-600 dark:text-teal-300 border border-teal-500/30 shadow-xs">
              100% COMPLIANT
            </span>
          </div>

          <div className="space-y-3 my-auto relative z-10">
            <div className="p-3.5 rounded-xl bg-surface/90 dark:bg-zinc-900/90 border border-teal-500/25 shadow-xs flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400 border border-teal-500/30 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-primary">HIPAA & Audit Readiness</div>
                <div className="text-[11px] text-secondary mt-0.5">Healthcare & Transportation Data Privacy</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-surface/90 dark:bg-zinc-900/90 border border-blue-500/25 shadow-xs flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-primary">SLA Execution & Cross-Functional Governance</div>
                <div className="text-[11px] text-secondary mt-0.5">Legal, Product, Security & Engineering SLAs</div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-teal-500/20 dark:border-teal-500/30 flex items-center justify-between text-[11px] font-mono relative z-10">
            <span className="text-secondary">Regulated Industry Governance</span>
            <span className="font-bold text-teal-600 dark:text-teal-400">Zero Compliance Incidents</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % aboutSlides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length);
  }, []);

  // Auto slide every 5 seconds (5000ms), paused on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  }, [handleNext, handlePrev]);

  const activeSlide = aboutSlides[activeIndex];

  return (
    <section
      id="about"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="About Shaheryar Mahmood - Senior Customer Success Manager"
      className="relative py-8 sm:py-12 md:py-16 bg-primary focus:outline-none overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-12 left-10 w-64 h-64 border border-zinc-200 dark:border-zinc-800/40 rotate-12"></div>
        <div className="absolute bottom-16 right-12 w-48 h-48 border border-zinc-200 dark:border-zinc-800/40 rounded-full"></div>
        
        {/* Floating background dots */}
        <div className="floating-dots text-zinc-400/50 dark:text-zinc-800/60">
          <div className="floating-dot dot-3"></div>
          <div className="floating-dot dot-4"></div>
          <div className="floating-dot dot-5"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 border-b border-default pb-4 sm:pb-6 gap-4 sm:gap-0">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest mono">01 / ABOUT ME</span>
              <div className="w-8 h-[1.5px] bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary whitespace-nowrap">
              AI-First Customer Success Professional
            </h2>
          </div>
        </div>

        {/* Slide Content Box with Pause-on-Hover */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
        >
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-surface p-6 sm:p-8 rounded-2xl border border-default shadow-lg">
            <AnimatePresence mode="wait">
              <Motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-col h-full justify-between gap-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-1.5 rounded-md bg-accent/10 border border-accent/20">
                      {activeSlide.icon}
                    </span>
                    <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
                      {activeSlide.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 leading-snug">
                    {activeSlide.title}
                  </h3>

                  <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    "{activeSlide.quote}"
                  </p>
                </div>

                <div>
                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                    {activeSlide.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-primary/50 border border-default text-xs font-medium text-primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Controls */}
            <div className="flex items-center justify-between border-t border-default/50 pt-4 mt-auto">
              <div className="flex items-center gap-2">
                {aboutSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-secondary/30 hover:bg-secondary'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg border border-default hover:bg-primary text-secondary hover:text-primary transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg border border-default hover:bg-primary text-secondary hover:text-primary transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Executive Telemetry Column */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[360px] flex flex-col justify-between shadow-xl">
            <AnimatePresence mode="wait">
              <Motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 1.03 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full"
              >
                <ExecutiveWidget slideId={activeSlide.id} />
              </Motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
