"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, X, Smartphone, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function PwaInstallPrompt() {
  const [isOpen, setIsOpen] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const { language, t } = useLanguage()

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Check localStorage to see if user has dismissed the popup
    const dismissed = localStorage.getItem('pwa-install-dismissed')
    if (dismissed) {
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      // Show popup after a delay
      setTimeout(() => {
        setIsOpen(true)
      }, 3000)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setIsInstalled(true)
    }
    
    setDeferredPrompt(null)
    setIsOpen(false)
  }

  const handleDismiss = () => {
    localStorage.setItem('pwa-install-dismissed', 'true')
    setIsOpen(false)
  }

  if (isInstalled) {
    return null
  }

  const isHindi = language === 'hi'

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-blue-500" />
            {t('downloadApp')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-lg">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <Download className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-gray-900">
              {isHindi ? "कहीं भी अपना व्यापार प्रबंधित करें" : "Manage Your Business Anywhere"}
            </h3>
            <p className="text-sm text-gray-600">
              {isHindi 
                ? "उत्पाद जोड़ने, ऑर्डर प्रबंधित करने और मोबाइल फोन से एनालिटिक्स ट्रैक करने के लिए हमारा ऐप डाउनलोड करें।"
                : "Download our app to add products, manage orders, and track analytics from your mobile phone."}
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-700">
            <p>📱 <strong>{isHindi ? "विशेषताएं:" : "Features:"}</strong></p>
            <ul className="mt-2 space-y-1">
              <li>• {isHindi ? "त्वरित उत्पाद अपडेट" : "Quick product updates"}</li>
              <li>• {isHindi ? "तत्काल ऑर्डर सूचनाएं" : "Instant order notifications"}</li>
              <li>• {isHindi ? "ऑफ़लाइन पहुंच" : "Offline access"}</li>
              <li>• {isHindi ? "होम स्क्रीन में जोड़ें" : "Add to home screen"}</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={handleDismiss}
            className="flex-1"
          >
            {isHindi ? "बाद में" : "Maybe Later"}
          </Button>
          <Button 
            onClick={handleInstall}
            className="flex-1 bg-blue-500 hover:bg-blue-600"
            disabled={!deferredPrompt}
          >
            <Download className="w-4 h-4 mr-2" />
            {t('installApp')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
