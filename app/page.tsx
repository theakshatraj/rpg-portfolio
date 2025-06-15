"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Play, BookOpen, Settings, Award } from "lucide-react"
import GameNavigation from "./components/GameNavigation"
import ImageModal from "./components/ImageModal"

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowMenu(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20 relative overflow-hidden">
      <GameNavigation />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-900/5 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f59e0b' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-cinzel font-bold text-amber-400 animate-glow">AKSHAT RAJ</h1>
            <h2 className="text-2xl md:text-4xl font-cinzel text-amber-200">~ Software Developer ~</h2>
            <h3 className="text-lg md:text-xl font-cinzel text-amber-300">Full Stack Developer Core</h3>
            <p className="text-lg text-amber-300 max-w-2xl mx-auto">
              Welcome, traveler! Enter the digital realm of a passionate Software Developer from Bathinda, currently
              adventuring in Chennai. Where Full Stack mastery meets AI/ML innovation, cloud technologies, and every
              project is an epic quest waiting to be discovered.
            </p>
          </div>

          {/* Menu Options */}
          <div
            className={`space-y-4 transition-all duration-1000 ${showMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid gap-4 max-w-md mx-auto">
              <Link href="/character" className="rpg-button flex items-center justify-center space-x-3 text-lg">
                <Play className="w-5 h-5" />
                <span>Begin Adventure</span>
              </Link>

              <Link href="/quests" className="rpg-button flex items-center justify-center space-x-3">
                <BookOpen className="w-5 h-5" />
                <span>View Quest Log</span>
              </Link>

              <Link href="/inventory" className="rpg-button flex items-center justify-center space-x-3">
                <Award className="w-5 h-5" />
                <span>Check Inventory</span>
              </Link>

              <Link href="/guild" className="rpg-button flex items-center justify-center space-x-3">
                <Settings className="w-5 h-5" />
                <span>Visit Guild Hall</span>
              </Link>
            </div>
          </div>

          {/* Character Preview */}
          <div className="mt-12 rpg-card max-w-sm mx-auto animate-float">
            <div className="text-center space-y-2">
              <div
                className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-amber-500 cursor-pointer hover:border-amber-400 hover:scale-110 transition-all duration-300"
                onClick={() => setIsImageModalOpen(true)}
              >
                <img src="/images/akshat-avatar.png" alt="Akshat Raj" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-cinzel text-xl text-amber-400">Akshat Raj</h3>
              <p className="text-sm text-amber-300">Level 21 • Software Developer</p>
              <p className="text-xs text-amber-400">Full Stack Core • Bathinda → Chennai</p>
              <p className="text-xs text-amber-500">CS Journey Since 2022</p>
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc="/images/akshat-real-photo.jpg"
        imageAlt="Akshat Raj - Full Character Portrait"
        title="Akshat Raj"
        subtitle="Software Developer with Full Stack Core"
      />
    </div>
  )
}
