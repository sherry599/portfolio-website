import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { usePageTransition } from './PageTransitionContext';
import MagneticButton from './ui/MagneticButton';

// BlurText animation component
const BlurText = ({
  text,
  delay = 50,
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
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

const Hero = () => {
  const { transitionTo } = usePageTransition();
  const profileImage = "/my_image.png";

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

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <div className="relative h-screen w-full bg-primary flex flex-col overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 border border-subtle rotate-45"></div>
          <div className="absolute bottom-40 left-10 w-32 h-32 border border-subtle rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-border-subtle rotate-12"></div>

          {/* Floating background dots */}
          <div className="floating-dots text-primary">
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
          className="h-full flex flex-col justify-start items-center relative z-10 px-6 pt-28 pb-10 sm:pt-32"
        >
          <Motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-5xl flex flex-col items-center text-center relative"
          >
            {/* Introduction Label */}
            <Motion.div variants={itemVariants} className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-[1.5px] bg-accent"></div>
              <span className="text-xs sm:text-sm font-medium text-secondary tracking-wider uppercase mono">Introduction</span>
              <div className="w-10 h-[1.5px] bg-accent"></div>
            </Motion.div>

            {/* Centered Main Name with overlapping profile photo */}
            <Motion.div variants={itemVariants} className="relative w-full mb-6 sm:mb-8 select-none">
              <div>
                <BlurText
                  text="ALI"
                  delay={100}
                  animateBy="letters"
                  direction="top"
                  className="font-bold text-[65px] sm:text-[105px] md:text-[140px] lg:text-[165px] leading-[0.78] tracking-tighter uppercase justify-center whitespace-nowrap text-primary"
                  style={{ fontFamily: "'Fira Code', monospace" }}
                />
              </div>
              <div className="mt-1">
                <BlurText
                  text="MAHMOOD"
                  delay={100}
                  animateBy="letters"
                  direction="top"
                  className="font-bold text-[65px] sm:text-[105px] md:text-[140px] lg:text-[165px] leading-[0.78] tracking-tighter uppercase justify-center whitespace-nowrap text-primary"
                  style={{ fontFamily: "'Fira Code', monospace" }}
                />
              </div>

              {/* Profile Picture overlapping the text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div 
                  className="w-[50px] h-[85px] sm:w-[75px] sm:h-[125px] md:w-[95px] md:h-[155px] lg:w-[110px] lg:h-[185px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer border border-default bg-surface"
                >
                  <img
                    src={profileImage}
                    alt="Ali Mahmood"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </Motion.div>

            {/* Tagline */}
            <Motion.div variants={itemVariants} className="max-w-xl mb-6 sm:mb-8">
              <BlurText
                text="I build modern web applications with clean code and thoughtful design. Specializing in the MERN stack to create digital experiences that matter."
                delay={40}
                animateBy="words"
                direction="top"
                className="text-[14px] sm:text-[16px] md:text-[18px] text-center transition-colors duration-300 text-secondary hover:text-primary leading-relaxed"
                style={{ fontFamily: "'Antic', sans-serif" }}
              />
            </Motion.div>

            {/* CTA Buttons */}
            <Motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 z-30"
            >
              <MagneticButton
                onClick={() => transitionTo('/projects')}
                className="group px-7 py-3.5 bg-accent text-inverse border border-default transition-colors duration-200 cursor-pointer font-medium flex items-center gap-2.5 justify-center w-full sm:w-fit text-sm"
              >
                <span>See Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </MagneticButton>

              <ScrollLink
                to="socials"
                smooth={true}
                duration={500}
                className="px-7 py-3.5 border border-default bg-surface text-primary hover:bg-primary transition-all duration-200 cursor-pointer font-medium flex items-center justify-center w-full sm:w-fit text-sm"
              >
                Get In Touch
              </ScrollLink>
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