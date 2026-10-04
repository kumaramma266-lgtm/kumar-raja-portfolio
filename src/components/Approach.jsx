import React from 'react';
import { Target, Compass, Code, Rocket, Sparkles, ArrowRight } from 'lucide-react';

const Approach = () => {
  const steps = [
    {
      num: "01",
      title: "Identify the Problem",
      desc: "Analyze real-world challenges faced by students, businesses, or cross-cultural communication to define clear objectives.",
      icon: Target,
      color: "border-blue-500/30 text-blue-400 bg-blue-950/40"
    },
    {
      num: "02",
      title: "Design the Solution",
      desc: "Architect user-friendly interfaces, map feature requirements, and select optimal AI LLM models & web frameworks.",
      icon: Compass,
      color: "border-purple-500/30 text-purple-400 bg-purple-950/40"
    },
    {
      num: "03",
      title: "Build the Prototype",
      desc: "Leverage AI-assisted development, LLM prompting, and modern web tech to rapidly turn concepts into working software.",
      icon: Code,
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-950/40"
    },
    {
      num: "04",
      title: "Improve & Deploy",
      desc: "Test prototypes live with users/judges, gather feedback, refine prompt logic, and deploy accessible web applications.",
      icon: Rocket,
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-950/40"
    }
  ];

  return (
    <section id="approach" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/25 mb-4">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">06 / Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="text-gradient">Approach</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            I use <strong className="text-white">AI-assisted development</strong> to rapidly turn ideas into functional prototypes and practical solutions.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card rounded-2xl p-6 border border-blue-500/15 hover:border-purple-500/40 transition-all relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border ${step.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black font-mono text-gray-700 group-hover:text-blue-400/80 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-blue-400">
                  <span>Phase {step.num}</span>
                  {index < 3 && <ArrowRight className="w-3.5 h-3.5 text-gray-600 hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-purple-500/20 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">AI-Assisted Acceleration</h4>
              <p className="text-xs text-gray-300">Combining human problem-solving with AI prompt engineering to build 5x faster.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 shrink-0 transition-all"
          >
            Start a Collaboration
          </a>
        </div>

      </div>
    </section>
  );
};

export default Approach;
