import type React from "react"
import "../styles/globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { Providers } from "./providers"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const staticData = {
    logo: {
      light: {
        url: "/placeholder.svg?height=40&width=120",
        alt: "Digital Agency Logo",
        width: 120,
        height: 40,
      },
      dark: {
        url: "/placeholder.svg?height=40&width=120",
        alt: "Digital Agency Logo",
        width: 120,
        height: 40,
      },
    },
    header: {
      navbar: {
        items: [
          { _id: "1", _title: "Services", href: "#services", sublinks: { items: [] } },
          { _id: "2", _title: "Portfolio", href: "#portfolio", sublinks: { items: [] } },
          { _id: "3", _title: "Process", href: "#process", sublinks: { items: [] } },
          { _id: "4", _title: "About", href: "#about", sublinks: { items: [] } },
        ],
      },
      rightCtas: {
        items: [{ _id: "cta1", label: "Get Started", href: "#contact", type: "primary" }],
      },
    },
    footer: {
      newsletter: {
        title: "Stay Updated",
        subtitle: "Get the latest insights on web and mobile development",
        placeholder: "Enter your email",
        buttonText: "Subscribe",
      },
      copyright: "© 2024 Digital Agency. All rights reserved.",
      navbar: {
        items: [
          { _title: "Privacy Policy", url: "/privacy" },
          { _title: "Terms of Service", url: "/terms" },
          { _title: "Contact", url: "/contact" },
        ],
      },
      socialLinks: [
        { _title: "Twitter", url: "https://twitter.com", icon: { url: "/placeholder.svg?height=24&width=24" } },
        { _title: "LinkedIn", url: "https://linkedin.com", icon: { url: "/placeholder.svg?height=24&width=24" } },
      ],
    },
  }

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-background text-foreground ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <Providers>
          <Header logo={staticData.logo} header={staticData.header} />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Footer footer={staticData.footer} logo={staticData.logo} />
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  title: "Digital Agency - Web & Mobile Development Solutions",
  description:
    "Professional web and mobile development services. We build custom applications, responsive websites, and mobile apps for businesses of all sizes.",
  generator: "v0.dev",
}
