'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CERTIFICATES } from '@/lib/constants'
import { Section, SectionTitle, GlassmorphismCard } from '@/components/shared/Cards'
import { Download, ExternalLink, Award } from 'lucide-react'

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

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
    <Section id="certificates" className="relative">
      <SectionTitle
        title="Certifications"
        subtitle="Professional certifications and credentials"
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
            >
              <GlassmorphismCard
                className={`p-6 h-full cursor-pointer transition-all duration-300 ${
                  selectedCert === cert.id ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 uppercase font-semibold">
                      Certification
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 font-semibold text-sm mb-3">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm mb-4">{cert.date}</p>

                <motion.div
                  animate={{ height: selectedCert === cert.id ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden space-y-4"
                >
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-400 mb-3">Credential ID:</p>
                    <p className="text-sm font-mono text-gray-300 break-all">
                      {cert.credentialId}
                    </p>
                  </div>

                  {cert.image && (
                    <div className="pt-4 border-t border-white/10">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="w-full rounded-lg border border-white/10 mt-4 object-contain"
                      />
                    </div>
                  )}

                  {cert.title === "Project Completion Certificate - Smart Habit Tracker" && (
                    <div className="flex gap-2 pt-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500/20 text-blue-300 rounded text-sm font-semibold hover:bg-blue-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Verify
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-400/30 text-gray-300 rounded text-sm font-semibold hover:border-gray-300 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Certification Timeline
            </h3>
            <div className="space-y-6">
              {CERTIFICATES.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    {idx < CERTIFICATES.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-blue-400/50 to-transparent mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-6">
                    <p className="text-blue-400 font-bold text-lg mb-1">
                      {cert.date}
                    </p>
                    <p className="text-white font-semibold text-lg mb-1">
                      {cert.title}
                    </p>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassmorphismCard>
        </motion.div>

        {/* Skills gained section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <GlassmorphismCard className="p-8 text-center">
            <p className="text-gray-400 mb-4">
              All certifications validate my expertise in:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Cloud Architecture', 'Data Engineering', 'Full Stack Development'].map(
                (skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 font-semibold"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </Section>
  )
}
