import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationData } from '../../data/portfolioData';
import styles from './Education.module.scss';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="subtitle">05. Academic Foundation</span>
          <h2 className="title">Education & Specialized Qualification</h2>
          <p className="description">
            Dual training in aesthetic design principles and full-stack web software engineering.
          </p>
        </div>

        <div className={styles.grid}>
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className={styles.iconWrapper}>
                <GraduationCap size={24} />
              </div>

              <h3 className={styles.institution}>{edu.institution}</h3>
              <div className={styles.degree}>{edu.degree}</div>

              <div className={styles.period}>
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
