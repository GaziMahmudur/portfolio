export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface BrandLogo {
  name: string;
  roleOrClient: string;
  badge?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  role: string;
  timeline: string;
  thumbnail: string;
  thumbnailAlt: string;
  problem: string; // 2 lines
  impact: string; // e.g., Increased retention by 18%
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  stitchUrl?: string;
  // Detailed Case Study structure (Google standard: Problem -> Solution -> Architecture -> Impact)
  detailedCaseStudy: {
    context: string;
    coreProblem: string[];
    solutionApproach: string[];
    architecture: {
      diagramTitle?: string;
      highlights: string[];
      keyDecisions: string[];
    };
    measurableImpact: string[];
    testimonialQuote?: {
      quote: string;
      author: string;
      title: string;
    };
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  tenure: string;
  type: string; // "Full-time" | "Contract" | etc.
  achievements: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced" | "Expert" | "Proficient"
    highlight?: boolean;
  }[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatarText?: string;
  avatarUrl?: string;
  content: string;
  verifiedLinkedin?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
  stitch?: string;
  resumeDownloadUrl?: string;
}

export interface ProfileImageConfig {
  showProfileImage: boolean; // default false as requested: "No Pic. But if I want I set my image in future."
  imageUrl?: string;
  imageAlt?: string;
  badgeText?: string; // e.g., "Open to work"
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    roles: string[]; // e.g. ["Full-Stack Developer", "Product Architect"]
    headline: string; // Section 1 Google-standard headline
    subHeadline: string; // Main tech stack or experience in 1 line
    statusText: string; // E.g., "Available for senior roles & high-impact projects"
    location: string;
    bioPhilosophy: string; // Section 4 work philosophy
    problemSolvingApproach: string[];
    profileImage: ProfileImageConfig;
  };
  metrics: Metric[];
  brands: BrandLogo[];
  projects: CaseStudy[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
  testimonials: Testimonial[];
  socialLinks: SocialLinks;
  footerMessage: {
    heading: string;
    subheading: string;
  };
}
