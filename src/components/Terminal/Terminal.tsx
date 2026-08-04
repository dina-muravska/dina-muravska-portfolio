import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import styles from "./Terminal.module.scss";

interface TerminalProps {
  onCopyNotice: (msg: string) => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onCopyNotice }) => {
  const [activeTab, setActiveTab] = useState<"profile" | "skills" | "contact">(
    "profile",
  );
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    profile: `// Developer Profile
const developer = {
  name: "Dina Muravska",
  role: "Full-Stack Developer",
  focus: ["React 19", "Next.js", "TypeScript", "SCSS"],
  location: "Ukraine",
  status: "Open to Work",
  mindset: "Clean code & user-centered interfaces",
  getExperience: () => "React, Next.js, TanStack Query, Zustand"
};`,
    skills: `{
  "core": ["JavaScript (ES6+)", "TypeScript", "React 19", "Next.js"],
  "state": ["Zustand", "TanStack Query", "Context API"],
  "styling": ["SCSS Modules", "CSS Grid", "Flexbox", "Responsive"],
  "tools": ["Vite", "Git", "GitHub Projects", "REST APIs", "Postman"]
}`,
    contact: `curl -X GET "https://api.dina-muravska.dev/contact" \\
  -H "Accept: application/json"

# Output:
# Email: dina.muravska.25@gmail.com
# Telegram: @dina_muravska
# Status: 200 OK (Available for Hire)`,
  };

  const handleCopy = () => {
    const text = codeSnippets[activeTab];
    navigator.clipboard.writeText(text);
    setCopied(true);
    onCopyNotice(`Copied ${activeTab} snippet to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = codeSnippets[activeTab].split("\n");

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.header}>
        <div className={styles.windowButtons}>
          <span className={`${styles.dot} ${styles.red}`}></span>
          <span className={`${styles.dot} ${styles.yellow}`}></span>
          <span className={`${styles.dot} ${styles.green}`}></span>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "profile" ? styles.active : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            dina.ts
          </button>
          <button
            className={`${styles.tab} ${activeTab === "skills" ? styles.active : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            skills.json
          </button>
          <button
            className={`${styles.tab} ${activeTab === "contact" ? styles.active : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            contact.sh
          </button>
        </div>

        <button
          className={styles.copyButton}
          onClick={handleCopy}
          title="Copy code"
        >
          {copied ? (
            <Check size={14} className={styles.accent} />
          ) : (
            <Copy size={14} />
          )}
        </button>
      </div>

      <div className={styles.body}>
        {lines.map((line, idx) => (
          <div key={idx} className={styles.line}>
            <span className={styles.lineNum}>{idx + 1}</span>
            <span className={styles.content}>
              {renderHighlightedLine(line, activeTab)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

function renderHighlightedLine(line: string, tab: string) {
  if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
    return <span className={styles.comment}>{line}</span>;
  }

  if (tab === "profile") {
    if (line.includes("const ") || line.includes("let ")) {
      return (
        <span>
          <span className={styles.keyword}>const </span>
          <span className={styles.property}>developer </span>= {"{"}
        </span>
      );
    }
  }

  return <span>{line}</span>;
}
