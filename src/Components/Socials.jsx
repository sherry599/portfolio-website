import { SiLinkedin, SiGithub, SiLeetcode, SiGmail } from 'react-icons/si';
import { ArrowUpRight, MessageSquare, Share2, Terminal, Code2 } from 'lucide-react';

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
      bgColor: 'bg-[#EA4335]/10'
    },
    {
      icon: SiLinkedin,
      title: "LinkedIn",
      subtitle: "Professional Network",
      value: "Ali Mahmood Rana",
      link: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/",
      description: "Connect with me",
      color: '#0A66C2',
      bgColor: 'bg-[#0A66C2]/10'
    },
    {
      icon: SiGithub,
      title: "GitHub",
      subtitle: "Open Source Projects",
      value: "AliRana30",
      link: "https://github.com/AliRana30",
      description: "Explore my code",
      color: 'var(--text-primary)',
      bgColor: 'var(--bg-elevated)'
    },
    {
      icon: SiLeetcode,
      title: "LeetCode",
      subtitle: "Algorithmic Prowess",
      value: "AliRana28",
      link: "https://leetcode.com/u/AliRana28/",
      description: "View my solutions",
      color: '#FFA116',
      bgColor: 'bg-[#FFA116]/10'
    }
  ];

  return (
    <div className="relative bg-primary">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-8 md:left-20 w-48 md:w-64 h-48 md:h-64 border border-subtle rotate-45"></div>
        <div className="absolute bottom-40 right-8 md:right-16 w-32 md:w-40 h-32 md:h-40 border border-subtle rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-16 md:h-24 bg-border-default rotate-12"></div>
      </div>

      <section id="socials" className="py-10 md:py-14 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-12 flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1.5px] bg-accent"></div>
                <span className="text-xs md:text-sm font-medium text-secondary tracking-wider uppercase mono">Get In Touch</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-6">
                Let's Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">Collaborate</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-surface border border-subtle p-10 transition-all duration-500 overflow-hidden shadow-lg"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = social.color.startsWith('var') ? 'var(--border-default)' : `${social.color}40`;
                      e.currentTarget.style.boxShadow = `0 20px 40px -10px ${social.color.startsWith('var') ? 'rgba(0,0,0,0.1)' : social.color + '15'}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`w-20 h-20 mb-8 flex items-center justify-center rounded-[2rem] transition-all duration-500 bg-elevated border border-subtle shadow-inner group-hover:bg-transparent`}>
                        <IconComponent size={32} style={{ color: social.color.startsWith('var') ? 'var(--text-primary)' : social.color }} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-primary mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {social.title}
                      </h3>
                      
                      <p className="text-xs text-secondary mb-8 font-bold uppercase tracking-widest max-w-[150px]">
                        {social.subtitle}
                      </p>
                      
                      <div className="w-full h-[1px] bg-border-subtle mb-8 transition-colors group-hover:bg-border-default"></div>

                      <div className="flex items-center justify-center gap-2 text-[10px] font-black text-secondary group-hover:text-primary uppercase tracking-[0.3em] transition-all duration-500">
                        <span className="mono">Connect</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                      </div>
                    </div>

                    {/* Background glow effect */}
                    <div 
                      className="absolute -bottom-20 -right-20 w-48 h-48 blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                      style={{ backgroundColor: social.color }}
                    ></div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
  );
};

export default Socials;