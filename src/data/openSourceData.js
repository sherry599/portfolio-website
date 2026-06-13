export const openSourceStats = {
  totalPRs: 38,
  repositories: 8,
  commits: 340,
  starsImpacted: "85K+",
  linesContributed: "12,400+",
};

export const repositoryShowcase = [
  {
    name: "Apache Arrow",
    stars: "14.2K",
    forks: "3.5K",
    language: "C++",
    role: "Core Contributor",
    description: "A multi-language development platform for in-memory analytics. Contributed optimizations to C++ modules, type constructors, and memory safety bug fixes.",
    link: "https://github.com/apache/arrow"
  },
  {
    name: "Eventyay (FOSSASIA)",
    stars: "1.2K",
    forks: "840",
    language: "Python",
    role: "Feature Contributor",
    description: "An open-source event management and ticketing platform. Hardened cryptographic secret generation, fixed data exports, and secured URL parsers.",
    link: "https://github.com/fossasia/eventyay"
  },
  {
    name: "VoiceyBill",
    stars: "450",
    forks: "95",
    language: "TypeScript",
    role: "Frontend Contributor",
    description: "A modern voice billing analytics platform. Fixed statement exports, date range filtering, dark mode theme contrast, and resolved WCAG accessibility violations.",
    link: "https://github.com/voiceyBill/voiceyBill-web"
  }
];

export const contributionTimeline = [
  {
    date: "May 2026",
    repo: "Apache Arrow",
    event: "Memory Leak & Segfault Resolution",
    description: "Resolved critical coordinate format index out-of-bound comparisons in C++ analytics modules, preventing segmentation faults.",
    prNumber: "#49105",
    type: "bugfix",
    link: "https://github.com/apache/arrow/pull/49105"
  },
  {
    date: "April 2026",
    repo: "Apache Arrow",
    event: "Decimal API Refactor",
    description: "Refactored type constructor decimal factory APIs from core modules to remove deprecated endpoints.",
    prNumber: "#49171",
    type: "feature",
    link: "https://github.com/apache/arrow/pull/49171"
  },
  {
    date: "March 2026",
    repo: "Eventyay",
    event: "Cryptographic Security Patch",
    description: "Removed deprecated cryptobackend dependencies and parameters to lock down ticket secret parsing pipelines.",
    prNumber: "#3867",
    type: "security",
    link: "https://github.com/fossasia/eventyay/pull/3867"
  },
  {
    date: "February 2026",
    repo: "VoiceyBill",
    event: "WCAG Accessibility Compliance & Audit",
    description: "Audited dashboard pages and resolved interactive contrast ratio and screen reader navigation issues.",
    prNumber: "#197",
    type: "accessibility",
    link: "https://github.com/voiceyBill/voiceyBill-web/pull/197"
  },
  {
    date: "Jan 2026",
    repo: "Eventyay",
    event: "Data Export Integrity",
    description: "Redesigned high-throughput CSV/PDF data exports for event attendee ticket tables to resolve racing issues.",
    prNumber: "#3499",
    type: "performance",
    link: "https://github.com/fossasia/eventyay/pull/3499"
  }
];

