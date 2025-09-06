'use client';

import { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

const principles = [
  {
    category: 'Communication',
    items: [
      {
        title: 'Async communication',
        description: 'Message me ANYtime (late night, holidays, etc.), it enters my priority queue, and I will always get to it outside my focus blocks. Better than losing your thought or waiting for a meeting.',
        icon: '/icons/async.svg'
      },
      {
        title: 'Open door',
        description: 'Everyone is welcome to reach out—clarity beats ceremony.',
        icon: '/icons/open-door.svg'
      },
      {
        title: 'Be prepared',
        description: 'Let everyone review your agenda before a meeting.',
        icon: '/icons/prepared.svg'
      },
      {
        title: 'Feedback-driven',
        description: 'I actively seek constructive criticism and welcome candid perspectives.',
        icon: '/icons/feedback.svg'
      },
    ]
  },
  {
    category: 'Processes',
    items: [
      {
        title: 'Fail fast, learn faster',
        description: 'Early validation saves months. I prototype assumptions before committing resources.',
        icon: '/icons/iterate.svg'
      },
      {
        title: 'Extensible foundations',
        description: 'Plan extendibility without introducing complexity that isn\'t strictly necessary. Keep the architecture lean.',
        icon: '/icons/extensible.svg'
      },
      {
        title: 'Systems over heroics',
        description: 'I design for rollback, audit, and graceful failure.',
        icon: '/icons/systems.svg'
      },
      {
        title: 'Hyper-focus blocks',
        description: 'I power zero-distraction work sessions. Complex problems need uninterrupted attention. Async communication is always online.',
        icon: '/icons/focus.svg'
      },
    ]
  }
];

export default function MAOSSection() {
  const [isInView, setIsInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
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

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-[#050A15] to-black"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <SectionTitle 
          title="MAOS"
          subtitle="My open-source operating system"
          isInView={isInView}
        />

        {/* Two-column grid */}
        <div 
          className={`
            grid lg:grid-cols-2 gap-12 lg:gap-16 mt-16
            ${isInView ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 2.5rem, 0)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
            willChange: 'transform, opacity'
          }}
        >
          {principles.map((column, colIndex) => (
            <div key={colIndex} className="space-y-8">
              {/* Category header */}
              <h3 
                className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(-1rem, 0, 0)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + colIndex * 0.1}s`
                }}
              >
                {column.category}
              </h3>

              {/* Principles in this category */}
              <div className="space-y-6">
                {column.items.map((item, itemIndex) => {
                  const uniqueId = `${colIndex}-${itemIndex}`;
                  const isHovered = hoveredIndex === uniqueId;
                  
                  return (
                    <div
                      key={itemIndex}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(uniqueId)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 1rem, 0)',
                        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.7 + colIndex * 0.1 + itemIndex * 0.1}s`
                      }}
                    >
                      {/* Card background */}
                      <div 
                        className="absolute inset-0 bg-white/5 rounded-xl transition-all duration-300"
                        style={{
                          transform: isHovered ? 'scale(1.02) translateZ(0)' : 'scale(1) translateZ(0)',
                          background: isHovered 
                            ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)' 
                            : 'rgba(255, 255, 255, 0.05)',
                          boxShadow: isHovered 
                            ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
                            : '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                      />

                      {/* Content */}
                      <div className="relative p-6 flex gap-4">
                        {/* Icon placeholder */}
                        <div 
                          className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-600/20 flex items-center justify-center"
                          style={{
                            transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          <div className="w-6 h-6 bg-white/20 rounded" />
                        </div>

                        {/* Text content */}
                        <div className="flex-grow">
                          <h4 className="text-white font-semibold mb-2 text-lg">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Hover accent */}
                        <div 
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-violet-600 rounded-l-xl transition-opacity duration-300"
                          style={{
                            opacity: isHovered ? 1 : 0
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}