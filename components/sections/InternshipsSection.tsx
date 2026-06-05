'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { INTERNSHIPS } from '@/lib/constants'
import { Section, SectionTitle, GlassmorphismCard, Badge } from '@/components/shared/Cards'
import { MapPin, Calendar, CheckCircle } from 'lucide-react'

export function InternshipsSection() {
  const [expandedId, setExpandedId] = useState(INTERNSHIPS[0].id)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <Section id="internships" className="relative">
      <SectionTitle
        title="Professional Experience"
        subtitle="Internships and projects that shaped my career"
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {INTERNSHIPS.map((internship, idx) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard
                className={`p-6 md:p-8 cursor-pointer transition-all duration-300 ${
                  expandedId === internship.id ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() =>
                  setExpandedId(expandedId === internship.id ? -1 : internship.id)
                }
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {internship.company}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg">
                        {internship.position}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {internship.duration_short}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {internship.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-base leading-relaxed">
                    {internship.description}
                  </p>
                </div>

                {/* Expandable content */}
                <motion.div
                  animate={{ height: expandedId === internship.id ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-white/10 space-y-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {internship.achievements.map((achievement, aidx) => (
                          <motion.li
                            key={aidx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              expandedId === internship.id
                                ? { opacity: 1, x: 0 }
                                : {}
                            }
                            transition={{ delay: aidx * 0.1 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, tidx) => (
                          <motion.div
                            key={tidx}
                            initial={{ opacity: 0 }}
                            animate={
                              expandedId === internship.id ? { opacity: 1 } : {}
                            }
                            transition={{ delay: tidx * 0.05 }}
                          >
                            <Badge text={tech} variant="primary" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Expand indicator */}
                <motion.div
                  animate={{ rotate: expandedId === internship.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-center text-gray-400 text-sm font-semibold"
                >
                  {expandedId === internship.id ? '▲ Collapse' : '▼ Expand'}
                </motion.div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  )
}
