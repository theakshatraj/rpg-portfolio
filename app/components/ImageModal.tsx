"use client"
import { X } from "lucide-react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  title: string
  subtitle?: string
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title, subtitle }: ImageModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative rpg-border bg-slate-900/95 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-amber-400 hover:text-amber-300 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-cinzel text-amber-400">{title}</h2>
            {subtitle && <p className="text-amber-300">{subtitle}</p>}
          </div>

          {/* Large Image */}
          <div className="relative">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              className="w-full max-w-md mx-auto rounded-lg border-4 border-amber-500 shadow-2xl shadow-amber-500/20"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-amber-900/20 to-transparent pointer-events-none" />
          </div>

          {/* Character Info */}
          <div className="space-y-2 text-center">
            <div className="rpg-border rounded-lg p-4 bg-slate-800/50">
              <h3 className="text-lg font-cinzel text-amber-400 mb-2">Character Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="text-amber-200">
                  <span className="font-semibold">Name:</span> Akshat Raj
                </div>
                <div className="text-amber-200">
                  <span className="font-semibold">Class:</span> Software Developer
                </div>
                <div className="text-amber-200">
                  <span className="font-semibold">Origin:</span> Bathinda, Punjab
                </div>
                <div className="text-amber-200">
                  <span className="font-semibold">Current Location:</span> Chennai, Tamil Nadu
                </div>
                <div className="text-amber-200 sm:col-span-2">
                  <span className="font-semibold">Specialization:</span> Full Stack Development, AI/ML, Cloud
                  Technologies
                </div>
              </div>
            </div>

            <p className="text-amber-300 text-sm italic">
              "Every line of code is a step forward in the grand adventure of software development."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
