"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Empresário",
    content:
      "O atendimento do escritório Marrafon Advocacia foi excepcional. Resolveram meu caso com profissionalismo e agilidade, superando todas as minhas expectativas.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Ana Oliveira",
    role: "Gerente Administrativa",
    content:
      "Excelentes profissionais, sempre muito atenciosos e comprometidos. Recomendo fortemente os serviços do escritório Marrafon Advocacia.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Roberto Santos",
    role: "Diretor Financeiro",
    content:
      "Trabalho com o escritório há mais de 5 anos e sempre fui muito bem atendido. São profissionais competentes e que realmente se preocupam com os clientes.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#294349] mb-6">Depoimentos</h2>
            <p className="text-lg text-gray-700">
              Veja o que nossos clientes dizem sobre nossos serviços e como temos ajudado a resolver seus problemas
              jurídicos.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="bg-[#dbdbdb]/30 rounded-lg p-6 md:p-10 relative">
              <Quote className="absolute top-6 left-6 h-12 w-12 text-[#294349]/20" />

              <div className="md:flex items-center gap-8">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 text-lg mb-6 relative z-10">"{testimonials[current].content}"</p>
                  <div>
                    <h4 className="text-xl font-bold text-[#294349]">{testimonials[current].name}</h4>
                    <p className="text-[#294349]/70">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full border-[#294349] text-[#294349] hover:bg-[#294349] hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Anterior</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full border-[#294349] text-[#294349] hover:bg-[#294349] hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Próximo</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

