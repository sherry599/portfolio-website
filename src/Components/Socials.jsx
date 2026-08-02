import { motion } from 'framer-motion';
import { SiLinkedin, SiGithub, SiLeetcode, SiGmail } from 'react-icons/si';
import { ArrowUpRight } from 'lucide-react';

const Socials = () => {
  const socialLinks = [
    {
      icon: SiGmail,
      title: "Gmail",
      subtitle: "Professional Inquiries",
      value: "alimahmoodrana82@gmail.com",
      link: "mailto:alimahmoodrana82@gmail.com",
      description: "Send an email",
      color: '#EA4335',
      glowClass: 'group-hover:border-[#EA4335]/30 group-hover:shadow-[0_0_30px_rgba(234,67,53,0.15)]',
      bgGlow: 'bg-[#EA4335]/5'
    },
    {
      icon: SiLinkedin,
      title: "LinkedIn",
      subtitle: "Professional Network",
      value: "Ali Mahmood Rana",
      link: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/",
      description: "Connect with me",
      color: '#0A66C2',
      glowClass: 'group-hover:border-[#0A66C2]/30 group-hover:shadow-[0_0_30px_rgba(10,102,194,0.15)]',
      bgGlow: 'bg-[#0A66C2]/5'
    },
    {
      icon: SiGithub,
      title: "GitHub",
      subtitle: "Open Source Projects",
      value: "AliRana30",
      link: "https://github.com/AliRana30",
      description: "Explore my code",
      color: '#24292e',
      glowClass: 'group-hover:border-neutral-500/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]',
      bgGlow: 'bg-neutral-500/5'
    },
    {
      icon: SiLeetcode,
      title: "LeetCode",
      subtitle: "Algorithmic Prowess",
      value: "AliRana28",
      link: "https://leetcode.com/u/AliRana28/",
      description: "View my solutions",
      color: '#FFA116',
      glowClass: 'group-hover:border-[#FFA116]/30 group-hover:shadow-[0_0_30px_rgba(255,161,22,0.15)]',
      bgGlow: 'bg-[#FFA116]/5'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative bg-primary overflow-hidden">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-32 left-8 md:left-20 w-48 md:w-64 h-48 md:h-64 border border-zinc-200 dark:border-zinc-800/40 rotate-45"></div>
        <div className="absolute bottom-40 right-8 md:right-16 w-32 md:w-40 h-32 md:h-40 border border-zinc-200 dark:border-zinc-800/40 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-16 md:h-24 bg-zinc-200 dark:bg-zinc-800/40 rotate-12"></div>
      </div>

      <section id="socials" className="py-14 md:py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1.5px] bg-accent"></div>
              <span className="text-xs md:text-sm font-medium text-secondary tracking-wider uppercase mono">Get In Touch</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-6">
              Let's Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">Collaborate</span>
            </h2>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className={`group relative flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800/60 bg-surface/30 p-8 transition-all duration-300 hover:bg-surface/60 overflow-hidden shadow-sm hover:shadow-xl ${social.glowClass} transform-gpu`}
                >
                  {/* Glowing background gradient on hover */}
                  <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${social.bgGlow}`} />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-300 bg-elevated border border-zinc-200 dark:border-zinc-800/60 shadow-sm group-hover:scale-110 group-hover:bg-primary">
                      <IconComponent size={28} style={{ color: social.color }} className="transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-primary mb-1.5 tracking-tight group-hover:text-primary transition-colors">
                      {social.title}
                    </h3>
                    
                    <p className="text-[10px] text-secondary mb-6 font-semibold uppercase tracking-widest leading-none">
                      {social.subtitle}
                    </p>
                    
                    <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800/60 mb-6 transition-colors"></div>

                    <div className="flex items-center justify-center gap-1.5 text-[9px] font-bold text-secondary group-hover:text-primary uppercase tracking-[0.25em] transition-all duration-300">
                      <span className="mono">Connect</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Corner Accent Line */}
                  <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-8px] right-[-8px] w-4 h-4 border-r border-t border-zinc-200 dark:border-zinc-800/60 opacity-50 group-hover:border-primary group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Socials;