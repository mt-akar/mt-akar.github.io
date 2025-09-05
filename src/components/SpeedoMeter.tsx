'use client';

import { useEffect, useState, useMemo } from 'react';

interface SpeedoMeterProps {
  label: string;
  color: string;
  isInView: boolean;
  delay: number;
}

export default function SpeedoMeter({ label, color, isInView, delay }: SpeedoMeterProps) {
  const [isActive, setIsActive] = useState(false);
  const [needleVibrate, setNeedleVibrate] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    
    const timeout = setTimeout(() => {
      setIsActive(true);
      setTimeout(() => {
        setNeedleVibrate(true);
      }, 500);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [isInView, delay]);

  const colorRGB = useMemo(() => {
    switch(color) {
      case 'cyan-400': return '34, 211, 238';
      case 'violet-600': return '124, 58, 237';
      case 'green-400': return '74, 222, 128';
      case 'yellow-400': return '251, 191, 36';
      default: return '255, 255, 255';
    }
  }, [color]);

  return (
    <div className="relative group flex flex-col items-center" style={{ contain: 'layout style paint' }}>
      <div className="relative w-32 h-24" style={{ willChange: 'transform' }}>
        <svg
          className="w-full h-full -mt-4"
          viewBox="0 0 120 70"
          fill="none"
        >
          {/* Gauge background arc segments */}
          <path
            d="M 20,60 A 40,40 0 0,1 100,60"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Gauge segments */}
          <path
            d="M 20,60 A 40,40 0 0,1 35,35"
            stroke={`rgba(${colorRGB}, 0.2)`}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 35,35 A 40,40 0 0,1 60,25"
            stroke={`rgba(${colorRGB}, 0.3)`}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 60,25 A 40,40 0 0,1 85,35"
            stroke={`rgba(${colorRGB}, 0.5)`}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 85,35 A 40,40 0 0,1 100,60"
            stroke={`rgba(${colorRGB}, ${isActive ? '1' : '0.7'})`}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-1000"
            style={{
              opacity: isActive ? 1 : 0.7
            }}
          />
          
          {/* Tick marks */}
          {[0, 45, 90, 135, 180].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 60 - 35 * Math.cos(rad);
            const y1 = 60 - 35 * Math.sin(rad);
            const x2 = 60 - 30 * Math.cos(rad);
            const y2 = 60 - 30 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
              />
            );
          })}
          
          {/* Needle */}
          <g
            className={`${needleVibrate ? 'animate-needle-vibrate' : ''}`}
            style={{
              transformOrigin: '60px 60px',
              transform: isActive ? 'rotate(170deg)' : 'rotate(10deg)',
              transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform'
            }}
          >
            <line
              x1="60"
              y1="60"
              x2="30"
              y2="60"
              stroke={`rgb(${colorRGB})`}
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                opacity: 1
              }}
            />
            <circle
              cx="60"
              cy="60"
              r="4"
              fill={`rgb(${colorRGB})`}
              style={{
                opacity: 1
              }}
            />
          </g>
          
          {/* Center dot */}
          <circle
            cx="60"
            cy="60"
            r="2"
            fill="white"
            opacity="0.8"
          />
        </svg>
        
        {/* Label */}
        <div className="absolute inset-x-0 bottom-1 text-center">
          <span className="text-sm font-mono text-gray-400 tracking-wider leading-none">
            {label}
          </span>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(${colorRGB}, 0.4) 0%, transparent 70%)`,
          width: '100%',
          height: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      <style jsx>{`
        @keyframes needle-vibrate {
          0%, 100% { transform: rotate(170deg) translateZ(0); }
          25% { transform: rotate(171deg) translateZ(0); }
          50% { transform: rotate(169deg) translateZ(0); }
          75% { transform: rotate(170deg) translateZ(0); }
        }
        
        .animate-needle-vibrate {
          animation: needle-vibrate 0.4s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}