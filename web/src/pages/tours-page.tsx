import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { TourAdventure } from '@/components/tour-adventure'
import { TourOfferCard } from '@/components/tour-offer-card'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useLocale } from '@/context/locale'
import { tourImages } from '@/lib/site'

export function ToursPage() {
  const { t, locale } = useLocale()

  return (
    <>
      <PageHero
        eyebrow={t.tours.eyebrow}
        title={t.tours.title}
        description={t.tours.sub}
        image="images/hero-tours.png"
      />

      <TourAdventure className="pt-12 sm:pt-14" />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {t.tours.items.map((item, i) => (
            <TourOfferCard
              key={item.title}
              image={tourImages[i]}
              item={{
                name: item.name,
                session: item.session,
                desc: item.desc,
                capacity: item.capacity,
                capacityNote: item.capacityNote,
                price: item.price,
                features: item.features,
                cta: item.cta,
                period: item.period,
              }}
            />
          ))}
        </div>

        <Card className="mt-10 border-primary/20 bg-secondary/40">
          <CardHeader>
            <CardTitle>
              {locale === 'th' ? 'ตารางรอบทัวร์' : 'Tour Schedule'}
            </CardTitle>
            <CardDescription>{t.schedule.note}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-primary p-5 text-primary-foreground">
              <p className="text-xs tracking-[0.2em] uppercase text-white/70">
                {t.schedule.morning}
              </p>
              <p className="mt-2 text-2xl font-extrabold">{t.schedule.morningTime}</p>
            </div>
            <div className="rounded-xl bg-accent p-5 text-accent-foreground">
              <p className="text-xs tracking-[0.2em] uppercase text-white/80">
                {t.schedule.afternoon}
              </p>
              <p className="mt-2 text-2xl font-extrabold">
                {t.schedule.afternoonTime}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button render={<Link to="/private-tour" />} variant="outline">
              {t.nav.private}
              <ArrowRight size={14} />
            </Button>
          </CardFooter>
        </Card>
      </section>
    </>
  )
}
