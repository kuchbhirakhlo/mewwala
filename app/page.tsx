import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Coffee, 
  Pizza, 
  QrCode, 
  Smartphone, 
  CheckCircle,
  Clock,
  Star,
  Users,
  Zap,
  Shield,
  Headphones,
  MessageCircle,
  Camera,
  Menu as MenuIcon,
  Palette,
  BarChart3,
  Globe,
  Lock
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-black sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <Image
              src="/logo.png"
              alt="Menu Wala Logo"
              width={40}
              height={40}
              className="h-32 w-auto rounded-2xl"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-white hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-white hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
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
        <section className="relative min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center">
          <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
                <Zap className="w-4 h-4 mr-2" />
                Digital Menu Solution
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-600 tracking-tight leading-tight">
                Transform Your Restaurant with 
                <span className="text-amber-500"> Digital Menus</span>
              </h1>
              <p className="text-gray-600 md:text-xl lg:text-2xl max-w-2xl">
                Create stunning digital menus, generate QR codes, and receive orders directly on WhatsApp. 
                Perfect for restaurants, cafes, food trucks, and any food service business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6">
                    Start Free Today <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-6">
                    Watch Demo
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <Image src="https://thekeshvicafe.odoo.com/web/image/website/1/logo/The%20Keshvi%20cafe?unique=5a30f8e" alt="User" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white" />
                    <Image src="https://thekeshvicafe.odoo.com/web/image/website/1/logo/The%20Keshvi%20cafe?unique=5a30f8e" alt="User" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white" />
                    <Image src="https://thekeshvicafe.odoo.com/web/image/website/1/logo/The%20Keshvi%20cafe?unique=5a30f8e" alt="User" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white" />
                  </div>
                  <span className="text-sm text-gray-600">500+ restaurants trust us</span>
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

            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="relative z-10">
                  <Image
                    src="/image.png"
                    alt="Digital restaurant menu on mobile device"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                    width={600}
                    height={800}
                  />
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3">
                    <QrCode className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3">
                    <MessageCircle className="w-8 h-8 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-orange-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-orange-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
                  Powerful Features
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-orange-600">
                  Everything You Need
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Complete solution for modern restaurants and food service businesses
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                    <MenuIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-orange-600">Easy Menu Management</CardTitle>
                  <CardDescription>
                    Create and update your menu items, categories, and prices in seconds with our intuitive editor
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 2 */}
              <Card className="border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <QrCode className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-green-600">QR Code Generation</CardTitle>
                  <CardDescription>
                    Generate beautiful, scannable QR codes for your menu that customers can easily access
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 3 */}
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-blue-600">Mobile Optimized</CardTitle>
                  <CardDescription>
                    Beautiful, responsive menus that look perfect on all devices and screen sizes
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 4 */}
              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-purple-600">WhatsApp Integration</CardTitle>
                  <CardDescription>
                    Receive orders directly on WhatsApp with customer details and order preferences
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
                    Customize colors, fonts, and layout to match your restaurant's unique brand identity
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
                    Upload mouth-watering photos of your dishes to Menu Wala  more appealing
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
                    Track menu views, popular items, and customer engagement with detailed analytics
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

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
                  Simple Pricing
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-orange-600">
                  Choose Your Plan
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Start free and scale as you grow. No hidden fees, no surprises.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Plan */}
              <Card className="relative border-2 border-orange-200 shadow-xl">
                <CardHeader className="text-center pb-8">
                  <div className="space-y-2">
                    <Badge className="bg-orange-500 text-white">Currently Active</Badge>
                    <CardTitle className="text-2xl font-bold text-orange-600">Free</CardTitle>
                    <div className="text-4xl font-bold text-gray-900">$0</div>
                    <CardDescription>Perfect for getting started</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Up to 50 menu items</span>
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
                      <span>WhatsApp order notifications</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Basic customization</span>
                    </li>
                  </ul>
                  <Link href="/signup" className="block">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-8">
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
                    <div className="text-4xl font-bold text-gray-900">$29</div>
                    <CardDescription className="text-gray-500">per month</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Unlimited menu items</span>
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
                    <div className="text-4xl font-bold text-gray-900">$99</div>
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
                <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
                  Frequently Asked Questions
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-orange-600">
                  How It Works
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Everything you need to know about creating and managing your digital menu
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* FAQ Item 1 */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6" />
                    How can vendors create their restaurant menu?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Creating your digital menu is simple and intuitive:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Sign up for free</strong> - Create your account in less than 2 minutes</li>
                    <li><strong>Add your restaurant details</strong> - Upload your logo, set your restaurant name and description</li>
                    <li><strong>Create menu categories</strong> - Organize your dishes into sections (Appetizers, Main Course, Desserts, etc.)</li>
                    <li><strong>Add your dishes</strong> - Upload photos, descriptions, prices, and any special notes</li>
                    <li><strong>Customize the design</strong> - Choose colors and fonts that match your brand</li>
                    <li><strong>Preview and publish</strong> - Review your menu and make it live for customers</li>
                  </ol>
                </CardContent>
              </Card>

              {/* FAQ Item 2 */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600 flex items-center gap-3">
                    <QrCode className="h-6 w-6" />
                    How do I share QR codes with customers?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Sharing your menu with customers is effortless:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Automatic generation</strong> - Your unique QR code is created automatically when you publish your menu</li>
                    <li><strong>Download options</strong> - Get your QR code in high-resolution PNG or SVG format</li>
                    <li><strong>Print-ready</strong> - QR codes are optimized for printing on table tents, posters, or stickers</li>
                    <li><strong>Digital sharing</strong> - Share directly via social media, email, or messaging apps</li>
                    <li><strong>Multiple codes</strong> - Create different QR codes for different locations or sections of your restaurant</li>
                  </ul>
                </CardContent>
              </Card>

              {/* FAQ Item 3 */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 flex items-center gap-3">
                    <Smartphone className="h-6 w-6" />
                    How do customers place orders using QR codes?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    The ordering process is seamless for your customers:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Scan the QR code</strong> - Customers use their phone camera to scan your QR code</li>
                    <li><strong>Browse your menu</strong> - They view your digital menu with photos and descriptions</li>
                    <li><strong>Select items</strong> - Customers add items to their cart and customize as needed</li>
                    <li><strong>Submit order</strong> - They review their order and submit it through the interface</li>
                    <li><strong>Confirmation</strong> - Customers receive an order confirmation and estimated preparation time</li>
                  </ol>
                </CardContent>
              </Card>

              {/* FAQ Item 4 */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6" />
                    How do I receive orders on WhatsApp?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    You'll receive order notifications directly on WhatsApp:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Instant notifications</strong> - Every new order pops up on WhatsApp immediately</li>
                    <li><strong>Complete order details</strong> - See customer name, contact, selected items, customizations, and total</li>
                    <li><strong>Order number</strong> - Each order gets a unique number for easy tracking</li>
                    <li><strong>Customer preferences</strong> - Any special requests or dietary restrictions are included</li>
                    <li><strong>Quick response</strong> - Message the customer directly to confirm or clarify details</li>
                    <li><strong>Order status updates</strong> - Send updates about preparation and pickup/delivery times</li>
                  </ul>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <p className="text-green-800 font-medium">
                      💡 Pro Tip: Set up WhatsApp Business for professional order management with automated responses and better organization.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Item 5 */}
              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-600 flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    Can multiple staff members receive orders?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Yes! Perfect for restaurant teams:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Team notifications</strong> - Send order alerts to multiple WhatsApp numbers</li>
                    <li><strong>Role-based access</strong> - Assign different team members to manage orders</li>
                    <li><strong>Order assignment</strong> - Distribute orders based on kitchen stations or shifts</li>
                    <li><strong>Status tracking</strong> - Mark orders as received, in preparation, ready, or completed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-8 bg-orange-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-orange-600">
                <Image
                  src="/logo.png"
                  alt="Menu Wala Logo"
                  width={40}
                  height={40}
                  className="h-24 w-auto rounded-2xl"
                />
              </div>
              <p className="text-gray-600">
                Transform your restaurant with beautiful digital menus and seamless QR code ordering.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="#features" className="hover:text-orange-600">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-orange-600">Pricing</Link></li>
                <li><Link href="#faq" className="hover:text-orange-600">FAQ</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-600">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-600">Documentation</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-600">About</a></li>
                <li><a href="#" className="hover:text-orange-600">Privacy</a></li>
                <li><a href="#" className="hover:text-orange-600">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-b border-orange-200 mt-4 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} 
              <Link href="https://proco.tech" className="text-orange-600 hover:underline underline-offset-4 mx-1"> Proco Technologies</Link>. 
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
