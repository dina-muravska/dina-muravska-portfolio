import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Layers, UserCheck } from 'lucide-react';
import { Project } from '../../types';
import styles from './ProjectModal.module.scss';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

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
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          <div className={styles.badgeRow}>
            <span className={styles.yearBadge}>{project.year}</span>
            <span className={styles.categoryBadge}>{project.category}</span>
          </div>

          <h2 className={styles.title}>{project.title}</h2>
          
          <div className={styles.roleText}>
            <UserCheck size={16} />
            <span>Role: {project.role}</span>
          </div>

          <p className={styles.description}>{project.fullDescription}</p>

          <div className={styles.sectionHeading}>
            <Layers size={16} />
            <span>Technologies & Tools</span>
          </div>
          <div className={styles.techList}>
            {project.techStack.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          {project.keyContributions && project.keyContributions.length > 0 && (
            <>
              <div className={styles.sectionHeading}>
                <CheckCircle2 size={16} />
                <span>Key Responsibilities & Contributions</span>
              </div>
              <div className={styles.contributionsList}>
                {project.keyContributions.map((item, index) => (
                  <div key={index} className={styles.contributionItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className={styles.actionsRow}>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.githubFrontendUrl && (
              <a
                href={project.githubFrontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryLink}
              >
                <Github size={16} />
                <span>Frontend Repo</span>
              </a>
            )}

            {project.githubBackendUrl && (
              <a
                href={project.githubBackendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryLink}
              >
                <Github size={16} />
                <span>Backend Repo</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