export const contributions = [
  {
    id: 1,
    repo: 'Apache Arrow',
    prNumber: '#49171',
    title: 'Remove deprecated decimal factory APIs from C++ module',
    language: 'C++',
    description: 'Cleaned up the C++ library by deprecating and removing outdated decimal factory functions, bringing consistency to the type constructors and ensuring no regressions in the build system.',
    link: 'https://github.com/apache/arrow/pull/49171',
    impact: 'Developer DX',
    date: '2026-04-18T10:00:00Z'
  },
  {
    id: 2,
    repo: 'Apache Arrow',
    prNumber: '#49105',
    title: 'Fix segmentation fault in SparseCSFIndex comparison logic',
    language: 'C++',
    description: 'Resolved a critical memory safety bug by adding dimension size validations during sparse coordinate format index comparisons, preventing out-of-bounds reads and segmentation faults.',
    link: 'https://github.com/apache/arrow/pull/49105',
    impact: 'Memory Safety',
    date: '2026-05-12T14:30:00Z'
  },
  {
    id: 3,
    repo: 'Eventyay',
    prNumber: '#3867',
    title: 'fix: Remove deprecated cryptography backend argument from ticket secret generation',
    language: 'Python',
    description: 'Hardened ticket secret generation by removing deprecated Python cryptography backend parameters, keeping the security layers aligned with current cryptographic standards and dependency updates.',
    link: 'https://github.com/fossasia/eventyay/pull/3867',
    impact: 'Security Hardening',
    date: '2026-03-24T09:15:00Z'
  },
  {
    id: 4,
    repo: 'Eventyay',
    prNumber: '#3499',
    title: 'Fix export data handling for tickets and invoices',
    language: 'Python',
    description: 'Addressed data inconsistencies and race conditions during high-volume data exports for attendee tickets and event invoices, ensuring clean CSV and PDF generations.',
    link: 'https://github.com/fossasia/eventyay/pull/3499',
    impact: 'Data Integrity',
    date: '2026-01-15T16:45:00Z'
  },
  {
    id: 5,
    repo: 'Eventyay',
    prNumber: '#3481',
    title: 'fix: Add timeout, extract constant, harden avatar URL parsing, and use module-level logging',
    language: 'Python',
    description: 'Improved reliability of avatar fetches by introducing request timeouts, sanitizing URL inputs to prevent SSRF/injection, and restructuring module logs for better debug visibility.',
    link: 'https://github.com/fossasia/eventyay/pull/3481',
    impact: 'Network Reliability',
    date: '2026-01-10T11:20:00Z'
  },
  {
    id: 6,
    repo: 'Eventyay',
    prNumber: '#3478',
    title: 'fix: narrow exception handling and log errors in Sig1 ticket secret parser',
    language: 'Python',
    description: 'Refactored key token parsers to catch narrow, specific exception scopes instead of generic catch-alls, preserving traceback data and logging raw error traces during parsing failures.',
    link: 'https://github.com/fossasia/eventyay/pull/3478',
    impact: 'Fault Tolerance',
    date: '2025-12-28T08:00:00Z'
  },
  {
    id: 7,
    repo: 'VoiceyBill',
    prNumber: '#207',
    title: 'fix(ui): Resolve export scope, date range filtering, and PDF export crash',
    language: 'TypeScript',
    description: 'Resolved runtime crashes during PDF exports of voice billing statements by fixing scoping mismatches in the date range filters and resolving undefined reference values.',
    link: 'https://github.com/voiceyBill/voiceyBill-web/pull/207',
    impact: 'Runtime Stability',
    date: '2026-02-28T15:10:00Z'
  },
  {
    id: 8,
    repo: 'VoiceyBill',
    prNumber: '#206',
    title: 'fix: Budget page month selector theme and category list visibility',
    language: 'TypeScript',
    description: 'Fixed visual clipping of the budget category lists and resolved a dark mode contrast bug in the month selection dropdowns to ensure full theme compatibility.',
    link: 'https://github.com/voiceyBill/voiceyBill-web/pull/206',
    impact: 'UI Consistency',
    date: '2026-02-20T13:40:00Z'
  },
  {
    id: 9,
    repo: 'VoiceyBill',
    prNumber: '#197',
    title: 'fix(ui): Resolve WCAG 2.1 Accessibility Violations on Dashboard Overview Page',
    language: 'TypeScript',
    description: 'Audited and resolved keyboard navigation and contrast-ratio accessibility issues on the main billing dashboard, aligning the interface with WCAG 2.1 compliance standards.',
    link: 'https://github.com/voiceyBill/voiceyBill-web/pull/197',
    impact: 'WCAG 2.1 A11y',
    date: '2026-02-10T10:05:00Z'
  },
  {
    id: 10,
    repo: 'VoiceyBill',
    prNumber: '#183',
    title: 'fix(client): Remove duplicate hamburger and layout overlay',
    language: 'TypeScript',
    description: 'Refactored side navigation layout overlays to prevent duplicate hamburger buttons from rendering on tablet viewports, resolving sticky DOM overlays during view transitions.',
    link: 'https://github.com/voiceyBill/voiceyBill-web/pull/183',
    impact: 'Layout Fix',
    date: '2025-12-15T12:00:00Z'
  },
  {
    id: 11,
    repo: 'VoiceyBill',
    prNumber: '#149',
    title: 'fix(table): Refine pagination responsiveness for narrow screens, tablets, and mid-screen devices',
    language: 'TypeScript',
    description: 'Redesigned data table pagination layouts for mobile and tablet devices, wrapping indices and control buttons smoothly to fit small responsive viewports without horizontal scrolls.',
    link: 'https://github.com/voiceyBill/voiceyBill-web/pull/149',
    impact: 'Responsive UI',
    date: '2025-11-20T14:50:00Z'
  },
  {
    id: 12,
    repo: 'VoiceyBill',
    prNumber: '#136',
    title: 'fix(client): Align date picker weekday headers',
    language: 'TypeScript',
    description: 'Fixed an alignment offset on calendar headers where weekday labels were shifted by a pixel margin, aligning layout cells with date grids across all browsers.',
    link: 'https://github.com/voiceyBill/voiceyBill-web/pull/136',
    impact: 'Pixel alignment',
    date: '2025-11-05T09:30:00Z'
  }
];
