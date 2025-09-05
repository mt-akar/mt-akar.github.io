'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'pathology-ai',
    title: 'Pathology AI',
    subtitle: 'Advanced Report Analysis',
    visual: {
      type: 'gradient',
      colors: 'from-emerald-600 to-teal-600'
    },
    description: 'AI-assisted pipeline that converts oncology PDFs into validated JSON and instant analytics. Initially constrained to RTX 2070S for privacy; later accelerated on on-prem A100. Hours of manual review collapse to minutes.',
    link: '/projects#pathology-ai'
  },
  {
    id: 'inclusai',
    title: 'InclusAI',
    subtitle: 'Accessibility & Text Simplification',
    visual: {
      type: 'gradient',
      colors: 'from-blue-600 to-indigo-600'
    },
    description: 'Script-injected layer that simplifies language and adds assistive controls for public sites; built to improve comprehension and task completion.',
    link: '/projects#inclusai'
  },
  {
    id: 'cointribute',
    title: 'Cointribute',
    subtitle: 'Non-custodial crypto donations platform',
    visual: {
      type: 'gradient',
      colors: 'from-violet-600 to-purple-600'
    },
    description: 'Fully self-custodial crypto donations with traceability and optional donor voting on milestones—trust you can audit.',
    link: '/projects#cointribute'
  },
  {
    id: 'web3-studio',
    title: 'Web3 Studio',
    subtitle: 'C# SDK for EVM',
    visual: {
      type: 'gradient',
      colors: 'from-orange-600 to-red-600'
    },
    description: 'Open-source toolkit for off-chain EVM workflows (signing, events, calls). Strongly-typed primitives, pragmatic APIs, NuGet-ready.',
    link: '/projects#web3-studio'
  },
  {
    id: 'rpc-studio',
    title: 'RPC Studio',
    subtitle: 'Multi-Chain Node & RPC Platform',
    visual: {
      type: 'gradient',
      colors: 'from-cyan-600 to-blue-600'
    },
    description: 'Deployment and lifecycle management at scale—12k+ VM instances across 26 networks, with automation, monitoring, and security hardening baked in.',
    link: '/projects#rpc-studio'
  },
  {
    id: 'bottom-nav-layout',
    title: 'Bottom Nav Layout',
    subtitle: 'Flutter Navigation Library',
    visual: {
      type: 'gradient',
      colors: 'from-pink-600 to-rose-600'
    },
    description: 'Eliminates boilerplate for complex nav (state preservation, lazy loading, back-stack). Reached ~82% popularity on pub.dev.',
    link: '/projects#bottom-nav-layout'
  }
];

interface FilmstripCardProps {
  study: typeof caseStudies[0];
  isPaused: boolean;
  onHover: (hovered: boolean) => void;
}

function FilmstripCard({ study, isPaused, onHover }: FilmstripCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <Link 
      href={study.link}
      className="block flex-shrink-0 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative w-72 h-40 border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
        style={{
          transform: isHovered ? 'scale(1.03) translateZ(0)' : 'scale(1) translateZ(0)',
          boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.5)' : '0 4px 12px rgba(0,0,0,0.2)',
          willChange: 'transform'
        }}
      >
        {/* Full background visual */}
        <div className={`absolute inset-0 bg-gradient-to-br ${study.visual.colors} opacity-80`} />
        
        {/* Black gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Title and subtitle overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-base mb-1">
            {study.title}
          </h3>
          <p className="text-gray-300 text-sm">
            {study.subtitle}
          </p>
        </div>

        {/* Description overlay - shows on hover */}
        <div 
          className="absolute inset-0 bg-black/95 p-4 flex flex-col justify-center transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none'
          }}
        >
          <h3 className="text-white font-bold text-base mb-1">
            {study.title}
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            {study.subtitle}
          </p>
          <p className="text-gray-400 text-xs leading-relaxed">
            {study.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudyFilmstrip() {
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000, #0a0614, #000000)'
      }}
    >
      {/* Unique transitional background with subtle aurora effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.15) 0%, transparent 40%), radial-gradient(ellipse at bottom right, rgba(6, 182, 212, 0.15) 0%, transparent 40%)'
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-6">
          {/* Small left-aligned title */}
          <h2 
            className={`text-xl font-semibold text-white/60 ${isInView ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(-1rem, 0, 0)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            Recent Work
          </h2>
        </div>

        {/* Infinite scrolling filmstrip */}
        <div 
          className={`relative ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 2.5rem, 0)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
          }}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            {/* First set of cards */}
            <div 
              className="flex gap-6 animate-marquee"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {caseStudies.map((study) => (
                <FilmstripCard 
                  key={`first-${study.id}`}
                  study={study}
                  isPaused={isPaused}
                  onHover={setIsPaused}
                />
              ))}
            </div>

            {/* Duplicate set for infinite loop */}
            <div 
              className="flex gap-6 animate-marquee"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {caseStudies.map((study) => (
                <FilmstripCard 
                  key={`second-${study.id}`}
                  study={study}
                  isPaused={isPaused}
                  onHover={setIsPaused}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View all projects link */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mt-8 text-right">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
          >
            <span>View all projects</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 1.5rem));
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}