import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { contact } from '@/content'
import { useLocale } from '@/context/locale'
import { asset } from '@/lib/asset'
import { navLinks, WA_URL } from '@/lib/site'

export function SiteFooter() {
  const { t } = useLocale()

  return (
    <footer className="bg-blue-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-3">
            <img
              src={asset('images/logo.jpg')}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-extrabold">G.I. SEA VISTA</p>
              <p className="text-xs text-white/60">{t.footer.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/65">{t.footer.company}</p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-extrabold tracking-wide uppercase">
            {t.footer.quick}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-orange-hot">
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm font-extrabold tracking-wide uppercase">
            {t.footer.contact}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-orange-hot" />
              <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
            </li>
            <li className="flex gap-2">
              <MessageCircle
                size={16}
                className="mt-0.5 shrink-0 text-orange-hot"
              />
              <a href={WA_URL}>WhatsApp +66 90 269 1898</a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-orange-hot" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-orange-hot" />
              <a href={contact.mapsUrl} target="_blank" rel="noreferrer">
                {t.footer.address}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-extrabold tracking-wide uppercase">
            {t.footer.follow}
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={WA_URL}
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-orange"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href={contact.lineUrl}
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-orange"
              aria-label="LINE"
            >
              <Share2 size={16} />
            </a>
          </div>
          <p className="mt-4 text-xs text-white/55">LINE {contact.line}</p>
          <p className="mt-6 text-xs font-bold tracking-[0.18em] text-white/35 uppercase">
            {t.footer.explore}
          </p>
        </div>
      </div>

      <Separator className="bg-white/10" />
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>{t.footer.rights}</p>
        <p>{t.footer.motto}</p>
      </div>
    </footer>
  )
}
