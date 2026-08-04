import React from "react";
import { Github, Linkedin, Send, Mail, ArrowUp } from "lucide-react";
import { contactInfo } from "../../data/portfolioData";
import { scrollToSection } from "../../utils/formatters";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              Dina<span className={styles.accent}>.dev</span>
            </div>
            <p className={styles.tagline}>
              Full-Stack Developer building clean, responsive, and user-centered
              web applications with React, Next.js, TypeScript & SCSS.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <div className={styles.linkCol}>
              <div className={styles.title}>Navigation</div>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
            </div>

            <div className={styles.linkCol}>
              <div className={styles.title}>Explore</div>
              <a
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("education");
                }}
              >
                Education
              </a>
              <a
                href="#certifications"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("certifications");
                }}
              >
                Certifications
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Get in Touch
              </a>
            </div>

            <div className={styles.linkCol}>
              <div className={styles.title}>Connect</div>
              <div className={styles.socialRow}>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={contactInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <Send size={18} />
                </a>
                <a href={`mailto:${contactInfo.email}`} aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div>
            © {new Date().getFullYear()} Dina Muravska. Built with React 19,
            TypeScript & SCSS Modules.
          </div>

          <button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
