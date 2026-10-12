import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download, Sparkles, Send } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolio';

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certificates', 'resume', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 md:px-8">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-glass shadow-black/20 border-white/10 dark:border-white/10 py-2.5 px-4 sm:px-6'
          : 'bg-transparent py-2 px-2'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            id="brand-logo"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-primary-500/20">
              <div className="w-full h-full bg-[#0d0f18] dark:bg-[#0d0f18] light:bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-sm tracking-tighter bg-gradient-to-r from-primary-400 to-cyan-300 bg-clip-text text-transparent">
                  SY
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-primary-400 transition-colors">
                Shriya Yerane
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-400 light:text-slate-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                AI & Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-${link.name.toLowerCase()}`}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-primary-300 dark:text-primary-300 light:text-primary-600 font-semibold'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            {/* Quick Resume View Button */}
            <button
              onClick={onOpenResumeModal}
              id="nav-quick-resume-btn"
              className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-1.5 transition-all focus:ring-2 focus:ring-primary-500/50"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            {/* Contact / Hire Me CTA */}
            <a
              href="#contact"
              id="nav-contact-cta"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-cyan-500 text-white shadow-lg shadow-primary-500/25 transition-all duration-300 flex items-center gap-1.5 hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle menu"
              className="p-2 rounded-xl border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 text-slate-200 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 dark:border-white/10 flex flex-col gap-1 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-500">→</span>
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="px-3 py-2 text-xs font-semibold rounded-xl border border-white/10 bg-white/5 text-slate-200 flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                Resume PDF
              </button>
              <a
                href={portfolioData.personal.resumePdf}
                download={portfolioData.personal.resumeFilename}
                className="px-3 py-2 text-xs font-semibold rounded-xl bg-primary-600 text-white flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
