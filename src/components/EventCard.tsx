import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faLocationDot, faTicket } from "@fortawesome/free-solid-svg-icons";
import type { EventItem } from "@/types";
import { formatDate, formatPrice } from "@/lib/format";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#07111f] shadow-[0_18px_55px_rgba(0,0,0,.34)] transition duration-300 hover:-translate-y-1 hover:border-teal-300/30 hover:shadow-[0_24px_75px_rgba(20,184,166,.14)]">
      <Link href={`/events/${event.id}`} className="relative block aspect-[16/10] overflow-hidden bg-[#0b1220]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 28vw"
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <button type="button" aria-label="إضافة للمفضلة" className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/50 text-xl text-white backdrop-blur transition hover:border-rose-300/70 hover:bg-rose-500 hover:text-white">
          <FontAwesomeIcon icon={faHeart} className="group-hover:hidden" />
          <FontAwesomeIcon icon={faHeartSolid} className="hidden group-hover:block" />
        </button>
        <span className="absolute right-4 top-4 rounded-full border border-teal-300/30 bg-black/60 px-3 py-1 text-xs font-black text-teal-100 shadow-sm backdrop-blur">
          {event.category}
        </span>
      </Link>

      <div className="space-y-3 p-4 text-right">
        <Link href={`/events/${event.id}`} className="line-clamp-1 text-lg font-black text-white transition hover:text-teal-200">
          {event.title}
        </Link>

        <div className="space-y-2 text-sm font-medium text-slate-300">
          <span className="flex items-center justify-end gap-2">
            {formatDate(event.date)}
            <FontAwesomeIcon icon={faCalendarDays} className="text-teal-300" />
          </span>
          <span className="flex items-center justify-end gap-2">
            {event.city} - {event.venue}
            <FontAwesomeIcon icon={faLocationDot} className="text-teal-300" />
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link href={`/events/${event.id}`} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-black text-slate-200 transition hover:border-teal-300/50 hover:bg-teal-400 hover:text-slate-950">
            التفاصيل
          </Link>
          <span className="flex items-center gap-2 text-base font-black text-teal-200">
            من {formatPrice(event.price)} <FontAwesomeIcon icon={faTicket} />
          </span>
        </div>
      </div>
    </article>
  );
}
