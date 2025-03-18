"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto tempo demora um processo trabalhista?",
    answer:
      "O tempo de duração de um processo trabalhista pode variar significativamente dependendo da complexidade do caso, da região onde é ajuizado e da carga de trabalho do tribunal. Em média, um processo trabalhista pode levar de 1 a 3 anos para ser concluído, considerando todas as instâncias.",
  },
  {
    question: "Como funciona a primeira consulta com o advogado?",
    answer:
      "A primeira consulta é uma oportunidade para conhecermos seu caso e avaliarmos as possibilidades jurídicas. Durante esse encontro, você poderá expor sua situação, apresentar documentos relevantes e receber uma análise preliminar. Também discutiremos as estratégias possíveis e os próximos passos.",
  },
  {
    question: "Quais documentos devo levar para a consulta inicial?",
    answer:
      "Recomendamos levar documentos pessoais (RG, CPF), documentos relacionados ao caso (contratos, notificações, comprovantes), e qualquer correspondência recebida da parte contrária ou de órgãos oficiais. A documentação específica varia conforme o tipo de caso, mas quanto mais informações você puder fornecer, melhor será nossa análise.",
  },
  {
    question: "Como são cobrados os honorários advocatícios?",
    answer:
      "Os honorários podem ser cobrados de diferentes formas, dependendo do tipo de caso: honorários fixos, por hora de trabalho, ou honorários de êxito (percentual sobre o valor da causa). Na primeira consulta, discutiremos a forma de cobrança mais adequada para seu caso e formalizaremos através de um contrato de prestação de serviços.",
  },
  {
    question: "É possível fazer acordo em qualquer tipo de processo?",
    answer:
      "Em princípio, sim. A maioria dos conflitos jurídicos pode ser resolvida por meio de acordo, o que geralmente representa uma solução mais rápida e menos desgastante. No entanto, a viabilidade e conveniência de um acordo dependem das circunstâncias específicas de cada caso, que serão avaliadas pelo advogado responsável.",
  },
  {
    question: "O escritório atende em outras cidades?",
    answer:
      "Sim, além do atendimento presencial em nossa sede, oferecemos atendimento remoto para clientes de outras localidades. Também podemos nos deslocar para audiências e diligências em outras comarcas, conforme a necessidade do caso.",
  },
]

export function FaqSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="faq" className="section-padding bg-[#dbdbdb]/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#294349] mb-6">Dúvidas Frequentes</h2>
          <p className="text-lg text-gray-700">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços e processos jurídicos.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-[#294349] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

