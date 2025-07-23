import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Coffee } from "lucide-react"

const milestones = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    description: "Leading complex e-commerce projects and mentoring junior developers",
  },
  {
    year: "2022",
    title: "WordPress Specialist",
    description: "Specialized in custom WordPress and WooCommerce development",
  },
  {
    year: "2020",
    title: "Frontend Developer",
    description: "Started focusing on React.js and modern JavaScript frameworks",
  },
  {
    year: "2018",
    title: "Web Developer",
    description: "Began professional web development journey",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm a passionate full-stack web developer with over 6 years of experience creating exceptional digital
                experiences. My expertise lies in WordPress, WooCommerce, and modern JavaScript frameworks, helping
                businesses establish a strong online presence.
              </p>
              <p>
                I specialize in building high-performance e-commerce solutions that not only look great but also drive
                conversions. From custom WordPress themes to complex React applications, I bring ideas to life with
                clean, maintainable code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                enjoying a good cup of coffee while planning the next big project.
              </p>
            </div>

            <div className="flex items-center space-x-6 mt-8 text-slate-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4" />
                <span>Coffee Enthusiast</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Career Timeline</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full flex-shrink-0">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-blue-400 font-semibold">{milestone.year}</span>
                        </div>
                        <h4 className="text-white font-semibold mb-1">{milestone.title}</h4>
                        <p className="text-slate-300 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
