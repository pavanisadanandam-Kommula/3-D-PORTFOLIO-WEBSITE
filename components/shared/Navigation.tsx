'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'INTERNSHIPS', href: '#internships' },
  { label: 'OFFER LETTERS', href: '#offer-letters' },
  { label: 'HACKATHON ACHIEVEMENTS', href: '#hackathon-achievements' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EMAIL DESIGNS', href: '#email-designs' },
  { label: 'CERTIFICATES', href: '#certificates' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navigationItems.map((item) =>
        item.href.replace('#', '')
      )
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl tracking-widest flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <div className="w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-cyan-400" />
            </div>
            <span className="text-white">PAVANI</span>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 font-semibold text-sm tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </motion.button>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur-lg md:hidden"
      >
        <div className="flex flex-col items-center gap-2 p-8">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}
