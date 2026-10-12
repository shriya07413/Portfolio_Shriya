import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-400 dark:text-primary-400 light:text-primary-600 bg-primary-950/40 px-3 py-1 rounded-full border border-primary-500/20 mb-3">
            05 // Academic Foundations
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white dark:text-white light:text-slate-900 tracking-tight">
            Education & <span className="text-gradient-purple">Academic Record</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className={`glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-3 bg-gradient-to-br from-primary-950/30 to-slate-900/60 border-primary-500/30' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-cyan-400 mb-3">
                  {edu.institution}
                </p>

                {/* Score / CGPA Badge */}
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold bg-primary-500/20 text-primary-300 border border-primary-500/30 mb-4">
                  {edu.score}
                </div>

                {/* Highlights */}
                {edu.highlights && (
                  <div className="space-y-1.5 mt-2">
                    {edu.highlights.map((h, hIdx) => (
                      <p key={hIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="text-primary-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Status</span>
                <span className="text-emerald-400 font-semibold">{edu.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
