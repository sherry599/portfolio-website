import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ showLabel = true, className = "" }) => {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark') || 
           localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setIsDark(!isDark)}
      className={`px-3 py-2 rounded-xl border border-subtle bg-surface text-secondary hover:text-primary hover:border-default transition-all duration-300 flex items-center gap-2 shadow-xs cursor-pointer ${className}`}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      data-cursor="pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: -12, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 12, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center shrink-0"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-500" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          )}
        </motion.div>
      </AnimatePresence>

      {showLabel && (
        <span className="text-[11px] font-mono font-medium text-secondary tracking-tight whitespace-nowrap">
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </span>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
