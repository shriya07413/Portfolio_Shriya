import React, { useEffect, useCallback } from 'react';
import { X, Download, ExternalLink, FileText, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
  }, [isOpen, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Fullscreen Viewer"
    >
      <div
        className="relative w-full max-w-5xl h-[94vh] glass-panel bg-slate-950/95 rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base text-white">
                {portfolioData.personal.name} — Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {portfolioData.personal.resumeFilename}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={portfolioData.personal.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/10"
              title="Open in new browser tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.resumePdf}
              download={portfolioData.personal.resumeFilename}
              className="px-3.5 py-1.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-primary-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              title="Close (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Fullscreen Embed Area */}
        <div className="relative flex-1 bg-slate-900 p-2 sm:p-4 overflow-hidden">
          <object
            data={`${portfolioData.personal.resumePdf}#toolbar=1&navpanes=0`}
            type="application/pdf"
            className="w-full h-full rounded-2xl border border-white/10 bg-white"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-950">
              <FileText className="w-16 h-16 text-primary-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">
                PDF Viewer Preview
              </h4>
              <p className="text-sm text-slate-400 max-w-md mb-6">
                Your browser doesn't support embedded PDFs directly in this viewport. You can download the file or open it in a new tab.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-primary-600 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Open Native Viewer
                </a>
                <a
                  href={portfolioData.personal.resumePdf}
                  download={portfolioData.personal.resumeFilename}
                  className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download File
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-white/10 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Official Resume • Shriya Sanjay Yerane</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
