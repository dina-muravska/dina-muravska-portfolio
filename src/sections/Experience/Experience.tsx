import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, Award, TrendingUp } from 'lucide-react';
import { workExperience } from '../../data/portfolioData';
import styles from './Experience.module.scss';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="subtitle">04. Career Experience</span>
          <h2 className="title">Work Experience & Leadership</h2>
          <p className="description">
            Commercial management background that drives strong communication, client empathy, ownership, and systematic task execution.
          </p>
        </div>

        <div className={styles.timeline}>
          {workExperience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className={styles.marker}></div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <div className={styles.position}>{exp.position}</div>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>

                <div className={styles.responsibilities}>
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((task, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className={styles.icon} />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.achievements}>
                  <div className={styles.achTitle}>
                    <Award size={16} />
                    <span>Key Achievements & Transferable Skills</span>
                  </div>
                  {exp.achievements.map((ach, i) => (
                    <p key={i}>{ach}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
