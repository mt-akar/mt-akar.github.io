'use client';

import { useEffect, useRef, useState } from 'react';
import BetCard from './BetCard';
import SectionTitle from './SectionTitle';

const bets = [
  {
    title: "AI won't replace engineers.",
    description: "Saying 'AI will replace engineers' is like saying a dishwasher will replace Thanksgiving. It may do the cleanup for you but it will not make grandma happy, you will.",
    myApproach: "I orchestrate an AI agent team to supercharge my productivity.",
    callToAction: "Orchestrate your agents and own the revolution."
  },
  {
    title: "You're underusing AI.",
    description: "Everyone is leaving massive untapped potential on the table, with varying severity. I am shocked to see this giant wrecking ball used to open nuts, it is nuts. I am committed to teach everyone to harness AI's full potential.",
    myApproach: "I maintain the 90-10% exploit/explore balance to ensure I keep updated with the AI revolution.",
    callToAction: "Build AI into the daily loop, not just the sprint planning."
  },
  {
    title: "Programmable money is the future.",
    description: "The open programmable money will replace the old rails sooner than you think. Trust is becoming designed, open, and proven, not assumed. Money is becoming owned by users of the internet, not deposited.",
    myApproach: "I embrace the programmable money in my work and personal life.",
    callToAction: "Educate yourself to protect from people praying on blockchain-uneducated."
  },
  {
    title: "AI Agents will use crypto more than humans.",
    description: "As the next generation of money is evolving, the next generation money users have arrived: AI Agents. Get used to AI agents managing budgets, auto approving spending aligned with larger goals, and making micro transactions between each other with a volume 100x of humans.",
    myApproach: "I AI-agent-proof all my software projects.",
    callToAction: "Learn about AI and blockchain before it's too late."
  }
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
              implication={bet.myApproach}
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