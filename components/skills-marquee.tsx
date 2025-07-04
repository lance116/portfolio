"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: string
}

interface SkillsMarqueeProps {
  skills: Skill[]
  direction?: "left" | "right"
}

export function SkillsMarquee({ skills, direction = "left" }: SkillsMarqueeProps) {
  // We duplicate the skills array to ensure a seamless loop
  const extendedSkills = [...skills, ...skills, ...skills, ...skills]

  return (
    <div className="relative w-full overflow-hidden py-8 group">
      <motion.div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-${direction} 40s linear infinite`,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {extendedSkills.map((skill, index) => (
          <div key={index} className="flex items-center justify-center mx-8 flex-shrink-0">
            <div className="flex flex-col items-center gap-3 transition-transform duration-300 group-hover:scale-110">
              <i className={`${skill.icon} text-5xl text-gray-400 group-hover:text-white transition-colors duration-300`}></i>
              <span className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
      {/* Fades on edges - using a mask for a clean fade to transparent */}
      <div
        className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"
        style={{ maskImage: "linear-gradient(to right, black 70%, transparent 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"
        style={{ maskImage: "linear-gradient(to left, black 70%, transparent 100%)" }}
      />
      <style jsx global>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}
