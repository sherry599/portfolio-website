import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import OpenSourceContributions from './Components/OpenSourceContributions';
import EducationTimeline from './Components/EducationTimeline';
import Certifications from './Components/Certifications';
import Socials from './Components/Socials';
import Footer from './Components/Footer';

const Portfolio = () => {
  return (
    <div className="bg-primary text-primary min-h-screen relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Pinned Underneath */}
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <Hero />
        </div>
      </div>

      {/* Spacer to push the sheet content down by exactly 1 viewport */}
      <div className="relative w-full h-screen pointer-events-none z-0" />

      {/* Sheet Content Layer with Sticky reveals */}
      <div className="relative z-10 bg-primary">
        
        {/* About Section - Sticks and reveals over Hero */}
        <div className="sticky top-0 z-10 bg-primary border-t border-default/40 shadow-[0_-15px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_-15px_30px_rgba(0,0,0,0.4)]">
          <About />
        </div>

        {/* Skills and subsequent sections scroll naturally, covering About when scrolled */}
        <div className="relative z-20 bg-primary border-t border-default/40 shadow-[0_-15px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_-15px_30px_rgba(0,0,0,0.4)]">
          <Skills />
          <Projects />
          <OpenSourceContributions />
          <EducationTimeline />
          <Certifications />
          <Socials />
          <Footer />
        </div>

      </div>
    </div>
  );
};

export default Portfolio;