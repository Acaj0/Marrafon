"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Scale, Briefcase, Building2, Users, FileText, Shield } from "lucide-react"

const areas = [
  {
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, direito de família, sucessões e propriedade intelectual.",
    icon: FileText,
  },
  {
    title: "Direito Trabalhista",
    description: "Relações de trabalho, reclamações trabalhistas, acordos e negociações coletivas.",
    icon: Users,
  },
  {
    title: "Direito Empresarial",
    description: "Constituição de empresas, contratos empresariais, fusões e aquisições, recuperação judicial.",
    icon: Building2,
  },
  {
    title: "Direito Tributário",
    description: "Planejamento tributário, defesa em processos administrativos e judiciais, consultoria fiscal.",
    icon: Scale,
  },
  {
    title: "Direito Penal",
    description: "Defesa em processos criminais, crimes econômicos, crimes contra a administração pública.",
    icon: Shield,
  },
  {
    title: "Direito Contratual",
    description: "Elaboração, análise e negociação de contratos comerciais, civis e de prestação de serviços.",
    icon: Briefcase,
  },
]

export function PracticeAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="areas" className="section-padding bg-[#dbdbdb]/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#294349] mb-6">Áreas de Atuação</h2>
          <p className="text-lg text-gray-700">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito, com profissionais capacitados
            para atender às necessidades específicas de cada cliente.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#294349]"
            >
              <div className="bg-[#294349]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <area.icon className="h-7 w-7 text-[#294349]" />
              </div>
              <h3 className="text-xl font-bold text-[#294349] mb-3">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

