"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
      </div>
      
      <div className="text-center space-y-6 relative">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tanu Chahal
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://github.com/tanu-chahal" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/tanuchahal/"
            target="_blank"
            rel="noopener noreferrer" 
            className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}