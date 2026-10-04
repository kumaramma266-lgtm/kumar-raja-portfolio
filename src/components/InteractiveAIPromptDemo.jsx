import React, { useState } from 'react';
import { X, Sparkles, Terminal, Send, Play, Cpu, Copy, Check, RefreshCw } from 'lucide-react';

const InteractiveAIPromptDemo = ({ onClose }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('treb');
  const [customPrompt, setCustomPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const templates = [
    {
      id: 'treb',
      title: 'TREB Real-Time Translation System',
      prompt: 'System Prompt: Act as the real-time speech translation engine inside TREB Earbuds. Translate the following Telugu audio stream into English and format with speaker sentiment and key phrases.',
      inputSample: 'తెలుగులో మాట్లాడుతున్నారు: "హలో, నాకు కాలేజీ హ్యాకథాన్ ప్రాజెక్ట్ వివరణలు కావాలి."',
      response: `[TREB_AI_ENGINE_V2] Processing Audio Stream...
Language Detected: Telugu (te-IN) -> Target: English (en-US)
Mode: Real-Time Earbud Conversation

Input Audio Transcript:
"హలో, నాకు కాలేజీ హ్యాకథాన్ ప్రాజెక్ట్ వివరణలు కావాలి."

Translated Output (Earbud Audio Sync):
"Hello, I need the college hackathon project details."

Sentiment: Inquisitive & Friendly (Confidence: 98.4%)
Latency: 140ms`
    },
    {
      id: 'jyothirgamaya',
      title: 'Jyothirgamaya Campus Assistant',
      prompt: 'System Prompt: Act as the Jyothirgamaya AI Campus Assistant. Generate a summary of today\'s B.Tech AI 3rd-year timetable and upcoming circular events.',
      inputSample: 'Query: What is my schedule today and what circulars were published for AI students?',
      response: `[JYOTHIRGAMAYA_CAMPUS_AI] Schedule Overview for B.Tech AI 3rd Year:

📅 Today's Timetable:
• 09:30 AM - 10:30 AM: Artificial Intelligence & Machine Learning Fundamentals
• 10:45 AM - 12:15 PM: Neural Networks & Deep Learning Lab
• 01:30 PM - 03:00 PM: Natural Language Processing & Prompt Engineering

📢 Latest College Circular:
• Hackathon Project Prototype Demonstration scheduled at Main Auditorium.
• All AI & ML 3rd Year students registered with TREB & Jyothirgamaya projects requested to report by 02:00 PM.`
    },
    {
      id: 'restaurant',
      title: 'AI Business Web Generator',
      prompt: 'System Prompt: Generate a responsive hero layout structure and key features for a local restaurant website.',
      inputSample: 'Input: Create a modern menu section layout with online reservations.',
      response: `[AI_ASSISTED_DEV_ENGINE]
Generating Restaurant Web Components...

Components Built:
1. Hero Section: Vibrant visual header with CTA "Book Table Now"
2. Dynamic Menu Grid: Categorized by Starters, Main Course, and Chef Specials
3. Reservation Modal: Responsive date, time, and guest selector
4. Location & Contact: Google Maps embed + direct WhatsApp ordering link

Status: Generated successfully in 1.2s.`
    }
  ];

  const currentTpl = templates.find(t => t.id === selectedTemplate) || templates[0];

  const handleRunPrompt = () => {
    setIsGenerating(true);
    setOutput('');

    const textToStream = customPrompt ? `[CUSTOM_PROMPT_ENGINE]\nInput: "${customPrompt}"\n\nAI Response:\nBuilding automated response using AKR Raja's prompt structure...\n1. Parsed intent successfully.\n2. Formatted output with optimal context window.\n3. Output generated cleanly.` : currentTpl.response;

    let index = 0;
    const interval = setInterval(() => {
      setOutput(textToStream.substring(0, index));
      index += 4;
      if (index > textToStream.length + 10) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 15);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output || currentTpl.response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-purple-500/30 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-900 border border-gray-700 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>AKR Raja Prompt Engineering Lab</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">Interactive AI Playground</h2>
          <p className="text-xs text-gray-400">Test how I structure system prompts for AI projects, assistants, and code generators.</p>
        </div>

        {/* Template Selector */}
        <div className="flex flex-wrap gap-2 mb-4">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTemplate(t.id);
                setCustomPrompt('');
                setOutput('');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedTemplate === t.id && !customPrompt
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-[#090e24] text-gray-400 border border-gray-800 hover:text-white'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Terminal Sandbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-y-auto">
          
          {/* Input Box */}
          <div className="p-4 rounded-2xl bg-[#070b1a] border border-purple-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-purple-400 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5" />
                  PROMPT_INPUT
                </span>
                <span className="text-[10px] text-gray-500 font-mono">System Instructions</span>
              </div>

              <div className="p-3 rounded-xl bg-[#090f26] border border-gray-800 text-xs text-gray-300 font-mono mb-3 leading-relaxed">
                {currentTpl.prompt}
              </div>

              <textarea
                value={customPrompt || currentTpl.inputSample}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Enter custom prompt input..."
                className="w-full h-28 p-3 rounded-xl bg-[#080d21] border border-gray-800 text-xs text-gray-200 font-mono focus:border-purple-500/50 outline-none resize-none"
              />
            </div>

            <button
              onClick={handleRunPrompt}
              disabled={isGenerating}
              className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Streaming AI Completion...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Execute AI Prompt</span>
                </>
              )}
            </button>
          </div>

          {/* Output Box */}
          <div className="p-4 rounded-2xl bg-[#070b1a] border border-blue-500/20 flex flex-col justify-between relative">
            <div className="flex-1 overflow-y-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" />
                  AI_OUTPUT_STREAM
                </span>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[10px] font-mono text-gray-400 hover:text-white"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="p-3.5 rounded-xl bg-[#050814] border border-gray-800 text-xs text-cyan-300 font-mono whitespace-pre-wrap leading-relaxed min-h-[220px]">
                {output || currentTpl.response}
              </pre>
            </div>

            <div className="mt-3 pt-2 border-t border-gray-800 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span>Model: Gemini / GPT-4o API Concept</span>
              <span className="text-emerald-400">Latency: ~120ms</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default InteractiveAIPromptDemo;
