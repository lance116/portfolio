"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowRight, Code, Brain, Users, Award } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ContactForm } from "@/components/contact-form"
import { HeroEffects } from "@/components/hero-effects"
import { TypewriterEffect } from "@/components/typewriter-effect"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const languages = [
    { name: "Python", icon: "devicon-python-original" },
    { name: "JavaScript", icon: "devicon-javascript-original" },
    { name: "TypeScript", icon: "devicon-typescript-original" },
    { name: "HTML5", icon: "devicon-html5-original" },
    { name: "CSS3", icon: "devicon-css3-original" },
    { name: "Java", icon: "devicon-java-original" },
  ];

  const frameworksAndTools = [
    { name: "React", icon: "devicon-react-original" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    { name: "PyTorch", icon: "devicon-pytorch-original" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original" },
    { name: "NumPy", icon: "devicon-numpy-original" },
    { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "Express", icon: "devicon-express-original" },
  ];

  const projects = [
    {
      id: "period-tracker-app",
      title: "AI Period Tracker App",
      description: "A privacy-focused period tracking app with AI-powered health insights using Google Gemini.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Gemini API"],
      featured: true,
    },
    {
      id: "chess-neural-network",
      title: "Chess Neural Network",
      description: "An intelligent chess engine powered by deep learning, analyzing board positions with TensorFlow.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "TensorFlow", "Matplotlib"],
      featured: true,
    },
    {
      id: "portfolio-website",
      title: "This Website!",
      description: "A modern, responsive portfolio website built with Next.js 14, featuring smooth animations and interactive 3D elements.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
      featured: true,
    },
  ]

  const experiences = [
    {
      role: "Founding Engineer",
      company: "Stealth AI Startup",
      location: "Toronto, ON, Canada",
      period: "2024 - Present",
      description: "Building next-generation AI tools for enterprise automation",
      achievements: [
        "Architected scalable microservices handling 10M+ requests/day",
        "Led frontend development for React-based dashboard",
        "Implemented real-time ML inference pipeline",
      ],
    },
    {
      role: "Teaching Assistant",
      company: "Moscrop Secondary",
      location: "Burnaby, BC",
      period: "2023 - 2024",
      description: "Mentored students in computer science and mathematics",
      achievements: [
        "Taught 50+ students advanced programming concepts",
        "Developed interactive coding curriculum",
        "Improved student performance by 40% average",
      ],
    },
    {
      role: "Research Fellow",
      company: "SHAD & Toronto Metropolitan University",
      location: "Toronto, ON",
      period: "2023",
      description: "Conducted research in machine learning and data science",
      achievements: [
        "Published research on neural network optimization",
        "Collaborated with PhD researchers on cutting-edge projects",
        "Presented findings at international conference",
      ],
    },
  ]

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <div ref={containerRef} className="min-h-screen text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            LY
          </motion.div>
          <div className="flex gap-6">
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Subtle Background Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <HeroEffects mousePosition={mousePosition} />
        </motion.div>

        <div className="text-center z-10 max-w-4xl mx-auto px-6 relative">
          {/* Animated Name with Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="text-7xl md:text-9xl font-bold mb-6 relative"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
              Lance Yan
            </span>
          </motion.h1>

          {/* Dynamic Typewriter Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl mb-12 text-gray-300 min-h-[4rem] flex flex-col items-center justify-center"
          >
            <div className="mb-2">
              <TypewriterEffect
                words={["Engineer.", "Builder.", "Innovator.", "Problem Solver."]}
                className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold"
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-lg text-gray-400"
            >
              Relentless in pursuit of elegant solutions
            </motion.span>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden group"
                asChild
              >
                <Link href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent backdrop-blur-sm relative overflow-hidden group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>Resume Soon!</span>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex justify-center gap-6 mt-12"
          >
            {[
              { icon: Github, href: "https://github.com/lance116", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/lance-yan", label: "LinkedIn" },
              { icon: Mail, href: "mailto:lance.yan@uwaterloo.ca", label: "Email" },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  rotate: [0, -10, 10, 0],
                }}
                className="p-3 rounded-full border border-gray-700 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 backdrop-blur-sm relative group"
                aria-label={label}
              >
                <Icon className="h-6 w-6 group-hover:text-blue-400 transition-colors" />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="mt-16 flex justify-center"
          >
            <motion.svg
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-32 relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-28">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I'm a Computer Science student at the University of Waterloo with a passion for building elegant and scalable
              tools. My experience spans frontend development, AI research, and startup
              engineering, where I've learned to balance technical excellence with user-centric design. I thrive in
              environments where innovation meets execution.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Frameworks & Tools</h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
              {frameworksAndTools.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-3 group">
                  <i className={`${skill.icon} text-5xl transition-transform duration-300 group-hover:scale-110`}></i>
                  <span className="text-sm text-gray-400">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-center mt-20 mb-12 text-white">Languages</h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
              {languages.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-3 group">
                  <i className={`${skill.icon} text-5xl transition-transform duration-300 group-hover:scale-110`}></i>
                  <span className="text-sm text-gray-400">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats - REMOVED */}
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my most impactful work, from AI-powered applications to cutting-edge web experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My journey through startups, research, and education has shaped my approach to building impactful
              technology.
            </p>
          </motion.div>

          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're looking for a technical co-founder, a skilled engineer, or just want to chat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "lance.yan@uwaterloo.ca", href: "mailto:lance.yan@uwaterloo.ca" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/lance-yan/", label: "linkedin.com/in/lance-yan" },
                  { icon: Github, href: "https://github.com/lance116", label: "github.com/lance116" },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300"
                  >
                    <Icon className="h-6 w-6 text-blue-400" />
                    <span className="text-gray-300">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Lance Yan. Built with lots of ☕
          </p>
        </div>
      </footer>
    </div>
  )
}
