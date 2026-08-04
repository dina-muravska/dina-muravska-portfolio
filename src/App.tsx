import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { Experience } from './sections/Experience/Experience';
import { Education } from './sections/Education/Education';
import { Certifications } from './sections/Certifications/Certifications';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ProjectModal } from './components/ProjectModal/ProjectModal';
import { ResumeModal } from './components/ResumeModal/ResumeModal';
import { Toast } from './components/Toast/Toast';
import { useActiveSection } from './hooks/useActiveSection';
import { Project } from './types';

const sectionIds = [
  'hero',
  'projects',
  'about',
  'skills',
  'experience',
  'education',
  'certifications',
  'contact',
];

export default function App() {
  const activeSection = useActiveSection(sectionIds, 150);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app-root">
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main>
        <Hero
          onCopyNotice={showToast}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
        {/* Featured Projects placed directly below Hero */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact onCopyNotice={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Toast */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <Toast message={toastMessage} />
    </div>
  );
}
