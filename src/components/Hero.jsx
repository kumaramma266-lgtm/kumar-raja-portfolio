import React, { useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Mail,
  Brain, 
  Code2, 
  Trophy, 
  Terminal,
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = ({ onOpenResume }) => {
  const canvasRef = useRef(null);

  // Interactive AI Sphere / Orbital Node Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = 440);
    let height = (canvas.height = 440);

    let rotationX = 0;
    let rotationY = 0;

    const numDots = 140;
    const dots = [];
    const radius = 150;

    // Generate sphere point cloud
    for (let i = 0; i < numDots; i++) {
      const phi = Math.acos(-1 + (2 * i) / numDots);
      const theta = Math.sqrt(numDots * Math.PI) * phi;
      dots.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        size: Math.random() * 2 + 1.5,
        color: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      rotationX += 0.006;
      rotationY += 0.009;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      const projectedDots = dots.map((dot) => {
        // Rotate Y
        let x1 = dot.x * cosY - dot.z * sinY;
        let z1 = dot.z * cosY + dot.x * sinY;

        // Rotate X
        let y1 = dot.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + dot.y * sinX;

        const scale = 300 / (300 + z2);
        const xProj = x1 * scale + cx;
        const yProj = y1 * scale + cy;

        return { x: xProj, y: yProj, z: z2, scale, color: dot.color, size: dot.size };
      });

      // Sort by depth
      projectedDots.sort((a, b) => b.z - a.z);

      // Draw connecting lines between closest nodes
      for (let i = 0; i < projectedDots.length; i++) {
        for (let j = i + 1; j < projectedDots.length; j++) {
          const dx = projectedDots[i].x - projectedDots[j].x;
          const dy = projectedDots[i].y - projectedDots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 45 && projectedDots[i].z > -50 && projectedDots[j].z > -50) {
            const alpha = (1 - dist / 45) * 0.25 * (projectedDots[i].scale);
            ctx.beginPath();
            ctx.moveTo(projectedDots[i].x, projectedDots[i].y);
            ctx.lineTo(projectedDots[j].x, projectedDots[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      projectedDots.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.2, (p.z + radius) / (2 * radius));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      // Draw central AI Core Ring
      ctx.beginPath();
      ctx.arc(cx, cy, 35, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const badges = [
    { label: 'AI/ML Student', icon: Brain, color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-300' },
    { label: 'AI Project Builder', icon: Code2, color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-300' },
    { label: 'Hackathon Participant', icon: Trophy, color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-300' },
    { label: 'AI Prompting', icon: Terminal, color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-300' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 backdrop-blur-md mb-6 shadow-lg shadow-blue-950/50">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-xs font-mono font-medium text-blue-300 tracking-wide uppercase">
                AKR RAJA • B.TECH AI & ML STUDENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Building Ideas <br />
              <span className="text-gradient">with AI.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8 font-normal">
              AI & Machine Learning student focused on building practical AI-powered projects, intelligent web experiences, and real-world solutions.
            </p>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.label}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-gradient-to-r ${b.color} backdrop-blur-sm text-xs font-semibold shadow-sm hover:scale-105 transition-transform cursor-default`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{b.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-purple-600/50 transition-all transform hover:-translate-y-0.5 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d132b]/80 hover:bg-[#141b38] border border-blue-500/30 hover:border-purple-500/50 text-gray-200 hover:text-white font-bold text-sm backdrop-blur-md shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Secondary Social Links */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-800/80 w-full">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Connect:</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/kumaramma266-lgtm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-950/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akr-kumar-raja-339483379/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-950/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:kumaramma266@gmail.com"
                  className="p-2.5 rounded-lg bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-950/40 transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Widget (AI Sphere & Interactive Telemetry) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-2xl group-hover:blur-3xl transition-all opacity-80"></div>
              
              {/* Main Canvas Container */}
              <div className="relative glass-card rounded-3xl p-6 border border-blue-500/20 shadow-2xl flex flex-col items-center">
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-500/30">
                  <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-cyan-300">NEURAL_MODEL_V3.8</span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  LIVE
                </div>

                <canvas ref={canvasRef} className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] cursor-pointer" />

                {/* Sub-card Telemetry */}
                <div className="w-full mt-2 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-[#090d1e]/80 border border-blue-500/15">
                    <span className="text-[10px] text-gray-400 font-mono block">Primary Focus</span>
                    <span className="text-xs font-bold text-blue-300">AI / LLM Integration</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#090d1e]/80 border border-purple-500/15">
                    <span className="text-[10px] text-gray-400 font-mono block">Current Year</span>
                    <span className="text-xs font-bold text-purple-300">3rd Year B.Tech AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
