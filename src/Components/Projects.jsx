import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Eye, Github, Lock, Bell, Zap, Lightbulb, Grid, Monitor, Smartphone, Terminal } from 'lucide-react';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiStripe, SiCloudinary, SiJsonwebtokens, SiNextdotjs, SiRedis, SiSocketdotio, SiRedux, SiPaypal, SiAmazons3, SiShadcnui, SiFramer, SiTypescript, SiDocker, SiGooglemaps, SiPrisma } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { ExpandableTabs } from '@/Components/ui/expandable-tabs';

const ProjectCard = ({ project, index, cardVariants, getTechIcon, getTechColor }) => {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover={{
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group bg-surface border border-subtle hover:border-default overflow-hidden relative shadow-lg"
      data-cursor="pointer"
    >
      <div>
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-primary text-primary border border-default px-3 py-1.5 text-[10px] font-black uppercase tracking-widest mono shadow-2xl">FEATURED</div>
          </div>
        )}

        <div className="absolute top-4 right-4 z-10">
          <div className="bg-black/80 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 text-[10px] font-black uppercase tracking-widest mono shadow-xl">
            {project.category}
          </div>
        </div>

        <div className="relative h-[220px] md:h-[280px] overflow-hidden bg-primary">
          <img
            src={`/${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 grayscale-[0.1] group-hover:grayscale-0"
            style={{ objectPosition: project.objectPosition || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface/80 backdrop-blur-md border border-default text-primary p-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-primary hover:text-primary"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <Link to={`/project/${project.id}`} className="group/title inline-block" data-cursor="pointer">
            <div className="inline-flex items-center gap-2">
              <h3 className="text-2xl font-bold text-primary group-hover/title:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-secondary group-hover/title:text-primary group-hover/title:rotate-45 transition-all duration-200" />
            </div>
            <span className="block h-[1px] bg-accent/40 mt-1 w-0 group-hover/title:w-full transition-all duration-300" />
          </Link>
          <p className="text-secondary text-base leading-relaxed line-clamp-3 font-light">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-3">
            {project.tech.slice(0, 16).map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-elevated)' }}
                className={`flex items-center gap-1.5 px-3 py-1.5 border border-subtle bg-surface text-xs font-medium mono text-primary transition-all duration-200`}
                data-cursor="pointer"
              >
                <span className={getTechColor(tech).split(' ')[0]}>{getTechIcon(tech)}</span>
                <span>{tech}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-3 md:gap-4">
            <Link
              to={`/project/${project.id}`}
              className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 border border-default text-primary px-4 py-3 hover:bg-primary hover:text-primary transition-all duration-300 font-semibold uppercase tracking-wider text-[10px] md:text-xs shadow-sm"
              data-cursor="pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Details</span>
            </Link>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[100px] inline-flex items-center justify-center gap-2 border border-default bg-surface text-primary px-4 py-3 hover:bg-primary hover:text-primary transition-all duration-300 font-semibold uppercase tracking-wider text-[10px] md:text-xs shadow-sm"
              data-cursor="pointer"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>

            <motion.div className="flex-1 min-w-[130px]">
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 border border-default bg-surface text-primary px-4 py-3 hover:bg-primary hover:text-primary transition-all duration-300 font-bold uppercase tracking-wider text-[10px] md:text-xs group/link shadow-sm"
                data-cursor="pointer"
              >
                <span>Live</span>
                <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);

  const filterTabs = [
    { title: "All", icon: Grid },
    { title: "Web Apps", icon: Monitor },
    { title: "Mobile Apps", icon: Smartphone },
    { title: "CLI Tools", icon: Terminal }
  ];

  const projects = [
    {
      id: 'envarmor',
      title: "EnvArmor",
      description: "A secure, local-first secret leak prevention suite. Intercepts API keys, variables, and credentials before they leave the developer machine using CLI pre-commit hooks and an encrypted web dashboard.",
      image: "EnvArmor.png",
      objectPosition: "center 10%",
      tech: ["Next.js", "Supabase", "Prisma", "Redis", "TypeScript", "Node.js", "Framer Motion", "Tailwind CSS"],
      link: "https://env-armor.vercel.app/",
      githubLink: "https://github.com/AliRana30/EnvArmor",
      category: "Web & CLI",
      featured: true,
      purpose: "EnvArmor was built to eliminate the risk of accidental secret leaks. By combining a zero-trust local-first CLI scanner with an end-to-end encrypted web dashboard, it intercepts API keys, environment files, and credentials before they leave the developer's machine—without exposing raw variables to cloud servers.",
      keyFeatures: [
        "Pre-commit hook scanning utilizing regex signatures and Shannon Entropy",
        "AI context protection generating auto-exclusion files (.cursorignore, .claudeignore)",
        "Financial abuse risk mapping dynamically calculating leak cost estimates ($200–$5000)",
        "E2E AES-256 encrypted configuration vault with client-side zero-knowledge sync",
        "Project workspace auto-provisioning and dynamic CLI context switching",
        "Prisma database persistence and Upstash Redis rate-limiting"
      ]
    },
    {
      id: 'khidmat',
      title: "KHIDMAT",
      description: "An AI-powered service orchestration platform built for Pakistan's informal economy, allowing users to discover, rank, price, and schedule local service providers using natural language chat (English/Urdu/Roman Urdu).",
      image: "Khidmat.png",
      objectPosition: "center 10%",
      tech: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Express", "Supabase", "Gemini API", "Google Maps", "Docker", "Tailwind CSS"],
      link: "https://khidmat-orchestrator.vercel.app/",
      githubLink: "https://github.com/AliRana30/KHIDMAT",
      category: "Mobile App",
      featured: true,
      purpose: "KHIDMAT was engineered to resolve trust and discovery bottlenecks in Pakistan's informal service sector. By leveraging natural-language inputs, geocoding, and multi-agent orchestration, the platform replaces unstructured chats and phone calls with structured workflows—automating everything from intent parsing and radius expansion mapping to dynamic surge pricing, double-booking checks, and trace-logged dispute handling.",
      keyFeatures: [
        "Multilingual natural language parsing (English, Urdu, Roman Urdu)",
        "Multi-agent orchestration pipeline (Intent, Discovery, Ranking, Pricing, Dispute)",
        "Geocoded provider discovery with progressive radius expansion",
        "Dynamic surge pricing considering travel, complexity, and urgency",
        "Double-booking prevention and travel-time buffers",
        "Interactive live booking tracking screen with real-time updates",
        "Explainable AI trace viewer to debug backend decisions",
        "Supabase persistence and JWT-based session security",
        "Dockerized backend ready for Cloud Run deployment"
      ]
    },
    {
      id: 'noretmy',
      title: "Noretmy",
      description: "A production-level freelancing marketplace combining Fiverr's gig model with Upwork's milestone-based project flow, featuring real-time chat, automated seller leveling, and secure multi-payment gateway integration.",
      image: "Noretmy.png",
      objectPosition: "center 10%",
      tech: ["Next.js", "Node.js", "MongoDB", "Express", "Redux Toolkit", "Socket.io", "Stripe", "PayPal", "AWS S3", "Cloudinary", "Framer Motion", "Tailwind CSS", "Shadcn/UI"],
      link: "https://noretmy.vercel.app/",
      githubLink: "https://github.com/AliRana30/Noretmy",
      category: "Full-Stack",
      featured: true,
      purpose: "To build a highly robust and scalable freelancing platform that bridges the gap between gig-based services and milestone-driven project management, ensuring secure transactions and automated operational logic.",
      keyFeatures: [
        "Gig-based services and milestone-driven job posts",
        "Secure milestone-based payment release system",
        "Real-time chat with file sharing via Socket.io",
        "Automated seller badge leveling system via Cron jobs",
        "Dual payment gateway integration (Stripe & PayPal)",
        "Formal withdrawal request flow for freelancers",
        "AWS S3 and Cloudinary for media management",
        "Redux Toolkit for advanced state management",
        "Server-side VAT calculation and timeline extensions",
        "Interactive UI with Framer Motion and Shadcn/UI"
      ]
    },
    {
      id: 'campuscore',
      title: "CampusCore LMS",
      description: "Production-oriented LMS built for scalability, security, and real-world EdTech workflows with secure streaming, paid enrollments, analytics, and admin controls.",
      image: "LMS-homepage.png",
      objectPosition: "center 10%",
      tech: ["Next.js", "Node.js", "MongoDB", "Express", "Redis", "Stripe", "Cloudinary", "Socket.io", "JWT", "Tailwind CSS"],
      link: "https://lms-e-learning-system.vercel.app/",
      githubLink: "https://github.com/AliRana30/LMS",
      category: "Full-Stack",
      featured: true,
      purpose: "Designed and developed CampusCore to cover the full lifecycle of online learning platforms, from instructor-side course publishing and monetization to student-side content consumption, progress tracking, and interaction. The system is engineered around secure media delivery, payment reliability, operational visibility, and scalable architecture for real deployment conditions.",
      keyFeatures: [
        "Course creation and management with secure VDOCipher video streaming",
        "Paid enrollments with Stripe payment integration",
        "Multi-authentication support (Email, Google, GitHub OAuth)",
        "Real-time notifications using Socket.io",
        "Role-based admin dashboard with analytics for users, courses, and orders",
        "Q&A module with threaded discussions",
        "Course reviews and rating system",
        "Redis-based caching for performance optimization",
        "Email notifications via Nodemailer",
        "Dark and light theme support",
        "Fully responsive, cross-device UI"
      ]
    },
    {
      id: 'multimart',
      title: "MultiMart",
      description: "A comprehensive full-stack multivendor e-commerce platform where vendors can list products, manage inventory, and customers can shop across multiple stores with secure payments",
      image: "multivendor.png",
      objectPosition: "center 10%",
      tech: ["React", "Node.js", "MongoDB", "Express", "API Integration", "JWT", "Tailwind CSS"],
      link: "http://multimarts.vercel.app/",
      githubLink: "https://github.com/AliRana30/multimart",
      category: "Full-Stack",
      featured: true,
      purpose: "To create a complete multivendor marketplace that empowers small businesses to sell online while providing customers with a diverse shopping experience across multiple vendors.",
      keyFeatures: [
        "Multi-vendor product management",
        "Secure Stripe payment integration",
        "Real-time inventory tracking",
        "Vendor dashboard with analytics",
        "Advanced product search and filtering",
        "Order management system",
        "Image optimization with Cloudinary",
        "Responsive design for all devices"
      ]
    },
    {
      id: 'sonicwave-pro',
      title: "SonicWave Pro",
      description: "A premium scrollytelling product page built with Next.js 14, TypeScript, Framer Motion, and Canvas-based frame sequencing for cinematic product reveal.",
      image: "SonicWave.png",
      tech: ["Next.js", "TypeScript", "Framer Motion", "GSAP", "Tailwind CSS", "Canvas API", "ScrollTrigger", "App Router"],
      link: "https://sonicwave-animate.vercel.app/",
      githubLink: "https://github.com/AliRana30/SonicWave",
      category: "Frontend",
      featured: true,
      keyFeatures: [
        "Floating text overlays synchronized to timeline checkpoints",
        "Premium dark visual system with noise grain and glassmorphism components",
        "Responsive behavior for mobile, tablet, and desktop scrollytelling",
        "Feature grid, marquee separator, specs comparison, and CTA funnel",
        "Magnetic button interactions and custom cursor for brand feel",
        "Performance-oriented rendering with requestAnimationFrame draw loop"
      ]
    },
    {
      id: 'moviemate',
      title: "MovieMate",
      description: "A movie discovery platform that helps users find and explore movies with detailed information, reviews, and recommendations",
      image: "moviemate.png",
      tech: ["React", "Node.js", "API Integration", "MongoDB", "Tailwind CSS", "JWT", "Express"],
      link: "https://moviemate-app-psi.vercel.app/",
      githubLink: "https://github.com/AliRana30/moviemate",
      category: "Full-Stack",
      featured: false,
      purpose: "To create an intuitive platform for movie enthusiasts to discover, explore, and get detailed information about movies with personalized recommendations.",
      keyFeatures: [
        "Advanced movie search and filtering",
        "Detailed movie information and reviews",
        "Personalized movie recommendations",
        "User ratings and watchlist functionality",
        "Responsive design for all devices"
      ]
    },
    {
      id: 'promptly',
      title: "Promptly (AI Assistant)",
      description: "An advanced AI-powered assistant that provides intelligent responses, helps with problem-solving, and offers personalized assistance for various tasks",
      image: "AIAssistant.jpg",
      tech: ["React", "Node.js", "AI API", "MongoDB", "Express", "Tailwind CSS", "JWT"],
      link: "https://assitant-livid.vercel.app/",
      githubLink: "https://github.com/AliRana30/AI_Assistant",
      category: "Full-Stack",
      featured: true,
      purpose: "To develop an intelligent AI assistant that can understand context, provide meaningful responses, and assist users with various tasks efficiently.",
      keyFeatures: [
        "Natural language processing",
        "Context-aware conversations",
        "Multi-task assistance capabilities",
        "Real-time response generation",
        "User session management",
        "Customizable AI personality"
      ]
    },
    {
      id: 'rental-car',
      title: "DriveEase",
      description: "A React-based car rental website that allows users to rent cars from the comfort of their home, featuring modern UI/UX and seamless booking experience",
      image: "Drive-Ease.png",
      tech: ["React", "Node.js", "MongoDB", "API Integration", "Tailwind CSS", "JWT"],
      link: "https://drive-ease-rental.netlify.app/",
      githubLink: "https://github.com/AliRana30/Drive-Ease",
      category: "Full-Stack",
      featured: false,
      purpose: "To simplify car rental process by providing a user-friendly platform where customers can browse, select, and rent cars online with ease.",
      keyFeatures: [
        "Comprehensive car catalog",
        "Real-time availability checking",
        "Online booking system",
        "Price comparison tools",
        "User account management",
        "Mobile-responsive interface"
      ]
    }
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();

    const iconMap = {
      'react': <SiReact className="w-4 h-4" />,
      'react native': <SiReact className="w-4 h-4" />,
      'expo': <Zap className="w-4 h-4" />,
      'typescript': <SiTypescript className="w-4 h-4" />,
      'next.js': <SiNextdotjs className="w-4 h-4" />,
      'node.js': <SiNodedotjs className="w-4 h-4" />,
      'mongodb': <SiMongodb className="w-4 h-4" />,
      'express': <SiExpress className="w-4 h-4" />,
      'tailwind css': <SiTailwindcss className="w-4 h-4" />,
      'stripe': <SiStripe className="w-4 h-4" />,
      'cloudinary': <SiCloudinary className="w-4 h-4" />,
      'jwt': <SiJsonwebtokens className="w-4 h-4" />,
      'redis': <SiRedis className="w-4 h-4" />,
      'socket.io': <SiSocketdotio className="w-4 h-4" />,
      'redux toolkit': <SiRedux className="w-4 h-4" />,
      'paypal': <SiPaypal className="w-4 h-4" />,
      'aws s3': <SiAmazons3 className="w-4 h-4" />,
      'shadcn/ui': <SiShadcnui className="w-4 h-4" />,
      'framer motion': <SiFramer className="w-4 h-4" />,
      'bcrypt': <Lock className="w-4 h-4" />,
      'react-hot-toast': <Bell className="w-4 h-4" />,
      'docker': <SiDocker className="w-4 h-4" />,
      'google maps': <SiGooglemaps className="w-4 h-4" />,
      'supabase': <SiMongodb className="w-4 h-4" />,
      'gemini api': <Lightbulb className="w-4 h-4" />,
      'prisma': <SiPrisma className="w-4 h-4" />
    };

    return iconMap[techLower] || <Zap className="w-4 h-4" />;
  };

  const getTechColor = (tech) => {
    const techLower = tech.toLowerCase();

    const colorMap = {
      'react': 'text-[#61DAFB]',
      'react native': 'text-[#61DAFB]',
      'expo': 'text-primary',
      'typescript': 'text-[#3178C6]',
      'next.js': 'text-primary',
      'node.js': 'text-[#339933]',
      'mongodb': 'text-[#47A248]',
      'express': 'text-secondary',
      'api integration': 'text-purple-600',
      'ai api': 'text-indigo-600',
      'tailwind css': 'text-[#06B6D4]',
      'stripe': 'text-[#635BFF]',
      'cloudinary': 'text-[#3448C5]',
      'jwt': 'text-pink-500',
      'redis': 'text-[#DC382D]',
      'socket.io': 'text-primary',
      'bcrypt': 'text-red-500',
      'react-hot-toast': 'text-amber-600',
      'docker': 'text-[#2496ED]',
      'google maps': 'text-[#4285F4]',
      'supabase': 'text-[#3ECF8E]',
      'gemini api': 'text-[#1A73E8]',
      'prisma': 'text-[#5A67D8]'
    };

    return colorMap[techLower] || 'text-[#888888]';
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilterIndex === 0) return true;
    if (activeFilterIndex === 1) {
      return project.category === "Full-Stack" || project.category === "Frontend" || project.category === "Web & CLI";
    }
    if (activeFilterIndex === 2) {
      return project.category === "Mobile App";
    }
    if (activeFilterIndex === 3) {
      return project.category === "CLI Tool" || project.category === "Web & CLI";
    }
    return true;
  });

  return (
    <>
      <div className="relative bg-primary">
        {/* Minimal geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-24 left-16 w-64 h-64 border border-subtle rotate-45"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 border border-subtle rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-32 bg-border-default rotate-12"></div>
        </div>

        <section id="projects" className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-12 md:mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1.5px] bg-accent"></div>
                <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Projects</span>
              </div>

              <h2 className="text-3xl md:text-3xl font-light leading-tight mb-6 section-heading">
                <span className="font-extralight text-secondary">Featured</span>
                <br />
                <span className="font-bold text-primary">Projects</span>
              </h2>

              <p className="text-lg text-secondary font-light max-w-2xl leading-relaxed">
                Explore my latest work showcasing modern web development with cutting-edge technologies and user-centric design patterns.
              </p>
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

              {/* Projects Grid */}
              <div className="flex-1 w-full">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        cardVariants={cardVariants}
                        getTechIcon={getTechIcon}
                        getTechColor={getTechColor}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Portfolio note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;