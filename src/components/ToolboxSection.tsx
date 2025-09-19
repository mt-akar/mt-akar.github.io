'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import SectionTitle from './SectionTitle';

interface Tool {
  name: string;
  iconName: string;
  iconExt?: string;
  needsWhite?: boolean;
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
      { name: 'C#', iconName: 'csharp' },
      { name: 'Python', iconName: 'python' },
      { name: 'TypeScript', iconName: 'typescript' },
      { name: 'Solidity', iconName: 'solidity', needsWhite: true },
      { name: 'JavaScript', iconName: 'javascript' },
      { name: 'Move', iconName: 'sui' },
      { name: 'Bash', iconName: 'bash' },
      { name: 'Dart', iconName: 'dart' },
      { name: 'Go', iconName: 'go' },
      { name: 'Java', iconName: 'java' },
      { name: 'Kotlin', iconName: 'kotlin' },
      { name: 'Rust', iconName: 'rust' }
    ],
    color: 'from-cyan-400 to-blue-600'
  },
  {
    category: 'Frameworks',
    tools: [
      { name: '.NET', iconName: 'dotnet' },
      { name: 'Node.js', iconName: 'nodejs' },
      { name: 'React', iconName: 'react' },
      { name: 'Next.js', iconName: 'nextjs' },
      { name: 'iOS', iconName: 'ios' },
      { name: 'Android', iconName: 'android' },
      { name: 'Flutter', iconName: 'flutter' },
      { name: 'Express', iconName: 'express', needsWhite: true },
      { name: 'Angular', iconName: 'angular' },
      { name: 'ASP.NET', iconName: 'aspdotnet' },
      { name: 'Blazor', iconName: 'blazor' },
      { name: 'MAUI', iconName: 'maui' },
    ],
    color: 'from-violet-400 to-purple-600'
  },
  {
    category: 'Web3',
    tools: [
      { name: 'Chainlink', iconName: 'chainlink' },
      { name: 'Metamask', iconName: 'metamask' },
      { name: 'Tether', iconName: 'tether' },
      { name: 'USDC', iconName: 'usdc' },
      { name: 'Hardhat', iconName: 'hardhat' },
      { name: 'Foundry', iconName: 'foundry', iconExt: 'png' },
      { name: 'EVM', iconName: 'ethereum' },
      { name: 'ethers.js', iconName: 'ethersjs' },
      { name: 'web3.js', iconName: 'web3js' },
      { name: 'Open Zeppelin', iconName: 'open-zeppelin' },
      { name: 'Aave', iconName: 'aave' },
    ],
    color: 'from-green-400 to-emerald-600'
  },
  {
    category: 'Blockchains',
    tools: [
      { name: 'Ethereum', iconName: 'ethereum' },
      { name: 'Bitcoin', iconName: 'bitcoin' },
      { name: 'Solana', iconName: 'solana' },
      { name: 'Polygon', iconName: 'polygon' },
      { name: 'Tron', iconName: 'tron' },
      { name: 'Binance Chain', iconName: 'bnb' },
      { name: 'Arbitrum', iconName: 'arbitrum' },
      { name: 'Avalanche', iconName: 'avalanche' },
      { name: 'Base', iconName: 'base' },
      { name: 'Fantom', iconName: 'fantom' },
      { name: 'Optimism', iconName: 'optimism' },
      { name: 'Sui', iconName: 'sui' },
      { name: 'Pocket', iconName: 'pocket-network' }
    ],
    color: 'from-yellow-400 to-orange-600'
  },
  {
    category: 'Cloud',
    tools: [
      { name: 'AWS', iconName: 'aws' },
      { name: 'Azure', iconName: 'azure' },
      { name: 'GCP', iconName: 'gcp' },
      { name: 'DigitalOcean', iconName: 'digitalocean' },
      { name: 'Kinesis', iconName: 'kinesis' },
      { name: 'OVH', iconName: 'ovh' },
      { name: 'Contabo', iconName: 'contabo' },
      { name: 'Vercel', iconName: 'vercel', needsWhite: true }
    ],
    color: 'from-pink-400 to-rose-600'
  },
  {
    category: 'DevOps',
    tools: [
      { name: 'Git', iconName: 'git' },
      { name: 'Docker', iconName: 'docker' },
      { name: 'GitHub', iconName: 'github', needsWhite: true },
      { name: 'Kubernetes', iconName: 'kubernetes' },
      { name: 'Terraform', iconName: 'terraform' },
      { name: 'Linux', iconName: 'linux' },
      { name: 'Nginx', iconName: 'nginx' },
      { name: 'YAML', iconName: 'yaml' },
      { name: 'Jira', iconName: 'jira' },
      { name: 'Azure DevOps', iconName: 'azure-devops' },
    ],
    color: 'from-red-400 to-pink-600'
  },
  {
    category: 'Data',
    tools: [
      { name: 'PostgreSQL', iconName: 'postgresql' },
      { name: 'Redis', iconName: 'redis' },
      { name: 'MongoDB', iconName: 'mongodb' },
      { name: 'DynamoDB', iconName: 'dynamodb' },
      { name: 'MySQL', iconName: 'mysql' },
      { name: 'SQLite', iconName: 'sqlite' },
      { name: 'MSSQL', iconName: 'mssql' },
      { name: 'Elasticsearch', iconName: 'elasticsearch' },
      { name: 'Cassandra', iconName: 'cassandra' },
      { name: 'CosmosDB', iconName: 'cosmosdb' }
    ],
    color: 'from-indigo-400 to-blue-600'
  },
  {
    category: 'AI & ML',
    tools: [
      { name: 'OpenAI', iconName: 'openai', needsWhite: true },
      { name: 'Claude', iconName: 'claude' },
      { name: 'Ollama', iconName: 'ollama', needsWhite: true },
      { name: 'Gemini', iconName: 'gemini' },
      { name: 'Grok', iconName: 'grok', needsWhite: true },
      { name: 'DeepSeek', iconName: 'deepseek' },
      { name: 'Qwen', iconName: 'qwen' },
      { name: 'Copilot', iconName: 'copilot' },
      { name: 'Anthropic', iconName: 'anthropic', needsWhite: true },
      { name: 'Llama', iconName: 'meta' },
      { name: 'CUDA', iconName: 'nvidia' },
    ],
    color: 'from-teal-400 to-cyan-600'
  }
];

