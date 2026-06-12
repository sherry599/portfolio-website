import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Grid, Calendar, DollarSign } from 'lucide-react';
import { SiApache } from 'react-icons/si';
import { use3DTilt } from '../hooks/use3DAnimations';
import { ExpandableTabs } from '@/Components/ui/expandable-tabs';

const ContributionCard = ({ contribution, cardVariants }) => {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover={{ y: -6, boxShadow: '0 15px 40px rgba(0,0,0,0.06), 0 0 0 1px var(--border-subtle)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="contribution-card transition-all duration-300"
    >
      <div className="relative bg-surface border border-subtle p-6 md:p-8 transition-all duration-500 shadow-xl">
        <div className="contribution-border-glow"></div>

        <div className="flex flex-wrap gap-3 mb-4">
          <span className="inline-block px-3.5 py-1.5 bg-elevated text-primary text-[10px] font-bold uppercase tracking-widest border border-subtle hover:border-default transition-colors mono">
            {contribution.repo} {contribution.prNumber}
          </span>
          <span className="inline-block px-3.5 py-1.5 bg-elevated text-secondary text-[10px] font-bold uppercase tracking-widest border border-subtle mono">
            {contribution.language}
          </span>
        </div>

        <a
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/title inline-block mb-3.5"
          data-cursor="pointer"
        >
          <h3 className="text-base font-bold text-primary group-hover/title:text-accent transition-colors duration-200 leading-snug">
            {contribution.title}
          </h3>
          <span className="block h-[1px] bg-accent/40 mt-1 w-0 group-hover/title:w-full transition-all duration-300" />
        </a>

        <p className="text-secondary font-light leading-relaxed mb-6 text-sm">
          {contribution.description}
        </p>

        <a
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] border border-default text-primary hover:bg-primary transition-all duration-300 group mono"
          data-cursor="pointer"
        >
          <GitBranch className="w-3.5 h-3.5" />
          View Pull Request
          <ExternalLink className="w-3.5 h-3.5 group-hover:rotate-45 transition-all duration-200" />
        </a>

        <div className="absolute top-6 right-6 opacity-[0.03] transition-opacity pointer-events-none text-primary">
          <GitBranch className="w-12 h-12" />
        </div>
      </div>
    </motion.div>
  );
};

