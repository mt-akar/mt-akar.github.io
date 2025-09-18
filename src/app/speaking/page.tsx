'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mic, Calendar, Users, Award, Globe, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SpeakingPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const topicsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isTopicsInView = useInView(topicsRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.1 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  const speakingTopics = [
    {
      title: 'AI & Machine Learning',
      description: 'Building production AI systems, prompt engineering, and the future of human-AI collaboration',
      icon: Zap
    },
    {
      title: 'Web3 & Blockchain',
      description: 'DeFi architecture, smart contract security, and building decentralized systems at scale',
      icon: Globe
    },
    {
      title: 'Engineering Leadership',
      description: 'Scaling teams, technical debt management, and building cultures of innovation',
      icon: Users
    },
    {
      title: 'System Architecture',
      description: 'Designing resilient distributed systems, microservices, and cloud-native architectures',
      icon: Award
    }
  ];

  const speakingStats = [
    { value: '50+', label: 'Speaking Engagements' },
    { value: '15k+', label: 'Audience Reached' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '12', label: 'Countries' }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0F1218] dark:bg-black text-white overflow-x-hidden relative">
      <Header />

      <main className="relative z-10">
        {/* Title Section - Like Contact Page */}
        <section className="relative pt-24 lg:pt-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-600/10 to-cyan-400/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center" ref={titleRef}>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Speaking & Workshops
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-400 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Sharing insights on technology, leadership, and building the future
              </motion.p>
            </div>
          </div>
        </section>

        {/* Speaking Topics */}
        <section className="relative py-16" ref={topicsRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.h2
              className="text-3xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isTopicsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Speaking Topics
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {speakingTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <motion.div
                    key={index}
                    className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTopicsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-violet-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
                        <p className="text-gray-400">{topic.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-16" ref={statsRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {speakingStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="relative py-16" ref={formRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Book a Speaking Engagement</h3>

              <form className="space-y-6" action="https://formspree.io/f/mpwjbjre" method="POST">
                <input type="hidden" name="_subject" value="Speaking Engagement Request" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Event Name</label>
                    <input
                      type="text"
                      name="event_name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="TechConf 2025"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Event Date</label>
                    <input
                      type="date"
                      name="event_date"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Event Type</label>
                  <select
                    name="event_type"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-400 transition-colors"
                    required
                  >
                    <option value="">Select type...</option>
                    <option value="conference">Conference</option>
                    <option value="workshop">Workshop</option>
                    <option value="podcast">Podcast</option>
                    <option value="webinar">Webinar</option>
                    <option value="panel">Panel Discussion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Event Details</label>
                  <textarea
                    name="details"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 transition-colors resize-none"
                    placeholder="Tell me about your event, audience, topic preferences, and any specific requirements..."
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-xs text-gray-500">
                    <Mic className="w-4 h-4 inline mr-2 text-violet-400" />
                    Available for in-person and virtual events
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-semibold text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}