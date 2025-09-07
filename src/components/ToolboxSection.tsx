'use client';

import { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

interface Tool {
  name: string;
  iconName: string;
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
      { name: 'TypeScript', iconName: 'typescript' },
      { name: 'JavaScript', iconName: 'javascript' },
      { name: 'Python', iconName: 'python' },
      { name: 'Go', iconName: 'go' },
      { name: 'Dart', iconName: 'dart' },
      { name: 'Bash', iconName: 'bash' },
      { name: 'Java', iconName: 'java' },
      { name: 'Kotlin', iconName: 'kotlin' },
      { name: 'Rust', iconName: 'rust' }
    ],
    color: 'from-cyan-400 to-blue-600'
  },
  {
    category: 'Frameworks',
    tools: [
      { name: 'Node.js', iconName: 'nodejs' },
      { name: 'Express', iconName: 'express' },
      { name: 'React', iconName: 'react' },
      { name: 'Next.js', iconName: 'nextjs' },
      { name: 'Angular', iconName: 'angular' },
      { name: '.NET', iconName: 'dotnet' },
      { name: 'ASP.NET', iconName: 'aspnet' },
      { name: 'Blazor', iconName: 'blazor' },
      { name: 'MAUI', iconName: 'maui' },
      { name: 'Android', iconName: 'android' },
      { name: 'iOS', iconName: 'ios' },
      { name: 'Flutter', iconName: 'flutter' }
    ],
    color: 'from-violet-400 to-purple-600'
  },
  {
    category: 'Web3',
    tools: [
      { name: 'Solidity', iconName: 'solidity' },
      { name: 'EVM', iconName: 'evm' },
      { name: 'Hardhat', iconName: 'hardhat' },
      { name: 'Foundry', iconName: 'foundry' },
      { name: 'ethers.js', iconName: 'ethersjs' },
      { name: 'web3.js', iconName: 'web3js' }
    ],
    color: 'from-green-400 to-emerald-600'
  },
  {
    category: 'Blockchains',
    tools: [
      { name: 'Ethereum', iconName: 'ethereum' },
      { name: 'Binance', iconName: 'binance-chain' },
      { name: 'Polygon', iconName: 'polygon' },
      { name: 'Arbitrum', iconName: 'arbitrum' },
      { name: 'Avalanche', iconName: 'avalanche' },
      { name: 'Base', iconName: 'base' },
      { name: 'Fantom', iconName: 'fantom' },
      { name: 'Optimism', iconName: 'optimism' },
      { name: 'Pocket', iconName: 'pocket-network' }
    ],
    color: 'from-yellow-400 to-orange-600'
  },
  {
    category: 'Cloud',
    tools: [
      { name: 'AWS', iconName: 'aws' },
      { name: 'Azure', iconName: 'azure' },
      { name: 'DigitalOcean', iconName: 'digitalocean' },
      { name: 'OVH', iconName: 'ovh' },
      { name: 'Contabo', iconName: 'contabo' },
      { name: 'GCP', iconName: 'gcp' },
      { name: 'Kinesis', iconName: 'kinesis' },
      { name: 'Vercel', iconName: 'vercel' }
    ],
    color: 'from-pink-400 to-rose-600'
  },
  {
    category: 'DevOps',
    tools: [
      { name: 'Docker', iconName: 'docker' },
      { name: 'Kubernetes', iconName: 'kubernetes' },
      { name: 'GitHub Actions', iconName: 'github-actions' },
      { name: 'Terraform', iconName: 'terraform' },
      { name: 'Linux', iconName: 'linux' },
      { name: 'Nginx', iconName: 'nginx' },
      { name: 'YAML', iconName: 'yaml' },
      { name: 'Jira', iconName: 'jira' },
      { name: 'Azure DevOps', iconName: 'azure-devops' },
      { name: 'Jetbrains Space', iconName: 'jetbrains-space' },
    ],
    color: 'from-red-400 to-pink-600'
  },
  {
    category: 'Data',
    tools: [
      { name: 'PostgreSQL', iconName: 'postgresql' },
      { name: 'MySQL', iconName: 'mysql' },
      { name: 'SQLite', iconName: 'sqlite' },
      { name: 'MSSQL', iconName: 'mssql' },
      { name: 'MongoDB', iconName: 'mongodb' },
      { name: 'DynamoDB', iconName: 'dynamodb' },
      { name: 'Cassandra', iconName: 'cassandra' },
      { name: 'Redis', iconName: 'redis' },
      { name: 'CosmosDB', iconName: 'cosmosdb' }
    ],
    color: 'from-indigo-400 to-blue-600'
  },
  {
    category: 'AI & ML',
    tools: [
      { name: 'OpenAI', iconName: 'openai' },
      { name: 'Anthropic', iconName: 'anthropic' },
      { name: 'Gemini', iconName: 'gemini' },
      { name: 'Claude', iconName: 'claude' },
      { name: 'Qwen', iconName: 'qwen' },
      { name: 'DeepSeek', iconName: 'deepseek' },
      { name: 'Llama', iconName: 'meta' },
      { name: 'Copilot', iconName: 'copilot' },
      { name: 'Ollama', iconName: 'ollama' },
      { name: 'CUDA', iconName: 'cuda' },
    ],
    color: 'from-teal-400 to-cyan-600'
  }
];

