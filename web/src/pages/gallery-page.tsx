import { useState } from 'react'
import { PageHero } from '@/components/layout/page-hero'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useLocale } from '@/context/locale'
import { galleryImages } from '@/lib/site'

export function GalleryPage() {
  const { t, locale } = useLocale()
  const [active, setActive] = useState<string | null>(null)

  return (
    <>
      <PageHero
        eyebrow={t.gallery.eyebrow}
        title={t.gallery.title}
        description={
          locale === 'th'
            ? 'ภาพจริงจากทริปเจ็ตสกีและการผจญภัยทางทะเลกับ G.I. SEA VISTA'
            : 'Real moments from jet ski adventures with G.I. SEA VISTA'
        }
        image="images/hero-gallery.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-6 flex flex-wrap gap-2">
          <Badge>{locale === 'th' ? 'ทั้งหมด' : 'All'}</Badge>
          <Badge variant="secondary">
            {locale === 'th' ? 'ทริปทะเล' : 'Sea Tours'}
          </Badge>
          <Badge variant="outline">
            {locale === 'th' ? 'เจ็ตสกี' : 'Jet Ski'}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((src) => (
            <button
              key={src}
              type="button"
              className="group overflow-hidden rounded-xl focus-visible:ring-3 focus-visible:ring-ring/50"
              onClick={() => setActive(src)}
            >
              <img
                src={src}
                alt=""
                className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      <Sheet open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <SheetContent
          side="bottom"
          className="h-[85vh] rounded-t-2xl p-4 sm:p-6"
        >
          <SheetHeader>
            <SheetTitle>
              {locale === 'th' ? 'ดูรูปขนาดใหญ่' : 'View photo'}
            </SheetTitle>
          </SheetHeader>
          {active ? (
            <img
              src={active}
              alt=""
              className="mt-4 max-h-[70vh] w-full rounded-xl object-contain"
            />
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  )
}
