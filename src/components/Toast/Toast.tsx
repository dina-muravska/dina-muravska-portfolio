import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import styles from './Toast.module.scss';

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className={styles.toast}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
        >
          <span className={styles.icon}>
            <CheckCircle2 size={18} />
          </span>
          <span className={styles.message}>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
