export interface Project {
  id: string;
  title: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  role: string;
  keyContributions: string[];
  liveDemoUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  category: 'fullstack' | 'frontend' | 'landing';
  featured: boolean;
  image: string; // Path to project screenshot placeholder
  imageBg: string; // Gradient / accent motif for visual aesthetic
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    isPrimary?: boolean;
  }[];
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge: string;
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  email: string;
  telegram: string;
  linkedin: string;
  github: string;
}
