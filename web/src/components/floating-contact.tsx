import { useState } from 'react'
import { MessageCircle, Phone, X } from 'lucide-react'
import { contact } from '@/content'
import { WA_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.54 0 11.88-5.33 11.88-11.9 0-3.18-1.24-6.16-3.41-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.87-9.89 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

const fabClass =
  'flex size-12 items-center justify-center rounded-full text-white shadow-md transition hover:scale-105 hover:shadow-lg active:scale-95 sm:size-[52px]'

export function FloatingContact() {
  const [open, setOpen] = useState(true)

  return (
    <div className="fixed right-3 bottom-3 z-50 sm:right-5 sm:bottom-5">
      <div
        className={cn(
          'flex flex-col items-center gap-2.5',
          !open && 'gap-0',
        )}
      >
        {open ? (
          <>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className={cn(fabClass, 'bg-[#25d366] hover:bg-[#1ebe57]')}
            >
              <WhatsAppIcon className="size-6 sm:size-7" />
            </a>
            <a
              href={`tel:${contact.phoneTel}`}
              aria-label="Call"
              className={cn(fabClass, 'bg-[#2bb8a0] hover:bg-[#24a38e]')}
            >
              <Phone className="size-5 sm:size-6" strokeWidth={2.2} />
            </a>
            <button
              type="button"
              aria-label="Close contact menu"
              onClick={() => setOpen(false)}
              className={cn(fabClass, 'bg-[#3d7ec9] hover:bg-[#336fb5]')}
            >
              <X className="size-5 sm:size-6" strokeWidth={2.4} />
            </button>
          </>
        ) : (
          <button
            type="button"
            aria-label="Open contact menu"
            onClick={() => setOpen(true)}
            className={cn(fabClass, 'bg-[#3d7ec9] hover:bg-[#336fb5]')}
          >
            <MessageCircle className="size-5 sm:size-6" strokeWidth={2.2} />
          </button>
        )}
      </div>
    </div>
  )
}
