// Chatbot utility functions for matching and responding
import { CHATBOT_KNOWLEDGE_BASE, RESPONSE_PATTERNS, GREETINGS, EXIT_MESSAGES } from "./chatbot-data";

export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function generateMessageId(): string {
  return `msg-${Date.now()}-${Math.random()}`;
}

// Extract keywords from user message
export function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 3);
}

// Find matching category based on user input
export function findMatchingCategory(text: string): string {
  const lowerText = text.toLowerCase();
  
  for (const pattern of RESPONSE_PATTERNS) {
    if (pattern.patterns.some((p) => lowerText.includes(p))) {
      return pattern.category;
    }
  }
  
  return "general";
}

// Generate bot response based on user message
export function generateBotResponse(userMessage: string): string {
  const category = findMatchingCategory(userMessage);
  const lowerMessage = userMessage.toLowerCase();

  // Greeting
  if (category === "greeting") {
    return GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
  }

  // Exit
  if (category === "exit") {
    return EXIT_MESSAGES[Math.floor(Math.random() * EXIT_MESSAGES.length)];
  }

  // About Menu Wala
  if (
    lowerMessage.includes("menu wala") ||
    lowerMessage.includes("what is") ||
    lowerMessage.includes("tell me about")
  ) {
    return `**Menu Wala** is a comprehensive digital menu and QR code ordering solution for restaurants, cafes, food trucks, and food service businesses. 

We help you:
- 🍽️ Create stunning digital menus
- 📱 Generate QR codes for seamless ordering
- 💬 Receive orders directly on WhatsApp
- 📊 Track sales and analytics in real-time

Transform your restaurant with modern technology! ✨`;
  }

  // Features
  if (category === "features") {
    return `🌟 **Menu Wala Features:**

✅ **Digital Menu Creation** - Beautiful, customizable menus
✅ **QR Code Generation** - Unlimited QR codes for tables and walls
✅ **WhatsApp Orders** - Receive orders directly on WhatsApp
✅ **Real-time Updates** - Instantly update items and prices
✅ **Order Tracking** - Assign orders to kitchen stations
✅ **Mobile Responsive** - Perfect on all devices
✅ **Analytics** - Track sales and customer preferences
✅ **Secure & Safe** - Bank-level security

Would you like to know more about any specific feature?`;
  }

  // Pricing
  if (category === "pricing" || lowerMessage.includes("price")) {
    return `💰 **Menu Wala Pricing Plans:**

🚀 **Starter Plan** - Perfect for getting started
   • Basic menu features
   • Limited QR codes
   • WhatsApp integration
   
📈 **Professional Plan** - For growing restaurants
   • Advanced features
   • Unlimited QR codes
   • Advanced analytics
   • Priority support

🏢 **Enterprise Plan** - For large chains
   • Custom solutions
   • Dedicated support
   • API access
   • White-label options

We also offer a **FREE TRIAL** with no credit card required!

Would you like to start your free trial? 🎉`;
  }

  // Getting Started / How to
  if (category === "setup") {
    return `🚀 **Getting Started with Menu Wala:**

**Step 1:** Create your account (takes 2 minutes)
**Step 2:** Upload your menu items with photos and prices
**Step 3:** Customize your menu design
**Step 4:** Generate QR codes for your tables/walls
**Step 5:** Connect WhatsApp for order receiving
**Step 6:** Go live and start receiving orders!

Your menu will be live and ready to use in minutes! 💨

Want to [start free](https://signup)? Or need more help? 😊`;
  }

  // QR Codes
  if (category === "qr" || lowerMessage.includes("qr")) {
    return `📱 **About QR Codes in Menu Wala:**

Generate unlimited, customizable QR codes that:
- Link directly to your digital menu
- Can be placed on tables, walls, or outdoor displays
- Update in real-time without reprinting
- Track how many times they're scanned
- Show analytics for different locations

Each QR code is unique and trackable, so you know exactly which table or location is ordering! 📊

Would you like help generating your first QR code?`;
  }

  // WhatsApp Orders
  if (category === "orders" || lowerMessage.includes("order")) {
    return `💬 **WhatsApp Order System:**

Customers scan the QR code → View your menu → Send their order on WhatsApp → You receive it instantly!

**Benefits:**
✅ No app download needed
✅ Familiar WhatsApp interface
✅ Receive orders in real-time
✅ Can respond directly to customers
✅ Built-in order history
✅ Payment integration available

Setup takes just minutes! Would you like to connect your WhatsApp? 📱`;
  }

  // Security
  if (category === "security") {
    return `🔒 **Security & Privacy:**

Your data is protected with:
- 🛡️ Bank-level encryption
- 🔐 Secure SSL/TLS connections
- 📋 GDPR compliant
- 🚫 No third-party data sharing
- 🔑 Secure authentication
- 📱 Regular security audits

Your menu, orders, and customer data are completely safe with us! 

Trust is our priority. ✨`;
  }

  // Free Trial
  if (lowerMessage.includes("free") || lowerMessage.includes("trial")) {
    return `🎉 **Free Trial - No Credit Card Required!**

Yes! You can try Menu Wala completely free with:
- ✅ Full feature access
- ✅ Unlimited menu items
- ✅ Unlimited QR codes
- ✅ WhatsApp integration
- ✅ No credit card required
- ✅ No expiration limit

Simply [sign up here](https://signup) to get started! 🚀

Questions? I'm here to help! 😊`;
  }

  // Support/Contact
  if (category === "support" || lowerMessage.includes("contact")) {
    return `📞 **Need Help?**

We're here 24/7! 

📧 **Email:** support@proco.tech
💬 **Chat Support:** Available on our website
📚 **Knowledge Base:** Detailed guides and tutorials
⏰ **Response Time:** Usually within 1-2 hours

Or feel free to ask me anything right now! I'm here to help. 😊`;
  }

  // Default response
  return `That's a great question! 🤔

I'm ProcoAI, your Menu Wala expert. I can help you with:
- 🍽️ Digital menu features
- 📱 QR code generation
- 💬 WhatsApp ordering
- 💰 Pricing & plans
- 🚀 Getting started
- 🔒 Security & privacy
- 📞 Support & contact

Feel free to ask me anything about Menu Wala! What would you like to know? 😊`;
}

// Format bot response (simple markdown to HTML conversion for display)
export function formatBotMessage(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
    .replace(/\n/g, "<br>");
}
