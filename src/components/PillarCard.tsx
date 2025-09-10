'use client';

import { useState } from 'react';

interface PillarCardProps {
  title: string;
  description?: string;
  skills: string[];
  microCase: {
    title: string;
    description: string;
  };
  position: 'top' | 'bottom-left' | 'bottom-right';
  isActive: boolean;
  onHover: (active: boolean) => void;
  accentColor: string;
}

export default function PillarCard({
  title,
  description,
  skills,
  microCase,
  position,
  isActive,
  onHover,
  accentColor
}: PillarCardProps) {
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
    <div
      className={`
        relative w-full sm:w-96 lg:w-[400px]
        ${position === 'top' ? '' : 'lg:w-[380px]'}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          relative p-6 rounded-2xl
          bg-gradient-to-br from-white/5 to-white/[0.02]
          backdrop-blur-xl border transition-all duration-500
          ${isActive 
            ? `border-white/30 shadow-2xl` 
            : 'border-white/10 hover:border-white/20'
          }
          transform hover:scale-[1.02]
        `}
        style={{
          boxShadow: isActive 
            ? `0 0 40px ${accentColor === 'cyan-400' ? '#22d3ee' : accentColor === 'violet-600' ? '#9333ea' : '#ec4899'}33, 
               0 20px 60px -10px rgba(0,0,0,0.5)` 
            : undefined
        }}
      >
        {/* Title */}
        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent' 
            : 'text-gray-300'
        }`}>
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* Skills as chips */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {/* Always visible chips */}
            {skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className={`
                  inline-block px-2 py-1 text-xs rounded-full
                  bg-white/5 border transition-all duration-300
                  ${isHovered 
                    ? 'border-white/20 text-gray-200' 
                    : 'border-white/10 text-gray-400'
                  }
                `}
              >
                {skill}
              </span>
            ))}
            
            {/* "+X more" chip when not hovered */}
            {!isHovered && skills.length > 4 && (
              <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-500">
                +{skills.length - 4} more
              </span>
            )}
            
            {/* Additional chips when hovered */}
            {isHovered && skills.slice(4).map((skill, index) => (
              <span
                key={index + 4}
                className={`
                  inline-block px-2 py-1 text-xs rounded-full
                  bg-white/5 border border-white/20 text-gray-200
                  transition-all duration-300
                  animate-[fadeInUp_0.3s_ease-out_forwards]
                `}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Micro Case - shows on hover */}
        <div className={`
          overflow-hidden transition-all duration-500
          ${isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="pt-4 border-t border-white/10">
            <h4 className={`text-sm font-semibold mb-2 ${
              accentColor === 'cyan-400' ? 'text-cyan-400' :
              accentColor === 'violet-600' ? 'text-violet-400' :
              'text-pink-400'
            }`}>
              Case: {microCase.title}
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              {microCase.description}
            </p>
          </div>
        </div>

        {/* Visual indicator for expandable content */}
        {!isHovered && (
          <div className="absolute bottom-2 right-2">
            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
              <span className="text-[10px] text-gray-500">...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}