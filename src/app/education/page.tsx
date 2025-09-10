'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { GraduationCap, Trophy, Calendar, CheckCircle, Medal } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContinueExploring, { continueExploringPresets } from '@/components/ContinueExploring'

export default function EducationPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      {/* Education Section - Single section like Work Experience */}
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
                Education
              </span>
            </motion.h2>
          </div>
          {/* Content with scroll transforms */}
          <motion.div
            ref={containerRef}
            style={{ opacity, scale }}
          >
            {/* Education Card - Similar to Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-violet-600/20 to-pink-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              {/* Header with gradient accent */}
              <div className="h-2 bg-gradient-to-r from-cyan-400 to-violet-600" />
              
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        Bilkent University
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        BSc in Computer Science
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        2016 - 2021 • Ankara
                      </p>
                    </div>
                  </div>
                </div>

                {/* First Place Achievement - Subtle but prominent */}
                <div className="mb-2 p-4 rounded-xl bg-gradient-to-r from-yellow-400/10 via-cyan-400/10 to-violet-600/10 border border-yellow-400/20">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                    <div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        First Placement in the Department
                      </span>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">
                        • Top-ranked graduate from the nation's premier CS program
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mathematics Olympiad Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <h3 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Mathematics Olympiad Achievements
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* National Mathematics Olympiad - Bronze Medal (More Prestigious) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-amber-700/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600/30 to-amber-700/30 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-7 h-7 text-amber-700 dark:text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        National Mathematics Olympiad
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-amber-700 dark:text-amber-600">Bronze Medal</span> • TÜBİTAK, Ankara
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        11/2013
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 flex-grow">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-600/20">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        THE national mathematics competition in Turkey, serving as the second selection stage 
                        for the International Mathematical Olympiad (IMO) team. This achievement placed me among the top mathematical 
                        minds in the nation.
                      </p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        This achievement provided:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Additional points in national university entrance exam</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Full scholarship for entire university education</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mediterranean Mathematics Olympiad - Silver Medal */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative group h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-300/20 to-slate-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-300/30 to-slate-400/30 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-7 h-7 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        Mediterranean Mathematics Olympiad
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-slate-600 dark:text-slate-400">Silver Medal</span> • Akdeniz University, Antalya
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        05/2014
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Context about olympiad significance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 p-4 rounded-lg bg-gradient-to-r from-violet-600/5 via-cyan-400/5 to-pink-600/5 border border-gray-200 dark:border-gray-800"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                <span className="font-semibold">Mathematics olympiads</span> are among the most prestigious academic competitions, 
                testing advanced problem-solving, logical reasoning, and creative thinking—skills that directly translate to 
                algorithm design, system architecture, and complex software engineering challenges. Additionally, to this day, mathemathics has stayed a great passion of mine.
              </p>
            </motion.div>
          </motion.div>
          </motion.div>
        </div>
      </section>

      <ContinueExploring {...continueExploringPresets.education} />

      <Footer />
    </div>
  )
}