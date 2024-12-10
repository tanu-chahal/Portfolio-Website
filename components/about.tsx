"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold gradient-text">About Me</h2>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
          I'm a 2024 BCA graduate from Kurukshetra University with a strong foundation in full-stack development. 
          My expertise lies in ReactJS, NextJS, ExpressJS, NodeJS, and MongoDB. With 8 months of professional experience,
          including roles at LivSmart Automation and Yardstick AI, I've developed a deep understanding of modern web technologies
          and best practices.
        </p>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
          Currently working as an AI Full Stack Developer Intern at Yardstick AI, I focus on building scalable applications
          and implementing cutting-edge solutions. My journey includes significant contributions to various projects,
          demonstrating my ability to deliver high-quality, user-centric solutions.
        </p>
      </motion.div>
    </section>
  )
}