"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";
import { events as defaultEvents } from "@/data/events";
import { getAllEvents } from "@/lib/storage";
import type { EventItem } from "@/types";

export default function FeaturedEventsSection() {
  const [allEvents, setAllEvents] = useState<EventItem[]>(defaultEvents);

  useEffect(() => {
    setAllEvents(getAllEvents());
  }, []);

  const featured = useMemo(() => allEvents.filter((event) => event.featured).slice(0, 5), [allEvents]);

  return (
    <section className="border-b border-white/10 bg-[#030b16] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <SectionHeader title="فعاليات مميزة" description="صور واضحة وكروت داكنة بتباين قوي، بدون خلفيات فاتحة تكسر شكل الموقع." />
          <Link href="/events" className="mb-8 hidden text-sm font-black text-teal-300 transition hover:text-teal-200 sm:block">عرض الكل</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {featured.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </div>
    </section>
  );
}
