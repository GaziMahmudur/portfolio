import React, { useState } from 'react';
import { Copy, Check, ArrowUp, Send, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

interface ContactFooterProps {
  data: PortfolioData;
  onShowToast: (message: string) => void;
  onOpenResume: () => void;
  onOpenEditor: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  data,
  onShowToast,
  onOpenResume,
  onOpenEditor
}) => {
  const { personalInfo, socialLinks, footerMessage } = data;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    onShowToast(`Email address (${socialLinks.email}) copied to clipboard!`);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact" 
      aria-label="Contact and footer links"
      className="bg-white dark:bg-[#0F172A] border-t border-slate-200/90 dark:border-slate-800 pt-20 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Block */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-[#1E293B]/80 border border-slate-200/90 dark:border-slate-800 mb-16 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A CONVERSATION</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
              {footerMessage.heading}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {footerMessage.subheading}
            </p>

            {/* Direct Email Action Group */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Direct Mailto link */}
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-150 hover:shadow"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              {/* 1-Click Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 font-mono text-xs sm:text-sm transition-colors"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>{socialLinks.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200/80 dark:border-slate-800 text-sm">
          {/* Col 1: Bio / Identity */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white mb-2">
              <span className="w-6 h-6 rounded bg-brand-600 text-white flex items-center justify-center font-mono text-xs">
                GM
              </span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mb-4 leading-relaxed">
              Full-Stack Developer & Product Architect focused on high-performance web systems, accessible interfaces, and resilient cloud architectures.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenEditor}
                className="text-xs font-mono text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
              >
                <span>⚙️ Open Code Config Editor</span>
              </button>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#projects" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Philosophy & Approach
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenResume}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-left"
                >
                  Download Resume
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Profiles */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold mb-3">
              Connect & Verify
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>GitHub (@GaziMahmudur)</span>
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              {socialLinks.twitter && (
                <li>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <span>X (Twitter)</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with React, TypeScript & Tailwind CSS. Zero bloat.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors p-1 rounded"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
