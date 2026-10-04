import React from 'react';
import { ArrowUp, Cpu, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060f] border-t border-gray-800/80 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#080d21] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">AKR RAJA</span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              B.Tech Artificial Intelligence & Machine Learning Student (2024–2028) at RK College of Engineering. Building practical AI solutions, smart campus platforms, and AI-assisted web applications.
            </p>

            <div className="flex items-center gap-3 text-xs text-gray-400 pt-2 font-mono">
              <span className="px-2.5 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-blue-300">React</span>
              <span className="px-2.5 py-1 rounded bg-purple-950/60 border border-purple-500/20 text-purple-300">Vite</span>
              <span className="px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/20 text-cyan-300">Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
              <li><a href="#hackathon" className="hover:text-blue-400 transition-colors">TREB Hackathon Demo</a></li>
              <li><a href="#capabilities" className="hover:text-blue-400 transition-colors">Capabilities</a></li>
              <li><a href="#github" className="hover:text-blue-400 transition-colors">GitHub Repositories</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Connect</h4>
            <div className="flex flex-col gap-2 text-xs text-gray-400">
              <a
                href="mailto:kumaramma266@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>kumaramma266@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/akr-kumar-raja-339483379/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/kumaramma266-lgtm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>kumaramma266-lgtm</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AKR Raja. Built for AI/ML Portfolio & Recruiter Review.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500/40 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
