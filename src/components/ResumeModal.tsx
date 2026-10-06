import React, { useEffect } from 'react';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  data: PortfolioData;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ data, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { personalInfo, experience, skillCategories, socialLinks } = data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 no-print">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Curriculum Vitae / Resume
            </span>
            <span className="hidden sm:inline text-xs text-slate-400 dark:text-slate-500">
              • Printable & Exportable
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print or save as PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close Resume"
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 print:text-black print:bg-white print:p-0">
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 print:border-black">
            <h1 id="modal-resume-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight mb-1">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 print:text-blue-700 mb-3">
              {personalInfo.roles.join(' • ')}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 print:text-slate-800 max-w-2xl leading-relaxed mb-4">
              {personalInfo.subHeadline}
            </p>

            {/* Contact Strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400 print:text-slate-700 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-brand-600" />
                {socialLinks.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                github.com/GaziMahmudur
              </span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                linkedin.com/in/gazimahmudur
              </span>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 print:text-slate-700 font-bold mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experience.map((job, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white print:text-black">
                        {job.role}
                      </span>
                      <span className="font-semibold text-brand-600 dark:text-brand-400 ml-2">
                        @ {job.company}
                      </span>
                    </div>
                    <span className="font-mono text-slate-500 dark:text-slate-400 print:text-slate-600 mt-0.5 sm:mt-0">
                      {job.tenure} • {job.location}
                    </span>
                  </div>
                  <ul className="space-y-1.5 pl-3 border-l-2 border-slate-100 dark:border-slate-800 print:border-slate-300">
                    {job.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="text-xs text-slate-600 dark:text-slate-300 print:text-slate-800 leading-relaxed">
                        • {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Proficiencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 print:text-slate-700 font-bold mb-3">
              TECHNICAL PROFICIENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 print:bg-slate-100 border border-slate-200/80 dark:border-slate-800 print:border-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1">
                    {cat.category}:
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 print:text-slate-800 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Foundations */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 print:text-slate-700 font-bold mb-3">
              EDUCATION & CERTIFICATIONS
            </h2>
            <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 print:border-slate-300 text-xs space-y-1">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white print:text-black">
                <span>B.Sc. in Computer Science & Engineering</span>
                <span className="font-mono text-slate-500">Graduated with Distinction</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Core Focus: Algorithms & Data Structures, Distributed Systems, Software Engineering & Human-Computer Interaction
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between no-print">
          <span className="text-xs text-slate-500 font-mono">
            Press Esc or click Close to return
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
