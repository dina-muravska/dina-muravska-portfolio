import React from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';
import styles from './Certifications.module.scss';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="subtitle">06. Continuous Learning</span>
          <h2 className="title">Verified Certifications</h2>
          <p className="description">
            Industry-recognized credentials in Full-Stack Web Development, Artificial Intelligence, and AI-assisted development tooling.
          </p>
        </div>

        <div className={styles.grid}>
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>
                  <ShieldCheck size={26} />
                </span>
                <span className={styles.badgeTag}>{cert.badge}</span>
              </div>

              <h3 className={styles.title}>{cert.title}</h3>
              <div className={styles.issuer}>{cert.issuer}</div>

              <div className={styles.date}>
                <Calendar size={14} />
                <span>Issued {cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
