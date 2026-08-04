import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { FaDownload, FaBars, FaTimes, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Home, User, Settings, FolderKanban, BookOpen, GraduationCap, Award, Share2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ExpandableTabs } from '@/Components/ui/expandable-tabs';
import { usePageTransition } from './PageTransitionContext';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const { transitionTo, isTransitioning, prefetch } = usePageTransition();

  const handleHoverTab = (index) => {
    const tab = tabs[index];
    if (tab && tab.to) {
      if (tab.to === 'projects') {
        prefetch('/projects');
      } else if (tab.to === 'openSource') {
        prefetch('/open-source');
      } else {
        prefetch('/');
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = "/Shaheryar_Mahmood_CV.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Shaheryar_Mahmood_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tabs = [
    { title: "Home", icon: Home, to: "home" },
    { title: "About", icon: User, to: "about" },
    { title: "Tools", icon: Settings, to: "skills" },
    { type: "separator" },
    { title: "Experience", icon: GraduationCap, to: "education" },
    { title: "Certifications", icon: Award, to: "certifications" },
    { title: "Contact", icon: Share2, to: "socials" }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/in/sherry599/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:sherry33869@gmail.com", label: "Email" },
    { icon: FaPhone, href: "tel:+923317733869", label: "Phone" }
  ];

  const activeTabIndex = tabs.findIndex(tab => tab.to === activeSection);

  const handleTabChange = (index) => {
    if (index === null) return;
    const tab = tabs[index];
    if (tab && tab.to) {
      if (location.pathname !== '/') {
        transitionTo('/');
        setTimeout(() => {
          scroller.scrollTo(tab.to, {
            duration: 500,
            smooth: true,
            offset: -80,
          });
        }, 1100);
      } else {
        scroller.scrollTo(tab.to, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }
      setActiveSection(tab.to);
    }
  };

  const handleMobileTabChange = (index) => {
    const tab = tabs[index];
    if (tab && tab.to) {
      if (location.pathname !== '/') {
        transitionTo('/');
        setTimeout(() => {
          scroller.scrollTo(tab.to, {
            duration: 500,
            smooth: true,
            offset: -80,
          });
        }, 1100);
      } else {
        scroller.scrollTo(tab.to, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }
      setActiveSection(tab.to);
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-surface/80 backdrop-blur-md border-b border-default py-3 shadow-md' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button 
            onClick={() => {
              if (location.pathname !== '/') {
                transitionTo('/');
              } else {
                scroller.scrollTo('home', { duration: 500, smooth: true });
              }
            }}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-inverse font-black text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              SM
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base text-primary uppercase tracking-tight group-hover:text-accent transition-colors">
                Shaheryar Mahmood
              </span>
              <span className="text-[10px] text-secondary font-mono tracking-widest uppercase -mt-0.5">
                AI-First Customer Success Manager
              </span>
            </div>
          </button>

          {/* Desktop Navigation Tabs */}
          <div className="hidden lg:flex items-center">
            <ExpandableTabs 
              tabs={tabs} 
              activeTab={activeTabIndex}
              onChange={handleTabChange}
              onHoverTab={handleHoverTab}
            />
          </div>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-16 z-40 bg-surface border-b border-default p-6 sm:hidden shadow-2xl flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            {tabs.filter(t => t.title).map((tab, index) => (
              <button
                key={tab.title}
                onClick={() => {
                  setIsOpen(false);
                  handleMobileTabChange(index);
                }}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/50 text-primary text-sm font-semibold transition-colors text-left"
              >
                {tab.icon && <tab.icon className="w-4 h-4 text-accent" />}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-default flex items-center justify-center">
            <div className="flex items-center gap-4">
              {socialLinks.map((s, idx) => (
                <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;