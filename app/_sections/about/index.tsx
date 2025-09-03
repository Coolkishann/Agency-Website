"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Globe } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"

const stats = [
  { icon: Users, label: "Happy Clients", value: 500, suffix: "+", color: "text-blue-500" },
  { icon: Award, label: "Projects Completed", value: 600, suffix: "+", color: "text-emerald-500" },
  { icon: Clock, label: "Years Experience", value: 8, suffix: "+", color: "text-purple-500" },
  { icon: Globe, label: "Countries Served", value: 25, suffix: "+", color: "text-orange-500" },
]

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  return (
    <section
      ref={sectionRef}
      className="py-16 mt-20 lg:py-20 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Staggered Letter Paragraph */}
        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.02 },
            },
          }}
          className="text-center mx-auto font-light text-5xl leading-relaxed mb-16"
        >
          {Array.from(
            "Great digital products don’t happen by accident—they’re built through strategy, process, and execution. Our structured approach ensures every website, MVP, or application we create is efficient, scalable, and high-performing."
          ).map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-10"
        >
          <div className="rounded-[100px] overflow-hidden h-[600px] shadow-lg bg-muted/30 hover:scale-[0.99] transition-transform duration-500">
            <video
              src="/demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[50px]"
            />
          </div>
        </motion.div>

        {/* Stats Section with Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.3 + 0.5, duration: 0.8 },
                },
              }}
            >
              <Card className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <stat.icon
                    className={`w-8 h-8 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Smooth Counter Animation */
function AnimatedCounter({ target, suffix }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let start = 0
    const duration = 2000 // 2s smooth count
    const stepTime = Math.max(Math.floor(duration / target), 20)

    const timer = setInterval(() => {
      start += 1
      setCount((prev) => (prev < target ? prev + 1 : target))
      if (start >= target) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div ref={nodeRef} className="text-3xl md:text-4xl font-bold mb-2">
      {count}
      {suffix}
    </div>
  )
}
