"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import type { EventItem } from "@/types";

type HeroSearchBoxProps = { query: string; results: EventItem[]; onQueryChange: (value: string) => void };

export default function HeroSearchBox({ query, results, onQueryChange }: HeroSearchBoxProps) {
  return (
    <div className="relative mt-8 max-w-xl">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#07111f]/90 px-5 py-4 shadow-[0_22px_80px_rgba(0,0,0,.38)] ring-1 ring-teal-300/[0.15] backdrop-blur-xl">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl text-teal-200" />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="ابحث عن فعاليات، فنانين، مواقع..."
          className="w-full bg-transparent text-base font-semibold text-white outline-none placeholder:text-slate-400"
        />
      </div>

      {query && (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-20 overflow-hidden rounded-3xl border border-white/10 bg-[#07111f] p-2 shadow-[0_24px_80px_rgba(0,0,0,.55)]">
          {results.length ? (
            results.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`} className="block rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.07]">
                <span className="font-black text-white">{event.title}</span>
                <span className="mx-2 text-teal-300">•</span>
                {event.city}
              </Link>
            ))
          ) : (
            <p className="px-4 py-3 text-sm font-semibold text-slate-400">لا توجد نتائج مطابقة.</p>
          )}
        </div>
      )}
    </div>
  );
}
