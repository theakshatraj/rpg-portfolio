"use client"

import { useState } from "react"
import GameNavigation from "../components/GameNavigation"
import { Globe, Server, Package, Code, Cloud, Brain, BookOpen } from "lucide-react"

const skillCategories = {
  Frontend: {
    icon: Globe,
    color: "text-blue-400",
    items: [
      { name: "React", level: 92, rarity: "Epic", description: "Modern component-based UI development" },
      { name: "Next.js", level: 88, rarity: "Epic", description: "Full-stack React framework with SSR/SSG" },
      { name: "Angular", level: 85, rarity: "Epic", description: "Full-featured frontend framework" },
      { name: "JavaScript", level: 95, rarity: "Legendary", description: "Core programming language for web" },
      { name: "TypeScript", level: 88, rarity: "Epic", description: "Type-safe JavaScript development" },
      { name: "HTML5/CSS3", level: 95, rarity: "Common", description: "Foundation of web development" },
      { name: "jQuery", level: 82, rarity: "Common", description: "JavaScript library for DOM manipulation" },
      { name: "Bootstrap", level: 85, rarity: "Common", description: "CSS framework for responsive design" },
      { name: "Tailwind CSS", level: 90, rarity: "Rare", description: "Utility-first CSS framework" },
      { name: "AJAX", level: 80, rarity: "Common", description: "Asynchronous web communication" },
    ],
  },
  Backend: {
    icon: Server,
    color: "text-green-400",
    items: [
      { name: "Node.js", level: 92, rarity: "Epic", description: "Server-side JavaScript runtime" },
      { name: "Express.js", level: 90, rarity: "Epic", description: "Fast, unopinionated web framework" },
      { name: "MongoDB", level: 88, rarity: "Epic", description: "NoSQL document database" },
      { name: "MySQL", level: 85, rarity: "Rare", description: "Relational database management" },
      { name: "JSON", level: 92, rarity: "Common", description: "Data interchange format" },
      { name: "Supabase", level: 78, rarity: "Rare", description: "Open source Firebase alternative" },
      { name: "REST APIs", level: 90, rarity: "Epic", description: "RESTful service architecture" },
    ],
  },
  Programming: {
    icon: Code,
    color: "text-purple-400",
    items: [
      { name: "JavaScript", level: 95, rarity: "Legendary", description: "Primary web development language" },
      { name: "Python", level: 88, rarity: "Epic", description: "Versatile programming language for AI/ML" },
      { name: "Java", level: 82, rarity: "Rare", description: "Object-oriented programming" },
      { name: "C++", level: 80, rarity: "Rare", description: "System programming language" },
      { name: "C", level: 78, rarity: "Common", description: "Foundation programming language" },
      { name: "TypeScript", level: 88, rarity: "Epic", description: "Type-safe JavaScript" },
    ],
  },
  "AI/ML & GenAI": {
    icon: Brain,
    color: "text-pink-400",
    items: [
      { name: "Machine Learning", level: 75, rarity: "Rare", description: "ML algorithms and model training" },
      { name: "Generative AI", level: 70, rarity: "Rare", description: "GenAI applications and integration" },
      { name: "Computer Vision", level: 78, rarity: "Rare", description: "OpenCV and image processing" },
      { name: "NLP", level: 68, rarity: "Rare", description: "Natural Language Processing basics" },
      { name: "CNN", level: 72, rarity: "Rare", description: "Convolutional Neural Networks" },
      { name: "OpenCV", level: 75, rarity: "Rare", description: "Computer vision library" },
      { name: "Streamlit", level: 70, rarity: "Common", description: "ML app development framework" },
    ],
  },
  "Cloud Technologies": {
    icon: Cloud,
    color: "text-cyan-400",
    items: [
      { name: "AWS", level: 72, rarity: "Rare", description: "Amazon Web Services basics" },
      { name: "AWS Solutions Architect", level: 68, rarity: "Rare", description: "Cloud architecture fundamentals" },
      { name: "Docker", level: 65, rarity: "Rare", description: "Containerization technology" },
      { name: "Vercel", level: 85, rarity: "Rare", description: "Frontend deployment platform" },
      { name: "Cloud Deployment", level: 70, rarity: "Rare", description: "Application deployment strategies" },
    ],
  },
  "Computer Science": {
    icon: BookOpen,
    color: "text-yellow-400",
    items: [
      { name: "Data Structures", level: 88, rarity: "Epic", description: "Algorithmic problem solving" },
      { name: "Algorithms", level: 85, rarity: "Epic", description: "Algorithm design and analysis" },
      {
        name: "Object-Oriented Programming",
        level: 90,
        rarity: "Epic",
        description: "OOP principles and design patterns",
      },
      { name: "DBMS", level: 85, rarity: "Rare", description: "Database management systems" },
      { name: "Operating Systems", level: 80, rarity: "Rare", description: "OS concepts and principles" },
      { name: "Computer Networks", level: 78, rarity: "Rare", description: "Network protocols and architecture" },
      { name: "System Design", level: 75, rarity: "Rare", description: "Scalable system architecture" },
      { name: "Git/GitHub", level: 92, rarity: "Epic", description: "Version control mastery" },
    ],
  },
}

