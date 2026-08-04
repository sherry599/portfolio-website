import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronDown, ArrowRight, TrendingUp, ShieldCheck, Award, Zap } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { usePageTransition } from './PageTransitionContext';

// BlurText animation component
const BlurText = ({
  text,
  delay = 50,
  startDelay = 0,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${(i * delay) + startDelay}ms`,
          }}
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

const Hero = () => {
  const { transitionTo } = usePageTransition();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const metricBadges = [
    { label: "$4M+ ARR", sub: "Managing Book of Business", icon: Zap, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { label: "107% NRR", sub: "Net Revenue Retention", icon: TrendingUp, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { label: "87%+ CSAT", sub: "Portfolio Average", icon: Award, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { label: "54 NPS", sub: "Customer NPS", icon: ShieldCheck, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" }
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <div className="relative min-h-screen w-full bg-primary flex flex-col overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 border border-zinc-200 dark:border-zinc-800/40 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-zinc-200 dark:bg-zinc-800/40 rotate-12"></div>

          {/* Floating background dots */}
          <div className="floating-dots text-zinc-400/50 dark:text-zinc-800/60">
            <div className="floating-dot dot-1"></div>
            <div className="floating-dot dot-2"></div>
            <div className="floating-dot dot-3"></div>
            <div className="floating-dot dot-4"></div>
            <div className="floating-dot dot-5"></div>
            <div className="floating-dot dot-6"></div>
            <div className="floating-dot dot-7"></div>
          </div>
        </div>

        <section
          id="home"
          className="h-full flex flex-col justify-start items-center relative z-10 px-4 sm:px-6 pt-16 pb-8 sm:pt-20"
        >
          <Motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl flex flex-col items-center text-center relative"
          >
            {/* Top Centered Profile Photo (Visible on all desktop & mobile screens) */}
            <Motion.div variants={itemVariants} className="flex flex-col items-center mb-3 sm:mb-4">
              <div className="relative group cursor-pointer">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-accent/80 p-0.5 shadow-xl bg-surface transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/shaheryar-headshot.jpg"
                    alt="Shaheryar Mahmood Headshot"
                    className="w-full h-full object-cover rounded-full object-top rotate-[4deg] scale-[1.08]"
                  />
                </div>
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-primary rounded-full animate-pulse" title="Available for CS Ops & Leadership" />
              </div>
            </Motion.div>

            {/* Introduction Label */}
            <Motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
              <div className="w-8 sm:w-10 h-[1.5px] bg-accent"></div>
              <span className="text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase mono">AI-First Customer Success Manager</span>
              <div className="w-8 sm:w-10 h-[1.5px] bg-accent"></div>
            </Motion.div>

            {/* Centered Main Name */}
            <Motion.div variants={itemVariants} className="relative w-full mb-3 sm:mb-4 select-none flex flex-col items-center">
              <Motion.h1 
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.04,
                      delayChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                className="font-black text-[32px] sm:text-[54px] md:text-[72px] lg:text-[88px] leading-[0.9] tracking-tighter uppercase text-primary flex flex-col items-center gap-1 sm:gap-2"
              >
                <span className="flex gap-1 sm:gap-2">
                  {"SHAHERYAR".split("").map((char, i) => (
                    <Motion.span
                      key={i}
                      initial={{ opacity: 0, y: 75, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ 
                        duration: 1.2, 
                        ease: [0.22, 1, 0.36, 1], 
                        delay: i * 0.12 + 0.2 
                      }}
                      className="inline-block"
                    >
                      {char}
                    </Motion.span>
                  ))}
                </span>
                <span className="flex gap-1 sm:gap-2">
                  {"MAHMOOD".split("").map((char, i) => (
                    <Motion.span
                      key={i}
                      initial={{ opacity: 0, y: 75, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ 
                        duration: 1.2, 
                        ease: [0.22, 1, 0.36, 1], 
                        delay: (9 + i) * 0.12 + 0.2 
                      }}
                      className="inline-block"
                    >
                      {char}
                    </Motion.span>
                  ))}
                </span>
              </Motion.h1>
            </Motion.div>

            {/* Tagline */}
            <Motion.div variants={itemVariants} className="max-w-xl mb-4 sm:mb-5 px-2">
              <BlurText
                text="7 years driving B2B SaaS customer retention, revenue growth, and AI-powered CS operations across regulated industries. Managing $4M+ ARR while delivering 107% NRR and 87%+ CSAT."
                delay={30}
                animateBy="words"
                direction="top"
                className="text-xs sm:text-sm md:text-base text-center transition-colors duration-300 text-secondary hover:text-primary leading-relaxed font-normal"
              />
            </Motion.div>

            {/* Metric Badges Strip */}
            <Motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-2xl px-4 mb-4 sm:mb-5 z-30">
              {metricBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col items-center p-2 sm:p-2.5 rounded-xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${badge.color}`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{badge.label}</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] opacity-80 mt-0.5">{badge.sub}</span>
                  </div>
                );
              })}
            </Motion.div>

            {/* Action Buttons Row (Matching Reference Design) */}
            <Motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-3 sm:gap-4 mt-2 z-30 flex-wrap"
            >
              {/* Contact me here -> Pill Button */}
              <ScrollLink
                to="socials"
                smooth={true}
                duration={500}
                className="group px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold text-xs sm:text-sm rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer flex items-center gap-2 border border-zinc-700/50 dark:border-zinc-300"
              >
                <span>Contact</span>
              </ScrollLink>

              {/* LinkedIn Button Icon */}
              <a
                href="https://linkedin.com/in/sherry599/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shaheryar Mahmood on LinkedIn"
                className="p-3 rounded-full border border-default bg-surface text-primary hover:text-accent hover:border-accent transition-all duration-200 hover:scale-105 shadow-sm flex items-center justify-center cursor-pointer"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A66C2]" />
              </a>
            </Motion.div>
          </Motion.div>

          {/* Scroll indicator */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-3 left-8 sm:left-12 scroll-indicator hidden sm:block"
          >
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="flex items-center text-secondary hover:text-primary transition-colors cursor-pointer group"
            >
              <div className="flex flex-col items-center">
                <div className="w-[1px] h-10 bg-border-default mb-2 group-hover:bg-primary transition-colors"></div>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium ml-3 mono">SCROLL</span>
            </ScrollLink>
          </Motion.div>
        </section>
      </div>
    </>
  );
};

export default Hero;