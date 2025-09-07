'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, GraduationCap, Code, Shield, Heart, Rocket, Award } from 'lucide-react'

export type CardId = 'skills' | 'education' | 'projects' | 'certifications' | 'voluntary' | 'experience'

interface CTACard {
  id: CardId
  href: string
  icon: React.ElementType
  title: string
  description: string
  gradient: string
  hoverGradient: string
  iconColor: string
  textColor: string
  linkText?: string
}

// Define all available cards
const allCards: Record<CardId, CTACard> = {
  skills: {
    id: 'skills',
    href: '/#toolbox',
    icon: Briefcase,
    title: 'Technical Skills',
    description: 'View my comprehensive technical toolkit and expertise',
    gradient: 'from-cyan-400/10 to-violet-600/10',
    hoverGradient: 'from-cyan-400/20 to-violet-600/20',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    linkText: 'View Skills'
  },
  education: {
    id: 'education',
    href: '/education',
    icon: GraduationCap,
    title: 'Education',
    description: 'Academic achievements and professional certifications',
    gradient: 'from-violet-600/10 to-pink-600/10',
    hoverGradient: 'from-violet-600/20 to-pink-600/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
    textColor: 'text-violet-600 dark:text-violet-400',
    linkText: 'Continue Journey'
  },
  projects: {
    id: 'projects',
    href: '/projects',
    icon: Code,
    title: 'Featured Projects',
    description: 'Explore my portfolio of innovative solutions',
    gradient: 'from-orange-400/10 to-red-600/10',
    hoverGradient: 'from-orange-400/20 to-red-600/20',
    iconColor: 'text-orange-600 dark:text-orange-400',
    textColor: 'text-orange-600 dark:text-orange-400',
    linkText: 'View Projects'
  },
  certifications: {
    id: 'certifications',
    href: '/certifications',
    icon: Shield,
    title: 'Certifications',
    description: 'Professional credentials and authorizations',
    gradient: 'from-amber-400/10 to-orange-600/10',
    hoverGradient: 'from-amber-400/20 to-orange-600/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    textColor: 'text-amber-600 dark:text-amber-400',
    linkText: 'View Certifications'
  },
  voluntary: {
    id: 'voluntary',
    href: '/voluntary',
    icon: Heart,
    title: 'Voluntary Work',
    description: 'Community contributions and open-source involvement',
    gradient: 'from-pink-600/10 to-purple-600/10',
    hoverGradient: 'from-pink-600/20 to-purple-600/20',
    iconColor: 'text-pink-600 dark:text-pink-400',
    textColor: 'text-pink-600 dark:text-pink-400',
    linkText: 'View Contributions'
  },
  experience: {
    id: 'experience',
    href: '/experience',
    icon: Rocket,
    title: 'Work Experience',
    description: 'Professional journey and achievements',
    gradient: 'from-indigo-400/10 to-purple-600/10',
    hoverGradient: 'from-indigo-400/20 to-purple-600/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    linkText: 'View Experience'
  }
}

interface ContinueExploringProps {
  subtitle?: string
  cardIds?: CardId[]
}

const defaultCardIds: CardId[] = ['skills', 'education', 'projects']

export default function ContinueExploring({ 
  subtitle = 'Discover the complete story',
  cardIds = defaultCardIds 
}: ContinueExploringProps) {
  const cards = cardIds.map(id => allCards[id]).filter(Boolean)
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-600 to-pink-600 bg-clip-text text-transparent">
              Continue Exploring
            </span>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Link href={card.href} className="block group h-full">
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative flex flex-col h-full">
                      <Icon className={`w-12 h-12 mb-4 ${card.iconColor}`} />
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                        {card.description}
                      </p>
                      <div className={`flex items-center ${card.textColor} font-medium mt-auto`}>
                        <span>{card.linkText || 'Learn More'}</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Export preset configurations for different pages
export const continueExploringPresets = {
  workExperience: {
    subtitle: 'Discover the complete story',
    cardIds: ['skills', 'education', 'projects'] as CardId[]
  },
  education: {
    subtitle: undefined,
    cardIds: ['projects', 'certifications', 'voluntary'] as CardId[]
  },
  certifications: {
    subtitle: undefined,
    cardIds: ['education', 'projects', 'voluntary'] as CardId[]
  }
}