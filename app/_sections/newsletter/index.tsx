"use client"

import type * as React from "react"
import { Section } from "../../../common/section-wrapper"
import { Input } from "../../../common/input"

export type NewsletterFragment = {
  title: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
}

export function Newsletter({ newsletter }: { newsletter: NewsletterFragment }) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string

    // Simple client-side handling - you can integrate with your preferred email service
    console.log("Newsletter subscription:", email)
    alert("Thank you for subscribing!")
  }

  return (
    <Section className="bg-muted/50 !py-10" container="full">
      <div className="container mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:justify-between">
        <div className="flex flex-1 flex-col items-start gap-1">
          <h5 className="text-xl font-medium lg:text-2xl">{newsletter.title}</h5>
          <p className="text-muted-foreground lg:text-lg">
            {newsletter.subtitle || "Get the latest updates and insights"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            name="email"
            placeholder={newsletter.placeholder || "Enter your email"}
            required
            className="min-w-[250px]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {newsletter.buttonText || "Subscribe"}
          </button>
        </form>
      </div>
    </Section>
  )
}
