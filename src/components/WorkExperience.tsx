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
      'Co-designed the data center management suite responsible for resource orchestration, auto-scaling, usage monitoring, security, and observability for Kinesis\' decentralized cloud infra.',
      'Satisfied stakeholders by maintaining 50+ key metrics in real-time on the Kinesis Explorer website by building a block interpreter for Kinesis Protocol on Base Network.',
      'Conceived the Kinesis SDK for better developer experience and to promote ecosystem expansion.',
    ],
    languages: ['Solidity', 'Go', 'C#', 'Rust', 'TypeScript', 'Python'],
    tech: ['Decentralized Compute', 'DePIN', 'LLM Inference', 'Kubernetes', 'Windows Hyper-V', 'Protocol Design'],
    nonFunctional: ['Technical Leadership', 'DX', 'Robustness', 'System Architecture', 'Observability'],
    metrics: [
      { value: '3', label: 'Projects Owned' },
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Time Base Six',
    product: 'Pocket Network',
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
      { value: '26', label: 'Blockchains' },
      { value: '12K+', label: 'VMs Managed' },
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
      'Designed and implemented a fully interactive test page typesetting experience using Angular and ASP.NET.',
      'Orchestrated multi-stage CI/CD pipelines by containerizing all microservices using Docker and Azure Container Apps.',
      'Facilitated diagnosis by setting up structured logging using Serilog and Azure Monitor'
    ],
    languages: ['JavaScript', 'TypeScript', 'C#'],
    tech: ['Docker', 'Microservices', 'Azure DevOps', 'MSSQL', 'Angular'],
    nonFunctional: ['Performance', 'User Experience'],
    metrics: []
  },
  {
    role: 'Software Engineering Intern',
    company: 'Atlassian',
    product: 'Jira',
    location: 'Ankara, Türkiye',
    period: '05/2020 - 09/2020',
    logo: '/icons/atlassian.svg',
    highlights: [
      'Developed a new feature for Jira Cloud iOS application using Objective-C.',
      'Collaborated with cross-functional teams to implement user-facing features and improve app performance.',
      'Participated in structured scrum meetings and code reviews.'
    ],
    languages: ['Objective-C', 'Swift', 'SQL'],
    tech: ['Git', 'Jira', 'iOS', 'SQLite'],
    nonFunctional: ['Agile', 'Cross-functional Collaboration', 'Code Review'],
    metrics: []
  }
]

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

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
            <span className="bg-gradient-to-r from-cyan-400 via-violet-600 to-pink-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Building the future of decentralized infrastructure and artificial intelligence
          </motion.p>
        </div>

        {/* Timeline with scroll transforms */}
        <motion.div 
          ref={containerRef}
          style={{ opacity, scale }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400/20 via-violet-600/20 to-pink-600/20" />

          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-24">
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

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Timeline Dot */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full shadow-lg shadow-cyan-400/50 z-10">
        <div className="w-full h-full rounded-full animate-ping bg-cyan-400/30" />
      </div>

      {/* Card */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        className={`flex-1 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}
      >
        <div className="relative group">
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${
            isHovered 
              ? 'from-cyan-400/20 via-violet-600/20 to-pink-600/20' 
              : 'from-cyan-400/10 via-violet-600/10 to-pink-600/10'
          } rounded-2xl blur-xl transition-all duration-500`} />
          
          {/* Card Content */}
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {experience.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm mb-1">
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    {experience.company}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {experience.location}
                  </span>
                </div>
                {experience.product && (
                  <div className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-1">
                    {experience.product}
                  </div>
                )}
                <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/10 to-violet-600/10 border border-cyan-400/20">
                  <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
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
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
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
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-indigo-100/60 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/50"
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
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-400/10 to-violet-600/10 text-cyan-700 dark:text-cyan-300 border border-cyan-400/30 dark:border-cyan-400/20"
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
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 border border-dashed border-gray-300 dark:border-gray-600"
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

      {/* Empty space for timeline alignment */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  )
}