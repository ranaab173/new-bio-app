import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "WordPress Performance Optimization: A Complete Guide",
    excerpt: "Learn how to optimize your WordPress site for lightning-fast load times and better user experience.",
    date: "2024-01-15",
    category: "WordPress",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "WooCommerce vs Shopify: Which is Right for Your Business?",
    excerpt: "A comprehensive comparison of the two leading e-commerce platforms to help you make the right choice.",
    date: "2024-01-10",
    category: "E-Commerce",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Building Modern React Applications with Next.js",
    excerpt:
      "Discover the power of Next.js for creating fast, SEO-friendly React applications with server-side rendering.",
    date: "2024-01-05",
    category: "React",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Insights, tips, and tutorials on web development, WordPress, and e-commerce
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{post.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-lg leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-slate-400 text-xs mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 bg-transparent"
            size="lg"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
