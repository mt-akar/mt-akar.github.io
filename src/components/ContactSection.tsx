'use client';

import { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

export default function ContactSection() {
  const [isInView, setIsInView] = useState(false);
  const [selectedPath, setSelectedPath] = useState<'build' | 'speak' | null>(null);
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
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-[#0A0515] to-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20">
        <SectionTitle 
          title="Let's Connect"
          subtitle="Turn ideas into reality"
          isInView={isInView}
        />

        {/* Main CTA Cards */}
        <div 
          className={`grid md:grid-cols-2 gap-6 mt-16 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 2rem, 0)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
          }}
        >
          {/* Build Together Card */}
          <div 
            className={`relative group cursor-pointer ${
              selectedPath === 'build' ? 'ring-2 ring-cyan-400' : ''
            }`}
            onClick={() => setSelectedPath('build')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-2xl transition-all duration-300 group-hover:from-cyan-400/20 group-hover:to-blue-600/20" />
            
            <div className="relative p-8 space-y-4">
              {/* Icon placeholder */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center">
                <div className="w-8 h-8 bg-cyan-400/30 rounded" />
              </div>
              
              <h3 className="text-2xl font-bold text-white">
                Build Together
              </h3>
              
              <p className="text-gray-400">
                Advisory, consulting, or hands-on development. Let's architect something remarkable.
              </p>

              <div className="pt-4">
                <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                  Get Started
                  <span className="text-xl">→</span>
                </span>
              </div>
            </div>
          </div>

          {/* Invite to Speak Card */}
          <div 
            className={`relative group cursor-pointer ${
              selectedPath === 'speak' ? 'ring-2 ring-violet-600' : ''
            }`}
            onClick={() => setSelectedPath('speak')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-2xl transition-all duration-300 group-hover:from-violet-600/20 group-hover:to-purple-600/20" />
            
            <div className="relative p-8 space-y-4">
              {/* Icon placeholder */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="w-8 h-8 bg-violet-600/30 rounded" />
              </div>
              
              <h3 className="text-2xl font-bold text-white">
                Invite to Speak
              </h3>
              
              <p className="text-gray-400">
                Conferences, podcasts, or team sessions. I share insights on tech, leadership, and building.
              </p>

              <div className="pt-4">
                <span className="inline-flex items-center gap-2 text-violet-400 font-semibold group-hover:gap-3 transition-all">
                  Book Speaking
                  <span className="text-xl">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form / Details (appears when a path is selected) */}
        {selectedPath && (
          <div 
            className="mt-12 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
            style={{
              opacity: selectedPath ? 1 : 0,
              transform: selectedPath ? 'translate3d(0, 0, 0)' : 'translate3d(0, 1rem, 0)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">
              {selectedPath === 'build' ? 'Let\'s Build Something Together' : 'Speaking Engagement Request'}
            </h4>

            {/* Simple Contact Form */}
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {selectedPath === 'build' ? 'Project Details' : 'Event Details'}
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder={
                    selectedPath === 'build' 
                      ? "Tell me about your project, timeline, and how I can help..."
                      : "Event name, date, audience, topic preferences..."
                  }
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-gray-500">
                  Encrypted and secure
                </p>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full font-semibold text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Alternative Contact Methods */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Or reach out directly:</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:m@akar.im"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-white">Email</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/m-akar/"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white">LinkedIn</span>
                </a>
                <a 
                  href="https://discord.com/users/232187411386335232"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white">Discord</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}