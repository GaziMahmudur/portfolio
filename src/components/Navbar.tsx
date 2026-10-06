import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Code2, ArrowUpRight } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface NavbarProps {
  data: PortfolioData;
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onOpenEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  darkMode,
  onToggleTheme,
  onOpenResume,
  onOpenEditor
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Works', href: '#projects' },
    { name: 'About & Approach', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800'
          : 'bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-slate-900 dark:text-white font-bold tracking-tight text-base hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-md bg-brand-600 text-white flex items-center justify-center font-mono font-semibold text-sm shadow-sm group-hover:scale-105 transition-transform">
            GM
          </div>
          <span className="font-semibold text-slate-900 dark:text-white">
            {data.personalInfo.name}
          </span>
          <span className="hidden sm:inline-block text-xs text-slate-600 dark:text-slate-400 font-mono">
            /dev
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2.5">
          {/* Quick Edit Config Button */}
          <button
            onClick={onOpenEditor}
            title="Edit Portfolio Data / Open Code Config Editor"
            aria-label="Open Portfolio Data Editor"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300/80 dark:border-slate-700 transition-colors"
          >
            <Code2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Edit Data</span>
          </button>

          {/* Resume Viewer / Download Modal Trigger */}
          <button
            onClick={onOpenResume}
            aria-label="View Resume / CV"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-brand-600 hover:bg-brand-700 text-white shadow-sm transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Dark / Light Mode Switcher */}
          <button
            onClick={onToggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-5 space-y-2.5 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditor();
              }}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-md"
            >
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                Edit Portfolio Data File
              </span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full px-3 py-2.5 text-sm font-medium text-white bg-brand-600 rounded-md hover:bg-brand-700"
            >
              <FileText className="w-4 h-4" />
              View & Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
