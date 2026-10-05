import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { copy, type Copy, type Locale } from '@/content'
import { languages } from '@/i18n/languages'
import { translations } from '@/i18n/translations'

const catalog: Record<Locale, Copy> = {
  en: copy.en,
  th: copy.th,
  ...translations,
}

const storageKey = 'gi-locale'

function readLocale(): Locale {
  try {
    const saved = localStorage.getItem(storageKey)
    if (languages.some((item) => item.code === saved)) return saved as Locale
  } catch {
    /* ignore private browsing */
  }
  return 'en'
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Copy
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-Hans' : locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: catalog[locale],
    }),
    [locale],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
