import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { scrollToSection } from '../../utils/formatters';
import styles from './Navbar.module.scss';

interface NavbarProps {
  activeSection: string;
  onOpenCvModal: () => void;
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenCvModal }) => {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }} className={styles.logo}>
            <span>Dina<span className={styles.accent}>.dev</span></span>
            <span className={styles.badge}>
              <span className={styles.dot}></span>
              Available
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className={styles.desktopMenu}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <button className={styles.cvButton} onClick={onOpenCvModal}>
              <FileText size={15} />
              <span>Resume</span>
              <ArrowUpRight size={13} />
            </button>

            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className={styles.mobileMenu}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                >
                  {item.label}
                </a>
              ))}

              <button
                className={styles.mobileCvButton}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
              >
                <FileText size={18} />
                <span>View CV / Resume</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
