import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePageTransition } from './PageTransitionContext';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const { transitionTo } = usePageTransition();

  const navItems = [
    { title: "Home", to: "home" },
    { title: "About", to: "about" },
    { title: "Experience", to: "education" },
    { title: "Tools", to: "skills" },
    { title: "Certifications", to: "certifications" },
    { title: "Contact", to: "socials" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Check if user is at or near bottom of the page
      const isAtBottom = window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - 80;

      if (isAtBottom) {
        setActiveSection(navItems[navItems.length - 1].to);
        return;
      }

      // Viewport threshold distance from top (180px)
      const threshold = 180;

      const sections = navItems
        .map(item => ({ id: item.to, element: document.getElementById(item.to) }))
        .filter(item => item.element !== null);

      let currentSection = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].element.getBoundingClientRect();
        if (rect.top <= threshold) {
          currentSection = sections[i].id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (window.lenis) {
      window.lenis.on('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.lenis) {
        window.lenis.off('scroll', handleScroll);
      }
    };
  }, [location.pathname]);

  const handleNavClick = (to) => {
    if (location.pathname !== '/') {
      transitionTo('/');
      setTimeout(() => {
        if (window.lenis) {
          window.lenis.scrollTo(`#${to}`, { offset: -80 });
        } else {
          scroller.scrollTo(to, {
            duration: 500,
            smooth: true,
            offset: -80,
          });
        }
      }, 1000);
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(`#${to}`, { offset: -80 });
      } else {
        scroller.scrollTo(to, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }
    }
    setActiveSection(to);
  };

  return (
    <>
      {/* Top Floating Navbar Container */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-surface/85 backdrop-blur-xl border-b border-default shadow-md' 
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
          
          {/* Left Brand / Name Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer z-10"
            aria-label="Shaheryar Mahmood Home"
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-inverse font-black text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              SM
            </div>
          </button>

          {/* Center Floating Pill Section Menu (Matching Reference Image) */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-default/80 shadow-lg rounded-full px-4 py-1 flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.to;
                return (
                  <button
                    key={item.to}
                    onClick={() => handleNavClick(item.to)}
                    className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer rounded-full ${
                      isActive 
                        ? 'text-accent font-extrabold' 
                        : 'text-secondary hover:text-accent hover:bg-accent/10 hover:shadow-xs'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-accent/15 dark:bg-accent/20 rounded-full -z-10 border border-accent/30 dark:border-accent/40 shadow-xs"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Action Items: Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3 z-10">
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-2 sm:hidden z-10">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary focus:outline-none rounded-lg border border-default bg-surface"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu with Clear Text Labels */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-surface/95 backdrop-blur-xl border-b border-default p-5 sm:hidden shadow-2xl flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.to;
                return (
                  <button
                    key={item.to}
                    onClick={() => {
                      setIsOpen(false);
                      handleNavClick(item.to);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left flex items-center justify-between ${
                      isActive 
                        ? 'bg-accent/15 text-accent font-bold border border-accent/30' 
                        : 'text-primary hover:bg-primary/5'
                    }`}
                  >
                    <span>{item.title}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-accent" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;