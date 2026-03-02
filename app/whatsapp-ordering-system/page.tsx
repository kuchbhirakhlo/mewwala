"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProcoAI } from "@/components/proco-ai"
import { LanguageToggle } from "@/components/language-toggle"
import { 
  ArrowRight, 
  QrCode, 
  Smartphone, 
  CheckCircle,
  Star,
  Users,
  Zap,
  MessageCircle,
  Phone,
  Clock,
  DollarSign,
  TrendingUp,
  Menu,
  Printer,
  ImageIcon,
  Shield,
  RefreshCw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Send,
  ShoppingCart,
  Bell,
  BarChart3,
  UsersRound
} from "lucide-react"
import { useState } from "react"

export default function WhatsAppOrderingSystem() {
  const isHindi = false
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does WhatsApp ordering work?",
      answer: "Customers scan QR code or visit your menu link, browse products, and click to order. Orders are sent directly to your WhatsApp."
    },
    {
      question: "Do I need a smartphone?",
      answer: "Yes, you need a smartphone with WhatsApp to receive orders. The system sends order details to your WhatsApp number."
    },
    {
      question: "Is it free to use?",
      answer: "Yes, the basic version is free with up to 50 products. No monthly fees."
    },
    {
      question: "Can I customize my store?",
      answer: "Yes, add your logo, photos, prices, and descriptions. Make it unique to your brand."
    },
    {
      question: "How do I manage orders?",
      answer: "Orders come to your WhatsApp with customer details. You can confirm and manage them directly."
    }
  ]

  const benefits = [
    {
      icon: MessageCircle,
      title: "WhatsApp Orders",
      description: "Orders directly to your WhatsApp"
    },
    {
      icon: ShoppingCart,
      title: "Easy Ordering",
      description: "Simple process for customers"
    },
    {
      icon: DollarSign,
      title: "No Commission",
      description: "Keep all your profits"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "No phone calls needed"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Works on any phone"
    },
    {
      icon: BarChart3,
      title: "Track Orders",
      description: "See what's selling"
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
        <section className="relative min-h-[90vh] w-full bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center">
          <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium text-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Ordering System
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-600 tracking-tight leading-tight">
                Orders on
                <span className="text-emerald-600"> WhatsApp</span>
              </h1>
              <p className="text-gray-600 md:text-xl lg:text-2xl max-w-2xl">
                Get orders directly on WhatsApp. No app download, no commission, just simple ordering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 text-lg px-8 py-6">
                    Start Free <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="border-green-500 text-green-500 hover:bg-green-50 text-lg px-8 py-6">
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
                  <span className="text-sm text-gray-600 ml-2">1000+ Businesses</span>
                </div>
              </div>
            </div>

            {/* Right Content - Demo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border-2 border-green-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">New Order</h3>
                        <p className="text-sm text-gray-500">Via WhatsApp</p>
                      </div>
                    </div>
                    <Bell className="h-8 w-8 text-green-500" />
                  </div>
                  
                  {/* WhatsApp Message Preview */}
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-sm text-gray-700 mb-3">
                      <span className="font-bold">New Order #1234</span>
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">2x Butter Chicken</span>
                        <span className="font-semibold">₹700</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">3x Butter Naan</span>
                        <span className="font-semibold">₹180</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">2x Masala Chai</span>
                        <span className="font-semibold">₹60</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between">
                        <span className="font-bold">Total</span>
                        <span className="font-bold text-green-600">₹940</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-xs text-gray-500">
                        Customer: Rahul S.<br/>
                        Delivery: Home (45 mins)
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t flex gap-2">
                    <Button className="flex-1 bg-green-500">Accept</Button>
                    <Button variant="outline" className="flex-1">Reject</Button>
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
                  Traditional Order Management
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Business owners struggle with phone orders
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Missed Calls</CardTitle>
                  <CardDescription className="text-base">
                    Customers call but you're busy. Orders are lost.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Wrong Orders</CardTitle>
                  <CardDescription className="text-base">
                    Phone orders often have mistakes due to miscommunication.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Time Consuming</CardTitle>
                  <CardDescription className="text-base">
                    Taking orders over phone takes too much time.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Can't Handle Volume</CardTitle>
                  <CardDescription className="text-base">
                    One phone line means waiting customers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Menu className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">No Records</CardTitle>
                  <CardDescription className="text-base">
                    Hard to track orders and customer preferences.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Platform Fees</CardTitle>
                  <CardDescription className="text-base">
                    Other platforms charge 15-30% commission.
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
                  WhatsApp Ordering
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Orders come directly to your WhatsApp
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
                    <h3 className="font-bold text-gray-900 text-lg">QR Code Ordering</h3>
                    <p className="text-gray-600">
                      Customers scan and order instantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Direct to WhatsApp</h3>
                    <p className="text-gray-600">
                      Every order notification comes to your WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Error-Free Orders</h3>
                    <p className="text-gray-600">
                      Written orders eliminate mistakes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Zero Commission</h3>
                    <p className="text-gray-600">
                      No fees - keep all your profit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Order Tracking</h3>
                    <p className="text-gray-600">
                      See all orders in your dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Demo Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-100">
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                  Your Store on WhatsApp
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Your Products</span>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>
                  
                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Premium Combo</h4>
                        <p className="text-sm text-gray-500">
                          Includes main course + drinks
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹499</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Family Pack</h4>
                        <p className="text-sm text-gray-500">
                          For 4 people
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹899</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Single Meal</h4>
                        <p className="text-sm text-gray-500">
                          Quick lunch option
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹149</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-emerald-50 rounded-lg text-center">
                    <p className="text-emerald-700 font-medium">
                      📱 Order via WhatsApp
                    </p>
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
                <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium text-sm">
                  Benefits
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-green-600">
                  What You Get
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="border-2 hover:border-green-200 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-green-500" />
                      </div>
                      <CardTitle className="text-green-600">{benefit.title}</CardTitle>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            {/* CTA Box */}
            <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Now - It's Free!
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                No credit card, no hidden fees. Up to 50 products free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
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
        <section className="w-full py-20 bg-gradient-to-r from-green-500 to-emerald-500">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Today?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get orders on WhatsApp - no commission, no hassle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="gap-2 bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
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
                WhatsApp ordering system for businesses
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
