import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  Code2,
  Cpu,
  Wrench,
  Layout,
  Database,
  Boxes,
  Monitor,
  Star,
} from "lucide-react";
import { skillCategories } from "../../data/portfolioData";
import styles from "./Skills.module.scss";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categoriesList = ["All", ...skillCategories.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code2 size={18} className="text-neon" />;
      case "Frontend Technologies":
        return <Layout size={18} className="text-neon" />;
      case "Frontend Libraries & State Management":
        return <Cpu size={18} className="text-neon" />;
      case "Backend Technologies":
        return <Database size={18} className="text-neon" />;
      case "Backend Libraries & Utilities":
        return <Boxes size={18} className="text-neon" />;
      case "Development Tools & Platforms":
        return <Monitor size={18} className="text-neon" />;
      default:
        return <Wrench size={18} className="text-neon" />;
    }
  };

  const filteredCategories = skillCategories
    .filter(
      (cat) => selectedCategory === "All" || cat.category === selectedCategory,
    )
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="subtitle">03. Tech Stack & Skills</span>
          <h2 className="title">Technologies & Specialized Tools</h2>
          <p className="description">
            A comprehensive overview of my technical expertise in frontend
            frameworks, styling engines, state management, and developer
            tooling.
          </p>
        </div>

        {/* Filter Controls */}
        <div className={styles.controls}>
          <div className={styles.categoryTabs}>
            {categoriesList.map((cat) => (
              <button
                key={cat}
                className={`${styles.tab} ${selectedCategory === cat ? styles.active : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <Search size={16} className={styles.icon} />
            <input
              type="text"
              placeholder="Search skill (e.g., React, TypeScript)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className={styles.categoriesGrid}>
          {filteredCategories.map((catGroup, idx) => (
            <motion.div
              key={catGroup.category}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.categoryTitle}>
                  {getCategoryIcon(catGroup.category)}
                  <span>{catGroup.category}</span>
                </div>
                <span className={styles.countBadge}>
                  {catGroup.skills.length}
                </span>
              </div>

              <div className={styles.skillsList}>
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`${styles.skillItem} ${skill.isPrimary ? styles.isPrimary : ""}`}
                  >
                    {skill.isPrimary && (
                      <Star size={12} className={styles.star} />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
