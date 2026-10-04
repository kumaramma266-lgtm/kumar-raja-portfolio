import React, { useState } from 'react';
import { Mail, Send, FileText, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: 'ALAMURI KUMAR RAJA',
    email: 'kumaramma266@gmail.com',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-purple-500/30 mb-20 relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-b from-blue-600/15 via-purple-600/15 to-transparent blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Internships & Collaborations</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Interested in <span className="text-gradient">working with me?</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              I'm open to internships, hackathons, collaborations, and opportunities to build meaningful AI-powered solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="mailto:kumaramma266@gmail.com"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d132b] hover:bg-[#141b38] border border-blue-500/30 text-gray-200 hover:text-white font-bold text-sm shadow-md transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Information Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/25 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">08 / Direct Contact</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Get in Touch</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Have a project idea, internship opportunity, or hackathon team invite? Send a direct message or connect on socials.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Email Card */}
              <a
                href="mailto:kumaramma266@gmail.com"
                className="glass-card rounded-2xl p-4 border border-blue-500/20 hover:border-blue-500/40 flex items-center gap-4 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Email Address</span>
                  <span className="text-sm font-bold text-gray-200 group-hover:text-blue-300 transition-colors">
                    kumaramma266@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/akr-kumar-raja-339483379/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 border border-purple-500/20 hover:border-purple-500/40 flex items-center gap-4 transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">LinkedIn Profile</span>
                  <span className="text-sm font-bold text-gray-200 group-hover:text-purple-300 transition-colors">
                    AKR Kumar Raja
                  </span>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/kumaramma266-lgtm"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 flex items-center gap-4 transition-all group"
              >
                <div className="p-3 rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">GitHub Profile</span>
                  <span className="text-sm font-bold text-gray-200 group-hover:text-cyan-300 transition-colors">
                    kumaramma266-lgtm
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-blue-500/20 relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-bold text-white">Send Message</h4>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                Direct Contact
              </span>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h5 className="text-lg font-bold text-white mb-1">Message Sent Successfully!</h5>
                <p className="text-xs text-gray-300">Thank you for reaching out. AKR Raja will respond to your message promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070b1a] border border-gray-800 text-sm text-gray-200 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070b1a] border border-gray-800 text-sm text-gray-200 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#070b1a] border border-gray-800 text-sm text-gray-200 focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
