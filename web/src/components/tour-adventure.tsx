import { Waves } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'
import { asset } from '@/lib/asset'
import { cn } from '@/lib/utils'

const leftStops = [
  'Prae Island',
  'Naka Noi Island',
  'Naka Yai Island',
  'Monkey Island',
  'Hum Island',
]

const rightStops = [
  'Koh Raet Island',
  'Koh Sop Island',
  'Koh Nan Island',
  'Koh Rang Noi Island',
  'Mangrove Forest Cruise',
]

function StopList({
  stops,
  start,
}: {
  stops: string[]
  start: number
}) {
  return (
    <ol className="space-y-2.5">
      {stops.map((name, index) => (
        <li
          key={name}
          className="flex items-center gap-2 rounded-full bg-[#e7f3ff] px-2 py-1.5 sm:gap-3 sm:px-2.5"
        >
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1d6fe8] text-sm font-extrabold text-white sm:size-9">
            {start + index}
          </span>
          <Waves className="size-4 shrink-0 text-[#3aa0f5] sm:size-5" strokeWidth={2.4} />
          <span className="min-w-0 text-[13px] font-bold text-[#123f86] sm:text-base">
            {name}
          </span>
        </li>
      ))}
    </ol>
  )
}

export function TourAdventure({ className }: { className?: string }) {
  return (
    <section className={cn('bg-white py-16 sm:py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade direction="up" className="text-center">
          <h2 className="text-[2.4rem] leading-[0.9] font-extrabold tracking-tight text-[#0d4ea8] sm:text-6xl lg:text-7xl">
            DISCOVER
          </h2>
          <p className="bg-gradient-to-b from-[#7ec8ff] to-[#2f8ef0] bg-clip-text text-[2.75rem] leading-[0.9] font-extrabold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
            PHUKET
          </p>
          <p className="mt-3 text-sm font-bold tracking-[0.22em] text-[#8eb7e6] uppercase sm:text-xl sm:tracking-[0.28em]">
            Like never before!
          </p>
        </BlurFade>

        <BlurFade delay={0.08} direction="up" className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-2 sm:mt-10 sm:gap-4">
          <StopList stops={leftStops} start={1} />
          <StopList stops={rightStops} start={6} />
        </BlurFade>

        <BlurFade delay={0.12} direction="up" className="mt-10 sm:mt-12">
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
