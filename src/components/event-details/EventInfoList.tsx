import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faLocationDot, faTicket } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "@/lib/format";
import type { EventItem } from "@/types";

type EventInfoListProps = { event: EventItem };

export default function EventInfoList({ event }: EventInfoListProps) {
  return (
    <div className="mt-6 grid gap-3 rounded-[1.5rem] border border-white/10 bg-slate-950/[0.35] p-4 text-slate-300">
      <span className="flex items-center gap-2"><FontAwesomeIcon icon={faCalendarDays} className="text-teal-300" /> {formatDate(event.date)}</span>
      <span className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} className="text-teal-300" /> {event.time}</span>
      <span className="flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} className="text-teal-300" /> {event.city}، {event.venue}</span>
      <span className="flex items-center gap-2"><FontAwesomeIcon icon={faTicket} className="text-teal-300" /> {event.availableTickets} تذكرة متاحة</span>
    </div>
  );
}
