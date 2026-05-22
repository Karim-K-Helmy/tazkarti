import EmptyState from "@/components/EmptyState";
import EventCard from "@/components/EventCard";
import type { EventItem } from "@/types";

type EventsGridProps = { events: EventItem[] };

export default function EventsGrid({ events }: EventsGridProps) {
  if (!events.length) {
    return <EmptyState title="لا توجد فعاليات مطابقة" description="جرّب تغيير كلمة البحث أو تقليل الفلاتر المختارة لعرض نتائج أكثر." actionHref="/events" actionLabel="عرض كل الفعاليات" />;
  }

  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{events.map((event) => <EventCard key={event.id} event={event} />)}</div>;
}
