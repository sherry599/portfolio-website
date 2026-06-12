import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { use3DTilt } from '../hooks/use3DAnimations';

const CertificateCard = ({ cert, index, onOpen }) => {
  const tiltRef = use3DTilt({ maxRotation: 8, perspective: 800 });

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group w-full text-left border border-subtle bg-surface p-4 transition-all duration-300 hover:border-default"
      onClick={onOpen}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div ref={tiltRef} style={{ perspective: '800px', transformStyle: 'preserve-3d' }}>
        <div className="relative overflow-hidden border border-subtle bg-elevated">
          <img src={`/${cert.image}`} alt={cert.name} className="h-48 w-full object-cover grayscale-[0.2] transition-transform duration-300 group-hover:scale-[1.05] group-hover:grayscale-0" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
            <Eye className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
        <p className="mt-3 inline-block text-sm font-medium text-primary border-b border-transparent transition-all duration-200 group-hover:border-primary/40">
          {cert.name}
        </p>
      </div>
    </motion.button>
  );
};

const EducationTimeline = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const timelineEntries = [
    {
      id: 1,
      title: 'University of South Asia',
      subtitle: 'BS Computer Science',
      duration: 'Dec 2022 - Present',
      location: 'Lahore, Pakistan',
      description: 'CGPA: 3.55, Fall 2026.',
      badge: 'Current'
    },
    {
      id: 2,
      title: 'DevWeekends Fellowship',
      subtitle: 'Full Stack Developer Fellow',
      duration: 'Jun 2025 - Aug 2025',
      location: 'Remote',
      description: 'Built production full-stack systems with secure auth, APIs, and performance-focused patterns.',
      badge: 'Fellowship'
    },
    {
      id: 3,
      title: 'Graphic Design Certification',
      subtitle: 'Peak Solutions College',
      duration: 'Dec 2022',
      location: 'Lahore, Pakistan',
      description: 'Completed professional design training with practical project delivery.',
      badge: 'Certificate'
    }
  ];


  return (
    <div className="relative bg-primary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-24 h-56 w-56 border border-subtle rotate-12" />
        <div className="absolute bottom-24 left-20 h-32 w-32 border border-subtle rounded-full" />
      </div>

      <section id="education" className="relative z-10 py-24">
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-20"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="h-[1.5px] w-12 bg-accent" />
              <span className="mono text-sm font-medium uppercase tracking-wider text-secondary">Education</span>
            </div>

            <h2 className="section-heading mb-6 text-3xl font-light leading-tight md:text-4xl">
              <span className="font-extralight text-secondary">Education and</span>
              <br />
              <span className="font-bold text-primary">Certifications</span>
            </h2>

            <p className="max-w-2xl text-lg font-light text-secondary leading-relaxed">
              A timeline of formal education and verified milestones with certificate previews.
            </p>
          </motion.div>

          <div className="mb-20 border-l-2 border-subtle pl-8">
            {timelineEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[var(--accent)] bg-surface shadow-[0_0_10px_rgba(0,0,0,0.05)]" />

                <div className="border border-subtle bg-surface p-8 transition-all duration-500 hover:border-default hover:shadow-xl">
                  <div className="mb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{entry.title}</h3>
                      <p className="text-sm font-medium text-secondary tracking-wide">{entry.subtitle}</p>
                    </div>
                    <span className="inline-block self-start border border-subtle bg-elevated px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary">{entry.badge}</span>
                  </div>

                  <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-tertiary">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {entry.duration}
                    </span>
                    <span className="hidden md:inline opacity-20 text-primary">•</span>
                    <span>{entry.location}</span>
                  </div>

                  <p className="leading-relaxed text-secondary font-light text-sm max-w-3xl">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default EducationTimeline;
