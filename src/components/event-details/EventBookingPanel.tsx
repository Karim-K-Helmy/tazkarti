import Button from "@/components/Button";
import BookingMessage from "@/components/event-details/BookingMessage";
import BookingSummary from "@/components/event-details/BookingSummary";
import EventInfoList from "@/components/event-details/EventInfoList";
import TicketQuantitySelector from "@/components/event-details/TicketQuantitySelector";
import type { EventItem } from "@/types";

type EventBookingPanelProps = { event: EventItem; quantity: number; total: number; isInvalid: boolean; loading: boolean; message: string; onQuantityChange: (quantity: number) => void; onBook: () => void };

export default function EventBookingPanel({ event, quantity, total, isInvalid, loading, message, onQuantityChange, onBook }: EventBookingPanelProps) {
  return (
    <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-6 shadow-soft lg:sticky lg:top-28 lg:self-start">
      <h1 className="text-3xl font-black leading-[1.35] text-white md:text-5xl">{event.title}</h1>
      <p className="mt-5 leading-8 text-slate-300">{event.description}</p>
      <EventInfoList event={event} />
      <TicketQuantitySelector quantity={quantity} availableTickets={event.availableTickets} isInvalid={isInvalid} onChange={onQuantityChange} />
      <BookingSummary total={total} />
      <BookingMessage message={message} />
      <Button onClick={onBook} disabled={isInvalid || loading} fullWidth className="mt-5">{loading ? "جاري الحجز..." : "حجز الآن"}</Button>
    </div>
  );
}
