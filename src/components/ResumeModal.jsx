import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, Mail, GraduationCap, Code2, Trophy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const ResumeModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const resumeText = `
AKR RAJA
B.Tech 3rd Year Artificial Intelligence & Machine Learning Student
Email: kumaramma266@gmail.com
LinkedIn: https://www.linkedin.com/in/akr-kumar-raja-339483379/
GitHub: https://github.com/kumaramma266-lgtm

PERSONAL SUMMARY
AI & Machine Learning student focused on building practical AI-powered projects, intelligent web experiences, and real-world solutions through AI-assisted rapid development.

EDUCATION
B.Tech – Artificial Intelligence & Machine Learning
RK College of Engineering (2024–2028)
Current Status: 3rd Year Student

FEATURED PROJECTS
1. Translation Earbuds (TREB)
   - Real-time language translation earbuds concept using LLM and voice APIs.
   - Successfully demonstrated working prototype at college hackathon.
   - Demo: https://talk-treb.emergent.host/

2. Jyothirgamaya – Smart Digital Student Platform
   - Smart Campus platform unifying digital notes, attendance, timetables, events, and AI assistant.
   - GitHub: https://github.com/kumaramma266-lgtm/JYOTHIRGAMAYA

3. Interactive AI Assistant
   - Experimental conversational AI interface with voice interaction and mood-aware UI.

4. Modern Restaurant Website
   - Multi-page responsive business website built with AI-assisted web development.

TECHNICAL SKILLS
- Programming: Python (Basic), C++ (Basic), JavaScript (Basic), HTML (Basic)
- AI & Development: AI Prompt Engineering, AI-assisted Dev, AI/ML Fundamentals, Generative AI, API Integration
- Tools: Git, GitHub, Excel, PowerPoint, AI Development Tools
`;

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = "AKR_Raja_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-blue-500/30 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-900 border border-gray-700 text-gray-400 hover:text-white"
          aria-label="Close Resume Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-extrabold text-white">AKR Raja — Professional Resume</h2>
            </div>
            <p className="text-xs text-gray-400 font-mono">B.Tech AI & ML Student | RK College of Engineering</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#090e24] hover:bg-gray-800 border border-gray-700 text-gray-300 text-xs font-semibold"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold shadow-md shadow-blue-600/30"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
          
          {/* Header Contact Strip */}
          <div className="p-4 rounded-2xl bg-[#090e24] border border-blue-500/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="truncate">kumaramma266@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <LinkedinIcon className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="truncate">akr-kumar-raja</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <GithubIcon className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">kumaramma266-lgtm</span>
            </div>
          </div>

          {/* Education */}
          <div className="p-4 rounded-2xl bg-[#080d21] border border-gray-800">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>Education</span>
            </h3>
            <p className="text-xs font-semibold text-gray-200">B.Tech – Artificial Intelligence & Machine Learning</p>
            <p className="text-xs text-gray-400">RK College of Engineering • 2024–2028 (3rd Year Student)</p>
          </div>

          {/* Featured Projects */}
          <div className="p-4 rounded-2xl bg-[#080d21] border border-gray-800">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span>Key Projects & Hackathons</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-blue-300">TREB (Translation Earbuds)</span> — AI-powered translation earbuds prototype. Demonstrated live at college hackathon.
              </div>
              <div>
                <span className="font-bold text-purple-300">Jyothirgamaya</span> — Smart Digital Student Platform (Notes, Attendance, Timetable, Events, AI Assistant).
              </div>
              <div>
                <span className="font-bold text-cyan-300">Interactive AI Assistant</span> — Conversational AI interface with voice & mood interaction.
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="p-4 rounded-2xl bg-[#080d21] border border-gray-800">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Technical Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300">
              <div>
                <strong className="text-white block mb-1">Programming</strong>
                Python (Basic), C++ (Basic), JavaScript (Basic), HTML (Basic)
              </div>
              <div>
                <strong className="text-white block mb-1">AI & Development</strong>
                AI Prompt Engineering, AI-assisted Dev, AI/ML Fundamentals, GenAI
              </div>
              <div>
                <strong className="text-white block mb-1">Tools</strong>
                Git, GitHub, Excel, PowerPoint, AI Tools
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
