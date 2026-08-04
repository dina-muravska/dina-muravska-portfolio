import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalDetails, contactInfo, workExperience, educationData, certificationsData, projectsData } from '../../data/portfolioData';
import styles from './ResumeModal.module.scss';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
        >
          <button className={styles.closeButton} onClick={onClose} aria-label="Close CV modal">
            <X size={20} />
          </button>

          <div className={styles.cvHeader}>
            <h1 className={styles.name}>{personalDetails.name}</h1>
            <div className={styles.role}>{personalDetails.position}</div>
            <div className={styles.contacts}>
              <span><Phone size={14} /> {contactInfo.phone}</span>
              <a href={`mailto:${contactInfo.email}`}><Mail size={14} /> {contactInfo.email}</a>
              <span><MapPin size={14} /> {personalDetails.location}</span>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub <ExternalLink size={12} /></a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink size={12} /></a>
            </div>
          </div>

          <div className={styles.cvSection}>
            <div className={styles.sectionTitle}>Summary</div>
            <p>{personalDetails.summary}</p>
          </div>

          <div className={styles.cvSection}>
            <div className={styles.sectionTitle}>Key Projects</div>
            {projectsData.slice(0, 3).map((proj) => (
              <div key={proj.id} className={styles.itemBlock}>
                <div className={styles.itemHeader}>
                  <div className={styles.itemTitle}>{proj.title} ({proj.year})</div>
                  <div className={styles.itemPeriod}>{proj.role}</div>
                </div>
                <div className={styles.itemSub}>{proj.techStack.join(', ')}</div>
                <ul>
                  {proj.keyContributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.cvSection}>
            <div className={styles.sectionTitle}>Work Experience</div>
            {workExperience.map((exp, idx) => (
              <div key={idx} className={styles.itemBlock}>
                <div className={styles.itemHeader}>
                  <div className={styles.itemTitle}>{exp.company}</div>
                  <div className={styles.itemPeriod}>{exp.period}</div>
                </div>
                <div className={styles.itemSub}>{exp.position}</div>
                <ul>
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.cvSection}>
            <div className={styles.sectionTitle}>Education</div>
            {educationData.map((edu, idx) => (
              <div key={idx} className={styles.itemBlock}>
                <div className={styles.itemHeader}>
                  <div className={styles.itemTitle}>{edu.institution}</div>
                  <div className={styles.itemPeriod}>{edu.period}</div>
                </div>
                <div className={styles.itemSub}>{edu.degree}</div>
              </div>
            ))}
          </div>

          <div className={styles.cvSection}>
            <div className={styles.sectionTitle}>Certifications</div>
            {certificationsData.map((cert, idx) => (
              <div key={idx} className={styles.itemBlock}>
                <div className={styles.itemHeader}>
                  <div className={styles.itemTitle}>{cert.title} — {cert.issuer}</div>
                  <div className={styles.itemPeriod}>{cert.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <button className={styles.printBtn} onClick={handlePrint}>
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
