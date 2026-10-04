import React from 'react';
import { 
  Globe, 
  Bot, 
  GraduationCap, 
  Building2, 
  Cpu, 
  Presentation, 
  Terminal, 
  Zap,
  CheckCircle 
} from 'lucide-react';

const Capabilities = () => {
  const capabilities = [
    {
      title: "AI-Powered Websites",
      desc: "Web applications featuring embedded LLM models, conversational UI, and smart content generation.",
      icon: Globe,
      color: "border-blue-500/30 text-blue-400 bg-blue-950/40"
    },
    {
      title: "AI Assistants",
      desc: "Interactive voice and text AI assistants built for specialized domains, tutoring, and automated support.",
      icon: Bot,
      color: "border-purple-500/30 text-purple-400 bg-purple-950/40"
    },
    {
      title: "Student Platforms",
      desc: "EdTech & Smart Campus tools integrating digital notes, timetables, events, and AI academic assistance.",
      icon: GraduationCap,
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-950/40"
    },
    {
      title: "Business Websites",
      desc: "Modern, multi-page, mobile-responsive web applications tailored for local businesses and organizations.",
      icon: Building2,
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-950/40"
    },
    {
      title: "AI Prototypes",
      desc: "Hardware & software concept prototypes demonstrating novel real-world AI applications (e.g. TREB).",
      icon: Cpu,
      color: "border-amber-500/30 text-amber-400 bg-amber-950/40"
    },
    {
      title: "Presentation & Product Concepts",
      desc: "Structured pitch decks, product design specifications, and hackathon presentation blueprints.",
      icon: Presentation,
      color: "border-pink-500/30 text-pink-400 bg-pink-950/40"
    },
    {
      title: "AI Prompt Engineering",
      desc: "Designing precise prompts, system instructions, and multi-step AI reasoning workflows.",
      icon: Terminal,
      color: "border-indigo-500/30 text-indigo-400 bg-indigo-950/40"
    },
    {
      title: "Rapid Prototyping",
      desc: "Accelerating concept-to-working-code development using AI coding assistants and modern web stacks.",
      icon: Zap,
      color: "border-teal-500/30 text-teal-400 bg-teal-950/40"
    }
  ];

  return (
    <section id="capabilities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/25 mb-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">05 / Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What I Can <span className="text-gradient">Build</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Practical solution areas where I apply AI tools, web technologies, and rapid prototyping.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="glass-card rounded-2xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`p-3 rounded-xl border ${c.color} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="font-mono">Practical Solution</span>
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
