import React from "react";
import { motion } from "motion/react";
import {
  User,
  Globe,
  Sparkles,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import { personalDetails } from "../../data/portfolioData";
import styles from "./About.module.scss";

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="subtitle">02. About Me</span>
          <h2 className="title">Background & Development Philosophy</h2>
          <p className="description">
            Combining design background with robust full-stack developer
            training to craft pixel-perfect frontend experiences.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          {/* Main Story */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.textCard}>
              <p>
                I am a dedicated{" "}
                <span className={styles.highlight}>Full-Stack Developer</span>{" "}
                with a strong foundation in modern web development technologies
                including React, Next.js, TypeScript, and SCSS.
              </p>
              <p>
                Having earned a{" "}
                <span className={styles.highlight}>
                  Bachelor's Degree in Design
                </span>{" "}
                from Kyiv National University of Technologies and Design
                followed by intensive full-stack development training at{" "}
                <span className={styles.highlight}>IT School GoIT</span>, I
                bring a unique blend of visual balance and structural clean code
                to every project.
              </p>
              <p>
                My previous background managing commercial grain & fertilizer
                buying operations at INVESTAGRO-UKRAINE LLC refined my{" "}
                <span className={styles.highlight}>
                  task prioritization, self-management, and high-trust team
                  collaboration
                </span>{" "}
                skills. I thrive in agile team settings, building accessible web
                applications with clean REST API integrations.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardTitle}>
                <Globe size={18} />
                <span>Quick Overview</span>
              </div>
              <div className={styles.quickDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Location:</span>
                  <span className={styles.value}>
                    Ukraine (Remote Available)
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Core Stack:</span>
                  <span className={styles.value}>
                    React 19, Next.js, TypeScript, SCSS Modules
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>State / Data:</span>
                  <span className={styles.value}>
                    Zustand, TanStack Query, Axios, Formik
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Education:</span>
                  <span className={styles.value}>
                    IT School GoIT (Fullstack) & KNUTD (Design)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages & Soft Skills */}
          <motion.div
            className={styles.rightContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Languages */}
            <div className={styles.infoCard}>
              <div className={styles.cardTitle}>
                <Globe size={18} />
                <span>Language Proficiency</span>
              </div>
              <div className={styles.languagesList}>
                {personalDetails.languages.map((lang) => (
                  <div key={lang.name} className={styles.langItem}>
                    <span className={styles.langName}>{lang.name}</span>
                    <span className={styles.langLevel}>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className={styles.infoCard}>
              <div className={styles.cardTitle}>
                <HeartHandshake size={18} />
                <span>Soft Skills & Professional Attributes</span>
              </div>
              <div className={styles.softSkillsGrid}>
                {personalDetails.softSkills.map((skill) => (
                  <div key={skill} className={styles.softSkillTag}>
                    <CheckCircle size={14} className={styles.bullet} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
