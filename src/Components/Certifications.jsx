import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, Eye, X } from 'lucide-react';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const CertificationCard = ({ cert, index, onOpen, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group border border-subtle bg-surface p-5 transition-all duration-300 hover:border-default hover:shadow-xl"
    >
      <div>
        <button type="button" className="group/image relative mb-6 block h-52 w-full overflow-hidden border border-subtle bg-primary" onClick={onOpen}>
          <img src={`/${cert.image}`} alt={cert.title} className="h-full w-full object-cover grayscale-[0.2] transition-all duration-500 group-hover/image:grayscale-0" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/image:bg-black/40">
            <Eye className="h-8 w-8 text-white opacity-0 transition-all duration-300 group-hover/image:opacity-100" />
          </div>
          <div className="absolute right-4 top-4 bg-surface/90 p-2.5 backdrop-blur-md border border-subtle">
            <Award className="h-5 w-5 text-primary" />
          </div>
        </button>

        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="leading-tight text-primary text-xl font-bold group-hover:text-primary transition-colors duration-200">
              {cert.title}
            </h3>
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
          </div>

          <div className="flex items-center gap-2 text-sm text-secondary">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">{cert.issuer}</span>
          </div>

          <p className="text-sm leading-relaxed text-secondary line-clamp-2 font-light">{cert.description}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {cert.skills.map((skill) => (
              <span key={skill} className="mono border border-subtle bg-elevated px-3 py-1 text-[10px] font-medium text-primary uppercase tracking-wider">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-subtle pt-5 mt-2">
            <span className="mono text-xs font-semibold text-tertiary">{cert.date}</span>
            <button
              type="button"
              onClick={onViewDetails}
              className="group/link inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest transition-all duration-200 hover:text-primary hover:gap-3"
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
      skills: ["Full-Stack Development", "DSA", "Leetcode", "Open-Source"],
      credentialUrl: "#",
      details: "Completed the highly competitive Dev Weekends Fellowship, which emphasizes building scalable applications, writing clean code, and working under the guidance of industry professionals."
    },
    {
      id: 2,
      title: "Quiz Competition Winner",
      issuer: "University of South Asia",
      date: "2025",
      image: "Quiz_Competition.jpg",
      description: "Won university-wide quiz competition demonstrating excellence in Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, and general knowledge concepts",
      skills: ["OOP", "DSA", "DBMS", "Problem Solving"],
      credentialUrl: "#",
      details: "Secured top position in a competitive university quiz event by solving high-pressure conceptual and problem-solving rounds across OOP, DSA, DBMS, and logical reasoning. Demonstrated strong fundamentals, speed, and analytical accuracy."
    }
  ];

  return (
    <div className="relative bg-primary">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-32 w-48 h-48 border border-subtle rotate-12"></div>
        <div className="absolute bottom-32 left-24 w-32 h-32 border border-subtle rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-20 bg-border-default rotate-45"></div>
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

            {selectedCert && (
              <div
                className="fixed inset-0 z-[60] grid place-items-center bg-surface/90 p-4 backdrop-blur-md"
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
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="border border-default px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary transition-all duration-300"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </div>
  );
};

export default Certifications;