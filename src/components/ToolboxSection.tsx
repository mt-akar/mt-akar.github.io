'use client';

import { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

interface Tool {
  name: string;
}

interface ToolGroup {
  category: string;
  tools: Tool[];
  color: string;
}

const toolGroups: ToolGroup[] = [
  {
    category: 'Languages',
    tools: [
      { name: 'C#' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'Go' },
      { name: 'Dart' },
      { name: 'SQL' },
      { name: 'Bash' },
      { name: 'YAML' },
      { name: 'Java' },
      { name: 'Kotlin' },
      { name: 'Rust' }
    ],
    color: 'from-cyan-400 to-blue-600'
  },
  {
    category: 'Frameworks',
    tools: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Angular' },
      { name: '.NET' },
      { name: 'ASP.NET' },
      { name: 'Blazor' },
      { name: 'MAUI' },
      { name: 'Android' },
      { name: 'iOS' },
      { name: 'Flutter' }
    ],
    color: 'from-violet-400 to-purple-600'
  },
  {
    category: 'Web3',
    tools: [
      { name: 'Solidity' },
      { name: 'EVM' },
      { name: 'Hardhat' },
      { name: 'Foundry' },
      { name: 'ethers.js' },
      { name: 'web3.js' }
    ],
    color: 'from-green-400 to-emerald-600'
  },
  {
    category: 'Blockchains',
    tools: [
      { name: 'Ethereum' },
      { name: 'BSC' },
      { name: 'Polygon' },
      { name: 'Arbitrum' },
      { name: 'Avalanche' },
      { name: 'Base' },
      { name: 'Fantom' },
      { name: 'Optimism' },
      { name: 'Pocket' }
    ],
    color: 'from-yellow-400 to-orange-600'
  },
  {
    category: 'Cloud',
    tools: [
      { name: 'AWS' },
      { name: 'Azure' },
      { name: 'DigitalOcean' },
      { name: 'OVH' },
      { name: 'Contabo' },
      { name: 'GCP' },
      { name: 'Vercel' }
    ],
    color: 'from-pink-400 to-rose-600'
  },
  {
    category: 'DevOps',
    tools: [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Terraform' },
      { name: 'Linux' },
      { name: 'Nginx' },
      { name: 'GitHub Actions' },
      { name: 'Azure DevOps' },
      { name: 'Jira' }
    ],
    color: 'from-red-400 to-pink-600'
  },
  {
    category: 'Data',
    tools: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'SQLite' },
      { name: 'MSSQL' },
      { name: 'MongoDB' },
      { name: 'DynamoDB' },
      { name: 'Cassandra' },
      { name: 'Redis' },
      { name: 'CosmosDB' }
    ],
    color: 'from-indigo-400 to-blue-600'
  },
  {
    category: 'AI & ML',
    tools: [
      { name: 'OpenAI' },
      { name: 'Anthropic' },
      { name: 'Llama' },
      { name: 'DeepSeek' },
      { name: 'Ollama' },
      { name: 'CUDA' },
      { name: 'LangChain' },
      { name: 'LlamaIndex' }
    ],
    color: 'from-teal-400 to-cyan-600'
  }
];

