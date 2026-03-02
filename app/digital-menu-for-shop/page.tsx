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
  ShoppingBag,
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
  Package,
  Tag,
  Percent,
  Truck,
  Store,
  BarChart3,
  Globe
} from "lucide-react"
import { useState } from "react"

export default function DigitalMenuForShop() {
  const isHindi = false
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What types of shops can use this?",
      answer: "Any retail shop - clothing, electronics, grocery, cosmetics, accessories, furniture - you name it!"
    },
    {
      question: "Can I add product photos?",
      answer: "Yes! Add photos, descriptions, prices, sizes, colors - everything your customers need to know."
    },
    {
      question: "Do customers need to download an app?",
      answer: "No! They scan your QR code and see your products instantly in their browser."
    },
    {
      question: "Can I update prices?",
      answer: "Yes, change prices anytime. Updates appear instantly for all customers."
    },
    {
      question: "Is it free?",
      answer: "Basic version is free with up to 50 products. No credit card required."
    }
  ]

  const benefits = [
    {
      icon: ShoppingBag,
      title: "Product Catalog",
      description: "Show all your products online"
    },
    {
      icon: ImageIcon,
      title: "Product Photos",
      description: "Display images of your products"
    },
    {
      icon: DollarSign,
      title: "Save Printing",
      description: "No more printing catalogs"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Works on any phone"
    },
    {
      icon: TrendingUp,
      title: "More Sales",
      description: "Reach more customers online"
    },
    {
      icon: Globe,
      title: "Online Presence",
      description: "Be found on Google"
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
        <section className="relative min-h-[90vh] w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center">
          <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Digital Menu for Shop
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 tracking-tight leading-tight">
                Your Shop
                <span className="text-indigo-600"> Online</span>
              </h1>
              <p className="text-gray-600 md:text-xl lg:text-2xl max-w-2xl">
                Turn your retail shop into an online store. QR code catalog - no website needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6">
                    Start Free <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="border-blue-500 text-blue-500 hover:bg-blue-50 text-lg px-8 py-6">
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
                  <span className="text-sm text-gray-600 ml-2">500+ Shops</span>
                </div>
              </div>
            </div>

            {/* Right Content - Demo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border-2 border-blue-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Store className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Fashion Hub</h3>
                        <p className="text-sm text-gray-500">Your Digital Catalog</p>
                      </div>
                    </div>
                    <QrCode className="h-8 w-8 text-blue-500" />
                  </div>
                  
                  {/* Product Preview */}
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-semibold text-blue-600 mb-2">New Arrivals</h4>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="h-6 w-6 text-purple-500" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">Cotton Kurti</p>
                            <p className="text-sm text-gray-500">3 colors available</p>
                            <p className="font-bold text-blue-600">₹899</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="h-6 w-6 text-pink-500" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">Leather Handbag</p>
                            <p className="text-sm text-gray-500">Premium quality</p>
                            <p className="font-bold text-blue-600">₹2499</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Sale Items</h4>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                            <Tag className="h-6 w-6 text-red-500" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">Sunglasses</p>
                            <p className="text-sm text-red-500">50% OFF</p>
                            <p className="font-bold text-blue-600">₹399 <span className="text-sm text-gray-400 line-through">₹799</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <p className="text-center text-sm text-gray-500">
                      📱 Scan QR Code to View Catalog
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
                  Traditional Shop Struggles
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Retail shop owners face these challenges
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Printer className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Expensive Catalogs</CardTitle>
                  <CardDescription className="text-base">
                    Printing catalogs costs thousands every year.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Outdated Prices</CardTitle>
                  <CardDescription className="text-base">
                    Can't update prices quickly when costs change.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <ImageIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">No Product Photos</CardTitle>
                  <CardDescription className="text-base">
                    Customers can't see products before visiting.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Limited Reach</CardTitle>
                  <CardDescription className="text-base">
                    Only local customers know about your shop.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Competition</CardTitle>
                  <CardDescription className="text-base">
                    Big online stores attract your customers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Menu className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">No Online Presence</CardTitle>
                  <CardDescription className="text-base">
                    Not found on Google or social media.
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
                  Digital Product Catalog
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Your shop online - instantly
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
                    <h3 className="font-bold text-gray-900 text-lg">QR Code Catalog</h3>
                    <p className="text-gray-600">
                      Put QR code in shop window. Customers scan and browse.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Product Photos</h3>
                    <p className="text-gray-600">
                      Upload photos of every product you sell.
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
                      Change prices and add new items in seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Percent className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Show Discounts</h3>
                    <p className="text-gray-600">
                      Highlight sales and special offers easily.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Online Presence</h3>
                    <p className="text-gray-600">
                      Get found on Google by local customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Demo Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-100">
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                  Your Digital Shop
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Your Products</span>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>
                  
                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Package className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Electronics</h4>
                        <p className="text-sm text-gray-500">
                          Phones, accessories & more
                        </p>
                        <p className="font-bold text-green-600 mt-1">Starting ₹999</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="h-6 w-6 text-pink-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Fashion</h4>
                        <p className="text-sm text-gray-500">
                          Clothing & accessories
                        </p>
                        <p className="font-bold text-green-600 mt-1">Starting ₹299</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Tag className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Sale</h4>
                        <p className="text-sm text-gray-500">
                          Up to 70% OFF
                        </p>
                        <p className="font-bold text-green-600 mt-1">Shop Now</p>
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
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                  Benefits
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  What You Get
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <CardTitle className="text-blue-600">{benefit.title}</CardTitle>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            {/* CTA Box */}
            <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Now - It's Free!
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                No credit card, no hidden fees. Up to 50 products free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
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
        <section className="w-full py-20 bg-gradient-to-r from-blue-500 to-indigo-500">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Today?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Take your shop online - it's free
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="gap-2 bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
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
                Digital catalog for retail shops
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
