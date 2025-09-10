'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Rocket, Users, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCards from '@/components/ContactCards';

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  // Use multiple refs with better thresholds
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });


  return (
    <div ref={pageRef} className="min-h-screen bg-[#0F1218] dark:bg-black text-white overflow-x-hidden relative">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Title Section - Like Education Page */}
        <section className="relative pt-24 lg:pt-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-violet-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-600/10 to-yellow-400/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <div className="text-center" ref={titleRef}>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
                  Contact
                </span>
              </motion.h1>
              
              {/* Hero Message Card */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Glass Card Container */}
                <div className="relative mb-4 p-4 lg:p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                  {/* Gradient Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-violet-600/5 to-pink-600/5 rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Main Message */}
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5 text-cyan-400" />
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                          Let's Talk
                        </h2>
                      </div>
                      <p className="text-sm text-gray-300">
                        Every great journey starts with a conversation.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="relative py-12" ref={cardsRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ContactCards 
              onHoverMethod={() => {}}
              isInView={isCardsInView}
            />
          </div>
        </section>

        {/* Quick Message Section */}
        <section className="relative py-12" ref={formRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <h3 className="text-2xl font-bold text-white mb-4">Quick Message</h3>              
              <form 
                className="space-y-6"
                action="https://formspree.io/f/mpwjbjre"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                    <input 
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                    <input 
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input 
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Let's build something amazing"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell me about your project, idea, or just say hello..."
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <p className="text-xs text-gray-500">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                    Typically responds within 24 hours
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full font-semibold text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
        
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}