export default function ToolboxSection() {
  const [isInView, setIsInView] = useState(false);
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

  const PLANET_SIZE = 120;
  const PLANET_ORBIT_RADIUS = 350;
  const PLANET_ORBIT_RADIUS_Y = 140;
  const TOOL_ORBIT_RADIUS = 100;

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-[#0A0818] to-black"
    >
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <SectionTitle 
          title="Toolbox"
          subtitle="Technologies in my orbit"
          isInView={isInView}
        />

        <div 
          className="relative mx-auto mt-20"
          style={{
            height: '900px',
            width: '100%',
            maxWidth: '900px',
            perspective: '1000px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute"
              style={{
                width: `${PLANET_ORBIT_RADIUS * 2}px`,
                height: `${PLANET_ORBIT_RADIUS * 2}px`,
                left: `-${PLANET_ORBIT_RADIUS}px`,
                top: `-${PLANET_ORBIT_RADIUS}px`,
                transformStyle: 'preserve-3d',
                transform: `scaleY(${PLANET_ORBIT_RADIUS_Y / PLANET_ORBIT_RADIUS})`
              }}
            >
              {toolGroups.map((group, index) => {
                const baseAngle = (360 / toolGroups.length) * index;
                const adjustedAngle = (baseAngle - 270 + 360) % 360;
                const animationDelay = -(adjustedAngle / 360) * 90;
                
                return (
                  <div
                    key={index}
                    className={`absolute ${isInView ? 'planet-orbit planet-depth' : ''}`}
                    style={{
                      left: `${PLANET_ORBIT_RADIUS}px`,
                      top: `${PLANET_ORBIT_RADIUS}px`,
                      animationDelay: `${animationDelay}s`
                    }}
                  >
                    <div 
                      className={`relative ${isInView ? 'planet-scale' : ''}`}
                      style={{ 
                        animationDelay: `${animationDelay}s`,
                        position: 'relative'
                      }}
                    >
                      <div
                        style={{
                          transform: `scaleY(${PLANET_ORBIT_RADIUS / PLANET_ORBIT_RADIUS_Y})`,
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        <div 
                          className={`absolute rounded-full bg-gradient-to-br ${group.color} shadow-2xl flex items-center justify-center`}
                          style={{
                            width: `${PLANET_SIZE}px`,
                            height: `${PLANET_SIZE}px`,
                            left: `-${PLANET_SIZE / 2}px`,
                            top: `-${PLANET_SIZE / 2}px`,
                            boxShadow: `0 0 40px rgba(0,0,0,0.8), inset -20px -20px 40px rgba(0,0,0,0.5)`
                          }}
                        >
                          <span className="text-white/90 font-bold text-sm z-20 relative">
                            {group.category}
                          </span>
                        </div>
                      </div>

                      <div 
                        className={`absolute ${isInView ? 'animate-spin-medium' : ''}`}
                        style={{
                          width: `${TOOL_ORBIT_RADIUS * 2}px`,
                          height: `${TOOL_ORBIT_RADIUS * 2}px`,
                          left: `-${TOOL_ORBIT_RADIUS}px`,
                          top: `-${TOOL_ORBIT_RADIUS}px`
                        }}
                      >
                        {group.tools.map((tool, toolIndex) => {
                          const toolAngle = (360 / group.tools.length) * toolIndex;
                          const radians = (toolAngle * Math.PI) / 180;
                          const toolX = Math.cos(radians) * TOOL_ORBIT_RADIUS + TOOL_ORBIT_RADIUS;
                          const toolY = Math.sin(radians) * TOOL_ORBIT_RADIUS + TOOL_ORBIT_RADIUS;
                          
                          return (
                            <div
                              key={toolIndex}
                              className="absolute"
                              style={{
                                left: `${toolX}px`,
                                top: `${toolY}px`,
                                transform: 'translate(-50%, -50%)'
                              }}
                            >
                              <div 
                                className={`${isInView ? 'animate-counter-spin-medium' : ''}`}
                                style={{
                                  transformStyle: 'preserve-3d'
                                }}
                              >
                                <div 
                                  className="flex flex-col items-center gap-1"
                                  style={{
                                    transform: `scaleY(${PLANET_ORBIT_RADIUS / PLANET_ORBIT_RADIUS_Y})`
                                  }}
                                >
                                  <div 
                                    className="bg-gray-900 rounded-lg border border-white/30 hover:bg-gray-800 transition-colors flex items-center justify-center"
                                    style={{
                                      width: '32px',
                                      height: '32px'
                                    }}
                                  >
                                    <div 
                                      className="bg-white/50 rounded w-4 h-4"
                                    />
                                  </div>
                                  <span 
                                    className="text-white text-center whitespace-nowrap"
                                    style={{ 
                                      fontSize: '9px'
                                    }}
                                  >
                                    {tool.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes planetOrbit {
          from {
            transform: rotate(0deg) translateX(${PLANET_ORBIT_RADIUS}px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(${PLANET_ORBIT_RADIUS}px) rotate(-360deg);
          }
        }
        
        @keyframes depthScale {
          0% { transform: scale(1.0); opacity: 0.9; }
          12.5% { transform: scale(1.2); opacity: 0.95; }
          25% { transform: scale(1.4); opacity: 1; }
          37.5% { transform: scale(1.2); opacity: 0.95; }
          50% { transform: scale(1.0); opacity: 0.9; }
          62.5% { transform: scale(0.8); opacity: 0.8; }
          75% { transform: scale(0.6); opacity: 0.7; }
          87.5% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.0); opacity: 0.9; }
        }
        
        @keyframes depthZIndex {
          0% { z-index: 500; }
          12.5% { z-index: 600; }
          25% { z-index: 700; }
          37.5% { z-index: 600; }
          50% { z-index: 500; }
          62.5% { z-index: 400; }
          75% { z-index: 300; }
          87.5% { z-index: 400; }
          100% { z-index: 500; }
        }
        
        @keyframes spin-medium {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(360deg); }
        }
        
        @keyframes counter-spin-medium {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(-360deg); }
        }
        
        .planet-orbit {
          animation: planetOrbit 90s linear infinite;
          transform-origin: 0 0;
        }
        
        .planet-depth {
          animation: planetOrbit 90s linear infinite, depthZIndex 90s linear infinite;
          transform-origin: 0 0;
        }
        
        .planet-scale {
          animation: depthScale 90s linear infinite;
        }
        
        .animate-spin-medium {
          animation: spin-medium 30s linear infinite;
        }
        
        .animate-counter-spin-medium {
          animation: counter-spin-medium 30s linear infinite;
        }
        
      `}</style>
    </section>
  );
}