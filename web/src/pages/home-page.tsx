import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bus,
  CheckCircle2,
  Clock,
  Crown,
  Play,
  ShieldCheck,
  Ship,
  Star,
  Tag,
  UserCheck,
  Users,
} from 'lucide-react'
import { BookingBar } from '@/components/booking-bar'
import { BlurFade } from '@/components/ui/blur-fade'
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

const whyIcons = [Ship, UserCheck, ShieldCheck, Bus] as const

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.54 0 11.88-5.33 11.88-11.9 0-3.18-1.24-6.16-3.41-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.87-9.89 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

export function HomePage() {
  const { t } = useLocale()

  return (
    <>
      <section className="relative isolate">
        <div className="relative min-h-[min(640px,calc(100svh-4rem))] overflow-hidden sm:min-h-[calc(100svh-72px)]">
          <img
            src="/images/hero.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/80 via-blue-deep/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/70 via-blue-deep/25 to-blue-deep/30" />

          <div className="relative mx-auto flex min-h-[min(640px,calc(100svh-4rem))] max-w-7xl flex-col justify-end px-4 pb-28 pt-8 sm:min-h-[calc(100svh-72px)] sm:justify-center sm:px-6 sm:pb-40 sm:pt-10 lg:px-8">
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <BlurFade direction="up" offset={18} inView={false}>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/85 uppercase sm:text-xs sm:tracking-[0.28em]">
                    {t.hero.eyebrow}
                  </p>
                  <h1 className="mt-3 max-w-[16ch] whitespace-pre-line text-[1.75rem] leading-[1.1] font-extrabold text-white italic sm:mt-4 sm:max-w-none sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                    {t.hero.title}
                  </h1>
                  <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/85 sm:mt-5 sm:max-w-lg sm:text-base">
                    {t.hero.body}
                  </p>
                  <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
                    {t.hero.trust.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[12px] font-semibold text-white sm:text-sm"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-orange-hot"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </BlurFade>
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:justify-end">
                <p className="font-script max-w-[220px] text-right text-4xl leading-tight text-white/90">
                  {t.hero.script.split('\n').map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <BookingBar />
      </section>

      <section className="bg-white pt-20 pb-8 sm:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade direction="up" className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
              {t.tours.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{t.tours.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">{t.tours.sub}</p>
          </BlurFade>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.tours.items.map((item, i) => (
              <BlurFade key={item.title} delay={0.08 * i} direction="up">
                <Card className="h-full pt-0">
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
                  <CardFooter>
                    <Button
                      render={
                        <Link
                          to={i === 2 ? '/private-tour' : '/tours'}
                          className="w-full"
                        />
                      }
                      variant={item.popular ? 'default' : 'outline'}
                      className={cn(
                        'w-full',
                        item.popular &&
                          'bg-accent text-accent-foreground hover:bg-orange-hot',
                      )}
                    >
                      {item.cta}
                      <ArrowRight size={14} />
                    </Button>
                  </CardFooter>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade direction="up" className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
              {t.why.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{t.why.title}</h2>
          </BlurFade>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-8">
            {t.why.items.map((item, i) => {
              const Icon = whyIcons[i]
              return (
                <BlurFade key={item.title} delay={0.06 * i} direction="up">
                  <div className="text-center">
                    <div className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm sm:size-14">
                      <Icon size={24} strokeWidth={1.6} className="sm:size-7" />
                    </div>
                    <h3 className="mt-3 text-xs font-extrabold tracking-wide uppercase sm:mt-4 sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {item.body}
                    </p>
                  </div>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/banner.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-deep/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 sm:flex-row sm:items-center sm:px-6 sm:py-20 lg:px-8">
          <div>
            <h2 className="max-w-xl text-3xl font-extrabold text-white sm:text-4xl">
              {t.video.title}
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/80">{t.video.body}</p>
          </div>
          <Button
            render={<Link to="/fleet" />}
            variant="outline"
            className="border-white/80 bg-transparent text-white hover:bg-white hover:text-primary"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent text-white">
              <Play size={14} fill="currentColor" />
            </span>
            {t.video.cta}
          </Button>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
              {t.pricing.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              {t.pricing.title}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">{t.pricing.sub}</p>
            <p className="mt-4 text-sm font-semibold text-accent">{t.pricing.note}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            <Card className="border-0 bg-primary text-primary-foreground ring-0">
              <CardHeader>
                <Users size={28} />
                <CardTitle className="text-lg font-extrabold text-white">
                  {t.pricing.group.title}
                </CardTitle>
                <CardDescription className="text-white/70">
                  {t.pricing.group.from}
                </CardDescription>
                <p className="text-4xl font-extrabold">{t.pricing.group.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {t.pricing.group.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white/90">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-white/10 bg-transparent">
                <Button
                  render={<Link to="/tours" className="w-full" />}
                  className="w-full bg-white text-primary hover:bg-white/90"
                >
                  {t.pricing.group.cta}
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-0 bg-accent text-accent-foreground ring-0">
              <CardHeader>
                <Crown size={28} />
                <CardTitle className="text-lg font-extrabold text-white">
                  {t.pricing.private.title}
                </CardTitle>
                <CardDescription className="text-white/80">
                  {t.pricing.private.from}
                </CardDescription>
                <p className="text-4xl font-extrabold">{t.pricing.private.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {t.pricing.private.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white/95">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-white/10 bg-transparent">
                <Button
                  render={<Link to="/private-tour" className="w-full" />}
                  className="w-full bg-white text-accent hover:bg-white/90"
                >
                  {t.pricing.private.cta}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
              {t.reviews.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              {t.reviews.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="text-center lg:col-span-3 lg:text-left">
              <p className="text-6xl font-extrabold text-primary">{t.reviews.rating}</p>
              <div className="mt-2 flex justify-center gap-1 text-accent lg:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.reviews.based}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-9">
              {t.reviews.items.map((review) => (
                <Card key={review.name}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-sm">{review.name}</CardTitle>
                        <div className="mt-0.5 flex gap-0.5 text-accent">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star key={s} size={12} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">“{review.text}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="relative overflow-hidden">
        <img
          src="/images/cta-banner.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-blue-deep/75" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-20 lg:px-8">
          <div>
            <h2 className="max-w-md text-3xl font-extrabold text-white sm:text-4xl">
              {t.cta.title}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                render={<a href={WA_URL} target="_blank" rel="noreferrer" />}
                className="bg-whatsapp text-white hover:bg-whatsapp/90"
              >
                <WhatsAppIcon className="size-4" />
                {t.cta.whatsapp}
              </Button>
              <Button
                render={<Link to="/contact" />}
                className="bg-accent text-accent-foreground hover:bg-orange-hot"
              >
                {t.cta.book}
              </Button>
            </div>
          </div>
          <p className="font-script hidden text-right text-4xl leading-tight text-white/90 lg:block">
            {t.cta.script.split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  )
}
