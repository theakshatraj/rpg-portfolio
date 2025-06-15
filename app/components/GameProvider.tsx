"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface GameState {
  playerLevel: number
  currentXP: number
  maxXP: number
  health: number
  maxHealth: number
  mana: number
  maxMana: number
  completedQuests: string[]
  currentLocation: string
}

interface GameContextType {
  gameState: GameState
  updateGameState: (updates: Partial<GameState>) => void
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>({
    playerLevel: 21, // Updated to match age
    currentXP: 8400,
    maxXP: 10000,
    health: 95,
    maxHealth: 100,
    mana: 88,
    maxMana: 100,
    completedQuests: [
      "cs-foundation-2022",
      "fullstack-mastery-2023",
      "professional-debut-2024",
      "park-eazygo",
      "starwave-influencer",
      "moodify-ml",
      "medicart-ecommerce",
    ],
    currentLocation: "Chennai (Originally from Bathinda)",
  })

  const updateGameState = (updates: Partial<GameState>) => {
    setGameState((prev) => ({ ...prev, ...updates }))
  }

  return <GameContext.Provider value={{ gameState, updateGameState }}>{children}</GameContext.Provider>
}

export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}
