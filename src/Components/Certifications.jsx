import { motion, AnimatePresence } from 'framer-motion';
import { Award, Globe, Maximize2, X } from 'lucide-react';
import { useState } from 'react';
import { SiAnthropic } from 'react-icons/si';

const certifications = [
  {
    id: 1,
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    image: "claude_101.png",
    description: "Mastered foundation concepts of Anthropic's Claude LLMs, system prompt engineering, API orchestration, and AI-assisted CS workflow design.",
    skills: ["Claude API", "Prompt Engineering", "AI Workflows", "Anthropic"],
    details: "Certified in Anthropic Claude ecosystem, focusing on automating customer health scoring, sentiment analysis, and operational workflows.",
    color: '#EA580C',
    bgGlow: 'bg-[#EA580C]/5',
    glowShadow: 'hover:border-orange-500/30 hover:shadow-[0_20px_40px_rgba(234,88,12,0.08)]',
    skillBadge: 'border-orange-500/25 text-orange-600 dark:text-orange-400 bg-orange-500/10'
  },
  {
    id: 2,
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "2026",
    image: "claude_fluency_framework.png",
    description: "Advanced certification on enterprise AI adoption frameworks, prompt design patterns, risk mitigation, and integrating AI into CS operational playbooks.",
    skills: ["AI Foundations", "Enterprise AI", "Operational Playbooks"],
    details: "Learned frameworks for evaluating LLM capabilities, designing prompt pipelines, and automating business processes securely.",
    color: '#EA580C',
    bgGlow: 'bg-[#EA580C]/5',
    glowShadow: 'hover:border-orange-500/30 hover:shadow-[0_20px_40px_rgba(234,88,12,0.08)]',
    skillBadge: 'border-orange-500/25 text-orange-600 dark:text-orange-400 bg-orange-500/10'
  },
  {
    id: 3,
    title: "Test of English as a Foreign Language (TOEFL)",
    issuer: "ETS TOEFL",
    date: "Score: 112 / 120",
    image: "toefl-score.png",
    description: "Achieved an elite score of 112/120 demonstrating C2 Level Native-equivalent English language fluency for global enterprise communication.",
    skills: ["Score 112/120", "C2 Proficient", "Global Communication"],
    details: "Demonstrated advanced listening, reading, writing, and speaking proficiency required for managing C-level global accounts.",
    color: '#10B981',
    bgGlow: 'bg-[#10B981]/5',
    glowShadow: 'hover:border-emerald-500/30 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)]',
    skillBadge: 'border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5'
  }
];

const languages = [
  { name: "English", level: "C2 - Native / Proficient", flag: "🇬🇧" },
  { name: "Urdu", level: "C2 - Native / Proficient", flag: "🇵🇰" },
  { name: "Punjabi", level: "C2 - Native / Proficient", flag: "🇵🇰" }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="relative py-12 sm:py-16 md:py-20 bg-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-20 left-12 w-64 h-64 border border-zinc-200 dark:border-zinc-800/40 rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 border-b border-default pb-4 sm:pb-6 gap-4 sm:gap-0">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest mono">04 / CERTIFICATIONS & LANGUAGES</span>
              <div className="w-8 h-[1.5px] bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
              AI & Lingual Fluency
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-secondary max-w-md font-mono sm:text-right">
            Anthropic Certified • ETS TOEFL iBT Certified
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => cert.image && setSelectedCert(cert)}
              className={`bg-surface p-6 rounded-2xl border border-default shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group ${cert.glowShadow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                    {cert.issuer === "Anthropic" ? (
                      <SiAnthropic className="w-5 h-5 text-[#cc967a]" />
                    ) : (
                      <Award className="w-5 h-5 text-accent" />
                    )}
                  </div>
                  <span className="text-xs font-mono font-semibold text-secondary">{cert.date}</span>
                </div>

                {cert.image && (
                  <div className="relative mb-4 h-36 w-full overflow-hidden rounded-xl border border-default bg-elevated group-hover:border-accent/40 transition-colors">
                    <img src={`/${cert.image}`} alt={cert.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to view</span>
                    </div>
                  </div>
                )}

                <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-accent transition-colors">{cert.title}</h3>
                <p className="text-xs font-semibold text-accent mb-3">{cert.issuer}</p>
                <p className="text-xs text-secondary leading-relaxed mb-4">{cert.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded border ${cert.skillBadge}`}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-accent pt-3 border-t border-default/50 group-hover:underline">
                  <span>View Certification</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Strip */}
        <div className="bg-surface p-6 rounded-2xl border border-default shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-accent" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Language Proficiencies</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languages.map((lang, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-primary/40 border border-default">
                <span className="text-xl">{lang.flag}</span>
                <div>
                  <h5 className="text-sm font-bold text-primary">{lang.name}</h5>
                  <span className="text-xs text-secondary font-mono">{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Animated Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-surface rounded-2xl border border-default p-4 sm:p-6 shadow-2xl cursor-default flex flex-col items-center overflow-hidden"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors z-10"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full flex-1 flex items-center justify-center overflow-auto max-h-[75vh] py-2">
                <img
                  src={`/${selectedCert.image}`}
                  alt={selectedCert.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-lg border border-default/40"
                />
              </div>

              <div className="mt-3 text-center">
                <h3 className="text-base sm:text-lg font-bold text-primary">{selectedCert.title}</h3>
                <p className="text-xs font-semibold text-accent">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;