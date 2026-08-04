import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { About } from "./sections/About/About";
import { Skills } from "./sections/Skills/Skills";
import { Education } from "./sections/Education/Education";
import { Certifications } from "./sections/Certifications/Certifications";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { ProjectModal } from "./components/ProjectModal/ProjectModal";
import { Toast } from "./components/Toast/Toast";
import { useActiveSection } from "./hooks/useActiveSection";
import { Project } from "./types";

const sectionIds = [
  "hero",
  "projects",
  "about",
  "skills",
  "education",
  "certifications",
  "contact",
];

export default function App() {
  const activeSection = useActiveSection(sectionIds, 150);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <div className="app-root" data-theme={theme}>
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />

      {/* Main Portfolio Sections */}
      <main>
        <Hero onCopyNotice={showToast} />
        {/* Featured Projects placed directly below Hero */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <About />
        <Skills />
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

      <Toast message={toastMessage} />
    </div>
  );
}
