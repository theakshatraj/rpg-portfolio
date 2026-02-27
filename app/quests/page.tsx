"use client"

import { useState } from "react"
import GameNavigation from "../components/GameNavigation"
import { ExternalLink, Github, Calendar, Star, MapPin } from "lucide-react"

const quests = [
  {
    id: "thinkbox",
    title: "ThinkBox: The Cloud Intelligence Quest",
    type: "Main Quest",
    status: "Ongoing",
    difficulty: "Legendary",
    description:
      "ThinkBox is a personal cloud storage application enhanced with intelligent AI capabilities. Automatically tags images with detected objects, summarizes text documents, extracts insights from content, and organizes files intelligently based on AI analysis. Features direct file system management, asynchronous job processing, and secure file sharing.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Bull Job Queue",
      "OpenAI API",
      "Computer Vision",
      "Multer",
      "Tailwind CSS",
    ],
    completionDate: null,
    experience: 3500,
    rewards: ["Cloud Architecture Master", "AI Integration Expert", "File System Wizard", "Job Queue Architect"],
    demoUrl: "#",
    githubUrl: "https://github.com/theakshatraj/thinkbox",
    image: "/placeholder.svg?height=300&width=400",
    challenges: [
      "Building secure file system operations and multipart upload handling",
      "Designing efficient database schema for file metadata management",
      "Implementing asynchronous job processing with Bull and Redis",
      "Integrating multiple AI APIs for intelligent content analysis",
      "Creating RESTful APIs for complex file management operations",
    ],
  },
  {
    id: "memegif-studio",
    title: "MemeGif Studio: AI GIF Alchemy",
    type: "Main Quest",
    status: "Completed",
    difficulty: "Legendary",
    description:
      "MemeGif Studio is an AI-powered web application that converts video clips into captioned GIFs using OpenRouter API and FFmpeg. Built a full-stack application with seamless user interaction, automatic speech-to-text transcription, intelligent video trimming, and optimized GIF generation performance for large-scale processing.",
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "OpenRouter API",
      "Whisper Transcription",
      "FFmpeg",
      "Multer",
      "MediaRecorder API",
      "Tailwind CSS",
    ],
    completionDate: "2025-07-15",
    experience: 3200,
    rewards: ["AI Integration Master", "Video Processing Expert", "OpenRouter Specialist", "File Handling Wizard"],
    demoUrl: "https://ai-gif-generator.vercel.app",
    githubUrl: "https://github.com/theakshatraj/ai-gif-generator",
    image: "/images/memegif-studio.png",
    challenges: [
      "Integrating OpenRouter API for AI-powered caption generation",
      "Implementing intelligent video trimming (2-15 seconds) with real-time previews",
      "Building efficient file handling for large uploads using Multer",
      "Optimizing FFmpeg for high-performance batch GIF export",
    ],
  },
  {
    id: "starwave-influencer",
    title: "StarWave: The Influencer Connection",
    type: "Main Quest",
    status: "Completed",
    difficulty: "Epic",
    description:
      "Developed StarWave, a dynamic web application connecting event organizers with influencers, featuring booking systems, profile management, real-time updates, and comprehensive search functionality.",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "AngularJS", "Bootstrap", "Node.js", "Express", "MySQL"],
    completionDate: "2024-09-15",
    experience: 2800,
    rewards: ["Social Platform Builder", "Real-time Systems", "Database Design", "Full Stack Coordination"],
    demoUrl: "https://starwave-iesl.onrender.com",
    githubUrl: "https://github.com/theakshatraj/starwave-influencer-booking",
    image: "/images/starwave-influencer.png",
    challenges: [
      "Creating intuitive booking system interface",
      "Implementing real-time updates for bookings",
      "Building comprehensive search functionality",
      "Managing complex user relationships",
    ],
  },
  {
    id: "park-eazygo",
    title: "Park-EazyGo: The Smart Parking Sentinel",
    type: "Main Quest",
    status: "Completed",
    difficulty: "Legendary",
    description:
      "Park-EazyGo is an intelligent parking monitoring system that allows users to check real-time availability of parking slots. Harnesses the power of YOLO v8 with computer vision to monitor parking spaces through live CCTV, providing accurate and up-to-the-minute information.",
    technologies: [
      "Python",
      "YOLO v8",
      "Computer Vision",
      "OpenCV",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Real-time Processing",
    ],
    completionDate: "2024-09-20",
    experience: 2500,
    rewards: ["Computer Vision Master", "YOLO Expert", "Smart City Pioneer", "Real-time Systems Architect"],
    demoUrl: "#",
    githubUrl: "https://github.com/AkshatRaj/park-eazygo",
    image: "/placeholder.svg?height=300&width=400",
    challenges: [
      "Training YOLO v8 model for accurate parking space detection",
      "Implementing real-time CCTV feed processing",
      "Creating user-friendly mobile interface for slot checking",
      "Optimizing computer vision algorithms for live monitoring",
    ],
  },
  {
    id: "moodify-ml",
    title: "Moodify: Emotion-Based Music Recommendation",
    type: "Side Quest",
    status: "Completed",
    difficulty: "Legendary",
    description:
      "Developed Moodify, an AI-powered music recommendation system using CNN for real-time emotion detection via facial expressions, with mood-based song clustering using PCA and K-means algorithms.",
    technologies: [
      "Python",
      "OpenCV",
      "CNN",
      "Streamlit",
      "PCA",
      "K-means",
      "YouTube API",
      "Machine Learning",
      "Computer Vision",
    ],
    completionDate: "2024-06-10",
    experience: 2200,
    rewards: ["AI/ML Pioneer", "Computer Vision Master", "Music Tech Innovator", "Algorithm Designer"],
    demoUrl: "#",
    githubUrl: "https://github.com/AkshatRaj/moodify",
    image: "/placeholder.svg?height=300&width=400",
    challenges: [
      "Training CNN model on FER2013 dataset",
      "Implementing real-time facial emotion detection",
      "Creating mood-based music clustering algorithm",
      "Integrating YouTube API for music streaming",
    ],
  },
  {
    id: "medicart-ecommerce",
    title: "MediCart: Digital Pharmacy E-Commerce",
    type: "Side Quest",
    status: "Completed",
    difficulty: "Rare",
    description:
      "Built MediCart, a full-stack e-commerce application for drugstore with user authentication, cart functionality, order management, admin analytics dashboard, and responsive design.",
    technologies: ["Angular", "Node.js", "Express.js", "MongoDB", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
    completionDate: "2024-07-20",
    experience: 1800,
    rewards: ["Healthcare Tech", "Admin Dashboard Master", "Order Management", "Responsive Design"],
    demoUrl: "#",
    githubUrl: "https://github.com/AkshatRaj/medicart",
    image: "/placeholder.svg?height=300&width=400",
    challenges: [
      "Implementing secure payment processing",
      "Building comprehensive admin analytics",
      "Creating responsive Angular components",
      "Managing inventory and order workflows",
    ],
  },
]

