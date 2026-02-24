'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { dictionaries, Locale, Dictionary } from '@/lib/dictionaries';

interface LangContextType {
  locale: Locale;
  setLocale: (val: Locale) => void;
  t: Dictionary;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    // Read from localStorage on mount
    const saved = localStorage.getItem('app-lang') as Locale | null;
    if (saved && (saved === 'en' || saved === 'id')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('app-lang', newLocale);
  };

  const t = dictionaries[locale];

  return (
    <LangContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
}
