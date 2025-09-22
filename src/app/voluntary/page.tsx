'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import { Heart, Users, Code, Globe, HandHeart, Calendar, ArrowRight, Sparkles, Target, Award, BookOpen, GitBranch, Zap, GraduationCap } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContinueExploring, { continueExploringPresets } from '@/components/ContinueExploring'
import Link from 'next/link'

// Animated counter component
function AnimatedCounter({ value, label, suffix = '', prefix = '' }: { value: number; label: string; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-gray-500 mt-2">{label}</div>
    </div>
  )
}

export default function VoluntaryPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const impactRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.7])

  const isHeroInView = useInView(heroRef, { once: true })
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 })
  const isImpactInView = useInView(impactRef, { once: true })

  const voluntaryExperiences = [
    {
      id: 'cointribute',
      title: 'Cointribute',
      role: 'Founder',
      organization: 'Cointribute Network',
      period: 'November 2022 - Present',
      duration: 'Ongoing',
      icon: HandHeart,
      gradient: 'from-pink-600/20 to-rose-600/20',
      hoverGradient: 'from-pink-600/30 to-rose-600/30',
      accentColor: 'text-pink-600 dark:text-pink-400',
      borderColor: 'border-pink-600/20',
      description: 'Founded and maintain a zero-fee crypto donation platform as a completely voluntary initiative. No salaries, no revenue, no hidden fees—just pure charitable infrastructure enabling worldwide crypto donations with full transparency.',
      highlights: [
        'Leveraged blockchain for social good and financial inclusion',
        'Built infrastructure enabling instant, transparent donations globally'
      ],
      impact: {
        charities: '8',
        donations: '$100K+',
        donors: '150+'
      },
      link: '/projects#cointribute',
      linkText: 'View Project Details'
    },
    {
      id: 'pocket',
      title: 'Pocket Network Foundation',
      role: 'Contributor & Vote Holder',
      organization: 'Pocket DAO',
      period: 'November 2022 - September 2024',
      duration: '1 year 10 months',
      icon: GitBranch,
      gradient: 'from-cyan-600/20 to-violet-600/20',
      hoverGradient: 'from-cyan-600/30 to-violet-600/30',
      accentColor: 'text-cyan-600 dark:text-cyan-400',
      borderColor: 'border-cyan-600/20',
      description: 'Contributing to the growth and sustainability of a decentralized infrastructure network through governance, technical development, and community mentorship.',
      highlights: [
        'Developed open-source network analysis tools for the community',
        'Actively participate in governance and protocol decisions',
        'Mentor novice node operators to ensure network resilience',
        'Contributed improvements to core blockchain repository'
      ],
      impact: {}
    },
    {
      id: 'teaching',
      title: 'Coding Education Initiative',
      role: 'Coding Trainer',
      organization: 'TÜSİAD & BTF',
      period: 'May 2018 - September 2019',
      duration: '1 year 5 months',
      icon: GraduationCap,
      gradient: 'from-amber-600/20 to-yellow-600/20',
      hoverGradient: 'from-amber-600/30 to-yellow-600/30',
      accentColor: 'text-amber-600 dark:text-amber-400',
      borderColor: 'border-amber-600/20',
      description: 'Volunteered as a coding trainer for elementary school students across multiple schools in Turkey. Designed and delivered hands-on programming workshops using scratch that made complex concepts accessible and fun for young learners.',
      highlights: [
        'Created fun, hands-on coding workshops for young students',
        'Taught programming basics and problem-solving skills',
        'Helped students see technology as a creative tool',
        'Made complex concepts accessible through games and projects'
      ],
      impact: {
        students: '100+',
        workshops: '20+'
      },
      personalNote: 'This experience came from my own journey with programming—it became such a natural part of how I think and create. Looking back, I realized how much earlier guidance would have helped me. That realization drove me to be that guide for the next generation, helping them discover their potential in technology.'
    }
  ]

  // Calculate total impact
  const totalImpact = {
    peopleReached: 150,
    projectsLed: 3,
    yearsActive: 6,
    hoursVolunteered: 500
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0F1218] dark:bg-black text-white overflow-x-hidden">
      <Header />

      <main className="relative">
        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
          {/* Animated background gradients */}
          <motion.div
            style={{ y: y1 }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-r from-amber-400/10 via-orange-600/10 to-rose-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-l from-cyan-400/10 via-violet-600/10 to-pink-600/10 rounded-full blur-3xl" />
          </motion.div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
                  Voluntary Experiences
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
              >
                Technology's greatest power lies not in what it can do, but in who it can help.
                Every line of code is an opportunity to create lasting positive impact.
              </motion.p>

            </motion.div>
          </div>
        </section>

        {/* Philosophy Quote Section */}
        <section className="relative py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/10 via-transparent to-rose-600/10 blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 md:p-12">
                <Sparkles className="w-8 h-8 text-amber-400 mb-6" />
                <blockquote className="text-lg md:text-xl font-medium text-gray-300 italic mb-4">
                  "Those who came before us built the foundations that empower us today. It's our responsibility to strengthen these foundations for future generations and extend our reach to those in need. True progress means lifting others as we climb."
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-600" />
                  <p className="text-gray-500">Personal Philosophy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Voluntary Experiences Cards */}
        <section ref={cardsRef} className="relative py-16">
          <motion.div
            style={{ y: y2 }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/5 to-cyan-400/5 rounded-full blur-3xl" />
          </motion.div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="space-y-12">
              {voluntaryExperiences.map((experience, index) => {
                const Icon = experience.icon
                return (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="relative group"
                  >
                    {/* Card glow effect on hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${experience.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800 overflow-hidden">
                      {/* Accent bar */}
                      <div className={`h-1 bg-gradient-to-r ${experience.gradient.replace('/20', '')}`} />

                      {/* Placeholder Image */}
                      <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                          <div className="text-center z-0">
                            <Icon className="w-16 h-16 mx-auto mb-3 opacity-30" />
                            <p className="text-sm opacity-50">Charity Work Photo</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 md:p-10">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                          <div className="flex items-start gap-4 mb-4 md:mb-0">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${experience.gradient} flex items-center justify-center flex-shrink-0`}
                            >
                              <Icon className={`w-7 h-7 ${experience.accentColor}`} />
                            </motion.div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">
                                {experience.title}
                              </h3>
                              <p className="text-lg font-medium text-gray-400">
                                {experience.role}
                              </p>
                              <p className="text-sm text-gray-500 mt-1">
                                {experience.organization} • {experience.period}
                              </p>
                            </div>
                          </div>

                          {/* Duration badge */}
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${experience.gradient} border ${experience.borderColor}`}>
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-300">{experience.duration}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Personal Note (if exists) */}
                        {experience.personalNote && (
                          <div className={`p-4 rounded-lg bg-gradient-to-r ${experience.gradient} border ${experience.borderColor} mb-6`}>
                            <p className="text-sm text-gray-300 italic">
                              {experience.personalNote}
                            </p>
                          </div>
                        )}

                        {/* Highlights */}
                        <div className="grid md:grid-cols-2 gap-3 mb-8">
                          {experience.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={hIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isCardsInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + hIndex * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <Target className={`w-4 h-4 mt-1 flex-shrink-0 ${experience.accentColor}`} />
                              <span className="text-sm text-gray-400">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Impact Metrics */}
                        {Object.keys(experience.impact).length > 0 && (
                          <div className={`grid ${Object.keys(experience.impact).length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4 mb-6`}>
                            {Object.entries(experience.impact).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className={`text-2xl font-bold ${experience.accentColor}`}>
                                  {value}
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Link (if exists) */}
                        {experience.link && (
                          <Link
                            href={experience.link}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${experience.gradient} border ${experience.borderColor} hover:bg-white/5 transition-all duration-300 group/link`}
                          >
                            <span className="text-sm font-medium text-gray-300">
                              {experience.linkText}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <ContinueExploring {...continueExploringPresets.voluntary} />
      </main>

      <Footer />
    </div>
  )
}