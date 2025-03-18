import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#294349] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Image
              src="/letraclara.png"
              alt="Marco Marrafon Advocacia"
              width={160}
              height={50}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-[#dbdbdb]/90 max-w-xs">
              Defendemos seus direitos com excelência.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://facebook.com" className="text-[#dbdbdb] hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-[#dbdbdb] hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-[#dbdbdb] hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-[#dbdbdb]/90 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[#dbdbdb]/90 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#areas" className="text-[#dbdbdb]/90 hover:text-white transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-[#dbdbdb]/90 hover:text-white transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-[#dbdbdb]/90 hover:text-white transition-colors">
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#dbdbdb]/90 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#dbdbdb] mr-3 mt-1" />
                <p className="text-[#dbdbdb]/90">
                  Av. Exemplo, 1234, Centro
                  <br />
                  Cidade - Estado, CEP 12345-678
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#dbdbdb] mr-3" />
                <p className="text-[#dbdbdb]/90">(00) 1234-5678</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#dbdbdb] mr-3" />
                <p className="text-[#dbdbdb]/90">contato@marrafon.adv.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-[#dbdbdb]/70">
          <p>© {new Date().getFullYear()} Marrafon Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

