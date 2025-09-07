'use client'

import WorkExperience from '@/components/WorkExperience'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, GraduationCap, Code } from 'lucide-react'

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <WorkExperience />
        
        {/* CTA Section */}
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
                  Explore More
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Discover the complete story
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Skills CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/#toolbox" className="block group h-full">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex flex-col h-full">
                      <Briefcase className="w-12 h-12 mb-4 text-cyan-600 dark:text-cyan-400" />
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        Technical Skills
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                        View my comprehensive technical toolkit and expertise
                      </p>
                      <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-medium mt-auto">
                        <span>View Skills</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Education CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/education" className="block group h-full">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600/10 to-pink-600/10 p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex flex-col h-full">
                      <GraduationCap className="w-12 h-12 mb-4 text-violet-600 dark:text-violet-400" />
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        Education
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                        Academic achievements and professional certifications
                      </p>
                      <div className="flex items-center text-violet-600 dark:text-violet-400 font-medium mt-auto">
                        <span>Continue Journey</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Projects CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/projects" className="block group h-full">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-600/10 to-yellow-400/10 p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex flex-col h-full">
                      <Code className="w-12 h-12 mb-4 text-pink-600 dark:text-pink-400" />
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        Featured Projects
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                        Explore my portfolio of innovative solutions
                      </p>
                      <div className="flex items-center text-pink-600 dark:text-pink-400 font-medium mt-auto">
                        <span>View Projects</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}