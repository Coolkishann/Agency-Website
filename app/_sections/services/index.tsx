"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Globe, Smartphone, Database, Cloud, Palette, ShoppingCart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: Globe, title: "Web Development", description: "React, Next.js, TypeScript apps.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" },
  { icon: Smartphone, title: "Mobile Apps", description: "iOS/Android with great UX.", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" },
  { icon: Database, title: "Backend", description: "Secure APIs & databases.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" },
  { icon: Palette, title: "UI/UX Design", description: "Beautiful, user-friendly design.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" },
  { icon: ShoppingCart, title: "E-commerce", description: "Shops with payments & analytics.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" },
  { icon: Cloud, title: "Cloud & DevOps", description: "Scalable infra, CI/CD pipelines.", img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80" },
]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current
      const section = sectionRef.current
      if (!container || !section) return

      const totalScroll = container.scrollWidth - window.innerWidth

      // Start offset: container shifted right so first card is at right edge
      gsap.set(container, { x: -totalScroll })

      gsap.to(container, {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + totalScroll,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])



  return (

    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* <section className="py-16 sm:py-20 lg:py-32 bg-muted/30"> */}

      <div className="w-full py-10 ml-20">
        <h1 className="text-gray-100 font-extrabold text-7xl leading-tight mb-8">
          Our Services
        </h1>
        <p className="text-2xl text-gray-300 max-w-2xl">
          We offer comprehensive digital solutions to help your business thrive in the modern world.
        </p>
      </div>

      {/* Horizontal scrolling container */}
      <div ref={containerRef} className="flex space-x-8 px-8 pr-[200vw] relative">
        {services.map((service, i) => (
          <Card
            key={i}
            className="min-w-[420px] h-[400px] rounded-3xl border border-transparent bg-card/80 backdrop-blur-md p-6 relative group overflow-hidden cursor-pointer shadow-lg transition-shadow duration-500 hover:shadow-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-colors rounded-3xl" />
            </div>

            {/* Content pinned to bottom */}
            <CardHeader className="relative z-10 h-full flex flex-col justify-end pb-8">
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-5 shadow-md">
                <service.icon className="w-7 h-7 text-primary drop-shadow" />
              </div>
              <CardTitle className="text-3xl font-semibold drop-shadow-md">{service.title}</CardTitle>
              <CardDescription className="mt-2 text-lg text-gray-200 drop-shadow-sm">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>



        ))}
      </div>
    </section>
  )
}
