import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Rocket, Calendar } from 'lucide-react';

const Hackathons = () => {
  const { hackathons } = portfolioData;

  if (!hackathons || hackathons.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="hackathons" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3 mb-4"
          >
            <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Hackathons
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
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {hackathons.map(hackathon => (
            <motion.div 
              key={hackathon.id}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border top-0 border-slate-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  {hackathon.title}
                </h3>
                <span className="inline-flex items-center text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full whitespace-nowrap">
                  <Calendar className="w-3 h-3 mr-1" /> {hackathon.date}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
                  {hackathon.position}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Project: {hackathon.project}
                </span>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {hackathon.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hackathons;
