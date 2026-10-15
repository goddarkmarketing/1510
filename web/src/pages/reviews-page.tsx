import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLocale } from '@/context/locale'

const SLIDE_COUNT = 10

export function ReviewsPage() {
  const { t } = useLocale()
  const scroller = useRef<HTMLDivElement>(null)
  const reviews = t.reviews.clips.slice(0, SLIDE_COUNT)

  const scrollByCard = (direction: number) => {
    const el = scroller.current
    const card = el?.querySelector<HTMLElement>('[data-review-card]')
    if (!el || !card) return
    el.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: 'smooth' })
  }

  return (
    <>
      <PageHero
        eyebrow={t.reviews.eyebrow}
        title={t.reviews.pageTitle}
        description={t.reviews.pageLead}
        image="images/hero-gallery.png"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-5xl font-extrabold text-gold">{t.reviews.rating}</p>
            <div className="mt-2 flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">{t.reviews.based}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white text-primary"
              onClick={() => scrollByCard(-1)}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white text-primary"
              onClick={() => scrollByCard(1)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review) => (
            <div
              key={`${review.name}-${review.from}`}
              data-review-card
              className="w-full shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
            >
              <Card size="sm" className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-sm">{review.name}</CardTitle>
                      <p className="text-xs font-semibold text-gold">{review.from}</p>
                      <div className="mt-0.5 flex gap-0.5 text-accent">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={12} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">“{review.text}”</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
