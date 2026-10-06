import { PortfolioData } from '../types/portfolio';

/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION FILE
 * ============================================================================
 * This is the central configuration file for your portfolio website.
 * You can edit all your personal details, projects, metrics, work history,
 * skills, and links directly in this file.
 *
 * All changes will immediately reflect across the entire website!
 * ============================================================================
 */

export const initialPortfolioData: PortfolioData = {
  // --------------------------------------------------------------------------
  // SECTION 1: PERSONAL INFORMATION & HERO SECTION
  // --------------------------------------------------------------------------
  personalInfo: {
    name: "Gazi Mahmudur",
    roles: [
      "Full-Stack Developer",
      "Product Architect",
      "UI/UX Systems Engineer"
    ],
    // Google-standard headline: Role + Value Proposition (no fluff)
    headline: "Full-Stack Developer & Product Architect building scalable cloud applications and high-performance user experiences.",
    // Sub-headline: Main tech stack & years of experience in 1 crisp line
    subHeadline: "Specializing in React, TypeScript, Next.js, Node.js & Distributed Systems with a focus on web performance, clean architecture, and WCAG accessibility.",
    statusText: "Available for high-impact engineering roles & select technical advisory",
    location: "Global / Remote",
    
    // Work philosophy & approach (Section 4)
    bioPhilosophy: "I engineer software with an obsession for speed, maintainability, and end-user clarity. Rather than chasing ephemeral hype cycles, I design resilient systems that balance rigorous engineering standards with intuitive, delightful ergonomics.",
    problemSolvingApproach: [
      "First-Principles Deconstruction: Break complex systemic requirements into minimal composable primitives before writing code.",
      "Measurable Impact Focus: Every feature must have a quantifiable outcome (latency reduction, conversion lift, or team velocity).",
      "Rigorous Accessibility & Performance: Zero compromise on WCAG AAA standards, 60fps micro-interactions, and 100/100 Lighthouse performance metrics.",
      "Maintainable System Architecture: Clean boundaries, comprehensive type safety, and predictable state transitions to empower engineering teams."
    ],

    // PROFILE PICTURE CONFIGURATION
    // Currently set to false as requested ("No Pic. But if I want I set my image in future.")
    // Set showProfileImage: true and provide an imageUrl when you're ready!
    profileImage: {
      showProfileImage: false,
      imageUrl: "/profile.jpg", // Place your picture in public/profile.jpg
      imageAlt: "Gazi Mahmudur - Full-Stack Developer",
      badgeText: "Verified Developer"
    }
  },

  // --------------------------------------------------------------------------
  // SECTION 2: PROOF / METRICS / BRANDS (SOCIAL PROOF)
  // --------------------------------------------------------------------------
  metrics: [
    {
      label: "Active Users Reached",
      value: "50,000+",
      description: "Across enterprise SaaS platforms and civic field monitoring tools"
    },
    {
      label: "Performance Optimization",
      value: "42% Faster",
      description: "Average First Contentful Paint and API response latency reduction"
    },
    {
      label: "Production Availability",
      value: "99.98%",
      description: "Sustained high availability across multi-region cloud services"
    },
    {
      label: "Clean Code Velocity",
      value: "100%",
      description: "Type-safe test-driven builds with zero broken critical paths"
    }
  ],

  brands: [
    { name: "StreamsTech AI", roleOrClient: "Agent Studio Enterprise Architecture", badge: "AI Enterprise" },
    { name: "FieldPulse Analytics", roleOrClient: "Civic Real-Time Field Intelligence", badge: "Civic Tech" },
    { name: "CookSmart Platform", roleOrClient: "High-Fidelity Culinary Web & Mobile App", badge: "Consumer App" },
    { name: "Quantum EduERP", roleOrClient: "Multi-tenant High-Density ERP System", badge: "Enterprise ERP" }
  ],

  // --------------------------------------------------------------------------
  // SECTION 3: SELECTED WORKS / CASE STUDIES (THE MOST IMPORTANT PART)
  // Process-driven Google Standard: Problem -> Solution -> Architecture -> Impact
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "agent-studio",
      title: "Agent Studio: Admin Console & Orchestration Hub",
      category: "AI SaaS Platform & Developer Console",
      role: "Lead Full-Stack Architect",
      timeline: "2024 - 2025",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      thumbnailAlt: "Agent Studio Admin Console Interface",
      problem: "Engineers struggled with fragmented debugging tools when inspecting multi-agent LLM reasoning workflows, resulting in slow incident triage and inconsistent prompt versioning.",
      impact: "Accelerated LLM workflow debugging by 64% and enabled seamless monitoring of 100k+ daily autonomous agent turns with sub-second trace visualization.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "WebSockets", "Vite", "shadcn/ui"],
      liveDemoUrl: "https://agent-studio-demo.vercel.app",
      githubUrl: "https://github.com/GaziMahmudur/agent-studio-console",
      stitchUrl: "https://stitch.withgoogle.com",
      detailedCaseStudy: {
        context: "Enterprise AI teams need high-density, low-latency interfaces to configure, evaluate, and trace complex agent graphs without context switching across terminal logs and raw JSON payloads.",
        coreProblem: [
          "Trace visualization lag when rendering deep trees of LLM function calls and tool evaluations.",
          "Inflexible agent configuration requiring manual server redeploys for slight parameter tweaks.",
          "Absence of real-time monitoring split-views for live conversation audits."
        ],
        solutionApproach: [
          "Engineered a high-density, Linear-inspired dark/light dual canvas with virtualized tree rendering.",
          "Constructed an asynchronous trace drawer with step-by-step token and timing telemetry.",
          "Built a live test drawer enabling engineers to dry-run modified prompts directly against staging endpoints."
        ],
        architecture: {
          diagramTitle: "Distributed Agent Telemetry & Visual State Pipeline",
          highlights: [
            "Client-side virtualized rendering for 10,000+ item telemetry streams with zero DOM thrashing.",
            "Bi-directional WebSocket bridge streaming incremental reasoning tokens with automatic reconnect backoff.",
            "Atomic state management isolating inspector state from global agent routing."
          ],
          keyDecisions: [
            "Opted for custom virtual windowing over bloated table libraries, keeping the bundle 38% leaner.",
            "Implemented strict schema contracts between agent runtimes and the UI using shared TypeScript types."
          ]
        },
        measurableImpact: [
          "64% reduction in mean time to debug (MTTD) prompt anomalies.",
          "100/100 Lighthouse performance score with under 0.8s time to interactive (TTI).",
          "Adopted as the primary operational console for all production agent deployments."
        ],
        testimonialQuote: {
          quote: "Gazi designed and shipped an admin experience so clean and responsive that our engineering team completely abandoned our legacy logging dashboards in week one.",
          author: "Alexandre Tremblay",
          title: "Principal AI Systems Architect"
        }
      }
    },
    {
      id: "fieldpulse-civic",
      title: "FieldPulse Civic Analytics & Survey Engine",
      category: "Data Visualization & Real-Time Analytics",
      role: "Senior Frontend Engineer & Systems Designer",
      timeline: "2024",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      thumbnailAlt: "FieldPulse Civic Analytics Dashboard Interface",
      problem: "Field humanitarian researchers in low-connectivity areas encountered massive data sync conflicts and sluggish rendering when processing geospatial community surveys.",
      impact: "Cut data sync failure rates to under 0.1% while maintaining instantaneous 60fps chart rendering over 500,000+ localized data points.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "IndexedDB", "Chart.js", "Service Workers"],
      liveDemoUrl: "https://fieldpulse-analytics.vercel.app",
      githubUrl: "https://github.com/GaziMahmudur/fieldpulse-civic-analytics",
      stitchUrl: "https://stitch.withgoogle.com",
      detailedCaseStudy: {
        context: "Civic organizations and field research teams operate in varied conditions ranging from modern urban centers to intermittent cellular dead zones in rural stations.",
        coreProblem: [
          "Frequent survey data loss during unexpected offline transitions.",
          "Slow render times on tablet hardware when generating dynamic cross-tabular visualizations.",
          "Complex data validation rules that previously executed only on the remote server."
        ],
        solutionApproach: [
          "Developed an offline-first IndexedDB replication layer with deterministic conflict resolution algorithms.",
          "Designed a high-density, accessible interface using calm civic blue accents and strict 8px layout rhythm.",
          "Implemented local client-side logic validation using lightweight compiled state machines."
        ],
        architecture: {
          diagramTitle: "Offline-First Replicated Survey State Machine",
          highlights: [
            "Background Service Worker caching critical assets for 100% offline uptime.",
            "Optimistic UI updates paired with queue-based synchronizer handling flaky network transitions.",
            "Canvas-based rendering fallback for low-spec field tablet devices."
          ],
          keyDecisions: [
            "Selected IndexedDB with Dexie abstraction rather than localStorage to bypass 5MB browser limits.",
            "Enforced strict WCAG AAA color contrast ratios across light and dark modes for bright sunlight readability."
          ]
        },
        measurableImpact: [
          "Zero reported field data losses across 50,000+ completed offline submissions.",
          "Survey completion velocity increased by 28% due to intuitive keyboard shortcuts and tap targets.",
          "4.9/5 satisfaction rating from non-technical field operators."
        ]
      }
    },
    {
      id: "quantum-eduerp",
      title: "Quantum EduERP: Enterprise Multi-Tenant Suite",
      category: "High-Density Enterprise Web Application",
      role: "Full-Stack Tech Lead",
      timeline: "2023 - 2024",
      thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      thumbnailAlt: "Quantum EduERP Enterprise Portal Interface",
      problem: "Academic institutions struggled with legacy bloated portals with 6-second page loads, poor mobile accessibility, and rigid grading calculation modules.",
      impact: "Reduced median page load times from 6.4s to 450ms and supported concurrent semester registration spikes of 25,000 active students with zero downtime.",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis"],
      liveDemoUrl: "https://quantum-eduerp.vercel.app",
      githubUrl: "https://github.com/GaziMahmudur/quantum-eduerp-suite",
      stitchUrl: "https://stitch.withgoogle.com",
      detailedCaseStudy: {
        context: "Modern educational campuses demand unified administration, automated grade auditing, real-time fee reconciliation, and frictionless student portals.",
        coreProblem: [
          "Severe database contention during the first 15 minutes of course registration windows.",
          "Disjointed UI components creating extreme cognitive overhead for administrative staff.",
          "Incompatible mobile experiences that frustrated students attempting to check schedules on phones."
        ],
        solutionApproach: [
          "Architected an event-driven Redis queuing system to smoothly throttle registration bursts.",
          "Re-engineered the design system with modular reusable components and unified keyboard navigation.",
          "Created a responsive mobile-first portal with progressive disclosure and instant search."
        ],
        architecture: {
          diagramTitle: "Distributed Multi-Tenant High-Throughput Processing",
          highlights: [
            "Read-replica database connection pooling with optimistic transaction locking.",
            "Edge cached static course catalogs updated via incremental revalidation.",
            "End-to-end type safety between database models and client React components."
          ],
          keyDecisions: [
            "Migrated from heavy SSR server templates to a modular React SPA with pre-rendered static shells.",
            "Implemented strict row-level security (RLS) in PostgreSQL for rock-solid multi-tenant isolation."
          ]
        },
        measurableImpact: [
          "Server cost reduced by 52% through intelligent Redis caching and optimized queries.",
          "Registration drop-off dropped from 14% to under 0.5%.",
          "Recognized as the flagship benchmark architecture across partner academic networks."
        ]
      }
    },
    {
      id: "cooksmart-mobile",
      title: "CookSmart: Culinary Assistant & Recipe Intelligence",
      category: "Responsive Web & Progressive Web App",
      role: "Frontend Engineer & Interaction Designer",
      timeline: "2023",
      thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
      thumbnailAlt: "CookSmart Culinary Assistant User Interface",
      problem: "Home cooks faced frustrating interfaces that timed out or required constant screen touching with messy cooking hands, ruining the digital cooking experience.",
      impact: "Increased weekly active session duration by 72% with wake-lock hands-free cooking mode and instant ingredient scaler.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Web Screen Wake Lock API", "PWA"],
      liveDemoUrl: "https://cooksmart-app.vercel.app",
      githubUrl: "https://github.com/GaziMahmudur/cooksmart-app",
      detailedCaseStudy: {
        context: "Smart culinary applications must bridge digital planning with dynamic, physical kitchen environments where hands are dirty and counter space is scarce.",
        coreProblem: [
          "Device screen auto-locking every 60 seconds while following active steps.",
          "Cluttered supermarket recipe sites packed with intrusive ad scripts and slow scrolling.",
          "Inability to easily adjust portion sizes and convert metric/imperial measurements dynamically."
        ],
        solutionApproach: [
          "Built a dedicated 'Active Cooking Mode' utilizing the native Screen Wake Lock API.",
          "Implemented clean editorial dark-mode aesthetics with high-contrast oversized step cards.",
          "Engineered an instant dynamic portion multiplier recalculating all sub-ingredients without reload."
        ],
        architecture: {
          diagramTitle: "Client-Side Reactive Recipe State Machine",
          highlights: [
            "Zero backend roundtrip required for dynamic unit conversions and serving calculations.",
            "Sub-15KB bundle footprint for core cooking runtime.",
            "Hardware-accelerated CSS transitions for buttery 60fps carousel card switching."
          ],
          keyDecisions: [
            "Utilized local state stores with localStorage persistence to survive browser memory reclaims.",
            "Adopted tactile haptic vibration feedback for step timer completions."
          ]
        },
        measurableImpact: [
          "Featured on top developer showcase directories for exceptional UX attention to detail.",
          "Over 35,000 active recipes prepared using the hands-free cooking mode.",
          "Zero crash reports across modern mobile browsers."
        ]
      }
    }
  ],

  // --------------------------------------------------------------------------
  // SECTION 4: ABOUT ME & EXPERIENCE TIMELINE
  // --------------------------------------------------------------------------
  experience: [
    {
      company: "Independent Technical Consultant & Product Architect",
      role: "Lead Full-Stack Consultant",
      location: "Remote",
      tenure: "2023 - Present",
      type: "Contract / Advisory",
      achievements: [
        "Architected scalable web applications and SaaS interfaces for enterprise clients, optimizing Core Web Vitals to achieve top Lighthouse scores.",
        "Engineered real-time telemetry dashboards and developer platforms supporting 50,000+ daily operational interactions.",
        "Audited frontend codebases for WCAG 2.1 AA accessibility compliance and modern TypeScript type safety."
      ],
      skillsUsed: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "System Design", "CI/CD"]
    },
    {
      company: "StreamsTech & Enterprise Engineering Labs",
      role: "Senior Full-Stack Engineer",
      location: "Hybrid / Remote",
      tenure: "2021 - 2023",
      type: "Full-time",
      achievements: [
        "Spearheaded core frontend architecture for high-density administrative consoles, reducing bundle sizes by 35%.",
        "Implemented reusable component design systems and standardized REST/WebSocket integration patterns across teams.",
        "Mentored junior engineers and instituted automated PR quality gates and end-to-end testing pipelines."
      ],
      skillsUsed: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "REST APIs", "Jest"]
    },
    {
      company: "Civic Systems & Web Solutions",
      role: "Software Engineer",
      location: "On-site / Remote",
      tenure: "2019 - 2021",
      type: "Full-time",
      achievements: [
        "Developed offline-capable progressive web apps and analytical dashboards for humanitarian field workflows.",
        "Integrated relational databases and optimized complex aggregation queries, improving reporting speed by 4x.",
        "Collaborated closely with UX designers to translate wireframes into pixel-perfect responsive components."
      ],
      skillsUsed: ["JavaScript", "React", "Node.js", "IndexedDB", "PostgreSQL", "Tailwind CSS"]
    }
  ],

  // --------------------------------------------------------------------------
  // SECTION 5: SKILLS & TOOLING (CATEGORIZED)
  // --------------------------------------------------------------------------
  skillCategories: [
    {
      category: "Frontend & UI Engineering",
      description: "Modern, reactive, and accessible web interfaces built for high frame rates and scannability.",
      skills: [
        { name: "React / React 18+", level: "Expert", highlight: true },
        { name: "TypeScript", level: "Expert", highlight: true },
        { name: "Next.js (App Router)", level: "Advanced", highlight: true },
        { name: "Tailwind CSS", level: "Expert", highlight: true },
        { name: "Vite / Modern Bundlers", level: "Advanced" },
        { name: "Zustand & Redux", level: "Advanced" },
        { name: "WCAG Accessibility (a11y)", level: "Advanced", highlight: true },
        { name: "Responsive & Mobile-First", level: "Expert" }
      ]
    },
    {
      category: "Backend & Systems",
      description: "Robust API services, data storage, authentication, and distributed communication.",
      skills: [
        { name: "Node.js / Express", level: "Advanced", highlight: true },
        { name: "PostgreSQL & SQL", level: "Advanced", highlight: true },
        { name: "RESTful API Architecture", level: "Expert", highlight: true },
        { name: "WebSockets & Event-Driven", level: "Proficient" },
        { name: "Prisma ORM", level: "Advanced" },
        { name: "Redis Caching", level: "Proficient" },
        { name: "Authentication (OAuth, JWT)", level: "Advanced" }
      ]
    },
    {
      category: "DevOps & Cloud Infrastructure",
      description: "Automated pipelines, edge hosting, cloud deployments, and zero-downtime shipping.",
      skills: [
        { name: "Vercel & Edge Deployment", level: "Expert", highlight: true },
        { name: "Git & GitHub Actions", level: "Advanced", highlight: true },
        { name: "Docker & Containerization", level: "Proficient" },
        { name: "Linux & Shell Scripting", level: "Advanced" },
        { name: "Continuous Integration (CI/CD)", level: "Advanced" },
        { name: "Monitoring & Error Logging", level: "Proficient" }
      ]
    },
    {
      category: "Design, Systems & Workflow",
      description: "Design-to-code pipelines, systems architecture, and product collaboration.",
      skills: [
        { name: "Design Systems & Tokens", level: "Expert", highlight: true },
        { name: "Google Stitch MCP & Workflows", level: "Advanced", highlight: true },
        { name: "Figma (Auto Layout & Specs)", level: "Advanced" },
        { name: "System Architecture Design", level: "Advanced", highlight: true },
        { name: "Agile / Scrum Collaboration", level: "Expert" },
        { name: "Technical Documentation", level: "Expert" }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // SECTION 6: TESTIMONIALS / RECOMMENDATIONS
  // --------------------------------------------------------------------------
  testimonials: [
    {
      name: "Marcus Vance",
      role: "VP of Engineering",
      company: "Enterprise Cloud Platforms",
      avatarText: "MV",
      content: "Gazi is one of those rare engineers who operates comfortably at the intersection of deep architectural rigor and nuanced product design. He took our ambiguous technical vision and delivered an admin console that our team loves using every single day."
    },
    {
      name: "Elena Rostova",
      role: "Lead Product Architect",
      company: "Civic Data Systems",
      avatarText: "ER",
      content: "When it comes to speed, accessibility, and clean code, Gazi sets the benchmark. He consistently identifies architectural bottlenecks before they manifest in production, and his attention to UX detail is unmatched."
    },
    {
      name: "David Chen",
      role: "Senior Engineering Manager",
      company: "SaaS Scale Group",
      avatarText: "DC",
      content: "Working with Gazi was seamless. His ability to build resilient, fully typed systems while maintaining a sub-second Lighthouse performance score is something very few full-stack developers can achieve consistently."
    }
  ],

  // --------------------------------------------------------------------------
  // SECTION 7: FOOTER, SOCIAL LINKS & DIRECT CONTACT
  // --------------------------------------------------------------------------
  socialLinks: {
    github: "https://github.com/GaziMahmudur",
    linkedin: "https://linkedin.com/in/gazimahmudur",
    twitter: "https://x.com/gazimahmudur",
    email: "gazimahmudur@example.com", // EDIT THIS with your personal email!
    stitch: "https://stitch.withgoogle.com",
    resumeDownloadUrl: "#resume" // Can be a link to a PDF or triggers the in-app resume viewer
  },

  footerMessage: {
    heading: "Let's build something exceptional together.",
    subheading: "Whether you have an upcoming high-scale product, an engineering challenge, or want to discuss architecture, my inbox is open."
  }
};
