import type { Locale } from 'date-fns'
import { de, enUS, fr, ja, ko, ru, th, zhCN } from 'date-fns/locale'
import type { Locale as AppLocale } from '@/content'

export const languages = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'th', short: 'TH', label: 'ไทย' },
  { code: 'zh', short: 'ZH', label: '中文' },
  { code: 'ru', short: 'RU', label: 'Русский' },
  { code: 'de', short: 'DE', label: 'Deutsch' },
  { code: 'fr', short: 'FR', label: 'Français' },
  { code: 'ja', short: 'JA', label: '日本語' },
  { code: 'ko', short: 'KO', label: '한국어' },
] as const satisfies readonly { code: AppLocale; short: string; label: string }[]

export const dateLocales: Record<AppLocale, Locale> = {
  en: enUS,
  th,
  zh: zhCN,
  ru,
  de,
  fr,
  ja,
  ko,
}

export function LanguageFlag({ code }: { code: AppLocale }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className="h-4 w-6 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/15"
      aria-hidden
    >
      {code === 'en' ? <FlagEn /> : null}
      {code === 'th' ? <FlagTh /> : null}
      {code === 'zh' ? <FlagZh /> : null}
      {code === 'ru' ? <FlagRu /> : null}
      {code === 'de' ? <FlagDe /> : null}
      {code === 'fr' ? <FlagFr /> : null}
      {code === 'ja' ? <FlagJa /> : null}
      {code === 'ko' ? <FlagKo /> : null}
    </svg>
  )
}

function FlagEn() {
  return (
    <>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="10" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="6" />
      <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="16" />
      <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="9" />
    </>
  )
}

function FlagTh() {
  return (
    <>
      <rect width="60" height="40" fill="#A51931" />
      <rect y="6.5" width="60" height="27" fill="#F4F5F8" />
      <rect y="13" width="60" height="14" fill="#2D2A4A" />
    </>
  )
}

function FlagZh() {
  return (
    <>
      <rect width="60" height="40" fill="#DE2910" />
      <polygon
        fill="#FFDE00"
        points="14,6 16.2,12.6 23.2,12.6 17.5,16.6 19.6,23.2 14,19.2 8.4,23.2 10.5,16.6 4.8,12.6 11.8,12.6"
      />
    </>
  )
}

function FlagRu() {
  return (
    <>
      <rect width="60" height="13.4" fill="#fff" />
      <rect y="13.3" width="60" height="13.4" fill="#0039A6" />
      <rect y="26.6" width="60" height="13.4" fill="#D52B1E" />
    </>
  )
}

function FlagDe() {
  return (
    <>
      <rect width="60" height="13.4" fill="#000" />
      <rect y="13.3" width="60" height="13.4" fill="#DD0000" />
      <rect y="26.6" width="60" height="13.4" fill="#FFCE00" />
    </>
  )
}

function FlagFr() {
  return (
    <>
      <rect width="20" height="40" fill="#0055A4" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#EF4135" />
    </>
  )
}

function FlagJa() {
  return (
    <>
      <rect width="60" height="40" fill="#fff" />
      <circle cx="30" cy="20" r="9" fill="#BC002D" />
    </>
  )
}

function FlagKo() {
  return (
    <>
      <rect width="60" height="40" fill="#fff" />
      <circle cx="30" cy="20" r="8" fill="#CD2E3A" />
      <path
        d="M30 12 a8 8 0 0 1 0 16 a4 4 0 0 1 0 -8 a4 4 0 0 0 0 -8"
        fill="#0047A0"
      />
    </>
  )
}
