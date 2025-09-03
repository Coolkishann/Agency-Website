"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react"

export function Hero() {
    const heroRef = useRef<HTMLDivElement>(null)

    // Split text into letters
    const splitText = (element: HTMLElement) => {
        if (!element) return
        const text = element.textContent || ""
        element.innerHTML = text
            .split("")
            .map((char) =>
                char === " "
                    ? `<span class="inline-block">&nbsp;</span>`
                    : `<span class="inline-block">${char}</span>`
            )
            .join("")
    }

    useEffect(() => {
        if (!heroRef.current) return

        const ctx = gsap.context(() => {
            // Split all h1 into spans
            heroRef.current?.querySelectorAll("h1 div").forEach((el) => splitText(el as HTMLElement))

            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                delay: 1, // ⏳ Start timeline after 1s
            })

            // Badge zoom & fade
            tl.from(".hero-badge", {
                scale: 1.2,
                opacity: 0,
                duration: 0.6,
            })

            // Zoom-out effect for heading letters
            tl.from(
                "h1 span",
                {
                    opacity: 0,
                    scale: 2, // start bigger
                    y: 40,
                    duration: 0.8,
                    stagger: 0.03,
                },
                "-=0.2"
            )

            // Subtitle
            tl.from(
                ".hero-subtitle",
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                },
                "-=0.4"
            )

            // Buttons
            tl.from(
                ".hero-cta button",
                {
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    stagger: 0.2,
                },
                "-=0.4"
            )

            // Service Icons
            tl.from(
                ".hero-services > div",
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    stagger: 0.15,
                },
                "-=0.3"
            )
        }, heroRef)

        return () => ctx.revert()
    }, [])


    return (
        <section ref={heroRef} className="relative min-h-[60vh] overflow-hidden mb-40">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
            <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />

            <div className="relative z-10 container">
                <div className="text-center">
                    {/* Badge */}
                    <div className="hero-badge inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 sm:mb-8">
                        <Code className="w-4 h-4" />
                        Digital Solutions That Drive Results
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-8xl font-bold tracking-tight mb-6 sm:mb-8 leading-[1] space-y-4">
                        <div className="mb-2">We Build</div>
                        <div className="text-primary mb-2">Digital Experiences</div>
                        <div>That Matter</div>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed px-4">
                        From custom web applications to mobile apps, we transform your ideas into powerful digital solutions that
                        engage users and grow your business.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4">
                        <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                            Start Your Project
                            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent w-full sm:w-auto"
                        >
                            View Our Work
                        </Button>
                    </div>

                    {/* Services Icons */}
                    <div className="hero-services flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-muted-foreground px-4">
                        <div className="flex items-center justify-center gap-2">
                            <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm sm:text-base">Web Development</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm sm:text-base">Mobile Apps</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Code className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm sm:text-base">Custom Solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
