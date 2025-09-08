'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArchitectureSketchpad from '@/components/ArchitectureSketchpad';
import CommandTerminal from '@/components/CommandTerminal';
import ContinueExploring from '@/components/ContinueExploring';

export default function CoolIdeasPage() {
  const [activeSection, setActiveSection] = useState('architecture');
  const [showTerminal, setShowTerminal] = useState(false);

  const continueExploringPresets = {
    coolIdeas: {
      links: [
        { text: 'Home', href: '/' },
        { text: 'Work Experience', href: '/experience' },
        { text: 'Contact', href: '/contact' },
        { text: 'Speaking & Press', href: '/speaking' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1218] dark:bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-600 bg-clip-text text-transparent">
              Cool Ideas & Experiments
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl">
            Interactive demonstrations and architectural patterns from real projects. 
            Explore, modify, and export these proven solutions.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-20 z-40 bg-[#0F1218]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex gap-8 py-4 overflow-x-auto">
            <button
              onClick={() => setActiveSection('architecture')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeSection === 'architecture'
                  ? 'bg-gradient-to-r from-cyan-400 to-violet-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Architecture Patterns
            </button>
            <button
              onClick={() => setActiveSection('terminal')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeSection === 'terminal'
                  ? 'bg-gradient-to-r from-cyan-400 to-violet-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Interactive Terminal
            </button>
            <button
              onClick={() => setActiveSection('coming-soon')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeSection === 'coming-soon'
                  ? 'bg-gradient-to-r from-cyan-400 to-violet-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              More Coming Soon
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="min-h-[60vh]">
        {activeSection === 'architecture' && (
          <ArchitectureSketchpad />
        )}
        
        {activeSection === 'terminal' && (
          <section className="py-20 px-6 sm:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Interactive Command Terminal
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  A fun way to explore my background through a terminal interface. 
                  Type commands to learn more about me!
                </p>
                
                {!showTerminal ? (
                  <button
                    onClick={() => setShowTerminal(true)}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full font-semibold text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
                  >
                    Launch Terminal
                  </button>
                ) : (
                  <div className="text-sm text-gray-500">
                    Terminal is active below. Type 'help' for available commands.
                  </div>
                )}
              </div>
              
              {showTerminal && (
                <div className="relative">
                  <CommandTerminal />
                </div>
              )}
            </div>
          </section>
        )}
        
        {activeSection === 'coming-soon' && (
          <section className="py-32 px-6 sm:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-600/20 mb-6">
                  <div className="text-4xl">🚀</div>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                More Cool Ideas Coming Soon
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                I'm working on more interactive demonstrations and experiments. 
                Check back soon for AI playground, Web3 tools, and more!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                  <span className="text-gray-300">AI Agent Playground</span>
                </div>
                <div className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                  <span className="text-gray-300">Web3 Transaction Builder</span>
                </div>
                <div className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                  <span className="text-gray-300">System Design Simulator</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Continue Exploring */}
      <ContinueExploring {...continueExploringPresets.coolIdeas} />
      
      <Footer />
    </div>
  );
}