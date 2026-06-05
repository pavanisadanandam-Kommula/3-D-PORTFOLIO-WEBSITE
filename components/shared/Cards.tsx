'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  delay?: number
  onClick?: () => void
}

export function GlassmorphismCard({ children, className = '', delay = 0, onClick }: GlassmorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`
        backdrop-blur-lg border border-white/10 rounded-2xl
        bg-white/5 hover:bg-white/10 transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverScale?: boolean
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hoverScale = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
      whileHover={hoverScale ? { scale: 1.05 } : {}}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full px-4 md:px-8 py-16 md:py-24 ${className}`}
    >
      {children}
    </section>
  )
}

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

interface BadgeProps {
  text: string
  variant?: 'primary' | 'secondary' | 'accent'
}

export function Badge({ text, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    secondary: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    accent: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  }

  return (
    <span
      className={`
        inline-block px-3 py-1 rounded-full text-sm font-medium
        border backdrop-blur-sm
        ${variants[variant]}
      `}
    >
      {text}
    </span>
  )
}

interface SkillBarProps {
  name: string
  level: number
  delay?: number
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-300">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ delay: delay + 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
        />
      </div>
    </motion.div>
  )
}
