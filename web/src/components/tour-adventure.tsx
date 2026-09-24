import { BlurFade } from '@/components/ui/blur-fade'
import { useLocale } from '@/context/locale'
import { asset } from '@/lib/asset'
import { cn } from '@/lib/utils'

export function TourAdventure({ className }: { className?: string }) {
  const { t } = useLocale()
  const a = t.tours.adventure

  return (
    <section className={cn('bg-white py-16 sm:py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade direction="up" className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-dark sm:text-4xl lg:text-[2.75rem]">
            {a.title}
          </h2>
          <p className="mt-2 text-xl font-bold text-[#4aa3e8] sm:text-2xl lg:text-[1.85rem]">
            {a.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {a.body}
          </p>
        </BlurFade>

        <BlurFade delay={0.1} direction="up" className="mt-10 sm:mt-12">
          <div className="relative overflow-hidden rounded-[1.25rem] shadow-[0_12px_40px_rgba(6,36,71,0.12)] sm:rounded-[1.75rem]">
            <img
              src={asset('images/tour-adventure-main.png')}
              alt=""
              className="aspect-[16/11] w-full object-cover object-center sm:aspect-[3/2]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/25 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7 lg:p-9">
              <div className="max-w-md">
                <p className="font-script text-[2.35rem] leading-[0.95] font-bold text-blue-dark drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] sm:text-5xl lg:text-6xl">
                  {a.stampTop}
                </p>
                <p className="font-script mt-0.5 text-[1.85rem] leading-[0.95] font-bold text-[#5bb4f0] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] sm:text-4xl lg:text-5xl">
                  {a.stampBottom}
                </p>
                <div className="mt-3 sm:mt-4">
                  <p className="text-[11px] font-extrabold tracking-wide text-ink uppercase sm:text-xs">
                    {a.includeTitle}
                  </p>
                  <ul className="mt-1.5 space-y-0.5 text-[12px] font-semibold text-ink sm:text-sm">
                    <li>
                      - {a.includes[0]} - {a.includes[1]} - {a.includes[2]}
                    </li>
                    <li>
                      - {a.includes[3]} - {a.includes[4]}
                    </li>
                    <li>- {a.includes[5]}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
