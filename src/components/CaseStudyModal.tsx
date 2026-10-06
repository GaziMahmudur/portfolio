import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, BarChart3, Layers, ShieldAlert } from 'lucide-react';
import { CaseStudy } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { detailedCaseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-semibold">
              Deep-Dive Case Study
            </span>
            <h2 id="modal-case-study-title" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white line-clamp-1">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Metadata Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs">
            <div>
              <span className="text-slate-500 dark:text-slate-400 block mb-1">Category</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{project.category}</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block mb-1">My Role</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block mb-1">Timeline</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{project.timeline}</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block mb-1">Primary Impact</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{project.impact}</span>
            </div>
          </div>

          {/* Thumbnail / Mockup View */}
          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <img
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs shadow-sm transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Launch Live Preview / Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium text-xs transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}
            {project.stitchUrl && (
              <a
                href={project.stitchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 font-medium text-xs transition-colors"
              >
                <span>Google Stitch Design System</span>
              </a>
            )}
          </div>

          {/* Google Standard Process Section: Problem -> Solution -> Architecture -> Impact */}
          <div className="space-y-8 divide-y divide-slate-100 dark:divide-slate-800/80">
            {/* 1. THE PROBLEM */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-md bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400">
                  <ShieldAlert className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                  1. The Problem Statement & Constraints
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {detailedCaseStudy.context}
              </p>
              <ul className="space-y-2">
                {detailedCaseStudy.coreProblem.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. THE SOLUTION */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-950/50 text-brand-600 dark:text-brand-400">
                  <Layers className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                  2. Architectural Solution & UX Strategy
                </h3>
              </div>
              <ul className="space-y-2.5">
                {detailedCaseStudy.solutionApproach.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. ARCHITECTURE & TECHNICAL DECISIONS */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-md bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400">
                  <Cpu className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                  3. System Architecture & Technical Trade-Offs
                </h3>
              </div>

              {detailedCaseStudy.architecture.diagramTitle && (
                <div className="p-3.5 mb-4 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs border border-slate-700">
                  <span className="text-slate-400 text-[10px] block mb-1">Architecture Topology:</span>
                  <div className="font-semibold text-emerald-400">
                    {detailedCaseStudy.architecture.diagramTitle}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-2">Key Engineering Highlights:</h4>
                  <ul className="space-y-1.5">
                    {detailedCaseStudy.architecture.highlights.map((item, idx) => (
                      <li key={idx} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="text-brand-600 dark:text-brand-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-2">Technical Trade-Off Rationale:</h4>
                  <ul className="space-y-1.5">
                    {detailedCaseStudy.architecture.keyDecisions.map((item, idx) => (
                      <li key={idx} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. MEASURABLE IMPACT */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-md bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                  <BarChart3 className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                  4. Measurable Engineering & Business Impact
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {detailedCaseStudy.measurableImpact.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40">
                    <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-200 leading-snug">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>

              {detailedCaseStudy.testimonialQuote && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border-l-4 border-brand-600 text-xs">
                  <p className="italic text-slate-700 dark:text-slate-300 mb-2">
                    "{detailedCaseStudy.testimonialQuote.quote}"
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    — {detailedCaseStudy.testimonialQuote.author}, <span className="text-slate-500">{detailedCaseStudy.testimonialQuote.title}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                Technology Stack Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Close Case Study (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
