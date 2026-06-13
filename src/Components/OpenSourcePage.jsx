import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, animate, useMotionValue, useInView } from 'framer-motion';
import {
  GitPullRequest, GitBranch, ArrowLeft, Github,
  Search, LayoutGrid, Clock, X, SlidersHorizontal
} from 'lucide-react';
import { fetchGitHubData } from '../lib/github';
import { usePageTransition } from './PageTransitionContext';
import NoiseMeshBackground from './ui/NoiseMeshBackground';
import ThemeToggle from './ThemeToggle';
import { PRCard } from './PRCard';

/* ── Animated counter ── */
const Counter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const n = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value;
    const c = animate(mv, n, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    return c.stop;
  }, [inView, value, mv]);

  useEffect(() =>
    mv.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix;
    }),
  [mv, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

/* ── GitHub activity grid ── */
const ActivityGrid = ({ map }) => {
  const cols = 26, rows = 7;
  const total = cols * rows;
  const today = new Date();
  const grid = [];

  for (let c = 0; c < cols; c++) {
    const col = [];
    for (let r = 0; r < rows; r++) {
      const offset = (total - 1) - (c * rows + r);
      const d = new Date(today);
      d.setDate(today.getDate() - offset);
      const key = d.toISOString().split('T')[0];
      const count = map[key] || 0;
      let level = 0;
      if (count >= 5) level = 4;
      else if (count >= 3) level = 3;
      else if (count >= 2) level = 2;
      else if (count >= 1) level = 1;
      col.push({ key, count, level });
    }
    grid.push(col);
  }

  const shade = ['bg-zinc-200/60 dark:bg-zinc-800/50', 'bg-emerald-900', 'bg-emerald-700', 'bg-emerald-500', 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]'];
  const commits = Object.values(map).reduce((a, b) => a + b, 0);

  return (
    <div className="rounded-2xl border border-subtle bg-surface/40 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Github className="w-3.5 h-3.5 text-secondary" />
          <span className="text-[10px] mono font-bold uppercase tracking-widest text-secondary">Contribution Pulse</span>
        </div>
        <span className="text-[10px] mono text-secondary">{commits} recent</span>
      </div>
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-1 min-w-max">
          {grid.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-1">
              {col.map((cell, ri) => (
                <motion.div
                  key={ri}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, delay: ci * 0.008 + ri * 0.004 }}
                  whileHover={{ scale: 1.4 }}
                  title={`${cell.key}: ${cell.count}`}
                  className={`w-2.5 h-2.5 rounded-[2px] ${shade[cell.level]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 mt-2.5 justify-end">
        <span className="text-[9px] text-secondary mono">Less</span>
        {shade.map((s, i) => <div key={i} className={`w-2 h-2 rounded-[2px] ${s}`} />)}
        <span className="text-[9px] text-secondary mono">More</span>
      </div>
    </div>
  );
};

/* ── Timeline card ── */
const TimelineCard = ({ item, index }) => {
  const orgKey = item.org?.toLowerCase().replace(/[^a-z]/g, '') || 'apache';
  const dotColors = { apache: 'bg-orange-400', fossasia: 'bg-emerald-400', voiceybill: 'bg-blue-400' };
  const dot = dotColors[orgKey] || 'bg-zinc-400';
  const d = new Date(item.createdAt);
  const label = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8"
    >
      {/* Vertical line segment */}
      <div className="absolute left-[11px] top-6 bottom-0 w-[1px] bg-subtle last:hidden" />
      {/* Dot */}
      <div className={`absolute left-0 top-[18px] w-5 h-5 rounded-full ${dot} flex items-center justify-center shadow-lg`}>
        <div className="w-2 h-2 rounded-full bg-white/80" />
      </div>

      <div className="mb-6 p-4 rounded-xl border border-subtle bg-surface/30 backdrop-blur-sm hover:bg-surface/50 transition-colors group">
        <div className="flex items-start justify-between gap-3 mb-2">
          <span className="text-[9px] mono font-bold uppercase tracking-widest text-secondary">{label} · {item.org}/{item.repo} · {item.prNumber}</span>
        </div>
        <h4 className="text-sm font-bold text-primary leading-snug mb-1.5 line-clamp-2 group-hover:text-primary/80 transition-colors">
          {item.title?.replace(/[#*`]+/g, '').trim()}
        </h4>
        <p className="text-xs text-secondary font-light leading-relaxed line-clamp-2">
          {item.body?.replace(/[#*`]+/g, '').trim()}
        </p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-[10px] mono text-secondary hover:text-primary transition-colors"
        >
          View PR ↗
        </a>
      </div>
    </motion.div>
  );
};

/* ── Stat card ── */
const StatCard = ({ label, value, suffix, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="relative p-5 rounded-2xl border border-subtle bg-surface/30 backdrop-blur-md overflow-hidden group hover:border-white/10 transition-colors"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-secondary" />
      <span className="text-[10px] mono font-bold uppercase tracking-widest text-secondary">{label}</span>
    </div>
    <div className="text-3xl font-black tracking-tight text-primary">
      <Counter value={value} suffix={suffix} />
    </div>
  </motion.div>
);

/* ── Filter chip ── */
const Chip = ({ label, active, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg text-[10px] mono font-bold uppercase tracking-wider border transition-all duration-200 ${
      active
        ? 'bg-primary text-inverse border-primary'
        : 'bg-surface/30 text-secondary border-subtle hover:border-white/20 hover:text-primary'
    }`}
  >
    {label}
  </motion.button>
);

/* ══════════════════════════════════════════════════════ */
/*  Main Page                                             */
/* ══════════════════════════════════════════════════════ */
export const OpenSourcePage = () => {
  const [gitData, setGitData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('grid'); // 'grid' | 'timeline'
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const { transitionTo } = usePageTransition();

  useEffect(() => {
    fetchGitHubData().then(d => { setGitData(d); setLoading(false); });
  }, []);

  const filters = ['All', 'Apache', 'Eventyay', 'VoiceyBill', 'C++', 'Python', 'TypeScript'];

  const filteredPRs = useMemo(() => {
    if (!gitData) return [];
    return gitData.prs.filter(pr => {
      const q = search.toLowerCase();
      const matchSearch = !q || [pr.title, pr.org, pr.repo, pr.language, pr.body]
        .some(f => f?.toLowerCase().includes(q));
      const matchFilter = activeFilter === 'All'
        || pr.org?.toLowerCase().includes(activeFilter.toLowerCase())
        || pr.repo?.toLowerCase().includes(activeFilter.toLowerCase())
        || pr.language === activeFilter;
      return matchSearch && matchFilter;
    });
  }, [gitData, search, activeFilter]);

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="w-8 h-8 border-2 border-t-transparent border-neutral-400 rounded-full"
          />
          <span className="text-xs mono font-semibold uppercase tracking-widest text-secondary">Loading GitHub Data…</span>
        </div>
      </div>
    );
  }

  const totalStars = gitData.repos.reduce((s, r) => s + r.stars, 0);
  const orgs = [...new Set(gitData.prs.map(p => p.org))].length;

  return (
    <div className="relative min-h-screen bg-primary text-primary overflow-hidden pb-32">
      <NoiseMeshBackground />

      {/* Subtle bg shapes */}
      <div className="absolute top-20 right-16 w-72 h-72 border border-zinc-200/30 dark:border-white/[0.06] rotate-45 pointer-events-none" />
      <div className="absolute bottom-32 left-8 w-40 h-40 border border-zinc-200/30 dark:border-white/[0.06] rounded-full pointer-events-none" />

      {/* Watermark text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute top-[15%] left-[1%] font-mono font-black text-[14vw] uppercase tracking-tighter text-neutral-900/[0.012] dark:text-white/[0.018] leading-none">GITHUB</div>
        <div className="absolute bottom-[8%] right-[-2%] font-mono font-black text-[12vw] uppercase tracking-tighter text-neutral-900/[0.012] dark:text-white/[0.018] leading-none">CODE</div>
      </div>

      {/* ── Header ── */}
      <header className="relative z-20 container mx-auto px-6 max-w-6xl py-8 grid grid-cols-3 items-center">
        <button
          onClick={() => transitionTo('/')}
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors group text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        <div className="flex justify-center"><ThemeToggle /></div>
        <div className="flex justify-end">
          <span className="text-xs tracking-[0.25em] uppercase font-bold text-accent mono">Ali Mahmood</span>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl mt-4">

        {/* ── Hero Card ── */}
        <motion.div
          layoutId="openSourceHeroCard"
          className="relative bg-surface/30 border border-subtle p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl mb-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-6 bg-accent" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mono">Open Source</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-[1.1]">
                My Contributions<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-400 dark:from-white dark:to-neutral-400">
                  to the Community
                </span>
              </h1>
              <p className="text-base text-secondary font-light leading-relaxed mb-8 max-w-md">
                A curated log of my merged pull requests across open source organizations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-subtle">
                {[
                  { label: 'PRs Merged', val: gitData.prs.length, sfx: '+' },
                  { label: 'Organizations', val: orgs, sfx: '' },
                  { label: 'Stars Accrued', val: totalStars, sfx: '' },
                ].map(({ label, val, sfx }) => (
                  <div key={label}>
                    <div className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                      <Counter value={val} suffix={sfx} />
                    </div>
                    <span className="text-[10px] mono uppercase tracking-wider text-secondary">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <ActivityGrid map={gitData.contributionsMap} />
            </div>
          </div>
        </motion.div>

        {/* ── Controls: Search + View toggle + Filters ── */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <input
                type="text"
                placeholder="Search by repo, language, title…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-subtle bg-surface/40 backdrop-blur-md text-sm text-primary placeholder:text-secondary focus:outline-none focus:border-white/20 transition-colors mono"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl border border-subtle bg-surface/30 backdrop-blur-md self-start sm:self-auto">
              {[
                { id: 'grid', Icon: LayoutGrid, label: 'Grid' },
                { id: 'timeline', Icon: Clock, label: 'Timeline' },
              ].map(({ id, Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setView(id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] mono font-bold uppercase tracking-wider transition-all duration-200 ${
                    view === id ? 'bg-primary text-inverse shadow-sm' : 'text-secondary hover:text-primary'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Filter chips */}
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
            {filters.map(f => (
              <Chip key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
            ))}
            <span className="ml-auto text-[10px] mono text-secondary">{filteredPRs.length} results</span>
          </div>
        </div>

        {/* ── Content ── */}
        <AnimatePresence mode="wait">
          {view === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPRs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 gap-3">
                  <GitPullRequest className="w-8 h-8 text-secondary/40" />
                  <p className="text-secondary text-sm">No contributions match your search.</p>
                </div>
              ) : (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                  <AnimatePresence>
                    {filteredPRs.map((item, i) => (
                      <PRCard key={item.id} item={item} index={i} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                {/* Main vertical line */}
                <div className="absolute left-[11px] top-0 bottom-0 w-px bg-subtle" />
                {filteredPRs.map((item, i) => (
                  <TimelineCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OpenSourcePage;
