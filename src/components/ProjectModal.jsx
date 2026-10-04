import React from 'react';
import { X, ExternalLink, Sparkles, Check, Trophy, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl glass-panel rounded-3xl border border-blue-500/30 shadow-2xl p-6 sm:p-8 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/15 blur-3xl rounded-full pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-900/80 border border-gray-700 text-gray-400 hover:text-white hover:border-blue-500/50 transition-all z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-950/80 border border-blue-500/30 text-blue-300">
              {project.category}
            </span>
            {project.highlight && (
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                <span>{project.highlight}</span>
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Project Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 bg-[#080d21]/70 p-4 rounded-xl border border-gray-800">
          {project.description}
        </p>

        {/* Key Features List */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Key Features & Functional Capabilities</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#090e24] border border-blue-500/15 hover:border-purple-500/30 transition-all text-xs text-gray-200"
              >
                <div className="w-5 h-5 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-cyan-400" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900/90 hover:bg-gray-800 border border-gray-700 text-gray-200 hover:text-white font-bold text-xs transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-700 text-gray-400 hover:text-white text-xs font-semibold"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
