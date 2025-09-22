'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Globe, Shield, DollarSign, Link2,
  Wallet, Lock, ArrowRight,
  Building2, Users, CheckCircle, Clock,
  HandHeart, ChevronDown
} from 'lucide-react'

// Section 1: Hero/Overview
function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative flex items-center py-20">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-50/50 dark:from-pink-950/20 dark:to-rose-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-100 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 mb-6">
              <HandHeart className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Crypto Donation Platform</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
              Cointribute
            </h2>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">March 2023 - Present</p>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Enabling charities worldwide to accept crypto donations with zero fees, 
              full transparency, and complete control over their funds.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Problem</h4>
                <p className="text-gray-600 dark:text-gray-400">
                Charities struggle to accept crypto donations due to technical complexity, compliance concerns, and lack of infrastructure. Donors want to give but face transparency and accountability concerns.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Solution</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Direct wallet-to-wallet platform where verified charities maintain full custody. 
                  Complete blockchain transparency with no intermediary risk. 100% volunteer-operated ensuring zero fees forever.
                </p>
              </div>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Verified Charities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">$100K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Donations Mediated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Donors</div>
              </div>
            </div>
            
            {/* Project Link */}
            <a 
              href="https://cointribute.network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>Visit Platform</span>
            </a>
          </motion.div>
          
          {/* Right: Donation Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-6">Direct Donation Flow</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Wallet className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Donor Wallet</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Self-custodial or exchange wallet</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <div className="border-l-2 border-pink-400 h-8" />
                  <span className="text-sm font-medium text-pink-600 dark:text-pink-400">~3 seconds</span>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Building2 className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Charity Wallet</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">100% received, self-custodial</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <div className="border-l-2 border-pink-400 h-8" />
                  <span className="text-sm font-medium text-pink-600 dark:text-pink-400">Instantly, globally available</span>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <HandHeart className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Aid Recipient</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400"></div>
                  </div>
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
      title: "Problem Identification",
      date: "Phase 1",
      content: "While building Coin Checkout payment infrastructure, co-founder challenged team to address wealth inequality in Web3. Then identified opportunity to enable frictionless charitable giving using crypto mostly using the infrastructure we already had.",
      metrics: {
        "Origin": "Coin Checkout",
        "Multi-purposed infrastructure": "~70%",
        "Team size": "3"
      }
    },
    {
      title: "Architecture Decision",
      date: "Phase 2", 
      content: "Chosen non-revenue model to enable full self-custody and to avoid extra complexity, smart contracts, compliance requirements, long development times, and limited global reach. This way we increased the feasibility of the project and reduces the risk of us getting demotivated. We wanted to maximize the impact, not to negate the cost.",
      metrics: {
        "Model": "Non-revenue",
        "Architecture": "Self-custodial",
        "Smart contracts": "0"
      }
    },
    {
      title: "Charity Onboarding",
      date: "Phase 3",
      content: "Finished building the platform and started onboarding verified charities. The 2023 Hatay earthquake motivated us to focus on disaster relief. As first charity, we immediately added Kızılay's public wallets to the platform on their behalf to make it easier for people to donate. We approached charities and offer them to set up crypto donations for them for free. Knowing that there is no transfer or service fee either, many charities jumped at the opportunity.",
      metrics: {
        "Focus": "Disaster relief",
        "First charity": "Day 1",
        "Onboarding time": "2 hours",
      }
    },
    {
      title: "Current Operations",
      date: "Phase 4",
      content: "8 verified charities process donations daily from global donors. Supports 8 major cryptocurrencies covering 80% of the global market cap. Coin Checkout enable donations from self-custodial wallets like Metamask and custodial wallets like Binance Pay. Blockchains provide complete transparency, super speed, and full trustlessness.",
      metrics: {
        "Live charities": "8",
        "Cryptocurrencies": "8",
        "Market coverage": "80%"
      }
    },
    {
      title: "Ongoing Commitment",
      date: "Phase 5",
      content: "As founder, I maintain and develop Cointribute entirely as volunteer work. The platform will remain free forever - this is not just a technical decision but a personal commitment to maximizing accessibility to crypto donations.",
      metrics: {
        "Maintenance": "100% volunteer",
        "Infrastructure cost": "$80/month",
        "Years committed": "Indefinite"
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
            From checkout infrastructure to donation platform
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
            <div className="grid grid-cols-3 gap-2 lg:hidden">
              {phases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`px-2 py-2 rounded-lg transition-all text-center ${
                    activePhase === index
                      ? 'bg-pink-100 dark:bg-pink-900/30 border-b-2 border-pink-600'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className={`text-xs font-medium ${
                    activePhase === index ? 'text-pink-700 dark:text-pink-300' : 'text-gray-700 dark:text-gray-300'
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
                      ? 'bg-pink-100 dark:bg-pink-900/30 border-l-4 border-pink-600'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium ${
                        activePhase === index ? 'text-pink-700 dark:text-pink-300' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {phase.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{phase.date}</div>
                    </div>
                    {activePhase === index && (
                      <ArrowRight className="w-5 h-5 text-pink-600 dark:text-pink-400" />
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
                    <div className="text-xl font-semibold text-pink-600 dark:text-pink-400">{value}</div>
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

// Section 3: Platform Architecture & Impact
function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const coreProperties = [
    {
      title: "Self-Custodial",
      description: "Charities own their wallets. No platform custody means no platform risk, and reduced compliance burden.",
      icon: Wallet
    },
    {
      title: "Non-Revenue",
      description: "Zero income model with volunteer-only operation. No salaries, no operational costs passed to users.",
      icon: Users
    },
    {
      title: "Trustless",
      description: "Direct wallet-to-wallet transfers. No intermediary holds funds. Smart contracts aren't even needed - pure blockchain transactions.",
      icon: Shield
    },
    {
      title: "Fast",
      description: "~3 second settlement time. Donations arrive almost instantly, enabling rapid response to emergencies and urgent needs.",
      icon: Clock
    },
    {
      title: "Transparent",
      description: "Every donation tracked on blockchain. Anyone can verify transaction history, amounts, and timing directly on-chain.",
      icon: Lock
    },
    {
      title: "Borderless",
      description: "No geographic restrictions from platform. Any charity whose legislation permits can accept donations from anywhere.",
      icon: Globe
    }
  ]

  const technicalSpecs = [
    { label: "Cryptocurrencies", value: "8 major tokens" },
    { label: "Market coverage", value: "80% of crypto market cap" },
    { label: "Settlement time", value: "~3 seconds" },
    { label: "Platform fees", value: "0% forever" },
    { label: "Verified charities", value: "8 organizations" },
    { label: "Geographic limits", value: "None from platform" }
  ]

  const techStack = [
    'TypeScript', 'React', 'Next.js', 'C#', 'ASP.NET', 'CoinGecko',
    'Reown', 'WalletConnect', 'Metamask', 'Binance Pay', 'Coinbase Pay',
    'GitHub', 'GitHub Actions', 'PostgreSQL', 'Digital Ocean'
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
            Platform Architecture
          </h2>
        </motion.div>

        {/* Core Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {coreProperties.map((property, index) => {
            const Icon = property.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                <Icon className="w-8 h-8 text-pink-600 dark:text-pink-400 mb-4" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{property.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{property.description}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-8 mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Technical Specifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">{spec.label}:</span>
                <span className="font-medium text-pink-600 dark:text-pink-400">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Technology Stack</h3>
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
export default function CointributeProject() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="relative">
      <HeroSection />
      
      {/* Toggle Button */}
      <div className="flex justify-center py-8">
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-pink-100 dark:bg-pink-900/30 hover:bg-pink-200 dark:hover:bg-pink-900/50 border border-pink-200 dark:border-pink-800 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-medium text-pink-700 dark:text-pink-300">
            {showMore ? 'Show Less' : 'Show More Details'}
          </span>
          <motion.div
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-pink-600 dark:text-pink-400" />
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
            <ImpactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}