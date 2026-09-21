import { CheckCircle2, Gauge, ShieldCheck, Users, Waves } from 'lucide-react'
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

export function FleetPage() {
  const { locale } = useLocale()

  const title =
    locale === 'th' ? 'เรือเจ็ตสกีของเรา' : 'Our Jet Ski Fleet'
  const desc =
    locale === 'th'
      ? 'ใช้ Sea-Doo GTX PRO 130 ที่นั่งสบาย ขับมั่นใจ พร้อมทีมเตรียมอุปกรณ์ความปลอดภัยครบ'
      : 'Ride Sea-Doo GTX PRO 130 craft prepared for comfort, control, and a safe guided adventure.'

  const features =
    locale === 'th'
      ? [
          { icon: Gauge, title: 'GTX PRO 130', body: 'เครื่องแรง นั่งสบาย เหมาะกับทัวร์ทะเลยาว' },
          { icon: Users, title: 'นั่งได้ 2 ท่าน', body: '1 คันต่อกลุ่มเล็ก สูงสุด 2 คน' },
          { icon: ShieldCheck, title: 'อุปกรณ์ครบ', body: 'เสื้อชูชีพและคำแนะนำก่อนออกทะเล' },
          { icon: Waves, title: 'พร้อมออกทริป', body: 'ตรวจเช็กเครื่องก่อนทุกทัวร์' },
        ]
      : [
          { icon: Gauge, title: 'GTX PRO 130', body: 'Powerful, comfortable, tour-ready performance' },
          { icon: Users, title: 'Up to 2 guests', body: 'One jet ski for a pair of riders' },
          { icon: ShieldCheck, title: 'Safety gear', body: 'Life jackets and full pre-ride briefing' },
          { icon: Waves, title: 'Trip ready', body: 'Checked and prepared before every tour' },
        ]

  return (
    <>
      <PageHero
        eyebrow={locale === 'th' ? 'FLEET' : 'FLEET'}
        title={title}
        description={desc}
        image="images/hero-fleet.png"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {fleetImages.map((item) => (
            <Card key={item.title} className="overflow-hidden pt-0">
              <img
                src={item.src}
                alt=""
                className="aspect-[4/3] w-full object-cover"
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
              {locale === 'th'
                ? 'พร้อมทดลองขับกับทีมเรา'
                : 'Ready to ride with our team?'}
            </CardTitle>
            <CardDescription className="text-white/75">
              {locale === 'th'
                ? 'จองทัวร์มาตรฐานหรือทัวร์ส่วนตัวได้ทาง WhatsApp'
                : 'Book a standard or private tour via WhatsApp.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              render={<a href={WA_URL} target="_blank" rel="noreferrer" />}
              className="bg-accent text-accent-foreground hover:bg-orange-hot"
            >
              <CheckCircle2 size={16} />
              {locale === 'th' ? 'จองเลย' : 'Book Now'}
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
