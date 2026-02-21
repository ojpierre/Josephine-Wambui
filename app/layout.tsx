import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Quicksand, Dancing_Script, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const quicksand = Quicksand({ subsets: ['latin'], weight: ["300","400","500","600","700"], variable: '--font-quicksand' })
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ["400","500","600","700"], variable: '--font-dancing' })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "Josephine Wambui - Customer Service & Administrative Professional",
  description:
    "Portfolio of Josephine Wambui showcasing expertise in customer service, administrative support, and productivity management",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${dancingScript.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