const statusColors = {
  Completed: "text-green-400 bg-green-900/30 border-green-700",
  Ongoing: "text-yellow-400 bg-yellow-900/30 border-yellow-700",
  Planned: "text-blue-400 bg-blue-900/30 border-blue-700",
}

const difficultyColors = {
  Legendary: "text-purple-400 bg-purple-900/30 border-purple-700",
  Epic: "text-orange-400 bg-orange-900/30 border-orange-700",
  Rare: "text-blue-400 bg-blue-900/30 border-blue-700",
  Common: "text-gray-400 bg-gray-900/30 border-gray-700",
}

export default function QuestsPage() {
  const [selectedQuest, setSelectedQuest] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("All")

  const filteredQuests = filter === "All" ? quests : quests.filter((quest) => quest.type === filter)

  const selectedQuestData = quests.find((q) => q.id === selectedQuest)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
      <GameNavigation />

      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-amber-400 mb-4">Quest Log</h1>
          <p className="text-xl text-amber-300">Chronicles of completed adventures and ongoing journeys</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 rpg-border rounded-lg p-2">
            {["All", "Main Quest", "Side Quest"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  filter === filterType
                    ? "bg-amber-600 text-amber-100"
                    : "text-amber-300 hover:text-amber-100 hover:bg-amber-800/30"
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quest List */}
          <div className="space-y-6">
            {filteredQuests.map((quest) => (
              <div
                key={quest.id}
                className={`rpg-card cursor-pointer transition-all duration-300 ${
                  selectedQuest === quest.id ? "border-amber-400 shadow-lg shadow-amber-400/20" : ""
                }`}
                onClick={() => setSelectedQuest(quest.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-cinzel text-amber-400 mb-2">{quest.title}</h3>
                    <div className="flex items-center space-x-3 mb-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium border ${statusColors[quest.status as keyof typeof statusColors]}`}
                      >
                        {quest.status}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium border ${difficultyColors[quest.difficulty as keyof typeof difficultyColors]}`}
                      >
                        {quest.difficulty}
                      </span>
                      <span className="text-xs text-amber-300">{quest.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-amber-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{quest.experience} XP</span>
                    </div>
                  </div>
                </div>

                <p className="text-amber-200 text-sm mb-4 line-clamp-2">{quest.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {quest.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-amber-900/30 text-amber-300 text-xs rounded border border-amber-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {quest.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-amber-900/30 text-amber-300 text-xs rounded border border-amber-700/50">
                      +{quest.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {quest.completionDate && (
                  <div className="flex items-center space-x-2 text-xs text-amber-400">
                    <Calendar className="w-3 h-3" />
                    <span>Completed: {new Date(quest.completionDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quest Details */}
          <div className="lg:sticky lg:top-24">
            {selectedQuestData ? (
              <div className="rpg-card">
                <div className="mb-6">
                  <img
                    src={selectedQuestData.image || "/placeholder.svg"}
                    alt={selectedQuestData.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-cinzel text-amber-400 mb-2">{selectedQuestData.title}</h2>
                  <div className="flex items-center space-x-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded text-sm font-medium border ${statusColors[selectedQuestData.status as keyof typeof statusColors]}`}
                    >
                      {selectedQuestData.status}
                    </span>
                    <span
                      className={`px-3 py-1 rounded text-sm font-medium border ${difficultyColors[selectedQuestData.difficulty as keyof typeof difficultyColors]}`}
                    >
                      {selectedQuestData.difficulty}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Quest Description</h3>
                    <p className="text-amber-200">{selectedQuestData.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedQuestData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-amber-900/30 text-amber-300 text-sm rounded border border-amber-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Challenges Overcome</h3>
                    <ul className="space-y-2">
                      {selectedQuestData.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2 text-amber-200">
                          <span className="text-amber-400 mt-1">⚔️</span>
                          <span className="text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Rewards Earned</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedQuestData.rewards.map((reward, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded border border-green-700/50"
                        >
                          🏆 {reward}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={selectedQuestData.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rpg-button flex items-center space-x-2 flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Demo</span>
                    </a>
                    <a
                      href={selectedQuestData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rpg-button flex items-center space-x-2 flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rpg-card text-center py-12">
                <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-cinzel text-amber-400 mb-2">Select a Quest</h3>
                <p className="text-amber-300">Click on any quest to view detailed information about the adventure.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
