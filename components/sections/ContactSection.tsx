'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT_INFO, PERSONAL_INFO } from '@/lib/constants'
import { Section, SectionTitle, GlassmorphismCard } from '@/components/shared/Cards'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <Section id="contact" className="relative pb-20">
      <SectionTitle
        title="Get In Touch"
        subtitle="Let's connect! I'm always interested in hearing about new opportunities."
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {CONTACT_INFO.message}
              </p>
            </motion.div>

            {/* Contact details */}
            {[
              {
                icon: Mail,
                label: 'Email',
                value: CONTACT_INFO.email,
                href: `mailto:${CONTACT_INFO.email}`,
              },
              {
                icon: Phone,
                label: 'Phone',
                value: CONTACT_INFO.phone,
                href: `tel:${CONTACT_INFO.phone}`,
              },
              {
                icon: MapPin,
                label: 'Location',
                value: CONTACT_INFO.location,
                href: '#',
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <GlassmorphismCard className="p-4 flex items-start gap-4 hover:ring-2 hover:ring-blue-400 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-semibold">
                        {item.label}
                      </p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </GlassmorphismCard>
                </motion.a>
              )
            })}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-sm font-semibold text-gray-400 mb-4">
                Follow me on social media
              </p>
              <div className="flex gap-3">
                {[
                  { name: 'GitHub', url: PERSONAL_INFO.socialLinks.github },
                  { name: 'LinkedIn', url: PERSONAL_INFO.socialLinks.linkedin },
                  { name: 'Twitter', url: PERSONAL_INFO.socialLinks.twitter },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/10 hover:bg-blue-500/20 text-gray-300 hover:text-blue-300 rounded-lg font-semibold text-sm transition-all duration-300"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Subject field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="What's this about?"
                  />
                </motion.div>

                {/* Message field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </motion.div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <Send className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
