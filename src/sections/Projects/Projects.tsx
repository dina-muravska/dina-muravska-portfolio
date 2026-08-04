import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { Project } from '../../types';
import styles from './Projects.module.scss';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'frontend' | 'landing'>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'landing', label: 'Landing Pages' },
  ];

  const filteredProjects = projectsData.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="subtitle">01. Primary Focus</span>
          <h2 className="title">Featured Projects</h2>
          <p className="description">
            Production-ready web applications built with React, Next.js, TypeScript, REST APIs, and responsive SCSS styling.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${filter === cat.id ? styles.active : ''}`}
              onClick={() => setFilter(cat.id as any)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div className={styles.projectsGrid} layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                {/* Project Screenshot / Banner */}
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className={styles.projectImage}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.topBadges}>
                      <span className={styles.categoryBadge}>{project.category}</span>
                      {project.featured && (
                        <span className={styles.featuredBadge}>Featured</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className={styles.cardBody}>
                  <div className={styles.headerRow}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.year}>{project.year}</span>
                  </div>

                  <div className={styles.roleSub}>{project.role}</div>

                  <p className={styles.description}>{project.shortDescription}</p>

                  {/* Technology Pills */}
                  <div className={styles.techPills}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.cardFooter}>
                    <div className={styles.actionButtons}>
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.liveBtn}
                        >
                          <ExternalLink size={15} />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.githubFrontendUrl && (
                        <a
                          href={project.githubFrontendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.githubBtn}
                        >
                          <Github size={15} />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                    <button
                      className={styles.detailsBtn}
                      onClick={() => onSelectProject(project)}
                      title="View detailed overview"
                    >
                      <span>Overview</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
