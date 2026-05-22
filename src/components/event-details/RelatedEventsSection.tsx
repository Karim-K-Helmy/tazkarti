import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";
import type { EventItem } from "@/types";

type RelatedEventsSectionProps = { events: EventItem[] };

export default function RelatedEventsSection({ events }: RelatedEventsSectionProps) {
  if (!events.length) return null;
  return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><SectionHeader title="فعاليات مشابهة" description="اقتراحات من نفس التصنيف قد تهمك." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{events.map((item) => <EventCard key={item.id} event={item} />)}</div></section>;
}
