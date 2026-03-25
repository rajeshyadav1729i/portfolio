import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { name, socialLinks } = portfolioData.home;

  const IconComponent = ({ icon, className }) => {
    switch (icon) {
      case 'Github': return <Github className={className} />;
      case 'Linkedin': return <Linkedin className={className} />;
      case 'Mail': return <Mail className={className} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-2">
              {name}'s Portfolio
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Thank you for visiting my digital portfolio.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                <IconComponent icon={link.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
          <p className="flex items-center text-slate-500 dark:text-slate-400 text-sm mt-4 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
