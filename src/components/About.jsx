import React from 'react';
import { Award, GraduationCap, Flame, Trophy, Cpu, Code2, Users, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-400 dark:text-primary-400 light:text-primary-600 bg-primary-950/40 px-3 py-1 rounded-full border border-primary-500/20 mb-3">
            01 // Profile & Background
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white dark:text-white light:text-slate-900 tracking-tight">
            About <span className="text-gradient-purple">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Main Bio (Span 8) */}
          <div className="md:col-span-12 lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 dark:border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white dark:text-white light:text-slate-900">
                    Engineering Intelligent Workflows
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
                    3rd-Year B.Tech Computer Science @ Symbiosis Institute of Technology
                  </p>
                </div>
              </div>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                {portfolioData.summary}
              </p>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether deploying machine learning-based auto-scaling algorithms to prevent cloud resource wastage, or orchestrating autonomous agentic pipelines with Make.com and webhooks, I focus on building resilient, performant, and grounded software systems.
              </p>
            </div>

            {/* Quick Skills Pills */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                ⚡ Agentic AI & RAG
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                🚀 FastAPI & Streamlit
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                🌐 React & Modern JavaScript
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                ☁️ Red Hat Linux & Ansible
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                🔄 Make.com Automation
              </span>
            </div>
          </div>

          {/* Card 2: Quick Metrics Bento (Span 4) */}
          <div className="md:col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
            {portfolioData.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between transition-transform hover:-translate-y-1 ${
                  idx === 0 ? 'col-span-2 bg-gradient-to-br from-primary-950/40 to-slate-900/60' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">{stat.label}</span>
                  {idx === 0 && <GraduationCap className="w-4 h-4 text-primary-400" />}
                  {idx === 1 && <Award className="w-4 h-4 text-cyan-400" />}
                  {idx === 2 && <Code2 className="w-4 h-4 text-emerald-400" />}
                  {idx === 3 && <Flame className="w-4 h-4 text-purple-400" />}
                  {idx === 4 && <Trophy className="w-4 h-4 text-amber-400" />}
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Card 3: Sports, Leadership & Nationals (Span 12) */}
          <div className="md:col-span-12 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  Leadership, Extracurricular & Athletic Honors
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Extracurricular achievements documented from official academic records
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolioData.achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                        {ach.year}
                      </span>
                      <span className="text-[10px] text-amber-400 font-semibold">
                        {ach.category}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-white mb-2 leading-snug">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
