'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { EMAIL_DESIGNS } from '@/lib/constants'
import { Eye } from 'lucide-react'
import { EmailDesignModal } from '@/components/shared/EmailDesignModal'

const impactMetrics = [
  { label: 'HYGIENIC HUT GRAND OPENING', open: '62.5%', ctr: '21.3%' },
  { label: 'TEAM BUILDING INVITATION', open: '58.9%', ctr: '19.8%' },
  { label: 'HEALTHY TABLE HOSTEL', open: '64.2%', ctr: '22.7%' },
]

export function EmailDesignsSection() {
  const [selectedDesign, setSelectedDesign] = useState<{
    id: number
    thumbnail: string
    title: string
  } | null>(null)

  return (
    <section id="email-designs" className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest">04 // MAIL MARKETING SCHEMATICS</p>
        </motion.div>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center text-white mb-2 tracking-tight"
        >
          EMAIL MARKETING CAMPAIGNS
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-16 origin-center"
        />

        {/* Email designs grid - showing 3 featured campaigns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {EMAIL_DESIGNS.slice(0, 3).map((design, idx) => {
            const metrics = impactMetrics[idx]

            return (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() =>
                  setSelectedDesign({
                    id: design.id,
                    thumbnail: design.thumbnail,
                    title: design.title,
                  })
                }
                className="overflow-hidden border border-purple-400/30 rounded-2xl bg-black/40 hover:border-purple-400/60 transition-all duration-300 cursor-pointer group"
              >
                {/* Campaign thumbnail image */}
                <div className="relative w-full h-64 overflow-hidden bg-black/60 mb-0">
                  {design.thumbnail ? (
                    <motion.img
                      src={design.thumbnail}
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-gray-500" />
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Campaign details */}
                <div className="p-6">
                  {/* Campaign header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-purple-400 font-bold text-xs tracking-wider uppercase mb-2">
                        {design.category}
                      </p>
                      <h3 className="text-white font-bold text-lg">{design.title}</h3>
                    </div>
                    <motion.div
                      animate={{ y: 0 }}
                      whileHover={{ y: -3 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center flex-shrink-0 ml-3"
                    >
                      {idx === 0 ? (
                        <span className="text-xs font-bold text-black">✎</span>
                      ) : idx === 1 ? (
                        <span className="text-xs font-bold text-black">⚡</span>
                      ) : (
                        <span className="text-xs font-bold text-black">❤️</span>
                      )}
                    </motion.div>
                  </div>

                  {/* Campaign description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {design.description}
                  </p>

                  {/* Metrics */}
                  {metrics && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="pt-4 border-t border-purple-400/20 flex items-center justify-between"
                    >
                      <div className="flex gap-4">
                        <div>
                          <p className="text-cyan-400 font-bold text-sm">{metrics.open}</p>
                          <p className="text-gray-400 text-xs">Open Rate</p>
                        </div>
                        <div>
                          <p className="text-cyan-400 font-bold text-sm">{metrics.ctr}</p>
                          <p className="text-gray-400 text-xs">CTR</p>
                        </div>
                      </div>
                      <Eye className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional campaigns showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400">
            {EMAIL_DESIGNS.length}+ total email designs crafted for marketing success
          </p>
        </motion.div>
      </div>

      {/* Email Design Modal */}
      <EmailDesignModal
        isOpen={!!selectedDesign}
        onClose={() => setSelectedDesign(null)}
        imageUrl={selectedDesign?.thumbnail || ''}
        title={selectedDesign?.title || ''}
      />
    </section>
  )
}
