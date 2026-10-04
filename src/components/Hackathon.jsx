import React from 'react';
import { Trophy, ExternalLink, Sparkles, Lightbulb, Cpu, Headphones, CheckCircle2, Play } from 'lucide-react';

const Hackathon = () => {
  const steps = [
    {
      num: "01",
      title: "Idea Generation",
      desc: "Identified global language barrier in multi-lingual conversations and designed concept for smart translation earbuds.",
      icon: Lightbulb,
      color: "border-blue-500/30 text-blue-400 bg-blue-950/60"
    },
    {
      num: "02",
      title: "AI & API Integration",
      desc: "Leveraged AI-assisted development and LLM speech/translation APIs to simulate real-time audio translation logic.",
      icon: Cpu,
      color: "border-purple-500/30 text-purple-400 bg-purple-950/60"
    },
    {
      num: "03",
      title: "Working Prototype",
      desc: "Built full prototype interface with conversation modes, dual-earbud simulation, and voice interaction.",
      icon: Headphones,
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-950/60"
    },
    {
      num: "04",
      title: "Live Hackathon Demo",
      desc: "Successfully demonstrated a working prototype at the college hackathon to judges and peers.",
      icon: Trophy,
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-950/60"
    }
  ];

  return (
    <section id="hackathon" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 mb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">04 / Hackathon Highlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            From Idea to <span className="text-gradient">Prototype</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Participated in a college hackathon with TREB (Translation Earbuds), where I successfully demonstrated a working prototype.
          </p>
        </div>

        {/* Main Hackathon Showcase Card */}
        <div className="glass-card rounded-3xl p-8 border border-cyan-500/25 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold w-fit mb-4">
                <Trophy className="w-4 h-4 text-emerald-400" />
                <span>College Hackathon Achievement</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Translation Earbuds (TREB) — Rapid Prototype
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Demonstrated how AI LLM models, real-time voice processing, and modern UI engineering can be synthesized rapidly to build an intuitive product prototype for real-time multilingual communication.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://talk-treb.emergent.host/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-0.5"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>View TREB Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-2 rounded-lg border border-cyan-500/20">
                  Live Prototype Hosted Online
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs p-6 rounded-2xl bg-[#080d21] border border-blue-500/20 text-center relative group">
                <Headphones className="w-16 h-16 text-cyan-400 mx-auto mb-3 animate-float" />
                <h4 className="text-lg font-bold text-white mb-1">TREB Earbuds</h4>
                <p className="text-xs text-gray-400 font-mono">Real-Time AI Translator</p>
                <div className="mt-4 pt-3 border-t border-gray-800 text-[11px] text-emerald-400 font-semibold">
                  ✓ Verified Live Prototype
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Visual Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="glass-card rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/40 transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-400/80">{s.num}</span>
                    <div className={`p-2.5 rounded-xl border ${s.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-800/80 flex items-center gap-1.5 text-[11px] font-mono text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Step Completed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Hackathon;
