import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Menuwala - Free Online QR Menu Maker | E-Commerce Menus",
  description: "Create stunning digital menus and QR codes for free. Online QR menu maker for businesses, cafes, and food businesses. Generate QR codes, receive WhatsApp orders, and boost your business.",
  keywords: [
    // Core Digital Menu Keywords
    "digital menu",
    "online menu",
    "digital menu for business",
    "online business menu",
    "interactive menu",
    "touchless menu",
    "contactless menu",
    
    // QR Menu Keywords
    "qr menu",
    "qr code menu",
    "qr menu generator",
    "qr code generator for business",
    "business qr code",
    "qr code for menu",
    "scan qr code menu",
    "digital qr menu",
    "qr menu maker",
    "free qr menu",
    
    // Free Menu Maker Keywords
    "free online menu maker",
    "free menu creator",
    "free digital menu",
    "free qr menu maker",
    "free business menu maker",
    "online menu maker free",
    "create menu online free",
    
    // Business Technology Keywords
    "business digital menu",
    "business technology",
    "business software",
    "business management",
    "cafe menu software",
    "food truck menu",
    "business ordering system",
    "digital ordering system",
    
    // WhatsApp Ordering Keywords
    "whatsapp ordering",
    "whatsapp menu",
    "order via whatsapp",
    "whatsapp business ordering",
    
    // Menu Creation Keywords
    "menu maker",
    "menu creator",
    "create menu online",
    "menu design",
    "business menu design",
    "food menu design",
    "menu card design",
    
    // Local SEO Keywords
    "business menu near me",
    "digital menu India",
    "qr menu India",
    "business software India",
    "cafe menu maker",
    "food delivery menu",
    
    // Business Growth Keywords
    "business marketing",
    "boost business sales",
    "increase business orders",
    "business online presence",
    "digital transformation business",
    
    // Food Business Keywords
    "cafe menu",
    "business menu",
    "food menu",
    "pizza menu",
    "coffee shop menu",
    "bakery menu",
    "fast food menu",
    
    // Additional High-Volume Keywords
    "online food ordering",
    "menu management",
    "table ordering",
    "self ordering",
    "mobile menu",
    "web menu"
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
    title: "Menuwala - Free Online QR Menu Maker | Digital Business Menus",
    description: "Create stunning digital menus and QR codes for free. Online QR menu maker for businesses, cafes, and food businesses. Generate QR codes, receive WhatsApp orders, and boost your business.",
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
    title: "Menuwala - Free Online QR Menu Maker | Digital Business Menus",
    description: "Create stunning digital menus and QR codes for free. Online QR menu maker for businesses, cafes, and food businesses.",
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
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P7HFDR4WMT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P7HFDR4WMT');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