// Constants moved outside component to avoid recreations
const PLANET_SIZE = 120;
const PLANET_ORBIT_RADIUS = 450;
const PLANET_ORBIT_RADIUS_Y = 180;
const TOOL_ORBIT_RADIUS = 100;

export default function ToolboxSection() {
  const [isInView, setIsInView] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Memoize column calculation
  const columnsClass = useMemo(() => {
    if (typeof window === 'undefined') return 'grid-cols-4';
    const width = window.innerWidth;
    if (width < 400) return 'grid-cols-3';
    if (width < 500) return 'grid-cols-4';
    return 'grid-cols-5';
  }, [isNarrowScreen]);

  const columnsCount = useMemo(() => {
    return parseInt(columnsClass.split('-').pop() || '4');
  }, [columnsClass]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsNarrowScreen(window.innerWidth < 760);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  // Optimized animation loop - only update every 100ms instead of every frame
  useEffect(() => {
    if (!isInView || isNarrowScreen) return;

    let lastUpdate = 0;
    const updateInterval = 100; // Update every 100ms instead of every frame
    const startTime = Date.now();

    const updateAnimationTime = (currentTime: number) => {
      if (currentTime - lastUpdate >= updateInterval) {
        const elapsed = (Date.now() - startTime) / 1000;
        setAnimationTime(elapsed);
        lastUpdate = currentTime;
      }
      animationFrameRef.current = requestAnimationFrame(updateAnimationTime);
    };

    animationFrameRef.current = requestAnimationFrame(updateAnimationTime);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, isNarrowScreen]);

  // Memoize z-index calculations
  const calculatePlanetZIndex = useCallback((groupIndex: number) => {
    const planetBaseAngle = (360 / toolGroups.length) * groupIndex;
    const planetAdjustedAngle = (planetBaseAngle - 270 + 360) % 360;
    const planetOrbitProgress = (animationTime % 90) / 90;
    const currentPlanetAngle = planetAdjustedAngle + (planetOrbitProgress * 360);
    const planetRadians = (currentPlanetAngle * Math.PI) / 180;
    const planetY = Math.sin(planetRadians) * PLANET_ORBIT_RADIUS_Y;

    const normalizedY = (planetY + PLANET_ORBIT_RADIUS_Y) / (2 * PLANET_ORBIT_RADIUS_Y);
    return Math.round(1000 + normalizedY * 1000);
  }, [animationTime]);

  const calculateToolZIndex = useCallback((groupIndex: number, toolIndex: number, group: ToolGroup) => {
    const toolOrbitProgress = (animationTime % 30) / 30;
    const toolAngle = (360 / group.tools.length) * toolIndex + (toolOrbitProgress * 360);
    const toolRadians = (toolAngle * Math.PI) / 180;
    const localToolY = Math.sin(toolRadians) * TOOL_ORBIT_RADIUS;

    const normalizedY = (localToolY / TOOL_ORBIT_RADIUS);
    return Math.round(10 + normalizedY * 9);
  }, [animationTime]);

  const toggleGroupExpansion = useCallback((groupIndex: number) => {
    setExpandedGroups(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(groupIndex)) {
        newExpanded.delete(groupIndex);
      } else {
        newExpanded.add(groupIndex);
      }
      return newExpanded;
    });
  }, []);

  const getVisibleTools = useCallback((tools: Tool[], groupIndex: number) => {
    if (expandedGroups.has(groupIndex)) {
      return tools;
    }
    return tools.slice(0, columnsCount);
  }, [expandedGroups, columnsCount]);

  // Memoize tool positions to avoid recalculations
  const toolPositions = useMemo(() => {
    return toolGroups.map(group =>
      group.tools.map((_, toolIndex) => {
        const toolAngle = (360 / group.tools.length) * toolIndex;
        const radians = (toolAngle * Math.PI) / 180;
        return {
          x: Math.cos(radians) * TOOL_ORBIT_RADIUS + TOOL_ORBIT_RADIUS,
          y: Math.sin(radians) * TOOL_ORBIT_RADIUS + TOOL_ORBIT_RADIUS
        };
      })
    );
  }, []);

  return (
    <section
      id="toolbox"
      ref={sectionRef}
      className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-black via-[#0A0818] to-black"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Mobile Layout for narrow screens */}
        {isNarrowScreen ? (
          <div className="space-y-8">
            {/* Section Title */}
            <div className="text-center mb-12">
              <SectionTitle
                title="Toolbox"
                subtitle="Technologies I mastered"
                isInView={isInView}
              />
            </div>

            {/* Grouped Tool Cards */}
            <div className="grid gap-6">
              {toolGroups.map((group, index) => {
                const hasMore = group.tools.length > columnsCount;
                const isExpanded = expandedGroups.has(index);
                const visibleTools = getVisibleTools(group.tools, index);

                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
                      {/* Group Header with Toggle */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-lg font-bold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                          {group.category} <span className="text-sm font-normal text-gray-500">({group.tools.length})</span>
                        </h3>
                        {hasMore && (
                          <button
                            onClick={() => toggleGroupExpansion(index)}
                            className="text-white/50 hover:text-white/80 transition-colors duration-300 p-1"
                            aria-label={isExpanded ? 'Show less' : 'Show more'}
                          >
                            <svg
                              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Tools Grid */}
                      <div className={`grid ${columnsClass} gap-3 overflow-hidden`}>
                        {visibleTools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className="flex flex-col items-center gap-1 group"
                          >
                            <div className="bg-black/50 rounded-lg border border-white/20 p-2 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                              <img
                                src={`/icons/${tool.iconName}.${tool.iconExt || 'svg'}`}
                                alt={tool.name}
                                className={`w-8 h-8 object-contain ${tool.needsWhite ? 'brightness-0 invert' : ''}`}
                                loading="lazy"
                              />
                            </div>
                            <span className="text-[10px] text-gray-400 text-center leading-tight">
                              {tool.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Desktop Planetary Layout */
          <div
            className="relative mx-auto"
            style={{
              height: '700px',
              width: '100%',
              maxWidth: '900px'
            }}
          >
            {/* Section Title in center of orbit */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <SectionTitle
                title="Toolbox"
                subtitle="Technologies in my orbit"
                isInView={isInView}
              />
            </div>

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
                    className={`absolute ${isInView ? 'planet-orbit-css' : ''}`}
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
                        position: 'relative',
                        zIndex: isInView ? calculatePlanetZIndex(index) : 500
                      }}
                    >
                      {/* Container for both planet and moons */}
                      <div
                        className={`tool-orbit-container ${isInView ? 'tool-spin' : ''}`}
                        style={{
                          width: `${TOOL_ORBIT_RADIUS * 2}px`,
                          height: `${TOOL_ORBIT_RADIUS * 2}px`,
                          position: 'absolute',
                          left: `-${TOOL_ORBIT_RADIUS}px`,
                          top: `-${TOOL_ORBIT_RADIUS}px`
                        }}
                      >
                        {/* Render moons/tools */}
                        {group.tools.map((tool, toolIndex) => {
                          const position = toolPositions[index][toolIndex];
                          const dynamicZIndex = isInView ? calculateToolZIndex(index, toolIndex, group) : 5;

                          return (
                            <div
                              key={toolIndex}
                              className="absolute"
                              style={{
                                left: `${position.x}px`,
                                top: `${position.y}px`,
                                transform: 'translate(-50%, -50%)',
                                zIndex: dynamicZIndex
                              }}
                            >
                              <div className={`tool-counter-spin ${isInView ? 'tool-counter-spin-active' : ''}`}>
                                <div
                                  className="flex flex-col items-center gap-1"
                                  style={{
                                    transform: `scaleY(${PLANET_ORBIT_RADIUS / PLANET_ORBIT_RADIUS_Y})`
                                  }}
                                >
                                  <div
                                    className="bg-gray-900 rounded-lg border border-white/30 hover:bg-gray-800 transition-colors flex items-center justify-center p-1 will-change-transform"
                                    style={{
                                      width: '32px',
                                      height: '32px'
                                    }}
                                  >
                                    <img
                                      src={`/icons/${tool.iconName}.${tool.iconExt || 'svg'}`}
                                      alt={tool.name}
                                      className={`w-full h-full object-contain ${tool.needsWhite ? 'brightness-0 invert' : ''}`}
                                      loading="lazy"
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

                        {/* Render planet in center with fixed z-index */}
                        <div
                          className="absolute"
                          style={{
                            left: `${TOOL_ORBIT_RADIUS}px`,
                            top: `${TOOL_ORBIT_RADIUS}px`,
                            zIndex: 10
                          }}
                        >
                          <div
                            className={`planet-counter-spin ${isInView ? 'planet-counter-spin-active' : ''}`}
                            style={{
                              width: `${PLANET_SIZE}px`,
                              height: `${PLANET_SIZE}px`,
                              marginLeft: `-${PLANET_SIZE / 2}px`,
                              marginTop: `-${PLANET_SIZE / 2}px`
                            }}
                          >
                            <div
                              style={{
                                transform: `scaleY(${PLANET_ORBIT_RADIUS / PLANET_ORBIT_RADIUS_Y})`
                              }}
                            >
                              <div
                                className={`rounded-full bg-gradient-to-br ${group.color} shadow-2xl flex items-center justify-center will-change-transform`}
                                style={{
                                  width: `${PLANET_SIZE}px`,
                                  height: `${PLANET_SIZE}px`,
                                  boxShadow: `0 0 40px rgba(0,0,0,0.8), inset -20px -20px 40px rgba(0,0,0,0.5)`
                                }}
                              >
                                <span className="text-white/90 font-bold text-sm z-20 relative">
                                  {group.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        )}
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
          0% { transform: scale(1.0); opacity: 0.92; }
          12.5% { transform: scale(1.1); opacity: 0.96; }
          25% { transform: scale(1.2); opacity: 1; }
          37.5% { transform: scale(1.1); opacity: 0.96; }
          50% { transform: scale(1.0); opacity: 0.92; }
          62.5% { transform: scale(0.9); opacity: 0.88; }
          75% { transform: scale(0.8); opacity: 0.85; }
          87.5% { transform: scale(0.9); opacity: 0.88; }
          100% { transform: scale(1.0); opacity: 0.92; }
        }

        @keyframes spin-medium {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(360deg); }
        }

        @keyframes counter-spin-medium {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(-360deg); }
        }

        .planet-orbit-css {
          animation: planetOrbit 90s linear infinite;
          transform-origin: 0 0;
          will-change: transform;
        }

        .planet-scale {
          animation: depthScale 90s linear infinite;
          will-change: transform;
        }

        .tool-spin {
          animation: spin-medium 30s linear infinite;
          will-change: transform;
        }

        .tool-counter-spin-active {
          animation: counter-spin-medium 30s linear infinite;
          will-change: transform;
        }

        .planet-counter-spin-active {
          animation: counter-spin-medium 30s linear infinite;
          will-change: transform;
        }

        /* Force hardware acceleration */
        .toolbox-orbit-container,
        .planet-container,
        .tool-orbit-container {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}