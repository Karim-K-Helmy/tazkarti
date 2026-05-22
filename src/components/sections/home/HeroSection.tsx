"use client";

import { useEffect, useMemo, useState } from "react";
import HeroContent from "@/components/sections/home/HeroContent";
import HeroMedia from "@/components/sections/home/HeroMedia";
import { events as defaultEvents } from "@/data/events";
import { getAllEvents } from "@/lib/storage";
import type { EventItem } from "@/types";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [allEvents, setAllEvents] = useState<EventItem[]>(defaultEvents);

  useEffect(() => {
    setAllEvents(getAllEvents());
  }, []);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allEvents
      .filter((event) => [event.title, event.category, event.city, event.venue].some((item) => item.toLowerCase().includes(q)))
      .slice(0, 4);
  }, [allEvents, query]);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(20,184,166,.22),transparent_32rem),radial-gradient(circle_at_10%_10%,rgba(14,165,233,.16),transparent_26rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020617] to-transparent" />

      <div className="relative mx-auto grid min-h-[680px] max-w-[1500px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
        <HeroContent query={query} results={searchResults} onQueryChange={setQuery} />
        <HeroMedia />
      </div>

    </section>
  );
}
