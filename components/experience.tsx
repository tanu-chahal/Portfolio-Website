"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "AI Full Stack Developer Intern",
    company: "Yardstick AI",
    period: "Aug 2024 - Current",
    points: [
      "Developed an automated AI-driven blog generation system",
      "Built a rich-text blog editor for content management",
      "Transitioned Next.js project to Turborepo monorepo",
      "Designed responsive UI pages",
      "Implemented Technical SEO strategies"
    ]
  },
  {
    title: "Frontend Web Development Intern",
    company: "LivSmart Automation and Security LLP",
    period: "Feb 2024 - Apr 2024",
    points: [
      "Developed the main landing page from scratch",
      "Built a comprehensive user dashboard with Socket.IO",
      "Implemented settings page and frontend authentication",
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-bold gradient-text">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-foreground/60">{exp.company}</p>
                <p className="text-sm text-foreground/60">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}