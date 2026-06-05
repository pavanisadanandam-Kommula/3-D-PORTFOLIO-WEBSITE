'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface EmailDesignModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
}

export function EmailDesignModal({
  isOpen,
  onClose,
  imageUrl,
  title,
}: EmailDesignModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-black/90 border border-purple-400/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-purple-400/20 bg-black/50 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-300" />
                </motion.button>
              </div>

              {/* Image */}
              <div className="p-6">
                <motion.img
                  src={imageUrl}
                  alt={title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-full rounded-lg border border-purple-400/20"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
