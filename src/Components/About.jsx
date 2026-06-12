import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiTailwindcss,
  SiGit,
  SiCplusplus,
  SiPython,
  SiDjango,
  SiSocketdotio,
  SiStripe,
  SiCloudinary,
  SiJsonwebtokens,
  SiPaypal,
  SiAmazons3,
  SiFramer,
  SiShadcnui,
  SiFigma,
} from 'react-icons/si';

import { CircularTestimonials } from '@/Components/ui/circular-testimonials';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stackVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const masterTechStack = [
  [
    { label: 'JavaScript', icon: <SiJavascript className="w-4 h-4" />, color: 'text-[#F7DF1E]' },
    { label: 'TypeScript', icon: <SiTypescript className="w-4 h-4" />, color: 'text-[#3178C6]' },
    { label: 'React', icon: <SiReact className="w-4 h-4" />, color: 'text-[#61DAFB]' },
    { label: 'RTK Query', icon: <SiRedux className="w-4 h-4" />, color: 'text-[#764ABC]' },
  ],
  [
    { label: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" />, color: 'text-primary' },
    { label: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" />, color: 'text-[#339933]' },
    { label: 'Express', icon: <SiExpress className="w-4 h-4" />, color: 'text-[#888888]' },
    { label: 'MongoDB', icon: <SiMongodb className="w-4 h-4" />, color: 'text-[#47A248]' },
  ],
  [
    { label: 'Redis', icon: <SiRedis className="w-4 h-4" />, color: 'text-[#DC382D]' },
    { label: 'Docker', icon: <SiDocker className="w-4 h-4" />, color: 'text-[#2496ED]' },
    { label: 'GitHub Actions', icon: <SiGithubactions className="w-4 h-4" />, color: 'text-[#2088FF]' },
    { label: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" />, color: 'text-[#06B6D4]' },
  ],
  [
    { label: 'Git', icon: <SiGit className="w-4 h-4" />, color: 'text-[#F05032]' },
    { label: 'Figma', icon: <SiFigma className="w-4 h-4" />, color: 'text-[#F24E1E]' },
    { label: 'Python', icon: <SiPython className="w-4 h-4" />, color: 'text-[#3776AB]' },
    { label: 'Django', icon: <SiDjango className="w-4 h-4" />, color: 'text-[#2BA977]' },
  ],
];

const About = () => {
  const aboutSlides = [
    {
      name: "Who I Am",
      designation: "01 / Bio",
      quote: "I am Ali Mahmood, a Full-Stack Software Engineer who bridges the gap between premium, high-end UI design and robust, scalable backend architecture. I don't just write code; I architect end-to-end solutions, specializing in complex marketplaces, real-time AI assistants, and production-ready Learning Management Systems.",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1368&auto=format&fit=crop"
    },
    {
      name: "Why Me",
      designation: "02 / Value",
      quote: "Hiring specialists often leads to fragmented results. I provide a single point of ownership, handling everything from pixel-perfect UI design with Framer Motion to secure backend architecture with Node.js and Stripe. You get consistent quality and zero handoff friction.",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1368&auto=format&fit=crop"
    },
    {
      name: "Open Source",
      designation: "03 / Contributions",
      quote: "Beyond client work, I am an active open-source contributor. My patches have landed in foundational projects like Apache Arrow (C++), tackling deprecated API removals and sparse tensor safety—proving my commitment to writing code that holds up under enterprise-level scrutiny.",
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1368&auto=format&fit=crop"
    },
    {
      name: "Technical Excellence",
      designation: "04 / Projects",
      quote: "My projects represent the peak of modern stack engineering. From Noretmy (freelancing platform) to CampusCore (scalable, Redis-cached LMS) and MultiMart (multivendor marketplace), I engineer high-performance systems with secure payment releases, low latency, and optimized assets.",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1368&auto=format&fit=crop"
    },
    {
      name: "Problem Solving",
      designation: "05 / Logic",
      quote: "I am a passionate problem solver who views algorithmic efficiency as the cornerstone of great software engineering. My deep understanding of complex data structures and optimized algorithms allows me to write code that is not only functional but performant at scale, backed by daily progress on LeetCode.",
      src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1368&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative bg-primary">
      <section id="about" className="pt-14 pb-8 md:pt-24 md:pb-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stackVariants}
            className="space-y-6"
          >
            <motion.div variants={sectionVariants} className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1.5px] bg-accent"></div>
                <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Introduction</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light leading-tight section-heading text-primary">
                <span className="font-extralight text-secondary">About</span> <span className="font-bold">Me</span>
              </h2>
            </motion.div>

            <motion.div variants={sectionVariants} className="w-full border border-subtle bg-surface p-2 md:p-6 mb-12 shadow-2xl rounded-2xl flex justify-center items-center">
              <CircularTestimonials
                testimonials={aboutSlides}
                autoplay={false}
                colors={{
                  name: "var(--text-primary)",
                  designation: "var(--text-secondary)",
                  testimony: "var(--text-secondary)",
                  arrowBackground: "var(--bg-elevated)",
                  arrowForeground: "var(--text-primary)",
                  arrowHoverBackground: "var(--text-primary)",
                }}
                fontSizes={{
                  name: "1.75rem",
                  designation: "0.875rem",
                  quote: "1rem"
                }}
              />
            </motion.div>

            <motion.div variants={sectionVariants} className="pt-12 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1.5px] bg-accent"></div>
                <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Capabilities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light leading-tight section-heading text-primary">
                <span className="font-extralight text-secondary">Tech</span> <span className="font-bold">Stack</span>
              </h2>
            </motion.div>

            <motion.div variants={sectionVariants} className="w-full border border-subtle bg-surface p-6 md:p-8 shadow-2xl">
              <div className="space-y-3.5">
                {masterTechStack.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap gap-4">
                    {row.map((item) => (
                      <span key={item.label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-subtle bg-elevated text-sm text-primary hover:border-default hover:bg-surface transition-all duration-200">
                        <span className={item.color}>{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
