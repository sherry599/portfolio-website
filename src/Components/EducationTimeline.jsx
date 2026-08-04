import React, { useState } from 'react';
import { Calendar, Briefcase, GraduationCap, MapPin, Award, ChevronRight, Sparkles, History } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const workEntries = [
  {
    id: 'demandhub',
    company: 'DemandHub',
    role: 'Sr. Customer Success Manager',
    duration: 'July 2025 – Present',
    location: 'Remote',
    badge: 'Current Role',
    color: '#0284C7',
    glowColor: 'rgba(2,132,199,0.8)',
    bgGlow: 'bg-white p-2 rounded-xl border border-zinc-200 shadow-md',
    gradient: 'from-sky-500/10 via-cyan-500/5 to-transparent',
    borderGlow: 'border-sky-500/30 hover:border-sky-500/60',
    badgeColor: 'border-sky-500/25 text-sky-600 dark:text-sky-300 bg-sky-500/10',
    logoImg: '/demandhub-logo.png',
    highlights: [
      'Manage onboarding, account adoption, and lifecycle success for a $4M+ book of accounts, spanning core SaaS and AI-native products',
      'Designed AI-powered workflow agents to optimize Customer Success operations.',
      'Mentor junior CSMs through a month-long onboarding program: company and product training, mock-call evaluations, and live-call shadowing to accelerate ramp-up.',
      'Maintained 87%+ CSAT and an average customer NPS of 54 across the account portfolio over the last four quarters.',
      'Partnered with Development and Outbound Sales to redesign onboarding, cutting meeting time from 45 to under 20 minutes and reducing time-to-value — lifting trial conversion for newly onboarded accounts from 60% to 76% in Q1–Q2 2026.'
    ]
  },
  {
    id: 'motive',
    company: 'MOTIVE',
    role: 'Customer Success Manager → Account Manager (Promoted)',
    duration: 'Oct 2023 – June 2025',
    location: 'Remote',
    badge: 'Internal Promotion',
    color: '#0066FF',
    glowColor: 'rgba(0,102,255,0.85)',
    bgGlow: 'bg-black p-2 rounded-xl border border-zinc-800 shadow-md ring-1 ring-blue-500/30',
    gradient: 'from-[#0066FF]/10 via-blue-500/5 to-transparent dark:from-[#0066FF]/20 dark:via-zinc-900/60 dark:to-transparent',
    borderGlow: 'border-blue-500/35 hover:border-blue-500/75 shadow-[0_8px_30px_rgba(0,102,255,0.15)]',
    badgeColor: 'border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10',
    logoImg: '/motive-logo.png',
    highlights: [
      'Managed a portfolio of 120+ customer accounts ($3M+ ARR), achieving 98% renewal rate, 106% NRR, 85%+ CSAT, and NPS of 52.',
      'Promoted to Account Manager to lead strategic accounts; achieved ~200% quota attainment via upsell and cross-sell initiatives.',
      'Led QBRs/EBRs with C-level decision makers and delivered 60+ customer training sessions per quarter.',
      'Proactively engaged customers 180 days prior to renewal to eliminate churn risks.'
    ]
  }
];

const educationEntries = [
  {
    id: 'fccu-bscs',
    institution: 'Forman Christian College University',
    degree: "Bachelor of Science in Computer Science (BSCS)",
    duration: 'Oct 2014 – Nov 2018',
    location: 'Lahore, Pakistan',
    badge: 'BS Degree',
    color: '#10B981',
    badgeColor: 'border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5',
    courses: ['Human Computer Interaction (HCI)', 'Artificial Intelligence (AI)', 'Software Engineering & Agile', 'Operating Systems', 'Database Management Systems'],
    capstone: 'Developed an AI-enabled smart wearable watch to detect heart disease using machine learning (ML) algorithms.'
  },
  {
    id: 'fccu-ics',
    institution: 'Forman Christian College University',
    degree: 'Intermediate in Computer Science (ICS)',
    duration: 'Sep 2012 – May 2014',
    location: 'Lahore, Pakistan',
    badge: 'College',
    color: '#3B82F6',
    badgeColor: 'border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/5',
    courses: ['Computer Science Fundamentals', 'Mathematics', 'Physics'],
    capstone: null
  }
];

