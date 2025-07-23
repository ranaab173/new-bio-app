"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 92, icon: "⚡" },
      { name: "React.js", level: 88, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "🔺" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 82, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚀" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "PostgreSQL", level: 78, icon: "🐘" },
    ],
  },
  {
    category: "CMS & Platforms",
    technologies: [
      { name: "WordPress", level: 95, icon: "📝" },
      { name: "Elementor", level: 92, icon: "🎯" },
      { name: "WooCommerce", level: 90, icon: "🛒" },
      { name: "Shopify", level: 85, icon: "🏪" },
      { name: "Webflow", level: 80, icon: "🌊" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Expertise across the full stack with specialization in WordPress and e-commerce solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{tech.icon}</span>
                          <span className="text-slate-200 font-medium">{tech.name}</span>
                        </div>
                        <span className="text-blue-400 text-sm font-semibold">{tech.level}%</span>
                      </div>
                      <Progress value={tech.level} className="h-2 bg-slate-600" />
                    </div>
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
