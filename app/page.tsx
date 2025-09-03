"use client"
import { useState, useEffect } from "react"
import PreLoader from "../components/PreLoader"   // adjust path if needed

// Sections
import { About } from "./_sections/about"
import { Home } from "./_sections/hero"
import { Hero } from "./_sections/hero-agency"
import { Services } from "./_sections/services"
import { Portfolio } from "./_sections/portfolio"
import { Process } from "./_sections/process"
import { Testimonials } from "./_sections/testimonials-agency"
import { CallToAction } from "./_sections/cta"
import { WhyChooseUs } from "./_sections/ychoose"

export default function HomePage() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 4000) // match your PreLoader duration (percentage reaches 100 in ~3.5s)

  //   return () => clearTimeout(timer)
  // }, [])

  // if (loading) {
  //   return <PreLoader />
  // }

  return (
    <>
      <Home />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <About />
      <Process />
      {/* <Testimonials /> */}
      <CallToAction />
    </>
  )
}
