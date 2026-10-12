import React, { useState } from 'react';
import { FileText, Download, Maximize2, ExternalLink, CheckCircle2, Sparkles, Smartphone, Monitor } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function ResumeSection({ onOpenResumeModal }) {
  const [activeTab, setActiveTab] = useState('embed'); // 'embed' or 'preview'

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/20 mb-3 font-semibold">
            07 // Curriculum Vitae
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Official <span className="text-gradient-cyan">Resume</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mt-3">
            Directly derived from verified academic and professional credentials.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-primary-500 rounded-full mt-4" />
        </div>

        {/* Card Container */}
        <div className="glass-panel rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg overflow-hidden flex flex-col">
          
          {/* Top Control Bar */}
          <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/15 to-cyan-500/15 border border-primary-500/20 flex items-center justify-center text-primary-600 dark:text-cyan-400 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {portfolioData.personal.resumeFilename}
                </h3>
                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Single Page ATS-Compliant PDF
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {/* Desktop vs Preview Toggle */}
              <div className="flex items-center bg-slate-200/80 dark:bg-white/5 rounded-xl p-0.5 border border-slate-300 dark:border-white/10 text-xs mr-1 shadow-inner">
                <button
                  onClick={() => setActiveTab('embed')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    activeTab === 'embed'
                      ? 'bg-white dark:bg-primary-600 text-slate-900 dark:text-white font-semibold shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Inline Viewer</span>
                  <span className="sm:hidden">Viewer</span>
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    activeTab === 'preview'
                      ? 'bg-white dark:bg-primary-600 text-slate-900 dark:text-white font-semibold shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Image Preview</span>
                  <span className="sm:hidden">Preview</span>
                </button>
              </div>

              {/* Fullscreen Button */}
              <button
                onClick={onOpenResumeModal}
                id="resume-fullscreen-btn"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 flex items-center gap-1.5 transition-all shadow-sm"
                title="Open Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5 text-primary-600 dark:text-cyan-400" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>

              {/* Download Resume Button */}
              <a
                href={portfolioData.personal.resumePdf}
                download={portfolioData.personal.resumeFilename}
                id="resume-download-btn"
                className="px-4 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-primary-600 to-cyan-600 hover:from-primary-700 hover:to-cyan-700 text-white flex items-center gap-1.5 shadow-md shadow-primary-500/20 transition-all hover:scale-[1.02]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Viewer Area */}
          <div className="relative w-full min-h-[600px] sm:min-h-[750px] bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-3 sm:p-6">
            
            {activeTab === 'embed' ? (
              <div className="w-full h-[650px] sm:h-[800px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white shadow-md">
                <object
                  data={`${portfolioData.personal.resumePdf}#toolbar=0&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  {/* Fallback for browsers with disabled PDF plugins */}
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
                    <FileText className="w-16 h-16 text-primary-600 dark:text-primary-400 mb-4 animate-bounce" />
                    <h4 className="text-xl font-bold mb-2">Resume Document Ready</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
                      PDF embedding is not supported on this mobile browser. Tap below to preview the high-res render or download directly.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => setActiveTab('preview')}
                        className="px-5 py-2.5 rounded-xl bg-primary-600 text-white text-xs font-bold"
                      >
                        Show Rendered Preview
                      </button>
                      <a
                        href={portfolioData.personal.resumePdf}
                        download={portfolioData.personal.resumeFilename}
                        className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white text-xs font-bold"
                      >
                        Download PDF File
                      </a>
                    </div>
                  </div>
                </object>
              </div>
            ) : (
              <div className="w-full max-w-3xl flex flex-col items-center justify-center">
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-xl bg-white">
                  <img
                    src={portfolioData.personal.resumePreview}
                    alt="Shriya Sanjay Yerane Resume Preview"
                    className="w-full max-h-[800px] object-contain"
                  />
                </div>
              </div>
            )}

          </div>

          {/* Footer Note */}
          <div className="px-6 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
              Verified source document generated from candidate profile
            </span>
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold"
              >
                <span>Direct Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
