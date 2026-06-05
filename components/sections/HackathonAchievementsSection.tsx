'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HACKATHON_ACHIEVEMENTS } from '@/lib/constants'
import { Section, SectionTitle, GlassmorphismCard } from '@/components/shared/Cards'
import { Award, Calendar, MapPin, Eye } from 'lucide-react'
import { EmailDesignModal } from '@/components/shared/EmailDesignModal'

export function HackathonAchievementsSection() {
  const [selectedAchievementId, setSelectedAchievementId] = useState<number | null>(null)
  const selectedAchievement = HACKATHON_ACHIEVEMENTS.find(
    (item) => item.id === selectedAchievementId
  )

  return (
    <Section id="hackathon-achievements" className="relative">
      <SectionTitle
        title="Hackathon Achievements"
        subtitle="Showcasing hackathon certificate highlights and awards"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {HACKATHON_ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard className="flex h-full flex-col p-6 hover:ring-2 hover:ring-blue-400 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 uppercase font-semibold tracking-[0.18em]">
                      Hackathon Certificate
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-blue-400 font-semibold text-sm mb-3">{achievement.event}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{achievement.summary}</p>

                <div className="flex flex-wrap gap-2 text-gray-400 text-sm mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {achievement.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {achievement.location}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedAchievementId(achievement.id)}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/20 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View Certificate
                </motion.button>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedAchievement && (
        <EmailDesignModal
          isOpen={Boolean(selectedAchievement)}
          onClose={() => setSelectedAchievementId(null)}
          imageUrl={selectedAchievement.image}
          title={`${selectedAchievement.title} Certificate`}
        />
      )}
    </Section>
  )
}
