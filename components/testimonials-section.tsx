"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Fashion Forward",
    company: "E-commerce Startup",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Outstanding work on our WooCommerce store! The custom Elementor designs exceeded our expectations and our sales increased by 40% within the first month.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, TechStart",
    company: "SaaS Company",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The React dashboard he built for us is incredibly intuitive and performant. His attention to detail and technical expertise is impressive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Beauty Brand",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Our Shopify store transformation was amazing! The custom features and optimizations resulted in a 60% improvement in page load times.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "Digital Agency",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Professional, reliable, and delivers exceptional results. The WordPress site he created perfectly represents our brand and converts visitors into clients.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-slate-300">What my clients say about working with me</p>
        </div>

        <div className="relative">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-slate-200 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-slate-400 text-sm">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-400" : "bg-slate-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
