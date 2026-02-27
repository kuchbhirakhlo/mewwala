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
  }
}

// Helper function to get translation
export function t(key: keyof Translations, lang: Language = 'en'): string {
  return translations[lang][key] || translations.en[key] || key
}
