'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mic, Calendar, Users, Award, Globe, Zap, MapPin, Play, X, ExternalLink, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SpeakingPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const topicsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [selectedAppearance, setSelectedAppearance] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isTopicsInView = useInView(topicsRef, { once: true, amount: 0.1 });
  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.1 });
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

  // Past speeches and appearances data
  const pastAppearances = [
    {
      id: 1,
      title: 'AI Summit 2024 - Keynote',
      event: 'Global AI Summit',
      location: 'San Francisco, CA',
      date: 'March 2024',
      type: 'Keynote',
      audience: '2,500+',
      topic: 'The Next Frontier: AI-Augmented Engineering',
      image: '/speaking/ai-summit-2024.jpg',
      videoUrl: '#',
      description: 'Explored the paradigm shift in software engineering with AI pair programming and autonomous agents.'
    },
    {
      id: 2,
      title: 'Web3 Dev Conference',
      event: 'ETHDenver',
      location: 'Denver, CO',
      date: 'February 2024',
      type: 'Workshop',
      audience: '500+',
      topic: 'Building Secure DeFi Protocols',
      image: '/speaking/ethdenver-2024.jpg',
      description: 'Hands-on workshop on smart contract security patterns and DeFi architecture best practices.'
    },
    {
      id: 3,
      title: 'Tech Leadership Forum',
      event: 'CTO Summit',
      location: 'New York, NY',
      date: 'January 2024',
      type: 'Panel Discussion',
      audience: '800+',
      topic: 'Scaling Engineering Teams in Hypergrowth',
      image: '/speaking/cto-summit-2024.jpg',
      description: 'Panel discussion on building and scaling high-performance engineering organizations.'
    },
    {
      id: 4,
      title: 'Cloud Native Con',
      event: 'CNCF Conference',
      location: 'Amsterdam, Netherlands',
      date: 'November 2023',
      type: 'Technical Talk',
      audience: '1,200+',
      topic: 'Kubernetes at Scale: Lessons from Production',
      image: '/speaking/cloudnative-2023.jpg',
      videoUrl: '#',
      description: 'Deep dive into running Kubernetes clusters serving billions of requests.'
    },
    {
      id: 5,
      title: 'Future of Code Podcast',
      event: 'Tech Talks Podcast',
      location: 'Virtual',
      date: 'October 2023',
      type: 'Podcast Interview',
      audience: '50K+ listeners',
      topic: 'The Evolution of Software Architecture',
      image: '/speaking/podcast-2023.jpg',
      videoUrl: '#',
      description: 'In-depth discussion on microservices, serverless, and the future of distributed systems.'
    },
    {
      id: 6,
      title: 'DevOps World',
      event: 'Jenkins Conference',
      location: 'Las Vegas, NV',
      date: 'September 2023',
      type: 'Keynote',
      audience: '3,000+',
      topic: 'CI/CD in the Age of AI',
      image: '/speaking/devops-world-2023.jpg',
      description: 'Revolutionizing continuous integration with AI-powered testing and deployment strategies.'
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(pastAppearances.length / itemsPerPage);

  const nextGalleryPage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % totalPages);
  };

  const prevGalleryPage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentAppearances = pastAppearances.slice(
    currentGalleryIndex * itemsPerPage,
    (currentGalleryIndex + 1) * itemsPerPage
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0F1218] dark:bg-black text-white overflow-x-hidden relative">
      <Header />

      <main className="relative z-10">
        {/* Title Section - Matching Contact Page Style */}
        <section className="relative pt-24 lg:pt-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-violet-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-600/10 to-yellow-400/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center" ref={titleRef}>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
                  Speaking & Workshops
                </span>
              </motion.h1>

              {/* Hero Message Card */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative mb-4 p-4 lg:p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-violet-600/5 to-pink-600/5 rounded-2xl" />

                  <div className="relative space-y-4">
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <Mic className="w-5 h-5 text-cyan-400" />
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                          Sharing Insights That Shape the Future
                        </h2>
                      </div>
                      <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                        From keynotes at global conferences to hands-on workshops, I bring technical depth and visionary thinking to every stage.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                    className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTopicsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-400/30 group-hover:to-violet-600/30 transition-all duration-300">
                        <Icon className="w-6 h-6 text-cyan-400" />
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

        {/* Past Speeches & Appearances Gallery */}
        {/*
        <section className="relative py-16" ref={galleryRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Past Speeches & Appearances</h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                From global conferences to interactive workshops, each engagement brings unique insights and connections.
              </p>
            </motion.div>

            {/* Gallery Grid */}
            {/*
            <div className="relative">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {currentAppearances.map((appearance, index) => (
                  <motion.div
                    key={appearance.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    onClick={() => setSelectedAppearance(appearance.id)}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    */}
                      {/* Image Placeholder */}
                      {/*
                      <div className="relative h-48 bg-gradient-to-br from-cyan-400/20 to-violet-600/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                        {appearance.videoUrl && (
                          <div className="absolute top-4 right-4 z-20">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center">
                              <Play className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                          <div className="text-center">
                            <Mic className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="text-xs opacity-50">Event Photo</p>
                          </div>
                        </div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-violet-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                      */}

                      {/* Content */}
                      {/*
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full">
                            {appearance.type}
                          </span>
                          <span className="text-xs text-gray-500">{appearance.date}</span>
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {appearance.event}
                        </h3>

                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                          {appearance.topic}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {appearance.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {appearance.audience}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              */}

              {/* Pagination Controls */}
              {/*
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevGalleryPage}
                  className="p-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentGalleryIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentGalleryIndex
                          ? 'w-8 bg-gradient-to-r from-cyan-400 to-violet-600'
                          : 'bg-white/20 hover:bg-white/30'
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextGalleryPage}
                  className="p-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Modal for selected appearance */}
        {/*
        <AnimatePresence>
          {selectedAppearance && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAppearance(null)}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
              <motion.div
                className="relative max-w-3xl w-full bg-[#0F1218] rounded-2xl border border-white/10 overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const appearance = pastAppearances.find(a => a.id === selectedAppearance);
                  if (!appearance) return null;

                  return (
                    <>
                      <button
                        onClick={() => setSelectedAppearance(null)}
                        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-colors"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>

                      <div className="relative h-64 bg-gradient-to-br from-cyan-400/20 to-violet-600/20">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                          <div className="text-center">
                            <Mic className="w-16 h-16 mx-auto mb-3 opacity-50" />
                            <p className="text-sm opacity-50">Event Photo</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full">
                            {appearance.type}
                          </span>
                          <span className="text-sm text-gray-400">{appearance.date}</span>
                          {appearance.videoUrl && (
                            <a
                              href={appearance.videoUrl}
                              className="ml-auto flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-sm text-white transition-colors"
                            >
                              <Play className="w-4 h-4" />
                              Watch Recording
                            </a>
                          )}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">{appearance.title}</h3>
                        <p className="text-lg text-cyan-400 mb-4">{appearance.topic}</p>

                        <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {appearance.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            {appearance.audience} attendees
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                          {appearance.description}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        */}

        {/* Book a Speaking Engagement Form */}
        <section className="relative py-16" ref={formRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Book a Speaking Engagement</h3>
              <p className="text-gray-400 mb-8">
                Looking for a speaker who brings technical expertise and visionary insights? Let's discuss your event.
              </p>

              <form className="space-y-6" action="https://formspree.io/f/mpwjbjre" method="POST">
                <input type="hidden" name="_subject" value="Speaking Engagement Request" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Event Name</label>
                    <input
                      type="text"
                      name="event_name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="TechConf 2025"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Event Date</label>
                    <input
                      type="date"
                      name="event_date"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Event Type</label>
                    <select
                      name="event_type"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      required
                    >
                      <option value="">Select type...</option>
                      <option value="conference">Conference Keynote</option>
                      <option value="workshop">Technical Workshop</option>
                      <option value="panel">Panel Discussion</option>
                      <option value="podcast">Podcast Interview</option>
                      <option value="webinar">Webinar</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Expected Audience Size</label>
                    <select
                      name="audience_size"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      required
                    >
                      <option value="">Select size...</option>
                      <option value="small">Less than 50</option>
                      <option value="medium">50 - 200</option>
                      <option value="large">200 - 500</option>
                      <option value="xlarge">500 - 1000</option>
                      <option value="massive">1000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Topic Preferences</label>
                  <input
                    type="text"
                    name="topic"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="AI/ML, Web3, Engineering Leadership, System Architecture..."
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Event Details</label>
                  <textarea
                    name="details"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell me about your event, audience demographics, specific topics of interest, and any special requirements..."
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-xs text-gray-500">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                    Available for in-person and virtual events worldwide
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full font-semibold text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
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