const EducationTimeline = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="education" className="relative py-12 sm:py-16 md:py-20 bg-primary overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-32 right-24 w-56 h-56 border border-zinc-200 dark:border-zinc-800/40 rotate-12" />
        <div className="absolute bottom-24 left-20 w-32 h-32 border border-zinc-200 dark:border-zinc-800/40 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 border-b border-default pb-4 sm:pb-6 gap-4 sm:gap-0">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest mono">03 / CAREER & EDUCATION</span>
              <div className="w-8 h-[1.5px] bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
              Professional Journey
            </h2>
          </div>
          
          {/* Tab Selector */}
          <div className="flex items-center gap-2 p-1 bg-surface rounded-xl border border-default">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-accent text-inverse shadow-sm'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience ({workEntries.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-accent text-inverse shadow-sm'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education ({educationEntries.length})</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <Motion.div
              key="work-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="border-l-2 border-accent/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10"
            >
              {workEntries.map((item, idx) => (
                <Motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Pulsing Timeline Node */}
                  <span
                    className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-4 bg-primary transition-all duration-300 group-hover:scale-125 animate-pulse"
                    style={{ borderColor: item.color, boxShadow: `0 0 16px ${item.glowColor}` }}
                  />

                  <Motion.div
                    whileHover={{ y: -4, scale: 1.008 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative overflow-hidden bg-gradient-to-br ${item.gradient} bg-surface p-6 sm:p-8 rounded-2xl border ${item.borderGlow} shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-md`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3.5">
                        <Motion.div
                          whileHover={{ scale: 1.1, rotate: item.id === 'motive' ? -5 : 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          className={`${item.bgGlow} shrink-0 flex items-center justify-center overflow-hidden`}
                        >
                          <img
                            src={item.logoImg}
                            alt={`${item.company} logo`}
                            className="w-7 h-7 object-contain"
                          />
                        </Motion.div>

                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className="text-xl font-extrabold text-primary tracking-tight">{item.company}</h3>
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border animate-pulse ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-accent mt-0.5">{item.role}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-secondary">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface/80 border border-default shadow-xs">
                          <Calendar className="w-3.5 h-3.5 text-accent" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface/80 border border-default shadow-xs">
                          <MapPin className="w-3.5 h-3.5 text-secondary" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 relative z-10">
                      {item.highlights.map((point, pIdx) => (
                        <Motion.li
                          key={pIdx}
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className="flex items-start gap-3 text-sm text-secondary leading-relaxed group/item cursor-default"
                        >
                          <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:translate-x-1" />
                          <span className="group-hover/item:text-primary transition-colors">{point}</span>
                        </Motion.li>
                      ))}
                    </ul>

                    {/* Ambient Animated Glow */}
                    <Motion.div
                      animate={{ opacity: [0.15, 0.45, 0.15] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                      className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                      style={{ backgroundColor: `${item.color}25` }}
                    />
                  </Motion.div>
                </Motion.div>
              ))}

              {/* Animated Continuation Node */}
              <Motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group pt-2"
              >
                {/* Pulsing Timeline node */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-5 w-4 h-4 rounded-full border-4 border-purple-500 bg-primary shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse" />

                <div className="relative overflow-hidden bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 p-6 sm:p-7 rounded-2xl border border-dashed border-purple-500/30 backdrop-blur-md shadow-lg hover:border-purple-500/60 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                        <Motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5" />
                        </Motion.div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-primary">The Journey Continues...</h4>
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-300 border border-purple-500/30 animate-pulse">
                            Prior Foundations
                          </span>
                        </div>
                        <p className="text-xs text-secondary mt-1 max-w-lg leading-relaxed">
                          Earlier professional experience includes multi-year track record in B2B Tech Sales, Digital Solutions, and SDR Leadership dating back to 2016.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-accent shrink-0 bg-accent/5 px-3.5 py-2 rounded-xl border border-accent/20">
                      <Motion.span
                        animate={{ x: [-2, 4, -2] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-flex items-center gap-1.5"
                      >
                        <History className="w-3.5 h-3.5" />
                        <span>7+ Years of Experience</span>
                      </Motion.span>
                    </div>
                  </div>

                  {/* Ambient glow */}
                  <Motion.div
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"
                  />
                </div>
              </Motion.div>
            </Motion.div>
          )}

          {activeTab === 'education' && (
            <Motion.div
              key="edu-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="border-l-2 border-accent/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10"
            >
              {educationEntries.map((item, idx) => (
                <Motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <span
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 bg-primary transition-transform duration-300 group-hover:scale-125"
                    style={{ borderColor: item.color, boxShadow: `0 0 12px ${item.color}60` }}
                  />

                  <div className="bg-surface p-6 sm:p-8 rounded-2xl border border-default shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{item.institution}</h3>
                        <p className="text-sm font-semibold text-accent mt-0.5">{item.degree}</p>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-secondary">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-accent" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-secondary" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {item.courses && (
                      <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-secondary block mb-2">Relevant Coursework</span>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, cIdx) => (
                            <span key={cIdx} className="text-xs px-3 py-1 rounded-lg bg-primary/60 border border-default text-primary">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.capstone && (
                      <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                        <span className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5 mb-1">
                          <Award className="w-3.5 h-3.5" />
                          Final Year Capstone Project
                        </span>
                        <p className="text-xs sm:text-sm text-primary font-medium">{item.capstone}</p>
                      </div>
                    )}
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default EducationTimeline;
