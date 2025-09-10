'use client';

import { useEffect, useRef, useState } from 'react';
import BetCard from './BetCard';
import SectionTitle from './SectionTitle';

const bets = [
  {
    title: "AI won't replace engineers",
    description: "Saying 'AI will replace engineers' is like saying a dishwasher will replace Thanksgiving. It may do the cleanup for you but it will not make grandma happy, you will.",
    callToAction: "Orchestrate your agents and own the revolution."
  },
  {
    title: "VC is a beauty contest",
    description: "Venture capital turned builders into pitch deck artists. It's like watching Michelangelo spend his days color-matching PowerPoint themes instead of painting the Sistine Chapel. The real impact is built by engineers too busy shipping.",
    callToAction: "Build something people want, not what VCs want to hear."
  },
  {
    title: "Agile is corporate theater",
    description: "Agile became the very bureaucracy it was meant to destroy. Sprint planning is a séance where we summon the ghost of productivity. The best teams ship daily and treat production as their retrospective.",
    callToAction: "Stop planning sprints, start shipping products."
  },
  {
    title: "You're underusing AI",
    description: "You are leaving massive untapped potential on the table, with varying severity. I am shocked to see this giant wrecking ball used to open nuts, it is nuts.",
    callToAction: "Build AI into the daily loop, not just the sprint planning."
  },
];

export default function SignatureBets() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-8 lg:py-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(219, 39, 119, 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle 
          title="Signature Bets"
          subtitle="Bold, falsifiable theses that steer decisions"
          isInView={isInView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {bets.map((bet, index) => (
            <BetCard
              key={index}
              title={bet.title}
              description={bet.description}
              action={bet.callToAction}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <div 
          className={`
            mt-16 lg:mt-24 text-center
            transform transition-all duration-1000 delay-1000
            ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          <p className="text-lg text-gray-500 italic">
            "I put my money where my mouth is"
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-violet-600 animate-pulse delay-100" />
            <div className="w-2 h-2 rounded-full bg-pink-600 animate-pulse delay-200" />
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
}