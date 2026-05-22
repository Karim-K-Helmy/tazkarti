"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";
import { events as defaultEvents } from "@/data/events";
import { getAllEvents } from "@/lib/storage";
import type { EventItem } from "@/types";

export default function NearbyEventsSection() {
  const [allEvents, setAllEvents] = useState<EventItem[]>(defaultEvents);

  useEffect(() => {
    setAllEvents(getAllEvents());
  }, []);

  const nearby = useMemo(() => allEvents.slice(5, 11), [allEvents]);

  return (
    <section className="border-b border-white/10 bg-[#020617] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <SectionHeader title="فعاليات قريبة منك" description="فعاليات بمواعيد قريبة وحجز سريع مع كروت واضحة على الخلفية السوداء." />
          <Link href="/events" className="mb-8 hidden text-sm font-black text-teal-300 transition hover:text-teal-200 sm:block">عرض الكل</Link>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-3 no-scrollbar">
          {nearby.map((event) => <div className="min-w-[290px] max-w-[290px]" key={event.id}><EventCard event={event} /></div>)}
        </div>
      </div>
    </section>
  );
}
