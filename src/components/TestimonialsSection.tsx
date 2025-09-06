'use client';

import { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "When things got complex, Mustafa made reliability feel boring—and that's a superpower.",
    author: "John Infra",
    role: "Head of Infra",
    company: "Tech Company"
  },
  {
    quote: "He turns ambiguous problems into diagrams you can ship.",
    author: "Jane Lead",
    role: "Product Lead",
    company: "SaaS Startup"
  },
  {
    quote: "Speed with safety. We moved faster and slept better.",
    author: "Ruth Founder",
    role: "Founder",
    company: "Growth Stage Startup"
  },
  {
    quote: "The only person I've seen who can talk crypto economics with finance guys and memory layouts with engineers—in the same meeting.",
    author: "Craig Officer",
    role: "CTO",
    company: "Web3 Platform"
  }
];

export default function TestimonialsSection() {
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    if (isInView) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isInView]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 8000);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-[#050510] to-black"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
        <SectionTitle 
          title="Testimonials"
          subtitle="What others say"
          isInView={isInView}
        />

        {/* Testimonials Container */}
        <div className="relative mt-16 min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === activeIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-8">
                {/* Quote */}
                <div className="relative">
                  {/* Quote marks */}
                  <div className="absolute -top-8 -left-4 text-6xl text-violet-600/20 font-serif">
                    "
                  </div>
                  <div className="absolute -bottom-8 -right-4 text-6xl text-violet-600/20 font-serif">
                    "
                  </div>
                  
                  <p className="text-xl lg:text-2xl text-white/90 font-light italic leading-relaxed max-w-3xl">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-600/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>
                  
                  {/* Author info */}
                  <div className="text-left">
                    <p className="text-white font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex 
                  ? 'w-16 h-4 bg-gradient-to-r from-cyan-400 to-violet-600' 
                  : 'w-4 h-4 bg-white/20 hover:bg-white/40 hover:scale-125'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}