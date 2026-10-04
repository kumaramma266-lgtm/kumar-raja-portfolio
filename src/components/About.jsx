import React from 'react';
import { GraduationCap, Award, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    "Turning conceptual AI ideas into functional prototypes",
    "Hands-on experience with LLM prompting and AI tools",
    "Active participant in college hackathons and technical events",
    "Combining modern web interfaces with AI technology"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/25 mb-4">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01 / Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Driven by curiosity, technology, and rapid AI-assisted development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 border border-blue-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Passionate AI Developer</h3>
                  <span className="text-xs text-blue-400 font-mono">Focused on real-world solutions</span>
                </div>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                I am an <strong className="text-white">Artificial Intelligence & Machine Learning student</strong> passionate about turning ideas into working products using AI, modern web technologies, and intelligent automation. I enjoy experimenting with AI tools, building prototypes, and solving practical problems through technology.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-800">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/80 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs font-mono text-gray-400">Ready for Internships & Projects</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-300">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Education & Stats Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <div className="glass-card rounded-2xl p-6 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-2xl rounded-full pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">Education</span>
                  <h4 className="text-lg font-bold text-white">RK College of Engineering</h4>
                </div>
              </div>

              <div className="space-y-2 pl-2 border-l-2 border-purple-500/30">
                <p className="text-sm font-semibold text-gray-200">
                  B.Tech – Artificial Intelligence & Machine Learning
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>3rd Year Student</span>
                  <span className="font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                    2024 – 2028
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5 text-center border border-blue-500/20">
                <span className="text-3xl font-extrabold text-blue-400 block mb-1">4+</span>
                <span className="text-xs text-gray-300 font-medium">Featured Projects</span>
              </div>
              <div className="glass-card rounded-xl p-5 text-center border border-cyan-500/20">
                <span className="text-3xl font-extrabold text-cyan-400 block mb-1">1st</span>
                <span className="text-xs text-gray-300 font-medium">Hackathon Prototype</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
