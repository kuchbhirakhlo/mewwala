"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations, Translations } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof Translations) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Default translation function for SSR/pre-rendering
const defaultTranslations: Translations = translations.en

const defaultContextValue: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: keyof Translations) => defaultTranslations[key] || key,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load saved language from localStorage on mount
    const savedLanguage = localStorage.getItem('MenuWala-language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setLanguageState(savedLanguage)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('MenuWala-language', lang)
  }

  const t = (key: keyof Translations): string => {
    return translations[language][key] || translations.en[key] || key
  }

  // Always provide the context, even during SSR/pre-rendering
  // This ensures useLanguage() works during prerendering
  const contextValue = mounted 
    ? { language, setLanguage, t }
    : defaultContextValue

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
