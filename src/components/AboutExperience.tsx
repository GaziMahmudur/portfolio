import React from 'react';
import { Briefcase, Compass, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface AboutExperienceProps {
  data: PortfolioData;
}

export const AboutExperience: React.FC<AboutExperienceProps> = ({ data }) => {
  const { personalInfo, experience } = data;

  return (
    <section 
      id="about" 
      aria-label="About and Experience overview"
      className="py-20 bg-[#F8F9FA] dark:bg-[#0F172A]/70 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Philosophy & Problem-Solving Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Work Philosophy */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>ENGINEERING PHILOSOPHY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Building for Clarity, Speed & Longevity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {personalInfo.bioPhilosophy}
            </p>
            <div className="p-4 rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white mb-1">
                Design System & Performance Rule:
              </p>
              <p>
                "Great software feels invisible: latency under 100ms, accessible contrast without squinting, and predictable mechanics that respect human cognitive flow."
              </p>
            </div>
          </div>

          {/* Right Column: Problem-Solving Approach */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              My Problem-Solving Methodology
            </h3>
            <div className="space-y-4">
              {personalInfo.problemSolvingApproach.map((approach, idx) => {
                const [title, ...descParts] = approach.split(':');
                const desc = descParts.join(':');
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-950/50 text-brand-600 dark:text-brand-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                        {title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {desc.trim()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section: Experience Timeline */}
        <div id="experience" className="pt-10 border-t border-slate-200/80 dark:border-slate-800">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Experience Overview
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              A chronological trajectory of leadership, production deliverables, and architecture milestones.
            </p>
          </div>

          {/* Timeline Tree */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
            {experience.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white dark:bg-[#0F172A] border-2 border-brand-600 group-hover:scale-125 transition-transform" />

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                        {item.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.tenure}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Key Achievements Bullet Points */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-2">
                      Key Deliverables & Achievements:
                    </span>
                    <ul className="space-y-2">
                      {item.achievements.map((ach, achIdx) => (
                        <li key={achIdx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {item.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
