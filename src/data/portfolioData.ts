import {
  Project,
  SkillCategory,
  WorkExperience,
  EducationItem,
  Certification,
  ContactInfo,
} from "../types";

export const personalDetails = {
  name: "Dina Muravska",
  position: "Full-Stack Developer",
  location: "Ukraine",
  status: "Available for Hire",
  summary: `Full-Stack Developer focused on building clean, responsive, and user-centered web interfaces. Experienced in developing modern web applications using React, Next.js, TypeScript, SCSS, and REST API integration. Comfortable working in collaborative environments, writing maintainable code, and continuously improving full-stack development skills.`,
  languages: [
    { name: "Ukrainian", level: "Native" },
    { name: "English", level: "A2 (Pre-Intermediate)" },
  ],
  softSkills: [
    "Teamwork",
    "Self-management",
    "Task Prioritization",
    "Desire to Learn",
  ],
};

export const contactInfo: ContactInfo = {
  phone: "+380 66 468 21 76",
  phoneRaw: "+380664682176",
  email: "dina.muravska.25@gmail.com",
  telegram: "https://t.me/dina_muravska",
  linkedin: "https://linkedin.com/in/dina-muravska",
  github: "https://github.com/dina-muravska",
};

export const projectsData: Project[] = [
  {
    id: "tasteorama",
    title: "Tasteorama",
    year: "2026",
    shortDescription:
      "Full-stack recipe management application with user authentication, personalized profiles, favorites, and advanced search filters.",
    fullDescription:
      "Tasteorama is a full-featured web application designed for food enthusiasts to discover, create, bookmark, and manage gourmet recipes. Features include secure JWT authentication, rich recipe cataloging, stateful user favorites, custom tags, and responsive search filters.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Zustand",
      "TanStack Query",
      "Formik",
      "Yup",
      "Axios",
      "SCSS",
    ],
    role: "Scrum Master & Full-Stack Developer",
    keyContributions: [
      "Coordinated Agile workflows using GitHub Projects for task breakdown and sprint planning.",
      "Developed frontend features with React and Next.js, establishing scalable component architecture.",
      "Contributed to Node.js / Express backend REST APIs and database models.",
      "Implemented authentication state management with Zustand, Formik validation, and TanStack Query caching.",
    ],
    liveDemoUrl: "https://github.com/dina-muravska",
    githubFrontendUrl: "https://github.com/dina-muravska",
    githubBackendUrl: "https://github.com/dina-muravska",
    category: "fullstack",
    featured: true,
    image: "/images/projects/tasteorama.webp",
    imageBg:
      "linear-gradient(135deg, rgba(193, 18, 31, 0.2) 0%, rgba(15, 15, 15, 0.95) 100%)",
  },
  {
    id: "travel-trucks",
    title: "Travel-Trucks",
    year: "2026",
    shortDescription:
      "Camper rental web platform allowing users to browse, filter, explore detailed vehicle specs, reviews, and complete bookings.",
    fullDescription:
      "Travel-Trucks connects road-trip lovers with premium camper vans. The application delivers an intuitive search engine with multi-criteria filtering (transmission, engine type, vehicle equipment), interactive modal reviews, and a streamlined booking form.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Axios",
      "SCSS",
      "HTML5",
    ],
    role: "Full-Stack Developer",
    keyContributions: [
      "Developed a responsive user interface optimized across mobile and desktop breakpoints.",
      "Implemented multi-field filter forms and dynamic camper vehicle pagination.",
      "Built interactive modal dialogs for reviews, specs overview, and booking validation.",
      "Leveraged TanStack Query and Axios for optimal data prefetching and state synchronization.",
    ],
    liveDemoUrl: "https://github.com/dina-muravska",
    githubFrontendUrl: "https://github.com/dina-muravska",
    category: "frontend",
    featured: true,
    image: "/images/projects/travel-trucks.webp",
    imageBg:
      "linear-gradient(135deg, rgba(193, 18, 31, 0.15) 0%, rgba(15, 15, 15, 0.95) 100%)",
  },
  {
    id: "notehub",
    title: "NoteHub",
    year: "2026",
    shortDescription:
      "Full-stack note management app for creating, editing, categorizing, and organizing personal thoughts and tasks securely.",
    fullDescription:
      "NoteHub is a productivity tool designed for fast note-taking. Users can register, log in, manage personal notes with Markdown support, filter by tags, and paginate through historical entries.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Axios",
      "Cookies",
      "React Paginate",
      "SCSS",
    ],
    role: "Full-Stack Developer",
    keyContributions: [
      "Built clean user interface components for creating, editing, and deleting notes.",
      "Implemented secure cookie-based session handling and authentication views.",
      "Designed responsive grid layouts with custom pagination using React Paginate.",
      "Optimized backend API interactions using TanStack Query mutation hooks.",
    ],
    liveDemoUrl: "https://github.com/dina-muravska",
    githubFrontendUrl: "https://github.com/dina-muravska",
    category: "fullstack",
    featured: true,
    image: "/images/projects/notehub.webp",
    imageBg:
      "linear-gradient(135deg, rgba(193, 18, 31, 0.18) 0%, rgba(15, 15, 15, 0.95) 100%)",
  },
  {
    id: "coffeevibes",
    title: "CoffeeVibes",
    year: "2026",
    shortDescription:
      "Responsive landing page showcasing specialty coffee products, roast categories, and an interactive customer experience.",
    fullDescription:
      "CoffeeVibes is an aesthetic landing page created to showcase artisanal coffee blends. Features subtle entrance animations, interactive product cards, location information, and an interactive menu drawer.",
    techStack: ["HTML5", "CSS3", "SCSS", "JavaScript (ES6+)"],
    role: "Full-Stack Developer",
    keyContributions: [
      "Developed pixel-perfect, mobile-first responsive landing sections with semantic HTML5.",
      "Structured maintainable CSS3 & SCSS styles with custom mixins and variables.",
      "Added vanilla JavaScript interactive elements including smooth scroll, mobile menu, and order modals.",
    ],
    liveDemoUrl: "https://github.com/dina-muravska",
    githubFrontendUrl: "https://github.com/dina-muravska",
    category: "landing",
    featured: false,
    image: "/images/projects/coffeevibes.webp",
    imageBg:
      "linear-gradient(135deg, rgba(193, 18, 31, 0.12) 0%, rgba(15, 15, 15, 0.95) 100%)",
  },
  {
    id: "artistshub",
    title: "ArtistsHub",
    year: "2026",
    shortDescription:
      "Music artist discovery platform for browsing musician biographies, streaming audio previews, and submitting reviews.",
    fullDescription:
      "ArtistsHub is a collaborative web platform for music fans. It aggregates artist profiles, discographies, track previews, and community reviews into an engaging visual layout.",
    techStack: [
      "HTML5",
      "SCSS",
      "JavaScript (ES6+)",
      "Vite",
      "REST API",
      "Axios",
      "Swiper.js",
      "IziToast",
      "Raty.js",
      "TUI Pagination",
    ],
    role: "Full-Stack Developer (Artists Section)",
    keyContributions: [
      "Designed and coded the responsive Artists section with dynamic REST API data integration.",
      "Implemented touch-friendly audio carousels powered by Swiper.js and star rating input via Raty.js.",
      "Integrated IziToast toast alerts and TUI Pagination for smooth browsing.",
      "Collaborated effectively within a multi-developer Git and GitHub feature branch workflow.",
    ],
    liveDemoUrl: "https://github.com/dina-muravska",
    githubFrontendUrl: "https://github.com/dina-muravska",
    category: "frontend",
    featured: false,
    image: "/images/projects/artistshub.webp",
    imageBg:
      "linear-gradient(135deg, rgba(193, 18, 31, 0.14) 0%, rgba(15, 15, 15, 0.95) 100%)",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", isPrimary: true },
      { name: "TypeScript", isPrimary: true },
      { name: "HTML5", isPrimary: true },
      { name: "CSS3 / SCSS", isPrimary: true },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", isPrimary: true },
      { name: "Next.js", isPrimary: true },
      { name: "TanStack Query", isPrimary: false },
      { name: "Zustand", isPrimary: false },
      { name: "Formik & Yup", isPrimary: false },
      { name: "Axios", isPrimary: false },
      { name: "Swiper.js", isPrimary: false },
      { name: "React Paginate", isPrimary: false },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Vite", isPrimary: true },
      { name: "Git & GitHub", isPrimary: true },
      { name: "GitHub Projects", isPrimary: false },
      { name: "REST API Integration", isPrimary: true },
      { name: "Postman", isPrimary: false },
      { name: "Vercel", isPrimary: false },
      { name: "VS Code", isPrimary: false },
    ],
  },
  {
    category: "Markup & Styling",
    skills: [
      { name: "SCSS / Sass Modules", isPrimary: true },
      { name: "CSS Grid & Flexbox", isPrimary: true },
      { name: "Responsive Design", isPrimary: true },
      { name: "Adaptive Breakpoints", isPrimary: false },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Teamwork & Collaboration" },
      { name: "Self-management & Ownership" },
      { name: "Task Prioritization" },
      { name: "Continuous Desire to Learn" },
    ],
  },
];

