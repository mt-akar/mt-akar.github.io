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

  const architectureComponents = [
    {
      title: "Smart Contract Architecture",
      icon: Code2,
      mainContent: "Non-custodial payment infrastructure where funds flow directly to merchant wallets without touching platform contracts. Non-upgradeable contracts provide immutable security properties - the audited code remains unchanged in perpetuity. Direct-to-merchant payment flow removes platform from the custody chain. Merchant-sponsored gas fees allow businesses to cover approval costs for their customers."
    },
    {
      title: "Oracle-Powered Compliance",
      icon: Activity,
      mainContent: "Chainlink price oracles provide verifiable, tamper-proof on-chain exchange rates. This architecture removes the platform from price determination, reducing liability and compliance requirements. Cross-currency pricing enables merchants to price in USD, ETH, BTC, etc., accept any supported token, and pay out in their preferred payout currency, with oracle-verified rates ensuring transparent pricing across all transactions over all supported networks."
    },
    {
      title: "Universal Wallet Access",
      icon: Wallet,
      mainContent: "WalletConnect v2 provides standardized, secure connections to over 500 self-custody web3 wallet applications. Direct integrations with centralized exchange payment options including Binance Pay and Coinbase Pay completes comprehensive payment coverage. Mobile deep linking creates seamless payment flows where customers complete transactions without app switching."
    },
    {
      title: "Immutable Audit Trail",
      icon: Shield,
      mainContent: "Every transaction, webhook, and merchant action is cryptographically logged and anchored to Polygon blockchain. Daily merkle tree snapshots create tamper-proof audit trails for each merchant. System-wide merkle roots are recorded every 10 minutes. This architecture provides cryptographic proof of all platform operations and enables independent verification of transaction history."
    },
    {
      title: "Developer-First API",
      icon: Settings,
      mainContent: "RESTful API with idempotency keys ensures operations produce consistent outcomes despite network interruptions. SDKs available in TypeScript, Python, and C# implement common patterns for payment processing. Webhooks are cryptographically signed to prevent replay attacks and ensure data integrity. Comprehensive documentation and example implementations accelerate integration."
    }
  ]

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
            Enterprise-grade infrastructure built for scale, security, and compliance
          </p>
        </motion.div>

        {/* Two Column Architecture Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {architectureComponents.map((component, index) => {
            const Icon = component.icon
            const isLastItem = index === architectureComponents.length - 1

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${isLastItem ? 'md:col-span-2' : ''}`}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden h-full">
                  {/* Orange accent bar */}
                  <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600" />

                  <div className="p-8">
                    {/* Header with aligned icon and title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 flex-shrink-0">
                        <Icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {component.title}
                      </h3>
                    </div>

                    {/* Main Content */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {component.mainContent}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Section 3: Implementation & Developer Experience
function ImplementationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Live Implementations
          </h2>
        </motion.div>

        {/* Implementation Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-8 mb-12"
        >
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

        {/* Supported Networks & Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="bg-white dark:bg-gray-900 rounded-xl p-8 mb-12 shadow-lg border border-gray-200 dark:border-gray-800"
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
            <ImplementationSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}