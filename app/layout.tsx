import type React from "react"
import type { Metadata } from "next"
import { Roboto, Noto_Serif_Display } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Noto Serif Display font (serif)
const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
})

// Roboto font
const robotoFont = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Marrafon Advocacia",
  description: "Defendemos seus direitos com excelência",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${notoSerifDisplay.variable} ${robotoFont.variable}`}>
      <body className={robotoFont.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}

