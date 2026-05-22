import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import type { EventItem } from "@/types";

type EventLocationSectionProps = { event: EventItem };

export default function EventLocationSection({ event }: EventLocationSectionProps) {
  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-soft">
      <div className="mb-4 flex items-center gap-2 text-xl font-black text-white"><FontAwesomeIcon icon={faMapLocationDot} className="text-teal-300" /> موقع الفعالية</div>
      <div className="map-pattern grid h-64 place-items-center rounded-[1.5rem] border border-white/10 bg-slate-950/40 text-center">
        <div><p className="text-2xl font-black text-white">{event.venue}</p><p className="mt-2 text-slate-300">خريطة وهمية للعرض فقط - {event.city}</p></div>
      </div>
    </div>
  );
}
