import React from 'react';
import { Quote, MessageSquare } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface TestimonialsProps {
  data: PortfolioData;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const { testimonials } = data;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section 
      aria-label="Peer recommendations and testimonials"
      className="py-20 bg-[#F8F9FA] dark:bg-[#0F172A]/70 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            What Leaders & Collaborators Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Unsolicited feedback from engineering executives and product leads on real-world delivery velocity and architectural impact.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-brand-600/30 dark:text-brand-400/30 mb-4" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{test.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 flex items-center justify-center font-bold text-xs font-mono">
                  {test.avatarText || test.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {test.name}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {test.role} • <span className="font-medium text-slate-700 dark:text-slate-300">{test.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
