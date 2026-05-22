"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlay, faTicket } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import HeroSearchBox from "@/components/sections/home/HeroSearchBox";
import type { EventItem } from "@/types";

type HeroContentProps = { query: string; results: EventItem[]; onQueryChange: (value: string) => void };

export default function HeroContent({ query, results, onQueryChange }: HeroContentProps) {
  return (
    <div className="max-w-2xl text-right">
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-black text-teal-100 shadow-[0_0_30px_rgba(45,212,191,.12)] backdrop-blur">
        <FontAwesomeIcon icon={faTicket} /> منصة تذاكر للفعاليات الحية
      </span>

      <h1 className="text-5xl font-black leading-[1.15] text-white md:text-7xl">
        اكتشف واحجز
        <span className="mt-2 block bg-gradient-to-l from-teal-200 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">أفضل الفعاليات</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg font-semibold leading-9 text-slate-200">
        احجز تذكرتك بسهولة لفعاليات موسيقية، رياضية، مسرحية ومؤتمرات بتجربة داكنة واضحة ومناسبة لكل الشاشات.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button href="/events" className="rounded-xl px-7 text-base shadow-[0_18px_45px_rgba(20,184,166,.28)]">
          استكشف الفعاليات <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button href="/about" variant="secondary" className="rounded-xl border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-100 hover:bg-cyan-300/[0.12]">
          <FontAwesomeIcon icon={faCirclePlay} /> شاهد التجربة
        </Button>
      </div>

      <div className="mt-9 grid grid-cols-3 gap-3 max-w-lg">
        {[
          ["+12", "فعالية"],
          ["7", "تصنيفات"],
          ["24/7", "حجز سريع"]
        ].map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center backdrop-blur">
            <p className="text-2xl font-black text-teal-200">{value}</p>
            <p className="mt-1 text-xs font-bold text-slate-300">{label}</p>
          </div>
        ))}
      </div>

      <HeroSearchBox query={query} results={results} onQueryChange={onQueryChange} />
    </div>
  );
}