const OpenSourceContributions = () => {
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);

  const filterTabs = [
    { title: "All", icon: Grid },
    { title: "Apache Arrow", icon: GitBranch },
    { title: "Eventyay", icon: Calendar },
    { title: "VoiceyBill", icon: DollarSign }
  ];

  const contributions = [
    {
      id: 1,
      repo: 'Apache Arrow',
      prNumber: '#49171',
      title: 'Remove deprecated decimal factory APIs from C++ module',
      language: 'C++',
      description: 'Cleaned up the C++ library by deprecating and removing outdated decimal factory functions, bringing consistency to the type constructors and ensuring no regressions in the build system.',
      link: 'https://github.com/apache/arrow/pull/49171'
    },
    {
      id: 2,
      repo: 'Apache Arrow',
      prNumber: '#49105',
      title: 'Fix segmentation fault in SparseCSFIndex comparison logic',
      language: 'C++',
      description: 'Resolved a critical memory safety bug by adding dimension size validations during sparse coordinate format index comparisons, preventing out-of-bounds reads and segmentation faults.',
      link: 'https://github.com/apache/arrow/pull/49105'
    },
    {
      id: 3,
      repo: 'Eventyay',
      prNumber: '#3867',
      title: 'fix: Remove deprecated cryptography backend argument from ticket secret generation',
      language: 'Python',
      description: 'Hardened ticket secret generation by removing deprecated Python cryptography backend parameters, keeping the security layers aligned with current cryptographic standards and dependency updates.',
      link: 'https://github.com/fossasia/eventyay/pull/3867'
    },
    {
      id: 4,
      repo: 'Eventyay',
      prNumber: '#3499',
      title: 'Fix export data handling for tickets and invoices',
      language: 'Python',
      description: 'Addressed data inconsistencies and race conditions during high-volume data exports for attendee tickets and event invoices, ensuring clean CSV and PDF generations.',
      link: 'https://github.com/fossasia/eventyay/pull/3499'
    },
    {
      id: 5,
      repo: 'Eventyay',
      prNumber: '#3481',
      title: 'fix: Add timeout, extract constant, harden avatar URL parsing, and use module-level logging',
      language: 'Python',
      description: 'Improved reliability of avatar fetches by introducing request timeouts, sanitizing URL inputs to prevent SSRF/injection, and restructuring module logs for better debug visibility.',
      link: 'https://github.com/fossasia/eventyay/pull/3481'
    },
    {
      id: 6,
      repo: 'Eventyay',
      prNumber: '#3478',
      title: 'fix: narrow exception handling and log errors in Sig1 ticket secret parser',
      language: 'Python',
      description: 'Refactored key token parsers to catch narrow, specific exception scopes instead of generic catch-alls, preserving traceback data and logging raw error traces during parsing failures.',
      link: 'https://github.com/fossasia/eventyay/pull/3478'
    },
    {
      id: 7,
      repo: 'VoiceyBill',
      prNumber: '#207',
      title: 'fix(ui): Resolve export scope, date range filtering, and PDF export crash',
      language: 'TypeScript',
      description: 'Resolved runtime crashes during PDF exports of voice billing statements by fixing scoping mismatches in the date range filters and resolving undefined reference values.',
      link: 'https://github.com/voiceyBill/voiceyBill-web/pull/207'
    },
    {
      id: 8,
      repo: 'VoiceyBill',
      prNumber: '#206',
      title: 'fix: Budget page month selector theme and category list visibility',
      language: 'TypeScript',
      description: 'Fixed visual clipping of the budget category lists and resolved a dark mode contrast bug in the month selection dropdowns to ensure full theme compatibility.',
      link: 'https://github.com/voiceyBill/voiceyBill-web/pull/206'
    },
    {
      id: 9,
      repo: 'VoiceyBill',
      prNumber: '#197',
      title: 'fix(ui): Resolve WCAG 2.1 Accessibility Violations on Dashboard Overview Page',
      language: 'TypeScript',
      description: 'Audited and resolved keyboard navigation and contrast-ratio accessibility issues on the main billing dashboard, aligning the interface with WCAG 2.1 compliance standards.',
      link: 'https://github.com/voiceyBill/voiceyBill-web/pull/197'
    },
    {
      id: 10,
      repo: 'VoiceyBill',
      prNumber: '#183',
      title: 'fix(client): Remove duplicate hamburger and layout overlay',
      language: 'TypeScript',
      description: 'Refactored side navigation layout overlays to prevent duplicate hamburger buttons from rendering on tablet viewports, resolving sticky DOM overlays during view transitions.',
      link: 'https://github.com/voiceyBill/voiceyBill-web/pull/183'
    },
    {
      id: 11,
      repo: 'VoiceyBill',
      prNumber: '#149',
      title: 'fix(table): Refine pagination responsiveness for narrow screens, tablets, and mid-screen devices',
      language: 'TypeScript',
      description: 'Redesigned data table pagination layouts for mobile and tablet devices, wrapping indices and control buttons smoothly to fit small responsive viewports without horizontal scrolls.',
      link: 'https://github.com/voiceyBill/voiceyBill-web/pull/149'
    },
    {
      id: 12,
      repo: 'VoiceyBill',
      prNumber: '#136',
      title: 'fix(client): Align date picker weekday headers',
      language: 'TypeScript',
      description: 'Fixed an alignment offset on calendar headers where weekday labels were shifted by a pixel margin, aligning layout cells with date grids across all browsers.',
      link: 'https://github.com/voiceyBill/voiceyBill-web/pull/136'
    }
  ];

  const activeFilter = filterTabs[activeFilterIndex].title;
  const filteredContributions = activeFilter === "All"
    ? contributions
    : contributions.filter(item => item.repo === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative bg-primary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-24 w-56 h-56 border border-subtle rotate-12"></div>
        <div className="absolute bottom-24 left-20 w-32 h-32 border border-subtle rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-24 bg-border-subtle rotate-45"></div>
      </div>

      <section id="openSource" className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 md:mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1.5px] bg-accent"></div>
              <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Open Source</span>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6 section-heading">
                  <span className="font-extralight text-secondary">Open Source</span>
                  <br />
                  <span className="font-bold text-primary">Contributions</span>
                </h2>

                <p className="text-lg text-secondary font-light max-w-2xl leading-relaxed">
                  Contributing to meaningful open source projects that impact the developer community.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-primary opacity-20 hover:opacity-50 transition-opacity duration-300 hidden md:block"
              >
                <SiApache size={48} />
              </motion.div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Sticky Sidebar Filter for Desktop, Top row for Mobile */}
            <div className="w-full md:w-auto md:sticky md:top-28 z-20 flex justify-center md:justify-start">
              <ExpandableTabs
                tabs={filterTabs}
                activeColor="text-primary"
                activeTab={activeFilterIndex}
                onChange={(val) => val !== null && setActiveFilterIndex(val)}
                showAllTitles={true}
                className="flex-row md:flex-col md:items-stretch p-1.5 border border-subtle bg-surface shadow-xl rounded-xl md:w-44"
              />
            </div>

            {/* Contributions Grid */}
            <div className="flex-1 w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredContributions.map((contribution) => (
                    <ContributionCard key={contribution.id} contribution={contribution} cardVariants={cardVariants} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpenSourceContributions;