export default function ToolboxSection() {
  const [isInView, setIsInView] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);
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

  useEffect(() => {
    if (!isInView) return;
    
    let animationId: number;
    const startTime = Date.now();
    
    const updateAnimationTime = () => {
      const elapsed = (Date.now() - startTime) / 1000; // seconds
      setAnimationTime(elapsed);
      animationId = requestAnimationFrame(updateAnimationTime);
    };
    
    updateAnimationTime();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isInView]);

  const PLANET_SIZE = 120;
  const PLANET_ORBIT_RADIUS = 450;
  const PLANET_ORBIT_RADIUS_Y = 180;
  const TOOL_ORBIT_RADIUS = 100;

  // Function to calculate planet's z-index based on its Y position
  const calculatePlanetZIndex = (groupIndex: number) => {
    const planetBaseAngle = (360 / toolGroups.length) * groupIndex;
    const planetAdjustedAngle = (planetBaseAngle - 270 + 360) % 360;
    const planetOrbitProgress = (animationTime % 90) / 90;
    const currentPlanetAngle = planetAdjustedAngle + (planetOrbitProgress * 360);
    const planetRadians = (currentPlanetAngle * Math.PI) / 180;
    const planetY = Math.sin(planetRadians) * PLANET_ORBIT_RADIUS_Y;
    
    // Normalize planet Y position to z-index range
    const normalizedY = (planetY + PLANET_ORBIT_RADIUS_Y) / (2 * PLANET_ORBIT_RADIUS_Y);
    const baseZIndex = Math.round(1000 + normalizedY * 1000); // Range: 1000-2000 for planets
    
    return baseZIndex;
  };

  // Function to calculate tool's z-index relative to its planet
  const calculateToolZIndex = (groupIndex: number, toolIndex: number, group: ToolGroup) => {
    // Calculate tool's local position relative to its planet (for 30s rotation)
    const toolOrbitProgress = (animationTime % 30) / 30;
    const toolAngle = (360 / group.tools.length) * toolIndex + (toolOrbitProgress * 360);
    const toolRadians = (toolAngle * Math.PI) / 180;
    const localToolY = Math.sin(toolRadians) * TOOL_ORBIT_RADIUS;
    
    // Tools at bottom (positive Y) should be in front of planet (z-index > 10)
    // Tools at top (negative Y) should be behind planet (z-index < 10)
    // Planet is at z-index 10, tools range from 1 to 19
    const normalizedY = (localToolY / TOOL_ORBIT_RADIUS); // -1 to 1
    const toolZIndex = Math.round(10 + normalizedY * 9); // Range: 1-19
    
    return toolZIndex;
  };

  return (
    <section 
      id="toolbox"
      ref={sectionRef}
      className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-black via-[#0A0818] to-black"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div 
          className="relative mx-auto"
          style={{
            height: '700px',
            width: '100%',
            maxWidth: '900px',
            perspective: '1000px',
            perspectiveOrigin: '50% 50%'
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
                        position: 'relative',
                        zIndex: isInView ? calculatePlanetZIndex(index) : 500
                      }}
                    >
                      {/* Container for both planet and moons */}
                      <div 
                        className={`absolute ${isInView ? 'animate-spin-medium' : ''}`}
                        style={{
                          width: `${TOOL_ORBIT_RADIUS * 2}px`,
                          height: `${TOOL_ORBIT_RADIUS * 2}px`,
                          left: `-${TOOL_ORBIT_RADIUS}px`,
                          top: `-${TOOL_ORBIT_RADIUS}px`
                        }}
                      >
                        {/* Render moons/tools */}
                        {group.tools.map((tool, toolIndex) => {
                          const toolAngle = (360 / group.tools.length) * toolIndex;
                          const radians = (toolAngle * Math.PI) / 180;
                          const toolX = Math.cos(radians) * TOOL_ORBIT_RADIUS + TOOL_ORBIT_RADIUS;
                          const toolY = Math.sin(radians) * TOOL_ORBIT_RADIUS + TOOL_ORBIT_RADIUS;
                          
                          // Calculate dynamic z-index
                          const dynamicZIndex = isInView ? calculateToolZIndex(index, toolIndex, group) : 5;
                          
                          return (
                            <div
                              key={toolIndex}
                              className="absolute"
                              style={{
                                left: `${toolX}px`,
                                top: `${toolY}px`,
                                transform: 'translate(-50%, -50%)',
                                zIndex: dynamicZIndex // Apply dynamic z-index
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
                                    className="bg-gray-900 rounded-lg border border-white/30 hover:bg-gray-800 transition-colors flex items-center justify-center p-1"
                                    style={{
                                      width: '32px',
                                      height: '32px'
                                    }}
                                  >
                                    <img 
                                      src={`/icons/${tool.iconName}.svg`}
                                      alt={tool.name}
                                      className="w-full h-full object-contain"
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
                            zIndex: 10 // Fixed z-index for planet
                          }}
                        >
                          <div 
                            className={`${isInView ? 'animate-counter-spin-medium' : ''}`}
                            style={{
                              width: `${PLANET_SIZE}px`,
                              height: `${PLANET_SIZE}px`,
                              marginLeft: `-${PLANET_SIZE / 2}px`,
                              marginTop: `-${PLANET_SIZE / 2}px`
                            }}
                          >
                            <div
                              style={{
                                transform: `scaleY(${PLANET_ORBIT_RADIUS / PLANET_ORBIT_RADIUS_Y})`,
                                transformStyle: 'preserve-3d'
                              }}
                            >
                              <div 
                                className={`rounded-full bg-gradient-to-br ${group.color} shadow-2xl flex items-center justify-center`}
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