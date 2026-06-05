'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/constants'
import { Code2, Mail, Database, Zap } from 'lucide-react'

const skillIcons = {
  'UI/UX Designing': <Code2 className="w-6 h-6" />,
  'Mail Marketing': <Mail className="w-6 h-6" />,
  'HTML-CSS': <Code2 className="w-6 h-6" />,
  'Python': <Code2 className="w-6 h-6" />,
  'Git & GitHub': <Code2 className="w-6 h-6" />,
  'VS Code & Jupyter': <Database className="w-6 h-6" />,
  'TensorFlow': <Zap className="w-6 h-6" />,
  'C Language': <Code2 className="w-6 h-6" />,
}

const colorMap: Record<number, { border: string; bar: string; text: string }> = {
  0: { border: 'border-cyan-400', bar: 'bg-cyan-400', text: 'text-cyan-400' },
  1: { border: 'border-purple-400', bar: 'bg-purple-400', text: 'text-purple-400' },
  2: { border: 'border-cyan-400', bar: 'bg-cyan-400', text: 'text-cyan-400' },
  3: { border: 'border-pink-400', bar: 'bg-pink-400', text: 'text-pink-400' },
  4: { border: 'border-yellow-400', bar: 'bg-yellow-400', text: 'text-yellow-400' },
  5: { border: 'border-cyan-400', bar: 'bg-cyan-400', text: 'text-cyan-400' },
  6: { border: 'border-purple-400', bar: 'bg-purple-400', text: 'text-purple-400' },
  7: { border: 'border-cyan-400', bar: 'bg-cyan-400', text: 'text-cyan-400' },
}

export function SkillsSection() {
  // Combine all skills into one flat array
  const allSkills = [
    ...SKILLS.frontend,
    ...SKILLS.backend,
    ...SKILLS.tools,
  ]

  const highlightedSkillIndex = 2 // HTML-CSS will be highlighted

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest">05 // TECHNICAL MATRIX</p>
        </motion.div>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center text-white mb-2 tracking-tight"
        >
          CORE SKILLS
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-12 origin-center"
        />

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {allSkills.map((skill, idx) => {
            const colors = colorMap[idx] || colorMap[idx % 8]
            const isHighlighted = idx === highlightedSkillIndex

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  isHighlighted
                    ? `${colors?.border || 'border-cyan-400'} bg-black/40 shadow-lg shadow-cyan-400/50`
                    : `border-white/10 bg-black/20 hover:border-white/20`
                }`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  isHighlighted ? `bg-cyan-400/20` : 'bg-white/10'
                }`}>
                  <div className={isHighlighted ? 'text-cyan-400' : 'text-gray-400'}>
                    {skillIcons[skill.name as keyof typeof skillIcons] || <Code2 className="w-6 h-6" />}
                  </div>
                </div>

                {/* Skill name */}
                <h3 className={`text-lg font-bold mb-4 ${
                  isHighlighted ? 'text-white' : 'text-gray-300'
                }`}>
                  {skill.name}
                </h3>

                {/* Proficiency label and percentage */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 font-semibold tracking-wider">PROFICIENCY</span>
                  <span className={`text-sm font-bold ${colors?.text || 'text-cyan-400'}`}>{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: idx * 0.05 + 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`h-full ${colors?.bar || 'bg-cyan-400'}`}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
