import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathon from './components/Hackathon';
import Capabilities from './components/Capabilities';
import Approach from './components/Approach';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import InteractiveAIPromptDemo from './components/InteractiveAIPromptDemo';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPromptDemoOpen, setIsPromptDemoOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050711] text-gray-100 selection:bg-purple-500 selection:text-white font-sans overflow-x-hidden">
      {/* Background Interactive Particle Canvas */}
      <ParticleBackground />

      {/* Glassmorphic Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenPromptDemo={() => setIsPromptDemoOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Hackathon />
        <Capabilities />
        <Approach />
        <GitHubSection />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer & Download Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

      {/* Interactive AI Prompt Engineering Playground Modal */}
      {isPromptDemoOpen && (
        <InteractiveAIPromptDemo onClose={() => setIsPromptDemoOpen(false)} />
      )}
    </div>
  );
}

export default App;
