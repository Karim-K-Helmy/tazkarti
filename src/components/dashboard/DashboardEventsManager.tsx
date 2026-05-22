"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { categories, cities, eventImageOptions } from "@/data/events";
import type { EventCategory, EventItem } from "@/types";

type DashboardEventsManagerProps = {
  customEvents: EventItem[];
  onAdd: (event: EventItem) => void;
  onDelete: (eventId: string) => void;
};

const inputClass = "w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-bold text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300/60 focus:ring-4 focus:ring-teal-400/10";
const selectClass = inputClass;

const createSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[\u064B-\u065F]/g, "")
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, "-")
    .replace(/^-+|-+$/g, "") || "event";

export default function DashboardEventsManager({ customEvents, onAdd, onDelete }: DashboardEventsManagerProps) {
  const [form, setForm] = useState({
    title: "",
    category: "حفلات" as EventCategory,
    city: "القاهرة",
    venue: "",
    date: "",
    time: "08:00 مساءً",
    price: "250",
    availableTickets: "100",
    image: eventImageOptions[0].value,
    description: "",
    featured: true
  });
  const [message, setMessage] = useState("");

  const selectedImage = useMemo(() => eventImageOptions.find((item) => item.value === form.image) || eventImageOptions[0], [form.image]);

  const updateField = (name: string, value: string | boolean) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!form.title.trim() || !form.venue.trim() || !form.date || !form.description.trim()) {
      setMessage("املأ اسم الفعالية والمكان والتاريخ والوصف قبل الإضافة.");
      return;
    }

    const price = Number(form.price);
    const availableTickets = Number(form.availableTickets);

    if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(availableTickets) || availableTickets <= 0) {
      setMessage("السعر وعدد التذاكر يجب أن يكونا أكبر من صفر.");
      return;
    }

    const newEvent: EventItem = {
      id: `admin-${createSlug(form.title)}-${Date.now()}`,
      title: form.title.trim(),
      category: form.category,
      city: form.city,
      venue: form.venue.trim(),
      date: form.date,
      time: form.time.trim(),
      price,
      availableTickets,
      image: form.image,
      description: form.description.trim(),
      featured: form.featured
    };

    onAdd(newEvent);
    setMessage("تمت إضافة الفعالية وحفظها محليًا. ستظهر مباشرة في صفحة الفعاليات والبحث.");
    setForm((current) => ({ ...current, title: "", venue: "", description: "" }));
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft md:p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold text-teal-300">إدارة الفعاليات</p>
          <h2 className="mt-2 text-2xl font-black text-white">إضافة فعالية جديدة</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">أي فعالية يضيفها الأدمن تتخزن في localStorage وتظهر للمستخدمين داخل نفس المتصفح.</p>
        </div>
        <span className="rounded-2xl border border-teal-300/20 bg-teal-400/10 px-4 py-2 text-sm font-black text-teal-200">
          {customEvents.length} فعالية مضافة من الأدمن
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <input className={inputClass} placeholder="اسم الفعالية" value={form.title} onChange={(event) => updateField("title", event.target.value)} />
          <input className={inputClass} placeholder="المكان / القاعة" value={form.venue} onChange={(event) => updateField("venue", event.target.value)} />

          <select className={selectClass} value={form.category} onChange={(event) => updateField("category", event.target.value as EventCategory)}>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>

          <select className={selectClass} value={form.city} onChange={(event) => updateField("city", event.target.value)}>
            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>

          <input type="date" className={inputClass} value={form.date} onChange={(event) => updateField("date", event.target.value)} />
          <input className={inputClass} placeholder="الوقت" value={form.time} onChange={(event) => updateField("time", event.target.value)} />

          <input type="number" min="1" className={inputClass} placeholder="السعر" value={form.price} onChange={(event) => updateField("price", event.target.value)} />
          <input type="number" min="1" className={inputClass} placeholder="عدد التذاكر" value={form.availableTickets} onChange={(event) => updateField("availableTickets", event.target.value)} />

          <select className={`${selectClass} md:col-span-2`} value={form.image} onChange={(event) => updateField("image", event.target.value)}>
            {eventImageOptions.map((image) => <option key={image.value} value={image.value}>{image.label}</option>)}
          </select>

          <textarea className={`${inputClass} min-h-28 resize-none md:col-span-2`} placeholder="وصف الفعالية" value={form.description} onChange={(event) => updateField("description", event.target.value)} />

          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200 md:col-span-2">
            <input type="checkbox" checked={form.featured} onChange={(event) => updateField("featured", event.target.checked)} className="h-4 w-4 accent-teal-400" />
            عرض الفعالية ضمن الفعاليات المميزة
          </label>

          {message && <p className="rounded-2xl border border-teal-300/20 bg-teal-400/10 px-4 py-3 text-sm font-bold text-teal-100 md:col-span-2">{message}</p>}

          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-teal-300 md:col-span-2">
            <FontAwesomeIcon icon={faCalendarPlus} /> إضافة الفعالية
          </button>
        </form>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={selectedImage.value} alt={selectedImage.label} fill className="h-full w-full object-cover object-center" />
            </div>
            <div className="p-4">
              <p className="text-sm font-bold text-teal-200">معاينة الصورة</p>
              <h3 className="mt-1 text-lg font-black text-white">{selectedImage.label}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">كل الصور محلية داخل public/assets/images ويتم استخدامها بدون أي رابط خارجي أثناء تشغيل الموقع.</p>
            </div>
          </div>

          <div className="max-h-72 space-y-3 overflow-y-auto pr-1 no-scrollbar">
            {customEvents.length ? customEvents.map((event) => (
              <div key={event.id} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={event.image} alt={event.title} fill className="h-full w-full object-cover object-center" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-1 text-sm font-black text-white">{event.title}</p>
                  <p className="text-xs text-slate-400">{event.city} - {event.category}</p>
                </div>
                <button type="button" onClick={() => onDelete(event.id)} className="grid h-9 w-9 place-items-center rounded-xl border border-rose-300/20 text-rose-200 transition hover:bg-rose-500 hover:text-white" aria-label="حذف الفعالية">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            )) : <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-400">لا توجد فعاليات مضافة من الأدمن حتى الآن.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
