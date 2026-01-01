import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Menuwala - Free Online QR Menu Maker | Digital Restaurant Menus",
  description: "Create stunning digital menus and QR codes for free. Online QR menu maker for restaurants, cafes, and food businesses. Generate QR codes, receive WhatsApp orders, and boost your business.",
  keywords: [
    "qr menu",
    "online qr menu maker",
    "online menu maker for free",
    "digital menu",
    "restaurant qr code",
    "menu qr generator",
    "free qr menu maker",
    "digital restaurant menu",
    "qr code menu generator",
    "whatsapp menu ordering",
    "restaurant digital transformation",
    "menu maker online",
    "qr menu creator",
    "free digital menu",
    "restaurant marketing"
  ],
  authors: [{ name: "Proco Technologies" }],
  creator: "Proco Technologies",
  publisher: "Proco Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://menuwala.proco.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Menuwala - Free Online QR Menu Maker | Digital Restaurant Menus",
    description: "Create stunning digital menus and QR codes for free. Online QR menu maker for restaurants, cafes, and food businesses. Generate QR codes, receive WhatsApp orders, and boost your business.",
    url: 'https://menuwala.proco.tech',
    siteName: 'Menuwala',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Menuwala - QR Menu Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Menuwala - Free Online QR Menu Maker | Digital Restaurant Menus",
    description: "Create stunning digital menus and QR codes for free. Online QR menu maker for restaurants, cafes, and food businesses.",
    images: ['/logo.png'],
    creator: '@procotech',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
