import React, { useState } from 'react';
import { Code2, BrainCircuit, Layout, Database, Workflow, Check, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const categoryIcons = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  Layout: Layout,
  Database: Database,
  Workflow: Workflow,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...portfolioData.skillsCategories.map(c => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? portfolioData.skillsCategories
    : portfolioData.skillsCategories.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-cyan-600 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
            02 // Technical Capabilities
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white dark:text-white light:text-slate-900 tracking-tight">
            Skills & <span className="text-gradient-cyan">Competencies</span>
          </h2>
          <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mt-3">
            Directly mapped from engineering coursework, enterprise simulations, and production internship experience.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-primary-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white border-transparent shadow-md shadow-primary-500/20'
                  : 'glass-panel border-white/10 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = categoryIcons[cat.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Background decorative glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 group-hover:bg-primary-500/10 rounded-full blur-2xl transition-all" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-primary-300 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cat.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-primary-500/40 transition-all flex items-center gap-2 group/skill"
                      >
                        <span className="text-xs font-semibold text-slate-200 group-hover/skill:text-white">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-primary-500/20 text-primary-300 border border-primary-500/30">
                            {skill.badge}
                          </span>
                        )}
                        {skill.level && !skill.badge && (
                          <span className="text-[9px] font-mono text-slate-400">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-mono">
                    <Check className="w-3.5 h-3.5" /> Verified
                  </span>
                  <span className="font-mono text-slate-400">Production & Academic</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
