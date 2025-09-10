'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Brain, Shield, Globe, Code2,
  Accessibility, Languages, ArrowDown, Users,
  ChevronDown, ArrowRight, Zap,
  FileText, MessageSquare, Edit3, CheckCircle,
  Key, Settings, RefreshCw
} from 'lucide-react'

// Section 1: Hero/Overview
function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section ref={ref} className="relative flex items-center py-20">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
              <Accessibility className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">AI Accessibility Platform</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
              InclusAI
            </h2>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">June 2024 - Present</p>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Enterprise AI platform that transforms complex government communications into accessible, 
              easy-to-understand language while maintaining complete data sovereignty.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Problem</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  EU regulations mandate accessibility for government websites by 2025. Agencies struggle with technical jargon that excludes citizens with cognitive disabilities, language barriers, or reading difficulties. Existing solutions like SummAI only offer copy-paste interfaces, not integrated CMS solutions.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Solution</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  CMS-agnostic plugin that works with any website. One script tag enables AI-powered simplification with zero data leaving government infrastructure. Complete control over what gets simplified, full customization, and seamless integration.
                </p>
              </div>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">1</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Customer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pages Simplified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CMS Supported</div>
              </div>
            </div>
            
            {/* Project Link */}
            <a 
              href="https://inclusai.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>Visit Platform</span>
            </a>
          </motion.div>
          
          {/* Right: Simplification Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Live Simplification Example</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Original Text</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    "It's the cat's meow! To celebrate its third year of revealing stunning scenes of the cosmos in infrared light, 
                    NASA's James Webb Space Telescope has 'clawed' back the thick, dusty layers of a section within the Cat's Paw Nebula (NGC 6334)."
                  </p>
                </div>
                
                <div className="flex items-center justify-center">
                  <ArrowDown className="w-5 h-5 text-emerald-500 rotate-90 lg:rotate-0" />
                </div>
                
                <div>
                  <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-2">Simplified (Barrier-free Language)</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    "This is an exciting new picture. The James Webb Space Telescope is celebrating its third year. 
                    It takes amazing pictures of space using infrared light. Infrared light is a kind of light our eyes cannot see. 
                    The telescope used this light to see through thick dust. It looked at a part of the Cat's Paw Nebula. 
                    The nebula's name is also NGC 6334."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Section 2: Timeline
function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activePhase, setActivePhase] = useState(0)

  const phases = [
    {
      title: "Market Opportunity",
      date: "Phase 1",
      content: "EU enacted accessibility requirements for government websites (BFSG compliance) on June 2025. Market research revealed only one competitor (SummAI) offering basic copy-paste simplification. Identified massive gap for integrated, CMS-agnostic accessibility tools.",
      metrics: {
        "Market size": "1000s of government websites",
        "Compliance date": "2025",
        "Competitors": "1",
      }
    },
    {
      title: "Technical Architecture",
      date: "Phase 2",
      content: "Designed complex simplification pipeline: HTML dehydration to preserve styling, SPA rendering with Chromium, HTML segmentation for relevant content, AI injection attack prevention, context-aware batching, LLM call, inline style preservation, rehydration, seamless search-replace algorithm. Far beyond simple AI API call.",
      metrics: {
        "Pipeline": "9 stages",
        "AI Model": "Gemini 2.5 Pro",
        "": ""
      }
    },
    {
      title: "Enterprise Engagement",
      date: "Phase 3",
      content: "Currently in dialogue with ZenDiS (Germany's digital sovereignty initiative) for project inclusion, education, support and hosting services. Open-sourced the platform to maximize government adoption and transparency. Deployed on multiple projects as proof of concept.",
      metrics: {
        "Partnership talks": "1",
        "Deployed websites": "4",
        "Open source": "Yes",
      }
    }
  ]

  const currentPhase = phases[activePhase]

  return (
    <section ref={ref} className="relative py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From market opportunity to enterprise solution
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Phase Navigation - Desktop sidebar, mobile grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Mobile grid view */}
            <div className="grid grid-cols-2 gap-2 lg:hidden">
              {phases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`px-2 py-2 rounded-lg transition-all text-center ${
                    activePhase === index
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 border-b-2 border-emerald-600'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className={`text-xs font-medium ${
                    activePhase === index ? 'text-emerald-700 dark:text-emerald-300' : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {phase.date}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Desktop list view */}
            <div className="hidden lg:block space-y-2">
              {phases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activePhase === index
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 border-l-4 border-emerald-600'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium ${
                        activePhase === index ? 'text-emerald-700 dark:text-emerald-300' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {phase.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{phase.date}</div>
                    </div>
                    {activePhase === index && (
                      <ArrowRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Phase Details */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {activePhase + 1}. {currentPhase.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {currentPhase.content}
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4">
                {Object.entries(currentPhase.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{key}</div>
                    <div className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Section 3: Technical Architecture & Features
function ArchitectureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const coreFeatures = [
    {
      title: "Universal Compatibility",
      description: "Works with any CMS, framework, or static site. Single script tag integration requires no backend changes or complex setup.",
      icon: Globe
    },
    {
      title: "AI Pipeline Engineering",
      description: "Complex processing: HTML hydration, style preservation, SPA rendering, injection prevention, intelligent batching, and seamless replacement.",
      icon: Brain
    },
    {
      title: "Admin Control Panel",
      description: "Select pages to simplify, choose languages, edit AI output, manage user requests. Complete control over your accessibility features.",
      icon: Edit3
    },
    {
      title: "Instant Deployment",
      description: "From script installation to live simplification in under 5 minutes. Pre-built caching ensures sub-100ms response times.",
      icon: Zap
    },
    {
      title: "Multi-Language Support",
      description: "Simplify content into multiple language levels. Users can request new languages, admins approve and deploy instantly.",
      icon: Languages
    },
    {
      title: "Real-time Feedback Loop",
      description: "Users can request simplifications for unsupported pages. Admins review, approve, and deploy new simplifications instantly.",
      icon: MessageSquare
    },
  ]

  const techStack = [
    'Gemini', 'DeepSeek',
    'NextJS', 'C#', 'TypeScript',
    'Vanilla JS', 'WebSocket', 'HTML Parser', 'Chromium', 'CDNs', 'MongoDB', 'Redis',
  ]

  return (
    <section ref={ref} className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How It Works
          </h2>
        </motion.div>

        {/* Three Step Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl p-6 border-2 border-dashed border-emerald-300 dark:border-emerald-700 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Setup & Integration</h3>
              </div>
              <div className="space-y-3 pl-16">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Verify domain ownership</span>
                </div>
                <div className="flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Add script tag to website</span>
                </div>
                <div className="flex items-start gap-2">
                  <Key className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Generate admin key</span>
                </div>
              </div>
            </div>
            {/* Connector */}
            <div className="hidden lg:flex absolute top-1/2 -right-9 z-10 items-center transform">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl p-6 border-2 border-dashed border-emerald-300 dark:border-emerald-700 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Configure & Generate</h3>
              </div>
              <div className="space-y-3 pl-16">
                <div className="flex items-start gap-2">
                  <Settings className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Access admin dashboard</span>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Select pages for simplification</span>
                </div>
                <div className="flex items-start gap-2">
                  <Languages className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Generate in multiple languages</span>
                </div>
                <div className="flex items-start gap-2">
                  <Edit3 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Edit and refine AI output</span>
                </div>
              </div>
            </div>
            {/* Connector */}
            <div className="hidden lg:flex absolute top-1/2 -right-9 z-10 items-center transform">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl p-6 border-2 border-dashed border-emerald-300 dark:border-emerald-700 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Live Experience</h3>
              </div>
              <div className="space-y-3 pl-16">
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Users visit your website</span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Instant cached replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Toggle between languages</span>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Request new simplifications</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Excellence Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Excellence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade architecture built for government compliance
          </p>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Powered By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Powered By</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Component
export default function InclusAIProject() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="relative">
      <HeroSection />
      
      {/* Toggle Button */}
      <div className="flex justify-center py-8">
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-medium text-emerald-700 dark:text-emerald-300">
            {showMore ? 'Show Less' : 'Show More Details'}
          </span>
          <motion.div
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
        </motion.button>
      </div>

      {/* Collapsible Sections */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <TimelineSection />
            <ArchitectureSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}