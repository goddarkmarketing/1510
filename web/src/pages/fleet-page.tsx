import { CheckCircle2, Gauge, ShieldCheck, Users, Waves, type LucideIcon } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useLocale } from '@/context/locale'
import { fleetImages, WA_URL } from '@/lib/site'

const fleetIcons = [Gauge, Users, ShieldCheck, Waves] as const

export function FleetPage() {
  const { t } = useLocale()
  const features = t.ui.fleetFeatures.map((item, index) => ({
    ...item,
    icon: fleetIcons[index] as LucideIcon,
  }))

  return (
    <>
      <PageHero
        eyebrow="FLEET"
        title={t.ui.fleetTitle}
        description={t.ui.fleetDesc}
        image="images/hero-fleet.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {fleetImages.map((item, i) => (
            <Card key={item.title} className="overflow-hidden pt-0">
              <img
                src={item.src}
                alt=""
                className={
                  i === 0
                    ? 'aspect-[1024/796] w-full bg-[#e8f7ff] object-contain'
                    : 'aspect-[4/3] w-full object-cover'
                }
              />
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-lg font-extrabold">
                    {item.title}
                  </CardTitle>
                  <Badge variant="secondary">Sea-Doo</Badge>
                </div>
                <CardDescription>
                  {item.specs.join(' · ')}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="text-primary" size={24} />
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription>{item.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mt-10 bg-primary text-primary-foreground ring-0">
          <CardHeader>
            <CardTitle className="text-2xl text-white">
              {t.ui.fleetCtaTitle}
            </CardTitle>
            <CardDescription className="text-white/75">
              {t.ui.fleetCtaBody}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              render={<a href={WA_URL} target="_blank" rel="noreferrer" />}
              className="bg-accent text-accent-foreground hover:bg-orange-hot"
            >
              <CheckCircle2 size={16} />
              {t.ui.fleetBook}
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
