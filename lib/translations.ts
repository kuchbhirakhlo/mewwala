// Translation system for Hindi and English
export type Language = 'en' | 'hi'

export interface Translations {
  // Header
  home: string
  features: string
  howItWorks: string
  pricing: string
  contact: string
  login: string
  getStarted: string
  
  // Hero section
  heroTitle: string
  heroSubtitle: string
  heroCta: string
  
  // Business types
  restaurant: string
  shop: string
  salon: string
  clinic: string
  hotel: string
  gym: string
  cafe: string
  bakery: string
  medicalStore: string
  clothing: string
  electronics: string
  other: string
  
  // How it works
  howItWorksTitle: string
  step1: string
  step1Desc: string
  step2: string
  step2Desc: string
  step3: string
  step3Desc: string
  
  // Features
  featuresTitle: string
  feature1Title: string
  feature1Desc: string
  feature2Title: string
  feature2Desc: string
  feature3Title: string
  feature3Desc: string
  feature4Title: string
  feature4Desc: string
  
  // Dashboard
  dashboard: string
  myBusiness: string
  menu: string
  orders: string
  qrCodes: string
  ratings: string
  logout: string
  
  // Menu
  addProduct: string
  productName: string
  productPrice: string
  productDescription: string
  productImage: string
  category: string
  save: string
  cancel: string
  delete: string
  edit: string
  noProducts: string
  addFirstProduct: string
  
  // Customer menu
  viewMenu: string
  searchProducts: string
  total: string
  orderNow: string
  deliveryAddress: string
  enterAddress: string
  yourOrder: string
  placeOrder: string
  
  // Common
  loading: string
  error: string
  success: string
  submit: string
  close: string
  
  // PWA Install
  installApp: string
  downloadApp: string
  appDescription: string
  addProductAnytime: string
  
  // Homepage specific
  digitalPresenceSolution: string
  growYourBusiness: string
  digitalPresence: string
  createStunningCatalogs: string
  perfectForBusinesses: string
  startFreeToday: string
  seeAllBusinesses: string
  businessesTrustUs: string
  rating: string
  anyBusinessCanGoOnline: string
  whetherYouRun: string
  createYourDigitalPresence: string
  powerfulFeatures: string
  everythingYouNeed: string
  completeSolution: string
  qrCodeGeneration: string
  qrCodeGenerationDesc: string
  mobileOptimized: string
  mobileOptimizedDesc: string
  bookingSystem: string
  bookingSystemDesc: string
  whatsappIntegration: string
  whatsappIntegrationDesc: string
  customBranding: string
  customBrandingDesc: string
  photoGallery: string
  photoGalleryDesc: string
  analyticsDashboard: string
  analyticsDashboardDesc: string
  multipleLanguages: string
  multipleLanguagesDesc: string
  secureReliable: string
  secureReliableDesc: string
  getStartedIn3EasySteps: string
  createYourDigitalBusiness: string
  signUpChooseBusiness: string
  signUpChooseBusinessDesc: string
  addProductsServices: string
  addProductsServicesDesc: string
  shareGetOrders: string
  shareGetOrdersDesc: string
  whatBusinessOwnersGet: string
  qrCodeTitle: string
  qrCodeDesc: string
  mobileFriendlyTitle: string
  mobileFriendlyDesc: string
  whatsappOrdersTitle: string
  whatsappOrdersDesc: string
  analyticsTitle: string
  analyticsDesc: string
  simplePricing: string
  chooseYourPlan: string
  startFreeScale: string
  freePlan: string
  freePlanPerfect: string
  upTo50Items: string
  basicQRCode: string
  mobileFriendly: string
  whatsappNotifications: string
  basicCustomization: string
  getStartedFree: string
  professionalPlan: string
  comingSoon: string
  perMonth: string
  unlimitedItems: string
  advancedQRCodeFeatures: string
  customBrandingPlan: string
  photoGalleryPlan: string
  analyticsDashboardPlan: string
  prioritySupport: string
  enterprisePlan: string
  everythingInProfessional: string
  multiLocationSupport: string
  advancedAnalytics: string
  apiAccess: string
  customIntegrations: string
  dedicatedSupport: string
  frequentlyAskedQuestions: string
  everythingYouNeedToKnow: string
  howCanICreate: string
  creatingYourDigital: string
  step1Create: string
  step2Select: string
  step3Add: string
  step4CreateCatalog: string
  step5Customize: string
  step6Preview: string
  howDoIShare: string
  sharingYourBusiness: string
  automaticGeneration: string
  downloadOptions: string
  printReady: string
  digitalSharing: string
  multipleCodes: string
  canCustomersBook: string
  customersCanBook: string
  scanQRCode: string
  browseCatalog: string
  selectServices: string
  chooseTimeSlot: string
  confirmation: string
  howDoIReceive: string
  receiveBookingNotifications: string
  instantNotifications: string
  completeBookingDetails: string
  bookingNumber: string
  customerPreferences: string
  quickResponse: string
  proTip: string
  setUpWhatsapp: string
  canMultipleStaff: string
  perfectForTeams: string
  teamNotifications: string
  roleBasedAccess: string
  bookingAssignment: string
  statusTracking: string
  product: string
  helpCenter: string
  contactUs: string
  documentation: string
  company: string
  about: string
  privacy: string
  terms: string
  allRightsReserved: string
  retailShop: string
  salonSpa: string
  healthcare: string
  professionalServices: string
  automotive: string
  realEstate: string
  ecommerce: string
  fitness: string
  education: string
  entertainment: string
  hospitality: string
  business: string
}

