"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "The team delivered an exceptional e-commerce platform that exceeded our expectations. Our sales increased by 300% within the first quarter after launch.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthTech Solutions",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Their expertise in mobile app development is outstanding. The healthcare app they built for us is now used by thousands of patients daily.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, RetailCorp",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Working with this team was a game-changer. They transformed our outdated website into a modern, high-converting platform that drives real results.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "CTO, FinanceFlow",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "The technical expertise and attention to detail is impressive. They built a complex financial dashboard that handles millions of transactions seamlessly.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Product Manager, EduTech",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "From concept to launch, they guided us through every step. The educational platform they developed has revolutionized how our students learn.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Operations Director, LogiCorp",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Their ability to understand complex business requirements and translate them into elegant solutions is remarkable. Highly recommended!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                      <Card
                        key={index}
                        className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                          <div className="flex items-center">
                            <Avatar className="w-12 h-12 mr-4">
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                              <AvatarFallback>
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
