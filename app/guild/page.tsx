"use client"

import type React from "react"

import { useState } from "react"
import GameNavigation from "../components/GameNavigation"
import { Mail, Github, Linkedin, Send, Star, Quote, Phone } from "lucide-react"

const testimonials = [
  {
    name: "Daira Edtech Team",
    role: "Startup Colleagues",
    company: "Daira Edtech",
    avatar: "🧙‍♀️",
    rating: 5,
    message:
      "Akshat has been an exceptional intern, bringing fresh perspectives to our educational assessment platform. His software development skills with full stack expertise shows remarkable technical versatility.",
    project: "Educational Assessment Platform",
  },
  {
    name: "VIT Chennai Peer",
    role: "Fellow Developer",
    company: "VIT Chennai",
    avatar: "🏹",
    rating: 5,
    message:
      "Akshat's innovative approach to software development, combining AI/ML with web technologies is impressive. His projects showcase his comprehensive development skills and creative problem-solving abilities.",
    project: "Academic Collaboration",
  },
  {
    name: "Upwork Client",
    role: "Freelance Client",
    company: "Upwork Platform",
    avatar: "🛡️",
    rating: 5,
    message:
      "Reliable, skilled, and professional. Akshat delivered our project on time with excellent communication throughout. His software development capabilities with full stack expertise are exactly what we needed.",
    project: "Freelance Development",
  },
]

const contactMethods = [
  {
    name: "Email",
    icon: Mail,
    value: "live.akshatraj@gmail.com",
    description: "Send a message via digital scroll",
    color: "text-red-400",
    link: "mailto:live.akshatraj@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    value: "Akshat Raj",
    description: "Connect in the professional realm",
    color: "text-blue-400",
    link: "https://www.linkedin.com/in/akshat-raj-096118274/",
  },
  {
    name: "GitHub",
    icon: Github,
    value: "theakshatraj",
    description: "Explore the code repositories",
    color: "text-purple-400",
    link: "https://github.com/theakshatraj",
  },
  {
    name: "Phone",
    icon: Phone,
    value: "+91 9878862734",
    description: "Direct communication channel",
    color: "text-green-400",
    link: "tel:+919878862734",
  },
]

export default function GuildPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4db8477e-b759-4fc6-ab54-198b11d8f3fc",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: `Subject: ${formData.subject}\n\nMessage: ${formData.message}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        console.log("Form submitted successfully:", result)
      } else {
        setSubmitStatus("error")
        console.error("Form submission failed:", result)
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20">
      <GameNavigation />

      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-amber-400 mb-4">Guild Hall</h1>
          <p className="text-xl text-amber-300">Connect with fellow adventurers and hear tales from past quests</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Section */}
          <div className="space-y-8">
            <div className="rpg-card">
              <h2 className="text-2xl font-cinzel text-amber-400 mb-6">Send a Message</h2>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg">
                  <p className="text-green-300 text-center">
                    🎉 Quest message sent successfully! The guild master will respond to your request soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
                  <p className="text-red-300 text-center">
                    ⚠️ Message failed to send. Please try again or use alternative contact methods below.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-300 mb-2">Adventurer Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-amber-700 rounded-lg text-amber-100 placeholder-amber-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-300 mb-2">Contact Scroll</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-amber-700 rounded-lg text-amber-100 placeholder-amber-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-300 mb-2">Quest Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-amber-700 rounded-lg text-amber-100 placeholder-amber-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    placeholder="What brings you to the guild hall?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-300 mb-2">Quest Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-amber-700 rounded-lg text-amber-100 placeholder-amber-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
                    placeholder="Describe your quest, project ideas, or collaboration opportunities..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rpg-button w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-amber-300 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="rpg-card">
              <h3 className="text-xl font-cinzel text-amber-400 mb-4">Other Ways to Connect</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target={method.link.startsWith("http") ? "_blank" : "_self"}
                      rel={method.link.startsWith("http") ? "noopener noreferrer" : ""}
                      className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg border border-amber-700/30 hover:border-amber-500 hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <Icon className={`w-5 h-5 ${method.color}`} />
                      <div>
                        <div className="font-medium text-amber-200">{method.name}</div>
                        <div className="text-sm text-amber-400">{method.value}</div>
                        <div className="text-xs text-amber-300 opacity-75">{method.description}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="space-y-8">
            <div className="rpg-card">
              <h2 className="text-2xl font-cinzel text-amber-400 mb-6">Guild Member Testimonials</h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-amber-700/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-amber-200">{testimonial.name}</h4>
                            <p className="text-sm text-amber-400">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>

                        <div className="relative">
                          <Quote className="w-4 h-4 text-amber-600 absolute -top-1 -left-1" />
                          <p className="text-amber-200 italic pl-4 mb-3">{testimonial.message}</p>
                        </div>

                        <div className="text-xs text-amber-400">Project: {testimonial.project}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guild Stats */}
            <div className="rpg-card">
              <h3 className="text-xl font-cinzel text-amber-400 mb-4">Guild Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-amber-700/30">
                  <div className="text-2xl font-bold text-amber-400">8+</div>
                  <div className="text-sm text-amber-300">Completed Projects</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-amber-700/30">
                  <div className="text-2xl font-bold text-amber-400">15+</div>
                  <div className="text-sm text-amber-300">Technologies Mastered</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-amber-700/30">
                  <div className="text-2xl font-bold text-amber-400">1+</div>
                  <div className="text-sm text-amber-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-amber-700/30">
                  <div className="text-2xl font-bold text-amber-400">7.4</div>
                  <div className="text-sm text-amber-300">GPA at VIT Chennai</div>
                </div>
              </div>
            </div>

            {/* Guild Notice Board */}
            <div className="rpg-card">
              <h3 className="text-xl font-cinzel text-amber-400 mb-4">Guild Notice Board</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                  <span className="text-green-400">✅</span>
                  <div>
                    <div className="text-sm font-medium text-green-300">Currently Available</div>
                    <div className="text-xs text-green-200">Ready for new adventures and collaborations</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-900/20 rounded-lg border border-blue-700/30">
                  <span className="text-blue-400">🚀</span>
                  <div>
                    <div className="text-sm font-medium text-blue-300">Preferred Quest Types</div>
                    <div className="text-xs text-blue-200">
                      Software Engineer, Full Stack Developer and other similar IT roles
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-purple-900/20 rounded-lg border border-purple-700/30">
                  <span className="text-purple-400">⚡</span>
                  <div>
                    <div className="text-sm font-medium text-purple-300">Response Time</div>
                    <div className="text-xs text-purple-200">Usually within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
