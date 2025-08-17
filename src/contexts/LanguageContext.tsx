"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translate, type Language } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    if (!isClient) {
      // Server-side fallback
      const fallbackTranslations: Record<string, string> = {
        'nav.company': 'Empresa',
        'nav.consulting': 'Soluções de Consultoria',
        'nav.certification': 'Sobre ISO',
        'nav.plans': 'Plano',
        'nav.policies': 'Políticas',
        'nav.contact': 'Contacto',
      };
      return fallbackTranslations[key] || key;
    }
    return translate(key, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 