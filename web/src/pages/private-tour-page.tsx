import { CheckCircle2, Crown, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
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
import { asset } from '@/lib/asset'
import { WA_URL } from '@/lib/site'

export function PrivateTourPage() {
  const { t, locale } = useLocale()
  const privateTour = t.tours.items[2]

  const highlights =
    locale === 'th'
      ? [
          'เลือกเวลาออกที่ยืดหยุ่นกว่า',
          'ประสบการณ์ส่วนตัวสำหรับคู่รักหรือกลุ่มเล็ก',
          'ไกด์ดูแลใกล้ชิดตลอดทริป',
          'เหมาะทั้งมือใหม่และผู้มีประสบการณ์',
          'รวมรถรับ–ส่งฟรีในภูเก็ต',
        ]
      : [
          'More flexible departure timing',
          'Private feel for couples or small groups',
          'Closer guide support throughout',
          'Great for beginners and experienced riders',
          'Includes free Phuket hotel transfer',
        ]

  return (
    <>
      <PageHero
        eyebrow={t.nav.private}
        title={privateTour.title}
        description={privateTour.desc}
        image="images/hero-private.png"
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:px-8">
        <div className="space-y-6 lg:col-span-7">
          <img
            src={asset('images/gallery-2.jpg')}
            alt=""
            className="aspect-[16/10] w-full rounded-2xl object-cover"
          />
          <div className="grid grid-cols-2 gap-3">
            <img
              src={asset('images/package-5.jpg')}
              alt=""
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <img
              src={asset('images/package-4.jpg')}
              alt=""
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <Card className="h-fit lg:col-span-5">
          <CardHeader>
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Crown size={24} />
            </div>
            <CardTitle className="text-2xl font-extrabold">
              {t.pricing.private.title}
            </CardTitle>
            <CardDescription>{t.pricing.sub}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                {t.pricing.private.from}
              </p>
              <p className="mt-1 text-4xl font-extrabold text-accent">
                {t.pricing.private.price}
              </p>
              <p className="text-sm text-muted-foreground">
                {t.pricing.private.unit}
              </p>
            </div>
            <Separator />
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              render={<a href={WA_URL} target="_blank" rel="noreferrer" className="w-full" />}
              className="w-full bg-accent text-accent-foreground hover:bg-orange-hot"
              size="lg"
            >
              <MessageCircle size={16} />
              {privateTour.cta}
            </Button>
          </CardFooter>
        </Card>
      </section>
    </>
  )
}
