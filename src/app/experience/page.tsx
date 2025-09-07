'use client'

import WorkExperience from '@/components/WorkExperience'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContinueExploring, { continueExploringPresets } from '@/components/ContinueExploring'

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <WorkExperience />
        <ContinueExploring {...continueExploringPresets.workExperience} />
      </main>
      <Footer />
    </>
  )
}