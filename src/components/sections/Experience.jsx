import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3"
          >
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Work Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-4 w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-blue-200 dark:border-blue-900/50 ml-4 md:ml-0"
        >
          {experience.map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="mb-10 ml-8 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] bg-white dark:bg-slate-950 border-4 border-blue-500 dark:border-blue-400 w-5 h-5 rounded-full mt-1.5 group-hover:scale-125 transition-transform duration-300" />
              
              <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group-hover:border-blue-200 dark:group-hover:border-blue-800">
                <span className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.period}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.role}
                </h3>
                
                <h4 className="text-lg text-slate-700 dark:text-slate-300 mb-4 font-medium">
                  {item.company}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
