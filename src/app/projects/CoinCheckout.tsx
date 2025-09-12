'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Rocket, Zap, Shield, Globe, 
  CreditCard, Link2, Cpu, 
  CheckCircle, Building2,
  TrendingUp, Network, BarChart3,
  ArrowRight, GitBranch, Timer,
  Sparkles, MessageCircle, RefreshCw,
  ChevronDown, Wallet, Code2, Lock,
  Activity, DollarSign, Layers, Settings
} from 'lucide-react'

// Section 1: Hero/Overview
function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative flex items-center py-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 mb-6">
              <Rocket className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Web3 Payment Infrastructure</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
              Coin Checkout
            </h2>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">January 2025 - Present</p>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stripe-like crypto payment gateway with integrated wallet checkout. Accept payments in 15+ cryptocurrencies across 6 blockchains with automatic conversion to merchant's preferred payout currency.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Problem</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Existing crypto payment platforms require manual address copying, network selection, and token picking - prone to errors and poor UX. No true wallet integration exists.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Solution</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Seamless wallet connection with auto-generated transactions, cross-currency pricing, on-chain price oracles, and automatic conversion to merchant's preferred payout currency.
                </p>
              </div>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">1</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Enterprise Customer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">&lt;15s</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Settlement Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Supported Wallets</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Checkout Flow Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-6">Checkout Flow</h3>
              
              {/* Checkout Steps */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <CreditCard className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Session Creation</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">API or dashboard, multi-currency cart</div>
                  </div>
                </div>
                
                <div className="ml-4 border-l-2 border-orange-300 dark:border-orange-700 h-6" />
                
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Wallet className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Wallet Selection</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">MetaMask, WalletConnect, Binance Pay</div>
                  </div>
                </div>
                
                <div className="ml-4 border-l-2 border-orange-300 dark:border-orange-700 h-6" />
                
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Activity className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Price Oracle</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Chainlink real-time conversion</div>
                  </div>
                </div>
                
                <div className="ml-4 border-l-2 border-orange-300 dark:border-orange-700 h-6" />
                
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Payment Complete</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Webhook notification & redirect</div>
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

// Section 2: Architecture & Technical Details
function ArchitectureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState(0)

  const architectureTabs = [
    {
      title: "Smart Contracts",
      icon: Code2,
      content: "Non-custodial payment processing with Permit2 for gasless approvals. Smart contracts deployed on Ethereum, Polygon, and more. All payments go directly to merchant wallets with automatic fee calculation.",
      features: [
        { label: "Permit2 Integration", value: "Gasless approvals" },
        { label: "Fee Processing", value: "On-chain calculation" },
        { label: "Multi-signature", value: "Enterprise security" },
        { label: "Upgradeable", value: "Proxy pattern" }
      ]
    },
    {
      title: "Price Oracles", 
      icon: Activity,
      content: "Chainlink price feeds provide real-time, verifiable exchange rates. Supports cross-currency pricing where items can be priced in USD, ETH, or BTC but paid in any supported token.",
      features: [
        { label: "Data Provider", value: "Chainlink" },
        { label: "Update Frequency", value: "Real-time" },
        { label: "Price Deviation", value: "<0.1%" },
        { label: "Fallback", value: "Multi-oracle" }
      ]
    },
    {
      title: "Wallet Integration",
      icon: Wallet,
      content: "Seamless integration with all major wallets through WalletConnect v2. Support for both custodial (exchange wallets) and non-custodial wallets. Mobile-optimized with deep linking.",
      features: [
        { label: "WalletConnect", value: "v2 Protocol" },
        { label: "MetaMask", value: "Direct integration" },
        { label: "Bitcoin Wallets", value: "6+ providers" },
        { label: "Mobile Support", value: "Deep linking" }
      ]
    },
    {
      title: "Merchant API",
      icon: Settings,
      content: "RESTful API with comprehensive SDKs. Create payment sessions, manage webhooks, and track transactions. Idempotency keys and signed event logs ensure reliability and auditability.",
      features: [
        { label: "Authentication", value: "API Keys" },
        { label: "Webhooks", value: "Event-driven" },
        { label: "Rate Limiting", value: "DDoS protected" },
        { label: "SDKs", value: "Multiple languages" }
      ]
    }
  ]

  const currentTab = architectureTabs[activeTab]
  const Icon = currentTab.icon

  return (
    <section ref={ref} className="relative py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Architecture
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade infrastructure built for scale and reliability
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Mobile grid view */}
            <div className="grid grid-cols-2 gap-2 lg:hidden">
              {architectureTabs.map((tab, index) => {
                const TabIcon = tab.icon
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`p-3 rounded-lg transition-all text-center ${
                      activeTab === index
                        ? 'bg-orange-100 dark:bg-orange-900/30 border-b-2 border-orange-600'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <TabIcon className={`w-5 h-5 mx-auto mb-1 ${
                      activeTab === index ? 'text-orange-600 dark:text-orange-400' : 'text-gray-600 dark:text-gray-400'
                    }`} />
                    <div className={`text-xs font-medium ${
                      activeTab === index ? 'text-orange-700 dark:text-orange-300' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {tab.title}
                    </div>
                  </button>
                )
              })}
            </div>
            
            {/* Desktop list view */}
            <div className="hidden lg:block space-y-2">
              {architectureTabs.map((tab, index) => {
                const TabIcon = tab.icon
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeTab === index
                        ? 'bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-600'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <TabIcon className={`w-5 h-5 ${
                          activeTab === index ? 'text-orange-600 dark:text-orange-400' : 'text-gray-600 dark:text-gray-400'
                        }`} />
                        <div className={`font-medium ${
                          activeTab === index ? 'text-orange-700 dark:text-orange-300' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {tab.title}
                        </div>
                      </div>
                      {activeTab === index && (
                        <ArrowRight className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentTab.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {currentTab.content}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {currentTab.features.map((feature, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{feature.label}</div>
                    <div className="text-lg font-semibold text-orange-600 dark:text-orange-400">{feature.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Blockchain Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Supported Networks & Tokens</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Blockchains</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Ethereum', 'Bitcoin', 'Solana', 'Tron', 'Polygon', 'BNB', 'Avalanche'].map((chain) => (
                  <div key={chain} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <Network className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{chain}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Tokens</h4>
              <div className="grid grid-cols-3 gap-3">
                {['USDT', 'USDC', 'EURC', 'BTC', 'ETH', 'WETH', 'WBTC', 'POL', 'BNB', 'SOL', 'TRX', 'DAI', 'More...'].map((token) => (
                  <div key={token} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <DollarSign className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{token}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Section 3: Features & Implementation
function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Globe,
      title: "Cross-Currency Pricing",
      description: "Price items in USD, EUR, ETH, or BTC. Customers pay in any supported token with automatic conversion to merchant's preferred payout currency.",
      highlight: "Universal pricing"
    },
    {
      icon: Zap,
      title: "Instant Settlement",
      description: "Direct payment to merchant wallets. No intermediary custody, no settlement delays.",
      highlight: "<15s settlement time"
    },
    {
      icon: Shield,
      title: "100% Non-Custodial",
      description: "Merchants maintain complete control. Payments flow directly to their wallets.",
      highlight: "Full control"
    },
    {
      icon: Link2,
      title: "One-Click Integration",
      description: "Simple API integration with comprehensive SDKs. Embed checkout or redirect seamlessly.",
      highlight: "5 minute setup"
    },
    {
      icon: RefreshCw,
      title: "Auto-Conversion",
      description: "Automatic on-chain conversion to merchant's preferred payout currency with Chainlink price feeds.",
      highlight: "No manual conversion"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Multi-signature wallets, on-chain audit trails, and compliance-ready infrastructure.",
      highlight: "Verifiable audit trail"
    }
  ]

  const implementations = [
    {
      title: "Cointribute Integration",
      description: "Powering crypto donations for charities with 0% commission structure",
      stats: { charities: "8+", volume: "$10K+", donors: "15+" }
    },
    {
      title: "E-commerce Platforms",
      description: "Shopify and WooCommerce plugins for instant crypto payments",
      stats: { merchants: "2+", transactions: "500+", countries: "2+" }
    }
  ]

  const techStack = [
    'Solidity', 'Hardhat', 'TypeScript', 'React', 'Next.js', 'C#', 'ASP.NET', 
    'Polygon', 'Amoy Testnet', 'Chainlink', 'CoinGecko', 'Reown', 'WalletConnect', 
    'MetaMask', 'Binance Pay', 'Coinbase Pay', 'DeepSeek', 'Webhooks', 
    'GitHub Actions', 'PostgreSQL', 'NGINX', 'Digital Ocean'
  ]

  return (
    <section ref={ref} className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Features & Impact
          </h2>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                    <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{feature.description}</p>
                    <span className="text-xs font-medium text-orange-600 dark:text-orange-400">{feature.highlight}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Implementation Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-8 mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Live Implementations</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {implementations.map((impl, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{impl.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{impl.description}</p>
                <div className="space-y-2">
                  {Object.entries(impl.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</span>
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Developer Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-gray-900 dark:bg-gray-800 rounded-xl p-8 mb-12 text-white"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Developer Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-4 text-orange-400">Simple Integration</h4>
              <pre className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Create a payment session
`}<span className="text-blue-400">const</span>{` session = `}<span className="text-blue-400">await</span>{` coinCheckout.`}<span className="text-yellow-300">createSession</span>{`({
  `}<span className="text-cyan-300">amount</span>{`: `}<span className="text-green-400">99.99</span>{`,
  `}<span className="text-cyan-300">currency</span>{`: `}<span className="text-green-400">'USD'</span>{`,
  `}<span className="text-cyan-300">items</span>{`: [{ `}<span className="text-cyan-300">name</span>{`: `}<span className="text-green-400">'Product'</span>{`, `}<span className="text-cyan-300">price</span>{`: `}<span className="text-green-400">99.99</span>{` }],
  `}<span className="text-cyan-300">successUrl</span>{`: `}<span className="text-green-400">'https://example.com/success'</span>{`,
  `}<span className="text-cyan-300">cancelUrl</span>{`: `}<span className="text-green-400">'https://example.com/cancel'</span>{`
});

`}<span className="text-gray-500">// Redirect to checkout</span>{`
window.location.href = session.checkoutUrl;`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-orange-400">Webhook Handling</h4>
              <pre className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Handle payment webhooks
app.`}<span className="text-yellow-300">post</span>{`(`}<span className="text-green-400">'/webhook'</span>{`, (req, res) `}<span className="text-blue-400">=&gt;</span>{` {
  `}<span className="text-blue-400">const</span>{` event = coinCheckout.`}<span className="text-yellow-300">verifyWebhook</span>{`(req);
  
  `}<span className="text-purple-400">if</span>{` (event.type === `}<span className="text-green-400">'payment.completed'</span>{`) {
    `}<span className="text-gray-500">// Process successful payment</span>{`
    `}<span className="text-yellow-300">fulfillOrder</span>{`(event.data.sessionId);
  }
  
  res.`}<span className="text-yellow-300">json</span>{`({ `}<span className="text-cyan-300">received</span>{`: `}<span className="text-blue-400">true</span>{` });
});`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
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
export default function CoinCheckoutProject() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="relative">
      <HeroSection />
      
      {/* Toggle Button */}
      <div className="flex justify-center py-8">
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-200 dark:hover:bg-orange-900/50 border border-orange-200 dark:border-orange-800 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-medium text-orange-700 dark:text-orange-300">
            {showMore ? 'Show Less' : 'Show More Details'}
          </span>
          <motion.div
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-orange-600 dark:text-orange-400" />
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
            <ArchitectureSection />
            <FeaturesSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}