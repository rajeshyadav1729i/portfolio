import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Typewriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = texts[textIndex];

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        timer = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
      }
    } else {
      if (text === currentText) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        timer = setTimeout(() => setText(currentText.slice(0, text.length + 1)), typingSpeed);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block min-h-[1.5em] text-blue-600 dark:text-blue-400">
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-blue-600 dark:bg-blue-400 ml-1 align-middle"
      />
    </span>
  );
};

export const Hero = () => {
  const { name, role, tagline, description, typingTexts, socialLinks } = portfolioData.home;

  const IconComponent = ({ icon, className }) => {
    switch (icon) {
      case 'Github': return <Github className={className} />;
      case 'Linkedin': return <Linkedin className={className} />;
      case 'Mail': return <Mail className={className} />;
      default: return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl -z-10 animate-blob mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-lighten" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 md:mt-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-4"
            >
              Hi, my name is
            </motion.h2>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300"
            >
              {name}.
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-6 flex flex-col md:flex-row items-center md:items-start md:justify-start justify-center gap-2 h-auto"
            >
              <span className="shrink-0">I'm a </span>
              <Typewriter texts={typingTexts} />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10"
            >
              {description}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300"
                >
                  <IconComponent icon={link.icon} className="w-5 h-5 text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-sm md:max-w-md relative group drop-shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl rotate-3 scale-105 opacity-20 dark:opacity-40 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-900 z-10 shadow-xl">
              <img 
                src="/profile.jpg" 
                alt={`${name} Profile`} 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </div>
            
            {/* Animated decorative ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -inset-4 border-2 border-dashed border-blue-400/30 dark:border-blue-500/30 rounded-[3rem] -z-10"
            />
          </motion.div>

        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-4"
          aria-label="Scroll to About section"
        >
          <span className="text-sm font-medium mb-2 uppercase tracking-widest block">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
