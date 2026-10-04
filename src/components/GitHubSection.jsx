import React, { useEffect, useState } from 'react';
import { ExternalLink, Star, GitFork, BookOpen, Sparkles, RefreshCw } from 'lucide-react';
import { GithubIcon } from './Icons';

const GitHubSection = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackRepos = [
    {
      name: "JYOTHIRGAMAYA",
      description: "Smart Digital Student Platform concept bringing notes, attendance, marks, timetable, events, circulars, and AI assistance into one intelligent campus platform.",
      html_url: "https://github.com/kumaramma266-lgtm/JYOTHIRGAMAYA",
      stargazers_count: 5,
      forks_count: 2,
      language: "JavaScript / React",
      updated_at: "2026-09-28"
    },
    {
      name: "TREB-Translation-Earbuds",
      description: "AI-powered real-time translation earbuds prototype code and concept architecture.",
      html_url: "https://talk-treb.emergent.host/",
      stargazers_count: 8,
      forks_count: 3,
      language: "Python / AI API",
      updated_at: "2026-09-22"
    },
    {
      name: "AI-Assistant-Experiments",
      description: "Experimental conversational AI interface combining voice interactions and mood awareness.",
      html_url: "https://github.com/kumaramma266-lgtm",
      stargazers_count: 4,
      forks_count: 1,
      language: "JavaScript",
      updated_at: "2026-09-15"
    }
  ];

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const resUser = await fetch('https://api.github.com/users/kumaramma266-lgtm');
        if (resUser.ok) {
          const userData = await resUser.json();
          setProfile(userData);
        }

        const resRepos = await fetch('https://api.github.com/users/kumaramma266-lgtm/repos?sort=updated&per_page=6');
        if (resRepos.ok) {
          const reposData = await resRepos.json();
          if (reposData.length > 0) {
            setRepos(reposData);
          } else {
            setRepos(fallbackRepos);
          }
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        console.log('GitHub API fallback active', err);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/25 mb-4">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">07 / Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Building in <span className="text-gradient">Public</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Explore my projects, experiments, and open-source development work.
          </p>
        </div>

        {/* GitHub Main Banner Card */}
        <div className="glass-card rounded-3xl p-8 border border-blue-500/25 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px]">
                <img
                  src={profile?.avatar_url || "https://github.com/kumaramma266-lgtm.png"}
                  alt="AKR Raja GitHub"
                  className="w-full h-full object-cover rounded-[14px]"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=AKR+Raja&background=0D8ABC&color=fff";
                  }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-emerald-500 border-2 border-[#070913]"></div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white">kumaramma266-lgtm</h3>
                <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                  GitHub Profile
                </span>
              </div>
              <p className="text-xs text-gray-400">
                {profile?.bio || "B.Tech AI & ML Student | AI Project Builder | Prompt Engineering"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <a
              href="https://github.com/kumaramma266-lgtm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Repositories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(repos.length > 0 ? repos : fallbackRepos).slice(0, 3).map((repo, idx) => (
            <div
              key={repo.name || idx}
              className="glass-card rounded-2xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors truncate max-w-[180px]">
                      {repo.name}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 bg-[#090e24] px-2 py-0.5 rounded border border-gray-800">
                    Public
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  {repo.description || "Experimental AI project and source codebase."}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-800/80 mb-4">
                  <span className="font-mono text-blue-400">{repo.language || 'JavaScript'}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stargazers_count || 1}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-cyan-400" />
                      <span>{repo.forks_count || 0}</span>
                    </span>
                  </div>
                </div>

                <a
                  href={repo.html_url || "https://github.com/kumaramma266-lgtm"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#090e24] hover:bg-blue-950/60 border border-gray-800 hover:border-blue-500/30 text-xs font-bold text-gray-200 hover:text-white transition-all"
                >
                  <span>Explore Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GitHubSection;
