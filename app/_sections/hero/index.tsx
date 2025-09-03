"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  // Utility: split text into spans for stagger animations
  const splitText = (element: HTMLElement) => {
    if (!element) return;
    const text = element.textContent || "";
    element.innerHTML = text
      .split("")
      .map((char) =>
        char === " " ? `<span class="inline-block">&nbsp;</span>` : `<span class="inline-block">${char}</span>`
      )
      .join("");
  };

  useEffect(() => {
    const heroReveal = gsap.utils.toArray<HTMLElement>(".hero-reveal");

    heroReveal.forEach((element) => {
      const heroBox = element.querySelector<HTMLElement>(".hero-reveal__header");
      const contentEl = element.querySelector<HTMLElement>(".hero-reveal__content");

      if (!heroBox || !contentEl) return;

      const heroBoxHeight = heroBox.offsetHeight;
      const contentHeight = contentEl.offsetHeight;

      // Scroll content upward
      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${Math.max(heroBoxHeight, contentHeight)}`,
          scrub: true,
        },
      }).fromTo(contentEl, { y: "50%" }, { y: "0%", ease: "none" });

      // Animate content elements (staggered)
      const contentItems = contentEl.querySelectorAll<HTMLElement>(".animate-item");

      gsap.from(contentItems, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Apply staggered letters effect to headings
      const headings = contentEl.querySelectorAll<HTMLElement>("h1, p");
      headings.forEach((h) => splitText(h));

      gsap.from(contentEl.querySelectorAll("h1 span, p span"), {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.03,
        delay: 0.2,
      });

      // Header split animation
      const heroHeadings = element.querySelectorAll<HTMLElement>(
        ".hero-reveal_split_item"
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${Math.max(heroBoxHeight, contentHeight)}`,
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        heroBox,
        {
          clipPath:
            "polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 50%, 100% 50%, 100% 100%, 0 100%)",
        },
        {
          clipPath:
            "polygon(0 0, 100% 0, 100% 0%, 0 0%, 0 100%, 100% 100%, 100% 100%, 0 100%)",
          duration: 0.4,
          ease: "power4.inOut",
        }
      );

      if (heroHeadings.length >= 2) {
        tl.fromTo(heroHeadings[0], { y: "0%" }, { y: "-30%", ease: "power3.inOut" }, 0);
        tl.fromTo(heroHeadings[1], { y: "0%" }, { y: "30%", ease: "power3.inOut" }, 0);
      }
    });
  }, []);

  return (
    <section className="hero-reveal relative w-full">
      <article>
        {/* Header split text */}
        <header className="hero-reveal__header relative items-center justify-center overflow-hidden bg-white text-black font-extrabold tracking-widest leading-none">
          <div className="hero-reveal_split relative w-full text-center">
            <div className="hero-reveal_split_item flex min-h-screen items-center justify-center">
              <p className="opacity-50 text-[clamp(2rem,6vw,5rem)] leading-[clamp(2.5rem,7vw,6rem)] uppercase">
                CodeStudios
              </p>
            </div>
            <div
              className="hero-reveal_split_item absolute inset-0 flex min-h-screen items-center justify-center"
              aria-hidden="true"
            >
              <p className="opacity-50 text-[clamp(2rem,6vw,5rem)] leading-[clamp(2.5rem,7vw,6rem)] uppercase">
                CodeStudios
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div
          ref={contentRef}
          className="hero-reveal__content relative z-10 container "
        >
          <div className="hero-reveal__content-inner leading-relaxed text-center">
          </div>
        </div>
      </article>
    </section>
  );
}
