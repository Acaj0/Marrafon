"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Sobre Nós", href: "#about" },
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <Image
            src={
              scrolled
                ? "/letraescura.png"
                : "/letraclara.png"
            }
            alt="Marco Marrafon Advocacia"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "transition-colors  font-semibold",
                scrolled ? "text-[#294349] hover:text-[#294349]/80" : "text-white hover:text-white/80",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            className={cn(
              "transition-colors",
              scrolled ? "bg-[#294349] text-white hover:bg-[#294349]/90" : "bg-white text-[#294349] hover:bg-white/90",
            )}
          >
            Fale Conosco
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden relative z-10" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? (
            <X className={scrolled ? "h-6 w-6 text-[#294349]" : "h-6 w-6 text-white"} />
          ) : (
            <Menu className={scrolled ? "h-6 w-6 text-[#294349]" : "h-6 w-6 text-white"} />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-0 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#294349] text-xl hover:text-[#294349]/80 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-[#294349] text-white hover:bg-[#294349]/90 mt-4" onClick={() => setIsOpen(false)}>
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

