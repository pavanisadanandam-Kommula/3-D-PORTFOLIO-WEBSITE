'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { PERSONAL_INFO } from '@/lib/constants'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-32 pb-10">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Status badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex gap-3 flex-wrap"
            >
              <div className="px-4 py-2 border border-cyan-400/50 rounded-full">
                <span className="text-cyan-400 font-bold text-xs tracking-wider">STATUS: ONLINE</span>
              </div>
              <div className="px-4 py-2 border border-pink-400/50 rounded-full">
                <span className="text-pink-400 font-bold text-xs tracking-wider">AI/ML ENGINEER</span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-cyan-400 font-mono text-sm mb-2">
                {'>'} HELLO WORLD, I AM
              </p>
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter">
                <span className="text-white">KOMMULA</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">PAVANI</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-cyan-400 font-mono"
            >
              {'< '} ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING {' />'}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base leading-relaxed max-w-lg"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold tracking-wider rounded-lg hover:bg-cyan-400/10 transition-all duration-300 inline-block"
              >
                VIEW PROJECTS ↗
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 border-2 border-pink-400 text-pink-400 font-bold tracking-wider rounded-lg hover:bg-pink-400/10 transition-all duration-300 inline-block"
              >
                GET IN TOUCH
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.2 }}
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-cyan-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:pavanisadanandam@gmail.com"
                className="p-3 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:flex justify-center items-center relative"
          >
            <div className="relative w-80 h-80">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-20 blur-3xl" />

              {/* Border circle with glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              />

              {/* Profile image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border border-cyan-400/30">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt="Kommula Pavani"
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-4 right-4 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
