import Image from "next/image";
import type { EventItem } from "@/types";

type EventMediaProps = { event: EventItem };

export default function EventMedia({ event }: EventMediaProps) {
  return (
    <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-3 shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] md:aspect-[16/9]">
        <Image src={event.image} alt={event.title} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-bold text-teal-100 backdrop-blur">{event.category}</span>
      </div>
    </div>
  );
}
