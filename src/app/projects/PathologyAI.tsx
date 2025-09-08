'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Brain, Clock, TrendingUp, Users, 
  FileText, Database, Cpu, 
  CheckCircle, Building2,
  Zap, Network, BarChart3,
  ArrowRight, GitBranch, Timer,
  Sparkles, MessageCircle, Shield, RefreshCw,
  ChevronDown
} from 'lucide-react'

// Section 1: Hero/Overview
function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center py-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/20 dark:to-purple-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 mb-6">
              <Brain className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm font-medium text-violet-700 dark:text-violet-300">AI-Powered Medical Research</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Pathology AI
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Automated data extraction, analysis and visualization of pathology reports. Reduces 80 hour data preparation process to 3 hours with 100% accuracy.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Problem</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Pathologists spend 80+ hours per research paper manually extracting and analyzing data from PDF reports.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Solution</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  AI pipeline that extracts data with 100% accuracy using optimized prompt engineering, 
                  enabling statistical analysis and visualization in minutes instead of weeks.
                </p>
              </div>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">616</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hours Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Extraction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Papers in Pipeline</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Technical Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-6">Processing Pipeline</h3>
              
              {/* Pipeline Flow */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <FileText className="w-8 h-8 text-violet-600 dark:text-violet-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Input</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Digital pathology reports (PDF)</div>
                  </div>
                </div>
                
                <div className="ml-4 border-l-2 border-violet-300 dark:border-violet-700 h-6" />
                
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Cpu className="w-8 h-8 text-violet-600 dark:text-violet-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Processing</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Gemini 2.5 Pro with optimized prompts</div>
                  </div>
                </div>
                
                <div className="ml-4 border-l-2 border-violet-300 dark:border-violet-700 h-6" />
                
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Database className="w-8 h-8 text-violet-600 dark:text-violet-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Output</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Research-ready datasets in MongoDB</div>
                  </div>
                </div>
                
                <div className="ml-4 border-l-2 border-violet-300 dark:border-violet-700 h-6" />
                
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <BarChart3 className="w-8 h-8 text-violet-600 dark:text-violet-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Analysis</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Python and Claude Sonnet 4 for analysis & visualization</div>
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
      title: "Problem Discovery",
      date: "Phase 1",
      content: "During consultation with a pathologist, identified they were spending 80+ hours per research paper on manual data extraction from PDF reports. There were no tools available for this purpose.",
      metrics: {
        "Time per paper": "80 hours",
        "Manual process": "Copy-paste from PDFs",
        "Error rate": "Variable"
      }
    },
    {
      title: "Proof of Concept",
      date: "Phase 2",
      content: "Due to strict privacy rules of the institution, I built initial data extraction process on personal RTX 2070S GPU. Applied iterative prompt engineering with Gemini 2.5 Pro. During the PoC stage, the system processed 980 pathology reports with 100% accuracy, meaning that the original report and the extracted and structured data were always consistent.",
      metrics: {
        "Hardware": "RTX 2070S",
        "Processing": "10 reports in 2 hours",
        "Reports processed": "980",
        "Accuracy": "100%",
      }
    },
    {
      title: "Validation",
      date: "Phase 3", 
      content: "Initial system powered 1 research paper, currently in submission. The pathologist only spent a few minutes looking at the results each iteration of the prompt, totaling to around 3 hours. With the final version, they have have their paper approved by their professor and submitted for publication. The data processing representing 50% of the total article publication efforts, around 48% of the total time is saved.",
      metrics: {
        "Time per paper": "3 hours",
        "Time saved on data processing": "96%",
        "Time saved on publication": "48%"
      }
    },
    {
      title: "Extra Suggestions",
      date: "Phase 3.1", 
      content: "The Pathology AI suggested data visualizations and analysis methods otherwise not considered by the pathologist, making interesting but otherwise easily looked over results stand out. During our proof of concept stage, a specific suggestion made by the system initiated a discussion among the pathologist and their peers, and resulted in an entire section of the paper being added.",
      metrics: {
        "Original sections": "1"
      }
    },
    {
      title: "Institutional Adoption",
      date: "Phase 4",
      content: "Presented ROI analysis to university leadership. Secured grant for NVIDIA A100, achieving 7.5x speed improvement over initial hardware. Powered preparation of 7 more research papers, all currently in submission, reducing time from 80 hours to around 3 hours each. Overall time saved is 616 hours.",
      metrics: {
        "Hardware": "NVIDIA A100",
        "Report processing speed": "7.5x",
        "Paper count": "8",
        "Total time saved": "616 hours"
      }
    },
    {
      title: "Current Status",
      date: "Phase 5",
      content: "Live at one institution processing pathology reports daily. Second institution deployment in progress. Supporting 3 types of pathology reports, ~90 raw data points, 20+ advanced statistical analysis methods, and 40+ data visualizations.",
      metrics: {
        "Live deployment": "1 A100",
        "In pipeline": "1", 
        "Report formats": "3",
        "Raw data points": "90",
        "Statistical analysis methods": "20+",
        "Data visualizations": "40+"
      }
    }
  ]

  const currentPhase = phases[activePhase]

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
            Timeline
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From problem discovery to institutional deployment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Timeline Navigation - Desktop sidebar, mobile grid */}
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
                      ? 'bg-violet-100 dark:bg-violet-900/30 border-b-2 border-violet-600'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className={`text-xs font-medium ${
                    activePhase === index ? 'text-violet-700 dark:text-violet-300' : 'text-gray-700 dark:text-gray-300'
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
                      ? 'bg-violet-100 dark:bg-violet-900/30 border-l-4 border-violet-600'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium ${
                        activePhase === index ? 'text-violet-700 dark:text-violet-300' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {phase.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{phase.date}</div>
                    </div>
                    {activePhase === index && (
                      <ArrowRight className="w-5 h-5 text-violet-600 dark:text-violet-400" />
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
                    <div className="text-xl font-semibold text-violet-600 dark:text-violet-400">{value}</div>
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

// Section 3: Testimonials
function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      quote: "The Pathology AI made spotting correlations I wouldn't manually check trivial, leading to an entirely new section in our paper.",
      attribution: "Senior Pathologist",
      institution: "University Medical Center"
    },
    {
      quote: "Manually processing data for an academic paper would take 80 focused hours. With the Pathology AI, it takes 3 enjoyable hours.",
      attribution: "Research Fellow",
      institution: "Pathology Department"
    },
    {
      quote: "I was surprised to see that many of the visualizations I was planning to put into my paper were generated by default. You can dive deeper into any of them, which used to be weeks of work.",
      attribution: "Lead Researcher",
      institution: "Medical Institution"
    }
  ]

  return (
    <section ref={ref} className="relative pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            User Feedback
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
            >
              {/* Subtle quote mark in background */}
              <div className="absolute top-4 left-4 text-6xl text-violet-100 dark:text-violet-900/30 font-serif select-none">"</div>
              
              <div className="relative z-10">
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  {testimonial.quote}
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {testimonial.attribution}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.institution}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Section 4: Performance & Impact
function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const performanceData = [
    {
      metric: "Extraction Speed",
      details: [
        { label: "Manually", value: "10 reports in 25 minutes" },
        { label: "NVIDIA A100", value: "10 reports in 16 minutes" },
        { label: "Speed improvement", value: "100% in manual labor" }
      ]
    },
    {
      metric: "Analysis Speed",
      details: [
        { label: "Manually", value: "10 reports in 25 minutes" },
        { label: "Python", value: "1000 reports in 5 minutes" },
        { label: "Speed improvement", value: "98%" }
      ]
    },
    {
      metric: "Publication Speed",
      details: [
        { label: "Manually", value: "160 hours" },
        { label: "Pathology AI", value: "83 hours" },
        { label: "Speed improvement", value: "48%" }
      ]
    },
    {
      metric: "Coverage", 
      details: [
        { label: "Report formats", value: "3" },
        { label: "Raw data points", value: "~90" },
        { label: "Statistical analysis methods", value: "20+" },
        { label: "Data visualizations", value: "40+" }
      ]
    },
    {
      metric: "Accuracy",
      details: [
        { label: "Extraction", value: "100%" },
        { label: "Analysis", value: "100%" },
        { label: "Visualization", value: "100%" }
      ]
    },
    {
      metric: "Current Status",
      details: [
        { label: "Publications powered", value: "8" },
        { label: "Time saved", value: "616 hours" },
        { label: "Live deployment", value: "1" },
        { label: "In pipeline", value: "1" }
      ]
    }
  ]

  const techStack = [
    'Python', 'Gemini 2.5 Pro', 'Claude Sonnet 4', 'MongoDB', 'NVIDIA A100', 'Digital Ocean'
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
            Performance & Impact
          </h2>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-6 mb-12"
        >
          {performanceData.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">{category.metric}</h3>
              <div className="space-y-3">
                {category.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{detail.label}</span>
                    <span className="text-sm font-medium text-violet-600 dark:text-violet-400">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-8 mb-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Suggests analysis approaches not initially considered by researchers</span>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Identifies patterns and correlations that might be overlooked in manual analysis</span>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Generates publication-ready visualizations and statistical outputs</span>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Provides iterative refinement through conversational queries</span>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Maintains full audit trail for research reproducibility</span>
            </div>
            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Adapts to different pathology report formats without retraining</span>
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
export default function PathologyAIProject() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="relative">
      <HeroSection />
      
      {/* Toggle Button */}
      <div className="flex justify-center py-8">
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-100 dark:bg-violet-900/30 hover:bg-violet-200 dark:hover:bg-violet-900/50 border border-violet-200 dark:border-violet-800 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-medium text-violet-700 dark:text-violet-300">
            {showMore ? 'Show Less' : 'Show More Details'}
          </span>
          <motion.div
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-violet-600 dark:text-violet-400" />
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
            <TestimonialsSection />
            <ImpactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}