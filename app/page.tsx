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
  Shield,
  Headphones,
  MessageCircle,
  Camera,
  Palette,
  BarChart3,
  Globe,
  Lock,
  Store,
  ShoppingBag,
  Scissors,
  Heart,
  Briefcase,
  Utensils,
  Car,
  Home,
  Laptop,
  Phone,
  Calendar,
  UsersRound,
  Building2,
  Dumbbell,
  BookOpen,
  Music,
  Hotel
} from "lucide-react"

export default function HomePage() {
  const { language, t } = useLanguage()
  const isHindi = language === 'hi'
  const businessTypes = [
    { name: "Business", icon: Utensils, color: "orange", description: "Digital menus for businesses, cafes & food businesses" },
    { name: "Retail Shop", icon: ShoppingBag, color: "blue", description: "Product catalogs for retail stores & shops" },
    { name: "Salon & Spa", icon: Scissors, color: "pink", description: "Services & pricing for salons & beauty spas" },
    { name: "Healthcare", icon: Heart, color: "red", description: "Medical services & doctor consultations" },
    { name: "Professional Services", icon: Briefcase, color: "purple", description: "Lawyers, consultants & service providers" },
    { name: "Automotive", icon: Car, color: "gray", description: "Auto repair & car service centers" },
    { name: "Real Estate", icon: Home, color: "green", description: "Property listings & agent services" },
    { name: "E-Commerce", icon: Laptop, color: "indigo", description: "Online store & product showcases" },
    { name: "Fitness", icon: Dumbbell, color: "yellow", description: "Gyms, trainers & fitness centers" },
    { name: "Education", icon: BookOpen, color: "teal", description: "Courses, tuitions & training institutes" },
    { name: "Entertainment", icon: Music, color: "violet", description: "Events, venues & entertainment" },
    { name: "Hospitality", icon: Hotel, color: "cyan", description: "Hotels, guest houses & rentals" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <ProcoAI />
      {/* Header */}
      <header className="border-b bg-black sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <Image
              src="/logo.png"
              alt="MenuWala Logo"
              width={80}
              height={80}
              className="h-12 sm:h-14 md:h-20 lg:h-24 w-auto rounded-2xl"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#businesses" className="text-sm font-medium text-white hover:underline underline-offset-4">
              For Businesses
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-white hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link  href="/login">
              <Button className="bg-yellow-500" variant="secondary" size="sm">
                Log in
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Full Screen Hero Section */}
        <section className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center">
          <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                <Zap className="w-4 h-4 mr-2" />
                {isHindi ? "डिजिटल प्रेसेन्स समाधान" : "Digital Presence Solution"}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 tracking-tight leading-tight">
                Grow Your Business with 
                <span className="text-purple-600"> Digital Presence</span>
              </h1>
              <p className="text-gray-600 md:text-xl lg:text-2xl max-w-2xl">
                Create stunning digital catalogs, generate QR codes, and connect with customers. 
                Perfect for restaurants, shops, salons, clinics, and any business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6">
                    Start Free Today <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#businesses">
                  <Button variant="outline" size="lg" className="border-blue-500 text-blue-500 hover:bg-blue-50 text-lg px-8 py-6">
                    See All Businesses
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">R</div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">H</div>
                  </div>
                  <span className="text-sm text-gray-600">{isHindi ? "500+ व्यापारी हम पर भरोसा करते हैं" : "500+ businesses trust us"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Multiple Business Icons */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="relative z-10 grid grid-cols-3 gap-4 p-8">
                  {/* Business */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                      <Utensils className="h-8 w-8 text-orange-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Business</span>
                  </div>
                  {/* Retail */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <ShoppingBag className="h-8 w-8 text-blue-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Retail</span>
                  </div>
                  {/* Salon */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                      <Scissors className="h-8 w-8 text-pink-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Salon</span>
                  </div>
                  {/* Healthcare */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-2">
                      <Heart className="h-8 w-8 text-red-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Healthcare</span>
                  </div>
                  {/* Services */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <Briefcase className="h-8 w-8 text-purple-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Services</span>
                  </div>
                  {/* Fitness */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                      <Dumbbell className="h-8 w-8 text-yellow-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Fitness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Business Types Section */}
        <section id="businesses" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                  For All Businesses
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  Any Business Can Go Online
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Whether you run a restaurant, salon, clinic, or shop - we have the perfect solution for your business
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {businessTypes.map((business) => {
                const Icon = business.icon
                return (
                  <Card key={business.name} className="border-2 hover:border-blue-200 transition-all hover:shadow-lg group cursor-pointer">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl bg-${business.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-6 w-6 text-${business.color}-500`} />
                      </div>
                      <CardTitle className="text-blue-600">{business.name}</CardTitle>
                      <CardDescription>
                        {business.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/signup">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8">
                  Create Your Digital Presence <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                  Powerful Features
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  Everything You Need
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Complete solution for modern businesses to grow their online presence
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <QrCode className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-blue-600">QR Code Generation</CardTitle>
                  <CardDescription>
                    Generate beautiful, scannable QR codes for your business that customers can easily access
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 2 */}
              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-purple-600">Mobile Optimized</CardTitle>
                  <CardDescription>
                    Beautiful, responsive catalogs that look perfect on all devices and screen sizes
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 3 */}
              <Card className="border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-green-600">Booking System</CardTitle>
                  <CardDescription>
                    Let customers book appointments, reservations, or services directly
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 4 */}
              <Card className="border-2 hover:border-pink-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle className="text-pink-600">WhatsApp Integration</CardTitle>
                  <CardDescription>
                    Receive orders, bookings, and inquiries directly on WhatsApp
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 5 */}
              <Card className="border-2 hover:border-yellow-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle className="text-yellow-600">Custom Branding</CardTitle>
                  <CardDescription>
                    Customize colors, fonts, and layout to match your business's unique brand identity
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 6 */}
              <Card className="border-2 hover:border-red-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">Photo Gallery</CardTitle>
                  <CardDescription>
                    Upload photos of your products, services, or workspace to attract more customers
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 7 */}
              <Card className="border-2 hover:border-indigo-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-indigo-500" />
                  </div>
                  <CardTitle className="text-indigo-600">Analytics Dashboard</CardTitle>
                  <CardDescription>
                    Track views, popular items, and customer engagement with detailed analytics
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 8 */}
              <Card className="border-2 hover:border-teal-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-teal-500" />
                  </div>
                  <CardTitle className="text-teal-600">Multiple Languages</CardTitle>
                  <CardDescription>
                    Support for multiple languages to serve diverse customer bases
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 9 */}
              <Card className="border-2 hover:border-pink-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle className="text-pink-600">Secure & Reliable</CardTitle>
                  <CardDescription>
                    Enterprise-grade security with 99.9% uptime guarantee for your peace of mind
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="demo" className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-medium text-sm">
                  <BarChart3 className="w-4 h-4 mr-2 inline" />
                  How It Works
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Get Started in 3 Easy Steps
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Create your digital business presence in minutes
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <Card className="border-2 border-blue-200 bg-white shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <CardTitle className="text-xl text-blue-600">Sign Up & Choose Business</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>Create your free account and select your business type from businesses, shops, salons, clinics, and more.</p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-2 border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                  </div>
                  <CardTitle className="text-xl text-purple-600">Add Your Products/Services</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>Upload your product catalog, services, menus, or price lists. Add images, descriptions, and prices.</p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-2 border-green-200 bg-white shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <CardTitle className="text-xl text-green-600">Share & Get Orders</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>Generate your QR code and share it with customers. Receive orders and bookings directly on WhatsApp.</p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Grid */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">What Business Owners Get</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <QrCode className="h-10 w-10 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">QR Code</h4>
                  <p className="text-sm text-gray-600">Print & share QR codes for your business location</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <Smartphone className="h-10 w-10 text-purple-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Mobile Friendly</h4>
                  <p className="text-sm text-gray-600">Works perfectly on all mobile devices</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <MessageCircle className="h-10 w-10 text-green-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">WhatsApp Orders</h4>
                  <p className="text-sm text-gray-600">Get instant notifications for orders</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <BarChart3 className="h-10 w-10 text-orange-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
                  <p className="text-sm text-gray-600">Track views and understand your customers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                  Simple Pricing
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  Choose Your Plan
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Start free and scale as you grow. No hidden fees, no surprises.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Plan */}
              <Card className="relative border-2 border-blue-200 shadow-xl">
                <CardHeader className="text-center pb-8">
                  <div className="space-y-2">
                    <Badge className="bg-blue-500 text-white">Currently Active</Badge>
                    <CardTitle className="text-2xl font-bold text-blue-600">Free</CardTitle>
                    <div className="text-4xl font-bold text-gray-900">₹0</div>
                    <CardDescription>Perfect for getting started</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Up to 50 items</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Basic QR code generation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Mobile-friendly design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>WhatsApp notifications</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Basic customization</span>
                    </li>
                  </ul>
                  <Link href="/signup" className="block">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 mt-8">
                      Get Started Free
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="relative border-2 border-gray-200 shadow-lg opacity-75">
                <CardHeader className="text-center pb-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-gray-100 text-gray-600">Coming Soon</Badge>
                    <CardTitle className="text-2xl font-bold text-gray-600">Professional</CardTitle>
                    <div className="text-4xl font-bold text-gray-900">₹299</div>
                    <CardDescription className="text-gray-500">per month</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Unlimited items</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Advanced QR code features</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Custom branding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Photo gallery</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Analytics dashboard</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Priority support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-400 mt-8" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative border-2 border-gray-200 shadow-lg opacity-75">
                <CardHeader className="text-center pb-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-gray-100 text-gray-600">Coming Soon</Badge>
                    <CardTitle className="text-2xl font-bold text-gray-600">Enterprise</CardTitle>
                    <div className="text-4xl font-bold text-gray-900">₹499</div>
                    <CardDescription className="text-gray-500">per month</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Everything in Professional</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Multi-location support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">API access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Dedicated support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-400 mt-8" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  How It Works
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Everything you need to know about creating your digital business presence
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* FAQ Item 1 */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6" />
                    How can I create my business catalog?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Creating your digital business catalog is simple and intuitive:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Sign up for free</strong> - Create your account in less than 2 minutes</li>
                    <li><strong>Select your business type</strong> - Choose from business, salon, clinic, shop, and more</li>
                    <li><strong>Add your business details</strong> - Upload your logo, set your business name and description</li>
                    <li><strong>Create your catalog</strong> - Add products, services, or menu items</li>
                    <li><strong>Customize the design</strong> - Choose colors and fonts that match your brand</li>
                    <li><strong>Preview and publish</strong> - Review your catalog and make it live for customers</li>
                  </ol>
                </CardContent>
              </Card>

              {/* FAQ Item 2 */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600 flex items-center gap-3">
                    <QrCode className="h-6 w-6" />
                    How do I share my business with customers?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Sharing your business with customers is effortless:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Automatic generation</strong> - Your unique QR code is created automatically when you publish</li>
                    <li><strong>Download options</strong> - Get your QR code in high-resolution PNG or SVG format</li>
                    <li><strong>Print-ready</strong> - QR codes are optimized for printing on posters, flyers, or stickers</li>
                    <li><strong>Digital sharing</strong> - Share directly via social media, email, or messaging apps</li>
                    <li><strong>Multiple codes</strong> - Create different QR codes for different locations</li>
                  </ul>
                </CardContent>
              </Card>

              {/* FAQ Item 3 */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600 flex items-center gap-3">
                    <Calendar className="h-6 w-6" />
                    Can customers book appointments?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Yes! Customers can book appointments directly:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Scan the QR code</strong> - Customers use their phone camera to scan your QR code</li>
                    <li><strong>Browse your catalog</strong> - They view your products or services</li>
                    <li><strong>Select services</strong> - Customers choose what they want to book</li>
                    <li><strong>Choose time slot</strong> - Pick a convenient date and time</li>
                    <li><strong>Confirmation</strong> - Both you and the customer receive booking confirmation</li>
                  </ol>
                </CardContent>
              </Card>

              {/* FAQ Item 4 */}
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <CardTitle className="text-xl text-pink-600 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6" />
                    How do I receive bookings on WhatsApp?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    You'll receive booking notifications directly on WhatsApp:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Instant notifications</strong> - Every new booking pops up on WhatsApp immediately</li>
                    <li><strong>Complete booking details</strong> - See customer name, contact, selected services, and timing</li>
                    <li><strong>Booking number</strong> - Each booking gets a unique number for easy tracking</li>
                    <li><strong>Customer preferences</strong> - Any special requests are included</li>
                    <li><strong>Quick response</strong> - Message the customer directly to confirm or clarify</li>
                  </ul>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <p className="text-green-800 font-medium">
                      💡 Pro Tip: Set up WhatsApp Business for professional booking management.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Item 5 */}
              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-600 flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    Can multiple staff members receive bookings?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Yes! Perfect for business teams:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Team notifications</strong> - Send booking alerts to multiple WhatsApp numbers</li>
                    <li><strong>Role-based access</strong> - Assign different team members to manage bookings</li>
                    <li><strong>Booking assignment</strong> - Distribute bookings based on staff availability</li>
                    <li><strong>Status tracking</strong> - Mark bookings as confirmed, in-progress, or completed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-8 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-blue-600">
                <Image
                  src="/logo.png"
                  alt="MenuWala Logo"
                  width={40}
                  height={40}
                  className="h-24 w-auto rounded-2xl"
                />
              </div>
              <p className="text-gray-600">
                Grow your business with digital presence. Create catalogs, QR codes, and connect with customers.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="#features" className="hover:text-blue-600">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-blue-600">Pricing</Link></li>
                <li><Link href="#faq" className="hover:text-blue-600">FAQ</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-b border-blue-200 mt-4 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} 
              <Link href="https://proco.tech" className="text-blue-600 hover:underline underline-offset-4 mx-1"> Proco Technologies</Link>. 
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