export const translations: Record<Language, Translations> = {
  en: {
    // Header
    home: "Home",
    features: "Features",
    howItWorks: "How It Works",
    pricing: "Pricing",
    contact: "Contact",
    login: "Login",
    getStarted: "Get Started",
    
    // Hero section
    heroTitle: "Your Business Online in Minutes",
    heroSubtitle: "Create a beautiful digital catalog for your business. Share with customers via QR code. No coding required.",
    heroCta: "Start Free",
    
    // Business types
    restaurant: "Business",
    shop: "Shop",
    salon: "Salon",
    clinic: "Clinic",
    hotel: "Hotel",
    gym: "Gym",
    cafe: "Cafe",
    bakery: "Bakery",
    medicalStore: "Medical Store",
    clothing: "Clothing Store",
    electronics: "Electronics",
    other: "Other",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: "Sign Up",
    step1Desc: "Create your free account with Google",
    step2: "Add Products",
    step2Desc: "Upload your products or services",
    step3: "Share QR Code",
    step3Desc: "Share with customers instantly",
    
    // Features
    featuresTitle: "Why Choose MenuWala?",
    feature1Title: "Easy Setup",
    feature1Desc: "Get your business online in minutes, not days",
    feature2Title: "QR Code Sharing",
    feature2Desc: "Generate QR codes for instant customer access",
    feature3Title: "Product Management",
    feature3Desc: "Easy to add, edit, and organize your products",
    feature4Title: "Mobile Friendly",
    feature4Desc: "Works perfectly on all devices",
    
    // Dashboard
    dashboard: "Dashboard",
    myBusiness: "My Business",
    menu: "Menu",
    orders: "Orders",
    qrCodes: "QR Codes",
    ratings: "Ratings",
    logout: "Logout",
    
    // Menu
    addProduct: "Add Product",
    productName: "Product Name",
    productPrice: "Price",
    productDescription: "Description",
    productImage: "Image",
    category: "Category",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    noProducts: "No products yet",
    addFirstProduct: "Add your first product to get started",
    
    // Customer menu
    viewMenu: "View Menu",
    searchProducts: "Search products...",
    total: "Total",
    orderNow: "Order Now",
    deliveryAddress: "Delivery Address",
    enterAddress: "Enter your delivery address",
    yourOrder: "Your Order",
    placeOrder: "Place Order",
    
    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    submit: "Submit",
    close: "Close",
    
    // PWA Install
    installApp: "Install App",
    downloadApp: "Download MenuWala App",
    appDescription: "Access your business anytime, anywhere",
    addProductAnytime: "Add products anytime, anywhere",
    
    // Homepage specific
    digitalPresenceSolution: "Digital Presence Solution",
    growYourBusiness: "Grow Your Business with",
    digitalPresence: "Digital Presence",
    createStunningCatalogs: "Create stunning digital catalogs, generate QR codes, and connect with customers.",
    perfectForBusinesses: "Perfect for restaurants, shops, salons, clinics, and any business.",
    startFreeToday: "Start Free Today",
    seeAllBusinesses: "See All Businesses",
    businessesTrustUs: "500+ businesses trust us",
    rating: "4.9/5 rating",
    anyBusinessCanGoOnline: "Any Business Can Go Online",
    whetherYouRun: "Whether you run a restaurant, salon, clinic, or shop - we have the perfect solution for your business",
    createYourDigitalPresence: "Create Your Digital Presence",
    powerfulFeatures: "Powerful Features",
    everythingYouNeed: "Everything You Need",
    completeSolution: "Complete solution for modern businesses to grow their online presence",
    qrCodeGeneration: "QR Code Generation",
    qrCodeGenerationDesc: "Generate beautiful, scannable QR codes for your business that customers can easily access",
    mobileOptimized: "Mobile Optimized",
    mobileOptimizedDesc: "Beautiful, responsive catalogs that look perfect on all devices and screen sizes",
    bookingSystem: "Booking System",
    bookingSystemDesc: "Let customers book appointments, reservations, or services directly",
    whatsappIntegration: "WhatsApp Integration",
    whatsappIntegrationDesc: "Receive orders, bookings, and inquiries directly on WhatsApp",
    customBranding: "Custom Branding",
    customBrandingDesc: "Customize colors, fonts, and layout to match your business's unique brand identity",
    photoGallery: "Photo Gallery",
    photoGalleryDesc: "Upload photos of your products, services, or workspace to attract more customers",
    analyticsDashboard: "Analytics Dashboard",
    analyticsDashboardDesc: "Track views, popular items, and customer engagement with detailed analytics",
    multipleLanguages: "Multiple Languages",
    multipleLanguagesDesc: "Support for multiple languages to serve diverse customer bases",
    secureReliable: "Secure & Reliable",
    secureReliableDesc: "Enterprise-grade security with 99.9% uptime guarantee for your peace of mind",
    getStartedIn3EasySteps: "Get Started in 3 Easy Steps",
    createYourDigitalBusiness: "Create your digital business presence in minutes",
    signUpChooseBusiness: "Sign Up & Choose Business",
    signUpChooseBusinessDesc: "Create your free account and select your business type from businesses, shops, salons, clinics, and more.",
    addProductsServices: "Add Your Products/Services",
    addProductsServicesDesc: "Upload your product catalog, services, menus, or price lists. Add images, descriptions, and prices.",
    shareGetOrders: "Share & Get Orders",
    shareGetOrdersDesc: "Generate your QR code and share it with customers. Receive orders and bookings directly on WhatsApp.",
    whatBusinessOwnersGet: "What Business Owners Get",
    qrCodeTitle: "QR Code",
    qrCodeDesc: "Print & share QR codes for your business location",
    mobileFriendlyTitle: "Mobile Friendly",
    mobileFriendlyDesc: "Works perfectly on all mobile devices",
    whatsappOrdersTitle: "WhatsApp Orders",
    whatsappOrdersDesc: "Get instant notifications for orders",
    analyticsTitle: "Analytics",
    analyticsDesc: "Track views and understand your customers",
    simplePricing: "Simple Pricing",
    chooseYourPlan: "Choose Your Plan",
    startFreeScale: "Start free and scale as you grow. No hidden fees, no surprises.",
    freePlan: "Free",
    freePlanPerfect: "Perfect for getting started",
    upTo50Items: "Up to 50 items",
    basicQRCode: "Basic QR code generation",
    mobileFriendly: "Mobile-friendly design",
    whatsappNotifications: "WhatsApp notifications",
    basicCustomization: "Basic customization",
    getStartedFree: "Get Started Free",
    professionalPlan: "Professional",
    comingSoon: "Coming Soon",
    perMonth: "per month",
    unlimitedItems: "Unlimited items",
    advancedQRCodeFeatures: "Advanced QR code features",
    customBrandingPlan: "Custom branding",
    photoGalleryPlan: "Photo gallery",
    analyticsDashboardPlan: "Analytics dashboard",
    prioritySupport: "Priority support",
    enterprisePlan: "Enterprise",
    everythingInProfessional: "Everything in Professional",
    multiLocationSupport: "Multi-location support",
    advancedAnalytics: "Advanced analytics",
    apiAccess: "API access",
    customIntegrations: "Custom integrations",
    dedicatedSupport: "Dedicated support",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    everythingYouNeedToKnow: "Everything you need to know about creating your digital business presence",
    howCanICreate: "How can I create my business catalog?",
    creatingYourDigital: "Creating your digital business catalog is simple and intuitive:",
    step1Create: "Sign up for free - Create your account in less than 2 minutes",
    step2Select: "Select your business type - Choose from business, salon, clinic, shop, and more",
    step3Add: "Add your business details - Upload your logo, set your business name and description",
    step4CreateCatalog: "Create your catalog - Add products, services, or menu items",
    step5Customize: "Customize the design - Choose colors and fonts that match your brand",
    step6Preview: "Preview and publish - Review your catalog and make it live for customers",
    howDoIShare: "How do I share my business with customers?",
    sharingYourBusiness: "Sharing your business with customers is effortless:",
    automaticGeneration: "Automatic generation - Your unique QR code is created automatically when you publish",
    downloadOptions: "Download options - Get your QR code in high-resolution PNG or SVG format",
    printReady: "Print-ready - QR codes are optimized for printing on posters, flyers, or stickers",
    digitalSharing: "Digital sharing - Share directly via social media, email, or messaging apps",
    multipleCodes: "Multiple codes - Create different QR codes for different locations",
    canCustomersBook: "Can customers book appointments?",
    customersCanBook: "Yes! Customers can book appointments directly:",
    scanQRCode: "Scan the QR code - Customers use their phone camera to scan your QR code",
    browseCatalog: "Browse your catalog - They view your products or services",
    selectServices: "Select services - Customers choose what they want to book",
    chooseTimeSlot: "Choose time slot - Pick a convenient date and time",
    confirmation: "Confirmation - Both you and the customer receive booking confirmation",
    howDoIReceive: "How do I receive bookings on WhatsApp?",
    receiveBookingNotifications: "You'll receive booking notifications directly on WhatsApp:",
    instantNotifications: "Instant notifications - Every new booking pops up on WhatsApp immediately",
    completeBookingDetails: "Complete booking details - See customer name, contact, selected services, and timing",
    bookingNumber: "Booking number - Each booking gets a unique number for easy tracking",
    customerPreferences: "Customer preferences - Any special requests are included",
    quickResponse: "Quick response - Message the customer directly to confirm or clarify",
    proTip: "Pro Tip",
    setUpWhatsapp: "Set up WhatsApp Business for professional booking management.",
    canMultipleStaff: "Can multiple staff members receive bookings?",
    perfectForTeams: "Yes! Perfect for business teams:",
    teamNotifications: "Team notifications - Send booking alerts to multiple WhatsApp numbers",
    roleBasedAccess: "Role-based access - Assign different team members to manage bookings",
    bookingAssignment: "Booking assignment - Distribute bookings based on staff availability",
    statusTracking: "Status tracking - Mark bookings as confirmed, in-progress, or completed",
    product: "Product",
    helpCenter: "Help Center",
    contactUs: "Contact Us",
    documentation: "Documentation",
    company: "Company",
    about: "About",
    privacy: "Privacy",
    terms: "Terms",
    allRightsReserved: "All rights reserved.",
    retailShop: "Retail Shop",
    salonSpa: "Salon & Spa",
    healthcare: "Healthcare",
    professionalServices: "Professional Services",
    automotive: "Automotive",
    realEstate: "Real Estate",
    ecommerce: "E-Commerce",
    fitness: "Fitness",
    education: "Education",
    entertainment: "Entertainment",
    hospitality: "Hospitality",
    business: "Business",
  },
  hi: {
    // Header
    home: "होम",
    features: "सुविधाएं",
    howItWorks: "कैसे काम करता है",
    pricing: "मूल्य",
    contact: "संपर्क",
    login: "लॉगिन",
    getStarted: "शुरू करें",
    
    // Hero section
    heroTitle: "कुछ ही मिनटों में अपना व्यापार ऑनलाइन",
    heroSubtitle: "अपने व्यापार के लिए एक सुंदर डिजिटल कैटलॉग बनाएं। QR कोड के माध्यम से ग्राहकों के साथ साझा करें। कोडिंग की जरूरत नहीं।",
    heroCta: "मुफ्त शुरू करें",
    
    // Business types
    restaurant: "व्यापार",
    shop: "दुकान",
    salon: "सैलून",
    clinic: "क्लीनिक",
    hotel: "होटल",
    gym: "जिम",
    cafe: "कैफे",
    bakery: "बेकरी",
    medicalStore: "दवाखाना",
    clothing: "कपड़ों की दुकान",
    electronics: "इलेक्ट्रॉनिक्स",
    other: "अन्य",
    
    // How it works
    howItWorksTitle: "कैसे काम करता है",
    step1: "साइन अप करें",
    step1Desc: "Google के साथ मुफ्त खाता बनाएं",
    step2: "उत्पाद जोड़ें",
    step2Desc: "अपने उत्पाद या सेवाएं अपलोड करें",
    step3: "QR कोड साझा करें",
    step3Desc: "तुरंत ग्राहकों के साथ साझा करें",
    
    // Features
    featuresTitle: "MenuWala क्यों चुनें?",
    feature1Title: "आसान सेटअप",
    feature1Desc: "कुछ ही मिनटों में अपना व्यापार ऑनलाइन करें",
    feature2Title: "QR कोड शेयरिंग",
    feature2Desc: "तत्काल ग्राहक पहुंच के लिए QR कोड बनाएं",
    feature3Title: "उत्पाद प्रबंधन",
    feature3Desc: "अपने उत्पादों को जोड़ना, संपादित करना और व्यवस्थित करना आसान",
    feature4Title: "मोबाइल फ्रेंडली",
    feature4Desc: "सभी उपकरणों पर पूरी तरह काम करता है",
    
    // Dashboard
    dashboard: "डैशबोर्ड",
    myBusiness: "मेरा व्यापार",
    menu: "मेनू",
    orders: "ऑर्डर",
    qrCodes: "QR कोड",
    ratings: "रेटिंग",
    logout: "लॉगआउट",
    
    // Menu
    addProduct: "उत्पाद जोड़ें",
    productName: "उत्पाद का नाम",
    productPrice: "कीमत",
    productDescription: "विवरण",
    productImage: "छवि",
    category: "श्रेणी",
    save: "सहेजें",
    cancel: "रद्द करें",
    delete: "हटाएं",
    edit: "संपादित करें",
    noProducts: "अभी तक कोई उत्पाद नहीं",
    addFirstProduct: "शुरू करने के लिए अपना पहला उत्पाद जोड़ें",
    
    // Customer menu
    viewMenu: "मेनू देखें",
    searchProducts: "उत्पाद खोजें...",
    total: "कुल",
    orderNow: "अभी ऑर्डर करें",
    deliveryAddress: "डिलीवरी का पता",
    enterAddress: "अपना डिलीवरी पता दर्ज करें",
    yourOrder: "आपका ऑर्डर",
    placeOrder: "ऑर्डर दें",
    
    // Common
    loading: "लोड हो रहा है...",
    error: "त्रुटि",
    success: "सफलता",
    submit: "जमा करें",
    close: "बंद करें",
    
    // PWA Install
    installApp: "ऐप इंस्टॉल करें",
    downloadApp: "MenuWala ऐप डाउनलोड करें",
    appDescription: "कभी भी, कहीं भी अपने व्यापार तक पहुंचें",
    addProductAnytime: "कभी भी, कहीं भी उत्पाद जोड़ें",
    
    // Homepage specific
    digitalPresenceSolution: "डिजिटल पहचान से बढ़ाएं अपना व्यापार",
    growYourBusiness: "कुछ ही मिनटों में प्रोफेशनल डिजिटल कैटलॉग बनाएं",
    digitalPresence: "Menuwala के साथ",
    createStunningCatalogs: "शानदार डिजिटल कैटलॉग बनाएं, QR कोड बनाएं, और ग्राहकों से जुड़ें।",
    perfectForBusinesses: "रेस्तरां, दुकानों, सैलून, क्लीनिक और किसी भी व्यापार के लिए।",
    startFreeToday: "आज ही मुफ्त शुरू करें",
    seeAllBusinesses: "सभी व्यापार देखें",
    businessesTrustUs: "500+ व्यापारी हम पर भरोसा करते हैं",
    rating: "4.9/5 रेटिंग",
    anyBusinessCanGoOnline: "कोई भी व्यापार ऑनलाइन जा सकता है",
    whetherYouRun: "चाहे आप रेस्तरां, सैलून, क्लीनिक या दुकान चलाते हों - हमारे पास आपके व्यापार के लिए सही समाधान है",
    createYourDigitalPresence: "अपनी डिजिटल उपस्थिति बनाएं",
    powerfulFeatures: "शक्तिशाली सुविधाएं",
    everythingYouNeed: "आपको जो चाहिए",
    completeSolution: "आधुनिक व्यापारों के लिए पूर्ण समाधान ऑनलाइन उपस्थिति बढ़ाने के लिए",
    qrCodeGeneration: "QR कोड जनरेशन",
    qrCodeGenerationDesc: "अपने व्यापार के लिए सुंदर, स्कैनेबल QR कोड बनाएं जिन्हें ग्राहक आसानी से एक्सेस कर सकते हैं",
    mobileOptimized: "मोबाइल ऑप्टिमाइज़्ड",
    mobileOptimizedDesc: "सुंदर, रिस्पॉन्सिव कैटलॉग जो सभी उपकरणों और स्क्रीन साइज़ पर पूरी तरह दिखते हैं",
    bookingSystem: "बुकिंग सिस्टम",
    bookingSystemDesc: "ग्राहकों को सीधे अपॉइंटमेंट, रिजर्वेशन या सेवाएं बुक करने दें",
    whatsappIntegration: "व्हाट्सएप इंटीग्रेशन",
    whatsappIntegrationDesc: "सीधे व्हाट्सएप पर ऑर्डर, बुकिंग और पूछताछ प्राप्त करें",
    customBranding: "कस्टम ब्रांडिंग",
    customBrandingDesc: "अपने व्यापार की अनोखी ब्रांड पहचान से मेल करने के लिए रंग, फ़ॉन्ट और लेआउट को कस्टमाइज़ करें",
    photoGallery: "फोटो गैलरी",
    photoGalleryDesc: "अपने उत्पादों, सेवाओं या वर्कस्पेस की फोटो अपलोड करें ताकि अधिक ग्राहक आकर्षित हो सकें",
    analyticsDashboard: "एनालिटिक्स डैशबोर्ड",
    analyticsDashboardDesc: "विज़ुअल, लोकप्रिय आइटम और विस्तृत एनालिटिक्स के साथ ग्राहक जुड़ाव ट्रैक करें",
    multipleLanguages: "कई भाषाएं",
    multipleLanguagesDesc: "विविध ग्राहक आधार की सेवा के लिए कई भाषाओं का समर्थन",
    secureReliable: "सुरक्षित और विश्वसनीय",
    secureReliableDesc: "आपकी खातिर 99.9% अपटाइम गारंटी के साथ एंटरप्राइज़-ग्रेड सुरक्षा",
    getStartedIn3EasySteps: "3 आसान चरणों में शुरू करें",
    createYourDigitalBusiness: "कुछ ही मिनटों में अपनी डिजिटल व्यापार उपस्थिति बनाएं",
    signUpChooseBusiness: "साइन अप करें और व्यापार चुनें",
    signUpChooseBusinessDesc: "मुफ्त खाता बनाएं और व्यापार, दुकान, सैलून, क्लीनिक और अन्य में से अपना व्यापार प्रकार चुनें।",
    addProductsServices: "अपने उत्पाद/सेवाएं जोड़ें",
    addProductsServicesDesc: "अपनी उत्पाद कैटलॉग, सेवाएं, मेनू या मूल्य सूची अपलोड करें। छवियां, विवरण और कीमतें जोड़ें।",
    shareGetOrders: "साझा करें और ऑर्डर प्राप्त करें",
    shareGetOrdersDesc: "अपना QR कोड बनाएं और ग्राहकों के साथ साझा करें। सीधे व्हाट्सएप पर ऑर्डर और बुकिंग प्राप्त करें।",
    whatBusinessOwnersGet: "व्यापार मालिकों को क्या मिलता है",
    qrCodeTitle: "QR कोड",
    qrCodeDesc: "अपने व्यापार स्थान के लिए QR कोड प्रिंट और साझा करें",
    mobileFriendlyTitle: "मोबाइल फ्रेंडली",
    mobileFriendlyDesc: "सभी मोबाइल उपकरणों पर पूरी तरह काम करता है",
    whatsappOrdersTitle: "व्हाट्सएप ऑर्डर",
    whatsappOrdersDesc: "ऑर्डर के लिए तत्काल सूचनाएं प्राप्त करें",
    analyticsTitle: "एनालिटिक्स",
    analyticsDesc: "विज़ुअल ट्रैक करें और अपने ग्राहकों को समझें",
    simplePricing: "सरल मूल्य निर्धारण",
    chooseYourPlan: "अपनी योजना चुनें",
    startFreeScale: "मुफ्त शुरू करें और बढ़ते हुए स्केल करें। कोई छिपी फीस नहीं, कोई आश्चर्य नहीं।",
    freePlan: "मुफ्त",
    freePlanPerfect: "शुरू करने के लिए परफेक्ट",
    upTo50Items: "50 आइटम तक",
    basicQRCode: "बेसिक QR कोड जनरेशन",
    mobileFriendly: "मोबाइल-फ्रेंडली डिज़ाइन",
    whatsappNotifications: "व्हाट्सएप सूचनाएं",
    basicCustomization: "बेसिक कस्टमाइज़ेशन",
    getStartedFree: "मुफ्त शुरू करें",
    professionalPlan: "प्रोफेशनल",
    comingSoon: "जल्द आ रहा है",
    perMonth: "प्रति माह",
    unlimitedItems: "असीमित आइटम",
    advancedQRCodeFeatures: "एडवांस्ड QR कोड फीचर",
    customBrandingPlan: "कस्टम ब्रांडिंग",
    photoGalleryPlan: "फोटो गैलरी",
    analyticsDashboardPlan: "एनालिटिक्स डैशबोर्ड",
    prioritySupport: "प्राथमिकता समर्थन",
    enterprisePlan: "एंटरप्राइज़",
    everythingInProfessional: "प्रोफेशनल में सब कुछ",
    multiLocationSupport: "मल्टी-लोकेशन सपोर्ट",
    advancedAnalytics: "एडवांस्ड एनालिटिक्स",
    apiAccess: "API एक्सेस",
    customIntegrations: "कस्टम इंटीग्रेशन",
    dedicatedSupport: "समर्पित समर्थन",
    frequentlyAskedQuestions: "अक्सर पूछे जाने वाले प्रश्न",
    everythingYouNeedToKnow: "अपनी डिजिटल व्यापार उपस्थिति बनाने के बारे में आपको जानने की जरूरत है सब कुछ",
    howCanICreate: "मैं अपना व्यापार कैटलॉग कैसे बना सकता हूं?",
    creatingYourDigital: "अपना डिजिटल व्यापार कैटलॉग बनाना सरल और सहज है:",
    step1Create: "मुफ्त साइन अप करें - 2 मिनट से कम समय में अपना खाता बनाएं",
    step2Select: "अपना व्यापार प्रकार चुनें - व्यापार, सैलून, क्लीनिक, दुकान और अन्य में से चुनें",
    step3Add: "अपने व्यापार विवरण जोड़ें - अपना लोगो अपलोड करें, अपना व्यापार नाम और विवरण सेट करें",
    step4CreateCatalog: "अपना कैटलॉग बनाएं - उत्पाद, सेवाएं या मेनू आइटम जोड़ें",
    step5Customize: "डिज़ाइन कस्टमाइज़ करें - अपने ब्रांड से मेल करने वाले रंग और फ़ॉन्ट चुनें",
    step6Preview: "पूर्वावलोकन और प्रकाशित करें - अपना कैटलॉग देखें और ग्राहकों के लिए लाइव करें",
    howDoIShare: "मैं अपने व्यापार को ग्राहकों के साथ कैसे साझा करूं?",
    sharingYourBusiness: "ग्राहकों के साथ अपना व्यापार साझा करना आसान है:",
    automaticGeneration: "स्वचालित जनरेशन - जब आप पब्लिश करते हैं तो आपका अद्वितीय QR कोड स्वचालित रूप से बनता है",
    downloadOptions: "डाउनलोड विकल्प - हाई-रिज़ॉल्यूशन PNG या SVG फॉर्मेट में अपना QR कोड प्राप्त करें",
    printReady: "प्रिंट-रेडी - QR कोड पोस्टर, फ्लायर या स्टिकर पर प्रिंट करने के लिए अनुकूलित हैं",
    digitalSharing: "डिजिटल शेयरिंग - सोशल मीडिया, ईमेल या मैसेजिंग ऐप्स के माध्यम से सीधे साझा करें",
    multipleCodes: "एकाधिक कोड - विभिन्न स्थानों के लिए अलग-अलग QR कोड बनाएं",
    canCustomersBook: "क्या ग्राहक अपॉइंटमेंट बुक कर सकते हैं?",
    customersCanBook: "हां! ग्राहक सीधे अपॉइंटमेंट बुक कर सकते हैं:",
    scanQRCode: "QR कोड स्कैन करें - ग्राहक अपने फोन कैमरा का उपयोग करके आपका QR कोड स्कैन करते हैं",
    browseCatalog: "अपना कैटलॉग ब्राउज़ करें - वे आपके उत्पाद या सेवाएं देखते हैं",
    selectServices: "सेवाएं चुनें - ग्राहक चुनते हैं कि वे क्या बुक करना चाहते हैं",
    chooseTimeSlot: "समय स्लॉट चुनें - सुविधाजनक तारीख और समय चुनें",
    confirmation: "पुष्टि - आप दोनों और ग्राहक को बुकिंग की पुष्टि प्राप्त होती है",
    howDoIReceive: "मैं व्हाट्सएप पर बुकिंग कैसे प्राप्त करूं?",
    receiveBookingNotifications: "आप व्हाट्सएप पर सीधे बुकिंग सूचनाएं प्राप्त करेंगे:",
    instantNotifications: "तत्काल सूचनाएं - हर नई बुकिंग तुरंत व्हाट्सएप पर दिखाई देती है",
    completeBookingDetails: "पूर्ण बुकिंग विवरण - ग्राहक का नाम, संपर्क, चुनी गई सेवाएं और समय देखें",
    bookingNumber: "बुकिंग नंबर - प्रत्येक बुकिंग को आसान ट्रैकिंग के लिए एक अनोखा नंबर मिलता है",
    customerPreferences: "ग्राहक की प्राथमिकताएं - कोई भी विशेष अनुरोध शामिल है",
    quickResponse: "त्वरित प्रतिक्रिया - पुष्टि या स्पष्ट करने के लिए सीधे ग्राहक को संदेश दें",
    proTip: "प्रो टिप",
    setUpWhatsapp: "प्रोफेशनल बुकिंग प्रबंधन के लिए व्हाट्सएप बिज़नेस सेट अप करें।",
    canMultipleStaff: "क्या कई स्टाफ सदस्य बुकिंग प्राप्त कर सकते हैं?",
    perfectForTeams: "हां! व्यापार टीमों के लिए परफेक्ट:",
    teamNotifications: "टीम सूचनाएं - कई व्हाट्सएप नंबरों पर बुकिंग अलर्ट भेजें",
    roleBasedAccess: "भूमिका-आधारित एक्सेस - बुकिंग प्रबंधित करने के लिए अलग-अलग टीम सदस्यों को असाइन करें",
    bookingAssignment: "बुकिंग असाइनमेंट - स्टाफ उपलब्धता के आधार पर बुकिंग वितरित करें",
    statusTracking: "स्टेटस ट्रैकिंग - बुकिंग को पुष्टि, प्रगति या पूर्ण के रूप में चिह्नित करें",
    product: "उत्पाद",
    helpCenter: "हेल्प सेंटर",
    contactUs: "हमसे संपर्क करें",
    documentation: "दस्तावेज़ीकरण",
    company: "कंपनी",
    about: "हमारे बारे में",
    privacy: "गोपनीयता",
    terms: "नियम",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
    retailShop: "रिटेल शॉप",
    salonSpa: "सैलून और स्पा",
    healthcare: "हेल्थकेयर",
    professionalServices: "प्रोफेशनल सेवाएं",
    automotive: "ऑटोमोटिव",
    realEstate: "रियल एस्टेट",
    ecommerce: "ई-कॉमर्स",
    fitness: "फिटनेस",
    education: "शिक्षा",
    entertainment: "मनोरंजन",
    hospitality: "हॉस्पिटैलिटी",
    business: "व्यापार",
  }
}

// Helper function to get translation
export function t(key: keyof Translations, lang: Language = 'en'): string {
  return translations[lang][key] || translations.en[key] || key
}
