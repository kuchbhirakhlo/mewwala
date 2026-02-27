"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'en' ? 'हिंदी' : 'English'}</span>
    </Button>
  )
}
