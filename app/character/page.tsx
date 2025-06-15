"use client"

import { useGame } from "../components/GameProvider"
import GameNavigation from "../components/GameNavigation"
import StatBar from "../components/StatBar"
import { Globe, Zap, Heart, Cloud, Brain, BookOpen } from "lucide-react"
import { useState } from "react"
import ImageModal from "../components/ImageModal"

const skills = [
  { name: "Full Stack Development", level: 92, icon: Globe, color: "text-blue-400" },
  { name: "Computer Science Fundamentals", level: 88, icon: BookOpen, color: "text-green-400" },
  { name: "AI/ML & GenAI", level: 78, icon: Brain, color: "text-purple-400" },
  { name: "Cloud Technologies", level: 72, icon: Cloud, color: "text-cyan-400" },
  { name: "Problem Solving & DSA", level: 90, icon: Zap, color: "text-yellow-400" },
  { name: "System Design", level: 80, icon: Heart, color: "text-red-400" },
]

const achievements = [
  { title: "CS Foundation Master", description: "Started Computer Science journey at VIT Chennai", date: "2022" },
  { title: "Full Stack Awakening", description: "Mastered MEAN and MERN stack development", date: "2023" },
  { title: "Professional Debut", description: "Started professional work experience", date: "2024" },
  { title: "AI/ML Pioneer", description: "Built emotion-driven music recommendation system", date: "2024" },
  { title: "Freelance Warrior", description: "Successfully completed international Upwork projects", date: "2024" },
  { title: "Startup Adventurer", description: "Currently interning at Daira Edtech", date: "2025" },
]

const timeline = [
  {
    year: "2022",
    event: "Started Computer Science at VIT Chennai",
    description: "Foundation in CS principles, DSA, and programming",
  },
  {
    year: "2023",
    event: "Full Stack Development Journey",
    description: "Mastered MEAN/MERN stack, built multiple projects",
  },
  {
    year: "2024",
    event: "Professional Experience Begins",
    description: "Freelance work, internships, and real-world applications",
  },
  { year: "2025", event: "Current Adventures", description: "Daira Edtech internship, expanding AI/ML expertise" },
]

export default function CharacterPage() {
  const { gameState } = useGame()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
      <GameNavigation />

      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-amber-400 mb-4">Character Sheet</h1>
          <p className="text-xl text-amber-300">Behold the stats and abilities of a seasoned developer</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Character Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rpg-card text-center">
              <div
                className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-amber-500 shadow-lg cursor-pointer hover:border-amber-400 hover:shadow-amber-400/30 transition-all duration-300 hover:scale-105"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src="/images/akshat-avatar.png"
                  alt="Akshat Raj - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="text-xs text-amber-400 mb-4 cursor-pointer hover:text-amber-300"
                onClick={() => setIsModalOpen(true)}
              >
                Click to view full character portrait
              </p>
              <h2 className="text-2xl font-cinzel text-amber-400 mb-2">Akshat Raj</h2>
              <p className="text-amber-300 mb-4">Software Developer</p>
              <p className="text-amber-200 text-sm mb-4">Full Stack Developer Core</p>
              <div className="space-y-3">
                <div className="text-sm text-amber-200">
                  <span className="font-semibold">Level:</span> {gameState.playerLevel}
                </div>
                <div className="text-sm text-amber-200">
                  <span className="font-semibold">Class:</span> Software Developer (MEAN/MERN)
                </div>
                <div className="text-sm text-amber-200">
                  <span className="font-semibold">Origin:</span> Bathinda, Punjab
                </div>
                <div className="text-sm text-amber-200">
                  <span className="font-semibold">Current Location:</span> Chennai, Tamil Nadu
                </div>
                <div className="text-sm text-amber-200">
                  <span className="font-semibold">Specialization:</span> Web Applications, AI/ML, Cloud
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="rpg-card">
              <h3 className="text-xl font-cinzel text-amber-400 mb-4">Vital Stats</h3>
              <div className="space-y-4">
                <StatBar label="Health" current={gameState.health} max={gameState.maxHealth} type="health" />
                <StatBar label="Mana" current={gameState.mana} max={gameState.maxMana} type="mana" />
                <StatBar label="Experience" current={gameState.currentXP} max={gameState.maxXP} type="xp" />
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="rpg-card">
              <h3 className="text-xl font-cinzel text-amber-400 mb-4">Adventure Timeline</h3>
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <div key={index} className="border-l-2 border-amber-600 pl-4 pb-3">
                    <div className="text-amber-300 font-semibold text-sm">{item.year}</div>
                    <div className="text-amber-200 font-medium text-sm">{item.event}</div>
                    <div className="text-amber-300 text-xs opacity-80">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Abilities */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rpg-card">
              <h3 className="text-2xl font-cinzel text-amber-400 mb-6">Core Abilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-5 h-5 ${skill.color}`} />
                        <span className="font-medium text-amber-200">{skill.name}</span>
                        <span className="text-sm text-amber-400 ml-auto">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Character Lore */}
            <div className="rpg-card">
              <h3 className="text-2xl font-cinzel text-amber-400 mb-4">Character Lore</h3>
              <div className="prose prose-amber max-w-none">
                <p className="text-amber-200 leading-relaxed mb-4">
                  Born in the vibrant lands of Bathinda, Punjab, this aspiring Software Developer embarked on their
                  digital quest in 2022 when they began their Computer Science journey at VIT Chennai. What started as
                  curiosity about algorithms and data structures soon evolved into a passion for creating comprehensive
                  digital solutions.
                </p>
                <p className="text-amber-200 leading-relaxed mb-4">
                  With a Full Stack Developer core, they discovered the mystical arts of end-to-end development in 2023,
                  mastering both MEAN and MERN stack technologies. By 2024, they had gained enough experience to venture
                  into the professional realm, taking on freelance quests and internship adventures while expanding
                  their expertise into the emerging territories of AI/ML and Cloud Technologies.
                </p>
                <p className="text-amber-200 leading-relaxed">
                  Currently stationed in Chennai while maintaining roots in Bathinda, they continue their quest as a
                  Software Developer with Full Stack expertise at Daira Edtech, working on educational assessment
                  platforms while exploring the frontiers of Generative AI and cloud-native solutions.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="rpg-card">
              <h3 className="text-2xl font-cinzel text-amber-400 mb-6">Achievements Unlocked</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-amber-900/20 rounded-lg border border-amber-700/30"
                  >
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">🏆</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-amber-300">{achievement.title}</h4>
                      <p className="text-sm text-amber-200">{achievement.description}</p>
                      <span className="text-xs text-amber-400">{achievement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/images/akshat-real-photo.jpg"
        imageAlt="Akshat Raj - Full Character Portrait"
        title="Akshat Raj"
        subtitle="Software Developer with Full Stack Core"
      />
    </div>
  )
}
