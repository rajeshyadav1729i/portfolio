import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
  const { title, bio, highlights } = portfolioData.about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left column - Text */}
          <div>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-4"
            >
              <span className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded-full inline-block"></span>
              {title}
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              {bio}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300 font-medium">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column - Image/Visual */}
          <motion.div 
            variants={itemVariants}
            className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/10 mix-blend-overlay z-10 rounded-2xl" />
            <img 
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2000&auto=format&fit=crop" 
              alt="About Me" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
