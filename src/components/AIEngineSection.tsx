'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import PipelineStage from './PipelineStage';
import SectionTitle from './SectionTitle';
import SpeedoMeter from './SpeedoMeter';

const stages = [
  {
    title: 'Define & Decompose',
    description: 'Transform ambiguous requirements into structured AI prompts and system architectures. Context-aware requirement extraction, stakeholder intent mapping.'
  },
  {
    title: 'Design & Prototype',
    description: 'AI-powered architecture decisions and rapid prototyping. Generate system designs, API contracts, database schemas. Simulate edge cases before writing code.'
  },
  {
    title: 'Generate & Orchestrate',
    description: 'Multi-agent flows that plan, write, refactor, or explain—24/7 code agents used selectively for scaffolds, docs, and safe refactors.'
  },
  {
    title: 'Test & Validate',
    description: 'Comprehensive AI-augmented testing strategies. Generate test cases from requirements, property-based testing, mutation testing, security scanning.'
  },
  {
    title: 'Deploy & Monitor',
    description: 'Zero-downtime deployments with AI-powered rollback decisions. Anomaly detection, performance optimization suggestions, predictive scaling.'
  },
  {
    title: 'Optimize & Evolve',
    description: 'Continuous improvement through usage analysis. AI identifies technical debt, suggests refactors, monitors for deprecated patterns.'
  }
];

const ecosystems = [
  { name: 'OpenAI', icon: '/icons/openai.svg', x: 15, y: 20, size: 'lg', filter: 'brightness-0 invert' },
  { name: 'Claude', icon: '/icons/claude.svg', x: 75, y: 15, size: 'xl', filter: 'none' },
  { name: 'Qwen', icon: '/icons/qwen.svg', x: 45, y: 50, size: 'lg', filter: 'none' },
  { name: 'DeepSeek', icon: '/icons/deepseek.svg', x: 25, y: 90, size: 'md', filter: 'none' },
  { name: 'Gemini', icon: '/icons/gemini.svg', x: 60, y: 85, size: 'md', filter: 'none' },
  { name: 'Ollama', icon: '/icons/ollama.svg', x: 85, y: 45, size: 'lg', filter: 'brightness-0 invert' }
];

const outcomes = [
  { display: 'Correctness', color: 'green-400' },
  { display: 'Speed', color: 'cyan-400' },
  { display: 'Reliability', color: 'violet-600' },
  { display: 'Auditability', color: 'yellow-400' }
];

export default function AIEngineSection() {
  const [isInView, setIsInView] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);

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

  // Auto-advance stages with reset on manual click and pause on hover
  useEffect(() => {
    if (!isInView || isPaused) return;
    
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % stages.length);
    }, 5000); // Increased from 3000ms to 5000ms for better readability

    return () => clearInterval(interval);
  }, [isInView, activeStage, isPaused]); // Reset timer when activeStage changes or paused state changes

  // Smooth scroll to active stage
  useEffect(() => {
    if (pipelineRef.current && isInView) {
      const stageWidth = 224; // w-56
      const offset = activeStage * (stageWidth + 32); // gap-8
      pipelineRef.current.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
    }
  }, [activeStage, isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative lg:py-24 overflow-hidden bg-gradient-to-b from-black via-[#0A0F1B] to-black"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.05) 50%, transparent 100%),
                             linear-gradient(0deg, transparent 0%, rgba(124, 58, 237, 0.05) 50%, transparent 100%)`,
            backgroundSize: '60px 60px',
            animation: 'grid-move 30s linear infinite',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <SectionTitle 
            title="AI In My Work"
            subtitle="My AI-augmented product loop"
            isInView={isInView}
          />

          {/* Outcomes speedometers */}
          <div 
            className={`
              grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 place-items-center
              ${isInView ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 2.5rem, 0)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
              willChange: 'transform, opacity'
            }}
          >
            {outcomes.map((outcome, index) => (
              <SpeedoMeter
                key={index}
                label={outcome.display}
                color={outcome.color}
                isInView={isInView}
                delay={300 + index * 200}
              />
            ))}
          </div>
        </div>

        {/* Horizontal scrolling pipeline */}
        <div 
          className={`
            relative
            ${isInView ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 2.5rem, 0)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
            willChange: 'transform, opacity',
            contain: 'layout style paint'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={pipelineRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-6 sm:px-12 lg:px-20 py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stages.map((stage, index) => (
              <PipelineStage
                key={index}
                title={stage.title}
                description={stage.description}
                index={index}
                isActive={activeStage === index}
                onClick={() => setActiveStage(index)}
              />
            ))}
          </div>

          {/* Pipeline progress indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-violet-600 to-pink-600 transition-all duration-500"
              style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Ecosystem cloud */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mt-12">
          <div 
            className={`
              relative h-48 lg:h-64
              ${isInView ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 2.5rem, 0)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
              willChange: 'transform, opacity'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-2xl">
              {/* Connection lines - rendered first so they appear under icons */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="line-gradient">
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0.4)" />
                    <stop offset="50%" stopColor="rgba(124, 58, 237, 0.4)" />
                    <stop offset="100%" stopColor="rgba(219, 39, 119, 0.4)" />
                  </linearGradient>
                </defs>
                {/* Connect sequential icons */}
                {ecosystems.slice(0, -1).map((eco, i) => {
                  const next = ecosystems[i + 1];
                  return (
                    <line
                      key={`seq-${i}`}
                      x1={`${eco.x}%`}
                      y1={`${eco.y}%`}
                      x2={`${next.x}%`}
                      y2={`${next.y}%`}
                      stroke="url(#line-gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.5"
                    />
                  );
                })}
                {/* Additional connections: DeepSeek-OpenAI and Claude-Ollama */}
                <line
                  x1={`${ecosystems[3].x}%`}
                  y1={`${ecosystems[3].y}%`}
                  x2={`${ecosystems[0].x}%`}
                  y2={`${ecosystems[0].y}%`}
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <line
                  x1={`${ecosystems[1].x}%`}
                  y1={`${ecosystems[1].y}%`}
                  x2={`${ecosystems[5].x}%`}
                  y2={`${ecosystems[5].y}%`}
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
              </svg>
              
              {/* Ecosystem icons */}
              {ecosystems.map((eco, index) => (
                <div
                  key={index}
                  className={`
                    absolute transform -translate-x-1/2 -translate-y-1/2
                    transition-all duration-1000 hover:scale-110
                    cursor-pointer group
                  `}
                  style={{
                    left: `${eco.x}%`,
                    top: `${eco.y}%`,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div 
                    className={`
                      p-3 rounded-full
                      bg-white/5 backdrop-blur-sm
                      border-2 border-white/10 group-hover:border-white/30
                      transition-all duration-300
                      flex items-center justify-center
                      ${eco.size === 'xl' ? 'w-16 h-16' : eco.size === 'lg' ? 'w-14 h-14' : eco.size === 'md' ? 'w-12 h-12' : 'w-10 h-10'}
                    `}
                  >
                    <img 
                      src={eco.icon} 
                      alt={eco.name}
                      className={`
                        filter ${eco.filter} opacity-90 group-hover:opacity-100
                        transition-opacity duration-300
                        ${eco.size === 'xl' ? 'w-8 h-8' : eco.size === 'lg' ? 'w-7 h-7' : eco.size === 'md' ? 'w-6 h-6' : 'w-5 h-5'}
                      `}
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-gray-400 whitespace-nowrap">{eco.name}</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-white/10 blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(60px, 60px, 0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}