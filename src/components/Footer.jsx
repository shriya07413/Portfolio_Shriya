import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-slate-950/80 pt-16 pb-12 px-4 sm:px-6 md:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-50 dark:bg-[#0d0f18] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500 dark:from-primary-400 dark:to-cyan-300">
                    SY
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
              {portfolioData.personal.role}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-slate-900 dark:hover:text-white transition-colors">Certificates</a>
            <a href="#resume" className="hover:text-slate-900 dark:hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="p-2.5 rounded-xl bg-primary-500/15 hover:bg-primary-500/25 text-primary-700 dark:text-primary-300 border border-primary-500/30 transition-all hover:scale-105 shadow-sm"
              title="Back to Top"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Shriya Sanjay Yerane. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