export const workExperience: WorkExperience[] = [
  {
    company: "INVESTAGRO-UKRAINE LLC",
    position: "Grain & Fertilizer Sales Manager",
    period: "07/2023 - 06/2025",
    responsibilities: [
      "Conducted thorough market analysis for grain and fertilizer procurement and sales optimization.",
      "Managed full-cycle commercial buying and selling operations with precise contract execution.",
      "Expanded and systematically maintained a high-trust client pipeline.",
      "Handled documentation, cross-departmental communications, and transaction risk monitoring.",
      "Monitored market fluctuations to optimize procurement strategies and maximize margin efficiency.",
    ],
    achievements: [
      "Built and independently maintained a reliable network of 200+ active business clients.",
      "Developed strong negotiation, problem-solving, and communication skills that seamlessly translate into software project coordination.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    institution: "IT School GoIT",
    degree: "Fullstack Developer",
    period: "08/2025 - 06/2026",
  },
  {
    institution: "Kyiv National University of Technologies and Design",
    degree: "Bachelor's Degree in Design",
    period: "09/2019 - 06/2022",
  },
];

export const certificationsData: Certification[] = [
  {
    title: "Fullstack Developer",
    issuer: "IT School GoIT",
    date: "June 2026",
    badge: "Diploma",
  },
  {
    title: "Google AI Professional Certificate",
    issuer: "Google (Coursera)",
    date: "May 2026",
    badge: "Professional Cert",
  },
  {
    title: "Vibe Coding with Claude Code",
    issuer: "Scrimba",
    date: "July 2026",
    badge: "Certificate",
  },
  {
    title: "Claude AI Comprehensive Guide",
    issuer: "SkillsBooster Academy",
    date: "July 2026",
    badge: "Certificate",
  },
];
