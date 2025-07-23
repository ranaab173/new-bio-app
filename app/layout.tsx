import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - Full-Stack Web Developer | WordPress & WooCommerce Specialist",
  description:
    "Web developer portfolio showcasing WordPress, WooCommerce, and React.js projects. Expert in Elementor, Shopify, and custom web solutions. Let's build your next website!",
  keywords: "web developer, WordPress, WooCommerce, React.js, Next.js, Elementor, Shopify, full-stack developer",
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Full-Stack Web Developer",
    description: "Expert in WordPress, WooCommerce, React.js, and modern web development",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
