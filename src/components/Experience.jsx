import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-400 dark:text-primary-400 light:text-primary-600 bg-primary-950/40 px-3 py-1 rounded-full border border-primary-500/20 mb-3">
            03 // Work History
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white dark:text-white light:text-slate-900 tracking-tight">
            Work <span className="text-gradient-purple">Experience</span>
          </h2>
          <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mt-3">
            Real-world software engineering and agentic automation experience.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-primary-500/30 space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 border-2 border-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-400 animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 glass-panel-hover transition-all">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-primary-400 bg-primary-500/10 px-2.5 py-1 rounded-md border border-primary-500/20 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-cyan-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-primary-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-cyan-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Stack:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
