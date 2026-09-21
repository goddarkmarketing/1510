import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, Tag, Users } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useLocale } from '@/context/locale'
import { tourImages, WA_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {t.tours.items.map((item, i) => (
            <Card key={item.title} className="h-full pt-0">
              <div className="relative">
                <img
                  src={tourImages[i]}
                  alt=""
                  className="aspect-[16/10] w-full object-cover"
                />
                {item.popular ? (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    MOST POPULAR
                  </Badge>
                ) : null}
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-extrabold">{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3 text-xs font-semibold text-primary">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} /> {item.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={14} /> {item.guests}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Tag size={14} /> {item.price}
                  </span>
                </div>
                <Separator />
                <ul className="space-y-2.5">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 sm:flex-row">
                <Button
                  render={<a href={WA_URL} target="_blank" rel="noreferrer" className="w-full" />}
                  className={cn(
                    'w-full',
                    item.popular
                      ? 'bg-accent text-accent-foreground hover:bg-orange-hot'
                      : '',
                  )}
                  variant={item.popular ? 'default' : 'outline'}
                >
                  {item.cta}
                  <ArrowRight size={14} />
                </Button>
              </CardFooter>
            </Card>
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
