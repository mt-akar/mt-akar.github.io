'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Shield, Cloud, Code, ExternalLink, CheckCircle, Award, ArrowRight, GraduationCap } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContinueExploring, { continueExploringPresets } from '@/components/ContinueExploring'
import Link from 'next/link'

interface Certification {
  name: string
  issuer: string
  date: string
  icon: any
  verificationUrl?: string
  eligibility?: string
  note?: string
}

const authorizationCertifications: Certification[] = [
  {
    name: 'ISO/IEC 27001 - Information Security Management',
    issuer: 'ICT Certify',
    date: '09/2020',
    icon: Shield,
    verificationUrl: 'https://drive.google.com/file/d/1VPttDsY61S75tRecHrWpROoN89AEU50j',
    eligibility: 'Qualified to implement, maintain, and audit Information Security Management Systems'
  },
  {
    name: 'ISO/IEC 15504 - SPICE Certification',
    issuer: 'ICT Certify',
    date: '09/2020',
    icon: Shield,
    verificationUrl: 'https://drive.google.com/file/d/1Ib77F7-07cj7idsMgdp2MNNl6uS1NT86',
    eligibility: 'Qualified to assess and improve software development processes according to international standards'
  },
  {
    name: 'ISO/IEC 15408 - Common Criteria Certification',
    issuer: 'ICT Certify',
    date: '09/2020',
    icon: Shield,
    verificationUrl: 'https://drive.google.com/file/d/1eekeW0YV724KiCCiu2RwCSBWe95Tb1-g',
    eligibility: 'Authorized to evaluate IT products for security assurance and certification'
  },
  {
    name: 'ISO/IEC 18045 - CEM Certification',
    issuer: 'ICT Certify',
    date: '09/2020',
    icon: Shield,
    verificationUrl: 'https://drive.google.com/file/d/1eekeW0YV724KiCCiu2RwCSBWe95Tb1-g',
    eligibility: 'Certified to conduct security evaluations using internationally recognized methodologies'
  }
]

const achievementCertifications: Certification[] = [
  {
    name: 'Designing Microsoft Azure Infrastructure Solutions (AZ-305)',
    issuer: 'Microsoft',
    date: '02/2024',
    icon: Cloud,
    eligibility: 'Eligible to design and implement enterprise-scale Azure solutions and infrastructure'
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '05/2022',
    icon: Cloud,
    verificationUrl: 'https://learn.microsoft.com/en-us/users/mustafaazyoksul-4790/transcript/v26wjhqylpqqjk1',
    eligibility: 'Demonstrates foundational knowledge of cloud services and Microsoft Azure'
  },
  {
    name: 'Fundamentals of Deep Learning For Computer Vision',
    issuer: 'Nvidia',
    date: '04/2018',
    icon: Code,
    eligibility: 'Proficiency in training convolutional neural networks.',
    note: 'Nvidia discontinued verification of this certificate'
  }
]

export default function CertificationsPage() {
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
      
      {/* Main Section */}
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
                Professional Certifications
              </span>
            </motion.h2>
          </div>

          {/* Content with scroll transforms */}
          <motion.div
            ref={containerRef}
            style={{ opacity, scale }}
          >
            {/* Authorization Certificates Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                Authorization Certificates
              </span>
            </h2>
          </motion.div>

          {/* Authorization Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {authorizationCertifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                  className="group"
                >
                  {/* Certificate Card with ornate border */}
                  <div className="relative h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                    {/* Decorative border frame */}
                    <div className="absolute inset-0 rounded-lg border-4 border-double border-violet-400/30 dark:border-violet-400/20" />
                    <div className="absolute inset-2 rounded-md border border-violet-400/20 dark:border-violet-400/10" />
                    
                    {/* Certificate content */}
                    <div className="relative p-8 flex flex-col h-full">
                      {/* Certificate Header with Seal */}
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-400/20 to-pink-600/20 border-2 border-violet-400/30 mb-3">
                          <Icon className="w-8 h-8 text-violet-600 dark:text-violet-400" />
                        </div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Authorization Certificate</h4>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center leading-tight">
                          {cert.name}
                        </h3>
                      </div>

                      {/* Issuer and Date with decorative line */}
                      <div className="text-center mb-4">
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">{cert.issuer}</span>
                          <span className="text-violet-500">•</span>
                          <span>{cert.date}</span>
                        </div>
                        <div className="mt-3 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
                      </div>

                      {/* Eligibility Section */}
                      {cert.eligibility && (
                        <div className="flex-grow mb-4">
                          <div className="text-center p-4 rounded-md bg-gradient-to-r from-violet-400/5 via-transparent to-violet-400/5">
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">
                              {cert.eligibility}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Bottom Section with Verification */}
                      <div className="mt-auto space-y-3">
                        {cert.verificationUrl && (
                          <div className="text-center">
                            <a
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-violet-700 dark:text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/30 hover:bg-violet-400/20 hover:border-violet-400/50 transition-all duration-200"
                            >
                              <CheckCircle className="w-3.5 h-3.5" />
                              Verify Authenticity
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-violet-400/30 rounded-tl-lg" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-violet-400/30 rounded-tr-lg" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-violet-400/30 rounded-bl-lg" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-violet-400/30 rounded-br-lg" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Achievement Declarations Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12 mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-gray-400 bg-clip-text text-transparent">
                Achievement Declarations
              </span>
            </h2>
          </motion.div>

          {/* Achievement Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievementCertifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                  className="group"
                >
                  {/* Certificate Card with ornate border */}
                  <div className="relative h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                    {/* Decorative border frame */}
                    <div className="absolute inset-0 rounded-lg border-4 border-double border-amber-400/30 dark:border-amber-400/20" />
                    <div className="absolute inset-2 rounded-md border border-amber-400/20 dark:border-amber-400/10" />
                    
                    {/* Certificate content */}
                    <div className="relative p-8 flex flex-col h-full">
                      {/* Certificate Header with Seal */}
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border-2 border-amber-400/30 mb-3">
                          <Icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Certificate of Achievement</h4>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center leading-tight">
                          {cert.name}
                        </h3>
                      </div>

                      {/* Issuer and Date with decorative line */}
                      <div className="text-center mb-4">
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">{cert.issuer}</span>
                          <span className="text-amber-500">•</span>
                          <span>{cert.date}</span>
                        </div>
                        <div className="mt-3 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
                      </div>

                      {/* Eligibility Section */}
                      {cert.eligibility && (
                        <div className="flex-grow mb-4">
                          <div className="text-center p-4 rounded-md bg-gradient-to-r from-amber-400/5 via-transparent to-amber-400/5">
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">
                              {cert.eligibility}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Bottom Section with Verification */}
                      <div className="mt-auto space-y-3">
                        {cert.verificationUrl && (
                          <div className="text-center">
                            <a
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/30 hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-200"
                            >
                              <CheckCircle className="w-3.5 h-3.5" />
                              Verify Authenticity
                            </a>
                          </div>
                        )}

                        {cert.note && (
                          <p className="text-center text-xs text-gray-500 dark:text-gray-500 italic">
                            * {cert.note}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400/30 rounded-tl-lg" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/30 rounded-tr-lg" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/30 rounded-bl-lg" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400/30 rounded-br-lg" />
                  </div>
                </motion.div>
              )
            })}
          </div>
          </motion.div>
        </div>
      </section>

      <ContinueExploring {...continueExploringPresets.certifications} />

      <Footer />
    </div>
  )
}