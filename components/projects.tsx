"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "@tanu-chahal/jwt-library",
    description: "A NPM package to encode, decode, and validate JSON Web Tokens (JWTs) with ease.",
    tech: "TypeScript, Node.js",
    link: "https://www.npmjs.com/package/@tanu-chahal/jwt-library"
  },
  {
    title: "AI-EMAILS-CLASSIFIER",
    description: "AI-powered email classifier using Google's GEMINI AI for efficient email categorization.",
    tech: "React, Gmail API, Gemini AI, MUI",
    link: "https://github.com/tanu-chahal/AI-Mail-Classifier"
  },
  {
    title: "CHESSBuddy",
    description: "Real-time multiplayer chess game with user authentication and live gameplay.",
    tech: "React, Socket.IO, Node.js, MongoDB",
    link: "https://github.com/tanu-chahal/CHESS-Buddy"
  },
  {
    title: "RIVERR",
    description: "Freelance marketplace website with complete service management system.",
    tech: "React, Node.js, MongoDB, Stripe",
    link: "https://github.com/tanu-chahal/RIVERR-Freelance-Marketplace"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-bold gradient-text">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}