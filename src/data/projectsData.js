export const projectsData = {
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
      "Automated seller leveling system via background Cron schedulers",
      "Dual gateway checkout (Stripe and PayPal) for global compliance",
      "Resolution center with automated dispute escalation workflows",
      "Asset uploads and file versioning using AWS S3 & Cloudinary",
      "Optimized query performance and aggregation indices in MongoDB"
    ],
    challenges: [
      {
        challenge: "Secure Escrow-Style Milestones",
        solution: "Designed database transaction pipelines that secure funds upon milestone activation, releasing payouts only when deliverables are formally signed off by buyers or resolved through the dispute flow."
      },
      {
        challenge: "Real-time Messaging Stability",
        solution: "Configured a Socket.io cluster using Redis adapter to synchronise workspace chat events, file uploads, and online statuses with low latency."
      },
      {
        challenge: "Seller Activity Schedulers",
        solution: "Created node-cron jobs that query vendor stats nightly, updating seller tiers (Level 1, 2, Top Rated) dynamically depending on milestones completed, rating averages, and response rates."
      }
    ]
  },
  campuscore: {
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
  "sonicwave-pro": {
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
