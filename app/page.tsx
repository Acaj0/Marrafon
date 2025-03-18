"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PracticeAreas } from "@/components/practice-areas"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <PracticeAreas />
      <Testimonials />
      <FaqSection />
      <ContactSection />
    </main>
  )
}

