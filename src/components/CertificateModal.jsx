import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, RotateCcw, ExternalLink, ShieldCheck, Eye, FileText } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose, onPrev, onNext, currentIndex, totalCount }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [viewMode, setViewMode] = useState('preview'); // 'preview' (image thumbnail) or 'pdf' (inline iframe)

  // Reset zoom and view mode when certificate changes
  useEffect(() => {
    setZoomLevel(1);
    setViewMode('preview');
  }, [certificate]);

  // Keyboard controls: ESC to close, Left/Right arrow keys for navigation
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [isOpen, onClose, onPrev, onNext]);

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

  if (!isOpen || !certificate) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] max-h-[900px] glass-panel bg-slate-950/95 rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-3 pr-4 min-w-0">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary-500/20 text-primary-300 border border-primary-500/30 flex-shrink-0">
              {currentIndex + 1} / {totalCount}
            </span>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-sm sm:text-base text-white truncate">
                {certificate.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono truncate">
                {certificate.issuer} • {certificate.issueDate}
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* View Mode Toggle: Image vs Native PDF */}
            <div className="hidden sm:flex items-center bg-white/5 rounded-xl p-0.5 border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('preview')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  viewMode === 'preview' ? 'bg-primary-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  viewMode === 'pdf' ? 'bg-primary-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF Embed
              </button>
            </div>

            {/* Zoom Controls (when in preview mode) */}
            {viewMode === 'preview' && (
              <div className="hidden sm:flex items-center bg-white/5 rounded-xl border border-white/10">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 hover:bg-white/10 text-slate-300 hover:text-white rounded-l-xl"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-2 text-xs font-mono text-slate-300">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 hover:bg-white/10 text-slate-300 hover:text-white"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-1.5 hover:bg-white/10 text-slate-300 hover:text-white rounded-r-xl"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Credential / Badge Link */}
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/10"
                title="Verify Credential Online"
              >
                <ShieldCheck className="w-4 h-4" />
              </a>
            )}

            {/* Download Button */}
            <a
              href={certificate.pdfUrl}
              download={certificate.clean_file || `${certificate.title}.pdf`}
              className="px-3 py-1.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-primary-500/20"
              title="Download PDF Certificate"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              title="Close (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content Area */}
        <div className="relative flex-1 overflow-auto bg-[#050608] flex items-center justify-center p-4">
          
          {/* Navigation Arrows */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 shadow-lg backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
            title="Previous Certificate (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 shadow-lg backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
            title="Next Certificate (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Certificate View */}
          {viewMode === 'preview' ? (
            <div className="w-full h-full flex items-center justify-center overflow-auto p-2">
              <div
                style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
                className="max-w-full max-h-full flex items-center justify-center"
              >
                <img
                  src={certificate.thumbnailUrl || certificate.pdfUrl}
                  alt={certificate.title}
                  className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <iframe
                src={`${certificate.pdfUrl}#toolbar=0&navpanes=0`}
                title={certificate.title}
                className="w-full h-full rounded-xl border border-white/10 bg-white"
              />
            </div>
          )}
        </div>

        {/* Modal Footer / Details Bar */}
        <div className="px-5 py-3 border-t border-white/10 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-3 text-slate-300">
            <span className="font-semibold text-primary-400">
              {certificate.category}
            </span>
            {certificate.creditHours && (
              <span className="font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                {certificate.creditHours}
              </span>
            )}
            {certificate.verificationCode && (
              <span className="font-mono text-slate-400">
                Code: {certificate.verificationCode}
              </span>
            )}
          </div>

          <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2">
            <span>Use ← / → arrows to navigate • ESC to exit</span>
          </div>
        </div>

      </div>
    </div>
  );
}
