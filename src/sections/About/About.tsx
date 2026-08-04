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
          <p className="description">
            I am a Full-Stack Developer with hands-on experience building modern
            web applications using React, Next.js, Node.js, and MongoDB. For me,
            web development is more than just writing code — it feels like
            magic, where logic and creativity come together to create beautiful,
            interactive digital experiences. My goal is to master this “magic”
            and build products that users truly enjoy. I continuously improve my
            skills by learning new tools and development practices.
          </p>
        </div>

        <motion.div
          className={styles.skillsGrid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
    </section>
  );
};
