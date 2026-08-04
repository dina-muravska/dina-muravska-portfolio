import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Send, Mail, Code2 } from "lucide-react";
import { personalDetails, contactInfo } from "../../data/portfolioData";
import { scrollToSection } from "../../utils/formatters";
import styles from "./Hero.module.scss";

interface HeroProps {
  onCopyNotice: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Intro Text & Call-To-Actions */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>
              Hello, I'm <br />
              <span className={styles.accent}>{personalDetails.name}</span>
            </h1>

            <div className={styles.subtitle}>
              &lt;{personalDetails.position} /&gt;
            </div>

            <p className={styles.description}>{personalDetails.summary}</p>

            <div className={styles.actions}>
              <button
                className={styles.primaryBtn}
                onClick={() => scrollToSection("projects")}
              >
                <span>View Projects</span>
                <Code2 size={18} />
              </button>

              <button
                className={styles.secondaryBtn}
                onClick={() => scrollToSection("contact")}
              >
                <span>Get In Touch</span>
                <ArrowDown size={16} />
              </button>
            </div>

            <div className={styles.socials}>
              <span className={styles.label}>Connect:</span>
              <div className={styles.socialList}>
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
          </motion.div>

          {/* Column 2: Large Portrait Style Photo Container */}
          <motion.div
            className={styles.imageColumn}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageFrame}>
              <img
                src="/images/profile1.jpg"
                alt="Dina Muravska - Full-Stack Developer"
                className={styles.profileImg}
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
