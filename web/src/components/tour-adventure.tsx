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
          <div className="overflow-hidden rounded-[1.25rem] shadow-[0_12px_40px_rgba(6,36,71,0.12)] sm:rounded-[1.75rem]">
            <img
              src={asset('images/tour-adventure-main.png')}
              alt="Get free lunch, hotel transfer, and photo"
              className="h-auto w-full"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
