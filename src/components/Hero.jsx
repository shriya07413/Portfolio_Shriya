import React, { useState, useEffect } from 'react';
import { FileText, Download, Mail, Github, Linkedin, ArrowRight, Sparkles, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const TYPING_PHRASES = [
  "Building Agentic AI & RAG Workflows",
  "Cloud Auto-Scaling with ML & FastAPI",
  "Responsive Frontend Engineering with React",
  "DevOps Automation & Systems Architecture",
];

export default function Hero({ onOpenResumeModal }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const fullText = TYPING_PHRASES[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, isDeleting ? 40 : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 tracking-wide">
                {portfolioData.personal.availability}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.08] text-slate-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="text-gradient-multicolor block sm:inline">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Role & Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-5">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">
                {portfolioData.personal.title}
              </span>
              <span className="hidden sm:inline text-slate-400 dark:text-slate-500">•</span>
              <span className="text-xs sm:text-sm font-mono text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5 bg-cyan-50 dark:bg-cyan-950/30 px-2.5 py-1 rounded-md border border-cyan-200 dark:border-cyan-500/20">
                <Terminal className="w-3.5 h-3.5" />
                <span>B.Tech CSE '28 (3rd Year)</span>
              </span>
            </div>

            {/* Animated Dynamic Terminal Typing */}
            <div className="w-full max-w-xl mb-6 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-300 flex items-center min-h-[44px] shadow-sm">
              <span className="text-primary-600 dark:text-primary-400 font-bold mr-2">$</span>
              <span className="text-slate-900 dark:text-slate-100 font-medium">
                {currentText}
              </span>
              <span className="inline-block w-2 h-4 bg-primary-500 ml-1 animate-pulse" />
            </div>

            {/* Resume Summary Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {portfolioData.personal.tagline} Experienced in hands-on AI engineering, RAG pipelines, frontend development, and event-driven automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 w-full sm:w-auto">
              {/* View Resume (Modal) */}
              <button
                onClick={onOpenResumeModal}
                id="hero-view-resume-btn"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-semibold text-sm bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-500 hover:from-primary-700 hover:to-cyan-600 text-white shadow-md shadow-primary-500/25 hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              {/* Download Resume Button */}
              <a
                href={portfolioData.personal.resumePdf}
                download={portfolioData.personal.resumeFilename}
                id="hero-download-resume-btn"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-semibold text-sm border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download PDF</span>
              </a>

              {/* Contact Me CTA */}
              <a
                href="#contact"
                id="hero-contact-btn"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-semibold text-sm border border-primary-500/30 text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Links & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/5 w-full">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {portfolioData.personal.location}
              </span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors flex items-center gap-1 text-slate-700 dark:text-slate-400"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/{portfolioData.personal.githubUsername}</span>
              </a>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                id="hero-social-email"
                className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 text-slate-700 dark:text-slate-400"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{portfolioData.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Portrait & Bento Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glow Backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-cyan-400/20 to-purple-500/10 rounded-3xl blur-3xl transform scale-95 pointer-events-none" />

            <div className="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto">
              
              {/* Main Portrait Frame */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-white dark:from-white/15 via-slate-100 dark:via-white/5 to-transparent border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-md">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <img
                    src={portfolioData.personal.avatar}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Shriya Yerane</p>
                      <p className="text-[10px] text-cyan-300 font-mono">B.Tech CSE • CGPA 7.09</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary-500/30 text-primary-300 border border-primary-500/40">
                      SIT Nagpur
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: PremitiveKey AI Internship */}
              <div className="absolute -top-4 -left-6 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-panel shadow-md border border-primary-500/30 animate-float">
                <div className="w-8 h-8 rounded-xl bg-primary-500/15 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-900 dark:text-white">AI Intern</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">PremitiveKey</p>
                </div>
              </div>

              {/* Floating Badge 2: 9+ Certifications */}
              <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-panel shadow-md border border-cyan-500/30">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-900 dark:text-white">9+ Certifications</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Red Hat, Deloitte & Forage</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
