import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Target, Zap, Code2, CheckCircle, Github, AlertCircle, Lightbulb } from 'lucide-react';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens, SiCloudinary, SiNextdotjs, SiRedis, SiSocketdotio, SiStripe, SiRedux, SiPaypal, SiAmazons3, SiShadcnui, SiFramer, SiTypescript, SiDocker, SiGooglemaps, SiPrisma } from 'react-icons/si';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    envarmor: {
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
      ],
      challenges: [
        {
          challenge: "Zero-Knowledge Cloud Secret Synchronization",
          solution: "Implemented client-side AES-256 encryption. Plaintext secrets are encrypted in the local CLI runtime before dispatch, ensuring the dashboard database only stores ciphertext that the user decrypts on the client."
        },
        {
          challenge: "Balancing Low-Latency Scanning with High Detection Accuracy",
          solution: "Combined static regular expression patterns (Stripe, AWS, OpenAI signature matching) with lightweight Shannon Entropy calculation for high-randomness strings to catch custom or structured secret leaks in milliseconds."
        },
        {
          challenge: "Cross-Environment Project Context Switching",
          solution: "Architected a global selector in the web app header synchronized with the CLI's --project flag, allowing developers to switch between workspaces and auto-provision project credentials dynamically."
        }
      ]
    },
    khidmat: {
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
      ],
      challenges: [
        {
          challenge: "Noisy Multilingual Intent Parsing",
          solution: "Built a customized prompt matrix for Gemini and Groq model templates to parse code-mixed Roman Urdu & English inputs ('kal subah AC check krwana ha'), mapping them to clean ISO schedules, urgency classes, and service sectors with over 94% accuracy."
        },
        {
          challenge: "Dynamic Geographic Coverage in Sparse Areas",
          solution: "Developed an expansion ring algorithm inside the Discovery Agent that automatically increments search radii from 5km up to 25km when nearby matches are unavailable, falling back to verified reputation-ranked providers."
        },
        {
          challenge: "AI Agent Observability and Explanations",
          solution: "Integrated a custom Trace Agent logging system mapping agent execution sequences, prompt payloads, and confidence ratings to a dashboard, rendering an explainable decision timeline for end-user trust."
        }
      ]
    },
    noretmy: {
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
      purpose: "Noretmy was engineered to solve the fragmentation in freelance platforms by merging gig-based services with milestone-driven project management. The goal was to build a robust system that handles the entire lifecycle of a freelance contract—from service listing and job posting to secure escrow-style payments, real-time collaboration, and automated performance tracking. It focuses on closing the operational gaps found in basic marketplace clones, such as formal dispute handling, VAT calculations, and dynamic seller leveling.",
      keyFeatures: [
        "Gig-based services and milestone-driven job posts",
        "Secure milestone-based payment release system (Escrow logic)",
        "Real-time chat with file sharing via Socket.io",
        "Automated seller badge leveling system via Cron jobs",
        "Dual payment gateway integration (Stripe & PayPal)",
        "Formal withdrawal request flow for freelancers",
        "AWS S3 and Cloudinary for media management",
        "Redux Toolkit for advanced state management",
        "Server-side VAT calculation and timeline extensions",
        "Interactive UI with Framer Motion and Shadcn/UI"
      ],
      challenges: [
        {
          challenge: "Escrow-style Milestone Payments",
          solution: "Implemented a custom payment flow where funds are held at the order level and released to the seller only upon client approval of specific milestones, with built-in dispute logic handled via the admin panel."
        },
        {
          challenge: "Automated Seller Leveling System",
          solution: "Built a Node-based cron job service that runs nightly to recalculate seller metrics (delivery rate, ratings, order volume) and automatically upgrades or downgrades seller badges (Level 1, Level 2, Pro)."
        },
        {
          challenge: "Real-time Multi-user Collaboration",
          solution: "Leveraged Socket.io for a persistent chat system that supports real-time message delivery, online status indicators, and secure file attachments stored on AWS S3."
        },
        {
          challenge: "Complex Business Logic (VAT & Extensions)",
          solution: "Developed server-side modules to handle dynamic VAT calculation based on user location and an extension request system that recalibrates order timelines only after mutual agreement."
        }
      ]
    },
    'sonicwave-pro': {
      id: 'sonicwave-pro',
      title: "SonicWave Pro",
      description: "A premium scrollytelling product page built with Next.js 14, TypeScript, Framer Motion, and Canvas-based frame sequencing for cinematic product reveal.",
      image: "SonicWave.png",
      tech: ["Next.js", "TypeScript", "Framer Motion", "GSAP", "Tailwind CSS", "Canvas API", "ScrollTrigger", "App Router"],
      link: "https://sonicwave-animate.vercel.app/",
      githubLink: "https://github.com/AliRana30/SonicWave",
      category: "Frontend",
      featured: true,
      purpose: "Built SonicWave Pro as an immersive, high-fidelity brand storytelling experience where product identity is revealed progressively through scroll. The objective was to combine cinematic motion design, frame-perfect canvas rendering, and premium visual styling into a responsive and performance-aware landing page that feels modern, intentional, and interactive on every screen size.",
      keyFeatures: [
        "Canvas-driven frame sequence animation synced to scroll progress",
        "Promise-based preloading pipeline for all frames with loading feedback",
        "Retina-aware canvas rendering and requestAnimationFrame draw scheduling",
        "Sticky navigation with animated active link indicator",
        "Hero section with staggered reveal and dynamic scroll prompt",
        "Glassmorphism overlays that enter/exit at timeline checkpoints",
        "Animated features grid with viewport-triggered stagger transitions",
        "Infinite marquee separator and specs comparison section",
        "Magnetic CTA interactions with branded gradient accents",
        "Custom cursor and nuanced micro-motion for premium feel"
      ],
      challenges: [
        {
          challenge: "Smooth Frame Scrubbing During Fast Scroll",
          solution: "Mapped scroll progress to frame index through a spring-smoothed motion value and rendered updates inside requestAnimationFrame to avoid jank and flicker."
        },
        {
          challenge: "Canvas Sharpness and Responsive Fit Across Devices",
          solution: "Implemented devicePixelRatio-aware canvas sizing and contain-style draw calculations so frames stay sharp and visually centered on mobile, tablet, and desktop."
        },
        {
          challenge: "Heavy Asset Preload Without Visible Hitches",
          solution: "Preloaded the sequence using Promise.all, tracked loading progress, and gated reveal behind a branded loader so playback begins only when frames are ready."
        },
        {
          challenge: "Complex Motion Layering While Maintaining Performance",
          solution: "Split animation responsibilities between Framer Motion transforms, CSS compositing, and lightweight section triggers to keep interactions fluid without layout thrash."
        }
      ]
    },
    campuscore: {
      id: 'campuscore',
      title: "CampusCore LMS",
      description: "Production-oriented LMS built for scalability, security, and real-world EdTech requirements across content, payments, notifications, and analytics.",
      image: "LMS-homepage.png",
      objectPosition: "center 10%",
      tech: ["Next.js", "Node.js", "MongoDB", "Express", "Redis", "Stripe", "Cloudinary", "Socket.io", "JWT", "Tailwind CSS"],
      link: "https://lms-e-learning-system.vercel.app/",
      githubLink: "https://github.com/AliRana30/LMS",
      category: "Full-Stack",
      featured: true,
      purpose: "Designed and developed CampusCore as a production-oriented LMS focused on scalability, secure delivery, and practical EdTech workflows. The platform handles the full lifecycle of online learning, including instructor-side course publishing and monetization, student-side enrollments and progress access, and platform-level administration through analytics dashboards. It emphasizes secure content delivery, resilient payment flows, role-based access, and performance optimization so the system can support real users and real business operations.",
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
      ],
      challenges: [
        {
          challenge: "Cross-Origin Authentication",
          solution: "Configured cookies with sameSite: 'none' and secure: true for production, enabling cross-origin authentication between Vercel frontend and Render backend"
        },
        {
          challenge: "Email Template Resolution in Production",
          solution: "Fixed template path resolution using __dirname instead of process.cwd() ensuring EJS templates are found correctly in the build directory"
        },
        {
          challenge: "Real-time Notification System",
          solution: "Implemented Socket.io for instant notifications when students purchase courses or post questions, with Redis for pub/sub in production"
        },
        {
          challenge: "Stripe Payment Integration",
          solution: "Built secure payment flow with payment intent creation, client-side confirmation, and server-side verification before order creation"
        }
      ]
    },
    multimart: {
      id: 'multimart',
      title: "MultiMart",
      description: "A comprehensive full-stack multivendor e-commerce platform where vendors can list products, manage inventory, and customers can shop across multiple stores with secure payments",
      image: "multivendor.png",
      objectPosition: "center 10%",
      tech: ["React", "Node.js", "MongoDB", "Express", "Multer", "Tailwind CSS", "JWT"],
      link: "http://multimarts.vercel.app/",
      githubLink: "https://github.com/AliRana30/multimart",
      category: "Full-Stack",
      featured: true,
      purpose: "To create a complete multivendor marketplace that empowers small businesses to sell online while providing customers with a diverse shopping experience across multiple vendors.",
      keyFeatures: [
        "Multi-vendor product management with role-based access",
        "Secure payment processing with order confirmation",
        "Real-time inventory tracking and stock management",
        "Vendor dashboard with sales analytics and insights",
        "Advanced product filtering and search capabilities",
        "Complete order lifecycle management system",
        "Image optimization using Cloudinary CDN",
        "Fully responsive design across all devices"
      ],
      challenges: [
        {
          challenge: "Complex Multi-Vendor Architecture",
          solution: "Implemented role-based authentication system with separate dashboards for vendors and customers, using JWT tokens and middleware for access control"
        },
        {
          challenge: "Payment Processing Integration",
          solution: "Built secure payment gateway integration with proper error handling and order confirmation workflow"
        },
        {
          challenge: "Inventory Synchronization",
          solution: "Built real-time inventory management using MongoDB transactions to prevent overselling and maintain data consistency across vendors"
        },
        {
          challenge: "Image Storage & Performance",
          solution: "Leveraged Cloudinary for automatic image optimization, lazy loading, and responsive image delivery to reduce load times"
        }
      ]
    },
    moviemate: {
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
        "Advanced movie search with multiple filter options",
        "Detailed movie information with cast and crew",
        "Personalized recommendations based on preferences",
        "User rating and review system",
        "Watchlist functionality with local storage",
        "Real-time movie data from external APIs"
      ],
      challenges: [
        {
          challenge: "API Rate Limiting",
          solution: "Implemented caching strategy to store frequently accessed movie data, reducing API calls by 70% and improving response times"
        },
        {
          challenge: "Search Performance",
          solution: "Built indexed MongoDB collections with text search and optimized queries to deliver results under 200ms"
        },
        {
          challenge: "User Personalization",
          solution: "Created recommendation algorithm analyzing user watch history and ratings to suggest relevant content"
        }
      ]
    },
    promptly: {
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
        "Natural language understanding and processing",
        "Context-aware multi-turn conversations",
        "Real-time streaming response generation",
        "User session and conversation history",
        "Customizable AI behavior and personality",
        "Secure user authentication"
      ],
      challenges: [
        {
          challenge: "Response Latency",
          solution: "Implemented streaming responses with real-time updates to display AI output as it generates, improving perceived performance"
        },
        {
          challenge: "Context Management",
          solution: "Built efficient conversation history system storing only relevant context to maintain coherent multi-turn dialogues"
        },
        {
          challenge: "API Cost Optimization",
          solution: "Created intelligent caching for similar queries and implemented token counting to optimize API usage costs"
        }
      ]
    },
    "rental-car": {
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
        "Comprehensive car catalog with detailed specifications",
        "Real-time availability and booking calendar",
        "Dynamic pricing based on rental duration",
        "User account with booking history",
        "Mobile-responsive booking interface",
        "Secure payment processing"
      ],
      challenges: [
        {
          challenge: "Booking Conflicts",
          solution: "Implemented date range validation and real-time availability checking to prevent double bookings"
        },
        {
          challenge: "Pricing Calculations",
          solution: "Built flexible pricing engine handling seasonal rates, duration discounts, and additional service charges"
        },
        {
          challenge: "Mobile Experience",
          solution: "Designed touch-optimized interface with simplified booking flow specifically for mobile users"
        }
      ]
    }
  };

  const project = projects[id];

  const getTechIcon = (tech) => {
    const iconMap = {
      'react': <SiReact className="w-4 h-4 md:w-5 md:h-5" />,
      'react native': <SiReact className="w-4 h-4 md:w-5 md:h-5" />,
      'expo': <Zap className="w-4 h-4 md:w-5 md:h-5" />,
      'typescript': <SiTypescript className="w-4 h-4 md:w-5 md:h-5" />,
      'next.js': <SiNextdotjs className="w-4 h-4 md:w-5 md:h-5" />,
      'node.js': <SiNodedotjs className="w-4 h-4 md:w-5 md:h-5" />,
      'mongodb': <SiMongodb className="w-4 h-4 md:w-5 md:h-5" />,
      'express': <SiExpress className="w-4 h-4 md:w-5 md:h-5" />,
      'tailwind css': <SiTailwindcss className="w-4 h-4 md:w-5 md:h-5" />,
      'multer': <SiCloudinary className="w-4 h-4 md:w-5 md:h-5" />,
      'cloudinary': <SiCloudinary className="w-4 h-4 md:w-5 md:h-5" />,
      'jwt': <SiJsonwebtokens className="w-4 h-4 md:w-5 md:h-5" />,
      'redis': <SiRedis className="w-4 h-4 md:w-5 md:h-5" />,
      'socket.io': <SiSocketdotio className="w-4 h-4 md:w-5 md:h-5" />,
      'stripe': <SiStripe className="w-4 h-4 md:w-5 md:h-5" />,
      'redux toolkit': <SiRedux className="w-4 h-4 md:w-5 md:h-5" />,
      'paypal': <SiPaypal className="w-4 h-4 md:w-5 md:h-5" />,
      'aws s3': <SiAmazons3 className="w-4 h-4 md:w-5 md:h-5" />,
      'shadcn/ui': <SiShadcnui className="w-4 h-4 md:w-5 md:h-5" />,
      'framer motion': <SiFramer className="w-4 h-4 md:w-5 md:h-5" />,
      'docker': <SiDocker className="w-4 h-4 md:w-5 md:h-5" />,
      'google maps': <SiGooglemaps className="w-4 h-4 md:w-5 md:h-5" />,
      'supabase': <SiMongodb className="w-4 h-4 md:w-5 md:h-5" />,
      'gemini api': <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />,
      'prisma': <SiPrisma className="w-4 h-4 md:w-5 md:h-5" />
    };

    return iconMap[tech.toLowerCase()] || <Code2 className="w-4 h-4 md:w-5 md:h-5" />;
  };

  const getTechColor = (tech) => {
    const colorMap = {
      'react': 'text-[#61DAFB]',
      'react native': 'text-[#61DAFB]',
      'expo': 'text-primary',
      'typescript': 'text-[#3178C6]',
      'next.js': 'text-primary',
      'framer motion': 'text-[#0055FF]',
      'gsap': 'text-[#88CE02]',
      'canvas api': 'text-[#888888]',
      'scrolltrigger': 'text-[#84CC16]',
      'app router': 'text-[#888888]',
      'node.js': 'text-[#339933]',
      'mongodb': 'text-[#47A248]',
      'express': 'text-[#888888]',
      'api integration': 'text-purple-400',
      'ai api': 'text-indigo-400',
      'tailwind css': 'text-[#06B6D4]',
      'cloudinary': 'text-[#3448C5]',
      'jwt': 'text-pink-400',
      'redis': 'text-[#DC382D]',
      'socket.io': 'text-primary',
      'stripe': 'text-[#635BFF]',
      'redux toolkit': 'text-[#764ABC]',
      'paypal': 'text-[#00457C]',
      'aws s3': 'text-[#FF9900]',
      'shadcn/ui': 'text-[#888888]',
      'docker': 'text-[#2496ED]',
      'google maps': 'text-[#4285F4]',
      'supabase': 'text-[#3ECF8E]',
      'gemini api': 'text-[#1A73E8]',
      'prisma': 'text-[#5A67D8]'
    };

    return colorMap[tech.toLowerCase()] || 'text-[#888888]';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-elevated border border-subtle text-primary px-6 py-3 hover:bg-primary transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-4 md:right-10 w-48 md:w-72 h-48 md:h-72 border border-subtle rotate-12"></div>
          <div className="absolute bottom-20 left-4 md:left-10 w-32 md:w-48 h-32 md:h-48 border border-subtle rounded-full"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl"
          >
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors group text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium tracking-tight">Back to Projects</span>
            </button>
          </motion.div>

          {/* Hero Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-8 md:pb-12">
            <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="relative h-[400px] md:h-[650px] overflow-hidden border border-subtle bg-surface">
                  <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <img
                      src={`/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                      style={{ objectPosition: project.objectPosition || 'center' }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x400/f5f5f5/999999?text=Project';
                      }}
                    />
                  </motion.div>
                  {project.featured && (
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-primary text-primary border border-default px-2 py-1 md:px-3 md:py-1.5 text-xs font-bold mono">
                      FEATURED
                    </div>
                  )}
                </div>

              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-3 space-y-6 md:space-y-8"
              >
                {/* Title */}
                <div>
                  <div className="inline-block px-2.5 py-1 md:px-3 md:py-1 bg-elevated border border-subtle text-secondary text-xs font-medium mono mb-3 md:mb-4">
                    {project.category}
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 break-words">
                    {project.title}
                  </h1>
                  <p className="text-base md:text-lg text-secondary leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xs md:text-sm font-semibold text-tertiary mb-3 md:mb-4 tracking-widest uppercase mono">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className={`flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-3 md:py-2 border border-subtle bg-surface hover:border-default transition-all ${getTechColor(tech)}`}
                      >
                        {getTechIcon(tech)}
                        <span className="text-xs md:text-sm font-medium text-primary">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="border border-subtle bg-surface mb-6 md:mb-8 overflow-x-auto px-4 md:px-6">
              <div className="flex gap-4 md:gap-8 min-w-max sm:min-w-0">
                {['overview', 'features', 'challenges'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${activeTab === tab
                      ? 'text-primary'
                      : 'text-tertiary hover:text-secondary'
                      }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="pb-12 md:pb-20"
            >
              {activeTab === 'overview' && (
                <div className="space-y-6 md:space-y-8 max-w-4xl">
                  <div>
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <h3 className="text-lg md:text-xl font-semibold text-primary">Project Purpose</h3>
                    </div>
                    <p className="text-sm md:text-base text-secondary leading-relaxed bg-surface p-4 md:p-6 border border-subtle border-l-2 border-l-primary shadow-sm">
                      {project.purpose}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-6">
                    <div className="text-center p-4 md:p-6 border border-subtle bg-surface hover:border-default transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">{project.tech.length}</div>
                      <div className="text-[10px] md:text-xs text-tertiary font-bold mono uppercase tracking-widest">Technologies</div>
                    </div>
                    <div className="text-center p-4 md:p-6 border border-subtle bg-surface hover:border-default transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">{project.keyFeatures.length}</div>
                      <div className="text-[10px] md:text-xs text-tertiary font-bold mono uppercase tracking-widest">Features</div>
                    </div>
                    <div className="text-center p-4 md:p-6 border border-subtle bg-surface hover:border-default transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">{project.challenges.length}</div>
                      <div className="text-[10px] md:text-xs text-tertiary font-bold mono uppercase tracking-widest">Challenges</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="max-w-4xl">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-semibold text-primary">Key Features</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    {project.keyFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 md:gap-3 p-3 md:p-4 border border-subtle hover:border-default transition-all bg-surface"
                      >
                        <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-elevated flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] md:text-xs text-tertiary font-bold mono">FEATURE {String(index + 1).padStart(2, '0')}</div>
                          <p className="text-xs md:text-sm text-secondary leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'challenges' && (
                <div className="max-w-5xl">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-semibold text-primary">Challenges & Solutions</h3>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    {project.challenges.map((item, index) => (
                      <motion.div
                        key={item.challenge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-subtle hover:border-default transition-all overflow-hidden bg-surface"
                      >
                        <div className="px-4 md:px-6 py-2 border-b border-subtle bg-elevated">
                          <span className="text-[10px] md:text-xs text-tertiary font-bold mono">CASE {String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="grid md:grid-cols-2">
                          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-subtle">
                            <div className="flex items-start gap-2 md:gap-3">
                              <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500/60 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-primary mb-1 md:mb-2 text-sm md:text-base tracking-tight">Challenge</h4>
                                <p className="text-xs md:text-sm text-secondary leading-relaxed font-light">
                                  {item.challenge}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 md:p-6 bg-elevated/30">
                            <div className="flex items-start gap-2 md:gap-3">
                              <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-green-600/60 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-primary mb-1 md:mb-2 text-sm md:text-base tracking-tight">Solution</h4>
                                <p className="text-xs md:text-sm text-secondary leading-relaxed font-light">
                                  {item.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;