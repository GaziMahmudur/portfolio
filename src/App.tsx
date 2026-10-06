import { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioData, CaseStudy } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Projects } from './components/Projects';
import { AboutExperience } from './components/AboutExperience';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { ContactFooter } from './components/ContactFooter';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { LiveConfigEditorModal } from './components/LiveConfigEditorModal';
import { Toast } from './components/Toast';
import { Code2 } from 'lucide-react';

export function App() {
  // Theme state: defaults to dark or system preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Portfolio data state
  const [data, setData] = useState<PortfolioData>(() => {
    const savedData = localStorage.getItem('custom_portfolio_data');
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch {
        return initialPortfolioData;
      }
    }
    return initialPortfolioData;
  });

  // Modal states
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Apply dark class to documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const handleUpdateData = (newData: PortfolioData) => {
    setData(newData);
    localStorage.setItem('custom_portfolio_data', JSON.stringify(newData));
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0F172A] text-[#1E293B] dark:text-[#F1F5F9] font-sans selection:bg-brand-600 selection:text-white transition-colors duration-150">
      {/* Navigation Bar */}
      <Navbar
        data={data}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeOpen(true)}
        onOpenEditor={() => setEditorOpen(true)}
      />

      {/* Main Single-Page Multi-Section Body */}
      <main id="main-content">
        {/* Section 1: Hero */}
        <Hero
          data={data}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Section 2: Social Proof / Metrics */}
        <SocialProof
          data={data}
        />

        {/* Section 3: Selected Works / Case Studies */}
        <Projects
          data={data}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Section 4: About Me & Experience Timeline */}
        <AboutExperience
          data={data}
        />

        {/* Section 5: Categorized Skills & Tooling */}
        <Skills
          data={data}
        />

        {/* Section 6: Testimonials */}
        <Testimonials
          data={data}
        />
      </main>

      {/* Section 7: Contact & Footer */}
      <ContactFooter
        data={data}
        onShowToast={showToast}
        onOpenResume={() => setResumeOpen(true)}
        onOpenEditor={() => setEditorOpen(true)}
      />

      {/* Floating Quick Config Trigger Pill */}
      <aside aria-label="Developer utilities" className="fixed bottom-6 left-6 z-30 hidden sm:block">
        <button
          onClick={() => setEditorOpen(true)}
          title="Open Data Editor (src/data/portfolioData.ts)"
          aria-label="Open Data Config Editor"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 dark:bg-slate-800/90 hover:bg-slate-950 dark:hover:bg-slate-700 text-white text-xs font-mono font-medium shadow-lg backdrop-blur-md border border-slate-700/80 hover:scale-105 transition-all duration-150"
        >
          <Code2 className="w-3.5 h-3.5 text-brand-400" />
          <span>Config File: portfolioData.ts</span>
        </button>
      </aside>

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        data={data}
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Interactive In-Browser Config & Data Editor Modal */}
      <LiveConfigEditorModal
        currentData={data}
        isOpen={editorOpen}
        onClose={() => setEditorOpen(false)}
        onUpdateData={handleUpdateData}
        onShowToast={showToast}
      />

      {/* Micro-interaction Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
