"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const lawyers = [
  {
    id: 1,
    name: "Marco Marrafon",
    role: "Advogado Sênior",
    description: "Especialista em Direito Constitucional com mais de 15 anos de experiência.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 2,
    name: "Yuri Machado",
    role: "Advogado",
    description: "Especialista em Direito Civil e Empresarial.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 3,
    name: "João Pedro Rimes",
    role: "Advogado",
    description: "Especialista em Direito Trabalhista e Previdenciário.",
    image: "/placeholder.svg?height=600&width=400",
  },
]

const values = [
  {
    title: "Missão",
    description:
      "Oferecer serviços jurídicos de excelência, com ética e compromisso, buscando sempre a melhor solução para nossos clientes.",
  },
  {
    title: "Visão",
    description:
      "Ser referência em advocacia, reconhecidos pela qualidade dos serviços prestados e pela confiança de nossos clientes.",
  },
  {
    title: "Valores",
    description:
      "Ética, transparência, excelência, comprometimento e respeito são os pilares que norteiam nossa atuação profissional.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#294349] mb-6">Sobre Nós</h2>
            <p className="text-lg text-gray-700">
              Fundado em 2010, o escritório Marrafon Advocacia tem se destacado pela excelência na prestação de serviços
              jurídicos, com uma equipe de profissionais altamente qualificados e comprometidos com os interesses de
              nossos clientes.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-[#dbdbdb]/30 p-6 rounded-lg border-l-4 border-[#294349]">
                  <h3 className="text-xl font-bold text-[#294349] mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-[#294349] text-center">Nossa Equipe</h3>

            {/* Marco Marrafon */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dbdbdb]">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full relative">
                    <Image
                      src={lawyers[0].image || "/placeholder.svg"}
                      alt={lawyers[0].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-[#294349]">{lawyers[0].name}</h4>
                  <p className="text-[#294349]/70 mb-4">{lawyers[0].role}</p>
                  <p className="text-gray-700">{lawyers[0].description}</p>
                </div>
              </div>
            </div>

            {/* Yuri and João */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lawyers.slice(1).map((lawyer) => (
                <div key={lawyer.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dbdbdb]">
                  <div className="h-64 relative">
                    <Image src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#294349]">{lawyer.name}</h4>
                    <p className="text-[#294349]/70 mb-4">{lawyer.role}</p>
                    <p className="text-gray-700">{lawyer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

