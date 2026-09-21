import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { format } from 'date-fns'
import { ArrowRight, CalendarIcon } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldLabel } from '@/components/ui/field'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useLocale } from '@/context/locale'
import { WA_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

const controlClass =
  '!h-12 w-full rounded-xl border border-border bg-background px-3 text-sm font-semibold shadow-none'

export function BookingBar() {
  const { t, locale } = useLocale()
  const [tour, setTour] = useState(t.hero.tourOptions[0])
  const [guests, setGuests] = useState(t.hero.guestOptions[0])
  const [date, setDate] = useState<Date>()
  const [calendarOpen, setCalendarOpen] = useState(false)

  useEffect(() => {
    setTour(t.hero.tourOptions[0])
    setGuests(t.hero.guestOptions[0])
  }, [t])

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!date) return
    const msg = encodeURIComponent(
      `Hello G.I. SEA VISTA!\nTour: ${tour}\nDate: ${format(date, 'yyyy-MM-dd')}\nGuests: ${guests}`,
    )
    window.open(`${WA_URL}?text=${msg}`, '_blank')
  }

  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 sm:-mt-16 sm:px-6 lg:px-8">
      <BlurFade direction="up" delay={0.15} inView={false}>
        <Card className="border-0 py-0 shadow-[0_20px_60px_rgba(6,36,71,0.18)] ring-1 ring-black/5">
          <CardContent className="p-3 sm:p-4">
            <form onSubmit={onSubmit}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_auto] lg:items-end">
                <Field className="gap-1.5">
                  <FieldLabel className="flex h-4 items-center text-xs font-semibold text-muted-foreground">
                    {t.hero.bookTour}
                  </FieldLabel>
                  <Select value={tour} onValueChange={(v) => v && setTour(v)}>
                    <SelectTrigger
                      className={cn(controlClass, 'data-[size=default]:!h-12')}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {t.hero.tourOptions.map((opt) => (
                        <SelectItem key={opt} value={opt} className="py-2.5">
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field className="gap-1.5">
                  <FieldLabel className="flex h-4 items-center text-xs font-semibold text-muted-foreground">
                    {t.hero.bookDate}
                  </FieldLabel>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger
                      render={
                        <Button
                          type="button"
                          variant="outline"
                          className={cn(
                            controlClass,
                            'inline-flex justify-between hover:bg-background',
                            !date && 'text-muted-foreground',
                          )}
                        />
                      }
                    >
                      <span className="truncate">
                        {date
                          ? format(
                              date,
                              locale === 'th' ? 'd MMM yyyy' : 'MMM d, yyyy',
                            )
                          : locale === 'th'
                            ? 'วว/ดด/ปปปป'
                            : 'Select date'}
                      </span>
                      <CalendarIcon className="size-4 shrink-0 opacity-60" />
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="w-auto overflow-hidden p-0"
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(value) => {
                          setDate(value)
                          setCalendarOpen(false)
                        }}
                        disabled={{ before: today }}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>

                <Field className="gap-1.5">
                  <FieldLabel className="flex h-4 items-center text-xs font-semibold text-muted-foreground">
                    {t.hero.bookGuests}
                  </FieldLabel>
                  <Select
                    value={guests}
                    onValueChange={(v) => v && setGuests(v)}
                  >
                    <SelectTrigger
                      className={cn(controlClass, 'data-[size=default]:!h-12')}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {t.hero.guestOptions.map((opt) => (
                        <SelectItem key={opt} value={opt} className="py-2.5">
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field className="gap-1.5 sm:col-span-2 lg:col-span-1">
                  <FieldLabel className="hidden h-4 lg:flex" aria-hidden>
                    &nbsp;
                  </FieldLabel>
                  <Button
                    type="submit"
                    disabled={!date}
                    className="!h-12 w-full rounded-xl bg-accent px-5 text-xs font-extrabold tracking-wide text-accent-foreground uppercase hover:bg-orange-hot disabled:opacity-60 lg:min-w-[200px]"
                  >
                    {t.hero.check}
                    <ArrowRight className="size-4" />
                  </Button>
                </Field>
              </div>

              <Separator className="my-3 sm:hidden" />
              <p className="text-center text-[11px] text-muted-foreground sm:mt-3 sm:text-left lg:mt-3">
                {locale === 'th'
                  ? 'เลือกทัวร์ วันที่ และจำนวนผู้ร่วม แล้วกดเช็กที่ว่างผ่าน WhatsApp'
                  : 'Pick a tour, date, and guests — then check availability on WhatsApp'}
              </p>
            </form>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}
