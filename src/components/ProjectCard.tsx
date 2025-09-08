'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Code2, Layers, ChevronRight, Users, Trophy, Rocket } from 'lucide-react'
import Image from 'next/image'

export interface ProjectMetric {
  value: string
  label: string
  icon?: React.ElementType
}

export interface Project {
  id: string
  title: string
  subtitle?: string
  category: 'AI/ML' | 'Web3' | 'Infrastructure' | 'Mobile' | 'Library' | 'Game'
  context: string
  approach: string
  impact: string
  description?: string
  period?: string
  logo?: string
  screenshots?: string[]
  languages: string[]
  tech: string[]
  nonFunctional: string[]
  metrics?: ProjectMetric[]
  links?: {
    live?: string
    github?: string
    npm?: string
    nuget?: string
    pub?: string
    docs?: string
  }
  featured?: boolean
  gradient?: string
  artifacts?: string[]
  status?: 'Active' | 'Completed' | 'In Development'
}

interface ProjectCardProps {
  project: Project
  index: number
  variant?: 'default' | 'featured'
}

export default function ProjectCard({ project, index, variant = 'default' }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const isFeatured = variant === 'featured' || project.featured

  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'AI/ML':
        return {
          gradient: 'from-violet-600 to-purple-600',
          bg: 'bg-violet-600/10',
          text: 'text-violet-600 dark:text-violet-400',
          border: 'border-violet-600/20'
        }
      case 'Web3':
        return {
          gradient: 'from-cyan-600 to-blue-600',
          bg: 'bg-cyan-600/10',
          text: 'text-cyan-600 dark:text-cyan-400',
          border: 'border-cyan-600/20'
        }
      case 'Infrastructure':
        return {
          gradient: 'from-orange-600 to-red-600',
          bg: 'bg-orange-600/10',
          text: 'text-orange-600 dark:text-orange-400',
          border: 'border-orange-600/20'
        }
      case 'Mobile':
        return {
          gradient: 'from-green-600 to-emerald-600',
          bg: 'bg-green-600/10',
          text: 'text-green-600 dark:text-green-400',
          border: 'border-green-600/20'
        }
      case 'Library':
        return {
          gradient: 'from-indigo-600 to-blue-600',
          bg: 'bg-indigo-600/10',
          text: 'text-indigo-600 dark:text-indigo-400',
          border: 'border-indigo-600/20'
        }
      case 'Game':
        return {
          gradient: 'from-pink-600 to-rose-600',
          bg: 'bg-pink-600/10',
          text: 'text-pink-600 dark:text-pink-400',
          border: 'border-pink-600/20'
        }
    }
  }

  const colors = getCategoryColor(project.category)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`${isFeatured ? 'lg:col-span-2' : ''}`}
    >
      <div className="relative group h-full">
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${
          isHovered 
            ? project.gradient || 'from-cyan-400/20 via-violet-600/20 to-pink-600/20'
            : 'from-cyan-400/10 via-violet-600/10 to-pink-600/10'
        } rounded-2xl blur-xl transition-all duration-500`} />
        
        {/* Card Content */}
        <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-2xl h-full flex flex-col">
          
          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                {project.screenshots.map((screenshot, i) => (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={{
                      opacity: activeScreenshot === i ? 1 : 0,
                      scale: activeScreenshot === i ? 1 : 0.95
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Screenshot Navigation */}
              {project.screenshots.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveScreenshot(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeScreenshot === i
                          ? 'w-8 bg-white'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${colors.bg} ${colors.text} border ${colors.border} backdrop-blur-sm`}>
                  {project.category}
                </span>
              </div>

              {/* Status Badge */}
              {project.status && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="p-6 lg:p-8 flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className={`text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {project.subtitle}
                  </p>
                )}
                {project.period && (
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/10 to-violet-600/10 border border-cyan-400/20">
                    <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                      {project.period}
                    </span>
                  </div>
                )}
              </div>
              {project.logo && (
                <div className="ml-4 w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-2 flex items-center justify-center">
                  <img 
                    src={project.logo} 
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Context, Approach, Impact */}
            <div className="space-y-4 mb-6">
              {project.context && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Context</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.context}
                  </p>
                </div>
              )}
              
              {project.approach && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Approach</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              )}
              
              {project.impact && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Impact</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              )}
              
              {project.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className={`grid ${project.metrics.length > 3 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-3'} gap-4 mb-6`}>
                {project.metrics.map((metric, i) => {
                  const Icon = metric.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="text-center"
                    >
                      {Icon && <Icon className={`w-4 h-4 mx-auto mb-1 ${colors.text}`} />}
                      <div className={`text-xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            )}

            {/* Languages */}
            {project.languages && project.languages.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.languages.map((lang, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
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
            <div className="space-y-3 mb-6">
              {project.tech && project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-400/10 to-violet-600/10 text-cyan-700 dark:text-cyan-300 border border-cyan-400/30 dark:border-cyan-400/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
              {project.nonFunctional && project.nonFunctional.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.nonFunctional.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 border border-dashed border-gray-300 dark:border-gray-600"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              )}
            </div>

            {/* Links */}
            {project.links && (
              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${colors.bg} ${colors.text} border ${colors.border} hover:scale-105 transition-transform`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                )}
                {project.links.npm && (
                  <a
                    href={project.links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-700 hover:scale-105 transition-transform"
                  >
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">NPM</span>
                  </a>
                )}
                {project.links.nuget && (
                  <a
                    href={project.links.nuget}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-700 hover:scale-105 transition-transform"
                  >
                    <Layers className="w-4 h-4" />
                    <span className="text-sm font-medium">NuGet</span>
                  </a>
                )}
                {project.links.pub && (
                  <a
                    href={project.links.pub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform"
                  >
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Pub.dev</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}