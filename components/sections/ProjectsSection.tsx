'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/constants'
import { Section, SectionTitle, GlassmorphismCard, Badge } from '@/components/shared/Cards'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
    <Section id="projects" className="relative">
      <SectionTitle
        title="Featured Projects"
        subtitle="A selection of projects I've built and contributed to"
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <GlassmorphismCard className="overflow-hidden h-full">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                    {project.images?.[0] ? (
                      <motion.img
                        src={project.images[0]}
                        alt={project.title}
                        animate={{ scale: hoveredId === project.id ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <motion.div
                        animate={{ scale: hoveredId === project.id ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/10 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <p className="text-4xl font-bold text-white/20 mb-2">
                            {project.id}
                          </p>
                          <p className="text-white/40 font-semibold">
                            {project.title}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Content side */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-400 mb-2">
                          Key Features:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, hidx) => (
                            <Badge
                              key={hidx}
                              text={highlight}
                              variant={
                                hidx % 3 === 0
                                  ? 'primary'
                                  : hidx % 3 === 1
                                    ? 'secondary'
                                    : 'accent'
                              }
                            />
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-400 mb-2">
                          Tech Stack:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, tidx) => (
                            <span
                              key={tidx}
                              className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded border border-white/10 hover:border-blue-400/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Links or Screenshots */}
                    {project.liveLink || project.githubLink ? (
                      <div className="flex gap-4 pt-6 border-t border-white/10">
                        {project.liveLink && project.liveLink !== "#" && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors font-semibold text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        )}
                        {project.githubLink && project.githubLink !== "#" && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-400/30 text-gray-300 rounded-lg hover:border-gray-300 transition-colors font-semibold text-sm"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </motion.a>
                        )}
                      </div>
                    ) : (
                      <div className="pt-6 border-t border-white/10">
                        <p className="text-sm text-gray-400 mb-4">Project Screenshots:</p>
                        <div className="grid grid-cols-2 gap-3">
                          {project.images?.slice(1).map((img, sidx) => (
                            <motion.div
                              key={sidx}
                              whileHover={{ scale: 1.02 }}
                              className="relative overflow-hidden rounded-lg border border-white/10 hover:border-white/20 cursor-pointer"
                            >
                              <img
                                src={img}
                                alt={`${project.title} screenshot ${sidx + 1}`}
                                className="w-full h-24 object-cover hover:opacity-80 transition-opacity"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  )
}
