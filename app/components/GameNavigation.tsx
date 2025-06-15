"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Map, Package, Users } from "lucide-react"
import { useGame } from "./GameProvider"

const navItems = [
  { href: "/", label: "Home", icon: Home, description: "Main Menu" },
  { href: "/character", label: "Character", icon: User, description: "Character Sheet" },
  { href: "/quests", label: "Quests", icon: Map, description: "Quest Log" },
  { href: "/inventory", label: "Inventory", icon: Package, description: "Skills & Tools" },
  { href: "/guild", label: "Guild", icon: Users, description: "Testimonials & Contact" },
]

export default function GameNavigation() {
  const pathname = usePathname()
  const { gameState } = useGame()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 rpg-border bg-slate-900/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold font-cinzel text-amber-400">Akshat Raj</div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-amber-600 text-amber-100 shadow-lg"
                        : "text-amber-200 hover:text-amber-100 hover:bg-amber-800/30"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-amber-300">Level {gameState.playerLevel}</div>
            <div className="w-20 xp-bar">
              <div
                className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-500"
                style={{ width: `${(gameState.currentXP / gameState.maxXP) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
