"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProcoAI } from "@/components/proco-ai"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-context"
import { 
  ArrowRight, 
  QrCode, 
  Smartphone, 
  CheckCircle,
  Star,
  Users,
  Zap,
  Hotel,
  Clock,
  DollarSign,
  TrendingUp,
  Menu,
  Printer,
  ImageIcon,
  MessageCircle,
  Shield,
  RefreshCw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Bed,
  Coffee,
  Utensils,
  Wine,
  Dumbbell,
  Waves
} from "lucide-react"
import { useState } from "react"

export default function QRCodeMenuForHotel() {
  const { t } = useLanguage()
  const isHindi = false // Default to English
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Where to put QR codes in hotel?",
      answer: "Place QR codes on every room desk, each table in restaurant, lobby, and near swimming pool."
    },
    {
      question: "Will guests need to download an app?",
      answer: "No app needed! Just open camera and scan QR code."
    },
    {
      question: "Can guests order room service?",
      answer: "Yes, guests can order food, drinks, and services from their room."
    },
    {
      question: "Can I add photos to menu?",
      answer: "Yes, add professional photos for each item which increases sales."
    },
    {
      question: "Is multi-language support available?",
      answer: "Yes, you can create menu in both Hindi and English."
    }
  ]

  const benefits = [
    {
      icon: Bed,
      title: "Room Service",
      description: "Guests order from room - 24/7"
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Easy ordering leads to more orders"
    },
    {
      icon: DollarSign,
      title: "Save Printing",
      description: "Save lakhs rupees annually"
    },
    {
      icon: Clock,
      title: "Faster Service",
      description: "Orders reach kitchen instantly"
    },
    {
      icon: Smartphone,
      title: "Contactless",
      description: "Safe and hygienic"
    },
    {
      icon: ImageIcon,
      title: "Professional Image",
      description: "Modern hotel experience"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <ProcoAI />
      {/* Header */}
      <header className="border-b bg-black sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="MenuWala Logo"
                width={80}
                height={80}
                className="h-12 sm:h-14 md:h-20 lg:h-24 w-auto rounded-2xl"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#problem" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Problem
            </Link>
            <Link href="#solution" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Solution
            </Link>
            <Link href="#benefits" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Benefits
            </Link>
            <Link href="#faq" className="text-sm font-medium text-white hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link href="/signup">
              <Button className="bg-yellow-500" variant="secondary" size="sm">
                Start Free
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] w-full bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center">
          <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 font-medium text-sm">
                <Hotel className="w-4 h-4 mr-2" />
                QR Code Menu for Hotel
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-600 tracking-tight leading-tight">
                Transform Your Hotel
                <span className="text-blue-600"> Smartly</span>
              </h1>
              <p className="text-gray-600 md:text-xl lg:text-2xl max-w-2xl">
                Serve guests via QR code. Room service, restaurant - all digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-lg px-8 py-6">
                    Start Free <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="border-cyan-500 text-cyan-500 hover:bg-cyan-50 text-lg px-8 py-6">
                    Login
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-2">200+ Hotels</span>
                </div>
              </div>
            </div>

            {/* Right Content - Demo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border-2 border-cyan-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                        <Hotel className="h-6 w-6 text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Grand Hotel</h3>
                        <p className="text-sm text-gray-500">Hotel Services</p>
                      </div>
                    </div>
                    <QrCode className="h-8 w-8 text-cyan-500" />
                  </div>
                  
                  {/* Menu Preview */}
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-semibold text-cyan-600 mb-2">Room Service</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Breakfast Combo</span>
                          <span className="font-semibold text-cyan-600">₹450</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Coffee & Snacks</span>
                          <span className="font-semibold text-cyan-600">₹250</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-3">
                      <h4 className="font-semibold text-cyan-600 mb-2">Restaurant</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Dinner Buffet</span>
                          <span className="font-semibold text-cyan-600">₹899</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Lunch Buffet</span>
                          <span className="font-semibold text-cyan-600">₹649</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-cyan-600 mb-2">Spa & Wellness</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Acupressure Massage</span>
                          <span className="font-semibold text-cyan-600">₹1500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Spa Package</span>
                          <span className="font-semibold text-cyan-600">₹2500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <p className="text-center text-sm text-gray-500">
                      📱 Scan QR Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="w-full py-20 md:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium text-sm">
                  The Problem
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  Traditional Hotel Service Issues
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Hotel owners spend lakhs every year
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Printer className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Expensive Menus</CardTitle>
                  <CardDescription className="text-base">
                    Printing menus for every room and table is expensive.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Slow Service</CardTitle>
                  <CardDescription className="text-base">
                    Phone orders and room service take time.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <ImageIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">No Photos</CardTitle>
                  <CardDescription className="text-base">
                    Guests can't see item photos.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Menu className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Limited Info</CardTitle>
                  <CardDescription className="text-base">
                    Only name and price - can't show allergens, calories.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Staff Pressure</CardTitle>
                  <CardDescription className="text-base">
                    Staff busy with constant phone calls and room service.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Outdated Tech</CardTitle>
                  <CardDescription className="text-base">
                    Traditional service makes hotel look old.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium text-sm">
                  The Solution
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-green-600">
                  QR Code Smart Service
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Better guest experience with digital technology
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left - Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <QrCode className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">QR Code Everywhere</h3>
                    <p className="text-gray-600">
                      QR code in every room, on tables, poolside.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Bed className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Room Service 24/7</h3>
                    <p className="text-gray-600">
                      Guests can order anytime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Instant Updates</h3>
                    <p className="text-gray-600">
                      Menu, prices, services - change everything in seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">WhatsApp Notifications</h3>
                    <p className="text-gray-600">
                      Orders come directly on WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Professional Photos</h3>
                    <p className="text-gray-600">
                      Show photos of food, spa, room - everything.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Demo Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-100">
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                  Your Hotel Portal
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Hotel Services</span>
                    <Badge className="bg-green-500">24/7</Badge>
                  </div>
                  
                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Utensils className="h-8 w-8 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Fine Dining</h4>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          Premium Indian & International Cuisine
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹1500+</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Waves className="h-8 w-8 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Swimming Pool</h4>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          Cabanas & Kids Area
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹300</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Dumbbell className="h-8 w-8 text-pink-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Fitness Center</h4>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          24/7 Gym & Yoga Classes
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 font-medium text-sm">
                  Benefits
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-cyan-600">
                  What You Get
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="border-2 hover:border-cyan-200 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-cyan-500" />
                      </div>
                      <CardTitle className="text-cyan-600">{benefit.title}</CardTitle>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            {/* CTA Box */}
            <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Now - It's Free!
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                No credit card, no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-6">
                    Start Free <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-medium text-sm">
                  FAQ
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  Common Questions
                </h2>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <CardTitle className="text-lg flex items-center justify-between text-gray-900">
                      <span className="flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-purple-500" />
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Today?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Make your hotel modern
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="gap-2 bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-6">
                  Start Free <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-white">
                <Image
                  src="/logo.png"
                  alt="MenuWala Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto rounded-xl"
                />
                <span>MenuWala</span>
              </div>
              <p className="text-gray-400">
                Digital menu & QR code solutions
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/signup" className="hover:text-white">Sign Up</Link></li>
                <li><Link href="/login" className="hover:text-white">Login</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@menuwala.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} MenuWala. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
