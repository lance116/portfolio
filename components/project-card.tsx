"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const tagToIcon: { [key: string]: string } = {
  "React": "devicon-react-original",
  "Node.js": "devicon-nodejs-plain",
  "Python": "devicon-python-plain",
  "TensorFlow": "devicon-tensorflow-original",
  "Next.js": "devicon-nextjs-original",
  "TypeScript": "devicon-typescript-plain",
  "JavaScript": "devicon-javascript-plain",
  "HTML5": "devicon-html5-plain",
  "CSS3": "devicon-css3-plain",
  "Java": "devicon-java-plain",
  "Tailwind CSS": "devicon-tailwindcss-plain",
  "PyTorch": "devicon-pytorch-original",
  "NumPy": "devicon-numpy-original",
  "Express.js": "devicon-express-original",
};

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm h-full flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>

        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6 flex-1">
            {project.tags.map((tag) => {
              const iconClass = tagToIcon[tag]
              return (
                <Badge key={tag} variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500/30 flex items-center gap-1.5 pr-2.5 pl-2 py-1">
                  {iconClass && <i className={`${iconClass} text-base`}></i>}
                  <span className="text-xs">{tag}</span>
                </Badge>
              )
            })}
          </div>

          <Button variant="ghost" className="w-full text-blue-400 hover:text-white hover:bg-blue-600/20 mt-auto" asChild>
            <Link href={project.id === "period-tracker-app" ? "https://github.com/lance116/period-tracker" : `/projects/${project.id}`} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View GitHub Repository →
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
