import React from 'react';
import { ArrowDown, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface HeroProps {
  data: PortfolioData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenResume }) => {
  const { personalInfo } = data;

  return (
    <section 
      id="hero"
      aria-label="Hero section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden subtle-grid"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{personalInfo.statusText}</span>
          </div>

          {/* Profile Picture (Optional, controlled via data configuration) */}
          {personalInfo.profileImage.showProfileImage && personalInfo.profileImage.imageUrl && (
            <div className="mb-6 flex items-center gap-4">
              <div className="relative">
                <img
                  src={personalInfo.profileImage.imageUrl}
                  alt={personalInfo.profileImage.imageAlt || personalInfo.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-brand-600 shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{personalInfo.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{personalInfo.profileImage.badgeText || "Software Engineer"}</p>
              </div>
            </div>
          )}

          {/* Google-Standard Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
            {personalInfo.headline}
          </h1>

          {/* Sub-headline: Main Tech Stack & Experience */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8">
            {personalInfo.subHeadline}
          </p>

          {/* Call to Action (CTA) Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            {/* View Work (Primary CTA) */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-medium text-sm shadow-sm transition-all duration-150 hover:shadow hover:-translate-y-0.5 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              <span>View Selected Works</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>

            {/* Get in Touch */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-medium text-sm transition-all duration-150 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Get in Touch</span>
            </a>

            {/* Download Resume / View CV */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium text-sm transition-all duration-150"
            >
              <FileText className="w-4 h-4" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Micro Engineering Trust Points */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-6 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>100 Lighthouse Performance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>WCAG AAA Accessible Contrast</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Strict TypeScript Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
