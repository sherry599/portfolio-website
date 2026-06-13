import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { FaDownload, FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Home, User, Settings, FolderKanban, GitPullRequest, GraduationCap, Award, Share2 } from 'lucide-react';
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
  const { transitionTo, isTransitioning } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = "/Ali Mahmood's CV.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Ali Mahmood's CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tabs = [
    { title: "Home", icon: Home, to: "home" },
    { title: "About", icon: User, to: "about" },
    { title: "Skills", icon: Settings, to: "skills" },
    { title: "Projects", icon: FolderKanban, to: "projects" },
    { title: "Open Source", icon: GitPullRequest, to: "openSource" },
    { type: "separator" },
    { title: "Education", icon: GraduationCap, to: "education" },
    { title: "Certifications", icon: Award, to: "certifications" },
    { title: "Socials", icon: Share2, to: "socials" }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AliRana30", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "https://mail.google.com/mail/?view=cm&to=alimahmoodrana82@gmail.com", label: "Email" }
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
      {/* Hidden ScrollLinks for scroll spy tracking */}
      <div className="hidden">
        {tabs.map((tab) => (
          tab.to && (
            <ScrollLink
              key={tab.title}
              to={tab.to}
              spy={true}
              offset={-80}
              onSetActive={() => setActiveSection(tab.to)}
            >
              {tab.title}
            </ScrollLink>
          )
        ))}
      </div>

      <motion.nav 
        animate={{ 
          y: isTransitioning ? -100 : 0, 
          opacity: isTransitioning ? 0 : 1 
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-primary/80 backdrop-blur-xl border-b border-subtle shadow-lg'
        : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20 relative">
            
            {/* Logo or Brand */}
            <div className="flex items-center">
              <span className="text-sm font-bold tracking-widest text-primary cursor-pointer hover:opacity-85 transition-opacity" onClick={() => handleTabChange(0)}>
                ali.dev
              </span>
            </div>

            {/* Desktop Navigation - Expandable Tabs */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <ExpandableTabs 
                tabs={tabs} 
                activeTab={activeTabIndex !== -1 ? activeTabIndex : null}
                onChange={handleTabChange}
                activeColor="text-primary"
                className="bg-transparent border-none shadow-none"
              />
            </div>

            {/* Desktop Actions - Redesigned CV button matching the nav button structure */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={handleResumeDownload}
                className="relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300 text-secondary hover:bg-elevated hover:text-primary"
              >
                <FaDownload className="w-4 h-4" />
                <span>CV</span>
              </button>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-secondary hover:text-primary transition-colors duration-200"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${isOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="bg-surface border-t border-subtle shadow-2xl h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-6 py-8 space-y-3.5">
              {tabs.map((tab, index) => (
                tab.to && (
                  <button
                    key={tab.title}
                    onClick={() => {
                      handleMobileTabChange(index);
                      setIsOpen(false);
                    }}
                    className={`block text-left w-full text-base font-bold transition-all duration-300 cursor-pointer ${activeSection === tab.to
                      ? 'text-primary translate-x-2'
                      : 'text-secondary hover:text-primary hover:translate-x-1'
                      }`}
                  >
                    {tab.title}
                  </button>
                )
              ))}

              <button
                onClick={() => {
                  handleResumeDownload();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 border border-default bg-elevated text-primary hover:bg-primary transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-widest shadow-sm"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>

              <div className="pt-6 border-t border-subtle">
                <div className="flex justify-start space-x-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-secondary hover:text-primary transition-all duration-300"
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;