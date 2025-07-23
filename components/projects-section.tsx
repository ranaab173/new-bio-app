"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    description:
      "Complete WooCommerce solution with custom Elementor designs, payment integration, and inventory management.",
    image: "/placeholder.svg?height=300&width=400",
    category: "WordPress",
    tags: ["WordPress", "WooCommerce", "Elementor", "PHP"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "React Dashboard App",
    description:
      "Modern admin dashboard built with React.js and Node.js, featuring real-time analytics and user management.",
    image: "/placeholder.svg?height=300&width=400",
    category: "React Apps",
    tags: ["React.js", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Shopify Beauty Store",
    description: "Custom Shopify theme development with advanced product filtering and subscription functionality.",
    image: "/placeholder.svg?height=300&width=400",
    category: "E-Commerce",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Next.js Portfolio Site",
    description: "High-performance portfolio website built with Next.js, featuring SSG and optimized SEO.",
    image: "/placeholder.svg?height=300&width=400",
    category: "React Apps",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "WordPress Corporate Site",
    description: "Professional corporate website with custom Elementor widgets and advanced SEO optimization.",
    image: "/placeholder.svg?height=300&width=400",
    category: "WordPress",
    tags: ["WordPress", "Elementor", "ACF", "Yoast SEO"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Webflow Agency Site",
    description: "Creative agency website built in Webflow with custom animations and CMS integration.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Webflow",
    tags: ["Webflow", "CSS3", "JavaScript", "CMS"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "WordPress", "E-Commerce", "React Apps", "Webflow"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            A showcase of my recent work across different technologies and platforms
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-slate-600 text-slate-300 hover:bg-slate-700"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-800 border-slate-700 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
