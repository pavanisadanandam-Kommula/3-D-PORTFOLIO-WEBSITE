'use client'

import { AnimatedBackground } from '@/components/shared/AnimatedBackground'
import { Navigation } from '@/components/shared/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { InternshipsSection } from '@/components/sections/InternshipsSection'
import { OfferLettersSection } from '@/components/sections/OfferLettersSection'
import { HackathonAchievementsSection } from '@/components/sections/HackathonAchievementsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { CertificatesSection } from '@/components/sections/CertificatesSection'
import { EmailDesignsSection } from '@/components/sections/EmailDesignsSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      {/* Content - relative to background */}
      <div className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <InternshipsSection />
        <OfferLettersSection />
        <HackathonAchievementsSection />
        <ProjectsSection />
        <CertificatesSection />
        <EmailDesignsSection />
        <AchievementsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 text-center text-gray-400">
          <p>
            © 2024 Kommula Pavani. All rights reserved. Built with React, Next.js, and
            Framer Motion.
          </p>
        </div>
      </footer>
    </main>
  )
}
