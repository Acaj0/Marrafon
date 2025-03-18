"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Escritório de Advocacia"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#294349]" />
        <div className="absolute inset-0 0" />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight">
                Defendemos seus direitos com excelência
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
                },
              }}
            >
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Soluções jurídicas personalizadas para proteger seus interesses e garantir seus direitos em todas as
                esferas legales.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
                },
              }}
            >
              <Button className="bg-white text-[#294349] font-normal hover:bg-white/90 text-lg px-8 py-6">
                Fale com um especialista agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              },
            }}
            className="hidden md:block"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/hero.png"
                alt="Marco Marrafon Advocacia"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      ></div>
    </section>
  )
}

