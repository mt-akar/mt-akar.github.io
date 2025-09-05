'use client';

import { useState, useEffect, useRef } from 'react';

interface BetCardProps {
  title: string;
  description: string;
  implication?: string;
  action?: string;
  index: number;
  isInView: boolean;
}

export default function BetCard({ title, description, implication, action, index, isInView }: BetCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const colors = ['cyan-400', 'violet-600', 'pink-600', 'yellow-400'];
  const color = colors[index % colors.length];

  return (
    <div
      ref={cardRef}
      className={`
        relative group cursor-pointer
        transform transition-all duration-700 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        ${isHovered ? 'scale-105 z-20' : 'scale-100 z-10'}
      `}
      style={{
        transitionDelay: hasAnimated ? `${index * 200}ms` : '0ms',
        clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative overflow-hidden
          backdrop-blur-xl
          border-2
          p-8 lg:p-10
          min-h-[280px] lg:min-h-[320px]
          transition-all duration-500
        `}
        style={{
          clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
          background: `linear-gradient(135deg, 
            rgba(0, 0, 0, 0.9) 0%, 
            rgba(${color === 'cyan-400' ? '34, 211, 238' : color === 'violet-600' ? '124, 58, 237' : color === 'pink-600' ? '219, 39, 119' : '251, 191, 36'}, 0.03) 50%, 
            rgba(0, 0, 0, 0.85) 100%)`,
          borderColor: isHovered 
            ? color === 'cyan-400' ? 'rgb(34 211 238)' 
            : color === 'violet-600' ? 'rgb(124 58 237)' 
            : color === 'pink-600' ? 'rgb(219 39 119)' 
            : 'rgb(251 191 36)'
            : color === 'cyan-400' ? 'rgba(34, 211, 238, 0.2)' 
            : color === 'violet-600' ? 'rgba(124, 58, 237, 0.2)' 
            : color === 'pink-600' ? 'rgba(219, 39, 119, 0.2)' 
            : 'rgba(251, 191, 36, 0.2)',
          boxShadow: isHovered 
            ? `0 0 30px rgba(${color === 'cyan-400' ? '34, 211, 238' : color === 'violet-600' ? '124, 58, 237' : color === 'pink-600' ? '219, 39, 119' : '251, 191, 36'}, 0.3)`
            : `0 0 15px rgba(${color === 'cyan-400' ? '34, 211, 238' : color === 'violet-600' ? '124, 58, 237' : color === 'pink-600' ? '219, 39, 119' : '251, 191, 36'}, 0.05)`
        }}
      >
        <div
          className={`
            absolute inset-0 transition-opacity duration-700
          `}
          style={{
            opacity: isHovered ? 0.3 : 0.1,
            background: `radial-gradient(circle at 30% 50%, ${
              color === 'cyan-400' ? 'rgba(34, 211, 238, 0.4)' 
              : color === 'violet-600' ? 'rgba(124, 58, 237, 0.4)' 
              : color === 'pink-600' ? 'rgba(219, 39, 119, 0.4)' 
              : 'rgba(251, 191, 36, 0.4)'
            } 0%, transparent 70%)`
          }}
        />

        <div
          className={`
            absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl
            transition-all duration-700
          `}
          style={{
            backgroundColor: color === 'cyan-400' ? 'rgb(34 211 238)' 
              : color === 'violet-600' ? 'rgb(124 58 237)' 
              : color === 'pink-600' ? 'rgb(219 39 119)' 
              : 'rgb(251 191 36)',
            opacity: isHovered ? 0.4 : 0.15
          }}
        />

        <div className="relative z-10 px-2">
          <h3
            className={`
              text-2xl lg:text-3xl font-bold mb-6 pb-1
              transition-all duration-500
              ${isHovered ? 'scale-105 origin-left' : 'scale-100'}
              leading-relaxed
              bg-clip-text text-transparent
            `}
            style={{
              backgroundImage: isHovered 
                ? `linear-gradient(135deg, white 0%, ${
                    color === 'cyan-400' ? 'rgb(34 211 238)' 
                    : color === 'violet-600' ? 'rgb(124 58 237)' 
                    : color === 'pink-600' ? 'rgb(219 39 119)' 
                    : 'rgb(251 191 36)'
                  } 50%, white 100%)`
                : 'linear-gradient(90deg, white, rgba(255,255,255,0.95))',
              textShadow: isHovered ? `0 0 30px rgba(${color === 'cyan-400' ? '34, 211, 238' : color === 'violet-600' ? '124, 58, 237' : color === 'pink-600' ? '219, 39, 119' : '251, 191, 36'}, 0.5)` : 'none'
            }}
          >
            {title}
          </h3>

          <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
            {description}
          </p>

          <div
            className={`
              space-y-4 overflow-hidden
              transition-all duration-500 ease-out
              ${isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            {implication && (
              <div className="flex items-start space-x-3">
                <p className="text-gray-400 text-sm lg:text-base flex-1">
                  {implication}
                </p>
              </div>
            )}

            {action && (
              <div className="flex items-start space-x-3">
                <span className={`text-${color} font-bold text-sm uppercase tracking-wider mt-1`}>
                  Call to Action:
                </span>
                <p className="text-gray-400 text-sm lg:text-base flex-1">
                  {action}
                </p>
              </div>
            )}
          </div>

          <div
            className={`
              absolute bottom-4 right-4
              w-3 h-3 rounded-full
              animate-pulse transition-all duration-500
            `}
            style={{
              backgroundColor: color === 'cyan-400' ? 'rgb(34 211 238)' 
                : color === 'violet-600' ? 'rgb(124 58 237)' 
                : color === 'pink-600' ? 'rgb(219 39 119)' 
                : 'rgb(251 191 36)',
              boxShadow: isHovered 
                ? `0 0 20px rgba(${color === 'cyan-400' ? '34, 211, 238' : color === 'violet-600' ? '124, 58, 237' : color === 'pink-600' ? '219, 39, 119' : '251, 191, 36'}, 0.8)`
                : 'none'
            }}
          />
        </div>

        <div
          className={`
            absolute inset-x-0 bottom-0 h-1
            transition-all duration-500
          `}
          style={{
            background: `linear-gradient(90deg, transparent, ${
              color === 'cyan-400' ? 'rgb(34 211 238)' 
              : color === 'violet-600' ? 'rgb(124 58 237)' 
              : color === 'pink-600' ? 'rgb(219 39 119)' 
              : 'rgb(251 191 36)'
            }, transparent)`,
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered 
              ? `0 0 10px rgba(${color === 'cyan-400' ? '34, 211, 238' : color === 'violet-600' ? '124, 58, 237' : color === 'pink-600' ? '219, 39, 119' : '251, 191, 36'}, 0.6)`
              : 'none'
          }}
        />
      </div>
    </div>
  );
}