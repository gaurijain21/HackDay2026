import type { Metadata, Viewport } from 'next'
// import { Outfit, Abril_Fatface } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { JetBrains_Mono } from "next/font/google"

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

// const outfit = Outfit({ 
//   subsets: ['latin'],
//   variable: '--font-outfit',
//   display: 'swap',
// })

// const abrilFatface = Abril_Fatface({ 
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-display',
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: "CruzHacks Hackday | It's Casino Time!",
  description: 'Join us for CruzHacks Hackday - A casino-themed hackathon experience with exciting events, prizes, and more!',
  icons: undefined,
  
}

export const viewport: Viewport = {
  themeColor: '#1a0a20',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${mono.className} ${mono.className} bg-background`}>
      <body className={`${mono.className} antialiased min-h-screen glossy-bg`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}


