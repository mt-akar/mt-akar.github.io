'use client';

import { useEffect, useRef, useState } from 'react';
import { Server, Layers, Check, Award } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCounter from './AnimatedCounter';

// Type definition for AI models
type AIModel = {
  name: string;
  icon: string;
  use: string;
  filter?: string;
};

// AI Tools with specific use cases
const aiModels: {
  analysis: AIModel[];
  autonomous: AIModel[];
  specialized: AIModel[];
  validation: AIModel[];
} = {
  analysis: [
    { name: 'Claude Opus', icon: '/icons/claude.svg', use: 'Deep requirement analysis & architecture decisions' },
    { name: 'GPT-5', icon: '/icons/openai.svg', use: 'Strategic planning and decision-making', filter: 'brightness(0) invert(1)' }
  ],
  autonomous: [
    { name: 'Cursor Agents', icon: '/icons/cursor.svg', use: 'Autonomous coding' },
    { name: 'OpenAI Codex', icon: '/icons/openai.svg', use: 'End-to-end feature generation', filter: 'brightness(0) invert(1)' },
    { name: 'Devin', icon: '/icons/devin.avif', use: 'Full-stack tasks' },
  ],
  specialized: [
    { name: 'Claude Sonnet', icon: '/icons/claude.svg', use: 'Code generation, planning & reviews' },
    { name: 'Manus', icon: '/icons/manus.svg', use: 'Deep technical research & documentation analysis', filter: 'brightness(0) invert(1)' },
    { name: 'Grok', icon: '/icons/grok.svg', use: 'Creative solutions when others converge on the same approach', filter: 'brightness(0) invert(1)' },
    { name: 'Gemini', icon: '/icons/gemini.svg', use: 'Heavy lifting: data extraction, bulk translations, query generation' },
    { name: 'DeepSeek', icon: '/icons/deepseek.svg', use: 'Complex calculations & data science workloads' },
  ],
  validation: [
    { name: 'GPT-5', icon: '/icons/openai.svg', use: 'Double-checking other AI outputs & Research', filter: 'brightness(0) invert(1)' },
    { name: 'GitHub Copilot', icon: '/icons/github-copilot.svg', use: 'Reviews published code on every push' }
  ]
};

const orchestrationApproach = [
  {
    title: 'Pioneer',
    description: 'Seen every AI hype cycle since 2014 AlexNet. I know what works vs. what\'s hype, when AI fails, and how to contain those failures.',
    Icon: Award
  },
  {
    title: 'Production Systems',
    description: 'Mission-critical systems running on my AI workflow outputs.',
    Icon: Server
  },
  {
    title: 'Context Engineering',
    description: 'Feed AI the right information in the right order. No codebase contamination. First-iteration success through strategic prompting.',
    Icon: Layers
  },
  {
    title: 'Human-Verified Accuracy',
    description: 'Write critical business logic manually. 100% review rate. Zero AI errors in production.',
    Icon: Check
  }
];

export default function AIEngineSection() {
  const [isInView, setIsInView] = useState(false);
  const [activeApproach, setActiveApproach] = useState(0);
  const [expandedModel, setExpandedModel] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  // Cycle through orchestration approaches
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveApproach(prev => (prev + 1) % orchestrationApproach.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-[#0A0515] to-black"
    >
      {/* Background gradient similar to Impact Architecture */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(124, 58, 237, 0.2) 0%, transparent 50%)
            `,
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <SectionTitle 
          title="AI At Work"
          subtitle="My AI-augmented workflow"
          isInView={isInView}
        />

        {/* How I Use Each Model - Layered Diagram */}
        <div 
          className={`
            mb-20
            ${isInView ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}
        >
          <div className="space-y-6">
            {/* Top Layer: Analysis & Planning */}
            <div className="relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-6">
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">ANALYSIS & PLANNING</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {aiModels.analysis.map((model, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img 
                      src={model.icon} 
                      alt={model.name} 
                      className="w-6 h-6 mt-0.5"
                      style={{ filter: model.filter || 'none' }}
                    />
                    <div>
                      <p className="text-white font-medium">{model.name}</p>
                      <p className="text-xs text-gray-400">{model.use}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Layer: Autonomous & Specialized */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-6">
                <h4 className="text-sm font-semibold text-yellow-400 mb-4">24/7 AUTONOMOUS AGENTS</h4>
                <div className="space-y-3">
                  {aiModels.autonomous.map((model, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                      <img 
                        src={model.icon} 
                        alt={model.name} 
                        className="w-5 h-5"
                        style={{ filter: model.filter || 'none' }}
                      />
                      <div className="flex-1">
                        <span className="text-sm text-white">{model.name}</span>
                        <span className="text-xs text-gray-400 ml-2">{model.use}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3 italic">Working while I sleep, reviewed upon waking</p>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-6">
                <h4 className="text-sm font-semibold text-violet-400 mb-4">SPECIALIZED TASKS</h4>
                <div className="space-y-3">
                  {aiModels.specialized.map((model, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <img 
                        src={model.icon} 
                        alt={model.name} 
                        className="w-6 h-6 mt-0.5"
                        style={{ filter: model.filter || 'none' }}
                      />
                      <div>
                        <p className="text-white font-medium">{model.name}</p>
                        <p className="text-xs text-gray-400">{model.use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Layer: Validation */}
            <div className="relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-6">
              <h4 className="text-sm font-semibold text-green-400 mb-4">VALIDATION LAYER</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {aiModels.validation.map((model, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img 
                      src={model.icon} 
                      alt={model.name} 
                      className="w-6 h-6 mt-0.5"
                      style={{ filter: model.filter || 'none' }}
                    />
                    <div>
                      <p className="text-white font-medium">{model.name}</p>
                      <p className="text-xs text-gray-400">{model.use}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* My Unique Approach */}
        <div 
          className={`
            mb-20
            ${isInView ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
          }}
        >
          <h3 className="text-xl font-bold mb-8 text-white text-center">What Makes My Approach Different</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {orchestrationApproach.map((approach, index) => (
              <div
                key={index}
                className={`
                  relative p-6 rounded-2xl
                  bg-gradient-to-br from-white/5 to-white/[0.02]
                  backdrop-blur-xl border transition-all duration-500
                  ${activeApproach === index 
                    ? 'border-white/30 shadow-2xl' 
                    : 'border-white/10 hover:border-white/20'}
                  transform hover:scale-[1.02]
                `}
              >
                <div className="flex justify-center mb-4">
                  <approach.Icon className={`w-8 h-8 ${
                    activeApproach === index 
                      ? index === 0 ? 'text-cyan-400' 
                        : index === 1 ? 'text-pink-600'
                        : index === 2 ? 'text-violet-600'
                        : 'text-yellow-400'
                      : 'text-gray-400'
                  } transition-colors duration-500`} />
                </div>
                <h4 className="font-semibold text-white mb-2 text-center">{approach.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}