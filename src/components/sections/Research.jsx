import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { BookOpen, ExternalLink } from 'lucide-react';

const Research = () => {
  const { research } = portfolioData;

  if (!research || research.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="research" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3 mb-4"
          >
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Research & Publications
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {research.map(item => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
                <span className="shrink-0 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold rounded-full self-start">
                  {item.date}
                </span>
              </div>
              
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                Published in: {item.publisher}
              </p>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {item.description}
              </p>
              
              {item.link && (
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  Read Publication <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Research;
