import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import EducationTimeline from './Components/EducationTimeline';
import Certifications from './Components/Certifications';
import Socials from './Components/Socials';
import Footer from './Components/Footer';

const Portfolio = () => {
  return (
    <div className="bg-primary text-primary min-h-screen relative flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Continuous Single-Page Flow */}
      <main className="flex-1 w-full relative z-10">
        <Hero />
        <About />
        <Skills />
        <EducationTimeline />
        <Certifications />
        <Socials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;