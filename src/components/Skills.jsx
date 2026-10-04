import React from 'react';
import { Code2, BrainCircuit, Wrench, ShieldCheck, Check } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      color: "border-blue-500/30 text-blue-400 bg-blue-950/40",
      skills: [
        { name: "Python", level: "Basic", tag: "Basic Level" },
        { name: "C++", level: "Basic", tag: "Basic Level" },
        { name: "JavaScript", level: "Basic", tag: "Basic Level" },
        { name: "HTML", level: "Basic", tag: "Basic Level" },
      ]
    },
    {
      title: "AI & Development",
      icon: BrainCircuit,
      color: "border-purple-500/30 text-purple-400 bg-purple-950/40",
      skills: [
        { name: "AI Prompt Engineering", level: "Practical", tag: "Practical Use" },
        { name: "AI-assisted Development", level: "Practical", tag: "Rapid Prototyping" },
        { name: "AI/ML Fundamentals", level: "Conceptual", tag: "Coursework" },
        { name: "AI-powered Web Apps", level: "Practical", tag: "Building Apps" },
        { name: "Generative AI Concepts", level: "Conceptual", tag: "Learning" },
        { name: "API Integration", level: "Practical", tag: "REST & LLM APIs" },
      ]
    },
    {
      title: "Tools & Utilities",
      icon: Wrench,
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-950/40",
      skills: [
        { name: "Git", level: "Basic", tag: "Version Control" },
        { name: "GitHub", level: "Basic", tag: "Code Hosting" },
        { name: "Excel", level: "Basic", tag: "Data Analysis" },
        { name: "PowerPoint", level: "Basic", tag: "Presentations" },
        { name: "AI Development Tools", level: "Practical", tag: "Cursor, Emergent, etc." },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/25 mb-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">02 / Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Honest representation of my current technical proficiency, AI skills, and tools.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-500/20 text-xs text-blue-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Transparent & Honest Skill Level Declarations</span>
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="glass-card rounded-2xl p-6 border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
                    <div className={`p-3 rounded-xl border ${cat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                      <span className="text-xs text-gray-400 font-mono">{cat.skills.length} Competencies</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#090d1f]/80 border border-gray-800 hover:border-blue-500/30 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-sm font-semibold text-gray-200">{skill.name}</span>
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          skill.level === 'Practical'
                            ? 'bg-purple-950/70 border-purple-500/40 text-purple-300'
                            : skill.level === 'Basic'
                            ? 'bg-blue-950/70 border-blue-500/40 text-blue-300'
                            : 'bg-cyan-950/70 border-cyan-500/40 text-cyan-300'
                        }`}>
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 text-[11px] font-mono text-gray-400 text-center">
                  Continuous Learning & Practice
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
