"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "", budget: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and help businesses grow their online presence. Whether you
                need a custom WordPress solution, an e-commerce store, or a modern React application, I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div>john.doe@example.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-300">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-300">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div>San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Response Time</h4>
              <p className="text-slate-300">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call me
                directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-700 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-slate-600 border-slate-500 text-white placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-slate-600 border-slate-500 text-white placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <Select onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                      <SelectValue placeholder="Project Budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-600 border-slate-500">
                      <SelectItem value="under-5k" className="text-white">
                        Under $5,000
                      </SelectItem>
                      <SelectItem value="5k-10k" className="text-white">
                        $5,000 - $10,000
                      </SelectItem>
                      <SelectItem value="10k-25k" className="text-white">
                        $10,000 - $25,000
                      </SelectItem>
                      <SelectItem value="25k-plus" className="text-white">
                        $25,000+
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-slate-600 border-slate-500 text-white placeholder-slate-400 min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
