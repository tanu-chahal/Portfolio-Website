"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tech: string
  link: string
  index: number
}

export function ProjectCard({ title, description, tech, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        whileHover="hover"
      >
        <div className="relative h-full p-6 border rounded-lg bg-background/50 backdrop-blur-sm 
                      hover:border-primary/50 transition-colors duration-300 group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold">{title}</h3>
              <motion.div
                variants={{
                  hover: { rotate: 15, scale: 1.1 }
                }}
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                {link.includes('github') ? <Github size={20} /> : <ExternalLink size={20} />}
              </motion.div>
            </div>
            
            <p className="text-foreground/80">{description}</p>
            
            <div className="flex flex-wrap gap-2">
              {tech.split(", ").map((item, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hover: { y: -2, scale: 1.05 }
                  }}
                  className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  )
}