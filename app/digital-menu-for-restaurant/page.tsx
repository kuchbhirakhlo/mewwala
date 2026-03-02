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
  Utensils,
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
  ChevronUp
} from "lucide-react"
import { useState } from "react"

export default function DigitalMenuForRestaurant() {
  const { language, t } = useLanguage()
  const isHindi = language === 'hi'
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: isHindi ? "पारंपरिक मेनू की तुलना में डिजिटल मेनू कितना सस्ता है?" : "How much cheaper is a digital menu compared to traditional menus?",
      answer: isHindi 
        ? "पारंपरिक मेनू प्रिंट कराने में ₹5,000-₹20,000 सालाना खर्च आता है। डिजिटल मेनू से आप यह खर्च पूरी तरह बचा सकते हैं और अपने मेनू को कभी भी मुफ्त में अपडेट कर सकते हैं।"
        : "Traditional menu printing costs ₹5,000-₹20,000 annually. With a digital menu, you can save this entirely and update your menu anytime for free."
    },
    {
      question: isHindi ? "क्या ग्राहकों को ऐप डाउनलोड करना होगा?" : "Will customers need to download an app?",
      answer: isHindi 
        ? "नहीं! ग्राहकों को कोई ऐप डाउनलोड करने की जरूरत नहीं है। वे सिर्फ QR कोड स्कैन करके तुरंत मेनू देख सकते हैं।"
        : "No! Customers don't need to download any app. They can simply scan the QR code and view the menu instantly."
    },
    {
      question: isHindi ? "क्या मेनू में तस्वीरें जोड़ सकते हैं?" : "Can I add photos to the menu?",
      answer: isHindi 
        ? "हाँ, आप प्रत्येक आइटम के लिए आकर्षक तस्वीरें जोड़ सकते हैं। यह ग्राहकों को आइटम ब्राउज़ करने और ऑर्डर देने में मदद करता है।"
        : "Yes, you can add attractive photos for each item. This helps customers browse items and place orders."
    },
    {
      question: isHindi ? "क्या मैं मेनू को रियल-टाइम में अपडेट कर सकता हूं?" : "Can I update the menu in real-time?",
      answer: isHindi 
        ? "हाँ, आप किसी भी समय अपने मेनू में बदलाव कर सकते हैं - कीमतें, उपलब्धता, या नए आइटम जोड़ना। तुरंत सभी ग्राहकों को अपडेट दिखेगा।"
        : "Yes, you can make changes to your menu anytime - prices, availability, or adding new items. Updates appear instantly to all customers."
    },
    {
      question: isHindi ? "क्या मल्टी-लैंग्वेज सपोर्ट मिलता है?" : "Is multi-language support available?",
      answer: isHindi 
        ? "हाँ, आप अपना मेनू हिंदी और अंग्रेजी दोनों भाषाओं में बना सकते हैं, जिससे अधिक ग्राहकों तक पहुंच सकते हैं।"
        : "Yes, you can create your menu in both Hindi and English, reaching more customers."
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: isHindi ? "प्रिंटिंग लागत बचाएं" : "Save Printing Costs",
      description: isHindi 
        ? "लाखों रुपये बचाएं जो आप पारंपरिक मेनू प्रिंट करने में खर्च करते थे।"
        : "Save lakhs of rupees you spend on printing traditional menus."
    },
    {
      icon: Clock,
      title: isHindi ? "समय बचाएं" : "Save Time",
      description: isHindi 
        ? "मेनू अपडेट करने में घंटे बचाएं। नए आइटम या कीमतें तुरंत जोड़ें।"
        : "Save hours updating menus. Add new items or prices instantly."
    },
    {
      icon: TrendingUp,
      title: isHindi ? "बिक्री बढ़ाएं" : "Increase Sales",
      description: isHindi 
        ? "हाई-क्वालिटी इमेज और आसान ऑर्डरिंग से ग्राहक ज्यादा खर्च करते हैं।"
        : "High-quality images and easy ordering make customers spend more."
    },
    {
      icon: Smartphone,
      title: isHindi ? "मोबाइल-फ्रेंडली" : "Mobile-Friendly",
      description: isHindi 
        ? "हर ग्राहक का फोन अब उनका ऑर्डरिंग डिवाइस है।"
        : "Every customer's phone is now their ordering device."
    },
    {
      icon: RefreshCw,
      title: isHindi ? "आसान अपडेट" : "Easy Updates",
      description: isHindi 
        ? "मेनू में कभी भी बदलाव करें - बिना प्रिंटर के।"
        : "Make changes anytime - no printer needed."
    },
    {
      icon: ImageIcon,
      title: isHindi ? "प्रोफेशनल लुक" : "Professional Look",
      description: isHindi 
        ? "आधुनिक डिजिटल मेनू से आपकी रेस्तरां की छवि बेहतर बने।"
        : "Modern digital menu enhances your restaurant's image."
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
              {isHindi ? "समस्या" : "Problem"}
            </Link>
            <Link href="#solution" className="text-sm font-medium text-white hover:underline underline-offset-4">
              {isHindi ? "समाधान" : "Solution"}
            </Link>
            <Link href="#benefits" className="text-sm font-medium text-white hover:underline underline-offset-4">
              {isHindi ? "लाभ" : "Benefits"}
            </Link>
            <Link href="#faq" className="text-sm font-medium text-white hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link href="/signup">
              <Button className="bg-yellow-500" variant="secondary" size="sm">
                {t("startFree")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] w-full bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center">
          <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
                <Utensils className="w-4 h-4 mr-2" />
                {isHindi ? "रेस्तरां के लिए डिजिटल मेनू" : "Digital Menu for Restaurant"}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-600 tracking-tight leading-tight">
                {isHindi ? "अपने रेस्तरां को" : "Transform Your Restaurant"}
                <span className="text-yellow-600"> {isHindi ? "डिजिटल बनाएं" : "Digitally"}</span>
              </h1>
              <p className="text-gray-600 md:text-xl lg:text-2xl max-w-2xl">
                {isHindi 
                  ? "QR कोड से ग्राहकों का मेनू दिखाएं। प्रिंटिंग लागत बचाएं, बिक्री बढ़ाएं।"
                  : "Show menu to customers via QR code. Save printing costs, increase sales."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6">
                    {isHindi ? "मुफ्त में शुरू करें" : "Start Free"} <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-6">
                    {isHindi ? "लॉगिन करें" : "Login"}
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
                  <span className="text-sm text-gray-600 ml-2">{isHindi ? "500+ रेस्तरां" : "500+ Restaurants"}</span>
                </div>
              </div>
            </div>

            {/* Right Content - Demo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border-2 border-orange-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <Utensils className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{isHindi ? "स्वादिष्ट भोजन" : "Tasty Bites"}</h3>
                        <p className="text-sm text-gray-500">{isHindi ? "रेस्तरां मेनू" : "Restaurant Menu"}</p>
                      </div>
                    </div>
                    <QrCode className="h-8 w-8 text-orange-500" />
                  </div>
                  
                  {/* Menu Preview */}
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-semibold text-orange-600 mb-2">{isHindi ? "मुख्य व्यंजन" : "Main Course"}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">{isHindi ? "बटर चिकन" : "Butter Chicken"}</span>
                          <span className="font-semibold text-orange-600">₹350</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">{isHindi ? "पालक पनीर" : "Palak Paneer"}</span>
                          <span className="font-semibold text-orange-600">₹280</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">{isHindi ? "दाल मख्नी" : "Dal Makhani"}</span>
                          <span className="font-semibold text-orange-600">₹250</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-3">
                      <h4 className="font-semibold text-orange-600 mb-2">{isHindi ? "ब्रेड" : "Breads"}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">{isHindi ? "बटर नान" : "Butter Naan"}</span>
                          <span className="font-semibold text-orange-600">₹60</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">{isHindi ? "गार्लिक नान" : "Garlic Naan"}</span>
                          <span className="font-semibold text-orange-600">₹80</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2">{isHindi ? "पेय" : "Beverages"}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">{isHindi ? "मसाला चाय" : "Masala Chai"}</span>
                          <span className="font-semibold text-orange-600">₹30</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">{isHindi ? "कोल्ड ड्रिंक" : "Cold Drink"}</span>
                          <span className="font-semibold text-orange-600">₹40</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <p className="text-center text-sm text-gray-500">
                      📱 {isHindi ? "QR कोड स्कैन करें" : "Scan QR Code"}
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
                  {isHindi ? "समस्या" : "The Problem"}
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  {isHindi ? "पारंपरिक मेनू की सीमाएं" : "Limitations of Traditional Menus"}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  {isHindi 
                    ? "रेस्तरां मालिकों को हर साल लाखों रुपये खर्च करने पड़ते हैं"
                    : "Restaurant owners spend lakhs every year"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Printer className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">{isHindi ? "उच्च प्रिंटिंग लागत" : "High Printing Costs"}</CardTitle>
                  <CardDescription className="text-base">
                    {isHindi 
                      ? "हर साल ₹5,000-₹20,000 मेनू प्रिंट करने पर खर्च होते हैं।"
                      : "Spending ₹5,000-₹20,000 every year on menu printing."}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">{isHindi ? "धीमे अपडेट" : "Slow Updates"}</CardTitle>
                  <CardDescription className="text-base">
                    {isHindi 
                      ? "कीमत बदलने या नया आइटम जोड़ने में दिन लगते हैं।"
                      : "Price changes or new items take days to update."}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <ImageIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">{isHindi ? "कोई फोटो नहीं" : "No Photos"}</CardTitle>
                  <CardDescription className="text-base">
                    {isHindi 
                      ? "पारंपरिक मेनू में तस्वीरें नहीं दिखाई जातीं जो बिक्री बढ़ाती हैं।"
                      : "Traditional menus can't show photos that boost sales."}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Menu className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">{isHindi ? "सीमित जानकारी" : "Limited Information"}</CardTitle>
                  <CardDescription className="text-base">
                    {isHindi 
                      ? "सिर्फ नाम और कीमत - एलर्जी, स्पाइस लेवल नहीं दिखा सकते।"
                      : "Only name and price - can't show allergens, spice level."}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">{isHindi ? "गंदे मेनू" : "Dirty Menus"}</CardTitle>
                  <CardDescription className="text-base">
                    {isHindi 
                      ? "कागज के मेनू की सफाई और कीटाणुशोधन मुश्किल है।"
                      : "Paper menus are hard to clean and sanitize."}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-red-200 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">{isHindi ? "पुराना दिखता है" : "Looks Outdated"}</CardTitle>
                  <CardDescription className="text-base">
                    {isHindi 
                      ? "पारंपरिक मेनू से आपकी रेस्तरां पुरानी लगती है।"
                      : "Traditional menus make your restaurant look old."}
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
                  {isHindi ? "समाधान" : "The Solution"}
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-green-600">
                  {isHindi ? "डिजिटल मेनू से लाभ" : "Benefits of Digital Menu"}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  {isHindi 
                    ? "QR कोड और डिजिटल तकनीक से सभी समस्याएं हल"
                    : "Solve all problems with QR code & digital technology"}
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
                    <h3 className="font-bold text-gray-900 text-lg">{isHindi ? "QR कोड - एक क्लिक में" : "QR Code - One Click"}</h3>
                    <p className="text-gray-600">
                      {isHindi 
                        ? "हर टेबल पर QR कोड लगाएं। ग्राहक स्कैन करके तुरंत मेनू देखें।"
                        : "Put QR code on every table. Customers scan and view menu instantly."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{isHindi ? "आकर्षक फोटो" : "Attractive Photos"}</h3>
                    <p className="text-gray-600">
                      {isHindi 
                        ? "हर आइटम की फोटो जोड़ें। भोजन की खूबसूरती दिखाएं।"
                        : "Add photos of every item. Show the beauty of your food."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{isHindi ? "तुरंत अपडेट" : "Instant Updates"}</h3>
                    <p className="text-gray-600">
                      {isHindi 
                        ? "कीमत बदलें, नया आइटम जोड़ें - सेकंड में। कोई प्रिंटर नहीं चाहिए।"
                        : "Change prices, add new items - in seconds. No printer needed."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{isHindi ? "स्मार्टफोन पर परफेक्ट" : "Perfect on Smartphone"}</h3>
                    <p className="text-gray-600">
                      {isHindi 
                        ? "मोबाइल के लिए ऑप्टिमाइज्ड। बड़े फोटो, आसान नेविगेशन।"
                        : "Mobile optimized. Large photos, easy navigation."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{isHindi ? "व्हाट्सएप ऑर्डर" : "WhatsApp Orders"}</h3>
                    <p className="text-gray-600">
                      {isHindi 
                        ? "ग्राहक व्हाट्सएप पर सीधे ऑर्डर भेज सकते हैं।"
                        : "Customers can directly send orders via WhatsApp."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Demo Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-100">
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                  {isHindi ? "आपका डिजिटल मेनू ऐसा दिखेगा" : "Your Digital Menu Will Look Like This"}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">{isHindi ? "आज का स्पेशल" : "Today's Special"}</span>
                    <Badge className="bg-green-500">NEW</Badge>
                  </div>
                  
                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Utensils className="h-8 w-8 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{isHindi ? "टिक्का मसाला" : "Tikka Masala"}</h4>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {isHindi 
                            ? "मसालेदार ग्रेवी में मरिगेटेड चिकन" : "Marinated chicken in spiced gravy"}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-sm text-gray-500">🔥 {isHindi ? "मध्यम" : "Medium"}</span>
                        </div>
                        <p className="font-bold text-green-600 mt-1">₹320</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Utensils className="h-8 w-8 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{isHindi ? "पीजा मार्गेरिता" : "Pizza Margherita"}</h4>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {isHindi 
                            ? "टमाटर, मोज़ेरेला और ताज़ी बेसिल" : "Tomato, mozzarella & fresh basil"}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">🥛 {isHindi ? "शाकाहारी" : "Vegetarian"}</Badge>
                        </div>
                        <p className="font-bold text-green-600 mt-1">₹450</p>
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
                  {isHindi ? "लाभ" : "Benefits"}
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  {isHindi ? "आपको मिलेगा" : "What You Get"}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  {isHindi 
                    ? "डिजिटल मेनू से व्यापार को फायदा"
                    : "Benefits for your business"}
                </p>
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
            <div className="mt-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {isHindi ? "अभी शुरू करें - मुफ्त!" : "Start Now - It's Free!"}
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                {isHindi 
                  ? "कोई क्रेडिट कार्ड नहीं, कोई隐藏 शुल्क नहीं। 50 आइटम तक मुफ्त।"
                  : "No credit card, no hidden fees. Up to 50 items free."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
                    {isHindi ? "मुफ्त में शुरू करें" : "Start Free"} <ArrowRight className="h-5 w-5" />
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
                  {isHindi ? "सामान्य प्रश्न" : "Common Questions"}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  {isHindi 
                    ? "सब कुछ जो आप जानना चाहते हैं"
                    : "Everything you want to know"}
                </p>
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
        <section className="w-full py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isHindi ? "आज ही शुरू करें?" : "Ready to Start Today?"}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {isHindi 
                ? "अपने रेस्तरां को आधुनिक बनाएं और प्रिंटिंग लागत बचाएं"
                : "Make your restaurant modern and save printing costs"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="gap-2 bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
                  {isHindi ? "मुफ्त में शुरू करें" : "Start Free"} <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  {isHindi ? "लॉगिन करें" : "Login"}
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
                {isHindi 
                  ? "डिजिटल मेनू और QR कोड समाधान"
                  : "Digital menu & QR code solutions"}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">{isHindi ? "लिंक" : "Links"}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">{isHindi ? "होम" : "Home"}</Link></li>
                <li><Link href="/signup" className="hover:text-white">{isHindi ? "साइनअप" : "Sign Up"}</Link></li>
                <li><Link href="/login" className="hover:text-white">{isHindi ? "लॉगिन" : "Login"}</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">{isHindi ? "संपर्क" : "Contact"}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@menuwala.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} MenuWala. {isHindi ? "सर्वाधिकार सुरक्षित" : "All rights reserved"}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
