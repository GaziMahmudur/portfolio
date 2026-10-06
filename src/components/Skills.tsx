import React from 'react';
import { Wrench, Code, Server, Cloud, Palette } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface SkillsProps {
  data: PortfolioData;
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const { skillCategories } = data;

  const categoryIcons = [Code, Server, Cloud, Palette];

  return (
    <section 
      id="skills" 
      aria-label="Categorized skills and tools"
      className="py-20 bg-white dark:bg-[#0F172A] border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Skills & Tooling Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Organized systematically by layer of engineering responsibility, focusing on production-grade mastery rather than superficial buzzwords.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={category.category}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-brand-600 dark:text-brand-400">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-colors ${
                          skill.highlight
                            ? 'bg-blue-50/40 dark:bg-blue-950/20 border-blue-200/80 dark:border-blue-900/50 text-slate-900 dark:text-white font-medium'
                            : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200/70 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-brand-400 shrink-0" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
