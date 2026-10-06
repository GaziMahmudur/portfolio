import React from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { PortfolioData, CaseStudy } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  data: PortfolioData;
  onSelectProject: (project: CaseStudy) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ data, onSelectProject }) => {
  const { projects } = data;

  return (
    <section 
      id="projects" 
      aria-label="Selected engineering case studies"
      className="py-20 bg-white dark:bg-[#0F172A] border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Selected Works & Engineering Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Curated high-impact production systems engineered with rigorous attention to speed, scalable system design, and verifiable business metrics.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white dark:bg-[#1E293B] rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all duration-200 overflow-hidden"
            >
              {/* Product Mockup / Thumbnail View */}
              <div 
                className="relative h-56 sm:h-64 overflow-hidden bg-slate-100 dark:bg-slate-900 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.thumbnailAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay Badge for Impact Metric */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-emerald-400 font-mono text-xs font-semibold shadow-sm border border-slate-700/60">
                    <Sparkles className="w-3 h-3" />
                    <span>{project.impact}</span>
                  </span>
                </div>

                {/* Clickable Overlay Hint */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white font-medium text-xs shadow-md">
                    Explore Deep-Dive Process →
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Timeline */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-semibold text-brand-600 dark:text-brand-400">{project.category}</span>
                    <span>{project.timeline}</span>
                  </div>

                  {/* Project Title */}
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 cursor-pointer group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors"
                  >
                    {project.title}
                  </h3>

                  {/* Problem Statement (2 lines max) */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">
                      Problem Solved
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live Demo for ${project.title}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
