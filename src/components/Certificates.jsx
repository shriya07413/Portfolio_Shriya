import React, { useState, useMemo } from 'react';
import { Award, Search, Filter, ExternalLink, Download, Eye, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import CertificateModal from './CertificateModal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const certificates = portfolioData.certificates;

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(certificates.map((c) => c.category || 'General'));
    return ['All', ...Array.from(cats)];
  }, [certificates]);

  // Filter certificates by search and category
  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cert.description && cert.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [certificates, selectedCategory, searchQuery]);

  const handleOpenModal = (cert, idx) => {
    setSelectedCert(cert);
    setModalIndex(idx);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  const handlePrev = () => {
    const nextIdx = (modalIndex - 1 + filteredCertificates.length) % filteredCertificates.length;
    setModalIndex(nextIdx);
    setSelectedCert(filteredCertificates[nextIdx]);
  };

  const handleNext = () => {
    const nextIdx = (modalIndex + 1) % filteredCertificates.length;
    setModalIndex(nextIdx);
    setSelectedCert(filteredCertificates[nextIdx]);
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-400 dark:text-primary-400 light:text-primary-600 bg-primary-950/40 px-3 py-1 rounded-full border border-primary-500/20 mb-3">
            06 // Verified Credentials
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white dark:text-white light:text-slate-900 tracking-tight">
            Certifications & <span className="text-gradient-purple">Simulations</span>
          </h2>
          <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mt-3">
            Verified credentials in Agentic AI, Red Hat Systems & Automation, Data Analytics, and Cybersecurity.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white border-transparent shadow-md shadow-primary-500/20'
                    : 'glass-panel border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search credentials, issuers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-xs text-white dark:text-white light:text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
            />
          </div>
        </div>

        {/* Responsive Card Grid */}
        {filteredCertificates.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-3xl border border-white/10 p-8">
            <Award className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold text-base">No certificates match your query.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs font-mono text-primary-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, idx) => (
              <div
                key={cert.id || idx}
                onClick={() => handleOpenModal(cert, idx)}
                className="glass-panel rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between overflow-hidden cursor-pointer group transition-all duration-300"
              >
                {/* Thumbnail Preview Area */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-white/10">
                  {cert.thumbnailUrl ? (
                    <img
                      src={cert.thumbnailUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-950/40 to-slate-900">
                      <Award className="w-16 h-16 text-primary-400/40" />
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                    <span className="px-4 py-2 rounded-xl bg-primary-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-primary-500/30">
                      <Eye className="w-3.5 h-3.5" />
                      View Certificate
                    </span>
                  </div>

                  {/* Issuer Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white">
                    {cert.issuer}
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                    {cert.issueDate}
                  </div>
                </div>

                {/* Card Info Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-primary-400 font-semibold">
                        {cert.category}
                      </span>
                      {cert.creditHours && (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                          {cert.creditHours}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-base text-white group-hover:text-primary-300 transition-colors leading-snug mb-2 line-clamp-2">
                      {cert.title}
                    </h3>

                    {cert.description && (
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                      <Eye className="w-3.5 h-3.5" /> Click to inspect
                    </span>

                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 transition-colors"
                          title="Verify Certificate"
                        >
                          <ShieldCheck className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={cert.pdfUrl}
                        download={cert.clean_file || `${cert.title}.pdf`}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        title="Download PDF"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox / Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={!!selectedCert}
        onClose={handleCloseModal}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={modalIndex}
        totalCount={filteredCertificates.length}
      />
    </section>
  );
}
