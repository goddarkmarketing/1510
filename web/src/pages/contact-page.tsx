import { useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { contact } from '@/content'
import { useLocale } from '@/context/locale'
import { WA_URL } from '@/lib/site'

export function ContactPage() {
  const { t } = useLocale()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello G.I. SEA VISTA!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    )
    window.open(`${WA_URL}?text=${text}`, '_blank')
  }

  return (
    <>
      <PageHero
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        description={t.cta.body}
        image="/images/hero-contact.png"
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:px-8">
        <div className="space-y-4 lg:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>{t.footer.company}</CardTitle>
              <CardDescription>{t.contactPage.companyTh}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <a
                href={`tel:${contact.phoneTel}`}
                className="flex items-start gap-3 hover:text-primary"
              >
                <Phone size={18} className="mt-0.5 text-primary" />
                {contact.phoneDisplay}
              </a>
              <a
                href={WA_URL}
                className="flex items-start gap-3 hover:text-primary"
              >
                <MessageCircle size={18} className="mt-0.5 text-primary" />
                WhatsApp +66 90 269 1898
              </a>
              <div className="flex items-start gap-3">
                <Send size={18} className="mt-0.5 text-primary" />
                LINE {contact.line}
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 hover:text-primary"
              >
                <Mail size={18} className="mt-0.5 text-primary" />
                {contact.email}
              </a>
              <Separator />
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-primary"
              >
                <MapPin size={18} className="mt-0.5 text-primary" />
                {t.footer.address}
              </a>
            </CardContent>
          </Card>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="G.I. SEA VISTA location"
              src="https://maps.google.com/maps?q=164%20Moo%206%20Paklok%20Thalang%20Phuket%2083110&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <Card className="lg:col-span-7">
          <CardHeader>
            <CardTitle>{t.contactPage.formTitle}</CardTitle>
            <CardDescription>{t.contactPage.formDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contactPage.name}</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t.contactPage.message}</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="min-h-32"
                />
              </div>
              <Button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-orange-hot"
                size="lg"
              >
                <MessageCircle size={16} />
                {t.contactPage.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
