import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState(null); // null, 'sending', 'sent'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.rawPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981'],
      });
    } catch (_) {}

    // Form fallback: open mailto with filled fields
    const mailtoSubject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setStatus('sent');
      window.location.href = mailtoLink;
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20 mb-3 font-semibold">
            08 // Connect
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Get in <span className="text-gradient-multicolor">Touch</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mt-3">
            Available for software engineering internships, AI/ML development opportunities, and technical collaborations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-primary-500 rounded-full mt-4" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Info (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/15 border border-primary-500/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Email Address</p>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                id="copy-email-btn"
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all border border-slate-200 dark:border-white/5 shadow-sm"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card with Click to Call */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Phone / WhatsApp</p>
                  <a
                    href={`tel:${portfolioData.personal.rawPhone}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                id="copy-phone-btn"
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all border border-slate-200 dark:border-white/5 shadow-sm"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-500 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Location</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {portfolioData.personal.location}
                </p>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Online Profiles</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-github-link"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-all flex items-center gap-2.5 text-slate-800 dark:text-slate-300 shadow-sm"
                >
                  <Github className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold">GitHub</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">@{portfolioData.personal.githubUsername}</p>
                  </div>
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-linkedin-link"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-all flex items-center gap-2.5 text-slate-800 dark:text-slate-300 shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold">LinkedIn</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Connect</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (Span 7) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
              Fill out the form below to initiate an email directly to Shriya Yerane.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="contact-email">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="contact-subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship opportunity / Engineering project collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="contact-message">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Shriya, I reviewed your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none shadow-sm"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={status === 'sending'}
                className="w-full py-3.5 px-6 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-500 hover:from-primary-700 hover:to-cyan-600 text-white shadow-md shadow-primary-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Preparing Mail client...</span>
                  </>
                ) : status === 'sent' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === 'sent' && (
                <p className="text-center text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-2 animate-in fade-in">
                  Opening your default mail client with your prefilled message!
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
