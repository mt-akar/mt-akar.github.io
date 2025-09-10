'use client';

import { useState, useEffect } from 'react';

interface PipelineStageProps {
  title: string;
  description: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export default function PipelineStage({ 
  title, 
  description, 
  index,
  isActive,
  onClick
}: PipelineStageProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isActive]);

  return (
    <div 
      className={`
        relative flex-shrink-0 cursor-pointer
        ${isActive ? 'w-80 lg:w-96' : 'w-48 lg:w-56'}
      `}
      style={{
        transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'width',
        transform: 'translateZ(0)'
      }}
      onClick={onClick}
    >
      {/* Connection line to next stage */}
      <div 
        className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent"
        style={{ transform: 'translateY(-50%)' }}
      />
      
      {/* Stage card */}
      <div 
        className={`
          relative h-64 lg:h-72
          bg-black/40 backdrop-blur-sm
          border border-white/10
          rounded-xl overflow-hidden
          ${isActive ? 'border-white/30' : 'hover:border-white/20'}
        `}
        style={{
          transform: isActive ? 'scale3d(1.05, 1.05, 1) translateZ(0)' : 'scale3d(1, 1, 1) translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s',
          willChange: 'transform',
          contain: 'layout style paint'
        }}
      >
        {/* Stage number */}
        <div 
          className={`
            absolute top-4 left-4 
            w-8 h-8 rounded-full
            flex items-center justify-center
            text-xs font-bold
            transition-all duration-500
            ${isActive ? 'bg-white text-black' : 'bg-white/10 text-white/50'}
          `}
        >
          {index + 1}
        </div>

        {/* Content */}
        <div className="p-6 pt-16 h-full flex flex-col">
          <h3 
            className={`
              font-bold mb-3
              transition-all duration-500
              ${isActive ? 'text-xl lg:text-2xl text-white' : 'text-lg text-white/70'}
            `}
          >
            {title.split(' ').map((word, i) => (
              <span key={i}>
                {word}
                {i === 0 && <br />}
                {i === 1 && ' '}
              </span>
            ))}
          </h3>

          {isActive && showContent && (
            <p 
              className="text-gray-400 text-sm lg:text-base leading-relaxed mb-4 flex-grow"
              style={{
                animation: 'fadeIn 0.3s ease-out',
                willChange: 'opacity'
              }}
            >
              {description}
            </p>
          )}

          {!isActive && (
            <div className="mt-auto">
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full"
                  style={{ width: `${((index + 1) / 6) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Active indicator */}
        {isActive && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 via-transparent to-transparent"
              style={{
                animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                willChange: 'opacity'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}