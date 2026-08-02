import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, Eye, X } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { SiAnthropic } from 'react-icons/si';

const CertificationCard = ({ cert, index, onOpen, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative border border-subtle bg-surface/30 p-5 rounded-2xl transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl ${cert.glowShadow} transform-gpu`}
    >
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden" />
      <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl ${cert.bgGlow}`} />

      <div className="relative z-10">
        <button type="button" className="group/image relative mb-6 block h-52 w-full overflow-hidden border border-subtle bg-primary rounded-xl" onClick={onOpen}>
          <img src={`/${cert.image}`} alt={cert.title} className="h-full w-full object-cover grayscale-[0.2] transition-all duration-500 group-hover/image:grayscale-0" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/image:bg-black/40">
            <Eye className="h-8 w-8 text-white opacity-0 transition-all duration-300 group-hover/image:opacity-100" />
          </div>
          <div className="absolute right-4 top-4 bg-surface/90 p-2.5 backdrop-blur-md border border-subtle rounded-lg">
            {cert.issuer === "Anthropic" ? (
              <SiAnthropic className="h-5 w-5 text-[#cc967a]" />
            ) : (
              <Award className="h-5 w-5" style={{ color: cert.color }} />
            )}
          </div>
        </button>

        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="leading-tight text-primary text-xl font-bold transition-colors duration-200">
              {cert.title}
            </h3>
            {cert.issuer === "Anthropic" ? (
              <SiAnthropic className="h-5 w-5 flex-shrink-0 text-[#cc967a]" />
            ) : (
              <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: cert.color }} />
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-secondary">
            <Calendar className="h-4 w-4" style={{ color: cert.color }} />
            <span className="font-medium">{cert.issuer}</span>
          </div>

          <p className="text-sm leading-relaxed text-secondary line-clamp-2 font-light">{cert.description}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {cert.skills.map((skill) => (
              <span key={skill} className={`mono border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded ${cert.skillBadge}`}>
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-subtle pt-5 mt-2">
            <span className="mono text-xs font-semibold text-tertiary">{cert.date}</span>
            <button
              type="button"
              onClick={onViewDetails}
              className="group/link inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest transition-all duration-200 hover:gap-3"
            >
              Details
              <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover/link:rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Dev Weekends Fellowship",
      issuer: "Dev Weekends",
      date: "2025",
      image: "Dev Weekends Fellowship.png",
      description: "Participated in an intensive software engineering fellowship focused on advanced full-stack development and architectural best practices.",
      skills: ["Full-Stack", "DSA", "Leetcode", "Open-Source"],
      credentialUrl: "#",
      details: "Completed the highly competitive Dev Weekends Fellowship, which emphasizes building scalable applications, writing clean code, and working under the guidance of industry professionals.",
      color: '#8B5CF6',
      bgGlow: 'bg-[#8B5CF6]/5',
      glowShadow: 'group-hover:border-purple-500/30 group-hover:shadow-[0_20px_40px_rgba(139,92,246,0.08)]',
      skillBadge: 'border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-500/5'
    },
    {
      id: 2,
      title: "AI Fluency Framework & Foundations",
      issuer: "Anthropic",
      date: "2026",
      image: "claude_fluency_framework.png",
      description: "Demonstrated understanding of Claude's architecture, prompt engineering techniques, and deployment strategies for AI agents.",
      skills: ["Claude AI", "Prompt Eng.", "AI Agents", "LLMs"],
      credentialUrl: "https://verify.skilljar.com/c/qtdxuawmisyi",
      details: "Successfully passed the official Anthropic certification covering model capabilities, system prompts, context window management, and programmatic APIs.",
      color: '#cc967a',
      bgGlow: 'bg-[#cc967a]/5',
      glowShadow: 'group-hover:border-[#cc967a]/30 group-hover:shadow-[0_20px_40px_rgba(204,150,122,0.08)]',
      skillBadge: 'border-[#cc967a]/20 text-[#cc967a] dark:text-[#e4b096] bg-[#cc967a]/5'
    },
    {
      id: 3,
      title: "Claude 101",
      issuer: "Anthropic",
      date: "2026",
      image: "claude_101.png",
      description: "Completed the foundational certification for integrating Claude models into software architectures and applications.",
      skills: ["Claude 3.5 Sonnet", "Anthropic API", "Integration", "AI Workflows"],
      credentialUrl: "https://verify.skilljar.com/c/ghhpc8g68686",
      details: "Verified competence in Anthropic API endpoints, tool use (function calling), and optimizing system instructions for low-latency AI responses.",
      color: '#cc967a',
      bgGlow: 'bg-[#cc967a]/5',
      glowShadow: 'group-hover:border-[#cc967a]/30 group-hover:shadow-[0_20px_40px_rgba(204,150,122,0.08)]',
      skillBadge: 'border-[#cc967a]/20 text-[#cc967a] dark:text-[#e4b096] bg-[#cc967a]/5'
    }
  ];

  return (
    <div className="relative bg-primary">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-32 w-48 h-48 border border-zinc-200 dark:border-zinc-800/40 rotate-12"></div>
        <div className="absolute bottom-32 left-24 w-32 h-32 border border-zinc-200 dark:border-zinc-800/40 rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-20 bg-zinc-200 dark:bg-zinc-800/40 rotate-45"></div>
      </div>

        <section id="certifications" className="py-10 md:py-14 relative z-10">
          <div className="container mx-auto px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-12 flex flex-col items-center text-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1.5px] bg-accent"></div>
                <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Achievements</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-6">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">Certifications</span>
              </h2>

              <p className="text-lg text-secondary font-light max-w-2xl leading-relaxed mx-auto">
                Professional achievements and continuous learning milestones in my software engineering journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  cert={cert}
                  index={index}
                  onOpen={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  onViewDetails={() => setSelectedCert(cert)}
                />
              ))}
            </div>

            {/* Learning commitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
            </motion.div>

            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={certifications.map((cert) => ({ src: `/${cert.image}`, title: cert.title }))}
            />

            {selectedCert && createPortal(
              <div
                className="fixed inset-0 z-[9999] grid place-items-center bg-surface/90 p-4 backdrop-blur-md"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-xl max-h-[82vh] overflow-hidden border border-default bg-surface shadow-2xl"
                >
                  <div className="flex items-start justify-between border-b border-subtle px-6 py-5">
                    <div>
                      <p className="mono text-[10px] uppercase tracking-[0.2em] text-secondary">Certification Details</p>
                      <h3 className="mt-1 text-2xl font-bold text-primary">{selectedCert.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="border border-default p-2 text-secondary hover:border-primary hover:text-primary transition-all duration-200"
                      aria-label="Close details"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-6 overflow-y-auto px-6 py-6 max-h-[56vh]">
                    <img src={`/${selectedCert.image}`} alt={selectedCert.title} className="h-52 w-full border border-subtle object-cover grayscale-[0.2]" />

                    <div className="grid gap-4 text-sm text-secondary md:grid-cols-2">
                      <p><span className="font-bold text-primary uppercase text-[11px] tracking-wider block mb-1">Issuer</span> {selectedCert.issuer}</p>
                      <p><span className="font-bold text-primary uppercase text-[11px] tracking-wider block mb-1">Year</span> {selectedCert.date}</p>
                    </div>

                    <div className="space-y-2">
                      <span className="font-bold text-primary uppercase text-[11px] tracking-wider block">Description</span>
                      <p className="text-sm leading-relaxed text-secondary font-light">
                        {selectedCert.details || selectedCert.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="font-bold text-primary uppercase text-[11px] tracking-wider block">Skills Acquired</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill) => (
                          <span key={skill} className="mono border border-subtle bg-elevated px-3 py-1.5 text-[10px] font-medium text-primary uppercase tracking-wider">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 border-t border-subtle px-6 py-5">
                    {selectedCert.credentialUrl && selectedCert.credentialUrl !== "#" && (
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-inverse border border-default px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="border border-default px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary transition-all duration-300"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              </div>,
              document.body
            )}
          </div>
        </section>
      </div>
  );
};

export default Certifications;