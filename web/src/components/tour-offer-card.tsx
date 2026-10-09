import {
  ArrowRight,
  Bus,
  Camera,
  ChevronRight,
  Ship,
  Sun,
  Sunset,
  Tag,
  UserRound,
  Utensils,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WA_URL } from '@/lib/site'

const featureIcons = [Ship, UserRound, Camera, Utensils, Bus] as const

export type TourOffer = {
  name: string
  session: string
  desc: string
  capacity: string
  capacityNote: string
  price: string
  features: readonly string[]
  cta: string
  period?: 'morning' | 'afternoon'
}

export function TourOfferCard({
  item,
  image,
}: {
  item: TourOffer
  image: string
}) {
  const PeriodIcon = item.period === 'afternoon' ? Sunset : Sun

  return (
    <article className="flex h-full flex-col rounded-[1.6rem] bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-gold/35 sm:p-4">
      <img
        src={image}
        alt=""
        className="aspect-[16/10] w-full rounded-2xl object-cover"
      />

      <div className="flex flex-1 flex-col px-1 pt-4 pb-1">
        <h3 className="text-[1.35rem] leading-none font-extrabold tracking-tight text-blue-dark sm:text-2xl">
          {item.name}
          <span className="text-[#2f89e6]"> · {item.session}</span>
          {item.period ? (
            <PeriodIcon
              className="ml-1.5 inline size-5 -translate-y-0.5 text-[#f5b400] sm:size-6"
              strokeWidth={2.2}
            />
          ) : null}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>

        <div className="mt-4 grid grid-cols-[1fr_auto] items-stretch gap-2">
          <div className="flex items-center gap-2.5 rounded-2xl bg-[#e8f3ff] px-3 py-2.5">
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2f89e6] text-white">
              <UserRound size={18} strokeWidth={2.2} />
            </span>
            <span className="leading-tight font-extrabold text-blue-dark">
              <span className="block text-sm">{item.capacity}</span>
              <span className="block text-sm">{item.capacityNote}</span>
            </span>
          </div>
          <div className="flex h-full items-center gap-1.5 rounded-2xl bg-[linear-gradient(120deg,#ffe7a3_0%,#ffb347_28%,#ff7a1a_62%,#ff5a00_100%)] px-3 py-2.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
            <Tag size={16} strokeWidth={2.2} className="shrink-0" />
            <span className="text-base font-extrabold tracking-tight whitespace-nowrap">{item.price}</span>
          </div>
        </div>

        <ul className="mt-3 space-y-1.5">
          {item.features.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length]
            return (
              <li
                key={feature}
                className="flex items-center gap-2 rounded-xl bg-[#f4f7fb] px-1.5 py-1"
              >
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#2f89e6] text-white">
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <span className="min-w-0 flex-1 text-[13px] font-bold text-blue-dark">
                  {feature}
                </span>
                <ChevronRight size={14} className="shrink-0 text-blue-dark/35" />
              </li>
            )
          })}
        </ul>

        <Button
          render={
            <a href={WA_URL} target="_blank" rel="noreferrer" className="w-full" />
          }
          className="mt-1.5 h-12 w-full rounded-full bg-gradient-to-r from-[#ff8a1e] to-[#ff6a00] text-sm font-extrabold tracking-[0.12em] text-white uppercase hover:from-orange-hot hover:to-orange"
        >
          {item.cta}
          <ArrowRight size={16} />
        </Button>
      </div>
    </article>
  )
}
