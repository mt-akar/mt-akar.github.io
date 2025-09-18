'use client'

import WorkExperience from '@/components/WorkExperience'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContinueExploring, { continueExploringPresets } from '@/components/ContinueExploring'

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#0F1218] dark:bg-black overflow-x-hidden">
      <Header />
      <main className="text-white">
        <WorkExperience />
        <ContinueExploring {...continueExploringPresets.workExperience} />
      </main>
      <Footer />
    </div>
  )
}