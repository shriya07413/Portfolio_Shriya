import React from 'react';
import { Github, Cloud, Database, Bot, Radio, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20 mb-3 font-semibold">
            04 // Engineering Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-gradient-multicolor">Projects</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mt-3">
            Grounded systems spanning Machine Learning, RAG, Web Architectures, and Hardware Integration.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-primary-500 rounded-full mt-4" />
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Project 1: Cloud Auto-Scaling ML Framework (Span 7) */}
          <div className="md:col-span-12 lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 glass-panel-hover flex flex-col justify-between relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/15 transition-all pointer-events-none" />

            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-primary-50 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-500/30 flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5" />
                  Cloud & Machine Learning
                </span>
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                  Active Development
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors mb-3 leading-snug">
                ML-Driven Auto-Scaling & Cost Optimization Framework for Cloud Resource Management
              </h3>

              {/* Description */}
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-5">
                {portfolioData.projects[0].description}
              </p>

              {/* Technical Highlights list */}
              <div className="space-y-2 mb-6 bg-slate-100/90 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-white/5">
                {portfolioData.projects[0].details.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-primary-600 dark:text-primary-400 mt-0.5">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Tags & Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.projects[0].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.projects[0].githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white border border-slate-200 dark:border-transparent flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Trustworthy RAG System (Span 5) */}
          <div className="md:col-span-12 lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 glass-panel-hover flex flex-col justify-between relative overflow-hidden group shadow-sm">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  RAG & LangChain
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Completed Academic
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                Trustworthy Retrieval-Augmented Generation (RAG) System
              </h3>

              {/* Description */}
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-5">
                {portfolioData.projects[1].description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6 bg-slate-100/90 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-white/5">
                {portfolioData.projects[1].details.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Tags & Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.projects[1].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={portfolioData.projects[1].githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white border border-slate-200 dark:border-transparent flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Project 3: Intelligent Chatbot (Span 6) */}
          <div className="md:col-span-12 lg:col-span-6 glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 glass-panel-hover flex flex-col justify-between group shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  NLP & Conversational AI
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Academic Project</span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors mb-2">
                Intelligent Conversational Chatbot
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {portfolioData.projects[2].description}
              </p>

              <div className="space-y-1.5 mb-5 bg-slate-100/90 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-white/5">
                {portfolioData.projects[2].details.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-purple-600 dark:text-purple-400">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.projects[2].technologies.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={portfolioData.projects[2].githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project 4: Arduino Rain Shade (Span 6) */}
          <div className="md:col-span-12 lg:col-span-6 glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 glass-panel-hover flex flex-col justify-between group shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5" />
                  Embedded Systems & IoT
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Hardware Integration</span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors mb-2">
                Automatic Rain Shade System Using Arduino
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {portfolioData.projects[3].description}
              </p>

              <div className="space-y-1.5 mb-5 bg-slate-100/90 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-white/5">
                {portfolioData.projects[3].details.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.projects[3].technologies.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={portfolioData.projects[3].githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