const rarityColors = {
  Legendary: "border-purple-500 bg-purple-900/20 text-purple-300",
  Epic: "border-orange-500 bg-orange-900/20 text-orange-300",
  Rare: "border-blue-500 bg-blue-900/20 text-blue-300",
  Common: "border-gray-500 bg-gray-900/20 text-gray-300",
}

export default function InventoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Frontend")
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const currentCategory = skillCategories[selectedCategory as keyof typeof skillCategories]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
      <GameNavigation />

      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-amber-400 mb-4">Inventory</h1>
          <p className="text-xl text-amber-300">Skills, tools, and abilities acquired throughout the journey</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1">
            <div className="rpg-card">
              <h3 className="text-lg font-cinzel text-amber-400 mb-4">Categories</h3>
              <div className="space-y-2">
                {Object.entries(skillCategories).map(([category, data]) => {
                  const Icon = data.icon
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-amber-600 text-amber-100"
                          : "text-amber-300 hover:text-amber-100 hover:bg-amber-800/30"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${selectedCategory === category ? "text-amber-100" : data.color}`} />
                      <span className="font-medium text-sm">{category}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Stats Summary */}
            <div className="rpg-card mt-6">
              <h3 className="text-lg font-cinzel text-amber-400 mb-4">Inventory Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-amber-300">Total Skills:</span>
                  <span className="text-amber-100">
                    {Object.values(skillCategories).reduce((acc, cat) => acc + cat.items.length, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300">Legendary:</span>
                  <span className="text-purple-300">
                    {Object.values(skillCategories).reduce(
                      (acc, cat) => acc + cat.items.filter((item) => item.rarity === "Legendary").length,
                      0,
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300">Epic:</span>
                  <span className="text-orange-300">
                    {Object.values(skillCategories).reduce(
                      (acc, cat) => acc + cat.items.filter((item) => item.rarity === "Epic").length,
                      0,
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-300">Average Level:</span>
                  <span className="text-amber-100">
                    {Math.round(
                      Object.values(skillCategories).reduce(
                        (acc, cat) => acc + cat.items.reduce((sum, item) => sum + item.level, 0),
                        0,
                      ) / Object.values(skillCategories).reduce((acc, cat) => acc + cat.items.length, 0),
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="rpg-card">
              <div className="flex items-center space-x-3 mb-6">
                <currentCategory.icon className={`w-6 h-6 ${currentCategory.color}`} />
                <h2 className="text-2xl font-cinzel text-amber-400">{selectedCategory}</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {currentCategory.items.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      rarityColors[item.rarity as keyof typeof rarityColors]
                    } ${selectedItem?.name === item.name ? "ring-2 ring-amber-400" : ""}`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <span className="text-xs px-2 py-1 rounded bg-black/30">{item.rarity}</span>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Proficiency</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>

                    <p className="text-xs opacity-80">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Item Details */}
          <div className="lg:col-span-1">
            {selectedItem ? (
              <div className="rpg-card">
                <div
                  className={`p-4 rounded-lg border-2 mb-4 ${
                    rarityColors[selectedItem.rarity as keyof typeof rarityColors]
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-cinzel mb-2">{selectedItem.name}</h3>
                    <div className="text-sm opacity-80 mb-3">{selectedItem.rarity} Skill</div>

                    <div className="mb-4">
                      <div className="text-3xl font-bold mb-1">{selectedItem.level}%</div>
                      <div className="text-sm">Proficiency Level</div>
                    </div>

                    <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden mb-4">
                      <div
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                        style={{ width: `${selectedItem.level}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">Description</h4>
                    <p className="text-sm text-amber-200">{selectedItem.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">Skill Level</h4>
                    <div className="text-sm text-amber-200">
                      {selectedItem.level >= 90
                        ? "Master"
                        : selectedItem.level >= 80
                          ? "Expert"
                          : selectedItem.level >= 70
                            ? "Advanced"
                            : selectedItem.level >= 60
                              ? "Intermediate"
                              : "Beginner"}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">Experience Timeline</h4>
                    <div className="text-sm text-amber-200">
                      {selectedItem.level >= 90
                        ? "2022-Present (3+ years)"
                        : selectedItem.level >= 80
                          ? "2023-Present (2+ years)"
                          : selectedItem.level >= 70
                            ? "2024-Present (1+ year)"
                            : "Recent acquisition"}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rpg-card text-center py-12">
                <Package className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-cinzel text-amber-400 mb-2">Select an Item</h3>
                <p className="text-amber-300">Click on any skill to view detailed information.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
