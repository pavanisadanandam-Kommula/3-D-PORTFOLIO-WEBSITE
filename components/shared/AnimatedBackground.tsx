'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  left: string
  top: string
  duration: number
  delay: number
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
    setParticles(generated)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 0, 255, .05) 25%, rgba(255, 0, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .05) 75%, rgba(255, 0, 255, .05) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, .05) 25%, rgba(255, 0, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .05) 75%, rgba(255, 0, 255, .05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: p.left,
              top: p.top,
            }}
          />
        ))}
      </div>
    </div>
  )
}
