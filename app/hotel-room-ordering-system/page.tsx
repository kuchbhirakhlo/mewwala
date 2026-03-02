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
  Waves,
  Bell,
  Phone,
  Truck,
  BarChart3,
  Calendar
} from "lucide-react"
import { useState } from "react"

export default function HotelRoomOrderingSystem() {
  const isHindi = false
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does room ordering work?",
      answer: "Guests scan QR code in their room, browse the menu, and place orders. It comes directly to your WhatsApp or kitchen system."
    },
    {
      question: "Can guests order from their room?",
      answer: "Yes! That's the main feature. Guests can order food, drinks, amenities anytime from their room."
    },
    {
      question: "Do I need special equipment?",
      answer: "No! Just print QR codes and put them in rooms. That's it."
    },
    {
      question: "How do I receive orders?",
      answer: "Orders come to your WhatsApp with all details - room number, items, special instructions."
    },
    {
      question: "Is it free to start?",
      answer: "Yes, basic version is free. No credit card needed."
    }
  ]

  const benefits = [
    {
      icon: Bed,
      title: "In-Room Ordering",
      description: "Guests order from their room"
    },
    {
      icon: Hotel,
      title: "Room Service",
      description: "24/7 ordering capability"
    },
    {
      icon: TrendingUp,
      title: "More Revenue",
      description: "Guests order more conveniently"
    },
    {
      icon: Clock,
      title: "Faster Service",
      description: "Orders reach kitchen instantly"
    },
    {
      icon: DollarSign,
      title: "Save Costs",
      description: "No phone operators needed"
    },
    {
      icon: Smartphone,
      title: "Contactless",
      description: "Safe and hygienic"
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
        <section className="relative min-h-[90vh] w-full bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center">
          <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-100 text-violet-600 font-medium text-sm">
                <Hotel className="w-4 h-4 mr-2" />
                Hotel Room Ordering System
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-violet-600 tracking-tight leading-tight">
                Room Service
                <span className="text-purple-600"> Made Easy</span>
              </h1>
              <p className="text-gray-600 md:text-xl lg:text-2xl max-w-2xl">
                Guests order food & services from their room. QR code in every room - simple and fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-violet-500 hover:bg-violet-600 text-lg px-8 py-6">
                    Start Free <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="border-violet-500 text-violet-500 hover:bg-violet-50 text-lg px-8 py-6">
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
                  <span className="text-sm text-gray-600 ml-2">150+ Hotels</span>
                </div>
              </div>
            </div>

            {/* Right Content - Demo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-violet-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border-2 border-violet-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                        <Hotel className="h-6 w-6 text-violet-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Room 201</h3>
                        <p className="text-sm text-gray-500">New Order</p>
                      </div>
                    </div>
                    <Bell className="h-8 w-8 text-violet-500" />
                  </div>
                  
                  {/* Order Preview */}
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">Room Service Order</span>
                        <Badge className="bg-violet-500">New</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">2x Grilled Chicken</span>
                          <span className="font-semibold text-violet-600">₹890</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">1x Garlic Bread</span>
                          <span className="font-semibold text-violet-600">₹150</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">2x Coke</span>
                          <span className="font-semibold text-violet-600">₹80</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">1x Chocolate Cake</span>
                          <span className="font-semibold text-violet-600">₹250</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="font-bold text-violet-600">₹1370</span>
                    </div>

                    <div className="bg-violet-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Delivery:</span> Room 201<br/>
                        <span className="font-medium">Time:</span> 30 minutes<br/>
                        <span className="font-medium">Note:</span> Extra sauce please
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t flex gap-2">
                    <Button className="flex-1 bg-violet-500">Accept</Button>
                    <Button variant="outline" className="flex-1">View Menu</Button>
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
                  Traditional Room Service
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Hotels struggle with room service orders
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Phone Lines Busy</CardTitle>
                  <CardDescription className="text-base">
                    Guests can't reach room service due to busy lines.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Order Mistakes</CardTitle>
                  <CardDescription className="text-base">
                    Phone orders often have wrong items or room numbers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Staff Required</CardTitle>
                  <CardDescription className="text-base">
                    Need dedicated staff to answer phone calls 24/7.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Menu className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Limited Menu</CardTitle>
                  <CardDescription className="text-base">
                    Can't show photos or detailed descriptions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Slow Response</CardTitle>
                  <CardDescription className="text-base">
                    Guests wait long for orders to be taken.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">High Costs</CardTitle>
                  <CardDescription className="text-base">
                    Need to hire operators for phone orders.
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
                  Digital Room Service
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Guests order from room - instantly
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
                    <h3 className="font-bold text-gray-900 text-lg">QR in Every Room</h3>
                    <p className="text-gray-600">
                      Put QR code in each room. Guests scan and order.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Hotel className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">24/7 Ordering</h3>
                    <p className="text-gray-600">
                      Guests can order anytime without waiting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">WhatsApp Orders</h3>
                    <p className="text-gray-600">
                      Orders come to WhatsApp with all details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Photos & Details</h3>
                    <p className="text-gray-600">
                      Show food photos and descriptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Track Orders</h3>
                    <p className="text-gray-600">
                      See all orders in dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Demo Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-100">
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                  Room Service Menu
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Room 201</span>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  
                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Utensils className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Main Course</h4>
                        <p className="text-sm text-gray-500">
                          Biryani, Curries & more
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹250+</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Coffee className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Beverages</h4>
                        <p className="text-sm text-gray-500">
                          Coffee, Tea, Juices
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹50+</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Wine className="h-6 w-6 text-pink-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Premium Drinks</h4>
                        <p className="text-sm text-gray-500">
                          Wine, Whisky, Cocktails
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹350+</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Dumbbell className="h-6 w-6 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Amenities</h4>
                        <p className="text-sm text-gray-500">
                          Towels, Toiletries
                        </p>
                        <p className="font-bold text-green-600 mt-1">₹0-₹100</p>
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
                <div className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-600 font-medium text-sm">
                  Benefits
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-violet-600">
                  What You Get
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="border-2 hover:border-violet-200 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-violet-500" />
                      </div>
                      <CardTitle className="text-violet-600">{benefit.title}</CardTitle>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            {/* CTA Box */}
            <div className="mt-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Now - It's Free!
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                No credit card, no hidden fees. Get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-white text-violet-600 hover:bg-gray-100 text-lg px-8 py-6">
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
        <section className="w-full py-20 bg-gradient-to-r from-violet-500 to-purple-500">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Today?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Transform your room service - it's free
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="gap-2 bg-white text-violet-600 hover:bg-gray-100 text-lg px-8 py-6">
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
                Room ordering system for hotels
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
