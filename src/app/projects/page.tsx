'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContinueExploring from '@/components/ContinueExploring'
import { 
  ExternalLink, Code2, Layers,   Rocket, Brain,
  Package, Terminal, Sparkles,  CheckCircle,
  GraduationCap,   Accessibility, BrainCircuit,
  Languages, BookOpen,   MessageSquare, Type, Eye
} from 'lucide-react'

import PathologyAIProject from './PathologyAI'
import CointributeProject from './Cointribute'
import InclusAIProject from './InclusAI'
import CoinCheckoutProject from './CoinCheckout'

// Library Projects Section (Combined)
function LibraryProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const libraries = [
    {
      title: 'Kinesis.NET',
      description: 'C# SDK for Kinesis Network with gas estimation and 1-1 contract interface',
      link: 'https://www.nuget.org/packages?q=plusturk',
      platform: 'NuGet',
      icon: Layers,
      stats: { downloads: '1k+', coverage: '100%' },
      tags: ['C#', '.NET 6+', 'Blockchain RPC']
    },
    {
      title: 'Web3 Studio',
      description: 'Open-source C# SDK for EVM development',
      link: 'https://www.nuget.org/packages?q=plusturk',
      platform: 'NuGet', 
      icon: Code2,
      stats: { years: '2+', type: 'Open Source' },
      tags: ['C#', 'EVM', 'Web3']
    },
    {
      title: 'Bottom Nav Layout',
      description: 'Flutter package eliminating navigation boilerplate',
      link: 'https://pub.dev/packages/bottom_nav_layout',
      platform: 'Pub.dev',
      icon: Package,
      stats: { popularity: '82%', patterns: '6' },
      tags: ['Dart', 'Flutter', 'Navigation']
    }
  ]
  
  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-blue-900/10 to-purple-900/10 dark:from-indigo-900/20 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-400">Developer Tools</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Open Source Libraries
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building tools that empower developers and lower barriers to entry
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {libraries.map((lib, index) => {
            const Icon = lib.icon
            return (
              <motion.div
                key={lib.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-10 h-10 text-indigo-500" />
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/50">
                    {lib.platform}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{lib.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{lib.description}</p>
                
                <div className="flex gap-4 mb-4">
                  {Object.entries(lib.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-lg font-bold text-indigo-500">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {lib.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={lib.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">View Package</span>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Date Night Game Section
function DateNightGameSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-pink-400">Game • AI</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
            Date Night Game
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            AI-powered couples game with customizable rounds and engaging minigames
          </p>
          
          <div className="flex justify-center gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-pink-500">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Game Modes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-rose-500">AI</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">Free</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">To Play</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {['Next.js', 'Gemini AI', 'PWA', 'Tailwind'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border border-pink-200/50 dark:border-pink-700/50">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })
  
  const [activeSection, setActiveSection] = useState(0)
  
  const sections = [
    { name: 'Pathology AI', component: PathologyAIProject },
    { name: 'Cointribute', component: CointributeProject },
    { name: 'InclusAI', component: InclusAIProject },
    { name: 'Coin Checkout', component: CoinCheckoutProject },
    { name: 'Libraries', component: LibraryProjectsSection },
    { name: 'Date Night', component: DateNightGameSection }
  ]
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const sectionIndex = Math.floor(latest * sections.length)
      setActiveSection(Math.min(sectionIndex, sections.length - 1))
    })
    return unsubscribe
  }, [scrollYProgress, sections.length])
  
  return (
    <>
      <Header />
      <main ref={containerRef} className="min-h-screen">
        {/* Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-600 to-pink-600 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-pink-600/20 to-yellow-400/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Products of my own ideas, creation, and execution
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Project Sections */}
      {sections.map((section, index) => {
        const Component = section.component
        return (
          <div key={section.name} id={`section-${index}`}>
            <Component />
          </div>
        )
      })}
      
      {/* Continue Exploring */}
      <ContinueExploring 
        subtitle="Explore more of my journey"
        cardIds={['skills', 'experience', 'voluntary']}
      />
    </main>
    <Footer />
    </>
  )
}