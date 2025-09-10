'use client';

import { useState, useEffect, useRef } from 'react';
import PillarCard from './PillarCard';
import SectionTitle from './SectionTitle';

const pillars = [
  {
    id: 'ai-blockchain',
    title: 'AI & Web3 & Cloud Expertise',
    skills: [
      'Machine Learning',
      'Agent Tooling',
      'Prompt Engineering',
      'LLM Inference',
      'Payments Rails',
      'Protocol Design',
      'Distributed Systems',
      'Node Running',
      'Smart Contracts',
      'Block Data Analysis'
    ],
    microCase: {
      title: 'Cointribute',
      description: 'Non-revenue, self-custodial donation checkout with traceability and donor voting.'
    },
    position: 'top' as const,
    accentColor: 'cyan-400'
  },
  {
    id: 'entrepreneurial',
    title: 'Entrepreneurial Mindset',
    skills: [
      'In-house Entrepreneur',
      'Product Strategy',
      'Go-to-market',
      'Business Outcomes',
      'Hiring for Leverage',
      'Negotiations',
      'Risk Management',
      'Compliance Awareness',
      'Mentorship',
      'Co-founding'
    ],
    microCase: {
      title: 'RPC Studio',
      description: 'A crypto app platform across 15 blockchains in 3 regions; diversified company portfolio and secured additional funding.'
    },
    position: 'bottom-left' as const,
    accentColor: 'violet-600'
  },
  {
    id: 'ux-focus',
    title: 'User Experience Focus',
    skills: [
      'Feels Natural',
      'Usability Feedback',
      'Onboarding that Teaches',
      'Accessibility',
      'Progressive Disclosure',
      'Performance Budgets',
      'Thoughtful Microcopy',
      'Developer Experience'
    ],
    microCase: {
      title: 'InclusAI',
      description: 'An accessibility & text-simplification layer improving readability and task completion.'
    },
    position: 'bottom-right' as const,
    accentColor: 'pink-600'
  }
];

export default function TrifectaSection() {
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-32 overflow-hidden bg-[#0F1218]"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      {/* Section Title */}
      <div className="relative z-30">
        <SectionTitle 
          title="Personal Trifecta"
          subtitle="3 Industry Skills To Define Me"
          isInView={isInView}
        />
      </div>

      {/* Mobile: Sequential Layout */}
      {isMobile ? (
        <div className="w-full max-w-2xl mx-auto space-y-6">
          {/* Sequential Cards */}
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <PillarCard
                title={pillar.title}
                skills={pillar.skills}
                microCase={pillar.microCase}
                position="top"
                isActive={activePillar === pillar.id}
                onHover={(active) => setActivePillar(active ? pillar.id : null)}
                accentColor={pillar.accentColor}
              />
            </div>
          ))}
          
        </div>
      ) : (
        /* Desktop: Triangle Layout */
        <div className="relative w-full max-w-6xl h-[650px] flex items-center justify-center">
          {/* SVG for triangle edges */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Triangle edges */}
            <g className="triangle-edges">
              {/* Top to Bottom Left */}
              <line
                x1="500" y1="80"
                x2="200" y2="450"
                stroke="url(#gradient1)"
                strokeWidth="3"
                className={`transition-all duration-500 ${
                  activePillar === 'ai-blockchain' || activePillar === 'entrepreneurial'
                    ? 'opacity-100'
                    : 'opacity-40'
                }`}
              />
              {/* Top to Bottom Right */}
              <line
                x1="500" y1="80"
                x2="800" y2="450"
                stroke="url(#gradient2)"
                strokeWidth="3"
                className={`transition-all duration-500 ${
                  activePillar === 'ai-blockchain' || activePillar === 'ux-focus'
                    ? 'opacity-100'
                    : 'opacity-40'
                }`}
              />
              {/* Bottom Left to Bottom Right */}
              <line
                x1="200" y1="449"
                x2="800" y2="450"
                stroke="url(#gradient3)"
                strokeWidth="3"
                className={`transition-all duration-500 ${
                  activePillar === 'entrepreneurial' || activePillar === 'ux-focus'
                    ? 'opacity-100'
                    : 'opacity-40'
                }`}
              />
            </g>

            {/* Animated glow nodes when active */}
            {activePillar && (
              <g className="animate-pulse">
                <circle cx="500" cy="80" r="6" fill="#22d3ee" opacity="0.8" />
                <circle cx="200" cy="450" r="6" fill="#9333ea" opacity="0.8" />
                <circle cx="800" cy="450" r="6" fill="#ec4899" opacity="0.8" />
              </g>
            )}

            {/* Gradients for edges */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Pillar Cards - positioned at triangle vertices */}
          <div className="absolute inset-0">
            {/* Top card */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <PillarCard
                title={pillars[0].title}
                skills={pillars[0].skills}
                microCase={pillars[0].microCase}
                position="top"
                isActive={activePillar === pillars[0].id}
                onHover={(active) => setActivePillar(active ? pillars[0].id : null)}
                accentColor={pillars[0].accentColor}
              />
            </div>

            {/* Bottom left card */}
            <div
              className={`absolute bottom-10 left-0 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <PillarCard
                title={pillars[1].title}
                skills={pillars[1].skills}
                microCase={pillars[1].microCase}
                position="bottom-left"
                isActive={activePillar === pillars[1].id}
                onHover={(active) => setActivePillar(active ? pillars[1].id : null)}
                accentColor={pillars[1].accentColor}
              />
            </div>

            {/* Bottom right card */}
            <div
              className={`absolute bottom-10 right-0 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <PillarCard
                title={pillars[2].title}
                skills={pillars[2].skills}
                microCase={pillars[2].microCase}
                position="bottom-right"
                isActive={activePillar === pillars[2].id}
                onHover={(active) => setActivePillar(active ? pillars[2].id : null)}
                accentColor={pillars[2].accentColor}
              />
            </div>
          </div>

        </div>
      )}
    </section>
  );
}