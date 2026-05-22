"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faCalendarCheck, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

const heroImages = [
  {
    src: "/assets/images/hero-concert.jpg",
    alt: "حفل موسيقي مباشر بإضاءة واضحة",
    title: "حفلات لايف",
    meta: "القاهرة · اليوم",
    badge: "الأكثر طلبًا"
  },
  {
    src: "/assets/images/hero-sports.png",
    alt: "فعالية رياضية داخل استاد",
    title: "مباريات كبرى",
    meta: "استادات وقاعات",
    badge: "تذاكر محدودة"
  },
  {
    src: "/assets/images/hero-theater.png",
    alt: "عرض مسرحي أمام الجمهور",
    title: "عروض ومسرح",
    meta: "أماكن مختارة",
    badge: "تجربة مميزة"
  }
];

export default function HeroMedia() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = useMemo(() => heroImages[activeIndex], [activeIndex]);

  const goNext = () => setActiveIndex((current) => (current + 1) % heroImages.length);
  const goPrev = () => setActiveIndex((current) => (current - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[360px] lg:min-h-[540px]">
      <div className="absolute -left-8 top-8 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute bottom-8 right-12 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      <article className="group relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,.45)] sm:h-[440px] lg:h-[540px] lg:rounded-[2.5rem]">
        {heroImages.map((item, index) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            priority={index === 0}
            className={`object-contain transition duration-700 ease-out ${index === activeIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/15" />

        <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-black/60 px-4 py-2 text-xs font-black text-teal-100 shadow-[0_0_24px_rgba(45,212,191,.16)] backdrop-blur md:text-sm">
          <FontAwesomeIcon icon={faStar} className="text-amber-300" />
          {activeImage.badge}
        </div>

        <div className="absolute bottom-6 right-5 max-w-sm text-right md:bottom-8 md:right-8">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black text-white backdrop-blur md:text-sm">
            <FontAwesomeIcon icon={faCalendarCheck} className="text-teal-300" />
            فعالية مميزة
          </p>
          <h3 className="text-3xl font-black text-white md:text-5xl">{activeImage.title}</h3>
          <p className="mt-3 flex items-center justify-start gap-2 text-sm font-bold text-slate-100 md:text-base">
            <FontAwesomeIcon icon={faLocationDot} className="text-teal-300" />
            {activeImage.meta}
          </p>
        </div>

        <div className="absolute bottom-6 left-5 flex items-center gap-2 md:bottom-8 md:left-8">
          {heroImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`عرض صورة ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-9 bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,.85)]" : "w-2.5 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="الصورة السابقة"
          className="absolute left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur transition hover:border-teal-300/50 hover:bg-teal-400/20 md:flex"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="الصورة التالية"
          className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur transition hover:border-teal-300/50 hover:bg-teal-400/20 md:flex"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </article>
    </div>
  );
}