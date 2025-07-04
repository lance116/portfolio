import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

const projects = {
  "quantum-encryption": {
    title: "Quantum-Safe File Transfer",
    description: "End-to-end encrypted document sharing with post-quantum cryptography",
    longDescription:
      "A revolutionary file transfer application that implements post-quantum cryptographic algorithms to ensure security against future quantum computing threats. Built with React and Node.js, featuring real-time encryption, secure key exchange, and intuitive user interface.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Node.js", "Cryptography", "WebRTC"],
    github: "https://github.com/lanceyan/quantum-transfer",
    demo: "https://quantum-transfer.vercel.app",
    problem: "Traditional encryption methods will become vulnerable to quantum computers, threatening data security.",
    solution: "Implemented NIST-approved post-quantum cryptographic algorithms with a user-friendly interface.",
    results: ["99.9% uptime", "256-bit quantum-safe encryption", "10,000+ secure transfers"],
    features: [
      "Post-quantum cryptographic algorithms",
      "Real-time file encryption/decryption",
      "Secure peer-to-peer transfer",
      "Zero-knowledge architecture",
      "Cross-platform compatibility",
    ],
  },
  "chess-neural-network": {
    title: "Chess Neural Network",
    description: "Deep learning model that achieved 1800+ ELO rating",
    longDescription:
      "An advanced chess AI built from scratch using deep neural networks and reinforcement learning. The model was trained on millions of chess games and achieved a competitive ELO rating of 1800+.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Python", "TensorFlow", "Neural Networks", "Game AI"],
    github: "https://github.com/lanceyan/chess-ai",
    demo: "https://chess-ai-demo.vercel.app",
    problem:
      "Creating a chess AI that can compete with intermediate human players without using traditional chess engines.",
    solution: "Developed a deep neural network trained through self-play and reinforcement learning.",
    results: ["1800+ ELO rating", "95% win rate vs beginners", "1M+ training games"],
    features: [
      "Deep convolutional neural network",
      "Monte Carlo Tree Search",
      "Self-play training system",
      "Position evaluation engine",
      "Real-time game analysis",
    ],
  },
  "portfolio-website": {
    title: "Interactive Portfolio",
    description: "This very website - built with Next.js and Three.js",
    longDescription:
      "A cutting-edge portfolio website showcasing modern web development techniques including 3D graphics, advanced animations, and responsive design. Built to impress recruiters and demonstrate technical capabilities.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "Three.js", "Framer Motion", "TypeScript"],
    github: "https://github.com/lanceyan/portfolio",
    demo: "https://lanceyan.dev",
    problem: "Need a portfolio that stands out and demonstrates advanced technical skills.",
    solution: "Created an immersive 3D experience with smooth animations and modern design.",
    results: ["Sub-1s load time", "100% Lighthouse score", "50+ recruiter contacts"],
    features: [
      "3D particle animations",
      "Smooth scroll interactions",
      "Responsive design",
      "Performance optimized",
      "Accessibility compliant",
    ],
  },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Button variant="ghost" asChild className="text-blue-400 hover:text-white">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{project.longDescription}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-blue-400 text-blue-400">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Problem</h3>
              <p className="text-gray-300">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Solution</h3>
              <p className="text-gray-300">{project.solution}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Results</h3>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="text-gray-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Interested in this project?</h3>
          <p className="text-gray-300 mb-8">Check out the code or see it in action.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
