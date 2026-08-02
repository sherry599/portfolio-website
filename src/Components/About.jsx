import React, { useState, useCallback } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Code2, Terminal, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

const aboutSlides = [
  {
    id: 1,
    tag: "01 / BIO",
    category: "Full-Stack Engineer",
    title: "Full-Stack Engineer & Product Builder",
    quote: "I am Ali Mahmood, a Full Stack Software Engineer crafting responsive user interfaces and scalable backends. I engineer complete digital products from multi-agent platforms to secure marketplaces.",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    alt: "Developer workstation running VS Code editor and dark terminal",
    icon: <Code2 className="w-4 h-4 text-accent" />,
    highlights: ["MERN & Next.js Stack", "Clean Architecture", "UI/UX Craftsmanship"]
  },
  {
    id: 2,
    tag: "02 / VALUE",
    category: "End-to-End Execution",
    title: "End to End Ownership",
    quote: "I take full ownership of the project lifecycle, from smooth micro animations and robust REST APIs to secure payment integration and cloud deployment.",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    alt: "Multi-monitor development workstation with code editor and live preview",
    icon: <Layers className="w-4 h-4 text-accent" />,
    highlights: ["Full Ownership", "Zero Tech Debt", "Scalable Systems"]
  },
  {
    id: 3,
    tag: "03 / OPEN SOURCE",
    category: "System Engineering",
    title: "Core System & Upstream Contributions",
    quote: "I contribute to open source software with merged pull requests in Apache Arrow, Eventyay, and VoiceyBill.",
    src: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop",
    alt: "Git commits and pull request workspace on dark monitor",
    icon: <Terminal className="w-4 h-4 text-accent" />,
    highlights: ["10+ Merged PRs", "Apache Arrow (C++)", "Security & A11y"]
  },
  {
    id: 4,
    tag: "04 / PROJECTS",
    category: "Production Scale",
    title: "Production Systems Built for Real Scale",
    quote: "I build production systems for real world use, including EnvArmor for secret leak prevention, KHIDMAT for AI orchestration, and Noretmy for escrow transactions.",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    alt: "Backend microservices and developer infrastructure code on display",
    icon: <Cpu className="w-4 h-4 text-accent" />,
    highlights: ["EnvArmor Suite", "KHIDMAT AI Orchestrator", "Noretmy Escrow Market"]
  },
  {
    id: 5,
    tag: "05 / LOGIC",
    category: "Algorithms & Systems",
    title: "Algorithmic Precision & Data Optimization",
    quote: "I focus on data structures, query optimization, and efficient algorithms to ensure clean, high performance code.",
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
    alt: "Clean programming desk with code analytics and logic diagrams",
    icon: <Sparkles className="w-4 h-4 text-accent" />,
    highlights: ["Data Structures", "Query Optimization", "High Throughput"]
  }
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % aboutSlides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length);
  }, []);

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
      aria-label="About Ali Mahmood - Software Engineer"
      className="relative py-8 sm:py-12 md:py-16 bg-primary focus:outline-none"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl relative z-10">
        {/* Simple & Clean Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1.5px] bg-accent" />
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase mono">
              Get To Know Me
            </span>
            <div className="w-8 h-[1.5px] bg-accent" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            About Me
          </h2>
        </Motion.div>

        {/* Two-Column Layout (Carousel Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT COLUMN: Contained Image Carousel (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-center w-full">
            <div className="relative w-full max-w-md h-[200px] sm:h-[230px] md:h-[250px] flex items-center justify-center select-none overflow-hidden rounded-2xl px-2">
              {aboutSlides.map((slide, index) => {
                let offset = index - activeIndex;
                if (offset < -2) offset += aboutSlides.length;
                if (offset > 2) offset -= aboutSlides.length;

                const isActive = offset === 0;
                const isPrev = offset === -1 || (activeIndex === 0 && index === aboutSlides.length - 1);
                const isNext = offset === 1 || (activeIndex === aboutSlides.length - 1 && index === 0);

                if (!isActive && !isPrev && !isNext) {
                  return null;
                }

                let xTranslate = "0%";
                let scale = 1;
                let opacity = 1;
                let zIndex = 20;

                if (isPrev) {
                  xTranslate = "-38%";
                  scale = 0.82;
                  opacity = 0.35;
                  zIndex = 10;
                } else if (isNext) {
                  xTranslate = "38%";
                  scale = 0.82;
                  opacity = 0.35;
                  zIndex = 10;
                }

                return (
                  <Motion.div
                    key={slide.id}
                    onClick={() => setActiveIndex(index)}
                    initial={false}
                    animate={{
                      x: xTranslate,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 1, 0.5, 1]
                    }}
                    className={`absolute top-0 w-[78%] h-full rounded-2xl overflow-hidden border cursor-pointer transition-all duration-200 ${
                      isActive
                        ? 'border-accent/40 shadow-xl ring-1 ring-white/10'
                        : 'border-transparent shadow-md hover:opacity-75'
                    }`}
                  >
                    <div className="relative w-full h-full bg-surface overflow-hidden">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-20">
                        <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                          {slide.icon}
                          <span className="text-[11px] font-semibold tracking-wider uppercase mono text-neutral-200">
                            {slide.category}
                          </span>
                        </div>

                        <span className="text-[11px] font-mono text-neutral-300 font-semibold">
                          {slide.tag}
                        </span>
                      </div>
                    </div>
                  </Motion.div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6 z-20">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full border border-default bg-surface text-primary flex items-center justify-center hover:bg-accent hover:text-inverse transition-colors duration-200 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </Motion.button>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-default">
                {aboutSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-6 bg-accent' : 'w-2 bg-neutral-500/40 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>

              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full border border-default bg-surface text-primary flex items-center justify-center hover:bg-accent hover:text-inverse transition-colors duration-200 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </Motion.button>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean Details Content Card (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col w-full">
            <AnimatePresence mode="wait">
              <Motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full rounded-2xl border border-default bg-surface p-5 sm:p-6 shadow-md relative"
              >
                {/* Header Tag */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="px-2 py-0.5 text-xs font-mono font-bold tracking-wider text-accent bg-accent/10 rounded border border-accent/20">
                    {activeSlide.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-primary mb-2 leading-snug">
                  {activeSlide.title}
                </h3>

                {/* Clear & High Contrast Body Text */}
                <p className="text-xs sm:text-sm text-primary/90 leading-relaxed mb-4 font-normal">
                  "{activeSlide.quote}"
                </p>

                {/* Highlights List */}
                <div className="pt-3 border-t border-default">
                  <span className="text-[10px] font-semibold text-secondary uppercase tracking-wider mono block mb-1.5">
                    Highlights
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeSlide.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/5 border border-default text-xs font-medium text-primary"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
