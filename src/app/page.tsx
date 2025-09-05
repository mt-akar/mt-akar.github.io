'use client';

import { useEffect, useState, useRef } from 'react';
import AnimatedCounter from '@/components/AnimatedCounter';
import IdentityChip from '@/components/IdentityChip';
import TrifectaSection from '@/components/TrifectaSection';
import SignatureBets from '@/components/SignatureBets';
import AIEngineSection from '@/components/AIEngineSection';
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const identityTags = ['Builder', 'Systems Thinker', 'Maintainer', 'Mentor', 'Entrepreneur'];

  return (
    <div className="min-h-screen bg-[#0F1218] dark:bg-black text-white overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 pt-20 overflow-hidden"
      >
        {/* Background Gradient Layer - Fixed position */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-cyan-400/10 to-pink-600/20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-yellow-400/10" />
        </div>

        {/* Floating Glyphs Layer - Subtle parallax */}
        <div 
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto w-full">
          {/* Left: Portrait Area */}
          <div 
            className="relative flex justify-center lg:justify-end"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <div className="relative">
              {/* Orbit-shaped mask container with liquid glass effect */}
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-[40%_60%_50%_50%/60%_30%_70%_40%] 
                            bg-gradient-to-br from-cyan-400/20 via-violet-600/20 to-pink-600/20 
                            backdrop-blur-xl border border-white/10 shadow-2xl
                            animate-[float_6s_ease-in-out_infinite]
                            overflow-hidden relative">
                {/* Portrait image - responsive and fills container */}
                <Image 
                  src="/pictures/m-akar-portrait.png"
                  alt="Mustafa Akar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, 384px"
                  priority
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-violet-600/30 rounded-full blur-xl animate-pulse delay-700" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-600 bg-clip-text text-transparent animate-[glow_3s_ease-in-out_infinite]">
                  I design dependable systems that scale human impact.
                </span>
              </h1>
              
              {/* Subline */}
              <p className="text-lg sm:text-xl text-gray-400 font-light">
                AI | Blockchain | CloudOps | SW Architecture | UX
              </p>
            </div>

            {/* Identity Chips */}
            <div className="flex flex-wrap gap-2">
              {identityTags.map((tag, index) => (
                <IdentityChip key={tag} label={tag} />
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              {/* Primary CTAs - First Row */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="group relative px-8 py-3 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                >
                  <span className="relative z-10">Work with me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                
                <Link 
                  href="/work"
                  className="px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  See my work
                </Link>
              </div>
              
              {/* Secondary CTAs - Second Row */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/public/docs/mustafa-akar-cv.pdf"
                  className="px-2 py-1 text-gray-400 hover:text-white transition-colors duration-300 underline underline-offset-4"
                >
                  Download CV
                </Link>
                
                <Link 
                  href="/speaking"
                  className="px-2 py-1 text-gray-400 hover:text-white transition-colors duration-300 underline underline-offset-4"
                >
                  Speaking/press
                </Link>
              </div>
            </div>

            {/* Telemetry Counters */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mb-8">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400">
                  <AnimatedCounter end={4} duration={5000} delay={0} />
                </div>
                <p className="text-sm text-gray-500">Years shipping</p>
              </div>
              
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-violet-400">
                  <AnimatedCounter end={30} duration={5000} delay={300} suffix="+" />
                </div>
                <p className="text-sm text-gray-500">Projects spearheaded</p>
              </div>
              
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-pink-400">
                  <AnimatedCounter end={600} duration={5000} delay={600} suffix="k+" />
                </div>
                <p className="text-sm text-gray-500">People reached</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trifecta Section */}
      <TrifectaSection />

      {/* Signature Bets Section */}
      <SignatureBets />

      {/* AI-First Engine Section */}
      <AIEngineSection />

      {/* Additional sections can be added here */}
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-500">More content coming soon...</h2>
      </section>
    </div>
  );
}