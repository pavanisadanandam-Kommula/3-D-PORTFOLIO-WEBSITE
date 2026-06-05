'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '@/lib/constants'
import { Section, SectionTitle, GlassmorphismCard } from '@/components/shared/Cards'
import { Trophy, Briefcase, Star, Code } from 'lucide-react'

export function AchievementsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return Trophy
      case 'offer':
        return Briefcase
      case 'academic':
        return Star
      case 'recognition':
        return Code
      default:
        return Trophy
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <Section id="achievements" className="relative">
      <SectionTitle
        title="Achievements & Awards"
        subtitle="Recognition and milestones in my career"
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {ACHIEVEMENTS.map((achievement, idx) => {
            const Icon = getIcon(achievement.type)
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassmorphismCard className="p-8 h-full hover:ring-2 hover:ring-blue-400 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm mb-3">
                    {achievement.date}
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <p className="text-gray-400 text-sm border-t border-white/10 pt-4">
                    {achievement.details}
                  </p>
                </GlassmorphismCard>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </Section>
  )
}
