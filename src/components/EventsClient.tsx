"use client";

import { useEffect, useMemo, useState } from "react";
import EventsFilters from "@/components/events/EventsFilters";
import EventsGrid from "@/components/events/EventsGrid";
import EventsResultsHeader from "@/components/events/EventsResultsHeader";
import SectionHeader from "@/components/SectionHeader";
import { events as defaultEvents } from "@/data/events";
import { getAllEvents } from "@/lib/storage";
import type { EventItem } from "@/types";

type EventsClientProps = {
  initialCategory?: string;
  initialQuery?: string;
};

export default function EventsClient({ initialCategory = "الكل", initialQuery = "" }: EventsClientProps) {
  const [allEvents, setAllEvents] = useState<EventItem[]>(defaultEvents);
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [city, setCity] = useState("الكل");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("date-asc");

  useEffect(() => {
    setAllEvents(getAllEvents());
  }, []);

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = allEvents.filter((event) => {
      const matchesQuery = !q || [event.title, event.category, event.city, event.venue].some((item) => item.toLowerCase().includes(q));
      const matchesCategory = category === "الكل" || event.category === category;
      const matchesCity = city === "الكل" || event.city === city;
      const matchesPrice = price === "all" || (price === "low" && event.price <= 250) || (price === "mid" && event.price > 250 && event.price <= 600) || (price === "high" && event.price > 600);
      return matchesQuery && matchesCategory && matchesCity && matchesPrice;
    });

    return [...result].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "date-desc") return new Date(b.date).getTime() - new Date(a.date).getTime();
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [allEvents, query, category, city, price, sort]);

  const resetFilters = () => {
    setQuery("");
    setCategory("الكل");
    setCity("الكل");
    setPrice("all");
    setSort("date-asc");
  };

  return (
    <section className="min-h-screen bg-[#020617] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="كل الاختيارات" title="الفعاليات المتاحة" description="ابحث وفلتر ورتب الفعاليات حسب التصنيف والمدينة والسعر والتاريخ بثيم أسود واضح." />
        <EventsFilters query={query} category={category} city={city} price={price} sort={sort} onQueryChange={setQuery} onCategoryChange={setCategory} onCityChange={setCity} onPriceChange={setPrice} onSortChange={setSort} />
        <EventsResultsHeader count={filteredEvents.length} onReset={resetFilters} />
        <EventsGrid events={filteredEvents} />
      </div>
    </section>
  );
}
