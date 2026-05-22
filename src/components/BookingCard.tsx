import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCircleCheck, faLocationDot, faTicket } from "@fortawesome/free-solid-svg-icons";
import type { Booking } from "@/types";
import { formatDate, formatPrice } from "@/lib/format";

export default function BookingCard({ booking }: { booking: Booking }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] shadow-soft md:flex">
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden md:h-auto md:w-72 md:aspect-auto">
        <Image src={booking.eventImage} alt={booking.eventTitle} fill sizes="280px" className="h-full w-full object-cover object-center" />
      </div>
      <div className="flex-1 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-white">{booking.eventTitle}</h3>
            <p className="mt-2 text-sm font-bold text-teal-200">كود الحجز: {booking.code}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-200">
            <FontAwesomeIcon icon={faCircleCheck} /> Confirmed
          </span>
        </div>
        <div className="mt-5 grid gap-3 text-slate-300 sm:grid-cols-2">
          <span className="flex items-center gap-2"><FontAwesomeIcon icon={faCalendarDays} className="text-teal-300" /> {formatDate(booking.eventDate)}</span>
          <span className="flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} className="text-teal-300" /> {booking.eventVenue}</span>
          <span className="flex items-center gap-2"><FontAwesomeIcon icon={faTicket} className="text-teal-300" /> {booking.tickets} تذاكر</span>
          <span className="font-black text-white">الإجمالي: {formatPrice(booking.totalPrice)}</span>
        </div>
      </div>
    </article>
  );
}
