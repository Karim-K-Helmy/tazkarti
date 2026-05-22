"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import EmptyState from "@/components/EmptyState";
import EventBookingPanel from "@/components/event-details/EventBookingPanel";
import EventLocationSection from "@/components/event-details/EventLocationSection";
import EventMedia from "@/components/event-details/EventMedia";
import RelatedEventsSection from "@/components/event-details/RelatedEventsSection";
import { events as defaultEvents } from "@/data/events";
import { addBooking, createBookingCode, getAllEvents, getCurrentUser, getStoredEventById } from "@/lib/storage";
import type { Booking, EventItem } from "@/types";

type EventDetailsClientProps = { eventId: string };

export default function EventDetailsClient({ eventId }: EventDetailsClientProps) {
  const router = useRouter();
  const [event, setEvent] = useState<EventItem | undefined>(() => defaultEvents.find((item) => item.id === eventId));
  const [allEvents, setAllEvents] = useState<EventItem[]>(defaultEvents);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const nextEvents = getAllEvents();
    setAllEvents(nextEvents);
    setEvent(getStoredEventById(eventId));
  }, [eventId]);

  const related = useMemo(() => event ? allEvents.filter((item) => item.category === event.category && item.id !== event.id).slice(0, 3) : [], [allEvents, event]);

  if (!event) return <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"><EmptyState title="الفعالية غير موجودة" description="الرابط غير صحيح أو الفعالية لم تعد متاحة." actionHref="/events" actionLabel="العودة للفعاليات" /></section>;

  const total = quantity * event.price;
  const isInvalid = quantity < 1 || quantity > event.availableTickets;

  const handleBooking = () => {
    setMessage("");
    const user = getCurrentUser();
    if (!user?.isLoggedIn) return router.push(`/login?redirect=/events/${event.id}`);
    if (isInvalid) return setMessage("اختر عدد تذاكر صحيح قبل الحجز.");
    setLoading(true);
    const booking: Booking = { id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`, eventId: event.id, eventTitle: event.title, eventImage: event.image, eventDate: event.date, eventVenue: `${event.city}، ${event.venue}`, tickets: quantity, userEmail: user.email, userName: user.name, totalPrice: total, code: createBookingCode(), status: "Confirmed", createdAt: new Date().toISOString() };
    addBooking(booking);
    setMessage("تم الحجز بنجاح! يتم تحويلك الآن إلى صفحة حجوزاتي.");
    window.setTimeout(() => router.push("/bookings"), 800);
  };

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><EventMedia event={event} /><EventBookingPanel event={event} quantity={quantity} total={total} isInvalid={isInvalid} loading={loading} message={message} onQuantityChange={setQuantity} onBook={handleBooking} /></div>
        <EventLocationSection event={event} />
      </section>
      <RelatedEventsSection events={related} />
    </div>
  );
}
