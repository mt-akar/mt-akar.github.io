'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

interface Experience {
  role: string
  company: string
  product?: string
  location: string
  period: string
  logo?: string
  projectUrl?: string
  highlights: string[]
  languages?: string[]
  tech?: string[]
  nonFunctional?: string[]
  metrics?: { value: string; label: string }[]
}

const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Kinesis Network Inc.',
    product: 'Kinesis Cloud',
    location: 'Seattle, WA, USA',
    period: '05/2024 - Current',
    logo: '/icons/kinesis.svg',
    highlights: [
      'Co-designed the data center management suite responsible for resource orchestration, auto-scaling, usage monitoring, security, and observability for Kinesis\' decentralized cloud infrastructure.',
      'Kept stakeholders well-informed by maintaining 50+ real-time key metrics on the Kinesis Explorer website by building a block interpreter and data ingestion pipeline for Kinesis Protocol on Base Network.',
      'Conceived the Kinesis SDK for better developer experience and to promote ecosystem expansion.',
    ],
    languages: ['Solidity', 'Go', 'C#', 'Rust', 'TypeScript', 'Python'],
    tech: ['Decentralized Compute', 'DePIN', 'LLM Inference', 'Kubernetes', 'Windows Hyper-V', 'Protocol Design'],
    nonFunctional: ['Technical Leadership', 'DX', 'Robustness', 'System Architecture', 'Observability'],
    metrics: [
      { value: '3', label: 'Projects Owned' },
      { value: '50+', label: 'Real-time Metrics Maintained' },
      { value: '1', label: 'SDK Shipped' },
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Time Base Six',
    product: 'C0D3R.org & Pocket Network',
    location: 'Seattle, WA, USA',
    period: '05/2022 - 05/2024',
    logo: '/icons/pocket-network.svg',
    highlights: [
      'Deployed and operated over 100 blockchain nodes across 26 networks, including major platforms like Ethereum, BSC, Polygon, Arbitrum, Avalanche, Base, Fantom, and Optimism, utilizing cloud providers AWS, Digital Ocean, Contabo, and OVH.',
      'Managed over 12,000 virtual machines running Pocket Network nodes, applying security protocols, performance enhancements, and automation frameworks to streamline operations.',
      'Operated cryptocurrency assets valued at over $10M.',
      'Automated the majority of the operational tasks for the node-running business, significantly increasing productivity and reducing the need for additional hires.',
      'Spearheaded the development of a crypto app development platform supporting 15+ blockchains in 3 geolocations, leveraging Solidity, AWS, Ubuntu, Azure DevOps, and Blazor. As the company\'s second monetizable product, it played a pivotal role in securing angel funding for future projects.',
      'Created an open-source C# SDK for crypto app development, supporting EVM and Pocket Network'
    ],
    languages: ['C#', 'Bash', 'JavaScript', 'Python', 'Solidity', 'Go'],
    tech: ['Blockchain RPC', 'DePIN', 'Cloud', 'SDK Development', 'Linux', 'MongoDB'],
    nonFunctional: ['Scaling', 'Automation', '24/7 Operations', 'Security','Cost Optimization', "In-house Entrepreneurship"],
    metrics: [
      { value: '26', label: 'Blockchain Networks Operated' },
      { value: '12K+', label: 'Total Nodes Ran' },
      { value: '$10M+', label: 'Assets Operated' },
    ]
  },
  {
    role: 'Full Stack Engineer',
    company: 'Test Maker',
    product: 'Test Maker',
    location: 'Ankara, Türkiye',
    period: '08/2021 - 05/2022',
    logo: '/icons/testmaker.png',
    highlights: [
      'Built a cloud-native multiple-choice-test typesetting app, replacing Adobe Illustrator for this in-demand use case, and sold subscriptions to 50+ experts, starting with Albiders’.',
      'Designed and implemented the application using Angular and ASP.NET.',
      'Orchestrated multi-stage CI/CD pipelines by containerizing all microservices using Docker and Azure Container Apps.',
      'Facilitated diagnosis by setting up structured logging using Serilog and Azure Monitor.'
    ],
    languages: ['JavaScript', 'TypeScript', 'C#'],
    tech: ['Docker', 'Microservices', 'Azure DevOps', 'MSSQL', 'Angular'],
    nonFunctional: ['Performance', 'User Experience'],
    metrics: []
  },
  {
    role: 'Founder & Technical Lead',
    company: 'Albiders',
    product: 'AI-Powered Education Platform',
    location: 'Ankara, Türkiye',
    period: '08/2020 - 05/2021',
    logo: '/icons/albiders.svg',
    highlights: [
      'Founded an AI-powered EdTech startup and led a cross-functional team of 17 (engineers, designers, educators, content creators) while managing diverse stakeholders from investors to educational specialists.',
      'Managed 3 freelance engineers through Waterfall methodology, developing backend with ASP.NET, MSSQL, and Azure Web App.',
      'Expanded platform to mobile by developing native Android app with offline video playback, picture-in-picture mode, and push notifications using Kotlin.',
      'Eliminated manual test syncing (~3 minutes/test) for students by building a computer vision module using OpenCV and Java to automatically scan and grade papers via mobile camera.',
      'Established project management and engineering practices using Azure DevOps for requirements tracking, CI/CD pipelines, and automated testing despite challenges with freelancer compliance.',
      'Written 1200+ pages of comprehensive documentation including proposals, architecture diagrams, requirements, acceptance criteria, design docs, API specs, and deployment guides.',
      'Successfully negotiated and executed equity sale to partner, completing exit after strategic disagreement on product direction.'
    ],
    languages: ['C#', 'Kotlin', 'Java', 'SQL', 'JavaScript'],
    tech: ['ASP.NET', 'Android', 'OpenCV', 'MSSQL', 'Git', 'Azure DevOps', 'Azure Web App'],
    nonFunctional: ['Entrepreneurship', 'Computer Vision', 'Freelancer Management', 'Project Management', 'Waterfall', 'Stakeholder Management', 'Exit Execution'],
    metrics: [
      { value: '17', label: 'Team Members Led' },
      { value: '1200+', label: 'Pages of Documentation' },
      { value: '1', label: 'Successful Exit' },
    ]
  },
  {
    role: 'Software Engineering Intern',
    company: 'ICT Certify',
    product: 'ISO/IEC 15504 (SPICE) Certification Tool',
    location: 'Ankara, Türkiye',
    period: '05/2020 - 08/2020',
    highlights: [
      'Shortened ISO/IEC 15504 - SPICE certification assessment process by 27%, directly reducing staff cost by leading a team of 4 developers to build a certification tool using ASP.NET, programmatic PDF generation, and MSSQL.',
      'Completed 4 different software quality certifications during internship: ISO/IEC 27001 (Information Security Management), ISO/IEC 15504 (SPICE), ISO/IEC 15408 (Common Criteria), and ISO/IEC 18045 (CEM), qualifying me to conduct professional assessments.',
      'Provided 6 months of post-internship technical support to the company, training new developers and advising on critical infrastructure and architecture decisions.',
    ],
    languages: ['C#', 'SQL', 'XML'],
    tech: ['ASP.NET', 'Open XML', 'MSSQL', 'ISO Standards', 'Process Assessment'],
    nonFunctional: ['Process Optimization', 'Team Leadership', 'Knowledge Transfer', 'Quality Assurance', 'Compliance'],
    metrics: [
      { value: '27%', label: 'Process Time Reduction' },
      { value: '4', label: 'ISO Certifications Earned' },
      { value: '6mo', label: 'Post-Employment Support' },
    ]
  },
  {
    role: 'iOS Developer Intern',
    company: 'Düzce Municipality',
    product: 'Beyaz Masa',
    location: 'Düzce, Türkiye',
    period: '05/2017 - 09/2017',
    projectUrl: 'https://apps.apple.com/us/app/beyazmasa-düzce/id1494943642',
    highlights: [
      'Solo-developed the complete iOS application for Düzce Municipality as an intern, app still in use 8+ years later.'
    ],
    languages: ['Objective-C', 'SQL'],
    tech: ['iOS', 'Xcode', 'UIKit', 'SQLite', 'VMware', 'MacOS VM'],
    nonFunctional: ['Resource Optimization', 'Government Compliance', 'Self-Sufficiency'],
    metrics: [
      { value: '100K+', label: 'Citizens Served' },
      { value: '8+', label: 'Years in Production' },
      { value: '1', label: 'Solo Developer' },
    ]
  }
]

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Removed opacity animation - it was making content unreadable on mobile
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1])

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-600/10 to-yellow-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            
          </motion.p>
        </div>

        {/* Timeline with scroll transforms */}
        <motion.div
          ref={containerRef}
          style={{ scale }}
          className="relative"
        >
          {/* Vertical Line - Now on the left */}
          <div className="hidden lg:block absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/20 via-violet-600/20 to-pink-600/20" />

          {/* Experience Cards */}
          <div className="space-y-6 lg:space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative flex items-start gap-4 lg:gap-6"
    >
      {/* Timeline Dot - positioned on the left */}
      <div className="hidden lg:flex absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full shadow-lg shadow-cyan-400/50 z-10 -translate-x-1/2">
        <div className="w-full h-full rounded-full animate-ping bg-cyan-400/30" />
      </div>

      {/* Card - now all cards are on the right */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        className="flex-1 lg:ml-12"
      >
        <div className="relative group">
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${
            isHovered 
              ? 'from-cyan-400/20 via-violet-600/20 to-pink-600/20' 
              : 'from-cyan-400/10 via-violet-600/10 to-pink-600/10'
          } rounded-2xl blur-xl transition-all duration-500`} />
          
          {/* Card Content */}
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {experience.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm mb-1">
                  <span className="font-semibold text-cyan-400">
                    {experience.company}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">
                    {experience.location}
                  </span>
                </div>
                {experience.product && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-violet-400">
                      {experience.product}
                    </span>
                    {experience.projectUrl && (
                      <a
                        href={experience.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                        aria-label="View project"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="font-medium">View Live</span>
                      </a>
                    )}
                  </div>
                )}
                <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/10 to-violet-600/10 border border-cyan-400/20">
                  <span className="text-sm font-medium text-cyan-400">
                    {experience.period}
                  </span>
                </div>
              </div>
              {/* Company Logo */}
              {experience.logo && (
                <div className="ml-4 w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-2 flex items-center justify-center">
                  <img 
                    src={experience.logo} 
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {experience.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Metrics */}
            {experience.metrics && experience.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                {experience.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Languages */}
            {experience.languages && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {experience.languages.map((lang, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
                      whileHover={{ scale: 1.08 }}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-indigo-900/30 text-indigo-300 border border-indigo-700/50"
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack & Non-Functional */}
            <div className="space-y-3">
              {experience.tech && (
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-400/10 to-violet-600/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
              {experience.nonFunctional && (
                <div className="flex flex-wrap gap-2">
                  {experience.nonFunctional.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-800/80 text-gray-400 border border-dashed border-gray-600"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}