import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-primary font-semibold text-sm">Shaheryar Mahmood</p>
        <p className="mb-6 text-secondary text-xs font-light">Senior Customer Success Manager | B2B SaaS & AI Operations Specialist • © {currentYear} All rights reserved.</p>
        <div className="flex justify-center space-x-8">
          <a href="https://linkedin.com/in/sherry599/" target="_blank" rel="noopener noreferrer" className="text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-primary" title="LinkedIn">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:sherry33869@gmail.com" className="text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-primary" title="Email">
            <FaEnvelope size={22} />
          </a>
          <a href="tel:+923317733869" className="text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-primary" title="Phone">
            <FaPhone size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
