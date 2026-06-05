'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { OFFER_LETTERS } from '@/lib/constants'
import { Section, SectionTitle, GlassmorphismCard } from '@/components/shared/Cards'
import { Eye, Briefcase, Calendar, MapPin } from 'lucide-react'
import { EmailDesignModal } from '@/components/shared/EmailDesignModal'

export function OfferLettersSection() {
  const [selectedLetterId, setSelectedLetterId] = useState<number | null>(null)
  const selectedLetter = OFFER_LETTERS.find((letter) => letter.id === selectedLetterId)

  return (
    <Section id="offer-letters" className="relative">
      <SectionTitle
        title="Internship Offer Letters"
        subtitle="Interactive previews of my internship offer letters"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {OFFER_LETTERS.map((letter, idx) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard
                className={`flex h-full flex-col p-6 transition-all duration-300 ${
                  selectedLetterId === letter.id ? 'ring-2 ring-blue-400' : 'hover:ring-2 hover:ring-blue-400'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 uppercase font-semibold tracking-[0.18em]">
                      Offer Letter
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{letter.company}</h3>
                <p className="text-blue-400 font-semibold text-sm mb-3">{letter.position}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{letter.summary}</p>

                <div className="flex flex-wrap gap-2 text-gray-400 text-sm mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {letter.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {letter.location}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedLetterId(letter.id)}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/20 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Preview Letter
                </motion.button>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedLetter && (
        <EmailDesignModal
          isOpen={Boolean(selectedLetter)}
          onClose={() => setSelectedLetterId(null)}
          imageUrl={selectedLetter.image}
          title={`${selectedLetter.company} Offer Letter`}
        />
      )}
    </Section>
  )
}
