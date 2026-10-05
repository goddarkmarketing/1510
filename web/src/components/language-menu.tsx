import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLocale } from '@/context/locale'
import { LanguageFlag, languages } from '@/i18n/languages'
import { cn } from '@/lib/utils'

export function LanguageMenu() {
  const { locale, setLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const current = languages.find((item) => item.code === locale) ?? languages[0]

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white py-1.5 pr-2.5 pl-1.5 text-xs font-bold"
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <LanguageFlag code={current.code} />
        <span>{current.short}</span>
        <ChevronDown
          size={14}
          className={cn('text-muted-foreground transition', open && 'rotate-180')}
        />
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Language"
          className="absolute top-[calc(100%+8px)] right-0 z-50 w-44 overflow-hidden rounded-xl border border-border bg-white py-1 shadow-lg"
        >
          {languages.map((item) => {
            const active = item.code === locale
            return (
              <li key={item.code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={cn(
                    'flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm font-semibold',
                    active
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-muted',
                  )}
                  onClick={() => {
                    setLocale(item.code)
                    setOpen(false)
                  }}
                >
                  <LanguageFlag code={item.code} />
                  <span>{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
