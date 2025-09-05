'use client';

import { useState } from 'react';

interface ConveyorStageProps {
  title: string;
  description: string;
  examples?: string[];
  index: number;
  isInView: boolean;
  accentColor: string;
}

export default function ConveyorStage({ 
  title, 
  description, 
  examples, 
  index, 
  isInView,
  accentColor 
}: ConveyorStageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getColorRGB = (color: string) => {
    switch(color) {
      case 'cyan-400': return '34, 211, 238';
      case 'violet-600': return '124, 58, 237';
      case 'pink-600': return '219, 39, 119';
      case 'yellow-400': return '251, 191, 36';
      case 'green-400': return '74, 222, 128';
      case 'blue-500': return '59, 130, 246';
      default: return '255, 255, 255';
    }
  };

  const colorRGB = getColorRGB(accentColor);

  return (
    <div
      className={`
        relative group cursor-pointer
        transform transition-all duration-700 ease-out
        ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
        ${isHovered ? 'scale-105 z-20' : 'scale-100 z-10'}
      `}
      style={{
        transitionDelay: isInView ? `${index * 150}ms` : '0ms',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          relative overflow-hidden
          backdrop-blur-xl
          border-2
          p-6 lg:p-8
          min-h-[200px]
          transition-all duration-500
          rounded-lg
        `}
        style={{
          background: `linear-gradient(135deg, 
            rgba(0, 0, 0, 0.9) 0%, 
            rgba(${colorRGB}, 0.03) 50%, 
            rgba(0, 0, 0, 0.85) 100%)`,
          borderColor: isHovered 
            ? `rgb(${colorRGB})`
            : `rgba(${colorRGB}, 0.2)`,
          boxShadow: isHovered 
            ? `0 0 30px rgba(${colorRGB}, 0.3)`
            : `0 0 15px rgba(${colorRGB}, 0.05)`
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isHovered ? 0.2 : 0.05,
            background: `radial-gradient(circle at 50% 50%, rgba(${colorRGB}, 0.4) 0%, transparent 70%)`
          }}
        />

        {/* Arrow indicator */}
        <div 
          className={`
            absolute right-4 top-1/2 -translate-y-1/2
            transition-all duration-500
            ${isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-50'}
          `}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
            className="w-6 h-6"
          >
            <path 
              d="M9 18l6-6-6-6" 
              stroke={`rgb(${colorRGB})`}
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <h3 
            className={`
              text-xl lg:text-2xl font-bold mb-3
              transition-all duration-500
              bg-clip-text text-transparent
            `}
            style={{
              backgroundImage: isHovered 
                ? `linear-gradient(135deg, white 0%, rgb(${colorRGB}) 50%, white 100%)`
                : 'linear-gradient(90deg, white, rgba(255,255,255,0.95))',
            }}
          >
            {title}
          </h3>

          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
            {description}
          </p>

          {examples && examples.length > 0 && (
            <div 
              className={`
                transition-all duration-500 ease-out
                ${isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
                overflow-hidden
              `}
            >
              <div className="pt-2 border-t border-white/10">
                <span 
                  className="text-xs uppercase tracking-wider font-semibold mb-2 block"
                  style={{ color: `rgb(${colorRGB})` }}
                >
                  Examples:
                </span>
                <div className="flex flex-wrap gap-2">
                  {examples.map((example, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pulse indicator */}
        <div
          className={`
            absolute bottom-3 left-3
            w-2 h-2 rounded-full
            animate-pulse transition-all duration-500
          `}
          style={{
            backgroundColor: `rgb(${colorRGB})`,
            boxShadow: isHovered 
              ? `0 0 10px rgba(${colorRGB}, 0.8)`
              : 'none'
          }}
        />
      </div>
    </div>
  );
}