"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const skills = [
  { name: "React", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Next.js", logo: "/placeholder.svg?height=48&width=48" },
  { name: "TypeScript", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Python", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Node.js", logo: "/placeholder.svg?height=48&width=48" },
  { name: "TensorFlow", logo: "/placeholder.svg?height=48&width=48" },
  { name: "PostgreSQL", logo: "/placeholder.svg?height=48&width=48" },
  { name: "AWS", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Docker", logo: "/placeholder.svg?height=48&width=48" },
  { name: "GraphQL", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Figma", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Git", logo: "/placeholder.svg?height=48&width=48" },
]

// We duplicate the skills array to ensure a seamless loop
const extendedSkills = [...skills, ...skills, ...skills, ...skills]

export function SkillsMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-8 group">
      <motion.div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 40s linear infinite",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {extendedSkills.map((skill, index) => (
          <div key={index} className="flex items-center justify-center mx-8 flex-shrink-0">
            <div className="flex flex-col items-center gap-3 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={skill.logo || "/placeholder.svg"}
                alt={`${skill.name} logo`}
                width={48}
                height={48}
                className="grayscale transition-all duration-300 group-hover:grayscale-0"
              />
              <span className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
      {/* Fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
