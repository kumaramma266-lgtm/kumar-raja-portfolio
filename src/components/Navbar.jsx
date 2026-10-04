import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Cpu, Sparkles, ExternalLink } from 'lucide-react';

const Navbar = ({ onOpenResume, onOpenPromptDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathon' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Approach', href: '#approach' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      sections.unshift('hero');

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070913]/85 backdrop-blur-md border-b border-blue-500/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-purple-500/40 transition-all">
              <div className="w-full h-full bg-[#090d1f] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-bold text-lg tracking-wider text-white group-hover:text-blue-400 transition-colors">
                AKR RAJA
              </span>
              <span className="flex items-center text-[10px] text-blue-400 font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block mr-1"></span>
                AI Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0d1326]/60 p-1.5 rounded-full border border-blue-500/15 backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white shadow-md shadow-blue-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions & Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPromptDemo}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>AI Playground</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-purple-600/40 transition-all transform hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="flex sm:hidden items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-blue-950/40 border border-blue-500/20 text-gray-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e21]/95 backdrop-blur-xl border-b border-blue-500/20 px-4 pt-3 pb-6 transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-blue-600/20 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPromptDemo();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-purple-900/40 border border-purple-500/30 text-purple-200"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Try AI Playground</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
