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
    { name: isHindi ? "व्यापार" : "Business", icon: Utensils, color: "orange", description: isHindi ? "व्यापार, कैफे और खाद्य व्यापार के लिए डिजिटल मेनू" : "Digital menus for businesses, cafes & food businesses" },
    { name: isHindi ? "रिटेल शॉप" : "Retail Shop", icon: ShoppingBag, color: "blue", description: isHindi ? "रिटेल स्टोर और दुकानों के लिए उत्पाद कैटलॉग" : "Product catalogs for retail stores & shops" },
    { name: isHindi ? "सैलून और स्पा" : "Salon & Spa", icon: Scissors, color: "pink", description: isHindi ? "सैलून और ब्यूटी स्पा के लिए सेवाएं और मूल्य" : "Services & pricing for salons & beauty spas" },
    { name: isHindi ? "हेल्थकेयर" : "Healthcare", icon: Heart, color: "red", description: isHindi ? "चिकित्सा सेवाएं और डॉक्टर परामर्श" : "Medical services & doctor consultations" },
    { name: isHindi ? "प्रोफेशनल सेवाएं" : "Professional Services", icon: Briefcase, color: "purple", description: isHindi ? "वकील, सलाहकार और सेवा प्रदाता" : "Lawyers, consultants & service providers" },
    { name: isHindi ? "ऑटोमोटिव" : "Automotive", icon: Car, color: "gray", description: isHindi ? "ऑटो रिपेयर और कार सर्विस सेंटर" : "Auto repair & car service centers" },
    { name: isHindi ? "रियल एस्टेट" : "Real Estate", icon: Home, color: "green", description: isHindi ? "संपत्ति सूची और एजेंट सेवाएं" : "Property listings & agent services" },
    { name: isHindi ? "ई-कॉमर्स" : "E-Commerce", icon: Laptop, color: "indigo", description: isHindi ? "ऑनलाइन स्टोर और उत्पाद प्रदर्शन" : "Online store & product showcases" },
    { name: isHindi ? "फिटनेस" : "Fitness", icon: Dumbbell, color: "yellow", description: isHindi ? "जिम, ट्रेनर और फिटनेस सेंटर" : "Gyms, trainers & fitness centers" },
    { name: isHindi ? "शिक्षा" : "Education", icon: BookOpen, color: "teal", description: isHindi ? "कोर्स, ट्यूशन और प्रशिक्षण संस्थान" : "Courses, tuitions & training institutes" },
    { name: isHindi ? "मनोरंजन" : "Entertainment", icon: Music, color: "violet", description: isHindi ? "इवेंट्स, स्थान और मनोरंजन" : "Events, venues & entertainment" },
    { name: isHindi ? "हॉस्पिटैलिटी" : "Hospitality", icon: Hotel, color: "cyan", description: isHindi ? "होटल, गेस्ट हाउस और किराया" : "Hotels, guest houses & rentals" },
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
              {t("features")}
            </Link>
            <Link href="#businesses" className="text-sm font-medium text-white hover:underline underline-offset-4">
              {isHindi ? "व्यापारों के लिए" : "For Businesses"}
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-white hover:underline underline-offset-4">
              {t("pricing")}
            </Link>
            <Link href="#faq" className="text-sm font-medium text-white hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link  href="/login">
              <Button className="bg-yellow-500" variant="secondary" size="sm">
                {t("login")}
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
                {t("digitalPresenceSolution")}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 tracking-tight leading-tight">
                {t("growYourBusiness")} 
                <span className="text-purple-600"> {t("digitalPresence")}</span>
              </h1>
              <p className="text-gray-600 md:text-xl lg:text-2xl max-w-2xl">
                {t("createStunningCatalogs")} 
                {isHindi ? " " : " "}
                {t("perfectForBusinesses")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6">
                    {t("startFreeToday")} <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#businesses">
                  <Button variant="outline" size="lg" className="border-blue-500 text-blue-500 hover:bg-blue-50 text-lg px-8 py-6">
                    {t("seeAllBusinesses")}
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
                  <span className="text-sm text-gray-600">{t("businessesTrustUs")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-2">{t("rating")}</span>
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
                    <span className="text-xs font-medium text-gray-600">{isHindi ? "व्यापार" : "Business"}</span>
                  </div>
                  {/* Retail */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <ShoppingBag className="h-8 w-8 text-blue-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{isHindi ? "दुकान" : "Retail"}</span>
                  </div>
                  {/* Salon */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                      <Scissors className="h-8 w-8 text-pink-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{isHindi ? "सैलून" : "Salon"}</span>
                  </div>
                  {/* Healthcare */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-2">
                      <Heart className="h-8 w-8 text-red-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{isHindi ? "हेल्थ" : "Healthcare"}</span>
                  </div>
                  {/* Services */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <Briefcase className="h-8 w-8 text-purple-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{isHindi ? "सेवाएं" : "Services"}</span>
                  </div>
                  {/* Fitness */}
                  <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                      <Dumbbell className="h-8 w-8 text-yellow-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{isHindi ? "फिटनेस" : "Fitness"}</span>
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
                  {isHindi ? "सभी व्यापारों के लिए" : "For All Businesses"}
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  {t("anyBusinessCanGoOnline")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  {t("whetherYouRun")}
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
                  {t("createYourDigitalPresence")} <ArrowRight className="h-5 w-5 ml-2" />
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
                  {t("powerfulFeatures")}
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  {t("everythingYouNeed")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  {t("completeSolution")}
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
                  <CardTitle className="text-blue-600">{t("qrCodeGeneration")}</CardTitle>
                  <CardDescription>
                    {t("qrCodeGenerationDesc")}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 2 */}
              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-purple-600">{t("mobileOptimized")}</CardTitle>
                  <CardDescription>
                    {t("mobileOptimizedDesc")}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 3 */}
              <Card className="border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-green-600">{t("bookingSystem")}</CardTitle>
                  <CardDescription>
                    {t("bookingSystemDesc")}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 4 */}
              <Card className="border-2 hover:border-pink-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle className="text-pink-600">{t("whatsappIntegration")}</CardTitle>
                  <CardDescription>
                    {t("whatsappIntegrationDesc")}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 5 */}
              <Card className="border-2 hover:border-yellow-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle className="text-yellow-600">{t("customBranding")}</CardTitle>
                  <CardDescription>
                    {t("customBrandingDesc")}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 6 */}
              <Card className="border-2 hover:border-red-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600">{t("photoGallery")}</CardTitle>
                  <CardDescription>
                    {t("photoGalleryDesc")}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 7 */}
              <Card className="border-2 hover:border-indigo-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-indigo-500" />
                  </div>
                  <CardTitle className="text-indigo-600">{t("analyticsDashboard")}</CardTitle>
                  <CardDescription>
                    {t("analyticsDashboardDesc")}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 8 */}
              <Card className="border-2 hover:border-teal-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-teal-500" />
                  </div>
                  <CardTitle className="text-teal-600">{t("multipleLanguages")}</CardTitle>
                  <CardDescription>
                    {t("multipleLanguagesDesc")}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 9 */}
              <Card className="border-2 hover:border-pink-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle className="text-pink-600">{t("secureReliable")}</CardTitle>
                  <CardDescription>
                    {t("secureReliableDesc")}
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
                  {t("howItWorksTitle")}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {t("getStartedIn3EasySteps")}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {t("createYourDigitalBusiness")}
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
                  <CardTitle className="text-xl text-blue-600">{t("signUpChooseBusiness")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>{t("signUpChooseBusinessDesc")}</p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-2 border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                  </div>
                  <CardTitle className="text-xl text-purple-600">{t("addProductsServices")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>{t("addProductsServicesDesc")}</p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-2 border-green-200 bg-white shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <CardTitle className="text-xl text-green-600">{t("shareGetOrders")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>{t("shareGetOrdersDesc")}</p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Grid */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">{t("whatBusinessOwnersGet")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <QrCode className="h-10 w-10 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{t("qrCodeTitle")}</h4>
                  <p className="text-sm text-gray-600">{t("qrCodeDesc")}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <Smartphone className="h-10 w-10 text-purple-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{t("mobileFriendlyTitle")}</h4>
                  <p className="text-sm text-gray-600">{t("mobileFriendlyDesc")}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <MessageCircle className="h-10 w-10 text-green-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{t("whatsappOrdersTitle")}</h4>
                  <p className="text-sm text-gray-600">{t("whatsappOrdersDesc")}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <BarChart3 className="h-10 w-10 text-orange-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{t("analyticsTitle")}</h4>
                  <p className="text-sm text-gray-600">{t("analyticsDesc")}</p>
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
                  {t("simplePricing")}
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  {t("chooseYourPlan")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  {t("startFreeScale")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Plan */}
              <Card className="relative border-2 border-blue-200 shadow-xl">
                <CardHeader className="text-center pb-8">
                  <div className="space-y-2">
                    <Badge className="bg-blue-500 text-white">{isHindi ? "वर्तमान में सक्रिय" : "Currently Active"}</Badge>
                    <CardTitle className="text-2xl font-bold text-blue-600">{t("freePlan")}</CardTitle>
                    <div className="text-4xl font-bold text-gray-900">₹0</div>
                    <CardDescription>{t("freePlanPerfect")}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{t("upTo50Items")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{t("basicQRCode")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{t("mobileFriendly")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{t("whatsappNotifications")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{t("basicCustomization")}</span>
                    </li>
                  </ul>
                  <Link href="/signup" className="block">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 mt-8">
                      {t("getStartedFree")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="relative border-2 border-gray-200 shadow-lg opacity-75">
                <CardHeader className="text-center pb-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-gray-100 text-gray-600">{t("comingSoon")}</Badge>
                    <CardTitle className="text-2xl font-bold text-gray-600">{t("professionalPlan")}</CardTitle>
                    <div className="text-4xl font-bold text-gray-900">₹299</div>
                    <CardDescription className="text-gray-500">{t("perMonth")}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("unlimitedItems")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("advancedQRCodeFeatures")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("customBrandingPlan")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("photoGalleryPlan")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("analyticsDashboardPlan")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("prioritySupport")}</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-400 mt-8" disabled>
                    {t("comingSoon")}
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative border-2 border-gray-200 shadow-lg opacity-75">
                <CardHeader className="text-center pb-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-gray-100 text-gray-600">{t("comingSoon")}</Badge>
                    <CardTitle className="text-2xl font-bold text-gray-600">{t("enterprisePlan")}</CardTitle>
                    <div className="text-4xl font-bold text-gray-900">₹499</div>
                    <CardDescription className="text-gray-500">{t("perMonth")}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("everythingInProfessional")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("multiLocationSupport")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("advancedAnalytics")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("apiAccess")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("customIntegrations")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">{t("dedicatedSupport")}</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-400 mt-8" disabled>
                    {t("comingSoon")}
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
                  {t("frequentlyAskedQuestions")}
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
                  {t("howItWorksTitle")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  {t("everythingYouNeedToKnow")}
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* FAQ Item 1 */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6" />
                    {t("howCanICreate")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    {t("creatingYourDigital")}
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>{t("step1Create")}</strong></li>
                    <li><strong>{t("step2Select")}</strong></li>
                    <li><strong>{t("step3Add")}</strong></li>
                    <li><strong>{t("step4CreateCatalog")}</strong></li>
                    <li><strong>{t("step5Customize")}</strong></li>
                    <li><strong>{t("step6Preview")}</strong></li>
                  </ol>
                </CardContent>
              </Card>

              {/* FAQ Item 2 */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600 flex items-center gap-3">
                    <QrCode className="h-6 w-6" />
                    {t("howDoIShare")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    {t("sharingYourBusiness")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>{t("automaticGeneration")}</strong></li>
                    <li><strong>{t("downloadOptions")}</strong></li>
                    <li><strong>{t("printReady")}</strong></li>
                    <li><strong>{t("digitalSharing")}</strong></li>
                    <li><strong>{t("multipleCodes")}</strong></li>
                  </ul>
                </CardContent>
              </Card>

              {/* FAQ Item 3 */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600 flex items-center gap-3">
                    <Calendar className="h-6 w-6" />
                    {t("canCustomersBook")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    {t("customersCanBook")}
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>{t("scanQRCode")}</strong></li>
                    <li><strong>{t("browseCatalog")}</strong></li>
                    <li><strong>{t("selectServices")}</strong></li>
                    <li><strong>{t("chooseTimeSlot")}</strong></li>
                    <li><strong>{t("confirmation")}</strong></li>
                  </ol>
                </CardContent>
              </Card>

              {/* FAQ Item 4 */}
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <CardTitle className="text-xl text-pink-600 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6" />
                    {t("howDoIReceive")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    {t("receiveBookingNotifications")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>{t("instantNotifications")}</strong></li>
                    <li><strong>{t("completeBookingDetails")}</strong></li>
                    <li><strong>{t("bookingNumber")}</strong></li>
                    <li><strong>{t("customerPreferences")}</strong></li>
                    <li><strong>{t("quickResponse")}</strong></li>
                  </ul>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <p className="text-green-800 font-medium">
                      💡 {t("proTip")}: {t("setUpWhatsapp")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Item 5 */}
              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-600 flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    {t("canMultipleStaff")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    {t("perfectForTeams")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>{t("teamNotifications")}</strong></li>
                    <li><strong>{t("roleBasedAccess")}</strong></li>
                    <li><strong>{t("bookingAssignment")}</strong></li>
                    <li><strong>{t("statusTracking")}</strong></li>
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
                {isHindi ? "डिजिटल प्रेसेन्स के साथ अपना व्यापार बढ़ाएं। कैटलॉग, QR कोड बनाएं और ग्राहकों से जुड़ें।" : "Grow your business with digital presence. Create catalogs, QR codes, and connect with customers."}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">{t("product")}</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="#features" className="hover:text-blue-600">{t("features")}</Link></li>
                <li><Link href="#pricing" className="hover:text-blue-600">{t("pricing")}</Link></li>
                <li><Link href="#faq" className="hover:text-blue-600">FAQ</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">{isHindi ? "सहायता" : "Support"}</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">{t("helpCenter")}</a></li>
                <li><a href="#" className="hover:text-blue-600">{t("contactUs")}</a></li>
                <li><a href="#" className="hover:text-blue-600">{t("documentation")}</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">{t("company")}</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">{t("about")}</a></li>
                <li><a href="#" className="hover:text-blue-600">{t("privacy")}</a></li>
                <li><a href="#" className="hover:text-blue-600">{t("terms")}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-b border-blue-200 mt-4 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} 
              <Link href="https://proco.tech" className="text-blue-600 hover:underline underline-offset-4 mx-1"> Proco Technologies</Link>. 
              {t("allRightsReserved")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
