import type React from "react"
import type { Metadata } from "next"
import { Inter, Cinzel, Fira_Code } from "next/font/google"
import "./globals.css"
import { GameProvider } from "./components/GameProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" })

export const metadata: Metadata = {
  title: "Akshat Raj - RPG Portfolio | Software Developer with Full Stack Core",
  description:
    "Akshat Raj's interactive RPG-themed portfolio showcasing Software Development skills with Full Stack Developer core, MEAN/MERN expertise, AI/ML projects, and professional experience from Chennai, Tamil Nadu",
  keywords: [
    "Akshat Raj",
    "Software Developer",
    "Full Stack Developer",
    "MEAN Stack",
    "MERN Stack",
    "React",
    "Angular",
    "Node.js",
    "Machine Learning",
    "Chennai",
    "VIT",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${cinzel.variable} ${firaCode.variable} font-sans bg-slate-900 text-amber-100 min-h-screen`}
      >
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  )
}
