"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

interface Experience {
  role: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-start gap-8"
          >
            {/* Timeline dot */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
              <div className="w-8 h-8 rounded-full bg-white" />
            </div>

            {/* Content */}
            <Card className="flex-1 bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                    <Badge variant="outline" className="border-blue-400 text-blue-400 w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-400 w-fit">
                      <MapPin className="h-3 w-3 mr-1" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
