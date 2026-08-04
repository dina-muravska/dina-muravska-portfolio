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
  CheckCircle2,
} from "lucide-react";
import { contactInfo } from "../../data/portfolioData";
import styles from "./Contact.module.scss";

interface ContactProps {
  onCopyNotice: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyNotice }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onCopyNotice(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="subtitle">07. Get In Touch</span>
          <h2 className="title">Let's Work Together</h2>
          <p className="description">
            Open for full-time full-stack developer roles, project
            collaborations, and technical discussions. Feel free to send a
            message or connect directly.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Contact Direct Cards */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Phone */}
            <div className={styles.contactCard}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <Phone size={20} />
                </div>
                <div>
                  <div className={styles.label}>Phone / WhatsApp</div>
                  <div className={styles.value}>{contactInfo.phone}</div>
                </div>
              </div>
              <button
                className={styles.copyBtn}
                onClick={() => handleCopy(contactInfo.phoneRaw, "Phone")}
                title="Copy phone number"
              >
                {copiedField === "Phone" ? (
                  <Check size={18} className="text-neon" />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>

            {/* Email */}
            <div className={styles.contactCard}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <div>
                  <div className={styles.label}>Email Address</div>
                  <div className={styles.value}>{contactInfo.email}</div>
                </div>
              </div>
              <button
                className={styles.copyBtn}
                onClick={() => handleCopy(contactInfo.email, "Email")}
                title="Copy email address"
              >
                {copiedField === "Email" ? (
                  <Check size={18} className="text-neon" />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>

            {/* Telegram */}
            <div className={styles.contactCard}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <Send size={20} />
                </div>
                <div>
                  <div className={styles.label}>Telegram</div>
                  <div className={styles.value}>@dina_muravska</div>
                </div>
              </div>
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.copyBtn}
                title="Open Telegram"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            {/* LinkedIn */}
            <div className={styles.contactCard}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className={styles.label}>LinkedIn Profile</div>
                  <div className={styles.value}>dina-muravska</div>
                </div>
              </div>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.copyBtn}
                title="Open LinkedIn"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            {/* GitHub */}
            <div className={styles.contactCard}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <Github size={20} />
                </div>
                <div>
                  <div className={styles.label}>GitHub Profile</div>
                  <div className={styles.value}>dina-muravska</div>
                </div>
              </div>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.copyBtn}
                title="Open GitHub"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className={styles.formTitle}>Send a Direct Message</h3>
            <p className={styles.formSub}>
              Fill out the form below to drop me an email inquiry. I'll get back
              to you promptly!
            </p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Frontend Job Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  placeholder="Tell me about your project or role requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <Send size={18} />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className={styles.successNotice}>
                  <CheckCircle2 size={18} />
                  <span>
                    Thank you! Your message has been dispatched successfully.
                  </span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
