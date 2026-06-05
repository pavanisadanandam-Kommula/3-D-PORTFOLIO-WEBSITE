'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { EDUCATION, PERSONAL_INFO } from '@/lib/constants'
import { Section, SectionTitle, GlassmorphismCard } from '@/components/shared/Cards'
import { BookOpen, Award, MapPin } from 'lucide-react'

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <Section id="about" className="relative">
      <SectionTitle
        title="About Me"
        subtitle="Learn more about my education and passion for technology"
      />

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left column - Bio */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I&apos;m a passionate B.Tech AIML student from Karimnagar, Telangana, focused on building innovative AI and machine learning solutions. With internship experience at leading tech companies like Google, Zscaler, and Juniper Networks, I&apos;ve honed my skills in AI development, web technologies, and creative design.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I&apos;m driven by continuous learning, building meaningful projects that solve real-world problems, and creating visually stunning interfaces combined with intelligent backend solutions.
            </p>
          </GlassmorphismCard>

          {/* Quick facts */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Award, label: 'Projects', value: '4' },
              { icon: BookOpen, label: 'Certifications', value: '3' },
              { icon: MapPin, label: 'Location', value: 'Karimnagar' },
              { icon: Award, label: 'Internships', value: '3' },
            ].map((fact, idx) => {
              const Icon = fact.icon
              return (
                <GlassmorphismCard key={idx} className="p-6 text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <p className="text-2xl font-bold text-white">{fact.value}</p>
                  <p className="text-sm text-gray-400">{fact.label}</p>
                </GlassmorphismCard>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Right column - Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GlassmorphismCard className="p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 w-3 h-3 bg-blue-400 rounded-full mt-2" />

                  <div>
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-blue-400 font-medium text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>

                    {/* CGPA badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/30">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>

      {/* Full bio section removed - My Journey */}
    </Section>
  )
}
