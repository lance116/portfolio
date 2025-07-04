"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
      </motion.div>
    )
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Name</label>
            <Input
              required
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email</label>
            <Input
              type="email"
              required
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Subject</label>
          <Input
            required
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
            placeholder="What's this about?"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Message</label>
          <Textarea
            required
            rows={5}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 resize-none"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </div>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Card>
  )
}
