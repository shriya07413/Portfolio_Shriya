import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundGlow from './components/BackgroundGlow';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-slate-100 dark:text-slate-100 light:text-slate-800 transition-colors duration-300">
      {/* Background Ambient Lighting and Particles */}
      <BackgroundGlow />

      {/* Floating Sticky Glass Navbar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Standalone Fullscreen Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
