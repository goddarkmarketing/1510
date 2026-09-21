import { Link } from 'react-router-dom'
import { PageHero } from '@/components/layout/page-hero'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useLocale } from '@/context/locale'
import { WA_URL } from '@/lib/site'

export function FaqPage() {
  const { t, locale } = useLocale()

  return (
    <>
      <PageHero
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        description={
          locale === 'th'
            ? 'รวมคำถามยอดนิยมเกี่ยวกับทัวร์เจ็ตสกี เวลาออก และบริการรับ–ส่ง'
            : 'Answers about tour length, schedule, transfers, and beginner-friendly riding.'
        }
        image="/images/hero-faq.png"
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:px-8">
        <Card className="lg:col-span-4 h-fit">
          <CardHeader>
            <CardTitle>
              {locale === 'th' ? 'ยังมีข้อสงสัย?' : 'Still have questions?'}
            </CardTitle>
            <CardDescription>
              {locale === 'th'
                ? 'ทีมงานพร้อมตอบผ่าน WhatsApp หรือหน้าติดต่อ'
                : 'Our team is happy to help via WhatsApp or the contact page.'}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button
              render={<a href={WA_URL} target="_blank" rel="noreferrer" />}
              className="bg-accent text-accent-foreground hover:bg-orange-hot"
            >
              WhatsApp
            </Button>
            <Button render={<Link to="/contact" />} variant="outline">
              {t.nav.contact}
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-8">
          <CardHeader>
            <CardTitle>
              {locale === 'th' ? 'คำถามที่พบบ่อย' : 'Common questions'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion defaultValue={['item-0']}>
              {t.faq.items.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
