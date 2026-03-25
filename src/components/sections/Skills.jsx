import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Code2, Server, Wrench } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white capitalize">
          {title}
        </h3>
      </div>

      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1.5 font-medium">
              <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
              <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: delay + (index * 0.1), ease: "easeOut" }}
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full relative"
              >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { id: 'frontend', title: 'Frontend Development', icon: Code2, data: skills.frontend },
    { id: 'backend', title: 'Backend / Database', icon: Server, data: skills.backend },
    { id: 'tools', title: 'Tools & DevOps', icon: Wrench, data: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Technical Proficiencies
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-4"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <SkillCategory 
              key={category.id}
              title={category.title}
              icon={category.icon}
              skills={category.data}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
