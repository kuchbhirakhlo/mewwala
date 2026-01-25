// ProcoAI Chatbot Knowledge Base
export const CHATBOT_KNOWLEDGE_BASE = {
  // Basic Information
  "about": {
    "name": "Menu Wala",
    "description": "Menu Wala is a comprehensive digital menu and QR code ordering solution for restaurants, cafes, food trucks, and food service businesses.",
    "company": "Proco Technologies",
    "website": "https://proco.tech"
  },

  // Features
  "features": {
    "digital-menu": "Create stunning, customizable digital menus with beautiful designs and easy navigation",
    "qr-codes": "Generate unlimited QR codes for tables, walls, or outdoor displays",
    "whatsapp-orders": "Receive orders directly on WhatsApp for seamless order management",
    "order-tracking": "Real-time order status tracking and assignment to kitchen stations",
    "responsive-design": "Mobile-friendly menus that work perfectly on all devices",
    "real-time-updates": "Instantly update menu items, prices, and availability"
  },

  // Pricing
  "pricing": {
    "basic": "Starter plan for small restaurants - Perfect for getting started",
    "professional": "For growing restaurants - Advanced features and higher limits",
    "enterprise": "Custom solutions for large chains - Dedicated support"
  },

  // Setup & Getting Started
  "setup": {
    "create-menu": "Easily create your digital menu by uploading items with photos, descriptions, and prices",
    "qr-generation": "Generate QR codes with a single click - customize colors and size",
    "whatsapp-setup": "Connect your WhatsApp Business account to receive orders automatically",
    "go-live": "Your menu is live in minutes - start taking orders immediately"
  },

  // Technical Features
  "technical": {
    "responsive": "Works seamlessly on mobile, tablet, and desktop devices",
    "real-time": "Real-time updates without any delay",
    "secure": "Bank-level security for all transactions and data",
    "analytics": "Track orders, sales, and customer preferences with detailed analytics"
  },

  // Common Questions
  "faq": {
    "cost": "We offer flexible pricing plans starting from affordable rates. Visit our pricing page for details.",
    "integration": "Menu Wala integrates seamlessly with WhatsApp for order receiving",
    "payment": "Multiple payment options available including card, wallet, and bank transfer",
    "customization": "Fully customizable menus with your branding, colors, and fonts",
    "support": "We provide 24/7 customer support through multiple channels",
    "free-trial": "Yes, you can start free and upgrade anytime without commitment"
  },

  // Contact & Support
  "support": {
    "email": "support@proco.tech",
    "phone": "Available through contact form on the website",
    "hours": "24/7 support available",
    "response-time": "Usually responds within 1-2 hours"
  }
};

// Greeting responses
export const GREETINGS = [
  "Hello! 👋 I'm ProcoAI, your Menu Wala assistant. How can I help you today?",
  "Hi there! 😊 I'm ProcoAI. What would you like to know about Menu Wala?",
  "Welcome! 🍽️ I'm ProcoAI. I'm here to answer any questions about our platform.",
  "Hey! 👋 I'm ProcoAI, your digital menu expert. What can I help with?"
];

// Exit responses
export const EXIT_MESSAGES = [
  "Thanks for chatting! 😊 Feel free to ask me anything anytime.",
  "You're welcome! If you have more questions, I'm here to help! 👋",
  "Bye! Happy ordering! 🍽️",
  "See you soon! Feel free to ask if you need help! 👋"
];

// Suggested questions for the user
export const SUGGESTED_QUESTIONS = [
  "What is Menu Wala?",
  "How do I create a digital menu?",
  "Do you offer a free trial?",
  "How does WhatsApp ordering work?",
  "What are the pricing plans?",
  "Can I customize my menu?",
  "Is my data secure?",
  "How do I get started?"
];

// Response patterns for matching user queries
export const RESPONSE_PATTERNS = [
  {
    patterns: ["hello", "hi", "hey", "greetings"],
    category: "greeting"
  },
  {
    patterns: ["what", "which", "tell me", "explain", "describe"],
    category: "information"
  },
  {
    patterns: ["cost", "price", "pricing", "plans", "how much"],
    category: "pricing"
  },
  {
    patterns: ["how", "how to", "setup", "create", "start"],
    category: "setup"
  },
  {
    patterns: ["features", "capabilities", "what can"],
    category: "features"
  },
  {
    patterns: ["support", "help", "contact", "assistance", "problem"],
    category: "support"
  },
  {
    patterns: ["menu", "digital", "items", "dishes", "food"],
    category: "menu"
  },
  {
    patterns: ["qr", "code", "scan", "table"],
    category: "qr"
  },
  {
    patterns: ["whatsapp", "orders", "ordering", "order", "receive"],
    category: "orders"
  },
  {
    patterns: ["security", "secure", "safe", "privacy", "data"],
    category: "security"
  },
  {
    patterns: ["free", "trial", "paid", "subscription"],
    category: "pricing"
  },
  {
    patterns: ["bye", "goodbye", "thanks", "thank you", "see you"],
    category: "exit"
  }
];
