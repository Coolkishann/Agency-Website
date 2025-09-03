"use client"

import { useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "E-commerce Platform",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
    },
    {
      title: "Fitness Tracking App",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
    },
    {
      title: "SaaS Analytics Dashboard",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
    },
  ]

  // Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 2

    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="overflow-hidden py-20">
      <div className="container mx-auto px-6 ">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects.
          </p>
        </div> */}
        
  <div className="w-full py-10 ml-20 ">
        <h1 className="text-gray-100 font-extrabold text-7xl leading-tight mb-8">
          Our Projects
        </h1>
        <p className="text-2xl text-gray-300">
          We offer comprehensive digital solutions to help your business thrive in the modern world.
        </p>
      </div>
        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-hidden pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.concat(projects).map((project, index) => (
            <Card
              key={index}
              className="group relative flex-shrink-0 w-90 h-[500px] overflow-hidden border-0 bg-card/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-white text-lg font-semibold mb-4">{project.title}</h3>
                <Button
                  size="sm"
                  variant="secondary"
                  className="flex items-center gap-2"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
