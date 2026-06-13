import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitMerge, GitBranch, Check } from 'lucide-react';

const cleanText = (text) => {
  if (!text) return '';
  return text.replace(/[#*`]+/g, '').trim();
};

const orgColors = {
  apache: { bg: 'from-orange-500/10 to-red-500/5', border: 'border-orange-500/20', dot: 'bg-orange-400', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  fossasia: { bg: 'from-emerald-500/10 to-teal-500/5', border: 'border-emerald-500/20', dot: 'bg-emerald-400', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  voiceybill: { bg: 'from-blue-500/10 to-indigo-500/5', border: 'border-blue-500/20', dot: 'bg-blue-400', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
};

const langColors = {
  'C++': 'bg-blue-500/10 text-blue-400 border-blue-400/20',
  'Python': 'bg-yellow-500/10 text-yellow-400 border-yellow-400/20',
  'TypeScript': 'bg-sky-500/10 text-sky-400 border-sky-400/20',
  'JavaScript': 'bg-amber-500/10 text-amber-400 border-amber-400/20',
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export const PRCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);
  const orgKey = item.org?.toLowerCase().replace(/[^a-z]/g, '') || 'apache';
  const theme = orgColors[orgKey] || orgColors.apache;
  const langStyle = langColors[item.language] || 'bg-zinc-500/10 text-zinc-400 border-zinc-400/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      layout
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-2xl border bg-gradient-to-br ${theme.bg} ${hovered ? theme.border : 'border-subtle'} p-6 flex flex-col gap-4 cursor-default transition-all duration-300`}
      style={{
        boxShadow: hovered
          ? '0 20px 60px -10px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.03)'
          : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Merged status + org */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15">
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-6 h-6 rounded-full bg-emerald-400/20"
            />
            <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
          </div>
          <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase mono">Merged</span>
        </div>

        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mono ${theme.badge}`}>
          {item.org}
        </span>
      </div>

      {/* Repo + PR number */}
      <div className="flex items-center gap-2">
        <GitBranch className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
        <span className="text-xs text-secondary mono truncate">{item.org}/{item.repo}</span>
        <span className="ml-auto text-[10px] mono text-secondary/60 flex-shrink-0">{item.prNumber}</span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold text-primary leading-snug line-clamp-2 group-hover:text-white dark:group-hover:text-white transition-colors duration-200">
        {cleanText(item.title)}
      </h3>

      {/* Description */}
      <p className="text-xs text-secondary font-light leading-relaxed line-clamp-2 flex-1">
        {cleanText(item.body) || 'Contributed improvements and resolved issues in the codebase.'}
      </p>

      {/* Tags row */}
      <div className="flex flex-wrap gap-1.5">
        {item.language && (
          <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mono ${langStyle}`}>
            {item.language}
          </span>
        )}
        {item.impact && (
          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mono bg-surface/50 border-subtle text-secondary">
            {item.impact}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-subtle/40">
        <div className="flex items-center gap-1.5 text-[10px] text-secondary mono">
          <GitMerge className="w-3 h-3" />
          <span>{formatDate(item.createdAt)}</span>
        </div>

        <motion.a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 2 }}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider mono border border-subtle bg-elevated/60 text-secondary hover:text-primary hover:border-primary/30 transition-all duration-200"
        >
          View PR
          <ExternalLink className="w-3 h-3" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PRCard;
