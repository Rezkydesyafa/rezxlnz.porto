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
    // Force English as default, ignore localStorage
    setLocaleState('en');
    localStorage.setItem('app-lang', 'en');
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
