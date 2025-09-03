"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Flip } from "gsap/Flip"

gsap.registerPlugin(Flip)

type Tab = {
  id: string
  title: string
  blurb: string
  image: string
  cardText: string
  icon: string
  preview?: string
}

const TABS: Tab[] = [
  {
    id: "branding",
    title: "Brand Identity",
    blurb:
      "Distinctive visual systems and tone that make your brand memorable and consistent across every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=700&q=80",
    cardText:
      "We define your voice, look, and feel with modern, flexible brand systems.",
    icon: "🎨",
    preview:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "web",
    title: "Web Design",
    blurb:
      "Minimal, conversion-focused interfaces that feel premium and load fast on any device.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80",
    cardText:
      "We design beautiful, accessible websites that turn visitors into customers.",
    icon: "💻",
    preview:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "dev",
    title: "Development",
    blurb:
      "Reliable, scalable builds using modern stacks, crafted for performance and SEO.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=80",
    cardText:
      "From prototypes to production apps — shipped clean and maintainable.",
    icon: "⚡",
    preview:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    blurb:
      "Data-driven growth campaigns that bring the right audience to your brand.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80",
    cardText:
      "Targeted funnels, CRO, and lifecycle strategies that compound results.",
    icon: "📈",
    preview:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    blurb:
      "Technical and on-page SEO to improve rankings, Core Web Vitals, and organic traffic.",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=700&q=80",
    cardText:
      "We tune speed, structure, and content so you’re discoverable and fast.",
    icon: "🔍",
    preview:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=700&q=80",
  },
]

export function WhyChooseUs() {
  const [active, setActive] = useState<Tab>(TABS[1])
  const [hoverSrc, setHoverSrc] = useState<string | null>(null)

  const marqueeRef = useRef<HTMLDivElement>(null)
  const leftImageWrapRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const textWrapRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  // preview wrapper (always mounted)
  const hoverImgRef = useRef<HTMLDivElement>(null)

  // Marquee
  useEffect(() => {
    if (!marqueeRef.current) return
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: "linear",
    })
  }, [])

  // Tab switching animation
  const switchTab = (next: Tab) => {
    if (next.id === active.id) return

    const flipState = titleRef.current ? Flip.getState(titleRef.current) : null
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.to([leftImageWrapRef.current, cardRef.current], {
      x: -30,
      opacity: 0,
      duration: 0.35,
      stagger: 0.05,
    })
      .to(textWrapRef.current, { y: -20, opacity: 0, duration: 0.3 }, "<")
      .add(() => setActive(next))
      .add(() => {
        if (flipState && titleRef.current) {
          Flip.from(flipState, { duration: 0.4, ease: "power2.inOut" })
        }
        gsap.fromTo(
          [leftImageWrapRef.current, cardRef.current],
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "power3.out" }
        )
        const lines = textWrapRef.current?.querySelectorAll(".line")
        if (lines && lines.length) {
          gsap.fromTo(
            lines,
            { y: 18, opacity: 0, rotateX: -8, transformPerspective: 600 },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.55,
              ease: "power3.out",
              stagger: 0.06,
            }
          )
        } else {
          gsap.fromTo(
            textWrapRef.current,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }
          )
        }
      })
  }

  // Show preview near hovered button
// Show preview near hovered button (smart positioning)
const showPreview = (src: string, btn: HTMLButtonElement) => {
  setHoverSrc(src)
  if (!hoverImgRef.current) return

  const rect = btn.getBoundingClientRect()
  const vw = window.innerWidth
  const vh = window.innerHeight
  const previewW = 220 // match CSS width of preview box
  const previewH = 150 // match CSS height

  let x = rect.right + 20
  let y = rect.top

  // If not enough space to the right → flip left
  if (x + previewW > vw) {
    x = rect.left 
  }

  // If preview goes below viewport → adjust upward
  if (y + previewH > vh) {
    y = vh - previewH - 20
  }

  gsap.set(hoverImgRef.current, {
    x,
    y,
    scale: 0.9,
    opacity: 0,
    visibility: "visible",
  })

  gsap.to(hoverImgRef.current, {
    opacity: 1,
    scale: 1,
    duration: 0.25,
    ease: "power3.out",
  })
}


  // Hide preview
  const hidePreview = () => {
    if (!hoverImgRef.current) return
    gsap.killTweensOf(hoverImgRef.current)
    gsap.to(hoverImgRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.18,
      ease: "power3.in",
      onComplete: () => {
        if (hoverImgRef.current)
          gsap.set(hoverImgRef.current, { visibility: "hidden" })
        setHoverSrc(null)
      },
    })
  }

  return (
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      {/* Marquee */}
      <section className="overflow-hidden border-b border-white/10 py-6 select-none">
        <div className="flex items-center whitespace-nowrap text-[8vw] leading-none font-extrabold uppercase tracking-tight text-white">
          <div ref={marqueeRef} className="flex">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mx-[6vw]">
                WHY CHOOSE US •
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* LEFT */}
        <div className="relative">
          <div
            ref={leftImageWrapRef}
            key={active.id + "-img"}
            className="rounded-3xl overflow-hidden shadow-2xl w-full h-[420px] bg-white/5"
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            ref={cardRef}
            key={active.id + "-card"}
            className="absolute -bottom-12 left-10 right-10 md:left-16 md:right-auto bg-white/50 backdrop-blur rounded-3xl p-8 shadow-xl max-w-[520px]"
          >
            <div className="text-4xl mb-4">{active.icon}</div>
            <p className="text-zinc-900">{active.cardText}</p>
            <div className="mt-6 text-black text-xl">→</div>
          </div>
          
        </div>

        {/* RIGHT */}
        <div className="pt-2">
          <p className="text-zinc-400 max-w-[620px] mb-10">
            We’re a modern web design studio building premium, performance-first
            experiences for ambitious brands.
          </p>

          <div className="space-y-6">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => switchTab(t)}
                onMouseEnter={(e) =>
                  showPreview(t.preview ?? t.image, e.currentTarget)
                }
                onMouseLeave={hidePreview}
                className={`block text-left w-full text-4xl md:text-5xl font-extrabold leading-tight transition-colors ${
                  active.id === t.id
                    ? "text-white"
                    : "text-white/35 hover:text-white/70"
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>

          <div
            ref={textWrapRef}
            className="mt-12 space-y-3 max-w-[640px]"
          >
            <h3 ref={titleRef} className="line text-2xl font-semibold">
              {active.title}
            </h3>
            <p className="line text-zinc-300">{active.blurb}</p>
          </div>
        </div>
      </section>

      {/* Floating hover preview */}
      <div
        ref={hoverImgRef}
        className="fixed top-0 z-[9999] pointer-events-none w-48 h-36 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 invisible"
        style={{ willChange: "transform, opacity", visibility: "hidden" }}
      >
        {hoverSrc && (
          <img
            src={hoverSrc}
            alt="preview"
            className="w-full h-full object-cover"
            draggable={false}
          />
        )}
      </div>
    </main>
  )
}
