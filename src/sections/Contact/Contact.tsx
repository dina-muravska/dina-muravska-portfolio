import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  Send,
  Linkedin,
  Github,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { contactInfo } from "../../data/portfolioData";
import styles from "./Contact.module.scss";

interface ContactProps {
  onCopyNotice: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyNotice }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactItems = [
    {
      label: "Phone / WhatsApp",
      value: contactInfo.phone,
      icon: Phone,
      type: "copy" as const,
      copyValue: contactInfo.phoneRaw,
      title: "Copy phone number",
    },
    {
      label: "Email Address",
      value: contactInfo.email,
      icon: Mail,
      type: "copy" as const,
      copyValue: contactInfo.email,
      title: "Copy email address",
    },
    {
      label: "Telegram",
      value: "@dina_muravska",
      icon: Send,
      type: "link" as const,
      href: contactInfo.telegram,
      title: "Open Telegram",
    },
    {
      label: "LinkedIn Profile",
      value: "dina-muravska",
      icon: Linkedin,
      type: "link" as const,
      href: contactInfo.linkedin,
      title: "Open LinkedIn",
    },
    {
      label: "GitHub Profile",
      value: "dina-muravska",
      icon: Github,
      type: "link" as const,
      href: contactInfo.github,
      title: "Open GitHub",
    },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onCopyNotice(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="subtitle">07. Get In Touch</span>
          <h2 className="title">Let's Work Together</h2>
          <p className="description">
            Open for full-time full-stack developer roles, project
            collaborations, and technical discussions. Feel free to reach out
            through any of the contact options below.
          </p>
        </div>

        <div className={styles.contactShell}>
          <motion.div
            className={styles.contactHero}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className={styles.heroBadge}>Available for collaboration</div>
            <p>
              Whether it is a product launch, a freelance project, or a
              thoughtful conversation about modern web work, I am always happy
              to connect.
            </p>
          </motion.div>

          <div className={styles.contactCardsGrid}>
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const isWide = index === contactItems.length - 1;

              return (
                <motion.div
                  key={item.label}
                  className={`${styles.contactCard} ${isWide ? styles.contactCardWide : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className={styles.cardLeft}>
                    <div className={styles.iconBox}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className={styles.label}>{item.label}</div>
                      <div className={styles.value}>{item.value}</div>
                    </div>
                  </div>

                  {item.type === "copy" ? (
                    <button
                      className={styles.copyBtn}
                      onClick={() =>
                        handleCopy(item.copyValue || "", item.label)
                      }
                      title={item.title}
                    >
                      {copiedField === item.label ? (
                        <Check size={18} className="text-neon" />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.copyBtn}
                      title={item.title}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
