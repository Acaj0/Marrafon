"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#294349] mb-6">Contato</h2>
            <p className="text-lg text-gray-700">
              Entre em contato conosco para agendar uma consulta ou obter mais informações sobre nossos serviços.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-[#294349]">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#294349]/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#294349]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-700">
                      Av. Exemplo, 1234, Centro
                      <br />
                      Cidade - Estado, CEP 12345-678
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#294349]/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#294349]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-700">(00) 1234-5678</p>
                    <p className="text-gray-700">(00) 98765-4321 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#294349]/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#294349]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-700">contato@marrafon.adv.br</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-bold text-gray-900 mb-4">Horário de Atendimento</h4>
                <p className="text-gray-700">Segunda a Sexta: 9h às 18h</p>
                <p className="text-gray-700">Sábados: 9h às 12h (com agendamento prévio)</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white shadow-lg rounded-lg p-8 border border-[#dbdbdb]">
                <h3 className="text-2xl font-bold text-[#294349] mb-6">Envie uma Mensagem</h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        className="w-full border-gray-300 focus:border-[#294349] focus:ring-[#294349]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full border-gray-300 focus:border-[#294349] focus:ring-[#294349]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      className="w-full border-gray-300 focus:border-[#294349] focus:ring-[#294349]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      placeholder="Assunto da mensagem"
                      className="w-full border-gray-300 focus:border-[#294349] focus:ring-[#294349]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Descreva como podemos ajudar..."
                      rows={5}
                      className="w-full border-gray-300 focus:border-[#294349] focus:ring-[#294349]"
                    />
                  </div>

                  <Button className="w-full bg-[#294349] hover:bg-[#294349]/90 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219550619!2d-43.18058672549636!3d-22.90692823858638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzI0LjkiUyA0M8KwMTAnNDYuOSJX!5e0!3m2!1spt-BR!2sbr!4v1616593073888!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização do Escritório"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

