import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const { achievements } = portfolioData;

  if (!achievements || achievements.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3 mb-4"
          >
            <Trophy className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
            Achievements
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {achievements.map(achievement => (
            <motion.div 
              key={achievement.id}
              variants={itemVariants}
              className="bg-amber-50 dark:bg-amber-950/20 p-8 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900/30 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <Star className="absolute -bottom-4 -right-4 w-32 h-32 text-amber-100 dark:text-amber-900/20 opacity-50 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-bold rounded-full mb-4">
                  {achievement.date}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {achievement.title}
                </h3>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Achievements;
