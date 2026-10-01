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
  position: "Full-Stack/Frontend Developer",
  location: "Ukraine",
  summary: `Full-stack Developer focused on building modern, scalable, and user-centered web
applications. Experienced in developing responsive frontend interfaces with React, Next.js, and
TypeScript, as well as building REST APIs and backend functionality using Node.js, Express.js,
MongoDB, and Mongoose.`,
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
    id: "read-journey",
    title: "Read Journey",
    year: "2026",
    shortDescription:
      "A reading tracker and digital book collection for discovering books, setting reading goals, and tracking progress.",
    fullDescription:
      "Read Journey is a web application for tracking personal reading activity and managing a digital book collection. Users can discover recommended books, search and filter books by title or author, manage their personal library, set reading goals, and track reading progress.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Yup",
      "Axios",
      "CSS Modules",
      "iziToast / React Hot Toast",
    ],
    role: "role: Frontend Developer",
    keyContributions: [
      "Built book discovery, search, and filtering experiences for browsing by title or author.",
      "Implemented personal library management and reading goal tracking.",
      "Created reading progress features with responsive interfaces for different screen sizes.",
    ],
    liveDemoUrl: "https://read-journey-tau-five.vercel.app/",
    githubFrontendUrl: "https://github.com/dina-muravska/read-journey",
    category: "frontend",
    featured: true,
    image: "/images/projects/read-jorney.jpg",
    imageAlt: "Read Journey",
    imageBg:
      "linear-gradient(135deg, rgba(193, 18, 31, 0.15) 0%, rgba(15, 15, 15, 0.95) 100%)",
  },
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
    role: "role: Scrum Master & Full-Stack Developer",
    keyContributions: [
      "Coordinated Agile workflows using GitHub Projects for task breakdown and sprint planning.",
      "Developed frontend features with React and Next.js, establishing scalable component architecture.",
      "Contributed to Node.js / Express backend REST APIs and database models.",
      "Implemented authentication state management with Zustand, Formik validation, and TanStack Query caching.",
    ],
    liveDemoUrl: "https://final-project-fullstack-force-front.vercel.app/",
    githubFrontendUrl: "https://github.com/dina-muravska/tasteorama-front",
    githubBackendUrl: "https://github.com/dina-muravska/tasteorama-back",
    category: "fullstack",
    featured: true,
    image: "/images/projects/tasteorama.jpg",
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
    role: "role: Frontend Developer",
    keyContributions: [
      "Developed a responsive user interface optimized across mobile and desktop breakpoints.",
      "Implemented multi-field filter forms and dynamic camper vehicle pagination.",
      "Built interactive modal dialogs for reviews, specs overview, and booking validation.",
      "Leveraged TanStack Query and Axios for optimal data prefetching and state synchronization.",
    ],
    liveDemoUrl: "https://travel-trucks-rosy-one.vercel.app/",
    githubFrontendUrl: "https://github.com/dina-muravska/travel-trucks",
    category: "frontend",
    featured: true,
    image: "/images/projects/travel-trucks.jpg",
    imageBg:
      "linear-gradient(135deg, rgba(193, 18, 31, 0.15) 0%, rgba(15, 15, 15, 0.95) 100%)",
  },
  {
    id: "notehub",
    title: "NoteHub",
    year: "2026",
    shortDescription:
      "Frontend note management app for creating, editing, categorizing, and organizing personal notes with a responsive interface.",
    fullDescription:
      "NoteHub is a responsive note-taking productivity app. Its frontend lets users access authentication views, manage personal notes with Markdown support, filter notes by tags, and browse paginated entries.",
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
    role: "role: Frontend Developer",
    keyContributions: [
      "Built clean user interface components for creating, editing, and deleting notes.",
      "Implemented secure cookie-based session handling and authentication views.",
      "Designed responsive grid layouts with custom pagination using React Paginate.",
      "Integrated note-related API requests with TanStack Query mutation hooks.",
    ],
    liveDemoUrl: "https://note-hub-rho.vercel.app/",
    githubFrontendUrl: "https://github.com/dina-muravska/NoteHub",
    category: "frontend",
    featured: true,
    image: "/images/projects/notehub.jpg",
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
    role: "role: Frontend Developer",
    keyContributions: [
      "Developed pixel-perfect, mobile-first responsive landing sections with semantic HTML5.",
      "Structured maintainable CSS3 & SCSS styles with custom mixins and variables.",
      "Added vanilla JavaScript interactive elements including smooth scroll, mobile menu, and order modals.",
    ],
    liveDemoUrl: "https://dina-muravska.github.io/coffee-vibes/",
    githubFrontendUrl: "https://github.com/dina-muravska/coffee-vibes",
    category: "landing",
    featured: false,
    image: "/images/projects/coffeevibes.jpg",
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
    role: "role: Frontend Developer",
    keyContributions: [
      "Designed and coded the responsive Artists section with dynamic REST API data integration.",
      "Implemented touch-friendly audio carousels powered by Swiper.js and star rating input via Raty.js.",
      "Integrated IziToast toast alerts and TUI Pagination for smooth browsing.",
      "Collaborated effectively within a multi-developer Git and GitHub feature branch workflow.",
    ],
    liveDemoUrl: "https://dina-muravska.github.io/Artists-project/",
    githubFrontendUrl: "https://github.com/dina-muravska/Artists-project",
    category: "frontend",
    featured: false,
    image: "/images/projects/artistshub.jpg",
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
    ],
  },
  {
    category: "Frontend Technologies",
    skills: [
      { name: "HTML5", isPrimary: true },
      { name: "CSS3", isPrimary: true },
      { name: "SCSS/Sass", isPrimary: true },
      { name: "React", isPrimary: true },
      { name: "Next.js", isPrimary: true },
    ],
  },
  {
    category: "Frontend Libraries & State Management",
    skills: [
      { name: "TanStack Query", isPrimary: true },
      { name: "Zustand", isPrimary: true },
      { name: "Formik", isPrimary: false },
      { name: "Yup", isPrimary: false },
      { name: "Axios", isPrimary: false },
      { name: "Swiper.js", isPrimary: false },
      { name: "React Paginate", isPrimary: false },
    ],
  },
  {
    category: "Backend Technologies",
    skills: [
      { name: "Node.js", isPrimary: true },
      { name: "Express.js", isPrimary: true },
      { name: "REST API", isPrimary: true },
      { name: "MongoDB", isPrimary: false },
      { name: "Mongoose", isPrimary: false },
    ],
  },
  {
    category: "Backend Libraries & Utilities",
    skills: [
      { name: "bcrypt", isPrimary: false },
      { name: "Multer", isPrimary: false },
      { name: "Celebrate", isPrimary: false },
      { name: "Cloudinary", isPrimary: false },
      { name: "Handlebars", isPrimary: false },
    ],
  },
  {
    category: "Development Tools & Platforms",
    skills: [
      { name: "Git", isPrimary: true },
      { name: "GitHub", isPrimary: true },
      { name: "GitHub Projects", isPrimary: false },
      { name: "VS Code", isPrimary: false },
      { name: "Postman", isPrimary: false },
      { name: "Vite", isPrimary: false },
      { name: "Vercel", isPrimary: false },
      { name: "Render", isPrimary: false },
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
    degree: "Full-Stack Developer Certificate",
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
    title: "Full-Stack Developer Certificate",
    issuer: "IT School GoIT",
    date: "June 2026",
    badge: "Certificate",
  },
  {
    title: "Google AI Professional Certificate",
    issuer: "Google (Coursera)",
    date: "May 2026",
    badge: "Professional Certificate",
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
