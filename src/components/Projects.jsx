import React, { useState } from 'react';
import { ExternalLink, Sparkles, Trophy, ArrowRight, Layers, Headphones, GraduationCap, Bot, Utensils } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const projectsData = [
    {
      id: 'treb',
      title: 'Translation Earbuds (TREB)',
      category: 'AI / Translation / Hackathon Project',
      filterCategory: 'AI / Hardware Concept',
      icon: Headphones,
      description: 'An AI-powered translation earbuds concept designed to provide real-time language translation through earbuds, helping people communicate across language barriers.',
      features: [
        'Real-time translation concept',
        'Multiple language support',
        'Conversation translation',
        'Voice-based interaction',
        'Translation API integration',
        'AI/LLM integration',
        'Offline basic translation concept',
        'Normal music mode + translation mode'
      ],
      highlight: 'Successfully demonstrated a working prototype at a college hackathon.',
      liveUrl: 'https://talk-treb.emergent.host/',
      githubUrl: null, // Do not invent a GitHub link if not provided
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/60',
      gradient: 'from-cyan-500/20 via-blue-600/10 to-purple-600/10'
    },
    {
      id: 'jyothirgamaya',
      title: 'Jyothirgamaya – Smart Digital Student Platform',
      category: 'EdTech / AI / Smart Campus',
      filterCategory: 'EdTech & Campus',
      icon: GraduationCap,
      description: 'A full-fledged EdTech & Smart Campus digital platform built for RK College of Engineering B.Tech AIML students. Integrates 5 semesters of curriculum notes, WYSIWYG digital notebook editor, academic progress tracker, and Ctrl+K search index.',
      features: [
        '5-Semester B.Tech AIML Curriculum',
        '30+ Subjects & 120+ Notes Pages',
        'Rich WYSIWYG Digital Notebook',
        'Ctrl+K Instant Search Engine',
        'Academic Progress & Density Tracker',
        'Bookmarked Notes & Fast Revision',
        'JSON Backup & Storage Store',
        'Dark Glassmorphic UI & Layout'
      ],
      highlight: 'Full Working Codebase (C:\\Users\\kumar\\Desktop\\JYOTHIRGAMAYA)',
      liveUrl: null,
      githubUrl: 'https://github.com/kumaramma266-lgtm/JYOTHIRGAMAYA',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/60',
      gradient: 'from-purple-500/20 via-indigo-600/10 to-blue-600/10'
    },
    {
      id: 'ai-assistant',
      title: 'Interactive AI Assistant',
      category: 'Generative AI / Web Application',
      filterCategory: 'AI / Web Apps',
      icon: Bot,
      description: 'An experimental AI assistant concept combining conversational AI, voice interaction, mood-aware interaction, visual responses, and an interactive futuristic interface.',
      features: [
        'AI conversational intelligence',
        'Voice interaction & STT/TTS',
        'Multiple AI voice options',
        'Telugu and English interaction',
        'Visual/emoji-based interface',
        'Image generation concept',
        'Explanation & tutoring support'
      ],
      highlight: 'Bilingual & Voice-Enabled Generative AI Interface',
      liveUrl: null,
      githubUrl: null,
      badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-950/60',
      gradient: 'from-blue-500/20 via-cyan-600/10 to-purple-600/10'
    },
    {
      id: 'restaurant-website',
      title: 'Modern Restaurant Website',
      category: 'Web Development',
      filterCategory: 'Web Development',
      icon: Utensils,
      description: 'A modern multi-page restaurant website concept created to demonstrate how AI-assisted development can be used to build professional websites for local businesses.',
      features: [
        'Responsive layout',
        'Restaurant information',
        'Interactive Menu',
        'Photo Gallery',
        'Contact & Reservation section',
        'Modern UI styling',
        'Mobile-friendly design'
      ],
      highlight: 'AI-Assisted Business Web Development Demo',
      liveUrl: null,
      githubUrl: null,
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/60',
      gradient: 'from-emerald-500/20 via-blue-600/10 to-cyan-600/10'
    }
  ];

  const filters = ['All', 'AI / Hardware Concept', 'EdTech & Campus', 'AI / Web Apps', 'Web Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.filterCategory === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/25 mb-4">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">03 / Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            AI Projects & <span className="text-gradient">Prototypes</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Exploring practical applications of AI, EdTech platforms, and intelligent web prototypes.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-[#0b0f24] text-gray-400 border border-gray-800 hover:text-white hover:border-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl border border-blue-500/20 overflow-hidden flex flex-col justify-between group relative"
              >
                {/* Background Gradient Accent */}
                <div className={`absolute top-0 right-0 w-full h-32 bg-gradient-to-b ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>

                <div className="p-7 relative z-10">
                  
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium border ${project.badgeColor}`}>
                      {project.category}
                    </span>

                    {project.highlight && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-300">
                        <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Hackathon Winner/Demo</span>
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3.5 rounded-2xl bg-[#0a0f26] border border-blue-500/25 text-blue-400 shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-mono mt-0.5">
                        {project.features.length} Key Features
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Feature Tags Preview */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.features.slice(0, 4).map((f, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-[#090d21] border border-gray-800 text-[11px] text-gray-300 font-medium"
                      >
                        {f}
                      </span>
                    ))}
                    {project.features.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-blue-950/60 text-[11px] text-blue-400 font-mono">
                        +{project.features.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 relative z-10 border-t border-gray-800/80 mt-auto">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 text-gray-300 hover:text-white hover:border-purple-500/50 text-xs font-bold transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-xs font-bold text-purple-400 hover:text-purple-300 group-hover:translate-x-0.5 transition-all py-2"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
