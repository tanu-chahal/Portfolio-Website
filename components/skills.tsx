"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "C", "C++", "Java"]
  },
  {
    title: "Frameworks/Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Express.js",
      "Node.js",
      "Socket.IO",
      "Mongoose",
      "Prisma",
      "MUI",
      "SASS",
      "Recoil",
      "React Router",
      "JWT",
      "Google OAuth",
      "ShadCN",
      "Contentlayer",
      "Framer Motion",
      "Bootstrap",
      "Tailwind CSS"
    ]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Supabase"]
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Netlify", "Vercel", "NGINX", "Redis", "Upstash", "Turborepo"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-bold gradient-text">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}